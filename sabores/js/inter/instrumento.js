/* ══════════════════════════════════════════════════════════════════════
   4 SABORES · interacción «instrumento»
   op: { id, nom, img, loop, bpm, compases, patron?, color, vueltas=2, auto=true, espera=1.2 }
   Tarjeta grande con la imagen del instrumento y su nombre; debajo, una rejilla de 16 casillas (las semicorcheas de un
   compás, de 4 en 4 por tiempos) que se ilumina a tempo; las casillas con golpe van resaltadas (X fuerte, x suave).
   Sin `patron`: en vez de rejilla, una barra de nivel que reacciona al audio (AnalyserNode).
   Suena el loop `vueltas` veces y la interacción se resuelve sola (`espera` s después; auto:false = hay que pulsar «Seguir»).
   «Otra vez» (o R) vuelve a sonar; «Seguir» (o Espacio/Intro) resuelve al momento.
   ══════════════════════════════════════════════════════════════════════ */
'use strict';
(function (B) {
  const S = B.s4, U = B.iu;
  const ETQ = ['e', 'y', 'a'];
  B.inter.instrumento = async function (caja, op) {
    const ctl = op.ctl || B.control();
    caja.classList.add('s4', 's4-instrumento'); S.sinFoco(caja);
    const bpm = op.bpm || 90, comp = op.compases || 4, L = S.durLoop(bpm, comp), vueltas = Math.max(1, op.vueltas || 2);
    const auto = op.auto !== false, espera = op.espera == null ? 1.2 : op.espera;
    const color = S.color(op.color, 0), nom = op.nom || op.id || '';
    const pat = S.parsePatron(op.patron);
    const dCompas = 240 / bpm;

    /* ── piezas ── */
    caja.appendChild(B.el('div', 's4-fondo'));
    const centro = B.el('div', 's4-centro'); caja.appendChild(centro);
    centro.style.setProperty('--c', color);
    const tarjeta = B.el('div', 's4-tarjeta'); centro.appendChild(tarjeta);
    const foto = B.el('div', 's4-foto'); foto.appendChild(S.imagen(op.img, nom, color));   // (27-oct, Iago) sin cuadrado de color: el PNG recortado
    /* (27-oct noche, Iago: «el instrumento no cambia de lugar: se le presenta y se le anima en el mismo sitio» y «a tamaño real, el bajo
       acostado») si el instrumento tiene caja en BLUES.CAPAS.tam, la foto va en esa misma caja de la pantalla (la de las capas) */
    const tam = B.CAPAS && B.CAPAS.tam && B.CAPAS.tam[op.img];
    if (tam) { caja.classList.add('s4-tam'); caja.style.setProperty('--tx', tam.x); caja.style.setProperty('--ty', tam.y); caja.style.setProperty('--tw', tam.w); caja.style.setProperty('--th', tam.h); }
    tarjeta.appendChild(foto);
    const pieT = B.el('div', 's4-tpie'); tarjeta.appendChild(pieT);
    const nm = B.el('div', 's4-nombre'); nm.textContent = nom; pieT.appendChild(nm);
    nm.style.fontSize = 'calc(var(--u)*' + Math.max(1.5, Math.min(2.5, 20 / (Math.max(1, nom.length) * .8))).toFixed(2) + ')';   // los nombres largos se encogen para caber
    let pips = null;
    if (comp > 1) {
      pips = B.el('div', 's4-pips');
      for (let k = 0; k < comp; k++) pips.appendChild(B.el('i'));
      foto.appendChild(pips);
    }

    let celdas = [], segs = [], rej = null, niv = null;
    if (pat) {
      rej = B.el('div', 's4-rej'); centro.appendChild(rej);
      rej.style.setProperty('--cs', S.mezclaColor(color, S.PAL.arena, .55));
      for (let g = 0; g < 4; g++) {
        const gr = B.el('div', 's4-gr');
        for (let k = 0; k < 4; k++) {
          const col = B.el('div', 's4-ce');
          const c = B.el('div', 's4-c'); const et = B.el('div', 's4-et' + (k === 0 ? ' num' : '')); et.textContent = k === 0 ? String(g + 1) : ETQ[k - 1];
          col.appendChild(c); col.appendChild(et); gr.appendChild(col); celdas.push(c);
        }
        rej.appendChild(gr);
      }
    } else {
      niv = B.el('div', 's4-nivel'); centro.appendChild(niv);
      for (let k = 0; k < 40; k++) { const s = B.el('i', k >= 34 ? 'alto' : ''); niv.appendChild(s); segs.push(s); }
    }
    const carga = B.el('div', 's4-carga', 'Cargando…'); caja.appendChild(carga);
    const pie = B.el('div', 'i-pie'); caja.appendChild(pie);
    const bOtra = U.boton('↺ Otra vez', '', () => reproduce()); bOtra.dataset.tip = 'Otra vez (R)';
    pie.appendChild(bOtra);

    /* ── estado de la reproducción ── */
    let est = null, gen = 0, limpio = false, nivAnt = 0, cargado = false;
    let resolver = null;
    const fin = new Promise(r => { resolver = r; });
    const pintaCompas = c => { if (pips) { const is = pips.children; for (let j = 0; j < is.length; j++) is[j].classList.toggle('act', j === c); } };
    const apagaRejilla = () => { celdas.forEach(c => c.classList.remove('act', 'golpe')); pintaCompas(-1); segs.forEach(s => s.classList.remove('on')); nivAnt = 0; };
    let pAnt = -1, cAnt = -1;
    const pintaPatron = c => {
      const P = pat[c % pat.length];
      celdas.forEach((ce, i) => { ce.classList.toggle('h2', P[i] === 2); ce.classList.toggle('h1', P[i] === 1); });
    };
    if (pat) pintaPatron(0);

    async function reproduce() {
      if (limpio) return;
      const mia = ++gen;
      if (est) { est.m.parar(.04); est = null; apagaRejilla(); pAnt = -1; cAnt = -1; }
      const m = B.mezcla.crea({ bpm, compases: comp, pistas: [{ id: 'p', nom, loop: op.loop, color, vol: op.vol }], inicial: ['p'] });
      if (!cargado) {
        const tc = setTimeout(() => carga.classList.add('on'), 160);
        await m.cargar();
        clearTimeout(tc); carga.classList.remove('on');
      } else await m.cargar();
      cargado = true;
      if (limpio || mia !== gen) { m.parar(0); return; }
      const cu = m.arrancar(B.ac().currentTime + .12);
      m.pararEn(vueltas * L, .03);
      est = { m, cu, mia };
      B.inter.instrumento.ultimo = est;      // gancho de pruebas
      B.enTiempo(cu + vueltas * L + espera, () => { if (auto && mia === gen && !limpio) resolver('auto'); }, ctl);
    }

    /* reloj visual: casilla actual (semicorchea), compás y nivel */
    const quitaF = B.alFotograma(t => {
      const e = est; if (!e) return;
      const x = t - S.lat() - e.cu;
      if (x < 0 || x >= vueltas * L) { if (pAnt !== -1 || cAnt !== -1 || nivAnt) { apagaRejilla(); pAnt = -1; cAnt = -1; } return; }
      const p = x % L, c = Math.floor(p / dCompas) % comp;
      if (c !== cAnt) { cAnt = c; pintaCompas(c); if (pat) pintaPatron(c); }
      if (pat) {
        const s = Math.min(15, Math.floor((p - c * dCompas) / (dCompas / 16)));
        if (s !== pAnt) {
          if (pAnt >= 0) celdas[pAnt].classList.remove('act', 'golpe');
          pAnt = s; const ce = celdas[s]; ce.classList.add('act');
          if (ce.classList.contains('h1') || ce.classList.contains('h2')) ce.classList.add('golpe');
        }
      } else {
        const lv = e.m.nivel('p');
        nivAnt = lv > nivAnt ? lv : nivAnt * .88 + lv * .12;
        const n = Math.round(Math.min(1, nivAnt * (op.nivK || 1)) * segs.length);   // (27-oct) nivK < 1: el bajo no se queda siempre arriba
        for (let j = 0; j < segs.length; j++) segs[j].classList.toggle('on', j < n);
      }
    });
    const quitaK = B.captura.poner(e => { if (!e.repeat && (e.key === 'r' || e.key === 'R')) { reproduce(); return true; } return false; });

    /* limpieza (idempotente): al resolverse o si el motor cancela */
    const limpia = () => {
      if (limpio) return; limpio = true; gen++;
      quitaF(); quitaK();
      if (est) { est.m.parar(.15); est = null; }
      resolver(null);
    };
    ctl.alMorir.push(limpia);

    reproduce();
    try { await Promise.race([U.seguir(caja, ctl, 'Seguir', pie), fin]); }
    finally { limpia(); }
  };
  B.inter.instrumento.recursos = op => S.recursosDe('instrumento', op);
})(window.BLUES);

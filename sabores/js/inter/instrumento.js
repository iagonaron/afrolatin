/* ══════════════════════════════════════════════════════════════════════
   4 SABORES · interacción «instrumento»
   op: { id, nom, img, loop, bpm, compases, patron?, color, vueltas=2, auto=true, espera=1.2 }
   Tarjeta grande con la imagen del instrumento y su nombre; debajo, una rejilla de 16 casillas (las semicorcheas de un
   compás, de 4 en 4 por tiempos) que se ilumina a tempo; las casillas con golpe van resaltadas (X fuerte, x suave).
   Sin `patron`: en vez de rejilla, una barra de nivel que reacciona al audio (AnalyserNode).
   Suena el loop `vueltas` veces y la interacción se resuelve sola (`espera` s después; auto:false = hay que pulsar «Seguir»).
   «Otra vez» (o R) vuelve a sonar; «Seguir» (o Espacio/Intro) resuelve al momento.
   op.luego = { nom, img, loop, vueltas? } (Iago 29-oct 20:56, «cuando pasa de pailas a cencerro, que no haya pausa: que siga el siguiente
   pulso, como sería en una canción»): al acabar el loop, el segundo entra JUSTO en el compás siguiente (mismo reloj de audio) y cambian
   la imagen y el nombre en ese instante; la claqueta sigue sin cortarse.
   ══════════════════════════════════════════════════════════════════════ */
'use strict';
(function (B) {
  const S = B.s4, U = B.iu;
  const ETQ = ['e', 'y', 'a'];
  B.inter.instrumento = async function (caja, op) {
    const ctl = op.ctl || B.control();
    caja.classList.add('s4', 's4-instrumento'); S.sinFoco(caja);
    const escE = document.getElementById('escena'); if (escE) escE.classList.add('inter-espera');   // el PNG de la frase sigue a la vista hasta que este pinta (capas4s.js: interLista)
    const bpm = op.bpm || 90, comp = op.compases || 4, L = S.durLoop(bpm, comp), v1 = Math.max(.25, op.vueltas || 2);
    const LG = op.luego || null, v2 = LG ? Math.max(.25, LG.vueltas || v1) : 0, vueltas = v1 + v2;   // vueltas: las de los dos juntos   // (28-oct 12:46, Iago: «los patrones se me hacen largos: ponlos a la mitad») vale media vuelta
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
    { const im0 = foto.querySelector('img'); let ya = false;
      const lista = () => { if (ya) return; ya = true; requestAnimationFrame(() => requestAnimationFrame(() => { if (B.capas && B.capas.interLista) B.capas.interLista(); else if (escE) escE.classList.remove('inter-espera'); })); };
      if (im0) { const d = im0.decode ? im0.decode() : null; if (d) d.then(lista, lista); else if (im0.complete) lista(); else { im0.addEventListener('load', lista, { once: true }); im0.addEventListener('error', lista, { once: true }); } } else lista();
      setTimeout(lista, 1500); }
    /* (28-oct 19:23, Iago: «cuando suenan güira y bongó, que salgan los iconos de los dos») op.img2: el segundo instrumento, al lado */
    /* (28-oct, Sabor 3) op.imgs: varios a la vez (tamborim + caixa + pandeiro; la batucada entera) */
    const extra = op.imgs || (op.img2 ? [op.img2] : []);
    if (extra.length) { foto.classList.add('dos'); if (extra.length > 1) foto.classList.add('tres'); extra.forEach(x => foto.appendChild(S.imagen(x, nom, color))); }
    /* (27-oct noche, Iago: «el instrumento no cambia de lugar: se le presenta y se le anima en el mismo sitio» y «a tamaño real, el bajo
       acostado») si el instrumento tiene caja en BLUES.CAPAS.tam, la foto va en esa misma caja de la pantalla (la de las capas) */
    const tam = !extra.length && B.CAPAS && B.CAPAS.tam && B.CAPAS.tam[op.img];
    const ponTam = t => { caja.classList.toggle('s4-tam', !!t); if (!t) return; caja.style.setProperty('--tx', t.x); caja.style.setProperty('--ty', t.y); caja.style.setProperty('--tw', t.w); caja.style.setProperty('--th', t.h); if (t.ry != null) caja.style.setProperty('--ry', t.ry); else caja.style.removeProperty('--ry'); };
    if (tam) { caja.classList.add('s4-tam'); caja.style.setProperty('--tx', tam.x); caja.style.setProperty('--ty', tam.y); caja.style.setProperty('--tw', tam.w); caja.style.setProperty('--th', tam.h); if (tam.ry != null) caja.style.setProperty('--ry', tam.ry); }
    tarjeta.appendChild(foto);
    const pieT = B.el('div', 's4-tpie'); tarjeta.appendChild(pieT);
    const nm = B.el('div', 's4-nombre'); nm.textContent = nom; pieT.appendChild(nm);
    const tamNom = s => { nm.style.fontSize = 'calc(var(--u)*' + Math.max(1.5, Math.min(2.5, 20 / (Math.max(1, s.length) * .8))).toFixed(2) + ')'; };   // los nombres largos se encogen para caber
    tamNom(nom);
    /* op.luego: cambiar de instrumento en el sitio (la foto, el nombre y su caja de tamaño real) */
    const im1 = foto.firstChild; let im2 = null, enSegundo = false;
    if (LG) { im2 = S.imagen(LG.img, LG.nom || nom, color); if (im2.decode) im2.decode().catch(() => { }); }   // descodificada ya: el cambio, sin fotograma vacío
    /* (Iago 30-oct 07:34: «que sea más claro el paso de estrofa a estribillo: el selector como después, pero arriba y automático, para que el
       alumno vea que es el mismo percusionista») op.secciones = ['Estrofa', 'Estribillo']: el selector de «Arma la banda», arriba, que cambia solo */
    let selSec = null;
    if (LG && B.arr(op.secciones).length === 2) {
      selSec = B.el('div', 's4-sel-auto'); op.secciones.forEach((x, k) => { const e = B.el('span', k === 0 ? 'on' : ''); e.textContent = x; selSec.appendChild(e); });
      caja.appendChild(selSec);
    }
    const aSegundo = si => {
      if (!LG || si === enSegundo) return; enSegundo = si;
      if (selSec) B.$$('span', selSec).forEach((e, k) => e.classList.toggle('on', k === (si ? 1 : 0)));
      if (si) { if (!im2) im2 = S.imagen(LG.img, LG.nom || nom, color); im1.replaceWith(im2); nm.textContent = LG.nom || nom; tamNom(LG.nom || nom); ponTam(B.CAPAS && B.CAPAS.tam && B.CAPAS.tam[LG.img]); }
      else { im2.replaceWith(im1); nm.textContent = nom; tamNom(nom); ponTam(tam); }
    };
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
    /* (28-oct 19:13, Iago: «quiero algún apunte en la parte animada cuando hay tresillo… tres semicorcheas de tresillo») una T en el
       patrón = tresillo de semicorcheas en esa corchea (esta casilla y la siguiente): tres golpecitos bajo una llave con un 3 */
    let tresAct = null;
    const pintaPatron = c => {
      const P = pat[c % pat.length];
      celdas.forEach((ce, i) => {
        ce.classList.toggle('h2', P[i] === 2); ce.classList.toggle('h1', P[i] === 1);
        const t = P[i] === 3, t2 = i > 0 && P[i - 1] === 3;
        ce.classList.toggle('tres', t); ce.classList.toggle('tres2', t2);
        let ov = ce.querySelector('.s4-tresillo');
        if (t && !ov) { ov = B.el('div', 's4-tresillo'); ov.appendChild(B.el('b')); for (let k = 0; k < 3; k++) ov.appendChild(B.el('i')); ce.appendChild(ov); }
        if (!t && ov) ov.remove();
      });
    };
    if (pat) pintaPatron(0);

    async function reproduce() {
      if (limpio) return;
      const mia = ++gen;
      if (est) { est.m.parar(.04); if (est.m2) est.m2.parar(.04); paraClaq(est); est = null; apagaRejilla(); pAnt = -1; cAnt = -1; }
      aSegundo(false);
      const m = B.mezcla.crea({ bpm, compases: comp, pistas: [{ id: 'p', nom, loop: op.loop, color, vol: op.vol }], inicial: ['p'] });
      const m2 = LG ? B.mezcla.crea({ bpm, compases: comp, pistas: [{ id: 'p', nom: LG.nom || nom, loop: LG.loop, color, vol: LG.vol == null ? op.vol : LG.vol }], inicial: ['p'] }) : null;
      if (!cargado) {
        const tc = setTimeout(() => carga.classList.add('on'), 160);
        await Promise.all([m.cargar(), m2 ? m2.cargar() : null]);
        clearTimeout(tc); carga.classList.remove('on');
      } else await Promise.all([m.cargar(), m2 ? m2.cargar() : null]);
      cargado = true;
      if (limpio || mia !== gen) { m.parar(0); if (m2) m2.parar(0); return; }
      const cu = m.arrancar(B.ac().currentTime + .12);
      m.pararEn(v1 * L, .03);
      if (m2) { m2.arrancar(cu + v1 * L); m2.pararEn(v2 * L, .03); B.enTiempo(cu + v1 * L + S.lat(), () => { if (mia === gen && !limpio) aSegundo(true); }, ctl); }
      /* (28-oct, Iago: «en la parte en la que nos muestra los instrumentos, que haya claqueta marcando el pulso») un golpe de baqueta en
         cada tiempo (más fuerte en el 1 de cada compás), en el reloj del audio y en su propio canal para poder cortarlo */
      let claq = null;
      if (op.claqueta !== false && B.sint && B.sint.baqueta) {
        const C = B.ac(); claq = C.createGain(); claq.gain.value = op.volClaq == null ? .9 : op.volClaq; claq.connect((B.bus && B.bus.sfx) || C.destination);
        const p = 60 / bpm, n = Math.round(vueltas * comp * 4);
        /* (28-oct 20:44, Iago: «que suene la claqueta también en el bolero, y en todos») con maracas o güira, la baqueta sola se confundía con
           ellas (el mismo ruido agudo en el mismo sitio): ahora lleva además un «tic» afinado (más agudo en el 1), que se oye encima de todo */
        const tic = (t, f) => { const o = C.createOscillator(), g = C.createGain(); o.type = 'sine'; o.frequency.value = f ? 1760 : 1320;
          g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(f ? .26 : .17, t + .002); g.gain.exponentialRampToValueAtTime(.0005, t + .055);
          o.connect(g); g.connect(claq); o.start(t); o.stop(t + .07); };
        for (let k = 0; k < n; k++) { B.sint.baqueta(cu + k * p, k % 4 === 0 ? .62 : .36, claq); tic(cu + k * p, k % 4 === 0); }
      }
      est = { m, m2, cu, mia, claq };
      B.inter.instrumento.ultimo = est;      // gancho de pruebas
      B.enTiempo(cu + vueltas * L + espera, () => { if (auto && mia === gen && !limpio) resolver('auto'); }, ctl);
    }

    function paraClaq(e) { const g = e && e.claq; if (!g) return; try { g.gain.setTargetAtTime(0, B.ac().currentTime, .01); } catch (x) { } setTimeout(() => { try { g.disconnect(); } catch (x) { } }, 400); e.claq = null; }
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
        /* el tresillo: se enciende cada uno de sus tres golpecitos a su tiempo */
        const ce0 = celdas[s].classList.contains('tres') ? celdas[s] : (s > 0 && celdas[s].classList.contains('tres2') ? celdas[s - 1] : null);
        const ov = ce0 && ce0.querySelector('.s4-tresillo');
        if (ov) { const i0 = celdas.indexOf(ce0), d16 = dCompas / 16, k = Math.max(0, Math.min(2, Math.floor((p - c * dCompas - i0 * d16) / (d16 * 2 / 3)))); [...ov.querySelectorAll('i')].forEach((x, j) => x.classList.toggle('on', j === k)); tresAct = ov; }
        else if (tresAct) { tresAct.querySelectorAll('i').forEach(x => x.classList.remove('on')); tresAct = null; }
      } else {
        const lv = (enSegundo && e.m2 ? e.m2 : e.m).nivel('p');
        nivAnt = lv > nivAnt ? lv : nivAnt * .88 + lv * .12;
        const n = Math.round(Math.min(1, nivAnt * (op.nivK || 1)) * segs.length);   // (27-oct) nivK < 1: el bajo no se queda siempre arriba
        for (let j = 0; j < segs.length; j++) segs[j].classList.toggle('on', j < n);
      }
    });
    const quitaK = B.captura.poner(e => { if (!e.repeat && (e.key === 'r' || e.key === 'R')) { reproduce(); return true; } return false; });

    /* limpieza (idempotente): al resolverse o si el motor cancela */
    const limpia = () => {
      if (limpio) return; limpio = true; gen++;
      if (escE) escE.classList.remove('inter-espera');
      quitaF(); quitaK();
      if (est) { est.m.parar(.15); if (est.m2) est.m2.parar(.15); paraClaq(est); est = null; }
      resolver(null);
    };
    ctl.alMorir.push(limpia);

    reproduce();
    try { await Promise.race([U.seguir(caja, ctl, 'Seguir', pie), fin]); }
    finally { limpia(); }
  };
  B.inter.instrumento.recursos = op => S.recursosDe('instrumento', op);
})(window.BLUES);

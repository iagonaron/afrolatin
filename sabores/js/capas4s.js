/* ══════════════════════════════════════════════════════════════════════
   4 SABORES · CAPAS ANIMADAS sobre las láminas (C1, 27-oct-2026 · Iago: «no necesito el texto de lo que digo; que haya
   animaciones, palabras clave en el medio de la pantalla, esquemas… y los maestros de ceremonia en PNG»).
   Datos: data/capas_sN.js →  B.CAPAS = { planos: { id: { pj } }, lineas: { idFrase: [ capa, … ] } }
   Una capa (todas opcionales; `en` = momento de la frase en fracción de su duración, 0–1):
     { claves: ['A', '+', 'B'], estilo: 'fila'|'lista', en }      palabras clave en el centro, una tras otra
     { pj: { q: 'CANDE', pose: 'pulgar', lado: 'der'|'izq', alto }, en }   el maestro de ceremonias en PNG (pj: null lo quita)
     { img: 'img/…png', nom, x, y, h, en, fuera }                  una imagen suelta (instrumento en PNG) que entra
     { flechas: [{ de: [x, y], a: [x, y], comba, en }], col }      flechas que se dibujan (mapas), en fracciones de la lámina
     { rotulos: [{ txt, x, y, en, tam }] }                         rótulos que aparecen (mapas)
   Sin subtítulos: el motor solo los enseña si la frase trae `subt: true` (las letras de las canciones van en su concierto).
   ══════════════════════════════════════════════════════════════════════ */
'use strict';
(function (B) {
  const C = B.capas = {};
  let capa = null, pjEl = null, pjAct = null, clavesEl = null, sueltas = []; let veloAnt = null;
  const PJ = q => (B.CAPAS && B.CAPAS.poses && B.CAPAS.poses[q]) || {};
  const NS = 'http://www.w3.org/2000/svg';
  function asegura() {
    if (capa && capa.isConnected) return capa;
    const esc = document.getElementById('escena'), pel = document.getElementById('pelicula');
    capa = B.el('div', 'c4-capa'); capa.id = 'capas4s';
    if (pel && pel.nextSibling) esc.insertBefore(capa, pel.nextSibling); else esc.appendChild(capa);
    return capa;
  }
  const url = r => (B.img && B.img[r]) || r;
  /* ── maestro de ceremonias en PNG ── */
  function ponPj(o) {
    asegura();
    if (!o) { if (pjEl) { pjEl.remove(); pjEl = null; pjAct = null; } return; }
    const q = o.q || (pjAct && pjAct.q), poses = PJ(q), pose = o.pose || (pjAct && pjAct.q === q && pjAct.pose) || poses._ || Object.keys(poses).find(k => k !== '_');
    const src = poses[pose] || poses[poses._]; if (!src) return;
    const lado = o.lado || (pjAct && pjAct.lado) || 'der', alto = o.alto || (pjAct && pjAct.alto) || .82;
    if (pjEl && pjAct && pjAct.q === q && pjAct.lado === lado && pjAct.pose === pose) return;
    const mismo = pjEl && pjAct && pjAct.q === q && pjAct.lado === lado;
    const im = B.el('img', 'c4-pj ' + lado + (mismo ? ' cambio' : '')); im.src = url(src); im.alt = ''; im.draggable = false;
    im.style.setProperty('--alto', alto);
    capa.appendChild(im); void im.offsetWidth; im.classList.add('on');
    if (pjEl) pjEl.remove();   // (27-oct 22:28, Iago) el cambio de reacción es súbito, sin fundido
    pjEl = im; pjAct = { q, pose, lado, alto };
    capa.classList.toggle('pj-izq', lado === 'izq'); capa.classList.toggle('pj-der', lado === 'der');
  }
  /* ── palabras clave ── */
  let fijos = [];
  function ponClaves(it, dur, c) {
    asegura();
    /* (27-oct noche, Iago: en el resumen, «el texto en su lado, y que se quede, como una recopilación de repasos») fijo: no se quita al
       cambiar de frase (solo al cambiar de plano); lado: 'izq' | 'der' */
    if (!it.fijo) quitaClaves();
    const box = B.el('div', 'c4-claves ' + (it.estilo || 'fila') + (it.fijo ? ' fijo' : '') + (it.lado ? ' ' + it.lado : ''));
    if (it.fijo) fijos.push(box); else clavesEl = box; capa.appendChild(box);
    const xs = B.arr(it.claves), n = xs.length, t0 = it.t != null ? it.t : (it.en || 0) * dur, t1 = Math.max(t0 + .2, (it.hasta == null ? .62 : it.hasta) * dur);
    xs.forEach((x, i) => {
      const sep = x === '+' || x === '=' || x === '→' || x === '·';
      /* (27-oct 23:22, Iago: «que alguno sea en título grande… con una tipografía complementaria, fina, tipo Gotham») estilo 'titulo':
         el primer trozo, titular grande; los demás, subtítulo fino en mayúsculas espaciadas */
      const cls = sep ? 'c4-sep' : it.estilo === 'titulo' ? (i === 0 ? 'c4-clave c4-tit' : 'c4-clave c4-subt') : 'c4-clave';
      const ch = B.el('span', cls); ch.textContent = x; box.appendChild(ch);
      const t = it.ts ? it.ts[i] : n > 1 ? t0 + (t1 - t0) * i / (n - 1) : t0;   // (27-oct noche) it.ts: segundo exacto de cada palabra en el audio
      B.espera(t, c).then(ok => { if (ok && box.isConnected) ch.classList.add('on'); });
    });
  }
  function quitaClaves(ya) { if (clavesEl) { const v = clavesEl; if (ya) v.remove(); else { v.classList.add('sale'); setTimeout(() => v.remove(), 450); } clavesEl = null; } }
  /* ── imagen suelta (instrumento en PNG) ── */
  function ponImg(it, c) {
    asegura();
    if (it.solo !== false) quitaSueltas();
    const tam = it.caja && B.CAPAS && B.CAPAS.tam && B.CAPAS.tam[it.img];   // (27-oct noche) caja de «tamaño real», la misma de la interacción
    const w = B.el('div', 'c4-suelta' + (tam ? ' caja' : ''));
    if (tam) { w.style.setProperty('--x', tam.x); w.style.setProperty('--y', tam.y); w.style.setProperty('--w', tam.w); w.style.setProperty('--h', tam.h); }
    else { w.style.setProperty('--x', it.x == null ? .5 : it.x); w.style.setProperty('--y', it.y == null ? .5 : it.y); w.style.setProperty('--h', it.h || .5); }
    const im = B.el('img'); im.src = url(it.img); im.alt = it.nom || ''; w.appendChild(im);
    if (it.nom) { const nm = B.el('b'); nm.textContent = it.nom; if (it.tn) nm.style.fontSize = 'calc(var(--u)*' + it.tn + ')'; w.appendChild(nm); }
    capa.appendChild(w); void w.offsetWidth; w.classList.add('on'); sueltas.push(w);
  }
  function quitaSueltas() { sueltas.splice(0).forEach(v => v.remove()); }   // (27-oct 23:20, Iago) de golpe: ni un fotograma de lo anterior (las rejillas del puzle se veían medio segundo)
  /* ── flechas y rótulos (mapas) ── */
  let svg = null;
  function asegSvg() {
    asegura();
    if (svg && svg.isConnected) return svg;
    svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '0 0 100 56.25'); svg.setAttribute('preserveAspectRatio', 'none'); svg.setAttribute('class', 'c4-svg');
    const defs = document.createElementNS(NS, 'defs');
    defs.innerHTML = '<marker id="c4pk" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="context-stroke"/></marker>';
    svg.appendChild(defs); capa.appendChild(svg); return svg;
  }
  function ponFlechas(it, dur, c) {
    const s = asegSvg();
    B.arr(it.flechas).forEach(f => {
      const [x0, y0] = [f.de[0] * 100, f.de[1] * 56.25], [x1, y1] = [f.a[0] * 100, f.a[1] * 56.25], k = f.comba == null ? .2 : f.comba;
      const mx = (x0 + x1) / 2 + (y1 - y0) * k, my = (y0 + y1) / 2 - (x1 - x0) * k;
      const p = document.createElementNS(NS, 'path'); p.setAttribute('d', `M${x0} ${y0} Q${mx} ${my} ${x1} ${y1}`); p.setAttribute('class', 'c4-flecha');
      if (it.col || f.col) p.style.stroke = f.col || it.col;
      p.setAttribute('marker-end', 'url(#c4pk)'); s.appendChild(p);
      const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L;
      B.espera(f.t != null ? f.t : (f.en == null ? (it.en || 0) : f.en) * dur, c).then(ok => { if (ok && p.isConnected) { p.style.transition = 'stroke-dashoffset ' + (f.tarda || 1.6) + 's cubic-bezier(.45,.05,.3,1)'; p.style.strokeDashoffset = 0; } });
    });
  }
  function ponRotulos(it, dur, c) {
    asegura();
    B.arr(it.rotulos).forEach(r => {
      const d = B.el('div', 'c4-rotulo' + (r.clase ? ' ' + r.clase : '')); d.textContent = r.txt;
      d.style.setProperty('--x', r.x); d.style.setProperty('--y', r.y); if (r.tam) d.style.setProperty('--tam', r.tam);
      capa.appendChild(d); sueltas.push(d);
      B.espera(r.t != null ? r.t : (r.en == null ? (it.en || 0) : r.en) * dur, c).then(ok => { if (ok && d.isConnected) d.classList.add('on'); });
    });
  }
  /* ── rejillas: varios patrones de 16 casillas que se encienden a la vez, como piezas de un puzle (intro «el ritmo manda») ── */
  let rejT = null;
  function ponRejillas(it, dur, c) {
    asegura();
    const box = B.el('div', 'c4-rejillas'); capa.appendChild(box); sueltas.push(box);
    const filas = B.arr(it.rejillas).map((f, i) => {
      const row = B.el('div', 'c4-rf'); row.style.setProperty('--c', f.color || '#F2C46A');
      const nm = B.el('b'); nm.textContent = f.nom || ''; row.appendChild(nm);
      const cs = []; const pat = String(f.patron || '').replace(/\s+/g, '');
      for (let k = 0; k < 16; k++) { const ce = B.el('i', (k % 4 === 0 ? 'tp ' : '') + (pat[k] === 'X' ? 'h2' : pat[k] === 'x' ? 'h1' : '')); row.appendChild(ce); cs.push(ce); }
      box.appendChild(row);
      B.espera(it.ts ? it.ts[i] : ((it.en || 0) + (it.paso || .14) * i) * dur, c).then(ok => ok && row.classList.add('on'));
      return cs;
    });
    const bpm = it.bpm || 96, t0 = performance.now();
    if (rejT) cancelAnimationFrame(rejT);
    let ant = -1;
    const tic = () => {
      if (!box.isConnected) return;
      if (!B.pausado) { const s16 = Math.floor((performance.now() - t0) / 1000 / (15 / bpm)) % 16; if (s16 !== ant) { filas.forEach(cs => { if (ant >= 0) cs[ant].classList.remove('act'); cs[s16].classList.add('act'); }); ant = s16; } }
      rejT = requestAnimationFrame(tic);
    };
    rejT = requestAnimationFrame(tic);
  }
  /* ── lo llama el motor ── */
  C.plano = function (p) {
    asegura(); quitaClaves(true); quitaSueltas(); fijos.splice(0).forEach(v => v.remove());
    if (svg) { svg.remove(); svg = null; }
    const d = B.CAPAS && B.CAPAS.planos && B.CAPAS.planos[p.id];
    if (d && 'pj' in d) ponPj(d.pj); else ponPj(null);
    capa.dataset.plano = p.id; capa.classList.toggle('oscuro', !!(d && d.oscuro));
    /* (27-oct 23:20, Iago: «cuando una imagen va a tener cosas encima, oscurécela un poco… pero que no se esté oscureciendo y aclarando
       constantemente») velo suave TODO el plano si en él salen imágenes sueltas o 3+ carteles; con el mismo fondo que el plano de antes,
       el velo se queda como estaba (no parpadea) */
    let n = 0, img = false;
    B.arr(p.lineas).concat(B.arr(p.despues)).forEach(l => { ((B.CAPAS && B.CAPAS.lineas && B.CAPAS.lineas[l.id]) || []).forEach(it => {
      if (it.img && !it.caja) img = true; if (it.claves) n += it.estilo === 'titulo' ? 3 : B.arr(it.claves).length; if (it.rotulos) n += it.rotulos.length; }); });
    let velo = !(d && d.oscuro) && (img || n >= 3 || !!(d && d.velo));
    if (!velo && veloAnt && veloAnt.img === p.img && !(d && d.oscuro)) velo = true;
    capa.classList.toggle('velo', velo); veloAnt = { img: p.img, velo };
    /* (27-oct 23:45) personajes de medio cuerpo: en los planos con instrumento, algo más pequeños para dejar sitio a la rejilla (todo el plano igual) */
    capa.classList.toggle('con-inst', B.arr(p.inter).some(x => x && x.tipo === 'instrumento'));
  };
  C.linea = function (l, dur, c) {
    const xs = (B.CAPAS && B.CAPAS.lineas && B.CAPAS.lineas[l.id]) || [];
    if (!xs.some(x => x.claves) && !xs.some(x => x.mantener)) quitaClaves();
    xs.forEach(it => {
      const t = it.t != null ? it.t : (it.en || 0) * dur;
      if ('pj' in it) B.espera(t, c).then(ok => ok && ponPj(it.pj));
      if (it.claves) ponClaves(it, dur, c);
      if (it.img) B.espera(t, c).then(ok => ok && ponImg(it, c));
      if (it.flechas) ponFlechas(it, dur, c);
      if (it.rotulos) ponRotulos(it, dur, c);
      if (it.rejillas) ponRejillas(it, dur, c);
    });
  };
  C.recursos = function () {
    const r = [], P = (B.CAPAS && B.CAPAS.poses) || {};
    Object.keys(P).forEach(q => Object.keys(P[q]).forEach(k => k !== '_' && r.push(P[q][k])));
    const L = (B.CAPAS && B.CAPAS.lineas) || {};
    Object.keys(L).forEach(k => B.arr(L[k]).forEach(it => it.img && r.push(it.img)));
    return r;
  };
  C.sinSubt = () => !!(B.CAPAS && B.CAPAS.sinSubtitulos);
  C.limpia = function () { quitaClaves(true); quitaSueltas(); fijos.splice(0).forEach(v => v.remove()); ponPj(null); if (svg) { svg.remove(); svg = null; } };
})(window.BLUES);

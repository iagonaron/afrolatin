/* ══════════════════════════════════════════════════════════════════════
   4 SABORES · piezas comunes de las interacciones nuevas
   (instrumento, mezclador, concierto, ejemplos). Se carga DESPUÉS de comun.js.
   B.s4 = recursos (audio/imagen con respaldo), baldosas provisionales, colores,
   patrones de rejilla, reloj visual compensado y pausa del motor.
   Todo el tiempo va con el reloj del AudioContext (B.ahora), igual que el motor:
   al pausar (B.pausa) se suspende el AudioContext y se congela todo a la vez.
   ══════════════════════════════════════════════════════════════════════ */
'use strict';
(function (B) {
  const S = B.s4 = B.s4 || {};

  /* paleta del portal (provisional) */
  S.PAL = { arena: '#F3E6C8', turquesa: '#1F9AA0', mostaza: '#E2A33F', terracota: '#C9603F', palmera: '#3E7D4F', tinta: '#1E1A16' };
  S.CICLO = [S.PAL.turquesa, S.PAL.mostaza, S.PAL.terracota, S.PAL.palmera];
  S.PRE = 0.5;                                         // margen (cola del loop) que lleva cada mp3 delante
  S.durLoop = (bpm, compases) => compases * 240 / bpm;  // 4/4

  /* ── colores ── */
  const rgb = h => { h = String(h).replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&'); return [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16)); };
  const hex = a => '#' + a.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  /* nombre de la paleta ('turquesa'…), '#rrggbb' / '#rgb', o el color del ciclo que toque */
  S.color = function (c, i) {
    if (c && S.PAL[c]) return S.PAL[c];
    if (typeof c === 'string' && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c)) return hex(rgb(c));
    return S.CICLO[(i || 0) % S.CICLO.length];
  };
  S.mezclaColor = (a, b, t) => { const x = rgb(a), y = rgb(b); return hex(x.map((v, i) => v + (y[i] - v) * t)); };
  S.rgba = (c, a) => { const x = rgb(c); return 'rgba(' + x[0] + ',' + x[1] + ',' + x[2] + ',' + a + ')'; };
  S.luz = c => { const x = rgb(c); return (.299 * x[0] + .587 * x[1] + .114 * x[2]) / 255; };
  S.sobre = c => S.luz(c) > .62 ? S.PAL.tinta : S.PAL.arena;   // texto legible sobre ese color

  /* ── recursos ──
     El motor precarga lo que le digan «recursos» de la interacción (B.buf / B.img). Si no está precargado, aquí se pide
     (y se guarda en B.buf). Si hay inventario (B.RECURSOS) y la ruta no figura, se da por ausente SIN pedirla
     (así no hay 404 en la consola, como en el resto del motor). */
  const enCurso = new Map();
  S.externa = r => /^(https?:)?\/\/|^(data|blob):/.test(String(r || ''));
  S.carga = function (ruta) {
    if (!ruta) return Promise.resolve(null);
    if (B.buf[ruta]) return Promise.resolve(B.buf[ruta]);
    if (enCurso.has(ruta)) return enCurso.get(ruta);
    if (B.RECURSOS && !B.existe(ruta) && !S.externa(ruta)) { console.warn('4 Sabores: audio no inventariado, se omite:', ruta); return Promise.resolve(null); }
    const p = (async () => {
      try {
        const r = await fetch(ruta);
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const ab = await r.arrayBuffer();
        const buf = await new Promise((ok, mal) => B.ac().decodeAudioData(ab, ok, mal));
        B.buf[ruta] = buf;
        return buf;
      } catch (e) { console.warn('4 Sabores: no se pudo cargar', ruta, e && e.message); return null; }
      finally { enCurso.delete(ruta); }
    })();
    enCurso.set(ruta, p);
    return p;
  };
  /* URL lista para <img>, o null si la imagen no existe */
  S.urlImg = function (r) {
    if (!r) return null;
    if (B.img[r]) return B.img[r];
    if (S.externa(r)) return r;
    return B.existe(r) ? r : null;
  };
  /* decodifica una imagen por adelantado (para que el cambio de plano no parpadee); resuelve true/false */
  S.listaImg = function (r) {
    const u = S.urlImg(r); if (!u) return Promise.resolve(false);
    return new Promise(res => { const im = new Image(); im.onload = () => res(true); im.onerror = () => res(false); im.src = u; if (im.decode) im.decode().then(() => res(true), () => { }); });
  };

  /* ── baldosa provisional: cuadrada, color liso y el nombre (si falta la imagen) ── */
  S.baldosa = function (nom, color, cls) {
    const d = B.el('div', 's4-bald' + (cls ? ' ' + cls : ''));
    d.style.setProperty('--c', color || S.PAL.turquesa);
    d.style.setProperty('--t', S.sobre(color || S.PAL.turquesa));
    const mayor = Math.max(4, ...String(nom || '').split(/\s+/).map(w => w.length));
    d.style.setProperty('--n', (mayor * .8).toFixed(2));
    const sp = B.el('span'); sp.textContent = nom || ''; d.appendChild(sp);
    return d;
  };
  /* imagen del instrumento o, si no hay / no carga, su baldosa */
  S.imagen = function (ruta, nom, color, cls) {
    const url = S.urlImg(ruta);
    if (!url) return S.baldosa(nom, color, cls);
    const im = new Image(); im.alt = nom || ''; im.draggable = false; im.className = 's4-img' + (cls ? ' ' + cls : '');
    im.addEventListener('error', () => { if (im.parentNode) im.replaceWith(S.baldosa(nom, color, cls)); });
    im.src = url;
    return im;
  };

  /* ── patrón de una rejilla: 'X.xx…' (16 por compás) separado por '|' → [[2,0,1,…16], …]  (X=2 fuerte, x=1 suave) ── */
  S.parsePatron = function (p) {
    if (!p || typeof p !== 'string') return null;
    const partes = p.split('|').map(s => s.replace(/\s+/g, '')).filter(Boolean);
    if (!partes.length) return null;
    return partes.map(s => { const a = s.split('').slice(0, 16).map(ch => ch === 'X' ? 2 : ch === 'x' ? 1 : 0); while (a.length < 16) a.push(0); return a; });
  };

  /* ── reloj visual: tiempo del AudioContext menos la latencia de salida (lo que se OYE ahora) ── */
  S.lat = function () {
    if (!B.hayAudio()) return 0;
    const C = B.ac(), l = C.outputLatency;
    return (typeof l === 'number' && isFinite(l) && l > 0) ? Math.min(l, .25) : (C.baseLatency || 0);
  };
  /* lo que hay que hacer cuando el motor se pausa/reanuda (vídeos, etc.); se quita solo al morir la interacción */
  S.alPausar = function (fn, ctl) {
    B.alPausar.push(fn);
    const quita = () => { const i = B.alPausar.indexOf(fn); if (i >= 0) B.alPausar.splice(i, 1); };
    if (ctl) ctl.alMorir.push(quita);
    return quita;
  };

  /* tras un clic de ratón/táctil el botón suelta el foco: así Espacio/Intro no lo vuelven a pulsar (con teclado no se toca) */
  S.sinFoco = function (caja) {
    caja.addEventListener('click', e => { const b = e.target.closest && e.target.closest('button'); if (b && e.detail > 0) b.blur(); }, true);
  };

  /* ── pequeños iconos (SVG, un solo trazo) ── */
  S.ICO = {
    otra: '<svg viewBox="0 0 24 24"><path d="M12 5V2L7 6.5 12 11V8a5 5 0 1 1-5 5H5a7 7 0 1 0 7-8z"/></svg>',
    cierra: '<svg viewBox="0 0 24 24"><path d="M5.3 3.9 12 10.6l6.7-6.7 1.4 1.4-6.7 6.7 6.7 6.7-1.4 1.4-6.7-6.7-6.7 6.7-1.4-1.4 6.7-6.7-6.7-6.7z"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z"/></svg>',
    visto: '<svg viewBox="0 0 24 24"><path d="M9.5 17.2 4.8 12.5l1.4-1.4 3.3 3.3 8.3-8.3 1.4 1.4z"/></svg>'
  };

  /* rutas que una interacción necesita (para poner en «recursos» del plano si se quiere precarga) */
  S.recursosDe = function (tipo, op) {
    op = op || {}; const r = [];
    const pistas = B.arr(op.pistas);
    if (tipo === 'instrumento') r.push(op.loop, op.img);
    else if (tipo === 'mezclador') pistas.forEach(p => r.push(p.loop, p.img));
    else if (tipo === 'concierto') { r.push(op.voz, op.cancion); pistas.forEach(p => r.push(p.loop, p.img)); B.arr(op.planos).forEach(p => r.push(p.img)); }
    return r.filter(Boolean);
  };
})(window.BLUES);

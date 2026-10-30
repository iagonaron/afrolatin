/* ══════════════════════════════════════════════════════════════════════
   4 SABORES · interacción «concierto»
   op: { voz?, cancion?, bpm, compases, pistas:[{id,nom,img,loop,color,vol}], bloques:[[ids]…], realce:[{t0,t1,pista,db}],
         planos:[{t,img,txt}], letra:[{t,txt,t1?}], fichas:[{t0,t1,tipo,…}], t0rejilla=0, vozGan=1, vozPre=0, fundido=2.5, auto=false }
   - Con `voz`: arranca a la vez la voz cantada y el arreglo EN VIVO (B.mezcla): en cada bloque (dura un loop) se
     encienden/apagan las pistas según `bloques`, todo programado con antelación en el reloj del AudioContext; los
     `realce` suben `db` a una pista entre t0 y t1 (rampas de 150 ms). Al final el arreglo hace un fundido de `fundido` s.
   - Sin `voz`: suena `cancion` (la mezcla completa). Sin ninguna de las dos suena solo el arreglo.
   - `planos` cambian la imagen de fondo en su marca t (fundido de 0,4 s; baldosa provisional con `txt` si falta la imagen).
   - `letra` = karaoke: la línea actual grande abajo, con una barra fina que se llena de izquierda a derecha hasta la t
     de la siguiente (o hasta `t1` de la propia línea, si lo lleva; la última sin t1 dura lo que la media de las anteriores,
     como mucho hasta el final), y la siguiente pequeña y tenue debajo. `txt:''` apaga la letra (silencio).
   - `fichas` = RESUMEN ANIMADO «cómo reconocer el género»: fichas sintéticas en un panel a la izquierda (≈ 40 % del ancho)
     que entran en t0 y salen en t1 (s desde el inicio de la canción), con la lámina de fondo oscurecida. Tipos:
       tempo         { bpm, txt, color? }                      «♩ ≈ bpm», el texto y un pie que late en cada negra
       rejilla       { nom?, img?, color, patron, txt }        16 semicorcheas (2 filas de 2 tiempos) que se iluminan a tempo
       contratiempo  { patron, txt, nom?, color? }             como rejilla, con «1 y 2 y 3 y 4 y» y los «y» resaltados
       instrumentos  { lista:[{nom,img?,color}], txt? }        baldosas que entran una a una (120 ms); sin img: iniciales
       texto         { txt, sub?, color? }                     una palabra o frase clave grande
     Si dos coinciden en el tiempo se apilan (y se reducen para caber). El patrón admite varios compases separados por «|».
   - Sincronía de las rejillas: `bpm` y `t0rejilla` (instante del primer tiempo fuerte en la canción, s; 0 por defecto):
     casilla = floor((t − t0rejilla) / (60/bpm/4)) mod 16, con t = reloj de la canción (el mismo de la letra y las fichas:
     reloj del AudioContext menos la latencia de salida; se congela con la pausa). Vale con `voz`+arreglo y con `cancion`.
   - Barra de progreso fina abajo; «Seguir» sirve para saltar y se destaca al acabar.
   - CICLO DE FONDOS (v3)   ciclo: { desde, cada = 5, imgs: [{ img, txt }] }
       Desde el segundo `desde` de la canción el fondo pasa de una imagen de `imgs` a la siguiente cada `cada` s (fundido de 0,6 s,
       en bucle) y los `planos` programados se ignoran. Si falta la imagen, baldosa provisional con `txt`. Si la canción acaba, el
       ciclo se queda donde estaba (no sigue dando vueltas). Mientras haya alguna ficha a la vista el velo oscuro sigue; sin ficha
       (con el ciclo en marcha) se quita con un fundido, para que las imágenes se vean con todo su color.
   - BOTONES DE CIERRE (v3)  botones: { desde, ejemplos: [{ src, tit, directo }], seguir = 'Siguiente parada', directo? }
       Sustituyen al «Seguir». Antes de `desde`: un botón pequeño, solo con el icono ⏭ (tooltip «Saltar»). Desde `desde` (o si la
       canción acaba antes): abajo a la derecha, sobre la barra de progreso, «Ejemplos reales» (▶ + texto, secundario) y el principal
       (`seguir`, mostaza); la letra se aparta hacia la izquierda para no quedar debajo.
         · Principal (y «Saltar», y Espacio/Intro): funde la canción a 0 en 1,2 s y resuelve la interacción.
         · «Ejemplos reales»: funde la canción a 0 en 1 s y la PARA (ya no vuelve), congela los fondos y la letra donde estaban y abre una
           ventana con el reproductor (empieza por el primer vídeo) y las miniaturas de todos. Se cierra con la ✕, con Esc o pulsando fuera;
           al cerrarla la pantalla se queda como estaba, con los dos botones, y se puede volver a abrir.
         · Si la canción acaba, NO se resuelve sola (tampoco con `auto`): se queda en el último plano con los dos botones.
       Sin `ejemplos`, solo sale el principal. La interacción solo se resuelve con el principal / «Saltar» / Espacio / Intro.
   - Gancho de pruebas: B.inter.concierto.ultimo = { cu, fin, reloj(), salto (s; adelanta SOLO el reloj visual), cong (s; reloj congelado
     o null), estado() → { viva, saliendo, modal, gan }, fichas, letra, … }
   ══════════════════════════════════════════════════════════════════════ */
'use strict';
(function (B) {
  const S = B.s4, U = B.iu;
  const ETQ = ['e', 'y', 'a'];
  const TINTA = '#10201E', ARENA = '#F3E6C8';
  /* nota negra dibujada (el glifo ♩ no viene en las fuentes del portal) */
  const NOTA = '<svg viewBox="0 0 24 32" aria-hidden="true"><ellipse cx="8.2" cy="25" rx="6.6" ry="4.9" transform="rotate(-22 8.2 25)"/><rect x="12.6" y="2" width="2.6" height="23.5" rx="1"/></svg>';
  const fcol = (c, i) => c === 'verde' ? S.PAL.palmera : S.color(c, i);
  const sobre = c => S.luz(c) > .62 ? TINTA : ARENA;
  const dice = (cls, txt) => { const d = B.el('div', cls); d.textContent = txt == null ? '' : String(txt); return d; };
  const ICO_SALTA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5v14l10-7zM17 5h2.6v14H17z"/></svg>';   // ⏭ dibujado (el glifo no viene en las fuentes)
  /* iniciales sin repetir (Gua / Gui): el prefijo más corto (mín. 2 letras) que distingue a cada nombre de la lista */
  const prefijoDe = (n, todos) => {
    n = String(n || '');
    for (let k = 2; k < n.length; k++) if (todos.filter(o => o.slice(0, k).toLowerCase() === n.slice(0, k).toLowerCase()).length === 1) return n.slice(0, k);
    return n.slice(0, Math.max(2, Math.min(3, n.length)));
  };

  B.inter.concierto = async function (caja, op) {
    const ctl = op.ctl || B.control();
    caja.classList.add('s4', 's4-concierto'); S.sinFoco(caja);
    const bpm = op.bpm || 90, comp = op.compases || 4, L = S.durLoop(bpm, comp);
    const t0r = +op.t0rejilla || 0, dSemi = 60 / bpm / 4;
    const pistas = B.arr(op.pistas).filter(p => p && p.id != null).map((p, i) => Object.assign({}, p, { color: S.color(p.color, i) }));
    const bloques = B.arr(op.bloques).map(b => B.arr(b));
    const nB = bloques.length;
    const planos = B.arr(op.planos).filter(p => p && p.t != null).sort((a, b) => a.t - b.t);
    const letra = B.arr(op.letra).filter(p => p && p.t != null).map(p => ({ t: +p.t, txt: p.txt == null ? '' : String(p.txt), t1: p.t1 == null ? null : +p.t1, d: null, w: Array.isArray(p.w) ? p.w.map(x => [+x[0], String(x[1])]) : null })).sort((a, b) => a.t - b.t);
    const fundido = op.fundido == null ? 2.5 : op.fundido;
    /* ciclo de fondos y botones de cierre (v3); sin imágenes en el ciclo, no hay ciclo */
    const cicloImgs = op.ciclo ? B.arr(op.ciclo.imgs).filter(x => x && (x.img || x.txt)) : [];
    const ciclo = cicloImgs.length ? { desde: +op.ciclo.desde || 0, cada: Math.max(.5, +op.ciclo.cada || 5), imgs: cicloImgs } : null;
    const bo = op.botones ? { desde: +op.botones.desde || 0, ejemplos: B.arr(op.botones.ejemplos).filter(v => v && v.src), seguir: String(op.botones.seguir || 'Siguiente parada'), directo: !!op.botones.directo } : null;

    /* ══════════ fichas: una fábrica por tipo → { el, act?(tc) } ══════════ */
    const FICHAS = {};
    /* tempo: «♩ ≈ bpm», el texto y un pie que late en cada negra */
    FICHAS.tempo = function (f, i) {
      const bp = Math.max(20, +f.bpm || bpm), color = fcol(f.color, 0);
      const el = B.el('div', 's4-fch s4-f-tempo'); el.style.setProperty('--c', color);
      const fila = B.el('div', 's4-ft-fila'); el.appendChild(fila);
      const m = B.el('div', 's4-ft-bpm'); fila.appendChild(m);
      m.appendChild(B.el('span', 's4-ft-nota', NOTA));
      m.appendChild(dice('s4-ft-eq', '≈ ' + (bp % 1 ? bp.toFixed(1) : bp)));
      const pie = B.el('div', 's4-ft-pie'); fila.appendChild(pie);
      if (f.txt) el.appendChild(dice('s4-fch-txt', f.txt));
      return { el, act(tc) {
        const ph = (((tc - t0r) / (60 / bp)) % 1 + 1) % 1, k = Math.max(0, 1 - ph * 3.4);
        pie.style.transform = 'scale(' + (1 + .34 * k).toFixed(3) + ')';
        pie.style.opacity = (.78 + .22 * k).toFixed(3);
      } };
    };
    /* rejilla / contratiempo: 16 semicorcheas en 2 filas de 2 tiempos (4 casillas por tiempo) */
    function rejilla(f, i, contra) {
      const color = fcol(f.color, i), pat = S.parsePatron(f.patron) || [new Array(16).fill(0)];
      const el = B.el('div', 's4-fch s4-f-rej' + (contra ? ' contra' : ''));
      el.style.setProperty('--c', color); el.style.setProperty('--cs', S.mezclaColor(color, S.PAL.arena, .55));
      if (f.nom || f.img) {
        const cab = B.el('div', 's4-fh'); el.appendChild(cab);
        if (f.img) {
          const w = B.el('div', 's4-fh-i'), im = S.imagen(f.img, prefijoDe(f.nom, [String(f.nom || '')]), color);
          if (im.tagName === 'IMG') im.alt = f.nom || ''; w.appendChild(im); cab.appendChild(w);
        }
        if (f.nom) cab.appendChild(dice('s4-fh-t', f.nom));
      }
      const rej = B.el('div', 's4-fr'); el.appendChild(rej);
      const celdas = [];
      for (let r = 0; r < 2; r++) {
        const fila = B.el('div', 's4-fr-fila');
        for (let g = 0; g < 2; g++) {
          const gr = B.el('div', 's4-gr');
          for (let k = 0; k < 4; k++) {
            const idx = (r * 2 + g) * 4 + k, tiempo = r * 2 + g + 1;
            const col = B.el('div', 's4-ce'), c = B.el('div', 's4-c'); c.dataset.k = idx;
            const et = B.el('div', 's4-et');
            if (k === 0) { et.className += ' num'; et.textContent = String(tiempo); }
            else if (contra) { if (k === 2) { et.className += ' y'; et.textContent = 'y'; } }
            else et.textContent = ETQ[k - 1];
            col.appendChild(c); col.appendChild(et); gr.appendChild(col); celdas.push(c);
          }
          fila.appendChild(gr);
        }
        rej.appendChild(fila);
      }
      if (f.txt) el.appendChild(dice('s4-fch-txt', f.txt));
      const pinta = c => { const P = pat[c % pat.length]; celdas.forEach((ce, j) => { ce.classList.toggle('h2', P[j] === 2); ce.classList.toggle('h1', P[j] === 1); }); };
      pinta(0);
      let sAnt = -1, cAnt = 0;
      return { el, celdas, act(tc) {
        const n = Math.floor((tc - t0r) / dSemi);
        const s = n < 0 ? -1 : ((n % 16) + 16) % 16, c = n < 0 ? 0 : Math.floor(n / 16) % pat.length;
        if (c !== cAnt) { cAnt = c; pinta(c); }
        if (s === sAnt) return;
        if (sAnt >= 0) celdas[sAnt].classList.remove('act', 'golpe');
        sAnt = s; el.dataset.cel = s;
        if (s >= 0) { const ce = celdas[s]; ce.classList.add('act'); if (ce.classList.contains('h1') || ce.classList.contains('h2')) ce.classList.add('golpe'); }
      } };
    }
    FICHAS.rejilla = (f, i) => rejilla(f, i, false);
    FICHAS.contratiempo = (f, i) => rejilla(f, i, true);
    /* instrumentos: baldosas cuadradas que entran una a una (escalonadas 120 ms); sin imagen, sus iniciales */
    FICHAS.instrumentos = function (f, i) {
      const lista = B.arr(f.lista).filter(x => x && (x.nom || x.img)), nombres = lista.map(x => String(x.nom || ''));
      const n = lista.length, ts = n <= 3 ? 9.5 : n === 4 ? 8.2 : n <= 8 ? 7 : 5.4;
      const el = B.el('div', 's4-fch s4-f-inst'); el.style.setProperty('--c', fcol(f.color, 0));
      const fi = B.el('div', 's4-fi'); el.appendChild(fi); fi.style.setProperty('--ts', 'calc(var(--uf)*' + ts + ')');
      lista.forEach((x, k) => {
        const color = fcol(x.color, k), it = B.el('div', 's4-it'); it.style.setProperty('--i', k); it.style.setProperty('--c', color);
        const cu = B.el('div', 's4-it-c'), im = S.imagen(x.img, prefijoDe(x.nom, nombres), color);
        if (im.tagName === 'IMG') im.alt = x.nom || ''; cu.appendChild(im);
        it.appendChild(cu); it.appendChild(dice('s4-it-n', x.nom)); fi.appendChild(it);
      });
      if (f.txt) el.appendChild(dice('s4-fch-txt', f.txt));
      return { el };
    };
    /* texto: una palabra o frase clave grande */
    FICHAS.texto = function (f, i) {
      const color = fcol(f.color || 'mostaza', 1), n = String(f.txt || '').length;
      const el = B.el('div', 's4-fch s4-f-texto'); el.style.setProperty('--c', color); el.style.setProperty('--t', sobre(color));
      const t = dice('s4-ftx-t', f.txt); t.style.fontSize = 'calc(var(--uf)*' + (n <= 12 ? 7.2 : n <= 20 ? 5.6 : n <= 32 ? 4.4 : 3.4) + ')'; el.appendChild(t);
      if (f.sub) el.appendChild(dice('s4-ftx-s', f.sub));
      return { el };
    };
    const fichas = B.arr(op.fichas).filter(f => f && f.t0 != null && f.tipo && (FICHAS[f.tipo] || console.warn('4 Sabores: ficha de tipo desconocido, se omite:', f.tipo)))
      .map((f, i) => ({ cfg: f, i, t0: +f.t0, t1: f.t1 == null ? Infinity : +f.t1, est: 0, o: null })).sort((a, b) => a.t0 - b.t0);

    /* ── piezas ── */
    const esc = B.el('div', 's4-esc'); caja.appendChild(esc);
    if (fichas.length) esc.appendChild(B.el('div', 's4-vela'));      // la lámina de la banda se queda de fondo, algo oscurecida
    const capas = []; let capaAct = null; const temporizadores = new Set();
    let vids = null, tcAnt = null, tcCambia = 0;   // (29-oct) clips del videoclip ya en la caché (js/videos.js): imagen → URL
    const tira = B.el('div', 's4-tira'); caja.appendChild(tira);
    const chips = {};
    const nombres = pistas.map(p => String(p.nom || p.id));
    if (nB && pistas.length) pistas.forEach(p => {
      const c = B.el('div', 's4-chip'); c.dataset.id = p.id; c.title = p.nom || p.id; c.style.setProperty('--c', p.color);
      const nomP = p.nom || String(p.id), im = S.imagen(p.img, prefijoDe(nomP, nombres), p.color);   // sin imagen: solo las iniciales
      if (im.tagName === 'IMG') im.alt = nomP; else im.setAttribute('title', nomP);
      c.appendChild(im); tira.appendChild(c); chips[p.id] = c;
    });
    const panel = fichas.length ? B.el('div', 's4-fichas') : null; if (panel) caja.appendChild(panel);
    /* letra karaoke: línea actual + barra, y la siguiente debajo (la caja se ancla abajo: al crecer, crece hacia arriba) */
    const subt = B.el('div', 's4-letra'); caja.appendChild(subt);
    const lAct = B.el('div', 's4-lact'); subt.appendChild(lAct);
    const lTxt = B.el('span', 's4-ltxt'); lAct.appendChild(lTxt);
    const lBar = B.el('i', 's4-lbar'); const lBarI = B.el('u'); lBar.appendChild(lBarI); lAct.appendChild(lBar);
    const lSig = B.el('div', 's4-lsig'); subt.appendChild(lSig);
    const prog = B.el('div', 's4-prog'); const progI = B.el('i'); prog.appendChild(progI); caja.appendChild(prog);
    const carga = B.el('div', 's4-carga', 'Cargando…'); caja.appendChild(carga);
    const pie = B.el('div', 'i-pie'); caja.appendChild(pie);

    /* ── plano de fondo (`dur` = fundido en s: 0,4 en los planos, 0,6 en el ciclo) ── */
    function ponPlano(p, i, dur, etq) {
      dur = dur || .4;
      const capa = B.el('div', 's4-plano'); capa.dataset.i = i;
      if (dur !== .4) capa.style.transitionDuration = dur + 's';
      if (op.kb) { capa.classList.add('kb', 'kb' + (i % 4)); capa.style.setProperty('--kbd', (op.bpm > 120 ? 7 : 11) + 's'); }   // (27-oct, Iago) movimiento lento de cámara en el videoclip
      capa.appendChild(S.imagen(p.img, p.txt || ('Plano ' + (i + 1)), S.CICLO[i % S.CICLO.length], 's4-pl'));
      /* (Iago 29-oct) el clip con su zoom lento, si ya está bajado: encima de la foto (que se queda debajo hasta el primer fotograma) */
      const vu = vids && vids.get(p.img);
      if (vu) {
        const v = document.createElement('video'); v.className = 's4-img s4-pl s4-vc'; v.muted = true; v.defaultMuted = true; v.playsInline = true;
        v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.preload = 'auto'; v.disablePictureInPicture = true; v.style.opacity = '0';
        v.addEventListener('playing', () => { v.style.opacity = '1'; }, { once: true });
        v.addEventListener('error', () => v.remove(), { once: true });
        v.src = vu; capa.appendChild(v); capa._v = v; capa._t0 = Math.max(0, p.t || 0);
        /* (r15, Iago 29-oct 21:02: «espasmos… unos primeros frames de mucha velocidad y luego se vuelve calmado») el clip que se aleja
           empieza acercado (1,01–1,08): la foto de debajo (y luego sus luces) va a esa misma escala, para que al aparecer el vídeo no salte */
        const md = B.VIDEOS && B.VIDEOS[p.img];
        if (md && md.z) { capa._z = md.z; capa._o = '50% ' + Math.round((md.o || 0) * 100) + '%'; const fo = capa.querySelector('img.s4-pl'); if (fo) { fo.style.transformOrigin = capa._o; fo.style.transform = 'scale(' + md.z[0] + ')'; } }
        const pr = v.play(); if (pr && pr.catch) pr.catch(() => { });
        if (B.videos) B.videos.vigila(v);
      }
      /* (28-oct, Iago: «me falta animación de fondos en el videoclip: velas, mar…») sus luces titilan (js/portada_vida.js; puntos en
         BLUES.LUCES_VC, herramientas/luces_s1.py); el lienzo lleva la misma clase que la imagen para moverse con ella */
      const LV = B.LUCES_VC && B.LUCES_VC[p.img];
      /* (Iago 30-oct 07:16) en la canción del sabor 2 sobran un poco las lucecitas: una de cada cuatro, fuera · (06:54, 07:26) destellos del
         mar, pocos y solo donde hay agua (BLUES.MAR_VC, herramientas/mar_vc.py) · partículas, un poco más presentes (+15 % y +12 % de opacidad) */
      const LV2 = LV && /^img\/s2\//.test(p.img) ? LV.filter((l, j) => j % 4 !== 3) : LV, MV = B.MAR_VC && B.MAR_VC[p.img];
      if (B.vidaLienzo && (LV2 && LV2.length || op.planos)) { const cv = B.el('canvas', 's4-img s4-vida-vc'); capa.appendChild(cv); B.vidaLienzo(cv, { luces: LV2 || [], rMin: .014, rK: 1.15, caen: 46, caenA: .56, mar: MV || null, hojas: op.hojas || 0 }); if (capa._z) { capa._cv = cv; cv.style.transformOrigin = capa._o; cv.style.transform = 'scale(' + capa._z[0] + ')'; } }   // (28-oct 09:13) y motitas que caen en todos los planos
      esc.appendChild(capa); void capa.offsetWidth;
      capa.classList.add('on');
      /* (28-oct 21:03, Iago en el iPad: «fondos que parecen de otro tamaño») las franjas de fuera de la pantalla, con el plano que se ve */
      if (B.motor && B.motor.ambiente) { const im = capa.querySelector('img'); B.motor.ambiente(im && im.src ? im.src : null); }
      const ant = capaAct; capaAct = capa; capas.push(capa);
      if (ant) {      // la anterior se queda debajo hasta que la nueva es opaca del todo; luego se quita
        const h = setTimeout(() => { temporizadores.delete(h); if (ant._v) { try { ant._v.pause(); ant._v.removeAttribute('src'); ant._v.load(); } catch (e) { } } ant.remove(); const k = capas.indexOf(ant); if (k >= 0) capas.splice(k, 1); }, dur * 1000 + 80);
        temporizadores.add(h);
      }
      esc.dataset.plano = etq == null ? i : etq;
    }
    function marcaBloque(k) {
      const on = bloques[Math.min(k, nB - 1)] || [];
      pistas.forEach(p => { const c = chips[p.id]; if (c) c.classList.toggle('on', on.indexOf(p.id) >= 0); });
      caja.dataset.bloque = k;
    }

    /* ── planos: el último cuya marca ya pasó (por el reloj de la canción; el primero con t ≤ 0 ya está puesto al arrancar).
       Con `ciclo`, desde su `desde` manda el ciclo (índice = ⌊(t − desde) / cada⌋ mod n) y los planos programados se ignoran;
       el ciclo no pasa de `fin`, así que al acabar la canción se queda en su último fondo. ── */
    let pAct = null;            // lo que se ve: 'p<k>' (plano programado) o 'c<k>' (ciclo)
    function pintaPlanos(tc) {
      /* el clip va con el reloj de la canción: se para con la pausa y se recoloca si se separa más de medio segundo */
      /* (r15, «espasmos») el reloj del AudioContext avanza a saltitos (cada 10–20 ms): dos fotogramas seguidos con la misma hora NO son una
         pausa. Antes el clip se paraba y arrancaba así muchas veces por segundo; ahora solo se para si el reloj lleva quieto más de 0,3 s */
      const ya = performance.now();
      if (tcAnt == null || tc !== tcAnt) tcCambia = ya;
      tcAnt = tc;
      const v = capaAct && capaAct._v;
      if (v && v.readyState >= 1) {
        if (ya - tcCambia > 300) { if (!v.paused) v.pause(); }
        else {
          const quiere = tc - capaAct._t0;
          if (quiere >= 0 && quiere < (v.duration || 0) - .15 && Math.abs(v.currentTime - quiere) > .5) { try { v.currentTime = quiere; } catch (e) { } }
          if (v.paused && !v.ended) { const pr = v.play(); if (pr && pr.catch) pr.catch(() => { }); }
        }
        /* las luces, a la escala del fotograma que se ve (el zoom del clip es lineal: de z[0] a z[1]) */
        if (capaAct._cv && v.duration) {
          const z = capaAct._z, u = Math.max(0, Math.min(1, v.currentTime / Math.max(.1, v.duration - 1 / 30))), e = (z[0] + (z[1] - z[0]) * u).toFixed(4);
          if (capaAct._cvE !== e) { capaAct._cvE = e; capaAct._cv.style.transform = 'scale(' + e + ')'; }
        }
      }
      if (ciclo && tc >= ciclo.desde) {
        const tt = info.fin > 0 ? Math.min(tc, info.fin) : tc;
        const k = Math.floor((tt - ciclo.desde) / ciclo.cada) % ciclo.imgs.length, clave = 'c' + k;
        if (clave !== pAct) { pAct = clave; ponPlano(ciclo.imgs[k], k, .6, clave); esc.dataset.ciclo = k; }
        return;
      }
      let k = -1;
      for (let j = planos.length - 1; j >= 0; j--) if (tc >= planos[j].t) { k = j; break; }
      if (k >= 0 && 'p' + k !== pAct) { pAct = 'p' + k; ponPlano(planos[k], k, +op.fundidoPlanos || .4); delete esc.dataset.ciclo; }   // (28-oct 09:16) fundidoPlanos: corte corto, al pulso
    }

    /* ── letra: línea actual según el reloj de la canción; la barra se llena sola (sin parpadeos al cambiar) ── */
    let lAnt = -2, lFill = -1, lVis = false, lSpans = null;
    function pintaLetra(tc) {
      let k = -1;
      for (let j = letra.length - 1; j >= 0; j--) if (tc >= letra[j].t) { k = j; break; }
      const l = k >= 0 ? letra[k] : null, txt = l ? l.txt : '';
      if (k !== lAnt) {
        lAnt = k; lFill = -1;
        const sg = letra[k + 1];
        /* (28-oct, Iago: «como un karaoke») con palabras cronometradas (l.w), cada una se enciende cuando se canta */
        lSpans = null;
        if (l && l.w && l.w.length) { lTxt.textContent = ''; lSpans = l.w.map(([tw, w], j) => { const sp = B.el('span', 's4-kw'); sp.textContent = w + (j < l.w.length - 1 ? ' ' : ''); lTxt.appendChild(sp); return [tw, sp]; }); }
        else lTxt.textContent = txt;
        lSig.textContent = txt && sg ? sg.txt : '';
        subt.dataset.txt = txt; subt.dataset.sig = lSig.textContent;
        if (!!txt !== lVis) { lVis = !!txt; subt.classList.toggle('on', lVis); }
        if (txt) { lAct.classList.remove('cambia'); void lAct.offsetWidth; lAct.classList.add('cambia'); }
      }
      if (lSpans) for (let j = 0; j < lSpans.length; j++) { const on = tc >= lSpans[j][0] - .03; if (lSpans[j][2] !== on) { lSpans[j][2] = on; lSpans[j][1].classList.toggle('on', on); } }
      if (txt) {
        const d = l.d == null ? 5 : l.d, x = d > 0 ? Math.max(0, Math.min(1, (tc - l.t) / d)) : 1;
        if (Math.abs(x - lFill) > .002 || (x === 1 && lFill !== 1)) { lFill = x; lBarI.style.transform = 'scaleX(' + x.toFixed(4) + ')'; subt.dataset.fill = x.toFixed(3); }
      }
    }
    /* duración de cada línea (hasta la t de la siguiente, o hasta su t1); la última, la media de las anteriores */
    function duraLetras(fin) {
      const ds = [];
      letra.forEach((l, j) => {
        const sg = letra[j + 1];
        l.d = l.t1 != null ? l.t1 - l.t : (sg ? sg.t - l.t : null);
        if (l.d != null && l.d > 0) ds.push(l.d);
      });
      const n = letra.length;
      if (n && letra[n - 1].d == null) {
        const media = ds.length ? ds.reduce((a, b) => a + b, 0) / ds.length : 5;
        letra[n - 1].d = Math.max(.5, Math.min(media, fin - letra[n - 1].t));
      }
    }

    /* ── fichas: entran en t0 y salen en t1 con fundido + desplazamiento; si no caben, se reducen ── */
    function ajusta() {
      const vivos = fichas.filter(F => F.est === 1 && F.o).map(F => F.o.el);
      if (!vivos.length) return;
      vivos.forEach(e => e.style.setProperty('--fk', 1));
      const hueco = parseFloat(getComputedStyle(panel).rowGap) || 0, disp = panel.clientHeight;
      const huecos = hueco * (vivos.length - 1), alto = vivos.reduce((a, e) => a + e.offsetHeight, 0);
      if (alto + huecos > disp && alto > 0) {
        const k = Math.max(.4, (disp - huecos) / alto);
        vivos.forEach(e => e.style.setProperty('--fk', k.toFixed(3)));
      }
    }
    function entra(F) {
      F.o = FICHAS[F.cfg.tipo](F.cfg, F.i); F.est = 1;
      F.o.el.dataset.tipo = F.cfg.tipo; F.o.el.dataset.f = F.i;
      /* si otra ficha se está yendo en este mismo sitio, la nueva espera a que se desvanezca (nunca dos textos mezclados) */
      const espera = panel.querySelector('.s4-fch.sale') ? '.2s' : '0s';
      F.o.el.style.animationDelay = espera; F.o.el.style.setProperty('--d0', espera);
      panel.appendChild(F.o.el); ajusta();
    }
    function sale(F) {
      const el = F.o.el; F.est = 0; F.o = null;
      /* sale del flujo en su sitio, para que la que entra a la vez no la empuje mientras se desvanece */
      el.style.top = el.offsetTop + 'px'; el.style.left = el.offsetLeft + 'px'; el.style.width = el.offsetWidth + 'px';
      el.classList.add('sale');
      const h = setTimeout(() => { temporizadores.delete(h); el.remove(); }, 300); temporizadores.add(h);
      ajusta();
    }
    function pintaFichas(tc) {
      fichas.forEach(F => {
        const dentro = tc >= F.t0 && tc < F.t1;
        if (F.est === 0 && dentro) entra(F);
        else if (F.est === 1 && !dentro) sale(F);
        if (F.est === 1 && F.o.act) F.o.act(tc);
      });
    }

    /* ── limpieza (idempotente) ── */
    let limpio = false, vs = null, vg = null, mz = null, cs = null, cg = null;
    /* estado de los botones de cierre (v3) */
    let viva = true;                // la canción sigue sonando (false: la cortó «Ejemplos reales», acabó sola o se está fundiendo al salir)
    let saliendo = false;           // ya se pulsó el principal / «Saltar»: la canción se funde y enseguida se resuelve
    let finHecho = false;           // ya se atendió el final de la canción
    let btOn = false;               // los dos botones están a la vista (si no, solo el pequeño «Saltar»)
    let sinVela = false;            // con ciclo: pasada la última ficha, la lámina se ve sin el velo
    let modal = null, vid = null, quitaK = null, quitaP = null, quitaTecla = null, agachado = false, seguirRes = null, mideZona = null;
    const info = { cu: null, fin: 0, L, nB, bloques, planos, letra, fichas, salto: 0, cong: null, mz: null };
    /* reloj de la canción (letra, fichas, rejillas, planos y ciclo): el del AudioContext menos la latencia de salida; se congela
       (cong) cuando «Ejemplos reales» corta la canción o cuando esta acaba con los botones de cierre */
    info.reloj = () => info.cong != null ? info.cong : B.ahora() - S.lat() - info.cu + info.salto;
    info.estado = () => ({ viva, saliendo, modal: !!modal, botones: btOn, gan: (cg || vg) ? (cg || vg).gain.value : null });
    B.inter.concierto.ultimo = info;        // gancho de pruebas
    const quitaF = B.alFotograma(t => {
      if (info.cu == null) return;
      const tc = info.cong != null ? info.cong : t - S.lat() - info.cu + info.salto;
      const x = Math.max(0, Math.min(1, tc / info.fin)); progI.style.transform = 'scaleX(' + x.toFixed(4) + ')';
      pintaPlanos(tc); pintaLetra(tc); if (panel) pintaFichas(tc);
      if (ciclo && panel) {       // el velo solo sirve a las fichas: en el ciclo, sin ficha a la vista las imágenes se ven con todo su color
        const sin = tc >= ciclo.desde && !fichas.some(F => F.est === 1);
        if (sin !== sinVela) { sinVela = sin; esc.classList.toggle('sin-vela', sin); }
      }
      if (bo) {
        if (!finHecho && tc >= info.fin) finCancion();          // (también por el reloj visual: así se puede probar con `salto`)
        actualizaBotones(tc);
      }
    });
    /* fundido a 0 en `seg` s y parada de todo lo que suena (voz, canción y arreglo en vivo) */
    function apaga(seg) {
      if (mz) mz.parar(seg);
      [[vs, vg], [cs, cg]].forEach(([s, g]) => {
        if (!s) return;
        try { const C = B.ac(), t = C.currentTime; g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(g.gain.value, t); g.gain.linearRampToValueAtTime(0, t + seg); s.stop(t + seg + .05); } catch (e) { }
      });
    }
    const limpia = () => {
      if (limpio) return; limpio = true;
      quitaF(); temporizadores.forEach(h => clearTimeout(h)); temporizadores.clear();
      cierraModal(); if (quitaTecla) { quitaTecla(); quitaTecla = null; } if (mideZona) mideZona.quita();
      if (seguirRes) seguirRes(false);
      apaga(.35);
      capas.forEach(c => { if (c._v) { try { c._v.pause(); c._v.removeAttribute('src'); c._v.load(); } catch (e) { } } });
      if (B.videos) B.videos.suelta(vids); vids = null;
    };
    ctl.alMorir.push(limpia);

    /* ── carga ── */
    const tc0 = setTimeout(() => carga.classList.add('on'), 160);
    let vozBuf = null, cancionBuf = null;
    /* con `voz`: voz + arreglo en vivo · sin `voz` y con `cancion`: solo la canción · sin ninguna: solo el arreglo */
    if ((op.voz || !op.cancion) && pistas.length) mz = B.mezcla.crea({ bpm, compases: comp, pistas, inicial: bloques[0] || [], vol: op.arregloGan });
    const imgsFichas = [];
    fichas.forEach(F => { imgsFichas.push(F.cfg.img); B.arr(F.cfg.lista).forEach(x => x && imgsFichas.push(x.img)); });
    /* las fuentes de la letra y de los títulos de las fichas, ya cargadas antes de arrancar (así no cambian de forma al aparecer) */
    const fuentes = (fichas.length || letra.length) && document.fonts && document.fonts.load
      ? Promise.race([Promise.all([document.fonts.load('1em "Kaushan Script"', 'Aa≈90'), document.fonts.load('800 1em "Nunito"', 'Aa'), document.fonts.load('600 1em "Nunito"', 'Aa')]).catch(() => null), new Promise(r => { const h = setTimeout(r, 1500); temporizadores.add(h); })])
      : null;
    await Promise.all([
      fuentes,
      op.voz ? S.carga(op.voz).then(b => { vozBuf = b; }) : null,
      !op.voz && op.cancion ? S.carga(op.cancion).then(b => { cancionBuf = b; }) : null,
      mz ? mz.cargar() : null,
      Promise.all(planos.map(p => S.listaImg(p.img))),
      B.videos && planos.length ? B.videos.abre(planos.map(p => p.img)).then(m => { vids = m; }) : null,
      ciclo ? Promise.all(ciclo.imgs.map(p => S.listaImg(p.img))) : null,
      Promise.all(imgsFichas.filter(Boolean).map(r => S.listaImg(r)))
    ]);
    clearTimeout(tc0); carga.classList.remove('on');
    if (ctl.muerto || limpio) { limpia(); return; }
    info.mz = mz;

    /* ── arranque: todo en el mismo instante del reloj del AudioContext ── */
    const C = B.ac(), cu = C.currentTime + .25, lat = S.lat();
    info.cu = cu;
    let fin;
    if (vozBuf) {
      vs = C.createBufferSource(); vs.buffer = vozBuf; vg = C.createGain(); vg.gain.value = op.vozGan == null ? 1 : op.vozGan;
      vs.connect(vg); vg.connect(B.bus.voz); B.vivo(vs, 'plano'); vs.start(cu, op.vozPre || 0);
      B.mezcla.registro.push({ id: '__voz', cuando: cu, offset: op.vozPre || 0, ctx: C.currentTime });
      fin = Math.max(vozBuf.duration - (op.vozPre || 0), nB * L);
    } else if (cancionBuf) {
      cs = C.createBufferSource(); cs.buffer = cancionBuf; cg = C.createGain(); cg.gain.value = op.cancionGan == null ? 1 : op.cancionGan;
      cs.connect(cg); cg.connect(B.bus.mus); B.vivo(cs, 'plano'); cs.start(cu, 0);
      B.mezcla.registro.push({ id: '__cancion', cuando: cu, offset: 0, ctx: C.currentTime });
      fin = cancionBuf.duration;
    } else fin = Math.max(1, nB * L);
    info.fin = fin; duraLetras(fin);

    if (mz) {
      mz.arrancar(cu);
      /* bloques: cada pista que cambia de estado entre un bloque y el siguiente, con rampa de 30 ms que acaba en la barra */
      for (let k = 1; k < nB; k++) pistas.forEach(p => {
        const a = bloques[k - 1].indexOf(p.id) >= 0, b = bloques[k].indexOf(p.id) >= 0;
        if (a !== b) mz.ganancia(p.id, b ? 1 : 0, .03, k * L - .03);
      });
      B.arr(op.realce).forEach(r => { if (r && mz.tiene(r.pista)) mz.realce(r.pista, r.db, r.t0, r.t1, .15); });
      mz.pararEn(fin, Math.min(fundido, fin));
    }

    /* visuales: en el reloj del AudioContext (se congelan con la pausa), con la latencia de salida compensada.
       Planos, letra y fichas no llevan temporizadores: salen del reloj de la canción en cada fotograma (pintaPlanos / pintaLetra / pintaFichas). */
    const en = (t, fn) => B.enTiempo(cu + t + lat, fn, ctl);
    if (ciclo && ciclo.desde <= 0) pintaPlanos(0);                         // el ciclo manda desde el primer instante
    else if (planos.length && planos[0].t <= 0) { ponPlano(planos[0], 0); pAct = 'p0'; }
    if (!(ciclo && ciclo.desde <= 0) && (!planos.length || planos[0].t > 0)) esc.classList.add('sin-plano');
    if (nB) { marcaBloque(0); for (let k = 1; k < nB; k++) en(k * L, () => marcaBloque(k)); }
    B.arr(op.realce).forEach(r => { const c = r && chips[r.pista]; if (c) { en(r.t0, () => c.classList.add('real')); en(r.t1, () => c.classList.remove('real')); } });

    /* ══════════ cierre ══════════
       Sin `botones`: el «Seguir» de siempre (se destaca al acabar la canción; con `auto`, se resuelve solo 1,5 s después).
       Con `botones`: «Saltar» (solo icono) hasta `desde`; luego «Ejemplos reales» y el principal. */
    function finCancion() {
      if (finHecho) return; finHecho = true;
      if (!viva) return;                       // ya la había cortado el profesor (o se está yendo)
      viva = false;
      caja.classList.add('fin'); caja.dataset.fin = '1';
      if (bo) { info.cong = info.fin; actualizaBotones(info.fin); }       // se queda en el último plano, con los dos botones; no se resuelve sola
      else {
        if (bSeguir) bSeguir.classList.add('prim');
        if (op.auto) B.enTiempo(B.ahora() + 1.5, () => resAcaba('auto'), ctl);
      }
    }
    function actualizaBotones(tc) {
      if (saliendo) return;
      const on = !viva || tc >= bo.desde;
      if (on === btOn) return;
      btOn = on; caja.classList.toggle('con-botones', on);
      if (on && mideZona) mideZona.ya();
    }
    /* el principal / «Saltar» / Espacio / Intro: funde la canción a 0 en 1,2 s y resuelve (si ya no sonaba, resuelve al momento) */
    function principal() {
      if (saliendo || limpio) return;
      saliendo = true; caja.classList.add('saliendo');
      cierraModal();
      if (viva) { viva = false; apaga(1.2); B.enTiempo(B.ahora() + 1.2, () => seguirRes && seguirRes(true), ctl); }
      else if (seguirRes) seguirRes(true);
    }
    /* «Ejemplos reales»: funde la canción a 0 en 1 s y la para; los fondos y la letra se quedan donde estaban; abre la ventana */
    function ejemplosReales() {
      if (saliendo || modal || limpio) return;
      const fundir = viva;
      if (viva) { info.cong = info.reloj(); viva = false; apaga(1); }
      abreModal(fundir ? 1 : 0);
    }
    /* ventana de ejemplos: reproductor (empieza por el primero, cuando acaba el fundido) + miniaturas; ✕, Esc o pulsar fuera la cierran */
    function abreModal(demora) {
      const vids = bo.ejemplos, n = vids.length; let act = -1, estaba = false;
      const hay = v => bo.directo || v.directo || S.externa(v.src) || !B.RECURSOS || B.existe(v.src);
      const m = modal = B.el('div', 's4-modal s4-cmodal');
      m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-label', 'Ejemplos reales');
      m.addEventListener('click', e => { e.stopPropagation(); if (e.target === m) cierraModal(); });
      const rp = B.el('div', 's4-reprod s4-cej'); m.appendChild(rp);
      const cab = B.el('div', 's4-rcab'); rp.appendChild(cab);
      const rtit = B.el('div', 's4-rtit'); cab.appendChild(rtit);
      const x = U.boton('', 'ico s4-x', () => cierraModal()); x.innerHTML = S.ICO.cierra; x.dataset.tip = 'Cerrar (Esc)'; x.setAttribute('aria-label', 'Cerrar'); cab.appendChild(x);
      const marco = B.el('div', 's4-rmarco'); rp.appendChild(marco);
      const el = vid = document.createElement('video');
      el.controls = true; el.playsInline = true; el.setAttribute('playsinline', ''); el.className = 's4-rvid';
      el.addEventListener('error', () => { if (el.getAttribute('src') && !marco.querySelector('.s4-rerr')) marco.appendChild(dice('s4-rerr', 'No se puede reproducir este vídeo.')); });
      marco.appendChild(el);
      const thumbs = [];
      const elige = (i, dem) => {
        const v = vids[i];
        if (i === act) { if (el.paused && el.getAttribute('src')) el.play().catch(() => { }); return; }
        act = i; rtit.textContent = v.tit || ('Vídeo ' + (i + 1));
        thumbs.forEach((b, j) => b.classList.toggle('act', j === i)); if (thumbs[i]) thumbs[i].classList.add('visto');
        const er = marco.querySelector('.s4-rerr'); if (er) er.remove();
        if (hay(v)) {
          el.style.display = ''; el.src = v.src;
          const ya = () => { if (vid === el && act === i && el.paused) el.play().catch(() => { }); };
          if (dem > 0) B.enTiempo(B.ahora() + dem, ya, ctl); else ya();
        } else {
          try { el.pause(); el.removeAttribute('src'); el.load(); } catch (e) { }
          el.style.display = 'none'; marco.appendChild(dice('s4-rerr', 'Este vídeo todavía no está disponible.'));
        }
      };
      if (n > 1) {
        const fila = B.el('div', 's4-cej-fila'); fila.style.setProperty('--w', n <= 3 ? 14 : n === 4 ? 11.5 : 9.5); rp.appendChild(fila);
        vids.forEach((v, i) => {
          const b = B.el('button', 's4-vid'); b.type = 'button'; b.dataset.i = i;
          const mini = B.el('div', 's4-mini'); mini.appendChild(S.baldosa(String(i + 1), S.CICLO[i % S.CICLO.length], 's4-vbald'));     // sin fotograma: baldosa con su número
          if (hay(v)) {
            const vd = document.createElement('video');
            vd.muted = true; vd.preload = 'metadata'; vd.playsInline = true; vd.setAttribute('playsinline', ''); vd.tabIndex = -1; vd.className = 's4-vmini';
            vd.addEventListener('loadeddata', () => mini.classList.add('con-video'));
            vd.addEventListener('error', () => { vd.remove(); mini.classList.remove('con-video'); });
            vd.src = v.src + (v.src.indexOf('#') < 0 ? '#t=0.1' : '');
            mini.appendChild(vd);
          }
          const pl = B.el('span', 's4-play'); pl.innerHTML = S.ICO.play; mini.appendChild(pl);
          const ok = B.el('span', 's4-ok'); ok.innerHTML = S.ICO.visto; mini.appendChild(ok);
          b.appendChild(mini); b.appendChild(dice('s4-cap', v.tit || ('Vídeo ' + (i + 1))));
          b.addEventListener('click', e => { e.stopPropagation(); B.ac(); elige(i, 0); });
          fila.appendChild(b); thumbs.push(b);
        });
      }
      /* Esc cierra; Espacio/Intro mueven el vídeo (o pulsan el botón que tenga el foco) y no el principal de detrás */
      quitaK = B.captura.poner(e => {
        if (e.key === 'Escape') { cierraModal(); return true; }
        if (e.key === ' ' || e.key === 'Enter') {
          const bt = e.target && e.target.closest ? e.target.closest('button') : null;
          if (bt && m.contains(bt)) { if (!e.repeat) bt.click(); }
          else if (vid && !e.repeat) { vid.paused ? vid.play().catch(() => { }) : vid.pause(); }
          return true;
        }
        return false;
      });
      /* pausa del motor (P / Hecho real): el vídeo se para y vuelve a sonar si estaba sonando */
      quitaP = S.alPausar(on => {
        if (!vid) return;
        if (on) { estaba = !vid.paused; vid.pause(); }
        else if (estaba) { estaba = false; vid.play().catch(() => { }); }
      });
      if (B.hayAudio() && !agachado) { B.agacha(true); agachado = true; }      // baja lo que quede de ambiente mientras suena el vídeo
      caja.appendChild(m);
      elige(0, demora);
    }
    function cierraModal() {
      if (!modal) return;
      modal.querySelectorAll('video').forEach(v => { try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) { } });
      if (quitaK) quitaK(); if (quitaP) quitaP();
      modal.remove(); modal = vid = quitaK = quitaP = null;
      if (agachado) { B.agacha(false); agachado = false; }
    }

    let resAcaba = null, fueSeguir, bSeguir = null;
    const acaba = new Promise(r => { resAcaba = r; });
    en(fin, finCancion);
    if (bo) {
      pie.classList.add('s4-pie-bt');
      const bSalto = U.boton(ICO_SALTA, 'ico s4-saltar', () => principal());
      bSalto.dataset.tip = 'Saltar'; bSalto.setAttribute('aria-label', 'Saltar'); pie.appendChild(bSalto);
      const acc = B.el('div', 's4-acc'); caja.appendChild(acc);
      if (bo.ejemplos.length) acc.appendChild(U.boton(S.ICO.play + ' Ejemplos reales', 's4-bt-ej', () => ejemplosReales()));
      const bSeg = U.boton('', 'prim s4-bt-seg', () => principal()); bSeg.textContent = bo.seguir; acc.appendChild(bSeg);
      fueSeguir = new Promise(r => { seguirRes = r; });
      quitaTecla = B.captura.poner(e => { if (e.key === 'Enter') { principal(); return true; } return false; });   // (Iago 30-oct) Espacio ya no avanza
      /* la letra se aparta de la columna de botones: --zb = su ancho (en u) + márgenes */
      const mide = () => {
        const a = acc.getBoundingClientRect().width, c = caja.getBoundingClientRect().width;
        if (a > 0 && c > 0) caja.style.setProperty('--zb', (a / (c / 100) + 3.2).toFixed(2));
      };
      let ro = null;
      if (window.ResizeObserver) { ro = new ResizeObserver(mide); ro.observe(caja); } else addEventListener('resize', mide);
      mideZona = { ya: mide, quita() { if (ro) ro.disconnect(); else removeEventListener('resize', mide); } };
      mide();
    } else {
      fueSeguir = U.seguir(caja, ctl, 'Seguir', pie);
      bSeguir = pie.querySelector('[data-seguir]');
      if (bSeguir) bSeguir.classList.remove('prim');
    }
    try { await Promise.race([fueSeguir, acaba]); }
    finally { limpia(); }
  };
  /* rutas que precarga el motor: las de siempre + las imágenes de las fichas y del ciclo de fondos */
  B.inter.concierto.recursos = op => {
    const r = S.recursosDe('concierto', op);
    B.arr((op || {}).fichas).forEach(f => { if (!f) return; r.push(f.img); B.arr(f.lista).forEach(x => x && r.push(x.img)); });
    if (op && op.ciclo) B.arr(op.ciclo.imgs).forEach(x => x && r.push(x.img));
    return r.filter(Boolean);
  };
})(window.BLUES);

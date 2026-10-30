/* AFRO LATIN · 4 Sabores · vídeos de los videoclips (Iago 29-oct 08:57–09:36: «convertir los videoclips en vídeos, con zooms suaves…
   1080 a 30 fps, precargado; no hace falta que cargue los dos vídeos al principio del sabor»).
   - Cada plano del videoclip tiene su clip (vc/sN/<imagen>.mp4: la misma foto con un zoom lento pregrabado; herramientas/videos_vc.py).
   - Al empezar un sabor, sus clips se bajan EN SEGUNDO PLANO, de uno en uno, a la caché del navegador (Cache Storage: se quedan en ese
     ordenador y ese navegador para la próxima vez). Botón «Preparar para clase» en la portada: los baja todos de una vez.
   - El concierto usa el clip si ya está en la caché; si no, la foto de siempre (como hasta ahora).
   - Si la pantalla no da abasto (pierde muchos fotogramas), se apunta y desde entonces van las fotos (?videos=si lo vuelve a probar;
     ?videos=no los quita). */
(function (B) {
  const V = () => B.VIDEOS || {};                       // imagen → { v: ruta del mp4, b: bytes, d: sabor }
  /* (r19, Iago 30-oct 14:41: «la canción libre de samba… ni partículas ni destellos ni movimientos de cámara») la marca vieja
     (sabores_vc_no) la ponía UNA sola medida mala, también con la pestaña oculta o al arrancar: se borra una vez y va la nueva (K_NO) */
  const CACHE = 'sabores-vc-1', K_NO = 'sabores_vc_no2', K_VIEJA = 'sabores_vc_no';
  const hay = typeof caches !== 'undefined' && !!window.isSecureContext && typeof fetch === 'function';
  const abs = r => new URL(r, location.href).href;
  const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { } return null; };
  ls(K_VIEJA, null);
  try { const q = new URLSearchParams(location.search).get('videos'); if (q === 'si') ls(K_NO, null); else if (q === 'no') ls(K_NO, '1'); } catch (e) { }
  const apagados = () => ls(K_NO) === '1';
  const listos = new Set();                             // URL absolutas ya en la caché
  let caja = null, leida = null;
  const abre = () => caja || (caja = caches.open(CACHE).catch(() => null));
  /* (r15b) cada clip lleva su huella (?h=…) en el manifiesto: si se rehace, la URL cambia y se baja el nuevo; los que ya no están en el
     manifiesto (versiones viejas) se borran de la caché para no ocupar sitio */
  const lee = () => leida || (leida = abre().then(c => c ? c.keys().then(ks => {
    const vale = new Set(Object.keys(V()).map(k => abs(V()[k].v)));
    ks.forEach(r => { if (vale.has(r.url)) listos.add(r.url); else if (vale.size) c.delete(r).catch(() => { }); });
  }) : null).catch(() => { }));
  async function baja(ruta) {
    const u = abs(ruta); if (listos.has(u)) return true;
    const c = await abre(); if (!c) return false;
    try { const r = await fetch(u); if (!r.ok) return false; await c.put(u, r); listos.add(u); return true; } catch (e) { return false; }
  }
  /* cola de descargas: de una en una, sin prisa (lo que se oye y se ve manda) */
  const cola = []; let bajando = false, avisa = null;
  async function sigue() {
    if (bajando) return; bajando = true;
    while (cola.length) {
      const it = cola.shift(); await baja(it.v);
      if (avisa) avisa();
      await new Promise(r => setTimeout(r, document.hidden ? 50 : 250));
    }
    bajando = false;
  }
  function encola(imgs, delante) {
    const vs = V(); const nuevos = [];
    imgs.forEach(im => { const it = vs[im]; if (it && !listos.has(abs(it.v)) && !cola.some(x => x.v === it.v)) nuevos.push(it); });
    if (delante) cola.unshift(...nuevos); else cola.push(...nuevos);
    sigue();
  }
  const delDia = n => Object.keys(V()).filter(im => V()[im].d === n);   // en el orden en que salen (el manifiesto ya va ordenado)
  /* (r19) la pestaña se ha ocultado alguna vez desde… (las medidas de ese rato no valen: el navegador deja de pintar y cuenta perdidos) */
  let ocultos = 0; document.addEventListener('visibilitychange', () => { if (document.hidden) ocultos++; });
  let malas = 0, buenas = 0;
  B.videos = {
    hay: () => hay && !apagados() && Object.keys(V()).length > 0,
    /* (r19) para el botón de la portada: hay vídeos, pero esta pantalla los apagó; y volver a encenderlos */
    apagados: () => hay && apagados() && Object.keys(V()).length > 0,
    enciende() { ls(K_NO, null); malas = 0; buenas = 0; },
    medidas: [],
    /* al empezar un sabor: sus clips, en segundo plano, cuando ya ha arrancado (6 s después) */
    prepara(n) { if (!B.videos.hay()) return; setTimeout(() => lee().then(() => encola(delDia(n))), 6000); },
    /* «Preparar para clase»: todos; cb(hechos, total, bytesHechos, bytesTotal) */
    async todo(cb) {
      if (!hay) return false;
      try { if (navigator.storage && navigator.storage.persist) await navigator.storage.persist(); } catch (e) { }
      await lee(); const vs = V(), ims = Object.keys(vs);
      const total = ims.length, bt = ims.reduce((s, k) => s + (vs[k].b || 0), 0);
      const cuenta = () => { const h = ims.filter(k => listos.has(abs(vs[k].v))); if (cb) cb(h.length, total, h.reduce((s, k) => s + (vs[k].b || 0), 0), bt); return h.length; };
      avisa = cuenta; cuenta(); encola(ims, true);
      while (bajando || cola.length) await new Promise(r => setTimeout(r, 500));
      avisa = null; return cuenta() === total;
    },
    estado() { const vs = V(), ims = Object.keys(vs); return lee().then(() => ({ hechos: ims.filter(k => listos.has(abs(vs[k].v))).length, total: ims.length })); },
    /* para un concierto: imagen → URL del clip (blob en memoria), solo de los que ya están en la caché */
    async abre(imgs) {
      const m = new Map(); if (!B.videos.hay()) return m;
      await lee(); const c = await abre(); if (!c) return m;
      const vs = V();
      await Promise.all([...new Set(imgs)].map(async im => {
        const it = vs[im]; if (!it || !listos.has(abs(it.v))) return;
        try { const r = await c.match(abs(it.v)); if (r) m.set(im, URL.createObjectURL(await r.blob())); } catch (e) { }
      }));
      encola(imgs.filter(im => !m.has(im)), true);   // los que faltan de este concierto, los primeros de la cola (para la próxima vez)
      return m;
    },
    suelta(m) { if (m) m.forEach(u => { try { URL.revokeObjectURL(u); } catch (e) { } }); },
    /* la pantalla del aula: si pierde más de 1 de cada 4 fotogramas, desde ahora van las fotos.
       (r19) Se mide un rato de ~2 s ya en marcha (no el arranque), solo con la pestaña a la vista todo ese rato, y se apaga solo con
       pruebas repetidas en la misma sesión: 3 medidas malas y más malas que buenas. Para volver a probar: botón de la portada o ?videos=si */
    vigila(v) {
      if (!v.getVideoPlaybackQuality) return;
      let q0 = null, w0 = 0, h0 = 0;
      const mira = () => {
        if (document.hidden) { q0 = null; return; }
        if (!q0) { if (v.currentTime < .6) return; const q = v.getVideoPlaybackQuality(); q0 = [q.totalVideoFrames, q.droppedVideoFrames]; w0 = performance.now(); h0 = ocultos; return; }
        if (performance.now() - w0 < 2000) return;
        const q = v.getVideoPlaybackQuality(), tot = q.totalVideoFrames - q0[0], per = q.droppedVideoFrames - q0[1];
        if (ocultos !== h0) { q0 = null; return; }   // se ocultó en medio: otra vez
        if (tot < 45) return;                        // aún pocos fotogramas (o parado): seguir mirando
        v.removeEventListener('timeupdate', mira);
        const mala = per / tot > .25; if (mala) malas++; else buenas++;
        B.videos.medidas.push(per + '/' + tot); if (B.videos.medidas.length > 40) B.videos.medidas.shift();
        if (mala && malas >= 3 && malas > buenas && !apagados()) {
          ls(K_NO, '1'); console.info('[videos] la pantalla pierde fotogramas (' + B.videos.medidas.join(' ') + '): desde ahora, las fotos');
        }
      };
      v.addEventListener('timeupdate', mira);
    }
  };
})(window.BLUES);

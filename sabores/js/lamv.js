/* AFRO LATIN · 4 Sabores · fondos animados de las láminas (Iago 29-oct 22:47: «luces de lámparas, brillitos de mar, partículas… en todos
   los fondos»; 09:05: «la pantalla de mi clase es muy limitada: sin animaciones en vivo»). La vida de cada lámina va GRABADA en un bucle de
   vídeo de 8 s (herramientas/vida_lam.py → vl/sN/<lámina>.mp4; en el manifiesto, BLUES.VIDEOS['lam:<imagen>']), como el videoclip.
   - Encima de la lámina que se ve (la general o la variante que esté puesta), su bucle, si ya está en la caché (js/videos.js); la foto
     se queda debajo (sin el vídeo, se ve como siempre). El vídeo entra cuando ya pinta (sin fotograma vacío).
   - Un solo vídeo por plano a la vez: el de las láminas que no se ven se quita (no gasta).
   - Con la pausa (P), el bucle se para; si la pantalla pierde fotogramas, js/videos.js lo apunta y desde entonces van las fotos. */
'use strict';
(function (B) {
  const urls = new Map();   // 'lam:<imagen>' → URL del vídeo (blob), una vez leída de la caché
  const clave = r => 'lam:' + r;
  const hay = r => !!(r && B.VIDEOS && B.VIDEOS[clave(r)] && B.videos && B.videos.hay());
  async function url(r) {
    const k = clave(r); if (urls.has(k)) return urls.get(k);
    const m = await B.videos.abre([k]); const u = m.get(k) || null;
    if (u) urls.set(k, u);
    return u;
  }
  const quita = v => { try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) { } v.remove(); };
  const visible = el => el.querySelector('.lam.var.on') || el.querySelector('.lam.maestra');
  B.lamv = {
    sincro(el) {
      if (!el) return;
      const im = visible(el);
      B.$$('video.lamv', el).forEach(v => { if (v._de !== im) quita(v); });
      if (!im || !hay(im.dataset.r) || (im._lv && im._lv.isConnected)) return;
      const r = im.dataset.r;
      url(r).then(u => {
        if (!u || !im.isConnected || visible(el) !== im || (im._lv && im._lv.isConnected)) return;
        const v = document.createElement('video'); v.className = 'lam lamv';
        v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true; v.preload = 'auto'; v.disablePictureInPicture = true;
        v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('loop', ''); v.style.opacity = '0'; v._de = im; im._lv = v;
        v.addEventListener('playing', () => { v.style.opacity = '1'; }, { once: true });
        v.addEventListener('error', () => quita(v), { once: true });
        v.src = u; im.after(v);
        if (!pausaAnt) { const pr = v.play(); if (pr && pr.catch) pr.catch(() => { }); }
        if (B.videos.vigila) B.videos.vigila(v);
      });
    }
  };
  /* la pausa también para los fondos; y durante el concierto (su vídeo tapa la lámina) el fondo se para: un solo vídeo a la vez */
  let pausaAnt = false; const esc = () => document.getElementById('escena');
  if (B.alFotograma) B.alFotograma(() => {
    const e = esc(), para = !!B.pausado || !!(e && e.classList.contains('con-inter') && e.dataset.inter === 'concierto');
    if (para === pausaAnt) return; pausaAnt = para;
    B.$$('video.lamv').forEach(v => { if (para) v.pause(); else { const pr = v.play(); if (pr && pr.catch) pr.catch(() => { }); } });
  });
})(window.BLUES);

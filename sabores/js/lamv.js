/* AFRO LATIN · 4 Sabores · fondos animados de las láminas (Iago 29-oct 22:47: «luces de lámparas, brillitos de mar, partículas… en todos
   los fondos»; 09:05: «la pantalla de mi clase es muy limitada: sin animaciones en vivo»). La vida de cada lámina va GRABADA en un bucle de
   vídeo de 8 s (herramientas/vida_lam.py → vl/sN/<lámina>.mp4; en el manifiesto, BLUES.VIDEOS['lam:<imagen>']), como el videoclip.
   - Encima de cada lámina del plano (la general y sus variantes), su bucle, si ya está en la caché (js/videos.js); la foto se queda
     debajo (sin el vídeo, se ve como siempre).
   - (r18, Iago 30-oct en el aula: «justo antes del plano del radiocasete hay como un destello, un espasmo claro… y hay más así») antes,
     al cambiar de lámina se quitaba el vídeo de la de antes al momento y el de la nueva se creaba DESPUÉS: unos fotogramas de foto sola
     (sin las luces del bucle, que además se ve algo más claro) y luego el vídeo de golpe = el destello. Ahora los vídeos de TODAS las
     láminas del plano se preparan al montarlo (de uno en uno, primero el de la que se ve), parados y ocultos con su primer fotograma ya
     listo; justo antes del cambio el de la nueva se «arma» (opacidad 0,001 unos fotogramas: el compositor ya tiene su imagen) y en el
     cambio se enseña y el de la vieja se oculta en la MISMA tarea (mismo fotograma), sin fundidos.
   - Si el vídeo de una lámina aún no estaba listo cuando ella entró, esa vez se queda la foto hasta el siguiente cambio (nunca aparece
     el vídeo a mitad de plano: sería otro destello).
   - Solo suena (decodifica) el vídeo de la lámina que se ve; los demás, parados. Al irse el plano, sus vídeos se sueltan.
   - Con la pausa (P), el bucle se para; si la pantalla pierde fotogramas, js/videos.js lo apunta y desde entonces van las fotos. */
'use strict';
(function (B) {
  const urls = new Map();   // 'lam:<imagen>' → URL del vídeo (blob), una vez leída de la caché
  const clave = r => 'lam:' + r;
  const hay = r => !!(r && B.VIDEOS && B.VIDEOS[clave(r)] && B.videos && B.videos.hay());
  async function url(r) {
    const k = clave(r); if (urls.has(k)) return urls.get(k);
    const m = await B.videos.abre([k]); const u = m.get(k) || null;
    if (u) { urls.set(k, u); return u; }
    /* (r19, Iago 30-oct 14:39: «en el primer plano de Río no veo partículas») si aún no está en la caché (se baja por detrás, de uno en
       uno), el bucle va directo de la red (1–2 MB) en vez de quedarse en foto; abre() ya lo ha puesto el primero de la cola para la caché */
    const it = B.VIDEOS && B.VIDEOS[k];
    return it && navigator.onLine !== false ? new URL(it.v, location.href).href : null;
  }
  const quita = v => { try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) { } v.remove(); };
  const visible = el => el.querySelector('.lam.var.on') || el.querySelector('.lam.maestra');
  let pausaAnt = false;
  const juega = v => {
    if (pausaAnt || !v.paused) return;
    const pr = v.play(); if (pr && pr.catch) pr.catch(() => { });
    if (!v._vig && B.videos && B.videos.vigila) { v._vig = true; B.videos.vigila(v); }
  };
  /* un aviso por lámina: se resuelve cuando su vídeo tiene ya su primer fotograma (o cuando se sabe que no lo tendrá) */
  function aviso(im) {
    if (!im._lvAv) { let r; im._lvAv = new Promise(x => { r = x; }); im._lvAv.res = r; }
    return im._lvAv;
  }
  /* crea el vídeo de una lámina, parado y oculto, y espera a que tenga su primer fotograma (como mucho 5 s, para no parar la cola) */
  function crea(im, el) {
    const av = aviso(im), fin = () => { av.res(); pinta(el); };
    return url(im.dataset.r).then(u => new Promise(res => {
      if (!u || !im.isConnected) { fin(); return res(); }
      const v = document.createElement('video'); v.className = 'lam lamv';
      v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true; v.preload = 'auto'; v.disablePictureInPicture = true;
      v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('loop', ''); v.style.opacity = '0'; v._de = im; im._lv = v;
      let hecho = false;
      const ok = () => { if (hecho) return; hecho = true; fin(); res(); };
      v.addEventListener('loadeddata', () => { v._listo = true; ok(); pinta(el); }, { once: true });   // si llega tarde, valdrá para el próximo cambio
      v.addEventListener('error', () => { if (im._lv === v) im._lv = null; quita(v); ok(); }, { once: true });
      setTimeout(ok, 5000);
      v.src = u; im.after(v);   // justo encima de su foto (y debajo de las láminas que van después)
    })).catch(() => fin());
  }
  /* al montar un plano: los vídeos de todas sus láminas, de uno en uno (primero la que se ve) */
  function prepara(el) {
    if (el._lvPrep) return; el._lvPrep = true;
    const ims = B.$$('img.lam.maestra, img.lam.var', el).filter(im => im.dataset.r);
    const conV = ims.filter(im => hay(im.dataset.r)); ims.forEach(im => { if (!hay(im.dataset.r)) aviso(im).res(); });
    const vis = visible(el); conV.sort((a, b) => (b === vis) - (a === vis));
    conV.forEach(aviso);
    conV.reduce((p, im) => p.then(() => (el.isConnected && !el._lvFuera ? crea(im, el) : (aviso(im).res(), null))), Promise.resolve());
  }
  /* lo que se ve: el vídeo de la lámina visible (si ya estaba listo cuando ella entró); los demás, ocultos y parados. Todo en la misma tarea */
  function pinta(el) {
    if (!el || el._lvFuera) return;
    const im = visible(el); if (!im) return;
    const aLaVista = !!el._visto;
    /* ¿su vídeo estaba listo al entrar la lámina? Mientras el plano no se ve, se vuelve a mirar cada vez (puede entrar cuando quiera) */
    if (el._lvIm !== im || !el._lvVisto) { el._lvIm = im; el._lvOk = !!(im._lv && im._lv._listo); }
    el._lvVisto = aLaVista;
    B.$$('video.lamv', el).forEach(v => {
      const vis = v._de === im && el._lvOk && v._listo; v.classList.toggle('vis', vis);   // .vis: el que se ve (css: el plano «armado» solo deja ver este)
      if (vis) { v._arma = 0; v.style.zIndex = ''; if (v.style.opacity !== '1') v.style.opacity = '1'; juega(v); }
      else { const o = v._arma && performance.now() - v._arma < 2500 ? '0.001' : '0'; if (o === '0') { v._arma = 0; v.style.zIndex = ''; } if (v.style.opacity !== o) v.style.opacity = o; if (!v.paused) v.pause(); }
    });
  }
  /* (r18) ARMAR antes de un cambio: un vídeo oculto (opacidad 0) tarda un fotograma más que la foto en verse al destaparlo (el compositor
     no tiene su imagen); con opacidad 0,001 (invisible) unos fotogramas antes, ya la tiene y el cambio es de un solo fotograma */
  const fotogramas = n => new Promise(r => { const f = () => (--n <= 0 ? r() : requestAnimationFrame(f)); requestAnimationFrame(f); });
  function arma(im) {
    const v = im && im._lv, el = v && v.parentNode && v.parentNode.parentNode;
    if (!v || !v._listo || !el || el._lvFuera) return Promise.resolve();
    if (v.style.opacity === '1') return Promise.resolve();   // ya se ve
    if (v.style.opacity === '0.001' && v._armaP && performance.now() - v._arma < 2000) return v._armaP;   // ya armado hace poco
    v._arma = performance.now(); v.style.opacity = '0.001'; v.style.zIndex = '3';   // encima de todo mientras está armado: si quedara debajo de la lámina que se ve, el compositor no lo pintaría
    setTimeout(() => pinta(el), 2600);   // si al final no se usa, se desarma solo
    return (v._armaP = fotogramas(3));
  }
  B.lamv = {
    /* (r19) el motor la llama con las láminas del plano SIGUIENTE: su vídeo, ya leído de la caché (blob) antes de que haga falta */
    anticipa(r) { if (hay(r) && !urls.has(clave(r))) url(r).catch(() => { }); },
    /* el motor la llama al montar el plano, al cambiar de lámina y al enseñar el plano (siempre en la misma tarea que el cambio) */
    sincro(el) { if (!el) return; prepara(el); pinta(el); },
    /* promesa: el vídeo de esa lámina ya tiene su primer fotograma (o no lo tendrá). Sin vídeos, al momento */
    listo(im) { return im && im._lvAv ? im._lvAv : Promise.resolve(); },
    /* promesa: ese vídeo ya está listo Y armado (el motor espera esto, como mucho 0,9 s, antes de cambiar de lámina) */
    arma(im) { return B.lamv.listo(im).then(() => arma(im)); },
    /* el plano se va: en ese momento sus vídeos solo se PARAN (se quedan con su último fotograma) y se sueltan un rato después (suelta).
       (r18) soltar un vídeo (quitarle el src) le quita la imagen en el compositor AL MOMENTO, antes de que llegue el fotograma con lo nuevo:
       en la prueba salían unos fotogramas en negro (el vídeo, opaco, tapaba la foto de debajo y ya no pintaba nada). En el aula, con el
       ordenador justo, ese hueco es más largo: era el «espasmo» de los cambios de plano y de lámina */
    para(el) { if (!el) return; el._lvFuera = true; B.$$('video.lamv', el).forEach(v => { try { v.pause(); } catch (e) { } }); },
    suelta(el) { if (!el) return; el._lvFuera = true; B.$$('video.lamv', el).forEach(quita); B.$$('img.lam', el).forEach(im => { im._lv = null; if (im._lvAv) im._lvAv.res(); }); }
  };
  /* la pausa también para los fondos; y durante el concierto (su vídeo tapa la lámina) el fondo se para: un solo vídeo a la vez */
  const esc = () => document.getElementById('escena');
  if (B.alFotograma) B.alFotograma(() => {
    const e = esc(), para = !!B.pausado || !!(e && e.classList.contains('con-inter') && e.dataset.inter === 'concierto');
    if (para === pausaAnt) return; pausaAnt = para;
    if (para) B.$$('video.lamv').forEach(v => v.pause()); else B.$$('#pelicula .plano').forEach(pinta);
  });
})(window.BLUES);

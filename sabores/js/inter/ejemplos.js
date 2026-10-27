/* ══════════════════════════════════════════════════════════════════════
   4 SABORES · interacción «ejemplos»
   op: { videos:[{ src, tit, directo? }], tit?, directo? }
   Miniaturas en rejilla (primer fotograma con <video preload="metadata">; si el vídeo no existe o no carga, una baldosa con su número y el
   título debajo). Clic → reproductor en una ventana emergente centrada; se cierra con la ✕ o con Esc. «Seguir» al final.
   Un vídeo solo se pide si figura en el inventario (BLUES.RECURSOS), es una URL absoluta, o lleva `directo:true` (en el vídeo o en op), o
   no hay inventario cargado: así un vídeo que aún no existe no llena la consola de 404.
   ══════════════════════════════════════════════════════════════════════ */
'use strict';
(function (B) {
  const S = B.s4, U = B.iu;
  B.inter.ejemplos = async function (caja, op) {
    const ctl = op.ctl || B.control();
    caja.classList.add('s4', 's4-ejemplos'); S.sinFoco(caja);
    const videos = B.arr(op.videos).filter(v => v && v.src);
    const n = videos.length;
    const cols = n <= 1 ? 1 : n <= 2 ? 2 : n <= 4 ? 2 : 3;
    const hay = v => op.directo || v.directo || S.externa(v.src) || !B.RECURSOS || B.existe(v.src);

    caja.appendChild(B.el('div', 's4-fondo'));
    const centro = B.el('div', 's4-centro'); caja.appendChild(centro);
    const tit = B.el('div', 's4-tit'); tit.textContent = op.tit || 'Ejemplos'; centro.appendChild(tit);
    const rej = B.el('div', 's4-vids'); centro.appendChild(rej);
    rej.style.setProperty('--cols', cols);
    rej.dataset.n = n;
    /* ancho de cada miniatura (en u): que quepan todas las filas en el alto que hay (≈34 u), sin pasarse del ancho */
    const filas = Math.max(1, Math.ceil(n / cols));
    const hMini = (34 - 1.6 * (filas - 1)) / filas - 4.2;
    rej.style.setProperty('--w', Math.max(14, Math.min(cols === 1 ? 46 : cols === 2 ? 38 : 30, (92 - 2 * (cols - 1)) / cols, hMini * 16 / 9)).toFixed(1));
    const items = [];
    videos.forEach((v, i) => {
      const b = B.el('button', 's4-vid'); b.type = 'button'; b.dataset.i = i;
      const mini = B.el('div', 's4-mini');
      const col = S.CICLO[i % S.CICLO.length];
      const bal = S.baldosa(String(i + 1), col, 's4-vbald'); mini.appendChild(bal);      // sin fotograma: baldosa con su número (el título va debajo)
      if (hay(v)) {
        const vd = document.createElement('video');
        vd.muted = true; vd.preload = 'metadata'; vd.playsInline = true; vd.setAttribute('playsinline', ''); vd.tabIndex = -1;
        vd.className = 's4-vmini';
        vd.addEventListener('loadeddata', () => { mini.classList.add('con-video'); });
        vd.addEventListener('error', () => { vd.remove(); mini.classList.remove('con-video'); });
        vd.src = v.src + (v.src.indexOf('#') < 0 ? '#t=0.1' : '');
        mini.appendChild(vd);
      }
      const pl = B.el('span', 's4-play'); pl.innerHTML = S.ICO.play; mini.appendChild(pl);
      const ok = B.el('span', 's4-ok'); ok.innerHTML = S.ICO.visto; mini.appendChild(ok);
      const cp = B.el('div', 's4-cap'); cp.textContent = v.tit || ('Vídeo ' + (i + 1));
      b.appendChild(mini); b.appendChild(cp);
      b.addEventListener('click', e => { e.stopPropagation(); B.ac(); abre(i); });
      rej.appendChild(b); items.push(b);
    });
    if (!n) { const v = B.el('div', 's4-vacio'); v.textContent = 'Todavía no hay ejemplos.'; rej.appendChild(v); }
    const pie = B.el('div', 'i-pie'); caja.appendChild(pie);

    /* ── reproductor emergente ── */
    let modal = null, vid = null, quitaK = null, quitaP = null, hablabaMusica = false, estabaSonando = false;
    function cierra() {
      if (!modal) return;
      if (vid) { try { vid.pause(); vid.removeAttribute('src'); vid.load(); } catch (e) { } }
      if (quitaK) quitaK(); if (quitaP) quitaP();
      modal.remove(); modal = null; vid = null; quitaK = null; quitaP = null;
      if (hablabaMusica) { B.agacha(false); hablabaMusica = false; }
    }
    function abre(i) {
      if (modal) cierra();
      const v = videos[i];
      modal = B.el('div', 's4-modal'); modal.dataset.i = i;
      modal.addEventListener('click', e => { e.stopPropagation(); if (e.target === modal) cierra(); });
      const rp = B.el('div', 's4-reprod'); modal.appendChild(rp);
      const cab = B.el('div', 's4-rcab'); rp.appendChild(cab);
      const t = B.el('div', 's4-rtit'); t.textContent = v.tit || ('Vídeo ' + (i + 1)); cab.appendChild(t);
      const x = U.boton('', 'ico s4-x', () => cierra()); x.innerHTML = S.ICO.cierra; x.dataset.tip = 'Cerrar (Esc)'; x.setAttribute('aria-label', 'Cerrar'); cab.appendChild(x);
      const marco = B.el('div', 's4-rmarco'); rp.appendChild(marco);
      if (hay(v)) {
        vid = document.createElement('video');
        vid.controls = true; vid.autoplay = true; vid.playsInline = true; vid.setAttribute('playsinline', ''); vid.className = 's4-rvid';
        vid.addEventListener('error', () => { if (!marco.querySelector('.s4-rerr')) { const er = B.el('div', 's4-rerr'); er.textContent = 'No se puede reproducir este vídeo.'; marco.appendChild(er); } });
        vid.src = v.src;
        marco.appendChild(vid);
      } else {
        const er = B.el('div', 's4-rerr'); er.textContent = 'Este vídeo todavía no está disponible.'; marco.appendChild(er);
      }
      caja.appendChild(modal);
      items[i].classList.add('visto');
      if (B.hayAudio() && !hablabaMusica) { B.agacha(true); hablabaMusica = true; }      // baja la música del plano mientras suena el vídeo
      /* Esc cierra; Espacio/Intro mueven el vídeo (y no «Seguir» de detrás) */
      quitaK = B.captura.poner(e => {
        if (e.key === 'Escape') { cierra(); return true; }
        if (e.key === ' ' || e.key === 'Enter') { if (vid && !e.repeat) { vid.paused ? vid.play().catch(() => { }) : vid.pause(); } return true; }
        return false;
      });
      /* pausa del motor (P / Hecho real / ruleta): el vídeo se para y vuelve a sonar si estaba sonando */
      quitaP = S.alPausar(on => {
        if (!vid) return;
        if (on) { estabaSonando = !vid.paused; vid.pause(); }
        else if (estabaSonando) { estabaSonando = false; vid.play().catch(() => { }); }
      });
    }
    B.inter.ejemplos.ultimo = { abre, cierra, items, videos };      // gancho de pruebas

    const limpia = () => { cierra(); items.forEach(b => { const vd = b.querySelector('video'); if (vd) { try { vd.removeAttribute('src'); vd.load(); } catch (e) { } } }); };
    ctl.alMorir.push(limpia);
    try { await U.seguir(caja, ctl, 'Seguir', pie); }
    finally { limpia(); }
  };
  B.inter.ejemplos.recursos = op => [];
})(window.BLUES);

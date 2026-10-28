/* ══════════════════════════════════════════════════════════════════════
   4 SABORES · vida suave en el fondo de la portada (28-oct, Iago: «el fondo de la portada me gustaría animarlo un poco, aunque sea
   luces, algún brillo del mar… un pelín de vida»). Un lienzo encima del fondo y debajo del velo: las bombillas y farolillos
   respiran y titilan, el sol late muy despacio y en el mar salen destellos que se encienden y se apagan (sobre todo en el reflejo
   del sol). Puntos en BLUES.CFG.vidaPortada (fracciones del fondo). Nada se mueve de sitio. Sin animaciones si el sistema pide
   movimiento reducido. Se para solo al salir de la portada o con la pestaña oculta.
   ══════════════════════════════════════════════════════════════════════ */
'use strict';
(function (B) {
  let raf = 0;
  B.portadaVida = function (p) {
    const V = B.CFG && B.CFG.vidaPortada; if (!V) return;
    const fo = p.querySelector('.s4p-fondo'); if (!fo) return;
    const cv = document.createElement('canvas'); cv.className = 's4p-vida'; fo.after(cv);
    B.vidaLienzo(cv, V, () => document.body.contains(p) && document.getElementById('escena').classList.contains('en-portada'));
  };
  /* (28-oct, Iago: «me falta animación de fondos en el videoclip: hay velas, mar…») el mismo motor para cualquier lámina: un lienzo
     encima de la imagen con sus luces (V.luces = [[x, y, r], …]), y si se da, el sol (V.sol) y el mar (V.mar). sigue(): si devuelve
     false, se para. Cada lienzo se para solo al salir del documento. */
  B.vidaLienzo = function (cv, V, sigue) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const cx = cv.getContext('2d'); let W = 0, H = 0;
    const mide = () => { const r = cv.getBoundingClientRect(), k = 1; W = Math.round(r.width * k); H = Math.round(r.height * k); cv.width = W; cv.height = H; };
    mide();
    const luces = (V.luces || []).map(l => ({ x: l[0], y: l[1], r: Math.max(l[2], V.rMin || 0) * (V.rK || 1), ph: Math.random() * 6.3, w: l[3] ? 5 + Math.random() * 4 : .9 + Math.random() * 1.2, vela: !!l[3], fl: 0 }));   // las velas tiemblan rápido; las bombillas respiran
    const glints = []; let ant = 0, ultimoGlint = 0, tAnt = 0;
    /* (28-oct 09:13, Iago: «partículas como que caigan del cielo… en el videoclip echo de menos esas animacioncitas sutiles») V.caen = n.º
       de motitas de luz que bajan despacio, meciéndose, y se apagan cerca del suelo */
    const nuevaM = arriba => ({ x: Math.random() * 1.1 - .1, y: arriba ? -Math.random() * .08 : Math.random() * .9, vy: .012 + Math.random() * .024, s: .7 + Math.random() * 1.4, f: .4 + Math.random() * .9, p: Math.random() * 6.3, am: .006 + Math.random() * .01, vx: .022 * (.6 + Math.random() * .8) });   // (09:57) con brisa
    const motas = []; for (let i = 0; i < (V.caen || 0); i++) motas.push(nuevaM(false));
    const R = () => Math.random();
    function nuevoGlint(t) {
      const M = V.mar, s = M.sol && R() < .68;
      const x = s ? M.sol[0] + R() * (M.sol[1] - M.sol[0]) : M.x0 + R() * (M.x1 - M.x0);
      const y = M.y0 + Math.pow(R(), .8) * (M.y1 - M.y0);
      glints.push({ x, y, t0: t, vida: .55 + R() * .9, tam: (s ? 1.25 : .8) * (.6 + R() * .7) });
    }
    function tic(ms) {
      if (!cv.isConnected || (sigue && !sigue())) { raf = 0; return; }
      raf = requestAnimationFrame(tic);
      if (document.hidden || ms - ant < 33) return;   // ~30 fotogramas por segundo: suave y barato (también en la pantalla del aula)
      ant = ms; const t = ms / 1000;
      if (!W || (cv.clientWidth && Math.abs(cv.clientWidth * 1 - W) > 2)) mide();
      cx.clearRect(0, 0, W, H); cx.globalCompositeOperation = 'lighter';
      const u = W / 100;
      /* el sol: un halo que late muy despacio */
      if (V.sol) {
        const a = .07 + .05 * (.5 + .5 * Math.sin(t * .7)), x = V.sol[0] * W, y = V.sol[1] * H, r = V.sol[2] * W;
        const g = cx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(255,214,150,' + a + ')'); g.addColorStop(1, 'rgba(255,170,90,0)');
        cx.fillStyle = g; cx.beginPath(); cx.arc(x, y, r, 0, 6.3); cx.fill();
      }
      /* bombillas y farolillos: respiran, cada una a su ritmo, y de vez en cuando titilan */
      luces.forEach(l => {
        if (R() < (l.vela ? .05 : .012)) l.fl = .35 + R() * .3; l.fl *= .8;
        const a = Math.max(0, .26 + .12 * Math.sin(t * l.w + l.ph) - l.fl * .25), x = l.x * W, y = l.y * H, r = l.r * W;
        const g = cx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(255,226,160,' + a + ')'); g.addColorStop(.35, 'rgba(255,190,110,' + a * .5 + ')'); g.addColorStop(1, 'rgba(255,160,80,0)');
        cx.fillStyle = g; cx.beginPath(); cx.arc(x, y, r, 0, 6.3); cx.fill();
      });
      /* destellos en el mar */
      if (V.mar) {
        if (t - ultimoGlint > (V.mar.cada || .16) && glints.length < (V.mar.max || 9)) { nuevoGlint(t); ultimoGlint = t; }
        for (let i = glints.length - 1; i >= 0; i--) {
          const gl = glints[i], e = (t - gl.t0) / gl.vida; if (e >= 1) { glints.splice(i, 1); continue; }
          const a = Math.sin(Math.PI * e) * .85, x = gl.x * W, y = gl.y * H, L = gl.tam * u * .55;
          cx.strokeStyle = 'rgba(255,244,222,' + a + ')'; cx.lineWidth = Math.max(1, u * .07); cx.lineCap = 'round';
          cx.beginPath(); cx.moveTo(x - L, y); cx.lineTo(x + L, y); cx.moveTo(x, y - L * .55); cx.lineTo(x, y + L * .55); cx.stroke();
          const g = cx.createRadialGradient(x, y, 0, x, y, L * .7); g.addColorStop(0, 'rgba(255,240,210,' + a * .6 + ')'); g.addColorStop(1, 'rgba(255,240,210,0)');
          cx.fillStyle = g; cx.beginPath(); cx.arc(x, y, L * .7, 0, 6.3); cx.fill();
        }
      }
      if (motas.length) {
        const dt = tAnt ? Math.min(.1, t - tAnt) : 0; cx.fillStyle = '#FFE9C4';
        const rb = 1 + .6 * Math.sin(t * .23) * Math.sin(t * .11 + 1);
        motas.forEach((m, i) => { m.y += m.vy * dt; m.x += (m.vx * rb + m.am * Math.cos(t * m.f + m.p)) * dt; if (m.y > .9 || m.x > 1.05) { motas[i] = nuevaM(true); return; }
          const fin = Math.max(0, Math.min(1, (.9 - m.y) / .12, (m.y + .08) / .1)); cx.globalAlpha = .5 * fin * (.6 + .4 * Math.sin(t * m.f * 2 + m.p));
          const z = m.s * Math.max(1, u * .11); cx.fillRect(m.x * W - z / 2, m.y * H - z / 2, z, z); });
        cx.globalAlpha = 1;
      }
      tAnt = t;
      cx.globalCompositeOperation = 'source-over';
    }
    raf = requestAnimationFrame(tic);
  };
})(window.BLUES);

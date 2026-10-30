/* BLUES · vida en las láminas (19-oct, puntos 2 y 27 de Iago). NADA de mover la cámara: la vida la ponen efectos sobre
   la imagen quieta, como en Atonalidad (vida.js), La cabaña y el Magnetófono: fuego que se aviva, lámparas que respiran y
   titilan, polvo y brasas en el aire, humo y vapor, pájaros al fondo, destellos en el agua, el faro… y, en el tren, el
   traqueteo y las sombras de los postes. Cada plano trae su lista en data/vida.js (B.VIDA['P1.5'] = [{ t: 'fuego', … }]),
   con posiciones en fracciones de la lámina (x, y de 0 a 1; r, w en fracción del ancho).
   Dos lienzos a media resolución dentro del plano: «luz» (mezcla screen: fuego, halos, brasas, polvo, destellos) y «mate»
   (normal: humo, vapor, pájaros, sombras). Se paran con la pausa y al cambiar de plano; con «reducir movimiento», solo luz quieta. */
'use strict';
(function (B) {
  const V = B.vida = {};
  const RED = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const K = .5, az = (a, b) => a + Math.random() * (b - a), TAU = Math.PI * 2;
  const sprite = (stops) => { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); stops.forEach(([o, col]) => g.addColorStop(o, col)); x.fillStyle = g; x.fillRect(0, 0, 128, 128); return c; };
  const S = {
    halo: sprite([[0, 'rgba(255,205,135,1)'], [.3, 'rgba(255,175,95,.45)'], [1, 'rgba(255,150,70,0)']]),
    fuego: sprite([[0, 'rgba(255,170,70,1)'], [.35, 'rgba(255,110,30,.5)'], [1, 'rgba(200,60,10,0)']]),
    blanco: sprite([[0, 'rgba(255,250,230,1)'], [.25, 'rgba(255,240,205,.5)'], [1, 'rgba(255,230,190,0)']]),
    frio: sprite([[0, 'rgba(220,235,255,1)'], [.3, 'rgba(180,205,240,.45)'], [1, 'rgba(150,180,230,0)']]),
    humo: sprite([[0, 'rgba(200,196,188,.9)'], [.55, 'rgba(180,176,168,.35)'], [1, 'rgba(160,156,150,0)']]),
    humoOsc: sprite([[0, 'rgba(58,52,48,.9)'], [.55, 'rgba(50,45,42,.35)'], [1, 'rgba(40,36,34,0)']]),
    vapor: sprite([[0, 'rgba(240,240,236,.9)'], [.5, 'rgba(230,230,226,.32)'], [1, 'rgba(220,220,216,0)']]),
    mota: sprite([[0, 'rgba(255,246,226,1)'], [.4, 'rgba(255,240,214,.62)'], [1, 'rgba(255,236,206,0)']])
  };
  const vivos = new Set();
  let corre = false, ult = 0;

  /* ── los efectos: cada uno es { paso(dt, t, W, H), pinta(luz, mate, W, H) } ── */
  const FX = {
    luz(o) {   // lámpara/farol/ventana: halo cálido que respira y, de vez en cuando, titila un instante
      const f1 = az(.22, .6), f2 = az(.9, 1.8), p1 = az(0, TAU), p2 = az(0, TAU), tint = o.tint || 1;
      let prox = az(1.5, 11) / tint, ev = 0, nivel = 1;
      return {
        paso(dt, t) { prox -= dt; if (prox <= 0) { ev = az(.08, .32); prox = az(2, 12) / tint; } if (ev > 0) { ev -= dt; nivel = az(.35, .75); } else nivel = 1; this.v = (o.k || 1) * (.84 + .1 * Math.sin(t * f1 + p1) + .05 * Math.sin(t * f2 + p2)) * nivel; },
        pinta(L, M, W, H) { const R = (o.r || .04) * W * 2.6; L.globalAlpha = Math.min(1, .46 * this.v); L.drawImage(o.frio ? S.frio : S.halo, (o.x * W - R) * K, (o.y * H - R) * K, 2 * R * K, 2 * R * K); }
      };
    },
    fuego(o) {   // fuego que se aviva: parpadeo cálido rápido + brasas que suben
      const ph = [az(0, TAU), az(0, TAU), az(0, TAU)], chis = [];
      return {
        paso(dt, t, W, H) {
          this.v = (o.k || 1) * (.72 + .12 * Math.sin(t * 7.3 + ph[0]) + .09 * Math.sin(t * 12.1 + ph[1]) + .07 * Math.sin(t * 3.1 + ph[2]) + az(-.05, .05));
          const n = o.chispas || 0;
          if (n && chis.length < n && Math.random() < dt * n * .6) chis.push({ x: o.x + az(-.4, .4) * (o.r || .1), y: o.y + az(-.1, .2) * (o.r || .1), vx: az(-.012, .012), vy: az(-.06, -.025), vida: az(1.2, 3), t: 0, s: az(1, 2.4) });
          for (let i = chis.length - 1; i >= 0; i--) { const c = chis[i]; c.t += dt; c.x += (c.vx + .006 * Math.sin(t * 2 + i)) * dt; c.y += c.vy * dt * (W / H); if (c.t > c.vida) chis.splice(i, 1); }
        },
        pinta(L, M, W, H) {
          const R = (o.r || .1) * W * (1.25 + .08 * this.v);
          L.globalAlpha = Math.min(1, .48 * this.v); L.drawImage(S.fuego, (o.x * W - R) * K, (o.y * H - R) * K, 2 * R * K, 2 * R * K);
          chis.forEach(c => { const a = Math.sin(Math.PI * c.t / c.vida); L.globalAlpha = .9 * a; L.fillStyle = a > .6 ? '#FFD27A' : '#FF8A3A'; L.fillRect(c.x * W * K, c.y * H * K, c.s * K * 1.6, c.s * K * 1.6); });
        }
      };
    },
    faro(o) {   // el faro de la Torre: un destello que barre cada «periodo» segundos
      return {
        paso(dt, t) { const f = ((t % (o.periodo || 6)) / (o.periodo || 6)); this.v = .12 + .7 * Math.pow(Math.max(0, Math.cos(TAU * (f - .5) / 2.2 * 2)), 10); },
        pinta(L, M, W, H) { const R = (o.r || .05) * W * (1.4 + this.v * 1.8); L.globalAlpha = Math.min(1, this.v); L.drawImage(S.blanco, (o.x * W - R) * K, (o.y * H - R) * K, 2 * R * K, 2 * R * K); }
      };
    },
    polvo(o) {   // motas que flotan donde da la luz (o brasas diminutas en la sala de calderas)
      const z = o.zona || [0, 0, 1, 1], ms = [], n = o.n || 30, brasa = o.tono === 'brasa';
      const nueva = () => ({ x: az(z[0], z[2]), y: az(z[1], z[3]), vx: az(-.004, .004), vy: brasa ? az(-.012, -.003) : az(-.002, .005), s: az(.6, 1.9), f: az(.5, 2), p: az(0, TAU) });
      for (let i = 0; i < n; i++) ms.push(nueva());
      return {
        paso(dt, t) { ms.forEach((m, i) => { m.x += (m.vx + .0025 * Math.sin(t * .7 + m.p)) * dt; m.y += m.vy * dt; if (m.x < z[0] || m.x > z[2] || m.y < z[1] || m.y > z[3]) ms[i] = nueva(); }); this.t = t; },
        /* (Iago 30-oct: «no estás animando las partículas de polvo en el aire, sutiles: esas molan» · «un poco más de presencia, +30 % como mucho»)
           antes eran cuadraditos de 1–2 px que el vídeo se comía: ahora, motas redondas y suaves de 3–6 px */
        pinta(L, M, W, H) { const sp = brasa ? S.fuego : S.mota; ms.forEach(m => { L.globalAlpha = (brasa ? .55 : .5) * (.55 + .45 * Math.sin(this.t * m.f + m.p)); const R = m.s * 1.7 * (o.tam || 1); L.drawImage(sp, (m.x * W - R) * K, (m.y * H - R) * K, 2 * R * K, 2 * R * K); }); }
      };
    },
    sol(o) {   // (r19, Iago 30-oct 14:39: «cada vez que haya un sol, que haya el destello este del sol, bien colocado… y luego partículitas por
      //   ahí») el sol de la lámina (herramientas/vida_lam.py, SOL_LAM: mirado lámina a lámina): halo cálido grande que respira, el centro
      //   blanco y rayos finos que laten y giran muy despacio, como el sol de los videoclips. o.x, o.y; o.r = radio del disco (en anchos); o.k
      const nr = o.nr || 14, fa = Array.from({ length: nr }, () => az(0, TAU)), lo = Array.from({ length: nr }, (_, i) => (i % 2 ? .6 : 1) * az(.8, 1.2)), g0 = az(0, TAU);
      if (!S.rayo) { const c = document.createElement('canvas'); c.width = 256; c.height = 32; const x = c.getContext('2d');
        const g = x.createLinearGradient(0, 0, 256, 0); g.addColorStop(0, 'rgba(255,236,190,1)'); g.addColorStop(.35, 'rgba(255,214,150,.45)'); g.addColorStop(1, 'rgba(255,190,120,0)');
        x.fillStyle = g; x.fillRect(0, 0, 256, 32); x.globalCompositeOperation = 'destination-in';
        const v = x.createLinearGradient(0, 0, 0, 32); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(.5, 'rgba(0,0,0,1)'); v.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = v; x.fillRect(0, 0, 256, 32); S.rayo = c; }
      return {
        paso(dt, t) { this.t = t; this.v = (o.k || 1) * (.86 + .09 * Math.sin(t * .55 + fa[0]) + .05 * Math.sin(t * 1.3 + fa[1])); },
        pinta(L, M, W, H) {
          const X = o.x * W, Y = o.y * H, r = (o.r || .02) * W, k = this.v;
          let R = r * 15; L.globalAlpha = Math.min(1, .44 * k); L.drawImage(S.halo, (X - R) * K, (Y - R) * K, 2 * R * K, 2 * R * K);
          R = r * 3.8; L.globalAlpha = Math.min(1, .6 * k); L.drawImage(S.blanco, (X - R) * K, (Y - R) * K, 2 * R * K, 2 * R * K);
          const giro = g0 + .05 * Math.sin(this.t * .21);
          for (let i = 0; i < nr; i++) {
            const late = .5 + .5 * Math.sin(this.t * (.55 + .07 * i) + fa[i]); L.globalAlpha = Math.min(1, (o.rayos || .5) * k * (.4 + .6 * late));
            L.save(); L.translate(X * K, Y * K); L.rotate(giro + i * TAU / nr); L.drawImage(S.rayo, r * .7 * K, -r * .8 * K, r * 24 * lo[i] * K, r * 1.6 * K); L.restore();
          }
        }
      };
    },
    polvoluz(o) {   // (Iago 30-oct 12:28: «me faltan partículas… pequeñitas» · «tiene sentido que se vean cerca de fuentes de luz: polvito que se
      //   refleja si le da luz… cerca de lámparas o del sol; no es lo mismo que el tintineo») motas diminutas que flotan alrededor de cada lámpara,
      //   vela o del sol y solo se ven cuando la luz las alcanza: más vivas cerca de la fuente, se apagan al alejarse. o.f: [{x, y, R}] (R en anchos)
      const F = B.arr(o.f), ms = [], por = o.por || 6;
      const nueva = q => { const a = az(0, TAU), d = Math.sqrt(Math.random()) * .9; return { q, dx: Math.cos(a) * d, dy: Math.sin(a) * d, vx: az(-.05, .05), vy: az(-.07, .02), s: az(1.4, 2.4), f: az(.6, 1.8), p: az(0, TAU), t: 0, vida: az(3, 7) }; };
      F.forEach(q => { for (let i = 0; i < (q.n || por); i++) { const m = nueva(q); m.t = az(0, m.vida); ms.push(m); } });   // (r19) q.n: el sol lleva más
      return {
        paso(dt, t) { ms.forEach((m, i) => { m.t += dt; m.dx += (m.vx + .035 * Math.sin(t * .6 + m.p)) * dt; m.dy += (m.vy + .025 * Math.cos(t * .5 + m.p)) * dt; if (m.t > m.vida || m.dx * m.dx + m.dy * m.dy > 1.1) ms[i] = nueva(m.q); }); this.t = t; },
        pinta(L, M, W, H) { ms.forEach(m => { const q = m.q, rad = q.R * W, d2 = m.dx * m.dx + m.dy * m.dy, cerca = Math.max(0, 1 - d2), vive = Math.sin(Math.PI * Math.min(1, m.t / m.vida));
          L.globalAlpha = Math.min(1, (o.alfa || 1.5) * Math.pow(cerca, .6) * Math.min(1, 2.2 * vive) * (.75 + .25 * Math.sin(this.t * m.f * 2 + m.p))); if (L.globalAlpha < .02) return;
          const R = m.s * 1.7 * (o.tam || 1), X = q.x * W + m.dx * rad, Y = q.y * H + m.dy * rad * .85; L.drawImage(S.mota, (X - R) * K, (Y - R) * K, 2 * R * K, 2 * R * K); }); }
      };
    },
    caen(o) {   // (28-oct 09:13, Iago: «en cada plano con mar o velas, un poquito de animación y partículas como que caigan del cielo») motitas de
      //   luz que bajan despacio, meciéndose, y se apagan al acercarse al suelo
      const z = o.zona || [0, 0, 1, .85], ms = [], n = o.n || 40;
      /* (28-oct 09:57, Iago: «añade más partículas en general: da vidilla y se siente brisa») más motitas y una brisa suave que las lleva de lado */
      const br = o.brisa == null ? .022 : o.brisa;
      const nueva = arriba => ({ x: az(z[0] - .1, z[2]), y: arriba ? z[1] - az(0, .08) : az(z[1], z[3]), vy: az(.012, .034), s: az(.7, 2), f: az(.4, 1.3), p: az(0, TAU), am: az(.006, .016), vx: br * az(.6, 1.4) });
      for (let i = 0; i < n; i++) ms.push(nueva(false));
      return {
        paso(dt, t) { const r = 1 + .6 * Math.sin(t * .23) * Math.sin(t * .11 + 1); ms.forEach((m, i) => { m.y += m.vy * dt; m.x += (m.vx * r + m.am * Math.cos(t * m.f + m.p)) * dt; if (m.y > z[3] || m.x > z[2] + .05) ms[i] = nueva(true); }); this.t = t; },   // la brisa va y viene (r)
        pinta(L, M, W, H) { L.fillStyle = o.col || '#FFE9C4'; ms.forEach(m => { const fin = Math.min(1, (z[3] - m.y) / .12, (m.y - z[1] + .08) / .1);
          L.globalAlpha = Math.max(0, Math.min(1, (o.alfa || .5) * 1.15) * fin * (.6 + .4 * Math.sin(this.t * m.f * 2 + m.p))); const R = m.s * 1.5 * (o.tam || 1); L.drawImage(S.mota, (m.x * W - R) * K, (m.y * H - R) * K, 2 * R * K, 2 * R * K); }); }
      };
    },
    brillos(o) {   // destellos del sol o de la luna en el agua
      const z = o.zona || [0, .6, 1, 1], bs = [], n = o.n || 14;
      return {
        paso(dt) { if (bs.length < n && Math.random() < dt * n * 1.4) { const q = o.pts && o.pts.length ? o.pts[Math.floor(Math.random() * o.pts.length)] : null;   // (29-oct) o.pts: puntos sueltos del agua (mapas)
          bs.push({ x: q ? q[0] + az(-.004, .004) : az(z[0], z[2]), y: q ? q[1] + az(-.003, .003) : az(z[1], z[3]), t: 0, vida: az(.35, 1.1), s: (o.tam || 1) * az(.004, .011) }); } for (let i = bs.length - 1; i >= 0; i--) { bs[i].t += dt; if (bs[i].t > bs[i].vida) bs.splice(i, 1); } },
        pinta(L, M, W, H) { bs.forEach(b => { const a = Math.sin(Math.PI * b.t / b.vida), R = b.s * W; L.globalAlpha = (o.alfa || .42) * a; L.drawImage(o.tono === 'frio' ? S.frio : S.blanco, (b.x * W - R) * K, (b.y * H - R) * K, 2 * R * K, 2 * R * K); }); }
      };
    },
    bruma(o) {   // (Iago, 20-oct) neblina/humo de ambiente: velos grandes, casi transparentes y CONSTANTES que derivan muy despacio
      const z = o.zona || [0, 0, 1, 1], n = o.n || 7, ps = [];
      for (let i = 0; i < n; i++) ps.push({ x: az(z[0], z[2]), y: az(z[1], z[3]), r: az(.16, .32), v: az(.004, .01) * (Math.random() < .5 ? -1 : 1), f: az(0, 6.28), t: az(0, 30) });
      return {
        paso(dt) { ps.forEach(p => { p.t += dt; p.x += p.v * dt; if (p.x < z[0] - .25) p.x = z[2] + .2; if (p.x > z[2] + .25) p.x = z[0] - .2; }); },
        pinta(L, M, W, H) {
          const sp = o.color === 'oscuro' ? S.humoOsc : S.humo;
          ps.forEach(p => { const R = p.r * W * (1 + .08 * Math.sin(p.t * .2 + p.f)); M.globalAlpha = (o.alfa || .06) * (.7 + .3 * Math.sin(p.t * .15 + p.f)); M.drawImage(sp, (p.x * W - R) * K, (p.y * H + Math.sin(p.t * .1 + p.f) * .012 * H - R * .55) * K, 2 * R * K, 1.1 * R * K); });
        }
      };
    },
    humo(o) {   // humo que sube y se deshace (chimeneas, cigarros, la caldera) · (Iago, 20-oct) más sutil y continuo: muchas volutas tenues, no bolas
      const ps = [], dir = o.dir || [.15, -1], w = o.w || .05, ritmo = 6.5 * (o.dens || 1);
      const L0 = Math.hypot(dir[0], dir[1]) || 1, dx = dir[0] / L0, dy = dir[1] / L0, vel = (o.vel || .025) * .7;
      for (let i = 0; i < 40; i++) ps.push({ x: o.x + az(-.5, .5) * w, y: o.y, t: az(0, 9), vida: az(7, 11), g: az(.8, 1.3) });
      return {
        paso(dt) {
          if (Math.random() < dt * ritmo) ps.push({ x: o.x + az(-.5, .5) * w, y: o.y, t: 0, vida: az(7, 11), g: az(.8, 1.3) });
          for (let i = ps.length - 1; i >= 0; i--) { const p = ps[i]; p.t += dt; const k = p.t / p.vida; p.x += (dx * vel * (1 - k * .4) + .01 * k) * dt; p.y += dy * vel * 1.6 * (1 - k * .5) * dt; if (p.t > p.vida) ps.splice(i, 1); }
        },
        pinta(L, M, W, H) {
          const sp = o.color === 'oscuro' ? S.humoOsc : S.humo;
          ps.forEach(p => { const k = p.t / p.vida, R = w * W * (.9 + 3.6 * k) * p.g; M.globalAlpha = (o.alfa || .3) * .32 * Math.sin(Math.PI * Math.min(1, k * 1.2)) * (1 - k * .3); M.drawImage(sp, (p.x * W - R) * K, (p.y * H - R) * K, 2 * R * K, 2 * R * K); });
        }
      };
    },
    vapor(o) {   // escapes de vapor a presión: ráfagas cada pocos segundos
      const ps = [], dir = o.dir || [.1, -1], L0 = Math.hypot(dir[0], dir[1]) || 1, dx = dir[0] / L0, dy = dir[1] / L0;
      let prox = az(1, o.cada || 6), chorro = 0;
      return {
        paso(dt) {
          prox -= dt; if (prox <= 0) { chorro = az(.6, 1.2); prox = az(.7, 1.3) * (o.cada || 6); if (B.sfx && o.sonido) B.sfx(o.sonido, { vol: .35 }); }
          if (chorro > 0) { chorro -= dt; for (let i = 0; i < 3; i++) ps.push({ x: o.x + az(-.006, .006), y: o.y, t: 0, vida: az(1.2, 2.4), v: az(.09, .16), g: az(.8, 1.3) }); }
          for (let i = ps.length - 1; i >= 0; i--) { const p = ps[i]; p.t += dt; const fr = 1 - p.t / p.vida * .7; p.x += (dx * p.v * fr + .01) * dt; p.y += dy * p.v * 1.7 * fr * dt; if (p.t > p.vida) ps.splice(i, 1); }
        },
        pinta(L, M, W, H) { ps.forEach(p => { const k = p.t / p.vida, R = W * (.008 + .07 * k) * p.g; M.globalAlpha = .34 * (1 - k); M.drawImage(S.vapor, (p.x * W - R) * K, (p.y * H - R) * K, 2 * R * K, 2 * R * K); }); }
      };
    },
    pajaros(o) {   // gaviotas lejanas: planean y, a ratos, aletean
      const z = o.zona || [0, 0, 1, .3], ps = [], n = o.n || 3, tam = o.tam || .011;
      const nuevo = (dentro) => { const izq = Math.random() < .5; return { x: dentro ? az(z[0], z[2]) : (izq ? z[0] : z[2]), y: az(z[1], z[3]), vx: (izq ? 1 : -1) * az(.008, .02), fase: az(0, TAU), ale: 0, prox: az(1, 5), s: tam * az(.7, 1.25), espera: dentro ? 0 : az(2, 9) }; };
      for (let i = 0; i < n; i++) ps.push(nuevo(true));
      return {
        paso(dt, t) { ps.forEach((p, i) => { if (p.espera > 0) { p.espera -= dt; return; } p.x += p.vx * dt; p.y += .004 * Math.sin(t * .6 + p.fase) * dt; p.prox -= dt; if (p.prox <= 0) { p.ale = az(.8, 1.6); p.prox = az(3, 8); } if (p.ale > 0) p.ale -= dt; if (p.x < z[0] || p.x > z[2]) ps[i] = nuevo(false); }); this.t = t; },
        pinta(L, M, W, H) {
          M.strokeStyle = o.color || 'rgba(28,26,30,.8)'; M.lineCap = 'round';
          ps.forEach(p => { if (p.espera > 0) return; const s = p.s * W * K, x = p.x * W * K, y = p.y * H * K, a = p.ale > 0 ? Math.sin(this.t * 11 + p.fase) * .55 : .18;
            M.globalAlpha = Math.max(0, Math.min(1, Math.min(p.x - z[0], z[2] - p.x) / .07)); M.lineWidth = Math.max(1, s * .16); M.beginPath(); M.moveTo(x - s, y - s * a); M.quadraticCurveTo(x - s * .4, y - s * .35, x, y); M.quadraticCurveTo(x + s * .4, y - s * .35, x + s, y - s * a); M.stroke(); });
        }
      };
    },
    gaviotas(o) {   // (29-oct, vídeos de las láminas) gaviotas que cruzan el cielo en un tiempo exacto (o.P s, el del bucle): sin costura
      const z = o.zona || [0, .03, 1, .22], n = o.n || 2, P = o.P || 8, tam = o.tam || .010, ps = [];
      for (let i = 0; i < n; i++) ps.push({ f: i / n + az(0, .35 / n), y: az(z[1], z[3]), dir: Math.random() < .5 ? 1 : -1, s: tam * az(.75, 1.2), fa: az(0, TAU) });
      return {
        paso(dt, t) { this.t = t; },
        pinta(L, M, W, H) {
          const t = this.t; M.strokeStyle = o.color || 'rgba(30,28,32,.78)'; M.lineCap = 'round'; M.globalAlpha = 1;
          ps.forEach(p => {
            const u = ((t / P + p.f) % 1 + 1) % 1, an = z[2] - z[0];   // (Iago 30-oct) solo por SU cielo: entran y salen desvaneciéndose en los bordes de la zona
            const x = p.dir > 0 ? z[0] + u * an : z[2] - u * an; M.globalAlpha = Math.max(0, Math.min(1, Math.min(x - z[0], z[2] - x) / .07));
            const y = p.y + .012 * Math.sin(TAU * t / P + p.fa);
            const bate = Math.max(0, Math.sin(TAU * 2 * t / P + p.fa)), a = .16 + .5 * bate * Math.sin(TAU * 8 * t / P + p.fa);   // planea y, a ratos, aletea
            const S = p.s * W * K, X = x * W * K, Y = y * H * K;
            M.lineWidth = Math.max(1, S * .16); M.beginPath(); M.moveTo(X - S, Y - S * a); M.quadraticCurveTo(X - S * .4, Y - S * .35, X, Y); M.quadraticCurveTo(X + S * .4, Y - S * .35, X + S, Y - S * a); M.stroke();
          });
        }
      };
    },
    tren(o, el) {   // el tren en marcha sin mover la cámara: traqueteo (vibración sutil al ritmo de las vías) y sombras de postes
      el.classList.add('vida-tren');
      let prox = az(.4, 1.2), sombras = [];
      return {
        paso(dt) { prox -= dt; if (prox <= 0) { sombras.push({ x: 1.15, v: az(2.6, 3.4), a: az(.1, .2), w: az(.03, .06) }); prox = az(.55, 1.6); } sombras.forEach(s => s.x -= s.v * dt); sombras = sombras.filter(s => s.x > -.2); },
        pinta(L, M, W, H) { sombras.forEach(s => { const g = M.createLinearGradient((s.x - s.w) * W * K, 0, (s.x + s.w) * W * K, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.5, 'rgba(0,0,0,' + s.a + ')'); g.addColorStop(1, 'rgba(0,0,0,0)'); M.globalAlpha = 1; M.fillStyle = g; M.fillRect((s.x - s.w) * W * K, 0, 2 * s.w * W * K, H * K); }); }
      };
    },
    hojas(o) {   // hojas de otoño que caen girando (el porche de Weeksville)
      const z = o.zona || [0, 0, 1, 1], n = o.n || 8, hs = [], COL = o.cols || ['#B5652A', '#C98A3A', '#8E4A1E', '#D9A04A'];
      const nueva = dentro => ({ x: az(z[0], z[2]), y: dentro ? az(z[1], z[3]) : z[1] - .03, vy: az(.025, .06), fase: az(0, TAU), giro: az(1.5, 4), s: az(.008, .014), col: COL[Math.random() * COL.length | 0] });
      for (let i = 0; i < n; i++) hs.push(nueva(true));
      return {
        paso(dt, t) { hs.forEach((h, i) => { h.y += h.vy * dt; h.x += .022 * Math.sin(t * 1.3 + h.fase) * dt; h.ed = (h.ed || 0) + dt; if (h.y > 1.06) hs[i] = nueva(false); }); this.t = t; },   // (Iago 30-oct) hasta salir por abajo
        pinta(L, M, W, H) { hs.forEach(h => { const s = h.s * W * K, a = Math.sin(this.t * h.giro + h.fase); M.save(); M.translate(h.x * W * K, h.y * H * K); M.rotate(a * 1.2); M.scale(1, .35 + .65 * Math.abs(a)); M.globalAlpha = .92 * (h.y < 0 ? 1 : Math.min(1, (h.ed || 0) / .8)); M.fillStyle = h.col; M.beginPath(); M.ellipse(0, 0, s, s * .55, 0, 0, TAU); M.fill(); M.restore(); }); }
      };
    },
    farol(o) {   // farol que se balancea (tren, barco): la luz va y viene
      const per = o.periodo || 2.2, ph = az(0, TAU);
      return {
        paso(dt, t) { this.dx = (o.amp || .012) * Math.sin(TAU * t / per + ph); this.v = (o.k || 1) * (.86 + .08 * Math.sin(t * 5.1 + ph)); },
        pinta(L, M, W, H) { const R = (o.r || .05) * W * 2.6; L.globalAlpha = Math.min(1, .6 * this.v); L.drawImage(S.halo, ((o.x + this.dx) * W - R) * K, (o.y * H - R) * K, 2 * R * K, 2 * R * K); }
      };
    },
    luces(o) {   // (4 Sabores, 27-oct noche, Iago: «aprovecha las velas para hacer tintineo… animación sutil de las luces») cada vela o bombilla
      //   de la lámina (data/luces_s1.js) con su halo: las velas (abajo) tiemblan rápido y a saltos; las bombillas y farolillos respiran despacio
      const ps = B.arr(o.p).map(([x, y, r, vela]) => ({ x, y, r, vela, f: az(.5, 1.4), ph: az(0, TAU), n: 0, obj: 0, prox: 0, v: 1 }));
      return {
        paso(dt, t) { ps.forEach(q => {
          if (q.vela === 2) {   // (28-oct 09:09, Iago: «anima las lucecitas») guirnalda de bombillitas: respiran y, a ratos, una chispa
            q.prox -= dt; if (q.prox <= 0) { q.pico = 1; q.prox = az(.8, 4.5); } q.pico = Math.max(0, (q.pico || 0) - dt * 2.4);
            q.v = .62 + .22 * Math.sin(t * q.f * 2.2 + q.ph) + .9 * q.pico; }
          else if (q.vela) { q.prox -= dt; if (q.prox <= 0) { q.obj = az(-1, 1); q.prox = az(.05, .22); } q.n += (q.obj - q.n) * Math.min(1, dt * 14); q.v = .78 + .22 * q.n; }
          else q.v = .86 + .14 * Math.sin(t * q.f + q.ph);
        }); },
        pinta(L, M, W, H) { const k = o.k || 1; ps.forEach(q => { const R = q.r * W * (q.vela === 2 ? 2.8 : q.vela ? 3.2 : 2.4); L.globalAlpha = Math.max(0, Math.min(1, (q.vela === 2 ? .5 : q.vela ? .42 : .3) * k * q.v)); L.drawImage(S.halo, (q.x * W - R) * K, (q.y * H - R) * K, 2 * R * K, 2 * R * K); }); }
      };
    },
    parpadeo(o) {   // (4 Sabores, 27-oct, Iago: «que la iluminación tenga algo de vida») luz de velas/bombillas de toda la escena:
      //   un velo cálido casi invisible que respira y tiembla un poco (sin posiciones: vale para cualquier lámina con luz cálida)
      const k = o.k || 1, col = o.col || '255,170,80'; let n1 = 0, obj = 0, prox = 0;
      return {
        paso(dt, t) { prox -= dt; if (prox <= 0) { obj = az(-1, 1); prox = az(.08, .35); } n1 += (obj - n1) * Math.min(1, dt * 6); this.v = .5 + .5 * Math.sin(t * .9) * .6 + n1 * .25; },
        pinta(L, M, W, H) { L.globalAlpha = Math.max(0, .035 * k * this.v); L.fillStyle = 'rgb(' + col + ')'; L.fillRect(0, 0, W * K, H * K); }
      };
    },
    lluvia(o) {   // (20-oct) lluvia fina en diagonal (la vuelta a Coruña)
      const z = o.zona || [0, 0, 1, 1], n = o.n || 70, gs = [];
      const nueva = arriba => ({ x: az(z[0] - .05, z[2]), y: arriba ? z[1] - az(0, .1) : az(z[1], z[3]), v: az(.6, .95), l: az(.018, .04) });
      for (let i = 0; i < n; i++) gs.push(nueva(false));
      return {
        paso(dt) { gs.forEach((g, i) => { g.y += g.v * dt; g.x += g.v * .16 * dt; if (g.y > z[3]) gs[i] = nueva(true); }); },
        pinta(L, M, W, H) { M.save(); M.strokeStyle = '#D9E4F2'; M.lineWidth = Math.max(1, K * .9); M.globalAlpha = o.alfa || .2; M.beginPath(); gs.forEach(g => { M.moveTo(g.x * W * K, g.y * H * K); M.lineTo((g.x - g.l * .16) * W * K, (g.y - g.l * 1.7) * H * K); }); M.stroke(); M.restore(); }
      };
    }
  };

  /* ── montar en un plano ── */
  V.pon = function (el, cfg) {
    if (!el || !cfg || !cfg.length) return;
    const luz = document.createElement('canvas'), mate = document.createElement('canvas');
    luz.className = 'vida vida-luz'; mate.className = 'vida vida-mate';
    el.appendChild(mate); el.appendChild(luz);
    const v = { el, luz, mate, L: luz.getContext('2d'), M: mate.getContext('2d'), fx: [], W: 0, H: 0, t: az(0, 50) };
    cfg.forEach(o => { const f = FX[o.t]; if (f) { const e = f(o, el); e.H = 0; v.fx.push(e); } });
    if (!v.fx.length) return;
    vivos.add(v);
    if (!corre) { corre = true; ult = performance.now(); requestAnimationFrame(bucle); }
  };
  function mide(v) {
    const w = v.el.clientWidth || 1280, h = v.el.clientHeight || 720;
    if (w !== v.W || h !== v.H) { v.W = w; v.H = h; [v.luz, v.mate].forEach(c => { c.width = Math.max(2, Math.round(w * K)); c.height = Math.max(2, Math.round(h * K)); }); v.fx.forEach(e => e.H = h); }
  }
  /* (ronda 6, rendimiento en el aula) los efectos se pintan a ~30 fotogramas por segundo, no a 60: se ven igual y el ordenador
     respira (las láminas, la voz y las interacciones van primero) */
  function bucle(ahora) {
    if (ahora - ult < 30) { if (vivos.size) requestAnimationFrame(bucle); else corre = false; return; }
    const dt = Math.min(.1, (ahora - ult) / 1000); ult = ahora;
    vivos.forEach(v => {
      if (!v.el.isConnected) { vivos.delete(v); return; }
      if (B.pausado) return;
      mide(v);
      const d = RED ? 0 : dt; v.t += d;
      v.L.clearRect(0, 0, v.luz.width, v.luz.height); v.M.clearRect(0, 0, v.mate.width, v.mate.height);
      v.fx.forEach(e => { try { e.paso(d, v.t, v.W, v.H); e.pinta(v.L, v.M, v.W, v.H); } catch (er) { } });
      v.L.globalAlpha = 1; v.M.globalAlpha = 1;
    });
    if (vivos.size) requestAnimationFrame(bucle); else corre = false;
  }
})(window.BLUES);

/* 4 SABORES · Sabor 2 · CAPAS (palabras clave, maestros de ceremonias en PNG, instrumentos) · C1, 28-oct-2026. Igual que data/capas_s1.js:
   sin subtítulos en lo hablado; en el centro, palabras clave literales; los MC en PNG de medio cuerpo (hojas de herramientas/recorta_s2.py).
   Las líneas, con sus tiempos, las pone data/capas_s2_t.js (herramientas/capas_s2_tiempos.py). Se SUMA a lo del Sabor 1 (no lo pisa). */
(function (B) {
  const C = B.CAPAS = B.CAPAS || { sinSubtitulos: true, poses: {}, planos: {}, lineas: {} };
  const F = 'FAUSTINO', R = 'RAMONCITO';
  const P = (q, ps, def) => { const o = { _: def }; ps.forEach(p => { o[p] = 'img/s2/pj/' + q.toLowerCase() + '_' + p + '.webp'; }); return o; };
  const POSES = ['sorpresa', 'explica', 'rie', 'piensa', 'aplaude', 'baila', 'senala', 'brazos', 'oreja', 'pulgar'];
  Object.assign(C.poses, { FAUSTINO: P(F, POSES.concat(['saluda', 'corazon']), 'explica'), RAMONCITO: P(R, POSES, 'explica') });
  const pj = (q, pose) => ({ pj: { q, pose, lado: 'der' } });
  Object.assign(C.planos, {
    s2_b3: pj(F, 'saluda'), s2_b4: pj(F, 'explica'), s2_b6: pj(F, 'explica'), s2_b7: pj(F, 'senala'), s2_b7b: pj(F, 'explica'),
    s2_b8: pj(F, 'pulgar'), s2_b9: Object.assign(pj(F, 'brazos'), { velo: false }),
    s2_h2: pj(R, 'brazos'), s2_h3: pj(R, 'explica'), s2_h4: pj(R, 'senala'), s2_h5: pj(R, 'explica'), s2_h6: pj(R, 'oreja'), s2_h7: pj(R, 'explica'),
    s2_h7b: pj(R, 'explica'), s2_h8: pj(R, 'pulgar'), s2_h9: Object.assign(pj(R, 'brazos'), { velo: false })
  });
})(window.BLUES);

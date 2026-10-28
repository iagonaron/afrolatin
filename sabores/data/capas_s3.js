/* 4 SABORES · Sabor 3 · CAPAS (palabras clave, maestros de ceremonias en PNG, instrumentos) · C1, 28-oct-2026. Igual que data/capas_s2.js:
   sin subtítulos en lo hablado; en el centro, palabras clave literales; los MC en PNG (hojas de herramientas/recorta_s3.py).
   Las líneas, con sus tiempos, las pone data/capas_s3_t.js (herramientas/capas_s3_tiempos.py). Se SUMA a lo de los sabores 1 y 2 (no lo pisa). */
(function (B) {
  const C = B.CAPAS = B.CAPAS || { sinSubtitulos: true, poses: {}, planos: {}, lineas: {} };
  const RI = 'RITINHA', ST = 'SEU TOM';
  const P = (q, f, ps, def) => { const o = { _: def }; ps.forEach(p => { o[p] = 'img/s3/pj/' + f + '_' + p + '.webp'; }); return o; };
  const COMUN = ['saluda', 'explica', 'rie', 'piensa', 'baila', 'senala', 'brazos', 'oreja', 'pulgar'];
  Object.assign(C.poses, { RITINHA: P(RI, 'ritinha', COMUN.concat(['aplaude']), 'explica'), 'SEU TOM': P(ST, 'seutom', COMUN.concat(['corazon']), 'explica') });
  const pj = (q, pose) => ({ pj: { q, pose, lado: 'der' } });
  Object.assign(C.planos, {
    s3_s3: pj(RI, 'saluda'), s3_s4: pj(RI, 'explica'), s3_s5: pj(RI, 'explica'), s3_s6: pj(RI, 'senala'), s3_s6b: pj(RI, 'explica'), s3_s7: pj(RI, 'explica'),
    s3_s8: pj(RI, 'pulgar'), s3_s9: Object.assign(pj(RI, 'brazos'), { velo: false }), s3_b0: pj(RI, 'explica'),
    s3_b2: pj(ST, 'saluda'), s3_b3: pj(ST, 'explica'), s3_b4: pj(ST, 'explica'), s3_b5: pj(ST, 'explica'), s3_b6: pj(ST, 'piensa'), s3_b7: pj(ST, 'oreja'),
    s3_b8: pj(ST, 'pulgar'), s3_b9: Object.assign(pj(ST, 'brazos'), { velo: false })
  });
})(window.BLUES);

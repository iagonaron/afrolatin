/* 4 SABORES · Sabor 4 · CAPAS (palabras clave, maestros de ceremonias en PNG, instrumentos) · C1, 29-oct-2026. Igual que data/capas_s3.js:
   sin subtítulos en lo hablado; en el centro, palabras clave literales; los MC en PNG (hojas de herramientas/recorta_s4.py).
   Las líneas, con sus tiempos, las pone data/capas_s4_t.js (herramientas/capas_s4_tiempos.py). Se SUMA a lo de los sabores 1 a 3 (no lo pisa). */
(function (B) {
  const C = B.CAPAS = B.CAPAS || { sinSubtitulos: true, poses: {}, planos: {}, lineas: {} };
  const PV = 'PAPO VEGA', DM = 'DON MAMBERTO', LU = 'LUENA', CH = 'CHUCHO';
  const P = (f, ps, def) => { const o = { _: def }; ps.forEach(p => { o[p] = 'img/s4/pj/' + f + '_' + p + '.webp'; }); return o; };
  Object.assign(C.poses, {
    'PAPO VEGA': P('papo', ['saluda', 'explica', 'rie', 'piensa', 'aplaude', 'baila', 'senala', 'brazos', 'oreja', 'pulgar'], 'explica'),
    LUENA: P('luena', ['saluda', 'explica', 'rie', 'piensa', 'baila', 'senala', 'brazos', 'oreja', 'pulgar', 'corazon'], 'explica'),
    'DON MAMBERTO': P('mamberto', ['saluda', 'explica', 'rie', 'senala', 'brazos', 'pulgar'], 'explica'),
    CHUCHO: P('chucho', ['grito', 'explica'], 'explica')
  });
  const pj = (q, pose) => ({ pj: { q, pose, lado: 'der' } });
  Object.assign(C.planos, {
    s4_s2: pj(PV, 'saluda'), s4_s3: pj(PV, 'explica'), s4_s4: pj(PV, 'explica'), s4_s5: pj(PV, 'explica'), s4_s5b: pj(PV, 'rie'), s4_s6: pj(PV, 'explica'),
    s4_s6b: pj(PV, 'explica'), s4_s7: pj(PV, 'explica'), s4_s8: pj(PV, 'pulgar'), s4_s9: Object.assign(pj(PV, 'brazos'), { velo: false }),
    s4_m1: pj(DM, 'saluda'), s4_m2: pj(LU, 'saluda'),
    s4_k2: pj(LU, 'saluda'), s4_k3: pj(LU, 'explica'), s4_k3b: pj(LU, 'explica'), s4_k4: pj(LU, 'explica'), s4_k5: pj(LU, 'corazon'), s4_k6: pj(LU, 'explica'),
    s4_k7: pj(LU, 'pulgar'), s4_k8: Object.assign(pj(LU, 'brazos'), { velo: false })
  });
})(window.BLUES);

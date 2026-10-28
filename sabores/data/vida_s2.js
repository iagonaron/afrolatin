/* 4 SABORES · Sabor 2 · vida en las láminas (C1, 28-oct-2026), como data/vida_s1.js: velas, farolillos y bombillas que tintinean uno a
   uno (data/luces_s2.js + los grandes, puestos a mano), brillos solo dentro del agua, motitas de luz que caen con brisa y un poco de polvo.
   Efectos de js/vida.js; posiciones en fracciones de la lámina. Quitar este fichero = láminas quietas. */
(function (B) {
  const V = B.VIDA = B.VIDA || {}, L = B.LUCES || {};
  const caen = (n, z) => ({ t: 'caen', n: Math.round((n || 24) * 1.8), zona: z || [0, 0, 1, .9] });
  const polvo = (n, z) => ({ t: 'polvo', n: n || 16, zona: z || [0, .1, 1, 1] });
  const mar = (z, n) => ({ t: 'brillos', zona: z, n: n || 7 });
  const hojas = z => ({ t: 'hojas', zona: z || [.6, 0, 1, .5], n: 5, cols: ['#6E8B3D', '#8A9A4A', '#A88A4A', '#5F7A35'] });
  // luces de la lámina: las que encuentra herramientas/luces_s2.py + las grandes a mano; en las guirnaldas de arriba, bombillitas (2)
  const luces = (img, extra, guirnalda) => {
    const p = (L['img/s2/' + img + '.webp'] || []).map(q => guirnalda && q[1] < .45 ? [q[0], q[1], Math.min(q[2], .012), 2] : q);
    return { t: 'luces', p: p.concat(extra || []) };
  };
  // (a mano) el salón: apliques, farolas de fuera y lámparas de las mesas; la Casa de la Trova: la farola y los faroles de pared
  const SALON = [[.025, .125, .02, 1], [.095, .125, .02, 1], [.05, .21, .022, 1], [.232, .132, .016, 1], [.359, .139, .018, 1], [.435, .128, .016, 1],
                 [.613, .139, .018, 1], [.73, .132, .016, 1], [.877, .139, .018, 1], [.906, .23, .02, 1],
                 [.084, .583, .03, 1], [.231, .757, .034, 1], [.85, .618, .03, 1], [.977, .708, .03, 1]];
  const FACHADA = [[.111, .18, .03, 1], [.432, .57, .018, 1], [.549, .528, .018, 1], [.694, .507, .02, 1], [.922, .458, .022, 1], [.289, .646, .01, 1]];
  Object.assign(V, {
    s2_b1: [luces('b_calle'), polvo(14), mar([.47, .36, .85, .45]), caen(22)],
    s2_b2: [luces('b_trovadores'), polvo(12), mar([.62, .06, 1, .12], 5), caen(22)],
    s2_b3: [luces('b_fachada', FACHADA), polvo(14), hojas([0, 0, .3, .5]), caen(22)],
    's2_b3:RECURSO_BALCON': [luces('b_balcones'), mar([.25, .4, .7, .52]), caen(22)],
    s2_b4: [luces('b_mexico'), polvo(14), caen(20)],
    s2_b12: [luces('b_llamada'), caen(18)]
  });
  // el salón de «cómo reconocerlo», el mezclador y el concierto: menos motitas (encima van las rejillas)
  ['s2_b6', 's2_b7', 's2_b7b', 's2_b8', 's2_b9'].forEach(id => { V[id] = [luces('b_salon', SALON), polvo(12, [0, 0, 1, .7]), mar([.2, .27, .75, .33], 6), caen(16, [0, 0, 1, .75])]; });
  V['s2_b9:RECURSO_LLEGAN'] = [luces('b_musicos_llegan'), polvo(14), caen(20)];
  Object.assign(V, {
    s2_h1: [luces('h_zona_colonial', null, true), polvo(14), caen(22)],
    's2_h1:RECURSO_BARRIO': [luces('h_calle_barrio', null, true), polvo(12), caen(22)],
    s2_h2: [luces('h_colmado', null, true), polvo(12), hojas([.8, .3, 1, .7]), caen(22)],
    's2_h2:RECURSO_RADIO': [luces('h_radio', null, true), caen(18)]
  });
  ['s2_h3', 's2_h4', 's2_h5', 's2_h6', 's2_h7', 's2_h7b', 's2_h8', 's2_h9'].forEach(id => { V[id] = [luces('h_patio', null, true), polvo(12, [0, 0, 1, .7]), caen(16, [0, 0, 1, .75])]; });
  V['s2_h9:RECURSO_LLEGAN'] = [luces('h_musicos_llegan', null, true), polvo(14), caen(20)];
})(window.BLUES);

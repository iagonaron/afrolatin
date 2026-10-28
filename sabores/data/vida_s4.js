/* 4 SABORES · Sabor 4 · vida en las láminas (C1, 29-oct-2026), como data/vida_s3.js: focos, bombillas y guirnaldas que tintinean uno a uno
   (data/luces_s4.js), brillos solo dentro del agua (el East River, la bahía de Luanda), motitas de luz que caen y un poco de polvo.
   Efectos de js/vida.js; posiciones en fracciones de la lámina. Quitar este fichero = láminas quietas. */
(function (B) {
  const V = B.VIDA = B.VIDA || {}, L = B.LUCES || {};
  const caen = (n, z) => ({ t: 'caen', n: Math.round((n || 24) * 1.8), zona: z || [0, 0, 1, .9] });
  const polvo = (n, z) => ({ t: 'polvo', n: n || 16, zona: z || [0, .1, 1, 1] });
  const mar = (z, n) => ({ t: 'brillos', zona: z, n: n || 7 });
  const hojas = z => ({ t: 'hojas', zona: z || [.6, 0, 1, .5], n: 5, cols: ['#6E8B3D', '#8A9A4A', '#A88A4A', '#5F7A35'] });
  // luces de la lámina (las que encuentra herramientas/luces_s4.py); en las guirnaldas de arriba, bombillitas (2)
  const luces = (img, extra, guirnalda) => {
    const p = (L['img/s4/' + img + '.webp'] || []).map(q => guirnalda && q[1] < .45 ? [q[0], q[1], Math.min(q[2], .012), 2] : q);
    return { t: 'luces', p: p.concat(extra || []) };
  };
  Object.assign(V, {
    s4_s1: [luces('s_skyline'), mar([0, .62, 1, .95], 9), caen(12)],
    's4_s1:RECURSO_PUERTA': [luces('s_puerta'), polvo(12), caen(14)],
    s4_s2: [luces('s_luces'), polvo(14, [0, 0, 1, .8]), caen(16)],
    's4_s2:RECURSO_ORIGEN': [luces('s_origen'), polvo(14), caen(16)],
    s4_m1: [luces('s_metales'), polvo(12), caen(14)],
    s4_m2: [luces('s_luces'), polvo(14, [0, 0, 1, .8]), caen(16)],
    s4_k1: [mar([.05, .4, .7, .95], 9)],
    s4_k2: [luces('k_origen'), polvo(14), caen(16)],
    s4_k5: [luces('k_baile', null, true), polvo(12), caen(16)]
  });
  // el plató vacío de «cómo reconocerla», el mezclador y la llegada de la banda: menos motitas (encima van las rejillas)
  ['s4_s3', 's4_s4', 's4_s5', 's4_s5b', 's4_s6', 's4_s6b', 's4_s7', 's4_s8', 's4_s9'].forEach(id => { V[id] = [luces('s_plato'), polvo(12, [0, 0, 1, .7]), caen(14, [0, 0, 1, .75])]; });
  V['s4_s9:RECURSO_LLEGAN'] = [luces('s_musicos_llegan'), polvo(14), caen(18)];
  V['s4_s9:RECURSO_DESTAPE'] = [luces('s_destape'), polvo(14), caen(18)];
  // la terraza junto al mar de Luanda (la bahía brilla en la franja del agua)
  ['s4_k3', 's4_k3b', 's4_k4', 's4_k6', 's4_k7', 's4_k8'].forEach(id => { V[id] = [luces('k_terraza', null, true), mar([.3, .4, 1, .5], 7), polvo(12, [0, 0, 1, .7]), caen(16, [0, 0, 1, .75])]; });
  V['s4_k8:RECURSO_LLEGAN'] = [luces('k_musicos_llegan', null, true), mar([.3, .4, 1, .5], 6), polvo(14), caen(18)];
})(window.BLUES);

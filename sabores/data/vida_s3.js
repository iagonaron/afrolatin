/* 4 SABORES · Sabor 3 · vida en las láminas (C1, 28-oct-2026), como data/vida_s2.js: farolillos y bombillas que tintinean uno a uno
   (data/luces_s3.js), brillos solo dentro del agua (la bahía de Río, el mar de Ipanema), motitas de luz que caen con brisa y un poco de polvo.
   Efectos de js/vida.js; posiciones en fracciones de la lámina. Quitar este fichero = láminas quietas. */
(function (B) {
  const V = B.VIDA = B.VIDA || {}, L = B.LUCES || {};
  const caen = (n, z) => ({ t: 'caen', n: Math.round((n || 24) * 1.8), zona: z || [0, 0, 1, .9] });
  const polvo = (n, z) => ({ t: 'polvo', n: n || 16, zona: z || [0, .1, 1, 1] });
  const mar = (z, n) => ({ t: 'brillos', zona: z, n: n || 7 });
  const hojas = z => ({ t: 'hojas', zona: z || [.6, 0, 1, .5], n: 5, cols: ['#6E8B3D', '#8A9A4A', '#A88A4A', '#5F7A35'] });
  // luces de la lámina (las que encuentra herramientas/luces_s3.py); en las guirnaldas de arriba, bombillitas (2)
  const luces = (img, extra, guirnalda) => {
    const p = (L['img/s3/' + img + '.webp'] || []).map(q => guirnalda && q[1] < .45 ? [q[0], q[1], Math.min(q[2], .012), 2] : q);
    return { t: 'luces', p: p.concat(extra || []) };
  };
  Object.assign(V, {
    s3_s1: [mar([0, .62, .55, .95], 9), hojas([.55, .55, 1, .9]), caen(14)],
    s3_s2: [luces('s_origen'), polvo(14), caen(20)],
    s3_s3: [luces('s_calle', null, true), mar([0, .22, .3, .32], 5), polvo(12), hojas([.25, .45, .55, .8]), caen(22)],
    's3_s3:RECURSO_ESCOLA': [luces('s_escola', null, true), polvo(16), caen(18)],
    s3_b0: [mar([.63, .38, 1, .55], 6), polvo(10, [0, 0, .6, 1])],
    s3_b1: [luces('b_ipanema'), mar([.3, .24, .9, .32], 5), polvo(12), caen(18)],
    s3_b2: [luces('b_callejon', null, true), mar([.4, .55, .85, .68], 7), hojas([0, .3, .3, .8]), caen(22)],
    's3_b2:RECURSO_ORIGEN': [luces('b_origen'), mar([.62, .17, .95, .24], 4), polvo(12), caen(18)]
  });
  // la calle del morro de «cómo reconocerla», el mezclador y el desfile: menos motitas (encima van las rejillas)
  ['s3_s4', 's3_s5', 's3_s6', 's3_s6b', 's3_s7', 's3_s8', 's3_s9'].forEach(id => { V[id] = [luces('s_morro', null, true), mar([.02, .18, .25, .27], 4), polvo(12, [0, 0, 1, .7]), caen(16, [0, 0, 1, .75])]; });
  V['s3_s9:RECURSO_LLEGAN'] = [luces('s_musicos_llegan', null, true), mar([.02, .18, .25, .27], 4), polvo(14), caen(20)];
  // la terraza de Ipanema
  ['s3_b3', 's3_b4', 's3_b5', 's3_b6', 's3_b7', 's3_b8', 's3_b9'].forEach(id => { V[id] = [luces('b_terraza', null, true), mar([.15, .26, .95, .38], 7), polvo(12, [0, 0, 1, .7]), caen(16, [0, 0, 1, .75])]; });
  V['s3_b9:RECURSO_LLEGAN'] = [luces('b_musicos_llegan', null, true), mar([.18, .28, .95, .38], 6), polvo(14), caen(20)];
})(window.BLUES);

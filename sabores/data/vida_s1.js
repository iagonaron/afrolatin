/* 4 SABORES · Sabor 1 · vida en las láminas (C1, 27-oct; Iago 26-oct 20:03: «cosas por encima, muy sutiles, que le dan vida»).
   Efectos de js/vida.js; posiciones en fracciones de la lámina (x, y de 0 a 1). Quitar este fichero = láminas quietas. */
(function (B) {
  const motas = (n, z) => ({ t: 'polvo', n: n || 22, zona: z || [0, .1, 1, 1] });
  const mar = z => ({ t: 'brillos', zona: z, n: 7 });   // (27-oct, Iago) más sutiles y solo dentro del agua
  const velas = k => ({ t: 'parpadeo', k: (k || 1) * 2.2 });   // (27-oct, Iago) que el tintineo de las velas se note
  const gaviotas = z => ({ t: 'pajaros', zona: z || [0, .02, .55, .2], n: 2, tam: .009 });
  const palmas = z => ({ t: 'hojas', zona: z || [.3, 0, 1, .9], n: 6, cols: ['#6E8B3D', '#8A9A4A', '#A88A4A', '#5F7A35'] });
  const playa = (zm) => [velas(1.2), motas(26), mar(zm || [0, .22, .5, .42]), gaviotas()];
  const tarima = (zm) => [velas(1), motas(18, [0, 0, 1, .7])].concat(zm ? [mar(zm)] : []);
  const colmado = () => [velas(.6), motas(16, [0, 0, 1, .8]), palmas([.2, 0, 1, .7])];
  B.VIDA = Object.assign(B.VIDA || {}, {
    s1_i1: [motas(14)], s1_i3: [motas(10)], s1_i4: [velas(.5), motas(14)],
    s1_i4b: [motas(14)], s1_i4c: [{ t: 'polvo', n: 18, zona: [.25, 0, .75, 1] }], s1_i6: [motas(8)],
    s1_c1: [motas(14), gaviotas([.25, 0, .75, .14])], s1_c2: [motas(20), palmas([0, 0, 1, .5])],
    s1_c3: playa([0, .24, .42, .4]), s1_c4: [velas(.7), motas(18)], s1_c5: [velas(1), motas(16), mar([.05, .4, .35, .47])],
    s1_c6: tarima([0, .37, .3, .47]), s1_c7: tarima([0, .37, .3, .47]), s1_c8: tarima([0, .37, .3, .47]), s1_c9: tarima([0, .37, .3, .47]), s1_c10: tarima([0, .37, .3, .47]), s1_c11: tarima([0, .37, .3, .47]),
    s1_c12: tarima([0, .37, .3, .47]), s1_c14: tarima(),
    s1_m1: [gaviotas([.1, 0, .9, .18]), motas(14)], s1_m1b: [gaviotas([0, .05, .7, .3]), motas(16), palmas([0, 0, 1, .8]), { t: 'bruma', alfa: .05 }],
    s1_m2: colmado(), s1_m3: colmado(), s1_m4: colmado(), s1_m5: colmado(), s1_m6: colmado(), s1_m7: colmado(), s1_m8: colmado(), s1_m9: colmado()
  });
})(window.BLUES);

/* (28-oct 09:09, Iago: «aprovecha y anima las lucecitas»; 09:13: «en cada plano con mar o velas, un poquito de animación y partículas como
   que caigan del cielo») luces puestas a mano (la búsqueda automática no veía los farolillos grandes): 1 = vela o farolillo (tiembla),
   2 = bombillita de guirnalda (respira y, a ratos, chispea), 0 = bombilla (respira despacio). «caen»: motitas de luz que bajan */
(function (B) {
  const V = B.VIDA || {};
  const caen = (n, z) => ({ t: 'caen', n: n || 24, zona: z || [0, 0, 1, .9] });
  const CAMINO = [[0.3125, 0.75, 0.022, 1], [0.3771, 0.6667, 0.022, 1], [0.4146, 0.6815, 0.022, 1], [0.5833, 0.6722, 0.022, 1], [0.6854, 0.7593, 0.022, 1], [0.1979, 0.8889, 0.022, 1], [0.8906, 0.9259, 0.022, 1], [0.1115, 0.1704, 0.03, 1], [0.7984, 0.3056, 0.015, 1], [0.65, 0.3519, 0.007, 2], [0.6625, 0.3556, 0.007, 2], [0.6708, 0.3593, 0.007, 2], [0.6813, 0.3639, 0.007, 2], [0.6906, 0.3657, 0.007, 2], [0.7, 0.3648, 0.007, 2], [0.7083, 0.3611, 0.007, 2], [0.7146, 0.3593, 0.007, 2], [0.7229, 0.3546, 0.007, 2], [0.7333, 0.3444, 0.007, 2], [0.7427, 0.3333, 0.007, 2], [0.7531, 0.3213, 0.007, 2], [0.7604, 0.3083, 0.007, 2], [0.776, 0.2037, 0.007, 2], [0.7854, 0.2241, 0.007, 2], [0.8052, 0.2389, 0.007, 2], [0.8219, 0.2481, 0.007, 2], [0.8365, 0.2537, 0.007, 2], [0.85, 0.2593, 0.007, 2], [0.8672, 0.2667, 0.007, 2], [0.888, 0.2704, 0.007, 2], [0.9036, 0.2731, 0.007, 2], [0.9182, 0.275, 0.007, 2], [0.9375, 0.2685, 0.007, 2], [0.9557, 0.2639, 0.007, 2], [0.975, 0.2648, 0.007, 2], [0.0094, 0.1667, 0.007, 2], [0.1313, 0.2944, 0.007, 2], [0.1667, 0.313, 0.007, 2], [0.6875, 0.4074, 0.012, 0], [0.7052, 0.4074, 0.012, 0], [0.7208, 0.4093, 0.012, 0], [0.7406, 0.4093, 0.012, 0], [0.7604, 0.4111, 0.012, 0], [0.8896, 0.3963, 0.012, 0], [0.9104, 0.3981, 0.012, 0], [0.9281, 0.3889, 0.012, 0]], RUEDA = [[0.0625, 0.3481, 0.018, 1], [0.3438, 0.3556, 0.018, 1], [0.4021, 0.3111, 0.018, 1], [0.6021, 0.4222, 0.018, 1], [0.775, 0.4296, 0.018, 1], [0.9792, 0.3389, 0.018, 1], [0.1333, 0.7185, 0.018, 1], [0.2396, 0.9259, 0.018, 1], [0.0187, 0.0222, 0.02, 0], [0.1354, 0.0222, 0.02, 0], [0.2604, 0.1296, 0.02, 0], [0.0917, 0.1759, 0.02, 0]];
  V.s1_c5 = [{ t: 'luces', p: CAMINO }, { t: 'polvo', n: 14 }, { t: 'brillos', zona: [.22, .45, .62, .54], n: 7 }, caen(26)];
  V['s1_c5:RECURSO_RUEDA'] = [{ t: 'luces', p: RUEDA }, { t: 'brillos', zona: [.81, .22, .94, .37], n: 6, tono: 'frio' }, caen(22)];
  ['s1_i1', 's1_i4', 's1_c1', 's1_c3', 's1_c4', 's1_m1', 's1_m2', 's1_m3', 's1_m4', 's1_m5', 's1_m6', 's1_m7', 's1_m8', 's1_m9'].forEach(id => { V[id] = (V[id] || []).concat([caen(22)]); });
  ['s1_c6', 's1_c7', 's1_c8', 's1_c9', 's1_c10', 's1_c11', 's1_c12', 's1_c14'].forEach(id => { V[id] = (V[id] || []).concat([caen(16, [0, 0, 1, .75])]); });   // tarima: menos (encima van las rejillas)
  B.VIDA = V;
})(window.BLUES);

/* (27-oct noche) las velas y bombillas de cada lámina tintinean (data/luces_s1.js; herramientas/luces_s1.py) */
(function (B) {
  const L = B.LUCES || {}, V = B.VIDA || {};
  const pon = (ids, img) => { if (!L[img]) return; ids.forEach(id => { V[id] = (V[id] || []).filter(x => x.t !== 'parpadeo').concat([{ t: 'luces', p: L[img] }]); }); };
  pon(['s1_c3'], 'img/s1/c3_playa.webp');
  pon(['s1_c6', 's1_c7', 's1_c8', 's1_c9', 's1_c10', 's1_c11', 's1_c12'], 'img/s1/v2_tarima.webp');
})(window.BLUES);

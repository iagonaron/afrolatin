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

/* (27-oct noche) las velas y bombillas de cada lámina tintinean (data/luces_s1.js; herramientas/luces_s1.py) */
(function (B) {
  const L = B.LUCES || {}, V = B.VIDA || {};
  const pon = (ids, img) => { if (!L[img]) return; ids.forEach(id => { V[id] = (V[id] || []).filter(x => x.t !== 'parpadeo').concat([{ t: 'luces', p: L[img] }]); }); };
  pon(['s1_c3'], 'img/s1/c3_playa.webp');
  pon(['s1_c6', 's1_c7', 's1_c8', 's1_c9', 's1_c10', 's1_c11', 's1_c12'], 'img/s1/v2_tarima.webp');
})(window.BLUES);

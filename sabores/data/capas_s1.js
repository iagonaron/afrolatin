/* 4 SABORES · Sabor 1 · CAPAS (palabras clave, maestros de ceremonias en PNG, instrumentos, flechas) · C1, 27-oct-2026.
   Iago (27-oct): sin subtítulos en lo hablado; en el centro, palabras clave y esquemas; los MC en PNG. Ver js/capas4s.js. */
(function (B) {
  const pj = (q, pose, lado, en) => ({ pj: { q, pose, lado: lado || 'der' }, en: en || 0 });
  const k = (claves, en, hasta, estilo) => ({ claves, en: en || 0, hasta, estilo });
  const ins = (img, nom, en, extra) => Object.assign({ img, nom, en: en || 0, x: .36, y: .46, h: .5 }, extra || {});
  const C = 'CANDE', Y = 'YUNIOR', S = 'SCHOENBERG';
  B.CAPAS = {
    sinSubtitulos: true,
    poses: {   // los PNG recortados (img/s1/pj/); «_» = la pose por defecto. Se completan con las hojas grises del Taller.
      CANDE: { _: 'explica', sorpresa: 'img/s1/pj/cande_sorpresa.webp', explica: 'img/s1/pj/cande_explica.webp', rie: 'img/s1/pj/cande_rie.webp', piensa: 'img/s1/pj/cande_piensa.webp', aplaude: 'img/s1/pj/cande_aplaude.webp', baila: 'img/s1/pj/cande_baila.webp', senala: 'img/s1/pj/cande_senala.webp', brazos: 'img/s1/pj/cande_brazos.webp', oreja: 'img/s1/pj/cande_oreja.webp', pulgar: 'img/s1/pj/cande_pulgar.webp' },   // (27-oct noche) hojas grises s1v2_22–25
      YUNIOR: { _: 'explica', guira: 'img/s1/pj/yunior_guira.webp', sorpresa: 'img/s1/pj/yunior_sorpresa.webp', explica: 'img/s1/pj/yunior_explica.webp', baila: 'img/s1/pj/yunior_baila.webp', senala: 'img/s1/pj/yunior_senala.webp', piensa: 'img/s1/pj/yunior_piensa.webp', aplaude: 'img/s1/pj/yunior_aplaude.webp', baila2: 'img/s1/pj/yunior_baila2.webp', celebra: 'img/s1/pj/yunior_celebra.webp', brazos: 'img/s1/pj/yunior_brazos.webp', oreja: 'img/s1/pj/yunior_oreja.webp', pulgar: 'img/s1/pj/yunior_pulgar.webp' },   // s1v2_26–29
      SCHOENBERG: { _: 'cruzado', cruzado: 'img/s1/pj/schoenberg_cruzado.webp', reloj: 'img/s1/pj/schoenberg_reloj.webp', piensa: 'img/s1/pj/schoenberg_piensa.webp',
        sospecha: 'img/s1/pj/schoenberg_sospecha.webp', asoma: 'img/s1/pj/schoenberg_asoma.webp', espalda: 'img/s1/pj/schoenberg_espalda.webp' }   // (27-oct) hoja s1v2_11–12 del Taller
    },
    planos: {
      s1_c4: { pj: { q: C, pose: 'brazos', lado: 'der' } }, s1_c5: { pj: { q: C, pose: 'explica', lado: 'der' } },
      s1_c6: { oscuro: true, pj: { q: C, pose: 'oreja', lado: 'der' } }, s1_c7: { oscuro: true, pj: { q: C, pose: 'explica', lado: 'der' } }, s1_c8: { oscuro: true, pj: { q: C, pose: 'oreja', lado: 'der' } },
      s1_c9: { oscuro: true, pj: { q: C, pose: 'explica', lado: 'der' } }, s1_c10: { oscuro: true, pj: { q: C, pose: 'brazos', lado: 'der' } }, s1_c11: { pj: { q: C, pose: 'pulgar', lado: 'der' } },
      s1_c12: { pj: { q: C, pose: 'brazos', lado: 'der' } },
      s1_m2: { pj: { q: Y, pose: 'guira', lado: 'der' } }, s1_m3: { pj: { q: Y, pose: 'explica', lado: 'der' } }, s1_m4: { oscuro: true, pj: { q: Y, pose: 'guira', lado: 'der' } },
      s1_m5: { oscuro: true, pj: { q: Y, pose: 'explica', lado: 'der' } }, s1_m6: { oscuro: true, pj: { q: Y, pose: 'baila', lado: 'der' } }, s1_m7: { oscuro: true, pj: { q: Y, pose: 'baila', lado: 'der' } },
      s1_m8: { pj: { q: Y, pose: 'pulgar', lado: 'der' } }, s1_m9: { pj: { q: Y, pose: 'brazos', lado: 'der' } },
      s1_i4: { oscuro: true },
      s1_i4c: { pj: { q: S, pose: 'reloj', lado: 'der', alto: .8 } }
    },
    lineas: {
      s1_001: [k(['4 sesiones', '4 sabores', '9 bailes'], .15, .75)],
      s1_002: [k(['Siglos XVI–XIX'], .02, .1, 'arriba'),
               { rotulos: [{ txt: 'Europa', x: .772, y: .1 }, { txt: 'África', x: .814, y: .586 }, { txt: 'América', x: .276, y: .77 }, { txt: 'Océano Atlántico', x: .43, y: .4, clase: 'mar', tam: 1.7 }], en: .08 },
               { flechas: [{ de: [.6414, .1935], a: [.6069, .5245], comba: -.22, en: .2 }, { de: [.5862, .5613], a: [.2759, .5123], comba: .14, en: .48 }, { de: [.731, .6716], a: [.4414, .7697], comba: -.12, en: .6 }] }],
      s1_003: [k(['Una gran injusticia'], .05, .2), k(['Su música', 'viajó con ellos'], .55, .8)],
      s1_004: [ins('img/s1/v2_postal_africa.webp', 'África · tambores', .1, { x: .2, y: .44, h: .36 }),   // (27-oct noche) las tres postales sobre la mesa
               ins('img/s1/v2_postal_iberica.webp', 'Europa · guitarras', .45, { x: .5, y: .44, h: .36, solo: false }),
               ins('img/s1/v2_postal_indigena.webp', 'Indígenas · flautas', .78, { x: .8, y: .44, h: .36, solo: false })],
      s1_005: [k(['= música latina'], .2)],
      s1_006: [k(['El ritmo manda'], 0, 0, 'arriba'), { rejillas: [{ patron: 'XxxxXxxxXxxxXxxx', color: '#E2A33F' }, { patron: 'X.xxX.xxX.xxX.xx', color: '#1F9AA0' },
               { patron: '..X...X...X...X.', color: '#C9603F' }, { patron: 'x.x.x.X.x.X.x.x.', color: '#B07A4F' }], en: .22, paso: .12, bpm: 90 }],
      s1_007: [k(['Escucha los patrones', '→', 'nuestra brújula'], .25, .8, 'arriba'), { mantener: true }],
      s1_n01: [k(['Pistas, no leyes'], .1), k(['Libertad', 'Mezcla', 'Sin reglas fijas'], .45, .85)],
      s1_n02: [k(['¡Fuera el orden!'], .3)],
      s1_sch1: [pj(S, 'cruzado', 'der', .05)],
      s1_n03: [pj(S, 'piensa', 'der', .55)],
      s1_008: [{ rotulos: [{ txt: 'A Coruña', x: .6317, y: .1644, clase: 'parada' }, { txt: 'Colombia', x: .169, y: .5687, clase: 'parada izq', en: .12 },
                 { txt: 'R. Dominicana', x: .2021, y: .4577, clase: 'parada', en: .22 }, { txt: 'Cuba', x: .1669, y: .451, clase: 'parada izq', en: .32 },
                 { txt: 'Brasil', x: .4069, y: .868, clase: 'parada', en: .42 }, { txt: 'Nueva York', x: .1793, y: .1972, clase: 'parada', en: .52 },
                 { txt: 'Angola', x: .7807, y: .8041, clase: 'parada', en: .62 }] }, k(['Su tierra', 'Sus instrumentos', 'Su banda'], .72, .95)],
      s1_009: [k(['1.ª parada: Colombia'], .1)],
      s1_010: [k(['Colombia'], 0), k(['Cartagena de Indias'], .35)],
      s1_011: [k(['Puerto de llegada', 'de africanos esclavizados'], .2, .5), k(['Sus tambores'], .8)],
      s1_012: [k(['Gaitas', 'flautas de caña indígenas'], .4, .7)],
      s1_013: [k(['Todo se mezcla'], .5)],
      s1_014: [pj(C, 'sorpresa', 'der', 0), pj(C, 'brazos', 'der', .35), k(['Doña Cande'], .7)],
      s1_015: [pj(C, 'explica', 'der', 0), k(['Patacón', 'Arroz con coco', 'Descalzos en la arena'], .25, .85)],
      s1_016: [pj(C, 'senala', 'der', .1), k(['¡A la tarima!'], .6)],
      s1_017: [pj(C, 'explica', 'der', 0), k(['Tambor de África', '+', 'Gaita indígena', '+', 'Canto de España'], .3, .9)],
      s1_018: [pj(C, 'baila', 'der', .3), k(['Baile en rueda', 'Velas en la mano'], .05, .35), k(['Hoy: acordeón y bajo eléctrico'], .55), k(['De México a Argentina'], .85)],
      s1_019: [k(['1 · Se camina'], .05), ins('img/s1/inst_maracas.webp', 'Maracas', .5), pj(C, 'oreja', 'der', .5)],
      s1_020: [pj(C, 'senala', 'der', .05), ins('img/s1/inst_guacharaca.webp', 'Guacharaca', .12), k(['Una larga', '+', 'dos cortas'], .45, .8)],
      s1_021: [pj(C, 'oreja', 'der', .3), k(['3 · Contratiempo'], .02), ins('img/s1/inst_contratiempo.webp', 'Piano o teclado', .35), k(['Justo después del tiempo'], .78)],
      s1_022: [pj(C, 'piensa', 'der', .1), ins('img/s1/inst_tambor.webp', 'Tambor', .1, { x: .27, h: .42 }), ins('img/s1/inst_bajo.webp', 'Bajo', .3, { x: .47, h: .55, solo: false })],
      s1_023: [pj(C, 'senala', 'der', .1), ins('img/s1/inst_acordeon.webp', 'Acordeón', .45)],
      s1_024: [pj(C, 'pulgar', 'der', 0), k(['Arma tu cumbia'], .45)],
      s1_025: [pj(C, 'brazos', 'der', .1)],
      s1_026: [pj(C, 'rie', 'der', 0)],
      s1_m01: [k(['República Dominicana'], 0), k(['Santo Domingo', 'la catedral más antigua de América'], .45, .8)],
      s1_m02: [k(['El Cibao'], .25), k(['Tabaco', 'Colmados', 'Fiesta en la calle'], .5, .9)],
      s1_m03: [pj(Y, 'guira', 'der', 0), k(['Yunior, «el Tíguere»'], .7)],
      s1_m04: [pj(Y, 'explica', 'der', 0), k(['Dominó', 'Cafecito', 'Música a todo volumen'], .1, .7)],
      s1_m05: [pj(Y, 'explica', 'der', .05), k(['Campo', 'acordeón · tambora · güira'], .1, .4), k(['Ciudad', 'piano · saxos · trompetas'], .6, .9)],
      s1_m06: [pj(Y, 'celebra', 'der', .35), k(['Baile nacional'], .1), k(['Patrimonio de la humanidad', 'UNESCO'], .55, .8)],
      s1_m07: [pj(Y, 'sorpresa', 'der', .02), k(['Merengue = cumbia… ¡a toda pastilla!'], .25), ins('img/s1/inst_guacharaca.webp', 'Guacharaca', .55, { x: .27, h: .45 }), ins('img/s1/inst_m_guira.webp', 'Güira', .68, { x: .47, h: .45, solo: false }), k(['Una larga + dos cortas'], .85)],
      s1_m08: [pj(Y, 'senala', 'der', .1), ins('img/s1/inst_m_tambora.webp', 'Tambora', .15), k(['Mano', '+', 'palito'], .55, .75)],
      s1_m09: [pj(Y, 'oreja', 'der', .2), ins('img/s1/inst_m_bajo.webp', 'Bajo', .05, { x: .27, h: .55 }), ins('img/s1/inst_m_piano.webp', 'Piano', .5, { x: .5, h: .38, solo: false })],
      s1_m10: [pj(Y, 'baila2', 'der', .3), ins('img/s1/inst_m_saxos.webp', 'Saxos', .3), k(['El jaleo'], .55)],
      s1_m11: [pj(Y, 'pulgar', 'der', 0), k(['Arma tu merengue'], .5)],
      s1_m12: [pj(Y, 'brazos', 'der', 0)],
      s1_m13: [pj(Y, 'celebra', 'der', 0)],
      s1_r01: [k(['Cumbia'], 0), k(['Tempo tranquilo', 'Guacharaca: larga + 2 cortas', 'Contratiempo'], .2, .85, 'lista')],
      s1_r02: [k(['Merengue'], 0), k(['Muy rápido', 'Güira: el mismo dibujo', 'Tambora: mano y palito'], .2, .85, 'lista')],
      s1_r03: [k(['¡Hasta el próximo sabor!'], .55)]
    }
  };
})(window.BLUES);

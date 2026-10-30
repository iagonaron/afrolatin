/* AFRO LATIN · Sabor 2 (repaso + bolero + bachata + repaso). Lo genera herramientas/sabor2_datos.py: NO editar a mano. */
BLUES.dia(2, {
 "titulo": "Bolero y bachata",
 "lugar": "Cuba · República Dominicana",
 "planos": [
  {
   "id": "s2_r0",
   "nombre": "Repaso del sabor 1",
   "img": "img/s1/r_resumen.webp",
   "desc": "Doña Cande y Yunior (lámina del resumen del sabor 1) con las fichas de la cumbia y el merengue.",
   "amb": [],
   "lineas": [
    {
     "id": "s2_n01",
     "quien": "NARR",
     "texto": "¡Bienvenidos al segundo sabor! Repaso rápido: la cumbia, tranquila, para caminar, con su guacharaca y el contratiempo en el piano… y el merengue, ¡la cumbia, pero a toda pastilla!, con su güira y su tambora.",
     "voz": "voz/s2/s2_n01.mp3"
    },
    {
     "id": "s2_n02",
     "quien": "NARR",
     "texto": "Y ahora… ¡nos vamos a Cuba!",
     "voz": "voz/s2/s2_n02.mp3"
    }
   ]
  },
  {
   "id": "s2_b0",
   "nombre": "Viaje · a Cuba",
   "img": "img/s2/mapa_cuba_rd.webp",
   "desc": "La carta del Caribe, de cerca (Cuba oriental y La Española): el barco va de la costa norte de la República Dominicana a Santiago de Cuba por el Paso de los Vientos.",
   "amb": [
    {
     "src": "sfx/s1/barco_mar.mp3",
     "vol": 0.35
    }
   ],
   "mapa": {
    "desde": "República Dominicana",
    "hasta": "Cuba · Santiago de Cuba",
    "sub": "Cuba, Santiago de Cuba: aquí nació el bolero",
    "dur": 8,
    "vehiculo": "el barco",
    "ruta": [
     [
      0.665,
      0.425
     ],
     [
      0.57,
      0.392
     ],
     [
      0.46,
      0.385
     ],
     [
      0.385,
      0.425
     ],
     [
      0.31,
      0.468
     ],
     [
      0.205,
      0.468
     ]
    ],
    "encuadre": [
     1,
     0.5,
     0.5
    ],
    "icono": "img/s1/barco_cenital.webp",
    "cenital": true,
    "anchoIcono": 2.9,
    "proporcionIcono": 3.286,
    "zoom": false,
    "sfx": [
     {
      "src": "sfx/s1/barco_sirena.mp3",
      "vol": 0.3,
      "t": 0
     }
    ],
    "etiq": {
     "desde": [
      -14,
      4.2
     ],
     "hasta": [
      -1.5,
      3.8
     ]
    },
    "musA": {
     "src": "mus/s2_bolero_fondo.mp3",
     "vol": 0.7
    }
   },
   "mus": {
    "src": "mus/s1_merengue_fondo.mp3",
    "vol": 0.6
   }
  },
  {
   "id": "s2_b1",
   "nombre": "Santiago de Cuba",
   "img": "img/s2/b_calle.webp",
   "desc": "Santiago de Cuba al atardecer: calles en cuesta, balcones de madera, coches antiguos, el mar al fondo.",
   "amb": [
    {
     "src": "sfx/s1/calle_gente_es.mp3",
     "vol": 0.3
    }
   ],
   "lineas": [
    {
     "id": "s2_n03",
     "quien": "NARR",
     "texto": "¡Cuba! La isla más grande del Caribe. Y en su punta oriental, Santiago de Cuba: calles en cuesta, balcones de madera y música en cada esquina.",
     "voz": "voz/s2/s2_n03.mp3"
    }
   ],
   "mus": {
    "src": "mus/s2_bolero_fondo.mp3",
    "vol": 0.45,
    "bucle": true
   }
  },
  {
   "id": "s2_b2",
   "nombre": "Los trovadores",
   "img": "img/s2/b_trovadores.webp",
   "desc": "Trovadores con su guitarra cantando en un balcón de Santiago, de noche, y la calle llena.",
   "amb": [
    {
     "src": "sfx/s1/grillos_noche.mp3",
     "vol": 0.25
    }
   ],
   "lineas": [
    {
     "id": "s2_n04",
     "quien": "NARR",
     "texto": "Aquí, a finales del siglo diecinueve, los trovadores salían con su guitarra a cantar bajo los balcones… y así nació el bolero.",
     "voz": "voz/s2/s2_n04.mp3"
    }
   ],
   "mus": {
    "src": "mus/s2_bolero_fondo.mp3",
    "vol": 0.45,
    "bucle": true
   }
  },
  {
   "id": "s2_b3",
   "nombre": "Faustino nos recibe",
   "img": "img/s2/b_fachada.webp",
   "desc": "La fachada de la Casa de la Trova (sin Faustino: él va en PNG).",
   "amb": [
    {
     "src": "sfx/s1/grillos_noche.mp3",
     "vol": 0.15
    }
   ],
   "personajes": [
    "FAUSTINO"
   ],
   "lineas": [
    {
     "id": "s2_b01",
     "quien": "FAUSTINO",
     "texto": "Buenas noches, jóvenes, y bienvenidos a Cuba. Me llamo Faustino, y llevo toda la vida cantando boleros aquí, en Santiago… de Cuba, ¿eh? Que ustedes en Galicia tienen el suyo, y en Chile hay otro: ¡todos llevan el nombre del apóstol Santiago!",
     "voz": "voz/s2/s2_b01.mp3"
    },
    {
     "id": "s2_b02",
     "quien": "FAUSTINO",
     "texto": "En mis tiempos, para enamorar a una muchacha no bastaba con un mensajito y un corazoncito, no: había que cantarle un bolero bajo el balcón… ¡con mucha paciencia y una buena guitarra!",
     "voz": "voz/s2/s2_b02.mp3",
     "var": "RECURSO_BALCON",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_BALCON": "img/s2/b_balcones.webp"
   },
   "mus": {
    "src": "mus/s2_bolero_fondo.mp3",
    "vol": 0.38,
    "bucle": true
   }
  },
  {
   "id": "s2_b4",
   "nombre": "De Cuba a México",
   "img": "img/s2/b_mexico.webp",
   "desc": "Un salón de baile mexicano antiguo: un trío de guitarras y parejas bailando.",
   "amb": [
    {
     "src": "sfx/s1/gente_fiesta.mp3",
     "vol": 0.08
    }
   ],
   "personajes": [
    "FAUSTINO"
   ],
   "lineas": [
    {
     "id": "s2_b03",
     "quien": "FAUSTINO",
     "texto": "De aquí, el bolero viajó a México, lo cantaron los tríos de guitarras… y se volvió la canción de amor de toda Latinoamérica: lenta, romántica, elegante… como sus abuelos.",
     "voz": "voz/s2/s2_b03.mp3"
    }
   ],
   "mus": {
    "src": "mus/s2_bolero_fondo.mp3",
    "vol": 0.38,
    "bucle": true
   }
  },
  {
   "id": "s2_b6",
   "nombre": "Reconocerlo · las maracas",
   "img": "img/s2/b_salon.webp",
   "desc": "El salón vacío con los instrumentos en el escenario.",
   "amb": [],
   "personajes": [
    "FAUSTINO"
   ],
   "lineas": [
    {
     "id": "s2_b06",
     "quien": "FAUSTINO",
     "texto": "Ahora, lo técnico. Lo más característico: las maracas. Corcheas tranquilas… y de vez en cuando, un tresillo de semicorcheas: ¡chiqui-chí! Escuchen.",
     "voz": "voz/s2/s2_b06.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "maracas",
    "nom": "Maracas",
    "img": "img/s2/inst_b_maracas.webp",
    "loop": "loops/s2/bolero_maracas.mp3",
    "color": "#E2A33F",
    "bpm": 90,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "patron": "X.x.X.x.X.x.X.x.|X.x.X.x.X.x.X.T.|X.x.X.x.X.x.X.x.|X.x.X.x.X.x.X.T.",
    "recursos": [
     "loops/s2/bolero_maracas.mp3",
     "img/s2/inst_b_maracas.webp"
    ]
   },
   "mus": {
    "src": "mus/s2_bolero_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s2_b7",
   "nombre": "Reconocerlo · el remate de las congas",
   "img": "img/s2/b_salon.webp",
   "desc": "El salón; las congas.",
   "amb": [],
   "personajes": [
    "FAUSTINO"
   ],
   "lineas": [
    {
     "id": "s2_b07",
     "quien": "FAUSTINO",
     "texto": "Y las congas: calladitas casi todo el rato… y al final de cada compás, tres golpes seguidos. ¡Ese remate es puro bolero!",
     "voz": "voz/s2/s2_b07.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "congas",
    "nom": "Congas",
    "img": "img/s2/inst_b_congas.webp",
    "loop": "loops/s2/bolero_congas.mp3",
    "color": "#8A5A3C",
    "bpm": 90,
    "compases": 2,
    "vueltas": 1,
    "espera": 0.6,
    "patron": "x...x...x.X.X.X.",
    "recursos": [
     "loops/s2/bolero_congas.mp3",
     "img/s2/inst_b_congas.webp"
    ],
    "nivK": 0.6
   },
   "mus": {
    "src": "mus/s2_bolero_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s2_b7b",
   "nombre": "Reconocerlo · guitarra y bajo",
   "img": "img/s2/b_salon.webp",
   "desc": "El salón; la guitarra y el bajo.",
   "amb": [],
   "personajes": [
    "FAUSTINO"
   ],
   "lineas": [
    {
     "id": "s2_b11",
     "quien": "FAUSTINO",
     "texto": "Y debajo, la guitarra y el bajo acompañan: tranquilos, románticos… sin prisa.",
     "voz": "voz/s2/s2_b11.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "guitarra",
    "nom": "Guitarra + bajo",
    "img": "img/s2/inst_b_guitarra.webp",
    "loop": "loops/s2/bolero_guitarra_bajo.mp3",
    "color": "#5B6FA8",
    "bpm": 90,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s2/bolero_guitarra_bajo.mp3",
     "img/s2/inst_b_guitarra.webp",
     "img/s2/inst_b_guitarra.webp"
    ],
    "img2": "img/s1/inst_m_bajo.webp"
   },
   "mus": {
    "src": "mus/s2_bolero_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s2_b8",
   "nombre": "Mezclador de bolero",
   "img": "img/s2/b_salon.webp",
   "desc": "El salón.",
   "amb": [],
   "personajes": [
    "FAUSTINO"
   ],
   "lineas": [
    {
     "id": "s2_b08",
     "quien": "FAUSTINO",
     "texto": "Ahora le toca a usted, joven: ¡arme la banda! Y aquí tiene también otros instrumentos que suenan mucho en el bolero: el bongó y el piano. Enciéndalos y apáguelos a su gusto.",
     "voz": "voz/s2/s2_b08.mp3",
     "rehacer": true
    }
   ],
   "inter": {
    "tipo": "mezclador",
    "tit": "Arma tu bolero",
    "bpm": 90,
    "compases": 4,
    "pistas": [
     {
      "id": "guitarra",
      "nom": "Guitarra",
      "img": "img/s2/inst_b_guitarra.webp",
      "loop": "loops/s2/bolero_guitarra.mp3",
      "color": "#5B6FA8",
      "celda": [
       3,
       1,
       1,
       3
      ]
     },
     {
      "id": "bajo",
      "nom": "Bajo",
      "img": "img/s1/inst_m_bajo_h.webp",
      "loop": "loops/s2/bolero_bajo.mp3",
      "color": "#3E7D4F",
      "nivK": 0.6,
      "celda": [
       4,
       1,
       4,
       2
      ]
     },
     {
      "id": "maracas",
      "nom": "Maracas",
      "img": "img/s2/inst_b_maracas.webp",
      "loop": "loops/s2/bolero_maracas.mp3",
      "color": "#E2A33F",
      "patron": "X.x.X.x.X.x.X.x.|X.x.X.x.X.x.X.T.|X.x.X.x.X.x.X.x.|X.x.X.x.X.x.X.T.",
      "celda": [
       8,
       2,
       1,
       2
      ]
     },
     {
      "id": "congas",
      "nom": "Congas",
      "img": "img/s2/inst_b_congas.webp",
      "loop": "loops/s2/bolero_congas.mp3",
      "color": "#8A5A3C",
      "patron": "x...x...x.X.X.X.",
      "nivK": 0.6,
      "celda": [
       1,
       1,
       2,
       3
      ]
     },
     {
      "id": "bongo",
      "nom": "Bongó",
      "img": "img/s2/inst_bongo.webp",
      "loop": "loops/s2/bolero_bongo.mp3",
      "color": "#C9603F",
      "patron": "X.x.X.x.X.x.X.x.",
      "nivK": 0.6,
      "celda": [
       8,
       1,
       1,
       1
      ]
     },
     {
      "id": "piano",
      "nom": "Piano",
      "img": "img/s1/inst_m_piano.webp",
      "loop": "loops/s2/bolero_piano.mp3",
      "color": "#B04A6A",
      "celda": [
       4,
       3,
       4,
       1
      ]
     }
    ],
    "inicial": [],
    "recursos": [
     "loops/s2/bolero_guitarra.mp3",
     "loops/s2/bolero_bajo.mp3",
     "loops/s2/bolero_maracas.mp3",
     "loops/s2/bolero_congas.mp3",
     "loops/s2/bolero_bongo.mp3",
     "loops/s2/bolero_piano.mp3"
    ],
    "inventario": [
     8,
     3
    ]
   }
  },
  {
   "id": "s2_b9",
   "nombre": "Concierto de Faustino",
   "img": "img/s2/b_salon.webp",
   "desc": "Los músicos suben al escenario (sin instrumentos: ya están montados) y la canción libre.",
   "amb": [
    {
     "src": "sfx/s1/gente_fiesta.mp3",
     "vol": 0.12
    }
   ],
   "personajes": [
    "FAUSTINO"
   ],
   "lineas": [
    {
     "id": "s2_b09",
     "quien": "FAUSTINO",
     "texto": "¡Muchachos, a escena! Que esta noche cantamos para los enamorados.",
     "voz": "voz/s2/s2_b09.mp3",
     "var": "RECURSO_LLEGAN",
     "fijo": true
    }
   ],
   "inter": {
    "nota": "Suno «Afro Latin · Bolero · Faustino v2», versión B (ceafa8a9…), montada con herramientas/concierto_bolero.py.",
    "cancion": "mus/s2_bolero_concierto.mp3",
    "bpm": 83.17,
    "t0rejilla": 0,
    "planos": [
     {
      "t": 0,
      "img": "img/s2/vc_b_16_hoja_banda.webp",
      "txt": "hoja banda"
     },
     {
      "t": 4.97,
      "img": "img/s2/vc_b_36_faustino_canta_pp.webp",
      "txt": "faustino canta pp"
     },
     {
      "t": 10.741,
      "img": "img/s2/vc_b_35_pies_bailando.webp",
      "txt": "pies bailando"
     },
     {
      "t": 16.513,
      "img": "img/s2/vc_b_19_guitarra_trio_cc.webp",
      "txt": "guitarra trio cc"
     },
     {
      "t": 22.284,
      "img": "img/s2/vc_b_20_bajo_suave_cc.webp",
      "txt": "bajo suave cc"
     },
     {
      "t": 28.777,
      "img": "img/s2/vc_b_21_maracas_cc.webp",
      "txt": "maracas cc"
     },
     {
      "t": 33.105,
      "img": "img/s2/vc_b_22_maracas_manos.webp",
      "txt": "maracas manos"
     },
     {
      "t": 40.319,
      "img": "img/s2/vc_b_23_congas_cc.webp",
      "txt": "congas cc"
     },
     {
      "t": 45.369,
      "img": "img/s2/vc_b_24_congas_callan.webp",
      "txt": "congas callan"
     },
     {
      "t": 51.14,
      "img": "img/s2/vc_b_25_nacio_santiago.webp",
      "txt": "nacio santiago"
     },
     {
      "t": 58.355,
      "img": "img/s2/vc_b_27_balcon_a_balcon.webp",
      "txt": "balcon a balcon"
     },
     {
      "t": 62.683,
      "img": "img/s2/vc_b_37_faustino_canta_pp.webp",
      "txt": "faustino canta pp"
     },
     {
      "t": 67.733,
      "img": "img/s2/vc_b_29_parejas_abrazadas.webp",
      "txt": "parejas abrazadas"
     },
     {
      "t": 72.061,
      "img": "img/s2/vc_b_33_mesa_zumos_flores.webp",
      "txt": "mesa zumos flores"
     },
     {
      "t": 74.947,
      "img": "img/s2/vc_b_21_maracas_cc.webp",
      "txt": "maracas cc"
     },
     {
      "t": 80.718,
      "img": "img/s2/vc_b_31_trio_completo.webp",
      "txt": "trio completo"
     },
     {
      "t": 86.49,
      "img": "img/s2/vc_b_23_congas_cc.webp",
      "txt": "congas cc"
     },
     {
      "t": 91.54,
      "img": "img/s2/vc_b_30_salon_entero.webp",
      "txt": "salon entero"
     },
     {
      "t": 96.589,
      "img": "img/s2/vc_b_38_faustino_canta_pp.webp",
      "txt": "faustino canta pp"
     },
     {
      "t": 103.082,
      "img": "img/s2/vc_b_32_eso_es_bolero.webp",
      "txt": "eso es bolero"
     },
     {
      "t": 106.689,
      "img": "img/s2/vc_b_29_parejas_abrazadas.webp",
      "txt": "parejas abrazadas"
     }
    ],
    "letra": [
     {
      "t": 4.48,
      "txt": "Despacito, mi niña, que el bolero no corre:",
      "t1": 9.24,
      "w": [
       [
        4.51,
        "Despacito,"
       ],
       [
        5.49,
        "mi"
       ],
       [
        5.66,
        "niña,"
       ],
       [
        7.23,
        "que"
       ],
       [
        7.4,
        "el"
       ],
       [
        7.71,
        "bolero"
       ],
       [
        8.24,
        "no"
       ],
       [
        8.45,
        "corre:"
       ]
      ]
     },
     {
      "t": 10.18,
      "txt": "va en cuatro, sin prisa, para hablarte de amor.",
      "t1": 15.12,
      "w": [
       [
        10.21,
        "va"
       ],
       [
        10.33,
        "en"
       ],
       [
        10.61,
        "cuatro,"
       ],
       [
        10.91,
        "sin"
       ],
       [
        11.33,
        "prisa,"
       ],
       [
        11.89,
        "para"
       ],
       [
        13.29,
        "hablarte"
       ],
       [
        13.95,
        "de"
       ],
       [
        14.13,
        "amor."
       ]
      ]
     },
     {
      "t": 15.97,
      "txt": "La guitarra del trío me acompaña en la noche,",
      "t1": 20.37,
      "w": [
       [
        16.0,
        "La"
       ],
       [
        16.23,
        "guitarra"
       ],
       [
        16.81,
        "del"
       ],
       [
        17.27,
        "trío"
       ],
       [
        17.73,
        "me"
       ],
       [
        18.81,
        "acompaña"
       ],
       [
        19.66,
        "en"
       ],
       [
        19.9,
        "la"
       ],
       [
        20.17,
        "noche,"
       ]
      ]
     },
     {
      "t": 20.39,
      "txt": "y el bajo, muy suave, camina alrededor.",
      "t1": 26.26,
      "w": [
       [
        20.42,
        "y"
       ],
       [
        21.88,
        "el"
       ],
       [
        22.09,
        "bajo,"
       ],
       [
        22.35,
        "muy"
       ],
       [
        22.69,
        "suave,"
       ],
       [
        23.31,
        "camina"
       ],
       [
        24.73,
        "alrededor."
       ]
      ]
     },
     {
      "t": 26.31,
      "txt": ""
     },
     {
      "t": 28.48,
      "txt": "Maracas, maracas, corcheas de terciopelo,",
      "t1": 32.72,
      "w": [
       [
        28.51,
        "Maracas,"
       ],
       [
        29.4,
        "maracas,"
       ],
       [
        30.37,
        "corcheas"
       ],
       [
        31.5,
        "de"
       ],
       [
        31.69,
        "terciopelo,"
       ]
      ]
     },
     {
      "t": 32.74,
      "txt": "y cada cuatro compases, un tresillo al vuelo.",
      "t1": 39.12,
      "w": [
       [
        32.77,
        "y"
       ],
       [
        34.21,
        "cada"
       ],
       [
        34.45,
        "cuatro"
       ],
       [
        34.9,
        "compases,"
       ],
       [
        35.87,
        "un"
       ],
       [
        36.53,
        "tresillo"
       ],
       [
        37.32,
        "al"
       ],
       [
        37.63,
        "vuelo."
       ]
      ]
     },
     {
      "t": 39.79,
      "txt": "Las congas se callan, y al final del compás,",
      "t1": 44.46,
      "w": [
       [
        39.82,
        "Las"
       ],
       [
        39.99,
        "congas"
       ],
       [
        40.76,
        "se"
       ],
       [
        41.07,
        "callan,"
       ],
       [
        41.75,
        "y"
       ],
       [
        42.01,
        "al"
       ],
       [
        42.39,
        "final"
       ],
       [
        42.57,
        "del"
       ],
       [
        43.19,
        "compás,"
       ]
      ]
     },
     {
      "t": 45.0,
      "txt": "tres golpes que dicen: no te vayas, ven acá.",
      "t1": 49.6,
      "w": [
       [
        45.03,
        "tres"
       ],
       [
        45.21,
        "golpes"
       ],
       [
        45.73,
        "que"
       ],
       [
        45.97,
        "dicen:"
       ],
       [
        46.51,
        "no"
       ],
       [
        47.37,
        "te"
       ],
       [
        47.51,
        "vayas,"
       ],
       [
        48.09,
        "ven"
       ],
       [
        48.81,
        "acá."
       ]
      ]
     },
     {
      "t": 46.77,
      "txt": ""
     },
     {
      "t": 50.48,
      "txt": "Nació en Santiago de Cuba, con la trova y la guitarra,",
      "t1": 55.86,
      "w": [
       [
        50.51,
        "Nació"
       ],
       [
        50.82,
        "en"
       ],
       [
        51.04,
        "Santiago"
       ],
       [
        51.61,
        "de"
       ],
       [
        52.1,
        "Cuba,"
       ],
       [
        52.43,
        "con"
       ],
       [
        53.69,
        "la"
       ],
       [
        53.9,
        "trova"
       ],
       [
        54.21,
        "y"
       ],
       [
        54.37,
        "la"
       ],
       [
        54.49,
        "guitarra,"
       ]
      ]
     },
     {
      "t": 56.39,
      "txt": "y cruzó hasta México de balcón en balcón.",
      "t1": 61.24,
      "w": [
       [
        56.42,
        "y"
       ],
       [
        56.56,
        "cruzó"
       ],
       [
        56.85,
        "hasta"
       ],
       [
        57.13,
        "México"
       ],
       [
        57.65,
        "de"
       ],
       [
        58.47,
        "balcón"
       ],
       [
        59.23,
        "en"
       ],
       [
        59.84,
        "balcón."
       ]
      ]
     },
     {
      "t": 62.14,
      "txt": "No lo confundas, muchacho, con el bolero de España:",
      "t1": 66.84,
      "w": [
       [
        62.17,
        "No"
       ],
       [
        62.29,
        "lo"
       ],
       [
        62.51,
        "confundas,"
       ],
       [
        63.28,
        "muchacho,"
       ],
       [
        64.13,
        "con"
       ],
       [
        65.26,
        "el"
       ],
       [
        65.51,
        "bolero"
       ],
       [
        66.0,
        "de"
       ],
       [
        66.3,
        "España:"
       ]
      ]
     },
     {
      "t": 66.86,
      "txt": "el nuestro va en cuatro y te toca el corazón.",
      "t1": 72.36,
      "w": [
       [
        66.89,
        "el"
       ],
       [
        68.29,
        "nuestro"
       ],
       [
        68.64,
        "va"
       ],
       [
        68.84,
        "en"
       ],
       [
        69.2,
        "cuatro"
       ],
       [
        69.55,
        "y"
       ],
       [
        70.23,
        "te"
       ],
       [
        70.52,
        "toca"
       ],
       [
        70.8,
        "el"
       ],
       [
        71.35,
        "corazón."
       ]
      ]
     },
     {
      "t": 72.41,
      "txt": ""
     },
     {
      "t": 74.79,
      "txt": "Maracas, maracas, corcheas de terciopelo,",
      "t1": 79.32,
      "w": [
       [
        74.82,
        "Maracas,"
       ],
       [
        75.56,
        "maracas,"
       ],
       [
        76.78,
        "corcheas"
       ],
       [
        77.67,
        "de"
       ],
       [
        77.88,
        "terciopelo,"
       ]
      ]
     },
     {
      "t": 80.18,
      "txt": "y cada cuatro compases, un tresillo al vuelo.",
      "t1": 85.24,
      "w": [
       [
        80.21,
        "y"
       ],
       [
        80.39,
        "cada"
       ],
       [
        80.61,
        "cuatro"
       ],
       [
        81.06,
        "compases,"
       ],
       [
        82.03,
        "un"
       ],
       [
        82.71,
        "tresillo"
       ],
       [
        83.57,
        "al"
       ],
       [
        83.83,
        "vuelo."
       ]
      ]
     },
     {
      "t": 85.94,
      "txt": "Las congas se callan, y al final del compás,",
      "t1": 90.94,
      "w": [
       [
        85.97,
        "Las"
       ],
       [
        86.16,
        "congas"
       ],
       [
        86.92,
        "se"
       ],
       [
        87.25,
        "callan,"
       ],
       [
        87.93,
        "y"
       ],
       [
        88.19,
        "al"
       ],
       [
        88.55,
        "final"
       ],
       [
        88.73,
        "del"
       ],
       [
        89.39,
        "compás,"
       ]
      ]
     },
     {
      "t": 91.19,
      "txt": "tres golpes que dicen: no te vayas, ven acá.",
      "t1": 95.76,
      "w": [
       [
        91.22,
        "tres"
       ],
       [
        91.39,
        "golpes"
       ],
       [
        91.87,
        "que"
       ],
       [
        92.16,
        "dicen:"
       ],
       [
        92.69,
        "no"
       ],
       [
        93.56,
        "te"
       ],
       [
        93.78,
        "vayas,"
       ],
       [
        94.28,
        "ven"
       ],
       [
        94.98,
        "acá."
       ]
      ]
     },
     {
      "t": 95.81,
      "txt": ""
     },
     {
      "t": 102.56,
      "txt": "¡Eso es bolero, jóvenes!",
      "t1": 104.16,
      "w": [
       [
        102.59,
        "¡Eso"
       ],
       [
        102.77,
        "es"
       ],
       [
        102.95,
        "bolero,"
       ],
       [
        103.35,
        "jóvenes!"
       ]
      ]
     },
     {
      "t": 104.21,
      "txt": ""
     }
    ],
    "fichas": [],
    "botones": {
     "desde": 86.11,
     "seguir": "Siguiente parada",
     "ejemplos": [
      {
       "src": "videos/bolero-1.mp4",
       "tit": "Bolero · ejemplo 1"
      },
      {
       "src": "videos/bolero-2.mp4",
       "tit": "Bolero · ejemplo 2"
      },
      {
       "src": "videos/bolero-3.mp4",
       "tit": "Bolero · ejemplo 3"
      }
     ]
    },
    "tipo": "concierto",
    "recursos": [
     "mus/s2_bolero_concierto.mp3",
     "videos/bolero-1.mp4",
     "videos/bolero-2.mp4",
     "videos/bolero-3.mp4"
    ],
    "fundidoPlanos": 0.18,
    "kb": false
   },
   "despues": [
    {
     "id": "s2_b10",
     "quien": "FAUSTINO",
     "texto": "¡Eso es bolero, jóvenes! Y ahora, déjenme llamar a un muchacho de la República Dominicana que lo lleva en la sangre…",
     "voz": "voz/s2/s2_b10.mp3"
    }
   ],
   "var": {
    "RECURSO_LLEGAN": "img/s2/b_musicos_llegan.webp"
   }
  },
  {
   "id": "s2_b12",
   "nombre": "Llamada a Ramoncito",
   "img": "img/s2/b_llamada.webp",
   "desc": "Faustino al teléfono en Santiago; al otro lado, Ramoncito en su barrio de Santo Domingo (pantalla partida).",
   "amb": [
    {
     "src": "sfx/s1/grillos_noche.mp3",
     "vol": 0.12
    }
   ],
   "personajes": [
    "FAUSTINO",
    "RAMONCITO"
   ],
   "espera": 0,
   "inter": {
    "tipo": "llamada",
    "de": "FAUSTINO",
    "a": "RAMONCITO",
    "imgDe": "img/s2/llamada_faustino.webp",
    "imgA": "img/s2/llamada_ramoncito.webp",
    "tono": "sfx/s1/telefono.mp3",
    "recursos": [
     "sfx/s1/telefono.mp3",
     "sfx/s1/colgar.mp3"
    ],
    "lineas": [
     {
      "id": "s2_t01",
      "quien": "RAMONCITO",
      "texto": "¿Aló? ¡Don Faustino! ¿Qué hubo, maestro?",
      "voz": "voz/s2/s2_t01.mp3"
     },
     {
      "id": "s2_t02",
      "quien": "FAUSTINO",
      "texto": "Ramoncito, muchacho: aquí tengo unos jóvenes que ya saben de boleros. Enséñales lo tuyo… la bachata.",
      "voz": "voz/s2/s2_t02.mp3"
     },
     {
      "id": "s2_t03",
      "quien": "RAMONCITO",
      "texto": "¡Claro que sí! La bachata es nieta del bolero, Don Faustino… ¡pero de barrio y con guitarra traviesa!",
      "voz": "voz/s2/s2_t03.mp3"
     },
     {
      "id": "s2_t04",
      "quien": "FAUSTINO",
      "texto": "Pues ya tienen pasaje: ¡a la República Dominicana!",
      "voz": "voz/s2/s2_t04.mp3"
     }
    ]
   },
   "mus": {
    "src": "mus/s2_bolero_fondo.mp3",
    "vol": 0.32,
    "bucle": true
   }
  },
  {
   "id": "s2_h0",
   "nombre": "Viaje · a Santo Domingo",
   "img": "img/s2/mapa_cuba_rd.webp",
   "desc": "La carta del Caribe, de cerca: el barco va de Santiago de Cuba a Santo Domingo, por el sur de La Española.",
   "amb": [
    {
     "src": "sfx/s1/barco_mar.mp3",
     "vol": 0.35
    }
   ],
   "mapa": {
    "desde": "Cuba",
    "hasta": "República Dominicana · Santo Domingo",
    "sub": "República Dominicana, Santo Domingo: aquí nació la bachata",
    "dur": 9,
    "vehiculo": "el barco",
    "ruta": [
     [
      0.205,
      0.468
     ],
     [
      0.285,
      0.53
     ],
     [
      0.312,
      0.635
     ],
     [
      0.4,
      0.77
     ],
     [
      0.52,
      0.8
     ],
     [
      0.615,
      0.878
     ],
     [
      0.69,
      0.8
     ],
     [
      0.745,
      0.712
     ]
    ],
    "encuadre": [
     1,
     0.5,
     0.5
    ],
    "icono": "img/s1/barco_cenital.webp",
    "cenital": true,
    "anchoIcono": 2.9,
    "proporcionIcono": 3.286,
    "zoom": false,
    "sfx": [
     {
      "src": "sfx/s1/barco_sirena.mp3",
      "vol": 0.3,
      "t": 0
     }
    ],
    "etiq": {
     "desde": [
      -9,
      -1.6
     ],
     "hasta": [
      -26,
      -9
     ]
    },
    "musA": {
     "src": "mus/s2_bachata_fondo.mp3",
     "vol": 0.7
    }
   },
   "mus": {
    "src": "mus/s2_bolero_fondo.mp3",
    "vol": 0.6
   }
  },
  {
   "id": "s2_h1",
   "nombre": "Santo Domingo",
   "img": "img/s2/h_zona_colonial.webp",
   "desc": "La Zona Colonial de Santo Domingo de noche: adoquines, farolas, la catedral al fondo.",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.22
    }
   ],
   "personajes": [
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s2_n05",
     "quien": "NARR",
     "texto": "¡De vuelta a la República Dominicana! Pero esta vez no vamos al campo: vamos a la capital, Santo Domingo, a los barrios donde nació la bachata.",
     "voz": "voz/s2/s2_n05.mp3"
    },
    {
     "id": "s2_y01",
     "quien": "YUNIOR",
     "texto": "¡Klk, mi gente! ¿Otra vez por aquí? Ramoncito los está esperando… ¡gócenselo!",
     "voz": "voz/s2/s2_y01.mp3",
     "var": "RECURSO_BARRIO",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_BARRIO": "img/s2/h_calle_barrio.webp"
   },
   "mus": {
    "src": "mus/s2_bachata_fondo.mp3",
    "vol": 0.42,
    "bucle": true
   }
  },
  {
   "id": "s2_h2",
   "nombre": "Ramoncito nos recibe",
   "img": "img/s2/h_colmado.webp",
   "desc": "El colmado del barrio de noche (sin Ramoncito: él va en PNG).",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.15
    }
   ],
   "personajes": [
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_h01",
     "quien": "RAMONCITO",
     "texto": "Ay, mi gente… ¿cómo están? Yo soy Ramoncito. Aquí, cuando a uno le duele el corazón, no llora: ¡baila bachata!",
     "voz": "voz/s2/s2_h01.mp3"
    },
    {
     "id": "s2_h02",
     "quien": "RAMONCITO",
     "texto": "La bachata nació en estos barrios en los años sesenta. Al principio la llamaban «música de amargue» y no la ponían en la radio… ¡y mírala ahora, sonando en todo el mundo!",
     "voz": "voz/s2/s2_h02.mp3",
     "var": "RECURSO_RADIO",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_RADIO": "img/s2/h_radio.webp"
   },
   "mus": {
    "src": "mus/s2_bachata_fondo.mp3",
    "vol": 0.36,
    "bucle": true
   }
  },
  {
   "id": "s2_h3",
   "nombre": "Reconocerla · güira y bongó",
   "img": "img/s2/h_patio.webp",
   "desc": "El patio del colmado con los instrumentos: güira, bongó, bajo, la rítmica y la diabla.",
   "amb": [],
   "personajes": [
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_h03",
     "quien": "RAMONCITO",
     "texto": "¿Cómo se reconoce? La percusión son solo dos cosas: la güira… y el bongó. ¡Nada de congas ni batería!",
     "voz": "voz/s2/s2_h03.mp3"
    }
   ],
   "inter": [
    {
     "tipo": "instrumento",
     "id": "guira",
     "nom": "Güira",
     "img": "img/s1/inst_m_guira.webp",
     "loop": "loops/s2/bachata_guira.mp3",
     "color": "#1F9AA0",
     "bpm": 130,
     "compases": 2,
     "vueltas": 1,
     "espera": 0.6,
     "patron": "X.x.X.x.X.x.X.x.",
     "recursos": [
      "loops/s2/bachata_guira.mp3",
      "img/s1/inst_m_guira.webp"
     ]
    },
    {
     "tipo": "instrumento",
     "id": "bongo",
     "nom": "Bongó",
     "img": "img/s2/inst_bongo.webp",
     "loop": "loops/s2/bachata_bongo.mp3",
     "color": "#C9603F",
     "bpm": 130,
     "compases": 2,
     "vueltas": 1,
     "espera": 0.6,
     "patron": "X.x.X.x.X.x.X.x.",
     "recursos": [
      "loops/s2/bachata_bongo.mp3",
      "img/s2/inst_bongo.webp"
     ],
     "nivK": 0.6
    }
   ],
   "mus": {
    "src": "mus/s2_bachata_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s2_h4",
   "nombre": "Reconocerla · los breaks",
   "img": "img/s2/h_patio.webp",
   "desc": "El patio; güira y bongó con sus breaks.",
   "amb": [],
   "personajes": [
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_h04",
     "quien": "RAMONCITO",
     "texto": "Ahora fíjense: la base es sencillita… pero estos músicos se la gozan: ¡están todo el rato metiendo breaks locos, repiques y cortes por todos lados!",
     "voz": "voz/s2/s2_h04.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "breaks",
    "nom": "Güira + bongó con breaks",
    "img": "img/s2/inst_bongo.webp",
    "loop": "loops/s2/bachata_breaks.mp3",
    "color": "#D9B44A",
    "bpm": 130,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s2/bachata_breaks.mp3",
     "img/s2/inst_bongo.webp"
    ],
    "img2": "img/s1/inst_m_guira.webp"
   },
   "mus": {
    "src": "mus/s2_bachata_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s2_h5",
   "nombre": "Reconocerla · la güira del estribillo",
   "img": "img/s2/h_patio.webp",
   "desc": "El patio; la güira, quieta.",
   "amb": [],
   "personajes": [
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_h05",
     "quien": "RAMONCITO",
     "texto": "Y fíjense en la güira: en la estrofa va caminando, en corcheas… pero al llegar al estribillo ya llegó a donde quería: se queda quieta, en negras.",
     "voz": "voz/s2/s2_h05.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "guira_estribillo",
    "nom": "Güira del estribillo + bongó",
    "img": "img/s1/inst_m_guira.webp",
    "loop": "loops/s2/bachata_estribillo.mp3",
    "color": "#1F9AA0",
    "bpm": 130,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "patron": "X...X...X...X...",
    "recursos": [
     "loops/s2/bachata_estribillo.mp3",
     "img/s1/inst_m_guira.webp",
     "img/s2/inst_bongo.webp"
    ],
    "img2": "img/s2/inst_bongo.webp"
   },
   "mus": {
    "src": "mus/s2_bachata_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s2_h6",
   "nombre": "Reconocerla · el bajo",
   "img": "img/s2/h_patio.webp",
   "desc": "El patio; el bajo.",
   "amb": [],
   "personajes": [
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_h06",
     "quien": "RAMONCITO",
     "texto": "Abajo, el bajo: una larga y dos cortas, compás tras compás.",
     "voz": "voz/s2/s2_h06.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "bajo",
    "nom": "Bajo",
    "img": "img/s1/inst_m_bajo_h.webp",
    "loop": "loops/s2/bachata_bajo.mp3",
    "color": "#3E7D4F",
    "bpm": 130,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "patron": "X.......X...X...",
    "recursos": [
     "loops/s2/bachata_bajo.mp3",
     "img/s1/inst_m_bajo_h.webp"
    ],
    "nivK": 0.6
   },
   "mus": {
    "src": "mus/s2_bachata_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s2_h7",
   "nombre": "Reconocerla · las dos guitarras",
   "img": "img/s2/h_patio.webp",
   "desc": "El patio; la rítmica y la diabla.",
   "amb": [],
   "personajes": [
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_h07",
     "quien": "RAMONCITO",
     "texto": "Y lo más bonito: dos guitarras. La rítmica, que acompaña… y la diabla: la traviesa, la del punteo, ¡que no para de improvisar!",
     "voz": "voz/s2/s2_h07.mp3"
    }
   ],
   "inter": [
    {
     "tipo": "instrumento",
     "id": "ritmica",
     "nom": "Guitarra rítmica",
     "img": "img/s2/inst_h_ritmica.webp",
     "loop": "loops/s2/bachata_ritmica.mp3",
     "color": "#5B6FA8",
     "bpm": 130,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s2/bachata_ritmica.mp3",
      "img/s2/inst_h_ritmica.webp"
     ]
    },
    {
     "tipo": "instrumento",
     "id": "diabla",
     "nom": "Guitarra diabla",
     "img": "img/s2/inst_h_diabla.webp",
     "loop": "loops/s2/bachata_diabla.mp3",
     "color": "#E04A7A",
     "bpm": 130,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s2/bachata_diabla.mp3",
      "img/s2/inst_h_diabla.webp"
     ]
    }
   ],
   "mus": {
    "src": "mus/s2_bachata_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s2_h7b",
   "nombre": "Reconocerla · la voz",
   "img": "img/s2/h_patio.webp",
   "desc": "El patio.",
   "amb": [],
   "personajes": [
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_h12",
     "quien": "RAMONCITO",
     "texto": "Y otra pista: la bachata suele cantarla una voz de hombre, muy aguda… ¡Pero ojo! Eso es solo una referencia: cualquier voz puede cantar bachata.",
     "voz": "voz/s2/s2_h12.mp3"
    }
   ],
   "mus": {
    "src": "mus/s2_bachata_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s2_h8",
   "nombre": "Mezclador de bachata",
   "img": "img/s2/h_patio.webp",
   "desc": "El patio.",
   "amb": [],
   "personajes": [
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_h08",
     "quien": "RAMONCITO",
     "texto": "¡Te toca, mi pana! Prende y apaga los instrumentos y arma tu bachata.",
     "voz": "voz/s2/s2_h08.mp3"
    }
   ],
   "inter": {
    "tipo": "mezclador",
    "tit": "Arma tu bachata",
    "bpm": 130,
    "compases": 4,
    "pistas": [
     {
      "id": "guira",
      "nom": "Güira",
      "img": "img/s1/inst_m_guira_h.webp",
      "loop": "loops/s2/bachata_guira.mp3",
      "color": "#1F9AA0",
      "patron": "X.x.X.x.X.x.X.x.",
      "celda": [
       5,
       2,
       2,
       1
      ]
     },
     {
      "id": "bongo",
      "nom": "Bongó",
      "img": "img/s2/inst_bongo.webp",
      "loop": "loops/s2/bachata_bongo.mp3",
      "color": "#C9603F",
      "patron": "X.x.X.x.X.x.X.x.",
      "nivK": 0.6,
      "celda": [
       7,
       2,
       2,
       1
      ]
     },
     {
      "id": "bajo",
      "nom": "Bajo",
      "img": "img/s1/inst_m_bajo_h.webp",
      "loop": "loops/s2/bachata_bajo.mp3",
      "color": "#3E7D4F",
      "patron": "X.......X...X...",
      "nivK": 0.6,
      "celda": [
       1,
       1,
       4,
       1
      ]
     },
     {
      "id": "ritmica",
      "nom": "Guitarra rítmica",
      "img": "img/s2/inst_h_ritmica_h.webp",
      "loop": "loops/s2/bachata_ritmica.mp3",
      "color": "#5B6FA8",
      "celda": [
       5,
       1,
       4,
       1
      ]
     },
     {
      "id": "diabla",
      "nom": "Guitarra diabla",
      "img": "img/s2/inst_h_diabla_h.webp",
      "loop": "loops/s2/bachata_diabla.mp3",
      "color": "#E04A7A",
      "celda": [
       1,
       2,
       4,
       1
      ]
     }
    ],
    "inicial": [],
    "recursos": [
     "loops/s2/bachata_guira.mp3",
     "loops/s2/bachata_bongo.mp3",
     "loops/s2/bachata_bajo.mp3",
     "loops/s2/bachata_ritmica.mp3",
     "loops/s2/bachata_diabla.mp3"
    ],
    "inventario": [
     8,
     2
    ]
   }
  },
  {
   "id": "s2_h9",
   "nombre": "Concierto de Ramoncito",
   "img": "img/s2/h_patio.webp",
   "desc": "Los músicos llegan al patio (sin instrumentos: ya están montados) y la canción libre.",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_h09",
     "quien": "RAMONCITO",
     "texto": "¡Muchachos, a tocar, que esta va con sentimiento!",
     "voz": "voz/s2/s2_h09.mp3",
     "var": "RECURSO_LLEGAN",
     "fijo": true
    }
   ],
   "inter": {
    "nota": "Suno «Afro Latin · Bachata · Ramoncito v2», versión A (2f2f5c9a…), montada con herramientas/concierto_bachata.py.",
    "cancion": "mus/s2_bachata_concierto.mp3",
    "bpm": 128.03,
    "t0rejilla": 0,
    "planos": [
     {
      "t": 0,
      "img": "img/s2/vc_h_16_hoja_banda.webp",
      "txt": "hoja banda"
     },
     {
      "t": 3.669,
      "img": "img/s2/vc_h_17_ramoncito_micro.webp",
      "txt": "ramoncito micro"
     },
     {
      "t": 11.636,
      "img": "img/s2/vc_h_36_ramoncito_canta_pp.webp",
      "txt": "ramoncito canta pp"
     },
     {
      "t": 14.916,
      "img": "img/s2/vc_h_34_bombillas_banderines.webp",
      "txt": "bombillas banderines"
     },
     {
      "t": 18.197,
      "img": "img/s2/vc_h_19_guira_bongo_cc.webp",
      "txt": "guira bongo cc"
     },
     {
      "t": 22.415,
      "img": "img/s2/vc_h_20_break_de_locos.webp",
      "txt": "break de locos"
     },
     {
      "t": 26.164,
      "img": "img/s2/vc_h_21_guira_caminando.webp",
      "txt": "guira caminando"
     },
     {
      "t": 30.382,
      "img": "img/s2/vc_h_22_estribillo.webp",
      "txt": "estribillo"
     },
     {
      "t": 34.599,
      "img": "img/s2/vc_h_37_ramoncito_canta_pp.webp",
      "txt": "ramoncito canta pp"
     },
     {
      "t": 40.223,
      "img": "img/s2/vc_h_23_diabla_cc.webp",
      "txt": "diabla cc"
     },
     {
      "t": 43.504,
      "img": "img/s2/vc_h_24_bajo_cc.webp",
      "txt": "bajo cc"
     },
     {
      "t": 46.784,
      "img": "img/s2/vc_h_25_guira_quietica.webp",
      "txt": "guira quietica"
     },
     {
      "t": 50.533,
      "img": "img/s2/vc_h_35_pies_bailando.webp",
      "txt": "pies bailando"
     },
     {
      "t": 53.345,
      "img": "img/s2/vc_h_39_diabla_solo.webp",
      "txt": "diabla solo"
     },
     {
      "t": 58.969,
      "img": "img/s2/vc_h_26_barrio_santo_domingo.webp",
      "txt": "barrio santo domingo"
     },
     {
      "t": 62.718,
      "img": "img/s2/vc_h_27_amargue_patio.webp",
      "txt": "amargue patio"
     },
     {
      "t": 65.53,
      "img": "img/s2/vc_h_28_ritmica_contratiempo.webp",
      "txt": "ritmica contratiempo"
     },
     {
      "t": 69.279,
      "img": "img/s2/vc_h_29_diabla_puntea.webp",
      "txt": "diabla puntea"
     },
     {
      "t": 73.028,
      "img": "img/s2/vc_h_21_guira_caminando.webp",
      "txt": "guira caminando"
     },
     {
      "t": 77.246,
      "img": "img/s2/vc_h_22_estribillo.webp",
      "txt": "estribillo"
     },
     {
      "t": 81.463,
      "img": "img/s2/vc_h_38_ramoncito_canta_pp.webp",
      "txt": "ramoncito canta pp"
     },
     {
      "t": 87.087,
      "img": "img/s2/vc_h_23_diabla_cc.webp",
      "txt": "diabla cc"
     },
     {
      "t": 90.368,
      "img": "img/s2/vc_h_24_bajo_cc.webp",
      "txt": "bajo cc"
     },
     {
      "t": 93.648,
      "img": "img/s2/vc_h_25_guira_quietica.webp",
      "txt": "guira quietica"
     },
     {
      "t": 97.397,
      "img": "img/s2/vc_h_17_ramoncito_micro.webp",
      "txt": "ramoncito micro"
     },
     {
      "t": 103.489,
      "img": "img/s2/vc_h_32_eso_es_bachata.webp",
      "txt": "eso es bachata"
     }
    ],
    "letra": [
     {
      "t": 3.63,
      "txt": "Ay, mi amor, si te duele el corazón,",
      "t1": 8.89,
      "w": [
       [
        3.66,
        "Ay,"
       ],
       [
        4.24,
        "mi"
       ],
       [
        4.36,
        "amor,"
       ],
       [
        5.76,
        "si"
       ],
       [
        6.34,
        "te"
       ],
       [
        6.53,
        "duele"
       ],
       [
        6.98,
        "el"
       ],
       [
        7.64,
        "corazón,"
       ]
      ]
     },
     {
      "t": 8.94,
      "txt": ""
     },
     {
      "t": 10.85,
      "txt": "no llores sola, que suena esta canción:",
      "t1": 16.49,
      "w": [
       [
        10.88,
        "no"
       ],
       [
        11.36,
        "llores"
       ],
       [
        11.87,
        "sola,"
       ],
       [
        13.41,
        "que"
       ],
       [
        13.84,
        "suena"
       ],
       [
        14.33,
        "esta"
       ],
       [
        14.84,
        "canción:"
       ]
      ]
     },
     {
      "t": 16.54,
      "txt": ""
     },
     {
      "t": 17.84,
      "txt": "la güira y el bongó, y nada más,",
      "t1": 21.99,
      "w": [
       [
        17.87,
        "la"
       ],
       [
        18.2,
        "güira"
       ],
       [
        18.52,
        "y"
       ],
       [
        18.76,
        "el"
       ],
       [
        19.0,
        "bongó,"
       ],
       [
        20.01,
        "y"
       ],
       [
        20.48,
        "nada"
       ],
       [
        20.8,
        "más,"
       ]
      ]
     },
     {
      "t": 22.1,
      "txt": "¡y un break de locos a cada compás!",
      "t1": 25.69,
      "w": [
       [
        22.13,
        "¡y"
       ],
       [
        22.25,
        "un"
       ],
       [
        22.43,
        "break"
       ],
       [
        22.62,
        "de"
       ],
       [
        22.91,
        "locos"
       ],
       [
        23.72,
        "a"
       ],
       [
        24.33,
        "cada"
       ],
       [
        24.73,
        "compás!"
       ]
      ]
     },
     {
      "t": 25.86,
      "txt": "La güira camina, camina sin parar…",
      "t1": 29.27,
      "w": [
       [
        25.89,
        "La"
       ],
       [
        26.25,
        "güira"
       ],
       [
        26.39,
        "camina,"
       ],
       [
        27.23,
        "camina"
       ],
       [
        27.83,
        "sin"
       ],
       [
        28.3,
        "parar…"
       ]
      ]
     },
     {
      "t": 29.65,
      "txt": "¡que en el estribillo se queda en su lugar!",
      "t1": 33.39,
      "w": [
       [
        29.68,
        "¡que"
       ],
       [
        29.96,
        "en"
       ],
       [
        30.04,
        "el"
       ],
       [
        30.26,
        "estribillo"
       ],
       [
        30.96,
        "se"
       ],
       [
        31.22,
        "queda"
       ],
       [
        31.58,
        "en"
       ],
       [
        31.88,
        "su"
       ],
       [
        32.08,
        "lugar!"
       ]
      ]
     },
     {
      "t": 34.39,
      "txt": "Bachata, bachata, guitarra diabla,",
      "t1": 38.17,
      "w": [
       [
        34.42,
        "Bachata,"
       ],
       [
        35.26,
        "bachata,"
       ],
       [
        36.32,
        "guitarra"
       ],
       [
        36.94,
        "diabla,"
       ]
      ]
     },
     {
      "t": 38.19,
      "txt": "la que improvisa, la que me habla.",
      "t1": 41.43,
      "w": [
       [
        38.22,
        "la"
       ],
       [
        38.58,
        "que"
       ],
       [
        38.7,
        "improvisa,"
       ],
       [
        40.06,
        "la"
       ],
       [
        40.21,
        "que"
       ],
       [
        40.44,
        "me"
       ],
       [
        40.73,
        "habla."
       ]
      ]
     },
     {
      "t": 41.45,
      "txt": "El bajo te dice: una larga y dos cortas,",
      "t1": 45.38,
      "w": [
       [
        41.48,
        "El"
       ],
       [
        42.09,
        "bajo"
       ],
       [
        42.41,
        "te"
       ],
       [
        42.78,
        "dice:"
       ],
       [
        43.34,
        "una"
       ],
       [
        43.54,
        "larga"
       ],
       [
        44.24,
        "y"
       ],
       [
        44.57,
        "dos"
       ],
       [
        44.73,
        "cortas,"
       ]
      ]
     },
     {
      "t": 45.4,
      "txt": "y la güira, quietica, en negras se acomoda.",
      "t1": 50.51,
      "w": [
       [
        45.43,
        "y"
       ],
       [
        45.6,
        "la"
       ],
       [
        45.9,
        "güira,"
       ],
       [
        46.58,
        "quietica,"
       ],
       [
        47.27,
        "en"
       ],
       [
        47.81,
        "negras"
       ],
       [
        48.72,
        "se"
       ],
       [
        48.96,
        "acomoda."
       ]
      ]
     },
     {
      "t": 50.56,
      "txt": ""
     },
     {
      "t": 58.16,
      "txt": "Nació en los barrios de Santo Domingo,",
      "t1": 61.51,
      "w": [
       [
        58.19,
        "Nació"
       ],
       [
        58.57,
        "en"
       ],
       [
        58.88,
        "los"
       ],
       [
        59.02,
        "barrios"
       ],
       [
        59.51,
        "de"
       ],
       [
        60.03,
        "Santo"
       ],
       [
        60.45,
        "Domingo,"
       ]
      ]
     },
     {
      "t": 61.53,
      "txt": "música de amargue, de lunes a domingo.",
      "t1": 64.81,
      "w": [
       [
        61.56,
        "música"
       ],
       [
        62.22,
        "de"
       ],
       [
        62.58,
        "amargue,"
       ],
       [
        63.16,
        "de"
       ],
       [
        63.34,
        "lunes"
       ],
       [
        64.05,
        "a"
       ],
       [
        64.17,
        "domingo."
       ]
      ]
     },
     {
      "t": 64.83,
      "txt": "La rítmica acompaña, suave, a contratiempo,",
      "t1": 68.78,
      "w": [
       [
        64.86,
        "La"
       ],
       [
        65.35,
        "rítmica"
       ],
       [
        66.0,
        "acompaña,"
       ],
       [
        66.98,
        "suave,"
       ],
       [
        67.66,
        "a"
       ],
       [
        67.86,
        "contratiempo,"
       ]
      ]
     },
     {
      "t": 68.81,
      "txt": "y la diabla puntea robándote el tiempo.",
      "t1": 72.78,
      "w": [
       [
        68.84,
        "y"
       ],
       [
        69.09,
        "la"
       ],
       [
        69.22,
        "diabla"
       ],
       [
        69.58,
        "puntea"
       ],
       [
        70.9,
        "robándote"
       ],
       [
        71.64,
        "el"
       ],
       [
        72.12,
        "tiempo."
       ]
      ]
     },
     {
      "t": 72.8,
      "txt": "La güira camina, camina sin parar…",
      "t1": 76.17,
      "w": [
       [
        72.83,
        "La"
       ],
       [
        73.13,
        "güira"
       ],
       [
        73.51,
        "camina,"
       ],
       [
        74.3,
        "camina"
       ],
       [
        74.7,
        "sin"
       ],
       [
        75.16,
        "parar…"
       ]
      ]
     },
     {
      "t": 76.56,
      "txt": "¡que en el estribillo se queda en su lugar!",
      "t1": 80.33,
      "w": [
       [
        76.59,
        "¡que"
       ],
       [
        76.86,
        "en"
       ],
       [
        76.98,
        "el"
       ],
       [
        77.11,
        "estribillo"
       ],
       [
        77.97,
        "se"
       ],
       [
        78.22,
        "queda"
       ],
       [
        78.45,
        "en"
       ],
       [
        78.77,
        "su"
       ],
       [
        78.96,
        "lugar!"
       ]
      ]
     },
     {
      "t": 81.09,
      "txt": "Bachata, bachata, guitarra diabla,",
      "t1": 84.97,
      "w": [
       [
        81.12,
        "Bachata,"
       ],
       [
        82.15,
        "bachata,"
       ],
       [
        83.14,
        "guitarra"
       ],
       [
        83.84,
        "diabla,"
       ]
      ]
     },
     {
      "t": 84.99,
      "txt": "la que improvisa, la que me habla.",
      "t1": 88.31,
      "w": [
       [
        85.02,
        "la"
       ],
       [
        85.45,
        "que"
       ],
       [
        85.7,
        "improvisa,"
       ],
       [
        86.94,
        "la"
       ],
       [
        87.1,
        "que"
       ],
       [
        87.24,
        "me"
       ],
       [
        87.65,
        "habla."
       ]
      ]
     },
     {
      "t": 88.33,
      "txt": "El bajo te dice: una larga y dos cortas,",
      "t1": 92.47,
      "w": [
       [
        88.36,
        "El"
       ],
       [
        88.9,
        "bajo"
       ],
       [
        89.24,
        "te"
       ],
       [
        89.62,
        "dice:"
       ],
       [
        90.15,
        "una"
       ],
       [
        90.41,
        "larga"
       ],
       [
        91.11,
        "y"
       ],
       [
        91.41,
        "dos"
       ],
       [
        91.59,
        "cortas,"
       ]
      ]
     },
     {
      "t": 92.49,
      "txt": "y la güira, quietica, en negras se acomoda.",
      "t1": 97.33,
      "w": [
       [
        92.52,
        "y"
       ],
       [
        92.58,
        "la"
       ],
       [
        92.77,
        "güira,"
       ],
       [
        93.44,
        "quietica,"
       ],
       [
        94.13,
        "en"
       ],
       [
        94.64,
        "negras"
       ],
       [
        95.59,
        "se"
       ],
       [
        95.65,
        "acomoda."
       ]
      ]
     },
     {
      "t": 97.38,
      "txt": ""
     },
     {
      "t": 103.25,
      "txt": "¡Eso es bachata, mi gente!",
      "t1": 105.55,
      "w": [
       [
        103.28,
        "¡Eso"
       ],
       [
        103.4,
        "es"
       ],
       [
        103.72,
        "bachata,"
       ],
       [
        104.47,
        "mi"
       ],
       [
        104.7,
        "gente!"
       ]
      ]
     },
     {
      "t": 105.6,
      "txt": ""
     }
    ],
    "fichas": [],
    "botones": {
     "desde": 92.52,
     "seguir": "Siguiente parada",
     "ejemplos": [
      {
       "src": "videos/bachata-1.mp4",
       "tit": "Bachata · ejemplo 1"
      },
      {
       "src": "videos/bachata-2.mp4",
       "tit": "Bachata · ejemplo 2"
      }
     ]
    },
    "tipo": "concierto",
    "recursos": [
     "mus/s2_bachata_concierto.mp3",
     "videos/bachata-1.mp4",
     "videos/bachata-2.mp4"
    ],
    "fundidoPlanos": 0.18,
    "kb": false
   },
   "despues": [
    {
     "id": "s2_h10",
     "quien": "RAMONCITO",
     "texto": "¡Eso es bachata, mi gente!",
     "voz": "voz/s2/s2_h10.mp3"
    }
   ],
   "var": {
    "RECURSO_LLEGAN": "img/s2/h_musicos_llegan.webp"
   }
  },
  {
   "id": "s2_r1",
   "nombre": "Repaso del sabor 2",
   "img": "img/s2/r_repaso.webp",
   "desc": "Faustino y Ramoncito juntos (sus PNG) entre las dos fichas, sobre el salón y el patio desenfocados.",
   "amb": [],
   "personajes": [
    "FAUSTINO",
    "RAMONCITO"
   ],
   "lineas": [
    {
     "id": "s2_r01",
     "quien": "FAUSTINO",
     "texto": "Repasemos, jóvenes: el bolero, lento y elegante; las maracas con su tresillo… y las congas con su remate de tres golpes.",
     "voz": "voz/s2/s2_r01.mp3"
    },
    {
     "id": "s2_r02",
     "quien": "RAMONCITO",
     "texto": "¿Y la bachata? Güira y bongó, breaks locos, el bajo con una larga y dos cortas… ¡y la guitarra diabla!",
     "voz": "voz/s2/s2_r02.mp3"
    },
    {
     "id": "s2_r03",
     "quien": "FAUSTINO",
     "texto": "¡Y esto ha sido todo por hoy, jóvenes! Aprovechen estos días para escuchar bolero y bachata: con un bolerito, hasta una noche de lluvia en Galicia se vuelve romántica. ¡Hasta el próximo sabor!",
     "voz": "voz/s2/s2_r03.mp3"
    }
   ]
  },
  {
   "id": "s2_q",
   "nombre": "Quiz",
   "img": "img/quiz/fondo_quiz.webp",
   "quiz": true,
   "desc": "Quiz en directo tipo Kahoot (móviles con el QR o, sin red, en voz alta): reconocer cada género visto con 15 s de una canción real y teoría del sabor.",
   "amb": [],
   "personajes": [],
   "lineas": [],
   "espera": 0,
   "inter": {
    "tipo": "quiz",
    "sabor": 2,
    "recursos": [
     "img/quiz/fondo_quiz.webp",
     "mus/portada.mp3",
     "voz/squiz/q_n_intro_s2.mp3",
     "voz/squiz/q_n_pleno.mp3",
     "voz/squiz/q_n_fin6.mp3",
     "voz/squiz/q_n_fin0.mp3",
     "mus/quiz/cumbia_7.2.mp3",
     "voz/squiz/q_n_rec1.mp3",
     "mus/quiz/merengue_7.2.mp3",
     "voz/squiz/q_n_rec2.mp3",
     "mus/quiz/bolero_7.2.mp3",
     "voz/squiz/q_n_rec3.mp3",
     "mus/quiz/bachata_7.2.mp3",
     "voz/squiz/q_cumbia_res.mp3",
     "img/s1/pj/cande_explica.webp",
     "img/s1/pj/cande_brazos.webp",
     "voz/squiz/q_merengue_res.mp3",
     "img/s1/pj/yunior_explica.webp",
     "img/s1/pj/yunior_pulgar.webp",
     "voz/squiz/q_bolero_res.mp3",
     "img/s2/pj/faustino_explica.webp",
     "img/s2/pj/faustino_saluda.webp",
     "voz/squiz/q_bachata_res.mp3",
     "img/s2/pj/ramoncito_explica.webp",
     "img/s2/pj/ramoncito_rie.webp",
     "voz/squiz/q_n_s2_t01.mp3",
     "voz/squiz/q_r_s2_t01.mp3",
     "voz/squiz/q_n_s2_t02.mp3",
     "voz/squiz/q_r_s2_t02.mp3",
     "voz/squiz/q_n_s2_t03.mp3",
     "voz/squiz/q_r_s2_t03.mp3",
     "voz/squiz/q_n_s2_t04.mp3",
     "voz/squiz/q_r_s2_t04.mp3",
     "voz/squiz/q_n_s2_t05.mp3",
     "voz/squiz/q_r_s2_t05.mp3",
     "voz/squiz/q_n_s2_t06.mp3",
     "voz/squiz/q_r_s2_t06.mp3",
     "voz/squiz/q_n_s2_t07.mp3",
     "voz/squiz/q_r_s2_t07.mp3",
     "voz/squiz/q_n_s2_t08.mp3",
     "voz/squiz/q_r_s2_t08.mp3",
     "voz/squiz/q_n_s2_t09.mp3",
     "voz/squiz/q_r_s2_t09.mp3",
     "voz/squiz/q_n_s2_t10.mp3",
     "voz/squiz/q_r_s2_t10.mp3",
     "voz/squiz/q_n_s2_t11.mp3",
     "voz/squiz/q_r_s2_t11.mp3",
     "mus/quiz/fondo_bolero.mp3",
     "mus/quiz/fondo_bachata.mp3",
     "sfx/quiz/tic.mp3",
     "sfx/quiz/cuenta.mp3",
     "sfx/quiz/cierre.mp3",
     "sfx/quiz/buena.mp3",
     "sfx/quiz/clasif.mp3",
     "sfx/quiz/puesto.mp3",
     "sfx/quiz/podio.mp3",
     "sfx/s1/aplausos.mp3"
    ]
   }
  }
 ]
});

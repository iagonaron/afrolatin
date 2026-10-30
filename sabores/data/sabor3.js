/* AFRO LATIN · Sabor 3 (repaso + samba + bossa nova + repaso). Lo genera herramientas/sabor3_datos.py: NO editar a mano. */
BLUES.dia(3, {
 "titulo": "Samba y bossa nova",
 "lugar": "Brasil · Río de Janeiro",
 "planos": [
  {
   "id": "s3_r0",
   "nombre": "Repaso de los sabores 1 y 2",
   "img": "img/s1/mapa_caribe_v3.webp",
   "desc": "La carta del Caribe (la del Sabor 1): Colombia, la República Dominicana y Cuba, con las fichas de los cuatro géneros.",
   "amb": [],
   "lineas": [
    {
     "id": "s3_n01",
     "quien": "NARR",
     "texto": "¡Bienvenidos al tercer sabor! Antes de seguir, miremos el mapa de lo que llevamos: en Colombia, la cumbia, tranquila, con su guacharaca y el contratiempo del piano… en República Dominicana, el merengue, ¡la cumbia a toda pastilla!, con güira y tambora… en Cuba, el bolero, lento y elegante, con el tresillo de las maracas y el remate de las congas… y otra vez en Santo Domingo, la bachata: bongó, breaks locos, el bajo con una larga y dos cortas… y la guitarra diabla.",
     "voz": "voz/s3/s3_n01.mp3"
    },
    {
     "id": "s3_n02",
     "quien": "NARR",
     "texto": "Y ahora… ¡nos vamos a Brasil!",
     "voz": "voz/s3/s3_n02.mp3"
    }
   ]
  },
  {
   "id": "s3_s0",
   "nombre": "Viaje · a Río de Janeiro",
   "img": "img/s3/mapa_caribe_rio.webp",
   "desc": "La carta del Caribe y Sudamérica: el avión baja de la República Dominicana a Río de Janeiro, por encima del Amazonas y la costa de Brasil.",
   "amb": [
    {
     "src": "sfx/s1/avion_cabina.mp3",
     "vol": 0.28
    }
   ],
   "mapa": {
    "desde": "República Dominicana",
    "hasta": "Brasil · Río de Janeiro",
    "sub": "Brasil, Río de Janeiro: aquí estalla la samba",
    "dur": 9,
    "vehiculo": "el avión",
    "ruta": [
     [
      0.275,
      0.165
     ],
     [
      0.3164,
      0.2425
     ],
     [
      0.3554,
      0.3223
     ],
     [
      0.3922,
      0.4046
     ],
     [
      0.4267,
      0.4892
     ],
     [
      0.4589,
      0.5763
     ],
     [
      0.4888,
      0.6658
     ],
     [
      0.5164,
      0.7577
     ],
     [
      0.5417,
      0.852
     ]
    ],
    "encuadre": [
     1,
     0.5,
     0.5
    ],
    "icono": "img/s1/avion_cenital.webp",
    "cenital": true,
    "anchoIcono": 5.4,
    "proporcionIcono": 0.9,
    "zoom": false,
    "sfx": [
     {
      "src": "sfx/s1/avion_pasa.mp3",
      "vol": 0.55,
      "t": 0
     }
    ],
    "etiq": {
     "hasta": [
      2,
      -13
     ]
    },
    "musA": {
     "src": "mus/s3_samba_fondo.mp3",
     "vol": 0.7
    }
   },
   "mus": {
    "src": "mus/s2_bachata_fondo.mp3",
    "vol": 0.6
   }
  },
  {
   "id": "s3_s1",
   "nombre": "Río de Janeiro",
   "img": "img/s3/s_rio.webp",
   "desc": "Río desde el mar: la playa, los morros verdes y el Cristo del Corcovado.",
   "amb": [
    {
     "src": "sfx/s1/playa_gaviotas.mp3",
     "vol": 0.2
    }
   ],
   "lineas": [
    {
     "id": "s3_n03",
     "quien": "NARR",
     "texto": "¡Brasil! El país más grande de Sudamérica, donde se habla portugués. Y en Río de Janeiro, entre playas y morros, estalla cada año la fiesta más famosa del mundo: el carnaval.",
     "voz": "voz/s3/s3_n03.mp3"
    }
   ],
   "mus": {
    "src": "mus/s3_samba_fondo.mp3",
    "vol": 0.42,
    "bucle": true
   }
  },
  {
   "id": "s3_s2",
   "nombre": "De Bahía a los morros",
   "img": "img/s3/s_origen.webp",
   "desc": "Una roda de samba antigua: descendientes de africanos tocando y cantando en un patio, de noche.",
   "amb": [
    {
     "src": "sfx/s1/grillos_noche.mp3",
     "vol": 0.12
    }
   ],
   "lineas": [
    {
     "id": "s3_n04",
     "quien": "NARR",
     "texto": "La samba bajó de Bahía a los cerros de Río con los descendientes de africanos de Angola y el Congo… y hoy la tocan escuelas de samba con cientos de tambores.",
     "voz": "voz/s3/s3_n04.mp3"
    }
   ],
   "mus": {
    "src": "mus/s3_samba_fondo.mp3",
    "vol": 0.36,
    "bucle": true
   }
  },
  {
   "id": "s3_s3",
   "nombre": "Ritinha nos recibe",
   "img": "img/s3/s_calle.webp",
   "desc": "La calle del morro en cuesta, con banderines (sin Ritinha: ella va en PNG).",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.15
    }
   ],
   "personajes": [
    "RITINHA"
   ],
   "lineas": [
    {
     "id": "s3_s01",
     "quien": "RITINHA",
     "texto": "¡Oi, gente! ¿Tudo bem? ¡Soy Ritinha! Bienvenidos a Río… ¡y al carnaval!",
     "voz": "voz/s3/s3_s01.mp3"
    },
    {
     "id": "s3_s02",
     "quien": "RITINHA",
     "texto": "¿Saben qué? Me han contado que en A Coruña, en carnaval, también salen batucadas por la calle… ¡Pues eso es samba, gente! Una batucada es una escuela de samba en pequeñito.",
     "voz": "voz/s3/s3_s02.mp3",
     "var": "RECURSO_ESCOLA",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_ESCOLA": "img/s3/s_escola.webp"
   },
   "mus": {
    "src": "mus/s3_samba_fondo.mp3",
    "vol": 0.36,
    "bucle": true
   }
  },
  {
   "id": "s3_s4",
   "nombre": "Reconocerla · la locomotora",
   "img": "img/s3/s_morro.webp",
   "desc": "La calle del morro con los instrumentos de la batería colocados.",
   "amb": [],
   "personajes": [
    "RITINHA"
   ],
   "lineas": [
    {
     "id": "s3_s03",
     "quien": "RITINHA",
     "texto": "Primera pista: suena a carnaval en la calle. ¡Una montaña de percusión! Y todo junto… ¿no les suena a una locomotora? ¡Tucuchaca tucuchaca, tucuchaca tucuchaca!",
     "voz": "voz/s3/s3_s03.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "batucada",
    "nom": "La batucada entera",
    "img": "img/s3/inst_s_surdo_grave.webp",
    "loop": "loops/s3/samba_batucada.mp3",
    "color": "#87A15E",
    "bpm": 120,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "imgs": [
     "img/s3/inst_s_caixa.webp",
     "img/s3/inst_s_agogo.webp"
    ],
    "recursos": [
     "loops/s3/samba_batucada.mp3",
     "img/s3/inst_s_surdo_grave.webp",
     "img/s3/inst_s_caixa.webp",
     "img/s3/inst_s_agogo.webp"
    ],
    "nivK": 0.6
   },
   "mus": {
    "src": "mus/s3_samba_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_s5",
   "nombre": "Reconocerla · los surdos",
   "img": "img/s3/s_morro.webp",
   "desc": "La calle; los surdos.",
   "amb": [],
   "personajes": [
    "RITINHA"
   ],
   "lineas": [
    {
     "id": "s3_s04",
     "quien": "RITINHA",
     "texto": "El corazón son los surdos: dos tambores grandes que hablan entre ellos.",
     "voz": "voz/s3/s3_s04.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "surdos",
    "nom": "Los surdos (grave y agudo)",
    "img": "img/s3/inst_s_surdo_grave.webp",
    "loop": "loops/s3/samba_surdos.mp3",
    "color": "#5E4B3C",
    "bpm": 120,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "imgs": [
     "img/s3/inst_s_surdo_agudo.webp"
    ],
    "recursos": [
     "loops/s3/samba_surdos.mp3",
     "img/s3/inst_s_surdo_grave.webp",
     "img/s3/inst_s_surdo_agudo.webp"
    ],
    "nivK": 0.6
   },
   "mus": {
    "src": "mus/s3_samba_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_s6",
   "nombre": "Reconocerla · el apito",
   "img": "img/s3/s_morro.webp",
   "desc": "La calle; el apito.",
   "amb": [],
   "personajes": [
    "RITINHA"
   ],
   "lineas": [
    {
     "id": "s3_s05",
     "quien": "RITINHA",
     "texto": "Y el apito, el silbato, es el que manda: avisa de las entradas y de los cortes saltando entre dos notas, a distancia de cuarta o de quinta: ¡ti-ti-tu, ti-ti-tu!",
     "voz": "voz/s3/s3_s05.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "apito",
    "nom": "Apito (silbato)",
    "img": "img/s3/inst_s_apito.webp",
    "loop": "loops/s3/samba_apito.mp3",
    "color": "#D9B44A",
    "bpm": 120,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s3/samba_apito.mp3",
     "img/s3/inst_s_apito.webp"
    ]
   },
   "mus": {
    "src": "mus/s3_samba_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_s6b",
   "nombre": "Reconocerla · el agogô",
   "img": "img/s3/s_morro.webp",
   "desc": "La calle; el agogô, dos campanas de metal.",
   "amb": [],
   "personajes": [
    "RITINHA"
   ],
   "lineas": [
    {
     "id": "s3_s05b",
     "quien": "RITINHA",
     "texto": "Y este otro, que se le parece, es el agogô: dos campanas de metal que también saltan entre dos notas.",
     "voz": "voz/s3/s3_s05b.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "agogo",
    "nom": "Agogô",
    "img": "img/s3/inst_s_agogo.webp",
    "loop": "loops/s3/samba_agogo.mp3",
    "color": "#C9603F",
    "bpm": 120,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "patron": "..X.x..X.Xx.X...|x...x..X.xx.X...|x.X.x..X.xx.x...|x.X.x..X.xX.X...",
    "recursos": [
     "loops/s3/samba_agogo.mp3",
     "img/s3/inst_s_agogo.webp"
    ]
   },
   "mus": {
    "src": "mus/s3_samba_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_s7",
   "nombre": "Reconocerla · todo sincopado",
   "img": "img/s3/s_morro.webp",
   "desc": "La calle; tamborim, caixa y pandeiro.",
   "amb": [],
   "personajes": [
    "RITINHA"
   ],
   "lineas": [
    {
     "id": "s3_s06",
     "quien": "RITINHA",
     "texto": "Y encima, todo sincopado: el tamborim, la caixa y el pandeiro rellenan cada hueco… ¡nada cuadriculado! Eso es lo que suena tan brasileño.",
     "voz": "voz/s3/s3_s06.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "sincopa",
    "nom": "Tamborim + caixa + pandeiro",
    "img": "img/s3/inst_s_tamborim.webp",
    "loop": "loops/s3/samba_sincopa.mp3",
    "color": "#1F9AA0",
    "bpm": 120,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "imgs": [
     "img/s3/inst_s_caixa.webp",
     "img/s3/inst_s_pandeiro.webp"
    ],
    "recursos": [
     "loops/s3/samba_sincopa.mp3",
     "img/s3/inst_s_tamborim.webp",
     "img/s3/inst_s_caixa.webp",
     "img/s3/inst_s_pandeiro.webp"
    ]
   },
   "mus": {
    "src": "mus/s3_samba_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_s8",
   "nombre": "Mezclador de batucada",
   "img": "img/s3/s_morro.webp",
   "desc": "La calle con los instrumentos.",
   "amb": [],
   "personajes": [
    "RITINHA"
   ],
   "lineas": [
    {
     "id": "s3_s07",
     "quien": "RITINHA",
     "texto": "¡Ahora tú! Arma tu batucada: enciende y apaga los tambores.",
     "voz": "voz/s3/s3_s07.mp3"
    }
   ],
   "inter": {
    "tipo": "mezclador",
    "tit": "Arma tu batucada",
    "bpm": 120,
    "compases": 4,
    "pistas": [
     {
      "id": "surdo_grave",
      "nom": "Surdo grave",
      "img": "img/s3/inst_s_surdo_grave.webp",
      "loop": "loops/s3/samba_surdo_grave.mp3",
      "color": "#5E4B3C",
      "patron": "....X.x.X...xx.x|x...X.x.X...xx.x|x...X.x.X...x...|x...X.x.X...Xx.x",
      "nivK": 0.6,
      "celda": [
       1,
       1,
       2,
       3
      ]
     },
     {
      "id": "surdo_agudo",
      "nom": "Surdo agudo",
      "img": "img/s3/inst_s_surdo_agudo.webp",
      "loop": "loops/s3/samba_surdo_agudo.mp3",
      "color": "#8A6A50",
      "patron": "x...x...X...x.x.|x...x...Xxxxxxxx|x...x...X...x.x.|x...x...X.xxxxxx",
      "nivK": 0.6,
      "celda": [
       3,
       1,
       2,
       2
      ]
     },
     {
      "id": "caixa",
      "nom": "Caixa",
      "img": "img/s3/inst_s_caixa.webp",
      "loop": "loops/s3/samba_caixa.mp3",
      "color": "#5B6FA8",
      "celda": [
       3,
       3,
       2,
       1
      ]
     },
     {
      "id": "tamborim",
      "nom": "Tamborim",
      "img": "img/s3/inst_s_tamborim.webp",
      "loop": "loops/s3/samba_tamborim.mp3",
      "color": "#1F9AA0",
      "patron": "..X.xX.x...xX.x.|x.X.xX.x.x.xX.x.|..x.xX.x.x.xX.X.|x.x.xX.x.x.xX.X.",
      "celda": [
       7,
       1,
       2,
       2
      ]
     },
     {
      "id": "pandeiro",
      "nom": "Pandeiro",
      "img": "img/s3/inst_s_pandeiro.webp",
      "loop": "loops/s3/samba_pandeiro.mp3",
      "color": "#B04A6A",
      "celda": [
       5,
       1,
       2,
       2
      ]
     },
     {
      "id": "agogo",
      "nom": "Agogô",
      "img": "img/s3/inst_s_agogo.webp",
      "loop": "loops/s3/samba_agogo.mp3",
      "color": "#C9603F",
      "patron": "..X.x..X.Xx.X...|x...x..X.xx.X...|x.X.x..X.xx.x...|x.X.x..X.xX.X...",
      "celda": [
       5,
       3,
       2,
       1
      ]
     },
     {
      "id": "apito",
      "nom": "Apito (silbato)",
      "img": "img/s3/inst_s_apito.webp",
      "loop": "loops/s3/samba_apito.mp3",
      "color": "#D9B44A",
      "celda": [
       7,
       3,
       2,
       1
      ]
     }
    ],
    "inicial": [],
    "recursos": [
     "loops/s3/samba_surdo_grave.mp3",
     "loops/s3/samba_surdo_agudo.mp3",
     "loops/s3/samba_caixa.mp3",
     "loops/s3/samba_tamborim.mp3",
     "loops/s3/samba_pandeiro.mp3",
     "loops/s3/samba_agogo.mp3",
     "loops/s3/samba_apito.mp3"
    ],
    "inventario": [
     8,
     3
    ]
   }
  },
  {
   "id": "s3_s9",
   "nombre": "Desfile de Ritinha",
   "img": "img/s3/s_morro.webp",
   "desc": "Los ritmistas llegan a la calle (sin instrumentos: ya están colocados) y la canción libre.",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "RITINHA"
   ],
   "lineas": [
    {
     "id": "s3_s08",
     "quien": "RITINHA",
     "texto": "¡Que empiece el desfile!",
     "voz": "voz/s3/s3_s08.mp3",
     "var": "RECURSO_LLEGAN",
     "fijo": true
    }
   ],
   "inter": {
    "nota": "Suno «Afro Latin · Samba · Ritinha v2», versión B, montada con herramientas/concierto_samba.py (apito en «ti-ti-tú»).",
    "cancion": "mus/s3_samba_concierto.mp3",
    "bpm": 132.15,
    "t0rejilla": 0,
    "planos": [
     {
      "t": 0,
      "img": "img/s3/vc_s_16_hoja_banda.webp",
      "txt": "hoja banda"
     },
     {
      "t": 1.736,
      "img": "img/s3/vc_s_36_ritinha_canta_pp.webp",
      "txt": "ritinha canta pp"
     },
     {
      "t": 5.368,
      "img": "img/s3/vc_s_19_montana_tambores.webp",
      "txt": "montana tambores"
     },
     {
      "t": 8.547,
      "img": "img/s3/vc_s_20_surdos_cc.webp",
      "txt": "surdos cc"
     },
     {
      "t": 12.179,
      "img": "img/s3/vc_s_37_ritinha_canta_pp.webp",
      "txt": "ritinha canta pp"
     },
     {
      "t": 16.719,
      "img": "img/s3/vc_s_22_samba_samba_brazos.webp",
      "txt": "samba samba brazos"
     },
     {
      "t": 20.351,
      "img": "img/s3/vc_s_23_surdo_ca_cc.webp",
      "txt": "surdo ca cc"
     },
     {
      "t": 23.984,
      "img": "img/s3/vc_s_24_apito_mestre_cc.webp",
      "txt": "apito mestre cc"
     },
     {
      "t": 27.162,
      "img": "img/s3/vc_s_18_oye_la_calle_canta.webp",
      "txt": "oye la calle canta"
     },
     {
      "t": 30.34,
      "img": "img/s3/vc_s_26_tamborim_caixa_sincopados_cc.webp",
      "txt": "tamborim caixa sincopados cc"
     },
     {
      "t": 34.88,
      "img": "img/s3/vc_s_27_pandeiro_cc.webp",
      "txt": "pandeiro cc"
     },
     {
      "t": 38.058,
      "img": "img/s3/vc_s_38_ritinha_canta_pp.webp",
      "txt": "ritinha canta pp"
     },
     {
      "t": 41.691,
      "img": "img/s3/vc_s_28_agogo_cc.webp",
      "txt": "agogo cc"
     },
     {
      "t": 45.323,
      "img": "img/s3/vc_s_29_de_rio_ciudad.webp",
      "txt": "de rio ciudad"
     },
     {
      "t": 49.409,
      "img": "img/s3/vc_s_23_surdo_ca_cc.webp",
      "txt": "surdo ca cc"
     },
     {
      "t": 53.041,
      "img": "img/s3/vc_s_24_apito_mestre_cc.webp",
      "txt": "apito mestre cc"
     },
     {
      "t": 55.766,
      "img": "img/s3/vc_s_25_gente_bailando.webp",
      "txt": "gente bailando"
     },
     {
      "t": 60.76,
      "img": "img/s3/vc_s_32_isso_final.webp",
      "txt": "isso final"
     },
     {
      "t": 64.392,
      "img": "img/s3/vc_s_30_desfile_escola.webp",
      "txt": "desfile escola"
     },
     {
      "t": 68.024,
      "img": "img/s3/vc_s_31_cientos_tambores_confeti.webp",
      "txt": "cientos tambores confeti"
     }
    ],
    "letra": [
     {
      "t": 1.81,
      "txt": "Oye la calle, que llega el carnaval,",
      "t1": 4.91,
      "w": [
       [
        1.84,
        "Oye"
       ],
       [
        2.32,
        "la"
       ],
       [
        2.55,
        "calle,"
       ],
       [
        2.96,
        "que"
       ],
       [
        3.34,
        "llega"
       ],
       [
        3.82,
        "el"
       ],
       [
        4.05,
        "carnaval,"
       ]
      ]
     },
     {
      "t": 4.93,
      "txt": "una montaña de tambores, ¡que no para jamás!",
      "t1": 8.57,
      "w": [
       [
        4.96,
        "una"
       ],
       [
        5.16,
        "montaña"
       ],
       [
        5.77,
        "de"
       ],
       [
        5.97,
        "tambores,"
       ],
       [
        6.58,
        "¡que"
       ],
       [
        6.79,
        "no"
       ],
       [
        7.26,
        "para"
       ],
       [
        7.45,
        "jamás!"
       ]
      ]
     },
     {
      "t": 8.59,
      "txt": "Surdo, caixa y tamborim: ¡pura percusión!",
      "t1": 12.21,
      "w": [
       [
        8.62,
        "Surdo,"
       ],
       [
        9.07,
        "caixa"
       ],
       [
        9.3,
        "y"
       ],
       [
        9.54,
        "tamborim:"
       ],
       [
        10.3,
        "¡pura"
       ],
       [
        11.31,
        "percusión!"
       ]
      ]
     },
     {
      "t": 12.23,
      "txt": "¡como una locomotora, a todo vapor!",
      "t1": 16.03,
      "w": [
       [
        12.26,
        "¡como"
       ],
       [
        12.5,
        "una"
       ],
       [
        12.91,
        "locomotora,"
       ],
       [
        13.98,
        "a"
       ],
       [
        14.75,
        "todo"
       ],
       [
        15.02,
        "vapor!"
       ]
      ]
     },
     {
      "t": 16.76,
      "txt": "¡Samba, samba! El surdo dice ¡cá!",
      "t1": 19.09,
      "w": [
       [
        16.79,
        "¡Samba,"
       ],
       [
        17.25,
        "samba!"
       ],
       [
        17.58,
        "El"
       ],
       [
        18.18,
        "surdo"
       ],
       [
        18.61,
        "dice"
       ],
       [
        18.8,
        "¡cá!"
       ]
      ]
     },
     {
      "t": 19.11,
      "txt": "El agudo pica, y el grave va a contestar.",
      "t1": 23.54,
      "w": [
       [
        19.14,
        "El"
       ],
       [
        20.2,
        "agudo"
       ],
       [
        20.44,
        "pica,"
       ],
       [
        21.0,
        "y"
       ],
       [
        21.28,
        "el"
       ],
       [
        21.44,
        "grave"
       ],
       [
        21.75,
        "va"
       ],
       [
        22.22,
        "a"
       ],
       [
        22.28,
        "contestar."
       ]
      ]
     },
     {
      "t": 23.56,
      "txt": "El apito silba: ti-ti-tu, ti-ti-tu,",
      "t1": 26.37,
      "w": [
       [
        23.59,
        "El"
       ],
       [
        23.82,
        "apito"
       ],
       [
        24.24,
        "silba:"
       ],
       [
        24.96,
        "ti-ti-tu,"
       ],
       [
        25.84,
        "ti-ti-tu,"
       ]
      ]
     },
     {
      "t": 27.2,
      "txt": "¡samba en la calle, y la bailas tú!",
      "t1": 30.19,
      "w": [
       [
        27.23,
        "¡samba"
       ],
       [
        27.56,
        "en"
       ],
       [
        27.84,
        "la"
       ],
       [
        28.11,
        "calle,"
       ],
       [
        28.52,
        "y"
       ],
       [
        29.25,
        "la"
       ],
       [
        29.4,
        "bailas"
       ],
       [
        29.8,
        "tú!"
       ]
      ]
     },
     {
      "t": 30.21,
      "txt": "Tamborim y caixa, todo sincopado,",
      "t1": 33.4,
      "w": [
       [
        30.24,
        "Tamborim"
       ],
       [
        31.47,
        "y"
       ],
       [
        31.65,
        "caixa,"
       ],
       [
        32.11,
        "todo"
       ],
       [
        32.67,
        "sincopado,"
       ]
      ]
     },
     {
      "t": 33.95,
      "txt": "el pandeiro empuja, ¡nada cuadriculado!",
      "t1": 37.45,
      "w": [
       [
        33.98,
        "el"
       ],
       [
        34.73,
        "pandeiro"
       ],
       [
        35.14,
        "empuja,"
       ],
       [
        35.72,
        "¡nada"
       ],
       [
        36.32,
        "cuadriculado!"
       ]
      ]
     },
     {
      "t": 37.47,
      "txt": "Dos campanas de agogô saltan una cuarta,",
      "t1": 41.05,
      "w": [
       [
        37.5,
        "Dos"
       ],
       [
        37.84,
        "campanas"
       ],
       [
        38.44,
        "de"
       ],
       [
        38.56,
        "agogô"
       ],
       [
        39.53,
        "saltan"
       ],
       [
        40.36,
        "una"
       ],
       [
        40.53,
        "cuarta,"
       ]
      ]
     },
     {
      "t": 41.07,
      "txt": "¡de Río de Janeiro, la samba que te arranca!",
      "t1": 44.74,
      "w": [
       [
        41.1,
        "¡de"
       ],
       [
        41.68,
        "Río"
       ],
       [
        41.96,
        "de"
       ],
       [
        42.29,
        "Janeiro,"
       ],
       [
        43.13,
        "la"
       ],
       [
        43.39,
        "samba"
       ],
       [
        43.76,
        "que"
       ],
       [
        44.16,
        "te"
       ],
       [
        44.34,
        "arranca!"
       ]
      ]
     },
     {
      "t": 44.76,
      "txt": "¡Samba, samba! El surdo dice ¡cá!",
      "t1": 48.11,
      "w": [
       [
        44.79,
        "¡Samba,"
       ],
       [
        46.29,
        "samba!"
       ],
       [
        46.6,
        "El"
       ],
       [
        47.05,
        "surdo"
       ],
       [
        47.41,
        "dice"
       ],
       [
        47.84,
        "¡cá!"
       ]
      ]
     },
     {
      "t": 48.13,
      "txt": "El agudo pica, y el grave va a contestar.",
      "t1": 52.37,
      "w": [
       [
        48.16,
        "El"
       ],
       [
        49.22,
        "agudo"
       ],
       [
        49.6,
        "pica,"
       ],
       [
        50.03,
        "y"
       ],
       [
        50.3,
        "el"
       ],
       [
        50.48,
        "grave"
       ],
       [
        50.84,
        "va"
       ],
       [
        51.24,
        "a"
       ],
       [
        51.3,
        "contestar."
       ]
      ]
     },
     {
      "t": 52.6,
      "txt": "El apito silba: ti-ti-tu, ti-ti-tu,",
      "t1": 55.41,
      "w": [
       [
        52.63,
        "El"
       ],
       [
        52.87,
        "apito"
       ],
       [
        53.3,
        "silba:"
       ],
       [
        54.0,
        "ti-ti-tu,"
       ],
       [
        54.87,
        "ti-ti-tu,"
       ]
      ]
     },
     {
      "t": 55.66,
      "txt": "¡samba en la calle, y la bailas tú!",
      "t1": 59.61,
      "w": [
       [
        55.69,
        "¡samba"
       ],
       [
        56.59,
        "en"
       ],
       [
        56.86,
        "la"
       ],
       [
        57.16,
        "calle,"
       ],
       [
        57.54,
        "y"
       ],
       [
        58.26,
        "la"
       ],
       [
        58.42,
        "bailas"
       ],
       [
        58.98,
        "tú!"
       ]
      ]
     },
     {
      "t": 60.79,
      "txt": "¡Isso! ¡Eso es samba, gente!",
      "t1": 64.03,
      "w": [
       [
        60.82,
        "¡Isso!"
       ],
       [
        61.92,
        "¡Eso"
       ],
       [
        62.25,
        "es"
       ],
       [
        62.48,
        "samba,"
       ],
       [
        63.16,
        "gente!"
       ]
      ]
     },
     {
      "t": 64.08,
      "txt": ""
     }
    ],
    "fichas": [],
    "botones": {
     "desde": 55.66,
     "seguir": "Siguiente parada",
     "ejemplos": [
      {
       "src": "videos/samba-1.mp4",
       "tit": "Samba · ejemplo 1"
      },
      {
       "src": "videos/samba-2.mp4",
       "tit": "Samba · ejemplo 2"
      }
     ]
    },
    "tipo": "concierto",
    "recursos": [
     "mus/s3_samba_concierto.mp3",
     "videos/samba-1.mp4",
     "videos/samba-2.mp4"
    ],
    "fundidoPlanos": 0.18,
    "kb": false
   },
   "var": {
    "RECURSO_LLEGAN": "img/s3/s_musicos_llegan.webp"
   }
  },
  {
   "id": "s3_b0",
   "nombre": "En tren a Ipanema",
   "img": "img/s3/b_tren.webp",
   "desc": "Dentro del tren de la costa de Río, con el mar de Ipanema por la ventana.",
   "amb": [
    {
     "src": "sfx/s3/tren_interior.mp3",
     "vol": 0.25
    }
   ],
   "personajes": [
    "RITINHA"
   ],
   "lineas": [
    {
     "id": "s3_t01",
     "quien": "RITINHA",
     "texto": "¡Todos al tren, gente! Nos vamos a Ipanema, a conocer a Seu Tom. ¿Se acuerdan de la locomotora de la samba? ¡Tucuchaca tucuchaca, tucuchaca tucuchaca! Pues ahora toca bajar revoluciones… tucuchaca… tucuchaca… que Seu Tom es de lo más tranquilo.",
     "voz": "voz/s3/s3_t01.mp3"
    }
   ]
  },
  {
   "id": "s3_b1",
   "nombre": "Ipanema",
   "img": "img/s3/b_ipanema.webp",
   "desc": "El paseo de Ipanema al atardecer, con su mosaico de olas y el Dois Irmãos. EASTER EGG: Schoenberg en chanclas, con su periódico.",
   "amb": [
    {
     "src": "sfx/s1/playa_gaviotas.mp3",
     "vol": 0.15
    }
   ],
   "lineas": [
    {
     "id": "s3_n05",
     "quien": "NARR",
     "texto": "¡Ipanema! Aquí, a finales de los años cincuenta, unos músicos jóvenes como João Gilberto se inventaron una manera nueva de tocar la samba: suave, en voz bajita. La llamaron bossa nova: «la nueva onda». Y de aquí salió «La chica de Ipanema», una de las canciones más grabadas de la historia.",
     "voz": "voz/s3/s3_n05.mp3"
    }
   ],
   "mus": {
    "src": "mus/s3_bossa_fondo.mp3",
    "vol": 0.42,
    "bucle": true
   }
  },
  {
   "id": "s3_b2",
   "nombre": "Seu Tom nos recibe",
   "img": "img/s3/b_callejon.webp",
   "desc": "El callejón con plantas que lleva a la terraza, al atardecer (sin Seu Tom: él va en PNG).",
   "amb": [
    {
     "src": "sfx/s3/bar_ipanema.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_b01",
     "quien": "SEU TOM",
     "texto": "Olá, olá… bienvenidos. Siéntense, siéntense, que aquí no hay prisa. Yo soy Seu Tom.",
     "voz": "voz/s3/s3_b01.mp3"
    },
    {
     "id": "s3_b02",
     "quien": "SEU TOM",
     "texto": "Ritinha me ha dicho que vienen del carnaval… Pues la bossa nova es eso mismo, samba… pero en casa y en voz bajita. Como si la samba se pusiera las zapatillas.",
     "voz": "voz/s3/s3_b02.mp3",
     "var": "RECURSO_ORIGEN",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_ORIGEN": "img/s3/b_origen.webp"
   },
   "mus": {
    "src": "mus/s3_bossa_fondo.mp3",
    "vol": 0.36,
    "bucle": true
   }
  },
  {
   "id": "s3_b3",
   "nombre": "Reconocerla · música de ascensor",
   "img": "img/s3/b_terraza.webp",
   "desc": "La terraza frente al mar con los instrumentos; el «ascensor» es solo el chiste de Seu Tom.",
   "amb": [],
   "personajes": [
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_b03",
     "quien": "SEU TOM",
     "texto": "Primera pista: es suave, tranquila… Ritinha me ha contado que allá en A Coruña dicen que esto es música de ascensor… y la verdad es que un poquito sí: de sala de espera del dentista. Es que los brasileños sabemos estar de fiesta… y también sabemos estar de chill.",
     "voz": "voz/s3/s3_b03.mp3"
    }
   ],
   "mus": {
    "src": "mus/s3_bossa_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_b4",
   "nombre": "Reconocerla · la guitarra",
   "img": "img/s3/b_terraza.webp",
   "desc": "La terraza; la guitarra.",
   "amb": [],
   "personajes": [
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_b04",
     "quien": "SEU TOM",
     "texto": "El corazón es la guitarra, que hace ella sola lo que en la samba hacía toda la batucada: el pulgar es el surdo, con el bajo tranquilo en el uno y en el tres… y los otros dedos son el tamborim, con acordes que caen justo donde no te los esperas.",
     "voz": "voz/s3/s3_b04.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "guitarra",
    "nom": "Guitarra",
    "img": "img/s3/inst_b_guitarra.webp",
    "loop": "loops/s3/bossa_guitarra.mp3",
    "color": "#C27C3A",
    "bpm": 140,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s3/bossa_guitarra.mp3",
     "img/s3/inst_b_guitarra.webp"
    ]
   },
   "mus": {
    "src": "mus/s3_bossa_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_b4b",
   "nombre": "Reconocerla · el contrabajo",
   "img": "img/s3/b_terraza.webp",
   "desc": "La terraza; el contrabajo, y luego con la guitarra.",
   "amb": [],
   "personajes": [
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_b04b",
     "quien": "SEU TOM",
     "texto": "La guitarra se basta sola para toda la rítmica… pero tiene dos ayudantes. El contrabajo apoya al pulgar: lleva un ritmo constante, y casi todas sus notas caen justo con el pulgar de la guitarra.",
     "voz": "voz/s3/s3_b04b.mp3"
    }
   ],
   "inter": [
    {
     "tipo": "instrumento",
     "id": "bajo",
     "nom": "Contrabajo",
     "img": "img/s3/inst_b_contrabajo.webp",
     "loop": "loops/s3/bossa_bajo.mp3",
     "color": "#6B4A3A",
     "bpm": 140,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s3/bossa_bajo.mp3",
      "img/s3/inst_b_contrabajo.webp"
     ]
    },
    {
     "tipo": "instrumento",
     "id": "guitarra",
     "nom": "Guitarra + contrabajo",
     "img": "img/s3/inst_b_guitarra.webp",
     "loop": "loops/s3/bossa_guitarra_bajo.mp3",
     "color": "#C27C3A",
     "bpm": 140,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s3/bossa_guitarra_bajo.mp3",
      "img/s3/inst_b_guitarra.webp",
      "img/s3/inst_b_contrabajo.webp"
     ],
     "img2": "img/s3/inst_b_contrabajo.webp"
    }
   ],
   "mus": {
    "src": "mus/s3_bossa_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_b5",
   "nombre": "Reconocerla · el piano",
   "img": "img/s3/b_terraza.webp",
   "desc": "La terraza; el piano, y luego con la guitarra.",
   "amb": [],
   "personajes": [
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_b05a",
     "quien": "SEU TOM",
     "texto": "El piano, en cambio, apoya a los otros dedos: sus acordes sincopados suelen caer justo donde caen los de la guitarra.",
     "voz": "voz/s3/s3_b05a.mp3"
    },
    {
     "id": "s3_b05",
     "quien": "SEU TOM",
     "texto": "Y esos acordes no son de los fáciles: llevan séptimas y novenas, como en el jazz. Por eso suena tan dulce y tan elegante.",
     "voz": "voz/s3/s3_b05.mp3"
    }
   ],
   "inter": [
    {
     "tipo": "instrumento",
     "id": "piano",
     "nom": "Piano (acordes con 7.ª y 9.ª)",
     "img": "img/s3/inst_b_piano.webp",
     "loop": "loops/s3/bossa_piano.mp3",
     "color": "#3F5E8C",
     "bpm": 140,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s3/bossa_piano.mp3",
      "img/s3/inst_b_piano.webp"
     ]
    },
    {
     "tipo": "instrumento",
     "id": "guitarra",
     "nom": "Guitarra + piano",
     "img": "img/s3/inst_b_guitarra.webp",
     "loop": "loops/s3/bossa_guitarra_piano.mp3",
     "color": "#C27C3A",
     "bpm": 140,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s3/bossa_guitarra_piano.mp3",
      "img/s3/inst_b_guitarra.webp",
      "img/s3/inst_b_piano.webp"
     ],
     "img2": "img/s3/inst_b_piano.webp"
    }
   ],
   "mus": {
    "src": "mus/s3_bossa_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_b6",
   "nombre": "Reconocerla · percusión de puntillas",
   "img": "img/s3/b_terraza.webp",
   "desc": "La terraza; el golpe en el aro.",
   "amb": [],
   "personajes": [
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_b06",
     "quien": "SEU TOM",
     "texto": "¿Y la percusión? Hay una batería completa, pero va de puntillas, con unas escobillas que acarician la caja… Lo más característico es el aro: la baqueta, tumbada sobre la caja, da un golpecito en el borde: toc… toc… Es como un contrapunto rítmico.",
     "voz": "voz/s3/s3_b06.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "aro",
    "nom": "Batería: el aro",
    "img": "img/s3/inst_b_aro.webp",
    "loop": "loops/s3/bossa_aro.mp3",
    "color": "#8C8C7A",
    "bpm": 140,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s3/bossa_aro.mp3",
     "img/s3/inst_b_aro.webp"
    ]
   },
   "mus": {
    "src": "mus/s3_bossa_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_b7",
   "nombre": "Reconocerla · la voz",
   "img": "img/s3/b_terraza.webp",
   "desc": "La terraza.",
   "amb": [],
   "personajes": [
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_b07",
     "quien": "SEU TOM",
     "texto": "Y la voz… casi susurrando, como si te contara un secreto.",
     "voz": "voz/s3/s3_b07.mp3"
    }
   ],
   "mus": {
    "src": "mus/s3_bossa_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s3_b8",
   "nombre": "Mezclador de bossa nova",
   "img": "img/s3/b_terraza.webp",
   "desc": "La terraza.",
   "amb": [],
   "personajes": [
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_b08",
     "quien": "SEU TOM",
     "texto": "Ahora tú: arma tu bossa nova, sin prisa… guitarra, contrabajo, el aro… y el piano.",
     "voz": "voz/s3/s3_b08.mp3"
    }
   ],
   "inter": {
    "tipo": "mezclador",
    "tit": "Arma tu bossa nova",
    "bpm": 140,
    "compases": 8,
    "pistas": [
     {
      "id": "guitarra",
      "nom": "Guitarra",
      "img": "img/s3/inst_b_guitarra_h.webp",
      "loop": "loops/s3/bossa_guitarra.mp3",
      "color": "#C27C3A",
      "celda": [
       1,
       2,
       4,
       1
      ]
     },
     {
      "id": "bajo",
      "nom": "Contrabajo",
      "img": "img/s3/inst_b_contrabajo_h.webp",
      "loop": "loops/s3/bossa_bajo.mp3",
      "color": "#6B4A3A",
      "nivK": 0.6,
      "celda": [
       1,
       1,
       5,
       1
      ]
     },
     {
      "id": "aro",
      "nom": "Batería: el aro",
      "img": "img/s3/inst_b_aro.webp",
      "loop": "loops/s3/bossa_aro.mp3",
      "color": "#8C8C7A",
      "celda": [
       5,
       2,
       1,
       1
      ]
     },
     {
      "id": "piano",
      "nom": "Piano (acordes con 7.ª y 9.ª)",
      "img": "img/s3/inst_b_piano.webp",
      "loop": "loops/s3/bossa_piano.mp3",
      "color": "#3F5E8C",
      "celda": [
       6,
       1,
       3,
       2
      ]
     }
    ],
    "inicial": [],
    "recursos": [
     "loops/s3/bossa_guitarra.mp3",
     "loops/s3/bossa_bajo.mp3",
     "loops/s3/bossa_aro.mp3",
     "loops/s3/bossa_piano.mp3"
    ],
    "inventario": [
     8,
     2
    ]
   }
  },
  {
   "id": "s3_b9",
   "nombre": "Concierto de Seu Tom",
   "img": "img/s3/b_terraza.webp",
   "desc": "Los amigos llegan a la terraza (sin instrumentos: ya están montados) y la canción libre, al atardecer.",
   "amb": [
    {
     "src": "sfx/s3/bar_ipanema.mp3",
     "vol": 0.08
    }
   ],
   "personajes": [
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_b09",
     "quien": "SEU TOM",
     "texto": "Ven, disfruta de esta terraza que tengo frente al mar… y relajémonos tocando bossa.",
     "voz": "voz/s3/s3_b09.mp3",
     "var": "RECURSO_LLEGAN",
     "fijo": true
    }
   ],
   "inter": {
    "nota": "Suno «Afro Latin · Bossa · Seu Tom v1», versión A, montada con herramientas/concierto_bossa.py (de c.4 al final).",
    "cancion": "mus/s3_bossa_concierto.mp3",
    "bpm": 131.0,
    "t0rejilla": 0,
    "planos": [
     {
      "t": 0,
      "img": "img/s3/vc_b_16_hoja_banda.webp",
      "txt": "hoja banda"
     },
     {
      "t": 7.706,
      "img": "img/s3/vc_b_36_seutom_canta_pp.webp",
      "txt": "seutom canta pp"
     },
     {
      "t": 13.66,
      "img": "img/s3/vc_b_18_junto_al_mar_canta.webp",
      "txt": "junto al mar canta"
     },
     {
      "t": 16.409,
      "img": "img/s3/vc_b_19_brisa_terraza.webp",
      "txt": "brisa terraza"
     },
     {
      "t": 22.363,
      "img": "img/s3/vc_b_20_guitarra_pulgar_cc.webp",
      "txt": "guitarra pulgar cc"
     },
     {
      "t": 25.569,
      "img": "img/s3/vc_b_26_contrabajo_cc.webp",
      "txt": "contrabajo cc"
     },
     {
      "t": 30.149,
      "img": "img/s3/vc_b_21_acorde_tarde_cc.webp",
      "txt": "acorde tarde cc"
     },
     {
      "t": 37.935,
      "img": "img/s3/vc_b_22_bossa_nova_sonrie.webp",
      "txt": "bossa nova sonrie"
     },
     {
      "t": 42.057,
      "img": "img/s3/vc_b_27_piano_cc.webp",
      "txt": "piano cc"
     },
     {
      "t": 48.47,
      "img": "img/s3/vc_b_37_seutom_canta_pp.webp",
      "txt": "seutom canta pp"
     },
     {
      "t": 52.592,
      "img": "img/s3/vc_b_24_aro_toc_cc.webp",
      "txt": "aro toc cc"
     },
     {
      "t": 59.92,
      "img": "img/s3/vc_b_31_banda_completa.webp",
      "txt": "banda completa"
     },
     {
      "t": 67.706,
      "img": "img/s3/vc_b_25_cafe_ipanema.webp",
      "txt": "cafe ipanema"
     },
     {
      "t": 73.202,
      "img": "img/s3/vc_b_30_amigos_escuchan.webp",
      "txt": "amigos escuchan"
     },
     {
      "t": 76.867,
      "img": "img/s3/vc_b_19_brisa_terraza.webp",
      "txt": "brisa terraza"
     },
     {
      "t": 82.363,
      "img": "img/s3/vc_b_28_voz_secreto.webp",
      "txt": "voz secreto"
     },
     {
      "t": 89.691,
      "img": "img/s3/vc_b_29_nueva_onda_rio.webp",
      "txt": "nueva onda rio"
     },
     {
      "t": 93.355,
      "img": "img/s3/vc_b_38_seutom_canta_pp.webp",
      "txt": "seutom canta pp"
     },
     {
      "t": 96.561,
      "img": "img/s3/vc_b_17_seutom_micro.webp",
      "txt": "seutom micro"
     },
     {
      "t": 103.889,
      "img": "img/s3/vc_b_27_piano_cc.webp",
      "txt": "piano cc"
     },
     {
      "t": 107.096,
      "img": "img/s3/vc_b_35_pies_bossa.webp",
      "txt": "pies bossa"
     },
     {
      "t": 111.218,
      "img": "img/s3/vc_b_24_aro_toc_cc.webp",
      "txt": "aro toc cc"
     },
     {
      "t": 118.546,
      "img": "img/s3/vc_b_31_banda_completa.webp",
      "txt": "banda completa"
     },
     {
      "t": 126.332,
      "img": "img/s3/vc_b_32_que_beleza_final.webp",
      "txt": "que beleza final"
     },
     {
      "t": 130.912,
      "img": "img/s3/vc_b_30_amigos_escuchan.webp",
      "txt": "amigos escuchan"
     }
    ],
    "letra": [
     {
      "t": 7.74,
      "txt": "Junto al mar de Ipanema, sin ninguna prisa,",
      "t1": 13.07,
      "w": [
       [
        7.77,
        "Junto"
       ],
       [
        7.95,
        "al"
       ],
       [
        8.16,
        "mar"
       ],
       [
        8.36,
        "de"
       ],
       [
        8.65,
        "Ipanema,"
       ],
       [
        10.58,
        "sin"
       ],
       [
        11.4,
        "ninguna"
       ],
       [
        12.17,
        "prisa,"
       ]
      ]
     },
     {
      "t": 13.09,
      "txt": "la samba baja la voz y se viste de brisa.",
      "t1": 20.79,
      "w": [
       [
        13.12,
        "la"
       ],
       [
        14.94,
        "samba"
       ],
       [
        15.33,
        "baja"
       ],
       [
        15.82,
        "la"
       ],
       [
        16.02,
        "voz"
       ],
       [
        16.9,
        "y"
       ],
       [
        18.61,
        "se"
       ],
       [
        18.84,
        "viste"
       ],
       [
        19.4,
        "de"
       ],
       [
        19.84,
        "brisa."
       ]
      ]
     },
     {
      "t": 20.84,
      "txt": ""
     },
     {
      "t": 22.16,
      "txt": "La guitarra lo hace todo: el bajo en el uno y el tres,",
      "t1": 27.93,
      "w": [
       [
        22.19,
        "La"
       ],
       [
        22.31,
        "guitarra"
       ],
       [
        23.16,
        "lo"
       ],
       [
        23.51,
        "hace"
       ],
       [
        23.74,
        "todo:"
       ],
       [
        25.14,
        "el"
       ],
       [
        25.52,
        "bajo"
       ],
       [
        25.92,
        "en"
       ],
       [
        26.1,
        "el"
       ],
       [
        26.32,
        "uno"
       ],
       [
        26.6,
        "y"
       ],
       [
        26.86,
        "el"
       ],
       [
        27.08,
        "tres,"
       ]
      ]
     },
     {
      "t": 27.98,
      "txt": ""
     },
     {
      "t": 29.49,
      "txt": "y el acorde llega tarde, justo cuando no lo ves.",
      "t1": 35.37,
      "w": [
       [
        29.52,
        "y"
       ],
       [
        29.64,
        "el"
       ],
       [
        29.91,
        "acorde"
       ],
       [
        30.36,
        "llega"
       ],
       [
        30.86,
        "tarde,"
       ],
       [
        32.05,
        "justo"
       ],
       [
        32.71,
        "cuando"
       ],
       [
        33.2,
        "no"
       ],
       [
        33.78,
        "lo"
       ],
       [
        34.22,
        "ves."
       ]
      ]
     },
     {
      "t": 35.42,
      "txt": ""
     },
     {
      "t": 37.89,
      "txt": "Bossa nova, bossa nova, suave como el mar,",
      "t1": 42.13,
      "w": [
       [
        37.92,
        "Bossa"
       ],
       [
        38.22,
        "nova,"
       ],
       [
        39.01,
        "bossa"
       ],
       [
        39.18,
        "nova,"
       ],
       [
        39.8,
        "suave"
       ],
       [
        40.56,
        "como"
       ],
       [
        41.42,
        "el"
       ],
       [
        41.89,
        "mar,"
       ]
      ]
     },
     {
      "t": 42.15,
      "txt": "con séptimas y novenas que te invitan a soñar.",
      "t1": 50.17,
      "w": [
       [
        42.18,
        "con"
       ],
       [
        45.21,
        "séptimas"
       ],
       [
        45.88,
        "y"
       ],
       [
        46.22,
        "novenas"
       ],
       [
        47.14,
        "que"
       ],
       [
        47.29,
        "te"
       ],
       [
        47.44,
        "invitan"
       ],
       [
        48.04,
        "a"
       ],
       [
        48.5,
        "soñar."
       ]
      ]
     },
     {
      "t": 50.22,
      "txt": ""
     },
     {
      "t": 52.34,
      "txt": "Las escobillas susurran, y el aro dice toc…",
      "t1": 57.69,
      "w": [
       [
        52.37,
        "Las"
       ],
       [
        52.58,
        "escobillas"
       ],
       [
        53.43,
        "susurran,"
       ],
       [
        54.38,
        "y"
       ],
       [
        54.58,
        "el"
       ],
       [
        54.78,
        "aro"
       ],
       [
        55.36,
        "dice"
       ],
       [
        56.06,
        "toc…"
       ]
      ]
     },
     {
      "t": 57.74,
      "txt": ""
     },
     {
      "t": 59.9,
      "txt": "bossa nova, bossa nova, en voz baja, sin reloj.",
      "t1": 64.53,
      "w": [
       [
        59.93,
        "bossa"
       ],
       [
        60.2,
        "nova,"
       ],
       [
        60.96,
        "bossa"
       ],
       [
        61.14,
        "nova,"
       ],
       [
        61.68,
        "en"
       ],
       [
        62.13,
        "voz"
       ],
       [
        62.25,
        "baja,"
       ],
       [
        62.54,
        "sin"
       ],
       [
        63.35,
        "reloj."
       ]
      ]
     },
     {
      "t": 64.58,
      "txt": ""
     },
     {
      "t": 67.55,
      "txt": "Suena en el ascensor, en el hotel y en el café,",
      "t1": 72.97,
      "w": [
       [
        67.58,
        "Suena"
       ],
       [
        68.21,
        "en"
       ],
       [
        68.44,
        "el"
       ],
       [
        68.8,
        "ascensor,"
       ],
       [
        70.51,
        "en"
       ],
       [
        70.63,
        "el"
       ],
       [
        70.76,
        "hotel"
       ],
       [
        71.34,
        "y"
       ],
       [
        72.13,
        "en"
       ],
       [
        72.25,
        "el"
       ],
       [
        72.48,
        "café,"
       ]
      ]
     },
     {
      "t": 72.99,
      "txt": "tan tranquila, tan bajita, que la escuchas sin querer.",
      "t1": 80.65,
      "w": [
       [
        73.02,
        "tan"
       ],
       [
        74.22,
        "tranquila,"
       ],
       [
        75.76,
        "tan"
       ],
       [
        76.06,
        "bajita,"
       ],
       [
        77.13,
        "que"
       ],
       [
        78.01,
        "la"
       ],
       [
        78.36,
        "escuchas"
       ],
       [
        79.15,
        "sin"
       ],
       [
        79.68,
        "querer."
       ]
      ]
     },
     {
      "t": 80.7,
      "txt": ""
     },
     {
      "t": 82.17,
      "txt": "La voz casi en secreto, como quien cuenta un sueño:",
      "t1": 88.23,
      "w": [
       [
        82.2,
        "La"
       ],
       [
        82.34,
        "voz"
       ],
       [
        83.01,
        "casi"
       ],
       [
        83.4,
        "en"
       ],
       [
        83.52,
        "secreto,"
       ],
       [
        84.76,
        "como"
       ],
       [
        86.1,
        "quien"
       ],
       [
        86.71,
        "cuenta"
       ],
       [
        87.19,
        "un"
       ],
       [
        87.47,
        "sueño:"
       ]
      ]
     },
     {
      "t": 88.25,
      "txt": "la nueva onda de Río, la samba en pequeño.",
      "t1": 95.59,
      "w": [
       [
        88.28,
        "la"
       ],
       [
        89.53,
        "nueva"
       ],
       [
        89.94,
        "onda"
       ],
       [
        90.66,
        "de"
       ],
       [
        91.05,
        "Río,"
       ],
       [
        92.22,
        "la"
       ],
       [
        93.26,
        "samba"
       ],
       [
        93.83,
        "en"
       ],
       [
        94.53,
        "pequeño."
       ]
      ]
     },
     {
      "t": 96.53,
      "txt": "Bossa nova, bossa nova, suave como el mar,",
      "t1": 101.49,
      "w": [
       [
        96.56,
        "Bossa"
       ],
       [
        96.85,
        "nova,"
       ],
       [
        97.54,
        "bossa"
       ],
       [
        97.79,
        "nova,"
       ],
       [
        98.41,
        "suave"
       ],
       [
        99.16,
        "como"
       ],
       [
        100.02,
        "el"
       ],
       [
        100.52,
        "mar,"
       ]
      ]
     },
     {
      "t": 101.54,
      "txt": ""
     },
     {
      "t": 103.64,
      "txt": "con séptimas y novenas que te invitan a soñar.",
      "t1": 108.39,
      "w": [
       [
        103.67,
        "con"
       ],
       [
        103.81,
        "séptimas"
       ],
       [
        104.53,
        "y"
       ],
       [
        104.8,
        "novenas"
       ],
       [
        105.76,
        "que"
       ],
       [
        105.97,
        "te"
       ],
       [
        106.09,
        "invitan"
       ],
       [
        106.58,
        "a"
       ],
       [
        107.1,
        "soñar."
       ]
      ]
     },
     {
      "t": 108.44,
      "txt": ""
     },
     {
      "t": 110.96,
      "txt": "Las escobillas susurran, y el aro dice toc…",
      "t1": 116.59,
      "w": [
       [
        110.99,
        "Las"
       ],
       [
        111.11,
        "escobillas"
       ],
       [
        112.05,
        "susurran,"
       ],
       [
        113.1,
        "y"
       ],
       [
        113.33,
        "el"
       ],
       [
        113.45,
        "aro"
       ],
       [
        113.92,
        "dice"
       ],
       [
        114.66,
        "toc…"
       ]
      ]
     },
     {
      "t": 116.64,
      "txt": ""
     },
     {
      "t": 118.53,
      "txt": "bossa nova, bossa nova, en voz baja, sin reloj.",
      "t1": 123.23,
      "w": [
       [
        118.56,
        "bossa"
       ],
       [
        118.85,
        "nova,"
       ],
       [
        119.61,
        "bossa"
       ],
       [
        119.79,
        "nova,"
       ],
       [
        120.3,
        "en"
       ],
       [
        120.75,
        "voz"
       ],
       [
        120.87,
        "baja,"
       ],
       [
        121.16,
        "sin"
       ],
       [
        121.74,
        "reloj."
       ]
      ]
     },
     {
      "t": 123.28,
      "txt": ""
     },
     {
      "t": 125.97,
      "txt": "Que beleza… eso es bossa nova.",
      "t1": 130.53,
      "w": [
       [
        126.0,
        "Que"
       ],
       [
        126.12,
        "beleza…"
       ],
       [
        128.77,
        "eso"
       ],
       [
        129.04,
        "es"
       ],
       [
        129.65,
        "bossa"
       ],
       [
        129.8,
        "nova."
       ]
      ]
     },
     {
      "t": 130.58,
      "txt": ""
     }
    ],
    "fichas": [],
    "botones": {
     "desde": 118.53,
     "seguir": "Siguiente parada",
     "ejemplos": [
      {
       "src": "videos/bossa-1.mp4",
       "tit": "Bossa nova · ejemplo 1"
      },
      {
       "src": "videos/bossa-2.mp4",
       "tit": "Bossa nova · ejemplo 2"
      }
     ]
    },
    "tipo": "concierto",
    "recursos": [
     "mus/s3_bossa_concierto.mp3",
     "videos/bossa-1.mp4",
     "videos/bossa-2.mp4"
    ],
    "fundidoPlanos": 0.18,
    "kb": false
   },
   "var": {
    "RECURSO_LLEGAN": "img/s3/b_musicos_llegan.webp"
   }
  },
  {
   "id": "s3_r1",
   "nombre": "Repaso del sabor 3",
   "img": "img/s3/r_repaso.webp",
   "desc": "Ritinha y Seu Tom juntos (sus PNG) entre las dos fichas, sobre la calle del morro y la terraza desenfocadas.",
   "amb": [],
   "personajes": [
    "RITINHA",
    "SEU TOM"
   ],
   "lineas": [
    {
     "id": "s3_rr1",
     "quien": "RITINHA",
     "texto": "¡Hoy hemos estado en Brasil, gente! La samba: carnaval en la calle, una montaña de percusión que suena a locomotora, los surdos que hablan entre ellos… y el apito, que manda.",
     "voz": "voz/s3/s3_rr1.mp3"
    },
    {
     "id": "s3_rr2",
     "quien": "SEU TOM",
     "texto": "Y la bossa nova: la samba en voz bajita. La guitarra con el bajo en el uno y el tres, acordes de jazz, la percusión de puntillas… y, si suena en un ascensor, ya saben.",
     "voz": "voz/s3/s3_rr2.mp3"
    },
    {
     "id": "s3_rr3",
     "quien": "RITINHA",
     "texto": "¡Esto ha sido todo por hoy! Y la próxima vez, nos vamos a una ciudad que no duerme nunca. ¡Tchau, gente!",
     "voz": "voz/s3/s3_rr3.mp3"
    }
   ]
  },
  {
   "id": "s3_q",
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
    "sabor": 3,
    "recursos": [
     "img/quiz/fondo_quiz.webp",
     "mus/portada.mp3",
     "voz/squiz/q_n_intro_s3.mp3",
     "voz/squiz/q_n_pleno.mp3",
     "voz/squiz/q_n_fin6.mp3",
     "voz/squiz/q_n_fin0.mp3",
     "mus/quiz/cumbia_7.3.mp3",
     "voz/squiz/q_n_rec1.mp3",
     "mus/quiz/merengue_7.3.mp3",
     "voz/squiz/q_n_rec2.mp3",
     "mus/quiz/bolero_7.3.mp3",
     "voz/squiz/q_n_rec3.mp3",
     "mus/quiz/bachata_video2.mp3",
     "mus/quiz/samba_7.3.mp3",
     "mus/quiz/bossa_nova_7.2.mp3",
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
     "voz/squiz/q_samba_res.mp3",
     "img/s3/pj/ritinha_explica.webp",
     "img/s3/pj/ritinha_saluda.webp",
     "voz/squiz/q_bossa_res.mp3",
     "img/s3/pj/seutom_explica.webp",
     "img/s3/pj/seutom_saluda.webp",
     "voz/squiz/q_n_s3_t01.mp3",
     "voz/squiz/q_r_s3_t01.mp3",
     "voz/squiz/q_n_s3_t02.mp3",
     "voz/squiz/q_r_s3_t02.mp3",
     "voz/squiz/q_n_s3_t03.mp3",
     "voz/squiz/q_r_s3_t03.mp3",
     "voz/squiz/q_n_s3_t04.mp3",
     "voz/squiz/q_r_s3_t04.mp3",
     "voz/squiz/q_n_s3_t05.mp3",
     "voz/squiz/q_r_s3_t05.mp3",
     "voz/squiz/q_n_s3_t06.mp3",
     "voz/squiz/q_r_s3_t06.mp3",
     "voz/squiz/q_n_s3_t07.mp3",
     "voz/squiz/q_r_s3_t07.mp3",
     "voz/squiz/q_n_s3_t08.mp3",
     "voz/squiz/q_r_s3_t08.mp3",
     "voz/squiz/q_n_s3_t09.mp3",
     "voz/squiz/q_r_s3_t09.mp3",
     "voz/squiz/q_n_s3_t10.mp3",
     "voz/squiz/q_r_s3_t10.mp3",
     "mus/quiz/fondo_samba.mp3",
     "mus/quiz/fondo_bossa.mp3",
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

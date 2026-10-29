/* AFRO LATIN · Sabor 4 (repaso + salsa + mambo + kizomba + repaso). Lo genera herramientas/sabor4_datos.py: NO editar a mano. */
BLUES.dia(4, {
 "titulo": "Salsa, mambo y kizomba",
 "lugar": "Nueva York · Luanda",
 "planos": [
  {
   "id": "s4_r0",
   "nombre": "Repaso de los sabores 1, 2 y 3",
   "img": "img/s3/mapa_caribe_rio.webp",
   "desc": "La carta del Caribe y Sudamérica (la del Sabor 3), con las fichas de los seis géneros, de dos en dos.",
   "amb": [],
   "lineas": [
    {
     "id": "s4_n01",
     "quien": "NARR",
     "texto": "¡Bienvenidos al cuarto y último sabor! Echemos la vista atrás, que ya llevamos mucho viaje: la cumbia colombiana, tranquila, con su guacharaca… el merengue, a toda pastilla, con güira y tambora… el bolero cubano, lento, con el tresillo de las maracas… la bachata, con la güira y el bongó y la guitarra diabla… la samba de Brasil, carnaval en la calle, con sus surdos y el apito que manda… y la bossa nova, la samba en voz bajita, con una guitarra que lo hace todo y la percusión de puntillas.",
     "voz": "voz/s4/s4_n01.mp3"
    },
    {
     "id": "s4_n02",
     "quien": "NARR",
     "texto": "Y ahora… ¡nos vamos a Nueva York!",
     "voz": "voz/s4/s4_n02.mp3"
    }
   ]
  },
  {
   "id": "s4_v1",
   "nombre": "Viaje · a Nueva York",
   "img": "img/s4/mapa_atlantico.webp",
   "desc": "La carta del Atlántico: el avión sube de Río de Janeiro a Nueva York, por encima del Amazonas y del Caribe.",
   "amb": [
    {
     "src": "sfx/s1/avion_cabina.mp3",
     "vol": 0.28
    }
   ],
   "mapa": {
    "desde": "Río de Janeiro",
    "hasta": "Estados Unidos · Nueva York",
    "sub": "Nueva York: aquí nació la salsa",
    "dur": 10,
    "vehiculo": "el avión",
    "antes": {
     "tit": "Rumbo a Nueva York",
     "txt": "Nueva York: aquí nació la salsa"
    },
    "ruta": [
     [
      0.386,
      0.866
     ],
     [
      0.377,
      0.78
     ],
     [
      0.358,
      0.66
     ],
     [
      0.327,
      0.53
     ],
     [
      0.292,
      0.41
     ],
     [
      0.257,
      0.3
     ],
     [
      0.227,
      0.21
     ],
     [
      0.205,
      0.142
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
    ]
   },
   "mus": {
    "src": "mus/s4_viaje_nueva_york.mp3",
    "vol": 0.62
   }
  },
  {
   "id": "s4_s1",
   "nombre": "Nueva York",
   "img": "img/s4/s_skyline.webp",
   "desc": "Nueva York de noche, años 70: el puente de Brooklyn y los rascacielos. El plató, tras la puerta (plano recurso).",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.08
    }
   ],
   "lineas": [
    {
     "id": "s4_n03",
     "quien": "NARR",
     "texto": "¡Nueva York, la ciudad que nunca duerme! En los años sesenta y setenta, en sus barrios latinos, músicos de Puerto Rico y de Cuba mezclaron el son cubano, el mambo y el jazz… y salió un sonido nuevo, con mucha calle: la salsa.",
     "voz": "voz/s4/s4_n03.mp3"
    },
    {
     "id": "s4_n04",
     "quien": "NARR",
     "texto": "Y nos colamos en un plató de televisión… ¡que empieza el programa!",
     "voz": "voz/s4/s4_n04.mp3",
     "var": "RECURSO_PUERTA",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_PUERTA": "img/s4/s_puerta.webp"
   },
   "mus": {
    "src": "mus/s4_salsa_fondo.mp3",
    "vol": 0.42,
    "bucle": true
   }
  },
  {
   "id": "s4_s2",
   "nombre": "Papo Vega nos recibe",
   "img": "img/s4/s_luces.webp",
   "desc": "El plató de «Noche de Salsa», con sus luces y el letrero de neón (sin Papo: él va en PNG). El origen del nombre, en un salón de baile antiguo (plano recurso).",
   "amb": [],
   "personajes": [
    "PAPO VEGA"
   ],
   "lineas": [
    {
     "id": "s4_p01",
     "quien": "PAPO VEGA",
     "texto": "¡Wepa! ¡Bienvenidos a «Noche de Salsa», en directo desde Nueva York! Soy Papo Vega… ¡y esto está que arde!",
     "voz": "voz/s4/s4_p01.mp3"
    },
    {
     "id": "s4_p02",
     "quien": "PAPO VEGA",
     "texto": "¿Y saben por qué se llama salsa? Porque es una mezcla, como una salsa de cocina. Cuentan que el pianista Richie Ray decía que su música era como el kétchup… y el gran Tito Puente se reía: «¡La única salsa que yo conozco viene en una botella!». Pero a principios de los setenta, aquí en Nueva York, una discográfica y un programa de tele la llamaron así… ¡y el nombre se quedó!",
     "voz": "voz/s4/s4_p02.mp3",
     "var": "RECURSO_ORIGEN",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_ORIGEN": "img/s4/s_origen.webp"
   },
   "mus": {
    "src": "mus/s4_salsa_fondo.mp3",
    "vol": 0.36,
    "bucle": true
   }
  },
  {
   "id": "s4_s3",
   "nombre": "Reconocerla · el doble papel",
   "img": "img/s4/s_plato.webp",
   "desc": "El plató vacío con los instrumentos colocados.",
   "amb": [],
   "personajes": [
    "PAPO VEGA"
   ],
   "lineas": [
    {
     "id": "s4_p03",
     "quien": "PAPO VEGA",
     "texto": "Primera pista, ¡y la más importante! Fíjense en los tres percusionistas, porque tienen doble papel: en la estrofa tocan una cosa… y en el estribillo, ¡cambian de instrumento!",
     "voz": "voz/s4/s4_p03.mp3"
    }
   ],
   "mus": {
    "src": "mus/s4_salsa_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s4_s4",
   "nombre": "Reconocerla · el timbalero",
   "img": "img/s4/s_plato.webp",
   "desc": "El plató; el timbalero: cáscara en la estrofa, cencerro en el estribillo.",
   "amb": [],
   "personajes": [
    "PAPO VEGA"
   ],
   "lineas": [
    {
     "id": "s4_p04",
     "quien": "PAPO VEGA",
     "texto": "El timbalero: en la estrofa toca la cáscara, el lateral metálico del timbal, seco y pequeño… y en el estribillo se pasa al cencerro: ¡cá-cucu, cá-cucu!",
     "voz": "voz/s4/s4_p04.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "timbalero",
    "nom": "Timbalero · estrofa: la cáscara",
    "img": "img/s4/inst_s_timbales.webp",
    "loop": "loops/s4/salsa_timbal_estrofa.mp3",
    "color": "#B8B8C0",
    "bpm": 95,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s4/salsa_timbal_estrofa.mp3",
     "img/s4/inst_s_timbales.webp",
     "loops/s4/salsa_timbal_estribillo.mp3",
     "img/s4/inst_s_cencerro.webp"
    ],
    "luego": {
     "nom": "Timbalero · estribillo: el cencerro",
     "img": "img/s4/inst_s_cencerro.webp",
     "loop": "loops/s4/salsa_timbal_estribillo.mp3",
     "vueltas": 1
    }
   }
  },
  {
   "id": "s4_s5",
   "nombre": "Reconocerla · el bongosero",
   "img": "img/s4/s_plato.webp",
   "desc": "El plató; el bongosero: bongó en la estrofa; en el estribillo, su cencerro en contracanto.",
   "amb": [],
   "personajes": [
    "PAPO VEGA"
   ],
   "lineas": [
    {
     "id": "s4_p05",
     "quien": "PAPO VEGA",
     "texto": "El bongosero: en la estrofa, el bongó, con un martilleo suave que casi no se nota… y en el estribillo lo suelta, agarra otro cencerro, más agudo, y le hace un contracanto al del timbalero.",
     "voz": "voz/s4/s4_p05.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "bongosero",
    "nom": "Bongosero · estrofa: el bongó, ritmo «martillo»",
    "img": "img/s4/inst_s_bongo.webp",
    "loop": "loops/s4/salsa_bongo_estrofa.mp3",
    "color": "#C27C3A",
    "bpm": 95,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s4/salsa_bongo_estrofa.mp3",
     "img/s4/inst_s_bongo.webp",
     "loops/s4/salsa_bongo_estribillo.mp3",
     "img/s4/inst_s_cencerro_b.webp"
    ],
    "luego": {
     "nom": "Bongosero · estribillo: otro cencerro, más agudo",
     "img": "img/s4/inst_s_cencerro_b.webp",
     "loop": "loops/s4/salsa_bongo_estribillo.mp3",
     "vueltas": 1
    }
   }
  },
  {
   "id": "s4_s5b",
   "nombre": "Reconocerla · la cencerrada",
   "img": "img/s4/s_plato.webp",
   "desc": "El plató; los dos cencerros juntos.",
   "amb": [],
   "personajes": [
    "PAPO VEGA"
   ],
   "lineas": [
    {
     "id": "s4_p05b",
     "quien": "PAPO VEGA",
     "texto": "Fíjate cómo suenan los dos juntos… ¡menuda cencerrada!",
     "voz": "voz/s4/s4_p05b.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "cencerro",
    "nom": "Los dos cencerros juntos: ¡la cencerrada!",
    "img": "img/s4/inst_s_cencerro.webp",
    "loop": "loops/s4/salsa_cencerrada.mp3",
    "color": "#5B5B66",
    "bpm": 95,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "imgs": [
     "img/s4/inst_s_cencerro_b_esc.webp"
    ],
    "recursos": [
     "loops/s4/salsa_cencerrada.mp3",
     "img/s4/inst_s_cencerro.webp",
     "img/s4/inst_s_cencerro_b_esc.webp"
    ]
   }
  },
  {
   "id": "s4_s6",
   "nombre": "Reconocerla · el conguero",
   "img": "img/s4/s_plato.webp",
   "desc": "El plató; el conguero, con una sola conga.",
   "amb": [],
   "personajes": [
    "PAPO VEGA"
   ],
   "lineas": [
    {
     "id": "s4_p06",
     "quien": "PAPO VEGA",
     "texto": "Y el conguero: en la estrofa, aunque tiene dos congas delante, solo usa una.",
     "voz": "voz/s4/s4_p06.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "conguero",
    "nom": "Conguero · estrofa: una sola conga",
    "img": "img/s4/inst_s_conga.webp",
    "loop": "loops/s4/salsa_conga_estrofa.mp3",
    "color": "#D9963A",
    "bpm": 95,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s4/salsa_conga_estrofa.mp3",
     "img/s4/inst_s_conga.webp"
    ],
    "nivK": 0.6
   }
  },
  {
   "id": "s4_s6b",
   "nombre": "Reconocerla · la conga grave",
   "img": "img/s4/s_plato.webp",
   "desc": "El plató; las dos congas, con la grave.",
   "amb": [],
   "personajes": [
    "PAPO VEGA"
   ],
   "lineas": [
    {
     "id": "s4_p06b",
     "quien": "PAPO VEGA",
     "texto": "Y en el estribillo, saca a pasear la grave. Como arriba suenan dos cencerros, ¡ese golpe gordo de abajo lo sostiene todo!",
     "voz": "voz/s4/s4_p06b.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "conguero",
    "nom": "Conguero · estribillo: las dos congas, con la grave",
    "img": "img/s4/inst_s_congas.webp",
    "loop": "loops/s4/salsa_conga_estribillo.mp3",
    "color": "#D9963A",
    "bpm": 95,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s4/salsa_conga_estribillo.mp3",
     "img/s4/inst_s_congas.webp"
    ],
    "nivK": 0.6
   }
  },
  {
   "id": "s4_s7",
   "nombre": "Reconocerla · clave, bajo y piano",
   "img": "img/s4/s_plato.webp",
   "desc": "El plató; las claves, el bajo y el piano.",
   "amb": [],
   "personajes": [
    "PAPO VEGA"
   ],
   "lineas": [
    {
     "id": "s4_p07",
     "quien": "PAPO VEGA",
     "texto": "Y debajo de todo, la clave: dos palitos que ordenan a todos los demás… un bajo que nunca toca en el uno: ¡por eso empuja tanto!… y el piano, con su tumbao: un dibujo que se repite y se repite, como un motor.",
     "voz": "voz/s4/s4_p07.mp3"
    }
   ],
   "inter": [
    {
     "tipo": "instrumento",
     "id": "clave",
     "nom": "La clave",
     "img": "img/s4/inst_s_claves.webp",
     "loop": "loops/s4/salsa_clave.mp3",
     "color": "#8C5A3A",
     "bpm": 95,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s4/salsa_clave.mp3",
      "img/s4/inst_s_claves.webp"
     ]
    },
    {
     "tipo": "instrumento",
     "id": "bajo",
     "nom": "El bajo: nunca en el uno",
     "img": "img/s4/inst_s_bajo.webp",
     "loop": "loops/s4/salsa_bajo.mp3",
     "color": "#C2502E",
     "bpm": 95,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s4/salsa_bajo.mp3",
      "img/s4/inst_s_bajo.webp"
     ],
     "nivK": 0.6
    },
    {
     "tipo": "instrumento",
     "id": "piano",
     "nom": "El tumbao del piano",
     "img": "img/s3/inst_b_piano.webp",
     "loop": "loops/s4/salsa_piano.mp3",
     "color": "#3F5E8C",
     "bpm": 95,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s4/salsa_piano.mp3",
      "img/s3/inst_b_piano.webp"
     ]
    }
   ]
  },
  {
   "id": "s4_s8",
   "nombre": "Mezclador · arma la banda",
   "img": "img/s4/s_plato.webp",
   "desc": "El plató con los instrumentos.",
   "amb": [],
   "personajes": [
    "PAPO VEGA"
   ],
   "lineas": [
    {
     "id": "s4_p08",
     "quien": "PAPO VEGA",
     "texto": "¡Ahora tú! Arma la banda… y pasa de la estrofa al estribillo: ¡escucha cómo cambian los percusionistas!",
     "voz": "voz/s4/s4_p08.mp3"
    }
   ],
   "inter": {
    "tipo": "mezclador",
    "tit": "Arma la banda",
    "bpm": 95,
    "compases": 4,
    "pistas": [
     {
      "id": "clave",
      "nom": "Clave",
      "img": "img/s4/inst_s_claves.webp",
      "loops": {
       "estrofa": "loops/s4/salsa_clave.mp3",
       "estribillo": "loops/s4/salsa_clave.mp3"
      },
      "color": "#8C5A3A",
      "loop": "loops/s4/salsa_clave.mp3",
      "celda": [
       1,
       3,
       2,
       1
      ]
     },
     {
      "id": "bajo",
      "nom": "Bajo",
      "img": "img/s4/inst_s_bajo_h.webp",
      "loops": {
       "estrofa": "loops/s4/salsa_bajo.mp3",
       "estribillo": "loops/s4/salsa_bajo.mp3"
      },
      "color": "#C2502E",
      "loop": "loops/s4/salsa_bajo.mp3",
      "celda": [
       5,
       3,
       4,
       1
      ],
      "nivK": 0.6
     },
     {
      "id": "piano",
      "nom": "Piano",
      "img": "img/s3/inst_b_piano.webp",
      "loops": {
       "estrofa": "loops/s4/salsa_piano.mp3",
       "estribillo": "loops/s4/salsa_piano.mp3"
      },
      "color": "#3F5E8C",
      "loop": "loops/s4/salsa_piano.mp3",
      "celda": [
       1,
       1,
       2,
       2
      ]
     },
     {
      "id": "bongosero",
      "nom": "Bongosero",
      "img": "img/s4/inst_s_bongo.webp",
      "loops": {
       "estrofa": "loops/s4/salsa_bongo_estrofa.mp3",
       "estribillo": "loops/s4/salsa_bongo_estribillo.mp3"
      },
      "color": "#C27C3A",
      "loop": "loops/s4/salsa_bongo_estrofa.mp3",
      "imgsec": {
       "estribillo": "img/s4/inst_s_cencerro_b.webp"
      },
      "celda": [
       3,
       3,
       2,
       1
      ]
     },
     {
      "id": "timbalero",
      "nom": "Timbalero",
      "img": "img/s4/inst_s_timbales.webp",
      "loops": {
       "estrofa": "loops/s4/salsa_timbal_estrofa.mp3",
       "estribillo": "loops/s4/salsa_timbal_estribillo.mp3"
      },
      "color": "#B8B8C0",
      "loop": "loops/s4/salsa_timbal_estrofa.mp3",
      "imgsec": {
       "estribillo": "img/s4/inst_s_cencerro.webp"
      },
      "celda": [
       3,
       1,
       2,
       2
      ]
     },
     {
      "id": "conguero",
      "nom": "Conguero",
      "img": "img/s4/inst_s_conga.webp",
      "loops": {
       "estrofa": "loops/s4/salsa_conga_estrofa.mp3",
       "estribillo": "loops/s4/salsa_conga_estribillo.mp3"
      },
      "color": "#D9963A",
      "loop": "loops/s4/salsa_conga_estrofa.mp3",
      "imgsec": {
       "estribillo": "img/s4/inst_s_congas.webp"
      },
      "celda": [
       5,
       1,
       2,
       2
      ],
      "nivK": 0.6
     },
     {
      "id": "metales",
      "nom": "Metales",
      "img": "img/s4/inst_s_trompeta.webp",
      "loops": {
       "estribillo": "loops/s4/salsa_metales.mp3"
      },
      "color": "#D9B44A",
      "loop": "loops/s4/salsa_metales.mp3",
      "celda": [
       7,
       1,
       2,
       2
      ]
     }
    ],
    "inicial": [],
    "selector": [
     {
      "id": "estrofa",
      "nom": "Estrofa"
     },
     {
      "id": "estribillo",
      "nom": "Estribillo"
     }
    ],
    "seccion_inicial": "estrofa",
    "recursos": [
     "loops/s4/salsa_bajo.mp3",
     "loops/s4/salsa_bongo_estribillo.mp3",
     "loops/s4/salsa_bongo_estrofa.mp3",
     "loops/s4/salsa_clave.mp3",
     "loops/s4/salsa_conga_estribillo.mp3",
     "loops/s4/salsa_conga_estrofa.mp3",
     "loops/s4/salsa_metales.mp3",
     "loops/s4/salsa_piano.mp3",
     "loops/s4/salsa_timbal_estribillo.mp3",
     "loops/s4/salsa_timbal_estrofa.mp3"
    ],
    "inventario": [
     8,
     3
    ]
   }
  },
  {
   "id": "s4_s9",
   "nombre": "Llega la banda · Chucho",
   "img": "img/s4/s_plato.webp",
   "desc": "Los músicos llegan al plató (sin instrumentos: ya están colocados); el conguero es Chucho (Antónico/Schoenberg): el destape, y la canción libre.",
   "amb": [],
   "personajes": [
    "PAPO VEGA",
    "CHUCHO"
   ],
   "lineas": [
    {
     "id": "s4_p09",
     "quien": "PAPO VEGA",
     "texto": "¡Y aquí llega la banda! El bongosero, el timbalero… y el conguero… Un momento, un momento… ¿tú no eres el Schoenberg ese?",
     "voz": "voz/s4/s4_p09.mp3",
     "var": "RECURSO_LLEGAN",
     "fijo": true
    },
    {
     "id": "s4_ch1",
     "quien": "CHUCHO",
     "texto": "Oh… tengo muchos nombres. Hay quien me conoce como Antónico, otros como Schoenberg… ¡pero aquí soy Chucho, el conguero! Encantado de conocer esta cultura: creo que me voy a quedar aquí una temporadita, papi.",
     "voz": "voz/s4/s4_ch1.mp3",
     "var": "RECURSO_DESTAPE",
     "fijo": true
    },
    {
     "id": "s4_p10",
     "quien": "PAPO VEGA",
     "texto": "¡Pues bienvenido, Chucho! ¡Música, maestro!",
     "voz": "voz/s4/s4_p10.mp3",
     "var": "RECURSO_DESTAPE",
     "fijo": true
    }
   ],
   "inter": {
    "nota": "Suno «Afro Latin · Salsa · Papo v4» (2e6655bd…, ~198,8 bpm), montada con herramientas/concierto_salsa.py (c.12–c.137; percusión de estrofa y estribillo reforzada con el kit de Splice).",
    "cancion": "mus/s4_salsa_concierto.mp3",
    "bpm": 198.8,
    "t0rejilla": 0,
    "planos": [
     {
      "t": 0,
      "img": "img/s4/vc_sa_16_hoja_banda.webp",
      "txt": "hoja banda"
     },
     {
      "t": 11.992,
      "img": "img/s4/vc_sa_42_papo_canta_pp.webp",
      "txt": "papo canta pp"
     },
     {
      "t": 14.407,
      "img": "img/s4/vc_sa_18_bongo_martillando.webp",
      "txt": "bongo martillando"
     },
     {
      "t": 16.821,
      "img": "img/s4/vc_sa_19_timbal_cascara.webp",
      "txt": "timbal cascara"
     },
     {
      "t": 21.65,
      "img": "img/s4/vc_sa_20_chucho_una_conga.webp",
      "txt": "chucho una conga"
     },
     {
      "t": 26.781,
      "img": "img/s4/vc_sa_21_clave_dos_palitos.webp",
      "txt": "clave dos palitos"
     },
     {
      "t": 31.308,
      "img": "img/s4/vc_sa_22_cencerros_papo.webp",
      "txt": "cencerros papo"
     },
     {
      "t": 35.534,
      "img": "img/s4/vc_sa_27_cencerrada.webp",
      "txt": "cencerrada"
     },
     {
      "t": 40.966,
      "img": "img/s4/vc_sa_23_conga_grave.webp",
      "txt": "conga grave"
     },
     {
      "t": 45.493,
      "img": "img/s4/vc_sa_31_orquesta_estribillo.webp",
      "txt": "orquesta estribillo"
     },
     {
      "t": 50.624,
      "img": "img/s4/vc_sa_25_son_barrio_orquesta.webp",
      "txt": "son barrio orquesta"
     },
     {
      "t": 56.057,
      "img": "img/s4/vc_sa_36_nueva_york_noche.webp",
      "txt": "nueva york noche"
     },
     {
      "t": 60.886,
      "img": "img/s4/vc_sa_26_martilleo_suave.webp",
      "txt": "martilleo suave"
     },
     {
      "t": 65.111,
      "img": "img/s4/vc_sa_43_papo_canta_pp.webp",
      "txt": "papo canta pp"
     },
     {
      "t": 70.544,
      "img": "img/s4/vc_sa_24_coro.webp",
      "txt": "coro"
     },
     {
      "t": 74.165,
      "img": "img/s4/vc_sa_27_cencerrada.webp",
      "txt": "cencerrada"
     },
     {
      "t": 80.202,
      "img": "img/s4/vc_sa_28_dos_congas.webp",
      "txt": "dos congas"
     },
     {
      "t": 84.427,
      "img": "img/s4/vc_sa_30_publico_bailando.webp",
      "txt": "publico bailando"
     },
     {
      "t": 89.256,
      "img": "img/s4/vc_sa_29_mambo_metales.webp",
      "txt": "mambo metales"
     },
     {
      "t": 96.499,
      "img": "img/s4/vc_sa_35_pies_bailando_salsa.webp",
      "txt": "pies bailando salsa"
     },
     {
      "t": 104.347,
      "img": "img/s4/vc_sa_44_papo_canta_pp.webp",
      "txt": "papo canta pp"
     },
     {
      "t": 111.59,
      "img": "img/s4/vc_sa_30_publico_bailando.webp",
      "txt": "publico bailando"
     },
     {
      "t": 119.437,
      "img": "img/s4/vc_sa_25_son_barrio_orquesta.webp",
      "txt": "son barrio orquesta"
     },
     {
      "t": 128.491,
      "img": "img/s4/vc_sa_22_cencerros_papo.webp",
      "txt": "cencerros papo"
     },
     {
      "t": 132.717,
      "img": "img/s4/vc_sa_27_cencerrada.webp",
      "txt": "cencerrada"
     },
     {
      "t": 138.149,
      "img": "img/s4/vc_sa_23_conga_grave.webp",
      "txt": "conga grave"
     },
     {
      "t": 142.375,
      "img": "img/s4/vc_sa_31_orquesta_estribillo.webp",
      "txt": "orquesta estribillo"
     },
     {
      "t": 147.204,
      "img": "img/s4/vc_sa_32_papo_wepa_final.webp",
      "txt": "papo wepa final"
     }
    ],
    "letra": [
     {
      "t": 11.52,
      "txt": "En la estrofa, despacito, el bongó va martillando,",
      "t1": 15.55,
      "w": [
       [
        11.55,
        "En"
       ],
       [
        11.83,
        "la"
       ],
       [
        11.98,
        "estrofa,"
       ],
       [
        12.94,
        "despacito,"
       ],
       [
        14.0,
        "el"
       ],
       [
        14.34,
        "bongó"
       ],
       [
        14.64,
        "va"
       ],
       [
        14.89,
        "martillando,"
       ]
      ]
     },
     {
      "t": 16.4,
      "txt": "el timbal toca la cáscara, seco y pequeñito,",
      "t1": 21.17,
      "w": [
       [
        16.43,
        "el"
       ],
       [
        16.71,
        "timbal"
       ],
       [
        17.36,
        "toca"
       ],
       [
        17.58,
        "la"
       ],
       [
        17.97,
        "cáscara,"
       ],
       [
        19.0,
        "seco"
       ],
       [
        19.74,
        "y"
       ],
       [
        19.99,
        "pequeñito,"
       ]
      ]
     },
     {
      "t": 21.2,
      "txt": "la conga, con una sola, su tumbao va marcando,",
      "t1": 25.89,
      "w": [
       [
        21.23,
        "la"
       ],
       [
        21.44,
        "conga,"
       ],
       [
        22.21,
        "con"
       ],
       [
        22.41,
        "una"
       ],
       [
        22.6,
        "sola,"
       ],
       [
        23.71,
        "su"
       ],
       [
        23.87,
        "tumbao"
       ],
       [
        24.58,
        "va"
       ],
       [
        24.96,
        "marcando,"
       ]
      ]
     },
     {
      "t": 26.07,
      "txt": "y la clave, dos palitos, ordena todo el ritmo.",
      "t1": 30.81,
      "w": [
       [
        26.1,
        "y"
       ],
       [
        26.44,
        "la"
       ],
       [
        26.71,
        "clave,"
       ],
       [
        26.98,
        "dos"
       ],
       [
        27.45,
        "palitos,"
       ],
       [
        28.3,
        "ordena"
       ],
       [
        29.2,
        "todo"
       ],
       [
        29.76,
        "el"
       ],
       [
        30.0,
        "ritmo."
       ]
      ]
     },
     {
      "t": 31.41,
      "txt": "¡Salsa, salsa! ¡Ya suenan los cencerros!",
      "t1": 35.17,
      "w": [
       [
        31.44,
        "¡Salsa,"
       ],
       [
        32.08,
        "salsa!"
       ],
       [
        32.3,
        "¡Ya"
       ],
       [
        32.78,
        "suenan"
       ],
       [
        33.57,
        "los"
       ],
       [
        34.17,
        "cencerros!"
       ]
      ]
     },
     {
      "t": 35.19,
      "txt": "El bongosero agarra el suyo, y el timbal: ¡cá-cucu!",
      "t1": 40.21,
      "w": [
       [
        35.22,
        "El"
       ],
       [
        35.54,
        "bongosero"
       ],
       [
        36.51,
        "agarra"
       ],
       [
        37.12,
        "el"
       ],
       [
        37.35,
        "suyo,"
       ],
       [
        37.74,
        "y"
       ],
       [
        38.0,
        "el"
       ],
       [
        38.38,
        "timbal:"
       ],
       [
        39.14,
        "¡cá-cucu!"
       ]
      ]
     },
     {
      "t": 41.1,
      "txt": "¡Salsa, salsa! ¡La conga grave llama!",
      "t1": 44.56,
      "w": [
       [
        41.13,
        "¡Salsa,"
       ],
       [
        42.19,
        "salsa!"
       ],
       [
        42.46,
        "¡La"
       ],
       [
        42.79,
        "conga"
       ],
       [
        43.38,
        "grave"
       ],
       [
        43.88,
        "llama!"
       ]
      ]
     },
     {
      "t": 44.58,
      "txt": "¡En el estribillo, mi gente, todo sube más!",
      "t1": 49.99,
      "w": [
       [
        44.61,
        "¡En"
       ],
       [
        45.2,
        "el"
       ],
       [
        45.41,
        "estribillo,"
       ],
       [
        46.41,
        "mi"
       ],
       [
        46.64,
        "gente,"
       ],
       [
        48.22,
        "todo"
       ],
       [
        48.54,
        "sube"
       ],
       [
        49.31,
        "más!"
       ]
      ]
     },
     {
      "t": 50.24,
      "txt": "Del son cubano viene, con jazz y con el barrio,",
      "t1": 55.29,
      "w": [
       [
        50.27,
        "Del"
       ],
       [
        50.55,
        "son"
       ],
       [
        50.88,
        "cubano"
       ],
       [
        51.73,
        "viene,"
       ],
       [
        52.79,
        "con"
       ],
       [
        53.05,
        "jazz"
       ],
       [
        53.56,
        "y"
       ],
       [
        53.91,
        "con"
       ],
       [
        54.07,
        "el"
       ],
       [
        54.33,
        "barrio,"
       ]
      ]
     },
     {
      "t": 55.4,
      "txt": "de Puerto Rico y Nueva York, mezcla de verdad;",
      "t1": 59.61,
      "w": [
       [
        55.43,
        "de"
       ],
       [
        55.72,
        "Puerto"
       ],
       [
        55.95,
        "Rico"
       ],
       [
        56.35,
        "y"
       ],
       [
        56.58,
        "Nueva"
       ],
       [
        56.76,
        "York,"
       ],
       [
        57.88,
        "mezcla"
       ],
       [
        58.59,
        "de"
       ],
       [
        58.76,
        "verdad;"
       ]
      ]
     },
     {
      "t": 60.03,
      "txt": "y en la estrofa vuelve el martilleo suave,",
      "t1": 64.71,
      "w": [
       [
        60.06,
        "y"
       ],
       [
        60.41,
        "en"
       ],
       [
        60.7,
        "la"
       ],
       [
        60.85,
        "estrofa"
       ],
       [
        61.31,
        "vuelve"
       ],
       [
        62.5,
        "el"
       ],
       [
        62.82,
        "martilleo"
       ],
       [
        63.9,
        "suave,"
       ]
      ]
     },
     {
      "t": 65.14,
      "txt": "la cáscara seca, y una conga nada más.",
      "t1": 69.39,
      "w": [
       [
        65.17,
        "la"
       ],
       [
        65.25,
        "cáscara"
       ],
       [
        65.82,
        "seca,"
       ],
       [
        66.64,
        "y"
       ],
       [
        67.22,
        "una"
       ],
       [
        67.53,
        "conga"
       ],
       [
        68.28,
        "nada"
       ],
       [
        68.66,
        "más."
       ]
      ]
     },
     {
      "t": 70.23,
      "txt": "¡Salsa, salsa! ¡Ya suenan los cencerros!",
      "t1": 73.83,
      "w": [
       [
        70.26,
        "¡Salsa,"
       ],
       [
        71.34,
        "salsa!"
       ],
       [
        71.59,
        "¡Ya"
       ],
       [
        71.91,
        "suenan"
       ],
       [
        72.4,
        "los"
       ],
       [
        72.98,
        "cencerros!"
       ]
      ]
     },
     {
      "t": 73.85,
      "txt": "El bongosero agarra el suyo, y el timbal: ¡cá-cucu!",
      "t1": 79.11,
      "w": [
       [
        73.88,
        "El"
       ],
       [
        74.04,
        "bongosero"
       ],
       [
        75.35,
        "agarra"
       ],
       [
        75.96,
        "el"
       ],
       [
        76.2,
        "suyo,"
       ],
       [
        76.77,
        "y"
       ],
       [
        76.86,
        "el"
       ],
       [
        77.22,
        "timbal:"
       ],
       [
        77.99,
        "¡cá-cucu!"
       ]
      ]
     },
     {
      "t": 79.94,
      "txt": "¡Salsa, salsa! ¡La conga grave llama!",
      "t1": 83.7,
      "w": [
       [
        79.97,
        "¡Salsa,"
       ],
       [
        81.04,
        "salsa!"
       ],
       [
        81.28,
        "¡La"
       ],
       [
        81.63,
        "conga"
       ],
       [
        82.37,
        "grave"
       ],
       [
        82.71,
        "llama!"
       ]
      ]
     },
     {
      "t": 83.72,
      "txt": "¡En el estribillo, mi gente, todo sube más!",
      "t1": 88.77,
      "w": [
       [
        83.75,
        "¡En"
       ],
       [
        84.03,
        "el"
       ],
       [
        84.23,
        "estribillo,"
       ],
       [
        85.3,
        "mi"
       ],
       [
        85.49,
        "gente,"
       ],
       [
        87.08,
        "todo"
       ],
       [
        87.38,
        "sube"
       ],
       [
        88.16,
        "más!"
       ]
      ]
     },
     {
      "t": 88.82,
      "txt": ""
     },
     {
      "t": 128.13,
      "txt": "¡Salsa, salsa! ¡Ya suenan los cencerros!",
      "t1": 132.18,
      "w": [
       [
        128.16,
        "¡Salsa,"
       ],
       [
        128.9,
        "salsa!"
       ],
       [
        129.52,
        "¡Ya"
       ],
       [
        129.96,
        "suenan"
       ],
       [
        130.54,
        "los"
       ],
       [
        131.16,
        "cencerros!"
       ]
      ]
     },
     {
      "t": 132.2,
      "txt": "El bongosero agarra el suyo, y el timbal: ¡cá-cucu!",
      "t1": 137.33,
      "w": [
       [
        132.23,
        "El"
       ],
       [
        132.39,
        "bongosero"
       ],
       [
        133.52,
        "agarra"
       ],
       [
        134.24,
        "el"
       ],
       [
        134.38,
        "suyo,"
       ],
       [
        134.82,
        "y"
       ],
       [
        135.02,
        "el"
       ],
       [
        135.39,
        "timbal:"
       ],
       [
        136.02,
        "¡cá-cucu!"
       ]
      ]
     },
     {
      "t": 138.11,
      "txt": "¡Salsa, salsa! ¡La conga grave llama!",
      "t1": 141.56,
      "w": [
       [
        138.14,
        "¡Salsa,"
       ],
       [
        138.6,
        "salsa!"
       ],
       [
        139.2,
        "¡La"
       ],
       [
        139.79,
        "conga"
       ],
       [
        140.23,
        "grave"
       ],
       [
        141.17,
        "llama!"
       ]
      ]
     },
     {
      "t": 141.58,
      "txt": "¡En el estribillo, mi gente, todo sube más!",
      "t1": 146.97,
      "w": [
       [
        141.61,
        "¡En"
       ],
       [
        142.19,
        "el"
       ],
       [
        142.4,
        "estribillo,"
       ],
       [
        143.15,
        "mi"
       ],
       [
        143.61,
        "gente,"
       ],
       [
        144.88,
        "todo"
       ],
       [
        145.57,
        "sube"
       ],
       [
        146.32,
        "más!"
       ]
      ]
     },
     {
      "t": 147.02,
      "txt": ""
     }
    ],
    "fichas": [],
    "botones": {
     "desde": 138.11,
     "seguir": "Siguiente",
     "ejemplos": [
      {
       "src": "videos/salsa-1.mp4",
       "tit": "Salsa · ejemplo 1"
      },
      {
       "src": "videos/salsa-2.mp4",
       "tit": "Salsa · ejemplo 2"
      },
      {
       "src": "videos/salsa-3.mp4",
       "tit": "Salsa · ejemplo 3"
      }
     ]
    },
    "tipo": "concierto",
    "recursos": [
     "mus/s4_salsa_concierto.mp3",
     "videos/salsa-1.mp4",
     "videos/salsa-2.mp4",
     "videos/salsa-3.mp4"
    ],
    "fundidoPlanos": 0.18,
    "kb": false
   },
   "var": {
    "RECURSO_LLEGAN": "img/s4/s_musicos_llegan.webp",
    "RECURSO_DESTAPE": "img/s4/s_destape.webp",
    "RECURSO_CHU": "img/s4/vc_sa_48_chucho_soy_chucho.webp"
   }
  },
  {
   "id": "s4_m1",
   "nombre": "El mambo · Don Mamberto",
   "img": "img/s4/vc_sa_47_mambo_saxos.webp",
   "desc": "La sección de metales del plató (sin Mamberto: él va en PNG).",
   "amb": [],
   "personajes": [
    "DON MAMBERTO",
    "CHUCHO"
   ],
   "lineas": [
    {
     "id": "s4_m01",
     "quien": "DON MAMBERTO",
     "texto": "¡Eso, eso, eso! ¿Me dejan pasar? Don Mamberto, para servirles: trompeta en las mejores orquestas de La Habana.",
     "voz": "voz/s4/s4_m01.mp3"
    },
    {
     "id": "s4_m02",
     "quien": "DON MAMBERTO",
     "texto": "Antes de la salsa ya estaba el mambo. Al principio no era un género: era el nombre de una sección, la parte final y más caliente del danzón, donde los metales se sueltan… ¡y todavía hoy, dentro de una salsa o de un merengue, a ese trozo de vientos lo llaman «el mambo»! Hasta que un cubano, Pérez Prado, se lo llevó a México, lo convirtió en un género propio y lo puso de moda en medio mundo.",
     "voz": "voz/s4/s4_m02.mp3"
    },
    {
     "id": "s4_m03",
     "quien": "DON MAMBERTO",
     "texto": "¿Cómo se reconoce? Tres cosas: melodías de vientos, los saxos abajo con la melodía y las trompetas contestando desde arriba… mucho, mucho flow… y el grito. ¡El grito de Pérez Prado!",
     "voz": "voz/s4/s4_m03.mp3"
    },
    {
     "id": "s4_m04",
     "quien": "DON MAMBERTO",
     "texto": "A ver… ¡Chucho! ¡Lánzate el grito!",
     "voz": "voz/s4/s4_m04.mp3"
    },
    {
     "id": "s4_grito",
     "quien": "CHUCHO",
     "texto": "¡Aaah… uh!",
     "voz": "voz/s4/s4_grito.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "mambo",
    "nom": "El mambo: saxos abajo, trompetas arriba",
    "img": "img/s4/inst_m_saxo_baritono.webp",
    "loop": "loops/s4/mambo_vientos.mp3",
    "color": "#D9B44A",
    "bpm": 120,
    "compases": 8,
    "vueltas": 1,
    "espera": 0.6,
    "imgs": [
     "img/s4/inst_m_saxo_tenor_esc.webp",
     "img/s4/inst_s_trompeta_esc.webp"
    ],
    "recursos": [
     "loops/s4/mambo_vientos.mp3",
     "img/s4/inst_m_saxo_baritono.webp",
     "img/s4/inst_m_saxo_tenor_esc.webp",
     "img/s4/inst_s_trompeta_esc.webp"
    ]
   },
   "var": {
    "RECURSO_MB0": "img/s4/vc_sa_45_saxos_suben.webp",
    "RECURSO_MB1": "img/s4/vc_sa_29_mambo_metales.webp",
    "RECURSO_MB2": "img/s4/vc_sa_18_bongo_martillando.webp",
    "RECURSO_MB3": "img/s4/vc_sa_46_saxos_metales.webp",
    "RECURSO_MB4": "img/s4/vc_sa_20_chucho_una_conga.webp"
   }
  },
  {
   "id": "s4_m2",
   "nombre": "La sorpresa: Luena",
   "img": "img/s4/s_luces.webp",
   "desc": "El plató con sus luces; Luena, Papo y Mamberto, en PNG, por turnos.",
   "amb": [],
   "personajes": [
    "LUENA",
    "PAPO VEGA",
    "DON MAMBERTO"
   ],
   "lineas": [
    {
     "id": "s4_l01",
     "quien": "LUENA",
     "texto": "¿Qué es tanto grito? Boa noite… ¿Sabían que en Angola «mambo» quiere decir «cosa»? Pues vengan conmigo, que les quiero enseñar una cosa…",
     "voz": "voz/s4/s4_l01.mp3"
    },
    {
     "id": "s4_p11",
     "quien": "PAPO VEGA",
     "texto": "¿Angola? ¡Pero si nuestro viaje era por Latinoamérica!",
     "voz": "voz/s4/s4_p11.mp3"
    },
    {
     "id": "s4_m05",
     "quien": "DON MAMBERTO",
     "texto": "¡Eso digo yo! ¿Nos hemos salido del mapa?",
     "voz": "voz/s4/s4_m05.mp3"
    },
    {
     "id": "s4_l02",
     "quien": "LUENA",
     "texto": "Del mapa, no: del origen. Soy Luena, de Luanda… y les he guardado la sorpresa para el final. ¡Al avión, que nos vamos a Angola!",
     "voz": "voz/s4/s4_l02.mp3"
    }
   ],
   "mus": {
    "src": "mus/s4_salsa_fondo.mp3",
    "vol": 0.28,
    "bucle": true
   }
  },
  {
   "id": "s4_v2",
   "nombre": "Viaje · a Angola",
   "img": "img/s4/mapa_atlantico.webp",
   "desc": "La carta del Atlántico: el avión cruza de Nueva York a Luanda, el camino de vuelta de los barcos.",
   "amb": [
    {
     "src": "sfx/s1/avion_cabina.mp3",
     "vol": 0.28
    }
   ],
   "mapa": {
    "desde": "Nueva York",
    "hasta": "Angola · Luanda",
    "sub": "Angola, Luanda: aquí nació la kizomba",
    "dur": 11,
    "vehiculo": "el avión",
    "ruta": [
     [
      0.205,
      0.142
     ],
     [
      0.29,
      0.22
     ],
     [
      0.39,
      0.31
     ],
     [
      0.49,
      0.4
     ],
     [
      0.59,
      0.49
     ],
     [
      0.69,
      0.58
     ],
     [
      0.78,
      0.66
     ],
     [
      0.858,
      0.73
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
    "musA": {
     "src": "mus/s4_kizomba_fondo.mp3",
     "vol": 0.7
    }
   },
   "mus": {
    "src": "mus/s4_salsa_fondo.mp3",
    "vol": 0.6
   }
  },
  {
   "id": "s4_k1",
   "nombre": "Angola",
   "img": "img/s4/k_avion.webp",
   "desc": "Luanda desde la ventanilla del avión: la bahía y la isla al atardecer.",
   "amb": [
    {
     "src": "sfx/s1/avion_cabina.mp3",
     "vol": 0.12
    }
   ],
   "lineas": [
    {
     "id": "s4_n05",
     "quien": "NARR",
     "texto": "¡Angola! En la costa oeste de África, donde se habla portugués. De esta tierra salieron muchísimos de los africanos que llevaron sus ritmos a América… y aquí, en los años ochenta, nació la kizomba.",
     "voz": "voz/s4/s4_n05.mp3"
    }
   ],
   "mus": {
    "src": "mus/s4_kizomba_fondo.mp3",
    "vol": 0.42,
    "bucle": true
   }
  },
  {
   "id": "s4_k2",
   "nombre": "Luena nos recibe",
   "img": "img/s4/k_origen.webp",
   "desc": "Un baile de semba antiguo en Luanda (sin Luena: ella va en PNG).",
   "amb": [],
   "personajes": [
    "LUENA"
   ],
   "lineas": [
    {
     "id": "s4_l03",
     "quien": "LUENA",
     "texto": "Kizomba quiere decir «fiesta» en kimbundu, una lengua de Angola. Su abuelo es nuestro semba, ¡la misma palabra que dio nombre a la samba brasileña!, mezclado con el zouk de las Antillas francesas. Por eso hoy sus capitales en Europa son Lisboa y París… y en las salas de baile va de la mano de la salsa y la bachata: son los famosos sociales SBK, salsa, bachata y kizomba. Por eso hoy te lo cuento… y por eso este capítulo se llama AfroLatin, y no solo Latin.",
     "voz": "voz/s4/s4_l03.mp3"
    }
   ],
   "mus": {
    "src": "mus/s4_kizomba_fondo.mp3",
    "vol": 0.36,
    "bucle": true
   }
  },
  {
   "id": "s4_k3",
   "nombre": "Reconocerla · el dembow",
   "img": "img/s4/k_terraza.webp",
   "desc": "La terraza vacía con los instrumentos; el reguetón, golpeado.",
   "amb": [],
   "personajes": [
    "LUENA"
   ],
   "lineas": [
    {
     "id": "s4_l04",
     "quien": "LUENA",
     "texto": "Primera pista: ¿les suena este ritmo?",
     "voz": "voz/s4/s4_l04.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "kiz_reggaeton",
    "nom": "El dembow del reguetón: golpeado",
    "img": "img/s4/inst_k_caja.webp",
    "loop": "loops/s4/kiz_reggaeton.mp3",
    "color": "#7A7A8C",
    "bpm": 90,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s4/kiz_reggaeton.mp3",
     "img/s4/inst_k_caja.webp"
    ]
   }
  },
  {
   "id": "s4_k3b",
   "nombre": "Reconocerla · el dembow acariciado",
   "img": "img/s4/k_terraza.webp",
   "desc": "La terraza; el mismo dibujo, acariciado.",
   "amb": [],
   "personajes": [
    "LUENA"
   ],
   "lineas": [
    {
     "id": "s4_l04b",
     "quien": "LUENA",
     "texto": "Es el mismo dibujo que el del reguetón, el dembow… solo que aquí va acariciado, en vez de golpeado.",
     "voz": "voz/s4/s4_l04b.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "kiz_ritmo",
    "nom": "La kizomba: el mismo dembow, acariciado",
    "img": "img/s4/inst_k_caja.webp",
    "loop": "loops/s4/kiz_ritmo.mp3",
    "color": "#E07A5F",
    "bpm": 85,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s4/kiz_ritmo.mp3",
     "img/s4/inst_k_caja.webp"
    ]
   }
  },
  {
   "id": "s4_k4",
   "nombre": "Reconocerla · el bajo y el colchón",
   "img": "img/s4/k_terraza.webp",
   "desc": "La terraza; el bajo de sintetizador y el colchón de teclado.",
   "amb": [],
   "personajes": [
    "LUENA"
   ],
   "lineas": [
    {
     "id": "s4_l05",
     "quien": "LUENA",
     "texto": "Va lento, sin ninguna prisa, y suena programado: caja de ritmos, un bajo de sintetizador muy profundo… y un colchón de teclado.",
     "voz": "voz/s4/s4_l05.mp3"
    }
   ],
   "inter": [
    {
     "tipo": "instrumento",
     "id": "kiz_bajo",
     "nom": "El bajo de sintetizador",
     "img": "img/s4/inst_k_sinte.webp",
     "loop": "loops/s4/kiz_bajo.mp3",
     "color": "#C2304A",
     "bpm": 85,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s4/kiz_bajo.mp3",
      "img/s4/inst_k_sinte.webp"
     ],
     "nivK": 0.6
    },
    {
     "tipo": "instrumento",
     "id": "kiz_pad",
     "nom": "El colchón de teclado",
     "img": "img/s4/inst_k_teclado.webp",
     "loop": "loops/s4/kiz_pad.mp3",
     "color": "#6B5B95",
     "bpm": 85,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s4/kiz_pad.mp3",
      "img/s4/inst_k_teclado.webp"
     ]
    }
   ]
  },
  {
   "id": "s4_k5",
   "nombre": "Reconocerla · el baile",
   "img": "img/s4/k_baile.webp",
   "desc": "Una pareja bailando kizomba, muy juntos, con delicadeza.",
   "amb": [],
   "personajes": [
    "LUENA"
   ],
   "lineas": [
    {
     "id": "s4_l06",
     "quien": "LUENA",
     "texto": "Y lo que la hace especial es el baile: en pareja, muy juntos, de los tobillos a las mejillas, casi frente con frente. Es un baile de conexión: se baila escuchando a la otra persona.",
     "voz": "voz/s4/s4_l06.mp3"
    }
   ],
   "mus": {
    "src": "mus/s4_kizomba_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s4_k6",
   "nombre": "Reconocerla · las letras",
   "img": "img/s4/k_terraza.webp",
   "desc": "La terraza.",
   "amb": [],
   "personajes": [
    "LUENA"
   ],
   "lineas": [
    {
     "id": "s4_l07",
     "quien": "LUENA",
     "texto": "Y las letras no van de cualquier cosa: hablan de amor, de la tierra, de la vida… con mucha más profundidad.",
     "voz": "voz/s4/s4_l07.mp3"
    },
    {
     "id": "s4_l08",
     "quien": "LUENA",
     "texto": "Por eso es la joya escondida de este viaje: si te gusta el reguetón… esto te va a encantar.",
     "voz": "voz/s4/s4_l08.mp3"
    }
   ],
   "mus": {
    "src": "mus/s4_kizomba_fondo.mp3",
    "vol": 0.3,
    "bucle": true
   }
  },
  {
   "id": "s4_k7",
   "nombre": "Mezclador · arma tu kizomba",
   "img": "img/s4/k_terraza.webp",
   "desc": "La terraza con los instrumentos.",
   "amb": [],
   "personajes": [
    "LUENA"
   ],
   "lineas": [
    {
     "id": "s4_l09",
     "quien": "LUENA",
     "texto": "Ahora tú: arma tu kizomba… ritmo, bajo, teclados…",
     "voz": "voz/s4/s4_l09.mp3"
    }
   ],
   "inter": {
    "tipo": "mezclador",
    "tit": "Arma tu kizomba",
    "bpm": 85,
    "compases": 4,
    "pistas": [
     {
      "id": "kiz_ritmo",
      "nom": "Ritmo",
      "img": "img/s4/inst_k_caja.webp",
      "loop": "loops/s4/kiz_ritmo.mp3",
      "color": "#E07A5F",
      "celda": [
       1,
       2,
       2,
       1
      ]
     },
     {
      "id": "kiz_bajo",
      "nom": "Bajo de sintetizador",
      "img": "img/s4/inst_k_sinte.webp",
      "loop": "loops/s4/kiz_bajo.mp3",
      "color": "#C2304A",
      "celda": [
       3,
       2,
       2,
       1
      ],
      "nivK": 0.6
     },
     {
      "id": "kiz_pad",
      "nom": "Colchón de teclado",
      "img": "img/s4/inst_k_teclado.webp",
      "loop": "loops/s4/kiz_pad.mp3",
      "color": "#6B5B95",
      "celda": [
       1,
       1,
       4,
       1
      ]
     }
    ],
    "inicial": [],
    "recursos": [
     "loops/s4/kiz_ritmo.mp3",
     "loops/s4/kiz_bajo.mp3",
     "loops/s4/kiz_pad.mp3"
    ],
    "inventario": [
     4,
     2
    ]
   }
  },
  {
   "id": "s4_k8",
   "nombre": "Concierto de kizomba",
   "img": "img/s4/k_terraza.webp",
   "desc": "Los músicos llegan a la terraza (sin instrumentos: ya están colocados) y la canción libre, en la hora azul.",
   "amb": [],
   "personajes": [
    "LUENA"
   ],
   "lineas": [
    {
     "id": "s4_l10",
     "quien": "LUENA",
     "texto": "Y ahora… a escuchar, despacito.",
     "voz": "voz/s4/s4_l10.mp3",
     "var": "RECURSO_LLEGAN",
     "fijo": true
    },
    {
     "id": "s4_l11",
     "quien": "LUENA",
     "texto": "Siente el trance…",
     "voz": "voz/s4/s4_l11.mp3",
     "var": "RECURSO_LLEGAN",
     "fijo": true
    }
   ],
   "inter": {
    "nota": "Suno «Afro Latin · Kizomba · Luena v1», versión B (152,5 s), montada con herramientas/concierto_kizomba.py (de c.4 al final).",
    "cancion": "mus/s4_kizomba_concierto.mp3",
    "bpm": 89.0,
    "t0rejilla": 0,
    "planos": [
     {
      "t": 0,
      "img": "img/s4/vc_kz_16_hoja_banda.webp",
      "txt": "hoja banda"
     },
     {
      "t": 10.707,
      "img": "img/s4/vc_kz_42_luena_canta_pp.webp",
      "txt": "luena canta pp"
     },
     {
      "t": 15.426,
      "img": "img/s4/vc_kz_19_caja_ritmos_cc.webp",
      "txt": "caja ritmos cc"
     },
     {
      "t": 20.819,
      "img": "img/s4/vc_kz_20_dembow_bajo_cc.webp",
      "txt": "dembow bajo cc"
     },
     {
      "t": 25.538,
      "img": "img/s4/vc_kz_28_angola_mar.webp",
      "txt": "angola mar"
     },
     {
      "t": 32.28,
      "img": "img/s4/vc_kz_22_tobillo_mejilla.webp",
      "txt": "tobillo mejilla"
     },
     {
      "t": 36.324,
      "img": "img/s4/vc_kz_37_baile_conexion.webp",
      "txt": "baile conexion"
     },
     {
      "t": 41.718,
      "img": "img/s4/vc_kz_23_fiesta_kimbundu.webp",
      "txt": "fiesta kimbundu"
     },
     {
      "t": 47.111,
      "img": "img/s4/vc_kz_24_se_para_el_mundo.webp",
      "txt": "se para el mundo"
     },
     {
      "t": 52.504,
      "img": "img/s4/vc_kz_43_luena_canta_pp.webp",
      "txt": "luena canta pp"
     },
     {
      "t": 57.898,
      "img": "img/s4/vc_kz_30_teclado_colchon_cc.webp",
      "txt": "teclado colchon cc"
     },
     {
      "t": 63.291,
      "img": "img/s4/vc_kz_21_pies_pareja.webp",
      "txt": "pies pareja"
     },
     {
      "t": 68.684,
      "img": "img/s4/vc_kz_34_luces_bahia.webp",
      "txt": "luces bahia"
     },
     {
      "t": 74.077,
      "img": "img/s4/vc_kz_25_habla_corazon_cc.webp",
      "txt": "habla corazon cc"
     },
     {
      "t": 79.471,
      "img": "img/s4/vc_kz_26_bajo_abraza_cc.webp",
      "txt": "bajo abraza cc"
     },
     {
      "t": 84.864,
      "img": "img/s4/vc_kz_27_semba_zouk.webp",
      "txt": "semba zouk"
     },
     {
      "t": 90.257,
      "img": "img/s4/vc_kz_44_luena_canta_pp.webp",
      "txt": "luena canta pp"
     },
     {
      "t": 95.65,
      "img": "img/s4/vc_kz_29_estribillo_parejas.webp",
      "txt": "estribillo parejas"
     },
     {
      "t": 101.044,
      "img": "img/s4/vc_kz_35_pies_bailando.webp",
      "txt": "pies bailando"
     },
     {
      "t": 107.785,
      "img": "img/s4/vc_kz_31_orquesta_estribillo.webp",
      "txt": "orquesta estribillo"
     },
     {
      "t": 111.83,
      "img": "img/s4/vc_kz_24_se_para_el_mundo.webp",
      "txt": "se para el mundo"
     },
     {
      "t": 117.223,
      "img": "img/s4/vc_kz_32_luena_final.webp",
      "txt": "luena final"
     },
     {
      "t": 123.965,
      "img": "img/s4/vc_kz_36_luanda_noche.webp",
      "txt": "luanda noche"
     },
     {
      "t": 132.055,
      "img": "img/s4/vc_kz_31_orquesta_estribillo.webp",
      "txt": "orquesta estribillo"
     }
    ],
    "letra": [
     {
      "t": 10.32,
      "txt": "Despacito, en Luanda, cae la tarde junto al mar,",
      "t1": 14.3,
      "w": [
       [
        10.35,
        "Despacito,"
       ],
       [
        10.9,
        "en"
       ],
       [
        11.24,
        "Luanda,"
       ],
       [
        11.75,
        "cae"
       ],
       [
        12.25,
        "la"
       ],
       [
        12.42,
        "tarde"
       ],
       [
        12.61,
        "junto"
       ],
       [
        13.11,
        "al"
       ],
       [
        13.57,
        "mar,"
       ]
      ]
     },
     {
      "t": 15.28,
      "txt": "un ritmo que te suena, pero no lo sabes nombrar.",
      "t1": 19.76,
      "w": [
       [
        15.31,
        "un"
       ],
       [
        15.47,
        "ritmo"
       ],
       [
        15.99,
        "que"
       ],
       [
        16.3,
        "te"
       ],
       [
        16.42,
        "suena,"
       ],
       [
        17.16,
        "pero"
       ],
       [
        17.37,
        "no"
       ],
       [
        17.69,
        "lo"
       ],
       [
        17.89,
        "sabes"
       ],
       [
        18.27,
        "nombrar."
       ]
      ]
     },
     {
      "t": 20.47,
      "txt": "Es el dembow escondido, más despacio y más profundo,",
      "t1": 25.14,
      "w": [
       [
        20.5,
        "Es"
       ],
       [
        20.62,
        "el"
       ],
       [
        20.74,
        "dembow"
       ],
       [
        20.96,
        "escondido,"
       ],
       [
        22.09,
        "más"
       ],
       [
        22.51,
        "despacio"
       ],
       [
        23.35,
        "y"
       ],
       [
        23.57,
        "más"
       ],
       [
        23.83,
        "profundo,"
       ]
      ]
     },
     {
      "t": 25.38,
      "txt": "el latido de mi tierra que ya baila todo el mundo.",
      "t1": 30.4,
      "w": [
       [
        25.41,
        "el"
       ],
       [
        25.53,
        "latido"
       ],
       [
        25.95,
        "de"
       ],
       [
        26.25,
        "mi"
       ],
       [
        26.52,
        "tierra"
       ],
       [
        27.29,
        "que"
       ],
       [
        27.45,
        "ya"
       ],
       [
        27.91,
        "baila"
       ],
       [
        28.55,
        "todo"
       ],
       [
        28.95,
        "el"
       ],
       [
        29.27,
        "mundo."
       ]
      ]
     },
     {
      "t": 30.45,
      "txt": ""
     },
     {
      "t": 31.9,
      "txt": "Kizomba, kizomba, del tobillo a la mejilla,",
      "t1": 35.98,
      "w": [
       [
        31.93,
        "Kizomba,"
       ],
       [
        32.79,
        "kizomba,"
       ],
       [
        33.63,
        "del"
       ],
       [
        33.84,
        "tobillo"
       ],
       [
        34.21,
        "a"
       ],
       [
        34.41,
        "la"
       ],
       [
        34.47,
        "mejilla,"
       ]
      ]
     },
     {
      "t": 36.0,
      "txt": "frente con frente, la vida se baila sencilla.",
      "t1": 41.38,
      "w": [
       [
        36.03,
        "frente"
       ],
       [
        37.84,
        "con"
       ],
       [
        38.18,
        "frente,"
       ],
       [
        38.7,
        "la"
       ],
       [
        38.97,
        "vida"
       ],
       [
        39.23,
        "se"
       ],
       [
        39.49,
        "baila"
       ],
       [
        39.93,
        "sencilla."
       ]
      ]
     },
     {
      "t": 41.41,
      "txt": "Kizomba, kizomba, «fiesta» en kimbundu,",
      "t1": 46.4,
      "w": [
       [
        41.44,
        "Kizomba,"
       ],
       [
        42.69,
        "kizomba,"
       ],
       [
        43.94,
        "«fiesta»"
       ],
       [
        44.79,
        "en"
       ],
       [
        45.08,
        "kimbundu,"
       ]
      ]
     },
     {
      "t": 46.98,
      "txt": "escucha a tu pareja… y se para el mundo.",
      "t1": 51.86,
      "w": [
       [
        47.01,
        "escucha"
       ],
       [
        47.36,
        "a"
       ],
       [
        47.63,
        "tu"
       ],
       [
        47.81,
        "pareja…"
       ],
       [
        49.01,
        "y"
       ],
       [
        49.99,
        "se"
       ],
       [
        50.3,
        "para"
       ],
       [
        50.61,
        "el"
       ],
       [
        50.85,
        "mundo."
       ]
      ]
     },
     {
      "t": 51.91,
      "txt": ""
     },
     {
      "t": 73.62,
      "txt": "No hace falta decir nada, se habla con el corazón,",
      "t1": 78.44,
      "w": [
       [
        73.65,
        "No"
       ],
       [
        73.85,
        "hace"
       ],
       [
        74.09,
        "falta"
       ],
       [
        74.49,
        "decir"
       ],
       [
        75.05,
        "nada,"
       ],
       [
        76.27,
        "se"
       ],
       [
        76.41,
        "habla"
       ],
       [
        76.82,
        "con"
       ],
       [
        77.11,
        "el"
       ],
       [
        77.33,
        "corazón,"
       ]
      ]
     },
     {
      "t": 79.3,
      "txt": "un bajo que te abraza y una historia en la canción.",
      "t1": 83.64,
      "w": [
       [
        79.33,
        "un"
       ],
       [
        79.55,
        "bajo"
       ],
       [
        79.81,
        "que"
       ],
       [
        80.23,
        "te"
       ],
       [
        80.35,
        "abraza"
       ],
       [
        81.39,
        "y"
       ],
       [
        81.51,
        "una"
       ],
       [
        81.73,
        "historia"
       ],
       [
        82.39,
        "en"
       ],
       [
        82.67,
        "la"
       ],
       [
        82.93,
        "canción."
       ]
      ]
     },
     {
      "t": 83.66,
      "txt": "Del semba y del zouk nació, de Angola para el mar,",
      "t1": 89.34,
      "w": [
       [
        83.69,
        "Del"
       ],
       [
        84.57,
        "semba"
       ],
       [
        85.21,
        "y"
       ],
       [
        85.37,
        "del"
       ],
       [
        85.79,
        "zouk"
       ],
       [
        86.21,
        "nació,"
       ],
       [
        87.05,
        "de"
       ],
       [
        87.47,
        "Angola"
       ],
       [
        87.91,
        "para"
       ],
       [
        88.35,
        "el"
       ],
       [
        88.57,
        "mar,"
       ]
      ]
     },
     {
      "t": 90.09,
      "txt": "la joya escondida que te va a enamorar.",
      "t1": 94.27,
      "w": [
       [
        90.12,
        "la"
       ],
       [
        90.27,
        "joya"
       ],
       [
        90.75,
        "escondida"
       ],
       [
        91.91,
        "que"
       ],
       [
        92.78,
        "te"
       ],
       [
        92.95,
        "va"
       ],
       [
        93.31,
        "a"
       ],
       [
        93.67,
        "enamorar."
       ]
      ]
     },
     {
      "t": 95.35,
      "txt": "Kizomba, kizomba, del tobillo a la mejilla,",
      "t1": 100.38,
      "w": [
       [
        95.38,
        "Kizomba,"
       ],
       [
        96.2,
        "kizomba,"
       ],
       [
        97.28,
        "del"
       ],
       [
        97.65,
        "tobillo"
       ],
       [
        98.73,
        "a"
       ],
       [
        98.89,
        "la"
       ],
       [
        99.01,
        "mejilla,"
       ]
      ]
     },
     {
      "t": 100.8,
      "txt": "frente con frente, la vida se baila sencilla.",
      "t1": 106.14,
      "w": [
       [
        100.83,
        "frente"
       ],
       [
        102.56,
        "con"
       ],
       [
        103.01,
        "frente,"
       ],
       [
        103.41,
        "la"
       ],
       [
        103.67,
        "vida"
       ],
       [
        103.95,
        "se"
       ],
       [
        104.21,
        "baila"
       ],
       [
        104.61,
        "sencilla."
       ]
      ]
     },
     {
      "t": 107.28,
      "txt": "Kizomba, kizomba, «fiesta» en kimbundu,",
      "t1": 111.12,
      "w": [
       [
        107.31,
        "Kizomba,"
       ],
       [
        108.28,
        "kizomba,"
       ],
       [
        109.05,
        "«fiesta»"
       ],
       [
        109.48,
        "en"
       ],
       [
        109.83,
        "kimbundu,"
       ]
      ]
     },
     {
      "t": 111.7,
      "txt": "escucha a tu pareja… y se para el mundo.",
      "t1": 116.54,
      "w": [
       [
        111.73,
        "escucha"
       ],
       [
        112.04,
        "a"
       ],
       [
        112.35,
        "tu"
       ],
       [
        112.62,
        "pareja…"
       ],
       [
        114.35,
        "y"
       ],
       [
        114.63,
        "se"
       ],
       [
        115.0,
        "para"
       ],
       [
        115.31,
        "el"
       ],
       [
        115.55,
        "mundo."
       ]
      ]
     },
     {
      "t": 116.59,
      "txt": ""
     }
    ],
    "fichas": [],
    "botones": {
     "desde": 107.28,
     "seguir": "Siguiente",
     "ejemplos": [
      {
       "src": "videos/kizomba-1.mp4",
       "tit": "Kizomba · ejemplo 1"
      },
      {
       "src": "videos/kizomba-2.mp4",
       "tit": "Kizomba · ejemplo 2"
      }
     ]
    },
    "tipo": "concierto",
    "recursos": [
     "mus/s4_kizomba_concierto.mp3",
     "videos/kizomba-1.mp4",
     "videos/kizomba-2.mp4"
    ],
    "fundidoPlanos": 0.18,
    "kb": false
   },
   "var": {
    "RECURSO_LLEGAN": "img/s4/k_musicos_llegan.webp"
   }
  },
  {
   "id": "s4_r1",
   "nombre": "Repaso del sabor 4",
   "img": "img/s4/r_resumen.webp",
   "desc": "Papo, Don Mamberto y Luena juntos (sus PNG) entre las fichas, sobre el plató y la terraza desenfocados.",
   "amb": [],
   "personajes": [
    "PAPO VEGA",
    "DON MAMBERTO",
    "LUENA"
   ],
   "lineas": [
    {
     "id": "s4_rp",
     "quien": "PAPO VEGA",
     "texto": "¡Hoy nos fuimos a Nueva York! La salsa: una mezcla con mucha calle, la clave debajo de todo… y los percusionistas cambiando de instrumento entre la estrofa y el estribillo.",
     "voz": "voz/s4/s4_rp.mp3"
    },
    {
     "id": "s4_rm",
     "quien": "DON MAMBERTO",
     "texto": "Y el mambo: los vientos, el flow… ¡y el grito!",
     "voz": "voz/s4/s4_rm.mp3",
     "espera": 2.2
    },
    {
     "id": "s4_rl",
     "quien": "LUENA",
     "texto": "Y la kizomba: el dembow, despacito, un bajo profundo… y un baile de conexión.",
     "voz": "voz/s4/s4_rl.mp3"
    },
    {
     "id": "s4_n06",
     "quien": "NARR",
     "texto": "Y aquí termina nuestro viaje: de A Coruña a Latinoamérica… y de vuelta a África, donde empezó todo.",
     "voz": "voz/s4/s4_n06.mp3"
    }
   ]
  }
 ]
});

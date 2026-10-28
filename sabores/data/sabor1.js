/* AFRO LATIN · Sabor 1 (intro + cumbia + merengue + resumen). Lo genera herramientas/sabor1_datos.py: NO editar a mano. */
BLUES.dia(1, {
 "titulo": "Cumbia y merengue",
 "lugar": "Colombia · República Dominicana",
 "planos": [
  {
   "id": "s1_i1",
   "nombre": "Intro · el puerto",
   "titulo": true,
   "img": "img/s1/v2_maleta.webp",
   "desc": "Un puerto al amanecer: maletas, un mapa antiguo sobre una mesa y el título 4 SABORES.",
   "amb": [],
   "lineas": [
    {
     "id": "s1_001",
     "quien": "NARR",
     "texto": "¡Hoy nos vamos de viaje! Cuatro sesiones, cuatro sabores… ¡y nueve maneras de bailar!",
     "voz": "voz/s1/s1_001.mp3"
    }
   ],
   "mus": {
    "src": "mus/s1_intro.mp3",
    "vol": 0.55,
    "bucle": true
   }
  },
  {
   "id": "s1_i2",
   "nombre": "Intro · el Atlántico",
   "img": "img/s1/mapa_atlantico.webp",
   "desc": "Mapa del Atlántico (estilo del icono): Europa, África y América, con las rutas de los barcos.",
   "amb": [
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.3
    }
   ],
   "hechos": [],
   "lineas": [
    {
     "id": "s1_002",
     "quien": "NARR",
     "texto": "Entre los siglos dieciséis y diecinueve, los barcos europeos llevaron a América a millones de africanos esclavizados.",
     "voz": "voz/s1/s1_002.mp3"
    },
    {
     "id": "s1_003",
     "quien": "NARR",
     "texto": "Fue una de las mayores injusticias de la historia. Pero aquellas personas se llevaron algo que nadie les pudo quitar: su música.",
     "voz": "voz/s1/s1_003.mp3",
     "rehacer": true
    }
   ],
   "mus": {
    "src": "mus/s1_intro.mp3",
    "vol": 0.5,
    "bucle": true
   }
  },
  {
   "id": "s1_i3",
   "nombre": "Intro · tres mundos",
   "img": "img/s1/v2_mesa.webp",
   "desc": "Tres láminas que se juntan: tambores africanos · guitarra y coplas de España y Portugal · flautas de caña y maracas indígenas.",
   "amb": [],
   "lineas": [
    {
     "id": "s1_004",
     "quien": "NARR",
     "texto": "En el Caribe y en toda Sudamérica se encontraron tres mundos: los tambores y los ritmos de África; las guitarras, el idioma y las canciones de España y Portugal; y las flautas y las maracas de los pueblos indígenas.",
     "voz": "voz/s1/s1_004.mp3",
     "rehacer": true
    },
    {
     "id": "s1_005",
     "quien": "NARR",
     "texto": "¡Y de esa mezcla nació casi toda la música latina que bailamos hoy!",
     "voz": "voz/s1/s1_005.mp3"
    }
   ],
   "mus": {
    "src": "mus/s1_intro.mp3",
    "vol": 0.55,
    "bucle": true
   }
  },
  {
   "id": "s1_i4",
   "nombre": "Intro · el ritmo manda",
   "img": "img/s1/v2_ritmo.webp",
   "desc": "Tres percusiones sobre una mesa de madera: guacharaca, tambor y un teclado; huellas de pies de baile en la arena.",
   "lineas": [
    {
     "id": "s1_006",
     "quien": "NARR",
     "texto": "En las músicas que veremos, el ritmo manda: cada instrumento repite un dibujo corto, y todos encajan como las piezas de un puzle.",
     "voz": "voz/s1/s1_006.mp3",
     "rehacer": true
    },
    {
     "id": "s1_007",
     "quien": "NARR",
     "texto": "Por eso, para reconocer un género latino no basta con la melodía: hay que escuchar sus patrones. ¡Esa será nuestra brújula!",
     "voz": "voz/s1/s1_007.mp3"
    }
   ],
   "mus": {
    "src": "mus/s1_intro.mp3",
    "vol": 0.5,
    "bucle": true
   },
   "amb": []
  },
  {
   "id": "s1_i4b",
   "nombre": "Intro · pistas, no leyes",
   "img": "img/s1/i4c_aeropuerto.webp",
   "desc": "Una pista de baile en la arena, gente bailando cada uno a su manera; colores, libertad.",
   "amb": [
    {
     "src": "sfx/s1/calle_gente_es.mp3",
     "vol": 0.08
    }
   ],
   "lineas": [
    {
     "id": "s1_n01",
     "quien": "NARR",
     "texto": "Pero ojo: lo que vamos a aprender son pistas, no leyes. En la música latina se siente y se vive la libertad: los géneros se mezclan, se parecen, se saltan las reglas… y a veces se combinan a propósito.",
     "voz": "voz/s1/s1_n01.mp3"
    },
    {
     "id": "s1_n02",
     "quien": "NARR",
     "texto": "Así que olvídate del orden y del control: vamos justo al mundo contrario.",
     "voz": "voz/s1/s1_n02.mp3"
    }
   ],
   "mus": {
    "src": "mus/s1_intro.mp3",
    "vol": 0.55,
    "bucle": true
   }
  },
  {
   "id": "s1_i4c",
   "nombre": "Intro · Schoenberg, gruñón",
   "img": "img/s1/i4c_aeropuerto.webp",
   "desc": "Guiño: Schoenberg con el aspecto de ANTÓNICO (Atonalidad: chepa, mirada de sospecha, traje impecable, todo ordenado), muy cuadriculado y gruñón: rechaza la fiesta con cara de asco, regla y partitura en la mano. 2.ª imagen tras el narrador: sigue de brazos cruzados y gruñón, pero con la mirada perdida, pensativo (muy sutil: se le ha sembrado la duda).",
   "personajes": [
    "SCHOENBERG"
   ],
   "espera": 1.0,
   "lineas": [
    {
     "id": "s1_sch1",
     "quien": "SCHOENBERG",
     "texto": "¿Sin reglas? ¿Sin orden? Inadmisible. Esto no va conmigo.",
     "voz": "voz/s1/s1_sch1.mp3"
    },
    {
     "id": "s1_n03",
     "quien": "NARR",
     "texto": "Venga, maestro… igual le vendría bien soltarse un poco.",
     "voz": "voz/s1/s1_n03.mp3"
    }
   ],
   "gesto": {
    "tras": "s1_n03",
    "quien": "SCHOENBERG",
    "img": "img/s1/i4c_aeropuerto.webp",
    "espera": 1.8,
    "nota": "sin palabras: contesta con la cara, pensativo (se le ha sembrado la duda)"
   },
   "mus": {
    "src": "mus/s1_intro.mp3",
    "vol": 0.45,
    "bucle": true
   },
   "amb": [
    {
     "src": "sfx/s1/calle_gente_es.mp3",
     "vol": 0.1
    }
   ]
  },
  {
   "id": "s1_i5",
   "nombre": "Intro · las paradas",
   "img": "img/s1/mapa_atlantico.webp",
   "desc": "Mapa con las paradas encendidas por sabores (Colombia, R. Dominicana, Cuba, Brasil, Nueva York, Angola) y nueve siluetas a contraluz: un maestro de ceremonias por cada género.",
   "lineas": [
    {
     "id": "s1_008",
     "quien": "NARR",
     "texto": "Cada género tendrá su maestro de ceremonias: nos enseñará su tierra, sus instrumentos… ¡y al final subirá con su banda al escenario!",
     "voz": "voz/s1/s1_008.mp3",
     "rehacer": true
    }
   ],
   "mus": {
    "src": "mus/s1_intro.mp3",
    "vol": 0.5,
    "bucle": true
   }
  },
  {
   "id": "s1_i6",
   "nombre": "Intro · dentro del avión",
   "img": "img/s1/v2_avion.webp",
   "desc": "Dentro del avión, antes del primer viaje: asientos, ventanilla con el mar. EASTER EGG (1.er cameo, Iago 13:05): Schoenberg/Antónico muy escondido al fondo, mirando con sospecha por encima de un periódico.",
   "amb": [
    {
     "src": "sfx/s1/avion_cabina.mp3",
     "vol": 0.3
    }
   ],
   "lineas": [
    {
     "id": "s1_009",
     "quien": "NARR",
     "texto": "Primera parada: la costa caribe de Colombia. ¡Abróchate el cinturón!",
     "voz": "voz/s1/s1_009.mp3"
    }
   ],
   "mus": {
    "src": "mus/s1_intro.mp3",
    "vol": 0.45,
    "bucle": true
   }
  },
  {
   "id": "s1_c0",
   "nombre": "Viaje · a Colombia",
   "img": "img/s1/mapa_atlantico.webp",
   "desc": "Mapa cenital del Atlántico y el Caribe: la avioneta vuela de la península a la costa caribe de Colombia.",
   "amb": [
    {
     "src": "sfx/s1/avion_cabina.mp3",
     "vol": 0.28
    }
   ],
   "mapa": {
    "ruta": [
     [
      0.724,
      0.125
     ],
     [
      0.6625,
      0.2077
     ],
     [
      0.5988,
      0.2822
     ],
     [
      0.5329,
      0.3483
     ],
     [
      0.4646,
      0.4063
     ],
     [
      0.3942,
      0.456
     ],
     [
      0.3215,
      0.4975
     ],
     [
      0.2465,
      0.5306
     ],
     [
      0.1693,
      0.5556
     ]
    ],
    "desde": "A Coruña",
    "hasta": "Colombia · Cartagena de Indias",
    "sub": "Colombia, costa caribe: aquí nació la cumbia",
    "dur": 8,
    "vehiculo": "el avión",
    "encuadre": [
     1,
     0.5,
     0.5
    ],
    "icono": "img/s1/avion_cenital.webp",
    "cenital": true,
    "anchoIcono": 6.2,
    "proporcionIcono": 0.9,
    "zoom": false,
    "musA": {
     "src": "mus/s1_viaje_cumbia.mp3",
     "vol": 0.7
    },
    "sfx": [
     {
      "src": "sfx/s1/avion_pasa.mp3",
      "vol": 0.55,
      "t": 0
     }
    ]
   },
   "mus": {
    "src": "mus/s1_intro.mp3",
    "vol": 0.6,
    "bucle": true
   }
  },
  {
   "id": "s1_c1",
   "nombre": "Cartagena de Indias",
   "img": "img/s1/v2_puerto.webp",
   "desc": "Cartagena de Indias: murallas de piedra, balcones de colores, palenqueras con fruta en la cabeza.",
   "amb": [
    {
     "src": "sfx/s1/calle_gente_es.mp3",
     "vol": 0.35
    },
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.15
    }
   ],
   "lineas": [
    {
     "id": "s1_010",
     "quien": "NARR",
     "texto": "¡Colombia! En su costa caribe, Cartagena de Indias: murallas de piedra, balcones de colores y olor a fruta y a mar.",
     "voz": "voz/s1/s1_010.mp3",
     "rehacer": true,
     "var": "RECURSO_CALLE",
     "fijo": true
    },
    {
     "id": "s1_011",
     "quien": "NARR",
     "texto": "Por este puerto entraron, hace siglos, miles de africanos esclavizados… y con ellos, sus tambores.",
     "voz": "voz/s1/s1_011.mp3"
    }
   ],
   "var": {
    "RECURSO_CALLE": "img/s1/v2_calle.webp"
   },
   "mus": {
    "src": "mus/s1_cumbia_fondo.mp3",
    "vol": 0.45,
    "bucle": true
   }
  },
  {
   "id": "s1_c2",
   "nombre": "Montes de María",
   "img": "img/s1/v2_gaiteros.webp",
   "desc": "Montes de María: gaiteros con sus flautas largas de caña, a la sombra.",
   "amb": [
    {
     "src": "sfx/s1/grillos_noche.mp3",
     "vol": 0.25
    }
   ],
   "lineas": [
    {
     "id": "s1_012",
     "quien": "NARR",
     "texto": "Tierra adentro, los indígenas ya tocaban flautas de caña: las gaitas.",
     "voz": "voz/s1/s1_012.mp3"
    }
   ],
   "mus": {
    "src": "mus/s1_gaitas.mp3",
    "vol": 0.55,
    "bucle": true
   }
  },
  {
   "id": "s1_c3",
   "nombre": "La playa al atardecer",
   "img": "img/s1/c3_playa.webp",
   "desc": "Playa al atardecer: rueda de baile con velas encendidas, palmeras.",
   "amb": [
    {
     "src": "sfx/s1/playa_gaviotas.mp3",
     "vol": 0.2
    },
    {
     "src": "sfx/s1/gente_fiesta.mp3",
     "vol": 0.1
    }
   ],
   "lineas": [
    {
     "id": "s1_013",
     "quien": "NARR",
     "texto": "Y cuando cae la tarde, junto al mar… ¡todo se mezcla!",
     "voz": "voz/s1/s1_013.mp3"
    }
   ],
   "mus": {
    "src": "mus/s1_cumbia_fondo.mp3",
    "vol": 0.45,
    "bucle": true
   }
  },
  {
   "id": "s1_c4",
   "nombre": "Doña Cande nos recibe",
   "img": "img/s1/v2_calle_tarde.webp",
   "desc": "Doña Cande en su chiringuito de la playa: pollera colorá, flores en el pelo, sonrisa pícara.",
   "amb": [
    {
     "src": "sfx/s1/playa_gaviotas.mp3",
     "vol": 0.14
    },
    {
     "src": "sfx/s1/gente_fiesta.mp3",
     "vol": 0.12
    }
   ],
   "personajes": [
    "CANDE"
   ],
   "lineas": [
    {
     "id": "s1_014",
     "quien": "CANDE",
     "texto": "¡Ajá! ¿Y ustedes de dónde salieron, mijos? ¡Bienvenidos a Colombia, a la costa! Yo soy Candelaria… pero aquí todo el mundo me dice Doña Cande.",
     "voz": "voz/s1/s1_014.mp3"
    },
    {
     "id": "s1_015",
     "quien": "CANDE",
     "texto": "Aquí la vida va despacio, con calor y con brisa: patacón, arroz con coco, se habla cantando… y se baila descalzo en la arena.",
     "voz": "voz/s1/s1_015.mp3",
     "var": "RECURSO_MERCADO",
     "fijo": true
    },
    {
     "id": "s1_016",
     "quien": "CANDE",
     "texto": "Pero lo más bacano de esta tierra es su música. ¡Eche, vengan, que les enseño mi tarima!",
     "voz": "voz/s1/s1_016.mp3"
    }
   ],
   "var": {
    "RECURSO_MERCADO": "img/s1/v2_mercado.webp"
   },
   "mus": {
    "src": "mus/s1_cumbia_fondo.mp3",
    "vol": 0.4,
    "bucle": true
   }
  },
  {
   "id": "s1_c5",
   "nombre": "La tarima",
   "img": "img/s1/v2_camino.webp",
   "desc": "La tarima vacía en la playa: guacharaca, maracas, tambor, teclado, bajo, acordeón, guitarra y trompetas colocados en sillas, sin músicos.",
   "amb": [
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.16
    }
   ],
   "personajes": [
    "CANDE"
   ],
   "hechos": [
    "s1_rueda",
    "s1_viaja"
   ],
   "lineas": [
    {
     "id": "s1_017",
     "quien": "CANDE",
     "texto": "La cumbia nació aquí, en la costa de Colombia, cuando se juntaron tres mundos: el tambor de África, la gaita de los indígenas y el canto y los vestidos de España.",
     "voz": "voz/s1/s1_017.mp3"
    },
    {
     "id": "s1_018",
     "quien": "CANDE",
     "texto": "Al principio era un baile en rueda, y las mujeres llevaban velas encendidas en la mano. Hoy la tocamos con acordeón y bajo eléctrico… ¡y se baila de México a Argentina!",
     "voz": "voz/s1/s1_018.mp3",
     "var": "RECURSO_RUEDA",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_RUEDA": "img/s1/v2_rueda.webp"
   },
   "mus": {
    "src": "mus/s1_gaitas.mp3",
    "vol": 0.5,
    "bucle": true
   }
  },
  {
   "id": "s1_c6",
   "nombre": "Reconocerla · el tempo",
   "img": "img/s1/v2_tarima.webp",
   "desc": "La tarima; Doña Cande señala las maracas.",
   "amb": [
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "CANDE"
   ],
   "lineas": [
    {
     "id": "s1_019",
     "quien": "CANDE",
     "texto": "¿Cómo se reconoce una cumbia? Primero: ¡la cumbia se camina, no se corre! Escuchen las maracas: tranquilitas, sin parar.",
     "voz": "voz/s1/s1_019.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "maracas",
    "nom": "Maracas",
    "img": "img/s1/inst_maracas.webp",
    "loop": "loops/s1/cumbia_maracas_2c.mp3",
    "color": "#E2A33F",
    "bpm": 90,
    "compases": 2,
    "vueltas": 0.5,
    "espera": 0.6,
    "patron": "X.xxX.xxX.xxX.xx",
    "recursos": [
     "loops/s1/cumbia_maracas_2c.mp3",
     "img/s1/inst_maracas.webp"
    ]
   }
  },
  {
   "id": "s1_c7",
   "nombre": "Reconocerla · la guacharaca",
   "img": "img/s1/v2_tarima.webp",
   "desc": "Primer plano de la guacharaca.",
   "amb": [
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "CANDE"
   ],
   "lineas": [
    {
     "id": "s1_020",
     "quien": "CANDE",
     "texto": "Segundo, y lo más importante: la guacharaca. Una larga y dos cortas, en cada tiempo: ¡chá-chiqui, chá-chiqui!",
     "voz": "voz/s1/s1_020.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "guacharaca",
    "nom": "Guacharaca",
    "img": "img/s1/inst_guacharaca.webp",
    "loop": "loops/s1/cumbia_guacharaca_2c.mp3",
    "color": "#1F9AA0",
    "bpm": 90,
    "compases": 2,
    "vueltas": 1,
    "espera": 0.6,
    "patron": "X.xxX.xxX.xxX.xx",
    "recursos": [
     "loops/s1/cumbia_guacharaca_2c.mp3",
     "img/s1/inst_guacharaca.webp"
    ]
   }
  },
  {
   "id": "s1_c8",
   "nombre": "Reconocerla · el contratiempo",
   "img": "img/s1/v2_tarima.webp",
   "desc": "Primer plano del piano (vertical, humilde, de la tarima).",
   "amb": [
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "CANDE"
   ],
   "lineas": [
    {
     "id": "s1_021",
     "quien": "CANDE",
     "texto": "Tercero: el contratiempo. Lo marca un instrumento de acordes, aquí, por ejemplo, el piano: nunca cae en el tiempo, siempre justo después.",
     "voz": "voz/s1/s1_021.mp3",
     "rehacer": true
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "contratiempo",
    "nom": "Piano (contratiempo)",
    "img": "img/s1/inst_contratiempo.webp",
    "loop": "loops/s1/cumbia_contratiempo_2c.mp3",
    "color": "#C9603F",
    "bpm": 90,
    "compases": 2,
    "vueltas": 2,
    "espera": 0.6,
    "patron": "..X...X...X...X.",
    "recursos": [
     "loops/s1/cumbia_contratiempo_2c.mp3",
     "img/s1/inst_contratiempo.webp"
    ]
   }
  },
  {
   "id": "s1_c9",
   "nombre": "Reconocerla · tambor y bajo",
   "img": "img/s1/v2_tarima.webp",
   "desc": "El tambor y el bajo.",
   "amb": [
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "CANDE"
   ],
   "lineas": [
    {
     "id": "s1_022",
     "quien": "CANDE",
     "texto": "Abajo, el tambor y el bajo caminan juntos, redondo y sin afán.",
     "voz": "voz/s1/s1_022.mp3"
    }
   ],
   "inter": [
    {
     "tipo": "instrumento",
     "id": "tambor",
     "nom": "Tambor",
     "img": "img/s1/inst_tambor.webp",
     "loop": "loops/s1/cumbia_tambor_2c.mp3",
     "color": "#8A5A3C",
     "bpm": 90,
     "compases": 2,
     "vueltas": 0.5,
     "espera": 0.6,
     "patron": "X.x.X.x.X.x.X.x.",
     "recursos": [
      "loops/s1/cumbia_tambor_2c.mp3",
      "img/s1/inst_tambor.webp"
     ]
    },
    {
     "tipo": "instrumento",
     "id": "bajo",
     "nom": "Tambor + bajo",
     "img": "img/s1/inst_bajo_h.webp",
     "loop": "loops/s1/cumbia_tambor_bajo_2c.mp3",
     "color": "#3E7D4F",
     "bpm": 90,
     "compases": 2,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s1/cumbia_tambor_bajo_2c.mp3",
      "img/s1/inst_bajo.webp"
     ]
    }
   ]
  },
  {
   "id": "s1_c10",
   "nombre": "Reconocerla · el acordeón",
   "img": "img/s1/v2_tarima.webp",
   "desc": "El acordeón sobre una silla.",
   "amb": [
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "CANDE"
   ],
   "lineas": [
    {
     "id": "s1_023",
     "quien": "CANDE",
     "texto": "Y por encima, el que canta sin palabras: ¡el acordeón!",
     "voz": "voz/s1/s1_023.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "acordeon",
    "nom": "Acordeón",
    "img": "img/s1/inst_acordeon.webp",
    "loop": "loops/s1/cumbia_acordeon_2c.mp3",
    "color": "#B04A6A",
    "bpm": 90,
    "compases": 2,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s1/cumbia_acordeon_2c.mp3",
     "img/s1/inst_acordeon.webp"
    ]
   }
  },
  {
   "id": "s1_c11",
   "nombre": "Mezclador de cumbia",
   "img": "img/s1/v2_tarima.webp",
   "desc": "La tarima.",
   "amb": [
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.15
    }
   ],
   "personajes": [
    "CANDE"
   ],
   "lineas": [
    {
     "id": "s1_024",
     "quien": "CANDE",
     "texto": "¡Ahora te toca a ti, mijo! Prende y apaga los instrumentos y arma tu propia cumbia.",
     "voz": "voz/s1/s1_024.mp3"
    }
   ],
   "inter": {
    "tipo": "mezclador",
    "tit": "Arma tu cumbia",
    "bpm": 90,
    "compases": 4,
    "pistas": [
     {
      "id": "maracas",
      "nom": "Maracas",
      "img": "img/s1/inst_maracas.webp",
      "loop": "loops/s1/cumbia_maracas.mp3",
      "color": "#E2A33F",
      "patron": "X.xxX.xxX.xxX.xx",
      "celda": [
       7,
       3,
       2,
       1
      ]
     },
     {
      "id": "guacharaca",
      "nom": "Guacharaca",
      "img": "img/s1/inst_guacharaca_h.webp",
      "loop": "loops/s1/cumbia_guacharaca.mp3",
      "color": "#1F9AA0",
      "patron": "X.xxX.xxX.xxX.xx",
      "celda": [
       5,
       3,
       2,
       1
      ]
     },
     {
      "id": "contratiempo",
      "nom": "Piano (contratiempo)",
      "img": "img/s1/inst_contratiempo.webp",
      "loop": "loops/s1/cumbia_contratiempo.mp3",
      "color": "#C9603F",
      "patron": "..X...X...X...X.",
      "celda": [
       1,
       3,
       4,
       1
      ]
     },
     {
      "id": "tambor",
      "nom": "Tambor",
      "img": "img/s1/inst_tambor.webp",
      "loop": "loops/s1/cumbia_tambor.mp3",
      "color": "#8A5A3C",
      "patron": "X.x.X.x.X.x.X.x.",
      "nivK": 0.6,
      "celda": [
       1,
       1,
       2,
       2
      ]
     },
     {
      "id": "bajo",
      "nom": "Bajo",
      "img": "img/s1/inst_bajo_h.webp",
      "loop": "loops/s1/cumbia_bajo.mp3",
      "color": "#3E7D4F",
      "nivK": 0.6,
      "celda": [
       5,
       1,
       4,
       2
      ]
     },
     {
      "id": "acordeon",
      "nom": "Acordeón",
      "img": "img/s1/inst_acordeon.webp",
      "loop": "loops/s1/cumbia_acordeon.mp3",
      "color": "#B04A6A",
      "celda": [
       3,
       1,
       2,
       2
      ]
     }
    ],
    "inicial": [],
    "recursos": [
     "loops/s1/cumbia_maracas.mp3",
     "loops/s1/cumbia_guacharaca.mp3",
     "loops/s1/cumbia_contratiempo.mp3",
     "loops/s1/cumbia_tambor.mp3",
     "loops/s1/cumbia_bajo.mp3",
     "loops/s1/cumbia_acordeon.mp3"
    ],
    "inventario": [
     8,
     3
    ]
   }
  },
  {
   "id": "s1_c12",
   "nombre": "Concierto de Doña Cande",
   "img": "img/s1/v2_tarima.webp",
   "desc": "La banda de Doña Cande sube a la tarima.",
   "amb": [
    {
     "src": "sfx/s1/gente_fiesta.mp3",
     "vol": 0.25
    }
   ],
   "personajes": [
    "CANDE"
   ],
   "lineas": [
    {
     "id": "s1_025",
     "quien": "CANDE",
     "texto": "¿Y si llamo a los muchachos? ¡Vengan pa' acá, que tenemos visita!",
     "voz": "voz/s1/s1_025.mp3"
    }
   ],
   "inter": {
    "nota": "Suno B1 (9c4e2034…) montada con herramientas/concierto_cumbia_b1.py (realces de bajo, percusión, teclado +6 dB y metales; acordeón de Splice cuadrado por medio compás, solo en su verso, ≈15 dB por debajo; cortes de compases enteros; fundido de entrada). Letra situada por pausas y sílabas.",
    "cancion": "mus/s1_cumbia_concierto.mp3",
    "bpm": 90.22,
    "t0rejilla": 0,
    "planos": [
     {
      "t": 0,
      "img": "img/s1/vc_c_00_musicos_llegan.webp",
      "txt": "musicos llegan"
     },
     {
      "t": 2.58,
      "img": "img/s1/vc_c_27_cande_canta.webp",
      "txt": "cande canta"
     },
     {
      "t": 8.566,
      "img": "img/s1/vc_c_28_pies_cumbia.webp",
      "txt": "pies cumbia"
     },
     {
      "t": 13.886,
      "img": "img/s1/vc_c_29_maracas_musico.webp",
      "txt": "maracas musico"
     },
     {
      "t": 19.206,
      "img": "img/s1/vc_c_30_tambor_y_bajo_se_miran.webp",
      "txt": "tambor y bajo se miran"
     },
     {
      "t": 23.196,
      "img": "img/s1/vc_c_32_guacharaquero_rie.webp",
      "txt": "guacharaquero rie"
     },
     {
      "t": 31.177,
      "img": "img/s1/vc_c_33_cande_y_coristas.webp",
      "txt": "cande y coristas"
     },
     {
      "t": 35.832,
      "img": "img/s1/vc_c_49_gente_llega.webp",
      "txt": "gente llega"
     },
     {
      "t": 39.822,
      "img": "img/s1/vc_c_48_coristas.webp",
      "txt": "coristas"
     },
     {
      "t": 43.813,
      "img": "img/s1/vc_c_36_manos_teclista.webp",
      "txt": "manos teclista"
     },
     {
      "t": 50.463,
      "img": "img/s1/vc_c_37_cande_senala_teclista.webp",
      "txt": "cande senala teclista"
     },
     {
      "t": 53.788,
      "img": "img/s1/vc_c_38_acordeon_encima.webp",
      "txt": "acordeon encima"
     },
     {
      "t": 59.774,
      "img": "img/s1/vc_c_39_metales.webp",
      "txt": "metales"
     },
     {
      "t": 65.094,
      "img": "img/s1/vc_c_46_banderines_luces.webp",
      "txt": "banderines luces"
     },
     {
      "t": 69.084,
      "img": "img/s1/vc_c_47_baterista.webp",
      "txt": "baterista"
     },
     {
      "t": 71.079,
      "img": "img/s1/vc_c_41_velas_mar_banda_fondo.webp",
      "txt": "velas mar banda fondo"
     },
     {
      "t": 74.405,
      "img": "img/s1/vc_c_35_solo_medio_teclista.webp",
      "txt": "solo medio teclista"
     },
     {
      "t": 75.735,
      "img": "img/s1/vc_c_42_cande_brazos_abiertos.webp",
      "txt": "cande brazos abiertos"
     },
     {
      "t": 78.395,
      "img": "img/s1/vc_c_19_maracas.webp",
      "txt": "maracas"
     },
     {
      "t": 81.055,
      "img": "img/s1/vc_c_27_cande_canta.webp",
      "txt": "cande canta"
     },
     {
      "t": 85.045,
      "img": "img/s1/vc_c_44_aplausos.webp",
      "txt": "aplausos"
     }
    ],
    "letra": [
     {
      "t": 2.45,
      "txt": "Escucha bien, mijito, que te voy a enseñar:",
      "t1": 7.28,
      "w": [
       [
        2.6,
        "Escucha"
       ],
       [
        3.39,
        "bien,"
       ],
       [
        3.73,
        "mijito,"
       ],
       [
        5.19,
        "que"
       ],
       [
        5.69,
        "te"
       ],
       [
        5.87,
        "voy"
       ],
       [
        6.11,
        "a"
       ],
       [
        6.29,
        "enseñar:"
       ]
      ]
     },
     {
      "t": 7.8,
      "txt": "la cumbia no se corre, la cumbia es pa' caminar.",
      "t1": 12.56,
      "w": [
       [
        7.95,
        "la"
       ],
       [
        8.58,
        "cumbia"
       ],
       [
        8.92,
        "no"
       ],
       [
        9.01,
        "se"
       ],
       [
        9.27,
        "corre,"
       ],
       [
        10.45,
        "la"
       ],
       [
        10.71,
        "cumbia"
       ],
       [
        11.03,
        "es"
       ],
       [
        11.38,
        "pa'"
       ],
       [
        11.56,
        "caminar."
       ]
      ]
     },
     {
      "t": 12.9,
      "txt": "Las maracas sin parar van marcando el compás,",
      "t1": 18.12,
      "w": [
       [
        13.05,
        "Las"
       ],
       [
        13.59,
        "maracas"
       ],
       [
        14.07,
        "sin"
       ],
       [
        14.45,
        "parar"
       ],
       [
        15.77,
        "van"
       ],
       [
        16.23,
        "marcando"
       ],
       [
        16.83,
        "el"
       ],
       [
        17.08,
        "compás,"
       ]
      ]
     },
     {
      "t": 18.14,
      "txt": "y el tambor con el bajo caminan por detrás.",
      "t1": 22.82,
      "w": [
       [
        18.29,
        "y"
       ],
       [
        18.71,
        "el"
       ],
       [
        19.04,
        "tambor"
       ],
       [
        19.54,
        "con"
       ],
       [
        19.69,
        "el"
       ],
       [
        19.89,
        "bajo"
       ],
       [
        21.35,
        "caminan"
       ],
       [
        21.76,
        "por"
       ],
       [
        22.25,
        "detrás."
       ]
      ]
     },
     {
      "t": 22.84,
      "txt": "Una larga y dos cortas, ¡chá-chiqui, chá-chiqui!",
      "t1": 25.28,
      "w": [
       [
        22.99,
        "Una"
       ],
       [
        23.13,
        "larga"
       ],
       [
        23.57,
        "y"
       ],
       [
        23.71,
        "dos"
       ],
       [
        23.88,
        "cortas,"
       ],
       [
        24.38,
        "¡chá-chiqui,"
       ],
       [
        24.94,
        "chá-chiqui!"
       ]
      ]
     },
     {
      "t": 25.3,
      "txt": "La guacharaca lo dice, lo dice siempre así.",
      "t1": 28.06,
      "w": [
       [
        25.45,
        "La"
       ],
       [
        25.55,
        "guacharaca"
       ],
       [
        26.22,
        "lo"
       ],
       [
        26.53,
        "dice,"
       ],
       [
        27.03,
        "lo"
       ],
       [
        27.15,
        "dice"
       ],
       [
        27.41,
        "siempre"
       ],
       [
        27.73,
        "así."
       ]
      ]
     },
     {
      "t": 28.08,
      "txt": "Una larga y dos cortas, ¡chá-chiqui, chá-chiqui!",
      "t1": 30.62,
      "w": [
       [
        28.23,
        "Una"
       ],
       [
        28.43,
        "larga"
       ],
       [
        28.89,
        "y"
       ],
       [
        29.05,
        "dos"
       ],
       [
        29.21,
        "cortas,"
       ],
       [
        29.7,
        "¡chá-chiqui,"
       ],
       [
        30.25,
        "chá-chiqui!"
       ]
      ]
     },
     {
      "t": 30.64,
      "txt": "Esa es la cumbia, mijo, la cumbia de aquí.",
      "t1": 33.8,
      "w": [
       [
        30.79,
        "Esa"
       ],
       [
        31.19,
        "es"
       ],
       [
        31.27,
        "la"
       ],
       [
        31.5,
        "cumbia,"
       ],
       [
        31.93,
        "mijo,"
       ],
       [
        32.41,
        "la"
       ],
       [
        32.49,
        "cumbia"
       ],
       [
        32.97,
        "de"
       ],
       [
        33.15,
        "aquí."
       ]
      ]
     },
     {
      "t": 33.85,
      "txt": ""
     },
     {
      "t": 42.16,
      "txt": "Oye bien el teclado: nunca cae en el tiempo,",
      "t1": 47.48,
      "w": [
       [
        42.31,
        "Oye"
       ],
       [
        43.09,
        "bien"
       ],
       [
        43.49,
        "el"
       ],
       [
        43.68,
        "teclado:"
       ],
       [
        44.95,
        "nunca"
       ],
       [
        45.64,
        "cae"
       ],
       [
        46.15,
        "en"
       ],
       [
        46.31,
        "el"
       ],
       [
        46.55,
        "tiempo,"
       ]
      ]
     },
     {
      "t": 47.68,
      "txt": "siempre justo después: eso es contratiempo.",
      "t1": 52.19,
      "w": [
       [
        47.83,
        "siempre"
       ],
       [
        48.31,
        "justo"
       ],
       [
        48.84,
        "después:"
       ],
       [
        50.5,
        "eso"
       ],
       [
        51.03,
        "es"
       ],
       [
        51.37,
        "contratiempo."
       ]
      ]
     },
     {
      "t": 52.21,
      "txt": "El acordeón costeño le canta por encima,",
      "t1": 57.88,
      "w": [
       [
        52.36,
        "El"
       ],
       [
        53.45,
        "acordeón"
       ],
       [
        54.14,
        "costeño"
       ],
       [
        55.21,
        "le"
       ],
       [
        56.14,
        "canta"
       ],
       [
        56.39,
        "por"
       ],
       [
        56.85,
        "encima,"
       ]
      ]
     },
     {
      "t": 58.0,
      "txt": "y suenan los metales cuando la fiesta se anima.",
      "t1": 62.77,
      "w": [
       [
        58.15,
        "y"
       ],
       [
        58.62,
        "suenan"
       ],
       [
        59.05,
        "los"
       ],
       [
        59.47,
        "metales"
       ],
       [
        60.62,
        "cuando"
       ],
       [
        61.01,
        "la"
       ],
       [
        61.43,
        "fiesta"
       ],
       [
        61.94,
        "se"
       ],
       [
        62.46,
        "anima."
       ]
      ]
     },
     {
      "t": 62.79,
      "txt": "Una larga y dos cortas, ¡chá-chiqui, chá-chiqui!",
      "t1": 65.16,
      "w": [
       [
        62.94,
        "Una"
       ],
       [
        63.01,
        "larga"
       ],
       [
        63.47,
        "y"
       ],
       [
        63.61,
        "dos"
       ],
       [
        63.8,
        "cortas,"
       ],
       [
        64.3,
        "¡chá-chiqui,"
       ],
       [
        64.95,
        "chá-chiqui!"
       ]
      ]
     },
     {
      "t": 65.18,
      "txt": "La guacharaca lo dice, lo dice siempre así.",
      "t1": 67.98,
      "w": [
       [
        65.33,
        "La"
       ],
       [
        65.43,
        "guacharaca"
       ],
       [
        66.14,
        "lo"
       ],
       [
        66.43,
        "dice,"
       ],
       [
        66.91,
        "lo"
       ],
       [
        67.07,
        "dice"
       ],
       [
        67.29,
        "siempre"
       ],
       [
        67.63,
        "así."
       ]
      ]
     },
     {
      "t": 68.0,
      "txt": "Una larga y dos cortas, ¡chá-chiqui, chá-chiqui!",
      "t1": 70.5,
      "w": [
       [
        68.15,
        "Una"
       ],
       [
        68.35,
        "larga"
       ],
       [
        68.79,
        "y"
       ],
       [
        68.95,
        "dos"
       ],
       [
        69.11,
        "cortas,"
       ],
       [
        69.65,
        "¡chá-chiqui,"
       ],
       [
        70.11,
        "chá-chiqui!"
       ]
      ]
     },
     {
      "t": 70.52,
      "txt": "Esa es la cumbia, mijo, la cumbia de aquí.",
      "t1": 73.64,
      "w": [
       [
        70.67,
        "Esa"
       ],
       [
        71.05,
        "es"
       ],
       [
        71.17,
        "la"
       ],
       [
        71.42,
        "cumbia,"
       ],
       [
        71.83,
        "mijo,"
       ],
       [
        72.25,
        "la"
       ],
       [
        72.39,
        "cumbia"
       ],
       [
        72.75,
        "de"
       ],
       [
        72.99,
        "aquí."
       ]
      ]
     },
     {
      "t": 73.69,
      "txt": ""
     },
     {
      "t": 74.66,
      "txt": "¡Eche! ¡Eso es cumbia, mijo!",
      "t1": 82.4,
      "w": [
       [
        74.81,
        "¡Eche!"
       ],
       [
        79.61,
        "¡Eso"
       ],
       [
        80.31,
        "es"
       ],
       [
        80.55,
        "cumbia,"
       ],
       [
        81.55,
        "mijo!"
       ]
      ]
     },
     {
      "t": 82.45,
      "txt": ""
     }
    ],
    "fichas": [],
    "botones": {
     "desde": 65.11,
     "seguir": "Siguiente parada",
     "ejemplos": [
      {
       "src": "videos/cumbia-1.mp4",
       "tit": "Cumbia · ejemplo 1"
      },
      {
       "src": "videos/cumbia-2.mp4",
       "tit": "Cumbia · ejemplo 2"
      }
     ]
    },
    "tipo": "concierto",
    "recursos": [
     "mus/s1_cumbia_concierto.mp3",
     "videos/cumbia-1.mp4",
     "videos/cumbia-2.mp4"
    ],
    "fundidoPlanos": 0.18,
    "kb": false
   },
   "despues": [
    {
     "id": "s1_026",
     "quien": "CANDE",
     "texto": "¡Eso es cumbia, mijos! Y ahora, esperen, que llamo a un amigo…",
     "voz": "voz/s1/s1_026.mp3",
     "rehacer": true
    }
   ]
  },
  {
   "id": "s1_c14",
   "nombre": "Llamada a Yunior",
   "img": "img/s1/c14_cande_telefono.webp",
   "desc": "Doña Cande al teléfono en su chiringuito; al otro lado, Yunior en Santiago de los Caballeros (pantalla partida).",
   "amb": [
    {
     "src": "sfx/s1/orilla.mp3",
     "vol": 0.15
    }
   ],
   "personajes": [
    "CANDE",
    "YUNIOR"
   ],
   "inter": {
    "tipo": "llamada",
    "de": "CANDE",
    "a": "YUNIOR",
    "imgDe": "img/s1/llamada_cande.webp",
    "imgA": "img/s1/llamada_yunior.webp",
    "tono": "sfx/s1/telefono.mp3",
    "recursos": [
     "sfx/s1/telefono.mp3",
     "sfx/s1/colgar.mp3"
    ],
    "lineas": [
     {
      "id": "s1_t01",
      "quien": "YUNIOR",
      "texto": "¡Klk, Doña Cande! ¿Qué lo que?",
      "voz": "voz/s1/s1_t01.mp3"
     },
     {
      "id": "s1_t02",
      "quien": "CANDE",
      "texto": "Yunior, mijo, te mando unos muchachos que ya saben de cumbia. Enséñales el merengue, ¿oíste?",
      "voz": "voz/s1/s1_t02.mp3"
     },
     {
      "id": "s1_t03",
      "quien": "YUNIOR",
      "texto": "¡Diache! ¡Mándamelos, que aquí los espero con la güira fina!",
      "voz": "voz/s1/s1_t03.mp3"
     },
     {
      "id": "s1_t04",
      "quien": "CANDE",
      "texto": "¡Listo! Ya tienen los billetes: ¡pa' la República Dominicana!",
      "voz": "voz/s1/s1_t04.mp3"
     }
    ]
   },
   "mus": {
    "src": "mus/s1_cumbia_fondo.mp3",
    "vol": 0.35,
    "bucle": true
   },
   "espera": 0
  },
  {
   "id": "s1_m0",
   "nombre": "Viaje · a la República Dominicana",
   "img": "img/s1/mapa_caribe_v3.webp",
   "desc": "El mismo mapa del Caribe: un barco cruza el mar Caribe de Cartagena de Indias a la República Dominicana (isla La Española).",
   "amb": [
    {
     "src": "sfx/s1/barco_mar.mp3",
     "vol": 0.35
    }
   ],
   "mapa": {
    "ruta": [
     [
      0.3743,
      0.7697
     ],
     [
      0.4361,
      0.6959
     ],
     [
      0.4901,
      0.6177
     ],
     [
      0.5363,
      0.5351
     ],
     [
      0.5747,
      0.4479
     ],
     [
      0.6054,
      0.3564
     ],
     [
      0.6283,
      0.2604
     ]
    ],
    "desde": "Colombia",
    "hasta": "República Dominicana · Santiago de los Caballeros",
    "sub": "República Dominicana, el Cibao: aquí nació el merengue",
    "dur": 7,
    "vehiculo": "el barco",
    "encuadre": [
     1,
     0.5,
     0.5
    ],
    "zoom": false,
    "musA": {
     "src": "mus/s1_viaje_merengue.mp3",
     "vol": 0.7
    },
    "icono": "img/s1/barco_cenital.webp",
    "cenital": true,
    "anchoIcono": 2.3,
    "proporcionIcono": 3.286
   },
   "mus": {
    "src": "mus/s1_viaje_cumbia.mp3",
    "vol": 0.6
   }
  },
  {
   "id": "s1_m1",
   "nombre": "Santo Domingo",
   "img": "img/s1/m1_zona_colonial.webp",
   "desc": "Llegada en barco al puerto de Santo Domingo, con la Zona Colonial al fondo: casas de colores, la catedral de piedra, motoconchos. EASTER EGG: Schoenberg (aspecto de Antónico) medio escondido tras un poste del muelle, mirando con sospecha por encima de un periódico.",
   "amb": [
    {
     "src": "sfx/s1/calle_gente_es.mp3",
     "vol": 0.3
    }
   ],
   "lineas": [
    {
     "id": "s1_m01",
     "quien": "NARR",
     "texto": "¡República Dominicana! Comparte isla con Haití, y su capital, Santo Domingo, guarda la catedral más antigua de América.",
     "voz": "voz/s1/s1_m01.mp3"
    }
   ],
   "mus": {
    "src": "mus/s1_merengue_fondo.mp3",
    "vol": 0.42,
    "bucle": true
   }
  },
  {
   "id": "s1_m1b",
   "nombre": "El Cibao",
   "img": "img/s1/m1b_cibao.webp",
   "desc": "El valle del Cibao: campos verdes de tabaco, palmas, un colmado de pueblo pintado de colores.",
   "amb": [
    {
     "src": "sfx/s1/pajaros_cibao.mp3",
     "vol": 0.3
    }
   ],
   "lineas": [
    {
     "id": "s1_m02",
     "quien": "NARR",
     "texto": "Pero el merengue nació tierra adentro, en el Cibao: un valle verde de tabaco, colmados y fiestas en la calle.",
     "voz": "voz/s1/s1_m02.mp3"
    }
   ],
   "mus": {
    "src": "mus/s1_merengue_fondo.mp3",
    "vol": 0.42,
    "bucle": true
   }
  },
  {
   "id": "s1_m2",
   "nombre": "Yunior nos recibe",
   "img": "img/s1/m2b_calle.webp",
   "desc": "Yunior en la puerta de un colmado de Santiago de los Caballeros: gorra, camisa abierta de colores, sonrisa de pillo; señores jugando al dominó.",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.2
    }
   ],
   "personajes": [
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s1_m03",
     "quien": "YUNIOR",
     "texto": "¡Klk, mi gente! ¿Así que Doña Cande los mandó? ¡Bienvenidos a la República Dominicana! Yo soy Yunior… pero aquí to' el mundo me dice el Tíguere.",
     "voz": "voz/s1/s1_m03.mp3"
    },
    {
     "id": "s1_m04",
     "quien": "YUNIOR",
     "texto": "Aquí se vive en la calle: dominó en el colmado, un cafecito a cualquier hora… ¡y la música a to' volumen! Vengan, que les enseño mi enramada.",
     "voz": "voz/s1/s1_m04.mp3",
     "var": "RECURSO_DOMINO",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_DOMINO": "img/s1/m2c_domino.webp"
   },
   "mus": {
    "src": "mus/s1_merengue_fondo.mp3",
    "vol": 0.38,
    "bucle": true
   }
  },
  {
   "id": "s1_m3",
   "nombre": "La enramada",
   "img": "img/s1/m3_enramada.webp",
   "desc": "La enramada vacía (techo de palma, guirnaldas): güira, tambora, conga, bajo, piano, saxos y trompeta preparados; un acordeón viejo colgado en la pared.",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s1_m05",
     "quien": "YUNIOR",
     "texto": "El merengue nació aquí, en el campo del Cibao, con acordeón, tambora y güira. Después se fue pa' la ciudad y se vistió de orquesta: piano, saxos y trompetas.",
     "voz": "voz/s1/s1_m05.mp3",
     "var": "RECURSO_ORIGEN",
     "fijo": true
    },
    {
     "id": "s1_m06",
     "quien": "YUNIOR",
     "texto": "¡Y hoy es el baile nacional de la República Dominicana! Hasta la UNESCO lo declaró patrimonio de la humanidad.",
     "voz": "voz/s1/s1_m06.mp3",
     "var": "RECURSO_NACIONAL",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_ORIGEN": "img/s1/m2e_origen.webp",
    "RECURSO_NACIONAL": "img/s1/m2g_nacional.webp"
   },
   "mus": {
    "src": "mus/s1_merengue_fondo.mp3",
    "vol": 0.38,
    "bucle": true
   }
  },
  {
   "id": "s1_m4",
   "nombre": "Reconocerlo · la cumbia a toda pastilla",
   "img": "img/s1/m3_enramada.webp",
   "desc": "Yunior con la güira en la mano.",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.06
    }
   ],
   "personajes": [
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s1_m07",
     "quien": "YUNIOR",
     "texto": "¿Quieren un truco fácil? ¿Doña Cande les enseñó la cumbia? Pues el merengue es la cumbia… ¡pero a toda pastilla! Escuchen: primero la guacharaca de la cumbia, y después mi güira. El mismo dibujo, una larga y dos cortas… ¡pero corriendo!",
     "voz": "voz/s1/s1_m07.mp3"
    }
   ],
   "inter": [
    {
     "tipo": "instrumento",
     "id": "guacharaca",
     "nom": "Cumbia · guacharaca",
     "img": "img/s1/inst_guacharaca.webp",
     "loop": "loops/s1/cumbia_guacharaca_2c.mp3",
     "color": "#1F9AA0",
     "bpm": 90,
     "compases": 2,
     "vueltas": 0.5,
     "espera": 0.6,
     "patron": "X.xxX.xxX.xxX.xx",
     "recursos": [
      "loops/s1/cumbia_guacharaca_2c.mp3",
      "img/s1/inst_guacharaca.webp"
     ]
    },
    {
     "tipo": "instrumento",
     "id": "guira",
     "nom": "Güira",
     "img": "img/s1/inst_m_guira.webp",
     "loop": "loops/s1/merengue_guira.mp3",
     "color": "#1F9AA0",
     "bpm": 140,
     "compases": 4,
     "vueltas": 0.5,
     "espera": 0.6,
     "patron": "X.xxX.xxX.xxX.xx",
     "recursos": [
      "loops/s1/merengue_guira.mp3",
      "img/s1/inst_m_guira.webp"
     ]
    }
   ]
  },
  {
   "id": "s1_m5",
   "nombre": "Reconocerlo · la tambora",
   "img": "img/s1/m3_enramada.webp",
   "desc": "Primer plano de la tambora (mano y palito).",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.06
    }
   ],
   "personajes": [
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s1_m08",
     "quien": "YUNIOR",
     "texto": "Y el corazón del merengue: la tambora. Se toca con la mano por un lado y con un palito por el otro: ¡pa-cu-tá, pa-cu-tá!",
     "voz": "voz/s1/s1_m08.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "tambora",
    "nom": "Tambora",
    "img": "img/s1/inst_m_tambora.webp",
    "loop": "loops/s1/merengue_tambora.mp3",
    "color": "#C9603F",
    "bpm": 140,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s1/merengue_tambora.mp3",
     "img/s1/inst_m_tambora.webp"
    ],
    "nivK": 0.6
   }
  },
  {
   "id": "s1_m6",
   "nombre": "Reconocerlo · bajo y piano",
   "img": "img/s1/m3_enramada.webp",
   "desc": "El bajo y el piano.",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.06
    }
   ],
   "personajes": [
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s1_m09",
     "quien": "YUNIOR",
     "texto": "Abajo, el bajo va saltando… y encima, por ejemplo, el piano le pone los acordes.",
     "voz": "voz/s1/s1_m09.mp3"
    }
   ],
   "inter": [
    {
     "tipo": "instrumento",
     "id": "bajo",
     "nom": "Bajo",
     "img": "img/s1/inst_m_bajo_h.webp",
     "loop": "loops/s1/merengue_bajo.mp3",
     "color": "#3E7D4F",
     "bpm": 140,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s1/merengue_bajo.mp3",
      "img/s1/inst_m_bajo.webp"
     ]
    },
    {
     "tipo": "instrumento",
     "id": "piano",
     "nom": "Bajo + piano",
     "img": "img/s1/inst_m_piano.webp",
     "loop": "loops/s1/merengue_bajo_piano.mp3",
     "color": "#5B6FA8",
     "bpm": 140,
     "compases": 4,
     "vueltas": 1,
     "espera": 0.6,
     "recursos": [
      "loops/s1/merengue_bajo_piano.mp3",
      "img/s1/inst_m_piano.webp"
     ]
    }
   ]
  },
  {
   "id": "s1_m7",
   "nombre": "Reconocerlo · el jaleo",
   "img": "img/s1/m3_enramada.webp",
   "desc": "Los saxos.",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.06
    }
   ],
   "personajes": [
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s1_m10",
     "quien": "YUNIOR",
     "texto": "Y cuando la cosa se calienta, llega el jaleo: ¡los saxos se ponen a correr como locos!",
     "voz": "voz/s1/s1_m10.mp3"
    }
   ],
   "inter": {
    "tipo": "instrumento",
    "id": "saxos",
    "nom": "Saxo",
    "img": "img/s1/inst_m_saxos.webp",
    "loop": "loops/s1/merengue_saxos.mp3",
    "color": "#D9B44A",
    "bpm": 140,
    "compases": 4,
    "vueltas": 1,
    "espera": 0.6,
    "recursos": [
     "loops/s1/merengue_saxos.mp3",
     "img/s1/inst_m_saxos.webp"
    ]
   }
  },
  {
   "id": "s1_m8",
   "nombre": "Mezclador de merengue",
   "img": "img/s1/m3_enramada.webp",
   "desc": "La enramada.",
   "amb": [
    {
     "src": "sfx/s1/calle_fiesta.mp3",
     "vol": 0.1
    }
   ],
   "personajes": [
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s1_m11",
     "quien": "YUNIOR",
     "texto": "¡Dale, tíguere! Prende y apaga los instrumentos y arma tu merengue.",
     "voz": "voz/s1/s1_m11.mp3"
    }
   ],
   "inter": {
    "tipo": "mezclador",
    "tit": "Arma tu merengue",
    "bpm": 140,
    "compases": 4,
    "pistas": [
     {
      "id": "guira",
      "nom": "Güira",
      "img": "img/s1/inst_m_guira_h.webp",
      "loop": "loops/s1/merengue_guira.mp3",
      "color": "#1F9AA0",
      "patron": "X.xxX.xxX.xxX.xx",
      "celda": [
       7,
       3,
       2,
       1
      ]
     },
     {
      "id": "tambora",
      "nom": "Tambora",
      "img": "img/s1/inst_m_tambora.webp",
      "loop": "loops/s1/merengue_tambora.mp3",
      "color": "#C9603F",
      "nivK": 0.6,
      "celda": [
       3,
       1,
       2,
       2
      ]
     },
     {
      "id": "conga",
      "nom": "Conga",
      "img": "img/s1/inst_m_conga.webp",
      "loop": "loops/s1/merengue_conga.mp3",
      "color": "#8A5A3C",
      "nivK": 0.6,
      "celda": [
       1,
       1,
       1,
       3
      ]
     },
     {
      "id": "bajo",
      "nom": "Bajo",
      "img": "img/s1/inst_m_bajo_h.webp",
      "loop": "loops/s1/merengue_bajo.mp3",
      "color": "#3E7D4F",
      "nivK": 0.6,
      "celda": [
       5,
       1,
       4,
       2
      ]
     },
     {
      "id": "piano",
      "nom": "Piano",
      "img": "img/s1/inst_m_piano.webp",
      "loop": "loops/s1/merengue_piano.mp3",
      "color": "#5B6FA8",
      "celda": [
       3,
       3,
       4,
       1
      ]
     },
     {
      "id": "saxos",
      "nom": "Saxo",
      "img": "img/s1/inst_m_saxos.webp",
      "loop": "loops/s1/merengue_saxos.mp3",
      "color": "#D9B44A",
      "celda": [
       2,
       1,
       1,
       3
      ]
     }
    ],
    "inicial": [],
    "recursos": [
     "loops/s1/merengue_guira.mp3",
     "loops/s1/merengue_tambora.mp3",
     "loops/s1/merengue_conga.mp3",
     "loops/s1/merengue_bajo.mp3",
     "loops/s1/merengue_piano.mp3",
     "loops/s1/merengue_saxos.mp3"
    ],
    "inventario": [
     8,
     3
    ]
   }
  },
  {
   "id": "s1_m9",
   "nombre": "Concierto de Yunior",
   "img": "img/s1/m3_enramada.webp",
   "desc": "La orquesta de Yunior llena la enramada; la gente baila en la calle.",
   "amb": [
    {
     "src": "sfx/s1/gente_fiesta.mp3",
     "vol": 0.25
    }
   ],
   "personajes": [
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s1_m12",
     "quien": "YUNIOR",
     "texto": "¡Muchachos, pa' arriba, que esto se prende!",
     "voz": "voz/s1/s1_m12.mp3",
     "var": "RECURSO_LLEGAN",
     "fijo": true
    }
   ],
   "inter": {
    "nota": "Suno «Afro Latin · Merengue · Yunior v1», versión A (7015fc26…), montada con herramientas/concierto_merengue.py.",
    "cancion": "mus/s1_merengue_concierto.mp3",
    "bpm": 145.19,
    "t0rejilla": 0,
    "planos": [
     {
      "t": 0,
      "img": "img/s1/vc_m_19_orquesta_arranca.webp",
      "txt": "orquesta arranca"
     },
     {
      "t": 1.573,
      "img": "img/s1/vc_m_18_yunior_canta.webp",
      "txt": "yunior canta"
     },
     {
      "t": 5.706,
      "img": "img/s1/vc_m_30_baile_calle.webp",
      "txt": "baile calle"
     },
     {
      "t": 9.012,
      "img": "img/s1/vc_m_20_guira_cc.webp",
      "txt": "guira cc"
     },
     {
      "t": 12.318,
      "img": "img/s1/vc_m_21_guira_manos.webp",
      "txt": "guira manos"
     },
     {
      "t": 16.45,
      "img": "img/s1/vc_m_22_estribillo.webp",
      "txt": "estribillo"
     },
     {
      "t": 21.409,
      "img": "img/s1/vc_m_17_yunior_guira.webp",
      "txt": "yunior guira"
     },
     {
      "t": 23.062,
      "img": "img/s1/vc_m_23_tambora_cc.webp",
      "txt": "tambora cc"
     },
     {
      "t": 28.021,
      "img": "img/s1/vc_m_24_bandera.webp",
      "txt": "bandera"
     },
     {
      "t": 30.501,
      "img": "img/s1/vc_m_31_orquesta_entera.webp",
      "txt": "orquesta entera"
     },
     {
      "t": 35.46,
      "img": "img/s1/vc_m_25_bajo_cc.webp",
      "txt": "bajo cc"
     },
     {
      "t": 36.699,
      "img": "img/s1/vc_m_26_piano.webp",
      "txt": "piano"
     },
     {
      "t": 40.005,
      "img": "img/s1/vc_m_27_saxos.webp",
      "txt": "saxos"
     },
     {
      "t": 41.245,
      "img": "img/s1/vc_m_28_trompetas.webp",
      "txt": "trompetas"
     },
     {
      "t": 43.311,
      "img": "img/s1/vc_m_29_conga_cc.webp",
      "txt": "conga cc"
     },
     {
      "t": 45.378,
      "img": "img/s1/vc_m_35_pies_bailando.webp",
      "txt": "pies bailando"
     },
     {
      "t": 47.031,
      "img": "img/s1/vc_m_34_guirnaldas_banderines.webp",
      "txt": "guirnaldas banderines"
     },
     {
      "t": 49.51,
      "img": "img/s1/vc_m_33_mesa_colmado.webp",
      "txt": "mesa colmado"
     },
     {
      "t": 52.816,
      "img": "img/s1/vc_m_16_hoja_banda.webp",
      "txt": "hoja banda"
     },
     {
      "t": 56.122,
      "img": "img/s1/vc_m_23_tambora_cc.webp",
      "txt": "tambora cc"
     },
     {
      "t": 61.081,
      "img": "img/s1/vc_m_24_bandera.webp",
      "txt": "bandera"
     },
     {
      "t": 63.561,
      "img": "img/s1/vc_m_30_baile_calle.webp",
      "txt": "baile calle"
     },
     {
      "t": 65.214,
      "img": "img/s1/vc_m_32_yunior_final.webp",
      "txt": "yunior final"
     }
    ],
    "letra": [
     {
      "t": 1.56,
      "txt": "Oye, mi pana, mira esto:",
      "t1": 3.43,
      "w": [
       [
        1.71,
        "Oye,"
       ],
       [
        2.26,
        "mi"
       ],
       [
        2.47,
        "pana,"
       ],
       [
        2.75,
        "mira"
       ],
       [
        3.03,
        "esto:"
       ]
      ]
     },
     {
      "t": 3.45,
      "txt": "si la cumbia va despacio,",
      "t1": 5.18,
      "w": [
       [
        3.6,
        "si"
       ],
       [
        3.91,
        "la"
       ],
       [
        4.11,
        "cumbia"
       ],
       [
        4.28,
        "va"
       ],
       [
        4.58,
        "despacio,"
       ]
      ]
     },
     {
      "t": 5.2,
      "txt": "el merengue va corriendo,",
      "t1": 6.7,
      "w": [
       [
        5.35,
        "el"
       ],
       [
        5.55,
        "merengue"
       ],
       [
        6.19,
        "va"
       ],
       [
        6.34,
        "corriendo,"
       ]
      ]
     },
     {
      "t": 6.72,
      "txt": "¡a toda pastilla, papá!",
      "t1": 8.35,
      "w": [
       [
        6.87,
        "¡a"
       ],
       [
        7.0,
        "toda"
       ],
       [
        7.22,
        "pastilla,"
       ],
       [
        8.01,
        "papá!"
       ]
      ]
     },
     {
      "t": 8.37,
      "txt": "La güira no se detiene:",
      "t1": 10.11,
      "w": [
       [
        8.52,
        "La"
       ],
       [
        8.7,
        "güira"
       ],
       [
        9.08,
        "no"
       ],
       [
        9.37,
        "se"
       ],
       [
        9.45,
        "detiene:"
       ]
      ]
     },
     {
      "t": 10.13,
      "txt": "una larga y dos cortas,",
      "t1": 11.74,
      "w": [
       [
        10.28,
        "una"
       ],
       [
        10.5,
        "larga"
       ],
       [
        11.03,
        "y"
       ],
       [
        11.3,
        "dos"
       ],
       [
        11.43,
        "cortas,"
       ]
      ]
     },
     {
      "t": 11.76,
      "txt": "chiqui-chiqui, chiqui-chá,",
      "t1": 13.26,
      "w": [
       [
        11.91,
        "chiqui-chiqui,"
       ],
       [
        12.73,
        "chiqui-chá,"
       ]
      ]
     },
     {
      "t": 13.28,
      "txt": "¡qué rápido se menea!",
      "t1": 15.51,
      "w": [
       [
        13.43,
        "¡qué"
       ],
       [
        13.56,
        "rápido"
       ],
       [
        14.1,
        "se"
       ],
       [
        14.57,
        "menea!"
       ]
      ]
     },
     {
      "t": 16.21,
      "txt": "¡Merengue, merengue!",
      "t1": 17.35,
      "w": [
       [
        16.36,
        "¡Merengue,"
       ],
       [
        16.8,
        "merengue!"
       ]
      ]
     },
     {
      "t": 17.37,
      "txt": "La cumbia a toda pastilla.",
      "t1": 19.77,
      "w": [
       [
        17.52,
        "La"
       ],
       [
        17.75,
        "cumbia"
       ],
       [
        18.27,
        "a"
       ],
       [
        18.43,
        "toda"
       ],
       [
        18.62,
        "pastilla."
       ]
      ]
     },
     {
      "t": 19.86,
      "txt": "¡Merengue, merengue!",
      "t1": 20.99,
      "w": [
       [
        20.01,
        "¡Merengue,"
       ],
       [
        20.54,
        "merengue!"
       ]
      ]
     },
     {
      "t": 21.01,
      "txt": "La güira no se cansa.",
      "t1": 22.52,
      "w": [
       [
        21.16,
        "La"
       ],
       [
        21.48,
        "güira"
       ],
       [
        21.64,
        "no"
       ],
       [
        22.08,
        "se"
       ],
       [
        22.3,
        "cansa."
       ]
      ]
     },
     {
      "t": 22.54,
      "txt": "La tambora, mano y palo:",
      "t1": 24.12,
      "w": [
       [
        22.69,
        "La"
       ],
       [
        22.91,
        "tambora,"
       ],
       [
        23.55,
        "mano"
       ],
       [
        23.75,
        "y"
       ],
       [
        23.92,
        "palo:"
       ]
      ]
     },
     {
      "t": 24.14,
      "txt": "¡pa-cu-tá, pa-cu-tá!",
      "t1": 26.03,
      "w": [
       [
        24.29,
        "¡pa-cu-tá,"
       ],
       [
        25.17,
        "pa-cu-tá!"
       ]
      ]
     },
     {
      "t": 26.05,
      "txt": "¡Merengue, merengue,",
      "t1": 27.06,
      "w": [
       [
        26.2,
        "¡Merengue,"
       ],
       [
        26.73,
        "merengue,"
       ]
      ]
     },
     {
      "t": 27.08,
      "txt": "de la República Dominicana!",
      "t1": 29.95,
      "w": [
       [
        27.23,
        "de"
       ],
       [
        27.68,
        "la"
       ],
       [
        27.8,
        "República"
       ],
       [
        28.26,
        "Dominicana!"
       ]
      ]
     },
     {
      "t": 30.0,
      "txt": ""
     },
     {
      "t": 34.3,
      "txt": "El bajo salta y salta,",
      "t1": 36.27,
      "w": [
       [
        34.45,
        "El"
       ],
       [
        35.1,
        "bajo"
       ],
       [
        35.22,
        "salta"
       ],
       [
        35.91,
        "y"
       ],
       [
        36.11,
        "salta,"
       ]
      ]
     },
     {
      "t": 36.29,
      "txt": "el piano pone el sabor,",
      "t1": 37.93,
      "w": [
       [
        36.44,
        "el"
       ],
       [
        36.71,
        "piano"
       ],
       [
        36.95,
        "pone"
       ],
       [
        37.48,
        "el"
       ],
       [
        37.75,
        "sabor,"
       ]
      ]
     },
     {
      "t": 37.95,
      "txt": "y cuando llega el jaleo",
      "t1": 39.61,
      "w": [
       [
        38.1,
        "y"
       ],
       [
        38.38,
        "cuando"
       ],
       [
        38.61,
        "llega"
       ],
       [
        39.11,
        "el"
       ],
       [
        39.26,
        "jaleo"
       ]
      ]
     },
     {
      "t": 39.63,
      "txt": "los saxos suben el calor.",
      "t1": 41.04,
      "w": [
       [
        39.78,
        "los"
       ],
       [
        40.03,
        "saxos"
       ],
       [
        40.42,
        "suben"
       ],
       [
        40.87,
        "el"
       ],
       [
        41.07,
        "calor."
       ]
      ]
     },
     {
      "t": 41.06,
      "txt": "Trompetas en el coro,",
      "t1": 42.85,
      "w": [
       [
        41.21,
        "Trompetas"
       ],
       [
        42.11,
        "en"
       ],
       [
        42.31,
        "el"
       ],
       [
        42.55,
        "coro,"
       ]
      ]
     },
     {
      "t": 42.88,
      "txt": "la conga no se calla,",
      "t1": 44.52,
      "w": [
       [
        43.02,
        "la"
       ],
       [
        43.24,
        "conga"
       ],
       [
        43.55,
        "no"
       ],
       [
        43.76,
        "se"
       ],
       [
        44.17,
        "calla,"
       ]
      ]
     },
     {
      "t": 44.54,
      "txt": "y to' el mundo en la calle",
      "t1": 46.17,
      "w": [
       [
        44.69,
        "y"
       ],
       [
        44.9,
        "to'"
       ],
       [
        44.97,
        "el"
       ],
       [
        45.2,
        "mundo"
       ],
       [
        45.39,
        "en"
       ],
       [
        45.63,
        "la"
       ],
       [
        45.84,
        "calle"
       ]
      ]
     },
     {
      "t": 46.19,
      "txt": "¡bailando hasta que salga el sol!",
      "t1": 48.38,
      "w": [
       [
        46.34,
        "¡bailando"
       ],
       [
        46.84,
        "hasta"
       ],
       [
        47.08,
        "que"
       ],
       [
        47.26,
        "salga"
       ],
       [
        47.68,
        "el"
       ],
       [
        47.9,
        "sol!"
       ]
      ]
     },
     {
      "t": 49.27,
      "txt": "¡Merengue, merengue!",
      "t1": 50.45,
      "w": [
       [
        49.42,
        "¡Merengue,"
       ],
       [
        49.87,
        "merengue!"
       ]
      ]
     },
     {
      "t": 50.47,
      "txt": "La cumbia a toda pastilla.",
      "t1": 52.53,
      "w": [
       [
        50.62,
        "La"
       ],
       [
        50.8,
        "cumbia"
       ],
       [
        51.31,
        "a"
       ],
       [
        51.49,
        "toda"
       ],
       [
        51.63,
        "pastilla."
       ]
      ]
     },
     {
      "t": 52.55,
      "txt": "¡Merengue, merengue!",
      "t1": 53.62,
      "w": [
       [
        52.7,
        "¡Merengue,"
       ],
       [
        53.18,
        "merengue!"
       ]
      ]
     },
     {
      "t": 53.64,
      "txt": "La güira no se cansa.",
      "t1": 55.6,
      "w": [
       [
        53.79,
        "La"
       ],
       [
        54.11,
        "güira"
       ],
       [
        54.71,
        "no"
       ],
       [
        55.03,
        "se"
       ],
       [
        55.13,
        "cansa."
       ]
      ]
     },
     {
      "t": 55.62,
      "txt": "La tambora, mano y palo:",
      "t1": 57.2,
      "w": [
       [
        55.77,
        "La"
       ],
       [
        55.96,
        "tambora,"
       ],
       [
        56.37,
        "mano"
       ],
       [
        56.79,
        "y"
       ],
       [
        56.9,
        "palo:"
       ]
      ]
     },
     {
      "t": 57.22,
      "txt": "¡pa-cu-tá, pa-cu-tá!",
      "t1": 59.1,
      "w": [
       [
        57.38,
        "¡pa-cu-tá,"
       ],
       [
        58.22,
        "pa-cu-tá!"
       ]
      ]
     },
     {
      "t": 59.12,
      "txt": "¡Merengue, merengue,",
      "t1": 60.26,
      "w": [
       [
        59.27,
        "¡Merengue,"
       ],
       [
        59.79,
        "merengue,"
       ]
      ]
     },
     {
      "t": 60.28,
      "txt": "de la República Dominicana!",
      "t1": 62.94,
      "w": [
       [
        60.43,
        "de"
       ],
       [
        60.71,
        "la"
       ],
       [
        60.79,
        "República"
       ],
       [
        61.33,
        "Dominicana!"
       ]
      ]
     },
     {
      "t": 62.99,
      "txt": ""
     },
     {
      "t": 64.89,
      "txt": "¡Diache! ¡Eso es merengue, tíguere!",
      "t1": 69.69,
      "w": [
       [
        65.04,
        "¡Diache!"
       ],
       [
        66.35,
        "¡Eso"
       ],
       [
        67.73,
        "es"
       ],
       [
        68.26,
        "merengue,"
       ],
       [
        68.84,
        "tíguere!"
       ]
      ]
     },
     {
      "t": 69.74,
      "txt": ""
     }
    ],
    "fichas": [],
    "botones": {
     "desde": 49.58,
     "seguir": "Siguiente parada",
     "ejemplos": [
      {
       "src": "videos/merengue-1.mp4",
       "tit": "Merengue · ejemplo 1"
      },
      {
       "src": "videos/merengue-2.mp4",
       "tit": "Merengue · ejemplo 2"
      },
      {
       "src": "videos/merengue-3.mp4",
       "tit": "Merengue · ejemplo 3"
      }
     ]
    },
    "tipo": "concierto",
    "recursos": [
     "mus/s1_merengue_concierto.mp3",
     "videos/merengue-1.mp4",
     "videos/merengue-2.mp4",
     "videos/merengue-3.mp4"
    ],
    "fundidoPlanos": 0.18,
    "kb": false
   },
   "despues": [
    {
     "id": "s1_m13",
     "quien": "YUNIOR",
     "texto": "¡Diache, qué nivel! Ya son unos tígueres del merengue.",
     "voz": "voz/s1/s1_m13.mp3"
    }
   ],
   "var": {
    "RECURSO_LLEGAN": "img/s1/m9b_musicos_llegan.webp"
   }
  },
  {
   "id": "s1_r1",
   "nombre": "Resumen del sabor 1",
   "img": "img/s1/r_resumen.webp",
   "desc": "Doña Cande y Yunior juntos (sus PNG) sobre un fondo de colores; a cada lado, la ficha de su género.",
   "amb": [],
   "personajes": [
    "CANDE",
    "YUNIOR"
   ],
   "lineas": [
    {
     "id": "s1_r01",
     "quien": "CANDE",
     "texto": "¡Repasemos, mijos! La cumbia: tempo tranquilo, pa' caminar; la guacharaca, una larga y dos cortas; y el contratiempo, en el piano o el teclado.",
     "voz": "voz/s1/s1_r01.mp3"
    },
    {
     "id": "s1_r02",
     "quien": "YUNIOR",
     "texto": "¿Y el merengue? ¡La cumbia, pero a toda pastilla! El mismo dibujo en la güira, corriendo… y la tambora, con mano y palito.",
     "voz": "voz/s1/s1_r02.mp3"
    },
    {
     "id": "s1_r03",
     "quien": "CANDE",
     "texto": "¡Y esto ha sido todo por hoy, mijos! Aprovechen estos días pa' escuchar cumbia y merengue: el frío del invierno gallego ya se va quedando atrás… ¡y con este calorcito tropical se despide del todo!",
     "voz": "voz/s1/s1_r03.mp3"
    }
   ],
   "capas": [
    {
     "linea": "s1_r01",
     "palabra": "tempo",
     "loop": "loops/s1/cumbia_maracas_2c.mp3",
     "t": 1.87,
     "bpm": 90.0
    },
    {
     "linea": "s1_r01",
     "palabra": "guacharaca",
     "loop": "loops/s1/cumbia_guacharaca_2c.mp3",
     "t": 5.87,
     "bpm": 90.0
    },
    {
     "linea": "s1_r01",
     "palabra": "contratiempo",
     "loop": "loops/s1/cumbia_contratiempo_2c.mp3",
     "t": 9.2,
     "bpm": 90.0
    },
    {
     "linea": "s1_r02",
     "palabra": "güira",
     "loop": "loops/s1/merengue_guira.mp3",
     "t": 3.74,
     "bpm": 140.0
    },
    {
     "linea": "s1_r02",
     "palabra": "tambora",
     "loop": "loops/s1/merengue_tambora.mp3",
     "t": 5.45,
     "bpm": 140.0
    }
   ]
  }
 ]
});

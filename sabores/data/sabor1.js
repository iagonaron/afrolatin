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
   "img": "img/s1/mapa_base.webp",
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
   "img": "img/s1/fondo_ritmo.webp",
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
   "img": "img/s1/v2_revista.webp",
   "desc": "Una pista de baile en la arena, gente bailando cada uno a su manera; colores, libertad.",
   "amb": [
    {
     "src": "sfx/s1/gente_fiesta.mp3",
     "vol": 0.25
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
   "img": "img/s1/mapa_base.webp",
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
   "img": "img/s1/mapa_base.webp",
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
      0.6317,
      0.1644
     ],
     [
      0.5818,
      0.2438
     ],
     [
      0.5297,
      0.3148
     ],
     [
      0.4752,
      0.3777
     ],
     [
      0.4185,
      0.4324
     ],
     [
      0.3596,
      0.4788
     ],
     [
      0.2983,
      0.517
     ],
     [
      0.2348,
      0.5469
     ],
     [
      0.169,
      0.5687
     ]
    ],
    "desde": "A Coruña",
    "hasta": "Colombia · Cartagena de Indias",
    "sub": "Colombia, costa caribe: aquí nació la cumbia",
    "dur": 8,
    "vehiculo": "el avión",
    "encuadre": [
     1.25,
     0.4,
     0.4019
    ],
    "icono": "img/s1/avion_icono.webp",
    "anchoIcono": 7,
    "proporcionIcono": 0.5,
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
   "img": "img/s1/v2_calle.webp",
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
     "rehacer": true
    },
    {
     "id": "s1_011",
     "quien": "NARR",
     "texto": "Por este puerto entraron, hace siglos, miles de africanos esclavizados… y con ellos, sus tambores.",
     "voz": "voz/s1/s1_011.mp3",
     "var": "RECURSO_PUERTO",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_PUERTO": "img/s1/v2_puerto.webp"
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
     "voz": "voz/s1/s1_016.mp3",
     "var": "RECURSO_CAMINO",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_MERCADO": "img/s1/v2_mercado.webp",
    "RECURSO_CAMINO": "img/s1/v2_camino.webp"
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
    "src": "mus/s1_cumbia_fondo.mp3",
    "vol": 0.4,
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
    "vueltas": 1,
    "espera": 0.6,
    "patron": "XxxxXxxxXxxxXxxx",
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
    "vueltas": 2,
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
     "vueltas": 1,
     "espera": 0.6,
     "patron": "x.x.x.X.x.X.x.x.",
     "recursos": [
      "loops/s1/cumbia_tambor_2c.mp3",
      "img/s1/inst_tambor.webp"
     ]
    },
    {
     "tipo": "instrumento",
     "id": "bajo",
     "nom": "Tambor + bajo",
     "img": "img/s1/inst_bajo.webp",
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
      "patron": "XxxxXxxxXxxxXxxx"
     },
     {
      "id": "guacharaca",
      "nom": "Guacharaca",
      "img": "img/s1/inst_guacharaca.webp",
      "loop": "loops/s1/cumbia_guacharaca.mp3",
      "color": "#1F9AA0",
      "patron": "X.xxX.xxX.xxX.xx"
     },
     {
      "id": "contratiempo",
      "nom": "Piano (contratiempo)",
      "img": "img/s1/inst_contratiempo.webp",
      "loop": "loops/s1/cumbia_contratiempo.mp3",
      "color": "#C9603F",
      "patron": "..X...X...X...X."
     },
     {
      "id": "tambor",
      "nom": "Tambor",
      "img": "img/s1/inst_tambor.webp",
      "loop": "loops/s1/cumbia_tambor.mp3",
      "color": "#8A5A3C",
      "patron": "x.x.x.X.x.X.x.x.",
      "nivK": 0.6
     },
     {
      "id": "bajo",
      "nom": "Bajo",
      "img": "img/s1/inst_bajo.webp",
      "loop": "loops/s1/cumbia_bajo.mp3",
      "color": "#3E7D4F",
      "nivK": 0.6
     },
     {
      "id": "acordeon",
      "nom": "Acordeón",
      "img": "img/s1/inst_acordeon.webp",
      "loop": "loops/s1/cumbia_acordeon.mp3",
      "color": "#B04A6A"
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
      "t": 3.07,
      "img": "img/s1/vc_c_27_cande_canta.webp",
      "txt": "cande canta"
     },
     {
      "t": 8.17,
      "img": "img/s1/vc_c_28_pies_cumbia.webp",
      "txt": "pies cumbia"
     },
     {
      "t": 12.97,
      "img": "img/s1/vc_c_29_maracas_musico.webp",
      "txt": "maracas musico"
     },
     {
      "t": 18.57,
      "img": "img/s1/vc_c_30_tambor_y_bajo_se_miran.webp",
      "txt": "tambor y bajo se miran"
     },
     {
      "t": 21.27,
      "img": "img/s1/vc_c_31_guacharaca_accion.webp",
      "txt": "guacharaca accion"
     },
     {
      "t": 24.27,
      "img": "img/s1/vc_c_32_guacharaquero_rie.webp",
      "txt": "guacharaquero rie"
     },
     {
      "t": 27.27,
      "img": "img/s1/vc_c_20_guacharaca.webp",
      "txt": "guacharaca"
     },
     {
      "t": 30.27,
      "img": "img/s1/vc_c_33_cande_y_coristas.webp",
      "txt": "cande y coristas"
     },
     {
      "t": 35.41,
      "img": "img/s1/vc_c_34_publico_baila_rueda.webp",
      "txt": "publico baila rueda"
     },
     {
      "t": 40.0,
      "img": "img/s1/vc_c_48_coristas.webp",
      "txt": "coristas"
     },
     {
      "t": 45.31,
      "img": "img/s1/vc_c_36_manos_teclista.webp",
      "txt": "manos teclista"
     },
     {
      "t": 48.0,
      "img": "img/s1/vc_c_22_teclista_contratiempo.webp",
      "txt": "teclista contratiempo"
     },
     {
      "t": 50.51,
      "img": "img/s1/vc_c_37_cande_senala_teclista.webp",
      "txt": "cande senala teclista"
     },
     {
      "t": 55.91,
      "img": "img/s1/vc_c_38_acordeon_encima.webp",
      "txt": "acordeon encima"
     },
     {
      "t": 60.71,
      "img": "img/s1/vc_c_39_metales.webp",
      "txt": "metales"
     },
     {
      "t": 65.11,
      "img": "img/s1/vc_c_40_banda_general.webp",
      "txt": "banda general"
     },
     {
      "t": 68.0,
      "img": "img/s1/vc_c_47_baterista.webp",
      "txt": "baterista"
     },
     {
      "t": 70.61,
      "img": "img/s1/vc_c_41_velas_mar_banda_fondo.webp",
      "txt": "velas mar banda fondo"
     },
     {
      "t": 73.4,
      "img": "img/s1/vc_c_35_solo_medio_teclista.webp",
      "txt": "solo medio teclista"
     },
     {
      "t": 75.79,
      "img": "img/s1/vc_c_42_cande_brazos_abiertos.webp",
      "txt": "cande brazos abiertos"
     },
     {
      "t": 78.0,
      "img": "img/s1/vc_c_19_maracas.webp",
      "txt": "maracas"
     },
     {
      "t": 80.09,
      "img": "img/s1/vc_c_43_cande_rie_final.webp",
      "txt": "cande rie final"
     },
     {
      "t": 84.0,
      "img": "img/s1/vc_c_44_aplausos.webp",
      "txt": "aplausos"
     }
    ],
    "letra": [
     {
      "t": 3.07,
      "txt": "Escucha bien, mijito, que te voy a enseñar:"
     },
     {
      "t": 8.17,
      "txt": "la cumbia no se corre, la cumbia es pa' caminar.",
      "t1": 12.27
     },
     {
      "t": 12.97,
      "txt": "Las maracas sin parar van marcando el compás,"
     },
     {
      "t": 18.57,
      "txt": "y el tambor con el bajo caminan por detrás.",
      "t1": 21.07
     },
     {
      "t": 21.27,
      "txt": "Una larga y dos cortas, ¡chá-chiqui, chá-chiqui!"
     },
     {
      "t": 24.27,
      "txt": "La guacharaca lo dice, lo dice siempre así."
     },
     {
      "t": 27.27,
      "txt": "Una larga y dos cortas, ¡chá-chiqui, chá-chiqui!"
     },
     {
      "t": 30.27,
      "txt": "Esa es la cumbia, mijo, la cumbia de aquí.",
      "t1": 33.37
     },
     {
      "t": 35.41,
      "txt": "¡Esa es la cumbia, mijo, la cumbia de aquí!",
      "t1": 44.41
     },
     {
      "t": 45.31,
      "txt": "Oye bien el teclado: nunca cae en el tiempo,"
     },
     {
      "t": 50.51,
      "txt": "siempre justo después: eso es contratiempo.",
      "t1": 55.31
     },
     {
      "t": 55.91,
      "txt": "El acordeón costeño le canta por encima,",
      "t1": 60.31
     },
     {
      "t": 60.71,
      "txt": "y suenan los metales cuando la fiesta se anima.",
      "t1": 64.51
     },
     {
      "t": 65.11,
      "txt": "Una larga y dos cortas, ¡chá-chiqui, chá-chiqui!"
     },
     {
      "t": 70.61,
      "txt": "La guacharaca lo dice…",
      "t1": 72.41
     },
     {
      "t": 75.79,
      "txt": "…¡la cumbia de aquí!",
      "t1": 76.89
     },
     {
      "t": 80.09,
      "txt": "¡Eche! ¡Eso es cumbia, mijo!",
      "t1": 82.39
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
    "kb": true
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
   "img": "img/s1/mapa_base.webp",
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
      0.169,
      0.5687
     ],
     [
      0.1788,
      0.5543
     ],
     [
      0.1869,
      0.5382
     ],
     [
      0.1933,
      0.5205
     ],
     [
      0.198,
      0.5012
     ],
     [
      0.2009,
      0.4803
     ],
     [
      0.2021,
      0.4577
     ]
    ],
    "desde": "Colombia",
    "hasta": "República Dominicana · Santiago de los Caballeros",
    "sub": "República Dominicana, el Cibao: aquí nació el merengue",
    "dur": 7,
    "vehiculo": "el barco",
    "encuadre": [
     3.4,
     0.1862,
     0.5123
    ],
    "zoom": true,
    "musA": {
     "src": "mus/s1_viaje_merengue.mp3",
     "vol": 0.7
    }
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
   "img": "img/s1/m2_yunior_colmado.webp",
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
     "vueltas": 1,
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
     "vueltas": 1,
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
     "img": "img/s1/inst_m_bajo.webp",
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
    "nom": "Saxos (jaleo)",
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
      "img": "img/s1/inst_m_guira.webp",
      "loop": "loops/s1/merengue_guira.mp3",
      "color": "#1F9AA0",
      "patron": "X.xxX.xxX.xxX.xx"
     },
     {
      "id": "tambora",
      "nom": "Tambora",
      "img": "img/s1/inst_m_tambora.webp",
      "loop": "loops/s1/merengue_tambora.mp3",
      "color": "#C9603F",
      "nivK": 0.6
     },
     {
      "id": "conga",
      "nom": "Conga",
      "img": "img/s1/inst_m_conga.webp",
      "loop": "loops/s1/merengue_conga.mp3",
      "color": "#8A5A3C",
      "nivK": 0.6
     },
     {
      "id": "bajo",
      "nom": "Bajo",
      "img": "img/s1/inst_m_bajo.webp",
      "loop": "loops/s1/merengue_bajo.mp3",
      "color": "#3E7D4F",
      "nivK": 0.6
     },
     {
      "id": "piano",
      "nom": "Piano",
      "img": "img/s1/inst_m_piano.webp",
      "loop": "loops/s1/merengue_piano.mp3",
      "color": "#5B6FA8"
     },
     {
      "id": "saxos",
      "nom": "Saxos (jaleo)",
      "img": "img/s1/inst_m_saxos.webp",
      "loop": "loops/s1/merengue_saxos.mp3",
      "color": "#D9B44A"
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
     "voz": "voz/s1/s1_m12.mp3"
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
      "t": 1.7,
      "img": "img/s1/vc_m_18_yunior_canta.webp",
      "txt": "yunior canta"
     },
     {
      "t": 5.76,
      "img": "img/s1/vc_m_30_baile_calle.webp",
      "txt": "baile calle"
     },
     {
      "t": 9.45,
      "img": "img/s1/vc_m_20_guira_cc.webp",
      "txt": "guira cc"
     },
     {
      "t": 12.51,
      "img": "img/s1/vc_m_21_guira_manos.webp",
      "txt": "guira manos"
     },
     {
      "t": 17.52,
      "img": "img/s1/vc_m_22_estribillo.webp",
      "txt": "estribillo"
     },
     {
      "t": 21.15,
      "img": "img/s1/vc_m_17_yunior_guira.webp",
      "txt": "yunior guira"
     },
     {
      "t": 23.91,
      "img": "img/s1/vc_m_23_tambora_cc.webp",
      "txt": "tambora cc"
     },
     {
      "t": 27.44,
      "img": "img/s1/vc_m_24_bandera.webp",
      "txt": "bandera"
     },
     {
      "t": 30.69,
      "img": "img/s1/vc_m_31_orquesta_entera.webp",
      "txt": "orquesta entera"
     },
     {
      "t": 33.04,
      "img": "img/s1/vc_m_25_bajo_cc.webp",
      "txt": "bajo cc"
     },
     {
      "t": 35.2,
      "img": "img/s1/vc_m_26_piano.webp",
      "txt": "piano"
     },
     {
      "t": 37.47,
      "img": "img/s1/vc_m_27_saxos.webp",
      "txt": "saxos"
     },
     {
      "t": 41.21,
      "img": "img/s1/vc_m_28_trompetas.webp",
      "txt": "trompetas"
     },
     {
      "t": 43.0,
      "img": "img/s1/vc_m_29_conga_cc.webp",
      "txt": "conga cc"
     },
     {
      "t": 44.9,
      "img": "img/s1/vc_m_35_pies_bailando.webp",
      "txt": "pies bailando"
     },
     {
      "t": 47.2,
      "img": "img/s1/vc_m_34_guirnaldas_banderines.webp",
      "txt": "guirnaldas banderines"
     },
     {
      "t": 49.58,
      "img": "img/s1/vc_m_33_mesa_colmado.webp",
      "txt": "mesa colmado"
     },
     {
      "t": 53.02,
      "img": "img/s1/vc_m_16_hoja_banda.webp",
      "txt": "hoja banda"
     },
     {
      "t": 56.17,
      "img": "img/s1/vc_m_23_tambora_cc.webp",
      "txt": "tambora cc"
     },
     {
      "t": 59.79,
      "img": "img/s1/vc_m_24_bandera.webp",
      "txt": "bandera"
     },
     {
      "t": 63.04,
      "img": "img/s1/vc_m_30_baile_calle.webp",
      "txt": "baile calle"
     },
     {
      "t": 65.87,
      "img": "img/s1/vc_m_32_yunior_final.webp",
      "txt": "yunior final"
     }
    ],
    "letra": [
     {
      "t": 1.7,
      "txt": "Oye, mi pana, mira esto: si la cumbia va despacio,",
      "t1": 5.61
     },
     {
      "t": 5.76,
      "txt": "el merengue va corriendo, ¡a toda pastilla, papá!",
      "t1": 9.3
     },
     {
      "t": 9.45,
      "txt": "La güira no se detiene: una larga y dos cortas,",
      "t1": 12.36
     },
     {
      "t": 12.51,
      "txt": "chiqui-chiqui, chiqui-chá, ¡qué rápido se menea!",
      "t1": 16.42
     },
     {
      "t": 17.52,
      "txt": "¡Merengue, merengue! La cumbia a toda pastilla.",
      "t1": 21.0
     },
     {
      "t": 21.15,
      "txt": "¡Merengue, merengue! La güira no se cansa.",
      "t1": 23.76
     },
     {
      "t": 23.91,
      "txt": "La tambora, mano y palo: ¡pa-cu-tá, pa-cu-tá!",
      "t1": 27.29
     },
     {
      "t": 27.44,
      "txt": "¡Merengue, merengue, de la República Dominicana!",
      "t1": 30.69
     },
     {
      "t": 33.04,
      "txt": "El bajo salta y salta, el piano pone el sabor,",
      "t1": 37.32
     },
     {
      "t": 37.47,
      "txt": "y cuando llega el jaleo los saxos suben el calor.",
      "t1": 41.06
     },
     {
      "t": 41.21,
      "txt": "Trompetas en el coro, la conga no se calla,",
      "t1": 44.75
     },
     {
      "t": 44.9,
      "txt": "y to' el mundo en la calle ¡bailando hasta que salga el sol!",
      "t1": 49.43
     },
     {
      "t": 49.58,
      "txt": "¡Merengue, merengue! La cumbia a toda pastilla.",
      "t1": 52.87
     },
     {
      "t": 53.02,
      "txt": "¡Merengue, merengue! La güira no se cansa.",
      "t1": 56.02
     },
     {
      "t": 56.17,
      "txt": "La tambora, mano y palo: ¡pa-cu-tá, pa-cu-tá!",
      "t1": 59.64
     },
     {
      "t": 59.79,
      "txt": "¡Merengue, merengue, de la República Dominicana!",
      "t1": 63.04
     },
     {
      "t": 65.87,
      "txt": "¡Diache! ¡Eso es merengue, tíguere!",
      "t1": 69.47
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
    "kb": true
   },
   "despues": [
    {
     "id": "s1_m13",
     "quien": "YUNIOR",
     "texto": "¡Diache, qué nivel! Ya son unos tígueres del merengue.",
     "voz": "voz/s1/s1_m13.mp3",
     "var": "RECURSO_FIN",
     "fijo": true
    }
   ],
   "var": {
    "RECURSO_FIN": "img/s1/m3e_charla.webp"
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

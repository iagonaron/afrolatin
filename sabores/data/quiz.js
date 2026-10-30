/* AFRO LATIN · Quiz de los sabores 2, 3 y 4. Lo genera herramientas/quiz_datos.py: NO editar a mano. */
(window.BLUES = window.BLUES || {}).QUIZ = {
 "titulo": "Quiz · ¿Qué sabor es?",
 "generos": {
  "cumbia": {
   "nombre": "Cumbia",
   "personaje": "CANDE",
   "pais": "Colombia",
   "respuesta": {
    "id": "q_cumbia_res",
    "quien": "CANDE",
    "texto": "Es cumbia, mijos: tempo tranquilo, la guacharaca con su negra y dos corcheas… y el teclado en el contratiempo.",
    "audio": "voz/squiz/q_cumbia_res.mp3"
   },
   "fondo": {
    "src": "mus/quiz/fondo_cumbia.mp3"
   }
  },
  "merengue": {
   "nombre": "Merengue",
   "personaje": "YUNIOR",
   "pais": "República Dominicana",
   "respuesta": {
    "id": "q_merengue_res",
    "quien": "YUNIOR",
    "texto": "¡Es merengue! El mismo ritmo que la cumbia, pero a toda pastilla: escucha la güira y la tambora.",
    "audio": "voz/squiz/q_merengue_res.mp3"
   },
   "fondo": {
    "src": "mus/quiz/fondo_merengue.mp3"
   }
  },
  "bolero": {
   "nombre": "Bolero",
   "personaje": "FAUSTINO",
   "pais": "Cuba",
   "respuesta": {
    "id": "q_bolero_res",
    "quien": "FAUSTINO",
    "texto": "Es un bolero, jóvenes: lento y en cuatro, con las maracas y su tresillo… y el remate de las congas.",
    "audio": "voz/squiz/q_bolero_res.mp3"
   },
   "fondo": {
    "src": "mus/quiz/fondo_bolero.mp3"
   }
  },
  "bachata": {
   "nombre": "Bachata",
   "personaje": "RAMONCITO",
   "pais": "República Dominicana",
   "respuesta": {
    "id": "q_bachata_res",
    "quien": "RAMONCITO",
    "texto": "Es bachata, mi gente: la guitarra diabla que puntea, la güira y el bongó… y el bajo, una larga y dos cortas.",
    "audio": "voz/squiz/q_bachata_res.mp3"
   },
   "fondo": {
    "src": "mus/quiz/fondo_bachata.mp3"
   }
  },
  "samba": {
   "nombre": "Samba",
   "personaje": "RITINHA",
   "pais": "Brasil",
   "respuesta": {
    "id": "q_samba_res",
    "quien": "RITINHA",
    "texto": "¡Es samba, gente! Carnaval en la calle: los surdos, los tambores grandes… y el apito, que manda.",
    "audio": "voz/squiz/q_samba_res.mp3"
   },
   "fondo": {
    "src": "mus/quiz/fondo_samba.mp3"
   }
  },
  "bossa": {
   "nombre": "Bossa nova",
   "personaje": "SEU TOM",
   "pais": "Brasil",
   "respuesta": {
    "id": "q_bossa_res",
    "quien": "SEU TOM",
    "texto": "Es bossa nova… bajito y sin prisa: una guitarra que lo hace todo y la percusión de puntillas.",
    "audio": "voz/squiz/q_bossa_res.mp3"
   },
   "fondo": {
    "src": "mus/quiz/fondo_bossa.mp3"
   }
  },
  "salsa": {
   "nombre": "Salsa",
   "personaje": "PAPO VEGA",
   "pais": "Nueva York",
   "respuesta": {
    "id": "q_salsa_res",
    "quien": "PAPO VEGA",
    "texto": "¡Es salsa! La clave, debajo de todo… y en el estribillo, ¡los cencerros!",
    "audio": "voz/squiz/q_salsa_res.mp3"
   },
   "fondo": {
    "src": "mus/quiz/fondo_salsa.mp3"
   }
  },
  "mambo": {
   "nombre": "Mambo",
   "personaje": "DON MAMBERTO",
   "pais": "Cuba · México",
   "respuesta": {
    "id": "q_mambo_res",
    "quien": "DON MAMBERTO",
    "texto": "¡Es mambo! Los vientos: saxos abajo, trompetas arriba… mucho flow… ¡y el grito!",
    "audio": "voz/squiz/q_mambo_res.mp3"
   },
   "fondo": {
    "src": "loops/s4/mambo_vientos.mp3",
    "bucle": true
   }
  },
  "kizomba": {
   "nombre": "Kizomba",
   "personaje": "LUENA",
   "pais": "Angola",
   "respuesta": {
    "id": "q_kizomba_res",
    "quien": "LUENA",
    "texto": "Es kizomba: lenta, programada… el dembow, pero acariciado, y un bajo muy profundo.",
    "audio": "voz/squiz/q_kizomba_res.mp3"
   },
   "fondo": {
    "src": "mus/quiz/fondo_kizomba.mp3"
   }
  }
 },
 "sfx": {
  "tic": "sfx/quiz/tic.mp3",
  "cuenta": "sfx/quiz/cuenta.mp3",
  "cierre": "sfx/quiz/cierre.mp3",
  "buena": "sfx/quiz/buena.mp3",
  "clasif": "sfx/quiz/clasif.mp3",
  "puesto": "sfx/quiz/puesto.mp3",
  "podio": "sfx/quiz/podio.mp3",
  "aplausos": "sfx/s1/aplausos.mp3"
 },
 "kahoot": {
  "opciones_reconocer": 4,
  "segundos": 20,
  "puntos_max": 1000,
  "reaccion": "al acabar el tiempo: se marca la buena y el maestro de ceremonias dice la respuesta y por qué (neutro)",
  "nota": "más puntos cuanto antes se acierta; ranking por aciertos y puntos"
 },
 "quizzes": {
  "2": {
   "sabor": 2,
   "orden": "aleatorio (reconocer y teoría mezcladas)",
   "generos": [
    "cumbia",
    "merengue",
    "bolero",
    "bachata"
   ],
   "teoria_n": 2,
   "total": 6,
   "reconocer": [
    {
     "genero": "cumbia",
     "fragmento": {
      "desde": 186.0,
      "dur": 15.0,
      "src": "mus/quiz/cumbia_7.2.mp3",
      "total": 45.0,
      "carpeta": "7.2"
     },
     "narrador": {
      "id": "q_n_rec1",
      "quien": "NARRADOR",
      "texto": "Escucha bien… ¿qué género es?",
      "audio": "voz/squiz/q_n_rec1.mp3"
     }
    },
    {
     "genero": "merengue",
     "fragmento": {
      "desde": 180.0,
      "dur": 15.0,
      "src": "mus/quiz/merengue_7.2.mp3",
      "nota": "(Iago 23:01) opción C",
      "total": 45.0,
      "carpeta": "7.2"
     },
     "narrador": {
      "id": "q_n_rec2",
      "quien": "NARRADOR",
      "texto": "¿Y este? ¿Lo reconoces?",
      "audio": "voz/squiz/q_n_rec2.mp3"
     }
    },
    {
     "genero": "bolero",
     "fragmento": {
      "desde": 128.0,
      "dur": 15.0,
      "src": "mus/quiz/bolero_7.2.mp3",
      "total": 45.0,
      "carpeta": "7.2"
     },
     "narrador": {
      "id": "q_n_rec3",
      "quien": "NARRADOR",
      "texto": "Atento al ritmo… ¿qué suena aquí?",
      "audio": "voz/squiz/q_n_rec3.mp3"
     }
    },
    {
     "genero": "bachata",
     "fragmento": {
      "desde": 56.0,
      "dur": 15.0,
      "src": "mus/quiz/bachata_7.2.mp3",
      "total": 45.0,
      "carpeta": "7.2"
     },
     "narrador": {
      "id": "q_n_rec1",
      "quien": "NARRADOR",
      "texto": "Escucha bien… ¿qué género es?",
      "audio": "voz/squiz/q_n_rec1.mp3"
     }
    }
   ],
   "teoria": [
    {
     "id": "2_t01",
     "genero": "bolero",
     "pregunta": "¿En qué ciudad nació el bolero?",
     "narrador": {
      "id": "q_n_s2_t01",
      "quien": "NARRADOR",
      "texto": "¿En qué ciudad nació el bolero?",
      "audio": "voz/squiz/q_n_s2_t01.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t01",
      "quien": "FAUSTINO",
      "texto": "Santiago de Cuba, jóvenes: allí, a finales del siglo diecinueve, los trovadores cantaban bajo los balcones.",
      "audio": "voz/squiz/q_r_s2_t01.mp3"
     },
     "opciones": [
      "Santiago de Cuba",
      "La Habana",
      "Santo Domingo",
      "Ciudad de México"
     ],
     "correcta": 0,
     "explicacion": "A finales del siglo XIX, los trovadores de Santiago de Cuba salían con su guitarra a cantar bajo los balcones."
    },
    {
     "id": "2_t02",
     "genero": "bolero",
     "pregunta": "¿Qué hacen las maracas en el bolero?",
     "narrador": {
      "id": "q_n_s2_t02",
      "quien": "NARRADOR",
      "texto": "¿Qué hacen las maracas en el bolero?",
      "audio": "voz/squiz/q_n_s2_t02.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t02",
      "quien": "FAUSTINO",
      "texto": "Corcheas tranquilas… y de vez en cuando, un tresillo: ¡chiqui-chí!",
      "audio": "voz/squiz/q_r_s2_t02.mp3"
     },
     "opciones": [
      "Corcheas tranquilas y, de vez en cuando, un tresillo",
      "Semicorcheas sin parar",
      "Un golpe en cada parte fuerte",
      "Nada: el bolero no lleva maracas"
     ],
     "correcta": 0,
     "explicacion": "Corcheas tranquilas… y de vez en cuando un tresillo de semicorcheas: ¡chiqui-chí!"
    },
    {
     "id": "2_t03",
     "genero": "bolero",
     "pregunta": "¿Qué hacen las congas en el bolero?",
     "narrador": {
      "id": "q_n_s2_t03",
      "quien": "NARRADOR",
      "texto": "¿Qué hacen las congas en el bolero?",
      "audio": "voz/squiz/q_n_s2_t03.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t03",
      "quien": "FAUSTINO",
      "texto": "Calladitas casi todo el compás… y al final, tres golpes seguidos: ese remate es puro bolero.",
      "audio": "voz/squiz/q_r_s2_t03.mp3"
     },
     "opciones": [
      "Callan casi todo el compás y rematan con tres golpes",
      "Tocan corcheas todo el rato",
      "Solo suenan en el estribillo",
      "Marcan la clave"
     ],
     "correcta": 0,
     "explicacion": "Calladitas casi todo el rato… y al final de cada compás, tres golpes seguidos: ese remate es puro bolero."
    },
    {
     "id": "2_t04",
     "genero": "bolero",
     "pregunta": "¿A qué país viajó el bolero, donde lo cantaron los tríos de guitarras?",
     "narrador": {
      "id": "q_n_s2_t04",
      "quien": "NARRADOR",
      "texto": "¿A qué país viajó el bolero, donde lo cantaron los tríos de guitarras?",
      "audio": "voz/squiz/q_n_s2_t04.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t04",
      "quien": "FAUSTINO",
      "texto": "A México: allí lo cantaron los tríos de guitarras, y se volvió la canción de amor de toda Latinoamérica.",
      "audio": "voz/squiz/q_r_s2_t04.mp3"
     },
     "opciones": [
      "México",
      "España",
      "Brasil",
      "Argentina"
     ],
     "correcta": 0,
     "explicacion": "De Cuba viajó a México, lo cantaron los tríos de guitarras y se volvió la canción de amor de toda Latinoamérica."
    },
    {
     "id": "2_t05",
     "genero": "bolero",
     "pregunta": "¿Cómo es el bolero?",
     "narrador": {
      "id": "q_n_s2_t05",
      "quien": "NARRADOR",
      "texto": "¿Cómo es el bolero?",
      "audio": "voz/squiz/q_n_s2_t05.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t05",
      "quien": "FAUSTINO",
      "texto": "Lento, romántico y elegante… como sus abuelos.",
      "audio": "voz/squiz/q_r_s2_t05.mp3"
     },
     "opciones": [
      "Lento, romántico y elegante",
      "Rapidísimo y para saltar",
      "Suave y en voz bajita, con acordes de jazz",
      "Programado, con caja de ritmos"
     ],
     "correcta": 0,
     "explicacion": "Lento, romántico, elegante… la canción de amor de toda Latinoamérica."
    },
    {
     "id": "2_t06",
     "genero": "bachata",
     "pregunta": "¿En qué país nació la bachata?",
     "narrador": {
      "id": "q_n_s2_t06",
      "quien": "NARRADOR",
      "texto": "¿En qué país nació la bachata?",
      "audio": "voz/squiz/q_n_s2_t06.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t06",
      "quien": "RAMONCITO",
      "texto": "¡De la República Dominicana, mi gente! De los barrios de Santo Domingo, en los años sesenta.",
      "audio": "voz/squiz/q_r_s2_t06.mp3"
     },
     "opciones": [
      "República Dominicana",
      "Cuba",
      "Puerto Rico",
      "Colombia"
     ],
     "correcta": 0,
     "explicacion": "Nació en los barrios de Santo Domingo, la capital de la República Dominicana, en los años sesenta."
    },
    {
     "id": "2_t07",
     "genero": "bachata",
     "pregunta": "¿Qué percusión lleva la bachata?",
     "narrador": {
      "id": "q_n_s2_t07",
      "quien": "NARRADOR",
      "texto": "¿Qué percusión lleva la bachata?",
      "audio": "voz/squiz/q_n_s2_t07.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t07",
      "quien": "RAMONCITO",
      "texto": "Güira y bongó, nada más. ¡Ni congas ni batería!",
      "audio": "voz/squiz/q_r_s2_t07.mp3"
     },
     "opciones": [
      "Güira y bongó",
      "Congas y batería",
      "Timbales y cencerro",
      "Surdos y apito"
     ],
     "correcta": 0,
     "explicacion": "Solo dos cosas: la güira y el bongó. ¡Nada de congas ni batería!"
    },
    {
     "id": "2_t08",
     "genero": "bachata",
     "pregunta": "En la bachata, ¿qué hace la güira al llegar al estribillo?",
     "narrador": {
      "id": "q_n_s2_t08",
      "quien": "NARRADOR",
      "texto": "En la bachata, ¿qué hace la güira al llegar al estribillo?",
      "audio": "voz/squiz/q_n_s2_t08.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t08",
      "quien": "RAMONCITO",
      "texto": "Se queda quieta, en negras: en la estrofa camina en corcheas, y en el estribillo ya llegó a donde quería.",
      "audio": "voz/squiz/q_r_s2_t08.mp3"
     },
     "opciones": [
      "Se queda quieta, en negras",
      "Pasa a semicorcheas",
      "Se calla",
      "Toca el tresillo"
     ],
     "correcta": 0,
     "explicacion": "En la estrofa va caminando, en corcheas… y en el estribillo se queda quieta, en negras."
    },
    {
     "id": "2_t09",
     "genero": "bachata",
     "pregunta": "¿Qué dibujo hace el bajo de la bachata?",
     "narrador": {
      "id": "q_n_s2_t09",
      "quien": "NARRADOR",
      "texto": "¿Qué dibujo hace el bajo de la bachata?",
      "audio": "voz/squiz/q_n_s2_t09.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t09",
      "quien": "RAMONCITO",
      "texto": "Una larga y dos cortas, compás tras compás.",
      "audio": "voz/squiz/q_r_s2_t09.mp3"
     },
     "opciones": [
      "Una larga y dos cortas",
      "Cuatro negras iguales",
      "(Casi) nunca toca en el uno",
      "Una nota larga por compás"
     ],
     "correcta": 0,
     "explicacion": "Una larga y dos cortas, compás tras compás."
    },
    {
     "id": "2_t10",
     "genero": "bachata",
     "pregunta": "¿Cómo se llama la guitarra traviesa que puntea e improvisa en la bachata?",
     "narrador": {
      "id": "q_n_s2_t10",
      "quien": "NARRADOR",
      "texto": "¿Cómo se llama la guitarra traviesa que puntea e improvisa en la bachata?",
      "audio": "voz/squiz/q_n_s2_t10.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t10",
      "quien": "RAMONCITO",
      "texto": "La diabla: la traviesa, la del punteo, ¡que no para de improvisar!",
      "audio": "voz/squiz/q_r_s2_t10.mp3"
     },
     "opciones": [
      "La diabla",
      "La rítmica",
      "El charango",
      "El tres cubano"
     ],
     "correcta": 0,
     "explicacion": "Hay dos guitarras: la rítmica, que acompaña, y la diabla, la del punteo, que no para de improvisar."
    },
    {
     "id": "2_t11",
     "genero": "bachata",
     "pregunta": "Al principio no la ponían en la radio. ¿Cómo la llamaban?",
     "narrador": {
      "id": "q_n_s2_t11",
      "quien": "NARRADOR",
      "texto": "Al principio no la ponían en la radio. ¿Cómo la llamaban?",
      "audio": "voz/squiz/q_n_s2_t11.mp3"
     },
     "respuesta": {
      "id": "q_r_s2_t11",
      "quien": "RAMONCITO",
      "texto": "«Música de amargue»… ¡y mírala ahora, sonando en todo el mundo!",
      "audio": "voz/squiz/q_r_s2_t11.mp3"
     },
     "opciones": [
      "«Música de amargue»",
      "«La nueva onda»",
      "«Música de salón»",
      "«Música de carnaval»"
     ],
     "correcta": 0,
     "explicacion": "La llamaban «música de amargue»… ¡y mírala ahora, sonando en todo el mundo!"
    }
   ],
   "intro": {
    "id": "q_n_intro_s2",
    "quien": "NARRADOR",
    "texto": "Último reto de hoy: van a sonar trocitos de los cuatro géneros que ya conocemos… y alguna pregunta de lo aprendido. Escucha y elige. Tranquilo: si fallas, nuestros amigos te echan una mano.",
    "audio": "voz/squiz/q_n_intro_s2.mp3"
   },
   "final": {
    "pleno": {
     "id": "q_n_pleno",
     "quien": "NARRADOR",
     "texto": "¡Pleno! ¡Vas camino de ser un experto AfroLatin!",
     "audio": "voz/squiz/q_n_pleno.mp3"
    },
    "bien": {
     "id": "q_n_fin6",
     "quien": "NARRADOR",
     "texto": "¡Muy bien, casi todos!",
     "audio": "voz/squiz/q_n_fin6.mp3"
    },
    "flojo": {
     "id": "q_n_fin0",
     "quien": "NARRADOR",
     "texto": "Buen viaje… repasa y vuelve a intentarlo.",
     "audio": "voz/squiz/q_n_fin0.mp3"
    },
    "nota": "pleno = todas · bien = 60 % o más · flojo = menos"
   }
  },
  "3": {
   "sabor": 3,
   "orden": "aleatorio (reconocer y teoría mezcladas)",
   "generos": [
    "cumbia",
    "merengue",
    "bolero",
    "bachata",
    "samba",
    "bossa"
   ],
   "teoria_n": 2,
   "total": 8,
   "reconocer": [
    {
     "genero": "cumbia",
     "fragmento": {
      "desde": 194.0,
      "dur": 15.0,
      "src": "mus/quiz/cumbia_7.3.mp3",
      "total": 45.0,
      "carpeta": "7.3"
     },
     "narrador": {
      "id": "q_n_rec1",
      "quien": "NARRADOR",
      "texto": "Escucha bien… ¿qué género es?",
      "audio": "voz/squiz/q_n_rec1.mp3"
     }
    },
    {
     "genero": "merengue",
     "fragmento": {
      "desde": 158.0,
      "dur": 15.0,
      "src": "mus/quiz/merengue_7.3.mp3",
      "total": 45.0,
      "carpeta": "7.3"
     },
     "narrador": {
      "id": "q_n_rec2",
      "quien": "NARRADOR",
      "texto": "¿Y este? ¿Lo reconoces?",
      "audio": "voz/squiz/q_n_rec2.mp3"
     }
    },
    {
     "genero": "bolero",
     "fragmento": {
      "desde": 126.0,
      "dur": 15.0,
      "src": "mus/quiz/bolero_7.3.mp3",
      "total": 45.0,
      "carpeta": "7.3"
     },
     "narrador": {
      "id": "q_n_rec3",
      "quien": "NARRADOR",
      "texto": "Atento al ritmo… ¿qué suena aquí?",
      "audio": "voz/squiz/q_n_rec3.mp3"
     }
    },
    {
     "genero": "bachata",
     "fragmento": {
      "desde": 32.0,
      "dur": 15.0,
      "src": "mus/quiz/bachata_video2.mp3",
      "nota": "(Iago 23:00) bachata del sabor 3: otra canción (videos/bachata-2.mp4, ejemplo real del concierto)",
      "total": 27.5,
      "carpeta": "video2"
     },
     "narrador": {
      "id": "q_n_rec1",
      "quien": "NARRADOR",
      "texto": "Escucha bien… ¿qué género es?",
      "audio": "voz/squiz/q_n_rec1.mp3"
     }
    },
    {
     "genero": "samba",
     "fragmento": {
      "desde": 262.0,
      "dur": 15.0,
      "src": "mus/quiz/samba_7.3.mp3",
      "total": 45.0,
      "carpeta": "7.3"
     },
     "narrador": {
      "id": "q_n_rec2",
      "quien": "NARRADOR",
      "texto": "¿Y este? ¿Lo reconoces?",
      "audio": "voz/squiz/q_n_rec2.mp3"
     }
    },
    {
     "genero": "bossa",
     "fragmento": {
      "desde": 166.0,
      "dur": 15.0,
      "src": "mus/quiz/bossa_nova_7.2.mp3",
      "total": 45.0,
      "carpeta": "7.2"
     },
     "narrador": {
      "id": "q_n_rec3",
      "quien": "NARRADOR",
      "texto": "Atento al ritmo… ¿qué suena aquí?",
      "audio": "voz/squiz/q_n_rec3.mp3"
     }
    }
   ],
   "teoria": [
    {
     "id": "3_t01",
     "genero": "samba",
     "pregunta": "¿En qué ciudad está el carnaval de samba más famoso del mundo?",
     "narrador": {
      "id": "q_n_s3_t01",
      "quien": "NARRADOR",
      "texto": "¿En qué ciudad está el carnaval de samba más famoso del mundo?",
      "audio": "voz/squiz/q_n_s3_t01.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t01",
      "quien": "RITINHA",
      "texto": "¡Río de Janeiro! Entre playas y morros, cada año, el carnaval más famoso del mundo.",
      "audio": "voz/squiz/q_r_s3_t01.mp3"
     },
     "opciones": [
      "Río de Janeiro",
      "Lisboa",
      "Buenos Aires",
      "La Habana"
     ],
     "correcta": 0,
     "explicacion": "En Río de Janeiro, entre playas y morros, estalla cada año el carnaval con las escuelas de samba."
    },
    {
     "id": "3_t02",
     "genero": "samba",
     "pregunta": "En la samba, ¿qué son los surdos?",
     "narrador": {
      "id": "q_n_s3_t02",
      "quien": "NARRADOR",
      "texto": "En la samba, ¿qué son los surdos?",
      "audio": "voz/squiz/q_n_s3_t02.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t02",
      "quien": "RITINHA",
      "texto": "Los surdos son el corazón: dos tambores grandes que hablan entre ellos.",
      "audio": "voz/squiz/q_r_s3_t02.mp3"
     },
     "opciones": [
      "Dos tambores grandes que hablan entre ellos",
      "Dos campanas de metal",
      "Un silbato",
      "Una pandereta"
     ],
     "correcta": 0,
     "explicacion": "El corazón de la samba son los surdos: dos tambores grandes que se contestan."
    },
    {
     "id": "3_t03",
     "genero": "samba",
     "pregunta": "¿Qué hace el apito?",
     "narrador": {
      "id": "q_n_s3_t03",
      "quien": "NARRADOR",
      "texto": "¿Qué hace el apito?",
      "audio": "voz/squiz/q_n_s3_t03.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t03",
      "quien": "RITINHA",
      "texto": "El apito manda: avisa de las entradas y de los cortes saltando entre dos notas: ¡ti-ti-tu!",
      "audio": "voz/squiz/q_r_s3_t03.mp3"
     },
     "opciones": [
      "Manda: avisa de entradas y cortes saltando entre dos notas",
      "Toca el bajo",
      "Rellena con semicorcheas",
      "Marca la clave"
     ],
     "correcta": 0,
     "explicacion": "El apito, el silbato, es el que manda: ti-ti-tu, ti-ti-tu, a distancia de cuarta o de quinta."
    },
    {
     "id": "3_t04",
     "genero": "samba",
     "pregunta": "¿Qué es el agogô?",
     "narrador": {
      "id": "q_n_s3_t04",
      "quien": "NARRADOR",
      "texto": "¿Qué es el agogô?",
      "audio": "voz/squiz/q_n_s3_t04.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t04",
      "quien": "RITINHA",
      "texto": "El agogô: dos campanas de metal que saltan entre dos notas.",
      "audio": "voz/squiz/q_r_s3_t04.mp3"
     },
     "opciones": [
      "Dos campanas de metal que saltan entre dos notas",
      "Un tambor grave",
      "Una guitarra pequeña",
      "Un tipo de maraca"
     ],
     "correcta": 0,
     "explicacion": "El agogô se parece al apito: dos campanas de metal que también saltan entre dos notas."
    },
    {
     "id": "3_t05",
     "genero": "samba",
     "pregunta": "¿Qué idioma se habla en Brasil?",
     "narrador": {
      "id": "q_n_s3_t05",
      "quien": "NARRADOR",
      "texto": "¿Qué idioma se habla en Brasil?",
      "audio": "voz/squiz/q_n_s3_t05.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t05",
      "quien": "RITINHA",
      "texto": "¡Portugués! Brasil es el país más grande de Sudamérica… y aquí hablamos portugués.",
      "audio": "voz/squiz/q_r_s3_t05.mp3"
     },
     "opciones": [
      "Portugués",
      "Español",
      "Francés",
      "Italiano"
     ],
     "correcta": 0,
     "explicacion": "Brasil, el país más grande de Sudamérica, habla portugués."
    },
    {
     "id": "3_t06",
     "genero": "bossa",
     "pregunta": "¿Qué quiere decir «bossa nova»?",
     "narrador": {
      "id": "q_n_s3_t06",
      "quien": "NARRADOR",
      "texto": "¿Qué quiere decir «bossa nova»?",
      "audio": "voz/squiz/q_n_s3_t06.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t06",
      "quien": "SEU TOM",
      "texto": "«La nueva onda»… así la llamamos aquí, en Ipanema.",
      "audio": "voz/squiz/q_r_s3_t06.mp3"
     },
     "opciones": [
      "«La nueva onda»",
      "«La samba triste»",
      "«El baile nuevo»",
      "«La voz bajita»"
     ],
     "correcta": 0,
     "explicacion": "Unos músicos jóvenes de Ipanema la llamaron bossa nova: «la nueva onda»."
    },
    {
     "id": "3_t07",
     "genero": "bossa",
     "pregunta": "¿Quiénes se inventaron la bossa nova?",
     "narrador": {
      "id": "q_n_s3_t07",
      "quien": "NARRADOR",
      "texto": "¿Quiénes se inventaron la bossa nova?",
      "audio": "voz/squiz/q_n_s3_t07.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t07",
      "quien": "SEU TOM",
      "texto": "Tom Jobim y João Gilberto, a finales de los cincuenta: la samba, suave y en voz bajita.",
      "audio": "voz/squiz/q_r_s3_t07.mp3"
     },
     "opciones": [
      "Tom Jobim y João Gilberto",
      "Pérez Prado y Tito Puente",
      "Richie Ray y Bobby Cruz",
      "Los trovadores de Santiago"
     ],
     "correcta": 0,
     "explicacion": "A finales de los años cincuenta, en Ipanema, Tom Jobim y João Gilberto tocaron la samba de una manera nueva: suave, en voz bajita."
    },
    {
     "id": "3_t08",
     "genero": "bossa",
     "pregunta": "En la bossa nova, ¿qué hace el pulgar de la guitarra?",
     "narrador": {
      "id": "q_n_s3_t08",
      "quien": "NARRADOR",
      "texto": "En la bossa nova, ¿qué hace el pulgar de la guitarra?",
      "audio": "voz/squiz/q_n_s3_t08.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t08",
      "quien": "SEU TOM",
      "texto": "El pulgar hace el bajo, en el uno y en el tres… como el surdo de la samba.",
      "audio": "voz/squiz/q_r_s3_t08.mp3"
     },
     "opciones": [
      "El bajo, en el uno y en el tres",
      "La melodía",
      "Rasguea todos los acordes",
      "Golpea la caja"
     ],
     "correcta": 0,
     "explicacion": "La guitarra lo hace todo: el pulgar es el surdo, con el bajo en el uno y el tres; los otros dedos, el tamborim."
    },
    {
     "id": "3_t09",
     "genero": "bossa",
     "pregunta": "¿Qué acordes usa la bossa nova?",
     "narrador": {
      "id": "q_n_s3_t09",
      "quien": "NARRADOR",
      "texto": "¿Qué acordes usa la bossa nova?",
      "audio": "voz/squiz/q_n_s3_t09.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t09",
      "quien": "SEU TOM",
      "texto": "Acordes con séptimas y novenas, como en el jazz: por eso suena tan dulce.",
      "audio": "voz/squiz/q_r_s3_t09.mp3"
     },
     "opciones": [
      "Con séptimas y novenas, como en el jazz",
      "Solo mayores",
      "Solo dos acordes",
      "Quintas al aire"
     ],
     "correcta": 0,
     "explicacion": "Acordes con séptimas y novenas, como en el jazz: por eso suena tan dulce y elegante."
    },
    {
     "id": "3_t10",
     "genero": "bossa",
     "pregunta": "¿Qué golpe de percusión es típico de la bossa nova?",
     "narrador": {
      "id": "q_n_s3_t10",
      "quien": "NARRADOR",
      "texto": "¿Qué golpe de percusión es típico de la bossa nova?",
      "audio": "voz/squiz/q_n_s3_t10.mp3"
     },
     "respuesta": {
      "id": "q_r_s3_t10",
      "quien": "SEU TOM",
      "texto": "Un golpecito en el aro, el borde del tambor: toc… toc…",
      "audio": "voz/squiz/q_r_s3_t10.mp3"
     },
     "opciones": [
      "Un golpecito en el aro, el borde del tambor",
      "Un bombo muy fuerte",
      "Platos de choque",
      "Palmas"
     ],
     "correcta": 0,
     "explicacion": "La percusión va de puntillas… y un golpecito en el aro: toc… toc…"
    }
   ],
   "intro": {
    "id": "q_n_intro_s3",
    "quien": "NARRADOR",
    "texto": "Último reto de hoy: van a sonar trocitos de los seis géneros que ya conocemos… y alguna pregunta de lo aprendido. Escucha y elige. Tranquilo: si fallas, nuestros amigos te echan una mano.",
    "audio": "voz/squiz/q_n_intro_s3.mp3"
   },
   "final": {
    "pleno": {
     "id": "q_n_pleno",
     "quien": "NARRADOR",
     "texto": "¡Pleno! ¡Vas camino de ser un experto AfroLatin!",
     "audio": "voz/squiz/q_n_pleno.mp3"
    },
    "bien": {
     "id": "q_n_fin6",
     "quien": "NARRADOR",
     "texto": "¡Muy bien, casi todos!",
     "audio": "voz/squiz/q_n_fin6.mp3"
    },
    "flojo": {
     "id": "q_n_fin0",
     "quien": "NARRADOR",
     "texto": "Buen viaje… repasa y vuelve a intentarlo.",
     "audio": "voz/squiz/q_n_fin0.mp3"
    },
    "nota": "pleno = todas · bien = 60 % o más · flojo = menos"
   }
  },
  "4": {
   "sabor": 4,
   "orden": "aleatorio (reconocer y teoría mezcladas)",
   "generos": [
    "cumbia",
    "merengue",
    "bolero",
    "bachata",
    "samba",
    "bossa",
    "salsa",
    "mambo",
    "kizomba"
   ],
   "teoria_n": 1,
   "total": 10,
   "reconocer": [
    {
     "genero": "cumbia",
     "fragmento": {
      "desde": 14.0,
      "dur": 15.0,
      "src": "mus/quiz/cumbia_7.4.mp3",
      "total": 45.0,
      "carpeta": "7.4"
     },
     "narrador": {
      "id": "q_n_rec1",
      "quien": "NARRADOR",
      "texto": "Escucha bien… ¿qué género es?",
      "audio": "voz/squiz/q_n_rec1.mp3"
     }
    },
    {
     "genero": "merengue",
     "fragmento": {
      "desde": 116.0,
      "dur": 15.0,
      "src": "mus/quiz/merengue_7.4.mp3",
      "total": 45.0,
      "carpeta": "7.4"
     },
     "narrador": {
      "id": "q_n_rec2",
      "quien": "NARRADOR",
      "texto": "¿Y este? ¿Lo reconoces?",
      "audio": "voz/squiz/q_n_rec2.mp3"
     }
    },
    {
     "genero": "bolero",
     "fragmento": {
      "desde": 16.0,
      "dur": 15.0,
      "src": "mus/quiz/bolero_video3.mp3",
      "nota": "videos/bolero-3.mp4 (ejemplo real del concierto) · (Iago 30-oct 07:50) para el quiz del sabor 4: el tramo más melódico (el de video1 era solo percusión)",
      "total": 43.5,
      "carpeta": "video3"
     },
     "narrador": {
      "id": "q_n_rec3",
      "quien": "NARRADOR",
      "texto": "Atento al ritmo… ¿qué suena aquí?",
      "audio": "voz/squiz/q_n_rec3.mp3"
     }
    },
    {
     "genero": "bachata",
     "fragmento": {
      "desde": 111.7,
      "dur": 15.0,
      "src": "mus/quiz/bachata_7.4.mp3",
      "nota": "(Iago 22-oct 11:59) más tarde, donde empieza el estribillo «Ven a mi lado, corazón»; alternativas 2:14,7 y 1:46,6",
      "total": 45.0,
      "carpeta": "7.4"
     },
     "narrador": {
      "id": "q_n_rec1",
      "quien": "NARRADOR",
      "texto": "Escucha bien… ¿qué género es?",
      "audio": "voz/squiz/q_n_rec1.mp3"
     }
    },
    {
     "genero": "samba",
     "fragmento": {
      "desde": 60.0,
      "dur": 15.0,
      "src": "mus/quiz/samba_7.2.mp3",
      "total": 45.0,
      "carpeta": "7.2"
     },
     "narrador": {
      "id": "q_n_rec2",
      "quien": "NARRADOR",
      "texto": "¿Y este? ¿Lo reconoces?",
      "audio": "voz/squiz/q_n_rec2.mp3"
     }
    },
    {
     "genero": "bossa",
     "fragmento": {
      "desde": 74.0,
      "dur": 15.0,
      "src": "mus/quiz/bossa_nova_7.4.mp3",
      "total": 45.0,
      "carpeta": "7.4"
     },
     "narrador": {
      "id": "q_n_rec3",
      "quien": "NARRADOR",
      "texto": "Atento al ritmo… ¿qué suena aquí?",
      "audio": "voz/squiz/q_n_rec3.mp3"
     }
    },
    {
     "genero": "salsa",
     "fragmento": {
      "desde": 280.0,
      "dur": 15.0,
      "src": "mus/quiz/salsa_7.4.mp3",
      "total": 36.9,
      "carpeta": "7.4"
     },
     "narrador": {
      "id": "q_n_rec1",
      "quien": "NARRADOR",
      "texto": "Escucha bien… ¿qué género es?",
      "audio": "voz/squiz/q_n_rec1.mp3"
     }
    },
    {
     "genero": "mambo",
     "fragmento": {
      "desde": 75.1,
      "dur": 15.0,
      "src": "mus/quiz/mambo_7.2.mp3",
      "nota": "con el grito más claro (Iago 22:18: candidato 4), hacia los 11,7 s",
      "total": 45.0,
      "carpeta": "7.2"
     },
     "narrador": {
      "id": "q_n_rec2",
      "quien": "NARRADOR",
      "texto": "¿Y este? ¿Lo reconoces?",
      "audio": "voz/squiz/q_n_rec2.mp3"
     }
    },
    {
     "genero": "kizomba",
     "fragmento": {
      "desde": 76.0,
      "dur": 15.0,
      "src": "mus/quiz/kizomba_7.4.mp3",
      "total": 45.0,
      "carpeta": "7.4"
     },
     "narrador": {
      "id": "q_n_rec3",
      "quien": "NARRADOR",
      "texto": "Atento al ritmo… ¿qué suena aquí?",
      "audio": "voz/squiz/q_n_rec3.mp3"
     }
    }
   ],
   "teoria": [
    {
     "id": "4_t01",
     "genero": "salsa",
     "pregunta": "¿En qué ciudad nació la salsa?",
     "narrador": {
      "id": "q_n_s4_t01",
      "quien": "NARRADOR",
      "texto": "¿En qué ciudad nació la salsa?",
      "audio": "voz/squiz/q_n_s4_t01.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t01",
      "quien": "PAPO VEGA",
      "texto": "¡En Nueva York! En los barrios latinos, en los sesenta y setenta, con músicos de Puerto Rico y de Cuba.",
      "audio": "voz/squiz/q_r_s4_t01.mp3"
     },
     "opciones": [
      "Nueva York",
      "La Habana",
      "San Juan",
      "Santo Domingo"
     ],
     "correcta": 0,
     "explicacion": "En los barrios latinos de Nueva York, en los años sesenta y setenta, músicos de Puerto Rico y de Cuba la crearon."
    },
    {
     "id": "4_t02",
     "genero": "salsa",
     "pregunta": "En la salsa, ¿qué toca el timbalero en el estribillo?",
     "narrador": {
      "id": "q_n_s4_t02",
      "quien": "NARRADOR",
      "texto": "En la salsa, ¿qué toca el timbalero en el estribillo?",
      "audio": "voz/squiz/q_n_s4_t02.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t02",
      "quien": "PAPO VEGA",
      "texto": "¡El cencerro! En la estrofa toca la cáscara… y en el estribillo, ¡cá-cucu, cá-cucu!",
      "audio": "voz/squiz/q_r_s4_t02.mp3"
     },
     "opciones": [
      "El cencerro",
      "La cáscara",
      "Las congas",
      "La clave"
     ],
     "correcta": 0,
     "explicacion": "En la estrofa toca la cáscara, el lateral metálico del timbal; en el estribillo se pasa al cencerro: ¡cá-cucu!"
    },
    {
     "id": "4_t03",
     "genero": "salsa",
     "pregunta": "En la salsa, ¿qué instrumento ordena a todos los demás?",
     "narrador": {
      "id": "q_n_s4_t03",
      "quien": "NARRADOR",
      "texto": "En la salsa, ¿qué instrumento ordena a todos los demás?",
      "audio": "voz/squiz/q_n_s4_t03.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t03",
      "quien": "PAPO VEGA",
      "texto": "La clave: dos palitos que ponen en orden a todos los demás.",
      "audio": "voz/squiz/q_r_s4_t03.mp3"
     },
     "opciones": [
      "La clave",
      "El piano",
      "El bongó",
      "La trompeta"
     ],
     "correcta": 0,
     "explicacion": "Dos palitos que ordenan a todos los demás: la clave."
    },
    {
     "id": "4_t04",
     "genero": "salsa",
     "pregunta": "El bajo de la salsa empuja tanto porque…",
     "narrador": {
      "id": "q_n_s4_t04",
      "quien": "NARRADOR",
      "texto": "El bajo de la salsa empuja tanto porque…",
      "audio": "voz/squiz/q_n_s4_t04.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t04",
      "quien": "PAPO VEGA",
      "texto": "Porque (casi) nunca toca en el uno: ¡por eso empuja tanto!",
      "audio": "voz/squiz/q_r_s4_t04.mp3"
     },
     "opciones": [
      "(Casi) nunca toca en el uno",
      "Toca semicorcheas",
      "Va siempre con el bombo",
      "Toca una larga y dos cortas"
     ],
     "correcta": 0,
     "explicacion": "Un bajo que (casi) nunca toca en el uno: ¡por eso empuja tanto!"
    },
    {
     "id": "4_t05",
     "genero": "mambo",
     "pregunta": "Al principio, ¿qué era el «mambo»?",
     "narrador": {
      "id": "q_n_s4_t05",
      "quien": "NARRADOR",
      "texto": "Al principio, ¿qué era el «mambo»?",
      "audio": "voz/squiz/q_n_s4_t05.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t05",
      "quien": "DON MAMBERTO",
      "texto": "Era la parte final y más caliente del danzón, ¡donde se sueltan los metales!",
      "audio": "voz/squiz/q_r_s4_t05.mp3"
     },
     "opciones": [
      "La parte final y más caliente del danzón",
      "Un baile de pareja de Angola",
      "Un tipo de tambor",
      "Una canción de cuna"
     ],
     "correcta": 0,
     "explicacion": "No era un género: era la sección final del danzón, donde se sueltan los metales."
    },
    {
     "id": "4_t06",
     "genero": "mambo",
     "pregunta": "¿Quién convirtió el mambo en un género propio y lo puso de moda?",
     "narrador": {
      "id": "q_n_s4_t06",
      "quien": "NARRADOR",
      "texto": "¿Quién convirtió el mambo en un género propio y lo puso de moda?",
      "audio": "voz/squiz/q_n_s4_t06.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t06",
      "quien": "DON MAMBERTO",
      "texto": "¡Pérez Prado! Se lo llevó a México y lo puso de moda en medio mundo.",
      "audio": "voz/squiz/q_r_s4_t06.mp3"
     },
     "opciones": [
      "Pérez Prado",
      "Tito Puente",
      "Tom Jobim",
      "Richie Ray"
     ],
     "correcta": 0,
     "explicacion": "Pérez Prado, un cubano, se lo llevó a México y lo puso de moda en medio mundo."
    },
    {
     "id": "4_t07",
     "genero": "mambo",
     "pregunta": "En el mambo, ¿cómo se reparten los vientos?",
     "narrador": {
      "id": "q_n_s4_t07",
      "quien": "NARRADOR",
      "texto": "En el mambo, ¿cómo se reparten los vientos?",
      "audio": "voz/squiz/q_n_s4_t07.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t07",
      "quien": "DON MAMBERTO",
      "texto": "Los saxos abajo, con la melodía… y las trompetas contestando desde arriba.",
      "audio": "voz/squiz/q_r_s4_t07.mp3"
     },
     "opciones": [
      "Saxos abajo con la melodía y trompetas contestando arriba",
      "Trompetas abajo y saxos arriba",
      "Todos al unísono",
      "Solo trompetas"
     ],
     "correcta": 0,
     "explicacion": "Melodías de vientos: los saxos abajo con la melodía y las trompetas contestando desde arriba… ¡y el grito!"
    },
    {
     "id": "4_t08",
     "genero": "kizomba",
     "pregunta": "¿De qué país es la kizomba?",
     "narrador": {
      "id": "q_n_s4_t08",
      "quien": "NARRADOR",
      "texto": "¿De qué país es la kizomba?",
      "audio": "voz/squiz/q_n_s4_t08.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t08",
      "quien": "LUENA",
      "texto": "De Angola, en la costa oeste de África: nació en los años ochenta.",
      "audio": "voz/squiz/q_r_s4_t08.mp3"
     },
     "opciones": [
      "Angola",
      "Brasil",
      "Portugal",
      "Cuba"
     ],
     "correcta": 0,
     "explicacion": "Nació en Angola, en la costa oeste de África, en los años ochenta."
    },
    {
     "id": "4_t09",
     "genero": "kizomba",
     "pregunta": "¿Qué quiere decir «kizomba» en kimbundu?",
     "narrador": {
      "id": "q_n_s4_t09",
      "quien": "NARRADOR",
      "texto": "¿Qué quiere decir «kizomba» en kimbundu?",
      "audio": "voz/squiz/q_n_s4_t09.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t09",
      "quien": "LUENA",
      "texto": "«Fiesta»: eso quiere decir kizomba en kimbundu, una lengua de Angola.",
      "audio": "voz/squiz/q_r_s4_t09.mp3"
     },
     "opciones": [
      "Fiesta",
      "Abrazo",
      "Tambor",
      "Despacio"
     ],
     "correcta": 0,
     "explicacion": "Kizomba quiere decir «fiesta» en kimbundu, una lengua de Angola."
    },
    {
     "id": "4_t10",
     "genero": "kizomba",
     "pregunta": "La kizomba lleva el mismo dibujo rítmico que el reggaetón. ¿Cuál?",
     "narrador": {
      "id": "q_n_s4_t10",
      "quien": "NARRADOR",
      "texto": "La kizomba lleva el mismo dibujo rítmico que el reggaetón. ¿Cuál?",
      "audio": "voz/squiz/q_n_s4_t10.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t10",
      "quien": "LUENA",
      "texto": "El dembow, como en el reggaetón… pero acariciado, en vez de golpeado.",
      "audio": "voz/squiz/q_r_s4_t10.mp3"
     },
     "opciones": [
      "El dembow, pero acariciado",
      "La clave",
      "El tumbao",
      "La cáscara"
     ],
     "correcta": 0,
     "explicacion": "Es el dembow, como en el reggaetón… solo que aquí va acariciado, en vez de golpeado."
    },
    {
     "id": "4_t11",
     "genero": "kizomba",
     "pregunta": "¿Qué son los sociales SBK?",
     "narrador": {
      "id": "q_n_s4_t11",
      "quien": "NARRADOR",
      "texto": "¿Qué son los sociales SBK?",
      "audio": "voz/squiz/q_n_s4_t11.mp3"
     },
     "respuesta": {
      "id": "q_r_s4_t11",
      "quien": "LUENA",
      "texto": "Salsa, bachata y kizomba: los bailes que van de la mano en las salas de baile.",
      "audio": "voz/squiz/q_r_s4_t11.mp3"
     },
     "opciones": [
      "Bailes de salsa, bachata y kizomba",
      "Una orquesta de Nueva York",
      "Un ritmo de samba",
      "Un tipo de cencerro"
     ],
     "correcta": 0,
     "explicacion": "En las salas de baile la kizomba va de la mano de la salsa y la bachata: los sociales SBK."
    }
   ],
   "intro": {
    "id": "q_n_intro",
    "quien": "NARRADOR",
    "texto": "Último reto: van a sonar trocitos de los nueve géneros. Escucha y elige cuál es. Tranquilo: si fallas, nuestros amigos te echan una mano.",
    "audio": "voz/squiz/q_n_intro.mp3"
   },
   "final": {
    "pleno": {
     "id": "q_n_fin9",
     "quien": "NARRADOR",
     "texto": "¡Los nueve! ¡Eres un experto AfroLatin!",
     "audio": "voz/squiz/q_n_fin9.mp3"
    },
    "bien": {
     "id": "q_n_fin6",
     "quien": "NARRADOR",
     "texto": "¡Muy bien, casi todos!",
     "audio": "voz/squiz/q_n_fin6.mp3"
    },
    "flojo": {
     "id": "q_n_fin0",
     "quien": "NARRADOR",
     "texto": "Buen viaje… repasa y vuelve a intentarlo.",
     "audio": "voz/squiz/q_n_fin0.mp3"
    },
    "nota": "pleno = todas · bien = 60 % o más · flojo = menos"
   },
   "colofon": {
    "linea": {
     "id": "q_chucho",
     "quien": "CHUCHO",
     "texto": "Y yo, que no quería ni oír hablar de esto…",
     "audio": "voz/squiz/q_chucho.mp3"
    },
    "sfx": "voz/s4/s4_grito.mp3",
    "nota": "Chucho (voz de Antonio, 29-oct) y, al acabar, el grito del mambo"
   }
  }
 }
};

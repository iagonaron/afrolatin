/* 4 SABORES · Sabor 4 · capas SINCRONIZADAS con la voz (herramientas/capas_s4_tiempos.py; NO editar a mano). t y ts en SEGUNDOS desde
   que empieza la frase: cada cartel es un trozo literal de lo que se dice y sale cuando se dice. */
Object.assign(BLUES.CAPAS.lineas, {
"s4_n01": [
{
"claves": [
"Cumbia · Colombia · Cartagena de Indias",
"tranquila",
"con su guacharaca"
],
"ts": [
5.52,
6.94,
7.52
],
"t": 5.52,
"estilo": "lista",
"fijo": true,
"lado": "izq"
},
{
"son": [
"loops/s1/cumbia_maracas_2c.mp3",
"loops/s1/cumbia_tambor_bajo_2c.mp3"
],
"t": 6.88,
"dur": 2.14,
"vol": 0.4,
"grupo": "s4_n01:cumbia:0",
"ciclo": 5.3333,
"ico": [
"img/s1/inst_maracas.webp",
"img/s1/inst_tambor.webp",
"img/s1/inst_bajo.webp"
],
"tira": "izq",
"pjico": "img/s1/pj/cande_brazos.webp"
},
{
"son": [
"loops/s1/cumbia_guacharaca_2c.mp3"
],
"t": 7.46,
"dur": 1.56,
"vol": 0.4,
"grupo": "s4_n01:cumbia:0",
"ciclo": 5.3333,
"ico": [
"img/s1/inst_guacharaca.webp"
],
"tira": "izq",
"pjico": "img/s1/pj/cande_brazos.webp"
},
{
"claves": [
"Merengue · República Dominicana · Santiago de los Caballeros",
"¡a toda pastilla!",
"con güira y tambora"
],
"ts": [
9.16,
9.98,
10.96
],
"t": 9.16,
"estilo": "lista",
"fijo": true,
"lado": "der"
},
{
"son": [
"loops/s1/merengue_bajo_piano.mp3"
],
"t": 9.92,
"dur": 2.56,
"vol": 0.4,
"grupo": "s4_n01:merengue:1",
"ciclo": 6.8571,
"ico": [
"img/s1/inst_m_bajo.webp",
"img/s1/inst_m_piano.webp"
],
"tira": "derb",
"pjico": "img/s1/pj/yunior_pulgar.webp"
},
{
"son": [
"loops/s1/merengue_guira.mp3",
"loops/s1/merengue_tambora.mp3"
],
"t": 10.9,
"dur": 1.58,
"vol": 0.4,
"grupo": "s4_n01:merengue:1",
"ciclo": 6.8571,
"ico": [
"img/s1/inst_m_guira.webp",
"img/s1/inst_m_tambora.webp"
],
"tira": "derb",
"pjico": "img/s1/pj/yunior_pulgar.webp"
},
{
"quitaFijos": true,
"t": 12.4
},
{
"claves": [
"Bolero · Cuba · Santiago de Cuba",
"lento",
"el tresillo de las maracas"
],
"ts": [
12.62,
13.42,
14.5
],
"t": 12.62,
"estilo": "lista",
"fijo": true,
"lado": "izq"
},
{
"son": [
"loops/s2/bolero_guitarra_bajo.mp3"
],
"t": 13.36,
"dur": 3.28,
"vol": 0.4,
"fase0": 3.3333,
"grupo": "s4_n01:bolero:2",
"ciclo": 10.6667,
"ico": [
"img/s2/inst_b_guitarra.webp"
],
"tira": "izq",
"pjico": "img/s2/pj/faustino_saluda.webp"
},
{
"son": [
"loops/s2/bolero_maracas.mp3"
],
"t": 14.44,
"dur": 2.2,
"vol": 0.4,
"grupo": "s4_n01:bolero:2",
"ciclo": 10.6667,
"ico": [
"img/s2/inst_b_maracas.webp"
],
"tira": "izq",
"pjico": "img/s2/pj/faustino_saluda.webp"
},
{
"claves": [
"Bachata · República Dominicana · Santo Domingo",
"con güira y bongó",
"la guitarra diabla"
],
"ts": [
16.78,
17.9,
19.14
],
"t": 16.78,
"estilo": "lista",
"fijo": true,
"lado": "der"
},
{
"son": [
"loops/s2/bachata_guira.mp3",
"loops/s2/bachata_bongo.mp3"
],
"t": 17.84,
"dur": 2.94,
"vol": 0.4,
"grupo": "s4_n01:bachata:3",
"ciclo": 7.3846,
"ico": [
"img/s1/inst_m_guira.webp",
"img/s2/inst_bongo.webp"
],
"tira": "derb",
"pjico": "img/s2/pj/ramoncito_rie.webp"
},
{
"son": [
"loops/s2/bachata_diabla.mp3"
],
"t": 19.08,
"dur": 1.7,
"vol": 0.4,
"grupo": "s4_n01:bachata:3",
"ciclo": 7.3846,
"ico": [
"img/s2/inst_h_diabla.webp"
],
"tira": "derb",
"pjico": "img/s2/pj/ramoncito_rie.webp"
},
{
"quitaFijos": true,
"t": 20.7
},
{
"claves": [
"Samba · Brasil · Río de Janeiro",
"carnaval en la calle",
"con sus surdos",
"y el apito, que manda"
],
"ts": [
20.92,
22.1,
23.4,
24.28
],
"t": 20.92,
"estilo": "lista",
"fijo": true,
"lado": "izq"
},
{
"son": [
"loops/s3/samba_sincopa.mp3",
"loops/s3/samba_agogo.mp3"
],
"t": 22.04,
"dur": 3.8,
"vol": 0.4,
"grupo": "s4_n01:samba:4",
"ciclo": 8.0,
"ico": [
"img/s3/inst_s_tamborim.webp",
"img/s3/inst_s_caixa.webp",
"img/s3/inst_s_agogo.webp"
],
"tira": "izq",
"pjico": "img/s3/pj/ritinha_saluda.webp"
},
{
"son": [
"loops/s3/samba_surdos.mp3"
],
"t": 23.34,
"dur": 2.5,
"vol": 0.4,
"grupo": "s4_n01:samba:4",
"ciclo": 8.0,
"ico": [
"img/s3/inst_s_surdo_grave.webp",
"img/s3/inst_s_surdo_agudo.webp"
],
"tira": "izq",
"pjico": "img/s3/pj/ritinha_saluda.webp"
},
{
"son": [
"loops/s3/samba_apito.mp3"
],
"t": 24.22,
"dur": 1.62,
"vol": 0.4,
"grupo": "s4_n01:samba:4",
"ciclo": 8.0,
"ico": [
"img/s3/inst_s_apito.webp"
],
"tira": "izq",
"pjico": "img/s3/pj/ritinha_saluda.webp"
},
{
"claves": [
"Bossa nova · Brasil · Ipanema, Río de Janeiro",
"la samba en voz bajita",
"una guitarra que lo hace todo",
"la percusión de puntillas"
],
"ts": [
25.98,
27.26,
28.46,
30.02
],
"t": 25.98,
"estilo": "lista",
"fijo": true,
"lado": "der"
},
{
"son": [
"loops/s3/bossa_guitarra.mp3"
],
"t": 28.4,
"dur": 4.96,
"vol": 0.4,
"grupo": "s4_n01:bossa:5",
"ciclo": 13.7143,
"ico": [
"img/s3/inst_b_guitarra.webp"
],
"tira": "derb",
"pjico": "img/s3/pj/seutom_saluda.webp"
},
{
"son": [
"loops/s3/bossa_aro.mp3"
],
"t": 29.96,
"dur": 3.4,
"vol": 0.4,
"grupo": "s4_n01:bossa:5",
"ciclo": 13.7143,
"ico": [
"img/s3/inst_b_aro.webp"
],
"tira": "derb",
"pjico": "img/s3/pj/seutom_saluda.webp"
}
],
"s4_n02": [
{
"quitaFijos": true,
"t": 0
},
{
"musica": {
"src": "mus/s4_viaje_nueva_york.mp3",
"vol": 0.62,
"bucle": false,
"corte": true
},
"t": 2.02
},
{
"claves": [
"¡nos vamos a Nueva York!"
],
"ts": [
1.32
],
"t": 1.32,
"nofiltra": true
}
],
"s4_n03": [
{
"claves": [
"Nueva York"
],
"ts": [
0.12
],
"t": 0.12,
"estilo": "titulo"
},
{
"claves": [
"la ciudad que nunca duerme"
],
"ts": [
1.44
],
"t": 1.44,
"nofiltra": true
},
{
"claves": [
"En los años 60 y 70",
"en sus barrios latinos"
],
"ts": [
3.28,
5.04
],
"t": 3.28,
"nofiltra": true
},
{
"claves": [
"músicos de Puerto Rico y de Cuba",
"el son cubano, el mambo y el jazz"
],
"ts": [
6.38,
8.58
],
"t": 6.38,
"nofiltra": true
},
{
"claves": [
"un sonido nuevo, con mucha calle",
"la salsa"
],
"ts": [
11.82,
14.08
],
"t": 11.82,
"nofiltra": true
}
],
"s4_n04": [
{
"claves": [
"nos colamos en un plató de televisión"
],
"ts": [
0.52
],
"t": 0.52,
"nofiltra": true
}
],
"s4_p01": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "saluda",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "brazos",
"lado": "der"
},
"t": 4.64
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "baila",
"lado": "der"
},
"t": 5.58
},
{
"claves": [
"«Noche de Salsa»",
"en directo desde Nueva York"
],
"ts": [
1.74,
2.7
],
"t": 1.74,
"nofiltra": true
},
{
"claves": [
"Soy Papo Vega"
],
"ts": [
4.68
],
"t": 4.68,
"nofiltra": true
}
],
"s4_p02": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "piensa",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "explica",
"lado": "der"
},
"t": 1.86
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "rie",
"lado": "der"
},
"t": 8.26
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "senala",
"lado": "der"
},
"t": 16.46
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "pulgar",
"lado": "der"
},
"t": 19.08
},
{
"claves": [
"es una mezcla",
"como una salsa de cocina"
],
"ts": [
2.14,
3.12
],
"t": 2.14,
"nofiltra": true
},
{
"claves": [
"el pianista Richie Ray",
"como el kétchup"
],
"ts": [
5.32,
7.68
],
"t": 5.32,
"nofiltra": true
},
{
"claves": [
"el gran Tito Puente",
"«La única salsa que yo conozco viene en una botella»"
],
"ts": [
8.8,
10.64
],
"t": 8.8,
"nofiltra": true
},
{
"claves": [
"a principios de los setenta",
"una discográfica y un programa de tele",
"¡y el nombre se quedó!"
],
"ts": [
14.0,
16.5,
19.12
],
"t": 14.0,
"nofiltra": true
}
],
"s4_p03": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "senala",
"lado": "der"
},
"t": 2.58
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "explica",
"lado": "der"
},
"t": 5.96
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "brazos",
"lado": "der"
},
"t": 8.74
},
{
"claves": [
"primera pista, ¡la más importante!",
"los tres percusionistas",
"tienen doble papel"
],
"ts": [
0.12,
3.18,
4.56
],
"t": 0.12,
"nofiltra": true
},
{
"claves": [
"en la estrofa tocan una cosa",
"y en el estribillo, ¡cambian de instrumento!"
],
"ts": [
6.0,
7.66
],
"t": 6.0,
"nofiltra": true
}
],
"s4_p04": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"img": "img/s4/inst_s_timbales.webp",
"nom": "Timbales",
"t": 0.12,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"img": "img/s4/inst_s_cencerro.webp",
"nom": "Cencerro",
"t": 6.58,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "aplaude",
"lado": "der"
},
"t": 7.94
},
{
"claves": [
"el timbalero",
"en la estrofa toca la cáscara",
"el lateral metálico del timbal",
"seco y pequeño"
],
"ts": [
0.12,
0.84,
2.71,
4.4
],
"t": 0.12,
"nofiltra": true,
"arriba": true
},
{
"claves": [
"en el estribillo se pasa al cencerro",
"¡cá-cucu, cá-cucu!"
],
"ts": [
5.92,
7.98
],
"t": 5.92,
"nofiltra": true,
"arriba": true
}
],
"s4_p05": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"img": "img/s4/inst_s_bongo.webp",
"nom": "Bongó",
"t": 0.12,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "oreja",
"lado": "der"
},
"t": 5.6
},
{
"img": "img/s4/inst_s_cencerro_b.webp",
"nom": "Otro cencerro",
"t": 7.86,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"claves": [
"en la estrofa, el bongó",
"ritmo «martillo»"
],
"ts": [
1.26,
3.26
],
"t": 1.26,
"nofiltra": true
},
{
"claves": [
"agarra otro cencerro, más agudo",
"un contracanto al del timbalero"
],
"ts": [
7.86,
10.64
],
"t": 7.86,
"nofiltra": true,
"arriba": true
}
],
"s4_p05b": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "oreja",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "rie",
"lado": "der"
},
"t": 2.02
},
{
"claves": [
"cómo suenan los dos juntos",
"¡menuda cencerrada!"
],
"ts": [
0.44,
2.06
],
"t": 0.44,
"nofiltra": true
}
],
"s4_p06": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"img": "img/s4/inst_s_conga.webp",
"nom": "Conga",
"t": 0.12,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"claves": [
"en la estrofa",
"aunque tiene dos congas delante",
"solo usa una"
],
"ts": [
1.14,
2.1,
3.96
],
"t": 1.14,
"nofiltra": true
}
],
"s4_p06b": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"img": "img/s4/inst_s_congas.webp",
"nom": "Las dos congas",
"t": 0.94,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"pj": {
"q": "PAPO VEGA",
"pose": "brazos",
"lado": "der"
},
"t": 4.64
},
{
"claves": [
"en el estribillo, saca a pasear la grave"
],
"ts": [
0.22
],
"t": 0.22,
"nofiltra": true
},
{
"claves": [
"ese golpe gordo de abajo",
"lo sostiene todo"
],
"ts": [
4.68,
6.0
],
"t": 4.68,
"nofiltra": true
}
],
"s4_p07": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"img": "img/s4/inst_s_claves.webp",
"nom": "Claves",
"t": 0.94,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"img": "img/s4/inst_s_bajo.webp",
"nom": "Bajo",
"t": 4.76,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"img": "img/s3/inst_b_piano.webp",
"nom": "Piano",
"t": 8.54,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"claves": [
"la clave",
"dos palitos que ordenan a todos los demás"
],
"ts": [
0.94,
2.14
],
"t": 0.94,
"nofiltra": true,
"arriba": true
},
{
"claves": [
"un bajo que (casi) nunca marca el uno",
"¡por eso empuja tanto!"
],
"ts": [
4.76,
6.88
],
"t": 4.76,
"nofiltra": true,
"arriba": true
},
{
"claves": [
"y el piano, con su tumbao",
"un dibujo que se repite y se repite",
"como un motor"
],
"ts": [
8.54,
10.3,
12.44
],
"t": 8.54,
"nofiltra": true,
"arriba": true
}
],
"s4_p08": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "pulgar",
"lado": "der"
},
"t": 0
},
{
"claves": [
"Arma la banda",
"pasa de la estrofa al estribillo"
],
"ts": [
1.12,
2.1
],
"t": 1.12,
"nofiltra": true
}
],
"s4_p09": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "brazos",
"lado": "der"
},
"t": 0
},
{
"claves": [
"¡Y aquí llega la banda!"
],
"ts": [
0.12
],
"t": 0.12,
"nofiltra": true
},
{
"claves": [
"¿tú no eres el Schoenberg ese?"
],
"ts": [
5.96
],
"t": 5.96,
"nofiltra": true
}
],
"s4_ch1": [
{
"pj": null,
"t": 0
},
{
"vari": "RECURSO_CHU",
"t": 7.04
},
{
"claves": [
"tengo muchos nombres",
"Antónico…",
"…Schoenberg…"
],
"ts": [
1.0,
4.28,
5.8
],
"t": 1.0,
"nofiltra": true
},
{
"claves": [
"¡pero aquí soy Chucho, el conguero!"
],
"ts": [
7.08
],
"t": 7.08,
"nofiltra": true
}
],
"s4_p10": [
{
"pj": null,
"t": 0
},
{
"claves": [
"¡Pues bienvenido, Chucho!"
],
"ts": [
0.12
],
"t": 0.12,
"nofiltra": true
}
],
"s4_m01": [
{
"pj": {
"q": "DON MAMBERTO",
"pose": "saluda",
"lado": "der"
},
"t": 0
},
{
"vari": "RECURSO_MB0",
"t": 0
},
{
"pj": {
"q": "DON MAMBERTO",
"pose": "explica",
"lado": "der"
},
"t": 3.4
},
{
"pj": {
"q": "DON MAMBERTO",
"pose": "brazos",
"lado": "der"
},
"t": 5.8
},
{
"claves": [
"Don Mamberto",
"trompeta en La Habana"
],
"ts": [
3.44,
5.84
],
"t": 3.44,
"nofiltra": true
}
],
"s4_m02": [
{
"pj": {
"q": "DON MAMBERTO",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"vari": "RECURSO_MB1",
"t": 0
},
{
"vari": "RECURSO_MB2",
"t": 2.78
},
{
"pj": {
"q": "DON MAMBERTO",
"pose": "brazos",
"lado": "der"
},
"t": 2.78
},
{
"vari": "RECURSO_MB3",
"t": 10.02
},
{
"pj": {
"q": "DON MAMBERTO",
"pose": "senala",
"lado": "der"
},
"t": 10.02
},
{
"vari": "RECURSO_MB4",
"t": 18.84
},
{
"pj": {
"q": "DON MAMBERTO",
"pose": "rie",
"lado": "der"
},
"t": 18.84
},
{
"claves": [
"Antes de la salsa: el mambo"
],
"ts": [
0.12
],
"t": 0.12,
"nofiltra": true
},
{
"claves": [
"la parte más caliente del danzón",
"donde los metales se sueltan"
],
"ts": [
6.96,
10.06
],
"t": 6.96,
"nofiltra": true
},
{
"claves": [
"a ese trozo de vientos lo llaman «el mambo»"
],
"ts": [
15.54
],
"t": 15.54,
"nofiltra": true
},
{
"claves": [
"Pérez Prado",
"de moda en medio mundo"
],
"ts": [
19.82,
24.76
],
"t": 19.82,
"nofiltra": true
}
],
"s4_m03": [
{
"pj": {
"q": "DON MAMBERTO",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"vari": "RECURSO_MB3",
"t": 4.18
},
{
"img": "img/s4/inst_m_saxo_baritono.webp",
"nom": "Saxos",
"t": 4.22,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"img": "img/s4/inst_s_trompeta.webp",
"nom": "Trompetas",
"t": 6.0,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"pj": {
"q": "DON MAMBERTO",
"pose": "brazos",
"lado": "der"
},
"t": 8.88
},
{
"pj": {
"q": "DON MAMBERTO",
"pose": "rie",
"lado": "der"
},
"t": 10.32
},
{
"claves": [
"tres cosas:",
"melodías de vientos",
"los saxos abajo, con la melodía",
"las trompetas contestando desde arriba"
],
"ts": [
1.58,
2.58,
4.22,
6.38
],
"t": 1.58,
"nofiltra": true,
"arriba": true
},
{
"claves": [
"flow",
"¡el grito!"
],
"ts": [
8.92,
10.36
],
"t": 8.92,
"nofiltra": true
}
],
"s4_m04": [
{
"vari": "RECURSO_MB3",
"t": 0
},
{
"quitaSueltas": true,
"t": 0
},
{
"pj": {
"q": "DON MAMBERTO",
"pose": "senala",
"lado": "der"
},
"t": 0
},
{
"claves": [
"¡Chucho!"
],
"ts": [
0.94
],
"t": 0.94,
"nofiltra": true
}
],
"s4_grito": [
{
"vari": "RECURSO_MB4",
"t": 0
},
{
"quitaSueltas": true,
"t": 0
},
{
"pj": {
"q": "CHUCHO",
"pose": "grito",
"lado": "der"
},
"t": 0
},
{
"son": [
"sfx/s4/publico_mambo.mp3"
],
"t": 0,
"dur": 3.2,
"vol": 0.5,
"off": 0
}
],
"s4_l01": [
{
"pj": {
"q": "LUENA",
"pose": "saluda",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "LUENA",
"pose": "explica",
"lado": "der"
},
"t": 3.24
},
{
"pj": {
"q": "LUENA",
"pose": "senala",
"lado": "der"
},
"t": 7.04
},
{
"claves": [
"¿Qué es tanto grito?"
],
"ts": [
0.12
],
"t": 0.12,
"nofiltra": true
},
{
"claves": [
"en Angola «mambo» quiere decir «cosa»"
],
"ts": [
3.82
],
"t": 3.82,
"nofiltra": true
}
],
"s4_p11": [
{
"pj": {
"q": "PAPO VEGA",
"pose": "piensa",
"lado": "der"
},
"t": 0
},
{
"claves": [
"¿Angola?",
"¡Pero si nuestro viaje era por Latinoamérica!"
],
"ts": [
0.12,
1.02
],
"t": 0.12,
"nofiltra": true
}
],
"s4_m05": [
{
"pj": {
"q": "DON MAMBERTO",
"pose": "rie",
"lado": "der"
},
"t": 0
},
{
"claves": [
"¿Nos hemos salido del mapa?"
],
"ts": [
1.48
],
"t": 1.48,
"nofiltra": true
}
],
"s4_l02": [
{
"pj": {
"q": "LUENA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "LUENA",
"pose": "corazon",
"lado": "der"
},
"t": 2.7
},
{
"pj": {
"q": "LUENA",
"pose": "brazos",
"lado": "der"
},
"t": 7.58
},
{
"claves": [
"Del mapa, no",
"del origen"
],
"ts": [
0.12,
1.54
],
"t": 0.12,
"nofiltra": true
},
{
"claves": [
"Soy Luena, de Luanda"
],
"ts": [
2.74
],
"t": 2.74,
"nofiltra": true
},
{
"claves": [
"¡Al avión, que nos vamos a Angola!"
],
"ts": [
7.62
],
"t": 7.62,
"nofiltra": true
}
],
"s4_n05": [
{
"claves": [
"Angola"
],
"ts": [
0.12
],
"t": 0.12,
"estilo": "titulo"
},
{
"claves": [
"En la costa oeste de África",
"donde se habla portugués"
],
"ts": [
1.24,
3.22
],
"t": 1.24,
"nofiltra": true
},
{
"claves": [
"muchísimos de los africanos que llevaron sus ritmos a América"
],
"ts": [
6.28
],
"t": 6.28,
"nofiltra": true
},
{
"claves": [
"en los años 80, nació la kizomba"
],
"ts": [
10.58
],
"t": 10.58,
"nofiltra": true
}
],
"s4_l03": [
{
"pj": {
"q": "LUENA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "LUENA",
"pose": "corazon",
"lado": "der"
},
"t": 5.04
},
{
"pj": {
"q": "LUENA",
"pose": "senala",
"lado": "der"
},
"t": 14.42
},
{
"pj": {
"q": "LUENA",
"pose": "baila",
"lado": "der"
},
"t": 17.96
},
{
"pj": {
"q": "LUENA",
"pose": "pulgar",
"lado": "der"
},
"t": 30.08
},
{
"claves": [
"Kizomba quiere decir «fiesta»",
"en kimbundu, una lengua de Angola"
],
"ts": [
0.12,
2.14
],
"t": 0.12,
"nofiltra": true
},
{
"claves": [
"Su abuelo es nuestro semba",
"¡la misma palabra que dio nombre a la samba brasileña!",
"+ el zouk de las Antillas francesas"
],
"ts": [
5.08,
7.04,
11.28
],
"t": 5.08,
"nofiltra": true
},
{
"claves": [
"Lisboa y París"
],
"ts": [
16.08
],
"t": 16.08,
"nofiltra": true
},
{
"claves": [
"salsa y bachata",
"SBK: salsa, bachata y kizomba"
],
"ts": [
19.68,
21.9
],
"t": 19.68,
"nofiltra": true
},
{
"claves": [
"este capítulo se llama AfroLatin",
"y no solo Latin"
],
"ts": [
30.12,
32.5
],
"t": 30.12,
"nofiltra": true
}
],
"s4_l04": [
{
"pj": {
"q": "LUENA",
"pose": "oreja",
"lado": "der"
},
"t": 0
},
{
"claves": [
"¿les suena este ritmo?"
],
"ts": [
1.32
],
"t": 1.32,
"nofiltra": true
}
],
"s4_l04b": [
{
"pj": {
"q": "LUENA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"img": "img/s4/inst_k_caja.webp",
"nom": "Caja de ritmos",
"t": 2.6,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"pj": {
"q": "LUENA",
"pose": "corazon",
"lado": "der"
},
"t": 4.12
},
{
"claves": [
"el mismo dibujo que el del reggaetón",
"el dembow"
],
"ts": [
0.26,
2.6
],
"t": 0.26,
"nofiltra": true,
"arriba": true
},
{
"claves": [
"aquí va acariciado",
"en vez de golpeado"
],
"ts": [
4.16,
5.46
],
"t": 4.16,
"nofiltra": true
}
],
"s4_l05": [
{
"pj": {
"q": "LUENA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"img": "img/s4/inst_k_caja.webp",
"nom": "Caja de ritmos",
"t": 4.22,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"img": "img/s4/inst_k_sinte.webp",
"nom": "Bajo de sintetizador",
"t": 5.68,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"img": "img/s4/inst_k_teclado.webp",
"nom": "Colchón de teclado",
"t": 8.06,
"x": 0.36,
"y": 0.46,
"h": 0.5,
"caja": true
},
{
"claves": [
"Va lento, sin ninguna prisa"
],
"ts": [
0.12
],
"t": 0.12,
"nofiltra": true
},
{
"claves": [
"suena programado",
"caja de ritmos",
"un bajo de sintetizador muy profundo",
"y un colchón de teclado"
],
"ts": [
2.72,
4.22,
5.68,
8.06
],
"t": 2.72,
"nofiltra": true,
"arriba": true
}
],
"s4_l06": [
{
"pj": {
"q": "LUENA",
"pose": "corazon",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "LUENA",
"pose": "oreja",
"lado": "der"
},
"t": 9.2
},
{
"claves": [
"lo que la hace especial es el baile"
],
"ts": [
0.2
],
"t": 0.2,
"nofiltra": true
},
{
"claves": [
"en pareja, muy juntos",
"de los tobillos a las mejillas",
"casi frente con frente"
],
"ts": [
2.74,
4.96,
7.1
],
"t": 2.74,
"nofiltra": true
},
{
"claves": [
"Es un baile de conexión",
"se baila escuchando a la otra persona"
],
"ts": [
9.24,
11.2
],
"t": 9.24,
"nofiltra": true
}
],
"s4_l07": [
{
"pj": {
"q": "LUENA",
"pose": "explica",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "LUENA",
"pose": "corazon",
"lado": "der"
},
"t": 6.0
},
{
"claves": [
"las letras no van de cualquier cosa",
"hablan de amor, de la tierra, de la vida",
"con mucha más profundidad"
],
"ts": [
0.18,
2.58,
6.04
],
"t": 0.18,
"nofiltra": true
}
],
"s4_l08": [
{
"pj": {
"q": "LUENA",
"pose": "senala",
"lado": "der"
},
"t": 0
},
{
"pj": {
"q": "LUENA",
"pose": "pulgar",
"lado": "der"
},
"t": 3.04
},
{
"claves": [
"la joya escondida de este viaje"
],
"ts": [
0.66
],
"t": 0.66,
"nofiltra": true
},
{
"claves": [
"si te gusta el reggaetón",
"esto te va a encantar"
],
"ts": [
3.08,
4.82
],
"t": 3.08,
"nofiltra": true
}
],
"s4_l09": [
{
"pj": {
"q": "LUENA",
"pose": "pulgar",
"lado": "der"
},
"t": 0
},
{
"claves": [
"arma tu kizomba",
"ritmo, bajo, teclados"
],
"ts": [
1.22,
2.64
],
"t": 1.22,
"nofiltra": true
}
],
"s4_l10": [
{
"pj": {
"q": "LUENA",
"pose": "brazos",
"lado": "der"
},
"t": 0
},
{
"claves": [
"a escuchar, despacito"
],
"ts": [
0.54
],
"t": 0.54,
"nofiltra": true
}
],
"s4_l11": [
{
"pj": {
"q": "LUENA",
"pose": "corazon",
"lado": "der"
},
"t": 0
},
{
"claves": [
"Siente el trance"
],
"ts": [
0.12
],
"t": 0.12,
"nofiltra": true
}
],
"s4_rp": [
{
"claves": [
"Salsa · Estados Unidos · Nueva York",
"una mezcla con mucha calle",
"la clave debajo de todo",
"los percusionistas cambiando de instrumento"
],
"ts": [
1.96,
3.0,
4.82,
6.46
],
"t": 1.96,
"estilo": "lista",
"fijo": true,
"lado": "izq"
},
{
"son": [
"loops/s4/salsa_bajo.mp3",
"loops/s4/salsa_piano.mp3"
],
"t": 2.94,
"dur": 7.66,
"vol": 0.4,
"grupo": "s4_rp:salsa:0",
"ciclo": 10.1053,
"ico": [
"img/s4/inst_s_bajo.webp",
"img/s3/inst_b_piano.webp"
],
"tira": "colizq"
},
{
"son": [
"loops/s4/salsa_clave.mp3"
],
"t": 4.76,
"dur": 5.84,
"vol": 0.4,
"grupo": "s4_rp:salsa:0",
"ciclo": 10.1053,
"ico": [
"img/s4/inst_s_claves.webp"
],
"tira": "colizq"
},
{
"son": [
"loops/s4/salsa_timbal_estribillo.mp3",
"loops/s4/salsa_bongo_estribillo.mp3",
"loops/s4/salsa_conga_estribillo.mp3"
],
"t": 6.4,
"dur": 4.2,
"vol": 0.4,
"grupo": "s4_rp:salsa:0",
"ciclo": 10.1053,
"ico": [
"img/s4/inst_s_cencerro.webp",
"img/s4/inst_s_cencerro_b.webp",
"img/s4/inst_s_congas.webp"
],
"tira": "colizq"
}
],
"s4_rm": [
{
"claves": [
"Mambo · Cuba · La Habana",
"los vientos, el flow",
"¡y el grito!"
],
"ts": [
0.12,
1.06,
2.62
],
"t": 0.12,
"estilo": "lista",
"fijo": true,
"lado": "der"
},
{
"son": [
"loops/s4/mambo_vientos.mp3"
],
"t": 1.0,
"dur": 1.5,
"vol": 0.4,
"grupo": "s4_rm:mambo:0",
"ciclo": 16.0,
"ico": [
"img/s4/inst_m_saxo_baritono.webp",
"img/s4/inst_s_trompeta.webp"
],
"tira": "colder"
},
{
"son": [
"voz/s4/s4_grito.mp3"
],
"t": 3.99,
"dur": 2.3,
"vol": 0.95,
"off": 0
}
],
"s4_rl": [
{
"quitaFijos": true,
"t": 0
},
{
"claves": [
"Kizomba · Angola · Luanda",
"el dembow, despacito",
"un bajo profundo",
"un baile de conexión"
],
"ts": [
0.12,
1.5,
3.78,
4.86
],
"t": 0.12,
"estilo": "lista",
"fijo": true,
"lado": "izq"
},
{
"son": [
"loops/s4/kiz_ritmo.mp3"
],
"t": 1.44,
"dur": 5.88,
"vol": 0.4,
"grupo": "s4_rl:kiz:0",
"ciclo": 11.2941,
"ico": [
"img/s4/inst_k_caja.webp"
],
"tira": "colizq"
},
{
"son": [
"loops/s4/kiz_bajo.mp3"
],
"t": 3.72,
"dur": 3.6,
"vol": 0.4,
"grupo": "s4_rl:kiz:0",
"ciclo": 11.2941,
"ico": [
"img/s4/inst_k_sinte.webp"
],
"tira": "colizq"
}
],
"s4_n06": [
{
"quitaFijos": true,
"t": 0
},
{
"claves": [
"Aquí termina nuestro viaje",
"de A Coruña a Latinoamérica… y de vuelta a África"
],
"estilo": "titulo",
"fijo": true,
"lado": "cabeza cierre",
"t": 0.4,
"ts": [
0.4,
1.42
]
},
{
"musica": {
"src": "mus/s4_kizomba_fondo.mp3",
"vol": 0.5
},
"t": 0.28
}
]
});
BLUES.CAPAS.tam = Object.assign(BLUES.CAPAS.tam || {}, {"img/s4/inst_s_timbales.webp": {"w": 0.3443, "h": 0.384, "x": 0.5, "y": 0.4156, "ry": 0.6876}, "img/s4/inst_s_bongo.webp": {"w": 0.2008, "h": 0.2102, "x": 0.5, "y": 0.4156, "ry": 0.6006}, "img/s4/inst_s_cencerro.webp": {"w": 0.0956, "h": 0.16, "x": 0.5, "y": 0.4156, "ry": 0.5756}, "img/s4/inst_s_cencerro_b.webp": {"w": 0.0765, "h": 0.1129, "x": 0.5, "y": 0.4156, "ry": 0.552}, "img/s4/inst_s_conga.webp": {"w": 0.1585, "h": 0.46, "x": 0.5, "y": 0.4156, "ry": 0.7256}, "img/s4/inst_s_congas.webp": {"w": 0.2961, "h": 0.46, "x": 0.5, "y": 0.4156, "ry": 0.7256}, "img/s4/inst_s_claves.webp": {"w": 0.1052, "h": 0.1725, "x": 0.5, "y": 0.4156, "ry": 0.5818}, "img/s4/inst_s_bajo.webp": {"w": 0.0919, "h": 0.46, "x": 0.5, "y": 0.4156, "ry": 0.7256}, "img/s3/inst_b_piano.webp": {"w": 0.3388, "h": 0.46, "x": 0.5, "y": 0.4156, "ry": 0.7256}, "img/s4/inst_s_trompeta.webp": {"w": 0.0718, "h": 0.425, "x": 0.5, "y": 0.4156, "ry": 0.7081}, "img/s4/inst_s_trombon.webp": {"w": 0.0736, "h": 0.46, "x": 0.5, "y": 0.4156, "ry": 0.7256}, "img/s4/inst_m_saxo_tenor.webp": {"w": 0.1221, "h": 0.46, "x": 0.5, "y": 0.4156, "ry": 0.7256}, "img/s4/inst_m_saxo_baritono.webp": {"w": 0.1277, "h": 0.46, "x": 0.5, "y": 0.4156, "ry": 0.7256}, "img/s4/inst_k_caja.webp": {"w": 0.1721, "h": 0.2119, "x": 0.5, "y": 0.4156, "ry": 0.6015}, "img/s4/inst_k_teclado.webp": {"w": 0.4781, "h": 0.2398, "x": 0.5, "y": 0.4156, "ry": 0.6154}, "img/s4/inst_k_sinte.webp": {"w": 0.3825, "h": 0.3318, "x": 0.5, "y": 0.4156, "ry": 0.6614}});

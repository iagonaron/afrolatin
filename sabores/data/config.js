/* 4 SABORES · configuración del portal (la lee js/motor.js; sin este fichero el motor se comporta como en el Blues) */
BLUES.CFG = {
  tit: 'Afro Latin', sub: 'Unidad 7 · 4 sabores', ano: 'DE COLOMBIA A ANGOLA', dias: 4, etiqueta: 'SABOR',
  titulos: { 1: 'Cumbia y merengue', 2: 'Bolero y bachata', 3: 'Samba y bossa nova', 4: 'Salsa y kizomba' },
  colores: { 1: '#C9603F', 2: '#1F9AA0', 3: '#3E7D4F', 4: '#B9802A' },
  elige: 'un sabor', talon: 'PASE DE BAILE', serie: '4S·0', claveHitos: 'lm_sabores_hitos',
  musCarga: { 1: { src: 'mus/s1_cumbia_carga.mp3', vol: .6 } },   // (Iago 23:19: «la de la carga no me acaba de convencer, haz otra») Suno «AfroLatin · Cumbia de carga»
  /* (27-oct) portada estilo «cartel» (propuesta A de C1, elegida por Iago con cambios: sin personajes, fondo caribeño, un bodegón de
     instrumentos por sabor en img/portada/sabor_N.webp y el fondo en img/portada/fondo.webp; tarjetas iguales con su icono) */
  portada: 'cartel', titPortada: 'Afro<span>Latin</span>', subPortada: 'Unidad 7 · Un viaje en 4 sabores', esquina: 'DE COLOMBIA A ANGOLA<br>2.º GP · LM AT HOME',
  coloresPortada: { 1: '#FF8A3D', 2: '#7ED3A8', 3: '#FFC94D', 4: '#F46FA0' },   // (28-oct, Iago) los colores del 2 y el 3, intercambiados
  /* (28-oct, Iago: «el fondo de la portada, animarlo un poco: luces, algún brillo del mar, un pelín de vida») js/portada_vida.js */
  vidaPortada: { caen: 34,   // (28-oct 09:13) motitas que caen
    luces: [[.681, .031, .022], [.709, .067, .022], [.742, .086, .022], [.784, .094, .022], [.831, .083, .022], [.891, .053, .022], [.958, .014, .022],
            [.923, .169, .02], [.9526, .231, .05], [.988, .296, .04]],
    sol: [.235, .47, .075],
    mar: { x0: .08, x1: .8, y0: .505, y1: .56, sol: [.19, .31], cada: .16, max: 9 }
  },
  /* (28-oct, Iago: «maracas, guitarra, parche y trompeta sí, pero no ese diseño de icono» → eligió el instrumento real, sin sombreado) recortes
     de las hojas de instrumentos (img/portada/icono_N.webp); los dibujos de antes, en portada_prop/iconos/iconos.py */
  iconos: {
    1: '<img class="s4p-icim" src="img/portada/icono_1.webp" alt="">', 2: '<img class="s4p-icim" src="img/portada/icono_2.webp" alt="">',
    3: '<img class="s4p-icim" src="img/portada/icono_3.webp" alt="">', 4: '<img class="s4p-icim" src="img/portada/icono_4.webp" alt="">'
  },   // (27-oct) música mientras carga cada sabor
  emblemas: {   /* provisionales hasta las láminas de ChatGPT: conga, guitarra, pandeiro, trompeta */
    1: '<svg viewBox="0 0 60 50"><path d="M22 6h16l3 34H19z"/><path d="M19 40h22l-2 6H21z"/><path d="M22 6c0-2 16-2 16 0"/><path d="M21 16h18M20 28h20"/></svg>',
    2: '<svg viewBox="0 0 60 50"><circle cx="22" cy="32" r="10"/><circle cx="22" cy="32" r="3"/><path d="M28 26 50 6M46 4l6 6"/></svg>',
    3: '<svg viewBox="0 0 60 50"><circle cx="30" cy="25" r="17"/><circle cx="30" cy="25" r="11"/><circle cx="30" cy="8" r="2"/><circle cx="30" cy="42" r="2"/><circle cx="13" cy="25" r="2"/><circle cx="47" cy="25" r="2"/></svg>',
    4: '<svg viewBox="0 0 60 50"><path d="M6 22h30v8H6z"/><path d="M36 18l14-8v30l-14-8z"/><path d="M14 30v8M20 30v8M26 30v8"/></svg>'
  }
};

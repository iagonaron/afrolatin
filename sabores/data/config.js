/* 4 SABORES · configuración del portal (la lee js/motor.js; sin este fichero el motor se comporta como en el Blues) */
BLUES.CFG = {
  tit: 'Afro Latin', sub: 'Unidad 7 · 4 sabores', ano: 'DE COLOMBIA A ANGOLA', dias: 4, etiqueta: 'SABOR',
  titulos: { 1: 'Cumbia y merengue', 2: 'Bolero y bachata', 3: 'Samba y bossa nova', 4: 'Salsa y kizomba' },
  colores: { 1: '#C9603F', 2: '#1F9AA0', 3: '#3E7D4F', 4: '#B9802A' },
  elige: 'un sabor', talon: 'PASE DE BAILE', serie: '4S·0', claveHitos: 'lm_sabores_hitos',
  musCarga: { 1: { src: 'mus/s1_cumbia_fondo.mp3', vol: .6 } },
  /* (27-oct) portada estilo «cartel» (propuesta A de C1, elegida por Iago con cambios: sin personajes, fondo caribeño, un bodegón de
     instrumentos por sabor en img/portada/sabor_N.webp y el fondo en img/portada/fondo.webp; tarjetas iguales con su icono) */
  portada: 'cartel', titPortada: 'Afro<span>Latin</span>', subPortada: 'Unidad 7 · Un viaje en 4 sabores', esquina: 'DE COLOMBIA A ANGOLA<br>2.º GP · LM AT HOME',
  coloresPortada: { 1: '#FF8A3D', 2: '#FFC94D', 3: '#7ED3A8', 4: '#F46FA0' },
  iconos: {   /* maracas, guitarra, pandeiro, trompeta */
    1: '<svg viewBox="0 0 48 48"><ellipse cx="17" cy="15" rx="8" ry="10"/><path d="M17 25v16"/><ellipse cx="32" cy="17" rx="7" ry="9"/><path d="M32 26v15"/></svg>',
    2: '<svg viewBox="0 0 48 48"><path d="M28 20 42 6M39 4l5 5"/><path d="M27 21c-4-3-9-2-11 2-6-1-11 4-10 10 1 7 9 10 15 7 4-2 6-5 6-9 3-2 4-6 0-10z"/><circle cx="18" cy="30" r="3"/></svg>',
    3: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="11"/><circle cx="24" cy="7" r="2"/><circle cx="24" cy="41" r="2"/><circle cx="7" cy="24" r="2"/><circle cx="41" cy="24" r="2"/></svg>',
    4: '<svg viewBox="0 0 48 48"><path d="M5 21h24v7H5z"/><path d="M29 17l13-8v31l-13-8z"/><path d="M12 28v7M18 28v7M24 28v7"/></svg>'
  },   // (27-oct) música mientras carga cada sabor
  emblemas: {   /* provisionales hasta las láminas de ChatGPT: conga, guitarra, pandeiro, trompeta */
    1: '<svg viewBox="0 0 60 50"><path d="M22 6h16l3 34H19z"/><path d="M19 40h22l-2 6H21z"/><path d="M22 6c0-2 16-2 16 0"/><path d="M21 16h18M20 28h20"/></svg>',
    2: '<svg viewBox="0 0 60 50"><circle cx="22" cy="32" r="10"/><circle cx="22" cy="32" r="3"/><path d="M28 26 50 6M46 4l6 6"/></svg>',
    3: '<svg viewBox="0 0 60 50"><circle cx="30" cy="25" r="17"/><circle cx="30" cy="25" r="11"/><circle cx="30" cy="8" r="2"/><circle cx="30" cy="42" r="2"/><circle cx="13" cy="25" r="2"/><circle cx="47" cy="25" r="2"/></svg>',
    4: '<svg viewBox="0 0 60 50"><path d="M6 22h30v8H6z"/><path d="M36 18l14-8v30l-14-8z"/><path d="M14 30v8M20 30v8M26 30v8"/></svg>'
  }
};

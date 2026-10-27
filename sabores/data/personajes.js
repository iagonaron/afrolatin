/* 4 SABORES · personajes: nombre en los subtítulos y su color (ver PROYECTO/BIBLIA.md §4) */
BLUES.PERSONAJES = {
  CANDE:    { nombre: 'Doña Cande',   corto: 'Cande',    color: '#F2A07B' },
  YUNIOR:   { nombre: 'Yunior',       corto: 'Yunior',   color: '#7FD3C6' },
  FAUSTINO: { nombre: 'Don Faustino', corto: 'Faustino', color: '#E9CD8A' },
  RAMONCITO: { nombre: 'Ramoncito',   corto: 'Ramoncito', color: '#F28BB0' },
  MAMBERTO: { nombre: 'Don Mamberto', corto: 'Mamberto', color: '#E8875C' },
  TOM:      { nombre: 'Seu Tom',      corto: 'Tom',      color: '#9CC7E8' },
  RITINHA:  { nombre: 'Ritinha',      corto: 'Ritinha',  color: '#A8D88F' },
  PAPO:     { nombre: 'Papo Vega',    corto: 'Papo',     color: '#F2C46A' },
  LUENA:    { nombre: 'Luena',        corto: 'Luena',    color: '#D4A9E8' },
  SCHOENBERG: { nombre: 'Schoenberg', corto: 'Schoenberg', color: '#B8C4D6' },
  NARR:     { nombre: '',             corto: '',         color: '#F3E6C8' }
};
BLUES.personaje = function (q) { return BLUES.PERSONAJES[q] || { nombre: q || '', corto: q || '', color: '#F3E6C8' }; };

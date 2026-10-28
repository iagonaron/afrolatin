/* ══════════════════════════════════════════════════════════════════════
   4 SABORES · mezcla de loops + interacción «mezclador»

   B.mezcla.crea({ bpm, compases, pistas:[{id,nom,img,loop,color,vol}], inicial:[ids], destino, vol })
     → { cargar(), arrancar(cuando), ganancia(id,v,rampa,en), realce(id,db,t0,t1,rampa), pararEn(rel,fade),
         parar(fade), nivel(id), nivelTotal(), valor(id), reloj(), cuando0, dur, … }

   - Cada mp3 lleva 0,5 s de margen delante (la cola del loop) y 0,5 s detrás (la cabeza):
     AudioBufferSourceNode con loop=true, loopStart=PRE, loopEnd=PRE+compases*240/bpm y start(cuando, PRE).
   - TODAS las pistas arrancan en el MISMO `cuando` (sincronía exacta); las apagadas, con ganancia 0.
   - ganancia(id, v, rampa=.03, en): v de 0 a 1 (1 = volumen propio de la pista, p.vol). Sin `en` es inmediata;
     con `en` (segundos desde cuando0) se programa con antelación en el reloj del AudioContext.
   - realce(id, db, t0, t1, rampa=.15): +db entre t0 y t1 (segundos desde cuando0); va en un nodo aparte, así
     convive con las entradas y salidas de bloque.
   - Todo con el reloj del AudioContext: al pausar el motor (B.pausa) se congela también la automatización.
   ══════════════════════════════════════════════════════════════════════ */
'use strict';
(function (B) {
  const S = B.s4, U = B.iu;
  const M = B.mezcla = B.mezcla || {};
  M.registro = [];            // gancho de pruebas: un asiento por cada start() de un AudioBufferSourceNode
  M.vivas = new Set();        // mezclas en marcha (para pruebas y para comprobar que no se quedan colgadas)

  /* RMS → 0–1 en dB (−48 dB = 0 · −10 dB = 1): así se ve también lo suave */
  const nivelDb = rms => Math.max(0, Math.min(1, (Math.log10(rms + 1e-6) * 20 + 48) / 38));

  M.crea = function (o) {
    o = o || {};
    const bpm = o.bpm || 90, compases = o.compases || 4, PRE = o.pre == null ? S.PRE : o.pre, L = S.durLoop(bpm, compases);
    const P = {}, ids = [];
    B.arr(o.pistas).forEach((p, i) => {
      if (!p || p.id == null || P[p.id]) return;
      P[p.id] = { id: p.id, nom: p.nom, color: S.color(p.color, i), loop: p.loop, vol: p.vol == null ? 1 : p.vol, buf: null, src: null, g: null, gr: null, an: null, v: 0, ult: null };
      ids.push(p.id);
    });
    B.arr(o.inicial).forEach(id => { if (P[id]) P[id].v = 1; });
    let out = null, anM = null, buf512 = null, vivos = 0, parado = false;
    const m = {
      bpm, compases, dur: L, pre: PRE, ids, cuando0: null, enMarcha: false, faltan: [],
      calendario: [],          // gancho de pruebas: cada cambio de ganancia programado {id, v, rel, rampa}
      realces: [],             // idem para los realces {id, db, t0, t1}
      pista: id => P[id] || null,
      tiene: id => !!P[id],

      /* descarga y descodifica los loops; una pista sin audio queda muda (no rompe nada) */
      async cargar() {
        m.faltan = [];
        await Promise.all(ids.map(async id => { const p = P[id]; p.buf = await S.carga(p.loop); if (!p.buf) m.faltan.push(id); }));
        return { faltan: m.faltan.slice() };
      },

      /* arranca todas las pistas en el mismo instante; devuelve ese instante (tiempo del AudioContext) */
      arrancar(cuando) {
        if (m.enMarcha || parado) return m.cuando0;
        const C = B.ac(), cu = cuando == null ? C.currentTime + .12 : cuando;
        out = C.createGain(); out.gain.value = o.vol == null ? 1 : o.vol;
        out.connect(o.destino || B.bus.mus);
        anM = C.createAnalyser(); anM.fftSize = 512; anM.smoothingTimeConstant = 0; out.connect(anM);
        buf512 = new Float32Array(512);
        ids.forEach(id => {
          const p = P[id];
          p.g = C.createGain(); p.g.gain.value = p.v * p.vol; p.ult = p.v * p.vol;
          p.gr = C.createGain(); p.gr.gain.value = 1;
          p.an = C.createAnalyser(); p.an.fftSize = 512; p.an.smoothingTimeConstant = 0;
          p.g.connect(p.gr); p.gr.connect(out); p.gr.connect(p.an);
          if (p.buf) {
            const s = C.createBufferSource();
            s.buffer = p.buf; s.loop = true; s.loopStart = PRE; s.loopEnd = PRE + L;
            s.connect(p.g);
            B.vivo(s, 'plano');
            const prev = s.onended;
            s.onended = () => { if (prev) prev(); if (--vivos <= 0) desmonta(); };
            vivos++;
            s.start(cu, PRE);
            p.src = s;
            M.registro.push({ id, cuando: cu, offset: PRE, loopStart: PRE, loopEnd: PRE + L, ctx: C.currentTime });
            if (M.registro.length > 400) M.registro.splice(0, 200);
          }
        });
        m.cuando0 = cu; m.enMarcha = true; M.vivas.add(m);
        if (!vivos) { /* ninguna pista tenía audio: nada que parar */ }
        return cu;
      },

      /* ganancia de una pista (0–1); rampa lineal. Con `en` (s desde cuando0) queda programada */
      ganancia(id, v, rampa, en) {
        const p = P[id]; if (!p) return;
        rampa = rampa == null ? .03 : rampa;
        const val = Math.max(0, v) * p.vol;
        if (!p.g) { p.v = v; return; }
        const C = B.ac(), g = p.g.gain;
        if (en == null) {
          const t = C.currentTime, cur = g.value;
          g.cancelScheduledValues(t); g.setValueAtTime(cur, t);
          if (rampa > 0) g.linearRampToValueAtTime(val, t + rampa); else g.setValueAtTime(val, t);
          p.v = v; p.ult = val;
          m.calendario.push({ id, v, rel: t - m.cuando0, rampa, ahora: true });
        } else {
          const t = m.cuando0 + en, prev = p.ult == null ? p.v * p.vol : p.ult;
          g.setValueAtTime(prev, t);
          if (rampa > 0) g.linearRampToValueAtTime(val, t + rampa); else g.setValueAtTime(val, t);
          p.ult = val;
          m.calendario.push({ id, v, rel: en, rampa });
        }
      },
      /* +db entre t0 y t1 (s desde cuando0), con rampas */
      realce(id, db, t0, t1, rampa) {
        const p = P[id]; if (!p || !p.gr) return;
        rampa = rampa == null ? .15 : rampa;
        const g = p.gr.gain, a = Math.pow(10, db / 20), ta = m.cuando0 + t0, tb = m.cuando0 + t1;
        g.setValueAtTime(1, ta); g.linearRampToValueAtTime(a, ta + rampa);
        g.setValueAtTime(a, tb); g.linearRampToValueAtTime(1, tb + rampa);
        m.realces.push({ id, db, t0, t1, rampa });
      },
      /* valor real de la ganancia (de la pista y del realce) en este instante: para pruebas */
      valor(id) { const p = P[id]; return p && p.g ? p.g.gain.value : 0; },
      valorRealce(id) { const p = P[id]; return p && p.gr ? p.gr.gain.value : 1; },

      /* nivel 0–1 (RMS) de una pista, ya con su ganancia: 0 si está apagada */
      nivel(id) {
        const p = P[id]; if (!p || !p.an) return 0;
        p.an.getFloatTimeDomainData(buf512);
        let s = 0; for (let i = 0; i < 512; i++) s += buf512[i] * buf512[i];
        return nivelDb(Math.sqrt(s / 512));
      },
      nivelTotal() {
        if (!anM) return 0;
        anM.getFloatTimeDomainData(buf512);
        let s = 0; for (let i = 0; i < 512; i++) s += buf512[i] * buf512[i];
        return nivelDb(Math.sqrt(s / 512));
      },
      /* segundos (oídos) desde el arranque; negativo antes de empezar */
      reloj() { return m.cuando0 == null ? -1 : B.ahora() - S.lat() - m.cuando0; },
      /* programa el final: fundido de `fade` s que acaba en `rel` (s desde cuando0) y corta ahí */
      pararEn(rel, fade) {
        if (!out) return;
        fade = fade == null ? .03 : fade;
        const t = m.cuando0 + rel;
        out.gain.setValueAtTime(out.gain.value, Math.max(B.ac().currentTime, t - fade));
        out.gain.linearRampToValueAtTime(0, t);
        ids.forEach(id => { const s = P[id].src; if (s) { try { s.stop(t + .02); } catch (e) { } } });
        m.finProgramado = rel;
      },
      /* para ya (con un fundido breve) y libera los nodos */
      parar(fade) {
        if (parado) return; parado = true; m.enMarcha = false;
        if (!out) { M.vivas.delete(m); return; }
        fade = fade == null ? .05 : fade;
        const C = B.ac(), t = C.currentTime;
        try { out.gain.cancelScheduledValues(t); out.gain.setValueAtTime(out.gain.value, t); out.gain.linearRampToValueAtTime(0, t + fade); } catch (e) { }
        ids.forEach(id => { const s = P[id].src; if (s) { try { s.stop(t + fade + .02); } catch (e) { } } });
        if (!vivos) desmonta();
        /* respaldo por si el AudioContext está suspendido (pausa) y los onended tardan: se desmonta al reanudar */
      }
    };
    function desmonta() {
      M.vivas.delete(m); m.enMarcha = false;
      ids.forEach(id => { const p = P[id]; [p.src, p.g, p.gr, p.an].forEach(n => { if (n) { try { n.disconnect(); } catch (e) { } } }); });
      if (out) { try { out.disconnect(); } catch (e) { } }
      if (anM) { try { anM.disconnect(); } catch (e) { } }
    }
    return m;
  };

  /* ══════════════════════════════════════════════════════════════════════
     INTERACCIÓN «mezclador»
     op: { bpm, compases, pistas:[{id,nom,img,loop,color,vol}], inicial:[ids], tit }
     Una fila de botones cuadrados, uno por pista; todas las pistas suenan a la vez en bucle y cada botón
     enciende/apaga la suya (rampa de 30 ms). Teclas 1–9. «Todos», «Ninguno» y «Seguir».
     ══════════════════════════════════════════════════════════════════════ */
  B.inter.mezclador = async function (caja, op) {
    const ctl = op.ctl || B.control();
    caja.classList.add('s4', 's4-mezclador'); S.sinFoco(caja);
    const bpm = op.bpm || 90, comp = op.compases || 4;
    const pistas = B.arr(op.pistas).filter(p => p && p.id != null).map((p, i) => Object.assign({}, p, { color: S.color(p.color, i) }));
    const N = pistas.length;
    const estado = {};
    pistas.forEach(p => { estado[p.id] = B.arr(op.inicial).indexOf(p.id) >= 0; });
    /* (28-oct, Sabor 4 · Iago 21-oct 17:07: «mezclador con SELECTOR ESTROFA / ESTRIBILLO: que se vea y se oiga cómo cada percusionista
       cambia de instrumento») op.selector = [{id, nom}], p.loops = {seccion: url} y p.imgsec = {seccion: img}: cada pista suena con el
       loop de la sección elegida; el cambio entra en el siguiente compás. Sin selector, todo como antes */
    const secs = B.arr(op.selector).filter(x => x && x.id);
    let sec = secs.length ? (op.seccion_inicial || secs[0].id) : null;
    const internas = [], deP = {};
    pistas.forEach(p => {
      deP[p.id] = [];
      if (secs.length && p.loops) {
        const porLoop = {};
        secs.forEach(x => { const u = p.loops[x.id]; if (u) (porLoop[u] = porLoop[u] || []).push(x.id); });
        Object.keys(porLoop).forEach((u, j) => { const iid = p.id + '@' + j; internas.push({ id: iid, loop: u, vol: p.vol, color: p.color }); deP[p.id].push({ iid, secs: porLoop[u] }); });
      } else { internas.push(p); deP[p.id].push({ iid: p.id, secs: null }); }
    });
    const suena = (pid, t) => !!estado[pid] && (!t.secs || t.secs.indexOf(sec) >= 0);
    const m = M.crea({ bpm, compases: comp, pistas: internas, inicial: pistas.reduce((a, p) => a.concat(deP[p.id].filter(t => suena(p.id, t)).map(t => t.iid)), []) });

    /* ── piezas ── */
    caja.appendChild(B.el('div', 's4-fondo'));
    const centro = B.el('div', 's4-centro'); caja.appendChild(centro);
    const cab = B.el('div', 's4-cab'); centro.appendChild(cab);
    const tit = B.el('div', 's4-tit'); tit.textContent = op.tit || 'Mezclador'; cab.appendChild(tit);
    const tira = B.el('div', 's4-pulsos'); cab.appendChild(tira);
    const nP = comp * 4;
    for (let k = 0; k < nP; k++) { const i = B.el('i', k % 4 === 0 ? 'fuerte' : ''); tira.appendChild(i); }
    const fila = B.el('div', 's4-pistas'); centro.appendChild(fila);
    /* (28-oct, Iago: «como el inventario de Resident Evil») op.inventario = [columnas, filas]: cada pista en su parcela (p.celda =
       [col, fila, ancho, alto]); las casillas que sobran, vacías */
    const inv = Array.isArray(op.inventario) && pistas.every(p => Array.isArray(p.celda));
    if (inv) {
      const [nc, nf] = op.inventario; fila.classList.add('s4-inv', 'nf' + nf);   // (28-oct, Sabor 2) nf2: dos filas más altas (la bachata)
      fila.style.setProperty('--nc', nc); fila.style.setProperty('--nf', nf);
      const ocupa = new Set(); pistas.forEach(p => { const [c, r, w, h] = p.celda; for (let i = 0; i < w; i++) for (let j = 0; j < h; j++) ocupa.add((c + i) + ',' + (r + j)); });
      for (let c = 1; c <= nc; c++) for (let r = 1; r <= nf; r++) if (!ocupa.has(c + ',' + r)) { const v = B.el('div', 's4-vacia'); v.style.gridArea = r + ' / ' + c + ' / span 1 / span 1'; fila.appendChild(v); }
    }
    fila.style.setProperty('--s', 'min(calc(var(--u)*15), calc((var(--u)*92 - var(--u)*1.4*' + Math.max(0, N - 1) + ') / ' + Math.max(1, N) + '))');
    const el = {};
    pistas.forEach((p, i) => {
      const b = B.el('button', 's4-pista'); b.type = 'button'; b.dataset.id = p.id;
      b.style.setProperty('--c', p.color);
      const cu = B.el('div', 's4-cuad');
      const imgDe = x => (p.imgsec && x && p.imgsec[x]) || p.img;
      let imEl = S.imagen(imgDe(sec), p.nom || p.id, p.color); cu.appendChild(imEl);
      if (i < 9) { const k = B.el('span', 's4-tec'); k.textContent = i + 1; cu.appendChild(k); }
      const nv = B.el('div', 's4-niv'); const nvi = B.el('i'); nv.appendChild(nvi);
      const nm = B.el('div', 's4-nom'); nm.textContent = p.nom || p.id;
      /* (27-oct, Iago) debajo de cada instrumento, sus cuadraditos si tiene patrón (y si no, la línea de volumen) */
      const pat = S.parsePatron(p.patron); let mr = null, mc = [];
      if (pat) { mr = B.el('div', 's4-mrej'); for (let k = 0; k < 16; k++) { const c = B.el('i', (k % 4 === 0 ? 'tp ' : '') + (pat[0][k] === 2 ? 'h2' : pat[0][k] === 1 ? 'h1' : '')); mr.appendChild(c); mc.push(c); } nv.classList.add('con-rej'); }
      b.appendChild(cu); if (mr) b.appendChild(mr); b.appendChild(nv); b.appendChild(nm);
      b.addEventListener('click', e => { e.stopPropagation(); B.ac(); alterna(p.id); });
      if (inv) { const [c, r, w, h] = p.celda; b.style.gridArea = r + ' / ' + c + ' / span ' + h + ' / span ' + w; }
      fila.appendChild(b);
      el[p.id] = { b, cu, nvi, nv, nivel: 0, mc, pat, sAnt: -1, k: p.nivK || 1,
        cambiaImg: x => { const n = S.imagen(imgDe(x), p.nom || p.id, p.color); cu.replaceChild(n, imEl); imEl = n; } };
      if (p.loops && secs.length) b.classList.toggle('s4-callada', !deP[p.id].some(t => !t.secs || t.secs.indexOf(sec) >= 0));
    });
    const carga = B.el('div', 's4-carga', 'Cargando…'); caja.appendChild(carga);
    const pie = B.el('div', 'i-pie'); caja.appendChild(pie);
    const pieIzq = B.el('div', 'i-pie-izq'); caja.appendChild(pieIzq);
    const bTodos = U.boton('Todos', '', () => pistas.forEach(p => alterna(p.id, true)));
    const bNinguno = U.boton('Ninguno', '', () => pistas.forEach(p => alterna(p.id, false)));
    pieIzq.appendChild(bTodos); pieIzq.appendChild(bNinguno);
    const bSec = {};
    function cambiaSec(x) {
      if (!secs.length || x === sec) return;
      sec = x;
      const dC = 240 / bpm, r = m.reloj(), en = m.cuando0 == null || r < 0 ? null : Math.ceil((r + .06) / dC) * dC;   // en el siguiente compás
      pistas.forEach(p => {
        deP[p.id].forEach(t => { if (t.secs) m.ganancia(t.iid, suena(p.id, t) ? 1 : 0, .03, en == null ? undefined : en); });
        if (p.imgsec) el[p.id].cambiaImg(sec);
        if (p.loops) el[p.id].b.classList.toggle('s4-callada', !deP[p.id].some(t => !t.secs || t.secs.indexOf(sec) >= 0));   // (los metales, solo en el estribillo)
      });
      secs.forEach(y => bSec[y.id].classList.toggle('on', y.id === sec));
      tit.textContent = (op.tit || 'Mezclador') + ' · ' + secs.find(y => y.id === sec).nom;
    }
    if (secs.length) {
      const gr = B.el('div', 's4-secciones'); pieIzq.appendChild(gr);
      secs.forEach(x => { bSec[x.id] = U.boton(x.nom, '', () => cambiaSec(x.id)); bSec[x.id].classList.add('s4-sec'); bSec[x.id].classList.toggle('on', x.id === sec); gr.appendChild(bSec[x.id]); });
      tit.textContent = (op.tit || 'Mezclador') + ' · ' + secs.find(y => y.id === sec).nom;
    }

    function pinta(id) {
      const e = el[id], on = estado[id];
      e.b.classList.toggle('on', on); e.b.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (!on) { e.cu.style.transform = ''; e.nvi.style.width = '0'; e.nivel = 0; e.mc.forEach(c => c.classList.remove('act')); e.sAnt = -1; }
    }
    function alterna(id, on) {
      if (!el[id]) return;
      if (on == null) on = !estado[id];
      if (on === estado[id]) return;
      estado[id] = on; deP[id].forEach(t => m.ganancia(t.iid, suena(id, t) ? 1 : 0, .03)); pinta(id);
    }
    pistas.forEach(p => pinta(p.id));

    /* teclas 1–9 */
    const quitaK = B.captura.poner(e => {
      if (!e.repeat && secs.length > 1 && (e.key === 'e' || e.key === 'E')) { const i = secs.findIndex(y => y.id === sec); cambiaSec(secs[(i + 1) % secs.length].id); return true; }   // E: estrofa ↔ estribillo
      if (e.repeat || !/^[1-9]$/.test(e.key)) return false;
      const p = pistas[+e.key - 1]; if (!p) return false;
      alterna(p.id); return true;
    });

    /* reloj visual: pulso (negra) de las encendidas, nivel de cada una y tira de pulsos */
    let kAnt = -1;
    const quitaF = B.alFotograma(t => {
      if (m.cuando0 == null) return;
      const x = t - S.lat() - m.cuando0; if (x < 0) return;
      const beat = x / (60 / bpm), ib = Math.floor(beat), fase = beat - ib, k = ib % nP;
      if (k !== kAnt) { kAnt = k; const is = tira.children; for (let j = 0; j < is.length; j++) is[j].classList.toggle('act', j === k); }
      const pulso = Math.exp(-fase * 5.5);
      pistas.forEach(p => {
        if (!estado[p.id]) return;
        const e = el[p.id], lv = Math.max.apply(null, deP[p.id].map(t => m.nivel(t.iid)));
        e.nivel = lv > e.nivel ? lv : e.nivel * .86 + lv * .14;
        e.nvi.style.width = Math.min(100, e.nivel * e.k * 100).toFixed(1) + '%';
        if (e.pat) { const dC = 240 / bpm, s16 = Math.min(15, Math.floor((x % dC) / (dC / 16))); if (s16 !== e.sAnt) { if (e.sAnt >= 0) e.mc[e.sAnt].classList.remove('act'); e.mc[s16].classList.add('act'); e.sAnt = s16; } }
        if (inv) e.b.classList.toggle('golpe', fase < .18); else e.cu.style.transform = 'scale(' + (1 + .06 * pulso).toFixed(4) + ')';   // inventario: el pulso, de golpe (pantalla del aula)
      });
    });

    /* limpieza (idempotente): al pulsar «Seguir» o si el motor cancela */
    let limpio = false, tCarga = null;
    const limpia = () => {
      if (limpio) return; limpio = true;
      quitaK(); quitaF(); clearTimeout(tCarga);
      m.parar(.25);
    };
    ctl.alMorir.push(limpia);
    B.inter.mezclador.ultimo = { m, estado, alterna, pistas, cambiaSec, seccion: () => sec };

    /* carga y arranque */
    tCarga = setTimeout(() => carga.classList.add('on'), 160);
    await m.cargar();
    clearTimeout(tCarga); carga.classList.remove('on');
    if (ctl.muerto || limpio) { limpia(); return; }
    m.arrancar(B.ac().currentTime + .15);

    try { await U.seguir(caja, ctl, 'Seguir', pie); }
    finally { limpia(); }
  };
  B.inter.mezclador.recursos = op => S.recursosDe('mezclador', op);
})(window.BLUES);

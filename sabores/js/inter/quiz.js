/* 4 SABORES · QUIZ en directo, al final de los sabores 2, 3 y 4 (Iago 21-oct 21:20–22:37; montado el 30-oct-2026, C1).
   Tipo Kahoot: la pantalla de clase pone la pregunta y el audio; los alumnos contestan desde el móvil (sabores/m/, con el QR o el
   PIN y un apodo). Ranking por aciertos y rapidez: hasta 1000 puntos por pregunta (la mitad si se contesta en el último segundo).
   Sin móviles (o sin red) también se juega: la clase contesta en voz alta y la pantalla marca la buena.
   · Preguntas MEZCLADAS y en orden ALEATORIO: una de reconocer por cada género visto (15 s de una canción REAL de LISTENING EN CLASE)
     y las de teoría del sabor (al azar, de géneros distintos). Empieza siempre por una de reconocer; nunca dos de teoría seguidas.
   · Cada pregunta la DICE EL NARRADOR; al acabar el tiempo (o cuando han contestado todos) se marca la buena y el maestro de
     ceremonias del género da la respuesta y el porqué, NEUTRO (contesta toda la clase a la vez). En teoría, la explicación sale escrita.
   · Pantalla del aula: nada se anima en vivo (solo cambian los números, una vez por segundo).
   · Espacio / Intro: empezar, cerrar la pregunta antes de tiempo y seguir. P: pausa.
   Datos: BLUES.QUIZ (data/quiz.js). Servidor: BLUES.QUIZ_SB = { url, anon } (js/quiz_sb.js) → funciones suite_aq_* de Supabase
   (herramientas/quiz_supabase.sql). ?quizsb=local: el servidor de pruebas de la misma dirección (herramientas/quiz_prueba.mjs). */
'use strict';
(function (B) {
  const U = B.iu;
  const MUS = 'mus/portada.mp3';
  const SEG = 20;   // segundos para contestar (data/quiz.js · kahoot.segundos)
  const COL = ['#C9603F', '#1F9AA0', '#E2A33F', '#3E7D4F'];
  const FORMA = [
    '<svg viewBox="0 0 24 24"><path d="M12 3 22 20H2z"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 1.8 22.2 12 12 22.2 1.8 12z"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/></svg>'];
  const PJ = {
    CANDE: ['img/s1/pj/cande_explica.webp', 'img/s1/pj/cande_brazos.webp', 'Doña Cande'],
    YUNIOR: ['img/s1/pj/yunior_explica.webp', 'img/s1/pj/yunior_pulgar.webp', 'Yunior'],
    FAUSTINO: ['img/s2/pj/faustino_explica.webp', 'img/s2/pj/faustino_saluda.webp', 'Don Faustino'],
    RAMONCITO: ['img/s2/pj/ramoncito_explica.webp', 'img/s2/pj/ramoncito_rie.webp', 'Ramoncito'],
    RITINHA: ['img/s3/pj/ritinha_explica.webp', 'img/s3/pj/ritinha_saluda.webp', 'Ritinha'],
    'SEU TOM': ['img/s3/pj/seutom_explica.webp', 'img/s3/pj/seutom_saluda.webp', 'Seu Tom'],
    'PAPO VEGA': ['img/s4/pj/papo_explica.webp', 'img/s4/pj/papo_saluda.webp', 'Papo Vega'],
    'DON MAMBERTO': ['img/s4/pj/mamberto_explica.webp', 'img/s4/pj/mamberto_saluda.webp', 'Don Mamberto'],
    LUENA: ['img/s4/pj/luena_explica.webp', 'img/s4/pj/luena_saluda.webp', 'Luena'],
    CHUCHO: ['img/s4/pj/chucho_explica.webp', 'img/s4/pj/chucho_explica.webp', 'Chucho']
  };
  /* el «par típico» de cada género (RELEVOS_Y_QUIZ.md): siempre entre las opciones de reconocer, si ya se ha visto */
  const PAR = { cumbia: 'merengue', merengue: 'cumbia', bolero: 'bachata', bachata: 'bolero', samba: 'bossa', bossa: 'samba', salsa: 'mambo', mambo: 'salsa', kizomba: 'bachata' };
  const ICO_ALTAVOZ = '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 25h10l13-11v36L20 39H10z" fill="currentColor" stroke="none"/><path d="M41 24c3 2.4 4.6 5 4.6 8s-1.6 5.6-4.6 8"/><path d="M47.5 17c5 4 7.6 9 7.6 15s-2.6 11-7.6 15"/></svg>';
  const ICO_MOVIL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg>';

  /* ══════════ servidor (Supabase: funciones suite_aq_*) ══════════ */
  function servidor() {
    if (/[?&]quizsb=local\b/.test(location.search)) return { url: location.origin, anon: 'local' };
    const s = B.QUIZ_SB; return s && s.url && s.anon ? s : null;
  }
  async function rpc(fn, args) {
    const s = servidor(); if (!s) throw new Error('sin servidor');
    const ab = new AbortController(), to = setTimeout(() => ab.abort(), 7000);
    try {
      const r = await fetch(s.url + '/rest/v1/rpc/' + fn, {
        method: 'POST', signal: ab.signal, cache: 'no-store',
        headers: { 'Content-Type': 'application/json', apikey: s.anon, Authorization: 'Bearer ' + s.anon },
        body: JSON.stringify(args || {})
      });
      const t = await r.text(); let j = null; try { j = t ? JSON.parse(t) : null; } catch (e) { }
      if (!r.ok) throw new Error((j && j.message) || ('HTTP ' + r.status));
      return j;
    } finally { clearTimeout(to); }
  }
  function direccionMovil() {
    const s = servidor();
    if (s && s.movil) return s.movil;
    return location.origin + location.pathname.replace(/[^/]*$/, '') + 'm/';
  }

  /* ══════════ las preguntas de esta partida ══════════ */
  function baraja(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const x = b[i]; b[i] = b[j]; b[j] = x; } return b; }
  const linea = x => x ? { id: x.id, quien: x.quien === 'NARRADOR' ? 'NARR' : x.quien, texto: x.texto, voz: x.audio, var: '-' } : null;
  function monta(n) {
    const Q = B.QUIZ.quizzes[n], G = B.QUIZ.generos;
    const rec = Q.reconocer.map(r => {
      const dis = [], p = PAR[r.genero];
      if (p && Q.generos.indexOf(p) >= 0) dis.push(p);
      baraja(Q.generos.filter(g => g !== r.genero && g !== p)).forEach(g => { if (dis.length < 3) dis.push(g); });
      const ops = baraja([r.genero].concat(dis));
      const dur = (B.buf[r.fragmento.src] && B.buf[r.fragmento.src].duration) || r.fragmento.dur || 15;
      return { tipo: 'rec', genero: r.genero, opciones: ops.map(g => G[g].nombre), buena: ops.indexOf(r.genero), frag: r.fragmento.src,
        seg: Math.max(SEG, Math.ceil(dur) + 3), narr: linea(r.narrador), res: linea(G[r.genero].respuesta), nombre: G[r.genero].nombre, pais: G[r.genero].pais };
    });
    const pool = baraja(Q.teoria), elegidas = [], usados = {};
    pool.forEach(t => { if (elegidas.length < Q.teoria_n && !usados[t.genero]) { elegidas.push(t); usados[t.genero] = 1; } });
    pool.forEach(t => { if (elegidas.length < Q.teoria_n && elegidas.indexOf(t) < 0) elegidas.push(t); });
    const teo = elegidas.map(t => {
      const idx = baraja(t.opciones.map((x, i) => i));
      return { tipo: 'teo', genero: t.genero, texto: t.pregunta, opciones: idx.map(i => t.opciones[i]), buena: idx.indexOf(t.correcta), seg: SEG,
        narr: linea(t.narrador), res: linea(t.respuesta), expl: t.explicacion };
    });
    /* reconocer barajadas; la primera, siempre de reconocer; las de teoría, en huecos sueltos (nunca dos seguidas) */
    const out = baraja(rec);
    teo.forEach(t => {
      const huecos = [];
      for (let k = 1; k <= out.length; k++) if (out[k - 1].tipo !== 'teo' && (!out[k] || out[k].tipo !== 'teo')) huecos.push(k);
      out.splice(huecos.length ? huecos[Math.floor(Math.random() * huecos.length)] : out.length, 0, t);
    });
    return out;
  }

  /* ══════════ código QR (js/qr.js, qrcode-generator · MIT) ══════════ */
  function qrSvg(txt) {
    if (typeof window.qrcode !== 'function') return '';
    const q = window.qrcode(0, 'M'); q.addData(txt); q.make();
    const n = q.getModuleCount(); let d = '';
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += 'M' + c + ' ' + r + 'h1v1h-1z';
    return '<svg viewBox="-2 -2 ' + (n + 4) + ' ' + (n + 4) + '" shape-rendering="crispEdges" aria-label="Código QR"><rect x="-2" y="-2" width="' + (n + 4) + '" height="' + (n + 4) + '" fill="#fff"/><path d="' + d + '" fill="#1E1A16"/></svg>';
  }

  /* ══════════ la interacción ══════════ */
  B.inter.quiz = async function (caja, op) {
    const ctl = op.ctl, n = op.sabor, Q = B.QUIZ && B.QUIZ.quizzes && B.QUIZ.quizzes[n];
    if (!Q) return;
    let muerto = false; const relojes = new Set();
    const cada = (fn, ms) => { const id = setInterval(fn, ms); relojes.add(id); return () => { clearInterval(id); relojes.delete(id); }; };
    ctl.alMorir.push(() => { muerto = true; relojes.forEach(clearInterval); relojes.clear(); B.musica(null); });
    const di = l => l ? B.motor.di(l, ctl) : Promise.resolve(true);
    const preg = monta(n);
    let partida = null, jugadores = [], moviles = false;

    caja.classList.add('s4', 's4-quiz'); caja.appendChild(B.el('div', 's4-fondo'));
    const qz = B.el('div', 'qz qz-s' + n); caja.appendChild(qz);
    const capa = cls => { qz.innerHTML = ''; const d = B.el('div', 'qz-capa ' + cls); qz.appendChild(d); caja.dataset.fase = cls.split(' ')[0].replace('qz-', ''); return d; };
    const pie = B.el('div', 'qz-pie'); caja.appendChild(pie);

    /* «Seguir» (botón y Espacio/Intro) o, si se le da un tiempo, solo hasta entonces */
    function seguir(txt, seg, prim) {
      return new Promise(res => {
        pie.innerHTML = '';
        const b = U.boton((txt || 'Seguir') + ' ' + B.motor.ICO.play, prim === false ? '' : 'prim');
        let hecho = false;
        const fin = v => { if (hecho) return; hecho = true; quitaK(); b.remove(); res(v); };
        b.addEventListener('click', e => { e.stopPropagation(); fin(true); });
        pie.appendChild(b);
        const quitaK = B.captura.poner(e => { if (e.key === ' ' || e.key === 'Enter') { fin(true); return true; } return false; });
        ctl.alMorir.push(() => fin(false));
        if (seg) B.espera(seg, ctl).then(() => fin(true));
      });
    }

    /* ── 1 · la sala de espera ── */
    B.musica({ src: MUS, vol: .32, bucle: true });
    const sala = capa('qz-sala');
    const G = B.QUIZ.generos, mcs = [];
    Q.generos.forEach(g => { const q = G[g].respuesta.quien; if (mcs.indexOf(q) < 0) mcs.push(q); });
    sala.innerHTML =
      '<div class="qz-qr"><div class="qz-qr-img"></div><div class="qz-qr-dir"></div><div class="qz-pin"><span>PIN</span><b>· · · ·</b></div></div>' +
      '<div class="qz-sala-der">' +
        '<div class="qz-tit">Quiz <i>·</i> ¿Qué sabor es?</div>' +
        '<div class="qz-sub">Sabor ' + n + ' · ' + preg.length + ' preguntas · ' + Q.generos.length + ' géneros</div>' +
        '<div class="qz-estado"></div>' +
        '<div class="qz-jug-cab"><span class="qz-num">0</span> <span class="qz-num-t">jugadores</span></div>' +
        '<div class="qz-jugadores"></div>' +
      '</div>' +
      '<div class="qz-mcs">' + mcs.map(q => '<img src="' + (PJ[q] ? PJ[q][1] : '') + '" alt="">').join('') + '</div>';
    const est = sala.querySelector('.qz-estado'), lista = sala.querySelector('.qz-jugadores'), num = sala.querySelector('.qz-num'), numT = sala.querySelector('.qz-num-t');
    est.innerHTML = 'Conectando con el servidor del quiz…';
    const pintaJugadores = () => {
      num.textContent = jugadores.length; numT.textContent = jugadores.length === 1 ? 'jugador' : 'jugadores';
      lista.innerHTML = '';
      jugadores.forEach(j => {
        const c = B.el('button', 'qz-nick', B.esc(j.nick) + '<i>✕</i>'); c.dataset.tip = 'Quitar a «' + j.nick + '»';
        c.addEventListener('click', async e => {
          e.stopPropagation(); c.disabled = true;
          try { await rpc('suite_aq_echar', { p_pin: partida.pin, p_clave: partida.clave, p_jugador: j.id }); jugadores = jugadores.filter(x => x.id !== j.id); pintaJugadores(); } catch (er) { c.disabled = false; }
        });
        lista.appendChild(c);
      });
    };
    if (servidor()) {
      try { partida = await rpc('suite_aq_crear', { p_sabor: n, p_total: preg.length }); } catch (e) { partida = null; console.warn('Quiz: sin servidor', e.message); }
    }
    if (muerto) return;
    if (partida) {
      const dir = direccionMovil(), url = dir + '?c=' + partida.pin;
      sala.querySelector('.qz-qr-img').innerHTML = qrSvg(url);
      sala.querySelector('.qz-qr-dir').textContent = dir.replace(/^https?:\/\//, '').replace(/\/$/, '');
      sala.querySelector('.qz-pin b').textContent = partida.pin;
      est.innerHTML = ICO_MOVIL + ' Escanea el código o entra en la dirección con el PIN, y elige tu apodo.';
      pintaJugadores();
    } else {
      sala.classList.add('sin-red');
      est.innerHTML = 'Sin conexión con el servidor del quiz: hoy se juega <b>sin móviles</b>, contestando en voz alta.';
    }
    let ultLista = '';
    const paraSala = cada(async () => {
      if (!partida || muerto) return;
      try {
        const s = await rpc('suite_aq_sala', { p_pin: partida.pin, p_clave: partida.clave });
        const k = JSON.stringify(s.jugadores); if (k !== ultLista) { ultLista = k; jugadores = s.jugadores || []; pintaJugadores(); }
      } catch (e) { }
    }, 1500);
    /* empezar: con móviles (si hay partida) o sin ellos */
    const modo = await new Promise(res => {
      pie.innerHTML = '';
      let hecho = false; const fin = v => { if (hecho) return; hecho = true; quitaK(); res(v); };
      if (partida) { const b2 = U.boton('Sin móviles', '', () => fin('voz')); b2.dataset.tip = 'Jugar en voz alta: sin puntos ni clasificación'; pie.appendChild(b2); }
      pie.appendChild(U.boton('Empezar ' + B.motor.ICO.play, 'prim', () => fin(partida ? 'moviles' : 'voz')));
      const quitaK = B.captura.poner(e => { if (e.key === ' ' || e.key === 'Enter') { fin(partida ? 'moviles' : 'voz'); return true; } return false; });
      ctl.alMorir.push(() => fin(null));
    });
    paraSala(); pie.innerHTML = '';
    if (muerto || !modo) return;
    moviles = modo === 'moviles' && !!partida;
    if (moviles) { try { const s = await rpc('suite_aq_sala', { p_pin: partida.pin, p_clave: partida.clave }); jugadores = s.jugadores || jugadores; } catch (e) { } }

    /* ── 2 · la intro del narrador ── */
    await di(linea(Q.intro)); if (muerto) return;

    /* ── 3 · las preguntas ── */
    let totalAciertos = 0;
    for (let i = 0; i < preg.length; i++) {
      const q = preg[i], k = i + 1;
      const v = capa('qz-preg ' + (q.tipo === 'rec' ? 'es-rec' : 'es-teo'));
      v.innerHTML =
        '<div class="qz-cab"><span class="qz-chip">Pregunta ' + k + ' de ' + preg.length + '</span>' +
          '<span class="qz-chip qz-tipo">' + (q.tipo === 'rec' ? '¿Qué sabor es?' : 'Lo aprendido') + '</span></div>' +
        '<div class="qz-reloj"><b>' + q.seg + '</b><span>segundos</span><em></em></div>' +
        (q.tipo === 'rec'
          ? '<div class="qz-enun rec"><div class="qz-alt">' + ICO_ALTAVOZ + '</div><div class="qz-enun-t">¿Qué género suena?</div></div>'
          : '<div class="qz-enun teo"><div class="qz-enun-t">' + B.esc(q.texto) + '</div></div>') +
        '<div class="qz-res"></div>' +
        '<div class="qz-ops n' + q.opciones.length + '">' + q.opciones.map((o, j) =>
          '<div class="qz-op" style="--c:' + COL[j] + '"><span class="qz-forma">' + FORMA[j] + '</span><span class="qz-op-t">' + B.esc(o) + '</span>' +
          '<span class="qz-cuenta"></span><span class="qz-barra"><i></i></span></div>').join('') + '</div>' +
        '<img class="qz-pj" alt="">';
      const reloj = v.querySelector('.qz-reloj b'), recuento = v.querySelector('.qz-reloj em');
      if (!moviles) recuento.style.display = 'none';
      if (q.tipo === 'rec') B.musica(null); else B.musica({ src: MUS, vol: .2, bucle: true });
      await di(q.narr); if (muerto) return;
      /* abrir la pregunta */
      let abierta = moviles;
      if (moviles) { try { await rpc('suite_aq_preguntar', { p_pin: partida.pin, p_clave: partida.clave, p_n: k, p_opciones: q.opciones, p_segundos: q.seg }); } catch (e) { abierta = false; } }
      if (muerto) return;
      const frag = q.tipo === 'rec' && B.buf[q.frag] ? B.suena(q.frag, { bus: B.bus.mus, vol: .95, fade: .25, grupo: 'plano' }) : null;
      const btCerrar = U.boton('Resolver ya', '', () => cierra()); btCerrar.dataset.tip = 'Cerrar la pregunta (Espacio)';
      pie.innerHTML = ''; pie.appendChild(btCerrar);
      let cierra;
      await new Promise(res => {
        const tFin = B.ahora() + q.seg; let hecho = false, ultS = -1, contestados = 0;
        const paraR = cada(() => {
          if (muerto) return acaba();
          const s = Math.max(0, Math.ceil(tFin - B.ahora()));
          if (s !== ultS) { ultS = s; reloj.textContent = s; reloj.parentNode.classList.toggle('poco', s <= 5); }
          if (tFin - B.ahora() <= 0) acaba();
        }, 200);
        const paraP = abierta ? cada(async () => {
          try {
            const s = await rpc('suite_aq_sala', { p_pin: partida.pin, p_clave: partida.clave });
            jugadores = s.jugadores || jugadores; contestados = s.contestados || 0;
            recuento.textContent = contestados + ' / ' + jugadores.length + ' respuestas';
            if (jugadores.length && contestados >= jugadores.length) acaba();
          } catch (e) { }
        }, 1000) : () => { };
        if (abierta) recuento.textContent = '0 / ' + jugadores.length + ' respuestas';
        const quitaK = B.captura.poner(e => { if (e.key === ' ' || e.key === 'Enter') { acaba(); return true; } return false; });
        function acaba() { if (hecho) return; hecho = true; paraR(); paraP(); quitaK(); res(); }
        cierra = acaba; ctl.alMorir.push(acaba);
      });
      pie.innerHTML = '';
      if (frag) frag.parar(.9);
      if (muerto) return;
      /* resolver: la buena, el reparto y los 5 primeros */
      let r = null;
      if (abierta) { try { r = await rpc('suite_aq_resolver', { p_pin: partida.pin, p_clave: partida.clave, p_buena: q.buena }); } catch (e) { r = null; } }
      if (muerto) return;
      B.musica(null);
      v.classList.add('resuelta'); if (!r) v.classList.add('sin-cuentas'); caja.dataset.fase = 'res';
      v.querySelector('.qz-reloj').style.visibility = 'hidden';
      const ops = B.$$('.qz-op', v), tot = r ? Math.max(1, (r.reparto || []).reduce((a, b) => a + b, 0)) : 0;
      ops.forEach((o, j) => {
        o.classList.add(j === q.buena ? 'buena' : 'mala');
        if (r && r.reparto) { const c = r.reparto[j] || 0; o.querySelector('.qz-cuenta').textContent = c; o.querySelector('.qz-barra i').style.width = (100 * c / tot).toFixed(1) + '%'; }
      });
      if (r) totalAciertos += r.aciertos || 0;
      const resBox = v.querySelector('.qz-res');
      if (q.tipo === 'rec') resBox.innerHTML = '<div class="qz-gen">' + B.esc(q.nombre) + '</div><div class="qz-pais">' + B.esc(q.pais) + '</div>';
      else resBox.innerHTML = '<div class="qz-expl">' + B.esc(q.expl) + '</div>';
      if (r) resBox.insertAdjacentHTML('beforeend', '<div class="qz-aciertos">' + (r.aciertos || 0) + ' de ' + (r.contestados || 0) + ((r.aciertos || 0) === 1 ? ' ha' : ' han') + ' acertado</div>');
      const pjD = PJ[q.res && q.res.quien];
      const pjI = v.querySelector('.qz-pj'); if (pjD) { pjI.src = pjD[0]; pjI.classList.add('on'); }
      await di(q.res); if (muerto) return;
      await seguir(k < preg.length ? 'Siguiente' : 'Ver el resultado', 3.5); if (muerto) return;
      /* la clasificación, un momento (con móviles y gente jugando; no tras la última: ahí va el podio) */
      if (r && r.top && r.top.length && k < preg.length) {
        const c = capa('qz-clasif');
        c.innerHTML = '<div class="qz-tit">Clasificación</div><div class="qz-sub">tras la pregunta ' + k + ' de ' + preg.length + '</div>' +
          '<ol class="qz-top">' + r.top.map((t, j) => '<li><span class="qz-pos">' + (j + 1) + '</span><span class="qz-tn">' + B.esc(t.nick) + '</span><span class="qz-tp">' + t.puntos + '</span></li>').join('') + '</ol>';
        await seguir('Siguiente', 4); if (muerto) return;
      }
    }

    /* ── 4 · el final: podio (con móviles), la frase del narrador y, en el sabor 4, Chucho y el grito ── */
    B.musica({ src: MUS, vol: .4, bucle: true });
    let f = null;
    if (moviles) { try { f = await rpc('suite_aq_fin', { p_pin: partida.pin, p_clave: partida.clave }); } catch (e) { f = null; } }
    if (muerto) return;
    const fin = capa('qz-final');
    const top = (f && f.top) || [];
    if (top.length) {
      const pod = [top[1], top[0], top[2]];
      fin.innerHTML = '<div class="qz-tit">¡Enhorabuena!</div><div class="qz-podio">' + pod.map((t, j) => t ? '<div class="qz-esc p' + [2, 1, 3][j] + '"><div class="qz-esc-n">' + B.esc(t.nick) + '</div><div class="qz-esc-p">' + t.puntos + ' puntos</div><div class="qz-esc-b"><b>' + [2, 1, 3][j] + '</b></div></div>' : '<div class="qz-esc vacio"></div>').join('') + '</div>' +
        (top.length > 3 ? '<ol class="qz-resto" start="4">' + top.slice(3, 10).map(t => '<li><span class="qz-tn">' + B.esc(t.nick) + '</span><span class="qz-tp">' + t.puntos + '</span></li>').join('') + '</ol>' : '');
    } else {
      fin.innerHTML = '<div class="qz-tit">¡Fin del quiz!</div><div class="qz-sub">' + preg.length + ' preguntas · ' + Q.generos.length + ' géneros</div>';
    }
    fin.insertAdjacentHTML('beforeend', '<div class="qz-mcs">' + mcs.map(q => '<img src="' + (PJ[q] ? PJ[q][1] : '') + '" alt="">').join('') + '</div>');
    const media = f && f.jugadores ? +f.media : null;
    const fl = media == null ? Q.final.bien : media >= .85 ? Q.final.pleno : media >= .6 ? Q.final.bien : Q.final.flojo;
    await di(linea(fl)); if (muerto) return;
    if (Q.colofon) {
      const ch = B.el('img', 'qz-chucho'); ch.src = PJ.CHUCHO[0]; ch.alt = ''; fin.appendChild(ch); fin.classList.add('con-chucho');
      await di(linea(Q.colofon.linea)); if (muerto) return;
      if (Q.colofon.sfx && B.buf[Q.colofon.sfx]) { const g = B.suena(Q.colofon.sfx, { bus: B.bus.voz, vol: 1, grupo: 'plano' }); await B.espera(g ? g.dur + .3 : 1, ctl); if (muerto) return; }
    }
    await seguir('Terminar', 0);
    B.musica(null);
  };
  B.inter.quiz.subtAbajo = true;
})(window.BLUES);

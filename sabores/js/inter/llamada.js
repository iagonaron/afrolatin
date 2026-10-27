/* 4 SABORES · llamada (21-oct-2026, Iago: «a los de un país distinto, por teléfono»): relevo entre dos maestros de ceremonias.
   op: { de, a, imgDe, imgA, tono, lineas: [{ id, quien, texto, voz? }] }
   Suena el tono, «Llamando a <MC>…» con el móvil vibrando; descuelga y la pantalla se parte en dos (quien habla se ilumina);
   las frases van con el subtítulo del motor (B.motor.di: voz si la hay, si no duración estimada). Al acabar, sonido de colgar. */
'use strict';
(function (B) {
  const S = B.s4 || {};
  const MOVIL = '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg>';
  function panel(q, img, lado) {
    const P = B.personaje(q), d = B.el('div', 'll-panel ll-' + lado);
    d.style.setProperty('--c', P.color || '#F3E6C8');
    const fondo = (S.imagen && img) ? S.imagen(img, P.nombre, P.color, 'll-img') : (S.baldosa ? S.baldosa(P.nombre, P.color, 'll-img') : B.el('div', 'll-img'));
    d.appendChild(fondo);
    const n = B.el('div', 'll-nom'); n.textContent = P.nombre; d.appendChild(n);
    return d;
  }
  B.inter.llamada = async function (cont, op) {
    const ctl = op.ctl; let muerto = false; ctl && ctl.alMorir && ctl.alMorir.push(() => { muerto = true; });
    const caja = B.el('div', 'll-caja'); cont.appendChild(caja);
    const Pa = B.personaje(op.a);
    const sonando = B.el('div', 'll-sonando'); sonando.innerHTML = '<div class="ll-movil">' + MOVIL + '</div><div class="ll-txt">Llamando a <b></b>…</div>';
    sonando.querySelector('b').textContent = Pa.nombre; caja.appendChild(sonando);
    if (op.tono && B.existe && B.existe(op.tono)) { try { B.suena(op.tono, { vol: .7 }); } catch (e) { } }
    await B.espera(2.6, ctl); if (muerto) return;
    sonando.classList.add('fuera');
    const pDe = panel(op.de, op.imgDe, 'izq'), pA = panel(op.a, op.imgA, 'der');
    const partida = B.el('div', 'll-partida'); partida.append(pDe, pA); caja.appendChild(partida);
    requestAnimationFrame(() => partida.classList.add('on'));
    await B.espera(.5, ctl); if (muerto) return;
    for (const l of B.arr(op.lineas)) {
      pDe.classList.toggle('habla', l.quien === op.de); pA.classList.toggle('habla', l.quien === op.a);
      await B.motor.di(l, ctl); if (muerto) return;
    }
    pDe.classList.remove('habla'); pA.classList.remove('habla');
    if (B.existe && B.existe('sfx/s1/colgar.mp3')) { try { B.suena('sfx/s1/colgar.mp3', { vol: .6 }); } catch (e) { } }
    const fin = B.el('div', 'll-colgar'); fin.textContent = 'Llamada finalizada'; caja.appendChild(fin);
    await B.espera(1.2, ctl);
  };
  B.inter.llamada.subtAbajo = true;
  B.inter.llamada.recursos = op => [op.imgDe, op.imgA, op.tono, 'sfx/s1/colgar.mp3'].filter(Boolean);
})(window.BLUES);

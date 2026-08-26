var e = (e) =>
  e === void 0 || e === `auto` || e === `instant` || e === `smooth`;
function t(e, t) {
  (this.scrollLeft = e), (this.scrollTop = t);
}
var n = (e, t, n = `cannot convert to dictionary.`) =>
    `Failed to execute '${e}' on '${t}': ${n}`,
  r = (e, t, r) =>
    n(
      e,
      t,
      `The provided value '${r}' is not a valid enum value of type ScrollBehavior.`
    ),
  i = (e, t, n) => {
    let r = `__SEAMLESS.BACKUP$${t}`;
    return !e[r] && e[t] && !e[t]?.__isPolyfill && (e[r] = e[t]), e[r] || n;
  },
  a = (e) => {
    let t = typeof e;
    return e !== null && (t === `object` || t === `function`);
  },
  o = (e) =>
    e.ownerDocument.scrollingElement || e.ownerDocument.documentElement;
function s(e) {
  if (typeof Event == `function`)
    return new Event(`scrollend`, { bubbles: e, cancelable: !1 });
  let t = document.createEvent(`Event`);
  return t.initEvent(`scrollend`, e, !1), t;
}
var c = (e) => 0.5 * (1 - Math.cos(Math.PI * e));
function l() {
  let e;
  return (
    (e = window.performance?.now
      ? () => window.performance.now()
      : () => window.Date.now()),
    (l = e),
    e()
  );
}
var u = 500,
  d = (e) => {
    let t = (l() - e.timeStamp) / (e.duration || u);
    if (t > 1) {
      e.method(e.targetX, e.targetY), e.callback();
      return;
    }
    let n = (e.timingFunc || c)(t),
      r = e.startX + (e.targetX - e.startX) * n,
      i = e.startY + (e.targetY - e.startY) * n;
    e.method(r, i),
      (e.rafId = window.requestAnimationFrame(() => {
        d(e);
      }));
  },
  f = (e) => (isFinite(e) ? Number(e) : 0),
  p = (e) =>
    e.isConnected ??
    (!e.ownerDocument || !(e.ownerDocument.compareDocumentPosition(e) & 1)),
  m = (e, n, r) => {
    if (!p(e)) return;
    let a = e.scrollLeft,
      o = e.scrollTop,
      c = f(n.left ?? a),
      u = f(n.top ?? o);
    if (c === a && u === o) return;
    let m = i(HTMLElement.prototype, `scroll`, t),
      h = i(Object.getPrototypeOf(e), `scroll`, m).bind(e);
    if (n.behavior !== `smooth`) {
      h(c, u);
      return;
    }
    let g = () => {
        window.removeEventListener(`wheel`, v),
          window.removeEventListener(`touchmove`, v);
      },
      _ = Object.assign(Object.assign({}, r), {
        timeStamp: l(),
        startX: a,
        startY: o,
        targetX: c,
        targetY: u,
        rafId: 0,
        method: h,
        callback: () => {
          g();
          let t = e.nodeType === 9;
          e.dispatchEvent(s(t));
        },
      }),
      v = () => {
        window.cancelAnimationFrame(_.rafId), g();
      };
    window.addEventListener(`wheel`, v, { passive: !0, once: !0 }),
      window.addEventListener(`touchmove`, v, { passive: !0, once: !0 }),
      d(_);
  },
  h = (e) => e.window === e,
  g = ((t) => (i, s, c) => {
    let [l, u] = h(i)
        ? [o(i.document.documentElement), `Window`]
        : [i, `Element`],
      d = s ?? {};
    if (!a(d)) throw TypeError(n(t, u));
    if (!e(d.behavior)) throw TypeError(r(t, u, d.behavior));
    t === `scrollBy` &&
      ((d.left = f(d.left) + l.scrollLeft), (d.top = f(d.top) + l.scrollTop)),
      m(l, d, c);
  })(`scrollTo`);
export { g as t };

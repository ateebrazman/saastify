import { t as e } from "./QTnfLwEv.js";
var t = e((e, t) => {
    var n = function (e) {
      return e && e.Math === Math && e;
    };
    t.exports =
      n(typeof globalThis == `object` && globalThis) ||
      n(typeof window == `object` && window) ||
      n(typeof self == `object` && self) ||
      n(typeof global == `object` && global) ||
      n(typeof e == `object` && e) ||
      (function () {
        return this;
      })() ||
      Function(`return this`)();
  }),
  n = e((e, t) => {
    t.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  }),
  r = e((e, t) => {
    t.exports = !n()(function () {
      var e = function () {}.bind();
      return typeof e != `function` || e.hasOwnProperty(`prototype`);
    });
  }),
  i = e((e, t) => {
    var n = r(),
      i = Function.prototype,
      a = i.apply,
      o = i.call;
    t.exports =
      (typeof Reflect == `object` && Reflect.apply) ||
      (n
        ? o.bind(a)
        : function () {
            return o.apply(a, arguments);
          });
  }),
  a = e((e, t) => {
    var n = r(),
      i = Function.prototype,
      a = i.call,
      o = n && i.bind.bind(a, a);
    t.exports = n
      ? o
      : function (e) {
          return function () {
            return a.apply(e, arguments);
          };
        };
  }),
  o = e((e, t) => {
    var n = a(),
      r = n({}.toString),
      i = n(``.slice);
    t.exports = function (e) {
      return i(r(e), 8, -1);
    };
  }),
  s = e((e, t) => {
    var n = o(),
      r = a();
    t.exports = function (e) {
      if (n(e) === `Function`) return r(e);
    };
  }),
  c = e((e, t) => {
    var n = typeof document == `object` && document.all;
    t.exports =
      n === void 0 && n !== void 0
        ? function (e) {
            return typeof e == `function` || e === n;
          }
        : function (e) {
            return typeof e == `function`;
          };
  }),
  l = e((e, t) => {
    t.exports = !n()(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] !== 7
      );
    });
  }),
  u = e((e, t) => {
    var n = r(),
      i = Function.prototype.call;
    t.exports = n
      ? i.bind(i)
      : function () {
          return i.apply(i, arguments);
        };
  }),
  d = e((e) => {
    var t = {}.propertyIsEnumerable,
      n = Object.getOwnPropertyDescriptor;
    e.f =
      n && !t.call({ 1: 2 }, 1)
        ? function (e) {
            var t = n(this, e);
            return !!t && t.enumerable;
          }
        : t;
  }),
  f = e((e, t) => {
    t.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  }),
  p = e((e, t) => {
    var r = a(),
      i = n(),
      s = o(),
      c = Object,
      l = r(``.split);
    t.exports = i(function () {
      return !c(`z`).propertyIsEnumerable(0);
    })
      ? function (e) {
          return s(e) === `String` ? l(e, ``) : c(e);
        }
      : c;
  }),
  m = e((e, t) => {
    t.exports = function (e) {
      return e == null;
    };
  }),
  h = e((e, t) => {
    var n = m(),
      r = TypeError;
    t.exports = function (e) {
      if (n(e)) throw new r(`Can't call method on ` + e);
      return e;
    };
  }),
  g = e((e, t) => {
    var n = p(),
      r = h();
    t.exports = function (e) {
      return n(r(e));
    };
  }),
  _ = e((e, t) => {
    var n = c();
    t.exports = function (e) {
      return typeof e == `object` ? e !== null : n(e);
    };
  }),
  v = e((e, t) => {
    t.exports = {};
  }),
  y = e((e, n) => {
    var r = v(),
      i = t(),
      a = c(),
      o = function (e) {
        return a(e) ? e : void 0;
      };
    n.exports = function (e, t) {
      return arguments.length < 2
        ? o(r[e]) || o(i[e])
        : (r[e] && r[e][t]) || (i[e] && i[e][t]);
    };
  }),
  b = e((e, t) => {
    t.exports = a()({}.isPrototypeOf);
  }),
  x = e((e, n) => {
    var r = t().navigator,
      i = r && r.userAgent;
    n.exports = i ? String(i) : ``;
  }),
  S = e((e, n) => {
    var r = t(),
      i = x(),
      a = r.process,
      o = r.Deno,
      s = (a && a.versions) || (o && o.version),
      c = s && s.v8,
      l,
      u;
    c && ((l = c.split(`.`)), (u = l[0] > 0 && l[0] < 4 ? 1 : +(l[0] + l[1]))),
      !u &&
        i &&
        ((l = i.match(/Edge\/(\d+)/)),
        (!l || l[1] >= 74) &&
          ((l = i.match(/Chrome\/(\d+)/)), l && (u = +l[1]))),
      (n.exports = u);
  }),
  C = e((e, r) => {
    var i = S(),
      a = n(),
      o = t().String;
    r.exports =
      !!Object.getOwnPropertySymbols &&
      !a(function () {
        var e = Symbol(`symbol detection`);
        return (
          !o(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && i && i < 41)
        );
      });
  }),
  w = e((e, t) => {
    t.exports = C() && !Symbol.sham && typeof Symbol.iterator == `symbol`;
  }),
  T = e((e, t) => {
    var n = y(),
      r = c(),
      i = b(),
      a = w(),
      o = Object;
    t.exports = a
      ? function (e) {
          return typeof e == `symbol`;
        }
      : function (e) {
          var t = n(`Symbol`);
          return r(t) && i(t.prototype, o(e));
        };
  }),
  E = e((e, t) => {
    var n = String;
    t.exports = function (e) {
      try {
        return n(e);
      } catch {
        return `Object`;
      }
    };
  }),
  D = e((e, t) => {
    var n = c(),
      r = E(),
      i = TypeError;
    t.exports = function (e) {
      if (n(e)) return e;
      throw new i(r(e) + ` is not a function`);
    };
  }),
  O = e((e, t) => {
    var n = D(),
      r = m();
    t.exports = function (e, t) {
      var i = e[t];
      return r(i) ? void 0 : n(i);
    };
  }),
  k = e((e, t) => {
    var n = u(),
      r = c(),
      i = _(),
      a = TypeError;
    t.exports = function (e, t) {
      var o, s;
      if (
        (t === `string` && r((o = e.toString)) && !i((s = n(o, e)))) ||
        (r((o = e.valueOf)) && !i((s = n(o, e)))) ||
        (t !== `string` && r((o = e.toString)) && !i((s = n(o, e))))
      )
        return s;
      throw new a(`Can't convert object to primitive value`);
    };
  }),
  A = e((e, t) => {
    t.exports = !0;
  }),
  j = e((e, n) => {
    var r = t(),
      i = Object.defineProperty;
    n.exports = function (e, t) {
      try {
        i(r, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        r[e] = t;
      }
      return t;
    };
  }),
  M = e((e, n) => {
    var r = A(),
      i = t(),
      a = j(),
      o = `__core-js_shared__`,
      s = (n.exports = i[o] || a(o, {}));
    (s.versions ||= []).push({
      version: `3.49.0`,
      mode: r ? `pure` : `global`,
      copyright: `© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.`,
      license: `https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE`,
      source: `https://github.com/zloirock/core-js`,
    });
  }),
  N = e((e, t) => {
    var n = M();
    t.exports = function (e, t) {
      return n[e] || (n[e] = t || {});
    };
  }),
  P = e((e, t) => {
    var n = h(),
      r = Object;
    t.exports = function (e) {
      return r(n(e));
    };
  }),
  F = e((e, t) => {
    var n = a(),
      r = P(),
      i = n({}.hasOwnProperty);
    t.exports =
      Object.hasOwn ||
      function (e, t) {
        return i(r(e), t);
      };
  }),
  I = e((e, t) => {
    var n = a(),
      r = 0,
      i = Math.random(),
      o = n((1.1).toString);
    t.exports = function (e) {
      return `Symbol(` + (e === void 0 ? `` : e) + `)_` + o(++r + i, 36);
    };
  }),
  L = e((e, n) => {
    var r = t(),
      i = N(),
      a = F(),
      o = I(),
      s = C(),
      c = w(),
      l = r.Symbol,
      u = i(`wks`),
      d = c ? l.for || l : (l && l.withoutSetter) || o;
    n.exports = function (e) {
      return a(u, e) || (u[e] = s && a(l, e) ? l[e] : d(`Symbol.` + e)), u[e];
    };
  }),
  ee = e((e, t) => {
    var n = u(),
      r = _(),
      i = T(),
      a = O(),
      o = k(),
      s = L(),
      c = TypeError,
      l = s(`toPrimitive`);
    t.exports = function (e, t) {
      if (!r(e) || i(e)) return e;
      var s = a(e, l),
        u;
      if (s) {
        if ((t === void 0 && (t = `default`), (u = n(s, e, t)), !r(u) || i(u)))
          return u;
        throw new c(`Can't convert object to primitive value`);
      }
      return t === void 0 && (t = `number`), o(e, t);
    };
  }),
  te = e((e, t) => {
    var n = ee(),
      r = T();
    t.exports = function (e) {
      var t = n(e, `string`);
      return r(t) ? t : t + ``;
    };
  }),
  ne = e((e, n) => {
    var r = t(),
      i = _(),
      a = r.document,
      o = i(a) && i(a.createElement);
    n.exports = function (e) {
      return o ? a.createElement(e) : {};
    };
  }),
  R = e((e, t) => {
    var r = l(),
      i = n(),
      a = ne();
    t.exports =
      !r &&
      !i(function () {
        return (
          Object.defineProperty(a(`div`), "a", {
            get: function () {
              return 7;
            },
          }).a !== 7
        );
      });
  }),
  z = e((e) => {
    var t = l(),
      n = u(),
      r = d(),
      i = f(),
      a = g(),
      o = te(),
      s = F(),
      c = R(),
      p = Object.getOwnPropertyDescriptor;
    e.f = t
      ? p
      : function (e, t) {
          if (((e = a(e)), (t = o(t)), c))
            try {
              return p(e, t);
            } catch {}
          if (s(e, t)) return i(!n(r.f, e, t), e[t]);
        };
  }),
  re = e((e, t) => {
    var r = n(),
      i = c(),
      a = /#|\.prototype\./,
      o = function (e, t) {
        var n = l[s(e)];
        return n === d ? !0 : n === u ? !1 : i(t) ? r(t) : !!t;
      },
      s = (o.normalize = function (e) {
        return String(e).replace(a, `.`).toLowerCase();
      }),
      l = (o.data = {}),
      u = (o.NATIVE = `N`),
      d = (o.POLYFILL = `P`);
    t.exports = o;
  }),
  ie = e((e, t) => {
    var n = s(),
      i = D(),
      a = r(),
      o = n(n.bind);
    t.exports = function (e, t) {
      return (
        i(e),
        t === void 0
          ? e
          : a
          ? o(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    };
  }),
  ae = e((e, t) => {
    var r = l(),
      i = n();
    t.exports =
      r &&
      i(function () {
        return (
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype !== 42
        );
      });
  }),
  oe = e((e, t) => {
    var n = _(),
      r = String,
      i = TypeError;
    t.exports = function (e) {
      if (n(e)) return e;
      throw new i(r(e) + ` is not an object`);
    };
  }),
  B = e((e) => {
    var t = l(),
      n = R(),
      r = ae(),
      i = oe(),
      a = te(),
      o = TypeError,
      s = Object.defineProperty,
      c = Object.getOwnPropertyDescriptor,
      u = `enumerable`,
      d = `configurable`,
      f = `writable`;
    e.f = t
      ? r
        ? function (e, t, n) {
            if (
              (i(e),
              (t = a(t)),
              i(n),
              typeof e == `function` &&
                t === `prototype` &&
                `value` in n &&
                f in n &&
                !n[f])
            ) {
              var r = c(e, t);
              r &&
                r[f] &&
                ((e[t] = n.value),
                (n = {
                  configurable: d in n ? n[d] : r[d],
                  enumerable: u in n ? n[u] : r[u],
                  writable: !1,
                }));
            }
            return s(e, t, n);
          }
        : s
      : function (e, t, r) {
          if ((i(e), (t = a(t)), i(r), n))
            try {
              return s(e, t, r);
            } catch {}
          if (`get` in r || `set` in r) throw new o(`Accessors not supported`);
          return `value` in r && (e[t] = r.value), e;
        };
  }),
  se = e((e, t) => {
    var n = l(),
      r = B(),
      i = f();
    t.exports = n
      ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  }),
  V = e((e, n) => {
    var r = t(),
      a = i(),
      o = s(),
      l = c(),
      u = z().f,
      d = re(),
      f = v(),
      p = ie(),
      m = se(),
      h = F();
    M();
    var g = function (e) {
      var t = function (n, r, i) {
        if (this instanceof t) {
          switch (arguments.length) {
            case 0:
              return new e();
            case 1:
              return new e(n);
            case 2:
              return new e(n, r);
          }
          return new e(n, r, i);
        }
        return a(e, this, arguments);
      };
      return (t.prototype = e.prototype), t;
    };
    n.exports = function (e, t) {
      var n = e.target,
        i = e.global,
        a = e.stat,
        s = e.proto,
        c = i ? r : a ? r[n] : r[n] && r[n].prototype,
        _ = i ? f : f[n] || m(f, n, {})[n],
        v = _.prototype,
        y,
        b,
        x,
        S,
        C,
        w,
        T,
        E,
        D;
      for (S in t)
        (y = d(i ? S : n + (a ? `.` : `#`) + S, e.forced)),
          (b = !y && c && h(c, S)),
          (w = _[S]),
          b &&
            (e.dontCallGetSet
              ? ((D = u(c, S)), (T = D && D.value))
              : (T = c[S])),
          (C = b && T ? T : t[S]),
          !(!y && !s && typeof w == typeof C) &&
            ((E =
              e.bind && b
                ? p(C, r)
                : e.wrap && b
                ? g(C)
                : s && l(C)
                ? o(C)
                : C),
            (e.sham || (C && C.sham) || (w && w.sham)) && m(E, `sham`, !0),
            m(_, S, E),
            s &&
              ((x = n + `Prototype`),
              h(f, x) || m(f, x, {}),
              m(f[x], S, C),
              e.real && v && (y || !v[S]) && m(v, S, C)));
    };
  }),
  ce = e(() => {
    var e = V(),
      t = l(),
      n = B().f;
    e(
      {
        target: `Object`,
        stat: !0,
        forced: Object.defineProperty !== n,
        sham: !t,
      },
      { defineProperty: n }
    );
  }),
  le = e((e, t) => {
    ce();
    var n = v().Object,
      r = (t.exports = function (e, t, r) {
        return n.defineProperty(e, t, r);
      });
    n.defineProperty.sham && (r.sham = !0);
  }),
  ue = e((e, t) => {
    t.exports = le();
  }),
  H = e((e, t) => {
    t.exports = ue();
  }),
  U = e((e, t) => {
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  W = e((e, t) => {
    var n = o();
    t.exports =
      Array.isArray ||
      function (e) {
        return n(e) === `Array`;
      };
  }),
  G = e((e, t) => {
    var n = L()(`toStringTag`),
      r = {};
    (r[n] = `z`), (t.exports = String(r) === `[object z]`);
  }),
  K = e((e, t) => {
    var n = G(),
      r = c(),
      i = o(),
      a = L()(`toStringTag`),
      s = Object,
      l =
        i(
          (function () {
            return arguments;
          })()
        ) === `Arguments`,
      u = function (e, t) {
        try {
          return e[t];
        } catch {}
      };
    t.exports = n
      ? i
      : function (e) {
          var t, n, o;
          return e === void 0
            ? `Undefined`
            : e === null
            ? `Null`
            : typeof (n = u((t = s(e)), a)) == `string`
            ? n
            : l
            ? i(t)
            : (o = i(t)) === `Object` && r(t.callee)
            ? `Arguments`
            : o;
        };
  }),
  de = e((e, t) => {
    var n = a(),
      r = c(),
      i = M(),
      o = n(Function.toString);
    r(i.inspectSource) ||
      (i.inspectSource = function (e) {
        return o(e);
      }),
      (t.exports = i.inspectSource);
  }),
  q = e((e, t) => {
    var r = a(),
      i = n(),
      o = c(),
      s = K(),
      l = y(),
      u = de(),
      d = function () {},
      f = l(`Reflect`, `construct`),
      p = /^\s*(?:class|function)\b/,
      m = r(p.exec),
      h = !p.test(d),
      g = function (e) {
        if (!o(e)) return !1;
        try {
          return f(d, [], e), !0;
        } catch {
          return !1;
        }
      },
      _ = function (e) {
        if (!o(e)) return !1;
        switch (s(e)) {
          case `AsyncFunction`:
          case `GeneratorFunction`:
          case `AsyncGeneratorFunction`:
            return !1;
        }
        try {
          return h || !!m(p, u(e));
        } catch {
          return !0;
        }
      };
    (_.sham = !0),
      (t.exports =
        !f ||
        i(function () {
          var e;
          return (
            g(g.call) ||
            !g(Object) ||
            !g(function () {
              e = !0;
            }) ||
            e
          );
        })
          ? _
          : g);
  }),
  J = e((e, t) => {
    var n = Math.ceil,
      r = Math.floor;
    t.exports =
      Math.trunc ||
      function (e) {
        var t = +e;
        return (t > 0 ? r : n)(t);
      };
  }),
  fe = e((e, t) => {
    var n = J();
    t.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : n(t);
    };
  }),
  Y = e((e, t) => {
    var n = fe(),
      r = Math.max,
      i = Math.min;
    t.exports = function (e, t) {
      var a = n(e);
      return a < 0 ? r(a + t, 0) : i(a, t);
    };
  }),
  pe = e((e, t) => {
    var n = fe(),
      r = Math.min;
    t.exports = function (e) {
      var t = n(e);
      return t > 0 ? r(t, 9007199254740991) : 0;
    };
  }),
  X = e((e, t) => {
    var n = pe();
    t.exports = function (e) {
      return n(e.length);
    };
  }),
  me = e((e, t) => {
    var n = l(),
      r = B(),
      i = f();
    t.exports = function (e, t, a) {
      n ? r.f(e, t, i(0, a)) : (e[t] = a);
    };
  }),
  he = e((e, t) => {
    var n = l(),
      r = W(),
      i = TypeError,
      a = Object.getOwnPropertyDescriptor;
    t.exports =
      n &&
      !(function () {
        if (this !== void 0) return !0;
        try {
          Object.defineProperty([], "length", { writable: !1 }).length = 1;
        } catch (e) {
          return e instanceof TypeError;
        }
      })()
        ? function (e, t) {
            if (r(e) && !a(e, `length`).writable)
              throw new i(`Cannot set read only .length`);
            return (e.length = t);
          }
        : function (e, t) {
            return (e.length = t);
          };
  }),
  ge = e((e, t) => {
    var r = n(),
      i = L(),
      a = S(),
      o = i(`species`);
    t.exports = function (e) {
      return (
        a >= 51 ||
        !r(function () {
          var t = [],
            n = (t.constructor = {});
          return (
            (n[o] = function () {
              return { foo: 1 };
            }),
            t[e](Boolean).foo !== 1
          );
        })
      );
    };
  }),
  _e = e((e, t) => {
    t.exports = a()([].slice);
  }),
  ve = e(() => {
    var e = V(),
      t = W(),
      n = q(),
      r = _(),
      i = Y(),
      a = X(),
      o = g(),
      s = me(),
      c = he(),
      l = L(),
      u = ge(),
      d = _e(),
      f = u(`slice`),
      p = l(`species`),
      m = Array,
      h = Math.max;
    e(
      { target: `Array`, proto: !0, forced: !f },
      {
        slice: function (e, l) {
          var u = o(this),
            f = a(u),
            g = i(e, f),
            _ = i(l === void 0 ? f : l, f),
            v,
            y,
            b;
          if (
            t(u) &&
            ((v = u.constructor),
            n(v) && (v === m || t(v.prototype))
              ? (v = void 0)
              : r(v) && ((v = v[p]), v === null && (v = void 0)),
            v === m || v === void 0)
          )
            return d(u, g, _);
          for (
            y = new (v === void 0 ? m : v)(h(_ - g, 0)), b = 0;
            g < _;
            g++, b++
          )
            g in u && s(y, b, u[g]);
          return c(y, b), y;
        },
      }
    );
  }),
  Z = e((e, n) => {
    var r = t(),
      i = v();
    n.exports = function (e, t) {
      var n = i[e + `Prototype`],
        a = n && n[t];
      if (a) return a;
      var o = r[e],
        s = o && o.prototype;
      return s && s[t];
    };
  }),
  ye = e((e, t) => {
    ve(), (t.exports = Z()(`Array`, `slice`));
  }),
  be = e((e, t) => {
    var n = b(),
      r = ye(),
      i = Array.prototype;
    t.exports = function (e) {
      var t = e.slice;
      return e === i || (n(i, e) && t === i.slice) ? r : t;
    };
  }),
  Q = e((e, t) => {
    t.exports = be();
  }),
  xe = e((e, t) => {
    t.exports = Q();
  }),
  Se = e((e, t) => {
    var n = K(),
      r = String;
    t.exports = function (e) {
      if (n(e) === `Symbol`)
        throw TypeError(`Cannot convert a Symbol value to a string`);
      return r(e);
    };
  }),
  Ce = e((e, t) => {
    var n = a(),
      r = fe(),
      i = Se(),
      o = h(),
      s = n(``.charAt),
      c = n(``.charCodeAt),
      l = n(``.slice),
      u = function (e) {
        return function (t, n) {
          var a = i(o(t)),
            u = r(n),
            d = a.length,
            f,
            p;
          return u < 0 || u >= d
            ? e
              ? ``
              : void 0
            : ((f = c(a, u)),
              f < 55296 ||
              f > 56319 ||
              u + 1 === d ||
              (p = c(a, u + 1)) < 56320 ||
              p > 57343
                ? e
                  ? s(a, u)
                  : f
                : e
                ? l(a, u, u + 2)
                : ((f - 55296) << 10) + (p - 56320) + 65536);
        };
      };
    t.exports = { codeAt: u(!1), charAt: u(!0) };
  }),
  we = e((e, n) => {
    var r = t(),
      i = c(),
      a = r.WeakMap;
    n.exports = i(a) && /native code/.test(String(a));
  }),
  Te = e((e, t) => {
    var n = N(),
      r = I(),
      i = n(`keys`);
    t.exports = function (e) {
      return i[e] || (i[e] = r(e));
    };
  }),
  Ee = e((e, t) => {
    t.exports = {};
  }),
  De = e((e, n) => {
    var r = we(),
      i = t(),
      a = _(),
      o = se(),
      s = F(),
      c = M(),
      l = Te(),
      u = Ee(),
      d = `Object already initialized`,
      f = i.TypeError,
      p = i.WeakMap,
      m,
      h,
      g,
      v = function (e) {
        return g(e) ? h(e) : m(e, {});
      },
      y = function (e) {
        return function (t) {
          var n;
          if (!a(t) || (n = h(t)).type !== e)
            throw new f(`Incompatible receiver, ` + e + ` required`);
          return n;
        };
      };
    if (r || c.state) {
      var b = (c.state ||= new p());
      (b.get = b.get),
        (b.has = b.has),
        (b.set = b.set),
        (m = function (e, t) {
          if (b.has(e)) throw new f(d);
          return (t.facade = e), b.set(e, t), t;
        }),
        (h = function (e) {
          return b.get(e) || {};
        }),
        (g = function (e) {
          return b.has(e);
        });
    } else {
      var x = l(`state`);
      (u[x] = !0),
        (m = function (e, t) {
          if (s(e, x)) throw new f(d);
          return (t.facade = e), o(e, x, t), t;
        }),
        (h = function (e) {
          return s(e, x) ? e[x] : {};
        }),
        (g = function (e) {
          return s(e, x);
        });
    }
    n.exports = { set: m, get: h, has: g, enforce: v, getterFor: y };
  }),
  Oe = e((e, t) => {
    var n = l(),
      r = F(),
      i = Function.prototype,
      a = n && Object.getOwnPropertyDescriptor,
      o = r(i, `name`);
    t.exports = {
      EXISTS: o,
      PROPER: o && function () {}.name === `something`,
      CONFIGURABLE: o && (!n || (n && a(i, `name`).configurable)),
    };
  }),
  ke = e((e, t) => {
    var n = g(),
      r = Y(),
      i = X(),
      a = function (e) {
        return function (t, a, o) {
          var s = n(t),
            c = i(s);
          if (c === 0) return !e && -1;
          var l = r(o, c),
            u;
          if (e && a !== a) {
            for (; c > l; ) if (((u = s[l++]), u !== u)) return !0;
          } else
            for (; c > l; l++)
              if ((e || l in s) && s[l] === a) return e || l || 0;
          return !e && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  }),
  Ae = e((e, t) => {
    var n = a(),
      r = F(),
      i = g(),
      o = ke().indexOf,
      s = Ee(),
      c = n([].push);
    t.exports = function (e, t) {
      var n = i(e),
        a = 0,
        l = [],
        u;
      for (u in n) !r(s, u) && r(n, u) && c(l, u);
      for (; t.length > a; ) r(n, (u = t[a++])) && (~o(l, u) || c(l, u));
      return l;
    };
  }),
  je = e((e, t) => {
    t.exports = [
      `constructor`,
      `hasOwnProperty`,
      `isPrototypeOf`,
      `propertyIsEnumerable`,
      `toLocaleString`,
      `toString`,
      `valueOf`,
    ];
  }),
  Me = e((e, t) => {
    var n = Ae(),
      r = je();
    t.exports =
      Object.keys ||
      function (e) {
        return n(e, r);
      };
  }),
  Ne = e((e) => {
    var t = l(),
      n = ae(),
      r = B(),
      i = oe(),
      a = g(),
      o = Me();
    e.f =
      t && !n
        ? Object.defineProperties
        : function (e, t) {
            i(e);
            for (var n = a(t), s = o(t), c = s.length, l = 0, u; c > l; )
              r.f(e, (u = s[l++]), n[u]);
            return e;
          };
  }),
  Pe = e((e, t) => {
    t.exports = y()(`document`, `documentElement`);
  }),
  Fe = e((e, t) => {
    var n = oe(),
      r = Ne(),
      i = je(),
      a = Ee(),
      o = Pe(),
      s = ne(),
      c = Te(),
      l = `>`,
      u = `<`,
      d = `prototype`,
      f = `script`,
      p = c(`IE_PROTO`),
      m = function () {},
      h = function (e) {
        return u + f + l + e + u + `/` + f + l;
      },
      g = function (e) {
        e.write(h(``)), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      _ = function () {
        var e = s(`iframe`),
          t = `java` + f + `:`,
          n;
        return (
          (e.style.display = `none`),
          o.appendChild(e),
          (e.src = String(t)),
          (n = e.contentWindow.document),
          n.open(),
          n.write(h(`document.F=Object`)),
          n.close(),
          n.F
        );
      },
      v,
      y = function () {
        try {
          v = new ActiveXObject(`htmlfile`);
        } catch {}
        y = typeof document < `u` ? (document.domain && v ? g(v) : _()) : g(v);
        for (var e = i.length; e--; ) delete y[d][i[e]];
        return y();
      };
    (a[p] = !0),
      (t.exports =
        Object.create ||
        function (e, t) {
          var i;
          return (
            e === null
              ? (i = y())
              : ((m[d] = n(e)), (i = new m()), (m[d] = null), (i[p] = e)),
            t === void 0 ? i : r.f(i, t)
          );
        });
  }),
  Ie = e((e, t) => {
    t.exports = !n()(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    });
  }),
  Le = e((e, t) => {
    var n = F(),
      r = c(),
      i = P(),
      a = Te(),
      o = Ie(),
      s = a(`IE_PROTO`),
      l = Object,
      u = l.prototype;
    t.exports = o
      ? l.getPrototypeOf
      : function (e) {
          var t = i(e);
          if (n(t, s)) return t[s];
          var a = t.constructor;
          return r(a) && t instanceof a
            ? a.prototype
            : t instanceof l
            ? u
            : null;
        };
  }),
  Re = e((e, t) => {
    var n = se();
    t.exports = function (e, t, r, i) {
      return i && i.enumerable ? (e[t] = r) : n(e, t, r), e;
    };
  }),
  ze = e((e, t) => {
    var r = n(),
      i = c(),
      a = _(),
      o = Fe(),
      s = Le(),
      l = Re(),
      u = L(),
      d = A(),
      f = u(`iterator`),
      p = !1,
      m,
      h,
      g;
    [].keys &&
      ((g = [].keys()),
      `next` in g
        ? ((h = s(s(g))), h !== Object.prototype && (m = h))
        : (p = !0)),
      !a(m) ||
      r(function () {
        var e = {};
        return m[f].call(e) !== e;
      })
        ? (m = {})
        : d && (m = o(m)),
      i(m[f]) ||
        l(m, f, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: m, BUGGY_SAFARI_ITERATORS: p });
  }),
  Be = e((e, t) => {
    var n = G(),
      r = K();
    t.exports = n
      ? {}.toString
      : function () {
          return `[object ` + r(this) + `]`;
        };
  }),
  Ve = e((e, t) => {
    var n = G(),
      r = B().f,
      i = se(),
      a = F(),
      o = Be(),
      s = L()(`toStringTag`);
    t.exports = function (e, t, c, l) {
      var u = c ? e : e && e.prototype;
      u &&
        (a(u, s) || r(u, s, { configurable: !0, value: t }),
        l && !n && i(u, `toString`, o));
    };
  }),
  He = e((e, t) => {
    t.exports = {};
  }),
  Ue = e((e, t) => {
    var n = ze().IteratorPrototype,
      r = Fe(),
      i = f(),
      a = Ve(),
      o = He(),
      s = function () {
        return this;
      };
    t.exports = function (e, t, c, l) {
      var u = t + ` Iterator`;
      return (
        (e.prototype = r(n, { next: i(+!l, c) })),
        a(e, u, !1, !0),
        (o[u] = s),
        e
      );
    };
  }),
  We = e((e, t) => {
    var n = a(),
      r = D();
    t.exports = function (e, t, i) {
      try {
        return n(r(Object.getOwnPropertyDescriptor(e, t)[i]));
      } catch {}
    };
  }),
  Ge = e((e, t) => {
    var n = _();
    t.exports = function (e) {
      return n(e) || e === null;
    };
  }),
  Ke = e((e, t) => {
    var n = Ge(),
      r = String,
      i = TypeError;
    t.exports = function (e) {
      if (n(e)) return e;
      throw new i(`Can't set ` + r(e) + ` as a prototype`);
    };
  }),
  qe = e((e, t) => {
    var n = We(),
      r = _(),
      i = h(),
      a = Ke();
    t.exports =
      Object.setPrototypeOf ||
      (`__proto__` in {}
        ? (function () {
            var e = !1,
              t = {},
              o;
            try {
              (o = n(Object.prototype, `__proto__`, `set`)),
                o(t, []),
                (e = t instanceof Array);
            } catch {}
            return function (t, n) {
              return i(t), a(n), r(t) && (e ? o(t, n) : (t.__proto__ = n)), t;
            };
          })()
        : void 0);
  }),
  Je = e((e, t) => {
    var n = V(),
      r = u(),
      i = A(),
      a = Oe(),
      o = c(),
      s = Ue(),
      l = Le(),
      d = qe(),
      f = Ve(),
      p = se(),
      m = Re(),
      h = L(),
      g = He(),
      _ = ze(),
      v = a.PROPER,
      y = a.CONFIGURABLE,
      b = _.IteratorPrototype,
      x = _.BUGGY_SAFARI_ITERATORS,
      S = h(`iterator`),
      C = `keys`,
      w = `values`,
      T = `entries`,
      E = function () {
        return this;
      };
    t.exports = function (e, t, a, c, u, h, _) {
      s(a, t, c);
      var D = function (e) {
          if (e === u && M) return M;
          if (!x && e && e in A) return A[e];
          switch (e) {
            case C:
              return function () {
                return new a(this, e);
              };
            case w:
              return function () {
                return new a(this, e);
              };
            case T:
              return function () {
                return new a(this, e);
              };
          }
          return function () {
            return new a(this);
          };
        },
        O = t + ` Iterator`,
        k = !1,
        A = e.prototype,
        j = A[S] || A[`@@iterator`] || (u && A[u]),
        M = (!x && j) || D(u),
        N = (t === `Array` && A.entries) || j,
        P,
        F,
        I;
      if (
        (N &&
          ((P = l(N.call(new e()))),
          P !== Object.prototype &&
            P.next &&
            (!i && l(P) !== b && (d ? d(P, b) : o(P[S]) || m(P, S, E)),
            f(P, O, !0, !0),
            i && (g[O] = E))),
        v &&
          u === w &&
          j &&
          j.name !== w &&
          (!i && y
            ? p(A, `name`, w)
            : ((k = !0),
              (M = function () {
                return r(j, this);
              }))),
        u)
      )
        if (((F = { values: D(w), keys: h ? M : D(C), entries: D(T) }), _))
          for (I in F) (x || k || !(I in A)) && m(A, I, F[I]);
        else n({ target: t, proto: !0, forced: x || k }, F);
      return (!i || _) && A[S] !== M && m(A, S, M, { name: u }), (g[t] = M), F;
    };
  }),
  Ye = e((e, t) => {
    t.exports = function (e, t) {
      return { value: e, done: t };
    };
  }),
  Xe = e(() => {
    var e = Ce().charAt,
      t = Se(),
      n = De(),
      r = Je(),
      i = Ye(),
      a = `String Iterator`,
      o = n.set,
      s = n.getterFor(a);
    r(
      String,
      `String`,
      function (e) {
        o(this, { type: a, string: t(e), index: 0 });
      },
      function () {
        var t = s(this),
          n = t.string,
          r = t.index,
          a;
        return r >= n.length
          ? i(void 0, !0)
          : ((a = e(n, r)), (t.index += a.length), i(a, !1));
      }
    );
  }),
  Ze = e((e, t) => {
    var n = u(),
      r = oe(),
      i = O();
    t.exports = function (e, t, a) {
      var o, s;
      r(e);
      try {
        if (((o = i(e, `return`)), !o)) {
          if (t === `throw`) throw a;
          return a;
        }
        o = n(o, e);
      } catch (e) {
        (s = !0), (o = e);
      }
      if (t === `throw`) throw a;
      if (s) throw o;
      return r(o), a;
    };
  }),
  Qe = e((e, t) => {
    var n = oe(),
      r = Ze();
    t.exports = function (e, t, i, a) {
      try {
        return a ? t(n(i)[0], i[1]) : t(i);
      } catch (t) {
        r(e, `throw`, t);
      }
    };
  }),
  $e = e((e, t) => {
    var n = L(),
      r = He(),
      i = n(`iterator`),
      a = Array.prototype;
    t.exports = function (e) {
      return e !== void 0 && (r.Array === e || a[i] === e);
    };
  }),
  et = e((e, t) => {
    var n = K(),
      r = O(),
      i = m(),
      a = He(),
      o = L()(`iterator`);
    t.exports = function (e) {
      if (!i(e)) return r(e, o) || r(e, `@@iterator`) || a[n(e)];
    };
  }),
  tt = e((e, t) => {
    var n = u(),
      r = D(),
      i = oe(),
      a = E(),
      o = et(),
      s = TypeError;
    t.exports = function (e, t) {
      var c = arguments.length < 2 ? o(e) : t;
      if (r(c)) return i(n(c, e));
      throw new s(a(e) + ` is not iterable`);
    };
  }),
  nt = e((e, t) => {
    var n = ie(),
      r = u(),
      i = P(),
      a = Qe(),
      o = $e(),
      s = q(),
      c = X(),
      l = me(),
      d = he(),
      f = tt(),
      p = et(),
      m = Ze(),
      h = Array;
    t.exports = function (e) {
      var t = s(this),
        u = arguments.length,
        g = u > 1 ? arguments[1] : void 0,
        _ = g !== void 0;
      _ && (g = n(g, u > 2 ? arguments[2] : void 0));
      var v = i(e),
        y = p(v),
        b = 0,
        x,
        S,
        C,
        w,
        T,
        E;
      if (y && !(this === h && o(y)))
        for (
          S = t ? new this() : [], w = f(v, y), T = w.next;
          !(C = r(T, w)).done;
          b++
        ) {
          E = _ ? a(w, g, [C.value, b], !0) : C.value;
          try {
            l(S, b, E);
          } catch (e) {
            m(w, `throw`, e);
          }
        }
      else
        for (x = c(v), S = t ? new this(x) : h(x); x > b; b++)
          (E = _ ? g(v[b], b) : v[b]), l(S, b, E);
      return d(S, b), S;
    };
  }),
  rt = e((e, t) => {
    var n = L()(`iterator`),
      r = !1;
    try {
      var i = 0,
        a = {
          next: function () {
            return { done: !!i++ };
          },
          return: function () {
            r = !0;
          },
        };
      (a[n] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch {}
    t.exports = function (e, t) {
      try {
        if (!t && !r) return !1;
      } catch {
        return !1;
      }
      var i = !1;
      try {
        var a = {};
        (a[n] = function () {
          return {
            next: function () {
              return { done: (i = !0) };
            },
          };
        }),
          e(a);
      } catch {}
      return i;
    };
  }),
  it = e(() => {
    var e = V(),
      t = nt();
    e(
      {
        target: `Array`,
        stat: !0,
        forced: !rt()(function (e) {
          Array.from(e);
        }),
      },
      { from: t }
    );
  }),
  at = e((e, t) => {
    Xe(), it(), (t.exports = v().Array.from);
  }),
  ot = e((e, t) => {
    t.exports = at();
  }),
  st = e((e, t) => {
    t.exports = ot();
  }),
  ct = e((e, t) => {
    var n = TypeError,
      r = 9007199254740991;
    t.exports = function (e) {
      if (e > r) throw new n(`Maximum allowed index exceeded`);
      return e;
    };
  }),
  lt = e((e, t) => {
    var n = W(),
      r = q(),
      i = _(),
      a = L()(`species`),
      o = Array;
    t.exports = function (e) {
      var t;
      return (
        n(e) &&
          ((t = e.constructor),
          r(t) && (t === o || n(t.prototype))
            ? (t = void 0)
            : i(t) && ((t = t[a]), t === null && (t = void 0))),
        t === void 0 ? o : t
      );
    };
  }),
  ut = e((e, t) => {
    var n = lt();
    t.exports = function (e, t) {
      return new (n(e))(t === 0 ? 0 : t);
    };
  }),
  dt = e(() => {
    var e = V(),
      t = n(),
      r = W(),
      i = _(),
      a = P(),
      o = X(),
      s = ct(),
      c = me(),
      l = he(),
      u = ut(),
      d = ge(),
      f = L(),
      p = S(),
      m = f(`isConcatSpreadable`),
      h =
        p >= 51 ||
        !t(function () {
          var e = [];
          return (e[m] = !1), e.concat()[0] !== e;
        }),
      g = function (e) {
        if (!i(e)) return !1;
        var t = e[m];
        return t === void 0 ? r(e) : !!t;
      };
    e(
      { target: `Array`, proto: !0, arity: 1, forced: !h || !d(`concat`) },
      {
        concat: function (e) {
          var t = a(this),
            n = u(t, 0),
            r = 0,
            i,
            d,
            f,
            p,
            m;
          for (i = -1, f = arguments.length; i < f; i++)
            if (((m = i === -1 ? t : arguments[i]), g(m)))
              for (p = o(m), s(r + p), d = 0; d < p; d++, r++)
                d in m && c(n, r, m[d]);
            else s(r + 1), c(n, r++, m);
          return l(n, r), n;
        },
      }
    );
  }),
  ft = e(() => {}),
  pt = e((e) => {
    var t = Ae(),
      n = je().concat(`length`, `prototype`);
    e.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return t(e, n);
      };
  }),
  mt = e((e, t) => {
    var n = o(),
      r = g(),
      i = pt().f,
      a = _e(),
      s =
        typeof window == `object` && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [],
      c = function (e) {
        try {
          return i(e);
        } catch {
          return a(s);
        }
      };
    t.exports.f = function (e) {
      return s && n(e) === `Window` ? c(e) : i(r(e));
    };
  }),
  ht = e((e) => {
    e.f = Object.getOwnPropertySymbols;
  }),
  gt = e((e, t) => {
    var n = B();
    t.exports = function (e, t, r) {
      return n.f(e, t, r);
    };
  }),
  _t = e((e) => {
    e.f = L();
  }),
  $ = e((e, t) => {
    var n = v(),
      r = F(),
      i = _t(),
      a = B().f;
    t.exports = function (e) {
      var t = (n.Symbol ||= {});
      r(t, e) || a(t, e, { value: i.f(e) });
    };
  }),
  vt = e((e, t) => {
    var n = u(),
      r = y(),
      i = L(),
      a = Re();
    t.exports = function () {
      var e = r(`Symbol`),
        t = e && e.prototype,
        o = t && t.valueOf,
        s = i(`toPrimitive`);
      t &&
        !t[s] &&
        a(
          t,
          s,
          function (e) {
            return n(o, this);
          },
          { arity: 1 }
        );
    };
  }),
  yt = e((e, t) => {
    var n = ie(),
      r = p(),
      i = P(),
      a = X(),
      o = ut(),
      s = me(),
      c = function (e) {
        var t = e === 1,
          c = e === 2,
          l = e === 3,
          u = e === 4,
          d = e === 6,
          f = e === 7,
          p = e === 5 || d;
        return function (m, h, g) {
          for (
            var _ = i(m),
              v = r(_),
              y = a(v),
              b = n(h, g),
              x = 0,
              S = 0,
              C = t ? o(m, y) : c || f ? o(m, 0) : void 0,
              w,
              T;
            y > x;
            x++
          )
            if ((p || x in v) && ((w = v[x]), (T = b(w, x, _)), e))
              if (t) s(C, x, T);
              else if (T)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return w;
                  case 6:
                    return x;
                  case 2:
                    s(C, S++, w);
                }
              else
                switch (e) {
                  case 4:
                    return !1;
                  case 7:
                    s(C, S++, w);
                }
          return d ? -1 : l || u ? u : C;
        };
      };
    t.exports = {
      forEach: c(0),
      map: c(1),
      filter: c(2),
      some: c(3),
      every: c(4),
      find: c(5),
      findIndex: c(6),
      filterReject: c(7),
    };
  }),
  bt = e(() => {
    var e = V(),
      r = t(),
      i = u(),
      o = a(),
      s = A(),
      c = l(),
      p = C(),
      m = n(),
      h = F(),
      _ = b(),
      v = oe(),
      y = g(),
      x = te(),
      S = Se(),
      w = f(),
      T = Fe(),
      E = Me(),
      D = pt(),
      O = mt(),
      k = ht(),
      j = z(),
      M = B(),
      P = Ne(),
      ee = d(),
      ne = Re(),
      R = gt(),
      re = N(),
      ie = Te(),
      ae = Ee(),
      se = I(),
      ce = L(),
      le = _t(),
      ue = $(),
      H = vt(),
      U = Ve(),
      W = De(),
      G = yt().forEach,
      K = ie(`hidden`),
      de = `Symbol`,
      q = `prototype`,
      J = W.set,
      fe = W.getterFor(de),
      Y = Object[q],
      pe = r.Symbol,
      X = pe && pe[q],
      me = r.RangeError,
      he = r.TypeError,
      ge = r.QObject,
      _e = j.f,
      ve = M.f,
      Z = O.f,
      ye = ee.f,
      be = o([].push),
      Q = re(`symbols`),
      xe = re(`op-symbols`),
      Ce = re(`wks`),
      we = !ge || !ge[q] || !ge[q].findChild,
      Oe = function (e, t, n) {
        var r = _e(Y, t);
        return r && delete Y[t], ve(e, t, n), r && e !== Y && ve(Y, t, r), e;
      },
      ke =
        c &&
        m(function () {
          return (
            T(
              ve({}, `a`, {
                get: function () {
                  return ve(this, `a`, { value: 7 }).a;
                },
              })
            ).a !== 7
          );
        })
          ? Oe
          : ve,
      Ae = function (e, t) {
        var n = (Q[e] = T(X));
        return (
          J(n, { type: de, tag: e, description: t }),
          c || (n.description = t),
          n
        );
      },
      je = function (e, t, n) {
        e === Y && je(xe, t, n), v(e);
        var r = x(t);
        return (
          v(n),
          h(Q, r)
            ? ((
                `enumerable` in n
                  ? !n.enumerable
                  : !h(e, r) || (h(e, K) && e[K][r])
              )
                ? (h(e, K) || ve(e, K, w(1, T(null))), (e[K][r] = !0))
                : (h(e, K) && e[K][r] && (e[K][r] = !1),
                  (n = T(n, { enumerable: w(0, !1) }))),
              ke(e, r, n))
            : ve(e, r, n)
        );
      },
      Pe = function (e, t) {
        v(e);
        var n = y(t);
        return (
          G(E(n).concat(He(n)), function (t) {
            (!c || i(Le, n, t)) && je(e, t, n[t]);
          }),
          e
        );
      },
      Ie = function (e, t) {
        return t === void 0 ? T(e) : Pe(T(e), t);
      },
      Le = function (e) {
        var t = x(e),
          n = i(ye, this, t);
        return this === Y && h(Q, t) && !h(xe, t)
          ? !1
          : n || !h(this, t) || !h(Q, t) || (h(this, K) && this[K][t])
          ? n
          : !0;
      },
      ze = function (e, t) {
        var n = y(e),
          r = x(t);
        if (!(n === Y && h(Q, r) && !h(xe, r))) {
          var i = _e(n, r);
          return (
            i && h(Q, r) && !(h(n, K) && n[K][r]) && (i.enumerable = !0), i
          );
        }
      },
      Be = function (e) {
        var t = Z(y(e)),
          n = [];
        return (
          G(t, function (e) {
            !h(Q, e) && !h(ae, e) && be(n, e);
          }),
          n
        );
      },
      He = function (e) {
        var t = e === Y,
          n = Z(t ? xe : y(e)),
          r = [];
        return (
          G(n, function (e) {
            h(Q, e) && (!t || h(Y, e)) && be(r, Q[e]);
          }),
          r
        );
      };
    p ||
      ((pe = function () {
        if (_(X, this)) throw new he(`Symbol is not a constructor`);
        var e =
            !arguments.length || arguments[0] === void 0
              ? void 0
              : S(arguments[0]),
          t = se(e),
          n = function (e) {
            var a = this === void 0 ? r : this;
            a === Y && i(n, xe, e), h(a, K) && h(a[K], t) && (a[K][t] = !1);
            var o = w(1, e);
            try {
              ke(a, t, o);
            } catch (e) {
              if (!(e instanceof me)) throw e;
              Oe(a, t, o);
            }
          };
        return c && we && ke(Y, t, { configurable: !0, set: n }), Ae(t, e);
      }),
      (X = pe[q]),
      ne(X, `toString`, function () {
        return fe(this).tag;
      }),
      ne(pe, `withoutSetter`, function (e) {
        return Ae(se(e), e);
      }),
      (ee.f = Le),
      (M.f = je),
      (P.f = Pe),
      (j.f = ze),
      (D.f = O.f = Be),
      (k.f = He),
      (le.f = function (e) {
        return Ae(ce(e), e);
      }),
      c &&
        (R(X, `description`, {
          configurable: !0,
          get: function () {
            return fe(this).description;
          },
        }),
        s || ne(Y, `propertyIsEnumerable`, Le, { unsafe: !0 }))),
      e(
        { global: !0, constructor: !0, wrap: !0, forced: !p, sham: !p },
        { Symbol: pe }
      ),
      G(E(Ce), function (e) {
        ue(e);
      }),
      e(
        { target: de, stat: !0, forced: !p },
        {
          useSetter: function () {
            we = !0;
          },
          useSimple: function () {
            we = !1;
          },
        }
      ),
      e(
        { target: `Object`, stat: !0, forced: !p, sham: !c },
        {
          create: Ie,
          defineProperty: je,
          defineProperties: Pe,
          getOwnPropertyDescriptor: ze,
        }
      ),
      e(
        { target: `Object`, stat: !0, forced: !p },
        { getOwnPropertyNames: Be }
      ),
      H(),
      U(pe, de),
      (ae[K] = !0);
  }),
  xt = e((e, t) => {
    t.exports = C() && !!Symbol.for && !!Symbol.keyFor;
  }),
  St = e(() => {
    var e = V(),
      t = y(),
      n = F(),
      r = Se(),
      i = N(),
      a = xt(),
      o = i(`string-to-symbol-registry`),
      s = i(`symbol-to-string-registry`);
    e(
      { target: `Symbol`, stat: !0, forced: !a },
      {
        for: function (e) {
          var i = r(e);
          if (n(o, i)) return o[i];
          var a = t(`Symbol`)(i);
          return (o[i] = a), (s[a] = i), a;
        },
      }
    );
  }),
  Ct = e(() => {
    var e = V(),
      t = F(),
      n = T(),
      r = E(),
      i = N(),
      a = xt(),
      o = i(`symbol-to-string-registry`);
    e(
      { target: `Symbol`, stat: !0, forced: !a },
      {
        keyFor: function (e) {
          if (!n(e)) throw TypeError(r(e) + ` is not a symbol`);
          if (t(o, e)) return o[e];
        },
      }
    );
  }),
  wt = e((e, t) => {
    var n = _(),
      r = De().get;
    t.exports = function (e) {
      if (!n(e)) return !1;
      var t = r(e);
      return !!t && t.type === `RawJSON`;
    };
  }),
  Tt = e((e, t) => {
    var n = a(),
      r = F(),
      i = SyntaxError,
      o = parseInt,
      s = String.fromCharCode,
      c = n(``.charAt),
      l = n(``.slice),
      u = n(/./.exec),
      d = {
        '\\"': `"`,
        "\\\\": `\\`,
        "\\/": `/`,
        "\\b": `\b`,
        "\\f": `\f`,
        "\\n": `
`,
        "\\r": `\r`,
        "\\t": `	`,
      },
      f = /^[\da-f]{4}$/i,
      p = /^[\u0000-\u001F]$/;
    t.exports = function (e, t) {
      for (var n = !0, a = ``; t < e.length; ) {
        var m = c(e, t);
        if (m === `\\`) {
          var h = l(e, t, t + 2);
          if (r(d, h)) (a += d[h]), (t += 2);
          else if (h === `\\u`) {
            t += 2;
            var g = l(e, t, t + 4);
            if (!u(f, g)) throw new i(`Bad Unicode escape at: ` + t);
            (a += s(o(g, 16))), (t += 4);
          } else throw new i(`Unknown escape sequence: "` + h + `"`);
        } else if (m === `"`) {
          (n = !1), t++;
          break;
        } else {
          if (u(p, m))
            throw new i(`Bad control character in string literal at: ` + t);
          (a += m), t++;
        }
      }
      if (n) throw new i(`Unterminated string at: ` + t);
      return { value: a, end: t };
    };
  }),
  Et = e((e, t) => {
    t.exports = !n()(function () {
      var e = `9007199254740993`,
        t = JSON.rawJSON(e);
      return !JSON.isRawJSON(t) || JSON.stringify(t) !== e;
    });
  }),
  Dt = e(() => {
    var e = V(),
      t = y(),
      r = i(),
      s = u(),
      l = a(),
      d = n(),
      f = W(),
      p = c(),
      m = wt(),
      h = T(),
      g = o(),
      _ = Se(),
      v = _e(),
      b = Tt(),
      x = I(),
      S = C(),
      w = Et(),
      E = String,
      D = t(`JSON`, `stringify`),
      O = l(/./.exec),
      k = l(``.charAt),
      A = l(``.charCodeAt),
      j = l(``.replace),
      M = l(``.slice),
      N = l([].push),
      P = l((1.1).toString),
      F = /[\uD800-\uDFFF]/g,
      L = /^[\uD800-\uDBFF]$/,
      ee = /^[\uDC00-\uDFFF]$/,
      te = x(),
      ne = te.length,
      R =
        !S ||
        d(function () {
          var e = t(`Symbol`)(`stringify detection`);
          return (
            D([e]) !== `[null]` || D({ a: e }) !== `{}` || D(Object(e)) !== `{}`
          );
        }),
      z = d(function () {
        return (
          D(`\udf06\ud834`) !== `"\\udf06\\ud834"` ||
          D(`\udead`) !== `"\\udead"`
        );
      }),
      re = R
        ? function (e, t) {
            var n = v(arguments),
              i = ae(t);
            if (!(!p(i) && (e === void 0 || h(e))))
              return (
                (n[1] = function (e, t) {
                  if ((p(i) && (t = s(i, this, E(e), t)), !h(t))) return t;
                }),
                r(D, null, n)
              );
          }
        : D,
      ie = function (e, t, n) {
        var r = k(n, t - 1),
          i = k(n, t + 1);
        return (O(L, e) && !O(ee, i)) || (O(ee, e) && !O(L, r))
          ? `\\u` + P(A(e, 0), 16)
          : e;
      },
      ae = function (e) {
        if (p(e)) return e;
        if (f(e)) {
          for (var t = e.length, n = [], r = 0; r < t; r++) {
            var i = e[r];
            typeof i == `string`
              ? N(n, i)
              : (typeof i == `number` ||
                  g(i) === `Number` ||
                  g(i) === `String`) &&
                N(n, _(i));
          }
          var a = n.length,
            o = !0;
          return function (e, t) {
            if (o) return (o = !1), t;
            if (f(this)) return t;
            for (var r = 0; r < a; r++) if (n[r] === e) return t;
          };
        }
      };
    D &&
      e(
        { target: `JSON`, stat: !0, arity: 3, forced: R || z || !w },
        {
          stringify: function (e, t, n) {
            var r = ae(t),
              i = [],
              a = re(
                e,
                function (e, t) {
                  var n = p(r) ? s(r, this, E(e), t) : t;
                  return !w && m(n) ? te + (N(i, n.rawJSON) - 1) : n;
                },
                n
              );
            if (typeof a != `string` || (z && (a = j(a, F, ie)), w)) return a;
            for (var o = ``, c = a.length, l = 0; l < c; l++) {
              var u = k(a, l);
              if (u === `"`) {
                var d = b(a, ++l).end - 1,
                  f = M(a, l, d);
                (o += M(f, 0, ne) === te ? i[M(f, ne)] : `"` + f + `"`),
                  (l = d);
              } else o += u;
            }
            return o;
          },
        }
      );
  }),
  Ot = e(() => {
    var e = V(),
      t = C(),
      r = n(),
      i = ht(),
      a = P();
    e(
      {
        target: `Object`,
        stat: !0,
        forced:
          !t ||
          r(function () {
            i.f(1);
          }),
      },
      {
        getOwnPropertySymbols: function (e) {
          var t = i.f;
          return t ? t(a(e)) : [];
        },
      }
    );
  }),
  kt = e(() => {
    bt(), St(), Ct(), Dt(), Ot();
  }),
  At = e(() => {
    $()(`asyncDispose`);
  }),
  jt = e(() => {
    $()(`asyncIterator`);
  }),
  Mt = e(() => {}),
  Nt = e(() => {
    $()(`dispose`);
  }),
  Pt = e(() => {
    $()(`hasInstance`);
  }),
  Ft = e(() => {
    $()(`isConcatSpreadable`);
  }),
  It = e(() => {
    $()(`iterator`);
  }),
  Lt = e(() => {
    $()(`match`);
  }),
  Rt = e(() => {
    $()(`matchAll`);
  }),
  zt = e(() => {
    $()(`replace`);
  }),
  Bt = e(() => {
    $()(`search`);
  }),
  Vt = e(() => {
    $()(`species`);
  }),
  Ht = e(() => {
    $()(`split`);
  }),
  Ut = e(() => {
    var e = $(),
      t = vt();
    e(`toPrimitive`), t();
  }),
  Wt = e(() => {
    var e = y(),
      t = $(),
      n = Ve();
    t(`toStringTag`), n(e(`Symbol`), `Symbol`);
  }),
  Gt = e(() => {
    $()(`unscopables`);
  }),
  Kt = e(() => {
    var e = t();
    Ve()(e.JSON, `JSON`, !0);
  }),
  qt = e(() => {}),
  Jt = e(() => {}),
  Yt = e((e, t) => {
    dt(),
      ft(),
      kt(),
      At(),
      jt(),
      Mt(),
      Nt(),
      Pt(),
      Ft(),
      It(),
      Lt(),
      Rt(),
      zt(),
      Bt(),
      Vt(),
      Ht(),
      Ut(),
      Wt(),
      Gt(),
      Kt(),
      qt(),
      Jt(),
      (t.exports = v().Symbol);
  }),
  Xt = e((e, t) => {
    t.exports = function () {};
  }),
  Zt = e((e, t) => {
    var n = g(),
      r = Xt(),
      i = He(),
      a = De(),
      o = B().f,
      s = Je(),
      c = Ye(),
      u = A(),
      d = l(),
      f = `Array Iterator`,
      p = a.set,
      m = a.getterFor(f);
    t.exports = s(
      Array,
      `Array`,
      function (e, t) {
        p(this, { type: f, target: n(e), index: 0, kind: t });
      },
      function () {
        var e = m(this),
          t = e.target,
          n = e.index++;
        if (!t || n >= t.length) return (e.target = null), c(void 0, !0);
        switch (e.kind) {
          case `keys`:
            return c(n, !1);
          case `values`:
            return c(t[n], !1);
        }
        return c([n, t[n]], !1);
      },
      `values`
    );
    var h = (i.Arguments = i.Array);
    if ((r(`keys`), r(`values`), r(`entries`), !u && d && h.name !== `values`))
      try {
        o(h, `name`, { value: `values` });
      } catch {}
  }),
  Qt = e((e, t) => {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  }),
  $t = e(() => {
    Zt();
    var e = Qt(),
      n = t(),
      r = Ve(),
      i = He();
    for (var a in e) r(n[a], a), (i[a] = i.Array);
  }),
  en = e((e, t) => {
    var n = Yt();
    $t(), (t.exports = n);
  }),
  tn = e((e, t) => {
    t.exports = en();
  }),
  nn = e((e, t) => {
    Zt(), Xe(), (t.exports = et());
  }),
  rn = e((e, t) => {
    var n = nn();
    $t(), (t.exports = n);
  }),
  an = e((e, t) => {
    t.exports = rn();
  }),
  on = e((e, t) => {
    t.exports = an();
  }),
  sn = e((e, t) => {
    t.exports = on();
  }),
  cn = e((e, t) => {
    t.exports = sn();
  }),
  ln = e(() => {
    V()({ target: `Array`, stat: !0 }, { isArray: W() });
  }),
  un = e((e, t) => {
    ln(), (t.exports = v().Array.isArray);
  }),
  dn = e((e, t) => {
    t.exports = un();
  }),
  fn = e((e, t) => {
    t.exports = dn();
  }),
  pn = e((e, t) => {
    t.exports = dn();
  }),
  mn = e((e, t) => {
    t.exports = pn();
  }),
  hn = e((e, t) => {
    t.exports = mn();
  }),
  gn = e((e, t) => {
    var n = hn();
    function r(e) {
      if (n(e)) return e;
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  _n = e(() => {
    var e = L(),
      t = B().f,
      n = e(`metadata`),
      r = Function.prototype;
    r[n] === void 0 && t(r, n, { value: null });
  }),
  vn = e(() => {
    At();
  }),
  yn = e(() => {
    Nt();
  }),
  bn = e(() => {
    $()(`metadata`);
  }),
  xn = e((e, t) => {
    var n = en();
    _n(), vn(), yn(), bn(), (t.exports = n);
  }),
  Sn = e((e, t) => {
    var n = y(),
      r = a(),
      i = n(`Symbol`),
      o = i.keyFor,
      s = r(i.prototype.valueOf);
    t.exports =
      i.isRegisteredSymbol ||
      function (e) {
        try {
          return o(s(e)) !== void 0;
        } catch {
          return !1;
        }
      };
  }),
  Cn = e(() => {
    V()({ target: `Symbol`, stat: !0 }, { isRegisteredSymbol: Sn() });
  }),
  wn = e((e, t) => {
    for (
      var n = N(),
        r = y(),
        i = a(),
        o = T(),
        s = L(),
        c = r(`Symbol`),
        l = c.isWellKnownSymbol,
        u = r(`Object`, `getOwnPropertyNames`),
        d = i(c.prototype.valueOf),
        f = n(`wks`),
        p = 0,
        m = u(c),
        h = m.length;
      p < h;
      p++
    )
      try {
        var g = m[p];
        o(c[g]) && s(g);
      } catch {}
    t.exports = function (e) {
      if (l && l(e)) return !0;
      try {
        for (var t = d(e), n = 0, r = u(f), i = r.length; n < i; n++)
          if (f[r[n]] == t) return !0;
      } catch {}
      return !1;
    };
  }),
  Tn = e(() => {
    V()(
      { target: `Symbol`, stat: !0, forced: !0 },
      { isWellKnownSymbol: wn() }
    );
  }),
  En = e(() => {
    $()(`customMatcher`);
  }),
  Dn = e(() => {
    $()(`observable`);
  }),
  On = e(() => {
    V()(
      { target: `Symbol`, stat: !0, name: `isRegisteredSymbol` },
      { isRegistered: Sn() }
    );
  }),
  kn = e(() => {
    V()(
      { target: `Symbol`, stat: !0, name: `isWellKnownSymbol`, forced: !0 },
      { isWellKnown: wn() }
    );
  }),
  An = e(() => {
    $()(`matcher`);
  }),
  jn = e(() => {
    $()(`metadataKey`);
  }),
  Mn = e(() => {
    $()(`patternMatch`);
  }),
  Nn = e(() => {
    $()(`replaceAll`);
  }),
  Pn = e((e, t) => {
    var n = xn();
    Cn(), Tn(), En(), Dn(), On(), kn(), An(), jn(), Mn(), Nn(), (t.exports = n);
  }),
  Fn = e((e, t) => {
    t.exports = Pn();
  }),
  In = e(() => {
    var e = V(),
      t = P(),
      r = X(),
      i = he(),
      a = ct();
    e(
      {
        target: `Array`,
        proto: !0,
        arity: 1,
        forced:
          n()(function () {
            return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
          }) ||
          !(function () {
            try {
              Object.defineProperty([], "length", { writable: !1 }).push();
            } catch (e) {
              return e instanceof TypeError;
            }
          })(),
      },
      {
        push: function (e) {
          var n = t(this),
            o = r(n),
            s = arguments.length;
          a(o + s);
          for (var c = 0; c < s; c++) (n[o] = arguments[c]), o++;
          return i(n, o), o;
        },
      }
    );
  }),
  Ln = e((e, t) => {
    In(), (t.exports = Z()(`Array`, `push`));
  }),
  Rn = e((e, t) => {
    var n = b(),
      r = Ln(),
      i = Array.prototype;
    t.exports = function (e) {
      var t = e.push;
      return e === i || (n(i, e) && t === i.push) ? r : t;
    };
  }),
  zn = e((e, t) => {
    t.exports = Rn();
  }),
  Bn = e((e, t) => {
    t.exports = zn();
  }),
  Vn = e((e, t) => {
    t.exports = Bn();
  }),
  Hn = e((e, t) => {
    t.exports = Vn();
  }),
  Un = e((e, t) => {
    var n = Fn(),
      r = sn(),
      i = Hn();
    function a(e, t) {
      var a = e == null ? null : (n !== void 0 && r(e)) || e[`@@iterator`];
      if (a != null) {
        var o,
          s,
          c,
          l,
          u = [],
          d = !0,
          f = !1;
        try {
          if (((c = (a = a.call(e)).next), t === 0)) {
            if (Object(a) !== a) return;
            d = !1;
          } else
            for (
              ;
              !(d = (o = c.call(a)).done) &&
              (i(u).call(u, o.value), u.length !== t);
              d = !0
            );
        } catch (e) {
          (f = !0), (s = e);
        } finally {
          try {
            if (!d && a.return != null && ((l = a.return()), Object(l) !== l))
              return;
          } finally {
            if (f) throw s;
          }
        }
        return u;
      }
    }
    (t.exports = a),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Wn = e((e, t) => {
    t.exports = Q();
  }),
  Gn = e((e, t) => {
    t.exports = Wn();
  }),
  Kn = e((e, t) => {
    t.exports = Gn();
  }),
  qn = e((e, t) => {
    t.exports = ot();
  }),
  Jn = e((e, t) => {
    t.exports = qn();
  }),
  Yn = e((e, t) => {
    t.exports = Jn();
  }),
  Xn = e((e, t) => {
    function n(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Zn = e((e, t) => {
    var n = Kn(),
      r = Yn(),
      i = Xn();
    function a(e, t) {
      if (e) {
        var a;
        if (typeof e == `string`) return i(e, t);
        var o = n((a = {}.toString.call(e))).call(a, 8, -1);
        return (
          o === `Object` && e.constructor && (o = e.constructor.name),
          o === `Map` || o === `Set`
            ? r(e)
            : o === `Arguments` ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            ? i(e, t)
            : void 0
        );
      }
    }
    (t.exports = a),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  Qn = e((e, t) => {
    function n() {
      throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  $n = e((e, t) => {
    var n = gn(),
      r = Un(),
      i = Zn(),
      a = Qn();
    function o(e, t) {
      return n(e) || r(e, t) || i(e, t) || a();
    }
    (t.exports = o),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  }),
  er = e(() => {
    var e = V(),
      t = l(),
      n = Fe();
    e({ target: `Object`, stat: !0, sham: !t }, { create: n });
  }),
  tr = e((e, t) => {
    er();
    var n = v().Object;
    t.exports = function (e, t) {
      return n.create(e, t);
    };
  }),
  nr = e((e, t) => {
    t.exports = tr();
  }),
  rr = e((e, t) => {
    t.exports = nr();
  }),
  ir = e(() => {}),
  ar = e((e, r) => {
    var i = t(),
      a = n(),
      o = i.RegExp;
    r.exports = {
      correct: !a(function () {
        var e = !0;
        try {
          o(`.`, `d`);
        } catch {
          e = !1;
        }
        var t = {},
          n = ``,
          r = e ? `dgimsy` : `gimsy`,
          i = function (e, r) {
            Object.defineProperty(t, e, {
              get: function () {
                return (n += r), !0;
              },
            });
          },
          a = {
            dotAll: `s`,
            global: `g`,
            ignoreCase: `i`,
            multiline: `m`,
            sticky: `y`,
          };
        for (var s in (e && (a.hasIndices = `d`), a)) i(s, a[s]);
        return (
          Object.getOwnPropertyDescriptor(o.prototype, `flags`).get.call(t) !==
            r || n !== r
        );
      }),
    };
  }),
  or = e((e, t) => {
    var n = oe();
    t.exports = function () {
      var e = n(this),
        t = ``;
      return (
        e.hasIndices && (t += `d`),
        e.global && (t += `g`),
        e.ignoreCase && (t += `i`),
        e.multiline && (t += `m`),
        e.dotAll && (t += `s`),
        e.unicode && (t += `u`),
        e.unicodeSets && (t += `v`),
        e.sticky && (t += `y`),
        t
      );
    };
  }),
  sr = e((e, t) => {
    var n = u(),
      r = F(),
      i = b(),
      a = ar(),
      o = or(),
      s = RegExp.prototype;
    t.exports = a.correct
      ? function (e) {
          return e.flags;
        }
      : function (e) {
          return !a.correct && i(s, e) && !r(e, `flags`) ? n(o, e) : e.flags;
        };
  }),
  cr = e((e, t) => {
    ir(), (t.exports = sr());
  }),
  lr = e((e, t) => {
    var n = b(),
      r = cr(),
      i = RegExp.prototype;
    t.exports = function (e) {
      return e === i || n(i, e) ? r(e) : e.flags;
    };
  }),
  ur = e((e, t) => {
    t.exports = lr();
  }),
  dr = e((e, t) => {
    t.exports = ur();
  }),
  fr = e((e, t) => {
    var n = E(),
      r = TypeError;
    t.exports = function (e, t) {
      if (!delete e[t])
        throw new r(`Cannot delete property ` + n(t) + ` of ` + n(e));
    };
  }),
  pr = e((e, t) => {
    var n = _e(),
      r = Math.floor,
      i = function (e, t) {
        var a = e.length;
        if (a < 8)
          for (var o = 1, s, c; o < a; ) {
            for (c = o, s = e[o]; c && t(e[c - 1], s) > 0; ) e[c] = e[--c];
            c !== o++ && (e[c] = s);
          }
        else
          for (
            var l = r(a / 2),
              u = i(n(e, 0, l), t),
              d = i(n(e, l), t),
              f = u.length,
              p = d.length,
              m = 0,
              h = 0;
            m < f || h < p;

          )
            e[m + h] =
              m < f && h < p
                ? t(u[m], d[h]) <= 0
                  ? u[m++]
                  : d[h++]
                : m < f
                ? u[m++]
                : d[h++];
        return e;
      };
    t.exports = i;
  }),
  mr = e((e, t) => {
    var r = n();
    t.exports = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        r(function () {
          n.call(
            null,
            t ||
              function () {
                return 1;
              },
            1
          );
        })
      );
    };
  }),
  hr = e((e, t) => {
    var n = x().match(/firefox\/(\d+)/i);
    t.exports = !!n && +n[1];
  }),
  gr = e((e, t) => {
    var n = x();
    t.exports = /MSIE|Trident/.test(n);
  }),
  _r = e((e, t) => {
    var n = x().match(/AppleWebKit\/(\d+)\./);
    t.exports = !!n && +n[1];
  }),
  vr = e(() => {
    var e = V(),
      t = a(),
      r = D(),
      i = P(),
      o = X(),
      s = fr(),
      c = Se(),
      l = n(),
      u = pr(),
      d = mr(),
      f = hr(),
      p = gr(),
      m = S(),
      h = _r(),
      g = [],
      _ = t(g.sort),
      v = t(g.push),
      y = l(function () {
        g.sort(void 0);
      }),
      b = l(function () {
        g.sort(null);
      }),
      x = d(`sort`),
      C = !l(function () {
        if (m) return m < 70;
        if (!(f && f > 3)) {
          if (p) return !0;
          if (h) return h < 603;
          var e = ``,
            t,
            n,
            r,
            i;
          for (t = 65; t < 76; t++) {
            switch (((n = String.fromCharCode(t)), t)) {
              case 66:
              case 69:
              case 70:
              case 72:
                r = 3;
                break;
              case 68:
              case 71:
                r = 4;
                break;
              default:
                r = 2;
            }
            for (i = 0; i < 47; i++) g.push({ k: n + i, v: r });
          }
          for (
            g.sort(function (e, t) {
              return t.v - e.v;
            }),
              i = 0;
            i < g.length;
            i++
          )
            (n = g[i].k.charAt(0)), e.charAt(e.length - 1) !== n && (e += n);
          return e !== `DGBEFHACIJK`;
        }
      }),
      w = y || !b || !x || !C,
      T = function (e) {
        return function (t, n) {
          if (n === void 0) return -1;
          if (t === void 0) return 1;
          if (e !== void 0) return +e(t, n) || 0;
          var r = c(t),
            i = c(n);
          return r === i ? 0 : r > i ? 1 : -1;
        };
      };
    e(
      { target: `Array`, proto: !0, forced: w },
      {
        sort: function (e) {
          e !== void 0 && r(e);
          var t = i(this);
          if (C) return e === void 0 ? _(t) : _(t, e);
          var n = [],
            a = o(t),
            c,
            l;
          for (l = 0; l < a; l++) l in t && v(n, t[l]);
          for (u(n, T(e)), c = o(n), l = 0; l < c; ) t[l] = n[l++];
          for (; l < a; ) s(t, l++);
          return t;
        },
      }
    );
  }),
  yr = e((e, t) => {
    vr(), (t.exports = Z()(`Array`, `sort`));
  }),
  br = e((e, t) => {
    var n = b(),
      r = yr(),
      i = Array.prototype;
    t.exports = function (e) {
      var t = e.sort;
      return e === i || (n(i, e) && t === i.sort) ? r : t;
    };
  }),
  xr = e((e, t) => {
    t.exports = br();
  }),
  Sr = e((e, t) => {
    t.exports = xr();
  }),
  Cr = e((e, t) => {
    t.exports = `	
\v\f\r \xA0              　\u2028\u2029﻿`;
  }),
  wr = e((e, t) => {
    var n = a(),
      r = h(),
      i = Se(),
      o = Cr(),
      s = n(``.replace),
      c = RegExp(`^[` + o + `]+`),
      l = RegExp(`(^|[^` + o + `])[` + o + `]+$`),
      u = function (e) {
        return function (t) {
          var n = i(r(t));
          return e & 1 && (n = s(n, c, ``)), e & 2 && (n = s(n, l, `$1`)), n;
        };
      };
    t.exports = { start: u(1), end: u(2), trim: u(3) };
  }),
  Tr = e((e, r) => {
    var i = t(),
      o = n(),
      s = a(),
      c = Se(),
      l = wr().trim,
      u = Cr(),
      d = i.parseInt,
      f = i.Symbol,
      p = f && f.iterator,
      m = /^[+-]?0x/i,
      h = s(m.exec);
    r.exports =
      d(u + `08`) !== 8 ||
      d(u + `0x16`) !== 22 ||
      (p &&
        !o(function () {
          d(Object(p));
        }))
        ? function (e, t) {
            var n = l(c(e));
            return d(n, t >>> 0 || (h(m, n) ? 16 : 10));
          }
        : d;
  }),
  Er = e(() => {
    var e = V(),
      t = Tr();
    e({ global: !0, forced: parseInt !== t }, { parseInt: t });
  }),
  Dr = e((e, t) => {
    Er(), (t.exports = v().parseInt);
  }),
  Or = e((e, t) => {
    t.exports = Dr();
  }),
  kr = e((e, t) => {
    t.exports = Or();
  }),
  Ar = e(() => {
    var e = V(),
      t = s(),
      n = ke().indexOf,
      r = mr(),
      i = t([].indexOf),
      a = !!i && 1 / i([1], 1, -0) < 0;
    e(
      { target: `Array`, proto: !0, forced: a || !r(`indexOf`) },
      {
        indexOf: function (e) {
          var t = arguments.length > 1 ? arguments[1] : void 0;
          return a ? i(this, e, t) || 0 : n(this, e, t);
        },
      }
    );
  }),
  jr = e((e, t) => {
    Ar(), (t.exports = Z()(`Array`, `indexOf`));
  }),
  Mr = e((e, t) => {
    var n = b(),
      r = jr(),
      i = Array.prototype;
    t.exports = function (e) {
      var t = e.indexOf;
      return e === i || (n(i, e) && t === i.indexOf) ? r : t;
    };
  }),
  Nr = e((e, t) => {
    t.exports = Mr();
  }),
  Pr = e((e, t) => {
    t.exports = Nr();
  }),
  Fr = e((e, t) => {
    var n = yt().forEach;
    t.exports = mr()(`forEach`)
      ? [].forEach
      : function (e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
        };
  }),
  Ir = e(() => {
    var e = V(),
      t = Fr();
    e({ target: `Array`, proto: !0, forced: [].forEach !== t }, { forEach: t });
  }),
  Lr = e((e, t) => {
    Ir(), (t.exports = Z()(`Array`, `forEach`));
  }),
  Rr = e((e, t) => {
    t.exports = Lr();
  }),
  zr = e(() => {}),
  Br = e((e, t) => {
    var n = K(),
      r = F(),
      i = b(),
      a = Rr();
    zr();
    var o = Array.prototype,
      s = { DOMTokenList: !0, NodeList: !0 };
    t.exports = function (e) {
      var t = e.forEach;
      return e === o || (i(o, e) && t === o.forEach) || r(s, n(e)) ? a : t;
    };
  }),
  Vr = e((e, t) => {
    t.exports = Br();
  }),
  Hr = e((e, t) => {
    dt(), (t.exports = Z()(`Array`, `concat`));
  }),
  Ur = e((e, t) => {
    var n = b(),
      r = Hr(),
      i = Array.prototype;
    t.exports = function (e) {
      var t = e.concat;
      return e === i || (n(i, e) && t === i.concat) ? r : t;
    };
  }),
  Wr = e((e, t) => {
    t.exports = Ur();
  }),
  Gr = e((e, t) => {
    t.exports = Wr();
  }),
  Kr = e((e, t) => {
    var n = xe(),
      r = st(),
      i = tn(),
      a = cn(),
      o = fn(),
      s = H(),
      c = U();
    s(e, `__esModule`, { value: !0 }), (e.default = void 0);
    var l = c($n()),
      u = c(rr()),
      d = c(dr()),
      f = c(Sr()),
      p = c(xe()),
      m = c(kr()),
      h = c(Pr()),
      g = c(Vr()),
      _ = c(Gr());
    function v(e, t) {
      var n = (i !== void 0 && a(e)) || e[`@@iterator`];
      if (!n) {
        if (o(e) || (n = y(e)) || (t && e && typeof e.length == `number`)) {
          n && (e = n);
          var r = 0,
            s = function () {};
          return {
            s,
            n: function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: s,
          };
        }
        throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var c,
        l = !0,
        u = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (l = e.done), e;
        },
        e: function (e) {
          (u = !0), (c = e);
        },
        f: function () {
          try {
            l || n.return == null || n.return();
          } finally {
            if (u) throw c;
          }
        },
      };
    }
    function y(e, t) {
      if (e) {
        var i;
        if (typeof e == `string`) return b(e, t);
        var a = n((i = {}.toString.call(e))).call(i, 8, -1);
        return (
          a === `Object` && e.constructor && (a = e.constructor.name),
          a === `Map` || a === `Set`
            ? r(e)
            : a === `Arguments` ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            ? b(e, t)
            : void 0
        );
      }
    }
    function b(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var x = `xregexp`,
      S = { astral: !1, namespacing: !0 },
      C = {},
      w = (0, u.default)(null),
      T = (0, u.default)(null),
      E = [],
      D = `default`,
      O = `class`,
      k = {
        default:
          /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
        class:
          /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/,
      },
      A = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g,
      j = /()??/.exec(``)[1] === void 0,
      M = (0, d.default)(/x/) !== void 0;
    function N(e) {
      var t = !0;
      try {
        if ((RegExp(``, e), e === `y`)) {
          var n = (function () {
            return `gy`;
          })();
          `.a`.replace(RegExp(`a`, n), `.`) === `..` && (t = !1);
        }
      } catch {
        t = !1;
      }
      return t;
    }
    var P = N(`d`),
      F = N(`s`),
      I = N(`u`),
      L = N(`y`),
      ee = { d: P, g: !0, i: !0, m: !0, s: F, u: I, y: L },
      te = F ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
    function ne(e, t, n, r, i) {
      var a;
      if (((e[x] = { captureNames: t }), i)) return e;
      if (e.__proto__) e.__proto__ = J.prototype;
      else for (var o in J.prototype) e[o] = J.prototype[o];
      return (
        (e[x].source = n),
        (e[x].flags =
          r &&
          (0, f.default)((a = r.split(``)))
            .call(a)
            .join(``)),
        e
      );
    }
    function R(e) {
      return e.replace(/([\s\S])(?=[\s\S]*\1)/g, ``);
    }
    function z(e, t) {
      var n;
      if (!J.isRegExp(e)) throw TypeError(`Type RegExp expected`);
      var r = e[x] || {},
        i = ae(e),
        a = ``,
        o = ``,
        s = null,
        c = null;
      return (
        (t ||= {}),
        t.removeG && (o += `g`),
        t.removeY && (o += `y`),
        o && (i = i.replace(RegExp(`[${o}]+`, `g`), ``)),
        t.addG && (a += `g`),
        t.addY && (a += `y`),
        a && (i = R(i + a)),
        t.isInternalOnly ||
          (r.source !== void 0 && (s = r.source),
          (0, d.default)(r) != null &&
            (c = a ? R((0, d.default)(r) + a) : (0, d.default)(r))),
        (e = ne(
          new RegExp(t.source || e.source, i),
          oe(e) ? (0, p.default)((n = r.captureNames)).call(n, 0) : null,
          s,
          c,
          t.isInternalOnly
        )),
        e
      );
    }
    function re(e) {
      return (0, m.default)(e, 16);
    }
    function ie(e, t, n) {
      var r = e.index + e[0].length,
        i = e.input[e.index - 1],
        a = e.input[r];
      return /^[()|]$/.test(i) ||
        /^[()|]$/.test(a) ||
        e.index === 0 ||
        r === e.input.length ||
        /\(\?(?:[:=!]|<[=!])$/.test(e.input.substring(e.index - 4, e.index)) ||
        se(e.input, r, n)
        ? ``
        : `(?:)`;
    }
    function ae(e) {
      return M
        ? (0, d.default)(e)
        : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(e))[1];
    }
    function oe(e) {
      return !!(e[x] && e[x].captureNames);
    }
    function B(e) {
      return (0, m.default)(e, 10).toString(16);
    }
    function se(e, t, n) {
      return (
        (0, h.default)(n).call(n, `x`) === -1
          ? /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
          : /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
      ).test((0, p.default)(e).call(e, t));
    }
    function V(e, t) {
      return Object.prototype.toString.call(e) === `[object ${t}]`;
    }
    function ce(e) {
      if (e == null)
        throw TypeError(`Cannot convert null or undefined to object`);
      return e;
    }
    function le(e) {
      for (; e.length < 4; ) e = `0${e}`;
      return e;
    }
    function ue(e, t) {
      if (R(t) !== t) throw SyntaxError(`Invalid duplicate regex flag ${t}`);
      e = e.replace(/^\(\?([\w$]+)\)/, function (e, n) {
        if (/[dgy]/.test(n))
          throw SyntaxError(`Cannot use flags dgy in mode modifier ${e}`);
        return (t = R(t + n)), ``;
      });
      var n = v(t),
        r;
      try {
        for (n.s(); !(r = n.n()).done; ) {
          var i = r.value;
          if (!ee[i]) throw SyntaxError(`Unknown regex flag ${i}`);
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
      return { pattern: e, flags: t };
    }
    function W(e) {
      var t = {};
      return V(e, `String`)
        ? ((0, g.default)(J).call(J, e, /[^\s,]+/, function (e) {
            t[e] = !0;
          }),
          t)
        : e;
    }
    function G(e) {
      if (!/^[\w$]$/.test(e))
        throw Error(`Flag must be a single character A-Za-z0-9_$`);
      ee[e] = !0;
    }
    function K(e, t, n, r, i) {
      for (var a = E.length, o = e[n], s = null, c, l; a--; )
        if (
          ((l = E[a]),
          !(
            (l.leadChar && l.leadChar !== o) ||
            (l.scope !== r && l.scope !== `all`) ||
            (l.flag && (0, h.default)(t).call(t, l.flag) === -1)
          ) && ((c = J.exec(e, l.regex, n, `sticky`)), c))
        ) {
          s = {
            matchLength: c[0].length,
            output: l.handler.call(i, c, r, t),
            reparse: l.reparse,
          };
          break;
        }
      return s;
    }
    function de(e) {
      S.astral = e;
    }
    function q(e) {
      S.namespacing = e;
    }
    function J(e, t) {
      if (J.isRegExp(e)) {
        if (t !== void 0)
          throw TypeError(`Cannot supply flags when copying a RegExp`);
        return z(e);
      }
      if (
        ((e = e === void 0 ? `` : String(e)),
        (t = t === void 0 ? `` : String(t)),
        J.isInstalled(`astral`) &&
          (0, h.default)(t).call(t, `A`) === -1 &&
          (t += `A`),
        T[e] || (T[e] = {}),
        !T[e][t])
      ) {
        for (
          var n = { hasNamedCapture: !1, captureNames: [] },
            r = D,
            i = ``,
            a = 0,
            o,
            s = ue(e, t),
            c = s.pattern,
            u = (0, d.default)(s);
          a < c.length;

        ) {
          do
            (o = K(c, u, a, r, n)),
              o &&
                o.reparse &&
                (c =
                  (0, p.default)(c).call(c, 0, a) +
                  o.output +
                  (0, p.default)(c).call(c, a + o.matchLength));
          while (o && o.reparse);
          if (o) (i += o.output), (a += o.matchLength || 1);
          else {
            var f = J.exec(c, k[r], a, `sticky`),
              m = (0, l.default)(f, 1)[0];
            (i += m),
              (a += m.length),
              m === `[` && r === D ? (r = O) : m === `]` && r === O && (r = D);
          }
        }
        T[e][t] = {
          pattern: i.replace(/(?:\(\?:\))+/g, `(?:)`),
          flags: u.replace(te, ``),
          captures: n.hasNamedCapture ? n.captureNames : null,
        };
      }
      var g = T[e][t];
      return ne(new RegExp(g.pattern, (0, d.default)(g)), g.captures, e, t);
    }
    (J.prototype = /(?:)/),
      (J.version = `5.1.2`),
      (J._clipDuplicates = R),
      (J._hasNativeFlag = N),
      (J._dec = re),
      (J._hex = B),
      (J._pad4 = le),
      (J.addToken = function (e, t, n) {
        n ||= {};
        var r = n.optionalFlags;
        if ((n.flag && G(n.flag), r)) {
          r = r.split(``);
          var i = v(r),
            a;
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var o = a.value;
              G(o);
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
        }
        E.push({
          regex: z(e, { addG: !0, addY: L, isInternalOnly: !0 }),
          handler: t,
          scope: n.scope || D,
          flag: n.flag,
          reparse: n.reparse,
          leadChar: n.leadChar,
        }),
          J.cache.flush(`patterns`);
      }),
      (J.cache = function (e, t) {
        return w[e] || (w[e] = {}), w[e][t] || (w[e][t] = J(e, t));
      }),
      (J.cache.flush = function (e) {
        e === `patterns`
          ? (T = (0, u.default)(null))
          : (w = (0, u.default)(null));
      }),
      (J.escape = function (e) {
        return String(ce(e))
          .replace(/[\\\[\]{}()*+?.^$|]/g, `\\$&`)
          .replace(/[\s#\-,]/g, function (e) {
            return `\\u${le(B(e.charCodeAt(0)))}`;
          });
      }),
      (J.exec = function (e, t, n, r) {
        var i = `g`,
          a = !1,
          o = !1,
          s;
        (a = L && !!(r || (t.sticky && r !== !1))),
          a ? (i += `y`) : r && ((o = !0), (i += `FakeY`)),
          (t[x] = t[x] || {});
        var c =
          t[x][i] ||
          (t[x][i] = z(t, {
            addG: !0,
            addY: a,
            source: o ? `${t.source}|()` : void 0,
            removeY: r === !1,
            isInternalOnly: !0,
          }));
        return (
          (n ||= 0),
          (c.lastIndex = n),
          (s = C.exec.call(c, e)),
          o && s && s.pop() === `` && (s = null),
          t.global && (t.lastIndex = s ? c.lastIndex : 0),
          s
        );
      }),
      (J.forEach = function (e, t, n) {
        for (var r = 0, i = -1, a; (a = J.exec(e, t, r)); )
          n(a, ++i, e, t), (r = a.index + (a[0].length || 1));
      }),
      (J.globalize = function (e) {
        return z(e, { addG: !0 });
      }),
      (J.install = function (e) {
        (e = W(e)),
          !S.astral && e.astral && de(!0),
          !S.namespacing && e.namespacing && q(!0);
      }),
      (J.isInstalled = function (e) {
        return !!S[e];
      }),
      (J.isRegExp = function (e) {
        return Object.prototype.toString.call(e) === `[object RegExp]`;
      }),
      (J.match = function (e, t, n) {
        var r = (t.global && n !== `one`) || n === `all`,
          i = (r ? `g` : ``) + (t.sticky ? `y` : ``) || `noGY`;
        t[x] = t[x] || {};
        var a =
            t[x][i] ||
            (t[x][i] = z(t, {
              addG: !!r,
              removeG: n === `one`,
              isInternalOnly: !0,
            })),
          o = String(ce(e)).match(a);
        return (
          t.global &&
            (t.lastIndex = n === `one` && o ? o.index + o[0].length : 0),
          r ? o || [] : o && o[0]
        );
      }),
      (J.matchChain = function (e, t) {
        return (function e(n, r) {
          var i = t[r].regex ? t[r] : { regex: t[r] },
            a = [];
          function o(e) {
            if (i.backref) {
              var t = `Backreference to undefined group: ${i.backref}`,
                n = isNaN(i.backref);
              if (n && J.isInstalled(`namespacing`)) {
                if (!(e.groups && i.backref in e.groups))
                  throw ReferenceError(t);
              } else if (!e.hasOwnProperty(i.backref)) throw ReferenceError(t);
              var r =
                n && J.isInstalled(`namespacing`)
                  ? e.groups[i.backref]
                  : e[i.backref];
              a.push(r || ``);
            } else a.push(e[0]);
          }
          var s = v(n),
            c;
          try {
            for (s.s(); !(c = s.n()).done; ) {
              var l = c.value;
              (0, g.default)(J).call(J, l, i.regex, o);
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
          return r === t.length - 1 || !a.length ? a : e(a, r + 1);
        })([e], 0);
      }),
      (J.replace = function (e, t, n, r) {
        var i = J.isRegExp(t),
          a = (t.global && r !== `one`) || r === `all`,
          o = (a ? `g` : ``) + (t.sticky ? `y` : ``) || `noGY`,
          s = t;
        i
          ? ((t[x] = t[x] || {}),
            (s =
              t[x][o] ||
              (t[x][o] = z(t, {
                addG: !!a,
                removeG: r === `one`,
                isInternalOnly: !0,
              }))))
          : a && (s = new RegExp(J.escape(String(t)), `g`));
        var c = C.replace.call(ce(e), s, n);
        return i && t.global && (t.lastIndex = 0), c;
      }),
      (J.replaceEach = function (e, t) {
        var n = v(t),
          r;
        try {
          for (n.s(); !(r = n.n()).done; ) {
            var i = r.value;
            e = J.replace(e, i[0], i[1], i[2]);
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
        return e;
      }),
      (J.split = function (e, t, n) {
        return C.split.call(ce(e), t, n);
      }),
      (J.test = function (e, t, n, r) {
        return !!J.exec(e, t, n, r);
      }),
      (J.uninstall = function (e) {
        (e = W(e)),
          S.astral && e.astral && de(!1),
          S.namespacing && e.namespacing && q(!1);
      }),
      (J.union = function (e, t, n) {
        n ||= {};
        var r = n.conjunction || `or`,
          i = 0,
          a,
          o;
        function s(e, t, n) {
          var r = o[i - a];
          if (t) {
            if ((++i, r)) return `(?<${r}>`;
          } else if (n) return `\\${+n + a}`;
          return e;
        }
        if (!(V(e, `Array`) && e.length))
          throw TypeError(`Must provide a nonempty array of patterns to merge`);
        var c = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
          l = [],
          u = v(e),
          d;
        try {
          for (u.s(); !(d = u.n()).done; ) {
            var f = d.value;
            J.isRegExp(f)
              ? ((a = i),
                (o = (f[x] && f[x].captureNames) || []),
                l.push(J(f.source).source.replace(c, s)))
              : l.push(J.escape(f));
          }
        } catch (e) {
          u.e(e);
        } finally {
          u.f();
        }
        var p = r === `none` ? `` : `|`;
        return J(l.join(p), t);
      }),
      (C.exec = function (e) {
        var t = this.lastIndex,
          n = RegExp.prototype.exec.apply(this, arguments);
        if (n) {
          if (!j && n.length > 1 && (0, h.default)(n).call(n, ``) !== -1) {
            var r,
              i = z(this, { removeG: !0, isInternalOnly: !0 });
            (0, p.default)((r = String(e)))
              .call(r, n.index)
              .replace(i, function () {
                for (var e = arguments.length, t = 1; t < e - 2; ++t)
                  (t < 0 || arguments.length <= t ? void 0 : arguments[t]) ===
                    void 0 && (n[t] = void 0);
              });
          }
          if (this[x] && this[x].captureNames) {
            var a = n;
            J.isInstalled(`namespacing`) &&
              ((n.groups = (0, u.default)(null)), (a = n.groups));
            for (var o = 1; o < n.length; ++o) {
              var s = this[x].captureNames[o - 1];
              s && (a[s] = n[o]);
            }
          } else
            !n.groups && J.isInstalled(`namespacing`) && (n.groups = void 0);
          this.global &&
            !n[0].length &&
            this.lastIndex > n.index &&
            (this.lastIndex = n.index);
        }
        return this.global || (this.lastIndex = t), n;
      }),
      (C.test = function (e) {
        return !!C.exec.call(this, e);
      }),
      (C.match = function (e) {
        if (!J.isRegExp(e)) e = new RegExp(e);
        else if (e.global) {
          var t = String.prototype.match.apply(this, arguments);
          return (e.lastIndex = 0), t;
        }
        return C.exec.call(e, ce(this));
      }),
      (C.replace = function (e, t) {
        var n = J.isRegExp(e),
          r,
          i,
          a;
        return (
          n ? (e[x] && (i = e[x].captureNames), (r = e.lastIndex)) : (e += ``),
          (a = V(t, `Function`)
            ? String(this).replace(e, function () {
                var e = [...arguments];
                if (i) {
                  var n;
                  J.isInstalled(`namespacing`)
                    ? ((n = (0, u.default)(null)), e.push(n))
                    : ((e[0] = new String(e[0])), (n = e[0]));
                  for (var r = 0; r < i.length; ++r)
                    i[r] && (n[i[r]] = e[r + 1]);
                }
                return t.apply(void 0, e);
              })
            : String(ce(this)).replace(e, function () {
                var e = [...arguments];
                return String(t).replace(A, n);
                function n(t, n, r, a) {
                  n ||= r;
                  var o = V(e[e.length - 1], `Object`) ? 4 : 3,
                    s = e.length - o;
                  if (n) {
                    if (/^\d+$/.test(n)) {
                      var c = +n;
                      if (c <= s) return e[c] || ``;
                    }
                    var l = i ? (0, h.default)(i).call(i, n) : -1;
                    if (l < 0)
                      throw SyntaxError(
                        `Backreference to undefined group ${t}`
                      );
                    return e[l + 1] || ``;
                  }
                  if (a === `` || a === ` `)
                    throw SyntaxError(`Invalid token ${t}`);
                  if (a === `&` || +a == 0) return e[0];
                  if (a === `$`) return `$`;
                  if (a === "`") {
                    var u;
                    return (0, p.default)((u = e[e.length - 1])).call(
                      u,
                      0,
                      e[e.length - 2]
                    );
                  }
                  if (a === `'`) {
                    var d;
                    return (0, p.default)((d = e[e.length - 1])).call(
                      d,
                      e[e.length - 2] + e[0].length
                    );
                  }
                  if (((a = +a), !isNaN(a))) {
                    if (a > s)
                      throw SyntaxError(
                        `Backreference to undefined group ${t}`
                      );
                    return e[a] || ``;
                  }
                  throw SyntaxError(`Invalid token ${t}`);
                }
              })),
          n && (e.global ? (e.lastIndex = 0) : (e.lastIndex = r)),
          a
        );
      }),
      (C.split = function (e, t) {
        if (!J.isRegExp(e))
          return String.prototype.split.apply(this, arguments);
        var n = String(this),
          r = [],
          i = e.lastIndex,
          a = 0,
          o;
        return (
          (t = (t === void 0 ? -1 : t) >>> 0),
          (0, g.default)(J).call(J, n, e, function (e) {
            e.index + e[0].length > a &&
              (r.push((0, p.default)(n).call(n, a, e.index)),
              e.length > 1 &&
                e.index < n.length &&
                Array.prototype.push.apply(r, (0, p.default)(e).call(e, 1)),
              (o = e[0].length),
              (a = e.index + o));
          }),
          a === n.length
            ? (!e.test(``) || o) && r.push(``)
            : r.push((0, p.default)(n).call(n, a)),
          (e.lastIndex = i),
          r.length > t ? (0, p.default)(r).call(r, 0, t) : r
        );
      }),
      J.addToken(
        /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
        function (e, t) {
          if (e[1] === `B` && t === D) return e[0];
          throw SyntaxError(`Invalid escape ${e[0]}`);
        },
        { scope: `all`, leadChar: `\\` }
      ),
      J.addToken(
        /\\u{([\dA-Fa-f]+)}/,
        function (e, t, n) {
          var r = re(e[1]);
          if (r > 1114111)
            throw SyntaxError(`Invalid Unicode code point ${e[0]}`);
          if (r <= 65535) return `\\u${le(B(r))}`;
          if (I && (0, h.default)(n).call(n, `u`) !== -1) return e[0];
          throw SyntaxError(
            `Cannot use Unicode code point above \\u{FFFF} without flag u`
          );
        },
        { scope: `all`, leadChar: `\\` }
      ),
      J.addToken(/\(\?#[^)]*\)/, ie, { leadChar: `(` }),
      J.addToken(/\s+|#[^\n]*\n?/, ie, { flag: `x` }),
      F ||
        J.addToken(
          /\./,
          function () {
            return `[\\s\\S]`;
          },
          { flag: `s`, leadChar: `.` }
        ),
      J.addToken(
        /\\k<([^>]+)>/,
        function (e) {
          var t,
            n,
            r = isNaN(e[1])
              ? (0, h.default)((t = this.captureNames)).call(t, e[1]) + 1
              : +e[1],
            i = e.index + e[0].length;
          if (!r || r > this.captureNames.length)
            throw SyntaxError(`Backreference to undefined group ${e[0]}`);
          return (0, _.default)((n = `\\${r}`)).call(
            n,
            i === e.input.length || isNaN(e.input[i]) ? `` : `(?:)`
          );
        },
        { leadChar: `\\` }
      ),
      J.addToken(
        /\\(\d+)/,
        function (e, t) {
          if (
            !(
              t === D &&
              /^[1-9]/.test(e[1]) &&
              +e[1] <= this.captureNames.length
            ) &&
            e[1] !== `0`
          )
            throw SyntaxError(
              `Cannot use octal escape or backreference to undefined group ${e[0]}`
            );
          return e[0];
        },
        { scope: `all`, leadChar: `\\` }
      ),
      J.addToken(
        /\(\?P?<((?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0897-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF65-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDD40-\uDD65\uDD69-\uDD6D\uDD6F-\uDD85\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEC2-\uDEC4\uDEFC-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD3\uDFE1\uDFE2]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF5A\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDCF0-\uDCF9\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDDD0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*)>/,
        function (e) {
          var t;
          if (
            !J.isInstalled(`namespacing`) &&
            (e[1] === `length` || e[1] === `__proto__`)
          )
            throw SyntaxError(
              `Cannot use reserved word as capture name ${e[0]}`
            );
          if ((0, h.default)((t = this.captureNames)).call(t, e[1]) !== -1)
            throw SyntaxError(
              `Cannot use same name for multiple groups ${e[0]}`
            );
          return this.captureNames.push(e[1]), (this.hasNamedCapture = !0), `(`;
        },
        { leadChar: `(` }
      ),
      J.addToken(
        /\((?!\?)/,
        function (e, t, n) {
          return (0, h.default)(n).call(n, `n`) === -1
            ? (this.captureNames.push(null), `(`)
            : `(?:`;
        },
        { optionalFlags: `n`, leadChar: `(` }
      ),
      (e.default = J),
      (t.exports = e.default);
  }),
  qr = e((e, t) => {
    var n = D(),
      r = P(),
      i = p(),
      a = X(),
      o = TypeError,
      s = `Reduce of empty array with no initial value`,
      c = function (e) {
        return function (t, c, l, u) {
          var d = r(t),
            f = i(d),
            p = a(d);
          if ((n(c), p === 0 && l < 2)) throw new o(s);
          var m = e ? p - 1 : 0,
            h = e ? -1 : 1;
          if (l < 2)
            for (;;) {
              if (m in f) {
                (u = f[m]), (m += h);
                break;
              }
              if (((m += h), e ? m < 0 : p <= m)) throw new o(s);
            }
          for (; e ? m >= 0 : p > m; m += h) m in f && (u = c(u, f[m], m, d));
          return u;
        };
      };
    t.exports = { left: c(!1), right: c(!0) };
  }),
  Jr = e((e, n) => {
    var r = t(),
      i = x(),
      a = o(),
      s = function (e) {
        return i.slice(0, e.length) === e;
      };
    n.exports = (function () {
      return s(`Bun/`)
        ? `BUN`
        : s(`Cloudflare-Workers`)
        ? `CLOUDFLARE`
        : s(`Deno/`)
        ? `DENO`
        : s(`Node.js/`)
        ? `NODE`
        : r.Bun && typeof Bun.version == `string`
        ? `BUN`
        : r.Deno && typeof Deno.version == `object`
        ? `DENO`
        : a(r.process) === `process`
        ? `NODE`
        : r.window && r.document
        ? `BROWSER`
        : `REST`;
    })();
  }),
  Yr = e((e, t) => {
    t.exports = Jr() === `NODE`;
  }),
  Xr = e(() => {
    var e = V(),
      t = qr().left,
      n = mr(),
      r = S();
    e(
      {
        target: `Array`,
        proto: !0,
        forced: (!Yr() && r > 79 && r < 83) || !n(`reduce`),
      },
      {
        reduce: function (e) {
          var n = arguments.length;
          return t(this, e, n, n > 1 ? arguments[1] : void 0);
        },
      }
    );
  }),
  Zr = e((e, t) => {
    Xr(), (t.exports = Z()(`Array`, `reduce`));
  }),
  Qr = e((e, t) => {
    var n = b(),
      r = Zr(),
      i = Array.prototype;
    t.exports = function (e) {
      var t = e.reduce;
      return e === i || (n(i, e) && t === i.reduce) ? r : t;
    };
  }),
  $r = e((e, t) => {
    t.exports = Qr();
  }),
  ei = e((e, t) => {
    t.exports = $r();
  }),
  ti = e(() => {
    var e = V(),
      t = yt().map;
    e(
      { target: `Array`, proto: !0, forced: !ge()(`map`) },
      {
        map: function (e) {
          return t(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  }),
  ni = e((e, t) => {
    ti(), (t.exports = Z()(`Array`, `map`));
  }),
  ri = e((e, t) => {
    var n = b(),
      r = ni(),
      i = Array.prototype;
    t.exports = function (e) {
      var t = e.map;
      return e === i || (n(i, e) && t === i.map) ? r : t;
    };
  }),
  ii = e((e, t) => {
    t.exports = ri();
  }),
  ai = e((e, t) => {
    t.exports = ii();
  }),
  oi = e((e, t) => {
    var n = H(),
      r = U();
    n(e, `__esModule`, { value: !0 }), (e.default = void 0);
    var i = r(ei()),
      a = r(ai()),
      o = r(Pr()),
      s = r(Gr());
    (e.default = function (e) {
      var t = `xregexp`,
        n = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
        r = e.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, n], `g`, {
          conjunction: `or`,
        });
      function c(e) {
        var t = /^(?:\(\?:\))*\^/,
          n = /\$(?:\(\?:\))*$/;
        return t.test(e) && n.test(e) && n.test(e.replace(/\\[\s\S]/g, ``))
          ? e.replace(t, ``).replace(n, ``)
          : e;
      }
      function l(n, r) {
        var i = r ? `x` : ``;
        return e.isRegExp(n)
          ? n[t] && n[t].captureNames
            ? n
            : e(n.source, i)
          : e(n, i);
      }
      function u(t) {
        return t instanceof RegExp ? t : e.escape(t);
      }
      function d(e, t, n) {
        return (e[`subpattern${n}`] = t), e;
      }
      function f(e, t, n) {
        return e + (t < n.length - 1 ? `{{subpattern${t}}}` : ``);
      }
      (e.tag = function (t) {
        return function (n) {
          var r,
            o,
            s = [...arguments].slice(1),
            c = (0, i.default)((r = (0, a.default)(s).call(s, u))).call(
              r,
              d,
              {}
            ),
            l = (0, a.default)((o = n.raw))
              .call(o, f)
              .join(``);
          return e.build(l, c, t);
        };
      }),
        (e.build = function (i, a, u) {
          u ||= ``;
          var d = (0, o.default)(u).call(u, `x`) !== -1,
            f = /^\(\?([\w$]+)\)/.exec(i);
          f && (u = e._clipDuplicates(u + f[1]));
          var p = {};
          for (var m in a)
            if (a.hasOwnProperty(m)) {
              var h = l(a[m], d);
              p[m] = { pattern: c(h.source), names: h[t].captureNames || [] };
            }
          var g = l(i, d),
            _ = 0,
            v,
            y = 0,
            b = [0],
            x = g[t].captureNames || [];
          return e(
            g.source.replace(r, function (e, t, r, i, a) {
              var o = t || r,
                c,
                l,
                u;
              if (o) {
                var d;
                if (!p.hasOwnProperty(o))
                  throw ReferenceError(`Undefined property ${e}`);
                t
                  ? ((c = x[y]), (b[++y] = ++_), (l = `(?<${c || o}>`))
                  : (l = `(?:`),
                  (v = _);
                var f = p[o].pattern.replace(n, function (e, t, n) {
                  if (t) {
                    if (((c = p[o].names[_ - v]), ++_, c)) return `(?<${c}>`;
                  } else if (n) return (u = n - 1), p[o].names[u] ? `\\k<${p[o].names[u]}>` : `\\${+n + v}`;
                  return e;
                });
                return (0, s.default)((d = `${l}`)).call(d, f, `)`);
              }
              if (i) {
                if (((c = x[y]), (b[++y] = ++_), c)) return `(?<${c}>`;
              } else if (a) return (u = a - 1), x[u] ? `\\k<${x[u]}>` : `\\${b[+a]}`;
              return e;
            }),
            u
          );
        });
    }),
      (t.exports = e.default);
  }),
  si = e((e, t) => {
    var n = H(),
      r = U();
    n(e, `__esModule`, { value: !0 }), (e.default = void 0);
    var i = r(Pr()),
      a = r(Gr()),
      o = r(xe());
    (e.default = function (e) {
      function t(e, t, n, r) {
        return { name: e, value: t, start: n, end: r };
      }
      e.matchRecursive = function (n, r, s, c, l) {
        (c ||= ``), (l ||= {});
        var u = (0, i.default)(c).call(c, `g`) !== -1,
          d = (0, i.default)(c).call(c, `y`) !== -1,
          f = c.replace(/y/g, ``);
        (r = e(r, f)), (s = e(s, f));
        var p,
          m = l.escapeChar;
        if (m) {
          var h, g;
          if (m.length > 1)
            throw Error(`Cannot use more than one escape character`);
          (m = e.escape(m)),
            (p = new RegExp(
              (0, a.default)(
                (h = (0, a.default)((g = `(?:${m}[\\S\\s]|(?:(?!`)).call(
                  g,
                  e.union([r, s], ``, { conjunction: `or` }).source,
                  `)[^`
                ))
              ).call(h, m, `])+)+`),
              c.replace(e._hasNativeFlag(`s`) ? /[^imsu]/g : /[^imu]/g, ``)
            ));
        }
        for (
          var _ = 0, v = 0, y = 0, b = 0, x, S, C, w, T = l.valueNames, E = [];
          ;

        ) {
          if (
            (m && (y += (e.exec(n, p, y, `sticky`) || [``])[0].length),
            (C = e.exec(n, r, y)),
            (w = e.exec(n, s, y)),
            C && w && (C.index <= w.index ? (w = null) : (C = null)),
            C || w)
          )
            (v = (C || w).index), (y = v + (C || w)[0].length);
          else if (!_) break;
          if (d && !_ && v > b) break;
          if (C) _ || ((x = v), (S = y)), (_ += 1);
          else if (w && _) {
            if (
              (--_,
              !_ &&
                (T
                  ? (T[0] &&
                      x > b &&
                      E.push(t(T[0], (0, o.default)(n).call(n, b, x), b, x)),
                    T[1] &&
                      E.push(t(T[1], (0, o.default)(n).call(n, x, S), x, S)),
                    T[2] &&
                      E.push(t(T[2], (0, o.default)(n).call(n, S, v), S, v)),
                    T[3] &&
                      E.push(t(T[3], (0, o.default)(n).call(n, v, y), v, y)))
                  : E.push((0, o.default)(n).call(n, S, v)),
                (b = y),
                !u))
            )
              break;
          } else {
            var D = l.unbalanced || `error`;
            if (D === `skip` || D === `skip-lazy`)
              if (w) w = null;
              else {
                if (D === `skip`) {
                  var O = e.exec(n, r, x, `sticky`)[0].length;
                  y = x + (O || 1);
                } else y = x + 1;
                _ = 0;
              }
            else if (D === `error`) {
              var k,
                A = w ? `right` : `left`,
                j = w ? v : x;
              throw Error(
                (0, a.default)(
                  (k = `Unbalanced ${A} delimiter found in string at position `)
                ).call(k, j)
              );
            } else throw Error(`Unsupported value for unbalanced: ${D}`);
          }
          v === y && (y += 1);
        }
        return (
          u &&
            E.length > 0 &&
            !d &&
            T &&
            T[0] &&
            n.length > b &&
            E.push(t(T[0], (0, o.default)(n).call(n, b), b, n.length)),
          E
        );
      };
    }),
      (t.exports = e.default);
  }),
  ci = e((e, t) => {
    var n = xe(),
      r = st(),
      i = tn(),
      a = cn(),
      o = fn(),
      s = H(),
      c = U();
    s(e, `__esModule`, { value: !0 }), (e.default = void 0);
    var l = c($n()),
      u = c(Vr()),
      d = c(Gr()),
      f = c(Pr());
    function p(e, t) {
      var n = (i !== void 0 && a(e)) || e[`@@iterator`];
      if (!n) {
        if (o(e) || (n = m(e)) || (t && e && typeof e.length == `number`)) {
          n && (e = n);
          var r = 0,
            s = function () {};
          return {
            s,
            n: function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: s,
          };
        }
        throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var c,
        l = !0,
        u = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (l = e.done), e;
        },
        e: function (e) {
          (u = !0), (c = e);
        },
        f: function () {
          try {
            l || n.return == null || n.return();
          } finally {
            if (u) throw c;
          }
        },
      };
    }
    function m(e, t) {
      if (e) {
        var i;
        if (typeof e == `string`) return h(e, t);
        var a = n((i = {}.toString.call(e))).call(i, 8, -1);
        return (
          a === `Object` && e.constructor && (a = e.constructor.name),
          a === `Map` || a === `Set`
            ? r(e)
            : a === `Arguments` ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            ? h(e, t)
            : void 0
        );
      }
    }
    function h(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    (e.default = function (e) {
      var t = {},
        n = {},
        r = e._dec,
        i = e._hex,
        a = e._pad4;
      function o(e) {
        return e.replace(/[- _]+/g, ``).toLowerCase();
      }
      function s(e) {
        var t = /^\\[xu](.+)/.exec(e);
        return t ? r(t[1]) : e.charCodeAt(+(e[0] === `\\`));
      }
      function c(t) {
        var n = ``,
          r = -1;
        return (
          (0, u.default)(e).call(
            e,
            t,
            /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
            function (e) {
              var t = s(e[1]);
              t > r + 1 &&
                ((n += `\\u${a(i(r + 1))}`),
                t > r + 2 && (n += `-\\u${a(i(t - 1))}`)),
                (r = s(e[2] || e[1]));
            }
          ),
          r < 65535 &&
            ((n += `\\u${a(i(r + 1))}`), r < 65534 && (n += `-\\uFFFF`)),
          n
        );
      }
      function m(e) {
        var n = `b!`;
        return t[e][n] || (t[e][n] = c(t[e].bmp));
      }
      function h(e, n) {
        var r = t[e],
          i = ``;
        if (r.bmp && !r.isBmpLast) {
          var a;
          i = (0, d.default)((a = `[${r.bmp}]`)).call(a, r.astral ? `|` : ``);
        }
        if ((r.astral && (i += r.astral), r.isBmpLast && r.bmp)) {
          var o;
          i += (0, d.default)((o = `${r.astral ? `|` : ``}[`)).call(
            o,
            r.bmp,
            `]`
          );
        }
        return n
          ? `(?:(?!${i})(?:[�d800-�dbff][�dc00-�dfff]|[ -￿]))`
          : `(?:${i})`;
      }
      function g(e, n) {
        var r = n ? `a!` : `a=`;
        return t[e][r] || (t[e][r] = h(e, n));
      }
      e.addToken(
        /\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/,
        function (e, r, i) {
          var a = `Invalid double negation `,
            s = `Unknown Unicode token `,
            c = `Unicode token missing data `,
            u = `Astral mode required for Unicode token `,
            p = `Astral mode does not support Unicode tokens within character classes`,
            h = (0, l.default)(e, 6),
            _ = h[0],
            v = h[1],
            y = h[2],
            b = h[3],
            x = h[4],
            S = h[5],
            C = v === `P` || !!y,
            w = (0, f.default)(i).call(i, `A`) !== -1,
            T = o(S || x),
            E = t[T];
          if (v === `P` && y) throw SyntaxError(a + _);
          if (!t.hasOwnProperty(T) || (b && !(n[b] && n[b][T])))
            throw SyntaxError(s + _);
          if (E.inverseOf) {
            if (((T = o(E.inverseOf)), !t.hasOwnProperty(T))) {
              var D;
              throw ReferenceError(
                (0, d.default)((D = `${c + _} -> `)).call(D, E.inverseOf)
              );
            }
            (E = t[T]), (C = !C);
          }
          if (!(E.bmp || w)) throw SyntaxError(u + _);
          if (w) {
            if (r === `class`) throw SyntaxError(p);
            return g(T, C);
          }
          return r === `class`
            ? C
              ? m(T)
              : E.bmp
            : `${(C ? `[^` : `[`) + E.bmp}]`;
        },
        { scope: `all`, optionalFlags: `A`, leadChar: `\\` }
      ),
        (e.addUnicodeData = function (r, i) {
          var a = `Unicode token requires name`,
            s = `Unicode token has no character data `;
          i && (n[i] = {});
          var c = p(r),
            l;
          try {
            for (c.s(); !(l = c.n()).done; ) {
              var u = l.value;
              if (!u.name) throw Error(a);
              if (!(u.inverseOf || u.bmp || u.astral)) throw Error(s + u.name);
              var d = o(u.name);
              if (((t[d] = u), i && (n[i][d] = !0), u.alias)) {
                var f = o(u.alias);
                (t[f] = u), i && (n[i][f] = !0);
              }
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
          e.cache.flush(`patterns`);
        }),
        (e._getUnicodeProperty = function (e) {
          return t[o(e)];
        });
    }),
      (t.exports = e.default);
  }),
  li = e((e, t) => {
    t.exports = [
      {
        name: `C`,
        alias: `Other`,
        isBmpLast: !0,
        bmp: `\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏-ࢗ࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿`,
        astral: `\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9d-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd7b\udd8b\udd93\udd96\udda2\uddb2\uddba\uddbd-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udf7f\udf86\udfb1\udfbb-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f\udeaa\udeae\udeaf\udeb2-\udeff\udf28-\udf2f\udf5a-\udf6f\udf8a-\udfaf\udfcc-\udfdf\udff7-\udfff]|\ud804[\udc4e-\udc51\udc76-\udc7e\udcbd\udcc3-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd48-\udd4f\udd77-\udd7f\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5c\udc62-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeba-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf47-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd07\udd08\udd0a\udd0b\udd14\udd17\udd36\udd39\udd3a\udd47-\udd4f\udd5a-\udd9f\udda8\udda9\uddd8\uddd9\udde5-\uddff\ude48-\ude4f\udea3-\udeaf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfaf\udfb1-\udfbf\udff2-\udffe]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80e-\ud810\ud812-\ud819\ud824-\ud82a\ud82d\ud82e\ud830-\ud832\ud83f\ud87b-\ud87d\ud87f\ud885-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud80b[\udc00-\udf8f\udff3-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\udebf\udeca-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf4b-\udf4e\udf88-\udf8e\udfa0-\udfdf\udfe5-\udfef\udff2-\udfff]|\ud821[\udff8-\udfff]|\ud823[\udcd6-\udcff\udd09-\udfff]|\ud82b[\udc00-\udfef\udff4\udffc\udfff]|\ud82c[\udd23-\udd4f\udd53-\udd63\udd68-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca0-\udfff]|\ud833[\udc00-\udeff\udf2e\udf2f\udf47-\udf4f\udfc4-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\uddeb-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud837[\udc00-\udeff\udf1f-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udcff\udd2d-\udd2f\udd3e\udd3f\udd4a-\udd4d\udd50-\ude8f\udeaf-\udebf\udefa-\udefe\udf00-\udfff]|\ud839[\udc00-\udfdf\udfe7\udfec\udfef\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4c-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\udd00\udd3e-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\uddae-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded8-\udedc\udeed-\udeef\udefd-\udeff\udf74-\udf7f\udfd9-\udfdf\udfec-\udfef\udff1-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae\udcaf\udcb2-\udcff\ude54-\ude5f\ude6e\ude6f\ude75-\ude77\ude7d-\ude7f\ude87-\ude8f\udead-\udeaf\udebb-\udebf\udec6-\udecf\udeda-\udedf\udee8-\udeef\udef7-\udeff\udf93\udfcb-\udfef\udffa-\udfff]|\ud869[\udee0-\udeff]|\ud86d[\udf39-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\ud884[\udf4b-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]`,
      },
      { name: `Cc`, alias: `Control`, bmp: `\0--` },
      {
        name: `Cf`,
        alias: `Format`,
        bmp: `­؀-؅؜۝܏࢐࢑࣢᠎​-‏‪-‮⁠-⁤⁦-⁯﻿￹-￻`,
        astral: `\ud804[\udcbd\udccd]|\ud80d[\udc30-\udc38]|\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|\udb40[\udc01\udc20-\udc7f]`,
      },
      {
        name: `Cn`,
        alias: `Unassigned`,
        bmp: `͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏࢒-ࢗ঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿`,
        astral: `\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9d-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd7b\udd8b\udd93\udd96\udda2\uddb2\uddba\uddbd-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udf7f\udf86\udfb1\udfbb-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f\udeaa\udeae\udeaf\udeb2-\udeff\udf28-\udf2f\udf5a-\udf6f\udf8a-\udfaf\udfcc-\udfdf\udff7-\udfff]|\ud804[\udc4e-\udc51\udc76-\udc7e\udcc3-\udccc\udcce\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd48-\udd4f\udd77-\udd7f\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5c\udc62-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeba-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf47-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd07\udd08\udd0a\udd0b\udd14\udd17\udd36\udd39\udd3a\udd47-\udd4f\udd5a-\udd9f\udda8\udda9\uddd8\uddd9\udde5-\uddff\ude48-\ude4f\udea3-\udeaf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfaf\udfb1-\udfbf\udff2-\udffe]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80e-\ud810\ud812-\ud819\ud824-\ud82a\ud82d\ud82e\ud830-\ud832\ud83f\ud87b-\ud87d\ud87f\ud885-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud80b[\udc00-\udf8f\udff3-\udfff]|\ud80d[\udc2f\udc39-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\udebf\udeca-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf4b-\udf4e\udf88-\udf8e\udfa0-\udfdf\udfe5-\udfef\udff2-\udfff]|\ud821[\udff8-\udfff]|\ud823[\udcd6-\udcff\udd09-\udfff]|\ud82b[\udc00-\udfef\udff4\udffc\udfff]|\ud82c[\udd23-\udd4f\udd53-\udd63\udd68-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca4-\udfff]|\ud833[\udc00-\udeff\udf2e\udf2f\udf47-\udf4f\udfc4-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\uddeb-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud837[\udc00-\udeff\udf1f-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udcff\udd2d-\udd2f\udd3e\udd3f\udd4a-\udd4d\udd50-\ude8f\udeaf-\udebf\udefa-\udefe\udf00-\udfff]|\ud839[\udc00-\udfdf\udfe7\udfec\udfef\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4c-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\udd00\udd3e-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\uddae-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded8-\udedc\udeed-\udeef\udefd-\udeff\udf74-\udf7f\udfd9-\udfdf\udfec-\udfef\udff1-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae\udcaf\udcb2-\udcff\ude54-\ude5f\ude6e\ude6f\ude75-\ude77\ude7d-\ude7f\ude87-\ude8f\udead-\udeaf\udebb-\udebf\udec6-\udecf\udeda-\udedf\udee8-\udeef\udef7-\udeff\udf93\udfcb-\udfef\udffa-\udfff]|\ud869[\udee0-\udeff]|\ud86d[\udf39-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\ud884[\udf4b-\udfff]|\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|[\udbbf\udbff][\udffe\udfff]`,
      },
      {
        name: `Co`,
        alias: `Private_Use`,
        bmp: `-`,
        astral: `[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]`,
      },
      { name: `Cs`, alias: `Surrogate`, bmp: `\ud800-\udfff` },
      {
        name: `L`,
        alias: `Letter`,
        bmp: `A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ`,
        astral: `\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\udd70-\udd7a\udd7c-\udd8a\udd8c-\udd92\udd94\udd95\udd97-\udda1\udda3-\uddb1\uddb3-\uddb9\uddbb\uddbc\ude00-\udf36\udf40-\udf55\udf60-\udf67\udf80-\udf85\udf87-\udfb0\udfb2-\udfba]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\ude80-\udea9\udeb0\udeb1\udf00-\udf1c\udf27\udf30-\udf45\udf70-\udf81\udfb0-\udfc4\udfe0-\udff6]|\ud804[\udc03-\udc37\udc71\udc72\udc75\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd47\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc5f-\udc61\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udeb8\udf00-\udf1a\udf40-\udf46]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff-\udd06\udd09\udd0c-\udd13\udd15\udd16\udd18-\udd2f\udd3f\udd41\udda0-\udda7\uddaa-\uddd0\udde1\udde3\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude89\ude9d\udeb0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2\udfb0]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|\ud80b[\udf90-\udff0]|[\ud80c\ud81c-\ud820\ud822\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\ude70-\udebe\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf50\udf93-\udf9f\udfe0\udfe1\udfe3]|\ud821[\udc00-\udff7]|\ud823[\udc00-\udcd5\udd00-\udd08]|\ud82b[\udff0-\udff3\udff5-\udffb\udffd\udffe]|\ud82c[\udc00-\udd22\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud837[\udf00-\udf1e]|\ud838[\udd00-\udd2c\udd37-\udd3d\udd4e\ude90-\udead\udec0-\udeeb]|\ud839[\udfe0-\udfe6\udfe8-\udfeb\udfed\udfee\udff0-\udffe]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd4b]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\udedf\udf00-\udfff]|\ud86d[\udc00-\udf38\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a]`,
      },
      {
        name: `LC`,
        alias: `Cased_Letter`,
        bmp: `A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꟊꟐꟑꟓꟕ-ꟙꟵꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ`,
        astral: `\ud801[\udc00-\udc4f\udcb0-\udcd3\udcd8-\udcfb\udd70-\udd7a\udd7c-\udd8a\udd8c-\udd92\udd94\udd95\udd97-\udda1\udda3-\uddb1\uddb3-\uddb9\uddbb\uddbc]|\ud803[\udc80-\udcb2\udcc0-\udcf2]|\ud806[\udca0-\udcdf]|\ud81b[\ude40-\ude7f]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud837[\udf00-\udf09\udf0b-\udf1e]|\ud83a[\udd00-\udd43]`,
      },
      {
        name: `Ll`,
        alias: `Lowercase_Letter`,
        bmp: `a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ`,
        astral: `\ud801[\udc28-\udc4f\udcd8-\udcfb\udd97-\udda1\udda3-\uddb1\uddb3-\uddb9\uddbb\uddbc]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud837[\udf00-\udf09\udf0b-\udf1e]|\ud83a[\udd22-\udd43]`,
      },
      {
        name: `Lm`,
        alias: `Modifier_Letter`,
        bmp: `ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨࣉॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟲ-ꟴꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟꭩｰﾞﾟ`,
        astral: `\ud801[\udf80-\udf85\udf87-\udfb0\udfb2-\udfba]|\ud81a[\udf40-\udf43]|\ud81b[\udf93-\udf9f\udfe0\udfe1\udfe3]|\ud82b[\udff0-\udff3\udff5-\udffb\udffd\udffe]|\ud838[\udd37-\udd3d]|𞥋`,
      },
      {
        name: `Lo`,
        alias: `Other_Letter`,
        bmp: `ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣈऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳳᳵᳶᳺℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ`,
        astral: `\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc50-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udd00-\udd23\ude80-\udea9\udeb0\udeb1\udf00-\udf1c\udf27\udf30-\udf45\udf70-\udf81\udfb0-\udfc4\udfe0-\udff6]|\ud804[\udc03-\udc37\udc71\udc72\udc75\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd47\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc5f-\udc61\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udeb8\udf00-\udf1a\udf40-\udf46]|\ud806[\udc00-\udc2b\udcff-\udd06\udd09\udd0c-\udd13\udd15\udd16\udd18-\udd2f\udd3f\udd41\udda0-\udda7\uddaa-\uddd0\udde1\udde3\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude89\ude9d\udeb0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2\udfb0]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|\ud80b[\udf90-\udff0]|[\ud80c\ud81c-\ud820\ud822\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\ude70-\udebe\uded0-\udeed\udf00-\udf2f\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf4a\udf50]|\ud821[\udc00-\udff7]|\ud823[\udc00-\udcd5\udd00-\udd08]|\ud82c[\udc00-\udd22\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|𝼊|\ud838[\udd00-\udd2c\udd4e\ude90-\udead\udec0-\udeeb]|\ud839[\udfe0-\udfe6\udfe8-\udfeb\udfed\udfee\udff0-\udffe]|\ud83a[\udc00-\udcc4]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\udedf\udf00-\udfff]|\ud86d[\udc00-\udf38\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a]`,
      },
      { name: `Lt`, alias: `Titlecase_Letter`, bmp: `ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ` },
      {
        name: `Lu`,
        alias: `Uppercase_Letter`,
        bmp: `A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ`,
        astral: `\ud801[\udc00-\udc27\udcb0-\udcd3\udd70-\udd7a\udd7c-\udd8a\udd8c-\udd92\udd94\udd95]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]`,
      },
      {
        name: `M`,
        alias: `Mark`,
        bmp: `̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣඁ-ඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-ᫎᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯`,
        astral: `\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udeab\udeac\udf46-\udf50\udf82-\udf85]|\ud804[\udc00-\udc02\udc38-\udc46\udc70\udc73\udc74\udc7f-\udc82\udcb0-\udcba\udcc2\udd00-\udd02\udd27-\udd34\udd45\udd46\udd73\udd80-\udd82\uddb3-\uddc0\uddc9-\uddcc\uddce\uddcf\ude2c-\ude37\ude3e\udedf-\udeea\udf00-\udf03\udf3b\udf3c\udf3e-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc35-\udc46\udc5e\udcb0-\udcc3\uddaf-\uddb5\uddb8-\uddc0\udddc\udddd\ude30-\ude40\udeab-\udeb7\udf1d-\udf2b]|\ud806[\udc2c-\udc3a\udd30-\udd35\udd37\udd38\udd3b-\udd3e\udd40\udd42\udd43\uddd1-\uddd7\uddda-\udde0\udde4\ude01-\ude0a\ude33-\ude39\ude3b-\ude3e\ude47\ude51-\ude5b\ude8a-\ude99]|\ud807[\udc2f-\udc36\udc38-\udc3f\udc92-\udca7\udca9-\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd8a-\udd8e\udd90\udd91\udd93-\udd97\udef3-\udef6]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf4f\udf51-\udf87\udf8f-\udf92\udfe4\udff0\udff1]|\ud82f[\udc9d\udc9e]|\ud833[\udf00-\udf2d\udf30-\udf46]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a\udd30-\udd36\udeae\udeec-\udeef]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]`,
      },
      {
        name: `Mc`,
        alias: `Spacing_Mark`,
        bmp: `ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜ᜕᜴ាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦾ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬`,
        astral: `\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd45\udd46\udd82\uddb3-\uddb5\uddbf\uddc0\uddce\ude2c-\ude2e\ude32\ude33\ude35\udee0-\udee2\udf02\udf03\udf3e\udf3f\udf41-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63]|\ud805[\udc35-\udc37\udc40\udc41\udc45\udcb0-\udcb2\udcb9\udcbb-\udcbe\udcc1\uddaf-\uddb1\uddb8-\uddbb\uddbe\ude30-\ude32\ude3b\ude3c\ude3e\udeac\udeae\udeaf\udeb6\udf20\udf21\udf26]|\ud806[\udc2c-\udc2e\udc38\udd30-\udd35\udd37\udd38\udd3d\udd40\udd42\uddd1-\uddd3\udddc-\udddf\udde4\ude39\ude57\ude58\ude97]|\ud807[\udc2f\udc3e\udca9\udcb1\udcb4\udd8a-\udd8e\udd93\udd94\udd96\udef5\udef6]|\ud81b[\udf51-\udf87\udff0\udff1]|\ud834[\udd65\udd66\udd6d-\udd72]`,
      },
      { name: `Me`, alias: `Enclosing_Mark`, bmp: `҈҉᪾⃝-⃠⃢-⃤꙰-꙲` },
      {
        name: `Mn`,
        alias: `Nonspacing_Mark`,
        bmp: `̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍୕ୖୢୣஂீ்ఀఄ఼ా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣඁ්ි-ුූัิ-ฺ็-๎ັິ-ຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲᜳᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᪿ-ᫎᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꠬꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꦽꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯`,
        astral: `\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udeab\udeac\udf46-\udf50\udf82-\udf85]|\ud804[\udc01\udc38-\udc46\udc70\udc73\udc74\udc7f-\udc81\udcb3-\udcb6\udcb9\udcba\udcc2\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd73\udd80\udd81\uddb6-\uddbe\uddc9-\uddcc\uddcf\ude2f-\ude31\ude34\ude36\ude37\ude3e\udedf\udee3-\udeea\udf00\udf01\udf3b\udf3c\udf40\udf66-\udf6c\udf70-\udf74]|\ud805[\udc38-\udc3f\udc42-\udc44\udc46\udc5e\udcb3-\udcb8\udcba\udcbf\udcc0\udcc2\udcc3\uddb2-\uddb5\uddbc\uddbd\uddbf\uddc0\udddc\udddd\ude33-\ude3a\ude3d\ude3f\ude40\udeab\udead\udeb0-\udeb5\udeb7\udf1d-\udf1f\udf22-\udf25\udf27-\udf2b]|\ud806[\udc2f-\udc37\udc39\udc3a\udd3b\udd3c\udd3e\udd43\uddd4-\uddd7\uddda\udddb\udde0\ude01-\ude0a\ude33-\ude38\ude3b-\ude3e\ude47\ude51-\ude56\ude59-\ude5b\ude8a-\ude96\ude98\ude99]|\ud807[\udc30-\udc36\udc38-\udc3d\udc3f\udc92-\udca7\udcaa-\udcb0\udcb2\udcb3\udcb5\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd90\udd91\udd95\udd97\udef3\udef4]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf4f\udf8f-\udf92\udfe4]|\ud82f[\udc9d\udc9e]|\ud833[\udf00-\udf2d\udf30-\udf46]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a\udd30-\udd36\udeae\udeec-\udeef]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]`,
      },
      {
        name: `N`,
        alias: `Number`,
        bmp: `0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９`,
        astral: `\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud801[\udca0-\udca9]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\udd30-\udd39\ude60-\ude7e\udf1d-\udf26\udf51-\udf54\udfc5-\udfcb]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b]|\ud806[\udce0-\udcf2\udd50-\udd59]|\ud807[\udc50-\udc6c\udd50-\udd59\udda0-\udda9\udfc0-\udfd4]|\ud809[\udc00-\udc6e]|\ud81a[\ude60-\ude69\udec0-\udec9\udf50-\udf59\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud835[\udfce-\udfff]|\ud838[\udd40-\udd49\udef0-\udef9]|\ud83a[\udcc7-\udccf\udd50-\udd59]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4\udd01-\udd2d\udd2f-\udd3d]|\ud83c[\udd00-\udd0c]|\ud83e[\udff0-\udff9]`,
      },
      {
        name: `Nd`,
        alias: `Decimal_Number`,
        bmp: `0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９`,
        astral: `\ud801[\udca0-\udca9]|\ud803[\udd30-\udd39]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf39]|\ud806[\udce0-\udce9\udd50-\udd59]|\ud807[\udc50-\udc59\udd50-\udd59\udda0-\udda9]|\ud81a[\ude60-\ude69\udec0-\udec9\udf50-\udf59]|\ud835[\udfce-\udfff]|\ud838[\udd40-\udd49\udef0-\udef9]|\ud83a[\udd50-\udd59]|\ud83e[\udff0-\udff9]`,
      },
      {
        name: `Nl`,
        alias: `Letter_Number`,
        bmp: `ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ`,
        astral: `\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]|\ud809[\udc00-\udc6e]`,
      },
      {
        name: `No`,
        alias: `Other_Number`,
        bmp: `²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵`,
        astral: `\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\ude60-\ude7e\udf1d-\udf26\udf51-\udf54\udfc5-\udfcb]|\ud804[\udc52-\udc65\udde1-\uddf4]|\ud805[\udf3a\udf3b]|\ud806[\udcea-\udcf2]|\ud807[\udc5a-\udc6c\udfc0-\udfd4]|\ud81a[\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud83a[\udcc7-\udccf]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4\udd01-\udd2d\udd2f-\udd3d]|\ud83c[\udd00-\udd0c]`,
      },
      {
        name: `P`,
        alias: `Punctuation`,
        bmp: `!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹏⹒-⹝、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･`,
        astral: `\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udead\udf55-\udf59\udf86-\udf89]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5a\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udeb9\udf3c-\udf3e]|\ud806[\udc3b\udd44-\udd46\udde2\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8\udfff]|\ud809[\udc70-\udc74]|\ud80b[\udff1\udff2]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a\udfe2]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]`,
      },
      { name: `Pc`, alias: `Connector_Punctuation`, bmp: `_‿⁀⁔︳︴﹍-﹏＿` },
      {
        name: `Pd`,
        alias: `Dash_Punctuation`,
        bmp: `\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀⹝〜〰゠︱︲﹘﹣－`,
        astral: `𐺭`,
      },
      {
        name: `Pe`,
        alias: `Close_Punctuation`,
        bmp: `\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩⹖⹘⹚⹜〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣`,
      },
      { name: `Pf`, alias: `Final_Punctuation`, bmp: `»’”›⸃⸅⸊⸍⸝⸡` },
      { name: `Pi`, alias: `Initial_Punctuation`, bmp: `«‘‛“‟‹⸂⸄⸉⸌⸜⸠` },
      {
        name: `Po`,
        alias: `Other_Punctuation`,
        bmp: `!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹏⹒-⹔、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･`,
        astral: `\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59\udf86-\udf89]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5a\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udeb9\udf3c-\udf3e]|\ud806[\udc3b\udd44-\udd46\udde2\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8\udfff]|\ud809[\udc70-\udc74]|\ud80b[\udff1\udff2]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a\udfe2]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]`,
      },
      {
        name: `Ps`,
        alias: `Open_Punctuation`,
        bmp: `\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂⹕⹗⹙⹛〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢`,
      },
      {
        name: `S`,
        alias: `Symbol`,
        bmp: "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿࢈৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-⃀℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛꭪꭫﬩﮲-﯂﵀-﵏﷏﷼-﷿﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",
        astral: `\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9c\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud807[\udfd5-\udff1]|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud833[\udf50-\udfc3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\uddea\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud838[\udd4f\udeff]|\ud83b[\udcac\udcb0\udd2e\udef0\udef1]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd0d-\uddad\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded7\udedd-\udeec\udef0-\udefc\udf00-\udf73\udf80-\udfd8\udfe0-\udfeb\udff0]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udcb0\udcb1\udd00-\ude53\ude60-\ude6d\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec5\uded0-\uded9\udee0-\udee7\udef0-\udef6\udf00-\udf92\udf94-\udfca]`,
      },
      {
        name: `Sc`,
        alias: `Currency_Symbol`,
        bmp: `\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-⃀꠸﷼﹩＄￠￡￥￦`,
        astral: `\ud807[\udfdd-\udfe0]|𞋿|𞲰`,
      },
      {
        name: `Sk`,
        alias: `Modifier_Symbol`,
        bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅࢈᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛꭪꭫﮲-﯂＾｀￣",
        astral: `\ud83c[\udffb-\udfff]`,
      },
      {
        name: `Sm`,
        alias: `Math_Symbol`,
        bmp: `\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬`,
        astral: `\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83b[\udef0\udef1]`,
      },
      {
        name: `So`,
        alias: `Other_Symbol`,
        bmp: `¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﵀-﵏﷏﷽-﷿￤￨￭￮￼�`,
        astral: `\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9c\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud807[\udfd5-\udfdc\udfe1-\udff1]|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud833[\udf50-\udfc3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\uddea\ude00-\ude41\ude45\udf00-\udf56]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|𞅏|\ud83b[\udcac\udd2e]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd0d-\uddad\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udffa]|\ud83d[\udc00-\uded7\udedd-\udeec\udef0-\udefc\udf00-\udf73\udf80-\udfd8\udfe0-\udfeb\udff0]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udcb0\udcb1\udd00-\ude53\ude60-\ude6d\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec5\uded0-\uded9\udee0-\udee7\udef0-\udef6\udf00-\udf92\udf94-\udfca]`,
      },
      { name: `Z`, alias: `Separator`, bmp: ` \xA0  - \u2028\u2029  　` },
      { name: `Zl`, alias: `Line_Separator`, bmp: `\u2028` },
      { name: `Zp`, alias: `Paragraph_Separator`, bmp: `\u2029` },
      { name: `Zs`, alias: `Space_Separator`, bmp: ` \xA0  -   　` },
    ];
  }),
  ui = e((e, t) => {
    var n = H(),
      r = U();
    n(e, `__esModule`, { value: !0 }), (e.default = void 0);
    var i = r(li());
    (e.default = function (e) {
      if (!e.addUnicodeData)
        throw ReferenceError(
          `Unicode Base must be loaded before Unicode Categories`
        );
      e.addUnicodeData(i.default);
    }),
      (t.exports = e.default);
  }),
  di = e((e, t) => {
    t.exports = [
      { name: `ASCII`, bmp: `\0-` },
      {
        name: `Alphabetic`,
        bmp: `A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౝౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೝೞೠ-ೣೱೲഀ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿඁ-ඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄຆ-ຊຌ-ຣລວ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ႏႚ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜓᜟ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᪿᫀᫌ-ᫎᬀ-ᬳᬵ-ᭃᭅ-ᭌᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰶᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠅꠇ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽ-ꣿꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ`,
        astral: `\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\udd70-\udd7a\udd7c-\udd8a\udd8c-\udd92\udd94\udd95\udd97-\udda1\udda3-\uddb1\uddb3-\uddb9\uddbb\uddbc\ude00-\udf36\udf40-\udf55\udf60-\udf67\udf80-\udf85\udf87-\udfb0\udfb2-\udfba]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\ude80-\udea9\udeab\udeac\udeb0\udeb1\udf00-\udf1c\udf27\udf30-\udf45\udf70-\udf81\udfb0-\udfc4\udfe0-\udff6]|\ud804[\udc00-\udc45\udc71-\udc75\udc82-\udcb8\udcc2\udcd0-\udce8\udd00-\udd32\udd44-\udd47\udd50-\udd72\udd76\udd80-\uddbf\uddc1-\uddc4\uddce\uddcf\uddda\udddc\ude00-\ude11\ude13-\ude34\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udee8\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d-\udf44\udf47\udf48\udf4b\udf4c\udf50\udf57\udf5d-\udf63]|\ud805[\udc00-\udc41\udc43-\udc45\udc47-\udc4a\udc5f-\udc61\udc80-\udcc1\udcc4\udcc5\udcc7\udd80-\uddb5\uddb8-\uddbe\uddd8-\udddd\ude00-\ude3e\ude40\ude44\ude80-\udeb5\udeb8\udf00-\udf1a\udf1d-\udf2a\udf40-\udf46]|\ud806[\udc00-\udc38\udca0-\udcdf\udcff-\udd06\udd09\udd0c-\udd13\udd15\udd16\udd18-\udd35\udd37\udd38\udd3b\udd3c\udd3f-\udd42\udda0-\udda7\uddaa-\uddd7\uddda-\udddf\udde1\udde3\udde4\ude00-\ude32\ude35-\ude3e\ude50-\ude97\ude9d\udeb0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc3e\udc40\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd41\udd43\udd46\udd47\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd96\udd98\udee0-\udef6\udfb0]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud80b[\udf90-\udff0]|[\ud80c\ud81c-\ud820\ud822\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\ude70-\udebe\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf4f-\udf87\udf8f-\udf9f\udfe0\udfe1\udfe3\udff0\udff1]|\ud821[\udc00-\udff7]|\ud823[\udc00-\udcd5\udd00-\udd08]|\ud82b[\udff0-\udff3\udff5-\udffb\udffd\udffe]|\ud82c[\udc00-\udd22\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9e]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud837[\udf00-\udf1e]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a\udd00-\udd2c\udd37-\udd3d\udd4e\ude90-\udead\udec0-\udeeb]|\ud839[\udfe0-\udfe6\udfe8-\udfeb\udfed\udfee\udff0-\udffe]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd47\udd4b]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]|\ud869[\udc00-\udedf\udf00-\udfff]|\ud86d[\udc00-\udf38\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a]`,
      },
      {
        name: `Any`,
        isBmpLast: !0,
        bmp: `\0-￿`,
        astral: `[\ud800-\udbff][\udc00-\udfff]`,
      },
      {
        name: `Default_Ignorable_Code_Point`,
        bmp: `­͏؜ᅟᅠ឴឵᠋-᠏​-‏‪-‮⁠-⁯ㅤ︀-️﻿ﾠ￰-￸`,
        astral: `\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|[\udb40-\udb43][\udc00-\udfff]`,
      },
      {
        name: `Lowercase`,
        bmp: `a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟸ-ꟺꬰ-ꭚꭜ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ`,
        astral: `\ud801[\udc28-\udc4f\udcd8-\udcfb\udd97-\udda1\udda3-\uddb1\uddb3-\uddb9\uddbb\uddbc\udf80\udf83-\udf85\udf87-\udfb0\udfb2-\udfba]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud837[\udf00-\udf09\udf0b-\udf1e]|\ud83a[\udd22-\udd43]`,
      },
      {
        name: `Noncharacter_Code_Point`,
        bmp: `﷐-﷯￾￿`,
        astral: `[\ud83f\ud87f\ud8bf\ud8ff\ud93f\ud97f\ud9bf\ud9ff\uda3f\uda7f\udabf\udaff\udb3f\udb7f\udbbf\udbff][\udffe\udfff]`,
      },
      {
        name: `Uppercase`,
        bmp: `A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ`,
        astral: `\ud801[\udc00-\udc27\udcb0-\udcd3\udd70-\udd7a\udd7c-\udd8a\udd8c-\udd92\udd94\udd95]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]`,
      },
      { name: `White_Space`, bmp: `	-\r \xA0  - \u2028\u2029  　` },
    ];
  }),
  fi = e((e, t) => {
    var n = H(),
      r = U();
    n(e, `__esModule`, { value: !0 }), (e.default = void 0);
    var i = r(di());
    (e.default = function (e) {
      if (!e.addUnicodeData)
        throw ReferenceError(
          `Unicode Base must be loaded before Unicode Properties`
        );
      var t = i.default;
      t.push({ name: `Assigned`, inverseOf: `Cn` }), e.addUnicodeData(t);
    }),
      (t.exports = e.default);
  }),
  pi = e((e, t) => {
    t.exports = [
      {
        name: `Adlam`,
        astral: `\ud83a[\udd00-\udd4b\udd50-\udd59\udd5e\udd5f]`,
      },
      {
        name: `Ahom`,
        astral: `\ud805[\udf00-\udf1a\udf1d-\udf2b\udf30-\udf46]`,
      },
      { name: `Anatolian_Hieroglyphs`, astral: `\ud811[\udc00-\ude46]` },
      {
        name: `Arabic`,
        bmp: `؀-؄؆-؋؍-ؚ؜-؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࡰ-ࢎ࢐࢑࢘-ࣣ࣡-ࣿﭐ-﯂ﯓ-ﴽ﵀-ﶏﶒ-ﷇ﷏ﷰ-﷿ﹰ-ﹴﹶ-ﻼ`,
        astral: `\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]`,
      },
      { name: `Armenian`, bmp: `Ա-Ֆՙ-֊֍-֏ﬓ-ﬗ` },
      { name: `Avestan`, astral: `\ud802[\udf00-\udf35\udf39-\udf3f]` },
      { name: `Balinese`, bmp: `ᬀ-ᭌ᭐-᭾` },
      { name: `Bamum`, bmp: `ꚠ-꛷`, astral: `\ud81a[\udc00-\ude38]` },
      { name: `Bassa_Vah`, astral: `\ud81a[\uded0-\udeed\udef0-\udef5]` },
      { name: `Batak`, bmp: `ᯀ-᯳᯼-᯿` },
      { name: `Bengali`, bmp: `ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾` },
      {
        name: `Bhaiksuki`,
        astral: `\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc45\udc50-\udc6c]`,
      },
      { name: `Bopomofo`, bmp: `˪˫ㄅ-ㄯㆠ-ㆿ` },
      { name: `Brahmi`, astral: `\ud804[\udc00-\udc4d\udc52-\udc75\udc7f]` },
      { name: `Braille`, bmp: `⠀-⣿` },
      { name: `Buginese`, bmp: `ᨀ-ᨛ᨞᨟` },
      { name: `Buhid`, bmp: `ᝀ-ᝓ` },
      {
        name: `Canadian_Aboriginal`,
        bmp: `᐀-ᙿᢰ-ᣵ`,
        astral: `\ud806[\udeb0-\udebf]`,
      },
      { name: `Carian`, astral: `\ud800[\udea0-\uded0]` },
      { name: `Caucasian_Albanian`, astral: `\ud801[\udd30-\udd63\udd6f]` },
      { name: `Chakma`, astral: `\ud804[\udd00-\udd34\udd36-\udd47]` },
      { name: `Cham`, bmp: `ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟` },
      { name: `Cherokee`, bmp: `Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ` },
      { name: `Chorasmian`, astral: `\ud803[\udfb0-\udfcb]` },
      {
        name: `Common`,
        bmp: "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ᳺ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-⃀℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮗-⯿⸀-⹝⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㋿㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛꭪꭫﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫﻿！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",
        astral: `\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9c\uddd0-\uddfc\udee1-\udefb]|\ud82f[\udca0-\udca3]|\ud833[\udf50-\udfc3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\uddea\udee0-\udef3\udf00-\udf56\udf60-\udf78]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\ud83b[\udc71-\udcb4\udd01-\udd3d]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd00-\uddad\udde6-\uddff\ude01\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded7\udedd-\udeec\udef0-\udefc\udf00-\udf73\udf80-\udfd8\udfe0-\udfeb\udff0]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udcb0\udcb1\udd00-\ude53\ude60-\ude6d\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec5\uded0-\uded9\udee0-\udee7\udef0-\udef6\udf00-\udf92\udf94-\udfca\udff0-\udff9]|\udb40[\udc01\udc20-\udc7f]`,
      },
      { name: `Coptic`, bmp: `Ϣ-ϯⲀ-ⳳ⳹-⳿` },
      {
        name: `Cuneiform`,
        astral: `\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc70-\udc74\udc80-\udd43]`,
      },
      {
        name: `Cypriot`,
        astral: `\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]`,
      },
      { name: `Cypro_Minoan`, astral: `\ud80b[\udf90-\udff2]` },
      { name: `Cyrillic`, bmp: `Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯` },
      { name: `Deseret`, astral: `\ud801[\udc00-\udc4f]` },
      { name: `Devanagari`, bmp: `ऀ-ॐॕ-ॣ०-ॿ꣠-ꣿ` },
      {
        name: `Dives_Akuru`,
        astral: `\ud806[\udd00-\udd06\udd09\udd0c-\udd13\udd15\udd16\udd18-\udd35\udd37\udd38\udd3b-\udd46\udd50-\udd59]`,
      },
      { name: `Dogra`, astral: `\ud806[\udc00-\udc3b]` },
      {
        name: `Duployan`,
        astral: `\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9c-\udc9f]`,
      },
      {
        name: `Egyptian_Hieroglyphs`,
        astral: `\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e\udc30-\udc38]`,
      },
      { name: `Elbasan`, astral: `\ud801[\udd00-\udd27]` },
      { name: `Elymaic`, astral: `\ud803[\udfe0-\udff6]` },
      {
        name: `Ethiopic`,
        bmp: `ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ`,
        astral: `\ud839[\udfe0-\udfe6\udfe8-\udfeb\udfed\udfee\udff0-\udffe]`,
      },
      { name: `Georgian`, bmp: `Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ` },
      {
        name: `Glagolitic`,
        bmp: `Ⰰ-ⱟ`,
        astral: `\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]`,
      },
      { name: `Gothic`, astral: `\ud800[\udf30-\udf4a]` },
      {
        name: `Grantha`,
        astral: `\ud804[\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]`,
      },
      {
        name: `Greek`,
        bmp: `Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ`,
        astral: `\ud800[\udd40-\udd8e\udda0]|\ud834[\ude00-\ude45]`,
      },
      { name: `Gujarati`, bmp: `ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿` },
      {
        name: `Gunjala_Gondi`,
        astral: `\ud807[\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd98\udda0-\udda9]`,
      },
      { name: `Gurmukhi`, bmp: `ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶` },
      {
        name: `Han`,
        bmp: `⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎`,
        astral: `\ud81b[\udfe2\udfe3\udff0\udff1]|[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879\ud880-\ud883][\udc00-\udfff]|\ud869[\udc00-\udedf\udf00-\udfff]|\ud86d[\udc00-\udf38\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\ud884[\udc00-\udf4a]`,
      },
      {
        name: `Hangul`,
        bmp: `ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ`,
      },
      { name: `Hanifi_Rohingya`, astral: `\ud803[\udd00-\udd27\udd30-\udd39]` },
      { name: `Hanunoo`, bmp: `ᜠ-᜴` },
      {
        name: `Hatran`,
        astral: `\ud802[\udce0-\udcf2\udcf4\udcf5\udcfb-\udcff]`,
      },
      { name: `Hebrew`, bmp: `֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ` },
      {
        name: `Hiragana`,
        bmp: `ぁ-ゖゝ-ゟ`,
        astral: `\ud82c[\udc01-\udd1f\udd50-\udd52]|🈀`,
      },
      {
        name: `Imperial_Aramaic`,
        astral: `\ud802[\udc40-\udc55\udc57-\udc5f]`,
      },
      {
        name: `Inherited`,
        bmp: `̀-ًͯ҅҆-ٰٕ॑-॔᪰-ᫎ᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭`,
        astral: `\ud800[\uddfd\udee0]|𑌻|\ud833[\udf00-\udf2d\udf30-\udf46]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\udb40[\udd00-\uddef]`,
      },
      {
        name: `Inscriptional_Pahlavi`,
        astral: `\ud802[\udf60-\udf72\udf78-\udf7f]`,
      },
      {
        name: `Inscriptional_Parthian`,
        astral: `\ud802[\udf40-\udf55\udf58-\udf5f]`,
      },
      { name: `Javanese`, bmp: `ꦀ-꧍꧐-꧙꧞꧟` },
      { name: `Kaithi`, astral: `\ud804[\udc80-\udcc2\udccd]` },
      { name: `Kannada`, bmp: `ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೝೞೠ-ೣ೦-೯ೱೲ` },
      {
        name: `Katakana`,
        bmp: `ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ`,
        astral: `\ud82b[\udff0-\udff3\udff5-\udffb\udffd\udffe]|\ud82c[\udc00\udd20-\udd22\udd64-\udd67]`,
      },
      { name: `Kayah_Li`, bmp: `꤀-꤭꤯` },
      {
        name: `Kharoshthi`,
        astral: `\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f-\ude48\ude50-\ude58]`,
      },
      {
        name: `Khitan_Small_Script`,
        astral: `𖿤|\ud822[\udf00-\udfff]|\ud823[\udc00-\udcd5]`,
      },
      { name: `Khmer`, bmp: `ក-៝០-៩៰-៹᧠-᧿` },
      { name: `Khojki`, astral: `\ud804[\ude00-\ude11\ude13-\ude3e]` },
      { name: `Khudawadi`, astral: `\ud804[\udeb0-\udeea\udef0-\udef9]` },
      { name: `Lao`, bmp: `ກຂຄຆ-ຊຌ-ຣລວ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ` },
      {
        name: `Latin`,
        bmp: `A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꟿꬰ-ꭚꭜ-ꭤꭦ-ꭩﬀ-ﬆＡ-Ｚａ-ｚ`,
        astral: `\ud801[\udf80-\udf85\udf87-\udfb0\udfb2-\udfba]|\ud837[\udf00-\udf1e]`,
      },
      { name: `Lepcha`, bmp: `ᰀ-᰷᰻-᱉ᱍ-ᱏ` },
      { name: `Limbu`, bmp: `ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏` },
      {
        name: `Linear_A`,
        astral: `\ud801[\ude00-\udf36\udf40-\udf55\udf60-\udf67]`,
      },
      {
        name: `Linear_B`,
        astral: `\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]`,
      },
      { name: `Lisu`, bmp: `ꓐ-꓿`, astral: `𑾰` },
      { name: `Lycian`, astral: `\ud800[\ude80-\ude9c]` },
      { name: `Lydian`, astral: `\ud802[\udd20-\udd39\udd3f]` },
      { name: `Mahajani`, astral: `\ud804[\udd50-\udd76]` },
      { name: `Makasar`, astral: `\ud807[\udee0-\udef8]` },
      { name: `Malayalam`, bmp: `ഀ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ` },
      { name: `Mandaic`, bmp: `ࡀ-࡛࡞` },
      { name: `Manichaean`, astral: `\ud802[\udec0-\udee6\udeeb-\udef6]` },
      {
        name: `Marchen`,
        astral: `\ud807[\udc70-\udc8f\udc92-\udca7\udca9-\udcb6]`,
      },
      {
        name: `Masaram_Gondi`,
        astral: `\ud807[\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd47\udd50-\udd59]`,
      },
      { name: `Medefaidrin`, astral: `\ud81b[\ude40-\ude9a]` },
      { name: `Meetei_Mayek`, bmp: `ꫠ-꫶ꯀ-꯭꯰-꯹` },
      { name: `Mende_Kikakui`, astral: `\ud83a[\udc00-\udcc4\udcc7-\udcd6]` },
      {
        name: `Meroitic_Cursive`,
        astral: `\ud802[\udda0-\uddb7\uddbc-\uddcf\uddd2-\uddff]`,
      },
      { name: `Meroitic_Hieroglyphs`, astral: `\ud802[\udd80-\udd9f]` },
      {
        name: `Miao`,
        astral: `\ud81b[\udf00-\udf4a\udf4f-\udf87\udf8f-\udf9f]`,
      },
      { name: `Modi`, astral: `\ud805[\ude00-\ude44\ude50-\ude59]` },
      {
        name: `Mongolian`,
        bmp: `᠀᠁᠄᠆-᠙ᠠ-ᡸᢀ-ᢪ`,
        astral: `\ud805[\ude60-\ude6c]`,
      },
      { name: `Mro`, astral: `\ud81a[\ude40-\ude5e\ude60-\ude69\ude6e\ude6f]` },
      {
        name: `Multani`,
        astral: `\ud804[\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea9]`,
      },
      { name: `Myanmar`, bmp: `က-႟ꧠ-ꧾꩠ-ꩿ` },
      { name: `Nabataean`, astral: `\ud802[\udc80-\udc9e\udca7-\udcaf]` },
      {
        name: `Nandinagari`,
        astral: `\ud806[\udda0-\udda7\uddaa-\uddd7\uddda-\udde4]`,
      },
      { name: `New_Tai_Lue`, bmp: `ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟` },
      { name: `Newa`, astral: `\ud805[\udc00-\udc5b\udc5d-\udc61]` },
      { name: `Nko`, bmp: `߀-ߺ߽-߿` },
      { name: `Nushu`, astral: `𖿡|\ud82c[\udd70-\udefb]` },
      {
        name: `Nyiakeng_Puachue_Hmong`,
        astral: `\ud838[\udd00-\udd2c\udd30-\udd3d\udd40-\udd49\udd4e\udd4f]`,
      },
      { name: `Ogham`, bmp: ` -᚜` },
      { name: `Ol_Chiki`, bmp: `᱐-᱿` },
      {
        name: `Old_Hungarian`,
        astral: `\ud803[\udc80-\udcb2\udcc0-\udcf2\udcfa-\udcff]`,
      },
      { name: `Old_Italic`, astral: `\ud800[\udf00-\udf23\udf2d-\udf2f]` },
      { name: `Old_North_Arabian`, astral: `\ud802[\ude80-\ude9f]` },
      { name: `Old_Permic`, astral: `\ud800[\udf50-\udf7a]` },
      { name: `Old_Persian`, astral: `\ud800[\udfa0-\udfc3\udfc8-\udfd5]` },
      { name: `Old_Sogdian`, astral: `\ud803[\udf00-\udf27]` },
      { name: `Old_South_Arabian`, astral: `\ud802[\ude60-\ude7f]` },
      { name: `Old_Turkic`, astral: `\ud803[\udc00-\udc48]` },
      { name: `Old_Uyghur`, astral: `\ud803[\udf70-\udf89]` },
      { name: `Oriya`, bmp: `ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍୕-ୗଡ଼ଢ଼ୟ-ୣ୦-୷` },
      { name: `Osage`, astral: `\ud801[\udcb0-\udcd3\udcd8-\udcfb]` },
      { name: `Osmanya`, astral: `\ud801[\udc80-\udc9d\udca0-\udca9]` },
      {
        name: `Pahawh_Hmong`,
        astral: `\ud81a[\udf00-\udf45\udf50-\udf59\udf5b-\udf61\udf63-\udf77\udf7d-\udf8f]`,
      },
      { name: `Palmyrene`, astral: `\ud802[\udc60-\udc7f]` },
      { name: `Pau_Cin_Hau`, astral: `\ud806[\udec0-\udef8]` },
      { name: `Phags_Pa`, bmp: `ꡀ-꡷` },
      { name: `Phoenician`, astral: `\ud802[\udd00-\udd1b\udd1f]` },
      {
        name: `Psalter_Pahlavi`,
        astral: `\ud802[\udf80-\udf91\udf99-\udf9c\udfa9-\udfaf]`,
      },
      { name: `Rejang`, bmp: `ꤰ-꥓꥟` },
      { name: `Runic`, bmp: `ᚠ-ᛪᛮ-ᛸ` },
      { name: `Samaritan`, bmp: `ࠀ-࠭࠰-࠾` },
      { name: `Saurashtra`, bmp: `ꢀ-ꣅ꣎-꣙` },
      { name: `Sharada`, astral: `\ud804[\udd80-\udddf]` },
      { name: `Shavian`, astral: `\ud801[\udc50-\udc7f]` },
      { name: `Siddham`, astral: `\ud805[\udd80-\uddb5\uddb8-\udddd]` },
      {
        name: `SignWriting`,
        astral: `\ud836[\udc00-\ude8b\ude9b-\ude9f\udea1-\udeaf]`,
      },
      {
        name: `Sinhala`,
        bmp: `ඁ-ඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴`,
        astral: `\ud804[\udde1-\uddf4]`,
      },
      { name: `Sogdian`, astral: `\ud803[\udf30-\udf59]` },
      { name: `Sora_Sompeng`, astral: `\ud804[\udcd0-\udce8\udcf0-\udcf9]` },
      { name: `Soyombo`, astral: `\ud806[\ude50-\udea2]` },
      { name: `Sundanese`, bmp: `ᮀ-ᮿ᳀-᳇` },
      { name: `Syloti_Nagri`, bmp: `ꠀ-꠬` },
      { name: `Syriac`, bmp: `܀-܍܏-݊ݍ-ݏࡠ-ࡪ` },
      { name: `Tagalog`, bmp: `ᜀ-᜕ᜟ` },
      { name: `Tagbanwa`, bmp: `ᝠ-ᝬᝮ-ᝰᝲᝳ` },
      { name: `Tai_Le`, bmp: `ᥐ-ᥭᥰ-ᥴ` },
      { name: `Tai_Tham`, bmp: `ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭` },
      { name: `Tai_Viet`, bmp: `ꪀ-ꫂꫛ-꫟` },
      { name: `Takri`, astral: `\ud805[\ude80-\udeb9\udec0-\udec9]` },
      {
        name: `Tamil`,
        bmp: `ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺`,
        astral: `\ud807[\udfc0-\udff1\udfff]`,
      },
      { name: `Tangsa`, astral: `\ud81a[\ude70-\udebe\udec0-\udec9]` },
      {
        name: `Tangut`,
        astral: `𖿠|[\ud81c-\ud820][\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udeff]|\ud823[\udd00-\udd08]`,
      },
      { name: `Telugu`, bmp: `ఀ-ఌఎ-ఐఒ-నప-హ఼-ౄె-ైొ-్ౕౖౘ-ౚౝౠ-ౣ౦-౯౷-౿` },
      { name: `Thaana`, bmp: `ހ-ޱ` },
      { name: `Thai`, bmp: `ก-ฺเ-๛` },
      { name: `Tibetan`, bmp: `ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚` },
      { name: `Tifinagh`, bmp: `ⴰ-ⵧⵯ⵰⵿` },
      { name: `Tirhuta`, astral: `\ud805[\udc80-\udcc7\udcd0-\udcd9]` },
      { name: `Toto`, astral: `\ud838[\ude90-\udeae]` },
      { name: `Ugaritic`, astral: `\ud800[\udf80-\udf9d\udf9f]` },
      { name: `Vai`, bmp: `ꔀ-ꘫ` },
      {
        name: `Vithkuqi`,
        astral: `\ud801[\udd70-\udd7a\udd7c-\udd8a\udd8c-\udd92\udd94\udd95\udd97-\udda1\udda3-\uddb1\uddb3-\uddb9\uddbb\uddbc]`,
      },
      { name: `Wancho`, astral: `\ud838[\udec0-\udef9\udeff]` },
      { name: `Warang_Citi`, astral: `\ud806[\udca0-\udcf2\udcff]` },
      {
        name: `Yezidi`,
        astral: `\ud803[\ude80-\udea9\udeab-\udead\udeb0\udeb1]`,
      },
      { name: `Yi`, bmp: `ꀀ-ꒌ꒐-꓆` },
      { name: `Zanabazar_Square`, astral: `\ud806[\ude00-\ude47]` },
    ];
  }),
  mi = e((e, t) => {
    var n = H(),
      r = U();
    n(e, `__esModule`, { value: !0 }), (e.default = void 0);
    var i = r(pi());
    (e.default = function (e) {
      if (!e.addUnicodeData)
        throw ReferenceError(
          `Unicode Base must be loaded before Unicode Scripts`
        );
      e.addUnicodeData(i.default, `Script`);
    }),
      (t.exports = e.default);
  }),
  hi = e((e, t) => {
    var n = H(),
      r = U();
    n(e, `__esModule`, { value: !0 }), (e.default = void 0);
    var i = r(Kr()),
      a = r(oi()),
      o = r(si()),
      s = r(ci()),
      c = r(ui()),
      l = r(fi()),
      u = r(mi());
    (0, a.default)(i.default),
      (0, o.default)(i.default),
      (0, s.default)(i.default),
      (0, c.default)(i.default),
      (0, l.default)(i.default),
      (0, u.default)(i.default),
      (e.default = i.default),
      (t.exports = e.default);
  });
export { hi as t };

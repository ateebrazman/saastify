var e = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  t = globalThis,
  n = `10.68.0`;
function r() {
  return i(t), t;
}
function i(e) {
  let t = (e.__SENTRY__ = e.__SENTRY__ || {});
  return (t.version = t.version || `10.68.0`), (t[n] = t[`10.68.0`] || {});
}
function a(e, r, i = t) {
  let a = (i.__SENTRY__ = i.__SENTRY__ || {}),
    o = (a[n] = a[`10.68.0`] || {});
  return o[e] || (o[e] = r());
}
var o = [`debug`, `info`, `warn`, `error`, `log`, `assert`, `trace`],
  s = `Sentry Logger `,
  c = {};
function l(e) {
  if (!(`console` in t)) return e();
  let n = t.console,
    r = {},
    i = Object.keys(c);
  i.forEach((e) => {
    let t = c[e];
    (r[e] = n[e]), (n[e] = t);
  });
  try {
    return e();
  } finally {
    i.forEach((e) => {
      n[e] = r[e];
    });
  }
}
function u() {
  _().enabled = !0;
}
function d() {
  _().enabled = !1;
}
function f() {
  return _().enabled;
}
function p(...e) {
  g(`log`, ...e);
}
function m(...e) {
  g(`warn`, ...e);
}
function h(...e) {
  g(`error`, ...e);
}
function g(n, ...r) {
  e &&
    f() &&
    l(() => {
      t.console[n](`${s}[${n}]:`, ...r);
    });
}
function _() {
  return e ? a(`loggerSettings`, () => ({ enabled: !1 })) : { enabled: !1 };
}
var v = { enable: u, disable: d, isEnabled: f, log: p, warn: m, error: h },
  y = 50,
  b = /\(error: (.*)\)/,
  x = /captureMessage|captureException/;
function S(...e) {
  let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
  return (e, n = 0, r = 0) => {
    let i = [],
      a = e.split(`
`);
    for (let e = n; e < a.length; e++) {
      let n = a[e];
      n.length > 1024 && (n = n.slice(0, 1024));
      let o = b.test(n) ? n.replace(b, `$1`) : n;
      if (!o.includes(`Error: `)) {
        for (let e of t) {
          let t = e(o);
          if (t) {
            i.push(t);
            break;
          }
        }
        if (i.length >= y + r) break;
      }
    }
    return w(i.slice(r));
  };
}
function C(e) {
  return Array.isArray(e) ? S(...e) : e;
}
function w(e) {
  if (!e.length) return [];
  let t = Array.from(e);
  return (
    /sentryWrapped/.test(ee(t).function || ``) && t.pop(),
    t.reverse(),
    x.test(ee(t).function || ``) &&
      (t.pop(), x.test(ee(t).function || ``) && t.pop()),
    t
      .slice(0, y)
      .map((e) => ({
        ...e,
        filename: e.filename || ee(t).filename,
        function: e.function || `?`,
      }))
  );
}
function ee(e) {
  return e[e.length - 1] || {};
}
var te = `<anonymous>`;
function T(e) {
  try {
    return !e || typeof e != `function` ? te : e.name || te;
  } catch {
    return te;
  }
}
function ne(e) {
  let t = e.exception;
  if (t) {
    let e = [];
    try {
      return (
        t.values.forEach((t) => {
          t.stacktrace.frames && e.push(...t.stacktrace.frames);
        }),
        e
      );
    } catch {
      return;
    }
  }
}
var re = {},
  ie = {};
function E(e, t) {
  return (
    (re[e] = re[e] || []),
    re[e].push(t),
    () => {
      let n = re[e];
      if (n) {
        let e = n.indexOf(t);
        e !== -1 && n.splice(e, 1);
      }
    }
  );
}
function D(t, n) {
  if (!ie[t]) {
    ie[t] = !0;
    try {
      n();
    } catch (n) {
      e && v.error(`Error while instrumenting ${t}`, n);
    }
  }
}
function O(t, n) {
  let r = t && re[t];
  if (r)
    for (let i of r)
      try {
        i(n);
      } catch (n) {
        e &&
          v.error(
            `Error while triggering instrumentation handler.
Type: ${t}
Name: ${T(i)}
Error:`,
            n
          );
      }
}
var k = null;
function ae(e) {
  let t = `error`;
  E(t, e), D(t, oe);
}
function oe() {
  (k = t.onerror),
    (t.onerror = function (e, t, n, r, i) {
      return (
        O(`error`, { column: r, error: i, line: n, msg: e, url: t }),
        k ? k.apply(this, arguments) : !1
      );
    }),
    (t.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
var se = null;
function ce(e) {
  let t = `unhandledrejection`;
  E(t, e), D(t, le);
}
function le() {
  (se = t.onunhandledrejection),
    (t.onunhandledrejection = function (e) {
      return O(`unhandledrejection`, e), !se || se.apply(this, arguments);
    }),
    (t.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
var ue = Object.prototype.toString;
function de(e) {
  switch (ue.call(e)) {
    case `[object Error]`:
    case `[object Exception]`:
    case `[object DOMException]`:
    case `[object WebAssembly.Exception]`:
      return !0;
    default:
      return we(e, Error);
  }
}
function fe(e, t) {
  return ue.call(e) === `[object ${t}]`;
}
function pe(e) {
  return fe(e, `ErrorEvent`);
}
function me(e) {
  return fe(e, `DOMError`);
}
function he(e) {
  return fe(e, `DOMException`);
}
function ge(e) {
  return fe(e, `String`);
}
function _e(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `__sentry_template_string__` in e &&
    `__sentry_template_values__` in e
  );
}
function ve(e) {
  return (
    e === null || _e(e) || (typeof e != `object` && typeof e != `function`)
  );
}
function ye(e) {
  return fe(e, `Object`);
}
function be(e) {
  return typeof e == `object` && !!e;
}
function xe(e) {
  return typeof Event < `u` && we(e, Event);
}
function Se(e) {
  return fe(e, `RegExp`);
}
function Ce(e) {
  return !!(e?.then && typeof e.then == `function`);
}
function we(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function Te(e) {
  return typeof Request < `u` && we(e, Request);
}
function Ee(t, n, r) {
  if (!(n in t)) return;
  let i = t[n];
  if (typeof i != `function`) return;
  let a = r(i);
  typeof a == `function` && De(a, i);
  try {
    t[n] = a;
  } catch {
    e && v.log(`Failed to replace method "${n}" in object`, t);
  }
}
function A(t, n, r) {
  try {
    Object.defineProperty(t, n, { value: r, writable: !0, configurable: !0 });
  } catch {
    e &&
      v.log(
        `Failed to add non-enumerable property "${String(n)}" to object`,
        t
      );
  }
}
function De(e, t) {
  try {
    (e.prototype = t.prototype = t.prototype || {}),
      A(e, `__sentry_original__`, t);
  } catch {}
}
function Oe(e) {
  return e.__sentry_original__;
}
function ke(e) {
  if (de(e))
    return { message: e.message, name: e.name, stack: e.stack, ...Ae(e) };
  if (xe(e)) {
    let { type: t, target: n, currentTarget: r, detail: i } = e;
    return {
      type: t,
      target: n,
      currentTarget: r,
      ...(i ? { detail: i } : {}),
      ...Ae(e),
    };
  }
  return e;
}
function Ae(e) {
  return be(e) ? Object.fromEntries(Object.entries(e)) : {};
}
function je(e) {
  let t = Object.keys(ke(e));
  return t.sort(), t[0] ? t.join(`, `) : `[object has no keys]`;
}
var Me;
function Ne(e) {
  if (Me !== void 0) return Me ? Me(e) : e();
  let n = Symbol.for(`__SENTRY_SAFE_RANDOM_ID_WRAPPER__`),
    r = t;
  return n in r && typeof r[n] == `function`
    ? ((Me = r[n]), Me(e))
    : ((Me = null), e());
}
function Pe() {
  return Ne(() => Math.random());
}
function Fe() {
  return Ne(() => Date.now());
}
var Ie = Symbol.for(`sentry.skipNormalization`),
  Le = Symbol.for(`sentry.overrideNormalizationDepth`);
function Re(e) {
  return !!e[Ie];
}
function ze(e) {
  let t = e[Le];
  return typeof t == `number` ? t : void 0;
}
var Be;
function Ve(e) {
  Be = e;
}
function He(e, t = 100, n = 1 / 0) {
  try {
    return We(``, e, t, n);
  } catch (e) {
    return { ERROR: `**non-serializable** (${e})` };
  }
}
function Ue(e, t = 3, n = 100 * 1024) {
  let r = He(e, t);
  return Je(r) > n ? Ue(e, t - 1, n) : r;
}
function We(e, t, n = 1 / 0, r = 1 / 0, i = Ye()) {
  let [a, o] = i;
  if (
    t == null ||
    [`boolean`, `string`].includes(typeof t) ||
    (typeof t == `number` && Number.isFinite(t))
  )
    return t;
  let s = Ge(e, t);
  if (!s.startsWith(`[object `)) return s;
  if (Re(t)) return t;
  let c = ze(t),
    l = c === void 0 ? n : c;
  if (l === 0) return s.replace(`object `, ``);
  if (a(t)) return `[Circular ~]`;
  let u = t;
  if (u && typeof u.toJSON == `function`)
    try {
      return We(``, u.toJSON(), l - 1, r, i);
    } catch {}
  let d = Array.isArray(t) ? [] : {},
    f = 0,
    p = ke(t);
  for (let e in p) {
    if (!Object.prototype.hasOwnProperty.call(p, e)) continue;
    if (f >= r) {
      d[e] = `[MaxProperties ~]`;
      break;
    }
    let t = p[e];
    (d[e] = We(e, t, l - 1, r, i)), f++;
  }
  return o(t), d;
}
function Ge(e, t) {
  try {
    if (Be) {
      let e = Be(t);
      if (e) return e;
    }
    return typeof global < `u` && t === global
      ? `[Global]`
      : typeof t == `number` && !Number.isFinite(t)
      ? `[${t}]`
      : typeof t == `function`
      ? `[Function: ${T(t)}]`
      : typeof t == `symbol`
      ? `[${String(t)}]`
      : typeof t == `bigint`
      ? `[BigInt: ${String(t)}]`
      : `[object ${Ke(t)}]`;
  } catch (e) {
    return `**non-serializable** (${e})`;
  }
}
function Ke(e) {
  let t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : `null prototype`;
}
function qe(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Je(e) {
  return qe(JSON.stringify(e));
}
function Ye() {
  let e = new WeakSet();
  function t(t) {
    return e.has(t) ? !0 : (e.add(t), !1);
  }
  function n(t) {
    e.delete(t);
  }
  return [t, n];
}
function Xe(e, t = 0) {
  return typeof e != `string` || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Ze(e, t) {
  if (!Array.isArray(e)) return ``;
  let n = [];
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    ve(r)
      ? n.push(String(r))
      : r instanceof Error
      ? n.push(r.message ? `${r.name}: ${r.message}` : r.name)
      : n.push(Ge(void 0, r));
  }
  return n.join(t);
}
function Qe(e, t, n = !1) {
  return ge(e)
    ? Se(t)
      ? t.test(e)
      : ge(t)
      ? n
        ? e === t
        : e.includes(t)
      : typeof t == `function` && t(e)
    : !1;
}
function $e(e, t = [], n = !1) {
  for (let r of t) if (Qe(e, r, n)) return !0;
  return !1;
}
function et() {
  let e = t;
  return e.crypto || e.msCrypto;
}
var tt;
function nt() {
  return Pe() * 16;
}
function rt(e = et()) {
  try {
    if (e?.randomUUID) return Ne(() => e.randomUUID()).replace(/-/g, ``);
  } catch {}
  return (
    (tt ||= `10000000100040008000100000000000`),
    tt.replace(/[018]/g, (e) => (e ^ ((nt() & 15) >> (e / 4))).toString(16))
  );
}
function it(e) {
  return e.exception?.values?.[0];
}
function at(e) {
  let { message: t, event_id: n } = e;
  if (t) return t;
  let r = it(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || `<unknown>`
    : n || `<unknown>`;
}
function ot(e, t, n) {
  let r = (e.exception = e.exception || {}),
    i = (r.values = r.values || []),
    a = (i[0] = i[0] || {});
  (a.value ||= t || ``), (a.type ||= n || `Error`);
}
function st(e, t) {
  let n = it(e);
  if (!n) return;
  let r = { type: `generic`, handled: !0 },
    i = n.mechanism;
  if (((n.mechanism = { ...r, ...i, ...t }), t && `data` in t)) {
    let e = { ...i?.data, ...t.data };
    n.mechanism.data = e;
  }
}
function ct(e) {
  if (lt(e)) return !0;
  try {
    A(e, `__sentry_captured__`, !0);
  } catch {}
  return !1;
}
function lt(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
var ut = 1e3;
function dt() {
  return Fe() / ut;
}
function ft() {
  let { performance: e } = t;
  if (!e?.now || !e.timeOrigin) return dt;
  let n = e.timeOrigin;
  return () => (n + Ne(() => e.now())) / ut;
}
var pt;
function j() {
  return (pt ??= ft())();
}
var mt = null;
function ht() {
  let { performance: e } = t;
  if (!e?.now) return;
  let n = 3e5,
    r = Ne(() => e.now()),
    i = Fe(),
    a = e.timeOrigin;
  if (typeof a == `number` && Math.abs(a + r - i) < n) return a;
  let o = e.timing?.navigationStart;
  return typeof o == `number` && Math.abs(o + r - i) < n ? o : i - r;
}
function M() {
  return mt === null && (mt = ht()), mt;
}
function gt(e) {
  let t = j(),
    n = {
      sid: rt(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: `ok`,
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => yt(n),
    };
  return e && _t(n, e), n;
}
function _t(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did &&
        !t.did &&
        (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || j()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : rt()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == `number` && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == `number`) e.duration = t.duration;
  else {
    let t = e.timestamp - e.started;
    e.duration = t >= 0 ? t : 0;
  }
  t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == `number` && (e.errors = t.errors),
    t.status && (e.status = t.status);
}
function vt(e, t) {
  let n = {};
  t ? (n = { status: t }) : e.status === `ok` && (n = { status: `exited` }),
    _t(e, n);
}
function yt(e) {
  return {
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == `number` || typeof e.did == `string`
        ? `${e.did}`
        : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  };
}
function bt(e, t, n = 2) {
  if (!t || typeof t != `object` || n <= 0) return t;
  if (e && Object.keys(t).length === 0) return e;
  let r = { ...e };
  for (let e in t)
    Object.prototype.hasOwnProperty.call(t, e) &&
      (r[e] = bt(r[e], t[e], n - 1));
  return r;
}
function xt() {
  return rt();
}
function St() {
  return rt().substring(16);
}
function Ct(e) {
  try {
    let n = t.WeakRef;
    if (typeof n == `function`) return new n(e);
  } catch {}
  return e;
}
function wt(e) {
  if (e) {
    if (typeof e == `object` && `deref` in e && typeof e.deref == `function`)
      try {
        return e.deref();
      } catch {
        return;
      }
    return e;
  }
}
var Tt = `_sentrySpan`;
function Et(e, t) {
  t ? A(e, Tt, Ct(t)) : delete e[Tt];
}
function Dt(e) {
  return wt(e[Tt]);
}
var Ot = 100,
  kt = class t {
    constructor() {
      (this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._attributes = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = { traceId: xt(), sampleRand: Pe() });
    }
    clone() {
      let e = new t();
      return (
        (e._breadcrumbs = [...this._breadcrumbs]),
        (e._tags = { ...this._tags }),
        (e._attributes = { ...this._attributes }),
        (e._extra = { ...this._extra }),
        (e._contexts = { ...this._contexts }),
        this._contexts.flags &&
          (e._contexts.flags = { values: [...this._contexts.flags.values] }),
        (e._user = this._user),
        (e._level = this._level),
        (e._session = this._session),
        (e._transactionName = this._transactionName),
        (e._fingerprint = this._fingerprint),
        (e._eventProcessors = [...this._eventProcessors]),
        (e._attachments = [...this._attachments]),
        (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
        (e._propagationContext = { ...this._propagationContext }),
        (e._client = this._client),
        (e._lastEventId = this._lastEventId),
        (e._conversationId = this._conversationId),
        Et(e, Dt(this)),
        e
      );
    }
    setClient(e) {
      this._client = e;
    }
    setLastEventId(e) {
      this._lastEventId = e;
    }
    getClient() {
      return this._client;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addScopeListener(e) {
      this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
      return this._eventProcessors.push(e), this;
    }
    setUser(e) {
      return (
        (this._user = e || {
          email: void 0,
          id: void 0,
          ip_address: void 0,
          username: void 0,
        }),
        this._session && _t(this._session, { user: e }),
        this._notifyScopeListeners(),
        this
      );
    }
    getUser() {
      return this._user;
    }
    setConversationId(e) {
      return (
        (this._conversationId = e || void 0), this._notifyScopeListeners(), this
      );
    }
    setTags(e) {
      return (
        (this._tags = { ...this._tags, ...e }),
        this._notifyScopeListeners(),
        this
      );
    }
    setTag(e, t) {
      return this.setTags({ [e]: t });
    }
    setAttributes(e) {
      return (
        (this._attributes = { ...this._attributes, ...e }),
        this._notifyScopeListeners(),
        this
      );
    }
    setAttribute(e, t) {
      return this.setAttributes({ [e]: t });
    }
    removeAttribute(e) {
      return (
        e in this._attributes &&
          (delete this._attributes[e], this._notifyScopeListeners()),
        this
      );
    }
    setExtras(e) {
      return (
        (this._extra = { ...this._extra, ...e }),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtra(e, t) {
      return (
        (this._extra = { ...this._extra, [e]: t }),
        this._notifyScopeListeners(),
        this
      );
    }
    setFingerprint(e) {
      return (this._fingerprint = e), this._notifyScopeListeners(), this;
    }
    setLevel(e) {
      return (this._level = e), this._notifyScopeListeners(), this;
    }
    setTransactionName(e) {
      return (this._transactionName = e), this._notifyScopeListeners(), this;
    }
    setContext(e, t) {
      return (
        t === null ? delete this._contexts[e] : (this._contexts[e] = t),
        this._notifyScopeListeners(),
        this
      );
    }
    setSession(e) {
      return (
        e ? (this._session = e) : delete this._session,
        this._notifyScopeListeners(),
        this
      );
    }
    getSession() {
      return this._session;
    }
    update(e) {
      if (!e) return this;
      let n = typeof e == `function` ? e(this) : e,
        {
          tags: r,
          attributes: i,
          extra: a,
          user: o,
          contexts: s,
          level: c,
          fingerprint: l = [],
          propagationContext: u,
          conversationId: d,
        } = (n instanceof t ? n.getScopeData() : ye(n) ? e : void 0) || {};
      return (
        (this._tags = { ...this._tags, ...r }),
        (this._attributes = { ...this._attributes, ...i }),
        (this._extra = { ...this._extra, ...a }),
        (this._contexts = { ...this._contexts, ...s }),
        o && Object.keys(o).length && (this._user = o),
        c && (this._level = c),
        l.length && (this._fingerprint = l),
        u && (this._propagationContext = u),
        d && (this._conversationId = d),
        this
      );
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._attributes = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._session = void 0),
        (this._conversationId = void 0),
        Et(this, void 0),
        (this._attachments = []),
        this.setPropagationContext({ traceId: xt(), sampleRand: Pe() }),
        this._notifyScopeListeners(),
        this
      );
    }
    addBreadcrumb(e, t) {
      let n = typeof t == `number` ? t : Ot;
      if (n <= 0) return this;
      let r = {
        timestamp: dt(),
        ...e,
        message: e.message ? Xe(e.message, 2048) : e.message,
      };
      return (
        this._breadcrumbs.push(r),
        this._breadcrumbs.length > n &&
          ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
          this._client?.recordDroppedEvent(`buffer_overflow`, `log_item`)),
        this._notifyScopeListeners(),
        this
      );
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
    }
    addAttachment(e) {
      return this._attachments.push(e), this;
    }
    clearAttachments() {
      return (this._attachments = []), this;
    }
    getScopeData() {
      return {
        breadcrumbs: this._breadcrumbs,
        attachments: this._attachments,
        contexts: this._contexts,
        tags: this._tags,
        attributes: this._attributes,
        extra: this._extra,
        user: this._user,
        level: this._level,
        fingerprint: this._fingerprint || [],
        eventProcessors: this._eventProcessors,
        propagationContext: this._propagationContext,
        sdkProcessingMetadata: this._sdkProcessingMetadata,
        transactionName: this._transactionName,
        span: Dt(this),
        conversationId: this._conversationId,
      };
    }
    setSDKProcessingMetadata(e) {
      return (
        (this._sdkProcessingMetadata = bt(this._sdkProcessingMetadata, e, 2)),
        this
      );
    }
    setPropagationContext(e) {
      return (this._propagationContext = e), this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(t, n) {
      let r = n?.event_id || rt();
      if (!this._client)
        return (
          e &&
            v.warn(
              `No client configured on scope - will not capture exception!`
            ),
          r
        );
      let i = Error(`Sentry syntheticException`);
      return (
        this._client.captureException(
          t,
          { originalException: t, syntheticException: i, ...n, event_id: r },
          this
        ),
        r
      );
    }
    captureMessage(t, n, r) {
      let i = r?.event_id || rt();
      if (!this._client)
        return (
          e &&
            v.warn(`No client configured on scope - will not capture message!`),
          i
        );
      let a = r?.syntheticException ?? Error(t);
      return (
        this._client.captureMessage(
          t,
          n,
          { originalException: t, syntheticException: a, ...r, event_id: i },
          this
        ),
        i
      );
    }
    captureEvent(t, n) {
      let r = t.event_id || n?.event_id || rt();
      return this._client
        ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r)
        : (e &&
            v.warn(`No client configured on scope - will not capture event!`),
          r);
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||=
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((e) => {
          e(this);
        }),
        !1);
    }
  };
function At() {
  return a(`defaultCurrentScope`, () => new kt());
}
function jt() {
  return a(`defaultIsolationScope`, () => new kt());
}
var Mt = (e) => e instanceof Promise && !e[Nt],
  Nt = Symbol(`chained PromiseLike`),
  Pt = (e, t, n) => {
    let r = e.then(
      (e) => (t(e), e),
      (e) => {
        throw (n(e), e);
      }
    );
    return Mt(r) && Mt(e) ? r : Ft(e, r);
  },
  Ft = (e, t) => {
    if (!t) return e;
    let n = !1;
    for (let r in e) {
      if (r in t) continue;
      n = !0;
      let i = e[r];
      typeof i == `function`
        ? Object.defineProperty(t, r, {
            value: (...t) => i.apply(e, t),
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[r] = i);
    }
    return n && Object.assign(t, { [Nt]: !0 }), t;
  },
  It = class {
    constructor(e, t) {
      let n;
      n = e || new kt();
      let r;
      (r = t || new kt()),
        (this._stack = [{ scope: n }]),
        (this._isolationScope = r);
    }
    withScope(e) {
      let t = this._pushScope(),
        n;
      try {
        n = e(t);
      } catch (e) {
        throw (this._popScope(), e);
      }
      return Ce(n)
        ? Pt(
            n,
            () => this._popScope(),
            () => this._popScope()
          )
        : (this._popScope(), n);
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    _pushScope() {
      let e = this.getScope().clone();
      return this._stack.push({ client: this.getClient(), scope: e }), e;
    }
    _popScope() {
      return this._stack.length <= 1 ? !1 : !!this._stack.pop();
    }
  };
function Lt() {
  let e = i(r());
  return (e.stack = e.stack || new It(At(), jt()));
}
function Rt(e) {
  return Lt().withScope(e);
}
function zt(e, t) {
  let n = Lt();
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function Bt(e) {
  return Lt().withScope(() => e(Lt().getIsolationScope()));
}
function Vt() {
  return {
    withIsolationScope: Bt,
    withScope: Rt,
    withSetScope: zt,
    withSetIsolationScope: (e, t) => Bt(t),
    getCurrentScope: () => Lt().getScope(),
    getIsolationScope: () => Lt().getIsolationScope(),
  };
}
function Ht(e) {
  let t = i(e);
  return t.acs ? t.acs : Vt();
}
function Ut(e) {
  return (
    typeof e == `object` &&
    !!e &&
    !Array.isArray(e) &&
    Object.keys(e).includes(`value`)
  );
}
function Wt(e, t) {
  let { value: n, unit: r } = Ut(e) ? e : { value: e, unit: void 0 },
    i = Kt(n),
    a = r && typeof r == `string` ? { unit: r } : {};
  if (i) return { ...i, ...a };
  if (!t || (t === `skip-undefined` && n === void 0)) return;
  let o = ``;
  try {
    o = JSON.stringify(n) ?? ``;
  } catch {}
  return { value: o, type: `string`, ...a };
}
function Gt(e, t = !1) {
  let n = {};
  for (let [r, i] of Object.entries(e ?? {})) {
    let e = Wt(i, t);
    e && (n[r] = e);
  }
  return n;
}
function Kt(e) {
  if (Array.isArray(e)) return { value: e, type: `array` };
  let t =
    typeof e == `string`
      ? `string`
      : typeof e == `boolean`
      ? `boolean`
      : typeof e == `number` && !Number.isNaN(e)
      ? Number.isInteger(e)
        ? `integer`
        : `double`
      : null;
  if (t) return { value: e, type: t };
}
var qt;
function Jt() {
  return qt?.();
}
function Yt() {
  return qt !== void 0;
}
function N() {
  return Ht(r()).getCurrentScope();
}
function P() {
  return Ht(r()).getIsolationScope();
}
function Xt() {
  return a(`globalScope`, () => new kt());
}
function Zt(...e) {
  let t = Ht(r());
  if (e.length === 2) {
    let [n, r] = e;
    return n ? t.withSetScope(n, r) : t.withScope(r);
  }
  return t.withScope(e[0]);
}
function F() {
  return N().getClient();
}
function Qt(e) {
  let t = Jt();
  if (t) return { trace_id: t.traceId, span_id: t.spanId };
  let {
      traceId: n,
      parentSpanId: r,
      propagationSpanId: i,
    } = e.getPropagationContext(),
    a = { trace_id: n, span_id: i || St() };
  return r && (a.parent_span_id = r), a;
}
var $t = `sentry.source`,
  en = `sentry.sample_rate`,
  tn = `sentry.previous_trace_sample_rate`,
  nn = `sentry.op`,
  I = `sentry.origin`,
  rn = `sentry.idle_span_finish_reason`,
  an = `sentry.measurement_unit`,
  on = `sentry.measurement_value`,
  sn = `sentry.custom_span_name`,
  cn = `sentry.profile_id`,
  ln = `sentry.exclusive_time`,
  un = `sentry.link.type`,
  dn = `gen_ai.conversation.id`;
function fn(e) {
  if (e < 400 && e >= 100) return { code: 1 };
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return { code: 2, message: `unauthenticated` };
      case 403:
        return { code: 2, message: `permission_denied` };
      case 404:
        return { code: 2, message: `not_found` };
      case 409:
        return { code: 2, message: `already_exists` };
      case 413:
        return { code: 2, message: `failed_precondition` };
      case 429:
        return { code: 2, message: `resource_exhausted` };
      case 499:
        return { code: 2, message: `cancelled` };
      default:
        return { code: 2, message: `invalid_argument` };
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return { code: 2, message: `unimplemented` };
      case 503:
        return { code: 2, message: `unavailable` };
      case 504:
        return { code: 2, message: `deadline_exceeded` };
      default:
        return { code: 2, message: `internal_error` };
    }
  return { code: 2, message: `internal_error` };
}
function pn(e, t) {
  e.setAttribute(`http.response.status_code`, t);
  let n = fn(t);
  n.message !== `unknown_error` && e.setStatus(n);
}
var mn = `_sentryScope`,
  hn = `_sentryIsolationScope`,
  gn = Symbol.for(`sentry.otelSourceInference`),
  _n = Symbol.for(`sentry.otelSourceExplicitlySet`),
  vn = Symbol.for(`sentry.tracerProviderSpan`);
function yn(e, t, n) {
  e && (A(e, hn, Ct(n)), A(e, mn, t));
}
function bn(e) {
  let t = e;
  return { scope: t[mn], isolationScope: wt(t[hn]) };
}
function xn(e) {
  return e[gn] === !0;
}
function Sn(e) {
  A(e, _n, !0);
}
function Cn(e) {
  return e[vn] === !0;
}
var wn = `sentry-`;
function Tn(e) {
  let t = Dn(e);
  if (!t) return;
  let n = Object.entries(t).reduce((e, [t, n]) => {
    if (t.startsWith(`sentry-`)) {
      let r = t.slice(7);
      e[r] = n;
    }
    return e;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function En(e) {
  if (e)
    return kn(
      Object.entries(e).reduce(
        (e, [t, n]) => (n && (e[`${wn}${t}`] = n), e),
        {}
      )
    );
}
function Dn(e) {
  if (!(!e || (!ge(e) && !Array.isArray(e))))
    return Array.isArray(e)
      ? e.reduce((e, t) => {
          let n = On(t);
          return (
            Object.entries(n).forEach(([t, n]) => {
              e[t] = n;
            }),
            e
          );
        }, {})
      : On(e);
}
function On(e) {
  return e
    .split(`,`)
    .map((e) => {
      let t = e.indexOf(`=`);
      return t === -1
        ? []
        : [e.slice(0, t), e.slice(t + 1)].map((e) => {
            try {
              return decodeURIComponent(e.trim());
            } catch {
              return;
            }
          });
    })
    .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
}
function kn(t) {
  if (Object.keys(t).length !== 0)
    return Object.entries(t).reduce((t, [n, r], i) => {
      let a = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
        o = i === 0 ? a : `${t},${a}`;
      return o.length > 8192
        ? (e &&
            v.warn(
              `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`
            ),
          t)
        : o;
    }, ``);
}
var An = /^o(\d+)\./,
  jn =
    /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function Mn(e) {
  return e === `http` || e === `https`;
}
function Nn(e, t = !1) {
  let {
    host: n,
    path: r,
    pass: i,
    port: a,
    projectId: o,
    protocol: s,
    publicKey: c,
  } = e;
  return `${s}://${c}${t && i ? `:${i}` : ``}@${n}${a ? `:${a}` : ``}/${
    r && `${r}/`
  }${o}`;
}
function Pn(e) {
  let t = jn.exec(e);
  if (!t) {
    l(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  let [n, r, i = ``, a = ``, o = ``, s = ``] = t.slice(1),
    c = ``,
    u = s,
    d = u.split(`/`);
  if ((d.length > 1 && ((c = d.slice(0, -1).join(`/`)), (u = d.pop())), u)) {
    let e = u.match(/^\d+/);
    e && (u = e[0]);
  }
  return Fn({
    host: a,
    pass: i,
    path: c,
    projectId: u,
    port: o,
    protocol: n,
    publicKey: r,
  });
}
function Fn(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || ``,
    pass: e.pass || ``,
    host: e.host,
    port: e.port || ``,
    path: e.path || ``,
    projectId: e.projectId,
  };
}
function In(t) {
  if (!e) return !0;
  let { port: n, projectId: r, protocol: i } = t;
  return [`protocol`, `publicKey`, `host`, `projectId`].find((e) =>
    t[e] ? !1 : (v.error(`Invalid Sentry Dsn: ${e} missing`), !0)
  )
    ? !1
    : r.match(/^\d+$/)
    ? Mn(i)
      ? n && isNaN(parseInt(n, 10))
        ? (v.error(`Invalid Sentry Dsn: Invalid port ${n}`), !1)
        : !0
      : (v.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1)
    : (v.error(`Invalid Sentry Dsn: Invalid projectId ${r}`), !1);
}
function Ln(e) {
  return e.match(An)?.[1];
}
function Rn(e) {
  let t = e.getOptions(),
    { host: n } = e.getDsn() || {},
    r;
  return t.orgId ? (r = String(t.orgId)) : n && (r = Ln(n)), r;
}
function zn(e) {
  let t = typeof e == `string` ? Pn(e) : Fn(e);
  if (!(!t || !In(t))) return t;
}
function Bn(e) {
  if (typeof e == `boolean`) return Number(e);
  let t = typeof e == `string` ? parseFloat(e) : e;
  if (!(typeof t != `number` || isNaN(t) || t < 0 || t > 1)) return t;
}
var Vn = RegExp(`^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$`);
function Hn(e) {
  if (!e) return;
  let t = e.match(Vn);
  if (!t) return;
  let n;
  return (
    t[3] === `1` ? (n = !0) : t[3] === `0` && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function Un(e, t) {
  let n = Hn(e),
    r = Tn(t);
  if (!n?.traceId) return { traceId: xt(), sampleRand: Pe() };
  let i = Kn(n, r);
  r && (r.sample_rand = i.toString());
  let { traceId: a, parentSpanId: o, parentSampled: s } = n;
  return {
    traceId: a,
    parentSpanId: o,
    sampled: s,
    dsc: r || {},
    sampleRand: i,
  };
}
function Wn(e = xt(), t = St(), n) {
  let r = ``;
  return n !== void 0 && (r = n ? `-1` : `-0`), `${e}-${t}${r}`;
}
function Gn(e = xt(), t = St(), n) {
  return `00-${e}-${t}-${n ? `01` : `00`}`;
}
function Kn(e, t) {
  let n = Bn(t?.sample_rand);
  if (n !== void 0) return n;
  let r = Bn(t?.sample_rate);
  return r && e?.parentSampled !== void 0
    ? e.parentSampled
      ? Pe() * r
      : r + Pe() * (1 - r)
    : Pe();
}
var qn = !1;
function Jn(e) {
  let { spanId: t, traceId: n } = e.spanContext(),
    {
      data: r,
      op: i,
      parent_span_id: a,
      status: o,
      origin: s,
      links: c,
    } = L(e);
  return {
    parent_span_id: a,
    span_id: t,
    trace_id: n,
    data: r,
    op: i,
    status: o,
    origin: s,
    links: c,
  };
}
function Yn(e) {
  let { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
    i = r ? t : L(e).parent_span_id,
    a = bn(e).scope;
  return {
    parent_span_id: i,
    span_id: r ? a?.getPropagationContext().propagationSpanId || St() : t,
    trace_id: n,
  };
}
function Xn(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return Wn(t, n, sr(e));
}
function Zn(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return Gn(t, n, sr(e));
}
function Qn(e) {
  if (e && e.length > 0)
    return e.map(
      ({
        context: { spanId: e, traceId: t, traceFlags: n, ...r },
        attributes: i,
      }) => ({ span_id: e, trace_id: t, sampled: n === 1, attributes: i, ...r })
    );
}
function $n(e) {
  if (e?.length)
    return e.map(
      ({
        context: { spanId: e, traceId: t, traceFlags: n },
        attributes: r,
      }) => ({ span_id: e, trace_id: t, sampled: n === 1, attributes: r })
    );
}
function er(e) {
  return typeof e == `number`
    ? tr(e)
    : Array.isArray(e)
    ? e[0] + e[1] / 1e9
    : e instanceof Date
    ? tr(e.getTime())
    : j();
}
function tr(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function L(e) {
  if (or(e)) return e.getSpanJSON();
  let { spanId: t, traceId: n } = e.spanContext();
  if (ar(e)) {
    let {
      attributes: r,
      startTime: i,
      name: a,
      endTime: o,
      status: s,
      links: c,
    } = e;
    return {
      span_id: t,
      trace_id: n,
      data: r,
      description: a,
      parent_span_id: rr(e),
      start_timestamp: er(i),
      timestamp: er(o) || void 0,
      status: cr(s),
      op: r[nn],
      origin: r[I],
      links: Qn(c),
    };
  }
  return { span_id: t, trace_id: n, start_timestamp: 0, data: {} };
}
function nr(e) {
  if (or(e)) return e.getStreamedSpanJSON();
  let { spanId: t, traceId: n } = e.spanContext();
  if (ar(e)) {
    let {
      attributes: r,
      startTime: i,
      name: a,
      endTime: o,
      status: s,
      links: c,
    } = e;
    return {
      name: a,
      span_id: t,
      trace_id: n,
      parent_span_id: rr(e),
      start_timestamp: er(i),
      end_timestamp: er(o),
      is_segment: e === gr(e),
      status: lr(s),
      attributes: ur(r, s),
      links: $n(c),
    };
  }
  return {
    span_id: t,
    trace_id: n,
    start_timestamp: 0,
    name: ``,
    end_timestamp: 0,
    status: `ok`,
    is_segment: e === gr(e),
  };
}
function rr(e) {
  return `parentSpanId` in e
    ? e.parentSpanId
    : `parentSpanContext` in e
    ? e.parentSpanContext?.spanId
    : void 0;
}
function ir(e) {
  return {
    ...e,
    attributes: Gt(e.attributes),
    links: e.links?.map((e) => ({ ...e, attributes: Gt(e.attributes) })),
  };
}
function ar(e) {
  let t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function or(e) {
  return typeof e.getSpanJSON == `function`;
}
function sr(e) {
  let { traceFlags: t } = e.spanContext();
  return t === 1;
}
function cr(e) {
  if (!(!e || e.code === 0))
    return e.code === 1 ? `ok` : e.message || `internal_error`;
}
function lr(e) {
  return !e || e.code === 1 || e.code === 0 || e.message === `cancelled`
    ? `ok`
    : `error`;
}
function ur(e, t) {
  let n = lr(t) === `error` ? t?.message : void 0;
  return { ...(n && { "sentry.status.message": n }), ...e };
}
var dr = `_sentryChildSpans`,
  fr = `_sentryRootSpan`;
function pr(e, t) {
  A(t, fr, e[fr] || e), e[dr] ? e[dr].add(t) : A(e, dr, new Set([t]));
}
function mr(e, t) {
  e[dr] && e[dr].delete(t);
}
function hr(e) {
  let t = new Set();
  function n(e) {
    if (!t.has(e) && sr(e)) {
      t.add(e);
      let r = e[dr] ? Array.from(e[dr]) : [];
      for (let e of r) n(e);
    }
  }
  return n(e), Array.from(t);
}
var R = gr;
function gr(e) {
  return e[fr] || e;
}
function z() {
  let e = Ht(r());
  return e.getActiveSpan ? e.getActiveSpan() : Dt(N());
}
function _r() {
  qn ||=
    (l(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
      );
    }),
    !0);
}
var vr = !1;
function yr() {
  if (vr) return;
  function t() {
    let t = z(),
      n = t && R(t);
    if (n) {
      let t = `internal_error`;
      e && v.log(`[Tracing] Root span: ${t} -> Global error occurred`),
        n.setStatus({ code: 2, message: t });
    }
  }
  (vr = !0), ae(t), ce(t);
}
function br(e) {
  if (typeof __SENTRY_TRACING__ == `boolean` && !__SENTRY_TRACING__) return !1;
  let t = e || F()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function xr(e) {
  v.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function Sr(t, n) {
  if (!n?.length) return !1;
  for (let r of n) {
    if (Tr(r)) {
      if (t.description && Qe(t.description, r)) return e && xr(t), !0;
      continue;
    }
    let n = !!r.attributes && Object.keys(r.attributes).length > 0;
    if (!r.name && !r.op && !n) continue;
    let i = !r.name || (t.description && Qe(t.description, r.name)),
      a = !r.op || (t.op && Qe(t.op, r.op)),
      o =
        !r.attributes ||
        Object.entries(r.attributes).every(([e, n]) =>
          Cr(t.attributes?.[e], n)
        );
    if (i && a && o) return e && xr(t), !0;
  }
  return !1;
}
function Cr(e, t) {
  return typeof e == `string` && (typeof t == `string` || t instanceof RegExp)
    ? Qe(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((e, n) => e === t[n])
    : e === t;
}
function wr(e, t) {
  let n = t.parent_span_id,
    r = t.span_id;
  if (n) for (let t of e) t.parent_span_id === r && (t.parent_span_id = n);
}
function Tr(e) {
  return typeof e == `string` || e instanceof RegExp;
}
var Er = Symbol.for(`sentry.nonRecordingSpan`),
  Dr = class {
    constructor(e = {}) {
      (this._traceId = e.traceId || xt()),
        (this._spanId = e.spanId || St()),
        (this.dropReason = e.dropReason),
        A(this, Er, !0);
    }
    spanContext() {
      return { spanId: this._spanId, traceId: this._traceId, traceFlags: 0 };
    }
    end(e) {}
    setAttribute(e, t) {
      return this;
    }
    setAttributes(e) {
      return this;
    }
    setStatus(e) {
      return this;
    }
    updateName(e) {
      return this;
    }
    isRecording() {
      return !1;
    }
    addEvent(e, t, n) {
      return this;
    }
    addLink(e) {
      return this;
    }
    addLinks(e) {
      return this;
    }
    recordException(e, t) {}
  };
function Or(e) {
  return !!e && e[Er] === !0;
}
var kr = `production`,
  Ar = `_frozenDsc`;
function jr(e, t) {
  A(e, Ar, t);
}
function Mr(e, t) {
  let n = t.getOptions(),
    { publicKey: r } = t.getDsn() || {},
    i = {
      environment: n.environment || `production`,
      release: n.release,
      public_key: r,
      trace_id: e,
      org_id: Rn(t),
    };
  return t.emit(`createDsc`, i), i;
}
function Nr(e, t) {
  let n = t.getPropagationContext();
  return n.dsc || Mr(n.traceId, e);
}
function Pr(e) {
  let t = F();
  if (!t) return {};
  let n = R(e),
    r = L(n),
    i = r.data,
    a = n.spanContext().traceState,
    o =
      a?.get(`sentry.sample_rate`) ??
      i[`sentry.sample_rate`] ??
      i[`sentry.previous_trace_sample_rate`];
  function s(e) {
    return (
      (typeof o == `number` || typeof o == `string`) &&
        (e.sample_rate = `${o}`),
      e
    );
  }
  let c = n[Ar];
  if (c) return s(c);
  let l = Or(n),
    u = l && n.dropReason === `ignored`;
  if (l && (!br(t.getOptions()) || u)) {
    let e = bn(n).scope;
    if (e) {
      let n = { ...Nr(t, e) };
      return u && (n.sampled = `false`), s(n);
    }
  }
  let d = a?.get(`sentry.dsc`),
    f = d && Tn(d);
  if (f) return s(f);
  let p = Mr(e.spanContext().traceId, t),
    m = i[`sentry.source`] ?? i[`sentry.segment.name.source`],
    h = r.description;
  return (
    m !== `url` && h && (p.transaction = h),
    br() &&
      ((p.sampled = String(sr(n))),
      (p.sample_rand =
        a?.get(`sentry.sample_rand`) ??
        bn(n).scope?.getPropagationContext().sampleRand.toString())),
    s(p),
    t.emit(`createDsc`, p, n),
    p
  );
}
function Fr(e) {
  return !!e && typeof e == `function` && `_streamed` in e && !!e._streamed;
}
function Ir(e, t = []) {
  return [e, t];
}
function Lr(e, t) {
  let [n, r] = e;
  return [n, [...r, t]];
}
function Rr(e, t) {
  let n = e[1];
  for (let e of n) {
    let n = e[0].type;
    if (t(e, n)) return !0;
  }
  return !1;
}
function zr(e, t) {
  return Rr(e, (e, n) => t.includes(n));
}
function Br(e) {
  let n = i(t);
  return n.encodePolyfill ? n.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Vr(e) {
  let [t, n] = e,
    r = JSON.stringify(t);
  function i(e) {
    typeof r == `string`
      ? (r = typeof e == `string` ? r + e : [Br(r), e])
      : r.push(typeof e == `string` ? Br(e) : e);
  }
  for (let e of n) {
    let [t, n] = e;
    if (
      (i(`
${JSON.stringify(t)}
`),
      typeof n == `string` || n instanceof Uint8Array)
    )
      i(n);
    else {
      let e;
      try {
        e = JSON.stringify(n);
      } catch {
        e = JSON.stringify(He(n));
      }
      i(e);
    }
  }
  return typeof r == `string` ? r : Hr(r);
}
function Hr(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) n.set(t, r), (r += t.length);
  return n;
}
function Ur(e) {
  return [{ type: `span` }, e];
}
function Wr(e) {
  let t = typeof e.data == `string` ? Br(e.data) : e.data;
  return [
    {
      type: `attachment`,
      length: t.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    },
    t,
  ];
}
var Gr = {
  sessions: `session`,
  event: `error`,
  client_report: `internal`,
  user_report: `default`,
  profile_chunk: `profile`,
  replay_event: `replay`,
  replay_recording: `replay`,
  check_in: `monitor`,
  raw_security: `security`,
  log: `log_item`,
  trace_metric: `metric`,
};
function Kr(e) {
  return e in Gr;
}
function qr(e) {
  return Kr(e) ? Gr[e] : e;
}
function Jr(e) {
  if (!e?.sdk) return;
  let { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function Yr(e, t, n, r) {
  let i = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date(Fe()).toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: Nn(r) }),
    ...(i && { trace: i }),
  };
}
function Xr(e, t) {
  if (!t) return e;
  let n = e.sdk || {};
  return (
    (e.sdk = {
      ...n,
      name: n.name || t.name,
      version: n.version || t.version,
      integrations: [...(e.sdk?.integrations || []), ...(t.integrations || [])],
      packages: [...(e.sdk?.packages || []), ...(t.packages || [])],
      settings:
        e.sdk?.settings || t.settings
          ? { ...e.sdk?.settings, ...t.settings }
          : void 0,
    }),
    e
  );
}
function Zr(e, t, n, r) {
  let i = Jr(n);
  return Ir(
    {
      sent_at: new Date(Fe()).toISOString(),
      ...(i && { sdk: i }),
      ...(!!r && t && { dsn: Nn(t) }),
    },
    [
      `aggregates` in e
        ? [{ type: `sessions` }, e]
        : [{ type: `session` }, e.toJSON()],
    ]
  );
}
function Qr(e, t, n, r) {
  let i = Jr(n),
    a = e.type && e.type !== `replay_event` ? e.type : `event`;
  Xr(e, n?.sdk);
  let o = Yr(e, i, r, t);
  return delete e.sdkProcessingMetadata, Ir(o, [[{ type: a }, e]]);
}
function $r(e, t) {
  function n(e) {
    return !!e.trace_id && !!e.public_key;
  }
  let r = Pr(e[0]),
    i = t?.getDsn(),
    a = t?.getOptions().tunnel,
    o = {
      sent_at: new Date(Fe()).toISOString(),
      ...(n(r) && { trace: r }),
      ...(!!a && i && { dsn: Nn(i) }),
    },
    { beforeSendSpan: s, ignoreSpans: c } = t?.getOptions() || {},
    l = c?.length
      ? e.filter((e) => {
          let t = L(e);
          return !Sr(
            { description: t.description, op: t.op, attributes: t.data },
            c
          );
        })
      : e,
    u = e.length - l.length;
  u && t?.recordDroppedEvent(`before_send`, `span`, u);
  let d = s
      ? (e) => {
          let t = L(e);
          return (Fr(s) ? t : s(t)) || (_r(), t);
        }
      : L,
    f = [];
  for (let e of l) {
    let t = d(e);
    t && f.push(Ur(t));
  }
  return Ir(o, f);
}
function ei(t) {
  if (!e) return;
  let {
      description: n = `< unknown name >`,
      op: r = `< unknown op >`,
      parent_span_id: i,
    } = L(t),
    { spanId: a } = t.spanContext(),
    o = sr(t),
    s = R(t),
    c = s === t,
    l = `[Tracing] Starting ${o ? `sampled` : `unsampled`} ${
      c ? `root ` : ``
    }span`,
    u = [`op: ${r}`, `name: ${n}`, `ID: ${a}`];
  if ((i && u.push(`parent ID: ${i}`), !c)) {
    let { op: e, description: t } = L(s);
    u.push(`root ID: ${s.spanContext().spanId}`),
      e && u.push(`root op: ${e}`),
      t && u.push(`root description: ${t}`);
  }
  v.log(`${l}
  ${u.join(`
  `)}`);
}
function ti(t) {
  if (!e) return;
  let { description: n = `< unknown name >`, op: r = `< unknown op >` } = L(t),
    { spanId: i } = t.spanContext(),
    a = `[Tracing] Finishing "${r}" ${
      R(t) === t ? `root ` : ``
    }span "${n}" with ID ${i}`;
  v.log(a);
}
function ni(t, n, r, i = z()) {
  let a = i && R(i);
  a &&
    (e &&
      v.log(`[Measurement] Setting measurement on root span: ${t} = ${n} ${r}`),
    a.addEvent(t, { [on]: n, [an]: r }));
}
function ri(e) {
  if (!e || e.length === 0) return;
  let t = {};
  return (
    e.forEach((e) => {
      let n = e.attributes || {},
        r = n[an],
        i = n[on];
      typeof r == `string` &&
        typeof i == `number` &&
        (t[e.name] = { value: i, unit: r });
    }),
    t
  );
}
function ii() {
  return i(r()).segmentSpanCaptureStrategy;
}
function ai(e) {
  return e.getOptions().traceLifecycle === `stream`;
}
var oi = 1e3,
  si = class {
    constructor(e = {}) {
      (this._traceId = e.traceId || xt()),
        (this._spanId = e.spanId || St()),
        (this._startTime = e.startTimestamp || j()),
        (this._links = e.links),
        (this._attributes = {}),
        this.setAttributes({ [I]: `manual`, [nn]: e.op, ...e.attributes }),
        (this._name = e.name),
        e.parentSpanId && (this._parentSpanId = e.parentSpanId),
        `sampled` in e && (this._sampled = e.sampled),
        e.endTimestamp && (this._endTime = e.endTimestamp),
        (this._events = []),
        (this._isStandaloneSpan = e.isStandalone),
        this._endTime && this._onSpanEnded();
    }
    addLink(e) {
      return (
        this._frozen ||
          (this._links ? this._links.push(e) : (this._links = [e])),
        this
      );
    }
    addLinks(e) {
      return (
        this._frozen ||
          (this._links ? this._links.push(...e) : (this._links = e)),
        this
      );
    }
    recordException(e, t) {}
    spanContext() {
      let { _spanId: e, _traceId: t, _sampled: n } = this;
      return { spanId: e, traceId: t, traceFlags: +!!n };
    }
    setAttribute(e, t) {
      return this._frozen
        ? this
        : (t === void 0
            ? delete this._attributes[e]
            : (this._attributes[e] = t),
          e === `sentry.source` && t !== void 0 && xn(this) && Sn(this),
          this);
    }
    setAttributes(e) {
      return Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this;
    }
    updateStartTime(e) {
      this._frozen || (this._startTime = er(e));
    }
    setStatus(e) {
      return this._frozen || (this._status = e), this;
    }
    updateName(e) {
      return this._frozen
        ? this
        : ((this._name = e), xn(this) || this.setAttribute($t, `custom`), this);
    }
    end(e) {
      if (this._endTime) {
        this._frozen = Cn(this);
        return;
      }
      (this._endTime = er(e)),
        ti(this),
        this._onSpanEnded(),
        (this._frozen = Cn(this));
    }
    getSpanJSON() {
      return {
        data: this._attributes,
        description: this._name,
        op: this._attributes[nn],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: cr(this._status),
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[I],
        profile_id: this._attributes[cn],
        exclusive_time: this._attributes[ln],
        measurements: ri(this._events),
        is_segment: (this._isStandaloneSpan && R(this) === this) || void 0,
        segment_id: this._isStandaloneSpan
          ? R(this).spanContext().spanId
          : void 0,
        links: Qn(this._links),
      };
    }
    getStreamedSpanJSON() {
      return {
        name: this._name ?? ``,
        span_id: this._spanId,
        trace_id: this._traceId,
        parent_span_id: this._parentSpanId,
        start_timestamp: this._startTime,
        end_timestamp: this._endTime ?? this._startTime,
        is_segment: this._isStandaloneSpan || this === R(this),
        status: lr(this._status),
        attributes: ur(this._attributes, this._status),
        links: $n(this._links),
      };
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    addEvent(t, n, r) {
      if (this._frozen) return this;
      e && v.log(`[Tracing] Adding an event to span:`, t);
      let i = ci(n) ? n : r || j(),
        a = ci(n) ? {} : n || {},
        o = { name: t, time: er(i), attributes: a };
      return this._events.push(o), this;
    }
    isStandaloneSpan() {
      return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
      let t = F();
      t &&
        (t.emit(`spanEnd`, this),
        this._isStandaloneSpan || t.emit(`afterSpanEnd`, this));
      let n = R(this),
        r = this._isStandaloneSpan || this === n;
      if (this._isStandaloneSpan) {
        this._sampled
          ? di($r([this], t))
          : (e &&
              v.log(
                `[Tracing] Discarding standalone span because its trace was not chosen to be sampled.`
              ),
            t && t.recordDroppedEvent(`sample_rate`, `span`));
        return;
      }
      if (!r) {
        let e = ii();
        if (e) {
          let t = bn(this).scope || N();
          e.onChildSpanEnded(
            this,
            n,
            (e) => this._convertSpanToTransaction(e),
            t
          );
        }
        return;
      }
      if (t && ai(t)) {
        t.emit(`afterSegmentSpanEnd`, this);
        return;
      }
      let i = bn(this).scope || N(),
        a = ii();
      if (a) a.onSegmentSpanEnded((e) => this._convertSpanToTransaction(e), i);
      else {
        let e = this._convertSpanToTransaction();
        e && i.captureEvent(e);
      }
    }
    _convertSpanToTransaction(t = {}) {
      if (!li(L(this))) return;
      this._name ||=
        (e &&
          v.warn(
            "Transaction has no name, falling back to `<unlabeled transaction>`."
          ),
        `<unlabeled transaction>`);
      let { scope: n, isolationScope: r } = bn(this),
        i = n?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
      if (this._sampled !== !0) return;
      t.onSpanCaptured?.(this);
      let a = [];
      for (let e of hr(this)) {
        if (e === this || ui(e) || t.isSpanAlreadyCaptured?.(e)) continue;
        let n = L(e);
        li(n) && (t.onSpanCaptured?.(e), a.push(n));
      }
      let o = this._attributes[$t];
      delete this._attributes[sn];
      let s = !1;
      a.forEach((e) => {
        delete e.data[sn], e.op?.startsWith(`gen_ai.`) && (s = !0);
      });
      let c = {
          contexts: { trace: Jn(this) },
          spans:
            a.length > oi
              ? a
                  .sort((e, t) => e.start_timestamp - t.start_timestamp)
                  .slice(0, oi)
              : a,
          start_timestamp: this._startTime,
          timestamp: this._endTime,
          transaction: this._name,
          type: `transaction`,
          sdkProcessingMetadata: {
            capturedSpanScope: n,
            capturedSpanIsolationScope: r,
            dynamicSamplingContext: Pr(this),
            hasGenAiSpans: s,
          },
          request: i,
          ...(o && { transaction_info: { source: o } }),
        },
        l = ri(this._events);
      return (
        l &&
          Object.keys(l).length &&
          (e &&
            v.log(
              `[Measurements] Adding measurements to transaction event`,
              JSON.stringify(l, void 0, 2)
            ),
          (c.measurements = l)),
        c
      );
    }
  };
function ci(e) {
  return (e && typeof e == `number`) || e instanceof Date || Array.isArray(e);
}
function li(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function ui(e) {
  return e instanceof si && e.isStandaloneSpan();
}
function di(e) {
  let t = F();
  if (!t) return;
  let n = e[1];
  if (!n || n.length === 0) {
    t.recordDroppedEvent(`before_send`, `span`);
    return;
  }
  t.sendEnvelope(e);
}
function fi(t, n, r) {
  if (!br(t)) return [!1];
  let i, a;
  typeof t.tracesSampler == `function`
    ? ((a = t.tracesSampler({
        ...n,
        inheritOrSampleWith: (e) =>
          typeof n.parentSampleRate == `number`
            ? n.parentSampleRate
            : typeof n.parentSampled == `boolean`
            ? Number(n.parentSampled)
            : e,
      })),
      (i = !0))
    : n.parentSampled === void 0
    ? t.tracesSampleRate !== void 0 && ((a = t.tracesSampleRate), (i = !0))
    : (a = n.parentSampled);
  let o = Bn(a);
  if (o === void 0)
    return (
      e &&
        v.warn(
          `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
            a
          )} of type ${JSON.stringify(typeof a)}.`
        ),
      [!1]
    );
  if (!o)
    return (
      e &&
        v.log(
          `[Tracing] Discarding transaction because ${
            typeof t.tracesSampler == `function`
              ? `tracesSampler returned 0 or false`
              : `a negative sampling decision was inherited or tracesSampleRate is set to 0`
          }`
        ),
      [!1, o, i]
    );
  let s = r < o;
  return (
    s ||
      (e &&
        v.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
            a
          )})`
        )),
    [s, o, i]
  );
}
var pi = `__SENTRY_SUPPRESS_TRACING__`;
function mi(e) {
  let t = xi();
  return t.startInactiveSpan ? t.startInactiveSpan(e) : hi(e);
}
function hi(e) {
  let t = bi(e),
    { forceTransaction: n, parentSpan: r } = e;
  return (
    e.scope
      ? (t) => Zt(e.scope, t)
      : r === void 0
      ? (e) => e()
      : (e) => gi(r, e)
  )(() => {
    let i = N(),
      a = wi(i, r),
      o = F();
    return e.onlyIfParent && !a
      ? vi(i, o)
      : yi({ parentSpan: a, spanArguments: t, forceTransaction: n, scope: i });
  });
}
function gi(e, t) {
  let n = xi();
  return n.withActiveSpan
    ? n.withActiveSpan(e, t)
    : Zt((n) => (Et(n, e || void 0), t(n)));
}
function _i(e = N()) {
  let t = xi();
  return t.isTracingSuppressed
    ? t.isTracingSuppressed(e)
    : e.getScopeData().sdkProcessingMetadata[pi] === !0;
}
function vi(e, t) {
  t?.recordDroppedEvent(`no_parent_span`, `span`);
  let n = new Dr({ traceId: e.getPropagationContext().traceId });
  return yn(n, e, P()), n;
}
function yi({
  parentSpan: e,
  spanArguments: t,
  forceTransaction: n,
  scope: r,
}) {
  let i = P();
  if (!br()) {
    let t = { ...i.getPropagationContext(), ...r.getPropagationContext() },
      a = new Dr({ traceId: e ? e.spanContext().traceId : t.traceId });
    return e && !n && pr(e, a), yn(a, r, i), a;
  }
  let a = F();
  if (Ti(a, t)) {
    _i(r) || a?.recordDroppedEvent(`ignored`, `span`);
    let t = new Dr({
      dropReason: `ignored`,
      traceId: e?.spanContext().traceId ?? r.getPropagationContext().traceId,
    });
    return e && !n && pr(e, t), yn(t, r, i), t;
  }
  let o;
  if (e && !n) (o = Ci(e, r, t, i)), pr(e, o);
  else if (e) {
    let n = Pr(e),
      { traceId: a, spanId: s } = e.spanContext(),
      c = sr(e);
    (o = Si({ traceId: a, parentSpanId: s, ...t }, r, i, c)), jr(o, n);
  } else {
    let {
      traceId: e,
      dsc: n,
      parentSpanId: a,
      sampled: s,
    } = { ...i.getPropagationContext(), ...r.getPropagationContext() };
    (o = Si({ traceId: e, parentSpanId: a, ...t }, r, i, s)), n && jr(o, n);
  }
  return ei(o), o;
}
function bi(e) {
  let t = { isStandalone: (e.experimental || {}).standalone, ...e };
  if (e.startTime) {
    let n = { ...t };
    return (n.startTimestamp = er(e.startTime)), delete n.startTime, n;
  }
  return t;
}
function xi() {
  return Ht(r());
}
function Si(t, n, r, i) {
  let a = F(),
    o = a?.getOptions() || {},
    { name: s = `` } = t,
    c = { spanAttributes: { ...t.attributes }, spanName: s, parentSampled: i };
  a?.emit(`beforeSampling`, c, { decision: !1 });
  let l = c.parentSampled ?? i,
    u = c.spanAttributes,
    d = n.getPropagationContext(),
    f = _i(n),
    [p, m, h] = f
      ? [!1]
      : fi(
          o,
          {
            name: s,
            parentSampled: l,
            attributes: u,
            normalizedRequest:
              r.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampleRate: Bn(d.dsc?.sample_rate),
          },
          d.sampleRand
        ),
    g = new si({
      ...t,
      attributes: {
        [$t]: `custom`,
        [en]: m !== void 0 && h ? m : void 0,
        ...u,
      },
      sampled: p,
    });
  return (
    !p &&
      a &&
      !f &&
      (e &&
        v.log(
          `[Tracing] Discarding root span because its trace was not chosen to be sampled.`
        ),
      a.recordDroppedEvent(`sample_rate`, ai(a) ? `span` : `transaction`)),
    yn(g, n, r),
    a && a.emit(`spanStart`, g),
    g
  );
}
function Ci(e, t, n, r) {
  let { spanId: i, traceId: a } = e.spanContext(),
    o = _i(t),
    s = !o && sr(e),
    c = s
      ? new si({ ...n, parentSpanId: i, traceId: a, sampled: s })
      : new Dr({ traceId: a });
  pr(e, c), yn(c, t, r);
  let l = F();
  return l
    ? (ai(l) &&
        Or(c) &&
        (Or(e) && e.dropReason
          ? ((c.dropReason = e.dropReason),
            l.recordDroppedEvent(e.dropReason, `span`))
          : o ||
            ((c.dropReason = `sample_rate`),
            l.recordDroppedEvent(`sample_rate`, `span`))),
      l.emit(`spanStart`, c),
      n.endTimestamp && (l.emit(`spanEnd`, c), l.emit(`afterSpanEnd`, c)),
      c)
    : c;
}
function wi(e, t) {
  if (t) return t;
  if (t === null) return;
  let n = Dt(e);
  if (!n) return;
  let r = F();
  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? R(n) : n;
}
function Ti(e, t) {
  let n = e?.getOptions().ignoreSpans;
  return !e || !ai(e) || !n?.length
    ? !1
    : Sr(
        {
          description: t.name || ``,
          op: t.attributes?.[`sentry.op`] || t.op,
          attributes: t.attributes,
        },
        n
      );
}
function Ei(e) {
  return Or(e) && e.dropReason === `ignored`;
}
var Di = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 },
  Oi = `heartbeatFailed`,
  ki = `idleTimeout`,
  Ai = `finalTimeout`,
  ji = `externalFinish`;
function Mi(t, n = {}) {
  let r = new Map(),
    i = !1,
    a,
    o = ji,
    s = !n.disableAutoFinish,
    c = [],
    {
      idleTimeout: l = Di.idleTimeout,
      finalTimeout: u = Di.finalTimeout,
      childSpanTimeout: d = Di.childSpanTimeout,
      beforeSpanEnd: f,
      trimIdleSpanEndTimestamp: p = !0,
    } = n,
    m = F(),
    h = N();
  if (!m || !br()) {
    let e = new Dr({ traceId: h.getPropagationContext().traceId });
    return yn(e, h, P()), e;
  }
  let g = z(),
    _ = Ni(t);
  _.end = new Proxy(_.end, {
    apply(e, t, n) {
      if ((f && f(_), Or(t))) return;
      let [r, ...i] = n,
        a = er(r || j()),
        o = hr(_).filter((e) => e !== _),
        s = L(_);
      if (!o.length || !p) return w(a), Reflect.apply(e, t, [a, ...i]);
      let c = m.getOptions().ignoreSpans,
        l = o?.reduce((e, t) => {
          let n = L(t);
          return !n.timestamp ||
            (c &&
              Sr(
                { description: n.description, op: n.op, attributes: n.data },
                c
              ))
            ? e
            : e
            ? Math.max(e, n.timestamp)
            : n.timestamp;
        }, void 0),
        d = s.start_timestamp,
        h = Math.min(
          d ? d + u / 1e3 : 1 / 0,
          Math.max(d || -1 / 0, Math.min(a, l || 1 / 0))
        );
      return w(h), Reflect.apply(e, t, [h, ...i]);
    },
  });
  function y() {
    a &&= (clearTimeout(a), void 0);
  }
  function b(e) {
    y(),
      (a = setTimeout(() => {
        !i && r.size === 0 && s && ((o = ki), _.end(e));
      }, l));
  }
  function x(e) {
    a = setTimeout(() => {
      !i && s && ((o = Oi), _.end(e));
    }, d);
  }
  function S(e) {
    y(), r.set(e, !0), x(j() + d / 1e3);
  }
  function C(e) {
    r.has(e) && r.delete(e), r.size === 0 && b(j() + l / 1e3);
  }
  function w(t) {
    (i = !0), r.clear(), c.forEach((e) => e()), Et(h, g);
    let n = L(_),
      { start_timestamp: a } = n;
    if (!a) return;
    n.data[`sentry.idle_span_finish_reason`] || _.setAttribute(rn, o);
    let s = n.status;
    (!s || s === `unknown`) && _.setStatus({ code: 1 }),
      v.log(`[Tracing] Idle span "${n.op}" finished`);
    let d = hr(_).filter((e) => e !== _),
      f = 0;
    d.forEach((n) => {
      n.isRecording() &&
        (n.setStatus({ code: 2, message: `cancelled` }),
        n.end(t),
        e &&
          v.log(
            `[Tracing] Cancelling span since span ended early`,
            JSON.stringify(n, void 0, 2)
          ));
      let { timestamp: r = 0, start_timestamp: i = 0 } = L(n),
        a = i <= t,
        o = (u + l) / 1e3,
        s = r - i <= o;
      if (e) {
        let e = JSON.stringify(n, void 0, 2);
        a
          ? s ||
            v.log(
              `[Tracing] Discarding span since it finished after idle span final timeout`,
              e
            )
          : v.log(
              `[Tracing] Discarding span since it happened after idle span was finished`,
              e
            );
      }
      (!s || !a) && (mr(_, n), f++);
    }),
      f > 0 && _.setAttribute(`sentry.idle_span_discarded_spans`, f);
  }
  return (
    c.push(
      m.on(`spanStart`, (e) => {
        i ||
          e === _ ||
          L(e).timestamp ||
          (e instanceof si && e.isStandaloneSpan()) ||
          (hr(_).includes(e) && S(e.spanContext().spanId));
      })
    ),
    c.push(
      m.on(`spanEnd`, (e) => {
        i || C(e.spanContext().spanId);
      })
    ),
    c.push(
      m.on(`idleSpanEnableAutoFinish`, (e) => {
        e === _ && ((s = !0), b(), r.size && x());
      })
    ),
    n.disableAutoFinish || b(),
    setTimeout(() => {
      i ||
        (_.setStatus({ code: 2, message: `deadline_exceeded` }),
        (o = Ai),
        _.end());
    }, u),
    _
  );
}
function Ni(t) {
  let n = mi(t);
  return Et(N(), n), e && v.log(`[Tracing] Started span is an idle span`), n;
}
function Pi(e, t, n) {
  let r,
    i,
    a,
    o = n?.maxWait ? Math.max(n.maxWait, t) : 0,
    s = n?.setTimeoutImpl || setTimeout;
  function c() {
    return l(), (r = e()), r;
  }
  function l() {
    i !== void 0 && clearTimeout(i),
      a !== void 0 && clearTimeout(a),
      (i = a = void 0);
  }
  function u() {
    return i !== void 0 || a !== void 0 ? c() : r;
  }
  function d() {
    return (
      i && clearTimeout(i), (i = s(c, t)), o && a === void 0 && (a = s(c, o)), r
    );
  }
  return (d.cancel = l), (d.flush = u), d;
}
function Fi(e, t) {
  let { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: a } = t;
  zi(e, t), r && Hi(e, r), Ui(e, n), Bi(e, i), Vi(e, a);
}
function Ii(e, t) {
  let {
    extra: n,
    tags: r,
    attributes: i,
    user: a,
    contexts: o,
    level: s,
    sdkProcessingMetadata: c,
    breadcrumbs: l,
    fingerprint: u,
    eventProcessors: d,
    attachments: f,
    propagationContext: p,
    transactionName: m,
    span: h,
  } = t;
  Li(e, `extra`, n),
    Li(e, `tags`, r),
    Li(e, `attributes`, i),
    Li(e, `user`, a),
    Li(e, `contexts`, o),
    (e.sdkProcessingMetadata = bt(e.sdkProcessingMetadata, c, 2)),
    s && (e.level = s),
    m && (e.transactionName = m),
    h && (e.span = h),
    l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]),
    u.length && (e.fingerprint = [...e.fingerprint, ...u]),
    d.length && (e.eventProcessors = [...e.eventProcessors, ...d]),
    f.length && (e.attachments = [...e.attachments, ...f]),
    (e.propagationContext = { ...e.propagationContext, ...p });
}
function Li(e, t, n) {
  e[t] = bt(e[t], n, 1);
}
function Ri(e, t) {
  let n = Xt().getScopeData();
  return e && Ii(n, e.getScopeData()), t && Ii(n, t.getScopeData()), n;
}
function zi(e, t) {
  let {
    extra: n,
    tags: r,
    user: i,
    contexts: a,
    level: o,
    transactionName: s,
  } = t;
  Object.keys(n).length && (e.extra = { ...n, ...e.extra }),
    Object.keys(r).length && (e.tags = { ...r, ...e.tags }),
    Object.keys(i).length && (e.user = { ...i, ...e.user }),
    Object.keys(a).length && (e.contexts = { ...a, ...e.contexts }),
    o && (e.level = o),
    s && e.type !== `transaction` && (e.transaction = s);
}
function Bi(e, t) {
  let n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function Vi(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function Hi(e, t) {
  (e.contexts = { trace: Yn(t), ...e.contexts }),
    (e.sdkProcessingMetadata = {
      dynamicSamplingContext: Pr(t),
      ...e.sdkProcessingMetadata,
    });
  let n = L(R(t)).description;
  n && !e.transaction && e.type === `transaction` && (e.transaction = n);
}
function Ui(e, t) {
  (e.fingerprint = e.fingerprint
    ? Array.isArray(e.fingerprint)
      ? e.fingerprint
      : [e.fingerprint]
    : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint.length || delete e.fingerprint;
}
var Wi = `http.url`,
  Gi = `navigation.route.id`,
  Ki = `params`,
  qi = `sentry.segment.name`,
  Ji = `sentry.transaction`,
  Yi = `url.full`,
  Xi = `url.path.parameter`,
  Zi = `url.template`;
function Qi(e, t) {
  let n = (e.attributes ??= {});
  Object.entries(t).forEach(([e, t]) => {
    t != null && !(e in n) && (n[e] = t);
  });
}
var $i = 0,
  ea = 1,
  ta = 2;
function na(e) {
  return new ia((t) => {
    t(e);
  });
}
function ra(e) {
  return new ia((t, n) => {
    n(e);
  });
}
var ia = class e {
  constructor(e) {
    (this._state = $i), (this._handlers = []), this._runExecutor(e);
  }
  then(t, n) {
    return new e((e, r) => {
      this._handlers.push([
        !1,
        (n) => {
          if (!t) e(n);
          else
            try {
              e(t(n));
            } catch (e) {
              r(e);
            }
        },
        (t) => {
          if (!n) r(t);
          else
            try {
              e(n(t));
            } catch (e) {
              r(e);
            }
        },
      ]),
        this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((e) => e, e);
  }
  finally(t) {
    return new e((e, n) => {
      let r, i;
      return this.then(
        (e) => {
          (i = !1), (r = e), t && t();
        },
        (e) => {
          (i = !0), (r = e), t && t();
        }
      ).then(() => {
        if (i) {
          n(r);
          return;
        }
        e(r);
      });
    });
  }
  _executeHandlers() {
    if (this._state === $i) return;
    let e = this._handlers.slice();
    (this._handlers = []),
      e.forEach((e) => {
        e[0] ||=
          (this._state === ea && e[1](this._value),
          this._state === ta && e[2](this._value),
          !0);
      });
  }
  _runExecutor(e) {
    let t = (e, t) => {
        if (this._state === $i) {
          if (Ce(t)) {
            t.then(n, r);
            return;
          }
          (this._state = e), (this._value = t), this._executeHandlers();
        }
      },
      n = (e) => {
        t(ea, e);
      },
      r = (e) => {
        t(ta, e);
      };
    try {
      e(n, r);
    } catch (e) {
      r(e);
    }
  }
};
function aa(e, t, n, r = 0) {
  try {
    let i = oa(t, n, e, r);
    return Ce(i) ? i : na(i);
  } catch (e) {
    return ra(e);
  }
}
function oa(t, n, r, i) {
  let a = r[i];
  if (!t || !a) return t;
  let o = a({ ...t }, n);
  return (
    e && o === null && v.log(`Event processor "${a.id || `?`}" dropped event`),
    Ce(o) ? o.then((e) => oa(e, n, r, i + 1)) : oa(o, n, r, i + 1)
  );
}
var sa, ca, la, ua;
function da(e) {
  let n = t._sentryDebugIds,
    r = t._debugIds;
  if (!n && !r) return {};
  let i = n ? Object.keys(n) : [],
    a = r ? Object.keys(r) : [];
  if (ua && i.length === ca && a.length === la) return ua;
  (ca = i.length), (la = a.length), (ua = {}), (sa ||= {});
  let o = (t, n) => {
    for (let r of t) {
      let t = n[r],
        i = sa?.[r];
      if (i && ua && t) (ua[i[0]] = t), sa && (sa[r] = [i[0], t]);
      else if (t) {
        let n = e(r);
        for (let e = n.length - 1; e >= 0; e--) {
          let i = n[e]?.filename;
          if (i && ua && sa) {
            (ua[i] = t), (sa[r] = [i, t]);
            break;
          }
        }
      }
    }
  };
  return n && o(i, n), r && o(a, r), ua;
}
function fa(e, t, n, r, i, a) {
  let { normalizeDepth: o = 3, normalizeMaxBreadth: s = 1e3 } = e,
    c = {
      ...t,
      event_id: t.event_id || n.event_id || rt(),
      timestamp: t.timestamp || dt(),
    },
    l = n.integrations || e.integrations.map((e) => e.name);
  pa(c, e),
    ga(c, l),
    i && i.emit(`applyFrameMetadata`, t),
    t.type === void 0 && ma(c, e.stackParser);
  let u = va(r, n.captureContext);
  n.mechanism && st(c, n.mechanism);
  let d = i ? i.getEventProcessors() : [],
    f = Ri(a, u),
    p = [...(n.attachments || []), ...f.attachments];
  p.length && (n.attachments = p), Fi(c, f);
  let m = [...d, ...f.eventProcessors];
  return (n.data && n.data.__sentry__ === !0 ? na(c) : aa(m, c, n)).then(
    (e) => (e && ha(e), typeof o == `number` && o > 0 ? _a(e, o, s) : e)
  );
}
function pa(e, t) {
  let { environment: n, release: r, dist: i, maxValueLength: a } = t;
  (e.environment = e.environment || n || `production`),
    !e.release && r && (e.release = r),
    !e.dist && i && (e.dist = i);
  let o = e.request;
  o?.url && a && (o.url = Xe(o.url, a)),
    a &&
      e.exception?.values?.forEach((e) => {
        e.value &&= Xe(e.value, a);
      });
}
function ma(e, t) {
  let n = da(t);
  e.exception?.values?.forEach((e) => {
    e.stacktrace?.frames?.forEach((e) => {
      e.filename && (e.debug_id = n[e.filename]);
    });
  });
}
function ha(e) {
  let t = {};
  if (
    (e.exception?.values?.forEach((e) => {
      e.stacktrace?.frames?.forEach((e) => {
        e.debug_id &&
          (e.abs_path
            ? (t[e.abs_path] = e.debug_id)
            : e.filename && (t[e.filename] = e.debug_id),
          delete e.debug_id);
      });
    }),
    Object.keys(t).length === 0)
  )
    return;
  (e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []);
  let n = e.debug_meta.images;
  Object.entries(t).forEach(([e, t]) => {
    n.push({ type: `sourcemap`, code_file: e, debug_id: t });
  });
}
function ga(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function _a(e, t, n) {
  if (!e) return null;
  let r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((e) => ({
        ...e,
        ...(e.data && { data: He(e.data, t, n) }),
      })),
    }),
    ...(e.user && { user: He(e.user, t, n) }),
    ...(e.contexts && { contexts: He(e.contexts, t, n) }),
    ...(e.extra && { extra: He(e.extra, t, n) }),
  };
  return (
    e.contexts?.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (r.contexts.trace.data = He(e.contexts.trace.data, t, n))),
    e.spans &&
      (r.spans = e.spans.map((e) => ({
        ...e,
        ...(e.data && { data: He(e.data, t, n) }),
      }))),
    e.contexts?.flags &&
      r.contexts &&
      (r.contexts.flags = He(e.contexts.flags, 3, n)),
    r
  );
}
function va(e, t) {
  if (!t) return e;
  let n = e ? e.clone() : new kt();
  return n.update(t), n;
}
function ya(e) {
  if (e) return ba(e) || Sa(e) ? { captureContext: e } : e;
}
function ba(e) {
  return e instanceof kt || typeof e == `function`;
}
var xa = [
  `user`,
  `level`,
  `extra`,
  `contexts`,
  `tags`,
  `fingerprint`,
  `propagationContext`,
];
function Sa(e) {
  return Object.keys(e).some((e) => xa.includes(e));
}
function Ca(e, t) {
  return N().captureException(e, ya(t));
}
function wa(e, t) {
  let n = typeof t == `string` ? t : void 0,
    r = typeof t == `string` ? void 0 : { captureContext: t };
  return N().captureMessage(e, n, r);
}
function Ta(e, t) {
  return N().captureEvent(e, t);
}
function Ea(e, t) {
  P().setContext(e, t);
}
function Da(e, t) {
  P().setTag(e, t);
}
function Oa(e) {
  P().setUser(e);
}
function ka() {
  let e = F();
  return e?.getOptions().enabled !== !1 && !!e?.getTransport();
}
function Aa(e) {
  P().addEventProcessor(e);
}
function ja(e) {
  let n = P(),
    { user: r } = Ri(n, N()),
    { userAgent: i } = t.navigator || {},
    a = gt({ user: r, ...(i && { userAgent: i }), ...e }),
    o = n.getSession();
  return (
    o?.status === `ok` && _t(o, { status: `exited` }), Ma(), n.setSession(a), a
  );
}
function Ma() {
  let e = P(),
    t = N().getSession() || e.getSession();
  t && vt(t), Na(), e.setSession();
}
function Na() {
  let e = P(),
    t = F(),
    n = e.getSession();
  n && t && t.captureSession(n);
}
function Pa(e = !1) {
  if (e) {
    Ma();
    return;
  }
  Na();
}
function Fa(e) {
  return typeof e == `object` && typeof e.unref == `function` && e.unref(), e;
}
function Ia(e) {
  let t = e.protocol ? `${e.protocol}:` : ``,
    n = e.port ? `:${e.port}` : ``;
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ``}/api/`;
}
function La(e) {
  return `${Ia(e)}${e.projectId}/envelope/`;
}
function Ra(e, t) {
  let n = { sentry_version: `7` };
  return (
    e.publicKey && (n.sentry_key = e.publicKey),
    t && (n.sentry_client = `${t.name}/${t.version}`),
    new URLSearchParams(n).toString()
  );
}
function za(e, t, n) {
  return t || `${La(e)}?${Ra(e, n)}`;
}
var Ba = [];
function Va(e) {
  let t = {};
  return (
    e.forEach((e) => {
      let { name: n } = e,
        r = t[n];
      (r && !r.isDefaultInstance && e.isDefaultInstance) || (t[n] = e);
    }),
    Object.values(t)
  );
}
function Ha(e) {
  let t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((e) => {
    e.isDefaultInstance = !0;
  });
  let r;
  if (Array.isArray(n)) r = [...t, ...n];
  else if (typeof n == `function`) {
    let e = n(t);
    r = Array.isArray(e) ? e : [e];
  } else r = t;
  return Va(r);
}
function Ua(e, t) {
  let n = {};
  return (
    t.forEach((t) => {
      t?.beforeSetup && t.beforeSetup(e);
    }),
    t.forEach((t) => {
      t && Ga(e, t, n);
    }),
    n
  );
}
function Wa(e, t) {
  for (let n of t) n?.afterAllSetup && n.afterAllSetup(e);
}
function Ga(t, n, r) {
  if (r[n.name]) {
    e &&
      v.log(`Integration skipped because it was already installed: ${n.name}`);
    return;
  }
  if (
    ((r[n.name] = n),
    !Ba.includes(n.name) &&
      typeof n.setupOnce == `function` &&
      (n.setupOnce(), Ba.push(n.name)),
    n.setup && typeof n.setup == `function` && n.setup(t),
    typeof n.preprocessEvent == `function`)
  ) {
    let e = n.preprocessEvent.bind(n);
    t.on(`preprocessEvent`, (n, r) => e(n, r, t));
  }
  if (typeof n.processEvent == `function`) {
    let e = n.processEvent.bind(n),
      r = Object.assign((n, r) => e(n, r, t), { id: n.name });
    t.addEventProcessor(r);
  }
  [`processSpan`, `processSegmentSpan`].forEach((e) => {
    let r = n[e];
    typeof r == `function` && t.on(e, (e) => r.call(n, e, t));
  }),
    e && v.log(`Integration installed: ${n.name}`);
}
function B(e) {
  return e;
}
function Ka() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < `u` && !!__SENTRY_BROWSER_BUNDLE__;
}
function qa() {
  return `npm`;
}
function Ja() {
  return (
    !Ka() &&
    Object.prototype.toString.call(typeof process < `u` ? process : 0) ===
      `[object process]`
  );
}
function Ya() {
  return typeof window < `u` && (!Ja() || Xa());
}
function Xa() {
  return t.process?.type === `renderer`;
}
function Za(e, t) {
  let n = t ? `auto` : `never`;
  return [
    {
      type: `log`,
      item_count: e.length,
      content_type: `application/vnd.sentry.items.log+json`,
    },
    {
      version: 2,
      ...(Ya() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Qa(e, t, n, r, i) {
  let a = {};
  return (
    t?.sdk && (a.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (a.dsn = Nn(r)),
    Ir(a, [Za(e, i)])
  );
}
function $a(e, t) {
  let n = t ?? eo(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = Qa(
      n,
      r._metadata,
      r.tunnel,
      e.getDsn(),
      e.getDataCollectionOptions().userInfo
    );
  to().set(e, []), e.emit(`flushLogs`), e.sendEnvelope(i);
}
function eo(e) {
  return to().get(e);
}
function to() {
  return a(`clientToLogBufferMap`, () => new WeakMap());
}
function no(e, t) {
  let n = t ? `auto` : `never`;
  return [
    {
      type: `trace_metric`,
      item_count: e.length,
      content_type: `application/vnd.sentry.items.trace-metric+json`,
    },
    {
      version: 2,
      ...(Ya() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function ro(e, t, n, r, i) {
  let a = {};
  return (
    t?.sdk && (a.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (a.dsn = Nn(r)),
    Ir(a, [no(e, i)])
  );
}
function io(e, t) {
  let n = t ?? ao(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = ro(
      n,
      r._metadata,
      r.tunnel,
      e.getDsn(),
      e.getDataCollectionOptions().userInfo
    );
  oo().set(e, []), e.emit(`flushMetrics`), e.sendEnvelope(i);
}
function ao(e) {
  return oo().get(e);
}
function oo() {
  return a(`clientToMetricBufferMap`, () => new WeakMap());
}
function so(e) {
  return ir({
    trace_id: e.trace_id,
    span_id: e.span_id,
    parent_span_id: e.parent_span_id,
    name: e.description || ``,
    start_timestamp: e.start_timestamp,
    end_timestamp: e.timestamp || e.start_timestamp,
    status:
      !e.status || e.status === `ok` || e.status === `cancelled`
        ? `ok`
        : `error`,
    is_segment: !1,
    attributes: { ...e.data },
    links: e.links,
  });
}
function co(e, t) {
  if (
    e.type !== `transaction` ||
    !e.spans?.length ||
    !e.sdkProcessingMetadata?.hasGenAiSpans ||
    t.getOptions().streamGenAiSpans === !1 ||
    ai(t)
  )
    return;
  let n = [],
    r = [];
  for (let t of e.spans)
    t.op?.startsWith(`gen_ai.`) ? n.push(so(t)) : r.push(t);
  if (n.length === 0) return;
  e.spans = r;
  let i = t.getDataCollectionOptions().userInfo ? `auto` : `never`;
  return [
    {
      type: `span`,
      item_count: n.length,
      content_type: `application/vnd.sentry.items.span.v2+json`,
    },
    {
      version: 2,
      ...(Ya() && { ingest_settings: { infer_ip: i, infer_user_agent: i } }),
      items: n,
    },
  ];
}
var lo = Symbol.for(`SentryBufferFullError`);
function uo(e = 100) {
  let t = new Set();
  function n() {
    return t.size < e;
  }
  function r(e) {
    t.delete(e);
  }
  function i(e) {
    if (!n()) return ra(lo);
    let i = e();
    return (
      t.add(i),
      i.then(
        () => r(i),
        () => r(i)
      ),
      i
    );
  }
  function a(e) {
    if (!t.size) return na(!0);
    let n = Promise.allSettled(Array.from(t)).then(() => !0);
    if (!e) return n;
    let r = [n, new Promise((t) => Fa(setTimeout(() => t(!1), e)))];
    return Promise.race(r);
  }
  return {
    get $() {
      return Array.from(t);
    },
    add: i,
    drain: a,
  };
}
var fo = 60 * 1e3;
function po(e, t = Fe()) {
  let n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  let r = Date.parse(`${e}`);
  return isNaN(r) ? fo : r - t;
}
function mo(e, t) {
  return e[t] || e.all || 0;
}
function ho(e, t, n = Fe()) {
  return mo(e, t) > n;
}
function go(e, { statusCode: t, headers: n }, r = Fe()) {
  let i = { ...e },
    a = n?.[`x-sentry-rate-limits`],
    o = n?.[`retry-after`];
  if (a)
    for (let e of a.trim().split(`,`)) {
      let [t, n, , , a] = e.split(`:`, 5),
        o = parseInt(t, 10),
        s = (isNaN(o) ? 60 : o) * 1e3;
      if (!n) i.all = r + s;
      else
        for (let e of n.split(`;`))
          e === `metric_bucket`
            ? (!a || a.split(`;`).includes(`custom`)) && (i[e] = r + s)
            : (i[e] = r + s);
    }
  else o ? (i.all = r + po(o, r)) : t === 429 && (i.all = r + 60 * 1e3);
  return i;
}
function _o(t, n, r = uo(t.bufferSize || 64)) {
  let i = {},
    a = (e) => r.drain(e);
  function o(a) {
    let o = [];
    if (
      (Rr(a, (e, n) => {
        let r = qr(n);
        ho(i, r) ? t.recordDroppedEvent(`ratelimit_backoff`, r) : o.push(e);
      }),
      o.length === 0)
    )
      return Promise.resolve({});
    let s = Ir(a[0], o),
      c = (n) => {
        if (zr(s, [`client_report`])) {
          e &&
            v.warn(
              `Dropping client report. Will not send outcomes (reason: ${n}).`
            );
          return;
        }
        Rr(s, (e, r) => {
          t.recordDroppedEvent(n, qr(r));
        });
      };
    return r
      .add(() =>
        n({ body: Vr(s) }).then(
          (t) =>
            t.statusCode === 413
              ? (e &&
                  v.error(
                    `Sentry responded with status code 413. Envelope was discarded due to exceeding size limits.`
                  ),
                c(`send_error`),
                t)
              : (e &&
                  t.statusCode !== void 0 &&
                  (t.statusCode < 200 || t.statusCode >= 300) &&
                  v.warn(
                    `Sentry responded with status code ${t.statusCode} to sent event.`
                  ),
                (i = go(i, t)),
                t),
          (t) => {
            throw (
              (c(`network_error`),
              e && v.error(`Encountered error running transport request:`, t),
              t)
            );
          }
        )
      )
      .then(
        (e) => e,
        (t) => {
          if (t === lo)
            return (
              e && v.error(`Skipped sending event because buffer is full.`),
              c(`queue_overflow`),
              Promise.resolve({})
            );
          throw t;
        }
      );
  }
  return { send: o, flush: a };
}
function vo(e, t, n) {
  let r = [
    { type: `client_report` },
    { timestamp: n || dt(), discarded_events: e },
  ];
  return Ir(t ? { dsn: t } : {}, [r]);
}
function yo(e) {
  let t = [];
  e.message && t.push(e.message);
  try {
    let n = e.exception.values[e.exception.values.length - 1];
    n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
  } catch {}
  return t;
}
function bo(e) {
  let {
    trace_id: t,
    parent_span_id: n,
    span_id: r,
    status: i,
    origin: a,
    data: o,
    op: s,
  } = e.contexts?.trace ?? {};
  return {
    data: o ?? {},
    description: e.transaction,
    op: s,
    parent_span_id: n,
    span_id: r ?? ``,
    start_timestamp: e.start_timestamp ?? 0,
    status: i,
    timestamp: e.timestamp,
    trace_id: t ?? ``,
    origin: a,
    profile_id: o?.[cn],
    exclusive_time: o?.[ln],
    measurements: e.measurements,
    is_segment: !0,
  };
}
function xo(e) {
  return {
    type: `transaction`,
    timestamp: e.timestamp,
    start_timestamp: e.start_timestamp,
    transaction: e.description,
    contexts: {
      trace: {
        trace_id: e.trace_id,
        span_id: e.span_id,
        parent_span_id: e.parent_span_id,
        op: e.op,
        status: e.status,
        origin: e.origin,
        data: {
          ...e.data,
          ...(e.profile_id && { "sentry.profile_id": e.profile_id }),
          ...(e.exclusive_time && {
            "sentry.exclusive_time": e.exclusive_time,
          }),
        },
      },
    },
    measurements: e.measurements,
  };
}
var So = [`forwarded`, `-ip`, `remote-`, `via`, `-user`];
function Co(e) {
  return e === !0
    ? {
        userInfo: !0,
        cookies: !0,
        httpHeaders: { request: !0, response: !0 },
        httpBodies: [
          `incomingRequest`,
          `outgoingRequest`,
          `incomingResponse`,
          `outgoingResponse`,
        ],
        urlQueryParams: !0,
        graphQL: { document: !0, variables: !0 },
        genAI: { inputs: !0, outputs: !0 },
        databaseQueryData: !0,
        stackFrameVariables: !0,
        frameContextLines: 7,
      }
    : {
        userInfo: !1,
        cookies: { deny: So },
        httpHeaders: { request: { deny: So }, response: { deny: So } },
        httpBodies: [],
        urlQueryParams: { deny: So },
        graphQL: { document: !0, variables: !0 },
        genAI: { inputs: !1, outputs: !1 },
        databaseQueryData: !1,
        stackFrameVariables: !0,
        frameContextLines: 7,
      };
}
var wo = {
  userInfo: !0,
  cookies: !0,
  httpHeaders: { request: !0, response: !0 },
  httpBodies: [
    `incomingRequest`,
    `outgoingRequest`,
    `incomingResponse`,
    `outgoingResponse`,
  ],
  urlQueryParams: !0,
  graphQL: { document: !0, variables: !0 },
  genAI: { inputs: !0, outputs: !0 },
  databaseQueryData: !0,
  stackFrameVariables: !0,
  frameContextLines: 5,
};
function To(e) {
  let t = e.dataCollection == null ? Co(e.sendDefaultPii) : wo,
    n = e.dataCollection ?? {};
  return {
    userInfo: n.userInfo ?? t.userInfo,
    cookies: n.cookies ?? t.cookies,
    httpHeaders: {
      request: n.httpHeaders?.request ?? t.httpHeaders.request,
      response: n.httpHeaders?.response ?? t.httpHeaders.response,
    },
    httpBodies: n.httpBodies ?? t.httpBodies,
    urlQueryParams: n.urlQueryParams ?? n.queryParams ?? t.urlQueryParams,
    graphQL: {
      document: n.graphQL?.document ?? t.graphQL.document,
      variables: n.graphQL?.variables ?? t.graphQL.variables,
    },
    genAI: {
      inputs: n.genAI?.inputs ?? t.genAI.inputs,
      outputs: n.genAI?.outputs ?? t.genAI.outputs,
    },
    databaseQueryData: n.databaseQueryData ?? t.databaseQueryData,
    stackFrameVariables: n.stackFrameVariables ?? t.stackFrameVariables,
    frameContextLines: n.frameContextLines ?? t.frameContextLines,
  };
}
var Eo = `Not capturing exception because it's already been captured.`,
  Do = `Discarded session because of missing or non-string release`,
  Oo = Symbol.for(`SentryInternalError`),
  ko = Symbol.for(`SentryDoNotSendEventError`),
  Ao = 5e3;
function jo(e) {
  return { message: e, [Oo]: !0 };
}
function Mo(e) {
  return { message: e, [ko]: !0 };
}
function No(e) {
  return be(e) && Oo in e;
}
function Po(e) {
  return be(e) && ko in e;
}
function Fo(e, t, n, r, i) {
  let a = 0,
    o,
    s = !1;
  e.on(n, () => {
    (a = 0), clearTimeout(o), (s = !1);
  }),
    e.on(t, (t) => {
      if (((a += r(t)), a >= 8e5)) i(e);
      else if (!s) {
        let t = e.getOptions()._flushInterval ?? Ao;
        t > 0 &&
          ((s = !0),
          (o = Fa(
            setTimeout(() => {
              i(e);
            }, t)
          )));
      }
    }),
    e.on(`flush`, () => {
      i(e);
    });
}
var Io = class {
  constructor(t) {
    if (
      ((this._options = t),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      (this._promiseBuffer = uo(t.transportOptions?.bufferSize ?? 64)),
      (this._dataCollection = To(t)),
      t.dsn
        ? (this._dsn = zn(t.dsn))
        : e && v.warn(`No DSN provided, client will not send events.`),
      this._dsn)
    ) {
      let e = za(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: e,
      });
    }
    (this._options.enableLogs =
      this._options.enableLogs ?? this._options._experiments?.enableLogs),
      this._options.enableLogs &&
        Fo(this, `afterCaptureLog`, `flushLogs`, Uo, $a),
      (this._options.enableMetrics ??
        this._options._experiments?.enableMetrics ??
        !0) &&
        Fo(this, `afterCaptureMetric`, `flushMetrics`, Ho, io);
  }
  captureException(t, n, r) {
    let i = rt();
    if (ct(t)) return e && v.log(Eo), i;
    let a = { event_id: i, ...n };
    return (
      this._process(
        () =>
          this.eventFromException(t, a)
            .then((e) => this._captureEvent(e, a, r))
            .then((e) => e),
        `error`
      ),
      a.event_id
    );
  }
  captureMessage(e, t, n, r) {
    let i = { event_id: rt(), ...n },
      a = _e(e) ? e : String(e),
      o = ve(e),
      s = o ? this.eventFromMessage(a, t, i) : this.eventFromException(e, i);
    return (
      this._process(
        () => s.then((e) => this._captureEvent(e, i, r)),
        o ? `unknown` : `error`
      ),
      i.event_id
    );
  }
  captureEvent(t, n, r) {
    let i = rt();
    if (n?.originalException && ct(n.originalException))
      return e && v.log(Eo), i;
    let a = { event_id: i, ...n },
      o = t.sdkProcessingMetadata || {},
      s = o.capturedSpanScope,
      c = o.capturedSpanIsolationScope,
      l = Lo(t.type);
    return (
      this._process(() => this._captureEvent(t, a, s || r, c), l), a.event_id
    );
  }
  captureSession(e) {
    this.sendSession(e), _t(e, { init: !1 });
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getDataCollectionOptions() {
    return this._dataCollection;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(e) {
    let t = this._transport;
    if ((this.emit(`flush`), !t)) return !0;
    let n = await this._isClientDoneProcessing(e),
      r = await t.flush(e);
    return n && r;
  }
  async close(e) {
    let t = await this.flush(e);
    return (this.getOptions().enabled = !1), this.emit(`close`), t;
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    (this._isEnabled() ||
      this._options.integrations.some(({ name: e }) =>
        e.startsWith(`Spotlight`)
      )) &&
      this._setupIntegrations();
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  getIntegrationNames() {
    return Object.keys(this._integrations);
  }
  addIntegration(e) {
    let t = this._integrations[e.name];
    !t && e.beforeSetup && e.beforeSetup(this),
      Ga(this, e, this._integrations),
      t || Wa(this, [e]);
  }
  sendEvent(e, t = {}) {
    this.emit(`beforeSendEvent`, e, t);
    let n = co(e, this),
      r = Qr(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (let e of t.attachments || []) r = Lr(r, Wr(e));
    n && (r = Lr(r, n)),
      this.sendEnvelope(r).then((t) => this.emit(`afterSendEvent`, e, t));
  }
  sendSession(t) {
    let { release: n, environment: r = kr } = this._options;
    if (`aggregates` in t) {
      let i = t.attrs || {};
      if (!i.release && !n) {
        e && v.warn(Do);
        return;
      }
      (i.release = i.release || n),
        (i.environment = i.environment || r),
        (t.attrs = i);
    } else {
      if (!t.release && !n) {
        e && v.warn(Do);
        return;
      }
      (t.release = t.release || n), (t.environment = t.environment || r);
    }
    this.emit(`beforeSendSession`, t);
    let i = Zr(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(i);
  }
  recordDroppedEvent(t, n, r = 1) {
    if (this._options.sendClientReports) {
      let i = `${t}:${n}`;
      e && v.log(`Recording outcome: "${i}"${r > 1 ? ` (${r} times)` : ``}`),
        (this._outcomes[i] = (this._outcomes[i] || 0) + r);
    }
  }
  on(e, t) {
    let n = (this._hooks[e] = this._hooks[e] || new Set()),
      r = (...e) => t(...e);
    return (
      n.add(r),
      () => {
        n.delete(r);
      }
    );
  }
  emit(e, ...t) {
    let n = this._hooks[e];
    n && n.forEach((e) => e(...t));
  }
  async sendEnvelope(t) {
    if ((this.emit(`beforeEnvelope`, t), this._isEnabled() && this._transport))
      try {
        return await this._transport.send(t);
      } catch (t) {
        return e && v.error(`Error while sending envelope:`, t), {};
      }
    return e && v.error(`Transport disabled`), {};
  }
  registerCleanup(e) {}
  dispose() {}
  _setupIntegrations() {
    let { integrations: e } = this._options;
    (this._integrations = Ua(this, e)), Wa(this, e);
  }
  _updateSessionFromEvent(e, t) {
    let n = t.level === `fatal`,
      r = !1,
      i = t.exception?.values;
    if (i) {
      (r = !0), (n = !1);
      for (let e of i)
        if (e.mechanism?.handled === !1) {
          n = !0;
          break;
        }
    }
    let a = e.status === `ok`;
    ((a && e.errors === 0) || (a && n)) &&
      (_t(e, {
        ...(n && { status: `crashed` }),
        errors: e.errors || Number(r || n),
      }),
      this.captureSession(e));
  }
  async _isClientDoneProcessing(e) {
    let t = 0;
    for (; !e || t < e; ) {
      if ((await new Promise((e) => setTimeout(e, 1)), !this._numProcessing))
        return !0;
      t++;
    }
    return !1;
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(e, t, n, r) {
    let i = this.getOptions(),
      a = this.getIntegrationNames();
    return (
      !t.integrations && a.length && (t.integrations = a),
      this.emit(`preprocessEvent`, e, t),
      e.type || r.setLastEventId(e.event_id || t.event_id),
      fa(i, e, t, n, this, r).then((e) =>
        e === null
          ? e
          : (this.emit(`postprocessEvent`, e, t),
            (e.contexts = {
              trace: { ...e.contexts?.trace, ...Qt(n) },
              ...e.contexts,
            }),
            (e.sdkProcessingMetadata = {
              dynamicSamplingContext: Nr(this, n),
              ...e.sdkProcessingMetadata,
            }),
            e)
      )
    );
  }
  _captureEvent(t, n = {}, r = N(), i = P()) {
    return (
      e &&
        Bo(t) &&
        v.log(`Captured error event \`${yo(t)[0] || `<unknown>`}\``),
      this._processEvent(t, n, r, i).then(
        (e) => e.event_id,
        (t) => {
          e &&
            (Po(t) ? v.log(t.message) : No(t) ? v.warn(t.message) : v.warn(t));
        }
      )
    );
  }
  _processEvent(e, t, n, r) {
    let i = this.getOptions(),
      { sampleRate: a } = i,
      o = Vo(e),
      s = Bo(e),
      c = `before send for type \`${e.type || `error`}\``,
      l = a === void 0 ? void 0 : Bn(a);
    if (s && typeof l == `number` && Pe() > l)
      return (
        this.recordDroppedEvent(`sample_rate`, `error`),
        ra(
          Mo(
            `Discarding event because it's not included in the random sample (sampling rate = ${a})`
          )
        )
      );
    let u = Lo(e.type);
    return this._prepareEvent(e, t, n, r)
      .then((e) => {
        if (e === null)
          throw (
            (this.recordDroppedEvent(`event_processor`, u),
            Mo("An event processor returned `null`, will not send event."))
          );
        return t.data?.__sentry__ === !0 ? e : Ro(zo(this, i, e, t), c);
      })
      .then((i) => {
        if (i === null) {
          if ((this.recordDroppedEvent(`before_send`, u), o)) {
            let t = 1 + (e.spans || []).length;
            this.recordDroppedEvent(`before_send`, `span`, t);
          }
          throw Mo(`${c} returned \`null\`, will not send event.`);
        }
        let a = n.getSession() || r.getSession();
        if ((s && a && this._updateSessionFromEvent(a, i), o)) {
          let e =
            (i.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) -
            (i.spans ? i.spans.length : 0);
          e > 0 && this.recordDroppedEvent(`before_send`, `span`, e);
        }
        let l = i.transaction_info;
        return (
          o &&
            l &&
            i.transaction !== e.transaction &&
            (i.transaction_info = { ...l, source: `custom` }),
          this.sendEvent(i, t),
          i
        );
      })
      .then(null, (e) => {
        throw Po(e) || No(e)
          ? e
          : (this.captureException(e, {
              mechanism: { handled: !1, type: `internal` },
              data: { __sentry__: !0 },
              originalException: e,
            }),
            jo(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`));
      });
  }
  _process(e, t) {
    this._numProcessing++,
      this._promiseBuffer.add(e).then(
        (e) => (this._numProcessing--, e),
        (e) => (
          this._numProcessing--,
          e === lo && this.recordDroppedEvent(`queue_overflow`, t),
          e
        )
      );
  }
  _clearOutcomes() {
    let e = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.entries(e).map(([e, t]) => {
        let [n, r] = e.split(`:`);
        return { reason: n, category: r, quantity: t };
      })
    );
  }
  _flushOutcomes() {
    e && v.log(`Flushing outcomes...`);
    let t = this._clearOutcomes();
    if (t.length === 0) {
      e && v.log(`No outcomes to send`);
      return;
    }
    if (!this._dsn) {
      e && v.log(`No dsn provided, will not send outcomes`);
      return;
    }
    e && v.log(`Sending outcomes:`, t);
    let n = vo(t, this._options.tunnel && Nn(this._dsn));
    this.sendEnvelope(n);
  }
};
function Lo(e) {
  return e === `replay_event` ? `replay` : e || `error`;
}
function Ro(e, t) {
  let n = `${t} must return \`null\` or a valid event.`;
  if (Ce(e))
    return e.then(
      (e) => {
        if (!ye(e) && e !== null) throw jo(n);
        return e;
      },
      (e) => {
        throw jo(`${t} rejected with ${e}`);
      }
    );
  if (!ye(e) && e !== null) throw jo(n);
  return e;
}
function zo(e, t, n, r) {
  let { beforeSend: i, beforeSendTransaction: a, ignoreSpans: o } = t,
    s = !Fr(t.beforeSendSpan) && t.beforeSendSpan,
    c = n;
  if (Bo(c) && i) return i(c, r);
  if (Vo(c)) {
    if (s || o) {
      let t = bo(c);
      if (
        o?.length &&
        Sr({ description: t.description, op: t.op, attributes: t.data }, o)
      )
        return null;
      if (s) {
        let e = s(t);
        e ? (c = bt(n, xo(e))) : _r();
      }
      if (c.spans) {
        let t = [],
          n = c.spans;
        for (let e of n) {
          if (
            o?.length &&
            Sr({ description: e.description, op: e.op, attributes: e.data }, o)
          ) {
            wr(n, e);
            continue;
          }
          if (s) {
            let n = s(e);
            n ? t.push(n) : (_r(), t.push(e));
          } else t.push(e);
        }
        let r = c.spans.length - t.length;
        r && e.recordDroppedEvent(`before_send`, `span`, r), (c.spans = t);
      }
    }
    if (a) {
      if (c.spans) {
        let e = c.spans.length;
        c.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: e,
        };
      }
      return a(c, r);
    }
  }
  return c;
}
function Bo(e) {
  return e.type === void 0;
}
function Vo(e) {
  return e.type === `transaction`;
}
function Ho(e) {
  let t = 0;
  return e.name && (t += e.name.length * 2), (t += 8), t + Wo(e.attributes);
}
function Uo(e) {
  let t = 0;
  return e.message && (t += e.message.length * 2), t + Wo(e.attributes);
}
function Wo(e) {
  if (!e) return 0;
  let t = 0;
  return (
    Object.values(e).forEach((e) => {
      Array.isArray(e)
        ? (t += e.length * Go(e[0]))
        : ve(e)
        ? (t += Go(e))
        : (t += 100);
    }),
    t
  );
}
function Go(e) {
  return typeof e == `string`
    ? e.length * 2
    : typeof e == `number`
    ? 8
    : typeof e == `boolean`
    ? 4
    : 0;
}
function Ko(t, n) {
  n.debug === !0 &&
    (e
      ? v.enable()
      : l(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
          );
        })),
    N().update(n.initialScope);
  let r = new t(n);
  return qo(r), r.init(), r;
}
function qo(e) {
  N().setClient(e);
}
var Jo = `thismessage:/`;
function Yo(e) {
  return `isRelative` in e;
}
function Xo(e, t) {
  let n = e.indexOf(`://`) <= 0 && e.indexOf(`//`) !== 0,
    r = t ?? (n ? Jo : void 0);
  try {
    if (`canParse` in URL && !URL.canParse(e, r)) return;
    let t = new URL(e, r);
    return n
      ? { isRelative: n, pathname: t.pathname, search: t.search, hash: t.hash }
      : t;
  } catch {}
}
function Zo(e) {
  if (Yo(e)) return e.pathname;
  let t = new URL(e);
  return (
    (t.search = ``),
    (t.hash = ``),
    [`80`, `443`].includes(t.port) && (t.port = ``),
    (t.password &&= `%filtered%`),
    (t.username &&= `%filtered%`),
    t.toString()
  );
}
function Qo(e) {
  if (!e) return {};
  let t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
  );
  if (!t) return {};
  let n = t[6] || ``,
    r = t[8] || ``;
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r,
  };
}
function $o(e) {
  return e.split(/[?#]/, 1)[0];
}
function es(e, t = !0) {
  if (e.startsWith(`data:`)) {
    let n = e.match(/^data:([^;,]+)/),
      r = n ? n[1] : `text/plain`,
      i = e.includes(`;base64,`),
      a = e.indexOf(`,`),
      o = ``;
    if (t && a !== -1) {
      let t = e.slice(a + 1);
      o = t.length > 10 ? `${t.slice(0, 10)}... [truncated]` : t;
    }
    return `data:${r}${i ? `,base64` : ``}${o ? `,${o}` : ``}`;
  }
  return e;
}
function ts(e, t) {
  let n = t?.getDsn(),
    r = t?.getOptions().tunnel;
  return rs(e, n) || ns(e, r);
}
function ns(e, t) {
  return t ? as(e) === as(t) : !1;
}
function rs(e, t) {
  let n = Xo(e);
  return !n || Yo(n) || !t
    ? !1
    : is(n.hostname, t.host) && /(^|&|\?)sentry_key=/.test(n.search);
}
function is(e, t) {
  return e === t || (t.length > 0 && e.endsWith(`.${t}`));
}
function as(e) {
  return e[e.length - 1] === `/` ? e.slice(0, -1) : e;
}
function os(e) {
  `aggregates` in e
    ? e.attrs?.ip_address === void 0 &&
      (e.attrs = { ...e.attrs, ip_address: `{{auto}}` })
    : e.ipAddress === void 0 && (e.ipAddress = `{{auto}}`);
}
function ss(e, t, r = [t], i = `npm`) {
  let a = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});
  a.name ||
    ((a.name = `sentry.javascript.${t}`),
    (a.packages = r.map((e) => ({ name: `${i}:@sentry/${e}`, version: n }))),
    (a.version = n));
}
function cs(e = {}) {
  let t = e.client || F();
  if (!ka() || !t) return {};
  let n = Ht(r());
  if (n.getTraceData) return n.getTraceData(e);
  let i = e.scope || N(),
    a = e.span || z(),
    o = Or(a) && !br(t.getOptions());
  if (!a && Yt()) return {};
  let s = a && !o ? Xn(a) : ls(i),
    c = En(a ? Pr(a) : Nr(t, i));
  if (!Vn.test(s))
    return v.warn(`Invalid sentry-trace data. Cannot generate trace data`), {};
  let l = { "sentry-trace": s, baggage: c };
  return e.propagateTraceparent && (l.traceparent = a && !o ? Zn(a) : us(i)), l;
}
function ls(e) {
  let {
    traceId: t,
    sampled: n,
    propagationSpanId: r,
  } = e.getPropagationContext();
  return Wn(t, r, n);
}
function us(e) {
  let {
    traceId: t,
    sampled: n,
    propagationSpanId: r,
  } = e.getPropagationContext();
  return Gn(t, r, n);
}
function ds(e) {
  return Array.from(new Set(e));
}
var fs = 100;
function ps(e, t) {
  let n = F(),
    r = P();
  if (!n) return;
  let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = fs } = n.getOptions();
  if (a <= 0) return;
  let o = { timestamp: dt(), ...e },
    s = i ? l(() => i(o, t)) : o;
  s !== null &&
    (n.emit && n.emit(`beforeAddBreadcrumb`, s, t), r.addBreadcrumb(s, a));
}
var ms = `FunctionToString`,
  hs = new WeakMap(),
  gs = B(() => ({
    name: ms,
    setupOnce() {
      let e = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...t) {
          let n = Oe(this),
            r;
          try {
            hs.has(F()) && n !== void 0 && (r = n);
          } catch {}
          return e.apply(r ?? this, t);
        };
      } catch {}
    },
    setup(e) {
      hs.set(e, !0);
    },
  })),
  _s = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
    /can't redefine non-configurable property "solana"/,
    /vv\(\)\.getRestrictions is not a function/,
    /Can't find variable: _AutofillCallbackHandler/,
    /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
    /^Java exception was raised during method invocation$/,
  ],
  vs = `EventFilters`,
  ys = B((e = {}) => {
    let t;
    return {
      name: vs,
      setup(n) {
        t = xs(e, n.getOptions());
      },
      processEvent(n, r, i) {
        return (t ||= xs(e, i.getOptions())), Ss(n, t) ? null : n;
      },
    };
  }),
  bs = B((e = {}) => ({ ...ys(e), name: `InboundFilters` }));
function xs(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : _s),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function Ss(t, n) {
  if (!t.type) {
    if (Cs(t, n.ignoreErrors))
      return (
        e &&
          v.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${at(t)}`),
        !0
      );
    if (ks(t))
      return (
        e &&
          v.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${at(t)}`),
        !0
      );
    if (Ts(t, n.denyUrls))
      return (
        e &&
          v.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${at(t)}.
Url: ${Os(t)}`),
        !0
      );
    if (!Es(t, n.allowUrls))
      return (
        e &&
          v.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${at(t)}.
Url: ${Os(t)}`),
        !0
      );
  } else if (t.type === `transaction` && ws(t, n.ignoreTransactions))
    return (
      e &&
        v.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${at(t)}`),
      !0
    );
  return !1;
}
function Cs(e, t) {
  return t?.length ? yo(e).some((e) => $e(e, t)) : !1;
}
function ws(e, t) {
  if (!t?.length) return !1;
  let n = e.transaction;
  return n ? $e(n, t) : !1;
}
function Ts(e, t) {
  if (!t?.length) return !1;
  let n = Os(e);
  return n ? $e(n, t) : !1;
}
function Es(e, t) {
  if (!t?.length) return !0;
  let n = Os(e);
  return !n || $e(n, t);
}
function Ds(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n && n.filename !== `<anonymous>` && n.filename !== `[native code]`)
      return n.filename || null;
  }
  return null;
}
function Os(t) {
  try {
    let e = [...(t.exception?.values ?? [])]
      .reverse()
      .find(
        (e) => e.mechanism?.parent_id === void 0 && e.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return e ? Ds(e) : null;
  } catch {
    return e && v.error(`Cannot extract url for event ${at(t)}`), null;
  }
}
function ks(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          (e) => e.stacktrace || (e.type && e.type !== `Error`) || e.value
        )
    : !1;
}
function As(e, t, n, r, i, a) {
  if (!i.exception?.values || !a || !we(a.originalException, Error)) return;
  let o =
    i.exception.values.length > 0
      ? i.exception.values[i.exception.values.length - 1]
      : void 0;
  o &&
    (i.exception.values = js(
      e,
      t,
      r,
      a.originalException,
      n,
      i.exception.values,
      o,
      0
    ));
}
function js(e, t, n, r, i, a, o, s) {
  if (a.length >= n + 1) return a;
  let c = [...a];
  if (we(r[i], Error)) {
    Ns(o, s, r);
    let a = e(t, r[i]),
      l = c.length;
    Ps(a, i, l, s), (c = js(e, t, n, r[i], i, [a, ...c], a, l));
  }
  return (
    Ms(r) &&
      r.errors.forEach((a, l) => {
        if (we(a, Error)) {
          Ns(o, s, r);
          let u = e(t, a),
            d = c.length;
          Ps(u, `errors[${l}]`, d, s), (c = js(e, t, n, a, i, [u, ...c], u, d));
        }
      }),
    c
  );
}
function Ms(e) {
  return Array.isArray(e.errors);
}
function Ns(e, t, n) {
  e.mechanism = {
    handled: !0,
    type: `auto.core.linked_errors`,
    ...(Ms(n) && { is_exception_group: !0 }),
    ...e.mechanism,
    exception_id: t,
  };
}
function Ps(e, t, n, r) {
  e.mechanism = {
    handled: !0,
    ...e.mechanism,
    type: `chained`,
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
function Fs(e) {
  return (
    de(e) &&
    `__sentry_fetch_url_host__` in e &&
    typeof e.__sentry_fetch_url_host__ == `string`
  );
}
function Is(e) {
  return Fs(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
var Ls = new Set([]);
function Rs(e) {
  let t = `console`,
    n = E(t, e);
  return D(t, Bs), n;
}
var zs = new Set();
function Bs() {
  `console` in t &&
    o.forEach(function (n) {
      zs.has(n) ||
        !(n in t.console) ||
        (zs.add(n),
        Ee(t.console, n, function (r) {
          return (
            (c[n] = r),
            function (...r) {
              let i = r[0],
                a = c[n],
                o = Ls.size && typeof i == `string` && $e(i, Ls);
              o || O(`console`, { args: r, level: n }),
                (!o || (e && v.isEnabled())) && a?.apply(t.console, r);
            }
          );
        }));
    });
}
function Vs(e) {
  return e === `warn`
    ? `warning`
    : [`fatal`, `error`, `warning`, `log`, `info`, `debug`].includes(e)
    ? e
    : `log`;
}
var Hs = `Dedupe`,
  Us = B(() => {
    let t;
    return {
      name: Hs,
      processEvent(n) {
        if (n.type) return n;
        try {
          if (Ws(n, t))
            return (
              e &&
                v.warn(
                  `Event dropped due to being a duplicate of previously captured event.`
                ),
              null
            );
        } catch {}
        return (t = n);
      },
    };
  });
function Ws(e, t) {
  return t ? !!(Gs(e, t) || Ks(e, t)) : !1;
}
function Gs(e, t) {
  let n = e.message,
    r = t.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !Js(e, t) ||
    !qs(e, t)
  );
}
function Ks(e, t) {
  let n = Ys(t),
    r = Ys(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Js(e, t) ||
    !qs(e, t)
  );
}
function qs(e, t) {
  let n = ne(e),
    r = ne(t);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let e = 0; e < r.length; e++) {
    let t = r[e],
      i = n[e];
    if (
      t.filename !== i.filename ||
      t.lineno !== i.lineno ||
      t.colno !== i.colno ||
      t.function !== i.function
    )
      return !1;
  }
  return !0;
}
function Js(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  (n = n), (r = r);
  try {
    return n.join(``) === r.join(``);
  } catch {
    return !1;
  }
}
function Ys(e) {
  return e.exception?.values?.[0];
}
var Xs = `ConversationId`,
  Zs = B(() => ({
    name: Xs,
    setup(e) {
      e.on(`spanStart`, (e) => {
        let t = N().getScopeData(),
          n = P().getScopeData(),
          r = t.conversationId || n.conversationId;
        if (r) {
          let { op: t, data: n, description: i } = L(e);
          if (
            !t?.startsWith(`gen_ai.`) &&
            !n[`ai.operationId`] &&
            !i?.startsWith(`ai.`)
          )
            return;
          e.setAttribute(dn, r);
        }
      });
    },
  }));
function Qs(e, t, n, r, i) {
  if (!e.fetchData) return;
  let { method: a, url: o } = e.fetchData,
    s = br() && t(o);
  if (e.endTimestamp) {
    let t = e.fetchData.__span;
    if (!t) return;
    let n = r[t];
    n && (s && (tc(n, e), $s(n, e, i)), delete r[t]);
    return;
  }
  let { spanOrigin: c = `auto.http.browser`, propagateTraceparent: l = !1 } =
      typeof i == `object` ? i : { spanOrigin: i },
    u = F(),
    d = !!z(),
    f = d || (!!u && ai(u)),
    p = s && f ? mi(ac(o, a, c)) : new Dr(),
    m = Ei(p) && d ? void 0 : p;
  if (
    (s && !f && u?.recordDroppedEvent(`no_parent_span`, `span`),
    (e.fetchData.__span = p.spanContext().spanId),
    (r[p.spanContext().spanId] = p),
    n(e.fetchData.url))
  ) {
    let t = e.args[0],
      n = { ...(e.args[1] || {}) },
      r = ec(t, n, br() && f ? m : void 0, l);
    r && ((e.args[1] = n), (n.headers = r));
  }
  if (u) {
    let t = {
      input: e.args,
      response: e.response,
      startTimestamp: e.startTimestamp,
      endTimestamp: e.endTimestamp,
    };
    u.emit(`beforeOutgoingRequestSpan`, p, t);
  }
  return p;
}
function $s(e, t, n) {
  (typeof n == `object` && n ? n.onRequestSpanEnd : void 0)?.(e, {
    headers: t.response?.headers,
    error: t.error,
  });
}
function ec(e, t, n, r) {
  let i = cs({ span: n, propagateTraceparent: r }),
    a = i[`sentry-trace`],
    o = i.baggage,
    s = i.traceparent;
  if (!a) return;
  let c = t.headers || (Te(e) ? e.headers : void 0);
  if (!c)
    return {
      "sentry-trace": a,
      ...(o && { baggage: o }),
      ...(s && { traceparent: s }),
    };
  if (rc(c)) {
    let e = new Headers(c);
    if (
      (e.get(`sentry-trace`) || e.set(`sentry-trace`, a),
      r && s && !e.get(`traceparent`) && e.set(`traceparent`, s),
      o)
    ) {
      let t = e.get(`baggage`);
      t ? nc(t) || e.set(`baggage`, `${t},${o}`) : e.set(`baggage`, o);
    }
    return e;
  } else if (ic(c)) {
    let e = [...c];
    e.find((e) => e[0] === `sentry-trace`) || e.push([`sentry-trace`, a]),
      r &&
        s &&
        !e.find((e) => e[0] === `traceparent`) &&
        e.push([`traceparent`, s]);
    let t = c.find(
      (e) => e[0] === `baggage` && typeof e[1] == `string` && nc(e[1])
    );
    return o && !t && e.push([`baggage`, o]), e;
  } else {
    let e = `sentry-trace` in c ? c[`sentry-trace`] : void 0,
      t = `traceparent` in c ? c.traceparent : void 0,
      n = `baggage` in c ? c.baggage : void 0,
      i = n ? (Array.isArray(n) ? [...n] : [n]) : [],
      l = n && (Array.isArray(n) ? n.find((e) => nc(e)) : nc(n));
    o && !l && i.push(o);
    let u = Object.assign({}, c, {
      "sentry-trace": e ?? a,
      ...(i.length > 0 && { baggage: i.join(`,`) }),
    });
    return r && s && !t && (u.traceparent = s), u;
  }
}
function tc(e, t) {
  if (t.response) {
    pn(e, t.response.status);
    let n = t.response?.headers?.get(`content-length`);
    if (n) {
      let t = parseInt(n);
      t > 0 && e.setAttribute(`http.response_content_length`, t);
    }
  } else t.error && e.setStatus({ code: 2, message: `internal_error` });
  e.end();
}
function nc(e) {
  return (
    typeof e == `string` && e.split(`,`).some((e) => e.trim().startsWith(wn))
  );
}
function rc(e) {
  return typeof Headers < `u` && we(e, Headers);
}
function ic(e) {
  return Array.isArray(e)
    ? e.every(
        (e) => Array.isArray(e) && e.length === 2 && typeof e[0] == `string`
      )
    : !1;
}
function ac(e, t, n) {
  if (e.startsWith(`data:`))
    return { name: `${t} ${es(e)}`, attributes: oc(e, void 0, t, n) };
  let r = Xo(e);
  return { name: `${t} ${r ? Zo(r) : e}`, attributes: oc(e, r, t, n) };
}
function oc(e, t, n, r) {
  let i = {
    url: es(e),
    type: `fetch`,
    "http.method": n,
    [I]: r,
    [nn]: `http.client`,
  };
  return (
    t &&
      (Yo(t) ||
        ((i[Wi] = es(t.href)),
        (i[Yi] = es(t.href)),
        (i[`server.address`] = t.host)),
      t.search && (i[`http.query`] = t.search),
      t.hash && (i[`http.fragment`] = t.hash)),
    i
  );
}
function sc(e) {
  if (e !== void 0) {
    if (e >= 400 && e < 500) return `warning`;
    if (e >= 500) return `error`;
  }
}
var cc = t;
function lc() {
  return `history` in cc && !!cc.history;
}
function uc() {
  if (!(`fetch` in cc)) return !1;
  try {
    return new Headers(), new Request(`data:,`), new Response(), !0;
  } catch {
    return !1;
  }
}
function dc(e) {
  return (
    e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function fc() {
  if (typeof EdgeRuntime == `string`) return !0;
  if (!uc()) return !1;
  if (dc(cc.fetch)) return !0;
  let t = !1,
    n = cc.document;
  if (n && typeof n.createElement == `function`)
    try {
      let e = n.createElement(`iframe`);
      (e.hidden = !0),
        n.head.appendChild(e),
        e.contentWindow?.fetch && (t = dc(e.contentWindow.fetch)),
        n.head.removeChild(e);
    } catch (t) {
      e &&
        v.warn(
          `Could not create sandbox iframe for pure fetch check, bailing to window.fetch: `,
          t
        );
    }
  return t;
}
function pc(e, t) {
  let n = `fetch`,
    r = E(n, e);
  return D(n, () => hc(void 0, t)), r;
}
function mc(e) {
  let t = `fetch-body-resolved`,
    n = E(t, e);
  return D(t, () => hc(_c)), n;
}
function hc(e, n = !1) {
  (n && !fc()) ||
    Ee(t, `fetch`, function (n) {
      return function (...r) {
        let i = Error(),
          { method: a, url: o } = bc(r),
          s = {
            args: r,
            fetchData: { method: a, url: o },
            startTimestamp: j() * 1e3,
            virtualError: i,
            headers: xc(r),
          };
        return (
          e || O(`fetch`, { ...s }),
          n.apply(t, r).then(
            async (t) => (
              e
                ? e(t)
                : O(`fetch`, { ...s, endTimestamp: j() * 1e3, response: t }),
              t
            ),
            (e) => {
              O(`fetch`, { ...s, endTimestamp: j() * 1e3, error: e }),
                de(e) &&
                  e.stack === void 0 &&
                  ((e.stack = i.stack), A(e, `framesToPop`, 1));
              let t = F()?.getOptions().enhanceFetchErrorMessages ?? `always`;
              if (
                t !== !1 &&
                e instanceof TypeError &&
                (e.message === `Failed to fetch` ||
                  e.message === `Load failed` ||
                  e.message ===
                    `NetworkError when attempting to fetch resource.`)
              )
                try {
                  let n = new URL(s.fetchData.url).host;
                  t === `always`
                    ? (e.message = `${e.message} (${n})`)
                    : A(e, `__sentry_fetch_url_host__`, n);
                } catch {}
              throw e;
            }
          )
        );
      };
    });
}
async function gc(e, t) {
  if (e?.body) {
    let n = e.body,
      r = n.getReader(),
      i = setTimeout(() => {
        n.cancel().then(null, () => {});
      }, 90 * 1e3),
      a = !0;
    for (; a; ) {
      let e;
      try {
        e = setTimeout(() => {
          n.cancel().then(null, () => {});
        }, 5e3);
        let { done: i } = await r.read();
        clearTimeout(e), i && (t(), (a = !1));
      } catch {
        a = !1;
      } finally {
        clearTimeout(e);
      }
    }
    clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {});
  }
}
function _c(e) {
  let t;
  try {
    t = e.clone();
  } catch {
    return;
  }
  gc(t, () => {
    O(`fetch-body-resolved`, { endTimestamp: j() * 1e3, response: e });
  });
}
function vc(e, t) {
  return be(e) && !!e[t];
}
function yc(e) {
  return typeof e == `string`
    ? e
    : e
    ? vc(e, `url`)
      ? e.url
      : e.toString
      ? e.toString()
      : ``
    : ``;
}
function bc(e) {
  if (e.length === 0) return { method: `GET`, url: `` };
  if (e.length === 2) {
    let [t, n] = e;
    return {
      url: yc(t),
      method: vc(n, `method`)
        ? String(n.method).toUpperCase()
        : Te(t) && vc(t, `method`)
        ? String(t.method).toUpperCase()
        : `GET`,
    };
  }
  let t = e[0];
  return {
    url: yc(t),
    method: vc(t, `method`) ? String(t.method).toUpperCase() : `GET`,
  };
}
function xc(e) {
  let [t, n] = e;
  try {
    if (typeof n == `object` && n && `headers` in n && n.headers)
      return new Headers(n.headers);
    if (Te(t)) return new Headers(t.headers);
  } catch {}
}
var Sc = t;
function Cc() {
  try {
    return Sc.document.location.href;
  } catch {
    return ``;
  }
}
function wc(e, t = 5) {
  if (!Sc.HTMLElement) return null;
  let n = e;
  for (let e = 0; e < t; e++) {
    if (!n) return null;
    if (n instanceof HTMLElement) {
      if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
      if (n.dataset.sentryElement) return n.dataset.sentryElement;
    }
    n = n.parentNode;
  }
  return null;
}
var V = t,
  Tc = 0;
function Ec() {
  return Tc > 0;
}
function Dc() {
  Tc++,
    setTimeout(() => {
      Tc--;
    });
}
function Oc(e, n = {}) {
  function r(e) {
    return typeof e == `function`;
  }
  if (!r(e)) return e;
  try {
    if (Object.prototype.hasOwnProperty.call(e, `__sentry_wrapped__`)) {
      let t = e.__sentry_wrapped__;
      return typeof t == `function` ? t : e;
    }
    if (Oe(e)) return e;
  } catch {
    return e;
  }
  let i = function (...r) {
    t._sentryWrappedDepth = (t._sentryWrappedDepth || 0) + 1;
    try {
      let t = r.map((e) => Oc(e, n));
      return e.apply(this, t);
    } catch (e) {
      throw (
        (Dc(),
        Zt((t) => {
          t.addEventProcessor(
            (e) => (
              n.mechanism && (ot(e, void 0, void 0), st(e, n.mechanism)),
              (e.extra = { ...e.extra, arguments: r }),
              e
            )
          ),
            Ca(e);
        }),
        e)
      );
    } finally {
      t._sentryWrappedDepth = (t._sentryWrappedDepth || 0) - 1;
    }
  };
  try {
    for (let t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (i[t] = e[t]);
  } catch {}
  De(i, e), A(e, `__sentry_wrapped__`, i);
  try {
    Object.getOwnPropertyDescriptor(i, `name`).configurable &&
      Object.defineProperty(i, "name", {
        get() {
          return e.name;
        },
      });
  } catch {}
  return i;
}
function kc() {
  let e = Cc(),
    { referrer: t } = V.document || {},
    { userAgent: n } = V.navigator || {};
  return {
    url: e,
    headers: { ...(t && { Referer: t }), ...(n && { "User-Agent": n }) },
  };
}
function Ac(e, t) {
  let n = Nc(e, t),
    r = { type: Rc(t), value: zc(t) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === `` &&
      (r.value = `Unrecoverable error caught`),
    r
  );
}
function jc(e, t, n, r) {
  let i = F()?.getOptions().normalizeDepth,
    a = Kc(t),
    o = { __serialized__: Ue(t, i) };
  if (a) return { exception: { values: [Ac(e, a)] }, extra: o };
  let s = {
    exception: {
      values: [
        {
          type: xe(t) ? t.constructor.name : r ? `UnhandledRejection` : `Error`,
          value: Wc(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: o,
  };
  if (n) {
    let t = Nc(e, n);
    t.length && (s.exception.values[0].stacktrace = { frames: t });
  }
  return s;
}
function Mc(e, t) {
  return { exception: { values: [Ac(e, t)] } };
}
function Nc(e, t) {
  let n = t.stacktrace || t.stack || ``,
    r = Fc(t),
    i = Ic(t);
  try {
    return e(n, r, i);
  } catch {}
  return [];
}
var Pc = /Minified React error #\d+;/i;
function Fc(e) {
  return e && Pc.test(e.message) ? 1 : 0;
}
function Ic(e) {
  return typeof e.framesToPop == `number` ? e.framesToPop : 0;
}
function Lc(e) {
  return (
    typeof WebAssembly < `u` &&
    WebAssembly.Exception !== void 0 &&
    e instanceof WebAssembly.Exception
  );
}
function Rc(e) {
  let t = e?.name;
  return !t && Lc(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : `WebAssembly.Exception`
    : t;
}
function zc(e) {
  let t = e?.message;
  return Lc(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : `wasm exception`
    : t
    ? t.error && typeof t.error.message == `string`
      ? Is(t.error)
      : Is(e)
    : `No error message`;
}
function Bc(e, t, n, r) {
  let i = Hc(e, t, n?.syntheticException || void 0, r);
  return (
    st(i), (i.level = `error`), n?.event_id && (i.event_id = n.event_id), na(i)
  );
}
function Vc(e, t, n = `info`, r, i) {
  let a = Uc(e, t, r?.syntheticException || void 0, i);
  return (a.level = n), r?.event_id && (a.event_id = r.event_id), na(a);
}
function Hc(e, t, n, r, i) {
  let a;
  if (pe(t) && t.error) return Mc(e, t.error);
  if (me(t) || he(t)) {
    let i = t;
    if (`stack` in t) {
      a = Mc(e, t);
      let i = a.exception?.values?.[0];
      if (r && n && i && !i.stacktrace) {
        let t = Nc(e, n);
        t.length && ((i.stacktrace = { frames: t }), st(a, { synthetic: !0 }));
      }
    } else {
      let t = i.name || (me(i) ? `DOMError` : `DOMException`),
        o = i.message ? `${t}: ${i.message}` : t;
      (a = Uc(e, o, n, r)), ot(a, o);
    }
    return (
      `code` in i && (a.tags = { ...a.tags, "DOMException.code": `${i.code}` }),
      a
    );
  }
  return de(t)
    ? Mc(e, t)
    : ye(t) || xe(t)
    ? ((a = jc(e, t, n, i)), st(a, { synthetic: !0 }), a)
    : ((a = Uc(e, t, n, r)),
      ot(a, `${t}`, void 0),
      st(a, { synthetic: !0 }),
      a);
}
function Uc(e, t, n, r) {
  let i = {};
  if (r && n) {
    let r = Nc(e, n);
    r.length &&
      (i.exception = { values: [{ value: t, stacktrace: { frames: r } }] }),
      st(i, { synthetic: !0 });
  }
  if (_e(t)) {
    let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
    return (i.logentry = { message: e, params: n }), i;
  }
  return (i.message = t), i;
}
function Wc(e, { isUnhandledRejection: t }) {
  let n = je(e),
    r = t ? `promise rejection` : `exception`;
  return pe(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : xe(e)
    ? `Event \`${Gc(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function Gc(e) {
  try {
    let t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function Kc(e) {
  return Object.values(e).find((e) => e instanceof Error);
}
var qc = class extends Io {
  constructor(e) {
    let t = Jc(e);
    ss(t, `browser`, [`browser`], V.SENTRY_SDK_SOURCE || qa()), super(t);
    let { userInfo: n } = this.getDataCollectionOptions();
    t._metadata?.sdk &&
      (t._metadata.sdk.settings = {
        infer_ip: n ? `auto` : `never`,
        ...t._metadata.sdk.settings,
      });
    let { sendClientReports: r } = this._options;
    V.document &&
      V.document.addEventListener(`visibilitychange`, () => {
        V.document.visibilityState === `hidden` &&
          (r && this._flushOutcomes(),
          queueMicrotask(() => {
            this.flush();
          }));
      }),
      n && this.on(`beforeSendSession`, os);
  }
  eventFromException(e, t) {
    return Bc(this._options.stackParser, e, t, this._options.attachStacktrace);
  }
  eventFromMessage(e, t = `info`, n) {
    return Vc(
      this._options.stackParser,
      e,
      t,
      n,
      this._options.attachStacktrace
    );
  }
  _prepareEvent(e, t, n, r) {
    return (
      (e.platform = e.platform || `javascript`), super._prepareEvent(e, t, n, r)
    );
  }
};
function Jc(e) {
  return {
    release:
      typeof __SENTRY_RELEASE__ == `string`
        ? __SENTRY_RELEASE__
        : V.SENTRY_RELEASE?.id,
    sendClientReports: !0,
    parentSpanIsAlwaysRootSpan: !0,
    ...e,
  };
}
var Yc = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  H = t,
  Xc = (e, t) => (e > t[1] ? `poor` : e > t[0] ? `needs-improvement` : `good`),
  Zc = (e, t, n, r) => {
    let i, a;
    return (o) => {
      t.value >= 0 &&
        (o || r) &&
        ((a = t.value - (i ?? 0)),
        (a || i === void 0) &&
          ((i = t.value), (t.delta = a), (t.rating = Xc(t.value, n)), e(t)));
    };
  },
  Qc = (e = !0) => {
    let t = H.performance?.getEntriesByType?.(`navigation`)[0];
    if (!e || (t && t.responseStart > 0 && t.responseStart < performance.now()))
      return t;
  },
  $c = () => Qc()?.activationStart ?? 0;
function el(e, t, n) {
  H.document && H.addEventListener(e, t, n);
}
function tl(e, t, n) {
  H.document && H.removeEventListener(e, t, n);
}
var nl = -1,
  rl = new Set(),
  il = () =>
    H.document?.visibilityState === `hidden` && !H.document?.prerendering
      ? 0
      : 1 / 0,
  al = (e) => {
    if (sl(e) && nl > -1) {
      if (e.type === `visibilitychange` || e.type === `pagehide`)
        for (let e of rl) e();
      isFinite(nl) ||
        ((nl = e.type === `visibilitychange` ? e.timeStamp : 0),
        tl(`prerenderingchange`, al, !0));
    }
  },
  ol = () => {
    if (H.document && nl < 0) {
      let e = $c();
      (nl =
        (H.document.prerendering
          ? void 0
          : globalThis.performance
              .getEntriesByType(`visibility-state`)
              .filter((t) => t.name === `hidden` && t.startTime > e)[0]
              ?.startTime) ?? il()),
        el(`visibilitychange`, al, !0),
        el(`pagehide`, al, !0),
        el(`prerenderingchange`, al, !0);
    }
    return {
      get firstHiddenTime() {
        return nl;
      },
      onHidden(e) {
        rl.add(e);
      },
    };
  };
function sl(e) {
  return e.type === `pagehide` || H.document?.visibilityState === `hidden`;
}
var cl = () =>
    `v5-${Date.now()}-${
      Math.floor(Math.random() * 8999999999999) + 0xe8d4a51000
    }`,
  ll = (e, t = -1) => {
    let n = Qc(),
      r = `navigate`;
    return (
      n &&
        (H.document?.prerendering || $c() > 0
          ? (r = `prerender`)
          : H.document?.wasDiscarded
          ? (r = `restore`)
          : n.type && (r = n.type.replace(/_/g, `-`))),
      {
        name: e,
        value: t,
        rating: `good`,
        delta: 0,
        entries: [],
        id: cl(),
        navigationType: r,
      }
    );
  },
  ul = new WeakMap();
function dl(e, t) {
  try {
    return ul.get(e) || ul.set(e, new t()), ul.get(e);
  } catch {
    return new t();
  }
}
var fl = class {
    constructor() {
      (this._sessionValue = 0), (this._sessionEntries = []);
    }
    _processEntry(e) {
      if (e.hadRecentInput) return;
      let t = this._sessionEntries[0],
        n = this._sessionEntries[this._sessionEntries.length - 1];
      this._sessionValue &&
      t &&
      n &&
      e.startTime - n.startTime < 1e3 &&
      e.startTime - t.startTime < 5e3
        ? ((this._sessionValue += e.value), this._sessionEntries.push(e))
        : ((this._sessionValue = e.value), (this._sessionEntries = [e])),
        this._onAfterProcessingUnexpectedShift?.(e);
    }
  },
  pl = (e, t, n = {}) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        let r = new PerformanceObserver((e) => {
          Promise.resolve().then(() => {
            t(e.getEntries());
          });
        });
        return r.observe({ type: e, buffered: !0, ...n }), r;
      }
    } catch {}
  },
  ml = (e) => {
    let t = !1;
    return () => {
      t ||= (e(), !0);
    };
  },
  hl = (e) => {
    H.document?.prerendering
      ? addEventListener(`prerenderingchange`, () => e(), !0)
      : e();
  },
  gl = [1800, 3e3],
  _l = (e, t = {}) => {
    hl(() => {
      let n = ol(),
        r = ll(`FCP`),
        i,
        a = pl(`paint`, (e) => {
          for (let t of e)
            t.name === `first-contentful-paint` &&
              (a.disconnect(),
              t.startTime < n.firstHiddenTime &&
                ((r.value = Math.max(t.startTime - $c(), 0)),
                r.entries.push(t),
                i(!0)));
        });
      a && (i = Zc(e, r, gl, t.reportAllChanges));
    });
  },
  vl = [0.1, 0.25],
  yl = (e, t = {}) => {
    _l(
      ml(() => {
        let n = ll(`CLS`, 0),
          r,
          i = ol(),
          a = dl(t, fl),
          o = (e) => {
            for (let t of e) a._processEntry(t);
            a._sessionValue > n.value &&
              ((n.value = a._sessionValue),
              (n.entries = a._sessionEntries),
              r());
          },
          s = pl(`layout-shift`, o);
        s &&
          ((r = Zc(e, n, vl, t.reportAllChanges)),
          i.onHidden(() => {
            o(s.takeRecords()), r(!0);
          }),
          H?.setTimeout?.(r));
      })
    );
  },
  bl = 0,
  xl = 1 / 0,
  Sl = 0,
  Cl = (e) => {
    e.forEach((e) => {
      e.interactionId &&
        ((xl = Math.min(xl, e.interactionId)),
        (Sl = Math.max(Sl, e.interactionId)),
        (bl = Sl ? (Sl - xl) / 7 + 1 : 0));
    });
  },
  wl,
  Tl = () => (wl ? bl : performance.interactionCount || 0),
  El = () => {
    `interactionCount` in performance ||
      wl ||
      (wl = pl(`event`, Cl, {
        type: `event`,
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  Dl = 10,
  Ol = 0,
  kl = () => Tl() - Ol,
  Al = class {
    constructor() {
      (this._longestInteractionList = []),
        (this._longestInteractionMap = new Map());
    }
    _resetInteractions() {
      (Ol = Tl()),
        (this._longestInteractionList.length = 0),
        this._longestInteractionMap.clear();
    }
    _estimateP98LongestInteraction() {
      let e = Math.min(
        this._longestInteractionList.length - 1,
        Math.floor(kl() / 50)
      );
      return this._longestInteractionList[e];
    }
    _processEntry(e) {
      if (
        (this._onBeforeProcessingEntry?.(e),
        !(e.interactionId || e.entryType === `first-input`))
      )
        return;
      let t = this._longestInteractionList.at(-1),
        n = this._longestInteractionMap.get(e.interactionId);
      if (
        n ||
        this._longestInteractionList.length < Dl ||
        e.duration > t._latency
      ) {
        if (
          (n
            ? e.duration > n._latency
              ? ((n.entries = [e]), (n._latency = e.duration))
              : e.duration === n._latency &&
                e.startTime === n.entries[0].startTime &&
                n.entries.push(e)
            : ((n = {
                id: e.interactionId,
                entries: [e],
                _latency: e.duration,
              }),
              this._longestInteractionMap.set(n.id, n),
              this._longestInteractionList.push(n)),
          this._longestInteractionList.sort((e, t) => t._latency - e._latency),
          this._longestInteractionList.length > Dl)
        ) {
          let e = this._longestInteractionList.splice(Dl);
          for (let t of e) this._longestInteractionMap.delete(t.id);
        }
        this._onAfterProcessingINPCandidate?.(n);
      }
    }
  },
  jl = (e) => {
    let t = H.requestIdleCallback || H.setTimeout;
    H.document?.visibilityState === `hidden`
      ? e()
      : ((e = ml(e)),
        el(`visibilitychange`, e, { once: !0, capture: !0 }),
        el(`pagehide`, e, { once: !0, capture: !0 }),
        t(() => {
          e(),
            tl(`visibilitychange`, e, { capture: !0 }),
            tl(`pagehide`, e, { capture: !0 });
        }));
  },
  Ml = [200, 500],
  Nl = 40,
  Pl = (e, t = {}) => {
    if (
      !(
        globalThis.PerformanceEventTiming &&
        `interactionId` in PerformanceEventTiming.prototype
      )
    )
      return;
    let n = ol();
    hl(() => {
      El();
      let r = ll(`INP`),
        i,
        a = dl(t, Al),
        o = (e) => {
          jl(() => {
            for (let t of e) a._processEntry(t);
            let t = a._estimateP98LongestInteraction();
            t &&
              t._latency !== r.value &&
              ((r.value = t._latency), (r.entries = t.entries), i());
          });
        },
        s = pl(`event`, o, { durationThreshold: t.durationThreshold ?? Nl });
      (i = Zc(e, r, Ml, t.reportAllChanges)),
        s &&
          (s.observe({ type: `first-input`, buffered: !0 }),
          n.onHidden(() => {
            o(s.takeRecords()), i(!0);
          }));
    });
  },
  Fl = class {
    _processEntry(e) {
      this._onBeforeProcessingEntry?.(e);
    }
  },
  Il = [2500, 4e3],
  Ll = (e, t = {}) => {
    hl(() => {
      let n = ol(),
        r = ll(`LCP`),
        i,
        a = dl(t, Fl),
        o = (e) => {
          t.reportAllChanges || (e = e.slice(-1));
          for (let t of e)
            a._processEntry(t),
              t.startTime < n.firstHiddenTime &&
                ((r.value = Math.max(t.startTime - $c(), 0)),
                (r.entries = [t]),
                i());
        },
        s = pl(`largest-contentful-paint`, o);
      if (s) {
        i = Zc(e, r, Il, t.reportAllChanges);
        let n = ml(() => {
            o(s.takeRecords()), s.disconnect(), i(!0);
          }),
          a = (e) => {
            e.isTrusted && (jl(n), tl(e.type, a, { capture: !0 }));
          };
        for (let e of [`keydown`, `click`, `visibilitychange`])
          el(e, a, { capture: !0 });
      }
    });
  },
  Rl = [800, 1800],
  zl = (e) => {
    H.document?.prerendering
      ? hl(() => zl(e))
      : H.document?.readyState === `complete`
      ? setTimeout(e)
      : addEventListener(`load`, () => zl(e), !0);
  },
  Bl = (e, t = {}) => {
    let n = ll(`TTFB`),
      r = Zc(e, n, Rl, t.reportAllChanges);
    zl(() => {
      let e = Qc();
      e &&
        ((n.value = Math.max(e.responseStart - $c(), 0)),
        (n.entries = [e]),
        r(!0));
    });
  },
  Vl = {},
  Hl = {},
  Ul,
  Wl,
  Gl,
  Kl;
function ql(e, t = !1) {
  return ru(`cls`, e, $l, Ul, t);
}
function Jl(e, t = !1) {
  return ru(`lcp`, e, eu, Wl, t);
}
function Yl(e) {
  return ru(`ttfb`, e, tu, Gl);
}
function Xl(e) {
  return ru(`inp`, e, nu, Kl);
}
function Zl(e, t) {
  return au(e, t), Hl[e] || (iu(e), (Hl[e] = !0)), ou(e, t);
}
function Ql(e, t) {
  let n = Vl[e];
  if (n?.length)
    for (let r of n)
      try {
        r(t);
      } catch (t) {
        Yc &&
          v.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${T(r)}
Error:`,
            t
          );
      }
}
function $l() {
  return yl(
    (e) => {
      Ql(`cls`, { metric: e }), (Ul = e);
    },
    { reportAllChanges: !0 }
  );
}
function eu() {
  return Ll(
    (e) => {
      Ql(`lcp`, { metric: e }), (Wl = e);
    },
    { reportAllChanges: !0 }
  );
}
function tu() {
  return Bl((e) => {
    Ql(`ttfb`, { metric: e }), (Gl = e);
  });
}
function nu() {
  return Pl((e) => {
    Ql(`inp`, { metric: e }), (Kl = e);
  });
}
function ru(e, t, n, r, i = !1) {
  au(e, t);
  let a;
  return (
    Hl[e] || ((a = n()), (Hl[e] = !0)),
    r && t({ metric: r }),
    ou(e, t, i ? a : void 0)
  );
}
function iu(e) {
  let t = {};
  e === `event` && (t.durationThreshold = 0),
    pl(
      e,
      (t) => {
        Ql(e, { entries: t });
      },
      t
    );
}
function au(e, t) {
  (Vl[e] = Vl[e] || []), Vl[e].push(t);
}
function ou(e, t, n) {
  return () => {
    n && n();
    let r = Vl[e];
    if (!r) return;
    let i = r.indexOf(t);
    i !== -1 && r.splice(i, 1);
  };
}
function su(e) {
  return `duration` in e;
}
var cu = 80,
  lu = {};
try {
  typeof Node < `u` &&
    (lu.parentNode = Object.getOwnPropertyDescriptor(
      Node.prototype,
      `parentNode`
    ).get),
    typeof Element < `u` &&
      ((lu.tagName = Object.getOwnPropertyDescriptor(
        Element.prototype,
        `tagName`
      ).get),
      (lu.id = Object.getOwnPropertyDescriptor(Element.prototype, `id`).get),
      (lu.className = Object.getOwnPropertyDescriptor(
        Element.prototype,
        `className`
      ).get),
      (lu.getAttribute = Element.prototype.getAttribute)),
    typeof HTMLElement < `u` &&
      (lu.dataset = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        `dataset`
      ).get);
} catch {}
function uu(e, t, n) {
  let r = lu[t];
  if (r)
    try {
      return r.call(e, n);
    } catch {}
  let i = e[t];
  return typeof i == `function` ? i.call(e, n) : i;
}
function U(e, t = {}) {
  if (!e) return `<unknown>`;
  try {
    let n = e,
      r = [],
      i = 0,
      a = 0,
      o,
      s = Array.isArray(t) ? t : t.keyAttrs,
      c = (!Array.isArray(t) && t.maxStringLength) || cu;
    for (
      ;
      n &&
      i++ < 5 &&
      ((o = du(n, s)),
      !(o === `html` || (i > 1 && a + r.length * 3 + o.length >= c)));

    )
      r.push(o), (a += o.length), (n = uu(n, `parentNode`));
    return r.reverse().join(` > `);
  } catch {
    return `<unknown>`;
  }
}
function du(e, t) {
  let n = [],
    r = uu(e, `tagName`);
  if (!r) return ``;
  if (typeof HTMLElement < `u` && e instanceof HTMLElement) {
    let t = uu(e, `dataset`);
    if (t) {
      if (t.sentryComponent) return t.sentryComponent;
      if (t.sentryElement) return t.sentryElement;
    }
  }
  n.push(r.toLowerCase());
  let i = t?.length
    ? t
        .filter((t) => uu(e, `getAttribute`, t))
        .map((t) => [t, uu(e, `getAttribute`, t)])
    : null;
  if (i?.length)
    i.forEach((e) => {
      n.push(`[${e[0]}="${e[1]}"]`);
    });
  else {
    let t = uu(e, `id`);
    t && n.push(`#${t}`);
    let r = uu(e, `className`);
    if (r && ge(r)) {
      let e = r.split(/\s+/);
      for (let t of e) n.push(`.${t}`);
    }
  }
  for (let t of [`aria-label`, `type`, `name`, `title`, `alt`]) {
    let r = uu(e, `getAttribute`, t);
    r && n.push(`[${t}="${r}"]`);
  }
  return n.join(``);
}
var fu = (e) => {
  let t = (t) => {
    (t.type === `pagehide` || H.document?.visibilityState === `hidden`) && e(t);
  };
  el(`visibilitychange`, t, { capture: !0, once: !0 }),
    el(`pagehide`, t, { capture: !0, once: !0 });
};
function pu(e) {
  return typeof e == `number` && isFinite(e);
}
function mu(e, t, n, { ...r }) {
  let i = L(e).start_timestamp;
  return (
    i &&
      i > t &&
      typeof e.updateStartTime == `function` &&
      e.updateStartTime(t),
    gi(e, () => {
      let e = mi({ startTime: t, ...r });
      return e && e.end(n), e;
    })
  );
}
function hu(e) {
  let t = F();
  if (!t) return;
  let { name: n, transaction: r, attributes: i, startTime: a } = e,
    { release: o, environment: s } = t.getOptions(),
    { userInfo: c } = t.getDataCollectionOptions(),
    l = t.getIntegrationByName(`Replay`)?.getReplayId(),
    u = N(),
    d = u.getUser(),
    f = d === void 0 ? void 0 : d.email || d.id || d.ip_address,
    p;
  try {
    p = u.getScopeData().contexts.profile.profile_id;
  } catch {}
  return mi({
    name: n,
    attributes: {
      release: o,
      environment: s,
      user: f || void 0,
      profile_id: p || void 0,
      replay_id: l || void 0,
      transaction: r,
      "user_agent.original": H.navigator?.userAgent,
      "client.address": c ? `{{auto}}` : void 0,
      ...i,
    },
    startTime: a,
    experimental: { standalone: !0 },
  });
}
function gu() {
  return H.addEventListener && H.performance;
}
function W(e) {
  return e / 1e3;
}
function _u(e) {
  let t = `unknown`,
    n = `unknown`,
    r = ``;
  for (let i of e) {
    if (i === `/`) {
      [t, n] = e.split(`/`);
      break;
    }
    if (!isNaN(Number(i))) {
      (t = r === `h` ? `http` : r), (n = e.split(r)[1]);
      break;
    }
    r += i;
  }
  return r === e && (t = r), { name: t, version: n };
}
function vu(e) {
  try {
    return PerformanceObserver.supportedEntryTypes.includes(e);
  } catch {
    return !1;
  }
}
function yu(e, t) {
  let n,
    r = !1;
  function i(e) {
    !r && n && t(e, n.spanContext().spanId, n), (r = !0);
  }
  fu(() => {
    i(`pagehide`);
  });
  let a = e.on(`beforeStartNavigationSpan`, (e, t) => {
      t?.isRedirect || (i(`navigation`), a(), o());
    }),
    o = e.on(`afterStartPageLoadSpan`, (e) => {
      (n = e), o();
    });
}
function bu(e) {
  let t = 0,
    n;
  if (!vu(`layout-shift`)) return;
  let r = ql(({ metric: e }) => {
    let r = e.entries[e.entries.length - 1];
    r && ((t = e.value), (n = r));
  }, !0);
  yu(e, (e, i) => {
    xu(t, n, i, e), r();
  });
}
function xu(e, t, n, r) {
  Yc && v.log(`Sending CLS span (${e})`);
  let i = t ? W((M() || 0) + t.startTime) : j(),
    a = N().getScopeData().transactionName,
    o = t ? U(t.sources[0]?.node) : `Layout shift`,
    s = {
      [I]: `auto.http.browser.cls`,
      [nn]: `ui.webvital.cls`,
      [ln]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": r,
    };
  t?.sources &&
    t.sources.forEach((e, t) => {
      s[`cls.source.${t + 1}`] = U(e.node);
    });
  let c = hu({ name: o, transaction: a, attributes: s, startTime: i });
  c && (c.addEvent(`cls`, { [an]: ``, [on]: e }), c.end(i));
}
function Su(e) {
  return e != null && e > 0 && e <= 6e4;
}
function Cu(e) {
  let t = 0,
    n;
  if (!vu(`largest-contentful-paint`)) return;
  let r = Jl(({ metric: e }) => {
    let r = e.entries[e.entries.length - 1];
    !r || !Su(e.value) || ((t = e.value), (n = r));
  }, !0);
  yu(e, (e, i) => {
    wu(t, n, i, e), r();
  });
}
function wu(e, t, n, r) {
  if (!Su(e)) return;
  Yc && v.log(`Sending LCP span (${e})`);
  let i = W((M() || 0) + (t?.startTime || 0)),
    a = N().getScopeData().transactionName,
    o = t ? U(t.element) : `Largest contentful paint`,
    s = {
      [I]: `auto.http.browser.lcp`,
      [nn]: `ui.webvital.lcp`,
      [ln]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": r,
    };
  t &&
    (t.element && (s[`lcp.element`] = U(t.element)),
    t.id && (s[`lcp.id`] = t.id),
    t.url && (s[`lcp.url`] = t.url),
    t.loadTime != null && (s[`lcp.loadTime`] = t.loadTime),
    t.renderTime != null && (s[`lcp.renderTime`] = t.renderTime),
    t.size != null && (s[`lcp.size`] = t.size));
  let c = hu({ name: o, transaction: a, attributes: s, startTime: i });
  c && (c.addEvent(`lcp`, { [an]: `millisecond`, [on]: e }), c.end(i));
}
function Tu(e) {
  return e && ((M() || performance.timeOrigin) + e) / 1e3;
}
function Eu(e) {
  let t = {};
  if (e.nextHopProtocol != null) {
    let { name: n, version: r } = _u(e.nextHopProtocol);
    (t[`network.protocol.version`] = r), (t[`network.protocol.name`] = n);
  }
  return M() || gu()?.timeOrigin
    ? Du({
        ...t,
        "http.request.redirect_start": Tu(e.redirectStart),
        "http.request.redirect_end": Tu(e.redirectEnd),
        "http.request.worker_start": Tu(e.workerStart),
        "http.request.fetch_start": Tu(e.fetchStart),
        "http.request.domain_lookup_start": Tu(e.domainLookupStart),
        "http.request.domain_lookup_end": Tu(e.domainLookupEnd),
        "http.request.connect_start": Tu(e.connectStart),
        "http.request.secure_connection_start": Tu(e.secureConnectionStart),
        "http.request.connection_end": Tu(e.connectEnd),
        "http.request.request_start": Tu(e.requestStart),
        "http.request.response_start": Tu(e.responseStart),
        "http.request.response_end": Tu(e.responseEnd),
        "http.request.time_to_first_byte":
          e.responseStart == null ? void 0 : e.responseStart / 1e3,
      })
    : t;
}
function Du(e) {
  return Object.fromEntries(Object.entries(e).filter(([, e]) => e != null));
}
var Ou = 2147483647,
  ku = 0,
  Au = {},
  ju,
  Mu;
function Nu({
  recordClsStandaloneSpans: e,
  recordLcpStandaloneSpans: t,
  client: n,
}) {
  let r = gu();
  if (r && M()) {
    r.mark && H.performance.mark(`sentry-tracing-init`);
    let i = t ? Cu(n) : t === !1 ? Ru() : void 0,
      a = e ? bu(n) : e === !1 ? Lu() : void 0,
      o = zu(),
      s = Bu();
    return () => {
      o(), s(), i?.(), a?.();
    };
  }
  return () => void 0;
}
function Pu() {
  Zl(`longtask`, ({ entries: e }) => {
    let t = z();
    if (!t) return;
    let { op: n, start_timestamp: r } = L(t);
    for (let i of e) {
      let e = W(M() + i.startTime),
        a = W(i.duration);
      (n === `navigation` && r && e < r) ||
        mu(t, e, e + a, {
          name: `Main UI thread blocked`,
          op: `ui.long-task`,
          attributes: { [I]: `auto.ui.browser.metrics` },
        });
    }
  });
}
function Fu() {
  new PerformanceObserver((e) => {
    let t = z();
    if (t)
      for (let n of e.getEntries()) {
        if (!n.scripts[0]) continue;
        let e = W(M() + n.startTime),
          { start_timestamp: r, op: i } = L(t);
        if (i === `navigation` && r && e < r) continue;
        let a = W(n.duration),
          o = { [I]: `auto.ui.browser.metrics` },
          {
            invoker: s,
            invokerType: c,
            sourceURL: l,
            sourceFunctionName: u,
            sourceCharPosition: d,
          } = n.scripts[0];
        (o[`browser.script.invoker`] = s),
          (o[`browser.script.invoker_type`] = c),
          l && (o[`code.filepath`] = l),
          u && (o[`code.function`] = u),
          d !== -1 && (o[`browser.script.source_char_position`] = d),
          mu(t, e, e + a, {
            name: `Main UI thread blocked`,
            op: `ui.long-animation-frame`,
            attributes: o,
          });
      }
  }).observe({ type: `long-animation-frame`, buffered: !0 });
}
function Iu() {
  Zl(`event`, ({ entries: e }) => {
    let t = z();
    if (t) {
      for (let n of e)
        if (n.name === `click`) {
          let e = W(M() + n.startTime),
            r = W(n.duration),
            i = {
              name: U(n.target),
              op: `ui.interaction.${n.name}`,
              startTime: e,
              attributes: { [I]: `auto.ui.browser.metrics` },
            },
            a = wc(n.target);
          a && (i.attributes[`ui.component_name`] = a), mu(t, e, e + r, i);
        }
    }
  });
}
function Lu() {
  return ql(({ metric: e }) => {
    let t = e.entries[e.entries.length - 1];
    t && ((Au.cls = { value: e.value, unit: `` }), (Mu = t));
  }, !0);
}
function Ru() {
  return Jl(({ metric: e }) => {
    let t = e.entries[e.entries.length - 1];
    !t ||
      !Su(e.value) ||
      ((Au.lcp = { value: e.value, unit: `millisecond` }), (ju = t));
  }, !0);
}
function zu() {
  return Yl(({ metric: e }) => {
    e.entries[e.entries.length - 1] &&
      (Au.ttfb = { value: e.value, unit: `millisecond` });
  });
}
function Bu() {
  return Zl(`paint`, ({ entries: e }) => {
    let t = ol();
    for (let n of e) {
      let e = n.startTime < t.firstHiddenTime;
      n.name === `first-paint` &&
        e &&
        (Au.fp = { value: n.startTime, unit: `millisecond` }),
        n.name === `first-contentful-paint` &&
          e &&
          (Au.fcp = { value: n.startTime, unit: `millisecond` });
    }
  });
}
function Vu(e, t) {
  let n = gu(),
    r = M();
  if (!n?.getEntries || !r) return;
  let {
      spanStreamingEnabled: i,
      ignorePerformanceApiSpans: a,
      ignoreResourceSpans: o,
    } = t,
    s = W(r),
    c = n.getEntries(),
    { op: l, start_timestamp: u } = L(e);
  c.slice(ku).forEach((t) => {
    let n = W(t.startTime),
      r = W(Math.max(0, t.duration));
    if (!(l === `navigation` && u && s + n < u))
      switch (t.entryType) {
        case `navigation`:
          qu(e, t, s);
          break;
        case `mark`:
        case `paint`:
        case `measure`:
          Gu(e, t, n, r, s, a);
          break;
        case `resource`:
          Zu(e, t, t.name, n, r, s, o);
          break;
      }
  }),
    (ku = Math.max(c.length - 1, 0)),
    Qu(e, i);
}
function Hu(e, t) {
  let n = M();
  if (!gu()?.getEntries || !n) {
    Uu();
    return;
  }
  let {
      spanStreamingEnabled: r,
      recordClsOnPageloadSpan: i,
      recordLcpOnPageloadSpan: a,
    } = t,
    o = W(n);
  if (L(e).op === `pageload`) {
    if ((td(Au), r)) {
      let t = (t, n, r) => {
        let i = r ?? `browser.web_vital.${t}.value`;
        e.setAttribute(i, n),
          Yc &&
            v.log(
              `Setting web vital attribute`,
              { [i]: n },
              `on pageload span`
            );
      };
      [`ttfb`, `fp`, `fcp`].forEach((e) => {
        Au[e] && t(e, Au[e].value);
      }),
        Au[`ttfb.requestTime`] &&
          t(
            `ttfb.requestTime`,
            Au[`ttfb.requestTime`].value,
            `browser.web_vital.ttfb.request_time`
          );
    } else
      i || delete Au.cls,
        a || delete Au.lcp,
        Object.entries(Au).forEach(([t, n]) => {
          ni(t, n.value, n.unit, e);
        }),
        $u(e, t);
    e.setAttribute(
      r ? `browser.performance.time_origin` : `performance.timeOrigin`,
      o
    ),
      e.setAttribute(
        r
          ? `browser.performance.navigation.activation_start`
          : `performance.activationStart`,
        $c()
      );
  }
  Uu();
}
function Uu() {
  (ju = void 0), (Mu = void 0), (Au = {});
}
function Wu(e) {
  if (e?.entryType === `measure`)
    try {
      return e.detail.devtools.track === `Components ⚛`;
    } catch {
      return;
    }
}
function Gu(e, t, n, r, i, a) {
  if (Wu(t) || ([`mark`, `measure`].includes(t.entryType) && $e(t.name, a)))
    return;
  let o = Qc(!1),
    s = W(o ? o.requestStart : 0),
    c = i + Math.max(n, s),
    l = i + n,
    u = l + r,
    d = { [I]: `auto.resource.browser.metrics` };
  c !== l &&
    ((d[`sentry.browser.measure_happened_before_request`] = !0),
    (d[`sentry.browser.measure_start_time`] = c)),
    Ku(d, t),
    c <= u && mu(e, c, u, { name: t.name, op: t.entryType, attributes: d });
}
function Ku(e, t) {
  try {
    let n = t.detail;
    if (!n) return;
    if (typeof n == `object`) {
      for (let [t, r] of Object.entries(n))
        if (r && ve(r)) e[`sentry.browser.measure.detail.${t}`] = r;
        else if (r !== void 0)
          try {
            e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r);
          } catch {}
      return;
    }
    if (ve(n)) {
      e[`sentry.browser.measure.detail`] = n;
      return;
    }
    try {
      e[`sentry.browser.measure.detail`] = JSON.stringify(n);
    } catch {}
  } catch {}
}
function qu(e, t, n) {
  [
    `unloadEvent`,
    `redirect`,
    `domContentLoadedEvent`,
    `loadEvent`,
    `connect`,
  ].forEach((r) => {
    Ju(e, t, r, n);
  }),
    Ju(e, t, `secureConnection`, n, `TLS/SSL`),
    Ju(e, t, `fetch`, n, `cache`),
    Ju(e, t, `domainLookup`, n, `DNS`),
    Xu(e, t, n);
}
function Ju(e, t, n, r, i = n) {
  let a = t[Yu(n)],
    o = t[`${n}Start`];
  !o ||
    !a ||
    mu(e, r + W(o), r + W(a), {
      op: `browser.${i}`,
      name: t.name,
      attributes: {
        [I]: `auto.ui.browser.metrics`,
        ...(n === `redirect` && t.redirectCount != null
          ? { "http.redirect_count": t.redirectCount }
          : {}),
      },
    });
}
function Yu(e) {
  return e === `secureConnection`
    ? `connectEnd`
    : e === `fetch`
    ? `domainLookupStart`
    : `${e}End`;
}
function Xu(e, t, n) {
  let r = n + W(t.requestStart),
    i = n + W(t.responseEnd),
    a = n + W(t.responseStart);
  t.responseEnd &&
    (mu(e, r, i, {
      op: `browser.request`,
      name: t.name,
      attributes: { [I]: `auto.ui.browser.metrics` },
    }),
    mu(e, a, i, {
      op: `browser.response`,
      name: t.name,
      attributes: { [I]: `auto.ui.browser.metrics` },
    }));
}
function Zu(e, t, n, r, i, a, o) {
  if (t.initiatorType === `xmlhttprequest` || t.initiatorType === `fetch`)
    return;
  let s = t.initiatorType ? `resource.${t.initiatorType}` : `resource.other`;
  if (o?.includes(s)) return;
  let c = { [I]: `auto.resource.browser.metrics` },
    l = Qo(n);
  l.protocol && (c[`url.scheme`] = l.protocol.split(`:`).pop()),
    l.host && (c[`server.address`] = l.host),
    (c[`url.same_origin`] = n.includes(H.location.origin)),
    (c[Yi] = n),
    ed(t, c, [
      [`responseStatus`, `http.response.status_code`],
      [`transferSize`, `http.response_transfer_size`],
      [`encodedBodySize`, `http.response_content_length`],
      [`decodedBodySize`, `http.decoded_response_content_length`],
      [`renderBlockingStatus`, `resource.render_blocking_status`],
      [`deliveryType`, `http.response_delivery_type`],
    ]);
  let u = { ...c, ...Eu(t) },
    d = a + r;
  mu(e, d, d + i, {
    name: n.replace(H.location.origin, ``),
    op: s,
    attributes: u,
  });
}
function Qu(e, t) {
  let n = H.navigator;
  if (!n) return;
  let r = n.connection;
  r &&
    (r.effectiveType &&
      e.setAttribute(
        t ? `network.connection.effective_type` : `effectiveConnectionType`,
        r.effectiveType
      ),
    r.type &&
      e.setAttribute(t ? `network.connection.type` : `connectionType`, r.type),
    pu(r.rtt) &&
      (t
        ? e.setAttribute(`network.connection.rtt`, r.rtt)
        : L(e).op === `pageload` &&
          ni(`connection.rtt`, r.rtt, `millisecond`))),
    pu(n.deviceMemory) &&
      (t
        ? e.setAttribute(`device.memory.estimated_capacity`, n.deviceMemory)
        : e.setAttribute(`deviceMemory`, `${n.deviceMemory} GB`)),
    pu(n.hardwareConcurrency) &&
      (t
        ? e.setAttribute(`device.processor_count`, n.hardwareConcurrency)
        : e.setAttribute(`hardwareConcurrency`, String(n.hardwareConcurrency)));
}
function $u(e, t) {
  ju &&
    t.recordLcpOnPageloadSpan &&
    (ju.element && e.setAttribute(`lcp.element`, U(ju.element)),
    ju.id && e.setAttribute(`lcp.id`, ju.id),
    ju.url && e.setAttribute(`lcp.url`, ju.url.trim().slice(0, 200)),
    ju.loadTime != null && e.setAttribute(`lcp.loadTime`, ju.loadTime),
    ju.renderTime != null && e.setAttribute(`lcp.renderTime`, ju.renderTime),
    e.setAttribute(`lcp.size`, ju.size)),
    Mu?.sources &&
      t.recordClsOnPageloadSpan &&
      Mu.sources.forEach((t, n) =>
        e.setAttribute(`cls.source.${n + 1}`, U(t.node))
      );
}
function ed(e, t, n) {
  n.forEach(([n, r]) => {
    let i = e[n];
    i != null &&
      ((typeof i == `number` && i < Ou) || typeof i == `string`) &&
      (t[r] = i);
  });
}
function td(e) {
  let t = Qc(!1);
  if (!t) return;
  let { responseStart: n, requestStart: r } = t;
  r <= n && (e[`ttfb.requestTime`] = { value: n - r, unit: `millisecond` });
}
var nd = [],
  rd = new Map(),
  id = new Map();
function ad() {
  if (gu() && M()) {
    let e = sd();
    return () => {
      e();
    };
  }
  return () => void 0;
}
var od = {
  click: `click`,
  pointerdown: `click`,
  pointerup: `click`,
  mousedown: `click`,
  mouseup: `click`,
  touchstart: `click`,
  touchend: `click`,
  mouseover: `hover`,
  mouseout: `hover`,
  mouseenter: `hover`,
  mouseleave: `hover`,
  pointerover: `hover`,
  pointerout: `hover`,
  pointerenter: `hover`,
  pointerleave: `hover`,
  dragstart: `drag`,
  dragend: `drag`,
  drag: `drag`,
  dragenter: `drag`,
  dragleave: `drag`,
  dragover: `drag`,
  drop: `drag`,
  keydown: `press`,
  keyup: `press`,
  keypress: `press`,
  input: `press`,
};
function sd() {
  return Xl(cd);
}
var cd = ({ metric: e }) => {
  if (e.value == null) return;
  let t = W(e.value);
  if (t > 60) return;
  let n = e.entries.find((t) => t.duration === e.value && od[t.name]);
  if (!n) return;
  let { interactionId: r } = n,
    i = od[n.name],
    a = W(M() + n.startTime),
    o = z(),
    s = o ? R(o) : void 0,
    c = r == null ? void 0 : rd.get(r),
    l = c?.span || s,
    u = l ? L(l).description : N().getScopeData().transactionName,
    d = hu({
      name: c?.elementName || U(n.target),
      transaction: u,
      attributes: {
        [I]: `auto.http.browser.inp`,
        [nn]: `ui.interaction.${i}`,
        [ln]: n.duration,
      },
      startTime: a,
    });
  d &&
    (d.addEvent(`inp`, { [an]: `millisecond`, [on]: e.value }), d.end(a + t));
};
function ld(e) {
  return e == null ? void 0 : rd.get(e);
}
function ud() {
  let e = Object.keys(od);
  Ya() &&
    e.forEach((e) => {
      H.addEventListener(e, t, { capture: !0, passive: !0 });
    });
  function t(e) {
    let t = e.target;
    if (!t) return;
    let n = U(t),
      r = Math.round(e.timeStamp);
    if ((id.set(r, n), id.size > 50)) {
      let e = id.keys().next().value;
      e !== void 0 && id.delete(e);
    }
  }
  function n(e) {
    let t = Math.round(e.startTime),
      n = id.get(t);
    if (!n)
      for (let e = -5; e <= 5; e++) {
        let r = id.get(t + e);
        if (r) {
          n = r;
          break;
        }
      }
    return n || `<unknown>`;
  }
  let r = ({ entries: e }) => {
    let t = z(),
      r = t && R(t);
    e.forEach((e) => {
      if (!su(e)) return;
      let t = e.interactionId;
      if (t == null || rd.has(t)) return;
      let i = e.target ? U(e.target) : n(e);
      if (nd.length > 10) {
        let e = nd.shift();
        rd.delete(e);
      }
      nd.push(t), rd.set(t, { span: r, elementName: i });
    });
  };
  Zl(`event`, r), Zl(`first-input`, r);
}
function dd(e) {
  let {
      name: t,
      op: n,
      origin: r,
      metricName: i,
      value: a,
      attributes: o,
      parentSpan: s,
      reportEvent: c,
      startTime: l,
      endTime: u,
    } = e,
    d = N().getScopeData().transactionName,
    f = {
      [I]: r,
      [nn]: n,
      [ln]: 0,
      [`browser.web_vital.${i}.value`]: a,
      [Ji]: d,
      [qi]: d,
      "user_agent.original": H.navigator?.userAgent,
      ...o,
    };
  s &&
    nr(s).attributes?.[`sentry.op`] === `pageload` &&
    (f[`sentry.pageload.span_id`] = s.spanContext().spanId),
    c && (f[`browser.web_vital.${i}.report_event`] = c);
  let p = mi({ name: t, attributes: f, startTime: l, parentSpan: s });
  p && p.end(u ?? l);
}
function fd(e) {
  let t = 0,
    n;
  if (!vu(`largest-contentful-paint`)) return;
  let r = Jl(({ metric: e }) => {
    let r = e.entries[e.entries.length - 1];
    !r || !Su(e.value) || ((t = e.value), (n = r));
  }, !0);
  yu(e, (e, i, a) => {
    pd(t, n, a, e), r();
  });
}
function pd(e, t, n, r) {
  if (!Su(e)) return;
  Yc && v.log(`Sending LCP span (${e})`);
  let i = M() || 0,
    a = W(i),
    o = W(i + (t?.startTime || 0)),
    s = t ? U(t.element) : `Largest contentful paint`,
    c = {};
  t?.element && (c[`browser.web_vital.lcp.element`] = U(t.element)),
    t?.id && (c[`browser.web_vital.lcp.id`] = t.id),
    t?.url && (c[`browser.web_vital.lcp.url`] = t.url),
    t?.loadTime != null && (c[`browser.web_vital.lcp.load_time`] = t.loadTime),
    t?.renderTime != null &&
      (c[`browser.web_vital.lcp.render_time`] = t.renderTime),
    t?.size != null && (c[`browser.web_vital.lcp.size`] = t.size),
    dd({
      name: s,
      op: `ui.webvital.lcp`,
      origin: `auto.http.browser.lcp`,
      metricName: `lcp`,
      value: e,
      attributes: c,
      parentSpan: n,
      reportEvent: r,
      startTime: a,
      endTime: o,
    });
}
function md(e) {
  let t = 0,
    n;
  if (!vu(`layout-shift`)) return;
  let r = ql(({ metric: e }) => {
    let r = e.entries[e.entries.length - 1];
    r && ((t = e.value), (n = r));
  }, !0);
  yu(e, (e, i, a) => {
    hd(t, n, a, e), r();
  });
}
function hd(e, t, n, r) {
  Yc && v.log(`Sending CLS span (${e})`);
  let i = t ? W((M() || 0) + t.startTime) : j(),
    a = t ? U(t.sources[0]?.node) : `Layout shift`,
    o = {};
  t?.sources &&
    t.sources.forEach((e, t) => {
      o[`browser.web_vital.cls.source.${t + 1}`] = U(e.node);
    }),
    dd({
      name: a,
      op: `ui.webvital.cls`,
      origin: `auto.http.browser.cls`,
      metricName: `cls`,
      value: e,
      attributes: o,
      parentSpan: n,
      reportEvent: r,
      startTime: i,
    });
}
function gd() {
  !gu() ||
    !M() ||
    Xl(({ metric: e }) => {
      if (e.value == null || W(e.value) > 60) return;
      let t = e.entries.find((t) => t.duration === e.value && od[t.name]);
      t && _d(e.value, t);
    });
}
function _d(e, t) {
  Yc && v.log(`Sending INP span (${e})`);
  let n = W(M() + t.startTime),
    r = W(e),
    i = od[t.name],
    a = ld(t.interactionId),
    o = z(),
    s = o ? R(o) : void 0,
    c = a?.span || s,
    l = c ? nr(c).name : N().getScopeData().transactionName;
  dd({
    name: a?.elementName || U(t.target),
    op: `ui.interaction.${i}`,
    origin: `auto.http.browser.inp`,
    metricName: `inp`,
    value: e,
    attributes: { [ln]: t.duration, [Ji]: l, [qi]: l },
    startTime: n,
    endTime: n + r,
    parentSpan: c,
  });
}
var vd = 1e3,
  yd,
  bd,
  xd;
function Sd(e) {
  E(`dom`, e), D(`dom`, Cd);
}
function Cd() {
  if (!H.document) return;
  let e = O.bind(null, `dom`),
    t = Ed(e, !0);
  H.document.addEventListener(`click`, t, !1),
    H.document.addEventListener(`keypress`, t, !1),
    [`EventTarget`, `Node`].forEach((t) => {
      let n = H[t]?.prototype;
      n?.hasOwnProperty?.(`addEventListener`) &&
        (Ee(n, `addEventListener`, function (t) {
          return function (n, r, i) {
            if (n === `click` || n == `keypress`)
              try {
                let r = (this.__sentry_instrumentation_handlers__ =
                    this.__sentry_instrumentation_handlers__ || {}),
                  a = (r[n] = r[n] || { refCount: 0 });
                if (!a.handler) {
                  let r = Ed(e);
                  (a.handler = r), t.call(this, n, r, i);
                }
                a.refCount++;
              } catch {}
            return t.call(this, n, r, i);
          };
        }),
        Ee(n, `removeEventListener`, function (e) {
          return function (t, n, r) {
            if (t === `click` || t == `keypress`)
              try {
                let n = this.__sentry_instrumentation_handlers__ || {},
                  i = n[t];
                i &&
                  (i.refCount--,
                  i.refCount <= 0 &&
                    (e.call(this, t, i.handler, r),
                    (i.handler = void 0),
                    delete n[t]),
                  Object.keys(n).length === 0 &&
                    delete this.__sentry_instrumentation_handlers__);
              } catch {}
            return e.call(this, t, n, r);
          };
        }));
    });
}
function wd(e) {
  if (e.type !== bd) return !1;
  try {
    if (!e.target || e.target._sentryId !== xd) return !1;
  } catch {}
  return !0;
}
function Td(e, t) {
  return e === `keypress`
    ? !t?.tagName ||
        !(
          t.tagName === `INPUT` ||
          t.tagName === `TEXTAREA` ||
          t.isContentEditable
        )
    : !1;
}
function Ed(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    let r = Dd(n);
    if (Td(n.type, r)) return;
    A(n, `_sentryCaptured`, !0), r && !r._sentryId && A(r, `_sentryId`, rt());
    let i = n.type === `keypress` ? `input` : n.type;
    wd(n) ||
      (e({ event: n, name: i, global: t }),
      (bd = n.type),
      (xd = r ? r._sentryId : void 0)),
      clearTimeout(yd),
      (yd = H.setTimeout(() => {
        (xd = void 0), (bd = void 0);
      }, vd));
  };
}
function Dd(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
var Od;
function kd(e) {
  let t = `history`;
  E(t, e), D(t, Ad);
}
function Ad() {
  if (
    (H.addEventListener(`popstate`, () => {
      let e = H.location.href,
        t = Od;
      (Od = e), t !== e && O(`history`, { from: t, to: e });
    }),
    !lc())
  )
    return;
  function e(e) {
    return function (...t) {
      let n = t.length > 2 ? t[2] : void 0;
      if (n) {
        let r = Od,
          i = jd(String(n));
        if (((Od = i), r === i)) return e.apply(this, t);
        O(`history`, { from: r, to: i });
      }
      return e.apply(this, t);
    };
  }
  Ee(H.history, `pushState`, e), Ee(H.history, `replaceState`, e);
}
function jd(e) {
  try {
    return new URL(e, H.location.origin).toString();
  } catch {
    return e;
  }
}
var Md = {};
function Nd(e) {
  let t = Md[e];
  if (t) return t;
  let n = H[e];
  if (dc(n)) return (Md[e] = n.bind(H));
  let r = H.document;
  if (r && typeof r.createElement == `function`)
    try {
      let t = r.createElement(`iframe`);
      (t.hidden = !0), r.head.appendChild(t);
      let i = t.contentWindow;
      i?.[e] && (n = i[e]), r.head.removeChild(t);
    } catch (t) {
      Yc &&
        v.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          t
        );
    }
  return n && (Md[e] = n.bind(H));
}
function Pd(e) {
  Md[e] = void 0;
}
function Fd(...e) {
  return Nd(`setTimeout`)(...e);
}
var Id = `__sentry_xhr_v3__`;
function Ld(e) {
  E(`xhr`, e), D(`xhr`, Rd);
}
function Rd() {
  if (!H.XMLHttpRequest) return;
  let e = XMLHttpRequest.prototype;
  (e.open = new Proxy(e.open, {
    apply(e, t, n) {
      let r = Error(),
        i = j() * 1e3,
        a = ge(n[0]) ? n[0].toUpperCase() : void 0,
        o = zd(n[1]);
      if (!a || !o) return e.apply(t, n);
      (t[Id] = { method: a, url: o, request_headers: {} }),
        a === `POST` &&
          o.match(/sentry_key/) &&
          (t.__sentry_own_request__ = !0);
      let s = () => {
        let e = t[Id];
        if (e && t.readyState === 4) {
          try {
            e.status_code = t.status;
          } catch {}
          O(`xhr`, {
            endTimestamp: j() * 1e3,
            startTimestamp: i,
            xhr: t,
            virtualError: r,
          }),
            t.removeEventListener(`readystatechange`, s);
        }
      };
      return (
        `onreadystatechange` in t && typeof t.onreadystatechange == `function`
          ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
              apply(e, t, n) {
                return s(), e.apply(t, n);
              },
            }))
          : t.addEventListener(`readystatechange`, s),
        (t.setRequestHeader = new Proxy(t.setRequestHeader, {
          apply(e, t, n) {
            let [r, i] = n,
              a = t[Id];
            return (
              a && ge(r) && ge(i) && (a.request_headers[r.toLowerCase()] = i),
              e.apply(t, n)
            );
          },
        })),
        e.apply(t, n)
      );
    },
  })),
    (e.send = new Proxy(e.send, {
      apply(e, t, n) {
        let r = t[Id];
        return r
          ? (n[0] !== void 0 && (r.body = n[0]),
            O(`xhr`, { startTimestamp: j() * 1e3, xhr: t }),
            e.apply(t, n))
          : e.apply(t, n);
      },
    }));
}
function zd(e) {
  if (ge(e)) return e;
  try {
    return e.toString();
  } catch {}
}
var Bd = Symbol.for(`sentry__originalRequestBody`);
function Vd(e) {
  return new URLSearchParams(e).toString();
}
function Hd(e, t = v) {
  try {
    if (typeof e == `string`) return [e];
    if (e instanceof URLSearchParams) return [e.toString()];
    if (e instanceof FormData) return [Vd(e)];
    if (!e) return [void 0];
  } catch (n) {
    return (
      Yc && t.error(n, `Failed to serialize body`, e),
      [void 0, `BODY_PARSE_ERROR`]
    );
  }
  return (
    Yc && t.log(`Skipping network body because of body type`, e),
    [void 0, `UNPARSEABLE_BODY_TYPE`]
  );
}
function Ud(e = []) {
  if (e.length >= 2 && e[1] && typeof e[1] == `object` && `body` in e[1])
    return e[1].body;
  if (e.length >= 1 && e[0] instanceof Request) {
    let t = e[0][Bd];
    return t === void 0 ? void 0 : t;
  }
}
function Wd(e) {
  let t;
  try {
    t = e.getAllResponseHeaders();
  } catch (t) {
    return Yc && v.error(t, `Failed to get xhr response headers`, e), {};
  }
  return t
    ? t
        .split(
          `\r
`
        )
        .reduce((e, t) => {
          let [n, r] = t.split(`: `);
          return r && (e[n.toLowerCase()] = r), e;
        }, {})
    : {};
}
function Gd(e) {
  if (typeof Element > `u`) return !1;
  try {
    return e instanceof Element;
  } catch {
    return !1;
  }
}
function Kd(e) {
  try {
    return new URL(e, H.location.origin).toString();
  } catch {
    return e;
  }
}
var qd = 40;
function Jd(e, t = Nd(`fetch`)) {
  let n = 0,
    r = 0;
  async function i(i) {
    let a = i.body.length;
    (n += a), r++;
    let o = {
      body: i.body,
      method: `POST`,
      referrerPolicy: `strict-origin`,
      headers: e.headers,
      keepalive: n <= 6e4 && r < 15,
      ...e.fetchOptions,
    };
    try {
      let n = await t(e.url, o);
      return {
        statusCode: n.status,
        headers: {
          "x-sentry-rate-limits": n.headers.get(`X-Sentry-Rate-Limits`),
          "retry-after": n.headers.get(`Retry-After`),
        },
      };
    } catch (e) {
      throw (Pd(`fetch`), e);
    } finally {
      (n -= a), r--;
    }
  }
  return _o(e, i, uo(e.bufferSize || qd));
}
var Yd = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  Xd = 30,
  Zd = 50;
function Qd(e, t, n, r) {
  let i = { filename: e, function: t === `<anonymous>` ? `?` : t, in_app: !0 };
  return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i;
}
var $d = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  ef =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  tf = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  nf = /at (.+?) ?\(data:(.+?),/,
  rf = [
    Xd,
    (e) => {
      let t = e.match(nf);
      if (t) return { filename: `<data:${t[2]}>`, function: t[1] };
      let n = $d.exec(e);
      if (n) {
        let [, e, t, r] = n;
        return Qd(e, `?`, +t, +r);
      }
      let r = ef.exec(e);
      if (r) {
        if (r[2]?.indexOf(`eval`) === 0) {
          let e = tf.exec(r[2]);
          e && ((r[2] = e[1]), (r[3] = e[2]), (r[4] = e[3]));
        }
        let [e, t] = cf(r[1] || `?`, r[2]);
        return Qd(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
      }
    },
  ],
  af =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  of = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  sf = S(rf, [
    Zd,
    (e) => {
      let t = af.exec(e);
      if (t) {
        if (t[3] && t[3].indexOf(` > eval`) > -1) {
          let e = of.exec(t[3]);
          e &&
            ((t[1] = t[1] || `eval`),
            (t[3] = e[1]),
            (t[4] = e[2]),
            (t[5] = ``));
        }
        let e = t[3],
          n = t[1] || `?`;
        return (
          ([n, e] = cf(n, e)),
          Qd(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        );
      }
    },
  ]),
  cf = (e, t) => {
    let n = e.indexOf(`safari-extension`) !== -1,
      r = e.indexOf(`safari-web-extension`) !== -1;
    return n || r
      ? [
          e.indexOf(`@`) === -1 ? `?` : e.split(`@`)[0],
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  },
  lf = 1024,
  uf = `Breadcrumbs`,
  df = B((e = {}) => {
    let t = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...e,
    };
    return {
      name: uf,
      setup(e) {
        t.console && Rs(mf(e)),
          t.dom && Sd(pf(e, t.dom)),
          t.xhr && Ld(hf(e)),
          t.fetch && pc(gf(e)),
          t.history && kd(_f(e)),
          t.sentry && e.on(`beforeSendEvent`, ff(e));
      },
    };
  });
function ff(e) {
  return function (t) {
    F() === e &&
      ps(
        {
          category: `sentry.${
            t.type === `transaction` ? `transaction` : `event`
          }`,
          event_id: t.event_id,
          level: t.level,
          message: at(t),
        },
        { event: t }
      );
  };
}
function pf(e, t) {
  return function (n) {
    if (F() !== e) return;
    let r,
      i,
      a = typeof t == `object` ? t.serializeAttribute : void 0,
      o =
        typeof t == `object` && typeof t.maxStringLength == `number`
          ? t.maxStringLength
          : void 0;
    o &&
      o > lf &&
      (Yd &&
        v.warn(
          `\`dom.maxStringLength\` cannot exceed ${lf}, but a value of ${o} was configured. Sentry will use ${lf} instead.`
        ),
      (o = lf)),
      typeof a == `string` && (a = [a]);
    try {
      let e = n.event,
        t = vf(e) ? e.target : e;
      (r = U(t, { keyAttrs: a, maxStringLength: o })), (i = wc(t));
    } catch {
      r = `<unknown>`;
    }
    if (r.length === 0) return;
    let s = { category: `ui.${n.name}`, message: r };
    i && (s.data = { "ui.component_name": i }),
      ps(s, { event: n.event, name: n.name, global: n.global });
  };
}
function mf(e) {
  return function (t) {
    if (F() !== e) return;
    let n = {
      category: `console`,
      data: { arguments: t.args, logger: `console` },
      level: Vs(t.level),
      message: Ze(t.args, ` `),
    };
    if (t.level === `assert`)
      if (t.args[0] === !1)
        (n.message = `Assertion failed: ${
          Ze(t.args.slice(1), ` `) || `console.assert`
        }`),
          (n.data.arguments = t.args.slice(1));
      else return;
    ps(n, { input: t.args, level: t.level });
  };
}
function hf(e) {
  return function (t) {
    if (F() !== e) return;
    let { startTimestamp: n, endTimestamp: r } = t,
      i = t.xhr[Id];
    if (!n || !r || !i) return;
    let { method: a, url: o, status_code: s, body: c } = i,
      l = { method: a, url: o, status_code: s },
      u = { xhr: t.xhr, input: c, startTimestamp: n, endTimestamp: r },
      d = { category: `xhr`, data: l, type: `http`, level: sc(s) };
    e.emit(`beforeOutgoingRequestBreadcrumb`, d, u), ps(d, u);
  };
}
function gf(e) {
  return function (t) {
    if (F() !== e) return;
    let { startTimestamp: n, endTimestamp: r } = t;
    if (
      r &&
      !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === `POST`)
    )
      if (t.error) {
        let i = {
            data: t.error,
            input: t.args,
            startTimestamp: n,
            endTimestamp: r,
          },
          a = {
            category: `fetch`,
            data: t.fetchData,
            level: `error`,
            type: `http`,
          };
        e.emit(`beforeOutgoingRequestBreadcrumb`, a, i), ps(a, i);
      } else {
        let i = t.response,
          a = { ...t.fetchData, status_code: i?.status },
          o = {
            input: t.args,
            response: i,
            startTimestamp: n,
            endTimestamp: r,
          },
          s = {
            category: `fetch`,
            data: a,
            type: `http`,
            level: sc(a.status_code),
          };
        e.emit(`beforeOutgoingRequestBreadcrumb`, s, o), ps(s, o);
      }
  };
}
function _f(e) {
  return function (t) {
    if (F() !== e) return;
    let n = t.from,
      r = t.to,
      i = Qo(V.location.href),
      a = n ? Qo(n) : void 0,
      o = Qo(r);
    a?.path || (a = i),
      i.protocol === o.protocol && i.host === o.host && (r = o.relative),
      i.protocol === a.protocol && i.host === a.host && (n = a.relative),
      ps({ category: `navigation`, data: { from: n, to: r } });
  };
}
function vf(e) {
  return !!e && !!e.target;
}
var yf =
    `EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload`.split(
      `,`
    ),
  bf = `BrowserApiErrors`,
  xf = B((e = {}) => {
    let t = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      unregisterOriginalCallbacks: !1,
      ...e,
    };
    return {
      name: bf,
      setupOnce() {
        t.setTimeout && Ee(V, `setTimeout`, Sf),
          t.setInterval && Ee(V, `setInterval`, Sf),
          t.requestAnimationFrame && Ee(V, `requestAnimationFrame`, Cf),
          t.XMLHttpRequest &&
            `XMLHttpRequest` in V &&
            Ee(XMLHttpRequest.prototype, `send`, wf);
        let e = t.eventTarget;
        e && (Array.isArray(e) ? e : yf).forEach((e) => Tf(e, t));
      },
    };
  });
function Sf(e) {
  return function (...t) {
    let n = t[0];
    return (
      (t[0] = Oc(n, {
        mechanism: {
          handled: !1,
          type: `auto.browser.browserapierrors.${T(e)}`,
        },
      })),
      e.apply(this, t)
    );
  };
}
function Cf(e) {
  return function (t) {
    return e.apply(this, [
      Oc(t, {
        mechanism: {
          data: { handler: T(e) },
          handled: !1,
          type: `auto.browser.browserapierrors.requestAnimationFrame`,
        },
      }),
    ]);
  };
}
function wf(e) {
  return function (...t) {
    let n = this;
    return (
      [`onload`, `onerror`, `onprogress`, `onreadystatechange`].forEach((e) => {
        e in n &&
          typeof n[e] == `function` &&
          Ee(n, e, function (t) {
            let n = {
                mechanism: {
                  data: { handler: T(t) },
                  handled: !1,
                  type: `auto.browser.browserapierrors.xhr.${e}`,
                },
              },
              r = Oe(t);
            return r && (n.mechanism.data.handler = T(r)), Oc(t, n);
          });
      }),
      e.apply(this, t)
    );
  };
}
function Tf(e, t) {
  let n = V[e]?.prototype;
  n?.hasOwnProperty?.(`addEventListener`) &&
    (Ee(n, `addEventListener`, function (n) {
      return function (r, i, a) {
        try {
          Ef(i) &&
            (i.handleEvent = Oc(i.handleEvent, {
              mechanism: {
                data: { handler: T(i), target: e },
                handled: !1,
                type: `auto.browser.browserapierrors.handleEvent`,
              },
            }));
        } catch {}
        return (
          t.unregisterOriginalCallbacks && Df(this, r, i),
          n.apply(this, [
            r,
            Oc(i, {
              mechanism: {
                data: { handler: T(i), target: e },
                handled: !1,
                type: `auto.browser.browserapierrors.addEventListener`,
              },
            }),
            a,
          ])
        );
      };
    }),
    Ee(n, `removeEventListener`, function (e) {
      return function (t, n, r) {
        try {
          if (Object.prototype.hasOwnProperty.call(n, `__sentry_wrapped__`)) {
            let i = n.__sentry_wrapped__;
            i && e.call(this, t, i, r);
          }
        } catch {}
        return e.call(this, t, n, r);
      };
    }));
}
function Ef(e) {
  return typeof e.handleEvent == `function`;
}
function Df(e, t, n) {
  e &&
    typeof e == `object` &&
    `removeEventListener` in e &&
    typeof e.removeEventListener == `function` &&
    e.removeEventListener(t, n);
}
var Of = B((e = {}) => {
    let t = e.lifecycle ?? `route`;
    return {
      name: `BrowserSession`,
      setupOnce() {
        if (V.document === void 0) {
          Yd &&
            v.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          return;
        }
        ja({ ignoreDuration: !0 });
        let e = !1;
        jl(() => {
          e ||= (Pa(), !0);
        });
        let n = P(),
          r = n.getUser();
        n.addScopeListener((t) => {
          let n = t.getUser();
          (r?.id !== n?.id || r?.ip_address !== n?.ip_address) &&
            ((r = n), e && Pa());
        }),
          t === `route` &&
            kd(({ from: t, to: n }) => {
              t !== n && (ja({ ignoreDuration: !0 }), Pa(), (e = !0));
            });
      },
    };
  }),
  kf = `CultureContext`,
  Af = B(() => ({
    name: kf,
    preprocessEvent(e) {
      let t = jf();
      t &&
        (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    },
    processSegmentSpan(e) {
      let t = jf();
      t &&
        Qi(e, {
          "culture.locale": t.locale,
          "culture.timezone": t.timezone,
          "culture.calendar": t.calendar,
        });
    },
  }));
function jf() {
  try {
    let e = V.Intl;
    if (!e) return;
    let t = e.DateTimeFormat().resolvedOptions();
    return { locale: t.locale, timezone: t.timeZone, calendar: t.calendar };
  } catch {
    return;
  }
}
var Mf = `GlobalHandlers`,
  Nf = B((e = {}) => {
    let t = { onerror: !0, onunhandledrejection: !0, ...e };
    return {
      name: Mf,
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(e) {
        t.onerror && (Pf(e), zf(`onerror`)),
          t.onunhandledrejection && (Ff(e), zf(`onunhandledrejection`));
      },
    };
  });
function Pf(e) {
  ae((t) => {
    let { stackParser: n, attachStacktrace: r } = Bf();
    if (F() !== e || Ec()) return;
    let { msg: i, url: a, line: o, column: s, error: c } = t,
      l = Rf(Hc(n, c || i, void 0, r, !1), a, o, s);
    (l.level = `error`),
      Ta(l, {
        originalException: c,
        mechanism: {
          handled: !1,
          type: `auto.browser.global_handlers.onerror`,
        },
      });
  });
}
function Ff(e) {
  ce((t) => {
    let { stackParser: n, attachStacktrace: r } = Bf();
    if (F() !== e || Ec()) return;
    let i = If(t),
      a = ve(i) ? Lf(i) : Hc(n, i, void 0, r, !0);
    (a.level = `error`),
      Ta(a, {
        originalException: i,
        mechanism: {
          handled: !1,
          type: `auto.browser.global_handlers.onunhandledrejection`,
        },
      });
  });
}
function If(e) {
  if (ve(e)) return e;
  try {
    if (`reason` in e) return e.reason;
    if (`detail` in e && `reason` in e.detail) return e.detail.reason;
  } catch {}
  return e;
}
function Lf(e) {
  return {
    exception: {
      values: [
        {
          type: `UnhandledRejection`,
          value: `Non-Error promise rejection captured with value: ${String(
            e
          )}`,
        },
      ],
    },
  };
}
function Rf(e, t, n, r) {
  let i = (e.exception = e.exception || {}),
    a = (i.values = i.values || []),
    o = (a[0] = a[0] || {}),
    s = (o.stacktrace = o.stacktrace || {}),
    c = (s.frames = s.frames || []);
  return (
    c.length === 0 &&
      c.push({
        colno: r,
        lineno: n,
        filename: Vf(t) ?? Cc(),
        function: `?`,
        in_app: !0,
      }),
    e
  );
}
function zf(e) {
  Yd && v.log(`Global Handler attached: ${e}`);
}
function Bf() {
  return F()?.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
function Vf(e) {
  if (!(!ge(e) || e.length === 0))
    return e.startsWith(`data:`) ? `<${es(e, !1)}>` : e;
}
var Hf = B(() => ({
    name: `HttpContext`,
    preprocessEvent(e) {
      if (!V.navigator && !V.location && !V.document) return;
      let t = kc(),
        n = { ...t.headers, ...e.request?.headers };
      e.request = { ...t, ...e.request, headers: n };
    },
    processSegmentSpan(e) {
      let t = e.attributes?.[nn];
      if (!V.navigator && !V.location && !V.document) return;
      let n = kc();
      Qi(e, {
        [Yi]: t === `http.client` ? void 0 : n.url,
        "http.request.header.user_agent": n.headers[`User-Agent`],
        "http.request.header.referer": n.headers.Referer,
      });
    },
  })),
  Uf = `cause`,
  Wf = 5,
  Gf = `LinkedErrors`,
  Kf = B((e = {}) => {
    let t = e.limit || Wf,
      n = e.key || Uf;
    return {
      name: Gf,
      preprocessEvent(e, r, i) {
        As(Ac, i.getOptions().stackParser, n, t, e, r);
      },
    };
  }),
  qf = /^HTML(\w*)Element$/;
function Jf(e) {
  if (typeof window < `u` && e === window) return `[Window]`;
  if (typeof document < `u` && e === document) return `[Document]`;
  if (Gd(e)) {
    let t = Yf(e);
    if (qf.test(t)) return `[HTMLElement: ${U(e)}]`;
  }
}
function Yf(e) {
  let t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : `null prototype`;
}
function Xf() {
  return Zf()
    ? (Yd &&
        l(() => {
          console.error(
            `[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/`
          );
        }),
      !0)
    : !1;
}
function Zf() {
  if (V.window === void 0) return !1;
  let e = V;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) return !1;
  let t = Cc();
  return !(
    V === V.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      t
    )
  );
}
function Qf(e) {
  return [bs(), gs(), Zs(), xf(), df(), Nf(), Kf(), Us(), Hf(), Af(), Of()];
}
function $f(e = {}) {
  let t = !e.skipBrowserExtensionCheck && Xf(),
    n = e.defaultIntegrations == null ? Qf() : e.defaultIntegrations,
    r = {
      ...e,
      enabled: !t && e.enabled,
      stackParser: C(e.stackParser || sf),
      integrations: Ha({
        integrations: e.integrations,
        defaultIntegrations: n,
      }),
      transport: e.transport || Jd,
    };
  return Ve(Jf), Ko(qc, r);
}
var G = t,
  ep = `sentryReplaySession`,
  tp = `replay_event`,
  np = `Unable to send Replay`,
  rp = 3e5,
  ip = 9e5,
  ap = 5e3,
  op = 5500,
  sp = 6e4,
  cp = 5e3,
  lp = 3,
  up = 15e4,
  dp = 5e3,
  fp = 3e3,
  pp = 300,
  mp = 2e7,
  hp = 4999,
  gp = 5e4,
  _p = 36e5,
  vp = Object.defineProperty,
  yp = (e, t, n) =>
    t in e
      ? vp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  bp = (e, t, n) => yp(e, typeof t == `symbol` ? t : t + ``, n),
  K = ((e) => (
    (e[(e.Document = 0)] = `Document`),
    (e[(e.DocumentType = 1)] = `DocumentType`),
    (e[(e.Element = 2)] = `Element`),
    (e[(e.Text = 3)] = `Text`),
    (e[(e.CDATA = 4)] = `CDATA`),
    (e[(e.Comment = 5)] = `Comment`),
    e
  ))(K || {});
function xp(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Sp(e) {
  return e?.host?.shadowRoot === e;
}
function Cp(e) {
  return Object.prototype.toString.call(e) === `[object ShadowRoot]`;
}
function wp(e) {
  return (
    e.includes(` background-clip: text;`) &&
      !e.includes(` -webkit-background-clip: text;`) &&
      (e = e.replace(
        /\sbackground-clip:\s*text;/g,
        ` -webkit-background-clip: text; background-clip: text;`
      )),
    e
  );
}
function Tp(e) {
  let { cssText: t } = e;
  if (t.split(`"`).length < 3) return t;
  let n = [`@import`, `url(${JSON.stringify(e.href)})`];
  return (
    e.layerName === ``
      ? n.push(`layer`)
      : e.layerName && n.push(`layer(${e.layerName})`),
    e.supportsText && n.push(`supports(${e.supportsText})`),
    e.media.length && n.push(e.media.mediaText),
    n.join(` `) + `;`
  );
}
function Ep(e) {
  try {
    let t = e.rules || e.cssRules;
    return t ? wp(Array.from(t, Op).join(``)) : null;
  } catch {
    return null;
  }
}
function Dp(e) {
  let t = ``;
  for (let n = 0; n < e.style.length; n++) {
    let r = e.style,
      i = r[n],
      a = r.getPropertyPriority(i);
    t += `${i}:${r.getPropertyValue(i)}${a ? ` !important` : ``};`;
  }
  return `${e.selectorText} { ${t} }`;
}
function Op(e) {
  let t;
  if (Ap(e))
    try {
      t = Ep(e.styleSheet) || Tp(e);
    } catch {}
  else if (jp(e)) {
    let t = e.cssText,
      n = e.selectorText.includes(`:`),
      r = typeof e.style.all == `string` && e.style.all;
    if ((r && (t = Dp(e)), n && (t = kp(t)), n || r)) return t;
  }
  return t || e.cssText;
}
function kp(e) {
  return e.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, `$1\\$2`);
}
function Ap(e) {
  return `styleSheet` in e;
}
function jp(e) {
  return `selectorText` in e;
}
var Mp = class {
  constructor() {
    bp(this, `idNodeMap`, new Map()), bp(this, `nodeMetaMap`, new WeakMap());
  }
  getId(e) {
    return e ? this.getMeta(e)?.id ?? -1 : -1;
  }
  getNode(e) {
    return this.idNodeMap.get(e) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(e) {
    return this.nodeMetaMap.get(e) || null;
  }
  removeNodeFromMap(e) {
    let t = this.getId(e);
    this.idNodeMap.delete(t),
      e.childNodes && e.childNodes.forEach((e) => this.removeNodeFromMap(e));
  }
  has(e) {
    return this.idNodeMap.has(e);
  }
  hasNode(e) {
    return this.nodeMetaMap.has(e);
  }
  add(e, t) {
    let n = t.id;
    this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
  }
  replace(e, t) {
    let n = this.getNode(e);
    if (n) {
      let e = this.nodeMetaMap.get(n);
      e && this.nodeMetaMap.set(t, e);
    }
    this.idNodeMap.set(e, t);
  }
  reset() {
    (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
  }
};
function Np() {
  return new Mp();
}
function Pp({ maskInputOptions: e, tagName: t, type: n }) {
  return (
    t === `OPTION` && (t = `SELECT`),
    !!(
      e[t.toLowerCase()] ||
      (n && e[n]) ||
      n === `password` ||
      (t === `INPUT` && !n && e.text)
    )
  );
}
function Fp({ isMasked: e, element: t, value: n, maskInputFn: r }) {
  let i = n || ``;
  return e ? (r && (i = r(i, t)), `*`.repeat(i.length)) : i;
}
function Ip(e) {
  return e.toLowerCase();
}
function Lp(e) {
  return e.toUpperCase();
}
var Rp = `__rrweb_original__`;
function zp(e) {
  let t = e.getContext(`2d`);
  if (!t) return !0;
  for (let n = 0; n < e.width; n += 50)
    for (let r = 0; r < e.height; r += 50) {
      let i = t.getImageData,
        a = Rp in i ? i[Rp] : i;
      if (
        new Uint32Array(
          a.call(
            t,
            n,
            r,
            Math.min(50, e.width - n),
            Math.min(50, e.height - r)
          ).data.buffer
        ).some((e) => e !== 0)
      )
        return !1;
    }
  return !0;
}
function Bp(e) {
  let t = e.type;
  return e.hasAttribute(`data-rr-is-password`) ? `password` : t ? Ip(t) : null;
}
function Vp(e, t, n) {
  return t === `INPUT` && (n === `radio` || n === `checkbox`)
    ? e.getAttribute(`value`) || ``
    : e.value;
}
function Hp(e, t) {
  let n;
  try {
    n = new URL(e, t ?? window.location.href);
  } catch {
    return null;
  }
  return n.pathname.match(/\.([0-9a-z]+)(?:$)/i)?.[1] ?? null;
}
var Up = {};
function Wp(e) {
  let t = Up[e];
  if (t) return t;
  let n = window.document,
    r = window[e];
  if (n && typeof n.createElement == `function`)
    try {
      let t = n.createElement(`iframe`);
      (t.hidden = !0), n.head.appendChild(t);
      let i = t.contentWindow;
      i && i[e] && (r = i[e]), n.head.removeChild(t);
    } catch {}
  return (Up[e] = r.bind(window));
}
function Gp(...e) {
  return Wp(`setTimeout`)(...e);
}
function Kp(...e) {
  return Wp(`clearTimeout`)(...e);
}
function qp(e) {
  try {
    return e.contentDocument;
  } catch {}
}
function Jp(e) {
  try {
    return e.contentWindow;
  } catch {}
}
var Yp = 1,
  Xp = RegExp(`[^a-z0-9-_:]`),
  Zp = -2;
function Qp() {
  return Yp++;
}
function $p(e) {
  if (e instanceof HTMLFormElement) return `form`;
  let t = Ip(e.tagName);
  return Xp.test(t) ? `div` : t;
}
function em(e) {
  let t = ``;
  return (
    (t =
      e.indexOf(`//`) > -1
        ? e.split(`/`).slice(0, 3).join(`/`)
        : e.split(`/`)[0]),
    (t = t.split(`?`)[0]),
    t
  );
}
var tm,
  nm,
  rm = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  im = /^(?:[a-z+]+:)?\/\//i,
  am = /^www\..*/i,
  om = /^(data:)([^,]*),(.*)/i;
function sm(e, t) {
  if (!e || t.size === 0) return e;
  try {
    let n = e.split(`;`),
      r = [];
    for (let e of n) {
      if (((e = e.trim()), !e)) continue;
      let n = e.indexOf(`:`);
      if (n === -1) {
        r.push(e);
        continue;
      }
      let i = e.slice(0, n).trim();
      t.has(i) || r.push(e);
    }
    return r.join(`; `) + (r.length > 0 && e.endsWith(`;`) ? `;` : ``);
  } catch (t) {
    return console.warn(`Error filtering CSS properties:`, t), e;
  }
}
function cm(e, t) {
  return (e || ``).replace(rm, (e, n, r, i, a, o) => {
    let s = r || a || o,
      c = n || i || ``;
    if (!s) return e;
    if (im.test(s) || am.test(s) || om.test(s)) return `url(${c}${s}${c})`;
    if (s[0] === `/`) return `url(${c}${em(t) + s}${c})`;
    let l = t.split(`/`),
      u = s.split(`/`);
    l.pop();
    for (let e of u)
      if (e === `.`) continue;
      else e === `..` ? l.pop() : l.push(e);
    return `url(${c}${l.join(`/`)}${c})`;
  });
}
var lm = /^[^ \t\n\r\u000c]+/,
  um = /^[, \t\n\r\u000c]+/;
function dm(e, t) {
  if (t.trim() === ``) return t;
  let n = 0;
  function r(e) {
    let r,
      i = e.exec(t.substring(n));
    return i ? ((r = i[0]), (n += r.length), r) : ``;
  }
  let i = [];
  for (; r(um), !(n >= t.length); ) {
    let a = r(lm);
    if (a.slice(-1) === `,`)
      (a = pm(e, a.substring(0, a.length - 1))), i.push(a);
    else {
      let r = ``;
      a = pm(e, a);
      let o = !1;
      for (;;) {
        let e = t.charAt(n);
        if (e === ``) {
          i.push((a + r).trim());
          break;
        } else if (o) e === `)` && (o = !1);
        else if (e === `,`) {
          (n += 1), i.push((a + r).trim());
          break;
        } else e === `(` && (o = !0);
        (r += e), (n += 1);
      }
    }
  }
  return i.join(`, `);
}
var fm = new WeakMap();
function pm(e, t) {
  return !t || t.trim() === `` ? t : hm(e, t);
}
function mm(e) {
  return !!(e.tagName === `svg` || e.ownerSVGElement);
}
function hm(e, t) {
  let n = fm.get(e);
  if ((n || ((n = e.createElement(`a`)), fm.set(e, n)), !t)) t = ``;
  else if (t.startsWith(`blob:`) || t.startsWith(`data:`)) return t;
  return n.setAttribute(`href`, t), n.href;
}
function gm(e, t, n, r, i, a, o) {
  if (!r) return r;
  if (
    n === `src` ||
    (n === `href` && !(t === `use` && r[0] === `#`)) ||
    (n === `xlink:href` && r[0] !== `#`) ||
    (n === `background` && (t === `table` || t === `td` || t === `th`))
  )
    return pm(e, r);
  if (n === `srcset`) return dm(e, r);
  if (n === `style`) {
    let t = cm(r, hm(e));
    return o && o.size > 0 && (t = sm(t, o)), t;
  } else if (t === `object` && n === `data`) return pm(e, r);
  return typeof a == `function` ? a(n, r, i) : r;
}
function _m(e, t, n) {
  return (e === `video` || e === `audio`) && t === `autoplay`;
}
function vm(e, t, n, r) {
  try {
    if (r && e.matches(r)) return !1;
    if (typeof t == `string`) {
      if (e.classList.contains(t)) return !0;
    } else
      for (let n = e.classList.length; n--; ) {
        let r = e.classList[n];
        if (t.test(r)) return !0;
      }
    if (n) return e.matches(n);
  } catch {}
  return !1;
}
function ym(e, t) {
  for (let n = e.classList.length; n--; ) {
    let r = e.classList[n];
    if (t.test(r)) return !0;
  }
  return !1;
}
function bm(e, t, n = 1 / 0, r = 0) {
  return !e || e.nodeType !== e.ELEMENT_NODE || r > n
    ? -1
    : t(e)
    ? r
    : bm(e.parentNode, t, n, r + 1);
}
function xm(e, t) {
  return (n) => {
    let r = n;
    if (r === null) return !1;
    try {
      if (e) {
        if (typeof e == `string`) {
          if (r.matches(`.${e}`)) return !0;
        } else if (ym(r, e)) return !0;
      }
      return !!(t && r.matches(t));
    } catch {
      return !1;
    }
  };
}
function Sm(e, t, n, r, i, a) {
  try {
    let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    if (o === null) return !1;
    if (o.tagName === `INPUT`) {
      let e = o.getAttribute(`autocomplete`);
      if (
        [
          `current-password`,
          `new-password`,
          `cc-number`,
          `cc-exp`,
          `cc-exp-month`,
          `cc-exp-year`,
          `cc-csc`,
        ].includes(e)
      )
        return !0;
    }
    let s = -1,
      c = -1;
    if (a) {
      if (((c = bm(o, xm(r, i))), c < 0)) return !0;
      s = bm(o, xm(t, n), c >= 0 ? c : 1 / 0);
    } else {
      if (((s = bm(o, xm(t, n))), s < 0)) return !1;
      c = bm(o, xm(r, i), s >= 0 ? s : 1 / 0);
    }
    return s >= 0 ? (c >= 0 ? s <= c : !0) : c >= 0 ? !1 : !!a;
  } catch {}
  return !!a;
}
function Cm(e, t, n) {
  let r = Jp(e);
  if (!r) return;
  let i = !1,
    a;
  try {
    a = r.document.readyState;
  } catch {
    return;
  }
  if (a !== `complete`) {
    let r = Gp(() => {
      i ||= (t(), !0);
    }, n);
    e.addEventListener(`load`, () => {
      Kp(r), (i = !0), t();
    });
    return;
  }
  let o = `about:blank`;
  if (r.location.href !== o || e.src === o || e.src === ``)
    return Gp(t, 0), e.addEventListener(`load`, t);
  e.addEventListener(`load`, t);
}
function wm(e, t, n) {
  let r = !1,
    i;
  try {
    i = e.sheet;
  } catch {
    i = null;
  }
  if (i) return;
  let a = Gp(() => {
    r ||= (t(), !0);
  }, n);
  e.addEventListener(`load`, () => {
    Kp(a), (r = !0), t();
  });
}
function Tm(e, t) {
  let {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: a,
      unblockSelector: o,
      maskAllText: s,
      maskAttributeFn: c,
      maskTextClass: l,
      unmaskTextClass: u,
      maskTextSelector: d,
      unmaskTextSelector: f,
      inlineStylesheet: p,
      maskInputOptions: m = {},
      maskTextFn: h,
      maskInputFn: g,
      dataURLOptions: _ = {},
      inlineImages: v,
      recordCanvas: y,
      keepIframeSrcFn: b,
      newlyAddedElement: x = !1,
      ignoreCSSAttributes: S,
    } = t,
    C = Em(n, r);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode === `CSS1Compat`
        ? { type: K.Document, childNodes: [] }
        : { type: K.Document, childNodes: [], compatMode: e.compatMode };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: K.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: C,
      };
    case e.ELEMENT_NODE:
      return Om(e, {
        doc: n,
        blockClass: i,
        blockSelector: a,
        unblockSelector: o,
        inlineStylesheet: p,
        maskAttributeFn: c,
        maskInputOptions: m,
        maskInputFn: g,
        dataURLOptions: _,
        inlineImages: v,
        recordCanvas: y,
        keepIframeSrcFn: b,
        newlyAddedElement: x,
        rootId: C,
        maskTextClass: l,
        unmaskTextClass: u,
        maskTextSelector: d,
        unmaskTextSelector: f,
        ignoreCSSAttributes: S,
      });
    case e.TEXT_NODE:
      return Dm(e, {
        doc: n,
        maskAllText: s,
        maskTextClass: l,
        unmaskTextClass: u,
        maskTextSelector: d,
        unmaskTextSelector: f,
        maskTextFn: h,
        maskInputOptions: m,
        maskInputFn: g,
        rootId: C,
      });
    case e.CDATA_SECTION_NODE:
      return { type: K.CDATA, textContent: ``, rootId: C };
    case e.COMMENT_NODE:
      return { type: K.Comment, textContent: e.textContent || ``, rootId: C };
    default:
      return !1;
  }
}
function Em(e, t) {
  if (!t.hasNode(e)) return;
  let n = t.getId(e);
  return n === 1 ? void 0 : n;
}
function Dm(e, t) {
  let {
      maskAllText: n,
      maskTextClass: r,
      unmaskTextClass: i,
      maskTextSelector: a,
      unmaskTextSelector: o,
      maskTextFn: s,
      maskInputOptions: c,
      maskInputFn: l,
      rootId: u,
    } = t,
    d = e.parentNode && e.parentNode.tagName,
    f = e.textContent,
    p = d === `STYLE` || void 0,
    m = d === `SCRIPT` || void 0,
    h = d === `TEXTAREA` || void 0;
  if (p && f) {
    try {
      e.nextSibling ||
        e.previousSibling ||
        (e.parentNode.sheet?.cssRules && (f = Ep(e.parentNode.sheet)));
    } catch (t) {
      console.warn(
        `Cannot get CSS styles from text's parentNode. Error: ${t}`,
        e
      );
    }
    f = cm(f, hm(t.doc));
  }
  m && (f = `SCRIPT_PLACEHOLDER`);
  let g = Sm(e, r, a, i, o, n);
  return (
    !p &&
      !m &&
      !h &&
      f &&
      g &&
      (f = s ? s(f, e.parentElement) : f.replace(/[\S]/g, `*`)),
    h &&
      f &&
      (c.textarea || g) &&
      (f = l ? l(f, e.parentNode) : f.replace(/[\S]/g, `*`)),
    d === `OPTION` &&
      f &&
      (f = Fp({
        isMasked: Sm(
          e,
          r,
          a,
          i,
          o,
          Pp({ type: null, tagName: d, maskInputOptions: c })
        ),
        element: e,
        value: f,
        maskInputFn: l,
      })),
    { type: K.Text, textContent: f || ``, isStyle: p, rootId: u }
  );
}
function Om(e, t) {
  let {
      doc: n,
      blockClass: r,
      blockSelector: i,
      unblockSelector: a,
      inlineStylesheet: o,
      maskInputOptions: s = {},
      maskAttributeFn: c,
      maskInputFn: l,
      dataURLOptions: u = {},
      inlineImages: d,
      recordCanvas: f,
      keepIframeSrcFn: p,
      newlyAddedElement: m = !1,
      rootId: h,
      maskTextClass: g,
      unmaskTextClass: _,
      maskTextSelector: v,
      unmaskTextSelector: y,
      ignoreCSSAttributes: b,
    } = t,
    x = vm(e, r, i, a),
    S = $p(e),
    C = {},
    w = e.attributes.length;
  for (let t = 0; t < w; t++) {
    let r = e.attributes[t];
    r.name &&
      !_m(S, r.name, r.value) &&
      (C[r.name] = gm(n, S, Ip(r.name), r.value, e, c, b));
  }
  if (S === `link` && o) {
    let t = Array.from(n.styleSheets).find((t) => t.href === e.href),
      r = null;
    t && (r = Ep(t)),
      r &&
        ((C.rel = null),
        (C.href = null),
        (C.crossorigin = null),
        (C._cssText = cm(r, t.href)));
  }
  if (
    S === `style` &&
    e.sheet &&
    !(e.innerText || e.textContent || ``).trim().length
  ) {
    let t = Ep(e.sheet);
    t && (C._cssText = cm(t, hm(n)));
  }
  if (S === `input` || S === `textarea` || S === `select` || S === `option`) {
    let t = e,
      n = Bp(t),
      r = Vp(t, Lp(S), n),
      i = t.checked;
    if (n !== `submit` && n !== `button` && r) {
      let e = Sm(
        t,
        g,
        v,
        _,
        y,
        Pp({ type: n, tagName: Lp(S), maskInputOptions: s })
      );
      C.value = Fp({ isMasked: e, element: t, value: r, maskInputFn: l });
    }
    i && (C.checked = i);
  }
  if (
    (S === `option` &&
      (e.selected && !s.select ? (C.selected = !0) : delete C.selected),
    S === `canvas` && f)
  ) {
    if (e.__context === `2d`)
      zp(e) || (C.rr_dataURL = e.toDataURL(u.type, u.quality));
    else if (!(`__context` in e)) {
      let t = e.toDataURL(u.type, u.quality),
        r = n.createElement(`canvas`);
      (r.width = e.width),
        (r.height = e.height),
        t !== r.toDataURL(u.type, u.quality) && (C.rr_dataURL = t);
    }
  }
  if (S === `img` && d) {
    tm || ((tm = n.createElement(`canvas`)), (nm = tm.getContext(`2d`)));
    let t = e,
      r = t.currentSrc || t.getAttribute(`src`) || `<unknown-src>`,
      i = t.crossOrigin,
      a = () => {
        t.removeEventListener(`load`, a);
        try {
          (tm.width = t.naturalWidth),
            (tm.height = t.naturalHeight),
            nm.drawImage(t, 0, 0),
            (C.rr_dataURL = tm.toDataURL(u.type, u.quality));
        } catch (e) {
          if (t.crossOrigin !== `anonymous`) {
            (t.crossOrigin = `anonymous`),
              t.complete && t.naturalWidth !== 0
                ? a()
                : t.addEventListener(`load`, a);
            return;
          } else console.warn(`Cannot inline img src=${r}! Error: ${e}`);
        }
        t.crossOrigin === `anonymous` &&
          (i ? (C.crossOrigin = i) : t.removeAttribute(`crossorigin`));
      };
    t.complete && t.naturalWidth !== 0 ? a() : t.addEventListener(`load`, a);
  }
  if (
    ((S === `audio` || S === `video`) &&
      ((C.rr_mediaState = e.paused ? `paused` : `played`),
      (C.rr_mediaCurrentTime = e.currentTime)),
    m ||
      (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft),
      e.scrollTop && (C.rr_scrollTop = e.scrollTop)),
    x)
  ) {
    let { width: t, height: n } = e.getBoundingClientRect();
    C = { class: C.class, rr_width: `${t}px`, rr_height: `${n}px` };
  }
  S === `iframe` &&
    !p(C.src) &&
    (!x && !qp(e) && (C.rr_src = C.src), delete C.src);
  let ee;
  try {
    customElements.get(S) && (ee = !0);
  } catch {}
  return {
    type: K.Element,
    tagName: S,
    attributes: C,
    childNodes: [],
    isSVG: mm(e) || void 0,
    needBlock: x,
    rootId: h,
    isCustom: ee,
  };
}
function q(e) {
  return e == null ? `` : e.toLowerCase();
}
function km(e, t) {
  return !!(
    (t.comment && e.type === K.Comment) ||
    (e.type === K.Element &&
      ((t.script &&
        (e.tagName === `script` ||
          (e.tagName === `link` &&
            (e.attributes.rel === `preload` ||
              e.attributes.rel === `modulepreload`)) ||
          (e.tagName === `link` &&
            e.attributes.rel === `prefetch` &&
            typeof e.attributes.href == `string` &&
            Hp(e.attributes.href) === `js`))) ||
        (t.headFavicon &&
          ((e.tagName === `link` && e.attributes.rel === `shortcut icon`) ||
            (e.tagName === `meta` &&
              (q(e.attributes.name).match(
                /^msapplication-tile(image|color)$/
              ) ||
                q(e.attributes.name) === `application-name` ||
                q(e.attributes.rel) === `icon` ||
                q(e.attributes.rel) === `apple-touch-icon` ||
                q(e.attributes.rel) === `shortcut icon`)))) ||
        (e.tagName === `meta` &&
          ((t.headMetaDescKeywords &&
            q(e.attributes.name).match(/^description|keywords$/)) ||
            (t.headMetaSocial &&
              (q(e.attributes.property).match(/^(og|twitter|fb):/) ||
                q(e.attributes.name).match(/^(og|twitter):/) ||
                q(e.attributes.name) === `pinterest`)) ||
            (t.headMetaRobots &&
              (q(e.attributes.name) === `robots` ||
                q(e.attributes.name) === `googlebot` ||
                q(e.attributes.name) === `bingbot`)) ||
            (t.headMetaHttpEquiv && e.attributes[`http-equiv`] !== void 0) ||
            (t.headMetaAuthorship &&
              (q(e.attributes.name) === `author` ||
                q(e.attributes.name) === `generator` ||
                q(e.attributes.name) === `framework` ||
                q(e.attributes.name) === `publisher` ||
                q(e.attributes.name) === `progid` ||
                q(e.attributes.property).match(/^article:/) ||
                q(e.attributes.property).match(/^product:/))) ||
            (t.headMetaVerification &&
              (q(e.attributes.name) === `google-site-verification` ||
                q(e.attributes.name) === `yandex-verification` ||
                q(e.attributes.name) === `csrf-token` ||
                q(e.attributes.name) === `p:domain_verify` ||
                q(e.attributes.name) === `verify-v1` ||
                q(e.attributes.name) === `verification` ||
                q(e.attributes.name) === `shopify-checkout-api-token`))))))
  );
}
function Am(e, t) {
  let {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: a,
      unblockSelector: o,
      maskAllText: s,
      maskTextClass: c,
      unmaskTextClass: l,
      maskTextSelector: u,
      unmaskTextSelector: d,
      skipChild: f = !1,
      inlineStylesheet: p = !0,
      maskInputOptions: m = {},
      maskAttributeFn: h,
      maskTextFn: g,
      maskInputFn: _,
      slimDOMOptions: v,
      dataURLOptions: y = {},
      inlineImages: b = !1,
      recordCanvas: x = !1,
      onSerialize: S,
      onIframeLoad: C,
      iframeLoadTimeout: w = 5e3,
      onBlockedImageLoad: ee,
      onStylesheetLoad: te,
      stylesheetLoadTimeout: T = 5e3,
      keepIframeSrcFn: ne = () => !1,
      newlyAddedElement: re = !1,
      ignoreCSSAttributes: ie,
    } = t,
    { preserveWhiteSpace: E = !0 } = t,
    D = Tm(e, {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: a,
      maskAllText: s,
      unblockSelector: o,
      maskTextClass: c,
      unmaskTextClass: l,
      maskTextSelector: u,
      unmaskTextSelector: d,
      inlineStylesheet: p,
      maskInputOptions: m,
      maskAttributeFn: h,
      maskTextFn: g,
      maskInputFn: _,
      dataURLOptions: y,
      inlineImages: b,
      recordCanvas: x,
      keepIframeSrcFn: ne,
      newlyAddedElement: re,
      ignoreCSSAttributes: ie,
    });
  if (!D) return console.warn(e, `not serialized`), null;
  let O;
  O = r.hasNode(e)
    ? r.getId(e)
    : km(D, v) ||
      (!E && D.type === K.Text && !D.isStyle && !D.textContent.trim().length)
    ? Zp
    : Qp();
  let k = Object.assign(D, { id: O });
  if ((r.add(e, k), O === Zp)) return null;
  S && S(e);
  let ae = !f;
  if (k.type === K.Element) {
    ae &&= !k.needBlock;
    let t = e.shadowRoot;
    t && Cp(t) && (k.isShadowHost = !0);
  }
  if ((k.type === K.Document || k.type === K.Element) && ae) {
    v.headWhitespace &&
      k.type === K.Element &&
      k.tagName === `head` &&
      (E = !1);
    let t = {
        doc: n,
        mirror: r,
        blockClass: i,
        blockSelector: a,
        maskAllText: s,
        unblockSelector: o,
        maskTextClass: c,
        unmaskTextClass: l,
        maskTextSelector: u,
        unmaskTextSelector: d,
        skipChild: f,
        inlineStylesheet: p,
        maskInputOptions: m,
        maskAttributeFn: h,
        maskTextFn: g,
        maskInputFn: _,
        slimDOMOptions: v,
        dataURLOptions: y,
        inlineImages: b,
        recordCanvas: x,
        preserveWhiteSpace: E,
        onSerialize: S,
        onIframeLoad: C,
        iframeLoadTimeout: w,
        onBlockedImageLoad: ee,
        onStylesheetLoad: te,
        stylesheetLoadTimeout: T,
        keepIframeSrcFn: ne,
        ignoreCSSAttributes: ie,
      },
      re = e.childNodes ? Array.from(e.childNodes) : [];
    for (let e of re) {
      let n = Am(e, t);
      n && k.childNodes.push(n);
    }
    if (xp(e) && e.shadowRoot)
      for (let n of Array.from(e.shadowRoot.childNodes)) {
        let r = Am(n, t);
        r && (Cp(e.shadowRoot) && (r.isShadow = !0), k.childNodes.push(r));
      }
  }
  if (
    (e.parentNode && Sp(e.parentNode) && Cp(e.parentNode) && (k.isShadow = !0),
    k.type === K.Element &&
      k.tagName === `iframe` &&
      !k.needBlock &&
      Cm(
        e,
        () => {
          let t = qp(e);
          if (t && C) {
            let n = Am(t, {
              doc: t,
              mirror: r,
              blockClass: i,
              blockSelector: a,
              unblockSelector: o,
              maskAllText: s,
              maskTextClass: c,
              unmaskTextClass: l,
              maskTextSelector: u,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: p,
              maskInputOptions: m,
              maskAttributeFn: h,
              maskTextFn: g,
              maskInputFn: _,
              slimDOMOptions: v,
              dataURLOptions: y,
              inlineImages: b,
              recordCanvas: x,
              preserveWhiteSpace: E,
              onSerialize: S,
              onIframeLoad: C,
              iframeLoadTimeout: w,
              onStylesheetLoad: te,
              stylesheetLoadTimeout: T,
              keepIframeSrcFn: ne,
              ignoreCSSAttributes: ie,
            });
            n && C(e, n);
          }
        },
        w
      ),
    k.type === K.Element && k.tagName === `img` && !e.complete && k.needBlock)
  ) {
    let t = e,
      n = () => {
        if (t.isConnected && !t.complete && ee)
          try {
            let e = t.getBoundingClientRect();
            e.width > 0 && e.height > 0 && ee(t, k, e);
          } catch {}
        t.removeEventListener(`load`, n);
      };
    t.isConnected && t.addEventListener(`load`, n);
  }
  return (
    k.type === K.Element &&
      k.tagName === `link` &&
      typeof k.attributes.rel == `string` &&
      (k.attributes.rel === `stylesheet` ||
        (k.attributes.rel === `preload` &&
          typeof k.attributes.href == `string` &&
          Hp(k.attributes.href) === `css`)) &&
      wm(
        e,
        () => {
          if (te) {
            let t = Am(e, {
              doc: n,
              mirror: r,
              blockClass: i,
              blockSelector: a,
              unblockSelector: o,
              maskAllText: s,
              maskTextClass: c,
              unmaskTextClass: l,
              maskTextSelector: u,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: p,
              maskInputOptions: m,
              maskAttributeFn: h,
              maskTextFn: g,
              maskInputFn: _,
              slimDOMOptions: v,
              dataURLOptions: y,
              inlineImages: b,
              recordCanvas: x,
              preserveWhiteSpace: E,
              onSerialize: S,
              onIframeLoad: C,
              iframeLoadTimeout: w,
              onStylesheetLoad: te,
              stylesheetLoadTimeout: T,
              keepIframeSrcFn: ne,
              ignoreCSSAttributes: ie,
            });
            t && te(e, t);
          }
        },
        T
      ),
    k.type === K.Element && delete k.needBlock,
    k
  );
}
function jm(e, t) {
  let {
    mirror: n = new Mp(),
    blockClass: r = `rr-block`,
    blockSelector: i = null,
    unblockSelector: a = null,
    maskAllText: o = !1,
    maskTextClass: s = `rr-mask`,
    unmaskTextClass: c = null,
    maskTextSelector: l = null,
    unmaskTextSelector: u = null,
    inlineStylesheet: d = !0,
    inlineImages: f = !1,
    recordCanvas: p = !1,
    maskAllInputs: m = !1,
    maskAttributeFn: h,
    maskTextFn: g,
    maskInputFn: _,
    slimDOM: v = !1,
    dataURLOptions: y,
    preserveWhiteSpace: b,
    onSerialize: x,
    onIframeLoad: S,
    iframeLoadTimeout: C,
    onBlockedImageLoad: w,
    onStylesheetLoad: ee,
    stylesheetLoadTimeout: te,
    keepIframeSrcFn: T = () => !1,
    ignoreCSSAttributes: ne = new Set([]),
  } = t || {};
  return Am(e, {
    doc: e,
    mirror: n,
    blockClass: r,
    blockSelector: i,
    unblockSelector: a,
    maskAllText: o,
    maskTextClass: s,
    unmaskTextClass: c,
    maskTextSelector: l,
    unmaskTextSelector: u,
    skipChild: !1,
    inlineStylesheet: d,
    maskInputOptions:
      m === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
          }
        : m === !1
        ? {}
        : m,
    maskAttributeFn: h,
    maskTextFn: g,
    maskInputFn: _,
    slimDOMOptions:
      v === !0 || v === `all`
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: v === `all`,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0,
          }
        : v === !1
        ? {}
        : v,
    dataURLOptions: y,
    inlineImages: f,
    recordCanvas: p,
    preserveWhiteSpace: b,
    onSerialize: x,
    onIframeLoad: S,
    iframeLoadTimeout: C,
    onBlockedImageLoad: w,
    onStylesheetLoad: ee,
    stylesheetLoadTimeout: te,
    keepIframeSrcFn: T,
    newlyAddedElement: !1,
    ignoreCSSAttributes: ne,
  });
}
function Mm(e, t, n = document) {
  let r = { capture: !0, passive: !0 };
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
var Nm = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`,
  Pm = {
    map: {},
    getId() {
      return console.error(Nm), -1;
    },
    getNode() {
      return console.error(Nm), null;
    },
    removeNodeFromMap() {
      console.error(Nm);
    },
    has() {
      return console.error(Nm), !1;
    },
    reset() {
      console.error(Nm);
    },
  };
typeof window < `u` &&
  window.Proxy &&
  window.Reflect &&
  (Pm = new Proxy(Pm, {
    get(e, t, n) {
      return t === `map` && console.error(Nm), Reflect.get(e, t, n);
    },
  }));
function Fm(e, t, n = {}) {
  let r = null,
    i = 0;
  return function (...a) {
    let o = Date.now();
    !i && n.leading === !1 && (i = o);
    let s = t - (o - i),
      c = this;
    s <= 0 || s > t
      ? ((r &&= (sh(r), null)), (i = o), e.apply(c, a))
      : !r &&
        n.trailing !== !1 &&
        (r = oh(() => {
          (i = n.leading === !1 ? 0 : Date.now()), (r = null), e.apply(c, a);
        }, s));
  };
}
function Im(e, t, n, r, i = window) {
  let a = i.Object.getOwnPropertyDescriptor(e, t);
  return (
    i.Object.defineProperty(
      e,
      t,
      r
        ? n
        : {
            set(e) {
              oh(() => {
                n.set.call(this, e);
              }, 0),
                a && a.set && a.set.call(this, e);
            },
          }
    ),
    () => Im(e, t, a || {}, !0)
  );
}
function Lm(e, t, n) {
  try {
    if (!(t in e)) return () => {};
    let r = e[t],
      i = n(r);
    return (
      typeof i == `function` &&
        ((i.prototype = i.prototype || {}),
        Object.defineProperties(i, {
          __rrweb_original__: { enumerable: !1, value: r },
        })),
      (e[t] = i),
      () => {
        e[t] = r;
      }
    );
  } catch {
    return () => {};
  }
}
var Rm = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  (Rm = () => new Date().getTime());
function zm(e) {
  let t = e.document;
  return {
    left: t.scrollingElement
      ? t.scrollingElement.scrollLeft
      : e.pageXOffset === void 0
      ? t?.documentElement.scrollLeft ||
        t?.body?.parentElement?.scrollLeft ||
        t?.body?.scrollLeft ||
        0
      : e.pageXOffset,
    top: t.scrollingElement
      ? t.scrollingElement.scrollTop
      : e.pageYOffset === void 0
      ? t?.documentElement.scrollTop ||
        t?.body?.parentElement?.scrollTop ||
        t?.body?.scrollTop ||
        0
      : e.pageYOffset,
  };
}
function Bm() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function Vm() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function Hm(e) {
  if (!e) return null;
  try {
    return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
  } catch {
    return null;
  }
}
function Um(e, t, n, r, i) {
  if (!e) return !1;
  let a = Hm(e);
  if (!a) return !1;
  let o = xm(t, n);
  if (!i) {
    let e = r && a.matches(r);
    return o(a) && !e;
  }
  let s = bm(a, o),
    c = -1;
  return s < 0
    ? !1
    : (r && (c = bm(a, xm(null, r))), (s > -1 && c < 0) || s < c);
}
function Wm(e, t) {
  return t.getId(e) !== -1;
}
function Gm(e, t) {
  return t.getId(e) === Zp;
}
function Km(e, t) {
  if (Sp(e)) return !1;
  let n = t.getId(e);
  return t.has(n)
    ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE
      ? !1
      : !e.parentNode || Km(e.parentNode, t)
    : !0;
}
function qm(e) {
  return !!e.changedTouches;
}
function Jm(e = window) {
  `NodeList` in e &&
    !e.NodeList.prototype.forEach &&
    (e.NodeList.prototype.forEach = Array.prototype.forEach),
    `DOMTokenList` in e &&
      !e.DOMTokenList.prototype.forEach &&
      (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains ||
      (Node.prototype.contains = (...e) => {
        let t = e[0];
        if (!(0 in e)) throw TypeError(`1 argument is required`);
        do if (this === t) return !0;
        while ((t &&= t.parentNode));
        return !1;
      });
}
function Ym(e, t) {
  return !!(e.nodeName === `IFRAME` && t.getMeta(e));
}
function Xm(e, t) {
  return !!(
    e.nodeName === `LINK` &&
    e.nodeType === e.ELEMENT_NODE &&
    e.getAttribute &&
    e.getAttribute(`rel`) === `stylesheet` &&
    t.getMeta(e)
  );
}
function Zm(e) {
  return !!e?.shadowRoot;
}
var Qm = class {
  constructor() {
    (this.id = 1),
      (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map());
  }
  getId(e) {
    return this.styleIDMap.get(e) ?? -1;
  }
  has(e) {
    return this.styleIDMap.has(e);
  }
  add(e, t) {
    if (this.has(e)) return this.getId(e);
    let n;
    return (
      (n = t === void 0 ? this.id++ : t),
      this.styleIDMap.set(e, n),
      this.idStyleMap.set(n, e),
      n
    );
  }
  getStyle(e) {
    return this.idStyleMap.get(e) || null;
  }
  reset() {
    (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()),
      (this.id = 1);
  }
  generateId() {
    return this.id++;
  }
};
function $m(e) {
  let t = null;
  return (
    e.getRootNode?.()?.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
      e.getRootNode().host &&
      (t = e.getRootNode().host),
    t
  );
}
function eh(e) {
  let t = e,
    n;
  for (; (n = $m(t)); ) t = n;
  return t;
}
function th(e) {
  let t = e.ownerDocument;
  if (!t) return !1;
  let n = eh(e);
  return t.contains(n);
}
function nh(e) {
  let t = e.ownerDocument;
  return t ? t.contains(e) || th(e) : !1;
}
var rh = {};
function ih(e) {
  let t = rh[e];
  if (t) return t;
  let n = window.document,
    r = window[e];
  if (n && typeof n.createElement == `function`)
    try {
      let t = n.createElement(`iframe`);
      (t.hidden = !0), n.head.appendChild(t);
      let i = t.contentWindow;
      i && i[e] && (r = i[e]), n.head.removeChild(t);
    } catch {}
  return (rh[e] = r.bind(window));
}
function ah(...e) {
  return ih(`requestAnimationFrame`)(...e);
}
function oh(...e) {
  return ih(`setTimeout`)(...e);
}
function sh(...e) {
  return ih(`clearTimeout`)(...e);
}
var J = ((e) => (
    (e[(e.DomContentLoaded = 0)] = `DomContentLoaded`),
    (e[(e.Load = 1)] = `Load`),
    (e[(e.FullSnapshot = 2)] = `FullSnapshot`),
    (e[(e.IncrementalSnapshot = 3)] = `IncrementalSnapshot`),
    (e[(e.Meta = 4)] = `Meta`),
    (e[(e.Custom = 5)] = `Custom`),
    (e[(e.Plugin = 6)] = `Plugin`),
    e
  ))(J || {}),
  Y = ((e) => (
    (e[(e.Mutation = 0)] = `Mutation`),
    (e[(e.MouseMove = 1)] = `MouseMove`),
    (e[(e.MouseInteraction = 2)] = `MouseInteraction`),
    (e[(e.Scroll = 3)] = `Scroll`),
    (e[(e.ViewportResize = 4)] = `ViewportResize`),
    (e[(e.Input = 5)] = `Input`),
    (e[(e.TouchMove = 6)] = `TouchMove`),
    (e[(e.MediaInteraction = 7)] = `MediaInteraction`),
    (e[(e.StyleSheetRule = 8)] = `StyleSheetRule`),
    (e[(e.CanvasMutation = 9)] = `CanvasMutation`),
    (e[(e.Font = 10)] = `Font`),
    (e[(e.Log = 11)] = `Log`),
    (e[(e.Drag = 12)] = `Drag`),
    (e[(e.StyleDeclaration = 13)] = `StyleDeclaration`),
    (e[(e.Selection = 14)] = `Selection`),
    (e[(e.AdoptedStyleSheet = 15)] = `AdoptedStyleSheet`),
    (e[(e.CustomElement = 16)] = `CustomElement`),
    e
  ))(Y || {}),
  ch = ((e) => (
    (e[(e.MouseUp = 0)] = `MouseUp`),
    (e[(e.MouseDown = 1)] = `MouseDown`),
    (e[(e.Click = 2)] = `Click`),
    (e[(e.ContextMenu = 3)] = `ContextMenu`),
    (e[(e.DblClick = 4)] = `DblClick`),
    (e[(e.Focus = 5)] = `Focus`),
    (e[(e.Blur = 6)] = `Blur`),
    (e[(e.TouchStart = 7)] = `TouchStart`),
    (e[(e.TouchMove_Departed = 8)] = `TouchMove_Departed`),
    (e[(e.TouchEnd = 9)] = `TouchEnd`),
    (e[(e.TouchCancel = 10)] = `TouchCancel`),
    e
  ))(ch || {}),
  lh = ((e) => (
    (e[(e.Mouse = 0)] = `Mouse`),
    (e[(e.Pen = 1)] = `Pen`),
    (e[(e.Touch = 2)] = `Touch`),
    e
  ))(lh || {}),
  uh = ((e) => (
    (e[(e.Play = 0)] = `Play`),
    (e[(e.Pause = 1)] = `Pause`),
    (e[(e.Seeked = 2)] = `Seeked`),
    (e[(e.VolumeChange = 3)] = `VolumeChange`),
    (e[(e.RateChange = 4)] = `RateChange`),
    e
  ))(uh || {}),
  dh;
function fh(e) {
  dh = e;
}
function ph() {
  dh = void 0;
}
for (
  var X = (e) =>
      dh
        ? (...t) => {
            try {
              return e(...t);
            } catch (e) {
              if (dh && dh(e) === !0) return () => {};
              throw e;
            }
          }
        : e,
    mh = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
    hh = typeof Uint8Array > `u` ? [] : new Uint8Array(256),
    gh = 0;
  gh < mh.length;
  gh++
)
  hh[mh.charCodeAt(gh)] = gh;
var _h = class {
  reset() {}
  freeze() {}
  unfreeze() {}
  lock() {}
  unlock() {}
  snapshot() {}
  addWindow() {}
  addShadowRoot() {}
  resetShadowRoots() {}
};
function vh(e) {
  try {
    return e.contentDocument;
  } catch {}
}
function yh(e) {
  try {
    return e.contentWindow;
  } catch {}
}
var bh = class {
  constructor(e) {
    (this.doc = e), (this.unattachedDoc = null);
  }
  parse(e) {
    return (
      this.parseWithConstructableStylesheet(e) ||
      this.parseWithDetachedElement(e)
    );
  }
  parseWithConstructableStylesheet(e) {
    if (
      typeof CSSStyleSheet > `u` ||
      typeof CSSStyleSheet.prototype.replaceSync != `function`
    )
      return null;
    try {
      let t = new CSSStyleSheet();
      t.replaceSync(`x { ${e} }`);
      let n = t.cssRules[0];
      return !n || n.type !== CSSRule.STYLE_RULE ? null : n.style;
    } catch {
      return null;
    }
  }
  parseWithDetachedElement(e) {
    let t = this.getUnattachedDoc().createElement(`span`);
    return t.setAttribute(`style`, e), t.style;
  }
  getUnattachedDoc() {
    if (!this.unattachedDoc)
      try {
        this.unattachedDoc = document.implementation.createHTMLDocument();
      } catch {
        this.unattachedDoc = this.doc;
      }
    return this.unattachedDoc;
  }
};
function xh(e) {
  return `__ln` in e;
}
var Sh = class {
    constructor() {
      (this.length = 0), (this.head = null), (this.tail = null);
    }
    get(e) {
      if (e >= this.length) throw Error(`Position outside of list range`);
      let t = this.head;
      for (let n = 0; n < e; n++) t = t?.next || null;
      return t;
    }
    addNode(e) {
      let t = { value: e, previous: null, next: null };
      if (((e.__ln = t), e.previousSibling && xh(e.previousSibling))) {
        let n = e.previousSibling.__ln.next;
        (t.next = n),
          (t.previous = e.previousSibling.__ln),
          (e.previousSibling.__ln.next = t),
          n && (n.previous = t);
      } else if (
        e.nextSibling &&
        xh(e.nextSibling) &&
        e.nextSibling.__ln.previous
      ) {
        let n = e.nextSibling.__ln.previous;
        (t.previous = n),
          (t.next = e.nextSibling.__ln),
          (e.nextSibling.__ln.previous = t),
          n && (n.next = t);
      } else
        this.head && (this.head.previous = t),
          (t.next = this.head),
          (this.head = t);
      t.next === null && (this.tail = t), this.length++;
    }
    removeNode(e) {
      let t = e.__ln;
      this.head &&
        (t.previous
          ? ((t.previous.next = t.next),
            t.next ? (t.next.previous = t.previous) : (this.tail = t.previous))
          : ((this.head = t.next),
            this.head ? (this.head.previous = null) : (this.tail = null)),
        e.__ln && delete e.__ln,
        this.length--);
    }
  },
  Ch = (e, t) => `${e}@${t}`,
  wh = class {
    constructor() {
      (this.frozen = !1),
        (this.locked = !1),
        (this.texts = []),
        (this.attributes = []),
        (this.attributeMap = new WeakMap()),
        (this.removes = []),
        (this.mapRemoves = []),
        (this.movedMap = {}),
        (this.addedSet = new Set()),
        (this.movedSet = new Set()),
        (this.droppedSet = new Set()),
        (this.processMutations = (e) => {
          e.forEach(this.processMutation), this.emit();
        }),
        (this.emit = () => {
          if (this.frozen || this.locked) return;
          let e = [],
            t = new Set(),
            n = new Sh(),
            r = (e) => {
              let t = e,
                n = Zp;
              for (; n === Zp; )
                (t &&= t.nextSibling), (n = t && this.mirror.getId(t));
              return n;
            },
            i = (i) => {
              if (!i.parentNode || !nh(i)) return;
              let a = Sp(i.parentNode)
                  ? this.mirror.getId($m(i))
                  : this.mirror.getId(i.parentNode),
                o = r(i);
              if (a === -1 || o === -1) return n.addNode(i);
              let s = Am(i, {
                doc: this.doc,
                mirror: this.mirror,
                blockClass: this.blockClass,
                blockSelector: this.blockSelector,
                maskAllText: this.maskAllText,
                unblockSelector: this.unblockSelector,
                maskTextClass: this.maskTextClass,
                unmaskTextClass: this.unmaskTextClass,
                maskTextSelector: this.maskTextSelector,
                unmaskTextSelector: this.unmaskTextSelector,
                skipChild: !0,
                newlyAddedElement: !0,
                inlineStylesheet: this.inlineStylesheet,
                maskInputOptions: this.maskInputOptions,
                maskAttributeFn: this.maskAttributeFn,
                maskTextFn: this.maskTextFn,
                maskInputFn: this.maskInputFn,
                slimDOMOptions: this.slimDOMOptions,
                dataURLOptions: this.dataURLOptions,
                recordCanvas: this.recordCanvas,
                inlineImages: this.inlineImages,
                onSerialize: (e) => {
                  Ym(e, this.mirror) &&
                    !Um(
                      e,
                      this.blockClass,
                      this.blockSelector,
                      this.unblockSelector,
                      !1
                    ) &&
                    this.iframeManager.addIframe(e),
                    Xm(e, this.mirror) &&
                      this.stylesheetManager.trackLinkElement(e),
                    Zm(i) &&
                      this.shadowDomManager.addShadowRoot(
                        i.shadowRoot,
                        this.doc
                      );
                },
                onIframeLoad: (e, t) => {
                  if (
                    Um(
                      e,
                      this.blockClass,
                      this.blockSelector,
                      this.unblockSelector,
                      !1
                    )
                  )
                    return;
                  this.iframeManager.attachIframe(e, t);
                  let n = yh(e);
                  n && this.canvasManager.addWindow(n),
                    this.shadowDomManager.observeAttachShadow(e);
                },
                onStylesheetLoad: (e, t) => {
                  this.stylesheetManager.attachLinkElement(e, t);
                },
                onBlockedImageLoad: (e, t, { width: n, height: r }) => {
                  this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [
                      {
                        id: t.id,
                        attributes: {
                          style: { width: `${n}px`, height: `${r}px` },
                        },
                      },
                    ],
                  });
                },
                ignoreCSSAttributes: this.ignoreCSSAttributes,
              });
              s && (e.push({ parentId: a, nextId: o, node: s }), t.add(s.id));
            };
          for (; this.mapRemoves.length; )
            this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (let e of this.movedSet)
            (Eh(this.removes, e, this.mirror) &&
              !this.movedSet.has(e.parentNode)) ||
              i(e);
          for (let e of this.addedSet)
            (!Oh(this.droppedSet, e) && !Eh(this.removes, e, this.mirror)) ||
            Oh(this.movedSet, e)
              ? i(e)
              : this.droppedSet.add(e);
          let a = null;
          for (; n.length; ) {
            let e = null;
            if (a) {
              let t = this.mirror.getId(a.value.parentNode),
                n = r(a.value);
              t !== -1 && n !== -1 && (e = a);
            }
            if (!e) {
              let t = n.tail;
              for (; t; ) {
                let n = t;
                if (((t = t.previous), n)) {
                  let t = this.mirror.getId(n.value.parentNode);
                  if (r(n.value) === -1) continue;
                  if (t !== -1) {
                    e = n;
                    break;
                  } else {
                    let t = n.value;
                    if (
                      t.parentNode &&
                      t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                    ) {
                      let r = t.parentNode.host;
                      if (this.mirror.getId(r) !== -1) {
                        e = n;
                        break;
                      }
                    }
                  }
                }
              }
            }
            if (!e) {
              for (; n.head; ) n.removeNode(n.head.value);
              break;
            }
            (a = e.previous), n.removeNode(e.value), i(e.value);
          }
          let o = {
            texts: this.texts
              .map((e) => ({ id: this.mirror.getId(e.node), value: e.value }))
              .filter((e) => !t.has(e.id))
              .filter((e) => this.mirror.has(e.id)),
            attributes: this.attributes
              .map((e) => {
                let { attributes: t } = e;
                if (typeof t.style == `string`) {
                  let n = JSON.stringify(e.styleDiff),
                    r = JSON.stringify(e._unchangedStyles);
                  n.length < t.style.length &&
                    (n + r).split(`var(`).length ===
                      t.style.split(`var(`).length &&
                    (t.style = e.styleDiff);
                }
                return { id: this.mirror.getId(e.node), attributes: t };
              })
              .filter((e) => !t.has(e.id))
              .filter((e) => this.mirror.has(e.id)),
            removes: this.removes,
            adds: e,
          };
          (!o.texts.length &&
            !o.attributes.length &&
            !o.removes.length &&
            !o.adds.length) ||
            ((this.texts = []),
            (this.attributes = []),
            (this.attributeMap = new WeakMap()),
            (this.removes = []),
            (this.addedSet = new Set()),
            (this.movedSet = new Set()),
            (this.droppedSet = new Set()),
            (this.movedMap = {}),
            this.mutationCb(o));
        }),
        (this.processMutation = (e) => {
          if (!Gm(e.target, this.mirror))
            switch (e.type) {
              case `characterData`: {
                let t = e.target.textContent;
                !Um(
                  e.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1
                ) &&
                  t !== e.oldValue &&
                  this.texts.push({
                    value:
                      Sm(
                        e.target,
                        this.maskTextClass,
                        this.maskTextSelector,
                        this.unmaskTextClass,
                        this.unmaskTextSelector,
                        this.maskAllText
                      ) && t
                        ? this.maskTextFn
                          ? this.maskTextFn(t, Hm(e.target))
                          : t.replace(/[\S]/g, `*`)
                        : t,
                    node: e.target,
                  });
                break;
              }
              case `attributes`: {
                let t = e.target,
                  n = e.attributeName,
                  r = e.target.getAttribute(n);
                if (n === `value`) {
                  let n = Bp(t),
                    i = t.tagName;
                  r = Vp(t, i, n);
                  let a = Pp({
                    maskInputOptions: this.maskInputOptions,
                    tagName: i,
                    type: n,
                  });
                  r = Fp({
                    isMasked: Sm(
                      e.target,
                      this.maskTextClass,
                      this.maskTextSelector,
                      this.unmaskTextClass,
                      this.unmaskTextSelector,
                      a
                    ),
                    element: t,
                    value: r,
                    maskInputFn: this.maskInputFn,
                  });
                }
                if (
                  Um(
                    e.target,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1
                  ) ||
                  r === e.oldValue
                )
                  return;
                let i = this.attributeMap.get(e.target);
                if (
                  t.tagName === `IFRAME` &&
                  n === `src` &&
                  !this.keepIframeSrcFn(r)
                )
                  if (!vh(t)) n = `rr_src`;
                  else return;
                if (
                  (i ||
                    ((i = {
                      node: e.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {},
                    }),
                    this.attributes.push(i),
                    this.attributeMap.set(e.target, i)),
                  n === `type` &&
                    t.tagName === `INPUT` &&
                    (e.oldValue || ``).toLowerCase() === `password` &&
                    t.setAttribute(`data-rr-is-password`, `true`),
                  !_m(t.tagName, n) &&
                    ((i.attributes[n] = gm(
                      this.doc,
                      Ip(t.tagName),
                      Ip(n),
                      r,
                      t,
                      this.maskAttributeFn
                    )),
                    n === `style`))
                ) {
                  let n = e.oldValue
                    ? this.styleDeclarationParser.parse(e.oldValue)
                    : null;
                  for (let e of Array.from(t.style)) {
                    let r = t.style.getPropertyValue(e),
                      a = t.style.getPropertyPriority(e);
                    r !== (n?.getPropertyValue(e) || ``) ||
                    a !== (n?.getPropertyPriority(e) || ``)
                      ? a === ``
                        ? (i.styleDiff[e] = r)
                        : (i.styleDiff[e] = [r, a])
                      : (i._unchangedStyles[e] = [r, a]);
                  }
                  if (n)
                    for (let e of Array.from(n))
                      t.style.getPropertyValue(e) === `` &&
                        (i.styleDiff[e] = !1);
                }
                break;
              }
              case `childList`:
                if (
                  Um(
                    e.target,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !0
                  )
                )
                  return;
                e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                  e.removedNodes.forEach((t) => {
                    let n = this.mirror.getId(t),
                      r = Sp(e.target)
                        ? this.mirror.getId(e.target.host)
                        : this.mirror.getId(e.target);
                    Um(
                      e.target,
                      this.blockClass,
                      this.blockSelector,
                      this.unblockSelector,
                      !1
                    ) ||
                      Gm(t, this.mirror) ||
                      !Wm(t, this.mirror) ||
                      (this.addedSet.has(t)
                        ? (Th(this.addedSet, t), this.droppedSet.add(t))
                        : (this.addedSet.has(e.target) && n === -1) ||
                          Km(e.target, this.mirror) ||
                          (this.movedSet.has(t) && this.movedMap[Ch(n, r)]
                            ? Th(this.movedSet, t)
                            : this.removes.push({
                                parentId: r,
                                id: n,
                                isShadow:
                                  Sp(e.target) && Cp(e.target) ? !0 : void 0,
                              })),
                      this.mapRemoves.push(t));
                  });
                break;
            }
        }),
        (this.genAdds = (e, t) => {
          if (
            !this.processedNodeManager.inOtherBuffer(e, this) &&
            !(this.addedSet.has(e) || this.movedSet.has(e))
          ) {
            if (this.mirror.hasNode(e)) {
              if (Gm(e, this.mirror)) return;
              this.movedSet.add(e);
              let n = null;
              t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                n &&
                  n !== -1 &&
                  (this.movedMap[Ch(this.mirror.getId(e), n)] = !0);
            } else this.addedSet.add(e), this.droppedSet.delete(e);
            Um(
              e,
              this.blockClass,
              this.blockSelector,
              this.unblockSelector,
              !1
            ) ||
              (e.childNodes && e.childNodes.forEach((e) => this.genAdds(e)),
              Zm(e) &&
                e.shadowRoot.childNodes.forEach((t) => {
                  this.processedNodeManager.add(t, this), this.genAdds(t, e);
                }));
          }
        });
    }
    init(e) {
      `mutationCb.blockClass.blockSelector.unblockSelector.maskAllText.maskTextClass.unmaskTextClass.maskTextSelector.unmaskTextSelector.inlineStylesheet.maskInputOptions.maskAttributeFn.maskTextFn.maskInputFn.keepIframeSrcFn.recordCanvas.inlineImages.slimDOMOptions.dataURLOptions.doc.mirror.iframeManager.stylesheetManager.shadowDomManager.canvasManager.processedNodeManager.ignoreCSSAttributes`
        .split(`.`)
        .forEach((t) => {
          this[t] = e[t];
        }),
        (this.styleDeclarationParser = new bh(this.doc));
    }
    freeze() {
      (this.frozen = !0), this.canvasManager.freeze();
    }
    unfreeze() {
      (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
    }
    isFrozen() {
      return this.frozen;
    }
    lock() {
      (this.locked = !0), this.canvasManager.lock();
    }
    unlock() {
      (this.locked = !1), this.canvasManager.unlock(), this.emit();
    }
    reset() {
      this.shadowDomManager.reset(), this.canvasManager.reset();
    }
  };
function Th(e, t) {
  e.delete(t), t.childNodes?.forEach((t) => Th(e, t));
}
function Eh(e, t, n) {
  return e.length !== 0 && Dh(e, t, n);
}
function Dh(e, t, n) {
  let r = t.parentNode;
  for (; r; ) {
    let t = n.getId(r);
    if (e.some((e) => e.id === t)) return !0;
    r = r.parentNode;
  }
  return !1;
}
function Oh(e, t) {
  return e.size !== 0 && kh(e, t);
}
function kh(e, t) {
  let { parentNode: n } = t;
  return n ? (e.has(n) ? !0 : kh(e, n)) : !1;
}
var Ah = [];
function jh(e) {
  try {
    if (`composedPath` in e) {
      let t = e.composedPath();
      if (t.length) return t[0];
    } else if (`path` in e && e.path.length) return e.path[0];
  } catch {}
  return e && e.target;
}
function Mh(e, t) {
  let n = new wh();
  Ah.push(n), n.init(e);
  let r = window.MutationObserver || window.__rrMutationObserver,
    i = window?.Zone?.__symbol__?.(`MutationObserver`);
  i && window[i] && (r = window[i]);
  let a = new r(
    X((t) => {
      (e.onMutation && e.onMutation(t) === !1) || n.processMutations.bind(n)(t);
    })
  );
  return (
    a.observe(t, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    a
  );
}
function Nh({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
  if (t.mousemove === !1) return () => {};
  let i = typeof t.mousemove == `number` ? t.mousemove : 50,
    a = typeof t.mousemoveCallback == `number` ? t.mousemoveCallback : 500,
    o = [],
    s,
    c = Fm(
      X((t) => {
        let n = Date.now() - s;
        e(
          o.map((e) => ((e.timeOffset -= n), e)),
          t
        ),
          (o = []),
          (s = null);
      }),
      a
    ),
    l = X(
      Fm(
        X((e) => {
          let t = jh(e),
            { clientX: n, clientY: i } = qm(e) ? e.changedTouches[0] : e;
          (s ||= Rm()),
            o.push({ x: n, y: i, id: r.getId(t), timeOffset: Rm() - s }),
            c(
              typeof DragEvent < `u` && e instanceof DragEvent
                ? Y.Drag
                : e instanceof MouseEvent
                ? Y.MouseMove
                : Y.TouchMove
            );
        }),
        i,
        { trailing: !1 }
      )
    ),
    u = [Mm(`mousemove`, l, n), Mm(`touchmove`, l, n), Mm(`drag`, l, n)];
  return X(() => {
    u.forEach((e) => e());
  });
}
function Ph({
  mouseInteractionCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: a,
  sampling: o,
}) {
  if (o.mouseInteraction === !1) return () => {};
  let s =
      o.mouseInteraction === !0 || o.mouseInteraction === void 0
        ? {}
        : o.mouseInteraction,
    c = [],
    l = null,
    u = (t) => (o) => {
      let s = jh(o);
      if (Um(s, r, i, a, !0)) return;
      let c = null,
        u = t;
      if (`pointerType` in o) {
        switch (o.pointerType) {
          case `mouse`:
            c = lh.Mouse;
            break;
          case `touch`:
            c = lh.Touch;
            break;
          case `pen`:
            c = lh.Pen;
            break;
        }
        c === lh.Touch
          ? ch[t] === ch.MouseDown
            ? (u = `TouchStart`)
            : ch[t] === ch.MouseUp && (u = `TouchEnd`)
          : lh.Pen;
      } else qm(o) && (c = lh.Touch);
      c === null
        ? ch[t] === ch.Click && ((c = l), (l = null))
        : ((l = c),
          ((u.startsWith(`Touch`) && c === lh.Touch) ||
            (u.startsWith(`Mouse`) && c === lh.Mouse)) &&
            (c = null));
      let d = qm(o) ? o.changedTouches[0] : o;
      if (!d) return;
      let f = n.getId(s),
        { clientX: p, clientY: m } = d;
      X(e)({
        type: ch[u],
        id: f,
        x: p,
        y: m,
        ...(c !== null && { pointerType: c }),
      });
    };
  return (
    Object.keys(ch)
      .filter(
        (e) =>
          Number.isNaN(Number(e)) && !e.endsWith(`_Departed`) && s[e] !== !1
      )
      .forEach((e) => {
        let n = Ip(e),
          r = u(e);
        if (window.PointerEvent)
          switch (ch[e]) {
            case ch.MouseDown:
            case ch.MouseUp:
              n = n.replace(`mouse`, `pointer`);
              break;
            case ch.TouchStart:
            case ch.TouchEnd:
              return;
          }
        c.push(Mm(n, r, t));
      }),
    X(() => {
      c.forEach((e) => e());
    })
  );
}
function Fh({
  scrollCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: a,
  sampling: o,
}) {
  return Mm(
    `scroll`,
    X(
      Fm(
        X((o) => {
          let s = jh(o);
          if (!s || Um(s, r, i, a, !0)) return;
          let c = n.getId(s);
          if (s === t && t.defaultView) {
            let n = zm(t.defaultView);
            e({ id: c, x: n.left, y: n.top });
          } else e({ id: c, x: s.scrollLeft, y: s.scrollTop });
        }),
        o.scroll || 100
      )
    ),
    t
  );
}
function Ih({ viewportResizeCb: e }, { win: t }) {
  let n = -1,
    r = -1;
  return Mm(
    `resize`,
    X(
      Fm(
        X(() => {
          let t = Bm(),
            i = Vm();
          (n !== t || r !== i) &&
            (e({ width: Number(i), height: Number(t) }), (n = t), (r = i));
        }),
        200
      )
    ),
    t
  );
}
var Lh = [`INPUT`, `TEXTAREA`, `SELECT`],
  Rh = new WeakMap();
function zh({
  inputCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: a,
  ignoreClass: o,
  ignoreSelector: s,
  maskInputOptions: c,
  maskInputFn: l,
  sampling: u,
  userTriggeredOnInput: d,
  maskTextClass: f,
  unmaskTextClass: p,
  maskTextSelector: m,
  unmaskTextSelector: h,
}) {
  function g(e) {
    let n = jh(e),
      u = e.isTrusted,
      g = n && Lp(n.tagName);
    if (
      (g === `OPTION` && (n = n.parentElement),
      !n || !g || Lh.indexOf(g) < 0 || Um(n, r, i, a, !0))
    )
      return;
    let v = n;
    if (v.classList.contains(o) || (s && v.matches(s))) return;
    let y = Bp(n),
      b = Vp(v, g, y),
      x = !1,
      S = Pp({ maskInputOptions: c, tagName: g, type: y }),
      C = Sm(n, f, m, p, h, S);
    (y === `radio` || y === `checkbox`) && (x = n.checked),
      (b = Fp({ isMasked: C, element: n, value: b, maskInputFn: l })),
      _(
        n,
        d
          ? { text: b, isChecked: x, userTriggered: u }
          : { text: b, isChecked: x }
      );
    let w = n.name;
    y === `radio` &&
      w &&
      x &&
      t.querySelectorAll(`input[type="radio"][name="${w}"]`).forEach((e) => {
        if (e !== n) {
          let t = Fp({
            isMasked: C,
            element: e,
            value: Vp(e, g, y),
            maskInputFn: l,
          });
          _(
            e,
            d
              ? { text: t, isChecked: !x, userTriggered: !1 }
              : { text: t, isChecked: !x }
          );
        }
      });
  }
  function _(t, r) {
    let i = Rh.get(t);
    if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
      Rh.set(t, r);
      let i = n.getId(t);
      X(e)({ ...r, id: i });
    }
  }
  let v = (u.input === `last` ? [`change`] : [`input`, `change`]).map((e) =>
      Mm(e, X(g), t)
    ),
    y = t.defaultView;
  if (!y)
    return () => {
      v.forEach((e) => e());
    };
  let b = y.Object.getOwnPropertyDescriptor(
      y.HTMLInputElement.prototype,
      `value`
    ),
    x = [
      [y.HTMLInputElement.prototype, `value`],
      [y.HTMLInputElement.prototype, `checked`],
      [y.HTMLSelectElement.prototype, `value`],
      [y.HTMLTextAreaElement.prototype, `value`],
      [y.HTMLSelectElement.prototype, `selectedIndex`],
      [y.HTMLOptionElement.prototype, `selected`],
    ];
  return (
    b &&
      b.set &&
      v.push(
        ...x.map((e) =>
          Im(
            e[0],
            e[1],
            {
              set() {
                X(g)({ target: this, isTrusted: !1 });
              },
            },
            !1,
            y
          )
        )
      ),
    X(() => {
      v.forEach((e) => e());
    })
  );
}
function Bh(e) {
  let t = [];
  function n(e, t) {
    if (
      (Xh(`CSSGroupingRule`) && e.parentRule instanceof CSSGroupingRule) ||
      (Xh(`CSSMediaRule`) && e.parentRule instanceof CSSMediaRule) ||
      (Xh(`CSSSupportsRule`) && e.parentRule instanceof CSSSupportsRule) ||
      (Xh(`CSSConditionRule`) && e.parentRule instanceof CSSConditionRule)
    ) {
      let n = Array.from(e.parentRule.cssRules).indexOf(e);
      t.unshift(n);
    } else if (e.parentStyleSheet) {
      let n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
      t.unshift(n);
    }
    return t;
  }
  return n(e, t);
}
function Vh(e, t, n) {
  let r, i;
  return e
    ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (i = n.getId(e)),
      { styleId: i, id: r })
    : {};
}
function Hh(
  { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
  { win: r }
) {
  if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
  let i = r.CSSStyleSheet.prototype.insertRule;
  r.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
    apply: X((r, i, a) => {
      let [o, s] = a,
        { id: c, styleId: l } = Vh(i, t, n.styleMirror);
      return (
        ((c && c !== -1) || (l && l !== -1)) &&
          e({ id: c, styleId: l, adds: [{ rule: o, index: s }] }),
        r.apply(i, a)
      );
    }),
  });
  let a = r.CSSStyleSheet.prototype.deleteRule;
  r.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
    apply: X((r, i, a) => {
      let [o] = a,
        { id: s, styleId: c } = Vh(i, t, n.styleMirror);
      return (
        ((s && s !== -1) || (c && c !== -1)) &&
          e({ id: s, styleId: c, removes: [{ index: o }] }),
        r.apply(i, a)
      );
    }),
  });
  let o;
  r.CSSStyleSheet.prototype.replace &&
    ((o = r.CSSStyleSheet.prototype.replace),
    (r.CSSStyleSheet.prototype.replace = new Proxy(o, {
      apply: X((r, i, a) => {
        let [o] = a,
          { id: s, styleId: c } = Vh(i, t, n.styleMirror);
        return (
          ((s && s !== -1) || (c && c !== -1)) &&
            e({ id: s, styleId: c, replace: o }),
          r.apply(i, a)
        );
      }),
    })));
  let s;
  r.CSSStyleSheet.prototype.replaceSync &&
    ((s = r.CSSStyleSheet.prototype.replaceSync),
    (r.CSSStyleSheet.prototype.replaceSync = new Proxy(s, {
      apply: X((r, i, a) => {
        let [o] = a,
          { id: s, styleId: c } = Vh(i, t, n.styleMirror);
        return (
          ((s && s !== -1) || (c && c !== -1)) &&
            e({ id: s, styleId: c, replaceSync: o }),
          r.apply(i, a)
        );
      }),
    })));
  let c = {};
  Zh(`CSSGroupingRule`)
    ? (c.CSSGroupingRule = r.CSSGroupingRule)
    : (Zh(`CSSMediaRule`) && (c.CSSMediaRule = r.CSSMediaRule),
      Zh(`CSSConditionRule`) && (c.CSSConditionRule = r.CSSConditionRule),
      Zh(`CSSSupportsRule`) && (c.CSSSupportsRule = r.CSSSupportsRule));
  let l = {};
  return (
    Object.entries(c).forEach(([r, i]) => {
      (l[r] = {
        insertRule: i.prototype.insertRule,
        deleteRule: i.prototype.deleteRule,
      }),
        (i.prototype.insertRule = new Proxy(l[r].insertRule, {
          apply: X((r, i, a) => {
            let [o, s] = a,
              { id: c, styleId: l } = Vh(i.parentStyleSheet, t, n.styleMirror);
            return (
              ((c && c !== -1) || (l && l !== -1)) &&
                e({
                  id: c,
                  styleId: l,
                  adds: [{ rule: o, index: [...Bh(i), s || 0] }],
                }),
              r.apply(i, a)
            );
          }),
        })),
        (i.prototype.deleteRule = new Proxy(l[r].deleteRule, {
          apply: X((r, i, a) => {
            let [o] = a,
              { id: s, styleId: c } = Vh(i.parentStyleSheet, t, n.styleMirror);
            return (
              ((s && s !== -1) || (c && c !== -1)) &&
                e({ id: s, styleId: c, removes: [{ index: [...Bh(i), o] }] }),
              r.apply(i, a)
            );
          }),
        }));
    }),
    X(() => {
      (r.CSSStyleSheet.prototype.insertRule = i),
        (r.CSSStyleSheet.prototype.deleteRule = a),
        o && (r.CSSStyleSheet.prototype.replace = o),
        s && (r.CSSStyleSheet.prototype.replaceSync = s),
        Object.entries(c).forEach(([e, t]) => {
          (t.prototype.insertRule = l[e].insertRule),
            (t.prototype.deleteRule = l[e].deleteRule);
        });
    })
  );
}
function Uh({ mirror: e, stylesheetManager: t }, n) {
  let r = null;
  r = n.nodeName === `#document` ? e.getId(n) : e.getId(n.host);
  let i =
      n.nodeName === `#document`
        ? n.defaultView?.Document
        : n.ownerDocument?.defaultView?.ShadowRoot,
    a = i?.prototype
      ? Object.getOwnPropertyDescriptor(i?.prototype, `adoptedStyleSheets`)
      : void 0;
  return r === null || r === -1 || !i || !a
    ? () => {}
    : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: a.configurable,
        enumerable: a.enumerable,
        get() {
          return a.get?.call(this);
        },
        set(e) {
          let n = a.set?.call(this, e);
          if (r !== null && r !== -1)
            try {
              t.adoptStyleSheets(e, r);
            } catch {}
          return n;
        },
      }),
      X(() => {
        Object.defineProperty(n, "adoptedStyleSheets", {
          configurable: a.configurable,
          enumerable: a.enumerable,
          get: a.get,
          set: a.set,
        });
      }));
}
function Wh(
  {
    styleDeclarationCb: e,
    mirror: t,
    ignoreCSSAttributes: n,
    stylesheetManager: r,
  },
  { win: i }
) {
  let a = i.CSSStyleDeclaration.prototype.setProperty;
  i.CSSStyleDeclaration.prototype.setProperty = new Proxy(a, {
    apply: X((i, o, s) => {
      let [c, l, u] = s;
      if (n.has(c)) return a.apply(o, [c, l, u]);
      let { id: d, styleId: f } = Vh(
        o.parentRule?.parentStyleSheet,
        t,
        r.styleMirror
      );
      return (
        ((d && d !== -1) || (f && f !== -1)) &&
          e({
            id: d,
            styleId: f,
            set: { property: c, value: l, priority: u },
            index: Bh(o.parentRule),
          }),
        i.apply(o, s)
      );
    }),
  });
  let o = i.CSSStyleDeclaration.prototype.removeProperty;
  return (
    (i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
      apply: X((i, a, s) => {
        let [c] = s;
        if (n.has(c)) return o.apply(a, [c]);
        let { id: l, styleId: u } = Vh(
          a.parentRule?.parentStyleSheet,
          t,
          r.styleMirror
        );
        return (
          ((l && l !== -1) || (u && u !== -1)) &&
            e({
              id: l,
              styleId: u,
              remove: { property: c },
              index: Bh(a.parentRule),
            }),
          i.apply(a, s)
        );
      }),
    })),
    X(() => {
      (i.CSSStyleDeclaration.prototype.setProperty = a),
        (i.CSSStyleDeclaration.prototype.removeProperty = o);
    })
  );
}
function Gh({
  mediaInteractionCb: e,
  blockClass: t,
  blockSelector: n,
  unblockSelector: r,
  mirror: i,
  sampling: a,
  doc: o,
}) {
  let s = X((o) =>
      Fm(
        X((a) => {
          let s = jh(a);
          if (!s || Um(s, t, n, r, !0)) return;
          let { currentTime: c, volume: l, muted: u, playbackRate: d } = s;
          e({
            type: o,
            id: i.getId(s),
            currentTime: c,
            volume: l,
            muted: u,
            playbackRate: d,
          });
        }),
        a.media || 500
      )
    ),
    c = [
      Mm(`play`, s(uh.Play), o),
      Mm(`pause`, s(uh.Pause), o),
      Mm(`seeked`, s(uh.Seeked), o),
      Mm(`volumechange`, s(uh.VolumeChange), o),
      Mm(`ratechange`, s(uh.RateChange), o),
    ];
  return X(() => {
    c.forEach((e) => e());
  });
}
function Kh({ fontCb: e, doc: t }) {
  let n = t.defaultView;
  if (!n) return () => {};
  let r = [],
    i = new WeakMap(),
    a = n.FontFace;
  n.FontFace = function (e, t, n) {
    let r = new a(e, t, n);
    return (
      i.set(r, {
        family: e,
        buffer: typeof t != `string`,
        descriptors: n,
        fontSource:
          typeof t == `string`
            ? t
            : JSON.stringify(Array.from(new Uint8Array(t))),
      }),
      r
    );
  };
  let o = Lm(t.fonts, `add`, function (t) {
    return function (n) {
      return (
        oh(
          X(() => {
            let t = i.get(n);
            t && (e(t), i.delete(n));
          }),
          0
        ),
        t.apply(this, [n])
      );
    };
  });
  return (
    r.push(() => {
      n.FontFace = a;
    }),
    r.push(o),
    X(() => {
      r.forEach((e) => e());
    })
  );
}
function qh(e) {
  let {
      doc: t,
      mirror: n,
      blockClass: r,
      blockSelector: i,
      unblockSelector: a,
      selectionCb: o,
    } = e,
    s = !0,
    c = X(() => {
      let e = t.getSelection();
      if (!e || (s && e?.isCollapsed)) return;
      s = e.isCollapsed || !1;
      let c = [],
        l = e.rangeCount || 0;
      for (let t = 0; t < l; t++) {
        let {
          startContainer: o,
          startOffset: s,
          endContainer: l,
          endOffset: u,
        } = e.getRangeAt(t);
        Um(o, r, i, a, !0) ||
          Um(l, r, i, a, !0) ||
          c.push({
            start: n.getId(o),
            startOffset: s,
            end: n.getId(l),
            endOffset: u,
          });
      }
      o({ ranges: c });
    });
  return c(), Mm(`selectionchange`, c);
}
function Jh({ doc: e, customElementCb: t }) {
  let n = e.defaultView;
  return !n || !n.customElements
    ? () => {}
    : Lm(n.customElements, `define`, function (e) {
        return function (n, r, i) {
          try {
            t({ define: { name: n } });
          } catch {}
          return e.apply(this, [n, r, i]);
        };
      });
}
function Yh(e, t = {}) {
  let n = e.doc.defaultView;
  if (!n) return () => {};
  let r;
  e.recordDOM && (r = Mh(e, e.doc));
  let i = Nh(e),
    a = Ph(e),
    o = Fh(e),
    s = Ih(e, { win: n }),
    c = zh(e),
    l = Gh(e),
    u = () => {},
    d = () => {},
    f = () => {},
    p = () => {};
  e.recordDOM &&
    ((u = Hh(e, { win: n })),
    (d = Uh(e, e.doc)),
    (f = Wh(e, { win: n })),
    e.collectFonts && (p = Kh(e)));
  let m = qh(e),
    h = Jh(e),
    g = [];
  for (let t of e.plugins) g.push(t.observer(t.callback, n, t.options));
  return X(() => {
    Ah.forEach((e) => e.reset()),
      r?.disconnect(),
      i(),
      a(),
      o(),
      s(),
      c(),
      l(),
      u(),
      d(),
      f(),
      p(),
      m(),
      h(),
      g.forEach((e) => e());
  });
}
function Xh(e) {
  return window[e] !== void 0;
}
function Zh(e) {
  return !!(
    window[e] !== void 0 &&
    window[e].prototype &&
    `insertRule` in window[e].prototype &&
    `deleteRule` in window[e].prototype
  );
}
var Qh = class {
    constructor(e) {
      (this.generateIdFn = e),
        (this.iframeIdToRemoteIdMap = new WeakMap()),
        (this.iframeRemoteIdToIdMap = new WeakMap());
    }
    getId(e, t, n, r) {
      let i = n || this.getIdToRemoteIdMap(e),
        a = r || this.getRemoteIdToIdMap(e),
        o = i.get(t);
      return o || ((o = this.generateIdFn()), i.set(t, o), a.set(o, t)), o;
    }
    getIds(e, t) {
      let n = this.getIdToRemoteIdMap(e),
        r = this.getRemoteIdToIdMap(e);
      return t.map((t) => this.getId(e, t, n, r));
    }
    getRemoteId(e, t, n) {
      let r = n || this.getRemoteIdToIdMap(e);
      return typeof t == `number` ? r.get(t) || -1 : t;
    }
    getRemoteIds(e, t) {
      let n = this.getRemoteIdToIdMap(e);
      return t.map((t) => this.getRemoteId(e, t, n));
    }
    reset(e) {
      if (!e) {
        (this.iframeIdToRemoteIdMap = new WeakMap()),
          (this.iframeRemoteIdToIdMap = new WeakMap());
        return;
      }
      this.iframeIdToRemoteIdMap.delete(e),
        this.iframeRemoteIdToIdMap.delete(e);
    }
    getIdToRemoteIdMap(e) {
      let t = this.iframeIdToRemoteIdMap.get(e);
      return t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t;
    }
    getRemoteIdToIdMap(e) {
      let t = this.iframeRemoteIdToIdMap.get(e);
      return t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t;
    }
  },
  $h = class {
    constructor() {
      (this.crossOriginIframeMirror = new Qh(Qp)),
        (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
  },
  eg = class {
    constructor(e) {
      (this.iframes = new WeakMap()),
        (this.crossOriginIframeMap = new WeakMap()),
        (this.crossOriginIframeMirror = new Qh(Qp)),
        (this.crossOriginIframeRootIdMap = new WeakMap()),
        (this.mutationCb = e.mutationCb),
        (this.wrappedEmit = e.wrappedEmit),
        (this.stylesheetManager = e.stylesheetManager),
        (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
        (this.crossOriginIframeStyleMirror = new Qh(
          this.stylesheetManager.styleMirror.generateId.bind(
            this.stylesheetManager.styleMirror
          )
        )),
        (this.mirror = e.mirror),
        this.recordCrossOriginIframes &&
          window.addEventListener(`message`, this.handleMessage.bind(this));
    }
    addIframe(e) {
      this.iframes.set(e, !0);
      let t = yh(e);
      t && this.crossOriginIframeMap.set(t, e);
    }
    addLoadListener(e) {
      this.loadListener = e;
    }
    attachIframe(e, t) {
      this.mutationCb({
        adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t }],
        removes: [],
        texts: [],
        attributes: [],
        isAttachIframe: !0,
      }),
        this.recordCrossOriginIframes &&
          yh(e)?.addEventListener(`message`, this.handleMessage.bind(this)),
        this.loadListener?.(e);
      let n = vh(e);
      n &&
        n.adoptedStyleSheets &&
        n.adoptedStyleSheets.length > 0 &&
        this.stylesheetManager.adoptStyleSheets(
          n.adoptedStyleSheets,
          this.mirror.getId(n)
        );
    }
    handleMessage(e) {
      let t = e;
      if (t.data.type !== `rrweb` || t.origin !== t.data.origin || !e.source)
        return;
      let n = this.crossOriginIframeMap.get(e.source);
      if (!n) return;
      let r = this.transformCrossOriginEvent(n, t.data.event);
      r && this.wrappedEmit(r, t.data.isCheckout);
    }
    transformCrossOriginEvent(e, t) {
      switch (t.type) {
        case J.FullSnapshot: {
          this.crossOriginIframeMirror.reset(e),
            this.crossOriginIframeStyleMirror.reset(e),
            this.replaceIdOnNode(t.data.node, e);
          let n = t.data.node.id;
          return (
            this.crossOriginIframeRootIdMap.set(e, n),
            this.patchRootIdOnNode(t.data.node, n),
            {
              timestamp: t.timestamp,
              type: J.IncrementalSnapshot,
              data: {
                source: Y.Mutation,
                adds: [
                  {
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t.data.node,
                  },
                ],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0,
              },
            }
          );
        }
        case J.Meta:
        case J.Load:
        case J.DomContentLoaded:
          return !1;
        case J.Plugin:
          return t;
        case J.Custom:
          return (
            this.replaceIds(t.data.payload, e, [
              `id`,
              `parentId`,
              `previousId`,
              `nextId`,
            ]),
            t
          );
        case J.IncrementalSnapshot:
          switch (t.data.source) {
            case Y.Mutation:
              return (
                t.data.adds.forEach((t) => {
                  this.replaceIds(t, e, [`parentId`, `nextId`, `previousId`]),
                    this.replaceIdOnNode(t.node, e);
                  let n = this.crossOriginIframeRootIdMap.get(e);
                  n && this.patchRootIdOnNode(t.node, n);
                }),
                t.data.removes.forEach((t) => {
                  this.replaceIds(t, e, [`parentId`, `id`]);
                }),
                t.data.attributes.forEach((t) => {
                  this.replaceIds(t, e, [`id`]);
                }),
                t.data.texts.forEach((t) => {
                  this.replaceIds(t, e, [`id`]);
                }),
                t
              );
            case Y.Drag:
            case Y.TouchMove:
            case Y.MouseMove:
              return (
                t.data.positions.forEach((t) => {
                  this.replaceIds(t, e, [`id`]);
                }),
                t
              );
            case Y.ViewportResize:
              return !1;
            case Y.MediaInteraction:
            case Y.MouseInteraction:
            case Y.Scroll:
            case Y.CanvasMutation:
            case Y.Input:
              return this.replaceIds(t.data, e, [`id`]), t;
            case Y.StyleSheetRule:
            case Y.StyleDeclaration:
              return (
                this.replaceIds(t.data, e, [`id`]),
                this.replaceStyleIds(t.data, e, [`styleId`]),
                t
              );
            case Y.Font:
              return t;
            case Y.Selection:
              return (
                t.data.ranges.forEach((t) => {
                  this.replaceIds(t, e, [`start`, `end`]);
                }),
                t
              );
            case Y.AdoptedStyleSheet:
              return (
                this.replaceIds(t.data, e, [`id`]),
                this.replaceStyleIds(t.data, e, [`styleIds`]),
                t.data.styles?.forEach((t) => {
                  this.replaceStyleIds(t, e, [`styleId`]);
                }),
                t
              );
          }
      }
      return !1;
    }
    replace(e, t, n, r) {
      for (let i of r)
        (!Array.isArray(t[i]) && typeof t[i] != `number`) ||
          (Array.isArray(t[i])
            ? (t[i] = e.getIds(n, t[i]))
            : (t[i] = e.getId(n, t[i])));
      return t;
    }
    replaceIds(e, t, n) {
      return this.replace(this.crossOriginIframeMirror, e, t, n);
    }
    replaceStyleIds(e, t, n) {
      return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
    }
    replaceIdOnNode(e, t) {
      this.replaceIds(e, t, [`id`, `rootId`]),
        `childNodes` in e &&
          e.childNodes.forEach((e) => {
            this.replaceIdOnNode(e, t);
          });
    }
    patchRootIdOnNode(e, t) {
      e.type !== K.Document && !e.rootId && (e.rootId = t),
        `childNodes` in e &&
          e.childNodes.forEach((e) => {
            this.patchRootIdOnNode(e, t);
          });
    }
  },
  tg = class {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
  },
  ng = class {
    constructor(e) {
      (this.shadowDoms = new WeakSet()),
        (this.restoreHandlers = []),
        (this.mutationCb = e.mutationCb),
        (this.scrollCb = e.scrollCb),
        (this.bypassOptions = e.bypassOptions),
        (this.mirror = e.mirror),
        this.init();
    }
    init() {
      this.reset(), this.patchAttachShadow(Element, document);
    }
    addShadowRoot(e, t) {
      if (!Cp(e) || this.shadowDoms.has(e)) return;
      this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
      let n = Mh(
        {
          ...this.bypassOptions,
          doc: t,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this,
        },
        e
      );
      this.restoreHandlers.push(() => n.disconnect()),
        this.restoreHandlers.push(
          Fh({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: e,
            mirror: this.mirror,
          })
        ),
        oh(() => {
          e.adoptedStyleSheets &&
            e.adoptedStyleSheets.length > 0 &&
            this.bypassOptions.stylesheetManager.adoptStyleSheets(
              e.adoptedStyleSheets,
              this.mirror.getId(e.host)
            ),
            this.restoreHandlers.push(
              Uh(
                {
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager,
                },
                e
              )
            );
        }, 0);
    }
    observeAttachShadow(e) {
      let t = vh(e),
        n = yh(e);
      !t || !n || this.patchAttachShadow(n.Element, t);
    }
    patchAttachShadow(e, t) {
      let n = this;
      this.restoreHandlers.push(
        Lm(e.prototype, `attachShadow`, function (e) {
          return function (r) {
            let i = e.call(this, r);
            return (
              this.shadowRoot &&
                nh(this) &&
                n.addShadowRoot(this.shadowRoot, t),
              i
            );
          };
        })
      );
    }
    reset() {
      this.restoreHandlers.forEach((e) => {
        try {
          e();
        } catch {}
      }),
        (this.restoreHandlers = []),
        (this.shadowDoms = new WeakSet()),
        this.bypassOptions.canvasManager.resetShadowRoots();
    }
  },
  rg = class {
    constructor(e) {
      (this.trackedLinkElements = new WeakSet()),
        (this.styleMirror = new Qm()),
        (this.mutationCb = e.mutationCb),
        (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
    }
    attachLinkElement(e, t) {
      `_cssText` in t.attributes &&
        this.mutationCb({
          adds: [],
          removes: [],
          texts: [],
          attributes: [{ id: t.id, attributes: t.attributes }],
        }),
        this.trackLinkElement(e);
    }
    trackLinkElement(e) {
      this.trackedLinkElements.has(e) ||
        (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
    }
    adoptStyleSheets(e, t) {
      if (e.length === 0) return;
      let n = { id: t, styleIds: [] },
        r = [];
      for (let t of e) {
        let e;
        this.styleMirror.has(t)
          ? (e = this.styleMirror.getId(t))
          : ((e = this.styleMirror.add(t)),
            r.push({
              styleId: e,
              rules: Array.from(t.rules || CSSRule, (e, t) => ({
                rule: Op(e),
                index: t,
              })),
            })),
          n.styleIds.push(e);
      }
      r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n);
    }
    reset() {
      this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
    }
    trackStylesheetInLinkElement(e) {}
  },
  ig = class {
    constructor() {
      (this.nodeMap = new WeakMap()), (this.active = !1);
    }
    inOtherBuffer(e, t) {
      let n = this.nodeMap.get(e);
      return n && Array.from(n).some((e) => e !== t);
    }
    add(e, t) {
      this.active ||
        ((this.active = !0),
        ah(() => {
          (this.nodeMap = new WeakMap()), (this.active = !1);
        })),
        this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
    }
    destroy() {}
  },
  Z,
  ag;
try {
  if (Array.from([1], (e) => e * 2)[0] !== 2) {
    let e = document.createElement(`iframe`);
    document.body.appendChild(e),
      (Array.from = e.contentWindow?.Array.from || Array.from),
      document.body.removeChild(e);
  }
} catch (e) {
  console.debug(`Unable to override Array.from`, e);
}
var og = Np();
function sg(e = {}) {
  let {
    emit: t,
    checkoutEveryNms: n,
    checkoutEveryNth: r,
    blockClass: i = `rr-block`,
    blockSelector: a = null,
    unblockSelector: o = null,
    ignoreClass: s = `rr-ignore`,
    ignoreSelector: c = null,
    maskAllText: l = !1,
    maskTextClass: u = `rr-mask`,
    unmaskTextClass: d = null,
    maskTextSelector: f = null,
    unmaskTextSelector: p = null,
    inlineStylesheet: m = !0,
    maskAllInputs: h,
    maskInputOptions: g,
    slimDOMOptions: _,
    maskAttributeFn: v,
    maskInputFn: y,
    maskTextFn: b,
    maxCanvasSize: x = null,
    packFn: S,
    sampling: C = {},
    dataURLOptions: w = {},
    mousemoveWait: ee,
    recordDOM: te = !0,
    recordCanvas: T = !1,
    recordCrossOriginIframes: ne = !1,
    recordAfter: re = e.recordAfter === `DOMContentLoaded`
      ? e.recordAfter
      : `load`,
    userTriggeredOnInput: ie = !1,
    collectFonts: E = !1,
    inlineImages: D = !1,
    plugins: O,
    keepIframeSrcFn: k = () => !1,
    ignoreCSSAttributes: ae = new Set([]),
    errorHandler: oe,
    onMutation: se,
    getCanvasManager: ce,
  } = e;
  fh(oe);
  let le = !ne || window.parent === window,
    ue = !1;
  if (!le)
    try {
      window.parent.document && (ue = !1);
    } catch {
      ue = !0;
    }
  if (le && !t) throw Error(`emit function is required`);
  if (!le && !ue) return () => {};
  ee !== void 0 && C.mousemove === void 0 && (C.mousemove = ee), og.reset();
  let de =
      h === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0,
          }
        : g === void 0
        ? {}
        : g,
    fe =
      _ === !0 || _ === `all`
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: _ === `all`,
            headMetaDescKeywords: _ === `all`,
          }
        : _ || {};
  Jm();
  let pe,
    me = 0,
    he = (e) => {
      for (let t of O || []) t.eventProcessor && (e = t.eventProcessor(e));
      return S && !ue && (e = S(e)), e;
    };
  Z = (e, i) => {
    let a = e;
    if (
      ((a.timestamp = Rm()),
      Ah[0]?.isFrozen() &&
        a.type !== J.FullSnapshot &&
        !(a.type === J.IncrementalSnapshot && a.data.source === Y.Mutation) &&
        Ah.forEach((e) => e.unfreeze()),
      le)
    )
      t?.(he(a), i);
    else if (ue) {
      let e = {
        type: `rrweb`,
        event: he(a),
        origin: window.location.origin,
        isCheckout: i,
      };
      window.parent.postMessage(e, `*`);
    }
    if (a.type === J.FullSnapshot) (pe = a), (me = 0);
    else if (a.type === J.IncrementalSnapshot) {
      if (a.data.source === Y.Mutation && a.data.isAttachIframe) return;
      me++;
      let e = r && me >= r,
        t = n && pe && a.timestamp - pe.timestamp > n;
      (e || t) && we(!0);
    }
  };
  let ge = (e) => {
      Z({ type: J.IncrementalSnapshot, data: { source: Y.Mutation, ...e } });
    },
    _e = (e) =>
      Z({ type: J.IncrementalSnapshot, data: { source: Y.Scroll, ...e } }),
    ve = (e) =>
      Z({
        type: J.IncrementalSnapshot,
        data: { source: Y.CanvasMutation, ...e },
      }),
    ye = new rg({
      mutationCb: ge,
      adoptedStyleSheetCb: (e) =>
        Z({
          type: J.IncrementalSnapshot,
          data: { source: Y.AdoptedStyleSheet, ...e },
        }),
    }),
    be =
      typeof __RRWEB_EXCLUDE_IFRAME__ == `boolean` && __RRWEB_EXCLUDE_IFRAME__
        ? new $h()
        : new eg({
            mirror: og,
            mutationCb: ge,
            stylesheetManager: ye,
            recordCrossOriginIframes: ne,
            wrappedEmit: Z,
          });
  for (let e of O || [])
    e.getMirror &&
      e.getMirror({
        nodeMirror: og,
        crossOriginIframeMirror: be.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: be.crossOriginIframeStyleMirror,
      });
  let xe = new ig(),
    Se = lg(ce, {
      mirror: og,
      win: window,
      mutationCb: (e) =>
        Z({
          type: J.IncrementalSnapshot,
          data: { source: Y.CanvasMutation, ...e },
        }),
      recordCanvas: T,
      blockClass: i,
      blockSelector: a,
      unblockSelector: o,
      maxCanvasSize: x,
      sampling: C.canvas,
      dataURLOptions: w,
      errorHandler: oe,
    }),
    Ce =
      typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == `boolean` &&
      __RRWEB_EXCLUDE_SHADOW_DOM__
        ? new tg()
        : new ng({
            mutationCb: ge,
            scrollCb: _e,
            bypassOptions: {
              onMutation: se,
              blockClass: i,
              blockSelector: a,
              unblockSelector: o,
              maskAllText: l,
              maskTextClass: u,
              unmaskTextClass: d,
              maskTextSelector: f,
              unmaskTextSelector: p,
              inlineStylesheet: m,
              maskInputOptions: de,
              dataURLOptions: w,
              maskAttributeFn: v,
              maskTextFn: b,
              maskInputFn: y,
              recordCanvas: T,
              inlineImages: D,
              sampling: C,
              slimDOMOptions: fe,
              iframeManager: be,
              stylesheetManager: ye,
              canvasManager: Se,
              keepIframeSrcFn: k,
              processedNodeManager: xe,
              ignoreCSSAttributes: ae,
            },
            mirror: og,
          }),
    we = (e = !1) => {
      if (!te) return;
      Z(
        {
          type: J.Meta,
          data: { href: window.location.href, width: Vm(), height: Bm() },
        },
        e
      ),
        ye.reset(),
        Ce.init(),
        Ah.forEach((e) => e.lock());
      let t = jm(document, {
        mirror: og,
        blockClass: i,
        blockSelector: a,
        unblockSelector: o,
        maskAllText: l,
        maskTextClass: u,
        unmaskTextClass: d,
        maskTextSelector: f,
        unmaskTextSelector: p,
        inlineStylesheet: m,
        maskAllInputs: de,
        maskAttributeFn: v,
        maskInputFn: y,
        maskTextFn: b,
        slimDOM: fe,
        dataURLOptions: w,
        recordCanvas: T,
        inlineImages: D,
        onSerialize: (e) => {
          Ym(e, og) && be.addIframe(e),
            Xm(e, og) && ye.trackLinkElement(e),
            Zm(e) && Ce.addShadowRoot(e.shadowRoot, document);
        },
        onIframeLoad: (e, t) => {
          be.attachIframe(e, t);
          let n = yh(e);
          n && Se.addWindow(n), Ce.observeAttachShadow(e);
        },
        onStylesheetLoad: (e, t) => {
          ye.attachLinkElement(e, t);
        },
        onBlockedImageLoad: (e, t, { width: n, height: r }) => {
          ge({
            adds: [],
            removes: [],
            texts: [],
            attributes: [
              {
                id: t.id,
                attributes: { style: { width: `${n}px`, height: `${r}px` } },
              },
            ],
          });
        },
        keepIframeSrcFn: k,
        ignoreCSSAttributes: ae,
      });
      if (!t) return console.warn(`Failed to snapshot the document`);
      Z({ type: J.FullSnapshot, data: { node: t, initialOffset: zm(window) } }),
        Ah.forEach((e) => e.unlock()),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          ye.adoptStyleSheets(document.adoptedStyleSheets, og.getId(document));
    };
  ag = we;
  try {
    let e = [],
      t = (e) =>
        X(Yh)(
          {
            onMutation: se,
            mutationCb: ge,
            mousemoveCb: (e, t) =>
              Z({
                type: J.IncrementalSnapshot,
                data: { source: t, positions: e },
              }),
            mouseInteractionCb: (e) =>
              Z({
                type: J.IncrementalSnapshot,
                data: { source: Y.MouseInteraction, ...e },
              }),
            scrollCb: _e,
            viewportResizeCb: (e) =>
              Z({
                type: J.IncrementalSnapshot,
                data: { source: Y.ViewportResize, ...e },
              }),
            inputCb: (e) =>
              Z({
                type: J.IncrementalSnapshot,
                data: { source: Y.Input, ...e },
              }),
            mediaInteractionCb: (e) =>
              Z({
                type: J.IncrementalSnapshot,
                data: { source: Y.MediaInteraction, ...e },
              }),
            styleSheetRuleCb: (e) =>
              Z({
                type: J.IncrementalSnapshot,
                data: { source: Y.StyleSheetRule, ...e },
              }),
            styleDeclarationCb: (e) =>
              Z({
                type: J.IncrementalSnapshot,
                data: { source: Y.StyleDeclaration, ...e },
              }),
            canvasMutationCb: ve,
            fontCb: (e) =>
              Z({
                type: J.IncrementalSnapshot,
                data: { source: Y.Font, ...e },
              }),
            selectionCb: (e) => {
              Z({
                type: J.IncrementalSnapshot,
                data: { source: Y.Selection, ...e },
              });
            },
            customElementCb: (e) => {
              Z({
                type: J.IncrementalSnapshot,
                data: { source: Y.CustomElement, ...e },
              });
            },
            blockClass: i,
            ignoreClass: s,
            ignoreSelector: c,
            maskAllText: l,
            maskTextClass: u,
            unmaskTextClass: d,
            maskTextSelector: f,
            unmaskTextSelector: p,
            maskInputOptions: de,
            inlineStylesheet: m,
            sampling: C,
            recordDOM: te,
            recordCanvas: T,
            inlineImages: D,
            userTriggeredOnInput: ie,
            collectFonts: E,
            doc: e,
            maskAttributeFn: v,
            maskInputFn: y,
            maskTextFn: b,
            keepIframeSrcFn: k,
            blockSelector: a,
            unblockSelector: o,
            slimDOMOptions: fe,
            dataURLOptions: w,
            mirror: og,
            iframeManager: be,
            stylesheetManager: ye,
            shadowDomManager: Ce,
            processedNodeManager: xe,
            canvasManager: Se,
            ignoreCSSAttributes: ae,
            plugins:
              O?.filter((e) => e.observer)?.map((e) => ({
                observer: e.observer,
                options: e.options,
                callback: (t) =>
                  Z({ type: J.Plugin, data: { plugin: e.name, payload: t } }),
              })) || [],
          },
          {}
        );
    be.addLoadListener((n) => {
      try {
        e.push(t(n.contentDocument));
      } catch (e) {
        console.warn(e);
      }
    });
    let n = () => {
      we(), e.push(t(document));
    };
    return (
      document.readyState === `interactive` ||
      document.readyState === `complete`
        ? n()
        : (e.push(
            Mm(`DOMContentLoaded`, () => {
              Z({ type: J.DomContentLoaded, data: {} }),
                re === `DOMContentLoaded` && n();
            })
          ),
          e.push(
            Mm(
              `load`,
              () => {
                Z({ type: J.Load, data: {} }), re === `load` && n();
              },
              window
            )
          )),
      () => {
        e.forEach((e) => e()), xe.destroy(), (ag = void 0), ph();
      }
    );
  } catch (e) {
    console.warn(e);
  }
}
function cg(e) {
  if (!ag) throw Error(`please take full snapshot after start recording`);
  ag(e);
}
(sg.mirror = og), (sg.takeFullSnapshot = cg);
function lg(e, t) {
  try {
    return e ? e(t) : new _h();
  } catch {
    return console.warn(`Unable to initialize CanvasManager`), new _h();
  }
}
var ug;
(function (e) {
  (e[(e.NotStarted = 0)] = `NotStarted`),
    (e[(e.Running = 1)] = `Running`),
    (e[(e.Stopped = 2)] = `Stopped`);
})((ug ||= {}));
var dg = 3,
  fg = 5;
function pg(e) {
  return e > 9999999999 ? e : e * 1e3;
}
function mg(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function hg(e, t) {
  t.category !== `sentry.transaction` &&
    ([`ui.click`, `ui.input`].includes(t.category)
      ? e.triggerUserActivity()
      : e.checkAndHandleExpiredSession(),
    e.addUpdate(
      () => (
        e.throttledAddEvent({
          type: J.Custom,
          timestamp: (t.timestamp || 0) * 1e3,
          data: { tag: `breadcrumb`, payload: He(t, 10, 1e3) },
        }),
        t.category === `console`
      )
    ));
}
var gg = `button,a`;
function _g(e) {
  return e.closest(gg) || e;
}
function vg(e) {
  let t = yg(e);
  return !t || !(t instanceof Element) ? t : _g(t);
}
function yg(e) {
  return bg(e) ? e.target : e;
}
function bg(e) {
  return be(e) && `target` in e;
}
var xg;
function Sg(e) {
  return (
    xg || ((xg = []), Cg()),
    xg.push(e),
    () => {
      let t = xg ? xg.indexOf(e) : -1;
      t > -1 && xg.splice(t, 1);
    }
  );
}
function Cg() {
  Ee(G, `open`, function (e) {
    return function (...t) {
      if (xg)
        try {
          xg.forEach((e) => e());
        } catch {}
      return e.apply(G, t);
    };
  });
}
var wg = new Set([
  Y.Mutation,
  Y.StyleSheetRule,
  Y.StyleDeclaration,
  Y.AdoptedStyleSheet,
  Y.CanvasMutation,
  Y.Selection,
  Y.MediaInteraction,
]);
function Tg(e, t, n) {
  e.handleClick(t, n);
}
var Eg = class {
    constructor(e, t, n = hg) {
      (this._lastMutation = 0),
        (this._lastScroll = 0),
        (this._clicks = []),
        (this._timeout = t.timeout / 1e3),
        (this._threshold = t.threshold / 1e3),
        (this._scrollTimeout = t.scrollTimeout / 1e3),
        (this._replay = e),
        (this._ignoreSelector = t.ignoreSelector),
        (this._addBreadcrumbEvent = n);
    }
    addListeners() {
      let e = Sg(() => {
        this._lastMutation = Ag();
      });
      this._teardown = () => {
        e(),
          (this._clicks = []),
          (this._lastMutation = 0),
          (this._lastScroll = 0);
      };
    }
    removeListeners() {
      this._teardown && this._teardown(),
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
    }
    handleClick(e, t) {
      if (Og(t, this._ignoreSelector) || !kg(e)) return;
      let n = {
        timestamp: mg(e.timestamp),
        clickBreadcrumb: e,
        clickCount: 0,
        node: t,
      };
      this._clicks.some(
        (e) => e.node === n.node && Math.abs(e.timestamp - n.timestamp) < 1
      ) ||
        (this._clicks.push(n),
        this._clicks.length === 1 && this._scheduleCheckClicks());
    }
    registerMutation(e = Date.now()) {
      this._lastMutation = mg(e);
    }
    registerScroll(e = Date.now()) {
      this._lastScroll = mg(e);
    }
    registerClick(e) {
      let t = _g(e);
      this._handleMultiClick(t);
    }
    _handleMultiClick(e) {
      this._getClicks(e).forEach((e) => {
        e.clickCount++;
      });
    }
    _getClicks(e) {
      return this._clicks.filter((t) => t.node === e);
    }
    _checkClicks() {
      let e = [],
        t = Ag();
      this._clicks.forEach((n) => {
        !n.mutationAfter &&
          this._lastMutation &&
          (n.mutationAfter =
            n.timestamp <= this._lastMutation
              ? this._lastMutation - n.timestamp
              : void 0),
          !n.scrollAfter &&
            this._lastScroll &&
            (n.scrollAfter =
              n.timestamp <= this._lastScroll
                ? this._lastScroll - n.timestamp
                : void 0),
          n.timestamp + this._timeout <= t && e.push(n);
      });
      for (let t of e) {
        let e = this._clicks.indexOf(t);
        e > -1 && (this._generateBreadcrumbs(t), this._clicks.splice(e, 1));
      }
      this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(e) {
      let t = this._replay,
        n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
        r = e.mutationAfter && e.mutationAfter <= this._threshold,
        i = !n && !r,
        { clickCount: a, clickBreadcrumb: o } = e;
      if (i) {
        let n = Math.min(e.mutationAfter || this._timeout, this._timeout) * 1e3,
          r = n < this._timeout * 1e3 ? `mutation` : `timeout`,
          i = {
            type: `default`,
            message: o.message,
            timestamp: o.timestamp,
            category: `ui.slowClickDetected`,
            data: {
              ...o.data,
              url: G.location.href,
              route: t.getCurrentRoute(),
              timeAfterClickMs: n,
              endReason: r,
              clickCount: a || 1,
            },
          };
        this._addBreadcrumbEvent(t, i);
        return;
      }
      if (a > 1) {
        let e = {
          type: `default`,
          message: o.message,
          timestamp: o.timestamp,
          category: `ui.multiClick`,
          data: {
            ...o.data,
            url: G.location.href,
            route: t.getCurrentRoute(),
            clickCount: a,
            metric: !0,
          },
        };
        this._addBreadcrumbEvent(t, e);
      }
    }
    _scheduleCheckClicks() {
      this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
        (this._checkClickTimeout = Fd(() => this._checkClicks(), 1e3));
    }
  },
  Dg = [`A`, `BUTTON`, `INPUT`];
function Og(e, t) {
  return !!(
    !Dg.includes(e.tagName) ||
    (e.tagName === `INPUT` &&
      ![`submit`, `button`].includes(e.getAttribute(`type`) || ``)) ||
    (e.tagName === `A` &&
      (e.hasAttribute(`download`) ||
        (e.hasAttribute(`target`) && e.getAttribute(`target`) !== `_self`))) ||
    (t && e.matches(t))
  );
}
function kg(e) {
  return !!(e.data && typeof e.data.nodeId == `number` && e.timestamp);
}
function Ag() {
  return Date.now() / 1e3;
}
function jg(e, t) {
  try {
    if (!Mg(t)) return;
    let { source: n } = t.data;
    if (
      (wg.has(n) && e.registerMutation(t.timestamp),
      n === Y.Scroll && e.registerScroll(t.timestamp),
      Ng(t))
    ) {
      let { type: n, id: r } = t.data,
        i = sg.mirror.getNode(r);
      i instanceof HTMLElement && n === ch.Click && e.registerClick(i);
    }
  } catch {}
}
function Mg(e) {
  return e.type === dg;
}
function Ng(e) {
  return e.data.source === Y.MouseInteraction;
}
function Pg(e) {
  return { timestamp: Date.now() / 1e3, type: `default`, ...e };
}
var Fg = ((e) => (
    (e[(e.Document = 0)] = `Document`),
    (e[(e.DocumentType = 1)] = `DocumentType`),
    (e[(e.Element = 2)] = `Element`),
    (e[(e.Text = 3)] = `Text`),
    (e[(e.CDATA = 4)] = `CDATA`),
    (e[(e.Comment = 5)] = `Comment`),
    e
  ))(Fg || {}),
  Ig = new Set([
    `id`,
    `class`,
    `aria-label`,
    `role`,
    `name`,
    `alt`,
    `title`,
    `data-test-id`,
    `data-testid`,
    `disabled`,
    `aria-disabled`,
    `data-sentry-component`,
  ]);
function Lg(e) {
  let t = {};
  !e[`data-sentry-component`] &&
    e[`data-sentry-element`] &&
    (e[`data-sentry-component`] = e[`data-sentry-element`]);
  for (let n in e)
    if (Ig.has(n)) {
      let r = n;
      (n === `data-testid` || n === `data-test-id`) && (r = `testId`),
        (t[r] = e[n]);
    }
  return t;
}
var Rg = (e) => (t) => {
  if (!e.isEnabled()) return;
  let n = Bg(t);
  if (!n) return;
  let r = t.name === `click`,
    i = r ? t.event : void 0;
  r &&
    e.clickDetector &&
    i?.target &&
    !i.altKey &&
    !i.metaKey &&
    !i.ctrlKey &&
    !i.shiftKey &&
    Tg(e.clickDetector, n, vg(t.event)),
    hg(e, n);
};
function zg(e, t) {
  let n = sg.mirror.getId(e),
    r = n && sg.mirror.getNode(n),
    i = r && sg.mirror.getMeta(r),
    a = i && Hg(i) ? i : null;
  return {
    message: t,
    data: a
      ? {
          nodeId: n,
          node: {
            id: n,
            tagName: a.tagName,
            textContent: Array.from(a.childNodes)
              .map((e) => e.type === Fg.Text && e.textContent)
              .filter(Boolean)
              .map((e) => e.trim())
              .join(``),
            attributes: Lg(a.attributes),
          },
        }
      : {},
  };
}
function Bg(e) {
  let { target: t, message: n } = Vg(e);
  return Pg({ category: `ui.${e.name}`, ...zg(t, n) });
}
function Vg(e) {
  let t = e.name === `click`,
    n,
    r = null;
  try {
    (r = t ? vg(e.event) : yg(e.event)),
      (n = U(r, { maxStringLength: 200 }) || `<unknown>`);
  } catch {
    n = `<unknown>`;
  }
  return { target: r, message: n };
}
function Hg(e) {
  return e.type === Fg.Element;
}
function Ug(e, t) {
  if (!e.isEnabled()) return;
  e.updateUserActivity();
  let n = Wg(t);
  n && hg(e, n);
}
function Wg(e) {
  let { metaKey: t, shiftKey: n, ctrlKey: r, altKey: i, key: a, target: o } = e;
  if (!o || Gg(o) || !a) return null;
  let s = t || r || i,
    c = a.length === 1;
  if (!s && c) return null;
  let l = U(o, { maxStringLength: 200 }) || `<unknown>`;
  return Pg({
    category: `ui.keyDown`,
    message: l,
    data: {
      ...zg(o, l).data,
      metaKey: t,
      shiftKey: n,
      ctrlKey: r,
      altKey: i,
      key: a,
    },
  });
}
function Gg(e) {
  return (
    e.tagName === `INPUT` || e.tagName === `TEXTAREA` || e.isContentEditable
  );
}
var Kg = { resource: $g, paint: Zg, navigation: Qg };
function qg(e, t) {
  return ({ metric: n }) => void t.replayPerformanceEntries.push(e(n));
}
function Jg(e) {
  return e.map(Yg).filter(Boolean);
}
function Yg(e) {
  let t = Kg[e.entryType];
  return t ? t(e) : null;
}
function Xg(e) {
  return ((M() || G.performance.timeOrigin) + e) / 1e3;
}
function Zg(e) {
  let { duration: t, entryType: n, name: r, startTime: i } = e,
    a = Xg(i);
  return { type: n, name: r, start: a, end: a + t, data: void 0 };
}
function Qg(e) {
  let {
    entryType: t,
    name: n,
    decodedBodySize: r,
    duration: i,
    domComplete: a,
    encodedBodySize: o,
    domContentLoadedEventStart: s,
    domContentLoadedEventEnd: c,
    domInteractive: l,
    loadEventStart: u,
    loadEventEnd: d,
    redirectCount: f,
    startTime: p,
    transferSize: m,
    type: h,
  } = e;
  return i === 0
    ? null
    : {
        type: `${t}.${h}`,
        start: Xg(p),
        end: Xg(a),
        name: n,
        data: {
          size: m,
          decodedBodySize: r,
          encodedBodySize: o,
          duration: i,
          domInteractive: l,
          domContentLoadedEventStart: s,
          domContentLoadedEventEnd: c,
          loadEventStart: u,
          loadEventEnd: d,
          domComplete: a,
          redirectCount: f,
        },
      };
}
function $g(e) {
  let {
    entryType: t,
    initiatorType: n,
    name: r,
    responseEnd: i,
    startTime: a,
    decodedBodySize: o,
    encodedBodySize: s,
    responseStatus: c,
    transferSize: l,
  } = e;
  return [`fetch`, `xmlhttprequest`].includes(n)
    ? null
    : {
        type: `${t}.${n}`,
        start: Xg(a),
        end: Xg(i),
        name: r,
        data: {
          size: l,
          statusCode: c,
          decodedBodySize: o,
          encodedBodySize: s,
        },
      };
}
function e_(e) {
  let t = e.entries[e.entries.length - 1];
  return i_(e, `largest-contentful-paint`, t?.element ? [t.element] : void 0);
}
function t_(e) {
  return e.sources !== void 0;
}
function n_(e) {
  let t = [],
    n = [];
  for (let r of e.entries)
    if (t_(r)) {
      let e = [];
      for (let t of r.sources)
        if (t.node) {
          n.push(t.node);
          let r = sg.mirror.getId(t.node);
          r && e.push(r);
        }
      t.push({ value: r.value, nodeIds: e.length ? e : void 0 });
    }
  return i_(e, `cumulative-layout-shift`, n, t);
}
function r_(e) {
  let t = e.entries[e.entries.length - 1];
  return i_(e, `interaction-to-next-paint`, t?.target ? [t.target] : void 0);
}
function i_(e, t, n, r) {
  let i = e.value,
    a = e.rating,
    o = Xg(i);
  return {
    type: `web-vital`,
    name: t,
    start: o,
    end: o,
    data: {
      value: i,
      size: i,
      rating: a,
      nodeIds: n ? n.map((e) => sg.mirror.getId(e)) : void 0,
      attributions: r,
    },
  };
}
function a_(e) {
  function t(t) {
    e.performanceEntries.includes(t) || e.performanceEntries.push(t);
  }
  function n({ entries: e }) {
    e.forEach(t);
  }
  let r = [];
  return (
    [`navigation`, `paint`, `resource`].forEach((e) => {
      r.push(Zl(e, n));
    }),
    r.push(Jl(qg(e_, e)), ql(qg(n_, e)), Xl(qg(r_, e))),
    () => {
      r.forEach((e) => e());
    }
  );
}
var Q = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  o_ = `var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
function s_() {
  let e = new Blob([o_], { type: `text/javascript` });
  return URL.createObjectURL(e);
}
var c_ = [`log`, `warn`, `error`],
  l_ = `[Replay] `;
function u_(e, t = `info`) {
  ps(
    {
      category: `console`,
      data: { logger: `replay` },
      level: t,
      message: `${l_}${e}`,
    },
    { level: t }
  );
}
function d_() {
  let e = !1,
    t = !1,
    n = {
      exception: () => void 0,
      infoTick: () => void 0,
      setConfig: (n) => {
        (e = !!n.captureExceptions), (t = !!n.traceInternals);
      },
    };
  return (
    Q
      ? (c_.forEach((e) => {
          n[e] = (...n) => {
            v[e](l_, ...n), t && u_(n.join(``), Vs(e));
          };
        }),
        (n.exception = (r, ...i) => {
          i.length && n.error && n.error(...i),
            v.error(l_, r),
            e
              ? Ca(r, {
                  mechanism: {
                    handled: !0,
                    type: `auto.function.replay.debug`,
                  },
                })
              : t && u_(r, `error`);
        }),
        (n.infoTick = (...e) => {
          v.log(l_, ...e), t && setTimeout(() => u_(e[0]), 0);
        }))
      : c_.forEach((e) => {
          n[e] = () => void 0;
        }),
    n
  );
}
var $ = d_(),
  f_ = class extends Error {
    constructor() {
      super(`Event buffer exceeded maximum size of ${mp}.`);
    }
  },
  p_ = class {
    constructor() {
      (this.events = []),
        (this._totalSize = 0),
        (this.hasCheckout = !1),
        (this.waitForCheckout = !1);
    }
    get hasEvents() {
      return this.events.length > 0;
    }
    get type() {
      return `sync`;
    }
    destroy() {
      this.events = [];
    }
    async addEvent(e) {
      let t = JSON.stringify(e).length;
      if (((this._totalSize += t), this._totalSize > mp)) throw new f_();
      this.events.push(e);
    }
    finish() {
      return new Promise((e) => {
        let t = this.events;
        this.clear(), e(JSON.stringify(t));
      });
    }
    clear() {
      (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    getEarliestTimestamp() {
      let e = null;
      for (let { timestamp: t } of this.events)
        (e === null || t < e) && (e = t);
      return e === null ? e : pg(e);
    }
  },
  m_ = class {
    constructor(e) {
      (this._onMessage = ({ data: e }) => {
        let t = e;
        if (typeof t.id != `number`) return;
        let n = this._pending.get(t.id);
        if (!(!n || n.method !== t.method)) {
          if ((this._pending.delete(t.id), !t.success)) {
            Q && $.error(`Error in compression worker: `, t.response),
              n.reject(Error(`Error in compression worker`));
            return;
          }
          n.resolve(t.response);
        }
      }),
        (this._worker = e),
        (this._id = 0),
        (this._pending = new Map()),
        this._worker.addEventListener(`message`, this._onMessage);
    }
    ensureReady() {
      return (
        (this._ensureReadyPromise ||= new Promise((e, t) => {
          this._worker.addEventListener(
            `message`,
            ({ data: n }) => {
              n.success
                ? e()
                : (Q &&
                    $.warn(
                      `Received worker message with unsuccessful status`,
                      n
                    ),
                  t(Error(`Received worker message with unsuccessful status`)));
            },
            { once: !0 }
          ),
            this._worker.addEventListener(
              `error`,
              (e) => {
                Q && $.warn(`Failed to load Replay compression worker`, e),
                  t(
                    Error(
                      `Failed to load Replay compression worker: ${
                        e instanceof ErrorEvent && e.message
                          ? e.message
                          : `Unknown error. This can happen due to CSP policy restrictions, network issues, or the worker script failing to load.`
                      }`
                    )
                  );
              },
              { once: !0 }
            );
        })),
        this._ensureReadyPromise
      );
    }
    destroy() {
      Q && $.log(`Destroying compression worker`),
        this._worker.removeEventListener(`message`, this._onMessage),
        this._pending.forEach((e) => e.reject(Error(`Worker destroyed`))),
        this._pending.clear(),
        this._worker.terminate();
    }
    postMessage(e, t) {
      let n = this._getAndIncrementId();
      return new Promise((r, i) => {
        this._pending.set(n, { method: e, resolve: r, reject: i });
        try {
          this._worker.postMessage({ id: n, method: e, arg: t });
        } catch (e) {
          this._pending.delete(n), i(e);
        }
      });
    }
    _getAndIncrementId() {
      return this._id++;
    }
  },
  h_ = class {
    constructor(e) {
      (this._worker = new m_(e)),
        (this._earliestTimestamp = null),
        (this._totalSize = 0),
        (this.hasCheckout = !1),
        (this.waitForCheckout = !1);
    }
    get hasEvents() {
      return !!this._earliestTimestamp;
    }
    get type() {
      return `worker`;
    }
    ensureReady() {
      return this._worker.ensureReady();
    }
    destroy() {
      this._worker.destroy();
    }
    addEvent(e) {
      let t = pg(e.timestamp);
      (!this._earliestTimestamp || t < this._earliestTimestamp) &&
        (this._earliestTimestamp = t);
      let n = JSON.stringify(e);
      return (
        (this._totalSize += n.length),
        this._totalSize > mp
          ? Promise.reject(new f_())
          : this._sendEventToWorker(n)
      );
    }
    finish() {
      return this._finishRequest();
    }
    clear() {
      (this._earliestTimestamp = null),
        (this._totalSize = 0),
        (this.hasCheckout = !1),
        this._worker.postMessage(`clear`).then(null, (e) => {
          Q && $.exception(e, `Sending "clear" message to worker failed`, e);
        });
    }
    getEarliestTimestamp() {
      return this._earliestTimestamp;
    }
    _sendEventToWorker(e) {
      return this._worker.postMessage(`addEvent`, e);
    }
    async _finishRequest() {
      let e = await this._worker.postMessage(`finish`);
      return (this._earliestTimestamp = null), (this._totalSize = 0), e;
    }
  },
  g_ = class {
    constructor(e) {
      (this._fallback = new p_()),
        (this._compression = new h_(e)),
        (this._used = this._fallback),
        (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
    }
    get waitForCheckout() {
      return this._used.waitForCheckout;
    }
    get type() {
      return this._used.type;
    }
    get hasEvents() {
      return this._used.hasEvents;
    }
    get hasCheckout() {
      return this._used.hasCheckout;
    }
    set hasCheckout(e) {
      this._used.hasCheckout = e;
    }
    set waitForCheckout(e) {
      this._used.waitForCheckout = e;
    }
    destroy() {
      this._fallback.destroy(), this._compression.destroy();
    }
    clear() {
      return this._used.clear();
    }
    getEarliestTimestamp() {
      return this._used.getEarliestTimestamp();
    }
    addEvent(e) {
      return this._used.addEvent(e);
    }
    async finish() {
      return await this.ensureWorkerIsLoaded(), this._used.finish();
    }
    ensureWorkerIsLoaded() {
      return this._ensureWorkerIsLoadedPromise;
    }
    async _ensureWorkerIsLoaded() {
      try {
        await this._compression.ensureReady();
      } catch (e) {
        Q &&
          $.exception(
            e,
            `Failed to load the compression worker, falling back to simple buffer`
          );
        return;
      }
      await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
      let { events: e, hasCheckout: t, waitForCheckout: n } = this._fallback,
        r = [];
      for (let t of e) r.push(this._compression.addEvent(t));
      (this._compression.hasCheckout = t),
        (this._compression.waitForCheckout = n),
        (this._used = this._compression);
      try {
        await Promise.all(r), this._fallback.clear();
      } catch (e) {
        Q && $.exception(e, `Failed to add events when switching buffers.`);
      }
    }
  };
function __({ useCompression: e, workerUrl: t }) {
  if (e && window.Worker) {
    let e = v_(t);
    if (e) return e;
  }
  return Q && $.log(`Using simple buffer`), new p_();
}
function v_(e) {
  try {
    let t = e || y_();
    return t
      ? (Q && $.log(`Using compression worker${e ? ` from ${e}` : ``}`),
        new g_(new Worker(t)))
      : void 0;
  } catch (e) {
    Q && $.exception(e, `Failed to create compression worker`);
  }
}
function y_() {
  return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > `u` ||
    !__SENTRY_EXCLUDE_REPLAY_WORKER__
    ? s_()
    : ``;
}
function b_() {
  try {
    return `sessionStorage` in G && !!G.sessionStorage;
  } catch {
    return !1;
  }
}
function x_(e) {
  S_(), (e.session = void 0);
}
function S_() {
  if (b_())
    try {
      G.sessionStorage.removeItem(ep);
    } catch {}
}
function C_(e) {
  return e !== void 0 && Math.random() < e;
}
function w_(e) {
  if (b_())
    try {
      G.sessionStorage.setItem(ep, JSON.stringify(e));
    } catch {}
}
function T_(e) {
  let t = Date.now();
  return {
    id: e.id || rt(),
    started: e.started || t,
    lastActivity: e.lastActivity || t,
    segmentId: e.segmentId || 0,
    sampled: e.sampled,
    previousSessionId: e.previousSessionId,
    dirty: e.dirty || !1,
  };
}
function E_(e, t) {
  return C_(e) ? `session` : t ? `buffer` : !1;
}
function D_(
  { sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 },
  { previousSessionId: r } = {}
) {
  let i = T_({ sampled: E_(e, t), previousSessionId: r });
  return n && w_(i), i;
}
function O_() {
  if (!b_()) return null;
  try {
    let e = G.sessionStorage.getItem(ep);
    if (!e) return null;
    let t = JSON.parse(e);
    return Q && $.infoTick(`Loading existing session`), T_(t);
  } catch {
    return null;
  }
}
function k_(e, t, n = +new Date()) {
  return e === null || t === void 0 || t < 0 || (t !== 0 && e + t <= n);
}
function A_(
  e,
  { maxReplayDuration: t, sessionIdleExpire: n, targetTime: r = Date.now() }
) {
  return k_(e.started, t, r) || k_(e.lastActivity, n, r);
}
function j_(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
  return !(
    !A_(e, { sessionIdleExpire: t, maxReplayDuration: n }) ||
    (e.sampled === `buffer` && e.segmentId === 0)
  );
}
function M_(
  { sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n },
  r
) {
  let i = r.stickySession && O_();
  return i
    ? j_(i, { sessionIdleExpire: e, maxReplayDuration: t })
      ? (Q &&
          $.infoTick(
            `Session in sessionStorage is expired, creating new one...`
          ),
        D_(r, { previousSessionId: i.id }))
      : i
    : (Q && $.infoTick(`Creating new session`),
      D_(r, { previousSessionId: n }));
}
function N_(e) {
  return e.type === J.Custom;
}
function P_(e, t, n) {
  return L_(e, t) ? (I_(e, t, n), !0) : !1;
}
function F_(e, t, n) {
  return L_(e, t) ? I_(e, t, n) : Promise.resolve(null);
}
async function I_(e, t, n) {
  let { eventBuffer: r } = e;
  if (!r || (r.waitForCheckout && !n)) return null;
  let i = e.recordingMode === `buffer`;
  try {
    n && i && r.clear(), n && ((r.hasCheckout = !0), (r.waitForCheckout = !1));
    let a = R_(t, e.getOptions().beforeAddRecordingEvent);
    return a ? await r.addEvent(a) : void 0;
  } catch (t) {
    if (!e.isEnabled()) return e.handleException(t), null;
    let n = t && t instanceof f_,
      a = n ? `eventBufferOverflow` : `eventBufferError`,
      o = F();
    if (o) {
      let e = n ? `buffer_overflow` : `internal_sdk_error`;
      o.recordDroppedEvent(e, `replay`);
    }
    if (n && i) return r.clear(), (r.waitForCheckout = !0), null;
    e.handleException(t), await e.stop({ reason: a });
  }
}
function L_(e, t) {
  if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
  let n = pg(t.timestamp);
  return n + e.timeouts.sessionIdlePause < Date.now()
    ? !1
    : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
    ? (Q &&
        $.infoTick(
          `Skipping event with timestamp ${n} because it is after maxReplayDuration`
        ),
      !1)
    : !0;
}
function R_(e, t) {
  try {
    if (typeof t == `function` && N_(e)) return t(e);
  } catch (e) {
    return (
      Q &&
        $.exception(
          e,
          "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."
        ),
      null
    );
  }
  return e;
}
var z_ = 100;
function B_(e, t, n) {
  let r = e.getContext();
  t && r.traceIds.size < z_ && r.traceIds.add(t),
    n && r.segmentNames.size < z_ && r.segmentNames.add(n);
}
function V_(e) {
  return (t) => {
    e.isEnabled() && B_(e, t.trace_id, t.name || void 0);
  };
}
function H_(e) {
  return !e.type;
}
function U_(e) {
  return e.type === `transaction`;
}
function W_(e) {
  return e.type === `replay_event`;
}
function G_(e) {
  return e.type === `feedback`;
}
function K_(e) {
  return (t, n) => {
    if (!e.isEnabled() || (!H_(t) && !U_(t))) return;
    let r = n.statusCode;
    if (!(!r || r < 200 || r >= 300)) {
      if (U_(t)) {
        q_(e, t);
        return;
      }
      J_(e, t);
    }
  };
}
function q_(e, t) {
  B_(e, t.contexts?.trace?.trace_id, t.transaction);
}
function J_(e, t) {
  let n = e.getContext();
  if (
    (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
    e.recordingMode !== `buffer` || !t.tags?.replayId)
  )
    return;
  let { beforeErrorSampling: r } = e.getOptions();
  (typeof r == `function` && !r(t)) ||
    Fd(async () => {
      try {
        await e.sendBufferedReplayOrFlush();
      } catch (t) {
        e.handleException(t);
      }
    });
}
function Y_(e) {
  return (t) => {
    !e.isEnabled() || !H_(t) || X_(e, t);
  };
}
function X_(e, t) {
  let n = t.exception?.values?.[0]?.value;
  typeof n == `string` &&
    (n.match(
      /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/
    ) ||
      n.match(
        /(does not match server-rendered HTML|Hydration failed because)/i
      )) &&
    hg(e, Pg({ category: `replay.hydrate-error`, data: { url: Cc() } }));
}
function Z_(e) {
  let t = F();
  t && t.on(`beforeAddBreadcrumb`, (t) => Q_(e, t));
}
function Q_(e, t) {
  if (!e.isEnabled() || !tv(t)) return;
  let n = $_(t);
  n && hg(e, n);
}
function $_(e) {
  return !tv(e) ||
    [`fetch`, `xhr`, `sentry.event`, `sentry.transaction`].includes(
      e.category
    ) ||
    e.category.startsWith(`ui.`)
    ? null
    : e.category === `console`
    ? ev(e)
    : Pg(e);
}
function ev(e) {
  let t = e.data?.arguments;
  if (!Array.isArray(t) || t.length === 0) return Pg(e);
  let n = !1,
    r = t.map((e) => {
      if (!e) return e;
      if (typeof e == `string`)
        return e.length > dp ? ((n = !0), `${e.slice(0, dp)}\u2026`) : e;
      if (typeof e == `object`)
        try {
          let t = He(e, 7);
          return JSON.stringify(t).length > dp
            ? ((n = !0), `${JSON.stringify(t, null, 2).slice(0, dp)}\u2026`)
            : t;
        } catch {}
      return e;
    });
  return Pg({
    ...e,
    data: {
      ...e.data,
      arguments: r,
      ...(n ? { _meta: { warnings: [`CONSOLE_ARG_TRUNCATED`] } } : {}),
    },
  });
}
function tv(e) {
  return !!e.category;
}
function nv(e, t) {
  return e.type || !e.exception?.values?.length
    ? !1
    : !!t.originalException?.__rrweb__;
}
function rv() {
  let e = N().getPropagationContext().dsc;
  e && delete e.replay_id;
  let t = z();
  if (t) {
    let e = Pr(t);
    delete e.replay_id;
  }
}
function iv(e) {
  let t = N().getPropagationContext().dsc;
  t && (t.replay_id = e);
  let n = z();
  if (n) {
    let t = Pr(n);
    t.replay_id = e;
  }
}
function av(e, t) {
  e.triggerUserActivity(),
    e.addUpdate(() =>
      t.timestamp
        ? (e.throttledAddEvent({
            type: J.Custom,
            timestamp: t.timestamp * 1e3,
            data: {
              tag: `breadcrumb`,
              payload: {
                timestamp: t.timestamp,
                type: `default`,
                category: `sentry.feedback`,
                data: { feedbackId: t.event_id },
              },
            },
          }),
          !1)
        : !0
    );
}
function ov(e, t) {
  return e.recordingMode !== `buffer` ||
    t.message === np ||
    !t.exception ||
    t.type
    ? !1
    : C_(e.getOptions().errorSampleRate);
}
function sv(e) {
  return Object.assign(
    (t, n) => {
      if (
        (e.session &&
          j_(e.session, {
            maxReplayDuration: e.getOptions().maxReplayDuration,
            sessionIdleExpire: e.timeouts.sessionIdleExpire,
          }) &&
          rv(),
        !e.isEnabled() || e.isPaused())
      )
        return t;
      if (W_(t)) return delete t.breadcrumbs, t;
      if (!H_(t) && !U_(t) && !G_(t)) return t;
      if (!e.checkAndHandleExpiredSession()) return rv(), t;
      if (G_(t))
        return (
          e.flush(),
          (t.contexts.feedback.replay_id = e.getSessionId()),
          av(e, t),
          t
        );
      if (nv(t, n) && !e.getOptions()._experiments.captureExceptions)
        return Q && $.log(`Ignoring error from rrweb internals`, t), null;
      let r = ov(e, t);
      if (
        ((r || e.recordingMode === `session`) &&
          (t.tags = { ...t.tags, replayId: e.getSessionId() }),
        r && e.recordingMode === `buffer` && e.session?.sampled === `buffer`)
      ) {
        let t = e.session;
        (t.dirty = !0), e.getOptions().stickySession && w_(t);
      }
      return t;
    },
    { id: `Replay` }
  );
}
function cv(e, t) {
  return t.map(({ type: t, start: n, end: r, name: i, data: a }) => {
    let o = e.throttledAddEvent({
      type: J.Custom,
      timestamp: n,
      data: {
        tag: `performanceSpan`,
        payload: {
          op: t,
          description: i,
          startTimestamp: n,
          endTimestamp: r,
          data: a,
        },
      },
    });
    return typeof o == `string` ? Promise.resolve(null) : o;
  });
}
function lv(e) {
  let { from: t, to: n } = e,
    r = Date.now() / 1e3;
  return {
    type: `navigation.push`,
    start: r,
    end: r,
    name: n,
    data: { previous: t },
  };
}
function uv(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    let n = lv(t);
    n !== null &&
      (e.getContext().urls.push(n.name),
      e.triggerUserActivity(),
      e.addUpdate(() => (cv(e, [n]), !1)));
  };
}
function dv(e, t) {
  return Q && e.getOptions()._experiments.traceInternals ? !1 : ts(t, F());
}
function fv(e, t) {
  e.isEnabled() &&
    t !== null &&
    (dv(e, t.name) || e.addUpdate(() => (cv(e, [t]), !0)));
}
function pv(e) {
  if (!e) return;
  let t = new TextEncoder();
  try {
    if (typeof e == `string`) return t.encode(e).length;
    if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
    if (e instanceof FormData) {
      let n = Vd(e);
      return t.encode(n).length;
    }
    if (e instanceof Blob) return e.size;
    if (e instanceof ArrayBuffer) return e.byteLength;
  } catch {}
}
function mv(e) {
  if (!e) return;
  let t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
function hv(e, t) {
  if (!e) return { headers: {}, size: void 0, _meta: { warnings: [t] } };
  let n = { ...e._meta };
  return (n.warnings = [...(n.warnings || []), t]), (e._meta = n), e;
}
function gv(e, t) {
  if (!t) return null;
  let {
    startTimestamp: n,
    endTimestamp: r,
    url: i,
    method: a,
    statusCode: o,
    request: s,
    response: c,
  } = t;
  return {
    type: e,
    start: n / 1e3,
    end: r / 1e3,
    name: i,
    data: { method: a, statusCode: o, request: s, response: c },
  };
}
function _v(e) {
  return { headers: {}, size: e, _meta: { warnings: [`URL_SKIPPED`] } };
}
function vv(e, t, n) {
  if (!t && Object.keys(e).length === 0) return;
  if (!t) return { headers: e };
  if (!n) return { headers: e, size: t };
  let r = { headers: e, size: t },
    { body: i, warnings: a } = bv(n);
  return (r.body = i), a?.length && (r._meta = { warnings: a }), r;
}
function yv(e, t) {
  return Object.entries(e).reduce((n, [r, i]) => {
    let a = r.toLowerCase();
    return t.includes(a) && e[r] && (n[a] = i), n;
  }, {});
}
function bv(e) {
  if (!e || typeof e != `string`) return { body: e };
  let t = e.length > up,
    n = xv(e);
  if (t) {
    let t = e.slice(0, up);
    return n
      ? { body: t, warnings: [`MAYBE_JSON_TRUNCATED`] }
      : { body: `${t}\u2026`, warnings: [`TEXT_TRUNCATED`] };
  }
  if (n)
    try {
      return { body: JSON.parse(e) };
    } catch {}
  return { body: e };
}
function xv(e) {
  let t = e[0],
    n = e[e.length - 1];
  return (t === `[` && n === `]`) || (t === `{` && n === `}`);
}
function Sv(e, t) {
  return $e(Cv(e), t);
}
function Cv(e, t = G.document.baseURI) {
  if (
    e.startsWith(`http://`) ||
    e.startsWith(`https://`) ||
    e.startsWith(G.location.origin)
  )
    return e;
  let n = new URL(e, t);
  if (n.origin !== new URL(t).origin) return e;
  let r = n.href;
  return !e.endsWith(`/`) && r.endsWith(`/`) ? r.slice(0, -1) : r;
}
async function wv(e, t, n) {
  try {
    let r = gv(`resource.fetch`, await Ev(e, t, n));
    fv(n.replay, r);
  } catch (e) {
    Q && $.exception(e, `Failed to capture fetch breadcrumb`);
  }
}
function Tv(e, t) {
  let { input: n, response: r } = t,
    i = pv(n ? Ud(n) : void 0),
    a = r ? mv(r.headers.get(`content-length`)) : void 0;
  i !== void 0 && (e.data.request_body_size = i),
    a !== void 0 && (e.data.response_body_size = a);
}
async function Ev(e, t, n) {
  let r = Date.now(),
    { startTimestamp: i = r, endTimestamp: a = r } = t,
    {
      url: o,
      method: s,
      status_code: c = 0,
      request_body_size: l,
      response_body_size: u,
    } = e.data,
    d = Sv(o, n.networkDetailAllowUrls) && !Sv(o, n.networkDetailDenyUrls);
  return {
    startTimestamp: i,
    endTimestamp: a,
    url: o,
    method: s,
    statusCode: c,
    request: d ? Dv(n, t.input, l) : _v(l),
    response: await Ov(d, n, t.response, u),
  };
}
function Dv({ networkCaptureBodies: e, networkRequestHeaders: t }, n, r) {
  let i = n ? Mv(n, t) : {};
  if (!e) return vv(i, r, void 0);
  let [a, o] = Hd(Ud(n), $),
    s = vv(i, r, a);
  return o ? hv(s, o) : s;
}
async function Ov(
  e,
  { networkCaptureBodies: t, networkResponseHeaders: n },
  r,
  i
) {
  if (!e && i !== void 0) return _v(i);
  let a = r ? jv(r.headers, n) : {};
  if (!r || (!t && i !== void 0)) return vv(a, i, void 0);
  let [o, s] = await Av(r),
    c = kv(o, {
      networkCaptureBodies: t,
      responseBodySize: i,
      captureDetails: e,
      headers: a,
    });
  return s ? hv(c, s) : c;
}
function kv(
  e,
  {
    networkCaptureBodies: t,
    responseBodySize: n,
    captureDetails: r,
    headers: i,
  }
) {
  try {
    let a = e?.length && n === void 0 ? pv(e) : n;
    return r ? (t ? vv(i, a, e) : vv(i, a, void 0)) : _v(a);
  } catch (e) {
    return (
      Q && $.exception(e, `Failed to serialize response body`), vv(i, n, void 0)
    );
  }
}
async function Av(e) {
  let t = Pv(e);
  if (!t) return [void 0, `BODY_PARSE_ERROR`];
  try {
    return [await Fv(t)];
  } catch (e) {
    return e instanceof Error && e.message.indexOf(`Timeout`) > -1
      ? (Q && $.warn(`Parsing text body from response timed out`),
        [void 0, `BODY_PARSE_TIMEOUT`])
      : (Q && $.exception(e, `Failed to get text body from response`),
        [void 0, `BODY_PARSE_ERROR`]);
  }
}
function jv(e, t) {
  let n = {};
  return (
    t.forEach((t) => {
      e.get(t) && (n[t] = e.get(t));
    }),
    n
  );
}
function Mv(e, t) {
  return e.length === 1 && typeof e[0] != `string`
    ? Nv(e[0], t)
    : e.length === 2
    ? Nv(e[1], t)
    : {};
}
function Nv(e, t) {
  if (!e) return {};
  let n = e.headers;
  return n
    ? n instanceof Headers
      ? jv(n, t)
      : Array.isArray(n)
      ? {}
      : yv(n, t)
    : {};
}
function Pv(e) {
  try {
    return e.clone();
  } catch (e) {
    Q && $.exception(e, `Failed to clone response body`);
  }
}
function Fv(e) {
  return new Promise((t, n) => {
    let r = Fd(
      () => n(Error(`Timeout while trying to read response body`)),
      500
    );
    Iv(e)
      .then(
        (e) => t(e),
        (e) => n(e)
      )
      .finally(() => clearTimeout(r));
  });
}
async function Iv(e) {
  return await e.text();
}
async function Lv(e, t, n) {
  try {
    let r = gv(`resource.xhr`, zv(e, t, n));
    fv(n.replay, r);
  } catch (e) {
    Q && $.exception(e, `Failed to capture xhr breadcrumb`);
  }
}
function Rv(e, t) {
  let { xhr: n, input: r } = t;
  if (!n) return;
  let i = pv(r),
    a = n.getResponseHeader(`content-length`)
      ? mv(n.getResponseHeader(`content-length`))
      : Hv(n.response, n.responseType);
  i !== void 0 && (e.data.request_body_size = i),
    a !== void 0 && (e.data.response_body_size = a);
}
function zv(e, t, n) {
  let r = Date.now(),
    { startTimestamp: i = r, endTimestamp: a = r, input: o, xhr: s } = t,
    {
      url: c,
      method: l,
      status_code: u = 0,
      request_body_size: d,
      response_body_size: f,
    } = e.data;
  if (!c) return null;
  if (!s || !Sv(c, n.networkDetailAllowUrls) || Sv(c, n.networkDetailDenyUrls))
    return {
      startTimestamp: i,
      endTimestamp: a,
      url: c,
      method: l,
      statusCode: u,
      request: _v(d),
      response: _v(f),
    };
  let p = s[Id],
    m = p ? yv(p.request_headers, n.networkRequestHeaders) : {},
    h = yv(Wd(s), n.networkResponseHeaders),
    [g, _] = n.networkCaptureBodies ? Hd(o, $) : [void 0],
    [v, y] = n.networkCaptureBodies ? Bv(s) : [void 0],
    b = vv(m, d, g),
    x = vv(h, f, v);
  return {
    startTimestamp: i,
    endTimestamp: a,
    url: c,
    method: l,
    statusCode: u,
    request: _ ? hv(b, _) : b,
    response: y ? hv(x, y) : x,
  };
}
function Bv(e) {
  let t = [];
  try {
    return [e.responseText];
  } catch (e) {
    t.push(e);
  }
  try {
    return Vv(e.response, e.responseType);
  } catch (e) {
    t.push(e);
  }
  return Q && $.warn(`Failed to get xhr response body`, ...t), [void 0];
}
function Vv(e, t) {
  try {
    if (typeof e == `string`) return [e];
    if (e instanceof Document) return [e.body.outerHTML];
    if (t === `json` && be(e)) return [JSON.stringify(e)];
    if (!e) return [void 0];
  } catch (t) {
    return (
      Q && $.exception(t, `Failed to serialize body`, e),
      [void 0, `BODY_PARSE_ERROR`]
    );
  }
  return (
    Q && $.log(`Skipping network body because of body type`, e),
    [void 0, `UNPARSEABLE_BODY_TYPE`]
  );
}
function Hv(e, t) {
  try {
    return pv(t === `json` && be(e) ? JSON.stringify(e) : e);
  } catch {
    return;
  }
}
function Uv(e) {
  let t = F();
  try {
    let {
        networkDetailAllowUrls: n,
        networkDetailDenyUrls: r,
        networkCaptureBodies: i,
        networkRequestHeaders: a,
        networkResponseHeaders: o,
      } = e.getOptions(),
      s = {
        replay: e,
        networkDetailAllowUrls: n,
        networkDetailDenyUrls: r,
        networkCaptureBodies: i,
        networkRequestHeaders: a,
        networkResponseHeaders: o,
      };
    t && t.on(`beforeAddBreadcrumb`, (e, t) => Wv(s, e, t));
  } catch {}
}
function Wv(e, t, n) {
  if (t.data)
    try {
      Gv(t) && qv(n) && (Rv(t, n), Lv(t, n, e)),
        Kv(t) && Jv(n) && (Tv(t, n), wv(t, n, e));
    } catch (e) {
      Q && $.exception(e, `Error when enriching network breadcrumb`);
    }
}
function Gv(e) {
  return e.category === `xhr`;
}
function Kv(e) {
  return e.category === `fetch`;
}
function qv(e) {
  return e?.xhr;
}
function Jv(e) {
  return e?.input !== void 0;
}
function Yv(e) {
  let t = F();
  Sd(Rg(e)),
    kd(uv(e)),
    Z_(e),
    Uv(e),
    Aa(sv(e)),
    t &&
      (t.on(`beforeSendEvent`, Y_(e)),
      t.on(`afterSendEvent`, K_(e)),
      t.on(`createDsc`, (t) => {
        let n = e.getSessionId();
        n &&
          e.isEnabled() &&
          e.recordingMode === `session` &&
          e.checkAndHandleExpiredSession() &&
          (t.replay_id = n);
      }),
      t.on(`processSegmentSpan`, V_(e)),
      t.on(`spanStart`, (t) => {
        e.lastActiveSpan = t;
      }),
      t.on(`spanEnd`, (t) => {
        e.lastActiveSpan = t;
      }),
      t.on(`beforeSendFeedback`, async (t, n) => {
        let r = e.getSessionId();
        n?.includeReplay &&
          e.isEnabled() &&
          r &&
          t.contexts?.feedback &&
          (t.contexts.feedback.source === `api` &&
            (await e.sendBufferedReplayOrFlush()),
          (t.contexts.feedback.replay_id = r));
      }),
      t.on(`openFeedbackWidget`, async () => {
        await e.sendBufferedReplayOrFlush();
      }));
}
async function Xv(e) {
  try {
    return Promise.all(cv(e, [Zv(G.performance.memory)]));
  } catch {
    return [];
  }
}
function Zv(e) {
  let { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } = e,
    i = Date.now() / 1e3;
  return {
    type: `memory`,
    name: `memory`,
    start: i,
    end: i,
    data: {
      memory: { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r },
    },
  };
}
function Qv(e, t, n) {
  return Pi(e, t, { ...n, setTimeoutImpl: Fd });
}
var $v = t.navigator;
function ey() {
  return /iPhone|iPad|iPod/i.test($v?.userAgent ?? ``) ||
    (/Macintosh/i.test($v?.userAgent ?? ``) &&
      $v?.maxTouchPoints &&
      $v?.maxTouchPoints > 1)
    ? { sampling: { mousemove: !1 } }
    : {};
}
function ty(e) {
  let t = !1;
  return (n, r) => {
    try {
      if (!e.checkAndHandleExpiredSession()) {
        Q && $.warn(`Received replay event after session expired.`);
        return;
      }
      let i = r || !t;
      (t = !0),
        ny(n),
        e.clickDetector && jg(e.clickDetector, n),
        e.addUpdate(() => {
          if (
            (e.recordingMode === `buffer` && i && e.setInitialState(),
            !P_(e, n, i))
          )
            return !0;
          if (!i) return !1;
          let t = e.session;
          if (
            (iy(e, i),
            e.recordingMode === `buffer` && t && e.eventBuffer && !t.dirty)
          ) {
            let n = e.eventBuffer.getEarliestTimestamp();
            n &&
              (Q &&
                $.log(
                  `Updating session start time to earliest event in buffer to ${new Date(
                    n
                  )}`
                ),
              (t.started = n),
              e.getOptions().stickySession && w_(t));
          }
          return (
            t?.previousSessionId ||
              (e.recordingMode === `session` && e.flush()),
            !0
          );
        });
    } catch (t) {
      e.handleException(t);
    }
  };
}
function ny(e) {
  let t = e.data;
  if (
    !(
      e.type !== J.IncrementalSnapshot ||
      !t ||
      typeof t != `object` ||
      !(`source` in t) ||
      t.source !== Y.Mutation ||
      !(`attributes` in t) ||
      !Array.isArray(t.attributes)
    )
  )
    for (let e of t.attributes) {
      let t = sg.mirror.getNode(e.id),
        n = t && sg.mirror.getMeta(t);
      if (n?.type === Fg.Element)
        for (let [t, r] of Object.entries(e.attributes))
          r === null ? delete n.attributes[t] : (n.attributes[t] = r);
    }
}
function ry(e) {
  let t = e.getOptions();
  return {
    type: J.Custom,
    timestamp: Date.now(),
    data: {
      tag: `options`,
      payload: {
        shouldRecordCanvas: e.isRecordingCanvas(),
        sessionSampleRate: t.sessionSampleRate,
        errorSampleRate: t.errorSampleRate,
        useCompressionOption: t.useCompression,
        blockAllMedia: t.blockAllMedia,
        maskAllText: t.maskAllText,
        maskAllInputs: t.maskAllInputs,
        useCompression: e.eventBuffer ? e.eventBuffer.type === `worker` : !1,
        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: t.networkCaptureBodies,
        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: t.networkResponseHeaders.length > 0,
      },
    },
  };
}
function iy(e, t) {
  !t || e.session?.segmentId !== 0 || P_(e, ry(e), !1);
}
function ay(e) {
  if (!e) return null;
  try {
    return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
  } catch {
    return null;
  }
}
function oy(e, t, n, r) {
  return Ir(Yr(e, Jr(e), r, n), [
    [{ type: `replay_event` }, e],
    [
      {
        type: `replay_recording`,
        length:
          typeof t == `string` ? new TextEncoder().encode(t).length : t.length,
      },
      t,
    ],
  ]);
}
function sy({ recordingData: e, headers: t }) {
  let n,
    r = `${JSON.stringify(t)}
`;
  if (typeof e == `string`) n = `${r}${e}`;
  else {
    let t = new TextEncoder().encode(r);
    (n = new Uint8Array(t.length + e.length)), n.set(t), n.set(e, t.length);
  }
  return n;
}
async function cy({ client: e, scope: t, replayId: n, event: r }) {
  let i = {
    event_id: n,
    integrations:
      typeof e._integrations == `object` &&
      e._integrations !== null &&
      !Array.isArray(e._integrations)
        ? Object.keys(e._integrations)
        : void 0,
  };
  e.emit(`preprocessEvent`, r, i);
  let a = await fa(e.getOptions(), r, i, t, e, P());
  if (!a) return null;
  e.emit(`postprocessEvent`, a, i), (a.platform = a.platform || `javascript`);
  let { name: o, version: s, settings: c } = e.getSdkMetadata()?.sdk || {};
  return (
    (a.sdk = {
      ...a.sdk,
      name: o || `sentry.javascript.unknown`,
      version: s || `0.0.0`,
      settings: c,
    }),
    a
  );
}
async function ly({
  recordingData: e,
  replayId: t,
  segmentId: n,
  eventContext: r,
  timestamp: i,
  session: a,
}) {
  let o = sy({ recordingData: e, headers: { segment_id: n } }),
    {
      urls: s,
      errorIds: c,
      traceIds: l,
      segmentNames: u,
      initialTimestamp: d,
    } = r,
    f = F(),
    p = N(),
    m = f?.getTransport(),
    h = f?.getDsn();
  if (!f || !m || !h || !a.sampled) return Promise.resolve({});
  let g = await cy({
    scope: p,
    client: f,
    replayId: t,
    event: {
      type: tp,
      replay_start_timestamp: d / 1e3,
      timestamp: i / 1e3,
      error_ids: c,
      trace_ids: l,
      segment_names: u,
      urls: s,
      replay_id: t,
      segment_id: n,
      replay_type: a.sampled,
    },
  });
  if (!g)
    return (
      f.recordDroppedEvent(`event_processor`, `replay`),
      Q && $.log("An event processor returned `null`, will not send event."),
      Promise.resolve({})
    );
  delete g.sdkProcessingMetadata;
  let _ = oy(g, o, h, f.getOptions().tunnel),
    v;
  try {
    v = await m.send(_);
  } catch (e) {
    let t = Error(np);
    try {
      t.cause = e;
    } catch {}
    throw t;
  }
  let y = go({}, v);
  if (ho(y, `replay`)) throw new dy(y);
  if (
    typeof v.statusCode == `number` &&
    (v.statusCode < 200 || v.statusCode >= 300)
  )
    throw new uy(v.statusCode);
  return v;
}
var uy = class extends Error {
    constructor(e) {
      super(`Transport returned status code ${e}`);
    }
  },
  dy = class extends Error {
    constructor(e) {
      super(`Rate limit hit`), (this.rateLimits = e);
    }
  },
  fy = class extends Error {
    constructor() {
      super(`Session is too long, not sending replay`);
    }
  };
async function py(e, t = { count: 0, interval: cp }) {
  let { recordingData: n, onError: r } = e;
  if (n.length)
    try {
      return await ly(e), !0;
    } catch (n) {
      if (n instanceof uy || n instanceof dy) throw n;
      if ((Ea(`Replays`, { _retryCount: t.count }), r && r(n), t.count >= lp)) {
        let e = Error(`${np} - max retries exceeded`);
        try {
          e.cause = n;
        } catch {}
        throw e;
      }
      return (
        (t.interval *= ++t.count),
        new Promise((n, r) => {
          Fd(async () => {
            try {
              await py(e, t), n(!0);
            } catch (e) {
              r(e);
            }
          }, t.interval);
        })
      );
    }
}
var my = `__THROTTLED`,
  hy = `__SKIPPED`;
function gy(e, t, n) {
  let r = new Map(),
    i = (e) => {
      let t = e - n;
      r.forEach((e, n) => {
        n < t && r.delete(n);
      });
    },
    a = () => [...r.values()].reduce((e, t) => e + t, 0),
    o = !1;
  return (...n) => {
    let s = Math.floor(Date.now() / 1e3);
    if ((i(s), a() >= t)) {
      let e = o;
      return (o = !0), e ? hy : my;
    }
    o = !1;
    let c = r.get(s) || 0;
    return r.set(s, c + 1), e(...n);
  };
}
var _y = class {
  constructor({ options: e, recordingOptions: t }) {
    (this.eventBuffer = null),
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      (this.recordingMode = `session`),
      (this.timeouts = { sessionIdlePause: rp, sessionIdleExpire: ip }),
      (this._lastActivity = Date.now()),
      (this._isEnabled = !1),
      (this._isPaused = !1),
      (this._requiresManualStart = !1),
      (this._hasInitializedCoreListeners = !1),
      (this._context = {
        errorIds: new Set(),
        traceIds: new Set(),
        segmentNames: new Set(),
        urls: [],
        initialTimestamp: Date.now(),
        initialUrl: ``,
      }),
      (this._recordingOptions = t),
      (this._options = e),
      (this._debouncedFlush = Qv(
        () => this._flush(),
        this._options.flushMinDelay,
        { maxWait: this._options.flushMaxDelay }
      )),
      (this._throttledAddEvent = gy((e, t) => F_(this, e, t), 300, 5));
    let { slowClickTimeout: n, slowClickIgnoreSelectors: r } =
        this.getOptions(),
      i = n
        ? {
            threshold: Math.min(fp, n),
            timeout: n,
            scrollTimeout: pp,
            ignoreSelector: r ? r.join(`,`) : ``,
          }
        : void 0;
    if ((i && (this.clickDetector = new Eg(this, i)), Q)) {
      let t = e._experiments;
      $.setConfig({
        captureExceptions: !!t.captureExceptions,
        traceInternals: !!t.traceInternals,
      });
    }
    (this._handleVisibilityChange = () => {
      G.document.visibilityState === `visible`
        ? this._doChangeToForegroundTasks()
        : this._doChangeToBackgroundTasks();
    }),
      (this._handleWindowBlur = () => {
        let e = Pg({ category: `ui.blur` });
        this._doChangeToBackgroundTasks(e);
      }),
      (this._handleWindowFocus = () => {
        let e = Pg({ category: `ui.focus` });
        this._doChangeToForegroundTasks(e);
      }),
      (this._handleKeyboardEvent = (e) => {
        Ug(this, e);
      });
  }
  getContext() {
    return this._context;
  }
  isEnabled() {
    return this._isEnabled;
  }
  isPaused() {
    return this._isPaused;
  }
  isRecordingCanvas() {
    return !!this._canvas;
  }
  getOptions() {
    return this._options;
  }
  handleException(e) {
    Q && $.exception(e), this._options.onError && this._options.onError(e);
  }
  initializeSampling(e) {
    let { errorSampleRate: t, sessionSampleRate: n } = this._options,
      r = t <= 0 && n <= 0;
    if (((this._requiresManualStart = r), !r)) {
      if ((this._initializeSessionForSampling(e), !this.session)) {
        Q && $.exception(Error(`Unable to initialize and create session`));
        return;
      }
      this.session.sampled !== !1 &&
        ((this.recordingMode =
          this.session.sampled === `buffer` && this.session.segmentId === 0
            ? `buffer`
            : `session`),
        Q && $.infoTick(`Starting replay in ${this.recordingMode} mode`),
        this._initializeRecording());
    }
  }
  start() {
    if (this._isEnabled && this.recordingMode === `session`) {
      Q && $.log(`Recording is already in progress`);
      return;
    }
    if (this._isEnabled && this.recordingMode === `buffer`) {
      Q && $.log("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    Q && $.infoTick(`Starting replay in session mode`),
      this._updateUserActivity();
    let e = M_(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 1,
        allowBuffering: !1,
      }
    );
    (this.session = e),
      (this.recordingMode = `session`),
      this._initializeRecording();
  }
  startBuffering() {
    if (this._isEnabled) {
      Q && $.log("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    Q && $.infoTick(`Starting replay in buffer mode`);
    let e = M_(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: !0,
      }
    );
    (this.session = e),
      (this.recordingMode = `buffer`),
      this._initializeRecording();
  }
  startRecording() {
    try {
      let e = this._canvas;
      this._stopRecording = sg({
        ...this._recordingOptions,
        ...(this.recordingMode === `buffer`
          ? { checkoutEveryNms: sp }
          : this._options._experiments.continuousCheckout && {
              checkoutEveryNms: Math.max(
                36e4,
                this._options._experiments.continuousCheckout
              ),
            }),
        emit: ty(this),
        ...ey(),
        onMutation: this._onMutationHandler.bind(this),
        ...(e
          ? {
              recordCanvas: e.recordCanvas,
              getCanvasManager: e.getCanvasManager,
              sampling: e.sampling,
              dataURLOptions: e.dataURLOptions,
            }
          : {}),
      });
    } catch (e) {
      this.handleException(e);
    }
  }
  stopRecording() {
    try {
      return (this._stopRecording &&= (this._stopRecording(), void 0)), !0;
    } catch (e) {
      return this.handleException(e), !1;
    }
  }
  async stop({ forceFlush: e = !1, reason: t } = {}) {
    if (!this._isEnabled) return;
    (this._isEnabled = !1), (this.recordingMode = `buffer`);
    let n = t ?? `manual`;
    F()?.emit(`replayEnd`, { sessionId: this.session?.id, reason: n });
    try {
      Q && $.log(`Stopping Replay triggered by ${n}`),
        rv(),
        this._removeListeners(),
        this.stopRecording(),
        this._debouncedFlush.cancel(),
        e && (await this._flush({ force: !0 })),
        this.eventBuffer?.destroy(),
        (this.eventBuffer = null),
        x_(this);
    } catch (e) {
      this.handleException(e);
    }
  }
  pause() {
    this._isPaused ||
      ((this._isPaused = !0),
      this.stopRecording(),
      Q && $.log(`Pausing replay`));
  }
  resume() {
    !this._isPaused ||
      !this._checkSession() ||
      ((this._isPaused = !1),
      this.startRecording(),
      Q && $.log(`Resuming replay`));
  }
  async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
    if (this.recordingMode === `session`) return this.flushImmediate();
    let t = Date.now();
    Q && $.log(`Converting buffer to session`), await this.flushImmediate();
    let n = this.stopRecording();
    !e ||
      !n ||
      (this.recordingMode !== `session` &&
        ((this.recordingMode = `session`),
        this.session &&
          ((this.session.dirty = !1),
          this._updateUserActivity(t),
          this._updateSessionActivity(t),
          this._maybeSaveSession(),
          iv(this.session.id)),
        this.startRecording()));
  }
  addUpdate(e) {
    let t = e();
    this.recordingMode === `buffer` ||
      !this._isEnabled ||
      (t !== !0 && this._debouncedFlush());
  }
  triggerUserActivity() {
    if ((this._updateUserActivity(), !this._stopRecording)) {
      if (!this._checkSession()) return;
      this.resume();
      return;
    }
    this.checkAndHandleExpiredSession(), this._updateSessionActivity();
  }
  updateUserActivity() {
    this._updateUserActivity(), this._updateSessionActivity();
  }
  conditionalFlush() {
    return this.recordingMode === `buffer`
      ? Promise.resolve()
      : this.flushImmediate();
  }
  flush() {
    return this._debouncedFlush();
  }
  flushImmediate() {
    return this._debouncedFlush(), this._debouncedFlush.flush();
  }
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  getSessionId(e) {
    if (!(e && this.session?.sampled === !1)) return this.session?.id;
  }
  checkAndHandleExpiredSession() {
    if (
      this._lastActivity &&
      k_(this._lastActivity, this.timeouts.sessionIdlePause) &&
      this.session?.sampled === `session`
    ) {
      this.pause();
      return;
    }
    return !!this._checkSession();
  }
  setInitialState() {
    let e = `${G.location.pathname}${G.location.hash}${G.location.search}`,
      t = `${G.location.origin}${e}`;
    (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._clearContext(),
      (this._context.initialUrl = t),
      (this._context.initialTimestamp = Date.now()),
      this._context.urls.push(t);
  }
  throttledAddEvent(e, t) {
    let n = this._throttledAddEvent(e, t);
    if (n === my) {
      let e = Pg({ category: `replay.throttled` });
      this.addUpdate(
        () =>
          !P_(this, {
            type: fg,
            timestamp: e.timestamp || 0,
            data: { tag: `breadcrumb`, payload: e, metric: !0 },
          })
      );
    }
    return n;
  }
  getCurrentRoute() {
    let e = this.lastActiveSpan || z(),
      t = e && R(e),
      n = ((t && L(t).data) || {})[$t];
    if (!(!t || !n || ![`route`, `custom`].includes(n)))
      return L(t).description;
  }
  _initializeRecording() {
    this.setInitialState(),
      this._updateSessionActivity(),
      (this.eventBuffer = __({
        useCompression: this._options.useCompression,
        workerUrl: this._options.workerUrl,
      })),
      this._removeListeners(),
      this._addListeners(),
      (this._isEnabled = !0),
      (this._isPaused = !1),
      this.session &&
        F()?.emit(`replayStart`, {
          sessionId: this.session.id,
          recordingMode: this.recordingMode,
        }),
      this.startRecording(),
      this.recordingMode === `session` && this.session && iv(this.session.id);
  }
  _initializeSessionForSampling(e) {
    let t = this._options.errorSampleRate > 0,
      n = M_(
        {
          sessionIdleExpire: this.timeouts.sessionIdleExpire,
          maxReplayDuration: this._options.maxReplayDuration,
          previousSessionId: e,
        },
        {
          stickySession: this._options.stickySession,
          sessionSampleRate: this._options.sessionSampleRate,
          allowBuffering: t,
        }
      );
    this.session = n;
  }
  _checkSession() {
    if (!this.session) return !1;
    let e = this.session;
    return j_(e, {
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration,
    })
      ? (this._refreshSession(e), !1)
      : !0;
  }
  async _refreshSession(e) {
    this._isEnabled &&
      (await this.stop({ reason: `sessionExpired` }),
      this.initializeSampling(e.id));
  }
  _addListeners() {
    try {
      G.document.addEventListener(
        `visibilitychange`,
        this._handleVisibilityChange
      ),
        G.addEventListener(`blur`, this._handleWindowBlur),
        G.addEventListener(`focus`, this._handleWindowFocus),
        G.addEventListener(`keydown`, this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.addListeners(),
        (this._hasInitializedCoreListeners ||= (Yv(this), !0));
    } catch (e) {
      this.handleException(e);
    }
    this._performanceCleanupCallback = a_(this);
  }
  _removeListeners() {
    try {
      G.document.removeEventListener(
        `visibilitychange`,
        this._handleVisibilityChange
      ),
        G.removeEventListener(`blur`, this._handleWindowBlur),
        G.removeEventListener(`focus`, this._handleWindowFocus),
        G.removeEventListener(`keydown`, this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.removeListeners(),
        this._performanceCleanupCallback && this._performanceCleanupCallback();
    } catch (e) {
      this.handleException(e);
    }
  }
  _doChangeToBackgroundTasks(e) {
    if (this.session) {
      if (
        j_(this.session, {
          maxReplayDuration: this._options.maxReplayDuration,
          sessionIdleExpire: this.timeouts.sessionIdleExpire,
        })
      ) {
        rv();
        return;
      }
      e && this._createCustomBreadcrumb(e), this.conditionalFlush();
    }
  }
  _doChangeToForegroundTasks(e) {
    if (this.session) {
      if (!this.checkAndHandleExpiredSession()) {
        Q && $.log(`Document has become active, but session has expired`);
        return;
      }
      e && this._createCustomBreadcrumb(e);
    }
  }
  _updateUserActivity(e = Date.now()) {
    this._lastActivity = e;
  }
  _updateSessionActivity(e = Date.now()) {
    this.session && ((this.session.lastActivity = e), this._maybeSaveSession());
  }
  _createCustomBreadcrumb(e) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: J.Custom,
        timestamp: e.timestamp || 0,
        data: { tag: `breadcrumb`, payload: e },
      });
    });
  }
  _addPerformanceEntries() {
    let e = Jg(this.performanceEntries).concat(this.replayPerformanceEntries);
    if (
      ((this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._requiresManualStart)
    ) {
      let t = this._context.initialTimestamp / 1e3;
      e = e.filter((e) => e.start >= t);
    }
    return Promise.all(cv(this, e));
  }
  _clearContext() {
    this._context.errorIds.clear(),
      this._context.traceIds.clear(),
      this._context.segmentNames.clear(),
      (this._context.urls = []);
  }
  _updateInitialTimestampFromEventBuffer() {
    let { session: e, eventBuffer: t } = this;
    if (!e || !t || this._requiresManualStart || e.segmentId) return;
    let n = t.getEarliestTimestamp();
    n &&
      n < this._context.initialTimestamp &&
      (this._context.initialTimestamp = n);
  }
  _popEventContext() {
    let e = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      segmentNames: Array.from(this._context.segmentNames),
      urls: this._context.urls,
    };
    return this._clearContext(), e;
  }
  async _runFlush() {
    let e = this.getSessionId();
    if (!this.session || !this.eventBuffer || !e) {
      Q && $.error(`No session or eventBuffer found to flush.`);
      return;
    }
    if (
      (await this._addPerformanceEntries(),
      this.eventBuffer?.hasEvents &&
        (await Xv(this), this.eventBuffer && e === this.getSessionId()))
    )
      try {
        this._updateInitialTimestampFromEventBuffer();
        let t = Date.now();
        if (
          t - this._context.initialTimestamp >
          this._options.maxReplayDuration + 3e4
        )
          throw new fy();
        let n = this._popEventContext(),
          r = this.session.segmentId++;
        this._maybeSaveSession(),
          await py({
            replayId: e,
            recordingData: await this.eventBuffer.finish(),
            segmentId: r,
            eventContext: n,
            session: this.session,
            timestamp: t,
            onError: (e) => this.handleException(e),
          });
      } catch (e) {
        this.handleException(e), this.stop({ reason: `sendError` });
        let t = F();
        if (t) {
          let n;
          (n =
            e instanceof dy
              ? `ratelimit_backoff`
              : e instanceof fy
              ? `invalid`
              : `send_error`),
            t.recordDroppedEvent(n, `replay`);
        }
      }
  }
  async _flush({ force: e = !1 } = {}) {
    if (!this._isEnabled && !e) return;
    if (!this.checkAndHandleExpiredSession()) {
      Q && $.error(`Attempting to finish replay event after session expired.`);
      return;
    }
    if (!this.session) return;
    let t = this.session.started,
      n = Date.now() - t;
    this._debouncedFlush.cancel();
    let r = n < this._options.minReplayDuration,
      i = n > this._options.maxReplayDuration + 5e3;
    if (r || i) {
      Q &&
        $.log(
          `Session duration (${Math.floor(n / 1e3)}s) is too ${
            r ? `short` : `long`
          }, not sending replay.`
        ),
        r && this._debouncedFlush();
      return;
    }
    let a = this.eventBuffer;
    a &&
      this.session.segmentId === 0 &&
      !a.hasCheckout &&
      Q &&
      $.log(`Flushing initial segment without checkout.`);
    let o = !!this._flushLock;
    this._flushLock ||= this._runFlush();
    try {
      await this._flushLock;
    } catch (e) {
      this.handleException(e);
    } finally {
      (this._flushLock = void 0), o && this._debouncedFlush();
    }
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && w_(this.session);
  }
  _onMutationHandler(e) {
    let { ignoreMutations: t } = this._options._experiments;
    if (
      t?.length &&
      e.some((e) => {
        let n = ay(e.target),
          r = t.join(`,`);
        return n?.matches(r);
      })
    )
      return !1;
    let n = e.length,
      r = this._options.mutationLimit,
      i = this._options.mutationBreadcrumbLimit,
      a = r && n > r;
    if (n > i || a) {
      let e = Pg({
        category: `replay.mutations`,
        data: { count: n, limit: a },
      });
      this._createCustomBreadcrumb(e);
    }
    return a
      ? (this.stop({
          reason: `mutationLimit`,
          forceFlush: this.recordingMode === `session`,
        }),
        !1)
      : !0;
  }
};
function vy(e, t) {
  return [...e, ...t].join(`,`);
}
function yy({ mask: e, unmask: t, block: n, unblock: r, ignore: i }) {
  return {
    maskTextSelector: vy(e, [`.sentry-mask`, `[data-sentry-mask]`]),
    unmaskTextSelector: vy(t, []),
    blockSelector: vy(n, [
      `.sentry-block`,
      `[data-sentry-block]`,
      `base`,
      `iframe[srcdoc]:not([src])`,
    ]),
    unblockSelector: vy(r, []),
    ignoreSelector: vy(i, [
      `.sentry-ignore`,
      `[data-sentry-ignore]`,
      `input[type="file"]`,
    ]),
  };
}
function by({
  el: e,
  key: t,
  maskAttributes: n,
  maskAllText: r,
  privacyOptions: i,
  value: a,
}) {
  if (i.unmaskTextSelector && e.matches(i.unmaskTextSelector)) return a;
  let o = n.includes(t),
    s =
      r &&
      t === `value` &&
      e.tagName === `INPUT` &&
      [`submit`, `button`].includes(e.getAttribute(`type`) || ``);
  return o || s ? a.replace(/[\S]/g, `*`) : a;
}
var xy = `img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]`,
  Sy = [`content-length`, `content-type`, `accept`],
  Cy = Symbol.for(`sentry__originalRequestBody`),
  wy = !1,
  Ty = !1;
function Ey() {
  if (typeof Request > `u` || Ty) return;
  let e = Request;
  try {
    let n = function (t, n) {
      let r = new e(t, n);
      return n?.body != null && (r[Cy] = n.body), r;
    };
    (n.prototype = e.prototype), (t.Request = n), (Ty = !0);
  } catch {}
}
var Dy = (e) => new Oy(e),
  Oy = class {
    constructor({
      flushMinDelay: e = ap,
      flushMaxDelay: t = op,
      minReplayDuration: n = hp,
      maxReplayDuration: r = _p,
      stickySession: i = !0,
      useCompression: a = !0,
      workerUrl: o,
      _experiments: s = {},
      maskAllText: c = !0,
      maskAllInputs: l = !0,
      blockAllMedia: u = !0,
      mutationBreadcrumbLimit: d = 750,
      mutationLimit: f = 1e4,
      slowClickTimeout: p = 7e3,
      slowClickIgnoreSelectors: m = [],
      networkDetailAllowUrls: h = [],
      networkDetailDenyUrls: g = [],
      networkCaptureBodies: _ = !0,
      networkRequestHeaders: v = [],
      networkResponseHeaders: y = [],
      mask: b = [],
      maskAttributes: x = [`title`, `placeholder`, `aria-label`],
      unmask: S = [],
      block: C = [],
      unblock: w = [],
      ignore: ee = [],
      maskFn: te,
      beforeAddRecordingEvent: T,
      beforeErrorSampling: ne,
      onError: re,
      attachRawBodyFromRequest: ie = !1,
    } = {}) {
      this.name = `Replay`;
      let E = yy({ mask: b, unmask: S, block: C, unblock: w, ignore: ee });
      if (
        ((this._recordingOptions = {
          maskAllInputs: l,
          maskAllText: c,
          maskInputOptions: { password: !0 },
          maskTextFn: te,
          maskInputFn: te,
          maskAttributeFn: (e, t, n) =>
            by({
              maskAttributes: x,
              maskAllText: c,
              privacyOptions: E,
              key: e,
              value: t,
              el: n,
            }),
          ...E,
          slimDOMOptions: `all`,
          inlineStylesheet: !0,
          inlineImages: !1,
          collectFonts: !0,
          errorHandler: (e) => {
            try {
              e.__rrweb__ = !0;
            } catch {}
          },
          recordCrossOriginIframes: !!s.recordCrossOriginIframes,
        }),
        (this._initialOptions = {
          flushMinDelay: e,
          flushMaxDelay: t,
          minReplayDuration: Math.min(n, gp),
          maxReplayDuration: Math.min(r, _p),
          stickySession: i,
          useCompression: a,
          workerUrl: o,
          blockAllMedia: u,
          maskAllInputs: l,
          maskAllText: c,
          mutationBreadcrumbLimit: d,
          mutationLimit: f,
          slowClickTimeout: p,
          slowClickIgnoreSelectors: m,
          networkDetailAllowUrls: h,
          networkDetailDenyUrls: g,
          networkCaptureBodies: _,
          networkRequestHeaders: Ay(v),
          networkResponseHeaders: Ay(y),
          beforeAddRecordingEvent: T,
          beforeErrorSampling: ne,
          onError: re,
          attachRawBodyFromRequest: ie,
          _experiments: s,
        }),
        this._initialOptions.blockAllMedia &&
          ((this._recordingOptions.blockSelector = this._recordingOptions
            .blockSelector
            ? `${this._recordingOptions.blockSelector},${xy}`
            : xy),
          (this._recordingOptions.ignoreCSSAttributes = new Set([
            `background-image`,
          ]))),
        this._isInitialized && Ya())
      )
        throw Error(
          `Multiple Sentry Session Replay instances are not supported`
        );
      this._isInitialized = !0;
    }
    get _isInitialized() {
      return wy;
    }
    set _isInitialized(e) {
      wy = e;
    }
    afterAllSetup(e) {
      !Ya() ||
        this._replay ||
        (this._initialOptions.attachRawBodyFromRequest && Ey(),
        this._setup(e),
        this._initialize(e));
    }
    start() {
      this._replay && this._replay.start();
    }
    startBuffering() {
      this._replay && this._replay.startBuffering();
    }
    stop(e) {
      return this._replay
        ? this._replay.stop({
            forceFlush: e?.flush ?? this._replay.recordingMode === `session`,
            reason: `manual`,
          })
        : Promise.resolve();
    }
    flush(e) {
      return this._replay
        ? this._replay.isEnabled()
          ? this._replay.sendBufferedReplayOrFlush(e)
          : (this._replay.start(), Promise.resolve())
        : Promise.resolve();
    }
    getReplayId(e) {
      if (this._replay?.isEnabled()) return this._replay.getSessionId(e);
    }
    getRecordingMode() {
      if (this._replay?.isEnabled()) return this._replay.recordingMode;
    }
    processSpan(e) {
      let t = this.getReplayId(!0);
      t &&
        (Qi(e, { "sentry.replay_id": t }),
        this.getRecordingMode() === `buffer` &&
          Qi(e, { "sentry._internal.replay_is_buffering": !0 }));
    }
    _initialize(e) {
      this._replay &&
        (this._maybeLoadFromReplayCanvasIntegration(e),
        this._replay.initializeSampling());
    }
    _setup(e) {
      let t = ky(this._initialOptions, e);
      this._replay = new _y({
        options: t,
        recordingOptions: this._recordingOptions,
      });
    }
    _maybeLoadFromReplayCanvasIntegration(e) {
      try {
        let t = e.getIntegrationByName(`ReplayCanvas`);
        if (!t) return;
        this._replay._canvas = t.getOptions();
      } catch {}
    }
  };
function ky(e, t) {
  let n = t.getOptions(),
    r = { sessionSampleRate: 0, errorSampleRate: 0, ...e },
    i = Bn(n.replaysSessionSampleRate),
    a = Bn(n.replaysOnErrorSampleRate);
  return (
    i == null &&
      a == null &&
      l(() => {
        console.warn(
          "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
        );
      }),
    i != null && (r.sessionSampleRate = i),
    a != null && (r.errorSampleRate = a),
    r
  );
}
function Ay(e) {
  return [...Sy, ...e.map((e) => e.toLowerCase())];
}
function jy(e) {
  return e.split(`,`).some((e) => e.trim().startsWith(`sentry-`));
}
function My(e) {
  try {
    return new URL(e, V.location.origin).href;
  } catch {
    return;
  }
}
function Ny(e) {
  return (
    e.entryType === `resource` &&
    `initiatorType` in e &&
    typeof e.nextHopProtocol == `string` &&
    (e.initiatorType === `fetch` || e.initiatorType === `xmlhttprequest`)
  );
}
function Py(e) {
  try {
    return new Headers(e);
  } catch {
    return;
  }
}
var Fy = {
  traceFetch: !0,
  traceXHR: !0,
  enableHTTPTimings: !0,
  trackFetchStreamPerformance: !1,
};
function Iy(e, t) {
  let {
      traceFetch: n,
      traceXHR: r,
      shouldCreateSpanForRequest: i,
      enableHTTPTimings: a,
      tracePropagationTargets: o,
      onRequestSpanStart: s,
      onRequestSpanEnd: c,
    } = { ...Fy, ...t },
    l = typeof i == `function` ? i : (e) => !0,
    u = (e) => zy(e, o),
    d = {},
    f = e.getOptions().propagateTraceparent;
  n &&
    pc((t) => {
      let n = Qs(t, l, u, d, { propagateTraceparent: f, onRequestSpanEnd: c });
      if (n) {
        let r = My(t.fetchData.url),
          i = r ? Qo(r).host : void 0,
          o = r ? es(r) : void 0;
        n.setAttributes({ [Wi]: o, [Yi]: o, "server.address": i }),
          a && Ry(n, e),
          s?.(n, { headers: t.headers });
      }
    }),
    r &&
      Ld((t) => {
        let n = By(t, l, u, d, f, c);
        n &&
          (a && Ry(n, e),
          s?.(n, { headers: Py(t.xhr.__sentry_xhr_v3__?.request_headers) }));
      });
}
var Ly = 300;
function Ry(e, t) {
  let { url: n } = L(e).data;
  if (!n || typeof n != `string`) return;
  let r = () => void setTimeout(i);
  if (ai(t)) {
    let t = e.end.bind(e);
    e.end = (e) => {
      let n = e ?? j(),
        a = !1,
        o = () => {
          a || ((a = !0), setTimeout(i), t(n), clearTimeout(s));
        };
      r = o;
      let s = setTimeout(o, Ly);
    };
  }
  let i = Zl(`resource`, ({ entries: t }) => {
    t.forEach((t) => {
      Ny(t) && t.name.endsWith(n) && (e.setAttributes(Eu(t)), r());
    });
  });
}
function zy(e, t) {
  let n = Cc();
  if (n) {
    let r, i;
    try {
      (r = new URL(e, n)), (i = new URL(n).origin);
    } catch {
      return !1;
    }
    let a = r.origin === i;
    return t ? $e(r.toString(), t) || (a && $e(r.pathname, t)) : a;
  } else {
    let n = !!e.match(/^\/(?!\/)/);
    return t ? $e(e, t) : n;
  }
}
function By(e, t, n, r, i, a) {
  let o = e.xhr,
    s = o?.[Id];
  if (!o || o.__sentry_own_request__ || !s) return;
  let { url: c, method: l } = s,
    u = br() && t(c);
  if (e.endTimestamp) {
    let t = o.__sentry_xhr_span_id__;
    if (!t) return;
    let n = r[t];
    n &&
      (u &&
        s.status_code !== void 0 &&
        (pn(n, s.status_code),
        n.end(),
        a?.(n, { headers: Py(Wd(o)), error: e.error })),
      delete r[t]);
    return;
  }
  let d = My(c),
    f = Qo(d || c),
    p = d ? es(d) : void 0,
    m = es($o(c)),
    h = F(),
    g = !!z(),
    _ = g || (!!h && ai(h)),
    v =
      u && _
        ? mi({
            name: `${l} ${m}`,
            attributes: {
              url: es(c),
              type: `xhr`,
              "http.method": l,
              "http.url": p,
              [Yi]: p,
              "server.address": f?.host,
              [I]: `auto.http.browser`,
              [nn]: `http.client`,
              ...(f?.search && { "http.query": f?.search }),
              ...(f?.hash && { "http.fragment": f?.hash }),
            },
          })
        : new Dr(),
    y = Ei(v) && g ? void 0 : v;
  return (
    u && !_ && h?.recordDroppedEvent(`no_parent_span`, `span`),
    (o.__sentry_xhr_span_id__ = v.spanContext().spanId),
    (r[o.__sentry_xhr_span_id__] = v),
    n(c) && Vy(o, br() && _ ? y : void 0, i),
    h && h.emit(`beforeOutgoingRequestSpan`, v, e),
    v
  );
}
function Vy(e, t, n) {
  let {
    "sentry-trace": r,
    baggage: i,
    traceparent: a,
  } = cs({ span: t, propagateTraceparent: n });
  r && Hy(e, r, i, a);
}
function Hy(e, t, n, r) {
  let i = e.__sentry_xhr_v3__?.request_headers;
  if (!(i?.[`sentry-trace`] || !e.setRequestHeader))
    try {
      if (
        (e.setRequestHeader(`sentry-trace`, t),
        r && !i?.traceparent && e.setRequestHeader(`traceparent`, r),
        n)
      ) {
        let t = i?.baggage;
        (!t || !jy(t)) && e.setRequestHeader(`baggage`, n);
      }
    } catch {}
}
var Uy = new WeakMap(),
  Wy = new WeakMap(),
  Gy = 9e4,
  Ky = [`text/event-stream`, `application/x-ndjson`, `application/stream+json`],
  qy = B(() => ({
    name: `FetchStreamPerformance`,
    setup() {
      mc((e) => {
        if (e.response) {
          let t = Uy.get(e.response);
          if (t && e.endTimestamp) {
            t.end(e.endTimestamp);
            let n = Wy.get(e.response);
            n && clearTimeout(n);
          }
        }
      }),
        pc((e) => {
          if (e.endTimestamp && e.response) {
            let t = e.response.headers?.get(`content-type`) || ``;
            if (
              e.response.headers?.get(`content-length`) ||
              !Ky.some((e) => t.startsWith(e))
            )
              return;
            let n = e.fetchData?.url || ``,
              r = e.fetchData?.method || `GET`,
              i = Xo(n),
              a = mi({
                name: `${r} ${n.startsWith(`data:`) ? es(n) : i ? Zo(i) : n}`,
                startTime: e.endTimestamp,
                attributes: {
                  url: es(n),
                  "http.method": r,
                  type: `fetch`,
                  [nn]: `http.client.stream`,
                  [I]: `auto.http.browser.stream`,
                },
              });
            Uy.set(e.response, a);
            let o = setTimeout(() => {
              a.isRecording() && a.end();
            }, Gy);
            Wy.set(e.response, o);
          }
        });
    },
  })),
  Jy = `WebVitals`,
  Yy = B((e = {}) => {
    let t = new Set(e.ignore ?? []);
    return {
      name: Jy,
      setup(n) {
        let r = ai(n),
          { enableStandaloneClsSpans: i, enableStandaloneLcpSpans: a } =
            e._experiments ?? {},
          o = r || t.has(`cls`) ? void 0 : i || !1,
          s = r || t.has(`lcp`) ? void 0 : a || !1,
          c = Nu({
            recordClsStandaloneSpans: o,
            recordLcpStandaloneSpans: s,
            client: n,
          }),
          l = new WeakSet();
        n.on(`afterStartPageLoadSpan`, (e) => {
          l.add(e);
        }),
          n.on(`spanEnd`, (e) => {
            l.delete(e) &&
              (c(),
              Hu(e, {
                recordClsOnPageloadSpan: o === !1,
                recordLcpOnPageloadSpan: s === !1,
                spanStreamingEnabled: r,
              }));
          }),
          r
            ? (t.has(`lcp`) || fd(n),
              t.has(`cls`) || md(n),
              t.has(`inp`) || gd())
            : t.has(`inp`) || ad();
      },
      afterAllSetup() {
        t.has(`inp`) || ud();
      },
    };
  });
function Xy() {
  V.document
    ? V.document.addEventListener(`visibilitychange`, () => {
        let e = z();
        if (!e) return;
        let t = R(e);
        if (V.document.hidden && t) {
          let e = `cancelled`,
            { op: n, status: r } = L(t);
          Yd &&
            v.log(
              `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`
            ),
            r || t.setStatus({ code: 2, message: e }),
            t.setAttribute(`sentry.cancellation_reason`, `document.hidden`),
            t.end();
        }
      })
    : Yd &&
      v.warn(
        `[Tracing] Could not set up background tab detection due to lack of global document`
      );
}
var Zy = `sentry_previous_trace`,
  Qy = `sentry.previous_trace`;
function $y(e, { linkPreviousTrace: t, consistentTraceSampling: n }) {
  let r = t === `session-storage`,
    i = r ? nb() : void 0;
  e.on(`spanStart`, (e) => {
    if (R(e) !== e) return;
    let t = N().getPropagationContext();
    (i = eb(i, e, t)), r && tb(i);
  });
  let a = !0;
  n &&
    e.on(`beforeSampling`, (e) => {
      if (!i) return;
      let t = N(),
        n = t.getPropagationContext();
      if (a && n.parentSpanId) {
        a = !1;
        return;
      }
      t.setPropagationContext({
        ...n,
        dsc: {
          ...n.dsc,
          sample_rate: String(i.sampleRate),
          sampled: String(rb(i.spanContext)),
        },
        sampleRand: i.sampleRand,
      }),
        (e.parentSampled = rb(i.spanContext)),
        (e.parentSampleRate = i.sampleRate),
        (e.spanAttributes = { ...e.spanAttributes, [tn]: i.sampleRate });
    });
}
function eb(e, t, n) {
  let r = L(t);
  function i() {
    try {
      let e = Number(r.data?.[`sentry.sample_rate`] ?? n.dsc?.sample_rate);
      return Number.isNaN(e) ? 0 : e;
    } catch {
      return 0;
    }
  }
  let a = {
    spanContext: t.spanContext(),
    startTimestamp: r.start_timestamp,
    sampleRate: i(),
    sampleRand: n.sampleRand,
  };
  if (!e) return a;
  let o = e.spanContext;
  return o.traceId === r.trace_id
    ? e
    : (Date.now() / 1e3 - e.startTimestamp <= 3600 &&
        (Yd &&
          v.log(
            `Adding previous_trace \`${JSON.stringify(
              o
            )}\` link to span \`${JSON.stringify({
              op: r.op,
              ...t.spanContext(),
            })}\``
          ),
        t.addLink({ context: o, attributes: { [un]: `previous_trace` } }),
        t.setAttribute(Qy, `${o.traceId}-${o.spanId}-${+!!rb(o)}`)),
      a);
}
function tb(e) {
  try {
    V.sessionStorage.setItem(Zy, JSON.stringify(e));
  } catch (e) {
    Yd && v.warn(`Could not store previous trace in sessionStorage`, e);
  }
}
function nb() {
  try {
    let e = V.sessionStorage?.getItem(Zy);
    return JSON.parse(e);
  } catch {
    return;
  }
}
function rb(e) {
  return e.traceFlags === 1;
}
var ib = `BrowserTracing`,
  ab =
    /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
function ob() {
  let e = V.navigator;
  return e?.userAgent ? ab.test(e.userAgent) : !1;
}
var sb = {
    ...Di,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    ignoreResourceSpans: [],
    ignorePerformanceApiSpans: [],
    detectRedirects: !0,
    linkPreviousTrace: `in-memory`,
    consistentTraceSampling: !1,
    enableReportPageLoaded: !1,
    _experiments: {},
    ...Fy,
  },
  cb = (e = {}) => {
    `enableElementTiming` in e &&
      l(() => {
        console.warn(
          "[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead."
        );
      });
    let n = { name: void 0, source: void 0 },
      r = V.document,
      {
        enableInp: i,
        enableLongTask: a,
        enableLongAnimationFrame: o,
        _experiments: {
          enableInteractions: s,
          enableStandaloneClsSpans: c,
          enableStandaloneLcpSpans: u,
        },
        beforeStartSpan: d,
        idleTimeout: f,
        finalTimeout: p,
        childSpanTimeout: m,
        markBackgroundSpan: h,
        traceFetch: g,
        traceXHR: _,
        trackFetchStreamPerformance: y,
        shouldCreateSpanForRequest: b,
        enableHTTPTimings: x,
        ignoreResourceSpans: S,
        ignorePerformanceApiSpans: C,
        instrumentPageLoad: w,
        instrumentNavigation: ee,
        detectRedirects: te,
        linkPreviousTrace: T,
        consistentTraceSampling: ne,
        enableReportPageLoaded: re,
        onRequestSpanStart: ie,
        onRequestSpanEnd: E,
      } = { ...sb, ...e },
      D = ob(),
      O,
      k;
    function ae(e, t, i = !0, a) {
      let o = t.op === `pageload`,
        s = t.name,
        c = d ? d(t) : t,
        l = Xo(a || Cc()),
        u = {
          ...(l?.pathname && { "url.path": l.pathname }),
          ...(l && !Yo(l) && { "url.full": l.href }),
          ...c.attributes,
        };
      if ((s !== c.name && (u[$t] = `custom`), (c.attributes = u), !i)) {
        let e = dt();
        mi({ ...c, startTime: e }).end(e);
        return;
      }
      (n.name = c.name), (n.source = u[$t]);
      let h = Mi(c, {
        idleTimeout: f,
        finalTimeout: p,
        childSpanTimeout: m,
        disableAutoFinish: o,
        beforeSpanEnd: (t) => {
          Vu(t, {
            ignoreResourceSpans: S,
            ignorePerformanceApiSpans: C,
            spanStreamingEnabled: ai(e),
          }),
            gb(e, void 0);
          let n = N(),
            r = n.getPropagationContext();
          n.setPropagationContext({
            ...r,
            traceId: h.spanContext().traceId,
            sampled: sr(h),
            dsc: Pr(t),
          }),
            o && (k = void 0);
        },
        trimIdleSpanEndTimestamp: !re,
      });
      o && re && (k = h), gb(e, h);
      function g() {
        r &&
          [`interactive`, `complete`].includes(r.readyState) &&
          (e.emit(`idleSpanEnableAutoFinish`, h),
          r.removeEventListener(`readystatechange`, g));
      }
      o && !re && r && (r.addEventListener(`readystatechange`, g), g());
    }
    return {
      name: ib,
      setup(e) {
        if (D) {
          Yd &&
            v.log(
              `[Tracing] Skipping browserTracingIntegration setup for bot user agent.`
            );
          return;
        }
        if (
          (yr(),
          o &&
          t.PerformanceObserver &&
          PerformanceObserver.supportedEntryTypes?.includes(
            `long-animation-frame`
          )
            ? Fu()
            : a && Pu(),
          s && Iu(),
          te && r)
        ) {
          let e = () => {
            O = j();
          };
          addEventListener(`click`, e, { capture: !0 }),
            addEventListener(`keydown`, e, { capture: !0, passive: !0 });
        }
        function n() {
          let t = hb(e);
          t &&
            !L(t).timestamp &&
            (Yd &&
              v.log(
                `[Tracing] Finishing current active span with op: ${L(t).op}`
              ),
            t.setAttribute(rn, `cancelled`),
            t.end());
        }
        e.on(`startNavigationSpan`, (t, r) => {
          if (F() !== e) return;
          if (r?.isRedirect) {
            Yd &&
              v.warn(
                `[Tracing] Detected redirect, navigation span will not be the root span, but a child span.`
              ),
              ae(e, { op: `navigation.redirect`, ...t }, !1, r.url);
            return;
          }
          (O = void 0),
            n(),
            P().setPropagationContext({
              traceId: xt(),
              sampleRand: Math.random(),
              propagationSpanId: br() ? void 0 : St(),
            });
          let i = N();
          i.setPropagationContext({
            traceId: xt(),
            sampleRand: Math.random(),
            propagationSpanId: br() ? void 0 : St(),
          }),
            i.setSDKProcessingMetadata({ normalizedRequest: void 0 }),
            ae(
              e,
              {
                op: `navigation`,
                ...t,
                parentSpan: null,
                forceTransaction: !0,
              },
              !0,
              r?.url
            );
        }),
          e.on(`startPageLoadSpan`, (t, r = {}) => {
            if (F() !== e) return;
            n();
            let i = Un(
                r.sentryTrace || db(`sentry-trace`) || fb(`sentry-trace`),
                r.baggage || db(`baggage`) || fb(`baggage`)
              ),
              a = N();
            a.setPropagationContext(i),
              br() || (a.getPropagationContext().propagationSpanId = St()),
              a.setSDKProcessingMetadata({ normalizedRequest: kc() }),
              ae(e, { op: `pageload`, ...t });
          }),
          e.on(`endPageloadSpan`, () => {
            re && k && (k.setAttribute(rn, `reportPageLoaded`), k.end());
          });
      },
      afterAllSetup(e) {
        if (D) return;
        e.addIntegration &&
          !e.getIntegrationByName?.(`WebVitals`) &&
          e.addIntegration(
            Yy({
              ignore: i ? [] : [`inp`],
              _experiments: {
                enableStandaloneClsSpans: c,
                enableStandaloneLcpSpans: u,
              },
            })
          );
        let t = Cc();
        if (
          (T !== `off` &&
            $y(e, { linkPreviousTrace: T, consistentTraceSampling: ne }),
          V.location)
        ) {
          if (w) {
            let t = M();
            lb(e, {
              name: V.location.pathname,
              startTime: t ? t / 1e3 : void 0,
              attributes: { [$t]: `url`, [I]: `auto.pageload.browser` },
            });
          }
          ee &&
            kd(({ to: n, from: r }) => {
              if (r === void 0 && t?.indexOf(n) !== -1) {
                t = void 0;
                return;
              }
              t = void 0;
              let i = Xo(n),
                a = hb(e),
                o = a && te && vb(a, O);
              ub(
                e,
                {
                  name: i?.pathname || V.location.pathname,
                  attributes: { [$t]: `url`, [I]: `auto.navigation.browser` },
                },
                { url: n, isRedirect: o }
              );
            });
        }
        h && Xy(),
          s && pb(e, f, p, m, n),
          Iy(e, {
            traceFetch: g,
            traceXHR: _,
            tracePropagationTargets: e.getOptions().tracePropagationTargets,
            shouldCreateSpanForRequest: b,
            enableHTTPTimings: x,
            onRequestSpanStart: ie,
            onRequestSpanEnd: E,
          }),
          y && e.addIntegration(qy());
      },
    };
  };
function lb(e, t, n) {
  e.emit(`startPageLoadSpan`, t, n), N().setTransactionName(t.name);
  let r = hb(e);
  return r && e.emit(`afterStartPageLoadSpan`, r), r;
}
function ub(e, t, n) {
  let { url: r, isRedirect: i } = n || {};
  e.emit(`beforeStartNavigationSpan`, t, { isRedirect: i, url: r }),
    e.emit(`startNavigationSpan`, t, { isRedirect: i, url: r });
  let a = N();
  return (
    a.setTransactionName(t.name),
    r &&
      !i &&
      a.setSDKProcessingMetadata({ normalizedRequest: { ...kc(), url: r } }),
    hb(e)
  );
}
function db(e) {
  return (
    V.document?.querySelector(`meta[name=${e}]`)?.getAttribute(`content`) ||
    void 0
  );
}
function fb(e) {
  return V.performance
    ?.getEntriesByType?.(`navigation`)[0]
    ?.serverTiming?.find((t) => t.name === e)?.description;
}
function pb(e, t, n, r, i) {
  let a = V.document,
    o;
  a &&
    addEventListener(
      `click`,
      () => {
        let a = `ui.action.click`,
          s = hb(e);
        if (s) {
          let e = L(s).op;
          if ([`navigation`, `pageload`].includes(e)) {
            Yd &&
              v.warn(
                `[Tracing] Did not create ${a} span because a pageload or navigation span is in progress.`
              );
            return;
          }
        }
        if (
          ((o &&=
            (o.setAttribute(rn, `interactionInterrupted`), o.end(), void 0)),
          !i.name)
        ) {
          Yd &&
            v.warn(
              `[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`
            );
          return;
        }
        o = Mi(
          { name: i.name, op: a, attributes: { [$t]: i.source || `url` } },
          { idleTimeout: t, finalTimeout: n, childSpanTimeout: r }
        );
      },
      { capture: !0 }
    );
}
var mb = `_sentry_idleSpan`;
function hb(e) {
  return e[mb];
}
function gb(e, t) {
  A(e, mb, t);
}
var _b = 1.5;
function vb(e, t) {
  let n = L(e),
    r = dt();
  return !(r - n.start_timestamp > _b || (t && r - t <= _b));
}
var yb = [`activate`, `mount`],
  bb = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  xb = /(?:^|[-_])(\w)/g,
  Sb = (e) => e.replace(xb, (e) => e.toUpperCase()).replace(/[-_]/g, ``),
  Cb = `<Root>`,
  wb = `<Anonymous>`,
  Tb = (e, t) => e.repeat(t),
  Eb = (e, t) => {
    if (!e) return wb;
    if (e.$root === e) return Cb;
    if (!e.$options) return wb;
    let n = e.$options,
      r = n.name || n._componentTag || n.__name,
      i = n.__file;
    if (!r && i) {
      let e = i.match(/([^/\\]+)\.vue$/);
      e && (r = e[1]);
    }
    return (r ? `<${Sb(r)}>` : wb) + (i && t !== !1 ? ` at ${i}` : ``);
  },
  Db = (e) => {
    if (e && (e._isVue || e.__isVue) && e.$parent) {
      let t = [],
        n = 0;
      for (; e; ) {
        if (t.length > 0) {
          let r = t[t.length - 1];
          if (r.constructor === e.constructor) {
            n++, (e = e.$parent);
            continue;
          } else n > 0 && ((t[t.length - 1] = [r, n]), (n = 0));
        }
        t.push(e), (e = e.$parent);
      }
      return `

found in

${t.map(
  (e, t) =>
    `${
      (t === 0 ? `---> ` : Tb(` `, 5 + t * 2)) +
      (Array.isArray(e) ? `${Eb(e[0])}... (${e[1]} recursive calls)` : Eb(e))
    }`
).join(`
`)}`;
    }
    return `

(found in ${Eb(e)})`;
  },
  Ob = (e, t) => {
    let { errorHandler: n } = e.config;
    e.config.errorHandler = (r, i, a) => {
      let o = {
        componentName: Eb(i, !1),
        lifecycleHook: a,
        trace: i ? Db(i) : ``,
      };
      if (
        (t?.attachProps !== !1 &&
          i &&
          (i.$options?.propsData
            ? (o.propsData = i.$options.propsData)
            : i.$props && (o.propsData = i.$props)),
        setTimeout(() => {
          Ca(r, {
            captureContext: { contexts: { vue: o } },
            mechanism: {
              handled: !!n,
              type: `auto.function.vue.error_handler`,
            },
          });
        }),
        typeof n == `function` && e.config.errorHandler)
      )
        n.call(e, r, i, a);
      else throw r;
    };
  },
  kb = `ui.vue`,
  Ab = {
    activate: [`activated`, `deactivated`],
    create: [`beforeCreate`, `created`],
    unmount: [`beforeUnmount`, `unmounted`],
    destroy: [`beforeDestroy`, `destroyed`],
    mount: [`beforeMount`, `mounted`],
    update: [`beforeUpdate`, `updated`],
  };
function jb(e, t, n) {
  e.$_sentryRootComponentSpanTimer &&
    clearTimeout(e.$_sentryRootComponentSpanTimer),
    (e.$_sentryRootComponentSpanTimer = setTimeout(() => {
      e.$root?.$_sentryRootComponentSpan &&
        (e.$root.$_sentryRootComponentSpan.end(t),
        (e.$root.$_sentryRootComponentSpan = void 0));
    }, n));
}
function Mb(e, t) {
  function n(e) {
    return e.replace(/^<([^\s]*)>(?: at [^\s]*)?$/, `$1`);
  }
  return e.some((e) => n(t) === n(e));
}
var Nb = (e = {}) => {
    let t = ds((e.hooks || []).concat(yb)),
      n = {},
      r = e.timeout || 2e3;
    for (let i of t) {
      let t = Ab[i];
      if (!t) {
        bb && v.warn(`Unknown hook: ${i}`);
        continue;
      }
      for (let a of t)
        n[a] = function () {
          let n = this.$root === this;
          n &&
            ((this.$_sentryRootComponentSpan =
              this.$_sentryRootComponentSpan ||
              mi({
                name: `Application Render`,
                op: `${kb}.render`,
                attributes: { "sentry.origin": `auto.ui.vue` },
                onlyIfParent: !0,
              })),
            jb(this, j(), r));
          let o = Eb(this, !1);
          if (
            !(
              n ||
              (Array.isArray(e.trackComponents)
                ? Mb(e.trackComponents, o)
                : e.trackComponents)
            )
          ) {
            jb(this, j(), r);
            return;
          }
          this.$_sentryComponentSpans = this.$_sentryComponentSpans || {};
          let s = a === t[0],
            c = this.$root?.$_sentryRootComponentSpan || z();
          if (s) {
            if (c) {
              let e = this.$_sentryComponentSpans[i];
              e && e.end(),
                (this.$_sentryComponentSpans[i] = mi({
                  name: `Vue ${o}`,
                  op: `${kb}.${i}`,
                  attributes: { [I]: `auto.ui.vue` },
                  onlyIfParent: !0,
                }));
            }
          } else {
            let e = this.$_sentryComponentSpans[i];
            if (!e) return;
            e.end(), jb(this, j(), r);
          }
        };
    }
    return n;
  },
  Pb = {
    Vue: t.Vue,
    attachProps: !0,
    attachErrorHandler: !0,
    tracingOptions: { hooks: yb, timeout: 2e3, trackComponents: !1 },
  },
  Fb = `Vue`,
  Ib = B((e = {}) => ({
    name: Fb,
    setup(t) {
      let n = { ...Pb, ...t.getOptions(), ...e };
      if (!n.Vue && !n.app) {
        l(() => {
          console.warn(
            "[@sentry/vue]: Misconfigured SDK. Vue specific errors will not be captured. Update your `Sentry.init` call with an appropriate config option: `app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2)."
          );
        });
        return;
      }
      n.app
        ? (Array.isArray(n.app) ? n.app : [n.app]).forEach((e) => Lb(e, n))
        : n.Vue && Lb(n.Vue, n);
    },
  })),
  Lb = (e, t) => {
    bb &&
      e._instance?.isMounted === !0 &&
      l(() => {
        console.warn(
          "[@sentry/vue]: Misconfigured SDK. Vue app is already mounted. Make sure to call `app.mount()` after `Sentry.init()`."
        );
      }),
      t.attachErrorHandler && Ob(e, t),
      br(t) && e.mixin(Nb(t.tracingOptions));
  };
function Rb(e) {
  return !!(typeof e == `object` && e && (e.__isVue || e._isVue));
}
function zb(e) {
  return !!(typeof e == `object` && e?.__v_isVNode);
}
function Bb(e) {
  return Rb(e) ? `[VueViewModel]` : zb(e) ? `[VueVNode]` : Jf(e);
}
function Vb(e = {}) {
  let t = { defaultIntegrations: [...Qf(e), Ib()], ...e };
  ss(t, `vue`);
  let n = $f(t);
  return Ve(Bb), n;
}
function Hb(e, t, n) {
  let r = !1,
    i = `mode` in e;
  e.onError((e) => Ca(e, { mechanism: { handled: !1 } })),
    e.beforeEach((e, a, ...o) => {
      let s = r ? void 0 : Ub(),
        c = {};
      for (let t of Object.keys(e.params))
        (c[`${Xi}.${t}`] = e.params[t]), (c[`${Ki}.${t}`] = e.params[t]);
      for (let t of Object.keys(e.query)) {
        let n = e.query[t];
        n && (c[`query.${t}`] = n);
      }
      let l = e.path,
        u = `url`;
      if (e.name && t.routeLabel !== `path`)
        (l = e.name.toString()), (u = `custom`);
      else if (e.matched.length > 0) {
        let t = e.matched.length - 1;
        (l = e.matched[t].path), (u = `route`);
      }
      if (
        (u === `route` && (c[Zi] = l),
        e.name && (c[Gi] = e.name.toString()),
        N().setTransactionName(l),
        t.instrumentPageLoad &&
          s &&
          (L(s).data[`sentry.source`] !== `custom` &&
            (s.updateName(l), s.setAttribute($t, u)),
          s.setAttributes({ ...c, [I]: `auto.pageload.vue` }),
          (r = !0)),
        t.instrumentNavigation &&
          !s &&
          n(
            {
              name: l,
              op: `navigation`,
              attributes: { ...c, [I]: `auto.navigation.vue`, [$t]: u },
            },
            Kd(e.fullPath ?? e.path)
          ),
        i)
      ) {
        let e = o[0];
        typeof e == `function` && e();
      }
    });
}
function Ub() {
  let e = z(),
    t = e && R(e);
  if (t) return L(t).op === `pageload` ? t : void 0;
}
function Wb(e = {}) {
  if (!e.router) return cb(e);
  let t = cb({ ...e, instrumentNavigation: !1 }),
    {
      router: n,
      instrumentNavigation: r = !0,
      instrumentPageLoad: i = !0,
      routeLabel: a = `name`,
    } = e;
  return {
    ...t,
    afterAllSetup(e) {
      t.afterAllSetup(e),
        Hb(
          n,
          { routeLabel: a, instrumentNavigation: r, instrumentPageLoad: i },
          (t, n) => {
            ub(e, t, { url: n });
          }
        );
    },
  };
}
export {
  ps as a,
  Da as c,
  Us as i,
  Oa as l,
  Vb as n,
  Ca as o,
  Dy as r,
  wa as s,
  Wb as t,
  Zt as u,
};

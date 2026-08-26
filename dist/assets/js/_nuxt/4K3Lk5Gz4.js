import { n as e, r as t } from "./QTnfLwEv.js";
import {
  $t as n,
  At as r,
  B as i,
  E as a,
  F as o,
  I as s,
  It as c,
  Nt as l,
  Rt as u,
  Vt as d,
  X as f,
  Xt as p,
  Y as m,
  an as h,
  at as g,
  bt as _,
  dt as v,
  en as y,
  ft as b,
  gn as x,
  ht as S,
  it as C,
  j as w,
  kt as T,
  ln as E,
  mt as D,
  n as O,
  nt as k,
  pt as A,
  rt as j,
  tt as ee,
  u as M,
  vn as N,
  vt as P,
  xn as F,
  xt as I,
  yt as L,
} from "./QgQWmE83.js";
import {
  $a as te,
  $r as ne,
  Ai as R,
  Bi as re,
  Ct as ie,
  Dr as ae,
  Fi as oe,
  Ha as z,
  Hi as se,
  Hr as ce,
  Ii as B,
  Ir as V,
  Ma as le,
  No as ue,
  Qr as de,
  Ri as fe,
  Rr as pe,
  Si as me,
  Tr as he,
  Vi as H,
  Wi as ge,
  Xr as _e,
  Yr as ve,
  Zr as ye,
  ei as be,
  hr as xe,
  mi as Se,
  qr as U,
  ur as Ce,
  vi as we,
} from "./BtP95aSo.js";
import { l as Te } from "./B7-F0GHX.js";
import { a as Ee, t as De } from "./Corz6Jdf.js";
var Oe = { class: `navigation-currency-options` },
  ke = I({
    __name: `NavigationCurrencyOptions`,
    emits: [`close`],
    setup(e, { emit: t }) {
      let { activeCurrency: n, themeData: r } = B(),
        i = t,
        a = v(() => r.value.currencies),
        o = v(() => a.value.map((e) => ({ label: e.code, value: e.code }))),
        c = (e) => {
          if (!e || e?.value === n.value.code) {
            i(`close`);
            return;
          }
          if (!r.value.currencies.some((t) => t.code === e.value)) {
            i(`close`);
            return;
          }
          le.set(ge, e.value, {
            domain: re(),
            path: `/`,
            expires: 30,
            secure: !0,
          }),
            i(`close`),
            window.location.reload();
        };
      return (e, t) => (
        u(),
        S(
          g,
          null,
          [
            b(`div`, Oe, [
              L(
                x(s),
                {
                  class: `navigation-currency-options__dropdown`,
                  options: x(o),
                  "selected-value": x(n).code,
                  onSelected: c,
                  onDeselected: c,
                },
                null,
                8,
                [`options`, `selected-value`]
              ),
            ]),
            b(`div`, {
              class: `navigation-currency-options__backdrop`,
              onClick: (t[0] ||= (e) => i(`close`)),
            }),
          ],
          64
        )
      );
    },
  }),
  Ae = e({ default: () => je }),
  je = Object.assign(V(ke, [[`__scopeId`, `data-v-b278be71`]]), {
    __name: `NavigationCurrencyOptions`,
  }),
  Me = [`dir`],
  Ne = { class: `navigation-leave-popup__container` },
  W = { class: `navigation-leave-popup__scrollable-container` },
  G = { class: `navigation-leave-popup__content-wrapper` },
  K = { class: `navigation-leave-popup__left-content` },
  Pe = [`innerHTML`],
  q = [`innerHTML`],
  Fe = { class: `navigation-leave-popup__button-wrapper` },
  Ie = { class: `navigation-leave-popup__button-container` },
  Le = { class: `h-t-body-3` },
  J = { class: `navigation-leave-popup__right-content` },
  Re = [`data-click-id`],
  ze = [`data-click-id`],
  Be = I({
    __name: `NavigationLeavePopup`,
    emits: [`close`],
    setup(e, { emit: t }) {
      let { direction: r, pageNameDataClickId: i } = B(),
        { sendAmplitudeEvent: a } = me(),
        { getRegisterLink: s } = R(),
        { restartAutoTracking: l } = ve(),
        { t: d } = H(),
        f = t,
        p = v(() => {
          let e = xe();
          return s({ redirectUrl: e.href, promo: `horizons` }).href;
        });
      return (
        c(() => {
          l(),
            a({
              name: `website.popup.shown`,
              properties: { popupName: `horizons-leave-popup` },
            });
        }),
        (e, t) => {
          let a = ae;
          return (
            u(),
            S(
              `div`,
              { class: `navigation-leave-popup`, dir: x(r) },
              [
                b(`div`, Ne, [
                  b(`div`, W, [
                    b(`div`, G, [
                      b(`div`, K, [
                        b(
                          `h2`,
                          {
                            innerHTML: x(d)(
                              `components.navigation.leavePopup.horizons.title`
                            ),
                          },
                          null,
                          8,
                          Pe
                        ),
                        b(
                          `div`,
                          {
                            class: `h-t-body-1`,
                            innerHTML: x(d)(
                              `components.navigation.leavePopup.horizons.description`
                            ),
                          },
                          null,
                          8,
                          q
                        ),
                        b(`div`, Fe, [
                          b(`div`, Ie, [
                            L(
                              x(o),
                              {
                                variant: `button-look`,
                                "button-look-props": { size: `xLarge` },
                                "data-click-id": `hgr-${x(
                                  i
                                )}-horizons-leave-popup-cta-button`,
                                "data-click-sync": `true`,
                                to: x(p),
                              },
                              {
                                default: n(() => [
                                  P(
                                    F(
                                      x(d)(
                                        `components.navigation.leavePopup.horizons.button`
                                      )
                                    ),
                                    1
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              [`data-click-id`, `to`]
                            ),
                          ]),
                          b(
                            `p`,
                            Le,
                            F(
                              x(d)(
                                `components.navigation.leavePopup.horizons.buttonHint`
                              )
                            ),
                            1
                          ),
                        ]),
                      ]),
                      b(`div`, J, [
                        L(
                          a,
                          {
                            media: {
                              src: `949e7792-53ad-4f01-4c9a-a45158e40d00`,
                              alt: x(d)(
                                `components.navigation.leavePopup.horizons.title`
                              ),
                            },
                          },
                          null,
                          8,
                          [`media`]
                        ),
                        b(
                          `a`,
                          {
                            class: `navigation-leave-popup__close-button`,
                            "data-click-id": `hgr-${x(
                              i
                            )}-horizons-leave-popup-cross-button`,
                            onClick: (t[0] ||= C(
                              (e) => f(`close`),
                              [`prevent`]
                            )),
                          },
                          [L(x(M), { name: `ic-cross-24` })],
                          8,
                          Re
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                b(
                  `a`,
                  {
                    class: `navigation-leave-popup__backdrop`,
                    "data-click-id": `hgr-${x(
                      i
                    )}-horizons-leave-popup-backdrop`,
                    "data-click-sync": `true`,
                    onClick: (t[1] ||= (e) => f(`close`)),
                  },
                  null,
                  8,
                  ze
                ),
              ],
              8,
              Me
            )
          );
        }
      );
    },
  }),
  Ve = e({ default: () => He }),
  He = Object.assign(V(Be, [[`__scopeId`, `data-v-682235b9`]]), {
    __name: `NavigationLeavePopup`,
  }),
  Ue = Object.assign(
    V(
      I({
        __name: `NavigationLocaleSelector`,
        emits: [`toggle-menu`],
        setup(e, { expose: t, emit: n }) {
          let r = n,
            { pageName: a, themeData: o } = B(),
            { closeChatbot: s } = se(),
            { getPageLink: c } = oe(),
            { t: l } = H(),
            d = fe.map((e) => ({
              id: e.languageCode,
              icon: e.icon,
              countryName: e.country,
              countryLang: e.language,
              countryCode: e.languageDisplayCode,
              hiddenText: [e.enLanguage, e.enCountry],
            })),
            f = E(!1),
            p = E(d.find((e) => e.id === o.value.language.code) || d[0]),
            m = E(null),
            g = () => {
              s(), r(`toggle-menu`);
            },
            _ = () => {
              (f.value = !0), g();
            },
            v = () => {
              (f.value = !1),
                p.value.id !== o.value.language.code && b(p.value.id);
            },
            y = (e) => c(e, a.value),
            b = (e) => {
              let t = y(e);
              window.open(t, `_self`);
            };
          return (
            t({
              closeLanguageSelector: () => {
                m.value?.close();
              },
            }),
            (e, t) => (
              u(),
              A(
                x(i),
                {
                  ref_key: `languageSelectorRef`,
                  ref: m,
                  modelValue: x(p),
                  "onUpdate:modelValue": (t[0] ||= (e) =>
                    h(p) ? (p.value = e) : null),
                  "country-options": x(d),
                  "popover-props": {
                    zIndex: 999999,
                    mobileBreakpoint: 1140,
                    mobileProps: {
                      customClass: `theme-base theme-hWebsites mode-light`,
                      fullscreen: !0,
                      startAt: `56px`,
                      endAt: `72px`,
                      isDraggingEnabled: !1,
                    },
                  },
                  "text-translations": {
                    title: x(l)(`components.navigation.languageSelector.title`),
                    searchPlaceholder: x(l)(
                      `components.navigation.languageSelector.searchPlaceholder`
                    ),
                    noResults: x(l)(
                      `components.navigation.languageSelector.noResults`
                    ),
                  },
                  "data-qa": `locale-selector`,
                  class: `navigation-locale-selector`,
                  onOpen: _,
                  onClose: v,
                },
                null,
                8,
                [`modelValue`, `country-options`, `text-translations`]
              )
            )
          );
        },
      }),
      [[`__scopeId`, `data-v-c58bae36`]]
    ),
    { __name: `NavigationLocaleSelector` }
  ),
  We = { class: `navigation-menu-item__icon` },
  Ge = { class: `navigation-menu-item__link-data` },
  Ke = { key: 0, class: `navigation-menu-item__title-container` },
  qe = { key: 0, class: `navigation-menu-item__title h-t-body-2-bold` },
  Je = { key: 1, class: `navigation-menu-item__description h-t-body-2` },
  Ye = Object.assign(
    V(
      I({
        __name: `NavigationMenuItem`,
        props: {
          item: { type: Object, required: !0 },
          active: { type: Boolean, default: !1 },
        },
        emits: [`link-click`],
        setup(e, { emit: t }) {
          let r = e,
            i = t,
            { getRouteLink: a } = R(),
            { direction: o } = B(),
            s = v(() =>
              r.item.link
                ? r.item.link
                : r.item.pageName
                ? a(r.item.pageName)
                : ``
            );
          return (t, r) => {
            let a = z;
            return (
              u(),
              A(
                a,
                {
                  class: `navigation-menu-item`,
                  to: x(s),
                  target: e.item.linkTarget,
                  rel: e.item.linkRel,
                  "data-click-id": `hgr-navigation-menu-item-${e.item.name}`,
                  "data-qa": `navigation-menu-dropdown-item-${e.item.name}`,
                  dir: x(o),
                  onClick: (r[0] ||= (e) => i(`link-click`)),
                },
                {
                  default: n(() => [
                    b(`div`, We, [
                      e.active
                        ? (u(),
                          A(
                            x(M),
                            {
                              key: 0,
                              name: e.item.icon,
                              color: `h-color-neutral-800`,
                              dimensions: `20px`,
                            },
                            null,
                            8,
                            [`name`]
                          ))
                        : D(``, !0),
                    ]),
                    b(`div`, Ge, [
                      e.item.title || e.item.badge
                        ? (u(),
                          S(`div`, Ke, [
                            e.item.title
                              ? (u(), S(`div`, qe, F(e.item.title), 1))
                              : D(``, !0),
                            e.item.badge
                              ? (u(),
                                A(
                                  x(O),
                                  { key: 1, color: e.item.badgeColor },
                                  {
                                    default: n(() => [P(F(e.item.badge), 1)]),
                                    _: 1,
                                  },
                                  8,
                                  [`color`]
                                ))
                              : D(``, !0),
                          ]))
                        : D(``, !0),
                      e.item.description
                        ? (u(), S(`div`, Je, F(e.item.description), 1))
                        : D(``, !0),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                [`to`, `target`, `rel`, `data-click-id`, `data-qa`, `dir`]
              )
            );
          };
        },
      }),
      [[`__scopeId`, `data-v-60fdf7c0`]]
    ),
    { __name: `NavigationMenuItem` }
  ),
  Xe = { key: 0, class: `navigation-menu-highlight--title h-t-body-1-bold` },
  Ze = { key: 1, class: `navigation-menu-highlight--description h-t-body-2` },
  Y = Object.assign(
    V(
      I({
        __name: `NavigationMenuHighlight`,
        props: {
          item: { type: Object, required: !0 },
          active: { type: Boolean, default: !1 },
        },
        emits: [`link-click`],
        setup(e, { emit: t }) {
          let r = e,
            i = t,
            { getRouteLink: a } = R(),
            { direction: o } = B(),
            s = v(() =>
              r.item.link
                ? r.item.link
                : r.item.pageName
                ? a(r.item.pageName)
                : ``
            );
          return (t, r) => {
            let a = z;
            return (
              u(),
              A(
                a,
                {
                  class: `navigation-menu-highlight`,
                  to: x(s),
                  target: e.item.linkTarget,
                  rel: e.item.linkRel,
                  "data-click-id": `hgr-navigation-menu-highlight-${e.item.name}`,
                  "data-qa": `navigation-menu-dropdown-item-${e.item.name}`,
                  dir: x(o),
                  onClick: (r[0] ||= (e) => i(`link-click`)),
                },
                {
                  default: n(() => [
                    b(`div`, null, [
                      e.item.title
                        ? (u(), S(`div`, Xe, F(e.item.title), 1))
                        : D(``, !0),
                      e.item.description
                        ? (u(), S(`div`, Ze, F(e.item.description), 1))
                        : D(``, !0),
                    ]),
                    e.active && e.item.icon
                      ? (u(),
                        A(
                          x(M),
                          {
                            key: 0,
                            name: e.item.icon,
                            color: `h-color-neutral-800`,
                            class: `navigation-menu-highlight--icon`,
                            dimensions: `20px`,
                          },
                          null,
                          8,
                          [`name`]
                        ))
                      : D(``, !0),
                  ]),
                  _: 1,
                },
                8,
                [`to`, `target`, `rel`, `data-click-id`, `data-qa`, `dir`]
              )
            );
          };
        },
      }),
      [[`__scopeId`, `data-v-2dbf40d9`]]
    ),
    { __name: `NavigationMenuHighlight` }
  ),
  Qe = { key: 0, class: `navigation-menu-image--title h-t-body-2-bold` },
  $e = { key: 1, class: `navigation-menu-image--description h-t-body-2` },
  et = Object.assign(
    V(
      I({
        __name: `NavigationMenuImage`,
        props: {
          item: { type: Object, required: !0 },
          active: { type: Boolean, default: !1 },
        },
        emits: [`link-click`],
        setup(e, { emit: t }) {
          let { direction: r } = B(),
            i = e,
            a = t,
            { getRouteLink: o } = R(),
            s = v(() =>
              i.item.link
                ? i.item.link
                : i.item.pageName
                ? o(i.item.pageName)
                : ``
            );
          return (t, i) => {
            let o = ae,
              c = z;
            return (
              u(),
              A(
                c,
                {
                  class: `navigation-menu-image`,
                  to: x(s),
                  target: e.item.linkTarget,
                  rel: e.item.linkRel,
                  dir: x(r),
                  "data-click-id": `hgr-navigation-menu-image-${e.item.name}`,
                  "data-qa": `navigation-menu-dropdown-item-${e.item.name}`,
                  onClick: (i[0] ||= (e) => a(`link-click`)),
                },
                {
                  default: n(() => [
                    e.item.image
                      ? (u(),
                        A(
                          o,
                          {
                            key: 0,
                            class: `navigation-menu-image--icon`,
                            media: e.item.image,
                          },
                          null,
                          8,
                          [`media`]
                        ))
                      : D(``, !0),
                    b(`div`, null, [
                      e.item.title
                        ? (u(),
                          S(`div`, Qe, [
                            b(`span`, null, [
                              P(F(e.item.title) + ` `, 1),
                              e.item.badge
                                ? (u(),
                                  A(
                                    x(O),
                                    {
                                      key: 0,
                                      color: e.item.badgeColor,
                                      class: `h-ml-8`,
                                    },
                                    {
                                      default: n(() => [P(F(e.item.badge), 1)]),
                                      _: 1,
                                    },
                                    8,
                                    [`color`]
                                  ))
                                : D(``, !0),
                            ]),
                            e.active && e.item.icon
                              ? (u(),
                                A(
                                  x(M),
                                  {
                                    key: 0,
                                    name: e.item.icon,
                                    color: `h-color-neutral-800`,
                                    class: `navigation-menu-image--icon`,
                                    dimensions: `20px`,
                                  },
                                  null,
                                  8,
                                  [`name`]
                                ))
                              : D(``, !0),
                          ]))
                        : D(``, !0),
                      e.item.description
                        ? (u(), S(`div`, $e, F(e.item.description), 1))
                        : D(``, !0),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                [`to`, `target`, `rel`, `dir`, `data-click-id`, `data-qa`]
              )
            );
          };
        },
      }),
      [[`__scopeId`, `data-v-e80cff06`]]
    ),
    { __name: `NavigationMenuImage` }
  ),
  tt = { key: 0, class: `navigation-menu-static--title h-t-body-1-bold` },
  X = { key: 1, class: `navigation-menu-static--description h-t-body-2` },
  Z = Object.assign(
    V(
      I({
        __name: `NavigationMenuStatic`,
        props: {
          item: { type: Object, required: !0 },
          active: { type: Boolean, default: !1 },
        },
        emits: [`link-click`],
        setup(e, { emit: t }) {
          let r = e,
            i = t,
            { getRouteLink: a } = R(),
            { direction: o } = B(),
            s = v(() =>
              r.item.link
                ? r.item.link
                : r.item.pageName
                ? a(r.item.pageName)
                : ``
            );
          return (t, r) => {
            let a = z;
            return (
              u(),
              A(
                a,
                {
                  class: `navigation-menu-static`,
                  to: x(s),
                  target: e.item.linkTarget,
                  rel: e.item.linkRel,
                  "data-click-id": `hgr-navigation-menu-static-${e.item.name}`,
                  "data-qa": `navigation-menu-dropdown-item-${e.item.name}`,
                  dir: x(o),
                  onClick: (r[0] ||= (e) => i(`link-click`)),
                },
                {
                  default: n(() => [
                    b(`div`, null, [
                      e.item.title
                        ? (u(),
                          S(`div`, tt, [
                            P(F(e.item.title) + ` `, 1),
                            e.active && e.item.icon
                              ? (u(),
                                A(
                                  x(M),
                                  {
                                    key: 0,
                                    name: e.item.icon,
                                    dimensions: `20px`,
                                    color: `h-color-neutral-800`,
                                    class: `navigation-menu-static--icon`,
                                  },
                                  null,
                                  8,
                                  [`name`]
                                ))
                              : D(``, !0),
                          ]))
                        : D(``, !0),
                      e.item.description
                        ? (u(), S(`div`, X, F(e.item.description), 1))
                        : D(``, !0),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                [`to`, `target`, `rel`, `data-click-id`, `data-qa`, `dir`]
              )
            );
          };
        },
      }),
      [[`__scopeId`, `data-v-f5c660b1`]]
    ),
    { __name: `NavigationMenuStatic` }
  ),
  nt = [`dir`],
  rt = { key: 0, class: `navigation-mobile-menu__step-wrapper` },
  it = { class: `navigation-mobile-menu__second-step` },
  at = { class: `navigation-mobile-menu__currency-list` },
  Q = [`onClick`],
  ot = { key: 1, class: `navigation-mobile-menu__step-wrapper` },
  st = { class: `navigation-mobile-menu__second-step` },
  $ = { key: 2, class: `navigation-mobile-menu__step-wrapper` },
  ct = { key: 0, class: `navigation-mobile-menu__first-step` },
  lt = [`data-click-id`, `onClick`],
  ut = { class: `navigation-mobile-menu__main-section--title h-t-body-1` },
  dt = { class: `navigation-mobile-menu__footer-item` },
  ft = { class: `h-t-body-2-bold` },
  pt = I({
    __name: `NavigationMobileMenu`,
    props: {
      minimal: { type: Boolean, default: !1 },
      customCta: { type: Boolean, default: !1 },
      horizonsMultisite: { type: Boolean, default: !1 },
    },
    emits: [`link-click`],
    setup(e, { emit: t }) {
      let { themeData: r, direction: i, pageName: a, activeCurrency: o } = B(),
        { t: s } = H(),
        { getNavMenuItems: c, getMenuData: l } = ce(),
        { getLoginLink: p } = R(),
        { isBannerVisible: m } = de(),
        h = e,
        _ = t,
        y = E(),
        C = E(!1),
        T = E(null),
        O = v(() => r.value.currencies),
        k = v(() => a.value === `recommended`),
        j = v(() => c(h.horizonsMultisite ? `horizons` : `mobile`)),
        ee = v(() => p().href),
        I = v(() =>
          y.value
            ? (l(y.value.name) || []).reduce((e, t) => [...e, ...t.column], [])
            : []
        ),
        te = () => {
          T.value?.closeLanguageSelector(), (C.value = !C.value);
        },
        ne = (e) => {
          if (!e || e === o.value.code) {
            C.value = !1;
            return;
          }
          if (!O.value.some(({ code: t }) => t === e)) {
            C.value = !1;
            return;
          }
          le.set(ge, e, { domain: re(), path: `/`, expires: 30, secure: !0 }),
            (C.value = !1),
            window.location.reload();
        };
      return (t, r) => {
        let a = z;
        return (
          u(),
          S(
            `div`,
            {
              class: N([
                `navigation-mobile-menu`,
                { "navigation-mobile-menu--under-banner": x(m) },
              ]),
              dir: x(i),
            },
            [
              L(
                f,
                { name: `fade` },
                {
                  default: n(() => [
                    x(C)
                      ? (u(),
                        S(`div`, rt, [
                          b(`div`, it, [
                            b(
                              `a`,
                              {
                                class: `navigation-mobile-menu__go-back-btn h-t-body-2-bold`,
                                "data-click-id": `hgr-navigation-menu-back`,
                                "data-click-sync": `true`,
                                onClick: (r[0] ||= (e) => (C.value = !1)),
                              },
                              [
                                L(x(M), { name: `ic-chevron-small-left-16` }),
                                P(
                                  ` ` +
                                    F(
                                      x(s)(`components.navigation.goBackTitle`)
                                    ),
                                  1
                                ),
                              ]
                            ),
                            b(`div`, at, [
                              (u(!0),
                              S(
                                g,
                                null,
                                d(
                                  x(O),
                                  (e) => (
                                    u(),
                                    S(
                                      `a`,
                                      {
                                        key: e.code,
                                        class: N([
                                          `navigation-mobile-menu__currency-item h-t-body-1-bold`,
                                          {
                                            "navigation-mobile-menu__currency-item--active":
                                              e.code === x(o).code,
                                          },
                                        ]),
                                        "data-click-id": `hgr-navigation-menu-currency`,
                                        "data-click-sync": `true`,
                                        onClick: (t) => ne(e.code),
                                      },
                                      F(e.code),
                                      11,
                                      Q
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                        ]))
                      : x(y)
                      ? (u(),
                        S(`div`, ot, [
                          b(`div`, st, [
                            b(
                              `a`,
                              {
                                class: `navigation-mobile-menu__go-back-btn h-t-body-2-bold`,
                                "data-click-id": `hgr-navigation-menu-back`,
                                "data-click-sync": `true`,
                                onClick: (r[1] ||= (e) => (y.value = void 0)),
                              },
                              [
                                L(x(M), { name: `ic-chevron-small-left-16` }),
                                P(` ` + F(x(s)(x(y).slug)), 1),
                              ]
                            ),
                            (u(!0),
                            S(
                              g,
                              null,
                              d(
                                x(I),
                                (e, t) => (
                                  u(),
                                  S(`div`, { key: t }, [
                                    (u(!0),
                                    S(
                                      g,
                                      null,
                                      d(
                                        e.items,
                                        (e) => (
                                          u(),
                                          A(
                                            Ye,
                                            {
                                              key: e.title,
                                              item: e,
                                              active: ``,
                                              onLinkClick: (r[2] ||= (e) =>
                                                _(`link-click`)),
                                            },
                                            null,
                                            8,
                                            [`item`]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                    e.highlightedLink
                                      ? (u(),
                                        A(
                                          Y,
                                          {
                                            key: 0,
                                            item: e.highlightedLink,
                                            active: ``,
                                            class: `navigation-mobile-menu__bottom-link`,
                                            onLinkClick: (r[3] ||= (e) =>
                                              _(`link-click`)),
                                          },
                                          null,
                                          8,
                                          [`item`]
                                        ))
                                      : D(``, !0),
                                    e.imageLink
                                      ? (u(),
                                        A(
                                          et,
                                          {
                                            key: 1,
                                            item: e.imageLink,
                                            active: ``,
                                            class: `navigation-mobile-menu__bottom-link`,
                                            onLinkClick: (r[4] ||= (e) =>
                                              _(`link-click`)),
                                          },
                                          null,
                                          8,
                                          [`item`]
                                        ))
                                      : D(``, !0),
                                    e.staticLink
                                      ? (u(),
                                        A(
                                          Z,
                                          {
                                            key: 2,
                                            item: e.staticLink,
                                            active: ``,
                                            class: `navigation-mobile-menu__bottom-link`,
                                            onLinkClick: (r[5] ||= (e) =>
                                              _(`link-click`)),
                                          },
                                          null,
                                          8,
                                          [`item`]
                                        ))
                                      : D(``, !0),
                                  ])
                                )
                              ),
                              128
                            )),
                          ]),
                        ]))
                      : (u(),
                        S(`div`, $, [
                          e.minimal
                            ? D(``, !0)
                            : (u(),
                              S(`div`, ct, [
                                (u(!0),
                                S(
                                  g,
                                  null,
                                  d(
                                    x(j),
                                    (e, t) => (
                                      u(),
                                      S(
                                        g,
                                        null,
                                        [
                                          e.isSeparator
                                            ? (u(),
                                              S(
                                                `div`,
                                                {
                                                  key: `${e.name}-${t}-separator`,
                                                  class: `navigation-mobile-menu__separator h-t-body-2-medium`,
                                                },
                                                [
                                                  P(F(x(s)(e.slug)) + ` `, 1),
                                                  L(x(w), {
                                                    class: `navigation-mobile-menu__separator-line`,
                                                  }),
                                                ]
                                              ))
                                            : e.isExpandable
                                            ? (u(),
                                              S(
                                                `a`,
                                                {
                                                  key: `${e.name}-${t}-expandable`,
                                                  "data-click-id": `hgr-navigation-mobile-menu-section-${e.name}`,
                                                  "data-click-sync": `true`,
                                                  class: `navigation-mobile-menu__main-section`,
                                                  onClick: (t) => (y.value = e),
                                                },
                                                [
                                                  b(
                                                    `span`,
                                                    ut,
                                                    F(x(s)(e.slug)),
                                                    1
                                                  ),
                                                  L(
                                                    x(M),
                                                    {
                                                      name: `ic-chevron-small-right-16`,
                                                      class: N({
                                                        "u-rotate-180":
                                                          x(i) === `rtl`,
                                                      }),
                                                      color: `h-color-neutral-950`,
                                                    },
                                                    null,
                                                    8,
                                                    [`class`]
                                                  ),
                                                ],
                                                8,
                                                lt
                                              ))
                                            : e.isHighlight
                                            ? (u(),
                                              S(
                                                `div`,
                                                {
                                                  key: `${e.name}-${t}-highlight`,
                                                  class: `navigation-mobile-menu__highlight-wrapper`,
                                                },
                                                [
                                                  (u(!0),
                                                  S(
                                                    g,
                                                    null,
                                                    d(
                                                      x(l)(e.name),
                                                      (t) => (
                                                        u(),
                                                        S(
                                                          g,
                                                          null,
                                                          [
                                                            (u(!0),
                                                            S(
                                                              g,
                                                              null,
                                                              d(
                                                                t.column,
                                                                (t, n) => (
                                                                  u(),
                                                                  S(
                                                                    g,
                                                                    null,
                                                                    [
                                                                      t.highlightedLink
                                                                        ? (u(),
                                                                          A(
                                                                            Y,
                                                                            {
                                                                              key: `${e.name}-${n}-highlight-item`,
                                                                              item: t.highlightedLink,
                                                                              active: ``,
                                                                              onLinkClick:
                                                                                (r[6] ||=
                                                                                  (
                                                                                    e
                                                                                  ) =>
                                                                                    _(
                                                                                      `link-click`
                                                                                    )),
                                                                            },
                                                                            null,
                                                                            8,
                                                                            [
                                                                              `item`,
                                                                            ]
                                                                          ))
                                                                        : D(
                                                                            ``,
                                                                            !0
                                                                          ),
                                                                    ],
                                                                    64
                                                                  )
                                                                )
                                                              ),
                                                              256
                                                            )),
                                                          ],
                                                          64
                                                        )
                                                      )
                                                    ),
                                                    256
                                                  )),
                                                ]
                                              ))
                                            : (u(),
                                              S(
                                                `div`,
                                                {
                                                  key: `${e}-${t}-link`,
                                                  class: `navigation-mobile-menu__main-section`,
                                                },
                                                [
                                                  L(
                                                    a,
                                                    {
                                                      to: e.link,
                                                      target: e.linkTarget,
                                                      rel: e.linkRel,
                                                      "data-click-id": `hgr-navigation-menu-${e.name}`,
                                                      class: `navigation-mobile-menu__main-section--title h-t-body-1`,
                                                      onClick: (r[7] ||= (e) =>
                                                        _(`link-click`)),
                                                    },
                                                    {
                                                      default: n(() => [
                                                        P(F(x(s)(e.slug)), 1),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    [
                                                      `to`,
                                                      `target`,
                                                      `rel`,
                                                      `data-click-id`,
                                                    ]
                                                  ),
                                                ]
                                              )),
                                        ],
                                        64
                                      )
                                    )
                                  ),
                                  256
                                )),
                              ])),
                        ])),
                  ]),
                  _: 1,
                }
              ),
              b(`div`, dt, [
                x(k)
                  ? D(``, !0)
                  : (u(),
                    A(
                      Ue,
                      {
                        key: 0,
                        ref_key: `languageSelectorRef`,
                        ref: T,
                        onToggleMenu: (r[8] ||= (e) => (C.value = !1)),
                      },
                      null,
                      512
                    )),
                x(O).length > 1
                  ? (u(),
                    S(
                      `div`,
                      {
                        key: 1,
                        class: N([
                          `navigation-mobile-menu__localization h-t-body-2`,
                          { rtl: x(i) === `rtl` },
                        ]),
                        "data-click-id": `hgr-navigation-toggle_currency_selector`,
                        "data-click-sync": `true`,
                        onClick: te,
                      },
                      [
                        b(
                          `div`,
                          ft,
                          F(x(s)(`components.navigation.menuItems.currency`)),
                          1
                        ),
                      ],
                      2
                    ))
                  : D(``, !0),
                e.customCta
                  ? D(``, !0)
                  : (u(),
                    A(
                      a,
                      {
                        key: 2,
                        id: `hgr-topmenu-login`,
                        "data-click-id": `hgr-navigation-menu-login`,
                        color: `neutral`,
                        variant: `outlineStrong`,
                        size: `xLarge`,
                        class: `navigation-mobile-menu__localization h-t-body-2-bold`,
                        to: x(ee),
                        "aria-label": x(s)(`components.navigation.myAccount`),
                      },
                      {
                        default: n(() => [
                          L(x(M), {
                            name: `ic-user-24`,
                            color: `h-fg-neutral-default`,
                          }),
                          P(
                            ` ` + F(x(s)(`components.navigation.myAccount`)),
                            1
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      [`to`, `aria-label`]
                    )),
              ]),
            ],
            10,
            nt
          )
        );
      };
    },
  }),
  mt = e({ default: () => ht }),
  ht = Object.assign(V(pt, [[`__scopeId`, `data-v-c8879f38`]]), {
    __name: `NavigationMobileMenu`,
  }),
  gt = { class: `navigation-menu-item-redesign__link-data` },
  _t = { class: `navigation-menu-item-redesign__title-container-wrapper` },
  vt = { key: 0, class: `navigation-menu-item-redesign__title-container` },
  yt = { class: `navigation-menu-item-redesign__icon` },
  bt = {
    key: 0,
    class: `navigation-menu-item-redesign__title h-t-body-2-bold`,
  },
  xt = {
    key: 0,
    class: `navigation-menu-item-redesign__description h-t-body-2`,
  },
  St = Object.assign(
    V(
      I({
        __name: `NavigationMenuItemRedesign`,
        props: {
          item: { type: Object, required: !0 },
          active: { type: Boolean, default: !1 },
        },
        emits: [`link-click`],
        setup(e, { emit: t }) {
          let r = e,
            i = t,
            { getRouteLink: a } = R(),
            { direction: o } = B(),
            s = v(() =>
              r.item.link
                ? r.item.link
                : r.item.pageName
                ? a(r.item.pageName)
                : ``
            );
          return (t, r) => {
            let a = z;
            return (
              u(),
              A(
                a,
                {
                  class: `navigation-menu-item-redesign`,
                  to: x(s),
                  target: e.item.linkTarget,
                  rel: e.item.linkRel,
                  "data-click-id": `hgr-navigation-menu-item-${e.item.name}`,
                  "data-qa": `navigation-menu-dropdown-item-${e.item.name}`,
                  dir: x(o),
                  onClick: (r[0] ||= (e) => i(`link-click`)),
                },
                {
                  default: n(() => [
                    b(`div`, gt, [
                      b(`div`, _t, [
                        e.item.title || e.item.badge
                          ? (u(),
                            S(`div`, vt, [
                              b(`div`, yt, [
                                e.active
                                  ? (u(),
                                    A(
                                      x(M),
                                      {
                                        key: 0,
                                        name: e.item.icon,
                                        color: `h-fg-neutral-default`,
                                        dimensions: `20px`,
                                      },
                                      null,
                                      8,
                                      [`name`]
                                    ))
                                  : D(``, !0),
                              ]),
                              e.item.title
                                ? (u(), S(`div`, bt, F(e.item.title), 1))
                                : D(``, !0),
                            ]))
                          : D(``, !0),
                        e.item.badge && typeof e.item.badge == `object`
                          ? (u(),
                            A(
                              x(O),
                              {
                                key: 1,
                                "background-color":
                                  e.item.badge.backgroundColor ??
                                  `h-bg-brand-tint-default`,
                                "text-color":
                                  e.item.badge.textColor ??
                                  `h-fg-brand-default`,
                              },
                              {
                                default: n(() => [P(F(e.item.badge.text), 1)]),
                                _: 1,
                              },
                              8,
                              [`background-color`, `text-color`]
                            ))
                          : e.item.badge && typeof e.item.badge == `string`
                          ? (u(),
                            A(
                              x(O),
                              { key: 2, color: e.item.badgeColor },
                              {
                                default: n(() => [P(F(e.item.badge), 1)]),
                                _: 1,
                              },
                              8,
                              [`color`]
                            ))
                          : D(``, !0),
                      ]),
                      e.item.description
                        ? (u(), S(`div`, xt, F(e.item.description), 1))
                        : D(``, !0),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                [`to`, `target`, `rel`, `data-click-id`, `data-qa`, `dir`]
              )
            );
          };
        },
      }),
      [[`__scopeId`, `data-v-a73f210c`]]
    ),
    { __name: `NavigationMenuItemRedesign` }
  ),
  Ct = { class: `navigation-menu-promo-item__head` },
  wt = { class: `navigation-menu-promo-item__head-eyebrow` },
  Tt = { key: 0, class: `h-t-body-3-bold t-uppercase` },
  Et = { key: 0, class: `navigation-menu-promo-item__image` },
  Dt = { class: `navigation-menu-promo-item__body` },
  Ot = { class: `navigation-menu-redesign__promo-title h-t-heading-3-regular` },
  kt = { key: 0, class: `navigation-menu-promo-item__description h-t-body-2` },
  At = { class: `navigation-menu-promo-item__cta` },
  jt = Object.assign(
    V(
      I({
        __name: `NavigationMenuPromoItem`,
        props: {
          promo: { type: Object, required: !0 },
          mobile: { type: Boolean, default: !1 },
        },
        emits: [`link-click`],
        setup(e, { emit: t }) {
          let { getRouteLink: r } = R(),
            i = e,
            o = t,
            s = v(() => Ce(i.promo.backgroundColor)),
            c = v(() => {
              let e = i.mobile
                ? i.promo.backgroundMobileImage
                : i.promo.backgroundImage;
              return e
                ? `url(https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/${e}/sharpen=0)`
                : ``;
            }),
            l = v(() =>
              i.promo
                ? i.promo.link
                  ? i.promo.link
                  : i.promo.pageName
                  ? r(i.promo.pageName)
                  : ``
                : ``
            );
          return (t, r) => {
            let i = ae,
              d = z;
            return (
              u(),
              A(
                d,
                T(
                  {
                    class: [
                      `navigation-menu-promo-item`,
                      { "navigation-menu-promo-item--mobile": e.mobile },
                    ],
                    to: x(l),
                    target: e.promo.linkTarget,
                    rel: e.promo.linkRel,
                    "data-click-id": `hgr-navigation-redesign-promo-${e.promo.name}`,
                    "data-qa": `navigation-menu-redesign-promo-${e.promo.name}`,
                  },
                  x(s),
                  {
                    style: { "--promo-background-image": x(c) },
                    onClick: (r[0] ||= (e) => o(`link-click`)),
                  }
                ),
                {
                  default: n(() => [
                    b(`div`, Ct, [
                      b(`div`, wt, [
                        e.promo.eyebrow
                          ? (u(), S(`span`, Tt, F(e.promo.eyebrow), 1))
                          : D(``, !0),
                        e.promo.badge
                          ? (u(),
                            A(
                              x(O),
                              {
                                key: 1,
                                "background-color":
                                  e.promo.badge.backgroundColor,
                                "text-color": e.promo.badge.textColor,
                              },
                              {
                                default: n(() => [P(F(e.promo.badge.text), 1)]),
                                _: 1,
                              },
                              8,
                              [`background-color`, `text-color`]
                            ))
                          : D(``, !0),
                      ]),
                      L(x(M), {
                        name: `ic-arrow-up-right-24`,
                        color: `h-color-neutral-0`,
                        dimensions: `20px`,
                      }),
                    ]),
                    e.promo.image && !e.mobile
                      ? (u(),
                        S(`div`, Et, [
                          L(i, { media: e.promo.image }, null, 8, [`media`]),
                        ]))
                      : D(``, !0),
                    b(`div`, Dt, [
                      b(`div`, Ot, F(e.promo.title), 1),
                      e.promo.description
                        ? (u(), S(`div`, kt, F(e.promo.description), 1))
                        : D(``, !0),
                      b(`div`, At, [
                        L(
                          x(a),
                          {
                            color: `neutral`,
                            "data-qa": `navigation-promo-cta-button`,
                          },
                          {
                            default: n(() => [P(F(e.promo.ctaLabel), 1)]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                16,
                [
                  `class`,
                  `to`,
                  `target`,
                  `rel`,
                  `data-click-id`,
                  `data-qa`,
                  `style`,
                ]
              )
            );
          };
        },
      }),
      [[`__scopeId`, `data-v-8fb0b30f`]]
    ),
    { __name: `NavigationMenuPromoItem` }
  ),
  Mt = [`dir`],
  Nt = {
    key: `second-step`,
    class: `navigation-mobile-menu-redesign__step-wrapper`,
  },
  Pt = { class: `navigation-mobile-menu-redesign__second-step` },
  Ft = { class: `navigation-mobile-menu-redesign__community` },
  It = {
    key: 0,
    class: `navigation-mobile-menu-redesign__community-title h-t-body-3-bold t-uppercase`,
  },
  Lt = { class: `navigation-mobile-menu-redesign__community-links` },
  Rt = {
    key: `first-step`,
    class: `navigation-mobile-menu-redesign__step-wrapper`,
  },
  zt = { class: `navigation-mobile-menu-redesign__first-step` },
  Bt = [`data-click-id`, `onClick`, `onKeydown`],
  Vt = { class: `navigation-mobile-menu-redesign__row-label` },
  Ht = { class: `h-t-body-1` },
  Ut = { class: `navigation-mobile-menu-redesign__row-label` },
  Wt = { class: `h-t-body-1` },
  Gt = { class: `navigation-mobile-menu-redesign__footer-item` },
  Kt = I({
    __name: `NavigationMobileMenuRedesign`,
    props: { customCta: { type: Boolean, default: !1 } },
    emits: [`link-click`],
    setup(e, { emit: t }) {
      let { direction: r } = B(),
        { t: i } = H(),
        { getMobileSectionsRedesign: a } = ce(),
        { getLoginLink: o, getRouteLink: s } = R(),
        { isBannerVisible: c } = de(),
        l = t,
        p = { name: `separator` },
        m = v(() => a()),
        h = E(),
        _ = v(() => o().href),
        y = v(() => {
          let e = h.value;
          if (!e) return [];
          let t =
            e.panel?.items?.length &&
            (e.sideItems?.length || e.panel?.footerItems?.length);
          return [
            ...(e.sideItems ?? []),
            ...(t && e.sideItems?.length ? [p] : []),
            ...(e.panel?.items ?? []),
            ...(t && e.panel?.footerItems?.length ? [p] : []),
            ...(e.panel?.footerItems ?? []),
          ];
        }),
        T = v(() => h.value?.panel?.promo),
        O = (e) => {
          e.kind === `drill` && (h.value = e);
        },
        k = (e) => (e.link ? e.link : e.pageName ? s(e.pageName) : ``);
      return (t, a) => {
        let o = z;
        return (
          u(),
          S(
            `div`,
            {
              class: N([
                `navigation-mobile-menu-redesign`,
                { "navigation-mobile-menu-redesign--under-banner": x(c) },
              ]),
              dir: x(r),
            },
            [
              L(
                f,
                { name: `fade` },
                {
                  default: n(() => [
                    x(h)
                      ? (u(),
                        S(`div`, Nt, [
                          b(`div`, Pt, [
                            b(
                              `a`,
                              {
                                class: `navigation-mobile-menu-redesign__go-back-btn h-t-body-2-bold`,
                                "data-click-id": `hgr-navigation-redesign-menu-back`,
                                "data-click-sync": `true`,
                                role: `button`,
                                tabindex: `0`,
                                onClick: (a[0] ||= (e) => (h.value = void 0)),
                                onKeydown: [
                                  (a[1] ||= j(
                                    (e) => (h.value = void 0),
                                    [`enter`]
                                  )),
                                  (a[2] ||= j(
                                    C((e) => (h.value = void 0), [`prevent`]),
                                    [`space`]
                                  )),
                                ],
                              },
                              [
                                L(x(M), { name: `ic-chevron-small-left-16` }),
                                P(` ` + F(x(h).title), 1),
                              ],
                              32
                            ),
                            (u(!0),
                            S(
                              g,
                              null,
                              d(
                                x(y),
                                (e) => (
                                  u(),
                                  S(
                                    g,
                                    null,
                                    [
                                      e.name === `separator`
                                        ? (u(),
                                          A(x(w), {
                                            key: `${e.name}-separator`,
                                            class: `navigation-mobile-menu-redesign__separator`,
                                          }))
                                        : (u(),
                                          A(
                                            St,
                                            {
                                              key: e.name,
                                              item: e,
                                              active: ``,
                                              onLinkClick: (a[3] ||= (e) =>
                                                l(`link-click`)),
                                            },
                                            null,
                                            8,
                                            [`item`]
                                          )),
                                    ],
                                    64
                                  )
                                )
                              ),
                              256
                            )),
                            x(h).communityLinks?.length
                              ? (u(),
                                S(
                                  g,
                                  { key: 0 },
                                  [
                                    L(x(w), {
                                      class: `navigation-mobile-menu-redesign__separator`,
                                    }),
                                    b(`div`, Ft, [
                                      x(h).communityTitle
                                        ? (u(),
                                          S(
                                            `div`,
                                            It,
                                            F(x(h).communityTitle),
                                            1
                                          ))
                                        : D(``, !0),
                                      b(`div`, Lt, [
                                        (u(!0),
                                        S(
                                          g,
                                          null,
                                          d(
                                            x(h).communityLinks,
                                            (e) => (
                                              u(),
                                              A(
                                                o,
                                                {
                                                  key: e.name,
                                                  class: `navigation-mobile-menu-redesign__community-link`,
                                                  to: e.link,
                                                  target: e.linkTarget,
                                                  rel: e.linkRel,
                                                  "aria-label": e.ariaLabel,
                                                  "data-click-id": `hgr-navigation-redesign-menu-community-${e.name}`,
                                                  onClick: (a[4] ||= (e) =>
                                                    l(`link-click`)),
                                                },
                                                {
                                                  default: n(() => [
                                                    L(
                                                      x(M),
                                                      {
                                                        name: e.icon,
                                                        color: `h-fg-neutral-default`,
                                                        dimensions: `20px`,
                                                      },
                                                      null,
                                                      8,
                                                      [`name`]
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                [
                                                  `to`,
                                                  `target`,
                                                  `rel`,
                                                  `aria-label`,
                                                  `data-click-id`,
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                    ]),
                                  ],
                                  64
                                ))
                              : D(``, !0),
                            x(T)
                              ? (u(),
                                A(
                                  jt,
                                  {
                                    key: x(T).name,
                                    promo: x(T),
                                    mobile: ``,
                                    onLinkClick: (a[5] ||= (e) =>
                                      l(`link-click`)),
                                  },
                                  null,
                                  8,
                                  [`promo`]
                                ))
                              : D(``, !0),
                          ]),
                        ]))
                      : (u(),
                        S(`div`, Rt, [
                          b(`div`, zt, [
                            (u(!0),
                            S(
                              g,
                              null,
                              d(
                                x(m),
                                (e) => (
                                  u(),
                                  S(
                                    g,
                                    null,
                                    [
                                      e.kind === `separator`
                                        ? (u(),
                                          A(x(w), {
                                            key: `${e.name}-separator`,
                                            class: `navigation-mobile-menu-redesign__separator`,
                                          }))
                                        : e.kind === `drill`
                                        ? (u(),
                                          S(
                                            `a`,
                                            {
                                              key: `${e.name}-drill`,
                                              class: `navigation-mobile-menu-redesign__row`,
                                              "data-click-id": `hgr-navigation-redesign-menu-section-${e.name}`,
                                              "data-click-sync": `true`,
                                              role: `button`,
                                              tabindex: `0`,
                                              onClick: (t) => O(e),
                                              onKeydown: [
                                                j((t) => O(e), [`enter`]),
                                                j(
                                                  C((t) => O(e), [`prevent`]),
                                                  [`space`]
                                                ),
                                              ],
                                            },
                                            [
                                              b(`span`, Vt, [
                                                e.icon
                                                  ? (u(),
                                                    A(
                                                      x(M),
                                                      {
                                                        key: 0,
                                                        name: e.icon,
                                                        color: `h-color-neutral-800`,
                                                        dimensions: `20px`,
                                                      },
                                                      null,
                                                      8,
                                                      [`name`]
                                                    ))
                                                  : D(``, !0),
                                                b(`span`, Ht, F(e.title), 1),
                                              ]),
                                              L(
                                                x(M),
                                                {
                                                  name: `ic-chevron-small-right-16`,
                                                  class: N({
                                                    "u-rotate-180":
                                                      x(r) === `rtl`,
                                                  }),
                                                  color: `h-color-neutral-950`,
                                                },
                                                null,
                                                8,
                                                [`class`]
                                              ),
                                            ],
                                            40,
                                            Bt
                                          ))
                                        : (u(),
                                          A(
                                            o,
                                            {
                                              key: `${e.name}-link`,
                                              class: `navigation-mobile-menu-redesign__row`,
                                              to: k(e),
                                              target: e.linkTarget,
                                              rel: e.linkRel,
                                              "data-click-id": `hgr-navigation-redesign-menu-${e.name}`,
                                              onClick: (a[6] ||= (e) =>
                                                l(`link-click`)),
                                            },
                                            {
                                              default: n(() => [
                                                b(`span`, Ut, [
                                                  e.icon
                                                    ? (u(),
                                                      A(
                                                        x(M),
                                                        {
                                                          key: 0,
                                                          name: e.icon,
                                                          color: `h-color-neutral-800`,
                                                          dimensions: `20px`,
                                                        },
                                                        null,
                                                        8,
                                                        [`name`]
                                                      ))
                                                    : D(``, !0),
                                                  b(`span`, Wt, F(e.title), 1),
                                                ]),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            [
                                              `to`,
                                              `target`,
                                              `rel`,
                                              `data-click-id`,
                                            ]
                                          )),
                                    ],
                                    64
                                  )
                                )
                              ),
                              256
                            )),
                          ]),
                        ])),
                  ]),
                  _: 1,
                }
              ),
              b(`div`, Gt, [
                L(Ue),
                e.customCta
                  ? D(``, !0)
                  : (u(),
                    A(
                      o,
                      {
                        key: 0,
                        id: `hgr-topmenu-login`,
                        "data-click-id": `hgr-navigation-redesign-menu-login`,
                        class: `navigation-mobile-menu-redesign__login h-t-body-2-bold`,
                        to: x(_),
                        "aria-label": x(i)(`components.navigation.myAccount`),
                      },
                      {
                        default: n(() => [
                          L(x(M), {
                            name: `ic-user-24`,
                            color: `h-fg-neutral-default`,
                          }),
                          P(
                            ` ` + F(x(i)(`components.navigation.myAccount`)),
                            1
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      [`to`, `aria-label`]
                    )),
              ]),
            ],
            10,
            Mt
          )
        );
      };
    },
  }),
  qt = e({ default: () => Jt }),
  Jt = Object.assign(V(Kt, [[`__scopeId`, `data-v-b640e30c`]]), {
    __name: `NavigationMobileMenuRedesign`,
  }),
  Yt = [`dir`],
  Xt = { class: `navigation-menu-redesign__panel` },
  Zt = {
    key: 0,
    class: `navigation-menu-redesign__side-title h-t-body-3-bold t-uppercase`,
  },
  Qt = { key: 1, class: `navigation-menu-redesign__rail-items` },
  $t = [`data-click-id`, `data-qa`, `onClick`],
  en = {
    key: 0,
    class: `navigation-menu-redesign__content-title h-t-body-3-bold t-uppercase`,
  },
  tn = { class: `navigation-menu-redesign__grid` },
  nn = {
    key: 0,
    class: `navigation-menu-redesign__content-title h-t-body-3-bold t-uppercase navigation-menu-redesign__content-title--whole-width h-mb-n8`,
  },
  rn = { class: `navigation-menu-redesign__secondary` },
  an = { key: 0, class: `navigation-menu-redesign__secondary-group` },
  on = {
    key: 0,
    class: `navigation-menu-redesign__side-title h-t-body-3-bold t-uppercase`,
  },
  sn = { key: 1, class: `navigation-menu-redesign__community` },
  cn = {
    key: 0,
    class: `navigation-menu-redesign__side-title h-t-body-3-bold t-uppercase`,
  },
  ln = { class: `navigation-menu-redesign__community-links` },
  un = Object.assign(
    V(
      I({
        __name: `NavigationMenuRedesign`,
        props: {
          name: { type: String, default: `` },
          active: { type: Boolean, default: !1 },
          isNavigationSticky: { type: Boolean, default: !1 },
          backgroundColor: { type: String, default: `h-color-neutral-0` },
        },
        emits: [`close`, `link-click`],
        setup(e, { emit: t }) {
          let { direction: r, pageName: i } = B(),
            { getMenuDataRedesign: a } = ce(),
            o = e,
            s = t,
            l = v(() => a(o.name)),
            f = v(() => l.value?.categories ?? []),
            h = E(f.value[0]?.name ?? ``),
            _ = v(() => l.value?.sideItems ?? []),
            y = v(() => f.value.length > 0 || _.value.length > 0),
            C = v(() => l.value?.secondaryItems ?? []),
            w = v(() => l.value?.communityLinks ?? []),
            O = v(() => C.value.length > 0 || w.value.length > 0);
          p(f, (e) => {
            e.length &&
              !e.some((e) => e.name === h.value) &&
              (h.value = e[0]?.name ?? ``);
          });
          let k = v(() =>
              f.value.length
                ? (f.value.find((e) => e.name === h.value) ?? f.value[0])?.panel
                : l.value?.panel
            ),
            j = v(() => Ce(o.backgroundColor));
          return (
            c(() => {
              let e = i.value;
              if (!e) return;
              let t = (t) => (t ?? []).some((t) => t.pageName === e),
                n =
                  f.value.find((e) => t(e.panel.items)) ??
                  f.value.find((e) => t(e.panel.footerItems));
              n && (h.value = n.name);
            }),
            (t, i) => {
              let a = z;
              return (
                u(),
                A(
                  m,
                  { name: `navigation-menu-redesign` },
                  {
                    default: n(() => [
                      x(l)
                        ? (u(),
                          S(
                            `div`,
                            {
                              key: 0,
                              class: N([
                                `navigation-menu-redesign`,
                                {
                                  "navigation-menu-redesign--sticky-nav":
                                    e.isNavigationSticky,
                                },
                              ]),
                              dir: x(r),
                            },
                            [
                              b(
                                `div`,
                                T(
                                  {
                                    class: `navigation-menu-redesign__container`,
                                    "data-qa": `navigation-menu-redesign-dropdown-area`,
                                  },
                                  x(j)
                                ),
                                [
                                  b(`div`, Xt, [
                                    x(y)
                                      ? (u(),
                                        S(
                                          g,
                                          { key: 0 },
                                          [
                                            b(
                                              `div`,
                                              {
                                                class: N([
                                                  `navigation-menu-redesign__side`,
                                                  {
                                                    "navigation-menu-redesign__side--items":
                                                      !x(f).length,
                                                  },
                                                ]),
                                              },
                                              [
                                                x(l).railTitle
                                                  ? (u(),
                                                    S(
                                                      `div`,
                                                      Zt,
                                                      F(x(l).railTitle),
                                                      1
                                                    ))
                                                  : D(``, !0),
                                                x(f).length
                                                  ? (u(),
                                                    S(`div`, Qt, [
                                                      (u(!0),
                                                      S(
                                                        g,
                                                        null,
                                                        d(
                                                          x(f),
                                                          (e) => (
                                                            u(),
                                                            S(
                                                              `button`,
                                                              {
                                                                key: e.name,
                                                                type: `button`,
                                                                class: N([
                                                                  `navigation-menu-redesign__rail-item h-t-body-2`,
                                                                  {
                                                                    "navigation-menu-redesign__rail-item--active":
                                                                      e.name ===
                                                                      x(h),
                                                                    "h-t-body-2-bold":
                                                                      e.name ===
                                                                      x(h),
                                                                  },
                                                                ]),
                                                                "data-click-id": `hgr-navigation-redesign-rail-${e.name}`,
                                                                "data-click-sync":
                                                                  !0,
                                                                "data-qa": `navigation-menu-redesign-rail-${e.name}`,
                                                                onClick: (t) =>
                                                                  (h.value =
                                                                    e.name),
                                                              },
                                                              [
                                                                L(
                                                                  x(M),
                                                                  {
                                                                    name: e.icon,
                                                                    dimensions: `20px`,
                                                                  },
                                                                  null,
                                                                  8,
                                                                  [`name`]
                                                                ),
                                                                b(
                                                                  `span`,
                                                                  null,
                                                                  F(e.title),
                                                                  1
                                                                ),
                                                              ],
                                                              10,
                                                              $t
                                                            )
                                                          )
                                                        ),
                                                        128
                                                      )),
                                                    ]))
                                                  : (u(!0),
                                                    S(
                                                      g,
                                                      { key: 2 },
                                                      d(
                                                        x(_),
                                                        (t) => (
                                                          u(),
                                                          A(
                                                            St,
                                                            {
                                                              key: t.name,
                                                              item: t,
                                                              active: e.active,
                                                              onLinkClick:
                                                                (i[0] ||= (e) =>
                                                                  s(
                                                                    `link-click`
                                                                  )),
                                                            },
                                                            null,
                                                            8,
                                                            [`item`, `active`]
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                              ],
                                              2
                                            ),
                                            (i[7] ||= b(
                                              `div`,
                                              {
                                                class: `navigation-menu-redesign__divider`,
                                              },
                                              null,
                                              -1
                                            )),
                                          ],
                                          64
                                        ))
                                      : D(``, !0),
                                    L(
                                      m,
                                      {
                                        name: `navigation-panel-slide`,
                                        mode: `out-in`,
                                      },
                                      {
                                        default: n(() => [
                                          (u(),
                                          S(
                                            `div`,
                                            {
                                              key: x(k)?.title,
                                              class: `navigation-menu-redesign__content`,
                                            },
                                            [
                                              x(k)?.title
                                                ? (u(),
                                                  S(
                                                    `div`,
                                                    en,
                                                    F(x(k).title),
                                                    1
                                                  ))
                                                : D(``, !0),
                                              b(`div`, tn, [
                                                (u(!0),
                                                S(
                                                  g,
                                                  null,
                                                  d(
                                                    x(k)?.items,
                                                    (t) => (
                                                      u(),
                                                      A(
                                                        St,
                                                        {
                                                          key: t.name,
                                                          item: t,
                                                          active: e.active,
                                                          onLinkClick: (i[1] ||=
                                                            (e) =>
                                                              s(`link-click`)),
                                                        },
                                                        null,
                                                        8,
                                                        [`item`, `active`]
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                                x(k)?.footerItems?.length
                                                  ? (u(),
                                                    S(
                                                      g,
                                                      { key: 0 },
                                                      [
                                                        (i[8] ||= b(
                                                          `div`,
                                                          {
                                                            class: `navigation-menu-redesign__content-divider`,
                                                          },
                                                          null,
                                                          -1
                                                        )),
                                                        x(k)?.footerTitle
                                                          ? (u(),
                                                            S(
                                                              `div`,
                                                              nn,
                                                              F(
                                                                x(k).footerTitle
                                                              ),
                                                              1
                                                            ))
                                                          : D(``, !0),
                                                        (u(!0),
                                                        S(
                                                          g,
                                                          null,
                                                          d(
                                                            x(k).footerItems,
                                                            (t) => (
                                                              u(),
                                                              A(
                                                                St,
                                                                {
                                                                  key: t.name,
                                                                  item: t,
                                                                  active:
                                                                    e.active,
                                                                  onLinkClick:
                                                                    (i[2] ||= (
                                                                      e
                                                                    ) =>
                                                                      s(
                                                                        `link-click`
                                                                      )),
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  `item`,
                                                                  `active`,
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        )),
                                                      ],
                                                      64
                                                    ))
                                                  : D(``, !0),
                                              ]),
                                            ]
                                          )),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    x(O)
                                      ? (u(),
                                        S(
                                          g,
                                          { key: 1 },
                                          [
                                            (i[9] ||= b(
                                              `div`,
                                              {
                                                class: `navigation-menu-redesign__divider`,
                                              },
                                              null,
                                              -1
                                            )),
                                            b(`div`, rn, [
                                              x(C).length
                                                ? (u(),
                                                  S(`div`, an, [
                                                    x(l).secondaryTitle
                                                      ? (u(),
                                                        S(
                                                          `div`,
                                                          on,
                                                          F(
                                                            x(l).secondaryTitle
                                                          ),
                                                          1
                                                        ))
                                                      : D(``, !0),
                                                    (u(!0),
                                                    S(
                                                      g,
                                                      null,
                                                      d(
                                                        x(C),
                                                        (t) => (
                                                          u(),
                                                          A(
                                                            St,
                                                            {
                                                              key: t.name,
                                                              item: t,
                                                              active: e.active,
                                                              onLinkClick:
                                                                (i[3] ||= (e) =>
                                                                  s(
                                                                    `link-click`
                                                                  )),
                                                            },
                                                            null,
                                                            8,
                                                            [`item`, `active`]
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                  ]))
                                                : D(``, !0),
                                              x(w).length
                                                ? (u(),
                                                  S(`div`, sn, [
                                                    x(l).communityTitle
                                                      ? (u(),
                                                        S(
                                                          `div`,
                                                          cn,
                                                          F(
                                                            x(l).communityTitle
                                                          ),
                                                          1
                                                        ))
                                                      : D(``, !0),
                                                    b(`div`, ln, [
                                                      (u(!0),
                                                      S(
                                                        g,
                                                        null,
                                                        d(
                                                          x(w),
                                                          (e) => (
                                                            u(),
                                                            A(
                                                              a,
                                                              {
                                                                key: e.name,
                                                                class: `navigation-menu-redesign__community-link`,
                                                                to: e.link,
                                                                target:
                                                                  e.linkTarget,
                                                                rel: e.linkRel,
                                                                "aria-label":
                                                                  e.ariaLabel,
                                                                "data-click-id": `hgr-navigation-redesign-community-${e.name}`,
                                                                "data-qa": `navigation-menu-redesign-community-${e.name}`,
                                                                onClick:
                                                                  (i[4] ||= (
                                                                    e
                                                                  ) =>
                                                                    s(
                                                                      `link-click`
                                                                    )),
                                                              },
                                                              {
                                                                default: n(
                                                                  () => [
                                                                    L(
                                                                      x(M),
                                                                      {
                                                                        name: e.icon,
                                                                        color: `h-fg-neutral-default`,
                                                                        dimensions: `20px`,
                                                                      },
                                                                      null,
                                                                      8,
                                                                      [`name`]
                                                                    ),
                                                                  ]
                                                                ),
                                                                _: 2,
                                                              },
                                                              1032,
                                                              [
                                                                `to`,
                                                                `target`,
                                                                `rel`,
                                                                `aria-label`,
                                                                `data-click-id`,
                                                                `data-qa`,
                                                              ]
                                                            )
                                                          )
                                                        ),
                                                        128
                                                      )),
                                                    ]),
                                                  ]))
                                                : D(``, !0),
                                            ]),
                                          ],
                                          64
                                        ))
                                      : D(``, !0),
                                    L(
                                      m,
                                      {
                                        name: `navigation-panel-slide`,
                                        mode: `out-in`,
                                      },
                                      {
                                        default: n(() => [
                                          x(k)?.promo
                                            ? (u(),
                                              A(
                                                jt,
                                                {
                                                  key: x(k).promo.name,
                                                  promo: x(k).promo,
                                                  onLinkClick: (i[5] ||= (e) =>
                                                    s(`link-click`)),
                                                },
                                                null,
                                                8,
                                                [`promo`]
                                              ))
                                            : D(``, !0),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                ],
                                16
                              ),
                              b(`a`, {
                                class: `navigation-menu-redesign__backdrop`,
                                onClick: (i[6] ||= (e) => s(`close`)),
                              }),
                            ],
                            10,
                            Yt
                          ))
                        : D(``, !0),
                    ]),
                    _: 1,
                  }
                )
              );
            }
          );
        },
      }),
      [[`__scopeId`, `data-v-05e351a2`]]
    ),
    { __name: `NavigationMenuRedesign` }
  ),
  dn = [`dir`],
  fn = {
    class: `navigation-menu__container`,
    "data-qa": `navigation-menu-dropdown-area`,
  },
  pn = { class: `navigation-menu__scrollable-container` },
  mn = { class: `navigation-menu__wrapper` },
  hn = {
    key: 0,
    class: `navigation-menu__column-group h-t-body-3-bold t-uppercase`,
  },
  gn = Object.assign(
    V(
      I({
        __name: `NavigationMenu`,
        props: {
          name: { type: String, default: `` },
          active: { type: Boolean, default: !1 },
          isNavigationSticky: { type: Boolean, default: !1 },
        },
        emits: [`close`, `link-click`],
        setup(e, { emit: t }) {
          let { direction: n } = B(),
            { getMenuData: r } = ce(),
            i = e,
            a = t,
            o = v(() => r(i.name));
          return (t, r) => (
            u(),
            S(
              `div`,
              {
                class: N([
                  `navigation-menu`,
                  { "navigation-menu--sticky-nav": e.isNavigationSticky },
                ]),
                dir: x(n),
              },
              [
                b(`div`, fn, [
                  b(
                    `div`,
                    T(
                      {
                        class: `navigation-menu__scrollable-container-wrapper`,
                      },
                      x(Ce)(`h-color-neutral-0`)
                    ),
                    [
                      b(`div`, pn, [
                        b(`div`, mn, [
                          (u(!0),
                          S(
                            g,
                            null,
                            d(
                              x(o),
                              (t, n) => (
                                u(),
                                S(
                                  `div`,
                                  {
                                    key: `menu-column-${n}`,
                                    class: `navigation-menu__column`,
                                  },
                                  [
                                    (u(!0),
                                    S(
                                      g,
                                      null,
                                      d(
                                        t.column,
                                        (t, n) => (
                                          u(),
                                          S(
                                            `div`,
                                            {
                                              key: `subcolumn-${n}`,
                                              class: N([
                                                `navigation-menu__column-subgroup`,
                                                {
                                                  "navigation-menu__column-subgroup--spaced":
                                                    !!t.highlightedLink,
                                                },
                                              ]),
                                            },
                                            [
                                              b(`div`, null, [
                                                t.groupName
                                                  ? (u(),
                                                    S(
                                                      `div`,
                                                      hn,
                                                      F(t.groupName),
                                                      1
                                                    ))
                                                  : D(``, !0),
                                                (u(!0),
                                                S(
                                                  g,
                                                  null,
                                                  d(
                                                    t.items,
                                                    (t) => (
                                                      u(),
                                                      A(
                                                        Ye,
                                                        {
                                                          key: t.title,
                                                          active: e.active,
                                                          item: t,
                                                          onLinkClick: (r[0] ||=
                                                            (e) =>
                                                              a(`link-click`)),
                                                        },
                                                        null,
                                                        8,
                                                        [`active`, `item`]
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                                t.imageLink
                                                  ? (u(),
                                                    A(
                                                      et,
                                                      {
                                                        key: 1,
                                                        active: e.active,
                                                        item: t.imageLink,
                                                        onLinkClick: (r[1] ||= (
                                                          e
                                                        ) => a(`link-click`)),
                                                      },
                                                      null,
                                                      8,
                                                      [`active`, `item`]
                                                    ))
                                                  : D(``, !0),
                                                t.staticLink
                                                  ? (u(),
                                                    A(
                                                      Z,
                                                      {
                                                        key: 2,
                                                        active: e.active,
                                                        item: t.staticLink,
                                                        onLinkClick: (r[2] ||= (
                                                          e
                                                        ) => a(`link-click`)),
                                                      },
                                                      null,
                                                      8,
                                                      [`active`, `item`]
                                                    ))
                                                  : D(``, !0),
                                              ]),
                                              t.highlightedLink
                                                ? (u(),
                                                  A(
                                                    Y,
                                                    {
                                                      key: 0,
                                                      active: e.active,
                                                      item: t.highlightedLink,
                                                      onLinkClick: (r[3] ||= (
                                                        e
                                                      ) => a(`link-click`)),
                                                    },
                                                    null,
                                                    8,
                                                    [`active`, `item`]
                                                  ))
                                                : D(``, !0),
                                            ],
                                            2
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                    ],
                    16
                  ),
                ]),
                b(`a`, {
                  class: `navigation-menu__backdrop`,
                  onClick: (r[4] ||= (e) => a(`close`)),
                }),
              ],
              10,
              dn
            )
          );
        },
      }),
      [[`__scopeId`, `data-v-8a98b456`]]
    ),
    { __name: `NavigationMenu` }
  ),
  _n = [`placeholder`, `aria-label`],
  vn = [`aria-label`],
  yn = Object.assign(
    V(
      I({
        __name: `NavigationDomainSearch`,
        setup(e) {
          let { t } = H(),
            { openSearchResults: n } = ie(`navigation`),
            r = E(!1),
            i = E(``),
            a = E(null);
          p(i, (e) => {
            i.value = e.replace(/\s/g, ``);
          });
          let o = () => {
              a.value?.focus();
            },
            s = () => {
              i.value && n(i.value);
            },
            c = () => {
              i.value || (r.value = !1);
            },
            l = () => {
              (i.value = ``), (r.value = !1), a.value?.blur();
            };
          return (e, n) => (
            u(),
            S(
              `div`,
              {
                class: N([
                  `navigation-domain-search theme-base theme-hWebsites mode-light`,
                  { "navigation-domain-search--open": x(r) },
                ]),
                onClick: o,
              },
              [
                L(x(M), {
                  name: `ic-magnifying-glass-24`,
                  color: `h-color-neutral-700`,
                  dimensions: `20px`,
                }),
                y(
                  b(
                    `input`,
                    {
                      ref_key: `inputRef`,
                      ref: a,
                      "onUpdate:modelValue": (n[0] ||= (e) =>
                        h(i) ? (i.value = e) : null),
                      type: `text`,
                      class: `navigation-domain-search__input h-t-body-2`,
                      placeholder: x(t)(
                        `components.navigation.domainSearch.placeholder`
                      ),
                      "aria-label": x(t)(
                        `components.navigation.domainSearch.placeholder`
                      ),
                      "data-click-id": `hgr-navigation-domain-search`,
                      onFocus: (n[1] ||= (e) => (r.value = !0)),
                      onBlur: c,
                      onKeydown: j(s, [`enter`]),
                    },
                    null,
                    40,
                    _n
                  ),
                  [[ee, x(i)]]
                ),
                y(
                  b(
                    `button`,
                    {
                      type: `button`,
                      class: `navigation-domain-search__close-btn`,
                      "data-click-id": `hgr-navigation-domain-search-close`,
                      "aria-label": x(t)(
                        `components.navigation.domainSearch.close`
                      ),
                      onMousedown: (n[2] ||= C(() => {}, [`prevent`])),
                      onClick: C(l, [`stop`]),
                    },
                    [
                      L(x(M), {
                        name: `ic-cross-24`,
                        color: `h-color-neutral-700`,
                        dimensions: `20px`,
                      }),
                    ],
                    40,
                    vn
                  ),
                  [[k, x(r)]]
                ),
              ],
              2
            )
          );
        },
      }),
      [[`__scopeId`, `data-v-911fc4a1`]]
    ),
    { __name: `NavigationDomainSearch` }
  ),
  bn = () => {
    let e = async () => {
      let e = window.location.host.match(/localhost|hostinger.io|hostinger.dev/)
        ? `https://www.hostinger.com`
        : ``;
      return (
        (await (await fetch(`${e}/cdn-cgi/trace`)).text()).match(
          /\nloc=(..)/
        )?.[1] || ``
      );
    };
    return {
      getCountryCode: e,
      getIsEu: async () => {
        let t = await e();
        return `AD.AT.BE.BG.HR.CY.CZ.DK.EE.FI.FR.DE.GR.HU.IE.IT.LV.LT.LU.MT.NL.PL.PT.RO.SK.SI.ES.SE`
          .split(`.`)
          .includes(t);
      },
    };
  },
  xn = t(be(), 1),
  Sn = _(() =>
    Te(
      () =>
        Promise.resolve()
          .then(() => Ve)
          .then((e) => e.default || e),
      void 0,
      import.meta.url
    )
  ),
  Cn = _(() =>
    Te(
      () =>
        Promise.resolve()
          .then(() => Ae)
          .then((e) => e.default || e),
      void 0,
      import.meta.url
    )
  ),
  wn = _(() =>
    Te(
      () =>
        Promise.resolve()
          .then(() => qt)
          .then((e) => e.default || e),
      void 0,
      import.meta.url
    )
  ),
  Tn = _(() =>
    Te(
      () =>
        Promise.resolve()
          .then(() => mt)
          .then((e) => e.default || e),
      void 0,
      import.meta.url
    )
  ),
  En = [`dir`],
  Dn = { class: `navigation-section__container` },
  On = { key: 0, class: `navigation-section__main-menu-wrapper` },
  kn = { class: `navigation-section__start` },
  An = {
    key: 0,
    class: `navigation-section__menu`,
    "data-qa": `navigation-menu`,
  },
  jn = [`data-click-id`, `data-qa`, `data-nav-target`, `aria-label`, `onClick`],
  Mn = { class: `navigation-section__right` },
  Nn = { class: `navigation-section__chatbot-button` },
  Pn = { key: 0, class: `navigation-section__menu-item-count h-t-body-3-bold` },
  Fn = { key: 6 },
  In = [`aria-label`],
  Ln = { class: `navigation-section__mobile` },
  Rn = {
    key: 0,
    class: `navigation-section__mobile-menu theme-base theme-hWebsites mode-light`,
  },
  zn = { key: 0 },
  Bn = { key: 0, class: `navigation-section__menu-item-count h-t-body-3-bold` },
  Vn = Object.assign(
    V(
      I({
        __name: `NavigationSection`,
        props: {
          minimal: { type: Boolean, default: !1 },
          logoOnly: { type: Boolean, default: !1 },
          customCta: { type: Boolean, default: !1 },
          simplifiedCta: { type: Boolean, default: !1 },
          horizonsMultisite: { type: Boolean, default: !1 },
        },
        setup(e) {
          let t = ue(),
            { direction: i } = B(),
            {
              isPageWithNoNavShadow: a,
              pageColorTheme: s,
              isTransparentNav: f,
              transparentNavColor: h,
              isNavForcedDarkMode: _,
            } = _e(),
            { isBannerVisible: C } = de(),
            { themeData: w, pageName: j, isChatbotPossible: ee } = B(),
            { t: I } = H(),
            { getLoginLink: ie, getRouteLink: ae } = R(),
            { getNavMenuItems: oe } = ce(),
            { isExperimentActive: V } = Se(),
            {
              isRecommendedMinimalNavBar: fe,
              isRecommendedFreeTrial: me,
              recommendedTemplate: ve,
            } = ye(),
            { screen: be } = ne(),
            { getIsEu: xe } = bn(),
            {
              isChatbotOpened: Te,
              setIsNavbarSticky: Oe,
              openChatbot: ke,
              closeChatbot: Ae,
            } = se(),
            {
              addedItemsCount: je,
              multiCartVisible: Me,
              toggleCart: Ne,
            } = pe(),
            W = e,
            G = E(`initial`),
            K = E(!1),
            Pe = E(!1),
            q = E(!1),
            Fe = E(!1),
            Ie = E(!1),
            Le = E(new Map()),
            J = E(
              W.horizonsMultisite
                ? {
                    [U.Product]: !1,
                    [U.Solutions]: !1,
                    [U.Resources]: !1,
                    [U.Currency]: !1,
                  }
                : { [U.Services]: !1, [U.Explore]: !1, [U.Currency]: !1 }
            ),
            Re = [
              `h-color-neutral-800`,
              `h-color-neutral-1000`,
              `h-color-primary-950`,
            ],
            ze = v(() => j.value === `recommended`),
            Be = v(() => ae(`homepage`)),
            Ve = v(() => !W.horizonsMultisite && !tt.value),
            He = v(() => oe(W.horizonsMultisite ? `horizons` : ``)),
            We = v(() => q.value || K.value),
            Ge = v(() => w.value.currencies.length > 1),
            Ke = v(() => Re.includes(s.value)),
            qe = v(() =>
              Ke.value && !K.value
                ? s.value
                : We.value
                ? `h-color-neutral-0`
                : s.value
            ),
            Je = v(() =>
              qe.value === `transparent`
                ? h.value || `h-color-neutral-0`
                : qe.value
            ),
            Ye = v(() => _.value && !We.value),
            Xe = v(() => Ce(qe.value, Ye.value)),
            Ze = v(() => Xe.value.class.includes(`mode-dark`)),
            Y = v(() => Fe.value || et.value),
            Qe = v(() =>
              X.value
                ? ze.value
                  ? me.value
                    ? I(`components.navigation.startForFree`)
                    : I(`components.navigation.viewPlans`)
                  : I(`components.navigation.getStarted`)
                : null
            ),
            $e = v(() => (X.value ? `#pricing` : ie().href)),
            et = v(() => Object.keys(J.value).some((e) => J.value[e])),
            tt = v(() => fe.value || W.minimal),
            X = v(() => fe.value || W.customCta),
            Z = v(() => W.simplifiedCta),
            nt = v(() =>
              Z.value
                ? Ze.value
                  ? { size: `medium`, color: `light` }
                  : { size: `medium` }
                : { size: `large`, color: `light` }
            ),
            rt = () =>
              G.value === `hidden` ||
              be.value !== `desktop` ||
              !q.value ||
              ve.value === `horizons_paid`
                ? !1
                : j.value === `horizons-ai` || fe.value,
            it = (e) => {
              rt() && e.clientY < 0 && (G.value = `visible`);
            },
            at = (e) => {
              $(), rt() && (e.preventDefault(), (G.value = `visible`));
            },
            Q = () => {
              (K.value = !K.value),
                K.value
                  ? (document.body.style.overflow = `hidden`)
                  : document.body.style.removeProperty(`overflow`);
            },
            ot = () => {
              (q.value = window.scrollY > 0), Oe(q.value);
            },
            st = () => {
              let e = document.documentElement.clientWidth;
              K.value && e > 1024 && Q();
            },
            $ = () => {
              document?.body && document.body.style.removeProperty(`overflow`),
                Object.keys(J.value).forEach((e) => {
                  J.value[e] = !1;
                });
            },
            ct = (e, t = !0) => {
              if (((Fe.value = !1), J.value[e] === !0 && t)) {
                (J.value[e] = !1),
                  document?.body &&
                    document.body.style.removeProperty(`overflow`);
                return;
              }
              (Ie.value = et.value),
                $(),
                document?.body && (document.body.style.overflow = `hidden`),
                (J.value[e] = !0),
                Ie.value &&
                  r(() => {
                    Ie.value = !1;
                  });
            },
            lt = (e) => {
              setTimeout(() => {
                document?.body &&
                  document.body.style.removeProperty(`overflow`),
                  (J.value[e] = !1);
              });
            },
            ut = () => {
              Le.value.forEach((e, t) => {
                t.removeEventListener(`mouseenter`, e);
              }),
                Le.value.clear();
            },
            dt = async () => {
              let e = le.get(ge),
                t = w.value.currencies;
              if (e || t.length <= 1) return;
              let n = t.find((e) => e.code !== `EUR`);
              n &&
                ((await xe()) ||
                  (le.set(ge, n.code, {
                    domain: re(),
                    path: `/`,
                    expires: 30,
                    secure: !0,
                  }),
                  window.location.reload()));
            },
            ft = () => (Te.value ? Ae() : ke()),
            pt = (0, xn.default)(st, 100);
          return (
            c(() => {
              dt(),
                window.addEventListener(`scroll`, ot),
                window.addEventListener(`resize`, pt),
                ot(),
                (Pe.value = V(we.HOMEPAGE_REDESIGN));
            }),
            l(() => {
              window.removeEventListener(`scroll`, ot),
                window.removeEventListener(`resize`, pt),
                pt.cancel(),
                document.body.style.removeProperty(`overflow`),
                ut();
            }),
            p(
              () => Y.value,
              (e) => {
                e
                  ? document
                      .querySelectorAll(`[data-nav-target]`)
                      .forEach((e) => {
                        let t = e.getAttribute(`data-nav-target`),
                          n = () => ct(t, !1);
                        e.addEventListener(`mouseenter`, n), Le.value.set(e, n);
                      })
                  : ut();
              }
            ),
            p(
              () => t,
              () => {
                $(), (Fe.value = !1), K.value && Q();
              },
              { immediate: !0 }
            ),
            (t, r) => {
              let s = he,
                c = Sn,
                l = un,
                p = gn,
                h = z,
                _ = yn,
                v = te,
                w = Ue,
                E = Cn,
                ne = wn,
                R = Tn;
              return (
                u(),
                S(
                  `nav`,
                  T(
                    {
                      class: [
                        `navigation-section`,
                        {
                          [x(i)]: !!x(i),
                          "navigation-section--under-banner": x(C) && x(q),
                          "navigation-section--full-h": x(K),
                          "navigation-section--full-h-under-banner":
                            x(K) && x(C),
                          "navigation-section--sticky": x(q) || x(K),
                          "navigation-section--no-shadow": x(a) || !x(q),
                          "navigation-section--overlay": x(f),
                          "navigation-section--simplified-cta": x(Z),
                        },
                      ],
                      dir: x(i),
                    },
                    x(Xe),
                    { "data-qa": `navigation-section`, onMouseleave: it }
                  ),
                  [
                    b(`div`, Dn, [
                      b(
                        `div`,
                        {
                          class: N([
                            `navigation-section__logo-wrapper`,
                            {
                              "navigation-section__logo-wrapper--rtl":
                                x(i) === `rtl`,
                            },
                          ]),
                        },
                        [
                          L(
                            s,
                            {
                              class: `navigation-section__logo`,
                              "data-click-id": `hgr-navigation-logo`,
                              "data-qa": `navigation-menu-homepage-button`,
                              "data-click-sync": ``,
                              data: {
                                link: x(Be),
                                linkToHomepage: !e.logoOnly,
                                color: `h-fg-neutral-default`,
                                horizonsLogo: e.horizonsMultisite,
                                withMinimalMobile: !0,
                              },
                              onClick: at,
                            },
                            null,
                            8,
                            [`data`]
                          ),
                          x(G) === `visible`
                            ? (u(),
                              A(c, {
                                key: 0,
                                onClose: (r[0] ||= (e) => (G.value = `hidden`)),
                              }))
                            : D(``, !0),
                        ],
                        2
                      ),
                      e.logoOnly
                        ? D(``, !0)
                        : (u(),
                          S(`div`, On, [
                            b(`div`, kn, [
                              x(tt)
                                ? D(``, !0)
                                : (u(),
                                  S(`div`, An, [
                                    (u(!0),
                                    S(
                                      g,
                                      null,
                                      d(
                                        x(He),
                                        (e) => (
                                          u(),
                                          S(
                                            g,
                                            null,
                                            [
                                              e.isExpandable
                                                ? (u(),
                                                  S(
                                                    g,
                                                    { key: 0 },
                                                    [
                                                      (u(),
                                                      S(
                                                        `button`,
                                                        {
                                                          key: e.name,
                                                          class: N([
                                                            `navigation-section__menu-item navigation-section__menu-item--expandable h-t-body-2`,
                                                            {
                                                              "navigation-section__menu-item--active":
                                                                !!x(J)[e.name],
                                                            },
                                                          ]),
                                                          "data-click-id": `hgr-navigation-menu-${e.name}`,
                                                          "data-qa": `navigation-menu-item-${e.name}`,
                                                          "data-click-sync": ``,
                                                          "data-nav-target":
                                                            e.name,
                                                          "aria-label": x(I)(
                                                            e.slug
                                                          ),
                                                          onClick: (t) =>
                                                            ct(e.name),
                                                        },
                                                        [
                                                          P(
                                                            F(x(I)(e.slug)) +
                                                              ` `,
                                                            1
                                                          ),
                                                          b(
                                                            `span`,
                                                            {
                                                              class: N([
                                                                `navigation-section__menu-item-icon`,
                                                                {
                                                                  "u-rotate-180":
                                                                    x(J)[
                                                                      e.name
                                                                    ],
                                                                },
                                                              ]),
                                                            },
                                                            [
                                                              L(x(M), {
                                                                name: `ic-chevron-small-down-24`,
                                                                color: `h-fg-neutral-default`,
                                                                dimensions: `18px`,
                                                              }),
                                                            ],
                                                            2
                                                          ),
                                                        ],
                                                        10,
                                                        jn
                                                      )),
                                                      x(Ve)
                                                        ? (u(),
                                                          A(
                                                            m,
                                                            {
                                                              key: `variant-${e.name}`,
                                                              name: x(Ie)
                                                                ? `navigation-menu-instant`
                                                                : `navigation-menu-variant`,
                                                            },
                                                            {
                                                              default: n(() => [
                                                                y(
                                                                  L(
                                                                    l,
                                                                    {
                                                                      name: e.name,
                                                                      active:
                                                                        x(Y),
                                                                      "is-navigation-sticky":
                                                                        x(q),
                                                                      "background-color":
                                                                        x(Je),
                                                                      onClose: (
                                                                        t
                                                                      ) =>
                                                                        lt(
                                                                          e.name
                                                                        ),
                                                                      onLinkClick:
                                                                        (t) =>
                                                                          lt(
                                                                            e.name
                                                                          ),
                                                                    },
                                                                    null,
                                                                    8,
                                                                    [
                                                                      `name`,
                                                                      `active`,
                                                                      `is-navigation-sticky`,
                                                                      `background-color`,
                                                                      `onClose`,
                                                                      `onLinkClick`,
                                                                    ]
                                                                  ),
                                                                  [
                                                                    [
                                                                      k,
                                                                      x(J)[
                                                                        e.name
                                                                      ],
                                                                    ],
                                                                  ]
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            [`name`]
                                                          ))
                                                        : y(
                                                            (u(),
                                                            A(
                                                              p,
                                                              {
                                                                key: e.name,
                                                                name: e.name,
                                                                active: x(Y),
                                                                "is-navigation-sticky":
                                                                  x(q),
                                                                onClose: (t) =>
                                                                  lt(e.name),
                                                                onLinkClick: (
                                                                  t
                                                                ) => lt(e.name),
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                `name`,
                                                                `active`,
                                                                `is-navigation-sticky`,
                                                                `onClose`,
                                                                `onLinkClick`,
                                                              ]
                                                            )),
                                                            [[k, x(J)[e.name]]]
                                                          ),
                                                    ],
                                                    64
                                                  ))
                                                : (u(),
                                                  S(
                                                    `div`,
                                                    {
                                                      key: e.name,
                                                      class: N({
                                                        "navigation-section__menu-item--with-badge":
                                                          e.badge,
                                                      }),
                                                    },
                                                    [
                                                      L(
                                                        h,
                                                        {
                                                          class: `navigation-section__menu-item navigation-section__menu-item--link h-t-body-2`,
                                                          to: e.link,
                                                          target: e.linkTarget,
                                                          rel: e.linkRel,
                                                          "data-click-id": `hgr-navigation-menu-${e.name}`,
                                                          "data-qa": `navigation-menu-item-${e.name}`,
                                                          "aria-label": x(I)(
                                                            e.slug
                                                          ),
                                                          onClick: (r[1] ||= (
                                                            e
                                                          ) => $()),
                                                        },
                                                        {
                                                          default: n(() => [
                                                            P(
                                                              F(x(I)(e.slug)),
                                                              1
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        [
                                                          `to`,
                                                          `target`,
                                                          `rel`,
                                                          `data-click-id`,
                                                          `data-qa`,
                                                          `aria-label`,
                                                        ]
                                                      ),
                                                      e.badge
                                                        ? (u(),
                                                          A(
                                                            x(O),
                                                            {
                                                              key: 0,
                                                              color:
                                                                e.badgeColor,
                                                            },
                                                            {
                                                              default: n(() => [
                                                                P(
                                                                  F(
                                                                    x(I)(
                                                                      e.badge
                                                                    )
                                                                  ),
                                                                  1
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            [`color`]
                                                          ))
                                                        : D(``, !0),
                                                    ],
                                                    2
                                                  )),
                                            ],
                                            64
                                          )
                                        )
                                      ),
                                      256
                                    )),
                                  ])),
                            ]),
                            b(`div`, Mn, [
                              x(Pe) && x(j) === `homepage`
                                ? (u(),
                                  A(
                                    v,
                                    { key: 0 },
                                    {
                                      default: n(() => [
                                        L(_, {
                                          class: `navigation-section__domain-search`,
                                        }),
                                      ]),
                                      _: 1,
                                    }
                                  ))
                                : D(``, !0),
                              x(ee)
                                ? (u(),
                                  A(
                                    v,
                                    { key: 1 },
                                    {
                                      default: n(() => [
                                        b(`div`, Nn, [
                                          L(
                                            x(De),
                                            {
                                              variant: x(Ze) ? `dark` : `light`,
                                              background: `transparent`,
                                              size: `medium`,
                                              "controls-id": x(Ee).FloatingBox,
                                              "data-click-id": `hgr-navigation_menu-chatbot_button`,
                                              onOnClick: (r[2] ||= (e) => ft()),
                                            },
                                            {
                                              default: n(() => [
                                                P(
                                                  F(
                                                    x(I)(
                                                      `components.aiChatbot.main.buttonAskAI`
                                                    )
                                                  ),
                                                  1
                                                ),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            [`variant`, `controls-id`]
                                          ),
                                        ]),
                                      ]),
                                      _: 1,
                                    }
                                  ))
                                : D(``, !0),
                              !x(ze) && !x(Z)
                                ? (u(), A(w, { key: 2, onToggleMenu: $ }))
                                : D(``, !0),
                              x(Me)
                                ? (u(),
                                  S(
                                    `button`,
                                    {
                                      key: 3,
                                      id: `hgr-navigation-menu-cart`,
                                      "data-click-id": `hgr-navigation-menu-cart`,
                                      "data-qa": `navigation-menu-cart-button`,
                                      class: `navigation-section__menu-item navigation-section__menu-item--login`,
                                      onClick: (r[3] ||= (...e) =>
                                        x(Ne) && x(Ne)(...e)),
                                    },
                                    [
                                      L(x(M), {
                                        name: `ic-shopping-cart-24`,
                                        color: `h-fg-neutral-default`,
                                      }),
                                      x(je) > 0
                                        ? (u(), S(`span`, Pn, F(x(je)), 1))
                                        : D(``, !0),
                                    ]
                                  ))
                                : D(``, !0),
                              x(Qe)
                                ? (u(),
                                  A(
                                    x(o),
                                    {
                                      key: 4,
                                      id: `hgr-topmenu-login`,
                                      "data-click-id": `hgr-navigation-menu-login`,
                                      "data-qa": `navigation-menu-login-button`,
                                      variant: `button-look`,
                                      "button-look-props": x(nt),
                                      "aria-label": x(Qe),
                                      to: x($e),
                                    },
                                    {
                                      default: n(() => [P(F(x(Qe)), 1)]),
                                      _: 1,
                                    },
                                    8,
                                    [`button-look-props`, `aria-label`, `to`]
                                  ))
                                : (u(),
                                  A(
                                    h,
                                    {
                                      key: 5,
                                      id: `hgr-topmenu-login`,
                                      class: `navigation-section__menu-item navigation-section__menu-item--login h-t-body-2`,
                                      "data-click-id": `hgr-navigation-menu-login`,
                                      "data-qa": `navigation-menu-login-button`,
                                      "aria-label": x(I)(
                                        `components.navigation.loginLinkTitle`
                                      ),
                                      to: x($e),
                                    },
                                    {
                                      default: n(() => [
                                        L(x(M), {
                                          name: `ic-user-24`,
                                          color: `h-fg-neutral-default`,
                                        }),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    [`aria-label`, `to`]
                                  )),
                              x(Ge)
                                ? (u(),
                                  S(`div`, Fn, [
                                    b(
                                      `button`,
                                      {
                                        class: N([
                                          `navigation-section__menu-item navigation-section__menu-item--with-padding h-t-body-2`,
                                          {
                                            "navigation-section__menu-item--active":
                                              !!x(J).currency,
                                          },
                                        ]),
                                        "data-click-id": `hgr-navigation-menu-currency`,
                                        "data-qa": `navigation-menu-item-currency`,
                                        "data-click-sync": ``,
                                        "data-nav-target": `currency`,
                                        "aria-label": x(I)(
                                          `components.navigation.menuItems.currency`
                                        ),
                                        onClick: (r[4] ||= (e) =>
                                          ct(`currency`)),
                                      },
                                      [
                                        P(
                                          F(
                                            x(I)(
                                              `components.navigation.menuItems.currency`
                                            )
                                          ) + ` `,
                                          1
                                        ),
                                        b(
                                          `span`,
                                          {
                                            class: N([
                                              `navigation-section__menu-item-icon`,
                                              { "u-rotate-180": x(J).currency },
                                            ]),
                                          },
                                          [
                                            L(x(M), {
                                              name: `ic-chevron-small-down-24`,
                                              color: `h-fg-neutral-default`,
                                            }),
                                          ],
                                          2
                                        ),
                                      ],
                                      10,
                                      In
                                    ),
                                    x(J).currency
                                      ? (u(),
                                        A(E, {
                                          key: 0,
                                          onClose: (r[5] ||= (e) =>
                                            lt(`currency`)),
                                        }))
                                      : D(``, !0),
                                  ]))
                                : D(``, !0),
                            ]),
                          ])),
                      y(
                        b(
                          `div`,
                          Ln,
                          [
                            y(
                              b(
                                `div`,
                                T(
                                  {
                                    class: `navigation-section__mobile-menu-wrapper`,
                                  },
                                  x(Ce)(`h-color-neutral-0`),
                                  {
                                    class: {
                                      "navigation-section__mobile-menu-wrapper--under-banner":
                                        x(C),
                                    },
                                  }
                                ),
                                [
                                  x(K)
                                    ? (u(),
                                      S(`div`, Rn, [
                                        x(Ve)
                                          ? (u(),
                                            A(
                                              ne,
                                              {
                                                key: 0,
                                                "custom-cta": x(X),
                                                onLinkClick: Q,
                                              },
                                              null,
                                              8,
                                              [`custom-cta`]
                                            ))
                                          : (u(),
                                            A(
                                              R,
                                              {
                                                key: 1,
                                                "is-open": x(K),
                                                minimal: x(tt),
                                                "custom-cta": x(X),
                                                "horizons-multisite":
                                                  e.horizonsMultisite,
                                                onLinkClick: Q,
                                              },
                                              null,
                                              8,
                                              [
                                                `is-open`,
                                                `minimal`,
                                                `custom-cta`,
                                                `horizons-multisite`,
                                              ]
                                            )),
                                      ]))
                                    : D(``, !0),
                                ],
                                16
                              ),
                              [[k, x(K)]]
                            ),
                            L(v, null, {
                              default: n(() => [
                                b(
                                  `div`,
                                  {
                                    class: N([
                                      `navigation-section__end-menu`,
                                      {
                                        "navigation-section__end-menu--rtl":
                                          x(i) === `rtl`,
                                      },
                                    ]),
                                  },
                                  [
                                    x(ee)
                                      ? y(
                                          (u(),
                                          S(
                                            `div`,
                                            zn,
                                            [
                                              L(
                                                x(De),
                                                {
                                                  background: `transparent`,
                                                  variant: x(Ze)
                                                    ? `dark`
                                                    : `light`,
                                                  "controls-id":
                                                    x(Ee).FloatingBox,
                                                  "data-click-id": `hgr-navigation_menu-chatbot_button_mobile`,
                                                  onOnClick: ft,
                                                },
                                                {
                                                  default: n(() => [
                                                    P(
                                                      F(
                                                        x(I)(
                                                          `components.aiChatbot.main.buttonAskAI`
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                },
                                                8,
                                                [`variant`, `controls-id`]
                                              ),
                                            ],
                                            512
                                          )),
                                          [[k, !x(K)]]
                                        )
                                      : D(``, !0),
                                    x(Me) && !x(K)
                                      ? (u(),
                                        S(
                                          `button`,
                                          {
                                            key: 1,
                                            id: `hgr-navigation-menu-cart`,
                                            "data-click-id": `hgr-navigation-menu-cart`,
                                            "data-qa": `navigation-menu-cart-button`,
                                            class: `navigation-section__menu-item navigation-section__menu-item--login`,
                                            onClick: (r[6] ||= (...e) =>
                                              x(Ne) && x(Ne)(...e)),
                                          },
                                          [
                                            L(x(M), {
                                              name: `ic-shopping-cart-24`,
                                              color: `h-fg-neutral-default`,
                                            }),
                                            x(je) > 0
                                              ? (u(),
                                                S(`span`, Bn, F(x(je)), 1))
                                              : D(``, !0),
                                          ]
                                        ))
                                      : D(``, !0),
                                    b(
                                      `button`,
                                      {
                                        class: `navigation-section__mobile-menu-burger`,
                                        "data-click-id": `hgr-nav-menu_mobile-burger`,
                                        "data-click-sync": `true`,
                                        onClick: Q,
                                      },
                                      [
                                        L(
                                          m,
                                          { name: `fade` },
                                          {
                                            default: n(() => [
                                              x(K)
                                                ? (u(),
                                                  A(x(M), {
                                                    key: 0,
                                                    name: `ic-cross-24`,
                                                  }))
                                                : (u(),
                                                  A(x(M), {
                                                    key: 1,
                                                    name: `ic-bars-24`,
                                                  })),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]
                                    ),
                                  ],
                                  2
                                ),
                              ]),
                              _: 1,
                            }),
                          ],
                          512
                        ),
                        [[k, !e.logoOnly && !x(Z) && (!x(ze) || !x(X))]]
                      ),
                    ]),
                  ],
                  16,
                  En
                )
              );
            }
          );
        },
      }),
      [[`__scopeId`, `data-v-3bcfe6f1`]]
    ),
    { __name: `NavigationSection` }
  );
export { bn as n, Vn as t };

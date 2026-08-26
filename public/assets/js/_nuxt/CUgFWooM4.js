import { n as e } from "./QTnfLwEv.js";
import {
  $t as t,
  At as n,
  D as r,
  E as i,
  F as a,
  Gt as o,
  Ht as s,
  It as c,
  Lt as l,
  Nt as u,
  O as d,
  Rt as f,
  S as p,
  Vt as m,
  Xt as h,
  an as g,
  at as _,
  bn as v,
  dt as y,
  en as b,
  ft as x,
  gn as S,
  gt as C,
  ht as w,
  it as T,
  kt as E,
  ln as D,
  mt as O,
  n as k,
  nt as A,
  pt as j,
  rt as M,
  tt as N,
  u as P,
  vn as F,
  vt as I,
  w as L,
  xn as R,
  xt as z,
  yt as B,
} from "./QgQWmE83.js";
import {
  $r as V,
  Ai as ee,
  Ct as H,
  Dr as U,
  Ei as W,
  Ha as G,
  Hi as K,
  Hn as q,
  Ii as J,
  Ir as Y,
  Ln as te,
  Mr as ne,
  Nr as re,
  Pr as X,
  Tr as ie,
  Vi as Z,
  Yt as ae,
  ki as oe,
  lr as se,
  pa as Q,
  ur as $,
  v as ce,
  wn as le,
  zn as ue,
} from "./BtP95aSo.js";
var de = { class: `homepage-agents-hero` },
  fe = { class: `homepage-agents-hero__inner h-grid` },
  pe = { class: `homepage-agents-hero__main` },
  me = { class: `homepage-agents-hero__main-body` },
  he = { class: `homepage-agents-hero__main-content` },
  ge = { class: `homepage-agents-hero__main-text` },
  _e = { class: `homepage-agents-hero__main-title h-t-heading-1-regular` },
  ve = { class: `h-t-body-2` },
  ye = { class: `homepage-agents-hero__side` },
  be = { class: `homepage-agents-hero__card-body` },
  xe = { class: `homepage-agents-hero__card-text` },
  Se = { class: `h-t-heading-3-regular` },
  Ce = { class: `h-t-body-2` },
  we = { class: `homepage-agents-hero__price` },
  Te = { class: `homepage-agents-hero__price-from h-t-body-2` },
  Ee = { class: `homepage-agents-hero__card-text` },
  De = { class: `h-t-heading-3-regular` },
  Oe = { class: `h-t-body-2` },
  ke = z({
    __name: `HomepageAgentsHero`,
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      return (n, r) => {
        let i = U,
          o = ne,
          s = G;
        return (
          f(),
          w(`section`, de, [
            x(`div`, fe, [
              x(`div`, pe, [
                x(`div`, me, [
                  B(
                    S(k),
                    {
                      class: `homepage-agents-hero__badge`,
                      "background-color": `h-color-light-a20`,
                      "text-color": `h-color-neutral-0`,
                      "text-variant": `body-2-medium`,
                    },
                    {
                      "icon-prepend": t(() => [
                        ...(r[0] ||= [
                          x(
                            `span`,
                            { class: `homepage-agents-hero__pulse` },
                            null,
                            -1
                          ),
                        ]),
                      ]),
                      default: t(() => [I(` ` + R(e.data.main.badge), 1)]),
                      _: 1,
                    }
                  ),
                  x(`div`, he, [
                    x(`div`, ge, [
                      x(`h2`, _e, R(e.data.main.title), 1),
                      x(`p`, ve, R(e.data.main.description), 1),
                    ]),
                    B(
                      S(a),
                      {
                        class: `homepage-agents-hero__button`,
                        variant: `button-look`,
                        "button-look-props": {
                          variant: `contain`,
                          color: `light`,
                          size: `large`,
                        },
                        to: e.data.main.button.href,
                        "data-click-id": e.data.main.button[`data-click-id`],
                      },
                      {
                        default: t(() => [I(R(e.data.main.button.text), 1)]),
                        _: 1,
                      },
                      8,
                      [`to`, `data-click-id`]
                    ),
                  ]),
                ]),
                e.data.main.image?.src
                  ? (f(),
                    j(
                      i,
                      {
                        key: 0,
                        class: `homepage-agents-hero__main-image`,
                        media: e.data.main.image,
                      },
                      null,
                      8,
                      [`media`]
                    ))
                  : O(``, !0),
              ]),
              x(`div`, ye, [
                B(
                  s,
                  E(
                    {
                      to: e.data.pricingCard.link,
                      class: `homepage-agents-hero__card`,
                    },
                    S($)(`h-color-primary-50`),
                    { "data-click-id": e.data.pricingCard.dataClickId }
                  ),
                  {
                    default: t(() => [
                      B(
                        S(k),
                        {
                          class: `homepage-agents-hero__badge`,
                          "background-color": `h-color-meteorite-200`,
                          "text-variant": `body-2`,
                        },
                        {
                          default: t(() => [I(R(e.data.pricingCard.badge), 1)]),
                          _: 1,
                        }
                      ),
                      B(S(P), {
                        name: `ic-arrow-up-right-24`,
                        class: `homepage-agents-hero__card-arrow`,
                        dimensions: `20px`,
                      }),
                      x(`div`, be, [
                        x(`div`, xe, [
                          x(`span`, Se, R(e.data.pricingCard.title), 1),
                          x(`p`, Ce, R(e.data.pricingCard.description), 1),
                        ]),
                        x(`div`, we, [
                          x(`span`, Te, R(e.data.pricingCard.priceFrom), 1),
                          B(
                            o,
                            {
                              data: {
                                price: e.data.pricingCard.price,
                                alignment: S(re).Horizontal,
                                color: `h-fg-neutral-default`,
                                suffix: e.data.pricingCard.pricePeriod
                                  ? `/${e.data.pricingCard.pricePeriod}`
                                  : void 0,
                                priceTypography: S(X).Heading1,
                                currencyTypography: S(X).Body2,
                                suffixTypography: S(X).Body2,
                              },
                            },
                            null,
                            8,
                            [`data`]
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  16,
                  [`to`, `data-click-id`]
                ),
                B(
                  s,
                  E(
                    {
                      to: e.data.agentCard.link,
                      class: `homepage-agents-hero__card homepage-agents-hero__card--agent`,
                      "data-click-id": e.data.agentCard.dataClickId,
                    },
                    S($)(`h-color-primary-50`)
                  ),
                  {
                    default: t(() => [
                      B(
                        S(k),
                        {
                          class: `homepage-agents-hero__badge`,
                          "background-color": `h-color-meteorite-200`,
                          "text-variant": `body-2`,
                        },
                        {
                          default: t(() => [I(R(e.data.agentCard.badge), 1)]),
                          _: 1,
                        }
                      ),
                      B(S(P), {
                        name: `ic-arrow-up-right-24`,
                        class: `homepage-agents-hero__card-arrow`,
                        dimensions: `20px`,
                      }),
                      x(`div`, Ee, [
                        x(`span`, De, R(e.data.agentCard.title), 1),
                        x(`p`, Oe, R(e.data.agentCard.description), 1),
                      ]),
                      e.data.agentCard.image?.src
                        ? (f(),
                          j(
                            i,
                            {
                              key: 0,
                              class: `homepage-agents-hero__card-image`,
                              media: e.data.agentCard.image,
                            },
                            null,
                            8,
                            [`media`]
                          ))
                        : O(``, !0),
                    ]),
                    _: 1,
                  },
                  16,
                  [`to`, `data-click-id`]
                ),
              ]),
            ]),
          ])
        );
      };
    },
  }),
  Ae = e({ default: () => je }),
  je = Object.assign(Y(ke, [[`__scopeId`, `data-v-caad42b5`]]), {
    __name: `HomepageAgentsHero`,
  }),
  Me = [`data-view-id`],
  Ne = { class: `h-grid homepage-content-cards__grid` },
  Pe = { class: `homepage-content-cards__card-content` },
  Fe = { class: `homepage-content-cards__card-title h-t-heading-1-regular` },
  Ie = { class: `homepage-content-cards__card-description h-t-body-1 h-mt-12` },
  Le = { class: `homepage-content-cards__card-content` },
  Re = { class: `homepage-content-cards__card-title h-t-heading-1-regular` },
  ze = { class: `homepage-content-cards__card-description h-t-body-1 h-mt-12` },
  Be = { class: `homepage-content-cards__cards-scrollbar h-mt-24` },
  Ve = [`data-click-id`, `onClick`],
  He = z({
    __name: `HomepageContentCards`,
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      let t = e,
        { pageNameDataClickId: n } = J(),
        r = D(0),
        i = D(0),
        a = D(0),
        o = (e) => e.changedTouches.length !== 1,
        s = (e, t, n, r) => Math.abs(r - n) > 70 || Math.abs(t - e) < 35,
        c = (e) => {
          o(e) ||
            ((i.value = e.changedTouches[0]?.clientX || 0),
            (a.value = e.changedTouches[0]?.clientY || 0));
        },
        l = (e) => {
          if (o(e)) return;
          let n = e.changedTouches[0]?.clientX || 0,
            c = e.changedTouches[0]?.clientY || 0;
          s(i.value, n, a.value, c) ||
            (i.value < n && r.value !== 0
              ? --r.value
              : i.value > n &&
                r.value !== t.data.cards.length - 1 &&
                (r.value += 1));
        };
      return (t, i) => (
        f(),
        w(
          `section`,
          {
            class: F([
              `homepage-content-cards`,
              {
                [`homepage-content-cards--bg-${e.data.backgroundColor}`]:
                  !!e.data.backgroundColor,
              },
            ]),
            "data-view-id": `hgr-${S(n)}-content_cards`,
          },
          [
            x(`div`, Ne, [
              (f(!0),
              w(
                _,
                null,
                m(
                  e.data.cards,
                  (e) => (
                    f(),
                    w(
                      `div`,
                      {
                        key: e.title,
                        class: F([
                          `homepage-content-cards__card`,
                          `homepage-content-cards__card--bg-${e.backgroundColor}`,
                        ]),
                      },
                      [
                        x(`div`, Pe, [
                          x(
                            `div`,
                            {
                              class: F([
                                `homepage-content-cards__card-icon h-mb-24 h-mb-32-d`,
                                `homepage-content-cards__card-icon--bg-${e.icon.backgroundColor}`,
                              ]),
                            },
                            [
                              B(
                                S(P),
                                { name: e.icon.name, color: e.icon.iconColor },
                                null,
                                8,
                                [`name`, `color`]
                              ),
                            ],
                            2
                          ),
                          x(`h5`, Fe, R(e.title), 1),
                          x(`p`, Ie, R(e.description), 1),
                        ]),
                      ],
                      2
                    )
                  )
                ),
                128
              )),
            ]),
            x(
              `div`,
              {
                class: `h-grid homepage-content-cards__grid-mobile`,
                onTouchstart: c,
                onTouchend: l,
              },
              [
                (f(!0),
                w(
                  _,
                  null,
                  m(e.data.cards, (e, t) =>
                    b(
                      (f(),
                      w(
                        `div`,
                        {
                          key: e.title,
                          class: F([
                            `homepage-content-cards__card`,
                            `homepage-content-cards__card--bg-${e.backgroundColor}`,
                          ]),
                        },
                        [
                          x(`div`, Le, [
                            x(
                              `div`,
                              {
                                class: F([
                                  `homepage-content-cards__card-icon h-mb-24 h-mb-32-d`,
                                  `homepage-content-cards__card-icon--bg-${e.icon.backgroundColor}`,
                                ]),
                              },
                              [
                                B(
                                  S(P),
                                  {
                                    name: e.icon.name,
                                    color: e.icon.iconColor,
                                  },
                                  null,
                                  8,
                                  [`name`, `color`]
                                ),
                              ],
                              2
                            ),
                            x(`h5`, Re, R(e.title), 1),
                            x(`p`, ze, R(e.description), 1),
                          ]),
                        ],
                        2
                      )),
                      [[A, S(r) === t]]
                    )
                  ),
                  128
                )),
                x(`div`, Be, [
                  (f(!0),
                  w(
                    _,
                    null,
                    m(
                      e.data.cards,
                      (e, t) => (
                        f(),
                        w(
                          `div`,
                          {
                            key: t,
                            class: F([
                              `homepage-content-cards__cards-scrollbar-thumb`,
                              {
                                "homepage-content-cards__cards-scrollbar-thumb--active":
                                  S(r) === t,
                              },
                            ]),
                            "data-click-id": `hgr-${S(
                              n
                            )}-content_cards-card-${t}-click`,
                            onClick: (e) => (r.value = t),
                          },
                          null,
                          10,
                          Ve
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              32
            ),
          ],
          10,
          Me
        )
      );
    },
  }),
  Ue = e({ default: () => We }),
  We = Object.assign(Y(He, [[`__scopeId`, `data-v-f3e92e25`]]), {
    __name: `HomepageContentCards`,
  }),
  Ge = { class: `homepage-control` },
  Ke = { class: `homepage-control__inner h-grid` },
  qe = { class: `h-mb-24 h-t-heading-1-regular` },
  Je = { class: `homepage-control__cards` },
  Ye = { class: `homepage-control__label` },
  Xe = { class: `h-t-heading-3-regular` },
  Ze = { key: 0, class: `homepage-control__desc h-t-body-2` },
  Qe = z({
    __name: `HomepageControlCards`,
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      let { pageNameDataClickId: n } = J();
      return (r, i) => {
        let a = U;
        return (
          f(),
          w(`section`, Ge, [
            x(`div`, Ke, [
              x(`h2`, qe, R(e.data.heading), 1),
              x(`div`, Je, [
                (f(!0),
                w(
                  _,
                  null,
                  m(
                    e.data.cards,
                    (e, r) => (
                      f(),
                      j(
                        o(e.link ? S(G) : `div`),
                        E(
                          {
                            key: r,
                            class: [
                              `homepage-control__card`,
                              [
                                {
                                  "homepage-control__card--has-image":
                                    e.slideImage,
                                },
                              ],
                            ],
                          },
                          { ref_for: !0 },
                          S($)(`h-color-primary-50`),
                          {
                            to: e.link || void 0,
                            "data-click-id": `hgr-${S(
                              n
                            )}-control_cards-${r}-click`,
                          }
                        ),
                        {
                          default: t(() => [
                            e.icon
                              ? (f(),
                                j(
                                  S(P),
                                  { key: 0, name: e.icon, dimensions: `32px` },
                                  null,
                                  8,
                                  [`name`]
                                ))
                              : O(``, !0),
                            x(`div`, Ye, [
                              x(`span`, Xe, R(e.title), 1),
                              e.description
                                ? (f(), w(`p`, Ze, R(e.description), 1))
                                : O(``, !0),
                            ]),
                            e.slideImage
                              ? (f(),
                                j(
                                  a,
                                  {
                                    key: 1,
                                    class: `homepage-control__slide`,
                                    media: e.slideImage,
                                  },
                                  null,
                                  8,
                                  [`media`]
                                ))
                              : O(``, !0),
                            e.link
                              ? (f(),
                                j(S(P), {
                                  key: 2,
                                  name: `ic-arrow-up-right-24`,
                                  class: `homepage-control__arrow`,
                                }))
                              : O(``, !0),
                          ]),
                          _: 2,
                        },
                        1040,
                        [`class`, `to`, `data-click-id`]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
          ])
        );
      };
    },
  }),
  $e = e({ default: () => et }),
  et = Object.assign(Y(Qe, [[`__scopeId`, `data-v-9fddc1be`]]), {
    __name: `HomepageControlCards`,
  }),
  tt = [`data-view-id`],
  nt = { class: `h-grid` },
  rt = { class: `homepage-cta-section__button-wrapper h-mt-24 h-mt-32-d` },
  it = z({
    __name: `HomepageCtaSection`,
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      let { pageNameDataClickId: n } = J();
      return (r, i) => {
        let o = se,
          s = q;
        return (
          f(),
          w(
            `section`,
            {
              class: F([
                `homepage-cta-section`,
                {
                  [`homepage-cta-section--bg-${e.data.backgroundColor}`]:
                    !!e.data.backgroundColor,
                },
              ]),
              "data-view-id": `hgr-${S(n)}-cta_section`,
            },
            [
              x(`div`, nt, [
                e.data.headingData
                  ? (f(),
                    j(
                      s,
                      {
                        key: 0,
                        data: e.data.headingData,
                        class: `homepage-cta-section__heading`,
                      },
                      C({ _: 2 }, [
                        e.data.badge
                          ? {
                              name: `top-content`,
                              fn: t(() => [
                                B(
                                  o,
                                  {
                                    data: {
                                      backgroundColor:
                                        e.data.badge.backgroundColor,
                                    },
                                    class: `homepage-cta-section__badge`,
                                  },
                                  {
                                    default: t(() => [
                                      I(R(e.data.badge.text), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  [`data`]
                                ),
                              ]),
                              key: `0`,
                            }
                          : void 0,
                      ]),
                      1032,
                      [`data`]
                    ))
                  : O(``, !0),
                x(`div`, rt, [
                  B(
                    S(a),
                    {
                      variant: `button-look`,
                      "button-look-props": { size: `xLarge` },
                      to: e.data.button.link,
                      "data-click-id": `hgr-${S(n)}-cta_section-button-click`,
                    },
                    { default: t(() => [I(R(e.data.button.text), 1)]), _: 1 },
                    8,
                    [`to`, `data-click-id`]
                  ),
                ]),
              ]),
            ],
            10,
            tt
          )
        );
      };
    },
  }),
  at = e({ default: () => ot }),
  ot = Object.assign(Y(it, [[`__scopeId`, `data-v-59805240`]]), {
    __name: `HomepageCtaSection`,
  }),
  st = {
    "pages.homepage.reviews.cards.india.second.text": `”Hostinger is a great option for anyone who wants to launch their website – it’s easy, affordable and also works well.”`,
    "pages.homepage.reviews.cards.india.second.role": `Public Relations Manager`,
    "pages.homepage.hero.title": `Your idea, online. Made easy.`,
    "pages.homepage.hero.description": `One platform, powered by AI from the first prompt, with the tools to build, launch, manage, and grow your business.`,
    "pages.homepage.hero.button": `Get started`,
    "pages.homepage.hero.guarantee": `30-day money-back guarantee`,
    "pages.homepage.hero.cards.build": `Build`,
    "pages.homepage.hero.cards.launch": `Launch`,
    "pages.homepage.hero.cards.grow": `Grow`,
    "pages.homepage.hero.cards.manage": `Manage`,
    "pages.homepage.kodeePrompt.title": `Share your idea.`,
    "pages.homepage.kodeePrompt.titleGradient": `Kodee shows the way.`,
    "pages.homepage.kodeePrompt.placeholder": `What do you want to do?`,
    "pages.homepage.kodeePrompt.chips.ecommerce": `Launch e-commerce`,
    "pages.homepage.kodeePrompt.chips.portfolio": `Showcase your portfolio`,
    "pages.homepage.kodeePrompt.chips.business": `Build business site`,
    "pages.homepage.kodeePrompt.chips.findDomain": `Find a domain`,
    "pages.homepage.kodeePrompt.findDomainPrompt": `Help me find a domain`,
    "pages.homepage.agentsHero.main.badge": `Trending`,
    "pages.homepage.agentsHero.main.title": `Grow your business with Hostinger Agents`,
    "pages.homepage.agentsHero.main.description": `Get guided support for SEO, content, marketing, sales, customer communication, and business planning, with ready-to-use skills built in.`,
    "pages.homepage.agentsHero.main.button": `Get started`,
    "pages.homepage.agentsHero.pricingCard.badge": `Pricing`,
    "pages.homepage.agentsHero.pricingCard.title": `Explore all plans`,
    "pages.homepage.agentsHero.pricingCard.description": `Everything you need to get started`,
    "pages.homepage.agentsHero.pricingCard.priceFrom": `From`,
    "pages.homepage.agentsHero.agentCard.badge": `New`,
    "pages.homepage.agentsHero.agentCard.title": `1-click Hermes Agent`,
    "pages.homepage.agentsHero.agentCard.description": `Run your own AI agent that learns as it works.`,
    "pages.homepage.domainSearch.title": `Free domain for 1 year`,
    "pages.homepage.domainSearch.description": `included with <a href='{link}'>yearly plans</a>`,
    "pages.homepage.aiBuilder.overlappingCard.title": `You direct. AI builds it live.`,
    "pages.homepage.aiBuilder.overlappingCard.description": `Describe what you want to create, then keep prompting to shape your website, app, or custom tool as it comes together.`,
    "pages.homepage.aiBuilder.overlappingCard.links.first": `Create with AI`,
    "pages.homepage.aiBuilder.overlappingCard.socialProof": `creators choose <br/> Hostinger`,
    "pages.homepage.subMenu.build": `Build`,
    "pages.homepage.subMenu.launch": `Launch`,
    "pages.homepage.subMenu.grow": `Grow`,
    "pages.homepage.subMenu.manage": `Manage`,
    "pages.homepage.toolsSection.heading": `Tools for every online project`,
    "pages.homepage.toolsSection.description": `Get more control over what you build online, without taking on more technical complexity.`,
    "pages.homepage.controlCards.heading": `Want more hands-on control?`,
    "pages.homepage.controlCards.cards.builder.title": `Drag-and-drop builder`,
    "pages.homepage.controlCards.cards.builder.description": `Templates + visual editor, AI-assisted.`,
    "pages.homepage.controlCards.cards.wordpress.title": `WordPress hosting`,
    "pages.homepage.controlCards.cards.wordpress.description": `AI-assisted, plugin-rich, fully managed.`,
    "pages.homepage.toolsShowcase.heading": `Set up the essentials to go online`,
    "pages.homepage.toolsShowcase.cards.hosting.title": `Hosting`,
    "pages.homepage.toolsShowcase.cards.hosting.description": `Fast, secure hosting for your site.`,
    "pages.homepage.toolsShowcase.cards.domains.title": `Domains`,
    "pages.homepage.toolsShowcase.cards.domains.description": `Find and register the right domain for your brand.`,
    "pages.homepage.toolsShowcase.cards.businessEmail.title": `Business email`,
    "pages.homepage.toolsShowcase.cards.businessEmail.description": `Build trust with email on your domain.`,
    "pages.homepage.toolsShowcase.cards.migration.title": `Free website migration`,
    "pages.homepage.toolsShowcase.cards.migration.description": `Move your existing site to Hostinger for free.`,
    "pages.homepage.wideHeader.heading": `From prompt to thriving business`,
    "pages.homepage.wideHeader.description": `Vibe code your site - hosting, domain and email included to keep it growing.`,
    "pages.homepage.wideHeader.buttonSeePlans": `See plans`,
    "pages.homepage.wideHeader.buttonGetStarted": `Get started`,
    "pages.homepage.wideHeader.buttonStartForFree": `Start for free`,
    "pages.homepage.wideHeader.buttonTryVibeCoding": `Try vibe coding`,
    "pages.homepage.header.heading": `Your online success starts here`,
    "pages.homepage.header.description": `From launching a website to growing your business, Hostinger’s got you covered.`,
    "pages.homepage.header.button": `Start now`,
    "pages.homepage.header.offer": `From <b><span class='header__offer-price'>{price}</span></b>/mo`,
    "pages.homepage.topContentCards.first.title": `Describe your idea`,
    "pages.homepage.topContentCards.first.description": `Describe your website or web app idea to Hostinger AI Builder and see it come to life.`,
    "pages.homepage.topContentCards.second.title": `Make edits easily`,
    "pages.homepage.topContentCards.second.description": `Edit anything by prompting - text, design, or functionality.`,
    "pages.homepage.topContentCards.third.title": `Go live with 1 click`,
    "pages.homepage.topContentCards.third.description": `Launch your website in one click. Hosting, domain, and email - all included.`,
    "pages.homepage.productCards.cards.plans.heading": `Plans and prices`,
    "pages.homepage.productCards.cards.plans.description": `Explore packages full of built-in tools, services, and bonus features.`,
    "pages.homepage.productCards.cards.plans.priceUpdated": `From <span class='h-t-heading-1-regular'>{price}</span>/month`,
    "pages.homepage.productCards.cards.aiBuilder.heading": `Create websites with AI`,
    "pages.homepage.productCards.cards.aiBuilder.description": `Describe what you want, and AI Builder builds it. No technical skills needed.`,
    "pages.homepage.productCards.cards.aiBuilder.linkText": `Try for free`,
    "pages.homepage.productCards.cards.aiBuilder.subText": `No credit card required`,
    "pages.homepage.productCards.cards.domains.heading": `Find a domain`,
    "pages.homepage.productCards.cards.domains.description": `A first impression lasts forever. Make yours count with the perfect domain name.`,
    "pages.homepage.productCards.cards.domains.domainSearchButton": `Search`,
    "pages.homepage.reviews.badge.text": `Trusted by`,
    "pages.homepage.reviews.heading": `They succeeded online - now it’s your turn`,
    "pages.homepage.reviews.linkText": `Watch video`,
    "pages.homepage.reviews.cards.first.text": `“Hostinger is the best hosting provider I’ve ever used. The support is amazing and the prices are unbeatable.”`,
    "pages.homepage.reviews.cards.first.role": `Marketing expert`,
    "pages.homepage.reviews.cards.second.text": `“Hostinger AI Website Builder takes out a lot of manual work. The website I built was spot on - I had to make only a few changes.”`,
    "pages.homepage.reviews.cards.second.role": `Business owner`,
    "pages.homepage.reviews.cards.third.text": `“I've been recommending my clients to migrate to Hostinger. Everything is easy, and new features come out all the time.”`,
    "pages.homepage.reviews.cards.third.role": `Digital designer & developer`,
    "pages.homepage.reviews.cards.fourth.text": `“Ever had an idea for a website or tool? With Hostinger AI Builder, you explain it, and the AI just builds it.” `,
    "pages.homepage.reviews.cards.fourth.role": `Content creator`,
    "pages.homepage.reviews.cards.fifth.text": `“Hostinger Website Builder offers the most user-friendly experience I've ever encountered.”`,
    "pages.homepage.reviews.cards.fifth.role": `Guitarist, singer and producer`,
    "pages.homepage.reviews.cards.sixth.text": `“Thanks to Hostinger's simple dashboard, we can manage our WordPress website ourselves.” `,
    "pages.homepage.reviews.cards.sixth.role": `Business owner`,
    "pages.homepage.reviews.cards.spain.first.text": `“Ever had an idea for a website or tool? With Hostinger AI Builder, you explain it, and the AI just builds it.”`,
    "pages.homepage.reviews.cards.spain.first.role": `Content creator`,
    "pages.homepage.reviews.cards.spain.second.text": `“I found that Hostinger has a lot of different options to grow. It was more affordable, easy to use, and much better for SEO - definitely a better option than the others.”`,
    "pages.homepage.reviews.cards.spain.second.role": `Entrepreneur`,
    "pages.homepage.reviews.cards.spain.third.text": `“Having my website with Hostinger has automated my entire process - from payments to inventory tracking - making my business run much smoother.”`,
    "pages.homepage.reviews.cards.spain.third.role": `Founder`,
    "pages.homepage.reviews.cards.spain.fourth.text": `“The Hostinger's AI Builder really is a game-changer compared to everything else. It was so easy to set up a subdomain for my blog on my web app – I went, 'Wow!'”`,
    "pages.homepage.reviews.cards.spain.fourth.role": `Marketing expert`,
    "pages.homepage.reviews.cards.spain.fifth.text": `“With my website, managing sales and adding products has never been easier. Hostinger Website Builder has made it so simple.”`,
    "pages.homepage.reviews.cards.spain.fifth.role": `Farmer`,
    "pages.homepage.reviews.cards.spain.sixth.text": `“I've been recommending my clients to migrate to Hostinger. Everything is easy, and new features come out all the time.”`,
    "pages.homepage.reviews.cards.spain.sixth.role": `Digital designer & developer`,
    "pages.homepage.reviews.cards.france.first.text": `“I needed a website to present the data I had. So, I just uploaded it, and 80% of what you see on the site showed up instantly. It was amazing.”`,
    "pages.homepage.reviews.cards.france.first.role": `Co-founder`,
    "pages.homepage.reviews.cards.france.second.text": `“Hostinger Website Builder offers the most user-friendly experience I've ever encountered.”`,
    "pages.homepage.reviews.cards.france.second.role": `Musician`,
    "pages.homepage.reviews.cards.france.third.text": `“Personally, Hostinger is the only way to do WordPress websites. It's magical.”`,
    "pages.homepage.reviews.cards.france.third.role": `Founder`,
    "pages.homepage.reviews.cards.france.fourth.text": `“The Hostinger's AI Builder really is a game-changer compared to everything else. It was so easy to set up a subdomain for my blog on my web app – I went, 'Wow!'”`,
    "pages.homepage.reviews.cards.france.fourth.role": `Marketing expert`,
    "pages.homepage.reviews.cards.france.fifth.text": `“I enjoyed creating the website – I built the first template with AI. It's simple, and now changing something, uploading a picture, or adding a new page takes no effort.”`,
    "pages.homepage.reviews.cards.france.fifth.role": `Artist`,
    "pages.homepage.reviews.cards.france.sixth.text": `“Thanks to Hostinger's simple dashboard, we can manage our WordPress website ourselves.”`,
    "pages.homepage.reviews.cards.france.sixth.role": `Business owner`,
    "pages.homepage.reviews.cards.india.first.text": `“I never thought I could build a website myself. But thanks to Hostinger being so user-friendly, I actually did it.”`,
    "pages.homepage.reviews.cards.india.first.role": `Co-founder of Tourkey`,
    "pages.homepage.reviews.cards.india.third.text": `“Hostinger has provided me with a completely different experience than the other providers I've tried. Now, it's been over three years, and I've hosted more than 100 websites.”`,
    "pages.homepage.reviews.cards.india.third.role": `Co-founder of Brandemic`,
    "pages.homepage.reviews.cards.india.fourth.text": `“Hostinger AI Builder makes development incredibly fast. I can quickly design, prototype, and launch ideas without wasting time.”`,
    "pages.homepage.reviews.cards.india.fourth.role": `Tech service lead at AnubhootiVidya`,
    "pages.homepage.reviews.cards.india.fifth.text": `“I built my business from scratch, all self-taught, and Hostinger gives me the tools to keep growing.”`,
    "pages.homepage.reviews.cards.india.fifth.role": `Founder of Wayvie Tags`,
    "pages.homepage.reviews.cards.india.sixth.text": `“With Hostinger's fast and stable hosting, I can focus on building tools that genuinely help developers without worrying about performance issues.”`,
    "pages.homepage.reviews.cards.india.sixth.role": `Developer`,
    "pages.homepage.reviews.cards.mexico.first.text": `“Ever had an idea for a website or tool? With Hostinger AI Builder, you explain it, and the AI just builds it.”`,
    "pages.homepage.reviews.cards.mexico.first.role": `Content creator`,
    "pages.homepage.reviews.cards.mexico.second.text": `“I found that Hostinger has a lot of different options to grow. It was more affordable, easy to use, and much better for SEO - definitely a better option than the others.”`,
    "pages.homepage.reviews.cards.mexico.second.role": `Entrepreneur`,
    "pages.homepage.reviews.cards.mexico.third.text": `“Even with thousands of distributors across the country, Hostinger gives us the confidence that our website can handle it.”`,
    "pages.homepage.reviews.cards.mexico.third.role": `Founder`,
    "pages.homepage.reviews.cards.mexico.fourth.text": `“The Hostinger's AI Builder really is a game-changer compared to everything else. It was so easy to set up a subdomain for my blog on my web app – I went, 'Wow!'”`,
    "pages.homepage.reviews.cards.mexico.fourth.role": `Marketing expert`,
    "pages.homepage.reviews.cards.mexico.fifth.text": `“With my website, managing sales and adding products has never been easier. Hostinger Website Builder has made it so simple.”`,
    "pages.homepage.reviews.cards.mexico.fifth.role": `Farmer`,
    "pages.homepage.reviews.cards.mexico.sixth.text": `“Without our online store, we'd be selling less than half as much. We use Hostinger because it gave us the support and reliability to keep our store robust and fully functional.”`,
    "pages.homepage.reviews.cards.mexico.sixth.role": `Co-founder`,
    "pages.homepage.reviews.cards.brazil.first.text": `“Ever had an idea for a website or tool? With Hostinger AI Builder, you explain it, and the AI just builds it.”`,
    "pages.homepage.reviews.cards.brazil.first.role": `Content creator`,
    "pages.homepage.reviews.cards.brazil.second.text": `“I recommend Hostinger to others who are starting their businesses, because it's really easy and affordable to build the website on your own.”`,
    "pages.homepage.reviews.cards.brazil.second.role": `Entrepreneur`,
    "pages.homepage.reviews.cards.brazil.third.text": `“We saw immediate security improvements after moving all of our clients to Hostinger.”`,
    "pages.homepage.reviews.cards.brazil.third.role": `Co-founder`,
    "pages.homepage.reviews.cards.brazil.fourth.text": `“The Hostinger's AI Builder really is a game-changer compared to everything else. It was so easy to set up a subdomain for my blog on my web app – I went, 'Wow!'”`,
    "pages.homepage.reviews.cards.brazil.fourth.role": `Marketing expert`,
    "pages.homepage.reviews.cards.brazil.fifth.text": `“We needed a website to showcase our brand and professionalism. Hostinger Website Builder made that possible even without help from a developer.”`,
    "pages.homepage.reviews.cards.brazil.fifth.role": `Founder`,
    "pages.homepage.reviews.cards.brazil.sixth.text": `“With Hostinger, we built our own website – no programmer needed. Now 100% of our sales come from it. Go digital early, that’s where your business grows.”`,
    "pages.homepage.reviews.cards.brazil.sixth.role": `Co-founder`,
    "pages.homepage.reviews.cards.germany.first.text": `“With Hostinger AI Builder, we were finally able to create a modern, high-performance website quickly and easily.”`,
    "pages.homepage.reviews.cards.germany.first.role": `Managing Director`,
    "pages.homepage.reviews.cards.germany.second.text": `“It is surprisingly simple to build with Hostinger and adjust whenever you need something changed. I enjoy the clean structure and the feeling of freedom that comes from not being dependent on someone else for every little update.”`,
    "pages.homepage.reviews.cards.germany.second.role": `Business owner`,
    "pages.homepage.reviews.cards.germany.third.text": `“Ein guter Website Hoster ist wie guter Filmsound: Er funktioniert reibungslos im Hintergrund und arbeitet immer mit. Mit Hostinger haben wir diese reibungslose Lösung gefunden.”`,
    "pages.homepage.reviews.cards.germany.third.role": `Co-founder`,
    "pages.homepage.reviews.cards.germany.fourth.text": `“I needed a website to present the data I had. So, I just uploaded it, and 80% of what you see on the site showed up instantly. It was amazing.”`,
    "pages.homepage.reviews.cards.germany.fourth.role": `Co-founder`,
    "pages.homepage.reviews.cards.germany.fifth.text": `“What I love about Hostinger is that everything is in one place - my emails, websites, backups, and domains. It just makes my work easier.”`,
    "pages.homepage.reviews.cards.germany.fifth.role": `Digital marketer`,
    "pages.homepage.reviews.cards.germany.sixth.text": `“Building the website with Hostinger was smooth and intuitive. Everything worked right away, and the interface made starting our own website really simple instead of stressful or complex.”`,
    "pages.homepage.reviews.cards.germany.sixth.role": `Co-founder`,
    "pages.homepage.reviews.cards.poland.first.text": `“The Hostinger's AI Builder really is a game-changer compared to everything else. It was so easy to set up a subdomain for my blog on my web app – I went, 'Wow!'”`,
    "pages.homepage.reviews.cards.poland.first.role": `Marketing expert`,
    "pages.homepage.reviews.cards.poland.second.text": `“I chose Hostinger Website Builder because I wanted a minimalistic, aesthetic shop that I could create easily and at a reasonable price – that always matters in business.”`,
    "pages.homepage.reviews.cards.poland.second.role": `Business owner`,
    "pages.homepage.reviews.cards.poland.third.text": `“Hostinger interface is just super clear. I can find what I need and make changes easily. I’m not a developer - I just taught myself - and Hostinger makes it feel accessible and easy to manage.”`,
    "pages.homepage.reviews.cards.poland.third.role": `Co-founder`,
    "pages.homepage.reviews.cards.poland.fourth.text": `“I needed a website to present the data I had. So, I just uploaded it, and 80% of what you see on the site showed up instantly. It was amazing.”`,
    "pages.homepage.reviews.cards.poland.fourth.role": `Co-founder`,
    "pages.homepage.reviews.cards.poland.fifth.text": `“Hostinger’s interface and support are just perfect. I'm happy with one-click WordPress installation, daily backups, and the fact that I can host several websites under one plan.”`,
    "pages.homepage.reviews.cards.poland.fifth.role": `Entrepreneur`,
    "pages.homepage.reviews.cards.poland.sixth.text": `“I built my website on WordPress with Hostinger, and it’s definitely the best version I’ve had. It’s easy to manage, customizable, and just works really well.”`,
    "pages.homepage.reviews.cards.poland.sixth.role": `Founder`,
    "pages.homepage.reviews.cards.italy.first.text": `“The Hostinger's AI Builder really is a game-changer compared to everything else. It was so easy to set up a subdomain for my blog on my web app – I went, 'Wow!'”`,
    "pages.homepage.reviews.cards.italy.first.role": `Marketing expert`,
    "pages.homepage.reviews.cards.italy.second.text": `“The AI is top – it saves me time and writes great product descriptions. Most of the time, I don't even need to change a thing.”`,
    "pages.homepage.reviews.cards.italy.second.role": `Co-founder`,
    "pages.homepage.reviews.cards.italy.third.text": `“Hostinger has boosted my website’s performance and made its management so easy. I can present my work to my clients more professionally.”`,
    "pages.homepage.reviews.cards.italy.third.role": `Photographer`,
    "pages.homepage.reviews.cards.italy.fourth.text": `“Ever had an idea for a website or tool? With Hostinger AI Builder, you explain it, and the AI just builds it.”`,
    "pages.homepage.reviews.cards.italy.fourth.role": `Content creator`,
    "pages.homepage.reviews.cards.italy.fifth.text": `“With Hostinger AI Website Builder, it was another world - I explained what I wanted, and it did the rest. I had my website running in just one or two hours. It really felt like a miracle.”`,
    "pages.homepage.reviews.cards.italy.fifth.role": `Co-founder`,
    "pages.homepage.reviews.cards.italy.sixth.text": `“My first impression of Hostinger was excellent – everything was clear and well structured, and I immediately felt comfortable using the interface.”`,
    "pages.homepage.reviews.cards.italy.sixth.role": `Web designer`,
    "pages.homepage.reviews.cards.indonesia.first.text": `“The Hostinger's AI Builder really is a game-changer compared to everything else. It was so easy to set up a subdomain for my blog on my web app – I went, 'Wow!'”`,
    "pages.homepage.reviews.cards.indonesia.first.role": `Marketing expert`,
    "pages.homepage.reviews.cards.indonesia.second.text": `“If you’re thinking about taking your business online, don’t let anything hold you back. Hostinger has everything you need. Build the website of your dreams and watch your business grow.”`,
    "pages.homepage.reviews.cards.indonesia.second.role": `Interior designer`,
    "pages.homepage.reviews.cards.indonesia.third.text": `“Developing a website doesn’t feel so intimidating when I have access to AI tools from Hostinger.”`,
    "pages.homepage.reviews.cards.indonesia.third.role": `Founder`,
    "pages.homepage.reviews.cards.indonesia.fourth.text": `“Ever had an idea for a website or tool? With Hostinger AI Builder, you explain it, and the AI just builds it.”`,
    "pages.homepage.reviews.cards.indonesia.fourth.role": `Content creator`,
    "pages.homepage.reviews.cards.indonesia.fifth.text": `“Hostinger made it possible to build and manage my brand online without breaking the bank. It's flexible, seamless, and made for creatives.”`,
    "pages.homepage.reviews.cards.indonesia.fifth.role": `Founder`,
    "pages.homepage.reviews.cards.indonesia.sixth.text": `“Di Hostinger, kami tidak hanya merasa dilayani, tapi juga didampingi oleh tim yang mengerti kebutuhan kami. Kami jadi lebih yakin dalam menjalankan bisnis.”`,
    "pages.homepage.reviews.cards.indonesia.sixth.role": `Co-founder`,
    "pages.homepage.reviews.categories.horizons": `Hostinger AI Builder`,
    "pages.homepage.reviews.categories.websiteBuilder": `Website builder`,
    "pages.homepage.reviews.categories.domains": `Domains`,
    "pages.homepage.reviews.categories.email": `Email`,
    "pages.homepage.reviews.categories.cloudHosting": `Cloud hosting`,
    "pages.homepage.reviews.categories.wordpressHosting": `WordPress hosting`,
    "pages.homepage.reviews.categories.vps": `VPS`,
    "pages.homepage.reviews.categories.webHosting": `Web hosting`,
    "pages.homepage.overlappingCards.badge.text": `Build and launch`,
    "pages.homepage.overlappingCards.heading": `From idea to online, quicker and slicker`,
    "pages.homepage.overlappingCards.headingNew": `From idea to online - any way you want`,
    "pages.homepage.overlappingCards.cards.builder.badge.text": `Drag-and-drop builder`,
    "pages.homepage.overlappingCards.cards.builder.title": `From template to live website`,
    "pages.homepage.overlappingCards.cards.builder.description": `Pick a designer-made template and make it yours - move elements, swap colors, add your words. Store or blog, you'll be live in moments.`,
    "pages.homepage.overlappingCards.cards.builder.links.first": `Create with drag-and-drop`,
    "pages.homepage.overlappingCards.cards.second.badge.text": `Quick-start WordPress`,
    "pages.homepage.overlappingCards.cards.second.title": `WordPress without the complexity`,
    "pages.homepage.overlappingCards.cards.second.description": `Create a WordPress site with AI, use a pre-built template, or start from scratch. While we take care of site maintenance, speed, and security for you.`,
    "pages.homepage.overlappingCards.cards.second.links.first": `Build a WordPress site`,
    "pages.homepage.overlappingCards.cards.second.links.second": `Migrate to Hostinger`,
    "pages.homepage.overlappingCards.cards.third.badge.text": `Hostinger AI Builder`,
    "pages.homepage.overlappingCards.cards.third.title": `Create your website or web app today`,
    "pages.homepage.overlappingCards.cards.third.description": `Describe what you want, and AI Builder builds it for you. No technical skills needed.`,
    "pages.homepage.overlappingCards.cards.third.links.first": `Create with AI Builder`,
    "pages.homepage.sideBySideCards.cards.first.title": `More power & control`,
    "pages.homepage.sideBySideCards.cards.first.collapsableContent.first.title": `Automate the busywork`,
    "pages.homepage.sideBySideCards.cards.first.collapsableContent.first.description": `Turn hard work into smart work with n8n hosting. Use no-code, AI workflows to swap time-wasting manual tasks for easy, speedy automation. So you can focus on what really matters.`,
    "pages.homepage.sideBySideCards.cards.first.collapsableContent.first.links.first": `Learn more`,
    "pages.homepage.sideBySideCards.cards.first.collapsableContent.first.links.second": `Learn more`,
    "pages.homepage.sideBySideCards.cards.first.collapsableContent.second.title": `Performance you can rely on`,
    "pages.homepage.sideBySideCards.cards.first.collapsableContent.second.description": `Unlock blazing-fast performance and rock-solid stability with a Virtual Private Server (VPS). Built to keep your large online projects running smoothly and your data secure.`,
    "pages.homepage.sideBySideCards.cards.first.collapsableContent.second.links.first": `Learn more`,
    "pages.homepage.sideBySideCards.cards.first.collapsableContent.second.links.second": `Learn more`,
    "pages.homepage.sideBySideCards.cards.second.title": `More flexible growth`,
    "pages.homepage.sideBySideCards.cards.second.collapsableContent.first.title": `Hosting that grows with you`,
    "pages.homepage.sideBySideCards.cards.second.collapsableContent.first.description": `Cloud hosting offers scalable resources that ensure you never reach a limit. Keep growing with reliable uptime, powerful performance, enhanced security, and flexible pricing.`,
    "pages.homepage.sideBySideCards.cards.second.collapsableContent.first.links.first": `Learn more`,
    "pages.homepage.sideBySideCards.cards.second.collapsableContent.first.links.second": `Learn more`,
    "pages.homepage.sideBySideCards.cards.second.collapsableContent.second.title": `Hosting for agencies`,
    "pages.homepage.sideBySideCards.cards.second.collapsableContent.second.description": `Make access sharing, managing multiple websites, and client collaboration secure and seamless.`,
    "pages.homepage.sideBySideCards.cards.second.collapsableContent.second.links.first": `Learn more`,
    "pages.homepage.sideBySideCards.cards.second.collapsableContent.second.links.second": `Learn more`,
    "pages.homepage.sideBySideCardsReverse.cards.first.title": `More power & control`,
    "pages.homepage.sideBySideCardsReverse.cards.first.collapsableContent.first.title": `Automate with self-hosted n8n`,
    "pages.homepage.sideBySideCardsReverse.cards.first.collapsableContent.first.description": `Turn hard work into smart work with n8n hosting. Use no-code, AI workflows to swap time-wasting manual tasks for easy, speedy automation. So you can focus on what really matters.`,
    "pages.homepage.sideBySideCardsReverse.cards.first.collapsableContent.first.links.first": `Learn more`,
    "pages.homepage.sideBySideCardsReverse.cards.first.collapsableContent.first.links.second": `Learn more`,
    "pages.homepage.sideBySideCardsReverse.cards.first.collapsableContent.second.title": `VPS for more power and control`,
    "pages.homepage.sideBySideCardsReverse.cards.first.collapsableContent.second.description": `Unlock blazing-fast performance and rock-solid stability with a Virtual Private Server (VPS). Built to keep your large online projects running smoothly and your data secure.`,
    "pages.homepage.sideBySideCardsReverse.cards.first.collapsableContent.second.links.first": `Learn more`,
    "pages.homepage.sideBySideCardsReverse.cards.first.collapsableContent.second.links.second": `Learn more`,
    "pages.homepage.sideBySideCardsReverse.cards.second.title": `Everything you need to go live`,
    "pages.homepage.sideBySideCardsReverse.cards.second.collapsableContent.first.title": `Web hosting made easy`,
    "pages.homepage.sideBySideCardsReverse.cards.second.collapsableContent.first.description": `Fast, secure web hosting with one-click WordPress, free SSL, and free migration. Everything you need to get online - and stay online.`,
    "pages.homepage.sideBySideCardsReverse.cards.second.collapsableContent.first.links.first": `Learn more`,
    "pages.homepage.sideBySideCardsReverse.cards.second.collapsableContent.first.links.second": `Learn more`,
    "pages.homepage.sideBySideCardsReverse.cards.second.collapsableContent.second.title": `Hosting for agencies`,
    "pages.homepage.sideBySideCardsReverse.cards.second.collapsableContent.second.description": `Make access sharing, managing multiple websites, and client collaboration secure and seamless.`,
    "pages.homepage.sideBySideCardsReverse.cards.second.collapsableContent.second.links.first": `Learn more`,
    "pages.homepage.sideBySideCardsReverse.cards.second.collapsableContent.second.links.second": `Learn more`,
    "pages.homepage.outstandingCards.cards.first.title": `5M+`,
    "pages.homepage.outstandingCards.cards.first.description": `Clients trust Hostinger`,
    "pages.homepage.outstandingCards.cards.second.title": `150+`,
    "pages.homepage.outstandingCards.cards.second.description": `Countries served`,
    "pages.homepage.outstandingCards.cards.third.title": `20+`,
    "pages.homepage.outstandingCards.cards.third.description": `Years of experience`,
    "pages.homepage.outstandingCards.cards.fourth.title": `10M+`,
    "pages.homepage.outstandingCards.cards.fourth.description": `Websites created with us`,
    "pages.homepage.ctaSection.badge.text": `AI tools`,
    "pages.homepage.ctaSection.title": `Human-led, AI-powered`,
    "pages.homepage.ctaSection.description": `Hostinger’s AI experience helps you seamlessly grow online, while keeping you firmly in control of your online success.`,
    "pages.homepage.ctaSection.button": `Get started`,
    "pages.homepage.ctaSection.buttonSeePlans": `See plans`,
    "pages.homepage.ctaSection.buttonGetStarted": `Get started`,
    "pages.homepage.contentCards.cards.first.title": `Your AI agent, Kodee`,
    "pages.homepage.contentCards.cards.first.description": `Kodee takes the stress out of managing your online presence with instant help and proactive support.`,
    "pages.homepage.contentCards.cards.second.title": `Backstage AI`,
    "pages.homepage.contentCards.cards.second.description": `Behind the scenes, Hostinger's built-in AI automates tasks, assists in decision-making, and boosts your visibility in AI-generated search results.`,
    "pages.homepage.contentCards.cards.third.title": `AI tools`,
    "pages.homepage.contentCards.cards.third.description": `Create, launch, and scale smarter with AI tools at your fingertips – a logo maker, image generator, and more.`,
    "pages.homepage.support.title": `Start with Kodee`,
    "pages.homepage.support.description": `Start chat or reach out on WhatsApp at <a href='tel:{tel}' class='h-t-body-1-bold-underline'> {tel}</a>, Kodee will help you choose the right plan, set things up, and start your online journey with us.`,
    "pages.homepage.verticalCards.badge.text": `Smarter email`,
    "pages.homepage.verticalCards.title": `Email your audience with confidence`,
    "pages.homepage.verticalCards.cards.first.badge.text": `Business`,
    "pages.homepage.verticalCards.cards.first.title": `Build trust with a professional business email`,
    "pages.homepage.verticalCards.cards.first.description": `Polish your brand, protect your inbox, and grow your business with tools that keep you in the driver’s seat.`,
    "pages.homepage.verticalCards.cards.first.features.first": `Build trust with a branded business email`,
    "pages.homepage.verticalCards.cards.first.features.second": `Seamless email access across all apps and devices`,
    "pages.homepage.verticalCards.cards.first.features.third": `Private, protected, and always online`,
    "pages.homepage.verticalCards.cards.first.button": `Set up business email`,
    "pages.homepage.verticalCards.cards.first.buttonGeneric": `Learn more`,
    "pages.homepage.verticalCards.cards.second.badge.text": `Marketing`,
    "pages.homepage.verticalCards.cards.second.title": `Grow your business with AI-powered email marketing`,
    "pages.homepage.verticalCards.cards.second.description": `With Reach, you can schedule emails, automate sequences to save time, and maintain brand consistency.`,
    "pages.homepage.verticalCards.cards.second.features.first": `Design and write emails with AI`,
    "pages.homepage.verticalCards.cards.second.features.second": `Your logo and colors, auto-applied`,
    "pages.homepage.verticalCards.cards.second.features.third": `No coding required`,
    "pages.homepage.verticalCards.cards.second.button": `Start email marketing with Reach`,
    "pages.homepage.verticalCards.cards.second.buttonGeneric": `Learn more`,
    "pages.homepage.imageSection.badge.text": `Inspiration`,
    "pages.homepage.imageSection.title": `Made with Hostinger`,
    "pages.homepage.imageSection.description": `Now it’s your turn to succeed online, whether it's an ecommerce store, blog, portfolio, or business site.`,
    "pages.homepage.imageSection.button": `Get started`,
    "pages.homepage.imageSection.buttonSeePlans": `See plans`,
    "pages.homepage.imageSection.buttonGetStarted": `Get started`,
    "pages.homepage.pricingTable.badge": `Plans and pricing`,
    "pages.homepage.pricingTable.title": `Pick the plan that checks your boxes`,
    "pages.homepage.pricingTable.experiment.title": `Choose the plan that matches what you need`,
    "pages.homepage.pricingTable.experiment.description": `Get the essentials for building, launching, selling, and managing online.`,
    "pages.homepage.kodee.title": `Not sure which plan to choose?`,
    "pages.homepage.kodee.description": `Our smart AI agent, Kodee, is here to help you find the best package for your project.`,
    "pages.homepage.kodee.button": `Ask Kodee`,
    "pages.homepage.ecommerce.overlappingCard.title": `Grow sales and keep more of what you earn`,
    "pages.homepage.ecommerce.overlappingCard.description": `Sell with 0% transaction fees and reach more customers across channels.`,
    "pages.homepage.ecommerce.overlappingCard.links.first": `Explore Ecommerce`,
    "pages.homepage.emailMarketing.overlappingCard.title": `Bring customers back with AI email marketing`,
    "pages.homepage.emailMarketing.overlappingCard.description": `Create email campaigns, re-engage inactive subscribers, and see what’s working, without doing it all manually.`,
    "pages.homepage.emailMarketing.overlappingCard.links.first": `Explore AI email marketing`,
    "pages.homepage.reviewsMasonry.heading": `See what our customers are creating with Hostinger`,
    "pages.homepage.reviewsMasonry.description": `Their ideas went live. Yours could be next.`,
    "pages.homepage.reviewsMasonry.button": `Explore templates`,
    "pages.homepage.reviewsMasonry.seeMore": `See more`,
    "pages.homepage.reviewsMasonry.badges.realEstate": `Real estate`,
    "pages.homepage.reviewsMasonry.badges.booking": `Booking`,
    "pages.homepage.reviewsMasonry.badges.veterinary": `Veterinary`,
    "pages.homepage.reviewsMasonry.badges.ecommerce": `eCommerce`,
    "pages.homepage.reviewsMasonry.badges.portfolio": `Portfolio`,
    "pages.homepage.reviewsMasonry.badges.restaurant": `Restaurant`,
    "pages.homepage.reviewsMasonry.captions.bakeryBusiness": `Bakery <br/>business`,
    "pages.homepage.reviewsMasonry.captions.beautyBrand": `Beauty <br/>brand`,
    "pages.homepage.reviewsMasonry.captions.digitalDesignAgency": `Digital design <br/>agency`,
    "pages.homepage.reviewsMasonry.quotes.jarrott.text": `“Hostinger AI Website Builder takes out a lot of manual work. The website I built was spot on - I had to make only a few changes.”`,
    "pages.homepage.reviewsMasonry.quotes.jarrott.name": `Jarrott Brown`,
    "pages.homepage.reviewsMasonry.quotes.jarrott.role": `Business owner`,
    "pages.homepage.reviewsMasonry.quotes.riishi.text": `“Hostinger AI Builder with AI makes development incredibly fast. I can quickly design, prototype, and launch ideas without wasting time.”`,
    "pages.homepage.reviewsMasonry.quotes.riishi.name": `Riishi Riitambhar`,
    "pages.homepage.reviewsMasonry.quotes.riishi.role": `Tech services`,
    "pages.homepage.reviewsMasonry.quotes.agata.text": `“With Hostinger AI Website Builder, it was another world - I explained what I wanted, and it did the rest. I had my website running in just one or two hours.”`,
    "pages.homepage.reviewsMasonry.quotes.agata.name": `Agata Nicolosi`,
    "pages.homepage.reviewsMasonry.quotes.agata.role": `Co-founder of Sui Generis`,
    "pages.homepage.expandingPanels.badgeText": `Gold Stevie®<br>Winner 2026`,
    "pages.homepage.expandingPanels.heading": `Your AI co-worker. Free with every plan.`,
    "pages.homepage.expandingPanels.description": `Migrate, fix, edit, and manage your site through chat. 85% of issues solved without a human. Only at Hostinger.`,
    "pages.homepage.expandingPanels.button": `Meet Kodee`,
    "pages.homepage.expandingPanels.panels.speedItUp.title": `Speed it up`,
    "pages.homepage.expandingPanels.panels.speedItUp.description": `Describe your speed issue to Kodee and get step-by-step tips to fix it.`,
    "pages.homepage.expandingPanels.panels.migrate.title": `Migrate`,
    "pages.homepage.expandingPanels.panels.migrate.description": `Tell Kodee you want to move your site to Hostinger and get help every step of the way.`,
    "pages.homepage.expandingPanels.panels.fix.title": `Fix`,
    "pages.homepage.expandingPanels.panels.fix.description": `Share your error with Kodee and get clear steps to sort it out.`,
    "pages.homepage.expandingPanels.panels.manage.title": `Manage`,
    "pages.homepage.expandingPanels.panels.manage.description": `Ask Kodee to help you manage your site, from plugins and domains to daily tasks.`,
    "pages.homepage.expandingPanels.panels.edit.title": `Edit`,
    "pages.homepage.expandingPanels.panels.edit.description": `Tell Kodee what you need changed and get the copy, code, or settings to add to your site.`,
    "pages.homepage.agents.overlappingCard.title": `Need extra hands? Bring in specialist agents`,
    "pages.homepage.agents.overlappingCard.description": `Our 7 AI agents come with specialist skills built in, so you can bring in the right one for the task.`,
    "pages.homepage.agents.overlappingCard.links.first": `Explore AI agents`,
    "pages.homepage.bannerWithImage.title": `Imagined it.<br>Now make it real.`,
    "pages.homepage.bannerWithImage.description": `30-day money-back guarantee. No credit card needed. We migrate your existing site for free.`,
    "pages.homepage.bannerWithImage.button": `Get started`,
    "pages.homepage.aiTools.title": `More power when you need it`,
    "pages.homepage.aiTools.heading.title": `Put AI to work for you`,
    "pages.homepage.aiTools.heading.description": `Build assistants, assign tasks to agents, and automate workflows, so more of your work gets done in the background.`,
    "pages.homepage.aiTools.overlappingCard.title": `Automations`,
    "pages.homepage.aiTools.overlappingCard.description": `Connect your tools, hand repetitive tasks to AI, and keep things running, even when you’re not.`,
    "pages.homepage.aiTools.overlappingCard.links.first": `OpenClaw`,
    "pages.homepage.aiTools.overlappingCard.links.second": `Hermes Agent`,
    "pages.homepage.aiTools.overlappingCard.links.third": `Self-hosted n8n`,
    "pages.homepage.aiTools.cards.aiManagedVps.title": `AI-managed VPS`,
    "pages.homepage.aiTools.cards.aiManagedVps.description": `Run your projects on an AI-managed VPS with full root access.`,
    "pages.homepage.aiTools.cards.webAppDeployment.title": `Web app deployment`,
    "pages.homepage.aiTools.cards.webAppDeployment.description": `Deploy AI-built or custom Node.js apps from GitHub or your code editor.`,
    "pages.homepage.aiTools.cards.cloudHosting.title": `Cloud hosting`,
    "pages.homepage.aiTools.cards.cloudHosting.description": `Scale with more power and resources.`,
    "pages.homepage.aiTools.cards.appCatalog.title": `App catalog`,
    "pages.homepage.aiTools.cards.appCatalog.description": `Launch AI tools, dev stacks, and popular apps in a few clicks.`,
    "pages.homepage.aiTools.cards.agencyHosting.title": `Agency hosting`,
    "pages.homepage.aiTools.cards.agencyHosting.description": `One safe place to share access, manage your sites, and work with clients.`,
  },
  ct = [`dir`, `data-view-id`],
  lt = { class: `homepage-kodee-prompt__inner` },
  ut = { class: `homepage-kodee-prompt__heading` },
  dt = { class: `homepage-kodee-prompt__title h-t-title-1` },
  ft = { class: `homepage-kodee-prompt__title-line` },
  pt = {
    class: `homepage-kodee-prompt__title-line homepage-kodee-prompt__title-line--gradient`,
  },
  mt = { class: `homepage-kodee-prompt__controls` },
  ht = [`placeholder`, `aria-label`],
  gt = [`aria-label`],
  _t = { class: `homepage-kodee-prompt__chips` },
  vt = z({
    __name: `HomepageKodeePrompt`,
    setup(e) {
      let { direction: n, pageNameDataClickId: r } = J(),
        { t: i } = Z(st),
        { openChatbot: a } = K(),
        o = D(``),
        s = D(null),
        c = y(() => [
          {
            key: `ecommerce`,
            label: i(`pages.homepage.kodeePrompt.chips.ecommerce`),
            trigger: { category: `online-store` },
          },
          {
            key: `portfolio`,
            label: i(`pages.homepage.kodeePrompt.chips.portfolio`),
            trigger: { category: `portfolio` },
          },
          {
            key: `business`,
            label: i(`pages.homepage.kodeePrompt.chips.business`),
            trigger: { category: `business` },
          },
          {
            key: `findDomain`,
            label: i(`pages.homepage.kodeePrompt.chips.findDomain`),
            trigger: {
              prompt: i(`pages.homepage.kodeePrompt.findDomainPrompt`),
            },
          },
        ]),
        l = () => {
          a({ prompt: o.value.trim() || void 0 }),
            (o.value = ``),
            s.value?.blur();
        },
        u = (e) => {
          a(e);
        };
      return (e, a) => (
        f(),
        w(
          `section`,
          {
            class: `homepage-kodee-prompt`,
            dir: S(n),
            "data-view-id": `hgr-${S(r)}-kodee-prompt`,
          },
          [
            x(`div`, lt, [
              x(`div`, ut, [
                B(S(P), {
                  name: `ic-kodee-24`,
                  color: `h-fg-neutral-default`,
                  dimensions: `40px`,
                }),
                x(`h2`, dt, [
                  x(`span`, ft, R(S(i)(`pages.homepage.kodeePrompt.title`)), 1),
                  x(
                    `span`,
                    pt,
                    R(S(i)(`pages.homepage.kodeePrompt.titleGradient`)),
                    1
                  ),
                ]),
              ]),
              x(`div`, mt, [
                x(
                  `form`,
                  {
                    class: `homepage-kodee-prompt__field`,
                    onSubmit: T(l, [`prevent`]),
                  },
                  [
                    b(
                      x(
                        `input`,
                        {
                          ref_key: `inputRef`,
                          ref: s,
                          "onUpdate:modelValue": (a[0] ||= (e) =>
                            g(o) ? (o.value = e) : null),
                          type: `text`,
                          class: `homepage-kodee-prompt__field-input h-t-body-1`,
                          "data-click-id": `hgr-homepage-kodee-prompt-input`,
                          "data-qa": `homepage-kodee-prompt-input`,
                          placeholder: S(i)(
                            `pages.homepage.kodeePrompt.placeholder`
                          ),
                          "aria-label": S(i)(
                            `pages.homepage.kodeePrompt.placeholder`
                          ),
                        },
                        null,
                        8,
                        ht
                      ),
                      [[N, S(o)]]
                    ),
                    x(
                      `button`,
                      {
                        type: `submit`,
                        class: `homepage-kodee-prompt__field-button`,
                        "data-click-id": `hgr-homepage-kodee-prompt-submit`,
                        "data-qa": `homepage-kodee-prompt-submit`,
                        "aria-label": S(i)(
                          `pages.homepage.kodeePrompt.placeholder`
                        ),
                      },
                      [
                        B(S(P), {
                          name: `ic-chevron-small-right-24`,
                          color: `h-color-neutral-0`,
                          dimensions: `24px`,
                        }),
                      ],
                      8,
                      gt
                    ),
                  ],
                  32
                ),
                x(`div`, _t, [
                  (f(!0),
                  w(
                    _,
                    null,
                    m(
                      S(c),
                      (e) => (
                        f(),
                        j(
                          S(p),
                          {
                            key: e.key,
                            color: `primary`,
                            variant: `filled`,
                            "is-dismissible": !1,
                            class: `homepage-kodee-prompt__chip h-t-body-2`,
                            "data-click-id": `hgr-homepage-kodee-prompt-chip-${e.key}`,
                            "data-qa": `homepage-kodee-prompt-chip-${e.key}`,
                            onClick: (t) => u(e.trigger),
                          },
                          { default: t(() => [I(R(e.label), 1)]), _: 2 },
                          1032,
                          [`data-click-id`, `data-qa`, `onClick`]
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
          ],
          8,
          ct
        )
      );
    },
  }),
  yt = e({ default: () => bt }),
  bt = Object.assign(Y(vt, [[`__scopeId`, `data-v-bbafe827`]]), {
    __name: `HomepageKodeePrompt`,
  }),
  xt = [`data-view-id`],
  St = { class: `h-grid homepage-outstanding-cards__grid` },
  Ct = { class: `homepage-outstanding-cards__card-content` },
  wt = { class: `homepage-outstanding-cards__card-title h-t-title-special` },
  Tt = {
    class: `homepage-outstanding-cards__card-description h-t-body-1 h-mt-48`,
  },
  Et = { class: `homepage-outstanding-cards__card-content` },
  Dt = { class: `homepage-outstanding-cards__card-title h-t-title-special` },
  Ot = {
    class: `homepage-outstanding-cards__card-description h-t-body-1 h-mt-48`,
  },
  kt = { class: `homepage-outstanding-cards__cards-scrollbar h-mt-24` },
  At = [`data-click-id`, `onClick`],
  jt = z({
    __name: `HomepageOutstandingCards`,
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      let t = e,
        { pageNameDataClickId: n } = J(),
        r = D(0),
        i = D(0),
        a = D(0),
        o = (e) => e.changedTouches.length !== 1,
        s = (e, t, n, r) => Math.abs(r - n) > 70 || Math.abs(t - e) < 35,
        c = (e) => {
          o(e) ||
            ((i.value = e.changedTouches[0]?.clientX || 0),
            (a.value = e.changedTouches[0]?.clientY || 0));
        },
        l = (e) => {
          if (o(e)) return;
          let n = e.changedTouches[0]?.clientX || 0,
            c = e.changedTouches[0]?.clientY || 0;
          s(i.value, n, a.value, c) ||
            (i.value < n && r.value !== 0
              ? --r.value
              : i.value > n &&
                r.value !== t.data.cards.length - 1 &&
                (r.value += 1));
        };
      return (t, i) => (
        f(),
        w(
          `section`,
          {
            class: F([
              `homepage-outstanding-cards`,
              {
                [`homepage-outstanding-cards--bg-${e.data.backgroundColor}`]:
                  !!e.data.backgroundColor,
              },
            ]),
            "data-view-id": `hgr-${S(n)}-outstanding_cards`,
          },
          [
            x(`div`, St, [
              (f(!0),
              w(
                _,
                null,
                m(
                  e.data.cards,
                  (e) => (
                    f(),
                    w(
                      `div`,
                      {
                        key: e.title,
                        class: F([
                          `homepage-outstanding-cards__card`,
                          `homepage-outstanding-cards__card--bg-${e.backgroundColor}`,
                        ]),
                      },
                      [
                        x(`div`, Ct, [
                          x(`h3`, wt, R(e.title), 1),
                          x(`p`, Tt, R(e.description), 1),
                        ]),
                      ],
                      2
                    )
                  )
                ),
                128
              )),
            ]),
            x(
              `div`,
              {
                class: `h-grid homepage-outstanding-cards__grid-mobile`,
                onTouchstart: c,
                onTouchend: l,
              },
              [
                (f(!0),
                w(
                  _,
                  null,
                  m(e.data.cards, (e, t) =>
                    b(
                      (f(),
                      w(
                        `div`,
                        {
                          key: e.title,
                          class: F([
                            `homepage-outstanding-cards__card`,
                            `homepage-outstanding-cards__card--bg-${e.backgroundColor}`,
                          ]),
                        },
                        [
                          x(`div`, Et, [
                            x(`h3`, Dt, R(e.title), 1),
                            x(`p`, Ot, R(e.description), 1),
                          ]),
                        ],
                        2
                      )),
                      [[A, S(r) === t]]
                    )
                  ),
                  128
                )),
                x(`div`, kt, [
                  (f(!0),
                  w(
                    _,
                    null,
                    m(
                      e.data.cards,
                      (e, t) => (
                        f(),
                        w(
                          `div`,
                          {
                            key: t,
                            class: F([
                              `homepage-outstanding-cards__cards-scrollbar-thumb`,
                              {
                                "homepage-outstanding-cards__cards-scrollbar-thumb--active":
                                  S(r) === t,
                              },
                            ]),
                            "data-click-id": `hgr-${S(
                              n
                            )}-outstanding_cards-card-${t}-click`,
                            onClick: (e) => (r.value = t),
                          },
                          null,
                          10,
                          At
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              32
            ),
          ],
          10,
          xt
        )
      );
    },
  }),
  Mt = e({ default: () => Nt }),
  Nt = Object.assign(Y(jt, [[`__scopeId`, `data-v-4ff1f1c4`]]), {
    __name: `HomepageOutstandingCards`,
  }),
  Pt = [`dir`],
  Ft = { class: `h-grid` },
  It = { class: `homepage-overlapping-card__left-content` },
  Lt = { class: `homepage-overlapping-card__right-content` },
  Rt = {
    class: `homepage-overlapping-card__description h-t-body-1 h-mt-12 h-mt-16-d h-mb-32 h-mb-48-d`,
  },
  zt = { class: `homepage-overlapping-card__link-icon` },
  Bt = {
    key: 3,
    class: `homepage-overlapping-card__footnote h-t-body-2 h-mt-12 h-mt-20-d`,
  },
  Vt = { key: 4, class: `homepage-overlapping-card__social` },
  Ht = { key: 0, class: `homepage-overlapping-card__avatars` },
  Ut = [`innerHTML`],
  Wt = Object.assign(
    Y(
      z({
        __name: `HomepageOverlappingCard`,
        props: {
          data: { type: Object, required: !0 },
          isFirst: { type: Boolean, default: !1 },
        },
        setup(e) {
          let n = D(),
            r = W(n, { threshold: 0.1, once: !0 }),
            { pageNameDataClickId: i, isQaMode: a, direction: l } = J();
          return (
            h(r, () => {
              r.value &&
                setTimeout(() => n.value?.play()?.catch(() => {}), 200);
            }),
            c(() => {
              n.value = document.querySelector(`video`);
            }),
            (n, r) => {
              let c = U,
                u = se,
                d = G;
              return (
                f(),
                w(
                  `div`,
                  {
                    class: F([
                      `homepage-overlapping-card`,
                      {
                        [`homepage-overlapping-card--bg-${e.data.backgroundColor}`]:
                          !!e.data.backgroundColor,
                        "homepage-overlapping-card--first": e.isFirst,
                        "homepage-overlapping-card--qa-mode": S(a),
                        "homepage-overlapping-card--reverse": e.data.reverse,
                        "homepage-overlapping-card--no-overlap":
                          e.data.noOverlap,
                      },
                    ]),
                    dir: S(l),
                  },
                  [
                    x(`div`, Ft, [
                      x(`div`, It, [
                        B(c, { media: e.data.image }, null, 8, [`media`]),
                      ]),
                      x(`div`, Lt, [
                        x(
                          `div`,
                          {
                            class: F([
                              `homepage-overlapping-card__content`,
                              {
                                "homepage-overlapping-card__content--narrow":
                                  e.data.narrowContent,
                              },
                            ]),
                          },
                          [
                            s(n.$slots, `top`, {}, void 0, !0),
                            e.data.icon
                              ? (f(),
                                j(
                                  S(P),
                                  {
                                    key: 0,
                                    name: e.data.icon,
                                    dimensions: `32px`,
                                  },
                                  null,
                                  8,
                                  [`name`]
                                ))
                              : O(``, !0),
                            e.data.badge
                              ? (f(),
                                j(
                                  u,
                                  {
                                    key: 1,
                                    data: {
                                      backgroundColor:
                                        e.data.badge.backgroundColor,
                                    },
                                  },
                                  {
                                    default: t(() => [
                                      I(R(e.data.badge.text), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  [`data`]
                                ))
                              : O(``, !0),
                            e.data.title
                              ? (f(),
                                j(
                                  o(e.data.titleTag ?? `h3`),
                                  {
                                    key: 2,
                                    class: F([
                                      e.data.titleVariant || `h-t-title-1`,
                                      `h-mt-16`,
                                    ]),
                                  },
                                  {
                                    default: t(() => [I(R(e.data.title), 1)]),
                                    _: 1,
                                  },
                                  8,
                                  [`class`]
                                ))
                              : O(``, !0),
                            x(`p`, Rt, R(e.data.description), 1),
                            (f(!0),
                            w(
                              _,
                              null,
                              m(
                                e.data.links,
                                (n, r) => (
                                  f(),
                                  w(
                                    `div`,
                                    {
                                      key: n.text,
                                      class: `homepage-overlapping-card__link-container`,
                                    },
                                    [
                                      B(
                                        d,
                                        {
                                          to: n.href,
                                          target: n.target,
                                          class: `homepage-overlapping-card__link h-t-heading-1-regular`,
                                          "data-click-id": `hgr-${S(
                                            i
                                          )}-overlapping_cards-${
                                            e.data.dataClickId
                                              ? `${e.data.dataClickId}-`
                                              : ``
                                          }link-${r}-click`,
                                        },
                                        {
                                          default: t(() => [
                                            I(R(n.text) + ` `, 1),
                                            x(`div`, zt, [
                                              B(
                                                S(P),
                                                {
                                                  name:
                                                    S(l) === `rtl`
                                                      ? `ic-arrow-left-24`
                                                      : `ic-arrow-right-24`,
                                                  class: `homepage-overlapping-card__link-icon-arrow homepage-overlapping-card__link-icon-arrow--second`,
                                                },
                                                null,
                                                8,
                                                [`name`]
                                              ),
                                              B(
                                                S(P),
                                                {
                                                  name:
                                                    S(l) === `rtl`
                                                      ? `ic-arrow-left-24`
                                                      : `ic-arrow-right-24`,
                                                  class: `homepage-overlapping-card__link-icon-arrow homepage-overlapping-card__link-icon-arrow`,
                                                },
                                                null,
                                                8,
                                                [`name`]
                                              ),
                                            ]),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        [`to`, `target`, `data-click-id`]
                                      ),
                                      r !== e.data.links.length - 1 || r === 0
                                        ? (f(),
                                          w(
                                            `div`,
                                            {
                                              key: 0,
                                              class: F([
                                                `homepage-overlapping-card__link-separator h-mt-12 h-mt-20-d`,
                                                {
                                                  "h-mb-16":
                                                    e.data.links.length > 1,
                                                },
                                              ]),
                                            },
                                            null,
                                            2
                                          ))
                                        : O(``, !0),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                            e.data.footnote
                              ? (f(), w(`p`, Bt, R(e.data.footnote), 1))
                              : O(``, !0),
                            e.data.socialProof
                              ? (f(),
                                w(`div`, Vt, [
                                  e.data.socialProof.avatars?.length
                                    ? (f(),
                                      w(`div`, Ht, [
                                        (f(!0),
                                        w(
                                          _,
                                          null,
                                          m(
                                            e.data.socialProof.avatars,
                                            (e, t) => (
                                              f(),
                                              j(
                                                c,
                                                {
                                                  key: t,
                                                  class: `homepage-overlapping-card__avatar`,
                                                  media: e,
                                                },
                                                null,
                                                8,
                                                [`media`]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]))
                                    : O(``, !0),
                                  e.data.socialProof.text
                                    ? (f(),
                                      w(
                                        `span`,
                                        {
                                          key: 1,
                                          class: `homepage-overlapping-card__social-text h-t-body-2`,
                                          innerHTML: e.data.socialProof.text,
                                        },
                                        null,
                                        8,
                                        Ut
                                      ))
                                    : O(``, !0),
                                ]))
                              : O(``, !0),
                          ],
                          2
                        ),
                      ]),
                    ]),
                  ],
                  10,
                  Pt
                )
              );
            }
          );
        },
      }),
      [[`__scopeId`, `data-v-68411594`]]
    ),
    { __name: `HomepageOverlappingCard` }
  ),
  Gt = [`data-view-id`],
  Kt = { class: `homepage-overlapping-cards__cards` },
  qt = z({
    __name: `HomepageOverlappingCards`,
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      let n = e,
        { pageNameDataClickId: r } = J(),
        i = y(() => n.data.cards.length < 2),
        a = D([]),
        o = D(n.data.cards.reduce((e, t, n) => ({ ...e, [n]: 0 }), {})),
        s = (e, t) => {
          let n = e[0]?.intersectionRatio || 0.01,
            r = 0;
          n <= 0.2 && (r = 0),
            n > 0.2 && n < 0.7 && (r = (n / 100) * 25),
            n >= 0.7 && (r = 0.2),
            (o.value[t - 1] = r);
        },
        u = (e) =>
          new IntersectionObserver(
            (t) => {
              s(t, e);
            },
            {
              threshold: [
                0.01, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.99,
              ],
            }
          );
      return (
        c(() => {
          i.value ||
            ((a.value = n.data.cards
              .filter((e, t) => t > 0)
              .map((e, t) => u(t + 1))),
            a.value.forEach((e, t) => {
              let n = document.querySelector(
                `#homepage-overlapping-card-${t + 1}`
              );
              e.observe(n);
            }));
        }),
        l(() => {
          a.value.forEach((e) => e.disconnect());
        }),
        (n, a) => {
          let s = se,
            c = q;
          return (
            f(),
            w(
              `section`,
              {
                class: F([
                  `homepage-overlapping-cards`,
                  {
                    [`homepage-overlapping-cards--bg-${e.data.backgroundColor}`]:
                      !!e.data.backgroundColor,
                  },
                ]),
                "data-view-id": `hgr-${S(r)}-overlapping_cards`,
              },
              [
                e.data.headingData
                  ? (f(),
                    j(
                      c,
                      { key: 0, data: e.data.headingData, class: `h-grid` },
                      C({ _: 2 }, [
                        e.data?.badge
                          ? {
                              name: `top-content`,
                              fn: t(() => [
                                B(
                                  s,
                                  {
                                    data: {
                                      backgroundColor:
                                        e.data.badge.backgroundColor,
                                    },
                                    class: `homepage-overlapping-cards__badge`,
                                  },
                                  {
                                    default: t(() => [
                                      I(R(e.data.badge.text), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  [`data`]
                                ),
                              ]),
                              key: `0`,
                            }
                          : void 0,
                      ]),
                      1032,
                      [`data`]
                    ))
                  : O(``, !0),
                x(`div`, Kt, [
                  (f(!0),
                  w(
                    _,
                    null,
                    m(
                      e.data.cards,
                      (e, t) => (
                        f(),
                        w(
                          `div`,
                          { key: t, class: `homepage-overlapping-cards__card` },
                          [
                            B(
                              Wt,
                              {
                                id: `homepage-overlapping-card-${t}`,
                                data: { ...e, noOverlap: S(i) },
                                "is-first": t === 0,
                              },
                              null,
                              8,
                              [`id`, `data`, `is-first`]
                            ),
                            !S(i) && (S(o)[t] || 0) > 0
                              ? (f(),
                                w(
                                  `div`,
                                  {
                                    key: 0,
                                    class: `homepage-overlapping-cards__card-overlay`,
                                    style: v({ opacity: S(o)[t] }),
                                  },
                                  null,
                                  4
                                ))
                              : O(``, !0),
                          ]
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              10,
              Gt
            )
          );
        }
      );
    },
  }),
  Jt = e({ default: () => Yt }),
  Yt = Object.assign(Y(qt, [[`__scopeId`, `data-v-a16e8213`]]), {
    __name: `HomepageOverlappingCards`,
  }),
  Xt = [`data-view-id`, `dir`],
  Zt = [`src`],
  Qt = { class: `h-grid homepage-product-cards__container` },
  $t = { class: `homepage-product-cards__card-content` },
  en = { class: `homepage-product-cards__card-heading h-mb-4 h-mb-8-d` },
  tn = { class: `h-t-title-3` },
  nn = { class: `homepage-product-cards__card-description h-t-body-1` },
  rn = { class: `homepage-product-cards__card-bottom` },
  an = { key: 0, class: `homepage-product-cards__card-bottom-container` },
  on = [`innerHTML`],
  sn = { key: 1, class: `homepage-product-cards__card-bottom-container` },
  cn = { key: 0, class: `h-t-heading-1-regular` },
  ln = { key: 1, class: `homepage-product-cards__subtext h-t-body-2` },
  un = { key: 0, class: `homepage-product-cards__card-search-btn-icon` },
  dn = z({
    __name: `HomepageProductCards`,
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      let n = e,
        {
          pageNameDataClickId: r,
          pageName: a,
          isQaMode: s,
          direction: u,
        } = J(),
        { getRouteLink: p } = ee(),
        { screen: h } = V(),
        { isMonsoon2026SaleActive: v, isSummer2026SaleActive: b } = oe(),
        C = D(``),
        k = D(n.data.dynamicPlaceholderParts?.[0] || ``),
        A = D(
          n.data.dynamicPlaceholderParts
            ? (n.data.dynamicPlaceholderParts[0]?.length || 0) + 1
            : 0
        ),
        N = D(!1),
        L = D(null),
        z = D(!1),
        H = D(!1),
        U = D(null),
        W = null,
        K = null,
        q = y(() => $(n.data.backgroundColor)),
        Y = y(() =>
          H.value
            ? ``
            : n.data.dynamicPlaceholderParts
            ? `${n.data.staticPlaceholder}${k.value.slice(0, A.value)}`
            : n.data.staticPlaceholder
        ),
        te = y(() => h.value === `mobile`),
        ne = async () => {
          C.value &&
            ((C.value = C.value.replace(/www\./i, ``)),
            (C.value = C.value.replace(/^-+/, ``)),
            (C.value = C.value.replace(/https?:\/\//i, ``)),
            (C.value = C.value.trim()),
            re(C.value));
        },
        re = (e) => {
          let t = p(`domain-name-results`);
          window.location.href = `${t}?domain=${encodeURIComponent(e)}&from=${
            a.value
          }`;
        },
        X = () => {
          (z.value = !0),
            setTimeout(() => {
              z.value = !1;
            }, 2e3);
        },
        ie = () => {
          if (!z.value)
            if (N.value)
              A.value < (k.value || ``).length
                ? A.value++
                : ((N.value = !1), X());
            else if (A.value > 0) A.value--;
            else {
              let e =
                (n.data.dynamicPlaceholderParts || []).indexOf(k.value) + 1;
              (k.value =
                (n.data.dynamicPlaceholderParts || []).at(e) ||
                (n.data.dynamicPlaceholderParts || [])[0] ||
                ``),
                (A.value = 0),
                (N.value = !0);
            }
        },
        Z = () => {
          let e = U.value;
          if (!e || h.value !== `desktop`) return;
          let t = e.getBoundingClientRect(),
            n = window.innerHeight,
            r = 120 + -170 * Math.max(0, Math.min(1, (n - t.top) / (n * 0.7)));
          e.style.transform = `translateY(${r}px)`;
        },
        ae = () => {
          W === null &&
            (W = requestAnimationFrame(() => {
              Z(), (W = null);
            }));
        };
      return (
        c(() => {
          n.data.dynamicPlaceholderParts &&
            !s.value &&
            (L.value = setInterval(ie, 50)),
            (v.value || b.value) &&
              ((K = ae),
              window.addEventListener(`scroll`, K, { passive: !0 }),
              Z());
        }),
        l(() => {
          L.value && n.data.dynamicPlaceholderParts && clearInterval(L.value),
            (K &&= (window.removeEventListener(`scroll`, K), null)),
            W !== null && (cancelAnimationFrame(W), (W = null));
        }),
        (n, a) => (
          f(),
          w(
            `section`,
            E({ class: `homepage-product-cards` }, S(q), {
              "data-view-id": `hgr-${S(r)}-product_cards`,
              dir: S(u),
            }),
            [
              S(v) || S(b)
                ? (f(),
                  w(
                    `img`,
                    {
                      key: 0,
                      ref_key: `cardPercentageRef`,
                      ref: U,
                      class: F([
                        `homepage-product-cards__card-percentage`,
                        {
                          "homepage-product-cards__card-percentage--summer":
                            S(b),
                        },
                      ]),
                      src: `https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/${
                        S(b)
                          ? `396d6a55-9851-4356-dafb-da12bd0fcf00`
                          : `3f343fe3-81a3-4456-ee70-6f03a59e5000`
                      }/sharpen=0`,
                      alt: ``,
                      "aria-hidden": `true`,
                    },
                    null,
                    10,
                    Zt
                  ))
                : O(``, !0),
              x(`div`, Qt, [
                (f(!0),
                w(
                  _,
                  null,
                  m(
                    e.data.cards,
                    (e) => (
                      f(),
                      j(
                        o(e.link && !e.domainSearchButton ? S(G) : `div`),
                        E(
                          {
                            key: e.heading,
                            to: e.domainSearchButton ? void 0 : e.link,
                            class: [
                              `homepage-product-cards__card`,
                              {
                                "homepage-product-cards__card--link":
                                  !!e.link && !e.domainSearchButton,
                              },
                            ],
                          },
                          { ref_for: !0 },
                          S($)(e.backgroundColor),
                          {
                            "data-click-id": `hgr-${S(r)}-product_card-${
                              e.clickId ?? (e.link ? `link` : `domain-search`)
                            }`,
                          }
                        ),
                        {
                          default: t(() => [
                            x(`div`, $t, [
                              x(`div`, en, [
                                x(`h2`, tn, R(e.heading), 1),
                                e.link
                                  ? (f(),
                                    j(S(P), {
                                      key: 0,
                                      name: `ic-arrow-right-24`,
                                      dimensions: `28px`,
                                      class: `homepage-product-cards__card-arrow`,
                                    }))
                                  : O(``, !0),
                              ]),
                              x(`p`, nn, R(e.description), 1),
                              x(`div`, rn, [
                                e.price
                                  ? (f(),
                                    w(`div`, an, [
                                      x(`div`, null, [
                                        x(
                                          `p`,
                                          {
                                            class: `h-t-body-1`,
                                            innerHTML: e.price,
                                          },
                                          null,
                                          8,
                                          on
                                        ),
                                      ]),
                                    ]))
                                  : O(``, !0),
                                e.linkText
                                  ? (f(),
                                    w(`div`, sn, [
                                      x(`div`, null, [
                                        e.linkText
                                          ? (f(), w(`p`, cn, R(e.linkText), 1))
                                          : O(``, !0),
                                        e.subText
                                          ? (f(), w(`p`, ln, R(e.subText), 1))
                                          : O(``, !0),
                                      ]),
                                    ]))
                                  : O(``, !0),
                                e.domainSearchButton
                                  ? (f(),
                                    j(
                                      S(d),
                                      {
                                        key: 2,
                                        id: `h-domain-search-input`,
                                        modelValue: S(C),
                                        "onUpdate:modelValue": (a[0] ||= (e) =>
                                          g(C) ? (C.value = e) : null),
                                        class: `homepage-product-cards__card-search-input theme-base mode-light`,
                                        placeholder: S(Y),
                                        "show-clear-icon": !1,
                                        "remove-bottom-padding": ``,
                                        size: `large`,
                                        onFocus: (a[1] ||= (e) =>
                                          (H.value = !0)),
                                        onBlur: (a[2] ||= (e) =>
                                          (H.value = !1)),
                                        onKeydown: M(
                                          T(ne, [`prevent`, `stop`]),
                                          [`enter`]
                                        ),
                                        onClick: (a[3] ||= T(() => {}, [
                                          `prevent`,
                                          `stop`,
                                        ])),
                                      },
                                      {
                                        "icon-prepend": t(() => [
                                          B(S(P), {
                                            name: `ic-magnifying-glass-24`,
                                            color: `h-color-neutral-800`,
                                          }),
                                        ]),
                                        "icon-append": t(() => [
                                          B(
                                            S(i),
                                            {
                                              class: `homepage-product-cards__card-search-btn`,
                                              "data-qa": `homepage-domain-search-button`,
                                              "data-click-id": `hgr-${S(
                                                r
                                              )}-domain_search-search_button`,
                                              "aria-label":
                                                e.domainSearchButton,
                                              onClick: ne,
                                            },
                                            {
                                              default: t(() => [
                                                S(te)
                                                  ? (f(),
                                                    w(`div`, un, [
                                                      B(S(P), {
                                                        name: `ic-magnifying-glass-24`,
                                                      }),
                                                    ]))
                                                  : (f(),
                                                    w(
                                                      _,
                                                      { key: 1 },
                                                      [
                                                        I(
                                                          R(
                                                            e.domainSearchButton
                                                          ),
                                                          1
                                                        ),
                                                      ],
                                                      64
                                                    )),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            [`data-click-id`, `aria-label`]
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      [`modelValue`, `placeholder`, `onKeydown`]
                                    ))
                                  : O(``, !0),
                              ]),
                            ]),
                            e.backgroundEffect === `gradient`
                              ? (f(),
                                w(
                                  _,
                                  { key: 0 },
                                  [
                                    (a[4] ||= x(
                                      `svg`,
                                      {
                                        class: `homepage-product-cards__card-gradient homepage-product-cards__card-gradient--1`,
                                        xmlns: `http://www.w3.org/2000/svg`,
                                        width: `428`,
                                        height: `264`,
                                        viewBox: `0 0 428 264`,
                                        fill: `none`,
                                      },
                                      [
                                        x(`path`, {
                                          d: `M427.181 -66.8818H427.176V-59.3643L270.141 264.498L-0.000976563 264.5L-0.000976563 -397.743L0.00390625 -397.744L0.00390625 -405.261L157.039 -729.123L427.181 -729.125L427.181 -66.8818Z`,
                                          fill: `url(#paint0_linear_16879_102420)`,
                                        }),
                                        x(`defs`, null, [
                                          x(
                                            `linearGradient`,
                                            {
                                              id: `paint0_linear_16879_102420`,
                                              x1: `338.394`,
                                              y1: `-568.39`,
                                              x2: `-148.501`,
                                              y2: `-423.557`,
                                              gradientUnits: `userSpaceOnUse`,
                                            },
                                            [
                                              x(`stop`, {
                                                "stop-color": `#673DE6`,
                                              }),
                                              x(`stop`, {
                                                offset: `1`,
                                                "stop-color": `#8578FA`,
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ],
                                      -1
                                    )),
                                    (a[5] ||= x(
                                      `svg`,
                                      {
                                        class: `homepage-product-cards__card-gradient homepage-product-cards__card-gradient--2`,
                                        xmlns: `http://www.w3.org/2000/svg`,
                                        width: `536`,
                                        height: `264`,
                                        viewBox: `0 0 536 264`,
                                        fill: `none`,
                                      },
                                      [
                                        x(`path`, {
                                          d: `M0.000994021 -150.043L-0.00388879 -150.043L-0.00387091 -574.117L196.8 -979.998L535.355 -980L535.355 -565.956L535.359 -565.957L535.359 -141.882L338.556 263.998L0.000976562 264L0.000994021 -150.043Z`,
                                          fill: `url(#paint0_linear_16879_102414)`,
                                        }),
                                        x(`defs`, null, [
                                          x(
                                            `linearGradient`,
                                            {
                                              id: `paint0_linear_16879_102414`,
                                              x1: `111.268`,
                                              y1: `62.56`,
                                              x2: `721.467`,
                                              y2: `-118.951`,
                                              gradientUnits: `userSpaceOnUse`,
                                            },
                                            [
                                              x(`stop`, {
                                                "stop-color": `#673DE6`,
                                              }),
                                              x(`stop`, {
                                                offset: `1`,
                                                "stop-color": `#8578FA`,
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ],
                                      -1
                                    )),
                                  ],
                                  64
                                ))
                              : O(``, !0),
                          ]),
                          _: 2,
                        },
                        1040,
                        [`to`, `class`, `data-click-id`]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ],
            16,
            Xt
          )
        )
      );
    },
  }),
  fn = e({ default: () => pn }),
  pn = Object.assign(Y(dn, [[`__scopeId`, `data-v-440756b7`]]), {
    __name: `HomepageProductCards`,
  }),
  mn = [`role`, `tabindex`, `data-click-id`, `onClick`, `onKeydown`],
  hn = { key: 1, class: `homepage-reviews-masonry__badge h-t-body-3-bold` },
  gn = {
    key: 2,
    class: `homepage-reviews-masonry__play`,
    "aria-hidden": `true`,
  },
  _n = [`innerHTML`],
  vn = { class: `h-t-body-1` },
  yn = { key: 1, class: `homepage-reviews-masonry__author` },
  bn = { class: `homepage-reviews-masonry__author-text` },
  xn = { class: `h-t-body-1` },
  Sn = { class: `homepage-reviews-masonry__author-role h-t-body-2` },
  Cn = 3,
  wn = z({
    __name: `HomepageReviewsMasonry`,
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      let n = e,
        { pageNameDataClickId: r } = J(),
        { screen: o } = V(),
        s = D(!1),
        c = y(() => (o.value === `desktop` ? 4 : o.value === `tablet` ? 3 : 1)),
        l = D(null),
        u = y({
          get: () => l.value !== null,
          set: (e) => {
            e || (l.value = null);
          },
        }),
        d = (e) => {
          e.videoUrl && (l.value = { url: e.videoUrl, title: e.caption ?? `` });
        },
        p = y(() => {
          let e = c.value,
            [t = [], r = [], i = [], a = []] = n.data.columns;
          if (e >= 4) return n.data.columns;
          if (e === 1) return [[...a, ...t, ...r, ...i]];
          let o = Array.from({ length: e }, () => []);
          return (
            [...t, ...r, ...i, ...a].forEach((t, n) => o[n % e]?.push(t)), o
          );
        }),
        h = y(() =>
          c.value > 1
            ? { gridTemplateColumns: `repeat(${c.value}, minmax(0, 1fr))` }
            : void 0
        );
      return (n, y) => {
        let b = q,
          C = U,
          D = le;
        return (
          f(),
          w(
            `section`,
            {
              class: F([
                `homepage-reviews-masonry`,
                { "h-grid": S(o) === `mobile` },
              ]),
            },
            [
              B(
                b,
                {
                  data: {
                    title: e.data.heading,
                    description: e.data.description,
                  },
                  class: `h-mb-40 h-mb-64-d`,
                },
                {
                  "bottom-content": t(() => [
                    B(
                      S(a),
                      {
                        variant: `button-look`,
                        "button-look-props": { size: `xLarge` },
                        to: e.data.button.href,
                        "data-click-id": e.data.button[`data-click-id`],
                      },
                      { default: t(() => [I(R(e.data.button.text), 1)]), _: 1 },
                      8,
                      [`to`, `data-click-id`]
                    ),
                  ]),
                  _: 1,
                },
                8,
                [`data`]
              ),
              x(
                `div`,
                {
                  class: F([
                    `homepage-reviews-masonry__grid`,
                    { "homepage-reviews-masonry__grid--single": S(c) === 1 },
                  ]),
                  style: v(S(h)),
                },
                [
                  (f(!0),
                  w(
                    _,
                    null,
                    m(
                      S(p),
                      (e, t) => (
                        f(),
                        w(
                          `div`,
                          { key: t, class: `homepage-reviews-masonry__column` },
                          [
                            (f(!0),
                            w(
                              _,
                              null,
                              m(
                                e,
                                (e, n) => (
                                  f(),
                                  w(
                                    _,
                                    { key: `${t}-${n}` },
                                    [
                                      e.type === `showcase`
                                        ? (f(),
                                          w(
                                            `article`,
                                            E(
                                              {
                                                key: 0,
                                                class: [
                                                  `homepage-reviews-masonry__card homepage-reviews-masonry__card--showcase`,
                                                  {
                                                    "homepage-reviews-masonry__card--hidden":
                                                      S(c) === 1 &&
                                                      !S(s) &&
                                                      n >= Cn,
                                                    "homepage-reviews-masonry__card--clickable":
                                                      e.videoUrl,
                                                  },
                                                ],
                                              },
                                              { ref_for: !0 },
                                              S($)(`h-color-neutral-100`),
                                              {
                                                role: e.videoUrl
                                                  ? `button`
                                                  : void 0,
                                                tabindex: e.videoUrl
                                                  ? 0
                                                  : void 0,
                                                "data-click-id": e.videoUrl
                                                  ? `hgr-${S(
                                                      r
                                                    )}-reviews_masonry-video-click`
                                                  : void 0,
                                                onClick: (t) => d(e),
                                                onKeydown: [
                                                  M((t) => d(e), [`enter`]),
                                                  M(
                                                    T((t) => d(e), [`prevent`]),
                                                    [`space`]
                                                  ),
                                                ],
                                              }
                                            ),
                                            [
                                              e.image
                                                ? (f(),
                                                  j(
                                                    C,
                                                    { key: 0, media: e.image },
                                                    null,
                                                    8,
                                                    [`media`]
                                                  ))
                                                : O(``, !0),
                                              e.badge
                                                ? (f(),
                                                  w(`span`, hn, R(e.badge), 1))
                                                : O(``, !0),
                                              e.videoUrl
                                                ? (f(),
                                                  w(`span`, gn, [
                                                    B(S(P), {
                                                      name: `ic-play-filled-24`,
                                                      color: `h-color-neutral-0`,
                                                      dimensions: `20px`,
                                                    }),
                                                  ]))
                                                : O(``, !0),
                                              e.caption
                                                ? (f(),
                                                  w(
                                                    `span`,
                                                    {
                                                      key: 3,
                                                      class: `homepage-reviews-masonry__caption h-t-heading-3-regular`,
                                                      innerHTML: e.caption,
                                                    },
                                                    null,
                                                    8,
                                                    _n
                                                  ))
                                                : O(``, !0),
                                            ],
                                            16,
                                            mn
                                          ))
                                        : (f(),
                                          w(
                                            `article`,
                                            E(
                                              {
                                                key: 1,
                                                class: [
                                                  `homepage-reviews-masonry__card homepage-reviews-masonry__card--quote`,
                                                  {
                                                    "homepage-reviews-masonry__card--hidden":
                                                      S(c) === 1 &&
                                                      !S(s) &&
                                                      n >= Cn,
                                                  },
                                                ],
                                              },
                                              { ref_for: !0 },
                                              S($)(`h-color-neutral-100`)
                                            ),
                                            [
                                              e.icon
                                                ? (f(),
                                                  w(
                                                    `div`,
                                                    {
                                                      key: 0,
                                                      class: F([
                                                        `homepage-reviews-masonry__quote-icon`,
                                                        `homepage-reviews-masonry__quote-icon--bg-${e.icon.backgroundColor}`,
                                                      ]),
                                                    },
                                                    [
                                                      B(
                                                        S(P),
                                                        {
                                                          name: e.icon.icon,
                                                          color:
                                                            e.icon.iconColor,
                                                        },
                                                        null,
                                                        8,
                                                        [`name`, `color`]
                                                      ),
                                                    ],
                                                    2
                                                  ))
                                                : O(``, !0),
                                              x(`p`, vn, R(e.quote), 1),
                                              e.author
                                                ? (f(),
                                                  w(`div`, yn, [
                                                    e.author.avatar
                                                      ? (f(),
                                                        j(
                                                          C,
                                                          {
                                                            key: 0,
                                                            class: `homepage-reviews-masonry__avatar`,
                                                            media:
                                                              e.author.avatar,
                                                          },
                                                          null,
                                                          8,
                                                          [`media`]
                                                        ))
                                                      : O(``, !0),
                                                    x(`div`, bn, [
                                                      x(
                                                        `span`,
                                                        xn,
                                                        R(e.author.name),
                                                        1
                                                      ),
                                                      x(
                                                        `span`,
                                                        Sn,
                                                        R(e.author.role),
                                                        1
                                                      ),
                                                    ]),
                                                  ]))
                                                : O(``, !0),
                                            ],
                                            16
                                          )),
                                    ],
                                    64
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
                ],
                6
              ),
              S(c) === 1 && !S(s)
                ? (f(),
                  j(
                    S(i),
                    {
                      key: 0,
                      variant: `contain`,
                      color: `semi-light`,
                      size: `xLarge`,
                      "full-width": ``,
                      "icon-append": `ic-chevron-down-24`,
                      "data-qa": `homepage-reviews-masonry-see-more-button`,
                      class: `h-mt-16`,
                      onClick: (y[0] ||= (e) => (s.value = !0)),
                    },
                    { default: t(() => [I(R(e.data.seeMoreText), 1)]), _: 1 }
                  ))
                : O(``, !0),
              S(l)
                ? (f(),
                  j(
                    D,
                    {
                      key: 1,
                      modelValue: S(u),
                      "onUpdate:modelValue": (y[1] ||= (e) =>
                        g(u) ? (u.value = e) : null),
                      "youtube-link": S(l).url,
                      "youtube-link-title": S(l).title,
                    },
                    null,
                    8,
                    [`modelValue`, `youtube-link`, `youtube-link-title`]
                  ))
                : O(``, !0),
            ],
            2
          )
        );
      };
    },
  }),
  Tn = e({ default: () => En }),
  En = Object.assign(Y(wn, [[`__scopeId`, `data-v-91a98fcd`]]), {
    __name: `HomepageReviewsMasonry`,
  }),
  Dn = [`data-view-id`, `dir`],
  On = { class: `h-grid homepage-overlapping-cards__grid` },
  kn = { class: `h-t-title-2 h-mb-40 h-mb-80-d` },
  An = { class: `homepage-overlapping-cards__collapsable-content-container` },
  jn = [`data-click-id`, `onClick`],
  Mn = { class: `h-t-heading-1-regular` },
  Nn = {
    class: `homepage-overlapping-cards__collapsable-content-description h-t-body-1 h-mb-16`,
  },
  Pn = { key: 0, class: `homepage-overlapping-cards__card-separator` },
  Fn = z({
    __name: `HomepageSideBySideCards`,
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      let n = e,
        { pageNameDataClickId: r, direction: i } = J(),
        o = D(
          n.data.cards.reduce(
            (e, t, n) => ({
              ...e,
              [n]: t.collapsableContent.reduce(
                (e, t, n) => ({ ...e, [n]: n === 0 }),
                {}
              ),
            }),
            {}
          )
        );
      return (n, s) => {
        let c = U;
        return (
          f(),
          w(
            `section`,
            {
              class: F([
                `homepage-overlapping-cards`,
                {
                  [`homepage-overlapping-cards--bg-${e.data.backgroundColor}`]:
                    !!e.data.backgroundColor,
                },
              ]),
              "data-view-id": `hgr-${S(r)}-side_by_side_cards`,
              dir: S(i),
            },
            [
              x(`div`, On, [
                (f(!0),
                w(
                  _,
                  null,
                  m(
                    e.data.cards,
                    (e, n) => (
                      f(),
                      w(
                        _,
                        { key: e.title },
                        [
                          x(
                            `div`,
                            {
                              class: F([
                                `homepage-overlapping-cards__card`,
                                {
                                  "homepage-overlapping-cards__card--left":
                                    n % 2 == 0,
                                  "homepage-overlapping-cards__card--right":
                                    n % 2 != 0,
                                },
                              ]),
                            },
                            [
                              B(
                                c,
                                {
                                  media: e.image,
                                  class: `homepage-overlapping-cards__card-image h-mb-24 h-mb-32-d`,
                                },
                                null,
                                8,
                                [`media`]
                              ),
                              x(`h3`, kn, R(e.title), 1),
                              x(`div`, An, [
                                (f(!0),
                                w(
                                  _,
                                  null,
                                  m(
                                    e.collapsableContent,
                                    (e, i) => (
                                      f(),
                                      w(
                                        `div`,
                                        {
                                          key: e.title,
                                          class: F([
                                            `homepage-overlapping-cards__collapsable-content`,
                                            {
                                              "homepage-overlapping-cards__collapsable-content--first":
                                                i === 0,
                                            },
                                          ]),
                                        },
                                        [
                                          x(
                                            `div`,
                                            {
                                              class: F([
                                                `homepage-overlapping-cards__collapsable-content-action h-mb-16`,
                                                { "h-mt-16": i > 0 },
                                              ]),
                                              "data-click-id": `hgr-${S(
                                                r
                                              )}-side_by_side_cards-collapsable_content-${n}-${i}-click`,
                                              onClick: (e) =>
                                                S(o)[n] &&
                                                (S(o)[n][i] = !S(o)[n][i]),
                                            },
                                            [
                                              x(`h5`, Mn, R(e.title), 1),
                                              S(o)[n] && S(o)[n][i]
                                                ? (f(),
                                                  j(S(P), {
                                                    key: 0,
                                                    name: `ic-line-24`,
                                                  }))
                                                : (f(),
                                                  j(S(P), {
                                                    key: 1,
                                                    name: `ic-plus-24`,
                                                  })),
                                            ],
                                            10,
                                            jn
                                          ),
                                          b(
                                            x(
                                              `div`,
                                              null,
                                              [
                                                x(`p`, Nn, R(e.description), 1),
                                                B(
                                                  S(a),
                                                  {
                                                    to: e.link.link,
                                                    target: e.link.target,
                                                    color: e.link.color,
                                                    variant: `bold`,
                                                    class: F({
                                                      "h-mb-40": i % 2 == 0,
                                                    }),
                                                    "data-click-id": `hgr-${S(
                                                      r
                                                    )}-side_by_side_cards-collapsable_content-link-${n}-${i}-click`,
                                                  },
                                                  {
                                                    default: t(() => [
                                                      I(R(e.link.text), 1),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  [
                                                    `to`,
                                                    `target`,
                                                    `color`,
                                                    `class`,
                                                    `data-click-id`,
                                                  ]
                                                ),
                                              ],
                                              512
                                            ),
                                            [[A, S(o)[n] && S(o)[n][i]]]
                                          ),
                                        ],
                                        2
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                            ],
                            2
                          ),
                          n % 2 == 0 ? (f(), w(`div`, Pn)) : O(``, !0),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
            ],
            10,
            Dn
          )
        );
      };
    },
  }),
  In = e({ default: () => Ln }),
  Ln = Object.assign(Y(Fn, [[`__scopeId`, `data-v-01d863b0`]]), {
    __name: `HomepageSideBySideCards`,
  }),
  Rn = { class: `homepage-tools` },
  zn = {
    class: `homepage-tools__heading h-t-title-2 h-grid h-mb-32 h-mb-48-d`,
  },
  Bn = { key: 1, class: `homepage-tools__row h-grid` },
  Vn = { class: `homepage-tools__media` },
  Hn = { class: `homepage-tools__label` },
  Un = { class: `h-t-heading-3-regular` },
  Wn = { class: `homepage-tools__desc h-t-body-2` },
  Gn = { class: `homepage-tools__media` },
  Kn = { class: `homepage-tools__label` },
  qn = { class: `h-t-heading-3-regular` },
  Jn = { class: `homepage-tools__desc h-t-body-2` },
  Yn = z({
    __name: `HomepageToolsShowcase`,
    props: {
      data: { type: Object, required: !0 },
      scrollId: { type: String, default: `` },
    },
    setup(e) {
      let { pageNameDataClickId: n } = J(),
        { screen: r } = V(),
        i = y(() => r.value === `desktop`);
      return (r, a) => {
        let o = te,
          s = U,
          c = G;
        return (
          f(),
          w(`section`, Rn, [
            e.scrollId
              ? (f(),
                j(o, { key: 0, "scroll-id": e.scrollId }, null, 8, [
                  `scroll-id`,
                ]))
              : O(``, !0),
            x(`h2`, zn, R(e.data.heading), 1),
            S(i)
              ? (f(),
                w(`div`, Bn, [
                  (f(!0),
                  w(
                    _,
                    null,
                    m(
                      e.data.cards,
                      (e, r) => (
                        f(),
                        j(
                          c,
                          {
                            key: r,
                            class: `homepage-tools__card`,
                            to: e.link,
                            "data-click-id": `hgr-${S(
                              n
                            )}-tools_showcase-${r}-click`,
                          },
                          {
                            default: t(() => [
                              x(`div`, Vn, [
                                B(
                                  s,
                                  {
                                    class: `homepage-tools__img`,
                                    media: e.image,
                                  },
                                  null,
                                  8,
                                  [`media`]
                                ),
                                B(S(P), {
                                  name: `ic-arrow-up-right-24`,
                                  class: `homepage-tools__arrow`,
                                }),
                              ]),
                              x(`div`, Hn, [
                                x(`span`, Un, R(e.title), 1),
                                x(`p`, Wn, R(e.description), 1),
                              ]),
                            ]),
                            _: 2,
                          },
                          1032,
                          [`to`, `data-click-id`]
                        )
                      )
                    ),
                    128
                  )),
                ]))
              : (f(),
                j(
                  ue,
                  {
                    key: 2,
                    "cards-data": e.data.cards,
                    "max-card-width": `312px`,
                  },
                  {
                    items: t(({ item: e }) => [
                      B(
                        c,
                        {
                          class: `homepage-tools__card homepage-tools__card--carousel`,
                          to: e.link,
                        },
                        {
                          default: t(() => [
                            x(`div`, Gn, [
                              B(
                                s,
                                {
                                  class: `homepage-tools__img`,
                                  media: e.image,
                                },
                                null,
                                8,
                                [`media`]
                              ),
                              B(S(P), {
                                name: `ic-arrow-up-right-24`,
                                class: `homepage-tools__arrow`,
                              }),
                            ]),
                            x(`div`, Kn, [
                              x(`span`, qn, R(e.title), 1),
                              x(`p`, Jn, R(e.description), 1),
                            ]),
                          ]),
                          _: 2,
                        },
                        1032,
                        [`to`]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  [`cards-data`]
                )),
          ])
        );
      };
    },
  }),
  Xn = e({ default: () => Zn }),
  Zn = Object.assign(Y(Yn, [[`__scopeId`, `data-v-cf0da01f`]]), {
    __name: `HomepageToolsShowcase`,
  }),
  Qn = { class: `homepage-hero-domain-search` },
  $n = { class: `h-t-body-2` },
  er = {
    class: `homepage-hero-domain-search__sheet theme-base theme-hWebsites mode-light`,
  },
  tr = { class: `homepage-hero-domain-search__sheet-top` },
  nr = [`aria-label`],
  rr = { class: `homepage-hero-domain-search__sheet-body` },
  ir = { class: `h-t-body-2-bold` },
  ar = Object.assign(
    Y(
      z({
        __name: `HomepageHeroDomainSearch`,
        setup(e) {
          let { t: a } = Z(),
            { openSearchResults: o } = H(`navigation`),
            s = D(!1),
            c = D(``),
            l = D(!1),
            u = () => {
              s.value = !0;
            },
            p = () => {
              s.value = !1;
            },
            m = async () => {
              let e = c.value.trim();
              !e || l.value || (p(), (l.value = !0), await n(), o(e));
            };
          return (e, n) => {
            let o = ie;
            return (
              f(),
              w(`div`, Qn, [
                B(
                  S(i),
                  {
                    variant: `contain`,
                    color: `primary`,
                    size: `large`,
                    "border-radius": `full`,
                    "data-qa": `homepage-hero-domain-search-button`,
                    "data-click-id": `hgr-homepage-hero-domain-search-open`,
                    onClick: u,
                  },
                  {
                    "icon-prepend": t(() => [
                      B(S(P), {
                        name: `ic-magnifying-glass-24`,
                        color: `h-color-neutral-0`,
                        dimensions: `20px`,
                      }),
                    ]),
                    default: t(() => [
                      x(
                        `span`,
                        $n,
                        R(
                          S(a)(`components.navigation.domainSearch.placeholder`)
                        ),
                        1
                      ),
                    ]),
                    _: 1,
                  }
                ),
                S(s)
                  ? (f(),
                    j(
                      S(L),
                      {
                        key: 0,
                        "is-open": S(s),
                        fullscreen: ``,
                        "is-dragging-enabled": !1,
                        "show-header": !1,
                        onClose: p,
                        "onUpdate:isOpen": (n[1] ||= (e) => (s.value = e)),
                      },
                      {
                        default: t(() => [
                          x(`div`, er, [
                            x(`div`, tr, [
                              B(o, {
                                data: {
                                  linkToHomepage: !1,
                                  color: `h-color-neutral-800`,
                                  withMinimalMobile: !0,
                                },
                              }),
                              x(
                                `button`,
                                {
                                  type: `button`,
                                  class: `homepage-hero-domain-search__sheet-close`,
                                  "data-click-id": `hgr-homepage-hero-domain-search-close`,
                                  "aria-label": S(a)(
                                    `components.navigation.domainSearch.close`
                                  ),
                                  onClick: p,
                                },
                                [
                                  B(S(P), {
                                    name: `ic-cross-24`,
                                    color: `h-color-neutral-900`,
                                  }),
                                ],
                                8,
                                nr
                              ),
                            ]),
                            x(`div`, rr, [
                              x(
                                `h2`,
                                ir,
                                R(
                                  S(a)(
                                    `components.navigation.domainSearch.title`
                                  )
                                ),
                                1
                              ),
                              B(
                                S(d),
                                {
                                  modelValue: S(c),
                                  "onUpdate:modelValue": (n[0] ||= (e) =>
                                    g(c) ? (c.value = e) : null),
                                  class: `homepage-hero-domain-search__field`,
                                  size: `large`,
                                  placeholder: S(a)(
                                    `components.navigation.domainSearch.inputPlaceholder`
                                  ),
                                  "show-clear-icon": !1,
                                  "remove-bottom-padding": ``,
                                  onKeydown: M(m, [`enter`]),
                                },
                                {
                                  "icon-prepend": t(() => [
                                    B(S(P), {
                                      name: `ic-magnifying-glass-24`,
                                      color: `h-color-neutral-700`,
                                    }),
                                  ]),
                                  "icon-append": t(() => [
                                    B(
                                      S(r),
                                      {
                                        type: `button`,
                                        icon: `ic-chevron-small-right-24`,
                                        "icon-color": `h-color-neutral-0`,
                                        color: `primary`,
                                        variant: `contain`,
                                        "border-radius": `full`,
                                        "is-loading": S(l),
                                        "is-disabled": !S(c).trim(),
                                        "icon-description": S(a)(
                                          `components.navigation.domainSearch.submit`
                                        ),
                                        "data-click-id": `hgr-homepage-hero-domain-search-submit`,
                                        onClick: m,
                                      },
                                      null,
                                      8,
                                      [
                                        `is-loading`,
                                        `is-disabled`,
                                        `icon-description`,
                                      ]
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                [`modelValue`, `placeholder`]
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      [`is-open`]
                    ))
                  : O(``, !0),
              ])
            );
          };
        },
      }),
      [[`__scopeId`, `data-v-f4c60c13`]]
    ),
    { __name: `HomepageHeroDomainSearch` }
  ),
  or = [`dir`, `data-view-id`],
  sr = { class: `homepage-hero__inner h-grid` },
  cr = { class: `homepage-hero__content` },
  lr = { class: `homepage-hero__title h-t-title-1` },
  ur = { class: `homepage-hero__desc h-t-body-1` },
  dr = { class: `homepage-hero__guarantee h-t-body-2` },
  fr = [`data-click-id`, `aria-pressed`, `onClick`],
  pr = { class: `homepage-hero__tab` },
  mr = { class: `homepage-hero__tab-label h-t-body-2-medium` },
  hr = { class: `homepage-hero__media` },
  gr = 8e3,
  _r = 1e3,
  vr = 350,
  yr = Object.assign(
    Y(
      z({
        __name: `HomepageHero`,
        props: { data: { type: Object, required: !0 } },
        setup(e) {
          let n = e,
            { pageNameDataClickId: r, direction: i } = J(),
            { screen: o, screenSize: s } = V(),
            l = y(() => s.value > 0 && s.value < 1140),
            d = y(() => !!o.value && o.value !== `desktop`),
            p = D(0),
            h = D(null),
            g = D(0),
            v = null,
            b = null,
            C = null,
            T = (e) => h.value !== null && (e === p.value || e === h.value),
            E = () => {
              v &&= (clearInterval(v), null);
            },
            k = (e) => {
              e !== p.value &&
                (b && clearTimeout(b),
                C && clearTimeout(C),
                (h.value = p.value),
                (p.value = e),
                (C = setTimeout(() => {
                  (g.value = e), (C = null);
                }, vr)),
                (b = setTimeout(() => {
                  (h.value = null), (b = null);
                }, _r)));
            },
            A = () => {
              E(),
                !window.matchMedia?.(`(prefers-reduced-motion: reduce)`)
                  .matches &&
                  (v = setInterval(() => {
                    k((p.value + 1) % n.data.cards.length);
                  }, gr));
            },
            M = (e) => {
              k(e), A();
            };
          return (
            c(() => {
              A();
            }),
            u(() => {
              E(), b && clearTimeout(b), C && clearTimeout(C);
            }),
            (n, o) => {
              let s = U,
                c = ae;
              return (
                f(),
                w(
                  `section`,
                  {
                    class: `homepage-hero`,
                    dir: S(i),
                    "data-view-id": `hgr-${S(r)}-hero`,
                  },
                  [
                    x(`div`, sr, [
                      x(`div`, cr, [
                        x(`h1`, lr, R(e.data.title), 1),
                        x(`p`, ur, R(e.data.description), 1),
                        B(
                          S(a),
                          {
                            class: `homepage-hero__button`,
                            variant: `button-look`,
                            "button-look-props": {
                              variant: `contain`,
                              color: `light`,
                              size: `large`,
                            },
                            to: e.data.button.href,
                            "data-click-id": e.data.button[`data-click-id`],
                          },
                          {
                            default: t(() => [I(R(e.data.button.text), 1)]),
                            _: 1,
                          },
                          8,
                          [`to`, `data-click-id`]
                        ),
                        x(`p`, dr, [
                          B(S(P), {
                            name: `ic-shield-checkmark-16`,
                            dimensions: `16px`,
                          }),
                          I(` ` + R(e.data.guarantee), 1),
                        ]),
                      ]),
                      x(
                        `div`,
                        {
                          class: `homepage-hero__cards`,
                          onMouseenter: E,
                          onMouseleave: A,
                        },
                        [
                          (f(!0),
                          w(
                            _,
                            null,
                            m(
                              e.data.cards,
                              (e, t) => (
                                f(),
                                w(
                                  `button`,
                                  {
                                    key: e.label,
                                    type: `button`,
                                    class: F([
                                      `homepage-hero__card`,
                                      {
                                        "homepage-hero__card--active":
                                          t === S(p),
                                        "homepage-hero__card--switching": T(t),
                                      },
                                    ]),
                                    "data-click-id": `hgr-${S(
                                      r
                                    )}-hero-card-${t}-click`,
                                    "aria-pressed": t === S(p),
                                    onClick: (e) => M(t),
                                  },
                                  [
                                    (o[0] ||= x(
                                      `svg`,
                                      {
                                        class: `homepage-hero__folder`,
                                        "aria-hidden": `true`,
                                        viewBox: `0 0 560 421`,
                                        preserveAspectRatio: `none`,
                                      },
                                      [
                                        x(`path`, {
                                          d: `M25,0 L224,0 Q234,0 238,8 L257,41 Q262,52 270,52 L540,52 Q560,52 560,72 L560,401 Q560,421 540,421 L20,421 Q0,421 0,401 L0,25 Q0,0 25,0 Z`,
                                          "vector-effect": `non-scaling-stroke`,
                                        }),
                                      ],
                                      -1
                                    )),
                                    (o[1] ||= x(
                                      `svg`,
                                      {
                                        class: `homepage-hero__folder-mobile`,
                                        "aria-hidden": `true`,
                                        viewBox: `0 0 343 287`,
                                        preserveAspectRatio: `none`,
                                      },
                                      [
                                        x(`path`, {
                                          d: `M16,0 L138,0 Q146,0 150,7 L163,42 Q167,50 175,50 L327,50 Q343,50 343,66 L343,271 Q343,287 327,287 L16,287 Q0,287 0,271 L0,16 Q0,0 16,0 Z`,
                                          "vector-effect": `non-scaling-stroke`,
                                        }),
                                      ],
                                      -1
                                    )),
                                    x(`span`, pr, [
                                      B(
                                        S(P),
                                        { name: e.icon, dimensions: `20px` },
                                        null,
                                        8,
                                        [`name`]
                                      ),
                                      x(`span`, mr, R(e.label), 1),
                                    ]),
                                    x(`span`, hr, [
                                      (S(d) ? t === S(p) : t === S(g)) &&
                                      e.image?.src
                                        ? (f(),
                                          j(
                                            s,
                                            { key: 0, media: e.image },
                                            null,
                                            8,
                                            [`media`]
                                          ))
                                        : !S(d) && e.image?.fallbackImage
                                        ? (f(),
                                          j(
                                            s,
                                            {
                                              key: 1,
                                              media: {
                                                src: e.image.fallbackImage,
                                                alt: e.label,
                                              },
                                            },
                                            null,
                                            8,
                                            [`media`]
                                          ))
                                        : O(``, !0),
                                    ]),
                                  ],
                                  10,
                                  fr
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        32
                      ),
                      B(c, {
                        class: `homepage-hero__trustpilot`,
                        theme: `dark`,
                      }),
                    ]),
                    S(l) ? (f(), j(ar, { key: 0 })) : O(``, !0),
                  ],
                  8,
                  or
                )
              );
            }
          );
        },
      }),
      [[`__scopeId`, `data-v-bc0506b0`]]
    ),
    { __name: `HomepageHero` }
  ),
  br = { class: `homepage-above-hero` },
  xr = { class: `homepage-above-hero__search` },
  Sr = { class: `homepage-above-hero__domain` },
  Cr = { class: `h-t-body-1-bold` },
  wr = { class: `h-t-body-2` },
  Tr = [`innerHTML`],
  Er = Object.assign(
    Y(
      z({
        __name: `HomepageAboveHero`,
        setup(e) {
          let t = D(``),
            { pageName: n, themeData: r } = J(),
            { t: i } = Z(st),
            a = y(() => [Q.France, Q.Brazil].includes(r.value.language.code));
          return (e, o) => {
            let s = ce;
            return (
              f(),
              w(`div`, br, [
                x(
                  `div`,
                  {
                    class: F([
                      `homepage-above-hero__wrapper`,
                      {
                        "homepage-above-hero__wrapper--not-promo": !S(a),
                        "h-grid homepage-above-hero__wrapper--promo": S(a),
                        "homepage-above-hero__wrapper--wide": [
                          S(Q).Brazil,
                          S(Q).France,
                        ].includes(S(r).language.code),
                      },
                    ]),
                  },
                  [
                    x(`div`, xr, [
                      B(
                        s,
                        {
                          modelValue: S(t),
                          "onUpdate:modelValue": (o[0] ||= (e) =>
                            g(t) ? (t.value = e) : null),
                          "page-name": S(n),
                        },
                        null,
                        8,
                        [`modelValue`, `page-name`]
                      ),
                    ]),
                    x(`div`, Sr, [
                      x(
                        `span`,
                        Cr,
                        R(S(i)(`pages.homepage.domainSearch.title`)) + ` \xA0`,
                        1
                      ),
                      x(`span`, wr, [
                        x(
                          `span`,
                          {
                            innerHTML: S(i)(
                              `pages.homepage.domainSearch.description`,
                              { link: `#pricing` }
                            ),
                          },
                          null,
                          8,
                          Tr
                        ),
                      ]),
                    ]),
                  ],
                  2
                ),
              ])
            );
          };
        },
      }),
      [[`__scopeId`, `data-v-4f7678fc`]]
    ),
    { __name: `HomepageAboveHero` }
  );
export {
  Tn as a,
  Wt as c,
  st as d,
  at as f,
  Ae as h,
  In as i,
  Mt as l,
  Ue as m,
  yr as n,
  fn as o,
  $e as p,
  Xn as r,
  Jt as s,
  Er as t,
  yt as u,
};

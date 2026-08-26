import {
  Ii as e,
  Kr as t,
  No as n,
  Qn as r,
  Vi as i,
  yr as a,
} from "./BtP95aSo.js";
import {
  a as o,
  c as s,
  d as c,
  f as l,
  i as u,
  l as d,
  n as f,
  o as p,
  p as m,
  r as h,
  s as g,
  t as _,
  u as v,
} from "./p5oiDq5f3.js";
var y = () => {
  let { sharedBreadcrumbs: y } = a(),
    {
      siteUrl: b,
      pageName: x,
      fullPageUrl: S,
      language: C,
      themeData: w,
      activeCurrency: T,
      siteUrlWithoutBasePath: E,
      trustPilotStats: D,
    } = e(),
    { t: O } = i(),
    k = n();
  return {
    getHead: (e, t, n = !1, r = !1) => {
      let i = {
        title: e,
        meta: [
          { charset: `utf-8` },
          { name: `description`, content: t },
          { property: `og:title`, content: e },
          { property: `og:description`, content: t },
          { property: `twitter:title`, content: e },
          { property: `twitter:description`, content: t },
          { name: `page-name`, content: x.value },
        ],
      };
      return (
        n &&
          (i.meta = [...i.meta, { name: `robots`, content: `index,follow` }]),
        (r || [`/1`, `/2`, `/3`].some((e) => k.path.endsWith(e))) &&
          (i.meta = [
            ...i.meta,
            { name: `robots`, content: `noindex, nofollow` },
          ]),
        i
      );
    },
    getJsonld: ({
      title: e,
      description: n,
      faqs: i,
      products: a,
      productType: k,
      offerName: A,
      id: j,
      softwareApplication: M,
      withOrganizationSchema: N = !1,
      withOfferSchema: P = !1,
      withAggregateRating: F = !1,
    }) => {
      let I = t(w.value.language.code),
        L = {
          lang: C.value,
          siteUrl: b.value,
          facebook: I.facebookLink,
          twitter: I.twitterLink,
          youtubeLinks: I.youtubeLinks,
          pageUrl: S.value,
          pageTitle: e,
          pageDescription: n,
          offerName: A,
          productType: k,
          id: j,
        },
        R = [...(N ? [g(L)] : []), m(L), l(L), v(L)],
        z = F
          ? f({
              ratingValue: D.value.trustScore,
              reviewCount: D.value.reviewsCount,
            })
          : void 0;
      if (a && Array.isArray(a)) {
        let e = a.map((e) => {
          let t =
              A ||
              O(
                r(e.tableSlug, e.productSlug, w.value.language.code, x.value)
                  ?.title || ``
              ) ||
              ``,
            n = o(e.productSlug);
          return {
            "@type": `Offer`,
            ...(n && { "@id": `${S.value}#${n}` }),
            name: t,
            url: S.value,
            priceCurrency: T.value.code,
            price: e.price.purchase,
            availability: _,
            priceValidUntil: s(),
          };
        });
        P ? (R.push(p(L, e)), z && R.push(d(L, e, z))) : R.push(d(L, e, z));
      } else z && R.push(d(L, [], z));
      return (
        M &&
          R.push(
            c(L, { ...M, priceCurrency: M.priceCurrency ?? T.value.code })
          ),
        i && R.push(u(i)),
        y.value.length > 1 && R.push(h(y.value, E.value)),
        R
      );
    },
  };
};
export { y as t };

import { Gr as e, Ur as t } from "./BtP95aSo.js";
var n = (n) => {
    let {
      siteUrl: r,
      streetAddress: i,
      addressLocality: a,
      postalCode: o,
      addressCountry: s,
      email: c,
      contactPage: l,
      facebook: u,
      twitter: d,
      youtubeLinks: f,
    } = n;
    return {
      "@type": `Organization`,
      name: `Hostinger`,
      legalName: `Hosting Hostinger`,
      foundingDate: `2004`,
      logo: `${r}/logo-400x400.png`,
      image: `${r}/logo-400x400.png`,
      url: r,
      address: {
        "@type": `PostalAddress`,
        streetAddress: i,
        addressLocality: a,
        postalCode: o,
        addressCountry: s,
      },
      contactPoint: {
        "@type": `ContactPoint`,
        contactType: `Sales`,
        email: c,
        url: l,
      },
      sameAs: [u, d, ...f, ...e, ...t],
    };
  },
  r = (e) => {
    let { siteUrl: t, facebook: n, twitter: r, youtubeLinks: i } = e;
    return {
      "@type": `WebSite`,
      name: `Hostinger`,
      url: t,
      "@id": `${t}#website`,
      image: {
        "@type": `ImageObject`,
        url: `${t}/logo-400x400.png`,
        height: 400,
        width: 400,
      },
      sameAs: [n, r, ...i],
    };
  },
  i = (e) => {
    let {
      pageUrl: t,
      lang: n,
      pageTitle: r,
      pageDescription: i,
      siteUrl: a,
    } = e;
    return {
      "@type": `WebPage`,
      "@id": `${t}#webpage`,
      url: t,
      inLanguage: n,
      name: r,
      description: i,
      speakable: { "@type": `SpeakableSpecification`, cssSelector: [`h1`] },
      isPartOf: { "@id": `${a}#website` },
      about: { "@id": `${a}#organization` },
    };
  },
  a = (e) => {
    let {
      pageUrl: t,
      productType: n,
      pageTitle: r,
      pageDescription: i,
      siteUrl: a,
    } = e;
    return {
      "@type": `Service`,
      "@id": `${t}#pricing`,
      name: n || r,
      description: i,
      provider: {
        "@type": `Organization`,
        name: `Hostinger`,
        url: a,
        logo: {
          "@type": `ImageObject`,
          url: `${a}/logo-400x400.png`,
          height: 400,
          width: 400,
        },
      },
      image: { url: `${a}/logo-400x400.png`, height: 400, width: 400 },
      areaServed: { "@type": `Place`, name: `Worldwide` },
      serviceType: n,
      url: t,
    };
  },
  o = `https://schema.org/InStock`,
  s = (e) => {
    if (e)
      return (e.includes(`:`) ? e.split(`:`).pop() ?? e : e).replace(/_/g, `-`);
  },
  c = () => {
    let e = new Date();
    return e.setFullYear(e.getFullYear() + 1), e.toISOString().slice(0, 10);
  },
  l = (e, t) => {
    let { productType: n, pageTitle: r, siteUrl: i } = e;
    return {
      "@type": `OfferCatalog`,
      name: n || r,
      url: `${i}`,
      itemListElement: t.map((e) => ({
        "@type": `Offer`,
        "@id": e[`@id`],
        itemOffered: { "@type": `Product`, name: e.name },
        price: e.price,
        priceCurrency: e.priceCurrency,
        availability: e.availability,
        priceValidUntil: e.priceValidUntil,
        url: e.url || `${i}#pricing`,
      })),
    };
  },
  u = ({ ratingValue: e, reviewCount: t }) => ({
    "@type": `AggregateRating`,
    ratingValue: e,
    reviewCount: t,
    bestRating: 5,
    worstRating: 1,
  }),
  d = (e, t, n) => {
    let {
      productType: r,
      pageTitle: i,
      altProductType: a,
      pageDescription: o,
      siteUrl: s,
      pageUrl: c,
      id: l,
    } = e;
    return {
      "@id": l || void 0,
      "@type": `Product`,
      name: r || i,
      alternateName: a || void 0,
      description: o,
      url: c,
      brand: { "@type": `Brand`, name: `Hostinger` },
      image: {
        "@type": `ImageObject`,
        url: `${s}/logo-400x400.png`,
        height: 400,
        width: 400,
      },
      ...(t.length ? { offers: t } : {}),
      ...(n && { aggregateRating: n }),
    };
  },
  f = (e, t) => {
    let { pageUrl: n, pageDescription: r, siteUrl: i } = e,
      {
        name: a,
        applicationCategory: o = `BusinessApplication`,
        operatingSystem: s = `Web`,
        price: c,
        priceCurrency: l,
      } = t;
    return {
      "@type": `SoftwareApplication`,
      name: a,
      description: r,
      applicationCategory: o,
      operatingSystem: s,
      url: n,
      image: {
        "@type": `ImageObject`,
        url: `${i}/logo-400x400.png`,
        height: 400,
        width: 400,
      },
      ...(c !== void 0 && {
        offers: { "@type": `Offer`, price: c, priceCurrency: l },
      }),
      publisher: { "@type": `Organization`, name: `Hostinger`, url: i },
    };
  },
  p = (e) => ({
    "@type": `FAQPage`,
    mainEntity: e.map(({ question: e, answer: t }) => ({
      "@type": `Question`,
      name: e,
      acceptedAnswer: { "@type": `Answer`, text: t },
    })),
  }),
  m = (e, t) => ({
    "@type": `BreadcrumbList`,
    itemListElement: e.map((e, n) =>
      e.url
        ? {
            "@type": `ListItem`,
            position: n + 1,
            name: e.name,
            item: `${t}${e.url}`,
          }
        : { "@type": `ListItem`, position: n + 1, name: e.name }
    ),
  });
export {
  s as a,
  c,
  f as d,
  i as f,
  p as i,
  d as l,
  u as n,
  l as o,
  r as p,
  m as r,
  n as s,
  o as t,
  a as u,
};

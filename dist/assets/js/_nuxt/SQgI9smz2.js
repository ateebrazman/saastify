import { Ii as e, Vi as t, ki as n, pa as r } from "./BtP95aSo.js";
var i = () => {
  let { pageNameDataClickId: i } = e(),
    { t: a } = t(),
    { isMonsoon2026SaleActive: o } = n();
  return {
    getMonsoonHeaderOverride: (e, t, n, s) => {
      if (!o.value) return {};
      let c = {
        color: `primary`,
        textSlug: a(`components.sale.monsoon26.heroButton`),
        dataClickId: `hgr-${i.value}-header-cta_button`,
        link: `#pricing`,
      };
      return (
        {
          homepage: {
            heading: a(`components.sale.monsoon26.homepageHero.title`, {
              discount: s,
            }),
            description: a(
              `components.sale.monsoon26.homepageHero.description`,
              { price: n }
            ),
            heroVideo: {
              imageSrc: `179aeb18-dbbb-49e7-e9a8-6469f8e9eb00`,
              videoSrc: `ce96ad3f08e9d9a706c673573d3c6aa0/downloads/default.mp4`,
              cover: !0,
            },
            buttonData: {
              textSlug: a(`global.claimDeal`),
              color: `light`,
              dataClickId: `hgr-header-cta-get_started`,
              link: `#pricing`,
            },
          },
          "web-hosting": {
            buttonData: c,
            image: {
              src: `4f42af38-2bc1-41da-308d-05f9209c3900`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `8dd813ab-f39e-4ae3-c949-bb4194f77400` },
              },
            },
            parallaxSrc: { src: `ac3f8edd-fd20-4db4-5df4-d3ea6aac0000` },
          },
          "web-apps-hosting": {
            buttonData: c,
            image: {
              src: `fd666e22-5d30-42a2-ec9a-ce15643ef800`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `2ea388b0-8c7c-468d-803c-ac62dbef8e00` },
              },
            },
            parallaxSrc: {
              src: `17d3f393-c284-40aa-0497-6f4ca08a7400`,
              localizedSources: {
                [r.IndiaHindi]: { src: `ad498a06-65b8-44d8-9801-c5966d457600` },
              },
            },
          },
          "wordpress-hosting": {
            buttonData: c,
            image: {
              src: `65a7ce7c-d6e6-4181-45f6-4dbac7c18900`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `81ee2215-2e77-41bd-2d56-d93fe5389300` },
              },
            },
            parallaxSrc: { src: `0baab43d-a19e-4e9d-7b43-5814b36f8e00` },
          },
          "website-builder": {
            buttonData: c,
            image: {
              src: `66df6b84-f76e-4e12-5ea9-2cc816e45000`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `de814d1a-7fab-4803-f337-7d5644535100` },
              },
            },
            parallaxSrc: { src: `97262484-501b-41aa-9656-e87541621f00` },
          },
          "woocommerce-hosting": {
            buttonData: c,
            image: {
              src: `3a48d518-eead-4976-11fe-e2ffed0a8f00`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `88514cfa-6f05-48fa-03ef-6b83315db600` },
              },
            },
            parallaxSrc: { src: `b482adaa-45a1-4413-c46d-7b5ad9204000` },
          },
          "vps-hosting": {
            buttonData: c,
            image: {
              src: `c25edaef-dd3e-418a-37d9-a8761efcb000`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `8133b405-2032-4674-5c7a-ae45842ed400` },
              },
            },
            parallaxSrc: { src: `31739eba-fc59-4118-23dd-cc120a443f00` },
          },
          "business-email": {
            buttonData: c,
            image: {
              src: `8399a8ee-1c4d-491a-36ab-1f00b3a62300`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `c950c2d7-6720-439f-590f-92f6ca877400` },
              },
            },
            parallaxSrc: { src: `13888e84-7efa-46ba-cd2a-5f2a3a832300` },
          },
          "self-hosted-n8n": {
            buttonData: c,
            image: {
              src: `c27479a2-e77b-4588-8ac9-427a3cd6f400`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `b9d71410-3a17-4579-45a1-fe635883e900` },
              },
            },
            parallaxSrc: { src: `4008032d-cd88-441f-c110-246e8279d100` },
          },
          "docker-hosting": {
            buttonData: c,
            image: {
              src: `b535b5f2-b641-46a8-20df-1c39820dc400`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `399d3b39-d94f-496a-18e6-2c80f69cbe00` },
              },
            },
            parallaxSrc: {
              src: `a7326f98-c5f5-40a0-9e56-d97f21f46700`,
              localizedSources: {
                [r.IndiaHindi]: { src: `5f75ff19-767c-4040-9d34-df0db5cf7f00` },
              },
            },
          },
          special: {
            buttonData: c,
            image: {
              src: `4f42af38-2bc1-41da-308d-05f9209c3900`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `8dd813ab-f39e-4ae3-c949-bb4194f77400` },
              },
            },
            parallaxSrc: { src: `ac3f8edd-fd20-4db4-5df4-d3ea6aac0000` },
          },
          pro: {
            buttonData: c,
            image: {
              src: `0e87a6d5-b040-4950-7252-45dbcd813100`,
              alt: t,
              localizedSources: {
                [r.IndiaHindi]: { src: `76ec9c2c-5ebf-493d-2c78-db6104070a00` },
              },
            },
            parallaxSrc: {
              src: `4e63360b-5c43-4ec9-15c1-2c2b8701f400`,
              localizedSources: {
                [r.IndiaHindi]: { src: `bcb27d2c-0155-4690-aee6-1a5276488600` },
              },
            },
          },
          "ecommerce-website": {
            buttonData: {
              color: `light`,
              textSlug: a(`components.sale.monsoon26.heroButton`),
              dataClickId: `hgr-${i.value}-hero_cta-get_started_button`,
            },
          },
          "managed-openclaw": {
            buttonData: {
              color: `light`,
              textSlug: a(`components.sale.monsoon26.heroButton`),
              dataClickId: `hgr-${i.value}-header_button`,
            },
          },
        }[e] ?? {}
      );
    },
  };
};
export { i as t };

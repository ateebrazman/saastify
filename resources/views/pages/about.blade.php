<!DOCTYPE html>
<html lang="en-IN">

<head>
    <script>
        (function (w, i, g) {
            w[g] = w[g] || [];
            if (typeof w[g].push == 'function')
                w[g].push(i)
        }
        )(window, 'GTM-KL4FQVG', 'google_tags_first_party');
    </script>
    <script>
        (function (w, d, s, l) {
            w[l] = w[l] || [];
            (function () {
                w[l].push(arguments);
            }
            )('set', 'developer_id.dY2E1Nz', true);
            var f = d.getElementsByTagName(s)[0]
                , j = d.createElement(s);
            j.async = true;
            j.src = '/cake/';
            f.parentNode.insertBefore(j, f);
        }
        )(window, document, 'script', 'dataLayer');
    </script>
    <script>
        window.__EXPERIMENT_FLAGS__ = {
            "88bd51f9-4b04-44ed-8d39-5df18d5f9b9c": false,
            "d1780a7a-5be4-48f2-a462-df139e4a8153": false,
            "1244182a-404d-463e-895e-54404f24ffcc": false,
            "227a178f-2ec7-42a5-b552-af53a57f13c5": false,
            "cc3d5b1c-6660-4ae2-8c48-32fde619ac96": false,
            "e715df83-81b1-45dd-8962-6a35144af79e": false,
            "bc1adcfb-3de9-4498-9599-90ee159e92c9": false,
            "ea74b035-5341-4b2e-a9d3-da303140d75c": false,
            "e75238ad-03c5-433a-8942-64def57a971c": false,
            "0ec00845-c750-4e94-8a44-6cd9fc546285": false,
            "139043e7-0bdf-4d80-84a2-dfcf65a47509": false,
            "4615776e-ece6-41cb-85a7-ad476902060d": true,
            "f1060a3a-3e9b-4ad4-89b8-187337204aa2": false,
            "08467c8f-538e-4e5d-ad68-cc78eba7971f": false
        };
    </script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>About Saastify - Who We Are, Our Mission & Cloud Innovation</title>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin="anonymous">
    <link rel="preconnect" href="https://challenges.cloudflare.com" crossorigin="anonymous">
    <link rel="preconnect" href="https://www.hostinger.com/api-proxy">
    <link rel="preconnect" href="https://www.googletagmanager.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <script type="importmap">
            {
                "imports": {
                    "#entry": "/in/_nuxt/bPmaEvAp.js"
                }
            }</script>
    <script type="text/javascript">
        const chunkLoadErrorHandler = () => {
            const e = window.console.error;
            let o = !1;
            const r = () => {
                window.location.href = `${window.location.href}#refresh`,
                    window.location.reload()
            }
                ;
            window.addEventListener("vite:preloadError", e => {
                e.payload || (e.payload = new Error("Unknown preload error"))
            }
            ),
                "netscape" in window && / rv:/.test(navigator.userAgent) || window.addEventListener("error", e => {
                    if ("SCRIPT" === e.target.tagName || "LINK" === e.target.tagName) {
                        if ((e.target.src || e.target.href).includes("/_nuxt/")) {
                            window.location.hash.includes("#refresh") || r()
                        }
                    }
                }
                    , !0),
                window.console.error = (n, ...a) => {
                    const t = window.location.hash.includes("#refresh");
                    if (!["Failed to load module script", "Failed to fetch dynamically imported module"].some(e => (n instanceof Error ? n.message : n).includes(e)) || t || o)
                        return e.apply(console, a);
                    o = !0,
                        r()
                }
        }
            ;
        chunkLoadErrorHandler();
    </script>
    <script type="text/javascript">
        let isScrollIntercepted = !1;
        const recheckSuccessfullyScrolled = (e, l, o = 0) => {
            setTimeout(() => {
                if (!isScrollIntercepted) {
                    const l = e.getBoundingClientRect();
                    l.y > 10 && o < 10 && (window.scroll({
                        top: window.scrollY + l.y,
                        behavior: "smooth"
                    }),
                        recheckSuccessfullyScrolled(e, l, o + 1))
                }
            }
                , 300)
        }
            , scrollToElement = e => {
                isScrollIntercepted = !1,
                    setTimeout(() => {
                        let l;
                        try {
                            l = document.querySelector(e)
                        } catch {
                            return
                        }
                        if (!isScrollIntercepted && l) {
                            const e = l.getBoundingClientRect();
                            window.scroll({
                                top: window.scrollY + e.y,
                                behavior: "smooth"
                            }),
                                recheckSuccessfullyScrolled(l, e)
                        }
                    }
                        , 100)
            }
            , scrollHandler = () => {
                window.addEventListener("wheel", () => {
                    isScrollIntercepted = !0
                }
                    , {
                        passive: !0
                    }),
                    window.addEventListener("touchmove", () => {
                        isScrollIntercepted = !0
                    }
                        , {
                            passive: !0
                        }),
                    window.addEventListener("hashchange", ({ newURL: e }) => {
                        const l = `#${(e || "").split("#")[1]}`;
                        l && scrollToElement(l)
                    }
                    ),
                    window.location.hash && scrollToElement(window.location.hash)
            }
            ;
        scrollHandler();
    </script>
    <style>
        @keyframes spin-animation {
            0% {
                transform: rotate(0)
            }

            to {
                transform: rotate(1turn)
            }
        }

        .error-not-found-banner {
            overflow: hidden
        }

        @media (width<=1024px) {
            .error-not-found-banner {
                flex-direction: column
            }
        }

        .error-not-found-banner__info {
            padding: 48px
        }

        @media (width<=1024px) {
            .error-not-found-banner__info {
                width: 100%;
                padding: 24px
            }
        }
    </style>
    <style>
        .layout--default[data-v-e390f074] {
            flex-direction: column;
            justify-content: space-between;
            min-height: 100vh;
            display: flex
        }

        #layout.layout--full-h-color-primary-800[data-v-e390f074] {
            background-color: var(--h-color-primary-800)
        }

        #layout.layout--full-h-color-primary-800[data-v-e390f074] #tp-widget-wrapper .tp-star__canvas {
            fill: #0000
        }

        #layout.layout--full-h-color-neutral-950[data-v-e390f074] {
            background-color: var(--h-color-neutral-950)
        }

        #layout.layout--full-h-color-neutral-950[data-v-e390f074] #tp-widget-wrapper .tp-star__canvas {
            fill: #0000
        }
    </style>
    <style>
        .h-banner[data-v-2216a7bc] {
            background-color: var(--h-color-primary-500);
            z-index: 9999;
            width: 100%;
            height: 54px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 10px #0000001a
        }

        @media (width>=1025px) {
            .h-banner[data-v-2216a7bc] {
                height: 28px
            }
        }

        .h-banner__append-text[data-v-2216a7bc] {
            display: none
        }

        @media (width>=768px) {
            .h-banner__append-text[data-v-2216a7bc] {
                color: var(--h-color-neutral-800);
                display: block
            }
        }

        .h-banner--sticky[data-v-2216a7bc] {
            position: sticky;
            top: 0;
            left: 0
        }

        .h-banner__wrapper[data-v-2216a7bc] {
            color: var(--h-color-neutral-0);
            gap: 16px;
            height: 54px;
            transition: top .3s;
            overflow: hidden
        }

        .h-banner__title[data-v-2216a7bc] {
            align-items: center;
            gap: 8px;
            font-size: min(4vw, 14px);
            line-height: min(4vw, 18px);
            display: flex
        }

        @media (width>=768px) {
            .h-banner__title[data-v-2216a7bc] {
                font-size: min(3vw, 14px);
                line-height: min(3vw, 18px)
            }
        }

        .h-banner__link-text[data-v-2216a7bc] {
            white-space: nowrap;
            align-items: center;
            gap: 8px;
            display: flex
        }

        @media (width>=1025px) {
            .h-banner__link-text[data-v-2216a7bc] {
                gap: 16px
            }
        }

        .h-banner__info[data-v-2216a7bc],
        .h-banner__link-text-content[data-v-2216a7bc] {
            align-items: center;
            gap: 4px;
            display: flex
        }

        .h-banner__info[data-v-2216a7bc] {
            color: var(--h-color-neutral-0);
            z-index: 104;
            text-align: left;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            padding: 0 16px;
            font-weight: 400;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }

        @media (width>=768px) {
            .h-banner__info[data-v-2216a7bc] {
                background: linear-gradient(90deg, #8c85ff00 0, #8c85ffb0 10%, var(--h-color-primary-500) 70%, var(--h-color-primary-500) 62%, #8c85ff00 100%), linear-gradient(90deg, #8c85ff00 0, #8c85ffb0 10%, var(--h-color-primary-500) 51.06%, #8c85ffb0 88.8%, #8c85ff00 100%);
                flex-direction: row;
                justify-content: center;
                gap: 8px;
                width: max-content;
                max-width: 100%;
                padding: 0 60px
            }
        }

        .h-banner__info--centered[data-v-2216a7bc] {
            justify-content: center
        }

        .h-banner__append-icon--mobile[data-v-2216a7bc] {
            display: block
        }

        @media (width>=768px) {
            .h-banner__append-icon--mobile[data-v-2216a7bc] {
                display: none
            }
        }

        .h-banner__append-icon--desktop[data-v-2216a7bc] {
            display: none
        }

        @media (width>=768px) {
            .h-banner__append-icon--desktop[data-v-2216a7bc] {
                display: block
            }
        }

        .h-banner--bg-warning-400[data-v-2216a7bc] {
            background-color: var(--h-color-warning-400)
        }

        .h-banner--bg-warning-400 .h-banner__info[data-v-2216a7bc] {
            color: var(--h-color-neutral-800);
            background: 0 0;
            justify-content: center
        }

        .h-banner--bg-warning-400 .h-banner__link-text[data-v-2216a7bc] {
            color: var(--h-color-success-700);
            text-decoration: underline;
            display: none
        }

        @media (width>=768px) {
            .h-banner--bg-warning-400 .h-banner__link-text[data-v-2216a7bc] {
                display: flex
            }
        }
    </style>
    <style>
        .fade-enter-active[data-v-3bcfe6f1],
        .fade-leave-active[data-v-3bcfe6f1] {
            opacity: 0;
            transition: all .2s;
            transform: scale(.8)
        }

        .navigation-section[data-v-3bcfe6f1] {
            z-index: 9999;
            align-items: flex-start;
            width: 100vw;
            max-width: 100%;
            display: flex;
            position: relative
        }

        .navigation-section[data-v-3bcfe6f1]>* {
            transition: all .1s
        }

        .navigation-section--full-h[data-v-3bcfe6f1] {
            min-height: 100vh
        }

        .navigation-section--full-h-under-banner[data-v-3bcfe6f1] {
            min-height: calc(100vh - 54px)
        }

        @media (width>=1025px) {
            .navigation-section--full-h-under-banner[data-v-3bcfe6f1] {
                min-height: calc(100vh - 28px)
            }
        }

        .navigation-section a[data-v-3bcfe6f1]:not(.h-button-v2):not(.h-hyperlink),
        .navigation-section button[data-v-3bcfe6f1]:not(.h-button-v2):not(.h-hyperlink) {
            color: var(--h-fg-neutral-default)
        }

        .navigation-section--under-banner.navigation-section--sticky[data-v-3bcfe6f1] {
            top: 54px
        }

        @media (width>=1025px) {
            .navigation-section--under-banner.navigation-section--sticky[data-v-3bcfe6f1] {
                top: 28px
            }
        }

        .navigation-section--sticky[data-v-3bcfe6f1] {
            position: sticky;
            top: 0;
            left: 0;
            box-shadow: 0 4px 10px #0000001a
        }

        .navigation-section--overlay[data-v-3bcfe6f1] {
            margin-bottom: -58px
        }

        @media (width>=1140px) {
            .navigation-section--overlay[data-v-3bcfe6f1] {
                margin-bottom: -72px
            }
        }

        .navigation-section--no-shadow[data-v-3bcfe6f1] {
            box-shadow: none
        }

        .navigation-section__container[data-v-3bcfe6f1] {
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 2230px;
            min-height: 58px;
            max-height: 58px;
            margin: 0 auto;
            display: flex
        }

        @media (width>=768px) {
            .navigation-section__container[data-v-3bcfe6f1] {
                min-height: 58px;
                max-height: 58px
            }
        }

        @media (width>=1140px) {
            .navigation-section__container[data-v-3bcfe6f1] {
                min-height: 72px;
                max-height: 72px
            }
        }

        .navigation-section__main-menu-wrapper[data-v-3bcfe6f1] {
            align-items: center;
            width: 100%;
            max-width: 2043px;
            padding: 10px 16px;
            display: none
        }

        @media (width>=1025px) {
            .navigation-section__main-menu-wrapper[data-v-3bcfe6f1] {
                padding: 16px 40px 16px 32px
            }
        }

        @media (width>=1140px) {
            .navigation-section__main-menu-wrapper[data-v-3bcfe6f1] {
                display: flex
            }
        }

        .navigation-section--simplified-cta .navigation-section__main-menu-wrapper[data-v-3bcfe6f1] {
            flex-grow: 1;
            justify-content: flex-end;
            width: auto;
            padding-inline-end: 16px;
            display: flex
        }

        @media (width>=1140px) {
            .navigation-section--simplified-cta .navigation-section__main-menu-wrapper[data-v-3bcfe6f1] {
                width: 100%;
                padding-inline-end: 40px
            }
        }

        .navigation-section--simplified-cta .navigation-section__start[data-v-3bcfe6f1] {
            display: none
        }

        @media (width>=1140px) {
            .navigation-section--simplified-cta .navigation-section__start[data-v-3bcfe6f1] {
                display: flex
            }
        }

        .navigation-section--simplified-cta .navigation-section__right[data-v-3bcfe6f1] {
            gap: 8px
        }

        .navigation-section--simplified-cta .navigation-section__chatbot-button[data-v-3bcfe6f1] {
            margin-inline-end: 0
        }

        .navigation-section__start[data-v-3bcfe6f1] {
            z-index: 1;
            flex-grow: 1;
            align-items: center;
            gap: 32px;
            display: flex
        }

        .navigation-section__logo-wrapper[data-v-3bcfe6f1] {
            align-items: center;
            padding: 0 0 0 20px;
            display: flex
        }

        @media (width>=1140px) {
            .navigation-section__logo-wrapper[data-v-3bcfe6f1] {
                padding: 0 0 0 40px
            }
        }

        .navigation-section__logo-wrapper--rtl[data-v-3bcfe6f1] {
            padding: 0 20px 0 0
        }

        @media (width>=1140px) {
            .navigation-section__logo-wrapper--rtl[data-v-3bcfe6f1] {
                padding: 0 40px 0 0
            }
        }

        .navigation-section__right[data-v-3bcfe6f1] {
            align-items: center;
            gap: 4px;
            display: flex
        }

        .navigation-section__chatbot-button[data-v-3bcfe6f1],
        .navigation-section__domain-search[data-v-3bcfe6f1] {
            margin-inline-end: 8px
        }

        .navigation-section__menu[data-v-3bcfe6f1] {
            overflow: initial;
            align-items: center;
            gap: 24px;
            height: auto;
            display: flex
        }

        @media (width>=1140px) {
            .navigation-section__mobile[data-v-3bcfe6f1] {
                display: none
            }
        }

        .navigation-section__mobile-menu[data-v-3bcfe6f1] {
            flex-grow: 1;
            overflow: auto
        }

        .navigation-section__mobile-menu-wrapper[data-v-3bcfe6f1] {
            flex-direction: column;
            height: calc(100vh - 58px);
            display: flex;
            position: fixed;
            inset: 58px 0 0;
            overflow: hidden
        }

        @media (width>=768px) {
            .navigation-section__mobile-menu-wrapper[data-v-3bcfe6f1] {
                height: calc(100vh - 58px);
                top: 58px
            }
        }

        @media (width>=1025px) {
            .navigation-section__mobile-menu-wrapper[data-v-3bcfe6f1] {
                height: calc(100vh - 72px);
                top: 72px
            }
        }

        .navigation-section__mobile-menu-wrapper--under-banner[data-v-3bcfe6f1] {
            height: calc(100vh - 112px);
            top: 112px
        }

        @media (width>=768px) {
            .navigation-section__mobile-menu-wrapper--under-banner[data-v-3bcfe6f1] {
                height: calc(100vh - 120px);
                top: 120px
            }
        }

        @media (width>=1025px) {
            .navigation-section__mobile-menu-wrapper--under-banner[data-v-3bcfe6f1] {
                height: calc(100vh - 100px);
                top: 100px
            }
        }

        .navigation-section__menu-item[data-v-3bcfe6f1] {
            cursor: pointer;
            color: inherit;
            background: 0 0;
            align-items: center;
            gap: 2px;
            font-weight: 400;
            display: flex;
            position: relative
        }

        @media (width>=1140px) {
            .navigation-section__menu-item[data-v-3bcfe6f1]: hover {
                opacity: .7
            }
        }

        .navigation-section__menu-item--with-badge[data-v-3bcfe6f1] {
            gap: 8px;
            display: flex
        }

        .navigation-section__menu-item--active[data-v-3bcfe6f1] {
            opacity: .7
        }

        .navigation-section__menu-item--with-padding[data-v-3bcfe6f1] {
            padding-inline-start: 12px
        }

        .navigation-section__menu-item--login[data-v-3bcfe6f1] {
            border-radius: 50%;
            padding: 8px
        }

        .navigation-section__menu-item--login[data-v-3bcfe6f1]:hover {
            background: var(--h-bg-neutral-hover);
            opacity: 1
        }

        .navigation-section__menu-item-count[data-v-3bcfe6f1] {
            min-width: 16px;
            min-height: 16px;
            color: var(--h-color-neutral-0);
            background: var(--h-bg-danger-default);
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            padding: 0 4px;
            display: flex;
            position: absolute;
            top: -4px;
            right: -4px
        }

        .navigation-section__menu-item-icon[data-v-3bcfe6f1] {
            transition: transform .3s;
            display: flex
        }

        .navigation-section__menu-item-sub-item[data-v-3bcfe6f1]:not(:last-child) {
            margin-bottom: 20px
        }

        .navigation-section__end-menu[data-v-3bcfe6f1] {
            align-items: center;
            gap: 10px;
            width: fit-content;
            min-height: 42px;
            display: flex;
            position: absolute;
            top: 8px;
            right: 16px
        }

        .navigation-section__end-menu--rtl[data-v-3bcfe6f1] {
            right: unset;
            left: 16px
        }

        .navigation-section__mobile-menu-burger[data-v-3bcfe6f1] {
            background: 0 0;
            width: 40px;
            height: 40px;
            display: flex;
            position: relative
        }

        .navigation-section__mobile-menu-burger[data-v-3bcfe6f1]>* {
            position: absolute;
            top: 8px;
            right: 8px
        }
    </style>
    <style>
        .h-logo[data-v-1c91e1f4] {
            align-items: center;
            display: inline-flex
        }

        .h-logo>div[data-v-1c91e1f4] {
            align-items: center;
            display: flex
        }

        @media (width>=1140px) {
            .h-logo[data-v-1c91e1f4] {
                min-width: 147px
            }

            .h-logo--horizons[data-v-1c91e1f4] {
                min-width: 214px
            }
        }

        @media (width<=1140px) {
            .h-logo__desktop-logo[data-v-1c91e1f4] {
                display: none !important
            }
        }

        @media (width>=1140px) {
            .h-logo__mobile-logo[data-v-1c91e1f4] {
                display: none !important
            }
        }

        .h-logo--h-color-neutral-800[data-v-1c91e1f4] {
            color: var(--h-color-neutral-800)
        }

        .h-logo--h-color-neutral-0[data-v-1c91e1f4] {
            color: var(--h-color-neutral-0)
        }

        .h-logo--h-color-primary-600[data-v-1c91e1f4] {
            color: var(--h-color-primary-600)
        }

        .h-logo--h-color-primary-800[data-v-1c91e1f4] {
            color: var(--h-color-primary-800)
        }

        .h-logo--h-fg-neutral-default[data-v-1c91e1f4] {
            color: var(--h-fg-neutral-default)
        }
    </style>
    <style>
        .navigation-menu-redesign[data-v-05e351a2] {
            z-index: 1000;
            width: 100vw;
            max-width: 100vw;
            height: calc(100vh - 72px);
            max-height: calc(100vh - 72px);
            position: absolute;
            top: 72px;
            left: 0
        }

        .navigation-menu-redesign--sticky-nav[data-v-05e351a2] {
            top: 72px
        }

        .navigation-menu-redesign__container[data-v-05e351a2] {
            z-index: 1001;
            border: 1px solid var(--h-stroke-default);
            border-radius: 16px;
            width: calc(100% - 32px);
            max-width: 1600px;
            max-height: calc(100% - 16px);
            position: absolute;
            top: 8px;
            left: 50%;
            overflow: hidden;
            transform: translate(-50%)
        }

        .navigation-menu-redesign__panel[data-v-05e351a2] {
            gap: 24px;
            max-height: calc(100vh - 96px);
            padding: 24px;
            display: flex;
            overflow: auto
        }

        .navigation-menu-redesign__side[data-v-05e351a2] {
            flex-direction: column;
            flex-shrink: 0;
            gap: 24px;
            width: 240px;
            display: flex
        }

        .navigation-menu-redesign__side--items[data-v-05e351a2] {
            width: 264px
        }

        .navigation-menu-redesign__content-title[data-v-05e351a2],
        .navigation-menu-redesign__side-title[data-v-05e351a2] {
            color: var(--h-fg-neutral-secondary)
        }

        .navigation-menu-redesign__content-title--whole-width[data-v-05e351a2],
        .navigation-menu-redesign__side-title--whole-width[data-v-05e351a2] {
            grid-column: -1/1;
            margin-bottom: -8px
        }

        .navigation-menu-redesign__rail-items[data-v-05e351a2] {
            flex-direction: column;
            gap: 6px;
            display: flex
        }

        .navigation-menu-redesign__rail-item[data-v-05e351a2] {
            color: var(--h-fg-neutral-default);
            text-align: start;
            cursor: pointer;
            background: 0 0;
            border: none;
            border-radius: 40px;
            align-items: center;
            gap: 12px;
            width: 100%;
            padding: 6px 12px;
            display: flex
        }

        .navigation-menu-redesign__rail-item[data-v-05e351a2]:hover:not(.navigation-menu-redesign__rail-item--active) {
            background: var(--h-bg-neutral-surface)
        }

        .navigation-menu-redesign__rail-item--active[data-v-05e351a2] {
            background: var(--h-bg-brand-tint-default)
        }

        .navigation-menu-redesign__divider[data-v-05e351a2] {
            background: var(--h-stroke-default);
            flex-shrink: 0;
            width: 1px
        }

        .navigation-menu-redesign__content[data-v-05e351a2] {
            flex-direction: column;
            flex-grow: 1;
            gap: 24px;
            min-width: 0;
            display: flex
        }

        .navigation-menu-redesign__grid[data-v-05e351a2] {
            grid-template-columns: repeat(auto-fit, minmax(max(264px, 33.3333% - 26.6667px), 1fr));
            gap: 24px 40px;
            display: grid
        }

        .navigation-menu-redesign__secondary[data-v-05e351a2] {
            flex-direction: column;
            flex-shrink: 0;
            gap: 32px;
            width: 300px;
            display: flex
        }

        .navigation-menu-redesign__community[data-v-05e351a2],
        .navigation-menu-redesign__secondary-group[data-v-05e351a2] {
            flex-direction: column;
            gap: 24px;
            display: flex
        }

        .navigation-menu-redesign__community-links[data-v-05e351a2] {
            align-items: center;
            gap: 4px;
            display: flex
        }

        .navigation-menu-redesign__community-link[data-v-05e351a2] {
            width: 28px;
            height: 28px;
            color: var(--h-fg-neutral-default);
            border-radius: 8px;
            justify-content: center;
            align-items: center;
            display: flex
        }

        .navigation-menu-redesign__community-link[data-v-05e351a2]:hover {
            background: var(--h-bg-neutral-surface)
        }

        .navigation-menu-redesign__content-divider[data-v-05e351a2] {
            background: var(--h-stroke-default);
            grid-column: -1/1;
            height: 1px
        }

        .navigation-menu-redesign__backdrop[data-v-05e351a2] {
            background: var(--h-bottom-sheet-backdrop-bg);
            z-index: 1000;
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0
        }

        .navigation-menu-redesign[dir=rtl][data-v-05e351a2] {
            text-align: right
        }

        .navigation-menu-redesign-enter-active .navigation-menu-redesign__container[data-v-05e351a2],
        .navigation-menu-redesign-leave-active .navigation-menu-redesign__container[data-v-05e351a2] {
            transition: transform .4s, opacity .4s
        }

        .navigation-menu-redesign-enter-active .navigation-menu-redesign__backdrop[data-v-05e351a2],
        .navigation-menu-redesign-leave-active .navigation-menu-redesign__backdrop[data-v-05e351a2] {
            transition: opacity .4s
        }

        .navigation-menu-instant-enter-active .navigation-menu-redesign__container[data-v-05e351a2]>* {
            transition: opacity .75s
        }

        .navigation-menu-redesign-enter-from .navigation-menu-redesign__container[data-v-05e351a2],
        .navigation-menu-redesign-leave-to .navigation-menu-redesign__container[data-v-05e351a2] {
            opacity: 0;
            transform: translate(-50%, -12px)
        }

        .navigation-menu-instant-enter-from .navigation-menu-redesign__container[data-v-05e351a2]>*,
        .navigation-menu-redesign-enter-from .navigation-menu-redesign__backdrop[data-v-05e351a2],
        .navigation-menu-redesign-leave-to .navigation-menu-redesign__backdrop[data-v-05e351a2] {
            opacity: 0
        }

        .navigation-panel-slide-enter-active[data-v-05e351a2],
        .navigation-panel-slide-leave-active[data-v-05e351a2] {
            transition: transform .25s, opacity .25s
        }

        .navigation-panel-slide-enter-from[data-v-05e351a2],
        .navigation-panel-slide-leave-to[data-v-05e351a2] {
            opacity: 0;
            transform: translate(-16px)
        }
    </style>
    <style>
        .navigation-menu-item-redesign[data-v-a73f210c] {
            cursor: pointer;
            border-radius: 12px;
            gap: 12px;
            margin: -8px;
            padding: 8px;
            display: flex
        }

        .navigation-menu-item-redesign__icon[data-v-a73f210c] {
            margin-top: 2px;
            margin-bottom: -4px;
            display: flex
        }

        .navigation-menu-item-redesign[data-v-a73f210c]:hover {
            background: var(--h-bg-neutral-surface)
        }

        .navigation-menu-item-redesign__badge[data-v-a73f210c] {
            white-space: nowrap;
            padding: 4px 12px
        }

        .navigation-menu-item-redesign__link-data[data-v-a73f210c] {
            flex-direction: column;
            flex-grow: 1;
            gap: 4px;
            display: flex
        }

        .navigation-menu-item-redesign__title-container-wrapper[data-v-a73f210c] {
            flex-wrap: wrap-reverse;
            align-items: center;
            gap: 8px;
            display: flex
        }

        .navigation-menu-item-redesign__title-container[data-v-a73f210c] {
            gap: 12px;
            display: flex
        }

        .navigation-menu-item-redesign__title[data-v-a73f210c] {
            color: var(--h-fg-neutral-default)
        }

        .navigation-menu-item-redesign__description[data-v-a73f210c] {
            color: var(--h-fg-neutral-secondary);
            margin-inline-start: 32px
        }

        .navigation-menu-item-redesign[dir=rtl][data-v-a73f210c] {
            text-align: right
        }
    </style>
    <style>
        .navigation-menu-promo-item[data-v-8fb0b30f] {
            width: 300px;
            color: var(--h-fg-neutral-default);
            cursor: pointer;
            height: 444px;
            box-shadow: var(--h-shadow-1-bottom);
            border-radius: 16px;
            flex-direction: column;
            flex-shrink: 0;
            gap: 16px;
            padding: 20px;
            display: flex;
            position: relative;
            overflow: hidden;
            background-image: var(--promo-background-image) !important;
            background-position: 50% !important;
            background-repeat: no-repeat !important;
            background-size: cover !important
        }

        .navigation-menu-promo-item[data-v-8fb0b30f]:hover {
            opacity: .8
        }

        .navigation-menu-promo-item__head-eyebrow[data-v-8fb0b30f] {
            align-items: center;
            gap: 8px;
            display: flex
        }

        .navigation-menu-promo-item--mobile[data-v-8fb0b30f] {
            gap: 24px;
            width: 100%;
            height: auto;
            margin-top: 16px
        }

        .navigation-menu-promo-item--mobile .navigation-menu-promo-item__image[data-v-8fb0b30f] {
            flex: none
        }

        .navigation-menu-promo-item__head[data-v-8fb0b30f] {
            justify-content: space-between;
            align-items: flex-start;
            gap: 24px;
            display: flex
        }

        .navigation-menu-promo-item__image[data-v-8fb0b30f] {
            flex: auto;
            justify-content: center;
            align-items: center;
            min-height: 0;
            margin: 0 -20px;
            display: flex;
            overflow: hidden
        }

        .navigation-menu-promo-item__image[data-v-8fb0b30f] .h-image {
            width: 100%;
            height: 100%;
            display: flex
        }

        .navigation-menu-promo-item__image[data-v-8fb0b30f] img {
            -o-object-fit: contain;
            object-fit: contain;
            -o-object-position: center;
            object-position: center;
            width: 100%;
            height: 100%
        }

        .navigation-menu-promo-item__body[data-v-8fb0b30f] {
            flex-direction: column;
            gap: 4px;
            margin-top: auto;
            display: flex
        }

        .navigation-menu-promo-item__description[data-v-8fb0b30f] {
            color: var(--h-fg-neutral-secondary)
        }

        .navigation-menu-promo-item__cta[data-v-8fb0b30f] {
            width: 100%;
            padding-top: 8px
        }

        .navigation-menu-promo-item__cta[data-v-8fb0b30f]>* {
            width: 100%
        }
    </style>
    <style>
        .hero-landscape-media[data-v-6835ff82],
        .hero-square-media[data-v-6835ff82] {
            max-width: 760px
        }

        @media (width>=1025px) {

            .hero-landscape-media[data-v-6835ff82],
            .hero-square-media[data-v-6835ff82] {
                min-width: 500px
            }
        }

        .hero-wide-media[data-v-6835ff82] {
            aspect-ratio: 320/157;
            max-width: 1280px
        }

        .one-to-one-media[data-v-6835ff82] {
            aspect-ratio: 1
        }

        .four-to-three-media[data-v-6835ff82] {
            aspect-ratio: 4/3
        }

        .three-to-four-media[data-v-6835ff82] {
            aspect-ratio: 3/4
        }

        .sixteen-to-nine-media[data-v-6835ff82] {
            aspect-ratio: 16/9
        }
    </style>
    <style>
        .h-image[data-v-8554daca] {
            pointer-events: none
        }
    </style>
    <style>
        .navigation-locale-selector[data-v-c58bae36] .h-button-v2 {
            --h-button-bg: transparent;
            --h-button-border: 1px solid transparent
        }
    </style>
    <style>
        .about-page__history[data-v-32a5d82c] .h-card-grid-section__container {
            scroll-behavior: smooth;
            scrollbar-width: none;
            -ms-overflow-style: none;
            display: flex;
            position: relative;
            overflow: scroll hidden
        }

        .about-page__history[data-v-32a5d82c] .h-card-grid-section__container::-webkit-scrollbar {
            display: none
        }

        .about-page__history-title[data-v-32a5d82c] {
            text-align: center;
            padding-bottom: 32px
        }

        @media (width>=768px) {
            .about-page__history-title[data-v-32a5d82c] {
                padding-bottom: 40px
            }
        }

        @media (width>=1025px) {
            .about-page__history-title[data-v-32a5d82c] {
                padding-bottom: 48px
            }
        }

        .about-page__history-carousel[data-v-32a5d82c] {
            margin: 0 auto
        }

        .about-page__card-image[data-v-32a5d82c] {
            width: 100%;
            max-width: 150px
        }

        .about-page__card[data-v-32a5d82c] {
            background: var(--h-color-neutral-0);
            border: 1px solid var(--h-color-neutral-200);
            border-radius: 16px;
            max-width: 328px;
            padding: 36px 24px;
            width: calc(100vw - 36px) !important;
            height: 264px !important
        }

        @media (width>=768px) {
            .about-page__card[data-v-32a5d82c] {
                max-width: 336px
            }
        }

        @media (width>=1025px) {
            .about-page__card[data-v-32a5d82c] {
                max-width: 360px
            }
        }

        .about-page__card[data-v-32a5d82c] .hw-card__title {
            color: var(--h-color-neutral-0);
            visibility: hidden;
            line-height: 0
        }

        .about-page__bitcatcha-link[data-v-32a5d82c] {
            padding-top: 16px
        }

        @media (width>=768px) {
            .about-page__bitcatcha-link[data-v-32a5d82c] {
                padding-top: 24px
            }
        }
    </style>
    <style>
        .header[data-v-c3732e88] {
            position: relative;
            overflow: hidden
        }

        .header--bg-h-color-neutral-1000[data-v-c3732e88],
        .header--bg-h-color-neutral-500[data-v-c3732e88],
        .header--bg-h-color-neutral-800[data-v-c3732e88],
        .header--bg-h-color-neutral-900[data-v-c3732e88],
        .header--bg-h-color-neutral-950[data-v-c3732e88],
        .header--bg-h-color-primary-600[data-v-c3732e88],
        .header--bg-h-color-primary-800[data-v-c3732e88],
        .header--bg-h-color-primary-950[data-v-c3732e88],
        .header--bg-horizons[data-v-c3732e88] {
            color: var(--h-color-neutral-0)
        }

        .header--bg-h-color-neutral-500[data-v-c3732e88] {
            background-color: var(--h-color-neutral-500)
        }

        .header--bg-h-color-neutral-800[data-v-c3732e88] {
            background-color: var(--h-color-neutral-800)
        }

        .header--bg-h-color-neutral-900[data-v-c3732e88] {
            background-color: var(--h-color-neutral-900)
        }

        .header--bg-h-color-neutral-950[data-v-c3732e88] {
            background-color: var(--h-color-neutral-950)
        }

        .header--bg-h-color-neutral-1000[data-v-c3732e88] {
            background-color: var(--h-color-neutral-1000)
        }

        .header--bg-h-color-primary-50[data-v-c3732e88] {
            background-color: var(--h-color-primary-50)
        }

        .header--bg-h-color-primary-100[data-v-c3732e88] {
            background-color: var(--h-color-primary-100)
        }

        .header--bg-h-color-primary-600[data-v-c3732e88] {
            background-color: var(--h-color-primary-600)
        }

        .header--bg-h-color-primary-800[data-v-c3732e88] {
            background-color: var(--h-color-primary-800)
        }

        .header--bg-h-color-primary-950[data-v-c3732e88] {
            background-color: var(--h-color-primary-950)
        }

        .header--bg-horizons[data-v-c3732e88] .header__heading b {
            color: var(--h-color-primary-500)
        }

        .header__heading-wrapper[data-v-c3732e88] {
            margin-bottom: 16px
        }

        @media (width>=768px) {
            .header__heading-wrapper[data-v-c3732e88] {
                margin-bottom: 24px
            }
        }

        @media (width>=1025px) {
            .header__heading-wrapper[data-v-c3732e88] {
                margin-bottom: 32px
            }
        }

        .header__heading[data-v-c3732e88] b {
            color: var(--h-color-primary-500)
        }

        .header__summer-sale-badge-text[data-v-c3732e88] {
            color: var(--h-fg-success-secondary)
        }

        .header__info-wrapper-content[data-v-c3732e88] {
            flex-direction: column;
            display: flex
        }

        @media (width>=768px) {
            .header__info-wrapper-content[data-v-c3732e88] {
                flex-direction: row;
                gap: 8px
            }
        }

        .header__description[data-v-c3732e88] {
            z-index: 1;
            margin-bottom: 16px;
            position: relative
        }

        @media (width>=768px) {
            .header__description[data-v-c3732e88] {
                margin-bottom: 18px
            }
        }

        @media (width>=1025px) {
            .header__description[data-v-c3732e88] {
                margin-bottom: 24px
            }
        }

        .header__description--h-color-neutral-1000[data-v-c3732e88] {
            color: var(--h-color-neutral-200)
        }

        .header__description--h-color-neutral-600[data-v-c3732e88] {
            color: var(--h-color-neutral-600)
        }

        .header__button-wrapper[data-v-c3732e88] {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: start;
            gap: 12px;
            display: flex
        }

        @media (width>=768px) {
            .header__button-wrapper[data-v-c3732e88] {
                flex-direction: row;
                justify-content: flex-start
            }
        }

        .header__button[data-v-c3732e88] {
            width: 100%
        }

        @media (width>=768px) {
            .header__button[data-v-c3732e88] {
                width: auto;
                margin: 0
            }
        }

        .header__image-wrapper[data-v-c3732e88] {
            width: 100%;
            position: relative
        }

        .header__image-wrapper--min-height[data-v-c3732e88] {
            min-height: 320px
        }

        @media (width>=1025px) {
            .header__image-wrapper--min-height[data-v-c3732e88] {
                min-height: 480px
            }
        }

        .header--parallax-overflow[data-v-c3732e88] {
            overflow: visible
        }

        .header__parallax-wrapper[data-v-c3732e88] {
            pointer-events: none;
            width: 100%;
            position: absolute;
            bottom: 0
        }

        @media (width>=1025px) {
            .header__parallax-wrapper[data-v-c3732e88] {
                bottom: 0
            }

            @supports (animation-timeline:view()) {
                .header__parallax-wrapper[data-v-c3732e88] {
                    animation: linear both parallax-float-c3732e88;
                    animation-timeline: view();
                    animation-range: entry 0 exit 15%;
                    bottom: -80px
                }
            }
        }

        @keyframes parallax-float-c3732e88 {
            0% {
                transform: translateY(100px)
            }

            to {
                transform: translateY(-200px)
            }
        }

        .header__bottom-content[data-v-c3732e88] {
            padding-bottom: 32px
        }

        @media (width>=768px) {
            .header__bottom-content[data-v-c3732e88] {
                padding-bottom: 40px
            }
        }

        @media (width>=1025px) {
            .header__bottom-content[data-v-c3732e88] {
                padding-bottom: 48px
            }
        }

        .header__features-list[data-v-c3732e88] {
            flex-flow: column wrap;
            gap: 8px;
            margin-bottom: 16px;
            display: flex
        }

        @media (width>=768px) {
            .header__features-list[data-v-c3732e88] {
                max-height: 165px;
                margin-bottom: 22px
            }
        }

        @media (width>=1025px) {
            .header__features-list[data-v-c3732e88] {
                max-height: none
            }
        }

        .header__feature-list-item[data-v-c3732e88] {
            align-items: center;
            gap: 10px;
            display: flex
        }

        .header__hero-video[data-v-c3732e88] {
            padding-inline: 16px
        }

        @media (width>=1525px) {
            .header__hero-video[data-v-c3732e88] {
                align-items: center;
                height: 700px;
                display: flex
            }
        }

        .header__hero-video-video[data-v-c3732e88] {
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: center;
            object-position: center;
            border-radius: 16px;
            width: 100%;
            height: 100%;
            position: absolute;
            overflow: hidden
        }

        .header__offer[data-v-c3732e88] {
            position: relative
        }

        .header__offer--homepage[data-v-c3732e88] {
            align-items: center;
            gap: 4px;
            max-width: 374px;
            display: flex
        }

        .header__offer[data-v-c3732e88] .header__offer-price {
            font-size: 20px
        }

        .header__price--color-meteorite500[data-v-c3732e88] {
            color: var(--h-color-meteorite-500)
        }

        .header__dots-container[data-v-c3732e88] {
            gap: 10px;
            display: flex;
            position: absolute;
            top: 24px;
            left: 24px
        }

        [dir=rtl] .header__dots-container[data-v-c3732e88] {
            left: auto;
            right: 24px
        }

        .header__dot[data-v-c3732e88] {
            background: 0 0;
            border: 1px solid #fff6;
            border-radius: 50%;
            width: 12px;
            height: 12px
        }

        .header__hero-video-wrapper[data-v-c3732e88] {
            top: 0;
            border-radius: 16px;
            width: calc(100% - 32px);
            height: calc(100% - 16px);
            position: absolute;
            inset-inline-start: 16px;
            overflow: hidden
        }

        @media (width>=768px) {
            .header__hero-video-wrapper[data-v-c3732e88] {
                width: calc(100% - 48px);
                height: calc(100% - 24px);
                inset-inline-start: 24px;
                overflow: hidden
            }
        }

        @media (width>=1025px) {
            .header__hero-video-wrapper[data-v-c3732e88] {
                width: calc(100% - 80px);
                max-width: 2150px;
                height: calc(100% - 24px);
                margin-inline: auto;
                inset-inline: 0;
                overflow: hidden
            }
        }

        .header__hero-video-wrapper[data-v-c3732e88] img {
            -o-object-fit: cover;
            object-fit: cover;
            width: 100%;
            height: 100%;
            overflow: hidden
        }

        .header--email-marketing[data-v-c3732e88] {
            background-image: url(https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6b3b0ea8-8b67-4126-b21b-0f1afc79e800/sharpen=0);
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative
        }

        .header--h-color-neutral-800[data-v-c3732e88] .h-countdown__colon {
            color: var(--h-color-neutral-0)
        }

        .header--h-color-neutral-800[data-v-c3732e88] .h-countdown__card {
            color: var(--h-color-neutral-0);
            background: #ffffff1a;
            border: none !important
        }

        .header--h-color-neutral-800[data-v-c3732e88] .h-countdown__card-name {
            display: none
        }

        .header--h-color-neutral-800[data-v-c3732e88] .header__heading-discount,
        .header--h-color-neutral-800[data-v-c3732e88] .header__overline-discount,
        .header--h-color-neutral-1000[data-v-c3732e88] .header__heading-discount,
        .header--h-color-neutral-1000[data-v-c3732e88] .header__overline-discount,
        .header--h-color-neutral-1000[data-v-c3732e88] .header__underline-wrapper,
        .header--h-color-primary-950[data-v-c3732e88] .header__heading-discount,
        .header--h-color-primary-950[data-v-c3732e88] .header__overline-discount,
        .header--h-color-primary-950[data-v-c3732e88] .header__underline-wrapper {
            color: var(--h-color-primary-400) !important
        }

        .header[data-v-c3732e88] .header__heading-discount {
            color: var(--h-color-primary-600)
        }

        .header[data-v-c3732e88] .header__heading-h-color-success-500 {
            color: var(--h-color-success-500);
            font-weight: 700
        }

        .header[data-v-c3732e88] .header__heading-h-color-warning-400 {
            color: var(--h-color-warning-400)
        }

        .header__bottom-feature[data-v-c3732e88] {
            z-index: 1;
            position: relative
        }

        .header__heading[data-v-c3732e88] b {
            font-weight: inherit;
            color: var(--h-color-primary-600)
        }

        .header__heading[data-v-c3732e88] .h-t-title-2 {
            display: inline
        }

        .header__heading--large[data-v-c3732e88] {
            margin-bottom: 24px
        }

        @media (width>=1025px) {
            .header__heading--large[data-v-c3732e88] {
                margin-bottom: 32px
            }
        }

        .header__heading--hero-video[data-v-c3732e88] {
            z-index: 1;
            text-align: start;
            margin-top: 80px;
            position: relative
        }

        .header__heading--hero-video[data-v-c3732e88] b {
            color: var(--h-color-neutral-0);
            font-weight: 600
        }

        .header[data-v-c3732e88] .header__heading-wrapper {
            margin-bottom: 16px
        }

        @media (width>=1025px) {
            .header[data-v-c3732e88] .header__heading-wrapper {
                margin-bottom: 24px
            }
        }

        .header[data-v-c3732e88] .h-countdown__card {
            border: 1px solid var(--h-color-primary-800)
        }

        .header[data-v-c3732e88] .h-countdown__card-name {
            display: none
        }

        .header__overline-wrapper[data-v-c3732e88] {
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
            display: flex
        }

        .header__overline-image[data-v-c3732e88] {
            max-width: 26px;
            max-height: 26px
        }

        .header__overline-full-image[data-v-c3732e88] {
            width: 191px;
            height: 28px;
            margin-bottom: 12px
        }

        .header__overline.h-t-title-1[data-v-c3732e88] .h-t-heading-2 {
            font-size: 32px;
            line-height: 40px
        }

        @media (width>=768px) {
            .header__overline.h-t-title-1[data-v-c3732e88] .h-t-heading-2 {
                line-height: 48px
            }
        }

        @media (width>=1025px) {
            .header__overline.h-t-title-1[data-v-c3732e88] .h-t-heading-2 {
                font-size: 40px
            }
        }

        .header__overline[data-v-c3732e88] .header__overline--brand-color {
            color: var(--h-color-primary-400)
        }

        .header__underline[data-v-c3732e88] {
            margin-top: 8px
        }

        .header__additional-content-underline[data-v-c3732e88] {
            margin-bottom: 24px
        }

        .header__overline[data-v-c3732e88] .header__overline-discount--important,
        .header__underline[data-v-c3732e88] .header__overline-discount--important {
            font-weight: 600;
            color: var(--h-color-primary-600) !important
        }

        .header__overline[data-v-c3732e88] .header__overline-discount,
        .header__underline[data-v-c3732e88] .header__overline-discount {
            color: var(--h-color-primary-600);
            font-weight: 600
        }

        .header__overline[data-v-c3732e88] h1,
        .header__underline[data-v-c3732e88] h1 {
            display: inline
        }

        .header__list-item[data-v-c3732e88] {
            align-items: center;
            gap: 10px;
            margin-bottom: 2px;
            display: flex
        }

        .header__list-item[data-v-c3732e88]:last-of-type {
            margin-bottom: 16px
        }

        @media (width>=1025px) {
            .header__list-item[data-v-c3732e88]: last-of-type {
                margin-bottom: 24px
            }
        }

        .header__list-item-icon[data-v-c3732e88] {
            display: inline-flex
        }

        .header__list-item-icon--h-color-neutral-0[data-v-c3732e88] {
            filter: invert()sepia()saturate(0)hue-rotate(45deg)brightness(102%)contrast(103%)
        }

        .header__price-wrapper[data-v-c3732e88] {
            margin-bottom: 2px
        }

        .header__price-wrapper--spacing[data-v-c3732e88] {
            margin-bottom: 16px
        }

        @media (width>=1025px) {
            .header__price-wrapper--spacing[data-v-c3732e88] {
                margin-bottom: 24px
            }
        }

        .header__timer[data-v-c3732e88] {
            margin-top: 16px;
            margin-bottom: 24px
        }

        .header__timer--spacing[data-v-c3732e88] {
            margin-bottom: 16px
        }

        @media (width>=1025px) {
            .header__timer--spacing[data-v-c3732e88] {
                margin-bottom: 24px
            }

            .header__timer[data-v-c3732e88] {
                width: fit-content;
                margin-top: 24px
            }
        }

        .header__static-price[data-v-c3732e88] {
            color: var(--h-color-primary-700)
        }

        .header--loading-prices[data-v-c3732e88] .header__heading-discount,
        .header--loading-prices[data-v-c3732e88] .header__overline-discount {
            visibility: hidden
        }

        .header__bottom-content-inner[data-v-c3732e88] {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
            display: flex
        }

        @media (width>=1025px) {
            .header__bottom-content-inner[data-v-c3732e88] {
                flex-direction: row
            }
        }

        .header__trusted-by-count[data-v-c3732e88] {
            color: var(--h-color-neutral-600);
            width: fit-content;
            margin: 0 auto 12px;
            display: block
        }

        .header__trustpilot[data-v-c3732e88] {
            width: 100%
        }

        .header__separator[data-v-c3732e88] {
            display: none
        }

        @media (width>=1025px) {
            .header__separator[data-v-c3732e88] {
                border-right: 1px solid var(--h-color-neutral-200);
                height: 24px;
                display: block
            }
        }
    </style>
    <style>
        .h-header-two-cols[data-v-b6da53ff] {
            width: 100%;
            padding: 14px 0 36px
        }

        @media (width>=768px) {
            .h-header-two-cols[data-v-b6da53ff] {
                padding: 62px 0 80px
            }
        }

        @media (width>=1025px) {
            .h-header-two-cols[data-v-b6da53ff] {
                padding: 36px 0 96px
            }
        }

        .h-header-two-cols__wrapper[data-v-b6da53ff] {
            flex-direction: column;
            gap: 8px;
            display: flex
        }

        @media (width>=1025px) {
            .h-header-two-cols__wrapper[data-v-b6da53ff] {
                flex-direction: row;
                align-items: center;
                gap: 60px;
                width: 100%;
                max-width: 1600px;
                margin-inline: auto
            }
        }

        @media (width>=1310px) {
            .h-header-two-cols__wrapper[data-v-b6da53ff] {
                gap: 80px
            }
        }

        .h-header-two-cols__left-col[data-v-b6da53ff] {
            margin-bottom: 32px
        }

        @media (width>=768px) {
            .h-header-two-cols__left-col[data-v-b6da53ff] {
                margin-bottom: 40px
            }
        }

        @media (width>=1025px) {
            .h-header-two-cols__left-col[data-v-b6da53ff] {
                flex: 1 20000 auto;
                min-width: 500px;
                max-width: 600px;
                margin-bottom: 0
            }

            .h-header-two-cols__right-col[data-v-b6da53ff] {
                flex: 760px;
                width: 100%
            }
        }

        .h-header-two-cols--bg-h-color-primary-50[data-v-b6da53ff] {
            background-color: var(--h-color-primary-50)
        }

        .h-header-two-cols--bg-h-color-primary-600[data-v-b6da53ff] {
            background-color: var(--h-color-primary-600)
        }

        .h-header-two-cols--bg-h-color-neutral-950[data-v-b6da53ff] {
            background-color: var(--h-color-neutral-950)
        }

        .h-header-two-cols--bg-h-color-primary-800[data-v-b6da53ff] {
            background-color: var(--h-color-primary-800)
        }

        .h-header-two-cols--bg-h-color-neutral-500[data-v-b6da53ff] {
            background-color: var(--h-color-neutral-500)
        }

        .h-header-two-cols--bg-transparent[data-v-b6da53ff] {
            background-color: #0000
        }
    </style>
    <style>
        .h-multi-texts-section__wrapper[data-v-758403d6] {
            row-gap: 64px;
            display: grid
        }

        @media (width>=768px) {
            .h-multi-texts-section__wrapper[data-v-758403d6] {
                row-gap: 80px
            }
        }

        @media (width>=1025px) {
            .h-multi-texts-section__wrapper[data-v-758403d6] {
                row-gap: 96px
            }
        }

        .h-multi-texts-section__badge[data-v-758403d6] {
            justify-content: center;
            align-items: center;
            margin-bottom: -32px;
            display: flex
        }

        @media (width>=768px) {
            .h-multi-texts-section__badge[data-v-758403d6] {
                margin-bottom: -48px
            }
        }

        @media (width>=1025px) {
            .h-multi-texts-section__badge[data-v-758403d6] {
                margin-bottom: -64px
            }
        }

        .h-multi-texts-section__overline[data-v-758403d6] {
            color: var(--h-color-neutral-500);
            text-align: center;
            margin-bottom: 24px
        }

        .h-multi-texts-section__paragraph-title-badge[data-v-758403d6] {
            background-color: var(--h-color-primary-100);
            color: var(--h-color-primary-700);
            border-radius: 6px;
            justify-content: center;
            align-items: center;
            margin-left: 8px;
            padding: 4px 12px
        }

        .h-multi-texts-section__title[data-v-758403d6] {
            text-align: center
        }

        .h-multi-texts-section__block-icon[data-v-758403d6] {
            border-radius: 6px;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            display: flex
        }

        .h-multi-texts-section__block-icon--transparent[data-v-758403d6] {
            background: 0 0 !important
        }

        .h-multi-texts-section__block-title[data-v-758403d6] {
            margin-bottom: 24px
        }

        .h-multi-texts-section__description[data-v-758403d6] {
            text-align: center;
            margin-top: 16px
        }

        @media (width>=768px) {
            .h-multi-texts-section__description[data-v-758403d6] {
                margin-top: 24px
            }
        }

        @media (width>=1025px) {
            .h-multi-texts-section__description[data-v-758403d6] {
                margin-top: 32px
            }
        }

        .h-multi-texts-section__action-wrapper[data-v-758403d6] {
            display: flex
        }

        @media (width<=767px) {
            .h-multi-texts-section__action-wrapper[data-v-758403d6] {
                justify-content: center
            }
        }

        .h-multi-texts-section__text-block[data-v-758403d6] {
            gap: 16px;
            margin-bottom: 24px;
            display: flex
        }

        .h-multi-texts-section__text-block[data-v-758403d6]:last-child {
            margin-bottom: 0
        }

        .h-multi-texts-section__text-block[data-v-758403d6] li {
            margin-left: 16px
        }

        .h-multi-texts-section__text-block h2[data-v-758403d6] {
            margin-bottom: 16px
        }

        @media (width>=768px) {
            .h-multi-texts-section__text-block h2[data-v-758403d6] {
                margin-bottom: 24px
            }
        }

        @media (width>=1025px) {
            .h-multi-texts-section__text-block h2[data-v-758403d6] {
                margin-bottom: 32px
            }
        }

        .h-multi-texts-section__text-block h3[data-v-758403d6],
        .h-multi-texts-section__text-block h4[data-v-758403d6] {
            margin-bottom: 8px
        }

        @media (width>=768px) {
            .h-multi-texts-section__text-block h4[data-v-758403d6] {
                margin-bottom: 16px
            }
        }

        .h-multi-texts-section__text-block a[data-v-758403d6] {
            margin-top: 24px;
            text-decoration-line: underline
        }

        .h-multi-texts-section__text-block .h-image[data-v-758403d6] {
            flex-shrink: 0;
            width: 40px;
            height: 40px
        }

        .h-multi-texts-section__text-block[data-v-758403d6] p:not(:first-of-type) {
            margin-top: 4px
        }

        .h-multi-texts-section--bg-h-color-primary-600[data-v-758403d6] {
            background-color: var(--h-color-primary-600);
            color: var(--h-color-neutral-0)
        }

        .h-multi-texts-section--bg-h-color-neutral-0[data-v-758403d6] {
            background-color: var(--h-color-neutral-0)
        }

        .h-multi-texts-section--bg-h-color-neutral-0 .h-multi-texts-section__block-icon[data-v-758403d6] {
            background: var(--h-color-primary-50)
        }

        .h-multi-texts-section--bg-h-color-primary-700[data-v-758403d6] {
            background-color: var(--h-color-primary-700);
            color: var(--h-color-neutral-0)
        }

        .h-multi-texts-section--bg-h-color-neutral-1000[data-v-758403d6] {
            background-color: var(--h-color-neutral-1000);
            color: var(--h-color-neutral-0)
        }

        .h-multi-texts-section--bg-h-color-neutral-1000 .h-multi-texts-section__block-icon[data-v-758403d6] {
            background: var(--h-color-neutral-700)
        }

        .h-multi-texts-section--bg-h-color-neutral-950[data-v-758403d6] {
            background-color: var(--h-color-neutral-950);
            color: var(--h-color-neutral-0)
        }

        .h-multi-texts-section--bg-h-color-neutral-950 .h-multi-texts-section__block-icon[data-v-758403d6] {
            background: var(--h-color-neutral-700)
        }

        .h-multi-texts-section--bg-h-color-primary-50[data-v-758403d6] {
            background-color: var(--h-color-primary-50)
        }

        .h-multi-texts-section--bg-h-color-primary-50 .h-multi-texts-section__block-icon[data-v-758403d6] {
            background: var(--h-color-primary-100)
        }

        .h-multi-texts-section--bg-h-color-primary-100[data-v-758403d6] {
            background-color: var(--h-color-primary-100)
        }

        .h-multi-texts-section--bg-h-color-primary-100 .h-multi-texts-section__block-icon[data-v-758403d6] {
            background: var(--h-color-primary-100)
        }

        .h-multi-texts-section--bg-h-color-neutral-800[data-v-758403d6] {
            background-color: var(--h-color-neutral-800);
            color: var(--h-color-neutral-0)
        }

        .h-multi-texts-section--bg-h-color-primary-800[data-v-758403d6] {
            background-color: var(--h-color-primary-800)
        }

        .h-multi-texts-section--bg-h-color-primary-900[data-v-758403d6] {
            background-color: var(--h-color-primary-900)
        }

        .h-multi-texts-section--bg-h-color-primary-950[data-v-758403d6] {
            background-color: var(--h-color-primary-950)
        }

        .h-multi-texts-section--bg-h-color-primary-600 .h-multi-texts-section__description[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-600 .h-multi-texts-section__text-block[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-600 .h-multi-texts-section__title[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-800 .h-multi-texts-section__description[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-800 .h-multi-texts-section__text-block[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-800 .h-multi-texts-section__title[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-900 .h-multi-texts-section__description[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-900 .h-multi-texts-section__text-block[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-900 .h-multi-texts-section__title[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-950 .h-multi-texts-section__description[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-950 .h-multi-texts-section__text-block[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-950 .h-multi-texts-section__title[data-v-758403d6] {
            color: var(--h-color-neutral-0)
        }

        .h-multi-texts-section--bg-h-color-neutral-0 .h-multi-texts-section__text-block p[data-v-758403d6],
        .h-multi-texts-section--bg-h-color-primary-50 .h-multi-texts-section__text-block p[data-v-758403d6] {
            color: var(--h-color-neutral-500)
        }

        .h-multi-texts-section[dir=rtl] .h-multi-texts-section__text-block[data-v-758403d6] li {
            margin-left: 0;
            margin-right: 16px
        }
    </style>
    <style>
        .hw-headline[data-v-ec35f884] {
            width: 100%;
            color: var(--h-fg-neutral-default);
            text-align: center;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            display: flex
        }

        @media (width>=768px) {
            .hw-headline[data-v-ec35f884] {
                gap: 32px
            }
        }

        .hw-headline--left[data-v-ec35f884] {
            text-align: left
        }

        .hw-headline--left[data-v-ec35f884],
        .hw-headline--left .hw-headline__slot[data-v-ec35f884] {
            align-items: flex-start
        }

        .hw-headline--right[data-v-ec35f884] {
            text-align: right
        }

        .hw-headline--right[data-v-ec35f884],
        .hw-headline--right .hw-headline__slot[data-v-ec35f884] {
            align-items: flex-end
        }

        .hw-headline__top[data-v-ec35f884] {
            align-items: inherit;
            flex-direction: column;
            gap: 16px;
            width: 100%;
            display: flex
        }

        .hw-headline__title[data-v-ec35f884] {
            width: 100%;
            max-width: 646px;
            margin: 0
        }

        .hw-headline__description[data-v-ec35f884] {
            width: 100%;
            max-width: 736px;
            color: var(--h-fg-neutral-secondary);
            margin: 0
        }

        .hw-headline__slot[data-v-ec35f884] {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 100%;
            display: flex
        }
    </style>
    <style>
        .h-image-section-two-cols__overline[data-v-b627a800] {
            color: var(--h-color-neutral-500);
            margin-bottom: 8px;
            display: inline-block
        }

        .h-image-section-two-cols__overline-logo[data-v-b627a800] {
            margin-bottom: 0
        }

        @media (width>=768px) {
            .h-image-section-two-cols__overline-logo[data-v-b627a800] {
                margin-bottom: 16px
            }
        }

        .h-image-section-two-cols__overline-logo[data-v-b627a800] img {
            width: auto;
            height: 25px
        }

        .h-image-section-two-cols__description[data-v-b627a800],
        .h-image-section-two-cols__features[data-v-b627a800],
        .h-image-section-two-cols__heading[data-v-b627a800],
        .h-image-section-two-cols__paragraph[data-v-b627a800],
        .h-image-section-two-cols__paragraph-description[data-v-b627a800] {
            color: var(--h-fg-neutral-default)
        }

        .h-image-section-two-cols__image--rounded[data-v-b627a800] {
            border-radius: 16px;
            overflow: hidden
        }

        .h-image-section-two-cols__image--rounded[data-v-b627a800] .h-video,
        .h-image-section-two-cols__image--rounded[data-v-b627a800] img,
        .h-image-section-two-cols__image--rounded[data-v-b627a800] video {
            border-radius: 16px
        }

        .h-image-section-two-cols__paragraph[data-v-b627a800] {
            gap: 16px;
            margin-bottom: 8px;
            display: flex
        }

        .h-image-section-two-cols__icon[data-v-b627a800] {
            border-radius: 6px;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            display: flex
        }

        .h-image-section-two-cols__icon--transparent[data-v-b627a800] {
            background-color: #0000 !important
        }

        .h-image-section-two-cols__paragraph-heading[data-v-b627a800] {
            gap: 8px;
            display: flex
        }

        .h-image-section-two-cols__paragraph-badge[data-v-b627a800] {
            background-color: var(--h-color-primary-100);
            color: var(--h-color-primary-700);
            border-radius: 6px;
            justify-content: center;
            align-items: center;
            height: min-content;
            padding: 4px 12px
        }

        .h-image-section-two-cols__features[data-v-b627a800] {
            flex-direction: column;
            gap: 8px;
            display: flex
        }

        .h-image-section-two-cols__feature[data-v-b627a800] {
            gap: 16px;
            display: flex
        }

        .h-image-section-two-cols__link-wrapper[data-v-b627a800] {
            margin-top: 8px;
            justify-content: center;
            margin-inline: 1px;
            display: flex
        }

        @media (width>=768px) {
            .h-image-section-two-cols__link-wrapper[data-v-b627a800] {
                justify-content: start
            }
        }

        .h-image-section-two-cols--bg-h-color-neutral-1000 .h-image-section-two-cols__description[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-1000 h2[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-1000 h3[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-1000 p[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-1000__overline[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-800 .h-image-section-two-cols__description[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-800 h2[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-800 h3[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-800 p[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-800__overline[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-600 .h-image-section-two-cols__description[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-600 h2[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-600 h3[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-600 p[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-600__overline[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-800 .h-image-section-two-cols__description[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-800 h2[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-800 h3[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-800 p[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-800__overline[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-1000[data-v-b627a800] a:not(.h-image-section-two-cols__link-wrapper a),
        .h-image-section-two-cols--bg-h-color-neutral-800[data-v-b627a800] a:not(.h-image-section-two-cols__link-wrapper a),
        .h-image-section-two-cols--bg-h-color-primary-600[data-v-b627a800] a:not(.h-image-section-two-cols__link-wrapper a),
        .h-image-section-two-cols--bg-h-color-primary-800[data-v-b627a800] a:not(.h-image-section-two-cols__link-wrapper a) {
            color: var(--h-color-neutral-0)
        }

        .h-image-section-two-cols--bg-h-color-primary-950 .h-image-section-two-cols__description[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-950 h2[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-950 h3[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-950 p[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-950__overline[data-v-b627a800] {
            color: var(--h-color-neutral-400)
        }

        .h-image-section-two-cols--bg-h-color-primary-950 .h-image-section-two-cols__heading[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-primary-950[data-v-b627a800] a:not(.h-image-section-two-cols__link-wrapper a) {
            color: var(--h-color-neutral-0)
        }

        .h-image-section-two-cols--bg-h-color-neutral-1000 .h-image-section-two-cols__description[data-v-b627a800],
        .h-image-section-two-cols--bg-h-color-neutral-1000 p[data-v-b627a800] {
            color: var(--h-color-neutral-200)
        }

        .h-image-section-two-cols--bg-h-color-primary-50 .h-image-section-two-cols__icon[data-v-b627a800] {
            background: var(--h-color-primary-100)
        }

        .h-image-section-two-cols--bg-h-color-primary-50[data-v-b627a800] {
            background-color: var(--h-color-primary-50)
        }

        .h-image-section-two-cols--bg-h-color-neutral-0[data-v-b627a800] {
            background-color: var(--h-color-neutral-0)
        }

        .h-image-section-two-cols--bg-h-color-neutral-50[data-v-b627a800] {
            background-color: var(--h-color-neutral-50)
        }

        .h-image-section-two-cols--bg-h-color-primary-600[data-v-b627a800] {
            background-color: var(--h-color-primary-600)
        }

        .h-image-section-two-cols--bg-h-color-primary-800[data-v-b627a800] {
            background-color: var(--h-color-primary-800)
        }

        .h-image-section-two-cols--bg-h-color-primary-950[data-v-b627a800] {
            background-color: var(--h-color-primary-950)
        }

        .h-image-section-two-cols--bg-h-color-neutral-800[data-v-b627a800] {
            background-color: var(--h-color-neutral-800)
        }

        .h-image-section-two-cols--bg-h-color-neutral-1000[data-v-b627a800] {
            background-color: var(--h-color-neutral-1000)
        }
    </style>
    <style>
        .h-section-two-cols[data-v-8ef454ef] {
            width: 100%
        }

        .h-section-two-cols__header[data-v-8ef454ef] {
            margin-bottom: 32px
        }

        @media (width>=768px) {
            .h-section-two-cols__header[data-v-8ef454ef] {
                margin-bottom: 40px
            }
        }

        @media (width>=1025px) {
            .h-section-two-cols__header[data-v-8ef454ef] {
                margin-bottom: 48px
            }
        }

        .h-section-two-cols__wrapper[data-v-8ef454ef] {
            -moz-column-gap: 80px;
            border-radius: 16px;
            grid-template-columns: 1fr;
            gap: 40px 80px;
            display: grid;
            overflow: hidden
        }

        @media (width>=768px) {
            .h-section-two-cols__wrapper--horizontal[data-v-8ef454ef] {
                grid-template-columns: 1fr 1fr
            }

            .h-section-two-cols__wrapper--vertical[data-v-8ef454ef] {
                grid-template-columns: 1fr
            }

            .h-section-two-cols__wrapper--reverse .h-section-two-cols__left-col[data-v-8ef454ef] {
                order: 2
            }

            .h-section-two-cols__wrapper--reverse .h-section-two-cols__right-col[data-v-8ef454ef] {
                order: 1
            }
        }

        @media (width>=1025px) {
            .h-section-two-cols__wrapper[data-v-8ef454ef] {
                grid-template-columns: 1fr 1fr
            }
        }

        .h-section-two-cols__wrapper--bg-h-color-neutral-900[data-v-8ef454ef] {
            background-color: var(--h-color-neutral-900)
        }

        .h-section-two-cols__left-col[data-v-8ef454ef] {
            flex-direction: column;
            justify-content: center;
            gap: 16px;
            width: 100%;
            max-width: 560px;
            margin-bottom: 24px;
            display: flex
        }

        .h-section-two-cols__left-col--card[data-v-8ef454ef] {
            max-width: 656px;
            margin-bottom: 0;
            padding: 48px 48px 24px
        }

        .h-section-two-cols__right-col[data-v-8ef454ef] {
            align-items: center;
            width: 100%;
            display: flex
        }

        .h-section-two-cols__bottom-row[data-v-8ef454ef] {
            margin-top: 24px
        }

        @media (width>=768px) {
            .h-section-two-cols__bottom-row[data-v-8ef454ef] {
                margin-top: 32px
            }
        }

        @media (width>=1025px) {
            .h-section-two-cols__bottom-row[data-v-8ef454ef] {
                margin-top: 40px
            }
        }

        .h-section-two-cols--bg-h-color-primary-50[data-v-8ef454ef] {
            background-color: var(--h-color-primary-50)
        }

        .h-section-two-cols--bg-transparent[data-v-8ef454ef] {
            background-color: #0000
        }

        .h-section-two-cols--bg-h-color-primary-800[data-v-8ef454ef] {
            background-color: var(--h-color-primary-800)
        }

        .h-section-two-cols--bg-h-color-primary-600[data-v-8ef454ef] {
            background-color: var(--h-color-primary-600)
        }

        .h-section-two-cols--bg-h-color-neutral-0[data-v-8ef454ef] {
            background-color: var(--h-color-neutral-0)
        }
    </style>
    <style>
        .h-carousel__wrapper[data-v-ca87c1fa] {
            justify-content: center;
            align-items: center;
            display: flex
        }

        .h-carousel__track[data-v-ca87c1fa] {
            flex-direction: column;
            align-items: center;
            width: 100%;
            display: flex
        }

        .h-carousel__inner-container[data-v-ca87c1fa] {
            justify-content: center;
            width: 100%;
            max-width: 100%;
            display: flex
        }

        .h-carousel__wrapper[data-v-ca87c1fa] {
            width: 100%
        }

        .h-carousel__container[data-v-ca87c1fa] {
            max-width: 100%;
            height: fit-content;
            width: inherit;
            justify-content: center;
            display: flex
        }

        .h-carousel__cards-container[data-v-ca87c1fa] {
            display: flex
        }

        .h-carousel__nav-container[data-v-ca87c1fa] {
            direction: ltr;
            gap: 8px;
            margin: auto 0 0 auto;
            display: none
        }

        @media (width>=768px) {
            .h-carousel__nav-container[data-v-ca87c1fa] {
                display: flex
            }
        }

        .h-carousel__nav-button[data-v-ca87c1fa] {
            cursor: pointer;
            background: var(--h-bg-neutral-surface);
            width: 40px;
            min-width: 40px;
            height: 40px;
            color: var(--h-fg-neutral-default);
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            display: flex
        }

        .h-carousel__nav-button--disabled[data-v-ca87c1fa] {
            color: var(--h-fg-neutral-disabled)
        }

        .h-carousel__overflow-container[data-v-ca87c1fa] {
            scrollbar-width: none;
            flex: 0 1 var(--max-total-cards-width);
            gap: 12px;
            padding: 0 12px;
            display: flex;
            overflow: auto hidden
        }

        @media (width>=768px) {
            .h-carousel__overflow-container[data-v-ca87c1fa] {
                padding: 0 40px
            }
        }

        @media (width>=1025px) {
            .h-carousel__overflow-container[data-v-ca87c1fa] {
                gap: 16px
            }
        }

        .h-carousel__overflow-container[data-v-ca87c1fa]::-webkit-scrollbar {
            display: none
        }

        .h-carousel__overflow-container--vertical[data-v-ca87c1fa] {
            flex-direction: column;
            align-items: center
        }

        @media (width>=768px) {
            .h-carousel__overflow-container--vertical[data-v-ca87c1fa] {
                flex-direction: row
            }
        }

        .h-carousel__overflow-container--draggable[data-v-ca87c1fa] {
            cursor: grab
        }

        .h-carousel__overflow-container--draggable[data-v-ca87c1fa] a,
        .h-carousel__overflow-container--draggable[data-v-ca87c1fa] img {
            -webkit-user-drag: none;
            -webkit-user-select: none;
            user-select: none
        }

        .h-carousel__overflow-container--dragging[data-v-ca87c1fa] {
            cursor: grabbing;
            -webkit-user-select: none;
            user-select: none
        }

        .h-carousel__track-controls[data-v-ca87c1fa] {
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 16px;
            display: flex
        }

        @media (width>=768px) {
            .h-carousel__track-controls[data-v-ca87c1fa] {
                padding: 0 40px
            }
        }

        .h-carousel__track-controls--centered[data-v-ca87c1fa] {
            justify-content: center
        }

        @media (width>=1025px) {
            .h-carousel__track-controls[data-v-ca87c1fa] {
                padding: 0 80px;
                display: none
            }

            .h-carousel__track-controls--force-show[data-v-ca87c1fa] {
                display: flex
            }
        }

        .h-carousel__card[data-v-ca87c1fa] {
            flex: 0 1 var(--max-card-width);
            height: 100%;
            display: grid
        }

        .h-carousel__dots[data-v-ca87c1fa] {
            gap: 8px;
            display: flex
        }

        @media (width>=768px) {
            .h-carousel__dots[data-v-ca87c1fa] {
                display: none
            }
        }

        .h-carousel__track.rtl .h-carousel__nav-container[data-v-ca87c1fa] {
            margin: auto auto 0 0
        }

        .h-carousel__dot[data-v-ca87c1fa] {
            background-color: var(--h-bg-neutral-surface-secondary);
            cursor: pointer;
            border-radius: 99px;
            width: 4px;
            height: 4px
        }

        .h-carousel__dot--active[data-v-ca87c1fa] {
            background-color: var(--h-bg-neutral-inverse-default);
            width: 16px;
            height: 4px
        }

        @media (width>=768px) {
            .h-carousel--force-mobile-controls .h-carousel__dots[data-v-ca87c1fa] {
                display: flex
            }

            .h-carousel--force-mobile-controls .h-carousel__nav-container[data-v-ca87c1fa] {
                display: none
            }

            .h-carousel--force-mobile-controls .h-carousel__overflow-container[data-v-ca87c1fa] {
                padding: 0 12px
            }

            .h-carousel--force-mobile-controls .h-carousel__track-controls[data-v-ca87c1fa] {
                padding: 0 16px
            }
        }
    </style>
    <style>
        .hw-card[data-v-2915377e] {
            flex-direction: column;
            justify-content: center;
            width: 100%;
            display: flex
        }

        .hw-card--top-gap-16[data-v-2915377e] {
            gap: 16px
        }

        .hw-card--top-gap-24[data-v-2915377e] {
            gap: 24px
        }

        .hw-card--left[data-v-2915377e] {
            text-align: start
        }

        .hw-card--left[data-v-2915377e],
        .hw-card--left .hw-card__content[data-v-2915377e],
        .hw-card--left .hw-card__inner[data-v-2915377e] {
            align-items: flex-start
        }

        .hw-card--central[data-v-2915377e] {
            text-align: center
        }

        .hw-card--central[data-v-2915377e],
        .hw-card--central .hw-card__content[data-v-2915377e],
        .hw-card--central .hw-card__inner[data-v-2915377e] {
            align-items: center
        }

        .hw-card--padded[data-v-2915377e] {
            border-radius: 16px;
            padding: 24px
        }

        .hw-card--bordered[data-v-2915377e] {
            border: 1px solid var(--hw-card-border)
        }

        .hw-card__top[data-v-2915377e] {
            align-items: center;
            display: flex
        }

        .hw-card__top-text[data-v-2915377e] {
            color: var(--h-fg-neutral-default);
            margin: 0
        }

        .hw-card__inner[data-v-2915377e] {
            gap: 12px
        }

        .hw-card__content[data-v-2915377e],
        .hw-card__inner[data-v-2915377e] {
            flex-direction: column;
            width: 100%;
            display: flex
        }

        .hw-card__content[data-v-2915377e] {
            gap: 8px
        }

        .hw-card__title[data-v-2915377e] {
            color: var(--h-fg-neutral-default);
            margin: 0
        }

        .hw-card__description[data-v-2915377e] {
            color: var(--h-fg-neutral-secondary);
            margin: 0
        }
    </style>
    <style>
        .h-reviews-section__card[data-v-2cd2a447] {
            min-width: calc(100vw - 32px)
        }

        @media (width>=768px) {
            .h-reviews-section__card[data-v-2cd2a447] {
                min-width: 400px
            }
        }

        .h-reviews-section__grid[data-v-2cd2a447] {
            align-items: stretch;
            row-gap: 16px
        }

        @media (width>=768px) {
            .h-reviews-section__grid[data-v-2cd2a447] {
                row-gap: 24px
            }
        }

        @media (width>=1025px) {
            .h-reviews-section__grid[data-v-2cd2a447] {
                row-gap: 32px
            }
        }
    </style>
    <style>
        .h-review-card[data-v-1ed3f463] {
            width: 100%;
            height: 100%;
            color: var(--h-fg-neutral-default);
            border-radius: 16px;
            flex-direction: column;
            gap: 16px;
            padding: 24px;
            display: flex;
            position: relative
        }

        @media (width>=768px) {
            .h-review-card[data-v-1ed3f463] {
                padding: 32px
            }
        }

        .h-review-card--reverse[data-v-1ed3f463] {
            flex-direction: column-reverse
        }

        .h-review-card__review[data-v-1ed3f463] {
            flex-direction: column;
            flex: 1 0 auto;
            width: 100%;
            display: flex
        }

        @media (width>=1025px) {
            .h-review-card__body[data-v-1ed3f463] {
                flex: 1 0 auto
            }
        }

        .h-review-card__link[data-v-1ed3f463] {
            margin-inline-start: auto
        }

        .h-review-card__person[data-v-1ed3f463] {
            border-radius: 16px 16px 0 0;
            align-items: center;
            display: flex
        }

        @media (width>=1025px) {
            .h-review-card__person[data-v-1ed3f463] {
                flex: none
            }
        }

        .h-review-card__person-left[data-v-1ed3f463] {
            border-radius: 50%;
            width: 48px;
            min-width: 48px;
            height: 48px;
            margin-inline-end: 11px;
            overflow: hidden
        }

        .h-review-card__person-right[data-v-1ed3f463] {
            flex-direction: column;
            justify-content: space-between;
            display: flex
        }

        .h-review-card__person-right .h-t-body-2[data-v-1ed3f463] {
            color: var(--h-fg-neutral-secondary)
        }

        .h-review-card__person-right-name[data-v-1ed3f463] {
            color: var(--h-fg-neutral-default);
            align-items: center;
            gap: 4px;
            display: flex
        }

        .h-review-card--clickable[data-v-1ed3f463]:hover {
            background-color: var(--h-bg-neutral-secondary)
        }

        .h-review-card[dir=rtl] .h-review-card__link[data-v-1ed3f463] {
            transform: scaleX(-1)
        }
    </style>
    <style>
        .h-card-grid-section__info[data-v-63494c95] {
            text-align: center;
            margin-bottom: 32px
        }

        @media (width>=768px) {
            .h-card-grid-section__info[data-v-63494c95] {
                margin-bottom: 40px
            }
        }

        @media (width>=1025px) {
            .h-card-grid-section__info[data-v-63494c95] {
                margin-bottom: 48px
            }
        }

        .h-card-grid-section__text[data-v-63494c95] {
            margin-top: 16px
        }

        @media (width>=768px) {
            .h-card-grid-section__text[data-v-63494c95] {
                margin-top: 24px
            }
        }

        @media (width>=1025px) {
            .h-card-grid-section__text[data-v-63494c95] {
                margin-top: 32px
            }
        }

        .h-card-grid-section__container[data-v-63494c95] {
            align-items: center;
            row-gap: 16px;
            padding-top: 0;
            padding-left: 0 !important;
            padding-right: 0 !important
        }

        @media (width<=767px) {
            .h-card-grid-section__container[data-v-63494c95] {
                flex-direction: column;
                display: flex
            }
        }

        @media (width>=768px) {
            .h-card-grid-section__container[data-v-63494c95] {
                row-gap: 24px
            }
        }

        @media (width>=1025px) {
            .h-card-grid-section__container[data-v-63494c95] {
                row-gap: 32px
            }
        }

        .h-card-grid-section__cta[data-v-63494c95] {
            justify-content: center;
            margin-top: 24px;
            display: flex
        }

        @media (width>=768px) {
            .h-card-grid-section__cta[data-v-63494c95] {
                margin-top: 32px
            }
        }

        @media (width>=1025px) {
            .h-card-grid-section__cta[data-v-63494c95] {
                margin-top: 48px
            }
        }

        .h-card-grid-section--h-color-neutral-950[data-v-63494c95] {
            background-color: var(--h-color-neutral-950)
        }

        [data-v-63494c95] .highlighted {
            font-weight: inherit;
            color: var(--h-color-primary-600)
        }

        .h-card-grid-section--bg-h-color-primary-50[data-v-63494c95] {
            background-color: var(--h-color-primary-50)
        }

        .h-card-grid-section--bg-h-color-neutral-0[data-v-63494c95] {
            background-color: var(--h-color-neutral-0)
        }

        .h-card-grid-section--bg-h-color-primary-600[data-v-63494c95] {
            background-color: var(--h-color-primary-600)
        }
    </style>
    <style>
        .h-section-one-col--bg-h-color-neutral-950[data-v-50907970] {
            background-color: var(--h-color-neutral-950)
        }

        .h-section-one-col--bg-h-color-neutral-0[data-v-50907970] {
            background-color: var(--h-color-neutral-0)
        }

        .h-section-one-col--bg-h-color-primary-800[data-v-50907970] {
            background-color: var(--h-color-primary-800)
        }

        .h-section-one-col--bg-h-color-primary-50[data-v-50907970] {
            background-color: var(--h-color-primary-50)
        }

        .h-section-one-col--bg-h-color-primary-950[data-v-50907970] {
            background-color: var(--h-color-primary-950)
        }

        .h-section-one-col--bg-h-color-primary-600[data-v-50907970] {
            background-color: var(--h-color-primary-600)
        }

        .h-section-one-col--bg-h-color-neutral-800[data-v-50907970] {
            background-color: var(--h-color-neutral-800)
        }

        .h-section-one-col--bg-h-color-neutral-1000[data-v-50907970] {
            background-color: var(--h-color-neutral-1000)
        }

        .h-section-one-col--bg-h-color-neutral-1000[data-v-50907970],
        .h-section-one-col--bg-h-color-neutral-800[data-v-50907970],
        .h-section-one-col--bg-h-color-neutral-950[data-v-50907970],
        .h-section-one-col--bg-h-color-primary-600[data-v-50907970],
        .h-section-one-col--bg-h-color-primary-800[data-v-50907970],
        .h-section-one-col--bg-h-color-primary-950[data-v-50907970] {
            color: var(--h-color-neutral-0)
        }

        @media (width>=1025px) {
            .h-section-one-col--has-sale-image.h-section-one-col--bg-h-color-neutral-1000[data-v-50907970] {
                background-image: url(https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/3ed56f2e-4500-46e6-3cfa-6e9555b5c000/sharpen=0);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover
            }

            .h-section-one-col--has-sale-image.h-section-one-col--bg-h-color-primary-50[data-v-50907970] {
                background-image: url(https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7711c003-2bc4-4ddf-d613-742b1ea3d600/sharpen=0);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover
            }
        }
    </style>
    <style>
        .h-card-grid-wrapper[data-v-237a4ebf] {
            justify-content: center;
            width: 100%;
            height: 100%;
            display: flex
        }
    </style>
    <style>
        .h-partner-quote[data-v-ec8f2a15] {
            text-align: center;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative
        }

        @media (width>=1025px) {
            .h-partner-quote[data-v-ec8f2a15] {
                max-height: 96px
            }
        }

        .h-partner-quote__branch[data-v-ec8f2a15] {
            width: auto;
            height: 100%;
            position: relative
        }

        .h-partner-quote__branch--left[data-v-ec8f2a15] {
            left: 0
        }

        .h-partner-quote__branch--right[data-v-ec8f2a15] {
            right: 0
        }

        .h-partner-quote__branch[data-v-ec8f2a15] img {
            height: 100%
        }

        .h-partner-quote__wrapper[data-v-ec8f2a15] {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 80%;
            display: flex
        }

        .h-partner-quote__title[data-v-ec8f2a15]:after,
        .h-partner-quote__title[data-v-ec8f2a15]:before {
            content: "\""
        }

        .h-partner-quote__image[data-v-ec8f2a15] {
            justify-content: center;
            width: 70%;
            max-width: 100%;
            height: auto;
            max-height: 40px;
            display: flex
        }
    </style>
    <style>
        .hw-footer[data-v-814ce015] {
            color: var(--h-fg-neutral-default);
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            display: flex
        }

        .hw-footer__wrapper[data-v-814ce015] {
            width: 100%;
            padding-top: 16px
        }

        .hw-footer__wrapper--nh .h-t-body-2--mb[data-v-814ce015] {
            margin-bottom: 24px
        }

        @media (width>=600px) {
            .hw-footer__wrapper[data-v-814ce015] {
                padding-top: 48px
            }
        }

        @media (width>=1025px) {
            .hw-footer__wrapper[data-v-814ce015] {
                padding-top: 56px
            }
        }

        .hw-footer__breadcrumbs[data-v-814ce015] {
            min-width: 0;
            margin-bottom: 24px;
            padding-bottom: 24px
        }

        .hw-footer__content[data-v-814ce015],
        .hw-footer__copyright[data-v-814ce015] {
            flex-direction: column;
            display: flex
        }

        .hw-footer__copyright[data-v-814ce015] {
            justify-content: space-between;
            gap: 8px;
            padding: 24px 0 16px
        }

        @media (width>=768px) {
            .hw-footer__copyright[data-v-814ce015] {
                padding: 24px 0
            }
        }

        @media (width>=1025px) {
            .hw-footer__copyright[data-v-814ce015] {
                flex-direction: row;
                gap: 128px
            }
        }

        @media (width>=1000px) {
            .hw-footer__copyright--text[data-v-814ce015] {
                margin-bottom: 0
            }
        }

        .hw-footer__copyright--text[data-v-814ce015]:last-child {
            margin-bottom: 0
        }

        .hw-footer__copyright--horizons-multisite[data-v-814ce015] {
            border-top: none;
            padding-top: 24px
        }

        @media (width>=1025px) {
            .hw-footer__copyright--horizons-multisite[data-v-814ce015] {
                padding-top: 0
            }
        }

        .hw-footer__logo-section[data-v-814ce015] {
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
            margin-top: 24px;
            display: flex
        }

        @media (width>=768px) {
            .hw-footer__logo-section[data-v-814ce015] {
                margin-top: 8px
            }

            .hw-footer__logo-section[data-v-814ce015] .h-logo {
                order: -1
            }
        }

        @media (width>=1025px) {
            .hw-footer__logo-section[data-v-814ce015] {
                margin: 0 0 24px
            }
        }

        .hw-footer__sections[data-v-814ce015] {
            display: grid
        }

        @media (width>=768px) and (width<=1024px) {
            .hw-footer__sections[data-v-814ce015] {
                -moz-column-gap: 44px;
                column-gap: 44px
            }
        }

        @media (width>=1025px) {
            .hw-footer__sections[data-v-814ce015] {
                justify-content: space-between;
                gap: 8px;
                margin-bottom: 16px;
                display: flex
            }
        }

        .hw-footer__jp-dlocal[data-v-814ce015] {
            text-align: right;
            color: var(--h-fg-neutral-default);
            padding-top: 8px;
            text-decoration: underline;
            display: block
        }
    </style>
    <style>
        .h-footer-breadcrumbs[data-v-d9ba0eb0] {
            white-space: nowrap;
            align-items: center;
            gap: 4px;
            display: flex;
            overflow: auto
        }

        .h-footer-breadcrumbs[data-v-d9ba0eb0]::-webkit-scrollbar {
            display: none !important
        }

        .h-footer-breadcrumbs a[data-v-d9ba0eb0],
        .h-footer-breadcrumbs b[data-v-d9ba0eb0] {
            color: var(--h-fg-neutral-default)
        }

        .h-footer-breadcrumbs a[data-v-d9ba0eb0] {
            font-weight: 400
        }

        .h-footer-breadcrumbs a[data-v-d9ba0eb0]:hover {
            text-decoration: underline
        }
    </style>
    <style>
        .h-footer-section[data-v-a2abc336] {
            flex-flow: column wrap;
            display: flex
        }

        @media (width>=768px) {
            .h-footer-section[data-v-a2abc336] {
                margin-bottom: 24px
            }
        }

        .h-footer-section__item[data-v-a2abc336] {
            cursor: pointer;
            color: var(--h-fg-neutral-default);
            margin-bottom: 8px;
            padding-inline-end: 8px;
            font-weight: 400;
            transition: all .3s ease-in-out;
            display: block
        }

        .h-footer-section__item[data-v-a2abc336]:hover {
            color: var(--h-fg-brand-hover)
        }

        .h-footer-section__title[data-v-a2abc336] {
            text-transform: uppercase;
            color: var(--h-fg-neutral-default);
            display: block
        }

        @media (width>=768px) {
            .h-footer-section__title[data-v-a2abc336] {
                margin-bottom: 8px
            }
        }

        .h-footer-section[data-v-a2abc336]:has(.h-legal-links) {
            margin: 0
        }

        @media (width<=767px) {
            .h-footer-section[data-v-a2abc336]: has(.h-legal-links) {
                flex: 1 0 100%;
                margin-bottom: 8px
            }
        }

        @media (width>=1025px) {
            .h-footer-section[data-v-a2abc336]: has(.h-legal-links) {
                order: 4
            }
        }

        .h-footer-section .h-legal-links[data-v-a2abc336] {
            flex-wrap: wrap;
            gap: 8px;
            display: flex
        }

        @media (width<=767px) {
            .h-footer-section .h-legal-links[data-v-a2abc336] {
                justify-content: space-between;
                max-width: 328px
            }
        }

        @media (width>=768px) {
            .h-footer-section .h-legal-links[data-v-a2abc336] {
                gap: 16px;
                max-width: none
            }
        }

        .h-footer-section .h-legal-links .h-footer-section__item[data-v-a2abc336] {
            margin-bottom: 0;
            padding-inline-end: 0
        }
    </style>
    <style>
        .h-social-icons[data-v-d20178ee] {
            flex-wrap: wrap;
            flex: 100%;
            gap: 32px 42px;
            padding: 16px 0;
            display: flex
        }

        @media (width<=767px) {
            .h-social-icons[data-v-d20178ee] {
                margin-bottom: 8px
            }
        }

        @media (width>=768px) {
            .h-social-icons[data-v-d20178ee] {
                flex-basis: 55%;
                justify-content: flex-end;
                gap: 12px;
                margin-top: 0;
                padding: 0
            }
        }

        @media (width>=1025px) {
            .h-social-icons[data-v-d20178ee] {
                justify-content: flex-end
            }
        }

        .h-social-icons--icon[data-v-d20178ee] {
            border-radius: 6px;
            align-items: center;
            transition: all .3s ease-in-out;
            display: flex;
            overflow: hidden
        }

        .h-social-icons--icon>svg[data-v-d20178ee] {
            width: 28px;
            height: 28px
        }

        @media (width>=1025px) {
            .h-social-icons--icon[data-v-d20178ee]: hover {
                opacity: .7
            }
        }
    </style>
    <style>
        .h-payment-methods[data-v-9aeb7889] {
            flex-wrap: wrap;
            gap: 8px;
            max-width: 300px;
            margin-bottom: 24px;
            display: flex
        }

        @media (width>=1025px) {
            .h-payment-methods--minimal-footer[data-v-9aeb7889] {
                flex: 1 0 50%
            }
        }

        @media (width>=768px) {
            .h-payment-methods[data-v-9aeb7889] {
                max-width: none;
                margin-bottom: 40px
            }
        }

        @media (width>=1025px) {
            .h-payment-methods[data-v-9aeb7889] {
                margin-bottom: 0
            }
        }

        .h-payment-methods__icon[data-v-9aeb7889] {
            height: 40px;
            width: 60px !important
        }

        .h-payment-methods__icon[data-v-9aeb7889] img {
            border: 1px solid var(--h-color-neutral-200);
            border-radius: 6px;
            width: 60px;
            height: 40px
        }

        .h-payment-methods__more-btn[data-v-9aeb7889] {
            color: var(--h-color-primary-600);
            cursor: pointer;
            align-self: center;
            font-weight: 700;
            transition: all .3s ease-in-out
        }

        .h-payment-methods--bg-h-color-neutral-950 .h-payment-methods__more-btn[data-v-9aeb7889],
        .h-payment-methods--bg-h-color-primary-800 .h-payment-methods__more-btn[data-v-9aeb7889] {
            color: var(--h-color-neutral-0)
        }
    </style>
    <link rel="stylesheet" href="/assets/css/entry.BN-2S2kI.css">
    <link rel="stylesheet" href="/assets/css/hcomponents.xhyH4ygE.css">
    <link rel="stylesheet" href="/assets/css/components.CoFsxMIb.css">
    <link rel="stylesheet" href="/assets/css/components-navigation.BiQ2n9Rj.css">
    <link rel="stylesheet" href="/assets/css/google-fonts.css">
    <link href="https://www.googletagmanager.com/gtm.js?id=GTM-KL4FQVG" rel="preload" crossorigin="anonymous"
        referrerpolicy="no-referrer" fetchpriority="low" as="script">
    
    <script src="/in/gtag.v4.js" defer></script>
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer></script>
    <script src="https://cdn.amplitude.com/script/82eb9b6dc70a29221070ce868d61e7d4.experiment.js" defer></script>
    <script src="https://static.cloudflareinsights.com/beacon.min.js" defer
        data-cf-beacon="{&quot;token&quot;: &quot;16b338187db945179976004384e89bdf&quot;}"></script>
    <script type="module" src="/in/_nuxt/bPmaEvAp.js" crossorigin></script>
   
    <meta name="description"
        content="From scalable cloud infrastructure to next-gen AI automation, Saastify offers a comprehensive ecosystem to help founders, developers, and businesses build and scale faster.">
    <meta property="og:title" content="About Saastify">
    <meta property="og:description"
        content="From scalable cloud infrastructure to next-gen AI automation, Saastify offers a comprehensive ecosystem to help founders, developers, and businesses build and scale faster.">
    <meta property="twitter:title" content="About Saastify">
    <meta property="twitter:description"
        content="From scalable cloud infrastructure to next-gen AI automation, Saastify offers a comprehensive ecosystem to help founders, developers, and businesses build and scale faster.">
    <meta name="page-name" content="about">
</head>

<body class="lang-en-IN ltr">
    <div id="__nuxt">
        <div data-page-hydrated="false">
            <div id="layout" class="layout layout--default theme-base theme-hWebsites mode-light" data-qa="about-page"
                data-v-e390f074>
                <!---->
                @include('components.header')
                <main data-v-e390f074>
                    <!--[-->
                    <div class="about-page" data-v-32a5d82c>
                        <header
                            class="header header--bg-h-color-primary-50 header--h-color-primary-50 theme-base theme-hWebsites mode-light"
                            dir="ltr" style="background:var(--h-color-primary-50);" data-v-32a5d82c data-v-c3732e88>
                            <div class="h-header-two-cols h-header-two-cols--bg-h-color-primary-50" dir="ltr"
                                data-v-c3732e88 data-v-b6da53ff>
                                <div class="h-grid h-grid--cols-m-1 h-grid--cols-t-1" data-v-b6da53ff>
                                    <div class="h-header-two-cols__wrapper" data-v-b6da53ff>
                                        <div class="h-header-two-cols__left-col" data-v-b6da53ff>
                                            <!--[-->
                                            <div class="header__info-wrapper" data-v-c3732e88>
                                                <!--[-->
                                                <div class="header__info-wrapper-content" data-v-c3732e88>
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!--]-->
                                                <!---->
                                                <!--[-->
                                                <!--]-->
                                                <div class="header__heading-wrapper" data-v-c3732e88>
                                                    <h1 class="header__heading--large header__heading" data-v-c3732e88>
                                                        Three. Two. Online</h1>
                                                </div>
                                                <!---->
                                                <!---->
                                                <!--[-->
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!--]-->
                                                <!---->
                                                <!---->
                                                <!--[-->
                                                <!---->
                                                <!--]-->
                                            </div>
                                            <!--]-->
                                        </div>
                                        <div class="h-header-two-cols__right-col" data-v-b6da53ff>
                                            <!--[-->
                                            <div class="header__image-wrapper" data-v-c3732e88>
                                                <!--[-->
                                                <!--]-->
                                                <!--[-->
                                                <div class="h-image hero-landscape-media" data-v-c3732e88
                                                    data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/public"
                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=340,sharpen=1 340w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=360,sharpen=1 360w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=380,sharpen=1 380w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=400,sharpen=1 400w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=640,sharpen=1 640w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=680,sharpen=1 680w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=720,sharpen=1 720w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=800,sharpen=1 800w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=840,sharpen=1 840w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=1016,sharpen=1 1016w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/038c5d57-4775-4ffb-71d6-d5f1e2707000/w=1520,sharpen=1 1520w"
                                                        sizes="(max-width: 352px) 320px, (max-width: 372px) 340px, (max-width: 392px) 360px, (max-width: 412px) 380px, (max-width: 432px) 400px, (max-width: 452px) 420px, (max-width: 767px) 508px, 760px"
                                                        alt="Three. Two. Online." loading="eager" fetchpriority="high"
                                                        data-v-8554daca>
                                                </div>
                                                <!--]-->
                                                <!---->
                                            </div>
                                            <!--]-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!---->
                            <!--[-->
                            <!--]-->
                        </header>
                        <section
                            class="h-multi-texts-section h-multi-texts-section--bg-h-color-primary-600 theme-base theme-hWebsites mode-dark u-spacing-2"
                            data-view-id="hgr-about-multi_text_section" dir="ltr"
                            style="background:var(--h-color-primary-600);" data-v-32a5d82c data-v-758403d6>
                            <div class="hw-headline h-mb-48" dir="ltr" data-v-758403d6 data-v-ec35f884>
                                <div class="hw-headline__top" data-v-ec35f884>
                                    <!---->
                                    <!--[-->
                                    <h2 class="h-t-title-1 hw-headline__title" data-v-ec35f884>About us</h2>
                                    <!--]-->
                                    <!---->
                                    <!---->
                                </div>
                                <!---->
                            </div>
                            <div class="h-multi-texts-section__wrapper" data-v-758403d6>
                                <!--[-->
                                <section
                                    class="h-image-section-two-cols h-image-section-two-cols--bg-h-color-primary-600 theme-base theme-hWebsites mode-dark"
                                    style="background:var(--h-color-primary-600);" data-v-758403d6 data-v-b627a800>
                                    <!---->
                                    <div class="h-section-two-cols h-section-two-cols--bg-h-color-primary-600 theme-base theme-hWebsites mode-dark"
                                        dir="ltr" style="background:var(--h-color-primary-600);" data-v-b627a800
                                        data-v-8ef454ef>
                                        <div class="h-grid h-grid--cols-m-1 h-grid--cols-t-1" data-v-8ef454ef>
                                            <!---->
                                            <div class="h-section-two-cols__wrapper h-grid-item h-section-two-cols__wrapper--horizontal theme-base theme-hWebsites mode-dark"
                                                style="background:var(--h-color-primary-600);" data-v-8ef454ef>
                                                <div class="h-section-two-cols__left-col" data-v-8ef454ef>
                                                    <!--[-->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!--[-->
                                                    <!--]-->
                                                    <!---->
                                                    <!--[-->
                                                    <div class="h-image-section-two-cols__paragraph" data-v-b627a800>
                                                        <!---->
                                                        <div data-v-b627a800>
                                                            <div class="h-image-section-two-cols__paragraph-heading"
                                                                data-v-b627a800>
                                                                <h3 class="h-t-heading-2 h-mb-8" data-v-b627a800>Find
                                                                    your digital growth with Saastify</h3>
                                                                <!---->
                                                            </div>
                                                            <div class="h-image-section-two-cols__paragraph-description"
                                                                data-v-b627a800>Saastify is on a mission to make modern SaaS engineering, custom cloud software, and AI automation accessible to businesses and developers worldwide. With our high-performance infrastructure, ready-to-deploy AI agents, and developer-first APIs, you can launch, scale, and succeed faster.</div>
                                                        </div>
                                                    </div>
                                                    <!--]-->
                                                    <!---->
                                                    <!--[-->
                                                    <!--]-->
                                                    <!---->
                                                    <!--]-->
                                                </div>
                                                <div class="h-section-two-cols__right-col" data-v-8ef454ef>
                                                    <!--[-->
                                                    <div class="h-image h-image-section-two-cols__image" data-v-b627a800
                                                        data-v-6835ff82 data-v-8554daca>
                                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/46e8de7e-d3b8-4558-700b-20eb121b2f00/public"
                                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/46e8de7e-d3b8-4558-700b-20eb121b2f00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/46e8de7e-d3b8-4558-700b-20eb121b2f00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/46e8de7e-d3b8-4558-700b-20eb121b2f00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/46e8de7e-d3b8-4558-700b-20eb121b2f00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/46e8de7e-d3b8-4558-700b-20eb121b2f00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/46e8de7e-d3b8-4558-700b-20eb121b2f00/w=1280,sharpen=1 1280w"
                                                            alt="Find your online success with Hostinger" loading="lazy"
                                                            fetchpriority="low" data-v-8554daca>
                                                    </div>
                                                    <!--]-->
                                                </div>
                                            </div>
                                        </div>
                                        <!---->
                                    </div>
                                </section>
                                <section
                                    class="h-image-section-two-cols h-image-section-two-cols--bg-h-color-primary-600 theme-base theme-hWebsites mode-dark"
                                    style="background:var(--h-color-primary-600);" data-v-758403d6 data-v-b627a800>
                                    <!---->
                                    <div class="h-section-two-cols h-section-two-cols--bg-h-color-primary-600 theme-base theme-hWebsites mode-dark"
                                        dir="ltr" style="background:var(--h-color-primary-600);" data-v-b627a800
                                        data-v-8ef454ef>
                                        <div class="h-grid h-grid--cols-m-1 h-grid--cols-t-1" data-v-8ef454ef>
                                            <!---->
                                            <div class="h-section-two-cols__wrapper h-grid-item h-section-two-cols__wrapper--horizontal h-section-two-cols__wrapper--reverse theme-base theme-hWebsites mode-dark"
                                                style="background:var(--h-color-primary-600);" data-v-8ef454ef>
                                                <div class="h-section-two-cols__left-col" data-v-8ef454ef>
                                                    <!--[-->
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!--[-->
                                                    <!--]-->
                                                    <!---->
                                                    <!--[-->
                                                    <div class="h-image-section-two-cols__paragraph" data-v-b627a800>
                                                        <!---->
                                                        <div data-v-b627a800>
                                                            <div class="h-image-section-two-cols__paragraph-heading"
                                                                data-v-b627a800>
                                                                <h3 class="h-t-heading-2 h-mb-8" data-v-b627a800>
                                                                    Globally recognized growth platform</h3>
                                                                <!---->
                                                            </div>
                                                            <div class="h-image-section-two-cols__paragraph-description"
                                                                data-v-b627a800>Founded as an innovation-driven software lab, Saastify is now a comprehensive platform empowering developers, founders, and growing businesses worldwide. We serve thousands of active teams across 50+ countries with modern SaaS solutions and reliable cloud infrastructure.</div>
                                                        </div>
                                                    </div>
                                                    <div class="h-image-section-two-cols__paragraph" data-v-b627a800>
                                                        <!---->
                                                        <div data-v-b627a800>
                                                            <div class="h-image-section-two-cols__paragraph-heading"
                                                                data-v-b627a800>
                                                                <!---->
                                                                <!---->
                                                            </div>
                                                            <div class="h-image-section-two-cols__paragraph-description"
                                                                data-v-b627a800>Built with modern microservice standards and cloud-native architecture, we continuously improve our platform, unlock new capabilities, and power high-impact digital ventures.</div>
                                                        </div>
                                                    </div>
                                                    <div class="h-image-section-two-cols__paragraph" data-v-b627a800>
                                                        <!---->
                                                        <div data-v-b627a800>
                                                            <div class="h-image-section-two-cols__paragraph-heading"
                                                                data-v-b627a800>
                                                                <!---->
                                                                <!---->
                                                            </div>
                                                            <div class="h-image-section-two-cols__paragraph-description"
                                                                data-v-b627a800>
                                                                *Recognized for engineering reliability and enterprise software excellence.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--]-->
                                                    <!---->
                                                    <!--[-->
                                                    <!--]-->
                                                    <!---->
                                                    <!--]-->
                                                </div>
                                                <div class="h-section-two-cols__right-col" data-v-8ef454ef>
                                                    <!--[-->
                                                    <div class="h-image h-image-section-two-cols__image" data-v-b627a800
                                                        data-v-6835ff82 data-v-8554daca>
                                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cf749379-dc68-495f-d324-673c5efe7400/public"
                                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cf749379-dc68-495f-d324-673c5efe7400/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cf749379-dc68-495f-d324-673c5efe7400/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cf749379-dc68-495f-d324-673c5efe7400/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cf749379-dc68-495f-d324-673c5efe7400/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cf749379-dc68-495f-d324-673c5efe7400/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cf749379-dc68-495f-d324-673c5efe7400/w=1280,sharpen=1 1280w"
                                                            alt="Globally recognized web host" loading="lazy"
                                                            fetchpriority="low" data-v-8554daca>
                                                    </div>
                                                    <!--]-->
                                                </div>
                                            </div>
                                        </div>
                                        <!---->
                                    </div>
                                </section>
                                <!--]-->
                            </div>
                        </section>
                        <section class="u-spacing-1" data-v-32a5d82c>
                            <h2 class="about-page__history-title" data-v-32a5d82c>Our history</h2>
                            <div class="h-carousel theme-base theme-hWebsites mode-light about-page__history-carousel"
                                data-v-32a5d82c data-v-ca87c1fa>
                                <div class="h-carousel__wrapper" data-v-ca87c1fa>
                                    <div class="h-carousel__track" data-v-ca87c1fa>
                                        <div class="h-carousel__track-controls--force-show h-carousel__track-controls--centered h-carousel__track-controls h-mb-24 h-mb-32-d h-grid"
                                            data-v-ca87c1fa>
                                            <!--[-->
                                            <!--]-->
                                            <!--[-->
                                            <!--]-->
                                            <!---->
                                        </div>
                                        <div class="h-carousel__inner-container"
                                            style="--max-total-cards-width:calc(360px * 11 + 16px * 10 + 40px * 2);--max-card-width:360px;"
                                            data-v-ca87c1fa>
                                            <div class="h-carousel__container" data-v-ca87c1fa>
                                                <div class="h-carousel__overflow-container" data-v-ca87c1fa>
                                                    <!--[-->
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b8637004-b2e7-47ef-0cc3-1d55ab263300/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b8637004-b2e7-47ef-0cc3-1d55ab263300/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b8637004-b2e7-47ef-0cc3-1d55ab263300/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b8637004-b2e7-47ef-0cc3-1d55ab263300/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b8637004-b2e7-47ef-0cc3-1d55ab263300/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b8637004-b2e7-47ef-0cc3-1d55ab263300/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b8637004-b2e7-47ef-0cc3-1d55ab263300/w=1280,sharpen=1 1280w"
                                                                        alt="2004" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2004</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Saastify was founded with a mission to simplify custom SaaS development, cloud architectures, and rapid deployment for modern startups.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6cc45d0-0369-421e-3322-1c7fd7bb7e00/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6cc45d0-0369-421e-3322-1c7fd7bb7e00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6cc45d0-0369-421e-3322-1c7fd7bb7e00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6cc45d0-0369-421e-3322-1c7fd7bb7e00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6cc45d0-0369-421e-3322-1c7fd7bb7e00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6cc45d0-0369-421e-3322-1c7fd7bb7e00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6cc45d0-0369-421e-3322-1c7fd7bb7e00/w=1280,sharpen=1 1280w"
                                                                        alt="2007" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2007</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Launched our custom software development studio and microservices infrastructure, helping founders build scalable applications.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/53ec63c4-ab66-4a0b-068b-04a6be811600/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/53ec63c4-ab66-4a0b-068b-04a6be811600/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/53ec63c4-ab66-4a0b-068b-04a6be811600/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/53ec63c4-ab66-4a0b-068b-04a6be811600/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/53ec63c4-ab66-4a0b-068b-04a6be811600/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/53ec63c4-ab66-4a0b-068b-04a6be811600/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/53ec63c4-ab66-4a0b-068b-04a6be811600/w=1280,sharpen=1 1280w"
                                                                        alt="2008" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2008</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Introduced Saastify Cloud Connectors, instant API integrations, and developer toolkits to accelerate time-to-market.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d03a0fe6-962d-4b9b-4d2b-da466ba28200/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d03a0fe6-962d-4b9b-4d2b-da466ba28200/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d03a0fe6-962d-4b9b-4d2b-da466ba28200/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d03a0fe6-962d-4b9b-4d2b-da466ba28200/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d03a0fe6-962d-4b9b-4d2b-da466ba28200/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d03a0fe6-962d-4b9b-4d2b-da466ba28200/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d03a0fe6-962d-4b9b-4d2b-da466ba28200/w=1280,sharpen=1 1280w"
                                                                        alt="2011" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2011</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Released the Saastify Unified Dashboard for seamless cloud monitoring and API analytics.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b37d830f-a415-45dc-1bbd-b6653f430f00/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b37d830f-a415-45dc-1bbd-b6653f430f00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b37d830f-a415-45dc-1bbd-b6653f430f00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b37d830f-a415-45dc-1bbd-b6653f430f00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b37d830f-a415-45dc-1bbd-b6653f430f00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b37d830f-a415-45dc-1bbd-b6653f430f00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b37d830f-a415-45dc-1bbd-b6653f430f00/w=1280,sharpen=1 1280w"
                                                                        alt="2016" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2016</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Expanded full-stack hosting infrastructure with automated container orchestration and edge deployment.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/ee4a6061-75a3-4fb4-0bee-58c57f1fe200/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/ee4a6061-75a3-4fb4-0bee-58c57f1fe200/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/ee4a6061-75a3-4fb4-0bee-58c57f1fe200/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/ee4a6061-75a3-4fb4-0bee-58c57f1fe200/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/ee4a6061-75a3-4fb4-0bee-58c57f1fe200/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/ee4a6061-75a3-4fb4-0bee-58c57f1fe200/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/ee4a6061-75a3-4fb4-0bee-58c57f1fe200/w=1280,sharpen=1 1280w"
                                                                        alt="2019" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2019</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Grew into a global engineering team delivering high-uptime cloud applications across 30+ countries.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97e7f2d9-d389-4562-7953-b339b8108700/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97e7f2d9-d389-4562-7953-b339b8108700/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97e7f2d9-d389-4562-7953-b339b8108700/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97e7f2d9-d389-4562-7953-b339b8108700/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97e7f2d9-d389-4562-7953-b339b8108700/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97e7f2d9-d389-4562-7953-b339b8108700/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97e7f2d9-d389-4562-7953-b339b8108700/w=1280,sharpen=1 1280w"
                                                                        alt="2020" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2020</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Recognized for top-tier developer toolkits and lightning-fast API responses across distributed microservices.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b71e6dbf-1a26-4931-14e8-ef44f7769000/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b71e6dbf-1a26-4931-14e8-ef44f7769000/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b71e6dbf-1a26-4931-14e8-ef44f7769000/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b71e6dbf-1a26-4931-14e8-ef44f7769000/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b71e6dbf-1a26-4931-14e8-ef44f7769000/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b71e6dbf-1a26-4931-14e8-ef44f7769000/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/b71e6dbf-1a26-4931-14e8-ef44f7769000/w=1280,sharpen=1 1280w"
                                                                        alt="2021" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2021</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Expanded client network to 5,000+ businesses and software startups worldwide.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/baae5f0f-eca3-4530-4da4-42edc3765e00/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/baae5f0f-eca3-4530-4da4-42edc3765e00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/baae5f0f-eca3-4530-4da4-42edc3765e00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/baae5f0f-eca3-4530-4da4-42edc3765e00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/baae5f0f-eca3-4530-4da4-42edc3765e00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/baae5f0f-eca3-4530-4da4-42edc3765e00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/baae5f0f-eca3-4530-4da4-42edc3765e00/w=1280,sharpen=1 1280w"
                                                                        alt="2023" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2023</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Launched Saastify Agent Squad & Autonomous AI Workers for automated operations.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7315b4e1-f038-4a33-4c35-81bac3adf700/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7315b4e1-f038-4a33-4c35-81bac3adf700/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7315b4e1-f038-4a33-4c35-81bac3adf700/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7315b4e1-f038-4a33-4c35-81bac3adf700/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7315b4e1-f038-4a33-4c35-81bac3adf700/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7315b4e1-f038-4a33-4c35-81bac3adf700/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7315b4e1-f038-4a33-4c35-81bac3adf700/w=1280,sharpen=1 1280w"
                                                                        alt="2024" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2024</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Surpassed 10,000+ active deployed microservices and enterprise applications.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <div class="h-carousel__card" data-v-ca87c1fa>
                                                        <!--[-->
                                                        <div class="hw-card hw-card--central hw-card--top-gap-16 about-page__card"
                                                            style="" dir="ltr" data-v-32a5d82c data-v-2915377e>
                                                            <div class="hw-card__top" data-v-2915377e>
                                                                <!--[-->
                                                                <div class="h-image about-page__card-image"
                                                                    data-v-32a5d82c data-v-6835ff82 data-v-8554daca>
                                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7ebace6a-2bb3-425c-ded7-c2a0e9cac400/public"
                                                                        srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7ebace6a-2bb3-425c-ded7-c2a0e9cac400/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7ebace6a-2bb3-425c-ded7-c2a0e9cac400/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7ebace6a-2bb3-425c-ded7-c2a0e9cac400/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7ebace6a-2bb3-425c-ded7-c2a0e9cac400/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7ebace6a-2bb3-425c-ded7-c2a0e9cac400/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/7ebace6a-2bb3-425c-ded7-c2a0e9cac400/w=1280,sharpen=1 1280w"
                                                                        alt="2025" loading="lazy" fetchpriority="low"
                                                                        data-v-8554daca>
                                                                </div>
                                                                <!--]-->
                                                            </div>
                                                            <div class="hw-card__inner" data-v-2915377e>
                                                                <div class="hw-card__content" data-v-2915377e>
                                                                    <h3 class="hw-card__title h-t-heading-1-regular"
                                                                        data-v-2915377e>2025</h3>
                                                                    <div class="hw-card__description h-t-body-1"
                                                                        data-v-2915377e>Saastify scales to power mission-critical software solutions globally.</div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                        <!--]-->
                                                    </div>
                                                    <!--]-->
                                                </div>
                                            </div>
                                        </div>
                                        <div class="h-carousel__dots h-mt-24" data-v-ca87c1fa>
                                            <!--[-->
                                            <div class="h-carousel__dot--active h-carousel__dot"
                                                data-click-id="hgr-about-carousel-card-0-click" data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot" data-click-id="hgr-about-carousel-card-1-click"
                                                data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot" data-click-id="hgr-about-carousel-card-2-click"
                                                data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot" data-click-id="hgr-about-carousel-card-3-click"
                                                data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot" data-click-id="hgr-about-carousel-card-4-click"
                                                data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot" data-click-id="hgr-about-carousel-card-5-click"
                                                data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot" data-click-id="hgr-about-carousel-card-6-click"
                                                data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot" data-click-id="hgr-about-carousel-card-7-click"
                                                data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot" data-click-id="hgr-about-carousel-card-8-click"
                                                data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot" data-click-id="hgr-about-carousel-card-9-click"
                                                data-v-ca87c1fa></div>
                                            <div class="h-carousel__dot"
                                                data-click-id="hgr-about-carousel-card-10-click" data-v-ca87c1fa></div>
                                            <!--]-->
                                        </div>
                                        <!---->
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="h-reviews-section theme-base theme-hWebsites mode-light u-spacing-1"
                            data-view-id="hgr-about-reviews-section-section" data-v-32a5d82c data-v-2cd2a447>
                            <div class="hw-headline h-grid h-mb-32 h-mb-40-t h-mb-48-d" dir="ltr" data-v-2cd2a447
                                data-v-ec35f884>
                                <div class="hw-headline__top" data-v-ec35f884>
                                    <!---->
                                    <!--[-->
                                    <h2 class="h-t-title-1 hw-headline__title" data-v-ec35f884>Trusted by innovative founders & teams</h2>
                                    <!--]-->
                                    <div class="hw-headline__description h-t-body-1" style="" data-v-ec35f884>Don’t just take our word for it – hear what high-growth businesses and engineers say about Saastify.</div>
                                    <!---->
                                </div>
                                <!---->
                            </div>
                            <!---->
                            <div class="h-reviews-section__grid h-grid h-grid--cols-d-3 h-grid--cols-t-1 h-grid--cols-m-1"
                                data-v-2cd2a447>
                                <!--[-->
                                <div class="theme-base theme-hWebsites mode-light h-review-card"
                                    style="background:var(--h-color-neutral-50);" dir="ltr" data-v-2cd2a447
                                    data-v-1ed3f463>
                                    <div class="h-review-card__person" data-v-1ed3f463>
                                        <!---->
                                        <div class="h-review-card__person-right" data-v-1ed3f463>
                                            <div class="h-review-card__person-right-name" data-v-1ed3f463>
                                                <!---->
                                                <div class="h-t-body-1-bold" data-v-1ed3f463>Podaz Store</div>
                                            </div>
                                            <div class="h-t-body-2" data-v-1ed3f463>Online shop</div>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="h-review-card__review" data-v-1ed3f463>
                                        <!---->
                                        <p class="h-t-body-1 h-review-card__body" data-v-1ed3f463>I was in contact with Saastify's engineering team. The technical speed and precision were unmatched – their engineers diagnosed our bottlenecks and deployed our custom automation within 48 hours.</p>
                                    </div>
                                </div>
                                <div class="theme-base theme-hWebsites mode-light h-review-card"
                                    style="background:var(--h-color-neutral-50);" dir="ltr" data-v-2cd2a447
                                    data-v-1ed3f463>
                                    <div class="h-review-card__person" data-v-1ed3f463>
                                        <!---->
                                        <div class="h-review-card__person-right" data-v-1ed3f463>
                                            <div class="h-review-card__person-right-name" data-v-1ed3f463>
                                                <!---->
                                                <div class="h-t-body-1-bold" data-v-1ed3f463>Andrew</div>
                                            </div>
                                            <div class="h-t-body-2" data-v-1ed3f463>Web developer</div>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="h-review-card__review" data-v-1ed3f463>
                                        <!---->
                                        <p class="h-t-body-1 h-review-card__body" data-v-1ed3f463>Saastify gave our engineering team full flexibility over our cloud infrastructure and APIs without DevOps friction. That's why Saastify is our go-to SaaS platform.</p>
                                    </div>
                                </div>
                                <div class="theme-base theme-hWebsites mode-light h-review-card"
                                    style="background:var(--h-color-neutral-50);" dir="ltr" data-v-2cd2a447
                                    data-v-1ed3f463>
                                    <div class="h-review-card__person" data-v-1ed3f463>
                                        <!---->
                                        <div class="h-review-card__person-right" data-v-1ed3f463>
                                            <div class="h-review-card__person-right-name" data-v-1ed3f463>
                                                <!---->
                                                <div class="h-t-body-1-bold" data-v-1ed3f463>Jeremiah Kobina</div>
                                            </div>
                                            <div class="h-t-body-2" data-v-1ed3f463>Software engineer</div>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="h-review-card__review" data-v-1ed3f463>
                                        <!---->
                                        <p class="h-t-body-1 h-review-card__body" data-v-1ed3f463>We manage over 40 production systems powered by Saastify. The performance, uptime, and 24/7 dedicated engineering support make it the best software partner for our ventures.</p>
                                    </div>
                                </div>
                                <!--]-->
                            </div>
                            <!---->
                        </section>
                        <!--[-->
                        <section class="h-image-section-two-cols theme-base theme-hWebsites mode-light u-spacing-1"
                            data-v-32a5d82c data-v-b627a800>
                            <!---->
                            <div class="h-section-two-cols theme-base theme-hWebsites mode-light" dir="ltr"
                                data-v-b627a800 data-v-8ef454ef>
                                <div class="h-grid h-grid--cols-m-1 h-grid--cols-t-1" data-v-8ef454ef>
                                    <!---->
                                    <div class="h-section-two-cols__wrapper h-grid-item h-section-two-cols__wrapper--horizontal h-section-two-cols__wrapper--reverse theme-base theme-hWebsites mode-light"
                                        data-v-8ef454ef>
                                        <div class="h-section-two-cols__left-col" data-v-8ef454ef>
                                            <!--[-->
                                            <!---->
                                            <span class="h-image-section-two-cols__overline h-t-body-1 t-uppercase"
                                                data-v-b627a800>Technology</span>
                                            <!---->
                                            <!--[-->
                                            <!--]-->
                                            <!--[-->
                                            <h2 class="h-t-title-2 h-image-section-two-cols__heading" data-v-b627a800>
                                                Innovation on the go</h2>
                                            <!--]-->
                                            <div class="h-image-section-two-cols__description" data-v-b627a800>As a forward-thinking software and cloud platform, we continuously engineer for speed, security, and scalability. Our tech stack leverages high-throughput microservices, edge-accelerated caching, enterprise anti-DDoS protection, and custom orchestration tools.</div>
                                            <!---->
                                            <!--[-->
                                            <!--]-->
                                            <div class="h-image-section-two-cols__link-wrapper" data-v-b627a800>
                                                <!--[-->
                                                <a href="/developers" class="h-hyperlink h-hyperlink--bold"
                                                    style="color:var(--h-hyperlink-color);"
                                                    data-click-id="hgr-about-experience_section-technology_button"
                                                    data-v-4fad864a data-v-b627a800>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <!---->
                                                    <span class="h-typography h-t-body-2-bold hyperlink-text"
                                                        style="color:currentColor;" data-v-254de8eb data-v-4fad864a>
                                                        <!--[-->
                                                        <!--[-->
                                                        Learn more about our tech
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </a>
                                                <!--]-->
                                            </div>
                                            <!--]-->
                                        </div>
                                        <div class="h-section-two-cols__right-col" data-v-8ef454ef>
                                            <!--[-->
                                            <div class="h-image h-image-section-two-cols__image" data-v-b627a800
                                                data-v-6835ff82 data-v-8554daca>
                                                <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/365bb16e-26cd-4c58-e99e-7a681c00a600/public"
                                                    srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/365bb16e-26cd-4c58-e99e-7a681c00a600/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/365bb16e-26cd-4c58-e99e-7a681c00a600/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/365bb16e-26cd-4c58-e99e-7a681c00a600/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/365bb16e-26cd-4c58-e99e-7a681c00a600/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/365bb16e-26cd-4c58-e99e-7a681c00a600/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/365bb16e-26cd-4c58-e99e-7a681c00a600/w=1280,sharpen=1 1280w"
                                                    alt="Innovation on the go" loading="lazy" fetchpriority="low"
                                                    data-v-8554daca>
                                            </div>
                                            <!--]-->
                                        </div>
                                    </div>
                                </div>
                                <!---->
                            </div>
                        </section>
                        <section class="h-image-section-two-cols theme-base theme-hWebsites mode-light u-spacing-1"
                            data-v-32a5d82c data-v-b627a800>
                            <!---->
                            <div class="h-section-two-cols theme-base theme-hWebsites mode-light" dir="ltr"
                                data-v-b627a800 data-v-8ef454ef>
                                <div class="h-grid h-grid--cols-m-1 h-grid--cols-t-1" data-v-8ef454ef>
                                    <!---->
                                    <div class="h-section-two-cols__wrapper h-grid-item h-section-two-cols__wrapper--horizontal theme-base theme-hWebsites mode-light"
                                        data-v-8ef454ef>
                                        <div class="h-section-two-cols__left-col" data-v-8ef454ef>
                                            <!--[-->
                                            <!---->
                                            <span class="h-image-section-two-cols__overline h-t-body-1 t-uppercase"
                                                data-v-b627a800>People</span>
                                            <!---->
                                            <!--[-->
                                            <!--]-->
                                            <!--[-->
                                            <h2 class="h-t-title-2 h-image-section-two-cols__heading" data-v-b627a800>A
                                                committed team of heroes</h2>
                                            <!--]-->
                                            <div class="h-image-section-two-cols__description" data-v-b627a800>Saastify is built by a distributed team of world-class engineers, product designers, and AI specialists across 20+ countries. We are obsessed with solving difficult software challenges and empowering our partners to scale effortlessly. Join Saastify and build the future with us!</div>
                                            <!---->
                                            <!--[-->
                                            <!--]-->
                                            <div class="h-image-section-two-cols__link-wrapper" data-v-b627a800>
                                                <!--[-->
                                                <a href="/developers" rel="noopener noreferrer"
                                                    class="h-hyperlink h-hyperlink--bold"
                                                    style="color:var(--h-hyperlink-color);"
                                                    data-click-id="hgr-about-experience_section-people_button"
                                                    data-v-4fad864a data-v-b627a800>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <!---->
                                                    <span class="h-typography h-t-body-2-bold hyperlink-text"
                                                        style="color:currentColor;" data-v-254de8eb data-v-4fad864a>
                                                        <!--[-->
                                                        <!--[-->
                                                        See career opportunities
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </a>
                                                <!--]-->
                                            </div>
                                            <!--]-->
                                        </div>
                                        <div class="h-section-two-cols__right-col" data-v-8ef454ef>
                                            <!--[-->
                                            <div class="h-image h-image-section-two-cols__image" data-v-b627a800
                                                data-v-6835ff82 data-v-8554daca>
                                                <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9e414f76-cb73-449c-125c-a8b178972d00/public"
                                                    srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9e414f76-cb73-449c-125c-a8b178972d00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9e414f76-cb73-449c-125c-a8b178972d00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9e414f76-cb73-449c-125c-a8b178972d00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9e414f76-cb73-449c-125c-a8b178972d00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9e414f76-cb73-449c-125c-a8b178972d00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9e414f76-cb73-449c-125c-a8b178972d00/w=1280,sharpen=1 1280w"
                                                    alt="A committed team of heroes" loading="lazy" fetchpriority="low"
                                                    data-v-8554daca>
                                            </div>
                                            <!--]-->
                                        </div>
                                    </div>
                                </div>
                                <!---->
                            </div>
                        </section>
                        <section class="h-image-section-two-cols theme-base theme-hWebsites mode-light u-spacing-1"
                            data-v-32a5d82c data-v-b627a800>
                            <!---->
                            <div class="h-section-two-cols theme-base theme-hWebsites mode-light" dir="ltr"
                                data-v-b627a800 data-v-8ef454ef>
                                <div class="h-grid h-grid--cols-m-1 h-grid--cols-t-1" data-v-8ef454ef>
                                    <!---->
                                    <div class="h-section-two-cols__wrapper h-grid-item h-section-two-cols__wrapper--horizontal h-section-two-cols__wrapper--reverse theme-base theme-hWebsites mode-light"
                                        data-v-8ef454ef>
                                        <div class="h-section-two-cols__left-col" data-v-8ef454ef>
                                            <!--[-->
                                            <!---->
                                            <span class="h-image-section-two-cols__overline h-t-body-1 t-uppercase"
                                                data-v-b627a800>Customer obsession</span>
                                            <!---->
                                            <!--[-->
                                            <!--]-->
                                            <!--[-->
                                            <h2 class="h-t-title-2 h-image-section-two-cols__heading" data-v-b627a800>
                                                Before we speak, we listen</h2>
                                            <!--]-->
                                            <div class="h-image-section-two-cols__description" data-v-b627a800>You, The Customer, hold the highest rank at Saastify. Your feedback drives our product roadmap, architectural improvements, and new capabilities. We work hand-in-hand with founders and technical leaders to iterate on features, refine workflows, and ensure reliable execution.</div>
                                            <!---->
                                            <!--[-->
                                            <!--]-->
                                            <div class="h-image-section-two-cols__link-wrapper" data-v-b627a800>
                                                <!--[-->
                                                <a href="/#faq" class="h-hyperlink h-hyperlink--bold"
                                                    style="color:var(--h-hyperlink-color);"
                                                    data-click-id="hgr-about-experience_section-customer_button"
                                                    data-v-4fad864a data-v-b627a800>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <!---->
                                                    <span class="h-typography h-t-body-2-bold hyperlink-text"
                                                        style="color:currentColor;" data-v-254de8eb data-v-4fad864a>
                                                        <!--[-->
                                                        <!--[-->
                                                        Contact us
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </a>
                                                <!--]-->
                                            </div>
                                            <!--]-->
                                        </div>
                                        <div class="h-section-two-cols__right-col" data-v-8ef454ef>
                                            <!--[-->
                                            <div class="h-image h-image-section-two-cols__image" data-v-b627a800
                                                data-v-6835ff82 data-v-8554daca>
                                                <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/84c72e41-8c7e-45f2-9c43-34b12a003d00/public"
                                                    srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/84c72e41-8c7e-45f2-9c43-34b12a003d00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/84c72e41-8c7e-45f2-9c43-34b12a003d00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/84c72e41-8c7e-45f2-9c43-34b12a003d00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/84c72e41-8c7e-45f2-9c43-34b12a003d00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/84c72e41-8c7e-45f2-9c43-34b12a003d00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/84c72e41-8c7e-45f2-9c43-34b12a003d00/w=1280,sharpen=1 1280w"
                                                    alt="Before we speak, we listen" loading="lazy" fetchpriority="low"
                                                    data-v-8554daca>
                                            </div>
                                            <!--]-->
                                        </div>
                                    </div>
                                </div>
                                <!---->
                            </div>
                        </section>
                        <!--]-->
                        <section class="h-card-grid u-spacing-1" dir="ltr" data-v-32a5d82c data-v-63494c95>
                            <div class="h-section-one-col h-section-one-col--bg-h-color-neutral-0 h-card-grid-section--bg-h-color-neutral-0"
                                dir="ltr" data-v-63494c95 data-v-50907970>
                                <div class="h-section-one-col__content--max-width h-section-one-col__content h-grid h-grid--cols-m-1 h-grid--cols-t-1"
                                    style="max-width:;" data-v-50907970>
                                    <div class="h-grid-item" data-v-50907970>
                                        <!--[-->
                                        <!---->
                                        <!---->
                                        <div class="h-card-grid-section__container h-grid h-grid--cols-d-3 h-grid--cols-t-2 h-grid--cols-m-1"
                                            data-v-63494c95>
                                            <!--[-->
                                            <div class="h-card-grid-wrapper" data-v-63494c95 data-v-237a4ebf>
                                                <!--[-->
                                                <!--[-->
                                                <div class="h-partner-quote" dir="ltr" data-v-ec8f2a15>
                                                    <div class="h-image h-partner-quote__branch h-partner-quote__branch--left"
                                                        data-v-ec8f2a15 data-v-6835ff82 data-v-8554daca>
                                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/public"
                                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=1280,sharpen=1 1280w"
                                                            alt="Branch left" loading="lazy" fetchpriority="low"
                                                            data-v-8554daca>
                                                    </div>
                                                    <div class="h-partner-quote__wrapper" data-v-ec8f2a15>
                                                        <q class="h-partner-quote__title h-t-heading-3"
                                                            data-v-ec8f2a15>Saastify is a game-changer for modern SaaS deployment</q>
                                                        <div class="h-image h-partner-quote__image" data-v-ec8f2a15
                                                            data-v-6835ff82 data-v-8554daca>
                                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8b89bfa7-b936-4453-a0f4-b3e237e72700/public"
                                                                srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8b89bfa7-b936-4453-a0f4-b3e237e72700/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8b89bfa7-b936-4453-a0f4-b3e237e72700/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8b89bfa7-b936-4453-a0f4-b3e237e72700/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8b89bfa7-b936-4453-a0f4-b3e237e72700/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8b89bfa7-b936-4453-a0f4-b3e237e72700/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8b89bfa7-b936-4453-a0f4-b3e237e72700/w=1280,sharpen=1 1280w"
                                                                alt="Bitcatcha" loading="lazy" fetchpriority="low"
                                                                data-v-8554daca>
                                                        </div>
                                                    </div>
                                                    <div class="h-image h-partner-quote__branch h-partner-quote__branch--right"
                                                        data-v-ec8f2a15 data-v-6835ff82 data-v-8554daca>
                                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/public"
                                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=1280,sharpen=1 1280w"
                                                            alt="Branch right" loading="lazy" fetchpriority="low"
                                                            data-v-8554daca>
                                                    </div>
                                                </div>
                                                <!--]-->
                                                <!--]-->
                                            </div>
                                            <div class="h-card-grid-wrapper" data-v-63494c95 data-v-237a4ebf>
                                                <!--[-->
                                                <!--[-->
                                                <div class="h-partner-quote" dir="ltr" data-v-ec8f2a15>
                                                    <div class="h-image h-partner-quote__branch h-partner-quote__branch--left"
                                                        data-v-ec8f2a15 data-v-6835ff82 data-v-8554daca>
                                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/public"
                                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=1280,sharpen=1 1280w"
                                                            alt="Branch left" loading="lazy" fetchpriority="low"
                                                            data-v-8554daca>
                                                    </div>
                                                    <div class="h-partner-quote__wrapper" data-v-ec8f2a15>
                                                        <q class="h-partner-quote__title h-t-heading-3"
                                                            data-v-ec8f2a15>Best for high-velocity software engineering</q>
                                                        <div class="h-image h-partner-quote__image" data-v-ec8f2a15
                                                            data-v-6835ff82 data-v-8554daca>
                                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9361d135-c603-400e-7cbe-dcfb6516fd00/public"
                                                                srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9361d135-c603-400e-7cbe-dcfb6516fd00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9361d135-c603-400e-7cbe-dcfb6516fd00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9361d135-c603-400e-7cbe-dcfb6516fd00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9361d135-c603-400e-7cbe-dcfb6516fd00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9361d135-c603-400e-7cbe-dcfb6516fd00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/9361d135-c603-400e-7cbe-dcfb6516fd00/w=1280,sharpen=1 1280w"
                                                                alt="PCMag" loading="lazy" fetchpriority="low"
                                                                data-v-8554daca>
                                                        </div>
                                                    </div>
                                                    <div class="h-image h-partner-quote__branch h-partner-quote__branch--right"
                                                        data-v-ec8f2a15 data-v-6835ff82 data-v-8554daca>
                                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/public"
                                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=1280,sharpen=1 1280w"
                                                            alt="Branch right" loading="lazy" fetchpriority="low"
                                                            data-v-8554daca>
                                                    </div>
                                                </div>
                                                <!--]-->
                                                <!--]-->
                                            </div>
                                            <div class="h-card-grid-wrapper" data-v-63494c95 data-v-237a4ebf>
                                                <!--[-->
                                                <!--[-->
                                                <div class="h-partner-quote" dir="ltr" data-v-ec8f2a15>
                                                    <div class="h-image h-partner-quote__branch h-partner-quote__branch--left"
                                                        data-v-ec8f2a15 data-v-6835ff82 data-v-8554daca>
                                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/public"
                                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/cca27b9c-eb54-4ac4-3581-7f46c1ad4300/w=1280,sharpen=1 1280w"
                                                            alt="Branch left" loading="lazy" fetchpriority="low"
                                                            data-v-8554daca>
                                                    </div>
                                                    <div class="h-partner-quote__wrapper" data-v-ec8f2a15>
                                                        <q class="h-partner-quote__title h-t-heading-3"
                                                            data-v-ec8f2a15>Feels like a true enterprise-grade cloud platform</q>
                                                        <div class="h-image h-partner-quote__image" data-v-ec8f2a15
                                                            data-v-6835ff82 data-v-8554daca>
                                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d45ceea0-d5fb-4f4c-5f97-72404f1f3300/public"
                                                                srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d45ceea0-d5fb-4f4c-5f97-72404f1f3300/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d45ceea0-d5fb-4f4c-5f97-72404f1f3300/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d45ceea0-d5fb-4f4c-5f97-72404f1f3300/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d45ceea0-d5fb-4f4c-5f97-72404f1f3300/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d45ceea0-d5fb-4f4c-5f97-72404f1f3300/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d45ceea0-d5fb-4f4c-5f97-72404f1f3300/w=1280,sharpen=1 1280w"
                                                                alt="Quicksprout" loading="lazy" fetchpriority="low"
                                                                data-v-8554daca>
                                                        </div>
                                                    </div>
                                                    <div class="h-image h-partner-quote__branch h-partner-quote__branch--right"
                                                        data-v-ec8f2a15 data-v-6835ff82 data-v-8554daca>
                                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/public"
                                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/d0451498-9094-4ef9-ca5e-7a303ec15d00/w=1280,sharpen=1 1280w"
                                                            alt="Branch right" loading="lazy" fetchpriority="low"
                                                            data-v-8554daca>
                                                    </div>
                                                </div>
                                                <!--]-->
                                                <!--]-->
                                            </div>
                                            <!--]-->
                                        </div>
                                        <!---->
                                        <!--]-->
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <!--]-->
                </main>
                <footer class="hw-footer h-t-body-2 theme-base theme-hWebsites mode-light"
                    data-view-id="hgr-about-footer" dir="ltr" style="background:var(--h-bg-neutral-secondary);"
                    data-v-e390f074 data-v-814ce015>
                    <div class="hw-footer__wrapper" data-v-814ce015>
                        <div class="h-grid h-grid--cols-m-1 h-grid--cols-t-1" data-v-814ce015>
                            <div class="hw-footer__breadcrumbs" data-v-814ce015>
                                <div class="h-footer-breadcrumbs" data-v-814ce015 data-v-d9ba0eb0>
                                    <!--[-->
                                    <!--[-->
                                    <a href="/" class="h-t-body-2" index="0" data-v-d9ba0eb0>Saastify</a>
                                    <span class="h-icon h-footer-breadcrumbs__chevron" aria-hidden="true"
                                        data-icon-name="ic-chevron-small-right-16"
                                        style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:16px;height:16px;"
                                        data-v-c85a1cdf data-v-d9ba0eb0>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.96967 3.96967C6.26256 3.67678 6.73744 3.67678 7.03033 3.96967L10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L7.03033 12.0303C6.73744 12.3232 6.26256 12.3232 5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697L8.93934 8L5.96967 5.03033C5.67678 4.73744 5.67678 4.26256 5.96967 3.96967Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    <!--]-->
                                    <!--[-->
                                    <b class="h-t-body-2" index="1" data-v-d9ba0eb0>About</b>
                                    <!---->
                                    <!--]-->
                                    <!--]-->
                                </div>
                            </div>
                            <div class="hw-footer__content" data-v-814ce015>
                                <div class="hw-footer__sections h-grid--cols-t-3" data-v-814ce015>
                                    <!--[-->
                                    <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                        <span data-v-a2abc336>
                                            <span class="h-footer-section__title h-t-body-1-bold"
                                                data-v-a2abc336>Hosting</span>
                                            <!--[-->
                                            <a href="/in/web-hosting" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-web_hosting"
                                                data-qa="footer-link-web-hosting-page" data-v-a2abc336>Web hosting
                                                <!---->
                                            </a>
                                            <a href="/in/wordpress-hosting" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-wordpress_hosting"
                                                data-qa="footer-link-wordpress-hosting-page" data-v-a2abc336>Hosting for
                                                WordPress
                                                <!---->
                                            </a>
                                            <a href="/in/vps-hosting" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-vps_hosting"
                                                data-qa="footer-link-vps-hosting-page" data-v-a2abc336>VPS hosting
                                                <!---->
                                            </a>
                                            <a href="/in/self-hosted-n8n" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-self_hosted-n8n"
                                                data-qa="footer-link-self-hosted-n8n-page" data-v-a2abc336>Self-hosted
                                                n8n
                                                <!---->
                                            </a>
                                            <a href="/in/business-email" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-business_email"
                                                data-qa="footer-link-business-email-page" data-v-a2abc336>Business email
                                                <!---->
                                            </a>
                                            <a href="/in/cloud-hosting" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-cloud_hosting"
                                                data-qa="footer-link-cloud-hosting-page" data-v-a2abc336>Cloud hosting
                                                <!---->
                                            </a>
                                            <a href="/in/woocommerce-hosting" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-woocommerce_hosting"
                                                data-qa="footer-link-woocommerce-hosting-page" data-v-a2abc336>Hosting
                                                for WooCommerce
                                                <!---->
                                            </a>
                                            <a href="/in/pro" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-pro" data-qa="footer-link-pro-page"
                                                data-v-a2abc336>Hosting for agencies
                                                <!---->
                                            </a>
                                            <a href="/in/vps/minecraft-hosting"
                                                class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-vps_templates-minecraft-hosting"
                                                data-qa="footer-link-vps-templates-minecraft-hosting-page"
                                                data-v-a2abc336>Minecraft hosting
                                                <!---->
                                            </a>
                                            <a href="https://www.hostinger.com/in/applications/hermes-agent"
                                                rel="noopener noreferrer" target="_self"
                                                class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-ai_automation-apps"
                                                data-qa="footer-link-ai-automation-apps-page" data-v-a2abc336>Hermes
                                                Agent VPS
                                                <!---->
                                            </a>
                                            <a href="/in/ai-automation-apps" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-ai_automation-apps"
                                                data-qa="footer-link-ai-automation-apps-page" data-v-a2abc336>OpenClaw
                                                <!---->
                                            </a>
                                            <a href="https://www.hostinger.com/in/applications/paperclip"
                                                rel="noopener noreferrer" target="_self"
                                                class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-docker_applications-paperclip"
                                                data-qa="footer-link-docker-applications-paperclip-page"
                                                data-v-a2abc336>Paperclip VPS
                                                <!---->
                                            </a>
                                            <a href="/in/google-workspace" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-google_workspace"
                                                data-qa="footer-link-google-workspace-page" data-v-a2abc336>Google
                                                Workspace
                                                <!---->
                                            </a>
                                            <!--]-->
                                        </span>
                                    </div>
                                    <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                        <span data-v-a2abc336>
                                            <span class="h-footer-section__title h-t-body-1-bold"
                                                data-v-a2abc336>Domain</span>
                                            <!--[-->
                                            <a href="/in/domain-name-search" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-domain_name-search"
                                                data-qa="footer-link-domain-name-search-page" data-v-a2abc336>Domains
                                                <!---->
                                            </a>
                                            <a href="/in/domains" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-domains"
                                                data-qa="footer-link-domains-page" data-v-a2abc336>Buy a domain
                                                <!---->
                                            </a>
                                            <a href="/in/cheap-domain" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-cheap_domain-names"
                                                data-qa="footer-link-cheap-domain-names-page" data-v-a2abc336>Cheap
                                                domains
                                                <!---->
                                            </a>
                                            <a href="/in/free-domain" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-free_domain"
                                                data-qa="footer-link-free-domain-page" data-v-a2abc336>Free Domain Name
                                                <!---->
                                            </a>
                                            <a href="/in/whois" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-whois" data-qa="footer-link-whois-page"
                                                data-v-a2abc336>WHOIS Lookup
                                                <!---->
                                            </a>
                                            <a href="/in/free-ssl-certificate" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-free_ssl-certificate"
                                                data-qa="footer-link-free-ssl-certificate-page" data-v-a2abc336>Free SSL
                                                certificate
                                                <!---->
                                            </a>
                                            <a href="/in/domain-transfer" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-transfer_domain"
                                                data-qa="footer-link-transfer-domain-page" data-v-a2abc336>Domain
                                                transfer
                                                <!---->
                                            </a>
                                            <a href="/in/tld" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-tld" data-qa="footer-link-tld-page"
                                                data-v-a2abc336>Domain Extensions
                                                <!---->
                                            </a>
                                            <a href="/in/personal-domain-name" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-personal_domain-name"
                                                data-qa="footer-link-personal-domain-name-page" data-v-a2abc336>Personal
                                                domain name
                                                <!---->
                                            </a>
                                            <a href="/in/premium-domains" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-premium_domains"
                                                data-qa="footer-link-premium-domains-page" data-v-a2abc336>Premium
                                                domains
                                                <!---->
                                            </a>
                                            <!--]-->
                                        </span>
                                    </div>
                                    <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                        <span data-v-a2abc336>
                                            <span class="h-footer-section__title h-t-body-1-bold"
                                                data-v-a2abc336>Tools</span>
                                            <!--[-->
                                            <a href="/in/ai-builder" rel="noopener" target="_blank"
                                                class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-ai_builder"
                                                data-qa="footer-link-ai-builder-page" data-v-a2abc336>AI Builder
                                                <!---->
                                            </a>
                                            <a href="/in/website-builder" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-website_builder"
                                                data-qa="footer-link-website-builder-page" data-v-a2abc336>Website
                                                Builder
                                                <!---->
                                            </a>
                                            <a href="/in/ai-website-builder" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-ai_website-builder"
                                                data-qa="footer-link-ai-website-builder-page" data-v-a2abc336>AI Website
                                                Builder
                                                <!---->
                                            </a>
                                            <a href="/in/ecommerce-website" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-ecommerce_website"
                                                data-qa="footer-link-ecommerce-website-page" data-v-a2abc336>Ecommerce
                                                Website Builder
                                                <!---->
                                            </a>
                                            <a href="/in/templates" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-templates"
                                                data-qa="footer-link-templates-page" data-v-a2abc336>Templates
                                                <!---->
                                            </a>
                                            <a href="/in/domain-name-generator"
                                                class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-domain_name-generator"
                                                data-qa="footer-link-domain-name-generator-page" data-v-a2abc336>Domain
                                                Name Generator
                                                <!---->
                                            </a>
                                            <a href="/in/print-on-demand" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-print_on-demand"
                                                data-qa="footer-link-print-on-demand-page" data-v-a2abc336>Print on
                                                Demand
                                                <!---->
                                            </a>
                                            <a href="/in/link-in-bio" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-link_in-bio"
                                                data-qa="footer-link-link-in-bio-page" data-v-a2abc336>Link in bio
                                                <!---->
                                            </a>
                                            <a href="/in/business-name-generator"
                                                class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-business_name-generator"
                                                data-qa="footer-link-business-name-generator-page"
                                                data-v-a2abc336>Business Name Generator
                                                <!---->
                                            </a>
                                            <a href="/in/ai-email-generator" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-ai_email-generator"
                                                data-qa="footer-link-ai-email-generator-page" data-v-a2abc336>AI
                                                Newsletter Generator
                                                <!---->
                                            </a>
                                            <a href="/in/logo-maker" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-logo_maker"
                                                data-qa="footer-link-logo-maker-page" data-v-a2abc336>AI Logo Generator
                                                <!---->
                                            </a>
                                            <a href="/in/website-migration" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-website_migration"
                                                data-qa="footer-link-website-migration-page" data-v-a2abc336>Migrate to
                                                Hostinger
                                                <!---->
                                            </a>
                                            <a href="https://developers.hostinger.com/" rel="noopener noreferrer"
                                                target="_blank" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-api" data-qa="footer-link-api-page"
                                                data-v-a2abc336>Saastify API
                                                <!---->
                                            </a>
                                            <!--]-->
                                        </span>
                                    </div>
                                    <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                        <span data-v-a2abc336>
                                            <span class="h-footer-section__title h-t-body-1-bold"
                                                data-v-a2abc336>Information</span>
                                            <!--[-->
                                            <a href="/in/pricing" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-pricing"
                                                data-qa="footer-link-pricing-page" data-v-a2abc336>Pricing
                                                <!---->
                                            </a>
                                            <a href="/in/reviews" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-reviews"
                                                data-qa="footer-link-reviews-page" data-v-a2abc336>Saastify Reviews
                                                <!---->
                                            </a>
                                            <a href="/in/affiliates" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-affiliates"
                                                data-qa="footer-link-affiliates-page" data-v-a2abc336>Affiliate program
                                                <!---->
                                            </a>
                                            <a href="/in/educational-partnership"
                                                class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-educational_partnership"
                                                data-qa="footer-link-educational-partnership-page"
                                                data-v-a2abc336>Educational partnership
                                                <!---->
                                            </a>
                                            <a href="/in/referral-program" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-referral_program"
                                                data-qa="footer-link-referral-program-page" data-v-a2abc336>Referral
                                                program
                                                <!---->
                                            </a>
                                            <a href="/in/agency-directory" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-agency_directory"
                                                data-qa="footer-link-agency-directory-page" data-v-a2abc336>Agency
                                                directory
                                                <!---->
                                            </a>
                                            <a href="https://roadmap.hostinger.com/" rel="noopener noreferrer"
                                                target="_blank" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-roadmap"
                                                data-qa="footer-link-roadmap-page" data-v-a2abc336>Roadmap
                                                <!---->
                                            </a>
                                            <a href="https://statuspage.hostinger.com/" rel="noopener noreferrer"
                                                target="_blank" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-system_status"
                                                data-qa="footer-link-system-status-page" data-v-a2abc336>System status
                                                <!---->
                                            </a>
                                            <a href="https://trust.hostinger.com/" rel="noopener noreferrer"
                                                target="_blank" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-trust_center"
                                                data-qa="footer-link-trust-center-page" data-v-a2abc336>Trust center
                                                <!---->
                                            </a>
                                            <a href="/in/sitemap" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-sitemap"
                                                data-qa="footer-link-sitemap-page" data-v-a2abc336>Sitemap
                                                <!---->
                                            </a>
                                            <a href="https://www.hostinger.com/entitymap.html" rel="noopener noreferrer"
                                                target="_blank" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-entitymap"
                                                data-qa="footer-link-entitymap-page" data-v-a2abc336>EntityMap
                                                <!---->
                                            </a>
                                            <!--]-->
                                        </span>
                                    </div>
                                    <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                        <span data-v-a2abc336>
                                            <span class="h-footer-section__title h-t-body-1-bold"
                                                data-v-a2abc336>Company</span>
                                            <!--[-->
                                            <a aria-current="page" href="/in/about"
                                                class="router-link-active router-link-exact-active h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-about" data-qa="footer-link-about-page"
                                                data-v-a2abc336>About Saastify
                                                <!---->
                                            </a>
                                            <a href="/developers" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-technology"
                                                data-qa="footer-link-technology-page" data-v-a2abc336>Our technology
                                                <!---->
                                            </a>
                                            <a href="https://www.hostinger.com/blog/?redirect_back_url=https%3A%2F%2Fwww.hostinger.com%2Fin%2Fabout"
                                                rel="noopener noreferrer" target="_self"
                                                class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-blog" data-qa="footer-link-blog-page"
                                                data-v-a2abc336>Blog
                                                <!---->
                                            </a>
                                            <a href="/in/student-discount" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-student_discount"
                                                data-qa="footer-link-student-discount-page" data-v-a2abc336>Student
                                                discount
                                                <!---->
                                            </a>
                                            <!--]-->
                                        </span>
                                    </div>
                                    <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                        <span data-v-a2abc336>
                                            <span class="h-footer-section__title h-t-body-1-bold"
                                                data-v-a2abc336>Support</span>
                                            <!--[-->
                                            <a href="https://www.hostinger.com/in/tutorials/?redirect_back_url=https%3A%2F%2Fwww.hostinger.com%2Fin%2Fabout"
                                                rel="noopener noreferrer" target="_self"
                                                class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-tutorials"
                                                data-qa="footer-link-tutorials-page" data-v-a2abc336>Tutorials
                                                <!---->
                                            </a>
                                            <a href="https://www.hostinger.com/support?redirect_back_url=https%3A%2F%2Fwww.hostinger.com%2Fin%2Fabout"
                                                rel="noopener" target="_blank" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-knowledge_base"
                                                data-qa="footer-link-knowledge-base-page" data-v-a2abc336>Knowledge Base
                                                <!---->
                                            </a>
                                            <a href="https://www.youtube.com/HostingerIndia" rel="noopener noreferrer"
                                                target="_blank" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-hostinger_academy"
                                                data-qa="footer-link-hostinger-academy-page" data-v-a2abc336>Hostinger
                                                Academy
                                                <!---->
                                            </a>
                                            <a href="/#faq" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-contacts"
                                                data-qa="footer-link-contacts-page" data-v-a2abc336>Contact us
                                                <!---->
                                            </a>
                                            <a href="/in/report-abuse" class="h-footer-section__item h-t-body-2"
                                                data-click-id="hgr-footer_menu-report_abuse"
                                                data-qa="footer-link-report-abuse-page" data-v-a2abc336>Report Online
                                                Abuse
                                                <!---->
                                            </a>
                                            <!--]-->
                                        </span>
                                    </div>
                                    <!--]-->
                                    <!---->
                                </div>
                            </div>
                            <div class="hw-footer__logo-section" data-v-814ce015>
                                <div class="h-social-icons" data-v-814ce015 data-v-d20178ee>
                                    <!--[-->
                                    <a href="https://www.linkedin.com/company/hostinger"
                                        rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon"
                                        data-click-id="hgr-footer-social_icons-linkedin"
                                        aria-label="ic-linkedin-monochrome-24" data-v-d20178ee>
                                        <span class="h-icon" aria-hidden="true"
                                            data-icon-name="ic-linkedin-monochrome-24"
                                            style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;"
                                            data-v-c85a1cdf data-v-d20178ee>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM7.04294 8.60884C7.75777 8.60884 8.33693 8.02498 8.33693 7.30442C8.33693 6.58438 7.75777 6 7.04294 6C6.32812 6 5.74896 6.58438 5.74896 7.30442C5.74896 8.02498 6.32812 8.60884 7.04294 8.60884ZM5.73853 18.0006V9.65237H8.34736V18.0006H5.73853ZM9.91995 9.65237H12.5121V10.7768C13.6057 8.75285 18.2609 8.60309 18.2609 12.7146V18.0006H15.6584V13.6183C15.6584 10.9824 12.5126 11.1817 12.5126 13.6183V18.0006H9.91995V9.65237Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://www.facebook.com/Hostinger" rel="noopener noreferrer nofollow"
                                        target="_blank" class="h-social-icons--icon"
                                        data-click-id="hgr-footer-social_icons-facebook"
                                        aria-label="ic-facebook-monochrome-24" data-v-d20178ee>
                                        <span class="h-icon" aria-hidden="true"
                                            data-icon-name="ic-facebook-monochrome-24"
                                            style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;"
                                            data-v-c85a1cdf data-v-d20178ee>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M21.9996 12.0336C21.9996 6.49047 17.5225 1.99683 11.9998 1.99683C6.47711 1.99683 2 6.49047 2 12.0336C2 16.7404 5.22874 20.69 9.58425 21.7748V15.1008H7.52229V12.0336H9.58425V10.7119C9.58425 7.29582 11.1246 5.71242 14.4662 5.71242C15.0997 5.71242 16.1929 5.83728 16.6401 5.96174V8.74191C16.4041 8.71702 15.9941 8.70458 15.4849 8.70458C13.8454 8.70458 13.2118 9.32806 13.2118 10.9488V12.0336H16.4781L15.9169 15.1008H13.2118V21.9968C18.1633 21.3966 22 17.1651 22 12.0336H21.9996Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://www.instagram.com/hostinger_global"
                                        rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon"
                                        data-click-id="hgr-footer-social_icons-instagram"
                                        aria-label="ic-instagram-monochrome-24" data-v-d20178ee>
                                        <span class="h-icon" aria-hidden="true"
                                            data-icon-name="ic-instagram-monochrome-24"
                                            style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;"
                                            data-v-c85a1cdf data-v-d20178ee>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.0302 0.0839254C5.7534 0.144166 4.88147 0.347926 4.11923 0.647447C3.33035 0.954889 2.6617 1.36745 1.99642 2.03513C1.33114 2.70281 0.921459 3.37194 0.616178 4.16202C0.320737 4.92594 0.120576 5.79859 0.064176 7.07611C0.00777578 8.35363 -0.00470426 8.76428 0.00153576 12.023C0.00777578 15.2817 0.0221758 15.6902 0.084096 16.9704C0.145056 18.2469 0.348097 19.1186 0.647618 19.8811C0.955539 20.67 1.36762 21.3384 2.03554 22.0039C2.70346 22.6694 3.37211 23.0782 4.16411 23.3839C4.92731 23.6789 5.8002 23.88 7.07748 23.9359C8.35476 23.9918 8.76589 24.0048 12.0237 23.9986C15.2814 23.9923 15.6916 23.9779 16.9715 23.9172C18.2514 23.8565 19.1186 23.652 19.8813 23.3539C20.6702 23.0453 21.339 22.6339 22.0041 21.9658C22.6691 21.2976 23.0786 20.628 23.3836 19.8374C23.6793 19.0742 23.8802 18.2013 23.9356 16.925C23.9915 15.6441 24.0047 15.2352 23.9985 11.9769C23.9923 8.71868 23.9776 8.31019 23.9169 7.03051C23.8562 5.75083 23.6529 4.88178 23.3536 4.11882C23.0452 3.32994 22.6336 2.66201 21.9659 1.99601C21.2982 1.33001 20.6282 0.920808 19.8378 0.616487C19.0742 0.321046 18.2018 0.119686 16.9245 0.0644854C15.6472 0.00928517 15.2361 -0.00487488 11.9771 0.00136514C8.71813 0.00760516 8.31013 0.0215252 7.0302 0.0839254ZM7.17036 21.7771C6.00036 21.7262 5.36507 21.5318 4.94171 21.3691C4.38107 21.1531 3.98171 20.892 3.55979 20.4742C3.13787 20.0563 2.87867 19.6555 2.65978 19.0961C2.49538 18.6727 2.29738 18.0381 2.24266 16.8681C2.18314 15.6036 2.17066 15.2239 2.1637 12.0201C2.15674 8.81636 2.16898 8.43715 2.22442 7.17211C2.27434 6.00307 2.46994 5.36706 2.63242 4.94394C2.84843 4.38258 3.10859 3.98394 3.52739 3.56226C3.94619 3.14058 4.34579 2.8809 4.90571 2.66201C5.32859 2.49689 5.96316 2.30057 7.13268 2.24489C8.3982 2.18489 8.77741 2.17289 11.9807 2.16593C15.184 2.15897 15.5641 2.17097 16.8302 2.22665C17.9992 2.27753 18.6354 2.47121 19.0581 2.63465C19.619 2.85066 20.0181 3.1101 20.4398 3.52962C20.8614 3.94914 21.1214 4.3473 21.3402 4.90842C21.5056 5.3301 21.7019 5.96443 21.7571 7.13467C21.8174 8.4002 21.831 8.77964 21.8368 11.9827C21.8426 15.1857 21.8313 15.5661 21.7759 16.8307C21.7247 18.0007 21.5308 18.6362 21.3678 19.0601C21.1518 19.6205 20.8914 20.0201 20.4724 20.4415C20.0534 20.863 19.6542 21.1226 19.0941 21.3415C18.6717 21.5064 18.0364 21.7032 16.8678 21.7589C15.6023 21.8184 15.2231 21.8309 12.0186 21.8378C8.81413 21.8448 8.43612 21.8318 7.1706 21.7771M16.953 5.58642C16.9535 5.87125 17.0384 6.14954 17.1971 6.38609C17.3557 6.62265 17.581 6.80684 17.8443 6.91538C18.1076 7.02391 18.3972 7.05192 18.6765 6.99585C18.9558 6.93978 19.2121 6.80216 19.4131 6.60039C19.6142 6.39862 19.7509 6.14176 19.8059 5.8623C19.8609 5.58285 19.8319 5.29334 19.7224 5.03041C19.6129 4.76747 19.4278 4.54291 19.1907 4.38514C18.9536 4.22736 18.675 4.14345 18.3902 4.14402C18.0083 4.14478 17.6424 4.29716 17.3729 4.56765C17.1034 4.83814 16.9524 5.20459 16.953 5.58642ZM5.8386 12.012C5.84532 15.4152 8.60917 18.1677 12.0117 18.1613C15.4141 18.1548 18.1686 15.3912 18.1622 11.988C18.1557 8.58475 15.3911 5.83147 11.9881 5.83819C8.58517 5.84491 5.83212 8.60924 5.8386 12.012ZM8.00004 12.0076C7.99848 11.2165 8.23155 10.4427 8.66978 9.78399C9.10802 9.12531 9.73173 8.61137 10.462 8.30717C11.1924 8.00296 11.9965 7.92216 12.7727 8.07496C13.549 8.22777 14.2625 8.60733 14.823 9.16565C15.3835 9.72396 15.7659 10.436 15.9218 11.2116C16.0777 11.9872 16.0001 12.7917 15.6988 13.5232C15.3974 14.2547 14.886 14.8804 14.229 15.3213C13.5721 15.7621 12.7992 15.9983 12.0081 15.9998C11.4827 16.0009 10.9623 15.8985 10.4766 15.6985C9.99087 15.4985 9.54929 15.2047 9.1771 14.834C8.80491 14.4632 8.50939 14.0228 8.30743 13.5379C8.10547 13.0529 8.00102 12.533 8.00004 12.0076Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://x.com/Hostinger" rel="noopener noreferrer nofollow" target="_blank"
                                        class="h-social-icons--icon" data-click-id="hgr-footer-social_icons-twitter"
                                        aria-label="ic-x-twitter-monochrome-24" data-v-d20178ee>
                                        <span class="h-icon" aria-hidden="true"
                                            data-icon-name="ic-x-twitter-monochrome-24"
                                            style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;"
                                            data-v-c85a1cdf data-v-d20178ee>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.2117 16.7815H15.0886L7.75913 7.15474H8.96408L16.2117 16.7815Z"
                                                    fill="currentColor" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM17.8262 6H15.7999L12.4606 9.83444L9.57387 6H5.39299L10.3884 12.5632L5.65384 17.9999H7.68116L11.3358 13.8053L14.5294 17.9999H18.607L13.3996 11.0833L17.8262 6Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://www.youtube.com/@Hostinger" rel="noopener noreferrer nofollow"
                                        target="_blank" class="h-social-icons--icon"
                                        data-click-id="hgr-footer-social_icons-youtube" aria-label="ic-youtube-24"
                                        data-v-d20178ee>
                                        <span class="h-icon" aria-hidden="true" data-icon-name="ic-youtube-24"
                                            style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;"
                                            data-v-c85a1cdf data-v-d20178ee>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.331 12.0046L10.5491 9.77658V14.2234L14.331 12.0046Z"
                                                    fill="currentColor" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM6.30908 7.10842C7.44993 6.80585 11.9954 6.80585 11.9954 6.80585C11.9954 6.80585 16.5499 6.80586 17.6907 7.12677C18.3105 7.29181 18.8045 7.79602 18.9662 8.42867C19.2806 9.59311 19.2716 12.0137 19.2716 12.0137C19.2716 12.0137 19.2716 14.4252 18.9662 15.5805C18.8045 16.2223 18.3105 16.7173 17.6907 16.8915C16.5499 17.1941 11.9954 17.1941 11.9954 17.1941C11.9954 17.1941 7.45891 17.1941 6.30908 16.8824C5.68924 16.7081 5.19524 16.2039 5.02456 15.5713C4.72812 14.4252 4.72811 12.0046 4.72811 12.0046C4.72811 12.0046 4.72812 9.59311 5.02456 8.42867C5.19524 7.79602 5.69823 7.28263 6.30908 7.10842Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://www.reddit.com/r/Hostinger/" rel="noopener noreferrer nofollow"
                                        target="_blank" class="h-social-icons--icon"
                                        data-click-id="hgr-footer-social_icons-reddit"
                                        aria-label="ic-reddit-monochrome-24" data-v-d20178ee>
                                        <span class="h-icon" aria-hidden="true" data-icon-name="ic-reddit-monochrome-24"
                                            style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;"
                                            data-v-c85a1cdf data-v-d20178ee>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.4998 1.49951C19.8134 1.49959 22.4997 4.1859 22.4998 7.49951V16.4995C22.4998 19.8132 19.8135 22.4994 16.4998 22.4995H7.49981C4.18607 22.4995 1.49981 19.8133 1.49981 16.4995V7.49951C1.49993 4.18587 4.18614 1.49955 7.49981 1.49951H16.4998ZM15.7977 5.99951C15.3987 5.99967 15.0569 6.22787 14.8973 6.56982L12.5369 6.06787C12.4685 6.05647 12.3996 6.06784 12.3426 6.10205C12.2856 6.13626 12.2511 6.19381 12.2283 6.26221L11.5106 9.66064C9.994 9.70625 8.63674 10.1503 7.65606 10.8687C7.40526 10.6293 7.05173 10.4703 6.67559 10.4702C5.88884 10.4702 5.24996 11.1083 5.24981 11.895C5.24981 12.4765 5.59196 12.9667 6.09356 13.1948C6.07076 13.3316 6.05939 13.4802 6.05938 13.6284C6.05938 15.8179 8.60245 17.5854 11.7498 17.5854C14.8972 17.5854 17.4402 15.8179 17.4402 13.6284C17.4402 13.4803 17.4289 13.3433 17.4061 13.2065C17.8735 12.9784 18.2273 12.4765 18.2273 11.895C18.2272 11.1083 17.5883 10.4702 16.8016 10.4702C16.414 10.4702 16.0719 10.6179 15.8211 10.8687C14.8518 10.173 13.5057 9.71766 12.0232 9.66064L12.6736 6.61572L14.783 7.06006C14.8058 7.59589 15.2505 8.02957 15.7977 8.02979C16.3564 8.02979 16.8133 7.57293 16.8133 7.01416C16.8131 6.45559 16.3563 5.99951 15.7977 5.99951ZM13.7908 15.2134C13.8935 15.1108 14.0652 15.1108 14.1678 15.2134C14.2476 15.3274 14.247 15.4877 14.1443 15.5903C13.4487 16.2857 12.1258 16.3315 11.7381 16.3315C11.3499 16.3315 10.0159 16.2743 9.33184 15.5903C9.2293 15.4877 9.22928 15.316 9.33184 15.2134C9.43445 15.1108 9.60615 15.1108 9.70879 15.2134C10.1421 15.6467 11.077 15.8071 11.7498 15.8071C12.4226 15.8071 13.3461 15.6467 13.7908 15.2134ZM9.492 11.895C10.0507 11.8951 10.5066 12.3519 10.5066 12.9106C10.5064 13.4692 10.0506 13.9253 9.492 13.9253C8.93337 13.9253 8.47759 13.4692 8.47735 12.9106C8.47735 12.3519 8.93322 11.895 9.492 11.895ZM13.9617 11.895C14.5205 11.895 14.9773 12.3519 14.9773 12.9106C14.9771 13.4692 14.5203 13.9253 13.9617 13.9253C13.4033 13.9251 12.9473 13.4691 12.9471 12.9106C12.9471 12.352 13.4031 11.8952 13.9617 11.895Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://www.tiktok.com/@hostingeracademy"
                                        rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon"
                                        data-click-id="hgr-footer-social_icons-tiktok"
                                        aria-label="ic-tiktok-monochrome-24" data-v-d20178ee>
                                        <span class="h-icon" aria-hidden="true" data-icon-name="ic-tiktok-monochrome-24"
                                            style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;"
                                            data-v-c85a1cdf data-v-d20178ee>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.5 1.49988C4.18629 1.49988 1.5 4.18617 1.5 7.49988V16.4999C1.5 19.8136 4.18629 22.4999 7.5 22.4999H16.5C19.8137 22.4999 22.5 19.8136 22.5 16.4999V7.49988C22.5 4.18617 19.8137 1.49988 16.5 1.49988H7.5ZM14.6201 5.31738C14.8446 7.21283 15.9028 8.34625 17.7435 8.46792V10.6003C16.6724 10.7028 15.7361 10.357 14.6458 9.6974V13.6868C14.6458 18.7584 9.11104 20.3465 6.88559 16.7093C5.45541 14.372 6.32763 10.2673 10.9196 10.1008V12.3549C10.5733 12.4125 10.1949 12.5021 9.85499 12.611C8.83526 12.9568 8.25806 13.6036 8.41839 14.737C8.72624 16.9206 12.741 17.5609 12.4011 13.2962V5.31098H14.6137L14.6201 5.31738Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://discord.gg/Zp2FteMUea" rel="noopener noreferrer nofollow"
                                        target="_blank" class="h-social-icons--icon"
                                        data-click-id="hgr-footer-social_icons-discord"
                                        aria-label="ic-discord-monochrome-24" data-v-d20178ee>
                                        <span class="h-icon" aria-hidden="true"
                                            data-icon-name="ic-discord-monochrome-24"
                                            style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;"
                                            data-v-c85a1cdf data-v-d20178ee>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.2891 5.23351C17.9297 4.5975 16.4762 4.13527 14.9566 3.87207C14.77 4.20948 14.5519 4.66331 14.4016 5.02432C12.7862 4.78139 11.1857 4.78139 9.60004 5.02432C9.44974 4.66331 9.22676 4.20948 9.03847 3.87207C7.51723 4.13527 6.06205 4.5992 4.70268 5.23688C1.96081 9.3802 1.21754 13.4206 1.58918 17.4036C3.40773 18.7617 5.17012 19.5867 6.90277 20.1265C7.33057 19.5377 7.71211 18.9118 8.0408 18.2522C7.4148 18.0144 6.81523 17.7208 6.2487 17.38C6.399 17.2687 6.54602 17.1523 6.68805 17.0325C10.1434 18.6487 13.8978 18.6487 17.3119 17.0325C17.4556 17.1523 17.6026 17.2687 17.7513 17.38C17.1831 17.7225 16.5819 18.016 15.9559 18.2539C16.2846 18.9118 16.6645 19.5394 17.0939 20.1282C18.8282 19.5883 20.5923 18.7634 22.4108 17.4036C22.8469 12.7863 21.6659 8.78299 19.2891 5.23351ZM8.51155 14.9541C7.47428 14.9541 6.62362 13.9857 6.62362 12.8065C6.62362 11.6273 7.45611 10.6573 8.51155 10.6573C9.56702 10.6573 10.4176 11.6256 10.3995 12.8065C10.4011 13.9857 9.56702 14.9541 8.51155 14.9541ZM15.4884 14.9541C14.4512 14.9541 13.6005 13.9857 13.6005 12.8065C13.6005 11.6273 14.433 10.6573 15.4884 10.6573C16.5439 10.6573 17.3945 11.6256 17.3764 12.8065C17.3764 13.9857 16.5439 14.9541 15.4884 14.9541Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                    <!--]-->
                                </div>
                                <a href="/in/" class="h-logo h-logo--desktop h-logo--h-fg-neutral-default"
                                    aria-label="homepage link" data-click-id="hgr-footer-logo" data-v-814ce015
                                    data-v-1c91e1f4>
                                    <div class="" data-v-1c91e1f4>
                                        <svg fill="none" height="30" viewBox="0 0 147 30" width="147"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g fill="currentColor">
                                                <path clip-rule="evenodd"
                                                    d="m62.0651 18.1241c.3096-.7949.465-1.7173.465-2.7658 0-1.049-.1579-1.9712-.4741-2.7664-.3159-.7956-.7492-1.4645-1.2991-2.0065-.5501-.5421-1.1938-.94843-1.931-1.21958-.7376-.2714-1.5217-.4071-2.3524-.4071-.8077 0-1.5775.1357-2.3086.4071-.7318.27115-1.3757.67748-1.9312 1.21958-.556.542-.9981 1.2109-1.3256 2.0065-.3277.7952-.4917 1.7174-.4917 2.7664 0 1.0485.1583 1.9709.4743 2.7658.3161.7957.7487 1.4616 1.2991 1.9974.5498.5367 1.1938.94 1.9312 1.2109.7374.2714 1.5213.4069 2.3525.4069.854 0 1.6531-.1355 2.3961-.4069.7431-.2709 1.3841-.6742 1.9224-1.2109.5381-.5358.9626-1.2017 1.2731-1.9974zm-8.6027-1.1399c-.1463-.4832-.2193-1.0253-.2193-1.6259 0-.5893.073-1.1284.2193-1.6178.1463-.4889.3571-.9071.6323-1.2546.2745-.3478.6113-.6189 1.0095-.8135.3976-.1942.854-.2914 1.3693-.2914.503 0 .9566.0942 1.3607.2828.4033.1881.7431.4565 1.0178.804.2749.3481.486.766.6323 1.2549.1463.4892.2195 1.0342.2195 1.6356 0 .6006-.0732 1.1427-.2195 1.6259-.1463.4834-.3574.8987-.6323 1.2462-.2747.348-.6145.6157-1.0178.8041-.4041.1891-.8577.2835-1.3607.2835-.5153 0-.9717-.0944-1.3693-.2835-.3982-.1884-.735-.4561-1.0095-.8041-.2752-.3475-.486-.7628-.6323-1.2462z"
                                                    fill-rule="evenodd" />
                                                <path
                                                    d="m69.4167 19.3884c.3862 0 .705-.0321.9567-.0974.2516-.0645.4536-.1527.6056-.2654.1519-.1115.2575-.244.3162-.3972.0586-.153.0878-.3241.0878-.5127 0-.4004-.1875-.7338-.5619-.9986-.3746-.2654-1.0182-.5509-1.931-.8579-.3981-.1409-.7961-.3033-1.194-.4857s-.7549-.4123-1.0708-.6894c-.3157-.2768-.5734-.6127-.7723-1.0079-.1991-.3945-.2985-.8745-.2985-1.4403s.1053-1.0754.3159-1.529c.2109-.4538.5092-.8394.8956-1.15802.3861-.31835.854-.56231 1.4041-.7336.5502-.17055 1.1703-.25657 1.8611-.25657.8191 0 1.5274.08898 2.1244.26546.5965.17673 1.0882.3715 1.4744.58358l-.7898 2.17415c-.3397-.1767-.7173-.333-1.1324-.4687-.4156-.1352-.9159-.2034-1.5009-.2034-.6557 0-1.1268.092-1.4135.2744-.2867.1826-.4303.4627-.4303.8394 0 .2242.053.413.1583.5658.1051.1532.2546.2916.4475.4155.1932.1235.4156.2358.6675.3356.2511.1004.5293.2032.8339.3092.6317.2361 1.1818.4687 1.6502.6985.4679.2299.8572.4981 1.1675.8043.3098.3063.541.6659.6935 1.0785.1517.4127.228.9133.228 1.502 0 1.1432-.3981 2.0301-1.194 2.6603-.7959.6308-1.9955.9462-3.5988.9462-.5383 0-1.0242-.0326-1.4572-.0974-.433-.0652-.8162-.1446-1.1498-.2387-.3334-.0942-.6204-.1943-.8605-.3003-.2398-.1063-.4416-.2062-.6056-.3009l.7728-2.1916c.3623.2007.8101.3801 1.3431.5388.5322.1594 1.1849.239 1.9572.239z" />
                                                <path
                                                    d="m86.2752 9.24216v2.35114h-3.6693v9.8985h-2.7386v-9.8985h-3.6695v-2.35114z" />
                                                <path d="m89.3171 21.4921h2.7388v-12.24991h-2.7388z" />
                                                <path
                                                    d="m104.315 21.4918c-.784-1.4022-1.632-2.7866-2.545-4.154-.914-1.3671-1.885-2.6573-2.9146-3.8712v8.0252h-2.7037v-12.24964h2.2295c.3859.38855.8133.86584 1.2816 1.43164.4682.5658.9442 1.1699 1.4312 1.812.485.6422.968 1.308 1.448 1.9972.48.6893.93 1.352 1.352 1.9885v-7.22934h2.721v12.24964z" />
                                                <path
                                                    d="m116.644 11.3634c-1.275 0-2.197.3564-2.765 1.0693-.568.7131-.851 1.6879-.851 2.9257 0 .6004.07 1.1459.21 1.6348.141.4887.352.9099.632 1.2636.281.3537.632.6278 1.054.8223.421.1943.912.2915 1.474.2915.304 0 .565-.006.782-.0176.216-.0116.406-.0351.57-.0707v-4.2598h2.739v6.0629c-.328.1298-.854.268-1.58.415-.726.1471-1.621.2213-2.686.2213-.913 0-1.741-.1417-2.484-.4242-.744-.2832-1.379-.6953-1.905-1.2376-.526-.5418-.933-1.2079-1.22-1.9974-.287-.789-.43-1.6906-.43-2.7041 0-1.0255.158-1.9328.474-2.7226.316-.7892.748-1.4585 1.299-2.0063.55-.5479 1.196-.9632 1.94-1.24596.743-.28301 1.536-.42489 2.378-.42489.574 0 1.092.0388 1.554.11518.462.07687.86.16511 1.194.26546.333.09986.609.20293.825.30922.217.10604.371.18884.465.24767l-.79 2.20922c-.374-.2002-.805-.3737-1.29-.5213-.486-.1473-1.015-.2207-1.589-.2207z" />
                                                <path
                                                    d="m124.321 21.4918v-12.24964h8.216v2.31554h-5.477v2.4037h4.863v2.2629h-4.863v2.952h5.881v2.3155z" />
                                                <path clip-rule="evenodd"
                                                    d="m144.006 10.0814c-.971-.65422-2.37-.98098-4.196-.98098-.503 0-1.074.02348-1.711.07094-.638.04671-1.256.12976-1.852.24692v12.07342h2.738v-4.4726h1.352c.235.2833.47.5984.705.9464.235.3475.474.7153.714 1.1044.241.389.475.7899.705 1.2022.228.4126.455.8189.678 1.2196h3.061c-.21-.4476-.438-.9042-.684-1.3701-.246-.4652-.5-.9128-.764-1.3429-.263-.4301-.53-.8426-.799-1.2376-.269-.3947-.526-.7452-.772-1.0519.738-.306 1.302-.7277 1.694-1.2636.393-.5361.588-1.2349.588-2.0948 0-1.379-.486-2.3953-1.457-3.0494zm-4.573 1.3877c.158-.0116.336-.0176.535-.0176.878 0 1.542.1268 1.993.3797.451.2541.676.6807.676 1.2818 0 .6249-.222 1.0671-.667 1.3259-.445.2595-1.182.3885-2.212.3885h-.773v-3.323c.141-.0113.29-.0232.448-.0353z"
                                                    fill-rule="evenodd" />
                                                <path
                                                    d="m44.0025 9.34126h2.7552v12.20654h-2.7552v-5.1785h-4.6271v5.1785h-2.7553v-12.20654h2.7553v4.66744h4.6271z" />
                                                <path clip-rule="evenodd"
                                                    d="m17.8175.798004v8.729406l7.0525 4.12459v-9.25917zm-17.81725511.000429v13.698467h22.93675511l-6.9786-3.8357-9.0909-.0044v-6.17182zm17.81725511 25.471867v-6.1186l-9.16098-.0064c.00855.0408-7.09448-3.8969-7.09448-3.8969l23.30786.1101v13.6982zm-17.81725567-8.9516-.00024433 8.9516 6.8675 3.5946v-8.5192z"
                                                    fill-rule="evenodd" />
                                            </g>
                                        </svg>
                                    </div>
                                    <!---->
                                </a>
                                <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                    <span class="h-legal-links" data-v-a2abc336>
                                        <!--[-->
                                        <a href="/in/legal/non-public-registrant-data-request-policy"
                                            class="h-footer-section__item h-t-body-2"
                                            data-click-id="hgr-footer_menu-legal_page-non-public-registrant-data-request-policy"
                                            data-qa="footer-link-legal-page-non-public-registrant-data-request-policy-page"
                                            data-v-a2abc336>NPRD request policy
                                            <!---->
                                        </a>
                                        <a href="/in/legal/privacy-policy" class="h-footer-section__item h-t-body-2"
                                            data-click-id="hgr-footer_menu-legal_page-privacy-policy"
                                            data-qa="footer-link-legal-page-privacy-policy-page" data-v-a2abc336>Privacy
                                            policy
                                            <!---->
                                        </a>
                                        <a href="/in/legal/refund-policy" class="h-footer-section__item h-t-body-2"
                                            data-click-id="hgr-footer_menu-legal_page-refund-policy"
                                            data-qa="footer-link-legal-page-refund-policy-page" data-v-a2abc336>Refund
                                            policy
                                            <!---->
                                        </a>
                                        <a href="/in/legal/universal-terms-of-service-agreement"
                                            class="h-footer-section__item h-t-body-2"
                                            data-click-id="hgr-footer_menu-legal_page-universal-terms-of-service-agreement"
                                            data-qa="footer-link-legal-page-universal-terms-of-service-agreement-page"
                                            data-v-a2abc336>Terms of service
                                            <!---->
                                        </a>
                                        <!--]-->
                                    </span>
                                </div>
                                <div class="h-payment-methods h-payment-methods--minimal-footer" data-v-814ce015
                                    data-v-9aeb7889>
                                    <!--[-->
                                    <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82
                                        data-v-8554daca>
                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/2ffe1d0f-4165-40af-3454-8b22a4381200/public"
                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/2ffe1d0f-4165-40af-3454-8b22a4381200/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/2ffe1d0f-4165-40af-3454-8b22a4381200/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/2ffe1d0f-4165-40af-3454-8b22a4381200/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/2ffe1d0f-4165-40af-3454-8b22a4381200/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/2ffe1d0f-4165-40af-3454-8b22a4381200/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/2ffe1d0f-4165-40af-3454-8b22a4381200/w=1280,sharpen=1 1280w"
                                            alt="upi" loading="lazy" fetchpriority="low" data-v-8554daca>
                                    </div>
                                    <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82
                                        data-v-8554daca>
                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/0dad6858-9c10-40d1-7258-0b606f111e00/public"
                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/0dad6858-9c10-40d1-7258-0b606f111e00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/0dad6858-9c10-40d1-7258-0b606f111e00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/0dad6858-9c10-40d1-7258-0b606f111e00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/0dad6858-9c10-40d1-7258-0b606f111e00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/0dad6858-9c10-40d1-7258-0b606f111e00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/0dad6858-9c10-40d1-7258-0b606f111e00/w=1280,sharpen=1 1280w"
                                            alt="rupay" loading="lazy" fetchpriority="low" data-v-8554daca>
                                    </div>
                                    <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82
                                        data-v-8554daca>
                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/public"
                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=1280,sharpen=1 1280w"
                                            alt="visa" loading="lazy" fetchpriority="low" data-v-8554daca>
                                    </div>
                                    <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82
                                        data-v-8554daca>
                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/public"
                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=1280,sharpen=1 1280w"
                                            alt="mastercard" loading="lazy" fetchpriority="low" data-v-8554daca>
                                    </div>
                                    <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82
                                        data-v-8554daca>
                                        <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6965d89-aff5-429c-181d-cea1b127a200/public"
                                            srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6965d89-aff5-429c-181d-cea1b127a200/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6965d89-aff5-429c-181d-cea1b127a200/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6965d89-aff5-429c-181d-cea1b127a200/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6965d89-aff5-429c-181d-cea1b127a200/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6965d89-aff5-429c-181d-cea1b127a200/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/a6965d89-aff5-429c-181d-cea1b127a200/w=1280,sharpen=1 1280w"
                                            alt="paypal" loading="lazy" fetchpriority="low" data-v-8554daca>
                                    </div>
                                    <!--]-->
                                    <a href="/in/payment-methods" class="h-payment-methods__more-btn"
                                        data-click-id="hgr-footer-payment_methods-more_button" data-v-9aeb7889>and
                                        more</a>
                                </div>
                                <!---->
                            </div>
                            <div class="hw-footer__copyright" data-v-814ce015>
                                <div class="hw-footer__copyright--text h-t-body-2" data-v-814ce015>© 2026 Saastify – Launch, grow, and succeed online, supported by modern cloud software & tools.</div>
                                <p class="hw-footer__copyright--text h-t-body-2" data-v-814ce015>Prices are listed
                                    without GST
                                    <!---->
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div class="h-cookie-consent-wrapper theme-base theme-hWebsites mode-light">
                <div class="h-cookie-consent" data-rewriter="cookie-banner" data-qa="cookie-banner"
                    style="display:none;" data-v-d082a44a>
                    <div class="h-cookie-consent__wrapper" data-v-d082a44a>
                        <h3 class="h-typography h-t-heading-3 h-cookie-consent__title" style="" data-v-254de8eb
                            data-v-d082a44a>
                            <!--[-->
                            We care about your privacy
                            <!--]-->
                        </h3>
                        <p class="h-typography h-t-body-2 h-cookie-consent__description" style="" data-v-254de8eb
                            data-v-d082a44a>
                            <!--[-->
                            <span data-v-d082a44a>
                                This website uses cookies that are needed for the site to work properly and to get data
                                on how you interact with it, as well as for marketing purposes. By accepting, you agree
                                to store cookies on your device for ad targeting, personalization, and analytics as
                                described in our <a href='/in/legal/cookie-policy' target='_blank'>Cookie policy</a>
                                .
                            </span>
                            <!--]-->
                        </p>
                        <div class="h-cookie-consent__main-btn-wrapper" data-v-d082a44a>
                            <button class="h-button-v2 h-button-v2 h-button-v2--contain-primary h-button-v2--loading"
                                style="" disabled aria-expanded="false"
                                data-click-id="hgr-cookie_consent-accept_all_btn" data-qa="cookie-banner-accept-button"
                                data-v-dbdcf57d data-v-d082a44a>
                                <!--[-->
                                <!---->
                                <!--]-->
                                <div class="h-button-v2__loader" data-v-dbdcf57d>
                                    <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading"
                                        style="--h-circle-loader-color:var(--h-circle-loader-color-primary);--h-circle-loader-border-color:var(--h-circle-loader-border-color-primary);"
                                        aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                        <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                    </div>
                                </div>
                                <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb
                                    data-v-dbdcf57d>
                                    <!--[-->
                                    <!--[-->
                                    Accept all
                                    <!--]-->
                                    <!--]-->
                                </span>
                                <!--[-->
                                <!---->
                                <!--]-->
                            </button>
                            <button class="h-button-v2 h-button-v2 h-button-v2--outline-primary h-button-v2--loading"
                                style="" disabled aria-expanded="false" data-click-id="hgr-cookie_consent-decline_btn"
                                data-qa="cookie-banner-decline-button" data-v-dbdcf57d data-v-d082a44a>
                                <!--[-->
                                <!---->
                                <!--]-->
                                <div class="h-button-v2__loader" data-v-dbdcf57d>
                                    <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading"
                                        style="--h-circle-loader-color:var(--h-circle-loader-color-primary);--h-circle-loader-border-color:var(--h-circle-loader-border-color-primary);"
                                        aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                        <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                    </div>
                                </div>
                                <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb
                                    data-v-dbdcf57d>
                                    <!--[-->
                                    <!--[-->
                                    Reject all
                                    <!--]-->
                                    <!--]-->
                                </span>
                                <!--[-->
                                <!---->
                                <!--]-->
                            </button>
                            <button class="h-button-v2 h-button-v2 h-button-v2--text-primary h-button-v2--loading"
                                style="" disabled aria-expanded="false" data-click-id="hgr-cookie_consent-settings_btn"
                                data-qa="cookie-banner-settings-button" data-v-dbdcf57d data-v-d082a44a>
                                <!--[-->
                                <!---->
                                <!--]-->
                                <div class="h-button-v2__loader" data-v-dbdcf57d>
                                    <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading"
                                        style="--h-circle-loader-color:var(--h-circle-loader-color-primary);--h-circle-loader-border-color:var(--h-circle-loader-border-color-primary);"
                                        aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                        <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                    </div>
                                </div>
                                <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb
                                    data-v-dbdcf57d>
                                    <!--[-->
                                    <!--[-->
                                    Cookie settings
                                    <!--]-->
                                    <!--]-->
                                </span>
                                <!--[-->
                                <!---->
                                <!--]-->
                            </button>
                        </div>
                    </div>
                    <!---->
                </div>
            </div>
            <span></span>
            <div id="turnstile-container"></div>
        </div>
    </div>
    <div id="teleports"></div>
    <script>
        window.__NUXT__ = {};
        window.__NUXT__.config = {
            public: {
                isLocalHmr: false,
                "nuxt-scripts": {
                    version: "",
                    defaultScriptOptions: {
                        trigger: "onNuxtReady"
                    }
                },
                scripts: {
                    googleTagManager: {
                        id: "GTM-KL4FQVG"
                    }
                },
                i18n: {
                    baseUrl: "",
                    defaultLocale: "in",
                    rootRedirect: "",
                    redirectStatusCode: 302,
                    skipSettingLocaleOnNavigate: false,
                    locales: [{
                        code: "in",
                        language: "en-IN"
                    }],
                    detectBrowserLanguage: {
                        alwaysRedirect: false,
                        cookieCrossOrigin: false,
                        cookieDomain: "",
                        cookieKey: "i18n_redirected",
                        cookieSecure: false,
                        fallbackLocale: "",
                        redirectOn: "root",
                        useCookie: true
                    },
                    experimental: {
                        localeDetector: "",
                        typedPages: true,
                        typedOptionsAndMessages: false,
                        alternateLinkCanonicalQueries: true,
                        devCache: false,
                        cacheLifetime: "",
                        stripMessagesPayload: false,
                        preload: false,
                        strictSeo: false,
                        nitroContextDetection: true,
                        httpCacheDuration: 10,
                        compactRoutes: false,
                        prerenderMessages: false
                    },
                    domainLocales: {
                        in: {
                            domain: ""
                        }
                    }
                }
            },
            app: {
                baseURL: "/",
                buildId: "c7e298d0-c431-4fb3-ad72-4d297ba34372",
                buildAssetsDir: "/in/_nuxt/",
                cdnURL: ""
            }
        }
    </script>
    <script
        src="https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?version=4.8.0&features=Object.hasOwn%2CArray.prototype.at"
        defer></script>

    <!-- Interactive Enhancements for About Page -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Navigation Dropdowns
            const navButtons = document.querySelectorAll('.navigation-section__menu-item--expandable');
            navButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = btn.nextElementSibling;
                    if (dropdown && dropdown.classList.contains('navigation-menu-redesign')) {
                        const isVisible = dropdown.style.display === 'block';
                        document.querySelectorAll('.navigation-menu-redesign').forEach(d => d.style.display = 'none');
                        dropdown.style.display = isVisible ? 'none' : 'block';
                    }
                });
            });
            document.addEventListener('click', () => {
                document.querySelectorAll('.navigation-menu-redesign').forEach(d => d.style.display = 'none');
            });

            // 2. Mobile Menu Toggle
            const mobileToggleBtn = document.querySelector('[data-qa="navigation-mobile-menu-button"], .navigation-section__mobile-menu-burger, .navigation-section__mobile');
            const mobileMenuWrapper = document.querySelector('.navigation-section__mobile-menu-wrapper');
            if (mobileToggleBtn && mobileMenuWrapper) {
                mobileToggleBtn.addEventListener('click', () => {
                    const isOpen = mobileMenuWrapper.style.display === 'flex';
                    mobileMenuWrapper.style.display = isOpen ? 'none' : 'flex';
                });
            }

            // 3. Smooth Anchor Scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId !== '#') {
                        const targetElem = document.querySelector(targetId);
                        if (targetElem) {
                            e.preventDefault();
                            targetElem.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
        });
    </script>

</body>

</html>
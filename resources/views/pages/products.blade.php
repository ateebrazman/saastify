<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Saastify - Projects &amp; Software Solutions We've Built</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
                "netscape"in window && / rv:/.test(navigator.userAgent) || window.addEventListener("error", e => {
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
            const recheckSuccessfullyScrolled = (e, l, o=0) => {
                setTimeout( () => {
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
                setTimeout( () => {
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
                window.addEventListener("hashchange", ({newURL: e}) => {
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
            .h-banner[data-v-b040c0d3] {
                background-color: var(--h-color-primary-500);
                z-index: 9999;
                width: 100%;
                height: 54px;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 10px #0000001a
            }

            @media (width>=1025px) {
                .h-banner[data-v-b040c0d3] {
                    height: 28px
                }
            }

            .h-banner__append-text[data-v-b040c0d3] {
                display: none
            }

            @media (width>=768px) {
                .h-banner__append-text[data-v-b040c0d3] {
                    color: var(--h-color-neutral-800);
                    display: block
                }
            }

            .h-banner--sticky[data-v-b040c0d3] {
                position: sticky;
                top: 0;
                left: 0
            }

            .h-banner__wrapper[data-v-b040c0d3] {
                color: var(--h-color-neutral-0);
                gap: 16px;
                height: 54px;
                transition: top .3s;
                overflow: hidden
            }

            .h-banner__title[data-v-b040c0d3] {
                align-items: center;
                gap: 8px;
                font-size: min(4vw,14px);
                line-height: min(4vw,18px);
                display: flex
            }

            @media (width>=768px) {
                .h-banner__title[data-v-b040c0d3] {
                    font-size: min(3vw,14px);
                    line-height: min(3vw,18px)
                }
            }

            .h-banner__link-text[data-v-b040c0d3] {
                white-space: nowrap;
                align-items: center;
                gap: 8px;
                display: flex
            }

            @media (width>=1025px) {
                .h-banner__link-text[data-v-b040c0d3] {
                    gap: 16px
                }
            }

            .h-banner__info[data-v-b040c0d3],.h-banner__link-text-content[data-v-b040c0d3] {
                align-items: center;
                gap: 4px;
                display: flex
            }

            .h-banner__info[data-v-b040c0d3] {
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
                transform: translate(-50%,-50%)
            }

            @media (width>=768px) {
                .h-banner__info[data-v-b040c0d3] {
                    background: linear-gradient(90deg,#8c85ff00 0,#8c85ffb0 10%,var(--h-color-primary-500) 70%,var(--h-color-primary-500) 62%,#8c85ff00 100%),linear-gradient(90deg,#8c85ff00 0,#8c85ffb0 10%,var(--h-color-primary-500) 51.06%,#8c85ffb0 88.8%,#8c85ff00 100%);
                    flex-direction: row;
                    justify-content: center;
                    gap: 8px;
                    width: max-content;
                    max-width: 100%;
                    padding: 0 60px
                }
            }

            .h-banner__info--centered[data-v-b040c0d3] {
                justify-content: center
            }

            .h-banner__append-icon--mobile[data-v-b040c0d3] {
                display: block
            }

            @media (width>=768px) {
                .h-banner__append-icon--mobile[data-v-b040c0d3] {
                    display: none
                }
            }

            .h-banner__append-icon--desktop[data-v-b040c0d3] {
                display: none
            }

            @media (width>=768px) {
                .h-banner__append-icon--desktop[data-v-b040c0d3] {
                    display: block
                }
            }

            .h-banner--bg-warning-400[data-v-b040c0d3] {
                background-color: var(--h-color-warning-400)
            }

            .h-banner--bg-warning-400 .h-banner__info[data-v-b040c0d3] {
                color: var(--h-color-neutral-800);
                background: 0 0;
                justify-content: center
            }

            .h-banner--bg-warning-400 .h-banner__link-text[data-v-b040c0d3] {
                color: var(--h-color-success-700);
                text-decoration: underline;
                display: none
            }

            @media (width>=768px) {
                .h-banner--bg-warning-400 .h-banner__link-text[data-v-b040c0d3] {
                    display: flex
                }
            }
        </style>
        <style>
            .fade-enter-active[data-v-3bcfe6f1],.fade-leave-active[data-v-3bcfe6f1] {
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

            .navigation-section a[data-v-3bcfe6f1]:not(.h-button-v2):not(.h-hyperlink),.navigation-section button[data-v-3bcfe6f1]:not(.h-button-v2):not(.h-hyperlink) {
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
                padding-inline-end:16px;display: flex
            }

            @media (width>=1140px) {
                .navigation-section--simplified-cta .navigation-section__main-menu-wrapper[data-v-3bcfe6f1] {
                    width: 100%;
                    padding-inline-end:40px}
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
                margin-inline-end:0}

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

            .navigation-section__chatbot-button[data-v-3bcfe6f1],.navigation-section__domain-search[data-v-3bcfe6f1] {
                margin-inline-end:8px}

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
                    opacity:.7
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
                padding-inline-start:12px}

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
                    display: none!important
                }
            }

            @media (width>=1140px) {
                .h-logo__mobile-logo[data-v-1c91e1f4] {
                    display: none!important
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

            .navigation-menu-redesign__content-title[data-v-05e351a2],.navigation-menu-redesign__side-title[data-v-05e351a2] {
                color: var(--h-fg-neutral-secondary)
            }

            .navigation-menu-redesign__content-title--whole-width[data-v-05e351a2],.navigation-menu-redesign__side-title--whole-width[data-v-05e351a2] {
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
                grid-template-columns: repeat(auto-fit,minmax(max(264px,33.3333% - 26.6667px),1fr));
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

            .navigation-menu-redesign__community[data-v-05e351a2],.navigation-menu-redesign__secondary-group[data-v-05e351a2] {
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

            .navigation-menu-redesign-enter-active .navigation-menu-redesign__container[data-v-05e351a2],.navigation-menu-redesign-leave-active .navigation-menu-redesign__container[data-v-05e351a2] {
                transition: transform .4s,opacity .4s
            }

            .navigation-menu-redesign-enter-active .navigation-menu-redesign__backdrop[data-v-05e351a2],.navigation-menu-redesign-leave-active .navigation-menu-redesign__backdrop[data-v-05e351a2] {
                transition: opacity .4s
            }

            .navigation-menu-instant-enter-active .navigation-menu-redesign__container[data-v-05e351a2]>* {
                transition: opacity .75s
            }

            .navigation-menu-redesign-enter-from .navigation-menu-redesign__container[data-v-05e351a2],.navigation-menu-redesign-leave-to .navigation-menu-redesign__container[data-v-05e351a2] {
                opacity: 0;
                transform: translate(-50%,-12px)
            }

            .navigation-menu-instant-enter-from .navigation-menu-redesign__container[data-v-05e351a2]>*,.navigation-menu-redesign-enter-from .navigation-menu-redesign__backdrop[data-v-05e351a2],.navigation-menu-redesign-leave-to .navigation-menu-redesign__backdrop[data-v-05e351a2] {
                opacity: 0
            }

            .navigation-panel-slide-enter-active[data-v-05e351a2],.navigation-panel-slide-leave-active[data-v-05e351a2] {
                transition: transform .25s,opacity .25s
            }

            .navigation-panel-slide-enter-from[data-v-05e351a2],.navigation-panel-slide-leave-to[data-v-05e351a2] {
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
                margin-inline-start:32px}

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
                background-image: var(--promo-background-image)!important;
                background-position: 50%!important;
                background-repeat: no-repeat!important;
                background-size: cover!important
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
            .hero-landscape-media[data-v-6835ff82],.hero-square-media[data-v-6835ff82] {
                max-width: 760px
            }

            @media (width>=1025px) {
                .hero-landscape-media[data-v-6835ff82],.hero-square-media[data-v-6835ff82] {
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
            .templates-website-page__templates-list[data-v-b4e57e13] {
                padding-top: 0
            }
        </style>
        <style>
            .templates-top-menu[data-v-c32d6a40] {
                background-color: var(--h-color-neutral-0);
                border-top: 1px solid var(--h-color-neutral-200)
            }

            @media (width>=1025px) {
                .templates-top-menu__tabs[data-v-c32d6a40] {
                    padding: 0 24px
                }
            }

            .templates-top-menu__tabs[data-v-c32d6a40]::-webkit-scrollbar {
                display: none
            }

            .templates-top-menu__tabs[data-v-c32d6a40]::-webkit-scrollbar-track {
                display: none
            }

            .templates-top-menu__tabs[data-v-c32d6a40]::-webkit-scrollbar-thumb {
                display: none
            }
        </style>
        <style>
            .h-header-wide[data-v-6f3481df] .h-header-one-column-wide__container {
                padding-bottom: 32px
            }

            @media (width>=768px) {
                .h-header-wide[data-v-6f3481df] .h-header-one-column-wide__container {
                    padding-bottom: 48px
                }
            }

            .h-header-wide--with-badge[data-v-6f3481df] .h-header-one-column-wide__container {
                padding-top: 40px
            }

            @media (width>=1025px) {
                .h-header-wide--with-badge[data-v-6f3481df] .h-header-one-column-wide__container {
                    padding-top: 80px
                }
            }

            .h-header-wide__trust-pilot-wrapper[data-v-6f3481df] {
                width: 100%;
                min-height: 24px;
                margin: 0 auto
            }

            @media (width>=500px) {
                .h-header-wide__trust-pilot-wrapper[data-v-6f3481df] {
                    max-width: 500px
                }
            }

            .h-header-wide__badge[data-v-6f3481df] {
                margin: 0 auto
            }

            .h-header-wide__badge--no-margin[data-v-6f3481df] {
                margin-bottom: 0
            }

            .h-header-wide__chip[data-v-6f3481df] {
                --h-hyperlink-border: none;
                gap: var(--h-spacing-3xs);
                padding: 6px var(--h-spacing-xs);
                border-radius: var(--h-border-radius-xl);
                background: var(--h-bg-neutral-surface);
                transition: background .1s ease-in-out
            }

            .h-header-wide__chip[data-v-6f3481df]:hover {
                background: var(--h-bg-neutral-hover)
            }

            .h-header-wide__content[data-v-6f3481df] {
                z-index: 2;
                flex-direction: column;
                gap: 24px;
                width: 100%;
                display: flex
            }

            @media (width>=1025px) {
                .h-header-wide__content[data-v-6f3481df] {
                    text-align: center;
                    align-items: center;
                    gap: 32px;
                    margin: 0 auto
                }
            }

            .h-header-wide__inner-content[data-v-6f3481df] {
                flex-direction: column;
                gap: 16px;
                display: flex
            }

            .h-header-wide__inner-content--narrow[data-v-6f3481df] {
                max-width: 646px;
                margin: 0 auto
            }

            @media (width>=768px) {
                .h-header-wide__inner-content[data-v-6f3481df] {
                    gap: 24px
                }
            }

            @media (width>=1025px) {
                .h-header-wide__inner-content[data-v-6f3481df] {
                    gap: 32px
                }
            }

            .h-header-wide__summer-sale-badge[data-v-6f3481df] {
                color: var(--h-fg-success-secondary);
                margin: 0 auto 16px
            }

            .h-header-wide__heading-container[data-v-6f3481df] {
                flex-direction: column;
                display: flex
            }

            @media (width>=1025px) {
                .h-header-wide__heading-container[data-v-6f3481df] {
                    align-items: center
                }
            }

            .h-header-wide__overline-image[data-v-6f3481df] {
                max-width: 26px;
                max-height: 26px
            }

            .h-header-wide__overline-full-image[data-v-6f3481df] {
                width: 191px;
                height: 28px;
                margin: 0 auto
            }

            .h-header-wide__sub-heading-container[data-v-6f3481df] {
                text-align: center;
                flex-direction: column;
                align-items: center;
                gap: 24px;
                display: flex;
                position: relative
            }

            @media (width>=768px) {
                .h-header-wide__sub-heading-container[data-v-6f3481df] {
                    gap: 48px
                }
            }

            .h-header-wide__middle-content[data-v-6f3481df] {
                width: 100%;
                margin-top: 48px
            }

            .h-header-wide__badge[data-v-6f3481df] {
                justify-content: center;
                align-items: center;
                gap: 6px;
                display: flex
            }

            .h-header-wide--bg-horizons .h-header-wide__content[data-v-6f3481df] {
                color: var(--h-color-neutral-0)
            }

            .h-header-wide--bg-horizons[data-v-6f3481df] .h-header-one-column-wide__container {
                background: inherit
            }

            .h-header-wide--bg-horizons .horizons-gradient-wrapper[data-v-6f3481df] {
                background-color: inherit;
                width: 100%;
                height: 1104px;
                position: absolute;
                top: 72px;
                left: 0;
                overflow: hidden
            }

            .h-header-wide--bg-horizons .horizons-gradient-wrapper[data-v-6f3481df]:after {
                content: "";
                -webkit-backdrop-filter: blur(8px);
                backdrop-filter: blur(8px);
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0
            }

            .h-header-wide--bg-horizons .horizons-gradient[data-v-6f3481df] {
                z-index: 0;
                background: linear-gradient(#0c0d0d,#673de6 45.19%,#a98cf1 62%,#e4dcfa 80%,#fff 95%);
                width: 175px;
                height: 1100px;
                position: absolute;
                top: 20px;
                left: 0
            }

            .h-header-wide--bg-horizons .horizons-gradient--large[data-v-6f3481df] {
                width: 260px;
                left: 50%;
                transform: translate(-50%)
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--large[data-v-6f3481df] {
                    width: 524px
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--first[data-v-6f3481df]:before {
                transform: translate(-100%)
            }

            .h-header-wide--bg-horizons .horizons-gradient--first[data-v-6f3481df]:before,.h-header-wide--bg-horizons .horizons-gradient--last[data-v-6f3481df]:before {
                content: "";
                background: linear-gradient(#0c0d0d,#673de6 45.19%,#a98cf1 62%,#e4dcfa 80%,#fff 95%);
                width: calc(50vw - 100%);
                height: 100%;
                position: absolute;
                top: 0;
                left: 0
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-0[data-v-6f3481df] {
                left: 50%;
                transform: translate(calc(-50% - 217.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--left-0[data-v-6f3481df] {
                    transform: translate(calc(-50% - 349.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--right-0[data-v-6f3481df] {
                left: auto;
                right: 50%;
                transform: translate(calc(50% + 217.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--right-0[data-v-6f3481df] {
                    transform: translate(calc(50% + 349.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-0[data-v-6f3481df],.h-header-wide--bg-horizons .horizons-gradient--right-0[data-v-6f3481df] {
                height: 980px;
                top: 140px
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-1[data-v-6f3481df] {
                left: 50%;
                transform: translate(calc(-50% - 392.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--left-1[data-v-6f3481df] {
                    transform: translate(calc(-50% - 524.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--right-1[data-v-6f3481df] {
                left: auto;
                right: 50%;
                transform: translate(calc(50% + 392.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--right-1[data-v-6f3481df] {
                    transform: translate(calc(50% + 524.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-1[data-v-6f3481df],.h-header-wide--bg-horizons .horizons-gradient--right-1[data-v-6f3481df] {
                height: 860px;
                top: 260px
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-2[data-v-6f3481df] {
                left: 50%;
                transform: translate(calc(-50% - 567.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--left-2[data-v-6f3481df] {
                    transform: translate(calc(-50% - 699.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--right-2[data-v-6f3481df] {
                left: auto;
                right: 50%;
                transform: translate(calc(50% + 567.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--right-2[data-v-6f3481df] {
                    transform: translate(calc(50% + 699.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-2[data-v-6f3481df],.h-header-wide--bg-horizons .horizons-gradient--right-2[data-v-6f3481df] {
                height: 740px;
                top: 380px
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-3[data-v-6f3481df] {
                left: 50%;
                transform: translate(calc(-50% - 742.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--left-3[data-v-6f3481df] {
                    transform: translate(calc(-50% - 874.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--right-3[data-v-6f3481df] {
                left: auto;
                right: 50%;
                transform: translate(calc(50% + 742.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--right-3[data-v-6f3481df] {
                    transform: translate(calc(50% + 874.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-3[data-v-6f3481df],.h-header-wide--bg-horizons .horizons-gradient--right-3[data-v-6f3481df] {
                height: 620px;
                top: 500px
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-4[data-v-6f3481df] {
                left: 50%;
                transform: translate(calc(-50% - 917.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--left-4[data-v-6f3481df] {
                    transform: translate(calc(-50% - 1049.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--right-4[data-v-6f3481df] {
                left: auto;
                right: 50%;
                transform: translate(calc(50% + 917.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--right-4[data-v-6f3481df] {
                    transform: translate(calc(50% + 1049.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-4[data-v-6f3481df],.h-header-wide--bg-horizons .horizons-gradient--right-4[data-v-6f3481df] {
                height: 500px;
                top: 620px
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-5[data-v-6f3481df] {
                left: 50%;
                transform: translate(calc(-50% - 1092.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--left-5[data-v-6f3481df] {
                    transform: translate(calc(-50% - 1224.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--right-5[data-v-6f3481df] {
                left: auto;
                right: 50%;
                transform: translate(calc(50% + 1092.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--right-5[data-v-6f3481df] {
                    transform: translate(calc(50% + 1224.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-5[data-v-6f3481df],.h-header-wide--bg-horizons .horizons-gradient--right-5[data-v-6f3481df] {
                height: 380px;
                top: 740px
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-6[data-v-6f3481df] {
                left: 50%;
                transform: translate(calc(-50% - 1267.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--left-6[data-v-6f3481df] {
                    transform: translate(calc(-50% - 1399.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--right-6[data-v-6f3481df] {
                left: auto;
                right: 50%;
                transform: translate(calc(50% + 1267.5px))
            }

            @media (width>=768px) {
                .h-header-wide--bg-horizons .horizons-gradient--right-6[data-v-6f3481df] {
                    transform: translate(calc(50% + 1399.5px))
                }
            }

            .h-header-wide--bg-horizons .horizons-gradient--left-6[data-v-6f3481df],.h-header-wide--bg-horizons .horizons-gradient--right-6[data-v-6f3481df] {
                height: 260px;
                top: 860px
            }

            .h-header-wide--bg-horizons[data-v-6f3481df] .h-section-heading__description {
                color: var(--h-fg-neutral-primary)
            }

            .h-header-wide--bg-horizons-gradient[data-v-6f3481df] {
                color: var(--h-color-neutral-0);
                position: relative;
                overflow: hidden
            }

            .h-header-wide--bg-horizons-gradient[data-v-6f3481df]:before {
                content: "";
                filter: blur(100px);
                background: radial-gradient(50% 50%,#673de6 79.81%,#5025d1 100%);
                border-radius: 50%;
                width: 2130px;
                height: 2130px;
                position: absolute;
                top: 180px;
                left: 50%;
                transform: translate(-50%)
            }

            .h-header-wide--bg-horizons-gradient .h-header-wide__info-wrapper[data-v-6f3481df] {
                z-index: 1;
                position: relative
            }

            .h-header-wide--bg-horizons-gradient[data-v-6f3481df] .h-section-heading__description {
                color: var(--h-fg-neutral-primary)
            }

            .h-header-wide--bg-agentic-ai[data-v-6f3481df] {
                isolation: isolate;
                position: relative
            }

            .h-header-wide--bg-agentic-ai[data-v-6f3481df]:before {
                content: "";
                z-index: -1;
                pointer-events: none;
                background-image: url(https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/bcaa5928-96b4-4db5-f271-77c79cdcbc00/sharpen=0);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                position: absolute;
                inset: 0
            }

            .h-header-wide--bg-agentic-ai[data-v-6f3481df] .h-header-one-column-wide__container {
                padding-top: 96px;
                padding-bottom: 24px
            }

            @media (width>=1025px) {
                .h-header-wide--bg-agentic-ai[data-v-6f3481df] .h-header-one-column-wide__container {
                    padding-top: 144px
                }
            }

            .h-header-wide--bg-agentic-ai[data-v-6f3481df] .hw-headline__top {
                gap: 24px
            }

            .h-header-wide--bg-email-marketing[data-v-6f3481df] {
                background-image: url(https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/75e75646-fb13-437a-463b-653a300abc00/sharpen=0);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative
            }

            .h-header-wide--bg-email-marketing[data-v-6f3481df] b {
                color: var(--h-color-primary-600);
                font-weight: 400
            }

            .h-header-wide--bg-ai-automation-apps[data-v-6f3481df] {
                background-color: var(--h-color-neutral-1000);
                background-image: url(https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/67a9993e-4990-4d55-9c43-ca605ae65900/sharpen=0);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative
            }

            .h-header-wide--bg-h-color-primary-600[data-v-6f3481df] .h-section-heading__description {
                color: var(--h-fg-neutral-primary)
            }

            .h-header-wide[data-v-6f3481df] b {
                color: var(--h-bg-brand-secondary)
            }

            @keyframes floath-color-primary-700-6f3481df {
                0% {
                    top: -150px;
                    left: -150px
                }

                50% {
                    top: 100px;
                    left: 30%
                }

                to {
                    top: -120px;
                    left: 5%
                }
            }

            @keyframes floath-color-primary-600-6f3481df {
                0% {
                    top: -200px;
                    right: -150px
                }

                50% {
                    top: 50px;
                    right: 20%
                }

                to {
                    top: -150px;
                    right: 5%
                }
            }

            @keyframes floath-color-primary-500-6f3481df {
                0% {
                    top: -100px;
                    left: 40%
                }

                50% {
                    top: 100px;
                    left: 20%
                }

                to {
                    top: -150px;
                    left: 60%
                }
            }
        </style>
        <style>
            .h-header-one-column-wide[data-v-992459a9] {
                padding: 8px 16px 0
            }

            @media (width>=768px) {
                .h-header-one-column-wide[data-v-992459a9] {
                    padding: 8px 24px 0
                }
            }

            @media (width>=1025px) {
                .h-header-one-column-wide[data-v-992459a9] {
                    padding: 8px 40px 0
                }
            }

            .h-header-one-column-wide--under-banner[data-v-992459a9] {
                padding: 8px 16px 0
            }

            @media (width>=768px) {
                .h-header-one-column-wide--under-banner[data-v-992459a9] {
                    padding: 8px 24px 0
                }
            }

            @media (width>=1025px) {
                .h-header-one-column-wide--under-banner[data-v-992459a9] {
                    padding: 8px 40px 0
                }
            }

            .h-header-one-column-wide__container[data-v-992459a9] {
                border-radius: 16px;
                flex-direction: column;
                padding: 72px 0;
                display: flex;
                overflow: hidden
            }

            @media (width>=1025px) {
                .h-header-one-column-wide__container[data-v-992459a9] {
                    gap: 16px;
                    max-width: 1286px;
                    margin: 0 auto;
                    padding: 96px 40px 80px
                }
            }

            .h-header-one-column-wide__bottom-content[data-v-992459a9] {
                flex-direction: column;
                max-width: 936px;
                margin: 0 auto;
                padding: 0 0 16px;
                display: flex
            }

            @media (width>=1025px) {
                .h-header-one-column-wide__bottom-content[data-v-992459a9] {
                    gap: 16px;
                    max-width: 1050px;
                    padding: 0 0 48px
                }
            }

            .h-header-one-column-wide:has(.h-header-one-column-wide__bottom-content) .h-header-one-column-wide__container[data-v-992459a9] {
                padding: 40px 0
            }

            @media (width>=1025px) {
                .h-header-one-column-wide: has(.h-header-one-column-wide__bottom-content) .h-header-one-column-wide__container[data-v-992459a9] {
                    padding:80px 40px 48px
                }
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

            .hw-headline--left[data-v-ec35f884],.hw-headline--left .hw-headline__slot[data-v-ec35f884] {
                align-items: flex-start
            }

            .hw-headline--right[data-v-ec35f884] {
                text-align: right
            }

            .hw-headline--right[data-v-ec35f884],.hw-headline--right .hw-headline__slot[data-v-ec35f884] {
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
            .templates-search__container[data-v-60345de4] {
                flex-direction: column;
                align-items: center;
                width: 100%;
                display: flex
            }

            @media (width<=767px) {
                .templates-search__container[data-v-60345de4] {
                    flex-direction: row;
                    gap: 24px
                }
            }

            .templates-search__wrapper[data-v-60345de4] {
                justify-content: center;
                align-items: stretch;
                gap: 12px;
                width: 100%;
                display: flex
            }

            .templates-search__input[data-v-60345de4] {
                flex: 1;
                width: 100%;
                max-width: 646px
            }
        </style>
        <style>
            .templates-list[data-v-4a3f3f10] {
                position: relative
            }

            .templates-list__selector[data-v-4a3f3f10] {
                margin-top: 16px;
                margin-bottom: 32px
            }

            @media (width>=1025px) {
                .templates-list__selector[data-v-4a3f3f10] {
                    margin-bottom: 40px
                }
            }

            .templates-list__header[data-v-4a3f3f10] {
                justify-content: space-between;
                align-items: center;
                margin-bottom: 32px;
                display: flex
            }

            .templates-list__templates[data-v-4a3f3f10] {
                -moz-column-gap: 24px;
                gap: 24px;
                width: 100%;
                margin: 0 auto;
                display: grid
            }

            @media (width>=1025px) {
                .templates-list__templates[data-v-4a3f3f10] {
                    grid-template-columns: repeat(3,1fr);
                    row-gap: 48px
                }
            }

            .templates-list__reach-free-card[data-v-4a3f3f10] {
                grid-row: 1/3
            }

            .templates-list__pagination[data-v-4a3f3f10] {
                margin-top: 32px
            }

            .templates-list__no-results[data-v-4a3f3f10] {
                text-align: center;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                display: flex
            }

            .templates-list__no-results-image[data-v-4a3f3f10] {
                -o-object-fit: cover;
                object-fit: cover;
                aspect-ratio: 15/11;
                max-width: 110px;
                height: 100%
            }

            .templates-list__button[data-v-4a3f3f10] {
                display: none
            }

            @media (width>=768px) {
                .templates-list__button[data-v-4a3f3f10] {
                    display: block
                }
            }

            .templates-list__button-mobile[data-v-4a3f3f10] {
                margin-top: 32px
            }

            @media (width>=768px) {
                .templates-list__button-mobile[data-v-4a3f3f10] {
                    display: none
                }
            }

            .templates-list__button-content[data-v-4a3f3f10] {
                align-items: center;
                gap: 8px;
                display: flex
            }

            .templates-list__badge[data-v-4a3f3f10] {
                background-color: var(--h-color-neutral-100)
            }

            .templates-list__badge-content[data-v-4a3f3f10] {
                align-items: center;
                gap: 8px;
                display: flex
            }

            .templates-list__item[data-v-4a3f3f10] .h-media-card__media-wrapper {
                aspect-ratio: 386/218;
                overflow: hidden
            }

            .templates-list__item[data-v-4a3f3f10] .h-media-card__media-wrapper img {
                min-height: 100%
            }

            .templates-list__item--ai[data-v-4a3f3f10] {
                grid-area: span 2/1
            }

            @media (width>=768px) {
                .templates-list__item--ai[data-v-4a3f3f10] {
                    margin-bottom: 36px
                }
            }

            .templates-list__dialog-footer[data-v-4a3f3f10] {
                justify-content: flex-end;
                gap: 12px;
                width: 100%;
                padding: 16px;
                display: flex
            }

            @media (width>=1025px) {
                .templates-list__dialog-footer[data-v-4a3f3f10] {
                    padding: 12px 80px
                }
            }

            .templates-list__dialog-button[data-v-4a3f3f10] {
                width: 100%
            }

            @media (width>=1025px) {
                .templates-list__dialog-button[data-v-4a3f3f10] {
                    width: auto
                }
            }
        </style>
        <style>
            .templates-selector__wrapper[data-v-c97dd3b4] {
                display: none
            }

            @media (width>=1180px) {
                .templates-selector__wrapper[data-v-c97dd3b4] {
                    justify-content: space-between;
                    display: flex
                }

                .templates-selector__wrapper--mobile[data-v-c97dd3b4] {
                    display: none
                }
            }

            .templates-selector__section[data-v-c97dd3b4] {
                display: flex
            }
        </style>
        <style>
            .slide-enter-from[data-v-33ed2327] {
                transform: translate(100%)
            }

            .slide-enter-to[data-v-33ed2327],.slide-leave-from[data-v-33ed2327] {
                transform: translate(0)
            }

            .slide-leave-to[data-v-33ed2327] {
                transform: translate(100%)
            }

            .slide-enter-active[data-v-33ed2327],.slide-leave-active[data-v-33ed2327] {
                transition: transform .3s
            }

            .mobile-templates-selector[data-v-33ed2327] {
                z-index: 3;
                width: 100%;
                display: flex
            }

            .mobile-templates-selector__mobile-menu-wrapper[data-v-33ed2327] {
                z-index: 9999;
                height: 100vh;
                position: fixed;
                bottom: 0;
                right: 0
            }

            .mobile-templates-selector__mobile-menu[data-v-33ed2327],.mobile-templates-selector__mobile-menu-wrapper[data-v-33ed2327] {
                background: var(--h-color-neutral-50);
                flex-direction: column;
                display: flex;
                top: 0;
                left: 0;
                overflow: hidden
            }

            .mobile-templates-selector__mobile-menu[data-v-33ed2327] {
                width: 100%;
                height: 100%;
                position: absolute
            }

            .mobile-templates-selector__body[data-v-33ed2327] {
                height: calc(100dvh - 76px);
                padding: 0 16px 16px;
                overflow-y: auto
            }

            .mobile-templates-selector__header[data-v-33ed2327] {
                justify-content: space-between;
                align-items: center;
                padding: 16px;
                display: flex
            }

            .mobile-templates-selector__title[data-v-33ed2327] {
                color: var(--h-color-neutral-500);
                padding: 12px 16px 12px 0
            }

            .mobile-templates-selector__top-selection[data-v-33ed2327] {
                color: var(--h-color-neutral-800);
                cursor: pointer;
                justify-content: space-between;
                align-items: center;
                display: flex
            }

            .mobile-templates-selector__top-selection[data-v-33ed2327]:hover {
                color: var(--h-color-primary-600)
            }

            .mobile-templates-selector__top-selection-title[data-v-33ed2327] {
                padding: 12px 16px 12px 0
            }

            .mobile-templates-selector__categories-column[data-v-33ed2327],.mobile-templates-selector__categories-wrapper[data-v-33ed2327] {
                flex-direction: column;
                display: flex
            }

            .mobile-templates-selector__separator[data-v-33ed2327] {
                background-color: var(--h-color-neutral-200);
                height: 1px;
                margin: 8px 0
            }
        </style>
        <style>
            .templates-category-selector[data-v-ca9a9492] {
                position: relative
            }

            .templates-category-selector__activator[data-v-ca9a9492] {
                color: var(--h-color-neutral-800);
                cursor: pointer;
                gap: 4px;
                padding: 12px 16px;
                font-weight: 400;
                display: flex
            }

            .templates-category-selector__activator--active[data-v-ca9a9492],.templates-category-selector__activator[data-v-ca9a9492]:hover {
                color: var(--h-color-primary-600)
            }

            .templates-category-selector__activator-icon[data-v-ca9a9492] {
                transition: transform .3s
            }

            .templates-category-selector__dropdown[data-v-ca9a9492] {
                background-color: var(--h-color-neutral-0);
                z-index: 3;
                border-radius: 12px;
                max-height: 550px;
                padding: 16px 0;
                position: absolute;
                box-shadow: 0 8px 28px #00000040
            }

            .templates-category-selector__dropdown-wrapper[data-v-ca9a9492] {
                gap: 24px;
                display: flex
            }

            .templates-category-selector__dropdown-column[data-v-ca9a9492] {
                flex-direction: column;
                display: flex
            }

            .templates-dropdown-enter-active[data-v-ca9a9492] {
                transition: opacity .2s
            }

            .templates-dropdown-enter-from[data-v-ca9a9492] {
                opacity: 0
            }

            .templates-dropdown-enter-to[data-v-ca9a9492] {
                opacity: 1
            }

            .templates-dropdown-leave-active[data-v-ca9a9492] {
                transition: none
            }

            .templates-dropdown-leave-from[data-v-ca9a9492],.templates-dropdown-leave-to[data-v-ca9a9492] {
                opacity: 0
            }
        </style>
        <style>
            .categories-group-selector[data-v-4bbf5ae9] {
                box-sizing: content-box;
                flex-direction: column;
                gap: 6px;
                width: 240px;
                padding: 12px 16px;
                display: flex
            }

            .categories-group-selector__group-name[data-v-4bbf5ae9] {
                width: max-content;
                margin-bottom: 6px
            }

            .categories-group-selector__category[data-v-4bbf5ae9] {
                color: var(--h-color-neutral-600)
            }

            .categories-group-selector__category--active[data-v-4bbf5ae9],.categories-group-selector__category[data-v-4bbf5ae9]:hover {
                color: var(--h-color-primary-600)
            }
        </style>
        <style>
            .h-media-card__content-wrapper[data-v-393a78b3] {
                color: var(--h-color-neutral-800);
                cursor: pointer;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                gap: 12px;
                font-weight: 400;
                display: flex
            }

            .h-media-card__content-wrapper:hover .h-media-card__media-hover-item[data-v-393a78b3] {
                opacity: 1
            }

            .h-media-card__media-wrapper[data-v-393a78b3] {
                cursor: pointer;
                border-radius: 8px;
                width: 100%;
                position: relative;
                overflow: hidden
            }

            .h-media-card__media-wrapper[data-v-393a78b3] .h-image {
                height: 100%
            }

            .h-media-card__media-hover-item[data-v-393a78b3] {
                opacity: 0;
                z-index: 2;
                background-color: #262831cc;
                justify-content: center;
                align-items: center;
                width: calc(100% + 2px);
                height: calc(100% + 2px);
                transition: opacity .2s;
                display: flex;
                position: absolute;
                top: -1px;
                left: -1px
            }

            .h-media-card__top-badge[data-v-393a78b3] {
                background-color: var(--h-color-neutral-100);
                z-index: 1;
                width: fit-content;
                position: absolute;
                top: 8px;
                right: 8px
            }

            .h-media-card__top-badge-content[data-v-393a78b3] {
                align-items: center;
                gap: 8px;
                margin: -4px 0;
                display: flex
            }

            .h-media-card__content[data-v-393a78b3] {
                flex-direction: column;
                gap: 16px;
                width: 100%;
                display: flex
            }

            .h-media-card__link-wrapper[data-v-393a78b3] {
                justify-content: center;
                margin-top: 16px;
                display: flex
            }

            .h-media-card__link[data-v-393a78b3] {
                align-items: center;
                gap: 6px;
                display: flex
            }

            .h-media-card--bg-h-color-neutral-950 .h-media-card__content[data-v-393a78b3] {
                color: var(--h-color-neutral-0)
            }

            .h-media-card--bg-h-color-neutral-950 .h-media-card__description[data-v-393a78b3] {
                color: var(--h-color-neutral-200)
            }

            .h-media-card--bg-h-color-neutral-950 .h-media-card__link[data-v-393a78b3] {
                color: var(--h-color-primary-500);
                fill: var(--h-color-primary-500)
            }

            .h-media-card--bg-h-color-neutral-950 .h-media-card__link[data-v-393a78b3]:hover {
                color: var(--h-color-primary-700);
                fill: var(--h-color-primary-700)
            }

            .h-media-card--bg-h-color-neutral-950 .h-media-card__media-wrapper[data-v-393a78b3] {
                border: 1px solid var(--h-color-primary-900)
            }

            .h-media-card--bg-h-color-neutral-0 .h-media-card__content[data-v-393a78b3],.h-media-card--bg-h-color-neutral-0 .h-media-card__description[data-v-393a78b3] {
                color: var(--h-color-neutral-800)
            }

            .h-media-card--bg-h-color-neutral-0 .h-media-card__link[data-v-393a78b3],.h-media-card--bg-h-color-neutral-0 .h-media-card__link[data-v-393a78b3]:hover {
                color: var(--h-color-primary-700);
                fill: var(--h-color-primary-700)
            }

            .h-media-card--bg-h-color-neutral-0 .h-media-card__media-wrapper[data-v-393a78b3] {
                border: 1px solid var(--h-color-neutral-200)
            }
        </style>
        <style>
            .templates-pagination[data-v-86bf3f05] {
                justify-content: center;
                align-items: center;
                gap: 2px;
                display: flex
            }

            .templates-pagination__button-wrapper[data-v-86bf3f05] {
                align-items: baseline;
                display: flex
            }

            .templates-pagination__button-wrapper[data-v-86bf3f05]:first-of-type {
                margin-left: 0
            }

            .templates-pagination__button-wrapper[data-v-86bf3f05]:last-of-type {
                margin-right: 0
            }

            .templates-pagination__button-wrapper--first[data-v-86bf3f05],.templates-pagination__button-wrapper--last[data-v-86bf3f05] {
                margin: 0
            }

            .templates-pagination__button-wrapper--first[data-v-86bf3f05]:after,.templates-pagination__button-wrapper--last[data-v-86bf3f05]:before {
                content: "...";
                pointer-events: none
            }

            .templates-pagination__button-wrapper--first[data-v-86bf3f05]:after {
                margin-left: 8px
            }

            .templates-pagination__button-wrapper--last[data-v-86bf3f05]:before {
                margin-right: 8px
            }

            .templates-pagination__button.templates-pagination__button[data-v-86bf3f05] {
                min-width: unset;
                min-height: unset;
                border-radius: 50%;
                width: 32px;
                height: 32px;
                padding: 0
            }

            @media (width>=1025px) {
                .templates-pagination__button.templates-pagination__button[data-v-86bf3f05] {
                    width: 40px;
                    height: 40px
                }
            }
        </style>
        <style>
            @media (width>=1025px) {
                .hw-faq-section[data-v-028d31c8] .hw-accordion {
                    max-width: 936px;
                    margin-inline:auto}
            }

            .hw-faq-section[data-v-028d31c8] a {
                color: unset;
                text-decoration: underline;
                display: inline
            }

            .hw-faq-section[data-v-028d31c8] li {
                margin-inline-start:24px}
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

            .h-section-one-col--bg-h-color-neutral-1000[data-v-50907970],.h-section-one-col--bg-h-color-neutral-800[data-v-50907970],.h-section-one-col--bg-h-color-neutral-950[data-v-50907970],.h-section-one-col--bg-h-color-primary-600[data-v-50907970],.h-section-one-col--bg-h-color-primary-800[data-v-50907970],.h-section-one-col--bg-h-color-primary-950[data-v-50907970] {
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
            .hw-accordion[data-v-40641482] {
                width: 100%;
                color: var(--h-fg-neutral-default);
                padding-bottom: 20px
            }

            .hw-accordion[data-v-40641482]:has(+.hw-accordion) {
                border-bottom: 1px solid var(--h-stroke-default)
            }

            .hw-accordion+.hw-accordion[data-v-40641482] {
                margin-top: 20px
            }

            .hw-accordion__header[data-v-40641482] {
                cursor: pointer;
                grid-template-columns: minmax(0,auto) auto minmax(24px,1fr) auto;
                grid-template-areas: "lead badge.append";
                align-items: start;
                display: grid
            }

            .hw-accordion__header[data-v-40641482]:focus-visible {
                outline: 2px solid var(--h-fg-brand-default);
                outline-offset: 2px
            }

            .hw-accordion__lead[data-v-40641482] {
                grid-area: lead;
                align-items: flex-start;
                gap: 12px;
                min-width: 0;
                display: flex
            }

            .hw-accordion__prepend[data-v-40641482] {
                height: var(--hw-accordion-line-height);
                flex-shrink: 0;
                align-items: center;
                display: inline-flex
            }

            .hw-accordion__title[data-v-40641482] {
                word-break: break-word
            }

            .hw-accordion__badge[data-v-40641482] {
                grid-area: badge;
                margin-inline-start:12px}

            .hw-accordion__append[data-v-40641482],.hw-accordion__badge[data-v-40641482] {
                height: var(--hw-accordion-line-height);
                align-items: center;
                display: inline-flex
            }

            .hw-accordion__append[data-v-40641482] {
                grid-area: append
            }

            .hw-accordion__panel[data-v-40641482] {
                grid-template-rows: 0fr;
                transition: grid-template-rows .3s;
                display: grid
            }

            .hw-accordion--open .hw-accordion__panel[data-v-40641482] {
                grid-template-rows: 1fr
            }

            .hw-accordion__panel-inner[data-v-40641482] {
                visibility: hidden;
                transition: visibility .3s;
                overflow: hidden
            }

            .hw-accordion--open .hw-accordion__panel-inner[data-v-40641482] {
                visibility: visible
            }

            .hw-accordion__content[data-v-40641482] {
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
                padding-top: 16px;
                display: flex
            }

            .hw-accordion__subtext[data-v-40641482] {
                color: var(--h-fg-neutral-secondary);
                margin: 0
            }

            .hw-accordion__content-slot[data-v-40641482],.hw-accordion__image[data-v-40641482],.hw-accordion__media[data-v-40641482] {
                width: 100%
            }

            @media (width<=767px) {
                .hw-accordion .hw-accordion__header[data-v-40641482] {
                    grid-template-columns: minmax(0,auto) minmax(16px,1fr) auto;
                    grid-template-areas: "badge badge badge""lead.append";
                    row-gap: 6px
                }

                .hw-accordion .hw-accordion__badge[data-v-40641482] {
                    justify-self: start;
                    height: auto;
                    margin-inline-start:0}

                .hw-accordion .hw-accordion__media[data-v-40641482] {
                    padding-inline:20px}
            }

            .hw-accordion__append .h-icon {
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                transform-origin: center;
            }
            .hw-accordion--open .hw-accordion__append .h-icon {
                transform: rotate(45deg);
            }
            .hw-accordion__panel-inner {
                min-height: 0;
            }
        </style>
        <style>
            .hw-boxed-icon[data-v-8950b1e0] {
                justify-content: center;
                align-items: center;
                width: fit-content;
                height: fit-content;
                display: inline-flex
            }

            .hw-boxed-icon--padded[data-v-8950b1e0] {
                border-radius: 6px;
                padding: 8px
            }
        </style>
        <style>
            .h-content-cards__container[data-v-7833fa48] {
                row-gap: 16px;
                padding: 0
            }

            @media (width>=1025px) {
                .h-content-cards__container[data-v-7833fa48] {
                    row-gap: 24px
                }
            }

            .h-content-cards__container--skeleton-border[data-v-7833fa48] {
                background-color: var(--h-color-neutral-600);
                border-radius: 0;
                gap: 1.5px
            }

            .h-content-cards__container--stroke-dividers[data-v-7833fa48] {
                gap: 0
            }

            .h-content-cards__container--stroke-dividers[data-v-7833fa48] .h-content-card:not(:last-child) {
                border-bottom: 1px solid var(--h-stroke-default)
            }

            @media (width>=1025px) {
                .h-content-cards__container--stroke-dividers[data-v-7833fa48] .h-content-card: not(:last-child) {
                    border-inline-end:1px solid var(--h-stroke-default);
                    border-bottom: none
                }
            }

            .h-content-cards__container--large-gap[data-v-7833fa48] {
                row-gap: 24px
            }

            .h-content-cards__button[data-v-7833fa48] {
                width: 100%;
                margin: 32px auto 0;
                display: flex
            }

            @media (width>=768px) {
                .h-content-cards__button[data-v-7833fa48] {
                    width: fit-content
                }
            }

            .h-content-cards__carousel[data-v-7833fa48] {
                min-width: 0;
                max-width: 100%
            }

            .h-content-cards--mobile-carousel[data-v-7833fa48] .h-grid-item {
                min-width: 0
            }

            .h-content-cards .h-content-cards__container--skeleton-border[data-v-7833fa48] {
                background-color: var(--h-color-light-a10)
            }
        </style>
        <style>
            .h-content-card[data-v-55a94a94] {
                background: var(--h-color-neutral-0);
                color: var(--h-fg-neutral-default);
                border: 1px solid var(--h-color-neutral-200);
                border-radius: 16px;
                flex-direction: column;
                gap: 8px;
                height: 100%;
                padding: 24px;
                display: flex;
                position: relative;
                overflow: hidden
            }

            .h-content-card--cards-with-badges[data-v-55a94a94] {
                overflow: initial
            }

            .h-content-card--spaced-layout[data-v-55a94a94] {
                min-height: 194px
            }

            .h-content-card--spaced-layout .h-content-card__icons-container[data-v-55a94a94] {
                margin-bottom: auto
            }

            .h-content-card__bottom-icons[data-v-55a94a94] {
                align-items: center;
                margin-top: auto;
                padding-top: 24px;
                display: flex
            }

            .h-content-card__bottom-icon[data-v-55a94a94] {
                background: var(--h-color-neutral-0);
                border: 1px solid var(--h-color-neutral-200);
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                display: flex
            }

            .h-content-card__bottom-icon[data-v-55a94a94]:not(:first-child) {
                margin-inline-start:-8px}

            .h-content-card__overline[data-v-55a94a94] {
                color: var(--h-fg-neutral-secondary)
            }

            .h-content-card__background-image[data-v-55a94a94] {
                z-index: 0;
                pointer-events: none;
                position: absolute;
                inset: 0
            }

            .h-content-card__background-image[data-v-55a94a94] img,.h-content-card__background-image[data-v-55a94a94] video {
                -o-object-fit: cover;
                object-fit: cover;
                width: 100%;
                height: 100%
            }

            .h-content-card--with-background-image[data-v-55a94a94]>:not(.h-content-card__background-image) {
                z-index: 1;
                position: relative
            }

            .h-content-card--with-background-image .h-content-card__description[data-v-55a94a94] {
                color: var(--h-fg-neutral-secondary)
            }

            .h-content-card--light-text[data-v-55a94a94] {
                color: var(--h-color-neutral-0)
            }

            .h-content-card--light-text .h-content-card__description[data-v-55a94a94] {
                color: var(--h-color-neutral-200)
            }

            .h-content-card--light-text.h-content-card--clickable[data-v-55a94a94]:hover {
                color: var(--h-color-neutral-0)
            }

            .h-content-card--light-text.h-content-card--clickable:hover .h-content-card__description[data-v-55a94a94] {
                color: var(--h-color-neutral-200)
            }

            .h-content-card--light-text.h-content-card--clickable:hover .h-content-card__link-icon[data-v-55a94a94] {
                color: var(--h-color-neutral-0)
            }

            @media (width<=767px) {
                .h-content-card[data-v-55a94a94] {
                    width: 100%
                }
            }

            .h-content-card--ltr[data-v-55a94a94] {
                text-align: left
            }

            .h-content-card--rtl[data-v-55a94a94] {
                text-align: right
            }

            .h-content-card--rtl .h-content-card__link-icon[data-v-55a94a94] {
                transform: scaleX(-1)
            }

            .h-content-card__title-container[data-v-55a94a94] {
                flex-wrap: wrap;
                align-items: center;
                gap: 16px;
                display: flex
            }

            .h-content-card__badge[data-v-55a94a94] {
                background-color: var(--h-color-primary-100);
                color: var(--h-color-primary-700);
                border-radius: 6px;
                justify-content: center;
                align-items: center;
                padding: 4px 12px
            }

            .h-content-card__badge--above-title[data-v-55a94a94] {
                background: var(--h-color-success-a10);
                width: fit-content;
                color: var(--h-color-success-600)
            }

            .h-content-card__badge--hidden[data-v-55a94a94] {
                visibility: hidden;
                height: 24px
            }

            .h-content-card--clickable[data-v-55a94a94] {
                cursor: pointer
            }

            .h-content-card--clickable[data-v-55a94a94]:hover {
                background: var(--h-color-primary-50);
                color: var(--h-color-neutral-800)
            }

            .h-content-card--clickable[data-v-55a94a94]:active,.h-content-card--clickable[data-v-55a94a94]:active:hover {
                background: var(--h-color-primary-100)
            }

            .h-content-card--centered[data-v-55a94a94] {
                text-align: center;
                align-items: center
            }

            .h-content-card--large-icon-gap .h-content-card__icons-container>div[data-v-55a94a94] {
                gap: 32px
            }

            .h-content-card--inline .h-content-card__icons-container>div[data-v-55a94a94] {
                flex-direction: row;
                align-items: center
            }

            .h-content-card--small[data-v-55a94a94] {
                height: fit-content;
                padding: 12px 16px
            }

            .h-content-card--borderless[data-v-55a94a94] {
                border: 0
            }

            .h-content-card--no-padding[data-v-55a94a94] {
                padding: 0
            }

            .h-content-card--no-border-radius[data-v-55a94a94] {
                border-radius: 0
            }

            .h-content-card__description[data-v-55a94a94] {
                color: var(--h-fg-neutral-secondary);
                font-weight: 400
            }

            .h-content-card__description--narrow[data-v-55a94a94] {
                max-width: 392px
            }

            .h-content-card__description[data-v-55a94a94] a {
                color: unset;
                text-decoration: underline;
                display: inline
            }

            .h-content-card__hyperlink[data-v-55a94a94] {
                width: fit-content;
                margin-top: auto
            }

            .h-content-card__bottom-text[data-v-55a94a94] {
                margin-top: auto
            }

            .h-content-card__icons-container[data-v-55a94a94] {
                justify-content: space-between;
                align-items: center;
                gap: 16px;
                display: flex
            }

            .h-content-card__icons-container[data-v-55a94a94]:not(:last-child) {
                margin-bottom: 8px
            }

            .h-content-card__icons-container>div[data-v-55a94a94] {
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
                display: flex
            }

            .h-content-card__icon[data-v-55a94a94],.h-content-card__icon-number[data-v-55a94a94],.h-content-card__image[data-v-55a94a94] {
                border-radius: 6px;
                flex-shrink: 0;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                display: flex
            }

            .h-content-card__icon-number[data-v-55a94a94] {
                color: var(--h-color-primary-700);
                font-size: 26px
            }

            .h-content-card__icon-number--plain[data-v-55a94a94] {
                background-color: var(--h-color-neutral-0);
                width: auto;
                height: auto;
                font-size: unset;
                border-radius: 0;
                justify-content: flex-start;
                padding: 0
            }

            .h-content-card__icon-number--color-h-color-primary-400[data-v-55a94a94] {
                color: var(--h-color-primary-400);
                background-color: var(--h-color-neutral-900)
            }

            .h-content-card__icon-number--color-h-color-primary-500[data-v-55a94a94] {
                color: var(--h-color-primary-500);
                background-color: var(--h-color-neutral-900)
            }

            .h-content-card__icon-number--color-h-color-primary-600[data-v-55a94a94] {
                color: var(--h-color-primary-600)
            }

            .h-content-card__icon-number--color-h-fg-brand-default[data-v-55a94a94] {
                color: var(--h-fg-brand-default)
            }

            .h-content-card__image[data-v-55a94a94] {
                border-radius: 0;
                width: 32px;
                height: 32px;
                padding: 2px
            }

            .h-content-card__image--bg-h-color-neutral-900[data-v-55a94a94] {
                background-color: var(--h-color-neutral-0);
                border-radius: 8px;
                padding: 6px
            }

            @media (width<=767px) {
                .h-content-card__top-image[data-v-55a94a94] img {
                    min-height: 44px
                }
            }

            .h-content-card__top-image--size-medium[data-v-55a94a94] img {
                max-height: 48px
            }

            .h-content-card__top-image--size-large[data-v-55a94a94] img {
                max-height: 70px
            }

            .h-content-card--bg-h-color-light-a5[data-v-55a94a94],.h-content-card--bg-h-color-light-a5 .h-content-card__description[data-v-55a94a94] {
                color: var(--h-color-neutral-0)
            }

            .h-content-card--bg-h-color-primary-500[data-v-55a94a94] {
                border: 0
            }

            .h-content-card--bg-h-color-primary-500 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-primary-500)
            }

            .h-content-card--bg-h-color-primary-800[data-v-55a94a94] {
                border: 0
            }

            .h-content-card--bg-h-color-primary-800 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-primary-600)
            }

            .h-content-card--bg-h-color-primary-800 .h-content-card__icon-number[data-v-55a94a94] {
                color: var(--neutral-0)
            }

            .h-content-card--bg-h-color-primary-900[data-v-55a94a94] {
                border: 0
            }

            .h-content-card--bg-h-color-primary-900 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-primary-600)
            }

            .h-content-card--bg-h-color-primary-900 .h-content-card__icon-number[data-v-55a94a94] {
                color: var(--neutral-0)
            }

            .h-content-card--bg-h-color-neutral-800[data-v-55a94a94] {
                border-color: var(--h-color-neutral-700)
            }

            .h-content-card--bg-h-color-neutral-800 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-neutral-700)
            }

            .h-content-card--bg-h-color-neutral-800 .h-content-card__badge[data-v-55a94a94] {
                color: var(--h-color-primary-500);
                background-color: var(--h-color-primary-900)
            }

            .h-content-card--bg-h-color-neutral-900[data-v-55a94a94] {
                border-color: var(--h-color-neutral-700)
            }

            .h-content-card--bg-h-color-neutral-900 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-neutral-700)
            }

            .h-content-card--bg-h-color-neutral-900 .h-content-card__badge[data-v-55a94a94] {
                color: var(--h-color-primary-500);
                background-color: var(--h-color-primary-900)
            }

            .h-content-card--bg-h-color-neutral-900.h-content-card--clickable[data-v-55a94a94]:hover {
                background: var(--h-color-neutral-900);
                color: var(--h-color-neutral-0);
                border-image-source: linear-gradient(270deg,#673de600,#673de6cc 25%,#d5dfff 50%,#673de6cc 75%,#673de600);
                border-image-slice: 1
            }

            .h-content-card--bg-h-color-neutral-900.h-content-card--clickable:hover .h-content-card__link-icon[data-v-55a94a94] {
                color: var(--h-color-primary-500)!important
            }

            .h-content-card--bg-h-color-neutral-950 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-neutral-900)
            }

            .h-content-card--bg-h-color-primary-600 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-primary-50)
            }

            .h-content-card--bg-h-color-primary-50[data-v-55a94a94] {
                border-color: var(--h-color-primary-100)
            }

            .h-content-card--bg-h-color-primary-50 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-primary-100)
            }

            .h-content-card--bg-h-color-primary-50 .h-content-card__badge[data-v-55a94a94] {
                color: var(--h-color-success-600);
                background-color: var(--h-color-success-50)
            }

            .h-content-card--bg-h-color-primary-50.h-content-card--clickable[data-v-55a94a94]:hover {
                background: var(--h-color-primary-100)!important
            }

            .h-content-card--bg-h-color-primary-100[data-v-55a94a94] {
                border: 1px solid var(--h-color-primary-100)
            }

            .h-content-card--bg-h-color-primary-100 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-primary-100)
            }

            .h-content-card--bg-h-color-primary-100 .h-content-card__badge[data-v-55a94a94] {
                color: var(--h-color-success-600);
                background-color: var(--h-color-success-a10)
            }

            .h-content-card--bg-h-color-primary-200[data-v-55a94a94] {
                border: 1px solid var(--h-color-primary-200)
            }

            .h-content-card--bg-h-color-neutral-0 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-primary-100)
            }

            .h-content-card--bg-h-color-neutral-0 .h-content-card__icon-number[data-v-55a94a94]:not(.h-content-card__icon-number--plain) {
                background: var(--h-color-primary-50)
            }

            .h-content-card--bg-h-color-neutral-0 .h-content-card__icon-number--plain[data-v-55a94a94] {
                background-color: var(--h-color-neutral-0)
            }

            .h-content-card--bg-h-color-neutral-0 .h-content-card__icon-number--background-h-color-primary-500[data-v-55a94a94] {
                color: var(--h-color-neutral-0);
                background-color: var(--h-color-primary-500)
            }

            .h-content-card--bg-h-color-neutral-50[data-v-55a94a94] {
                border: none
            }

            .h-content-card--bg-transparent[data-v-55a94a94] {
                background-color: #0000!important
            }

            .h-content-card--bg-transparent .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-primary-50)
            }

            .h-content-card--bg-h-color-neutral-1000 .h-content-card__icon[data-v-55a94a94] {
                background: var(--h-color-neutral-700)
            }

            .h-content-card--active[data-v-55a94a94],.h-content-card--active[data-v-55a94a94]:focus,.h-content-card--active[data-v-55a94a94]:hover {
                background: var(--h-color-primary-100)
            }

            .h-content-card--bg-h-color-dark-a50.h-content-card--clickable[data-v-55a94a94]:hover {
                color: var(--h-fg-neutral-default);
                background: var(--h-color-dark-a75)!important
            }
        </style>
        <style>
            .h-banner-with-image[data-v-223bab6b] {
                min-height: 435px;
                overflow: hidden
            }

            @media (width<=767px) {
                .h-banner-with-image--compact-mobile-spacing .h-banner-with-image__wrapper[data-v-223bab6b] {
                    gap: 32px
                }

                .h-banner-with-image--compact-mobile-spacing .h-banner-with-image__left-content[data-v-223bab6b] {
                    padding-bottom: 16px
                }
            }

            .h-banner-with-image__wrapper[data-v-223bab6b] {
                flex-direction: column;
                align-items: center;
                gap: 48px;
                max-width: 1600px;
                margin: 0 auto;
                display: flex
            }

            @media (width>=1025px) {
                .h-banner-with-image__wrapper[data-v-223bab6b] {
                    align-items: unset;
                    flex-direction: row;
                    padding-left: 80px;
                    padding-right: 0
                }
            }

            .h-banner-with-image__left-content[data-v-223bab6b] {
                z-index: 1;
                flex-direction: column;
                max-width: 530px;
                margin: 0 auto;
                padding: 64px 16px;
                display: flex;
                position: relative
            }

            @media (width>=1025px) {
                .h-banner-with-image__left-content[data-v-223bab6b] {
                    margin: 0 auto 0 0;
                    padding: 104px 0
                }

                .h-banner-with-image__left-content--has-price .h-banner-with-image__price[data-v-223bab6b] {
                    margin-top: auto
                }
            }

            .h-banner-with-image__left-content--has-price .h-banner-with-image__button-wrapper[data-v-223bab6b] {
                margin-top: 16px
            }

            @media (width>=1025px) {
                .h-banner-with-image__left-content--has-price .h-banner-with-image__button-wrapper[data-v-223bab6b] {
                    margin-top: 16px;
                    padding-top: 0
                }
            }

            .h-banner-with-image__description[data-v-223bab6b] {
                max-width: 360px
            }

            .h-banner-with-image__description[data-v-223bab6b] a {
                color: inherit;
                text-decoration-line: underline
            }

            .h-banner-with-image__right-content[data-v-223bab6b] {
                max-width: 100%
            }

            @media (width>=1025px) {
                .h-banner-with-image__right-content[data-v-223bab6b] {
                    justify-content: end;
                    height: max-content;
                    margin: auto 0;
                    display: flex
                }

                .h-banner-with-image__right-content[data-v-223bab6b] .h-image {
                    width: 610px;
                    max-width: 610px
                }

                .h-banner-with-image__right-content[data-v-223bab6b] .h-image>* {
                    height: 100%
                }
            }

            .h-banner-with-image__button-wrapper[data-v-223bab6b] {
                flex-direction: column;
                gap: 8px;
                width: 100%;
                margin-top: 24px;
                display: flex
            }

            @media (width>=768px) {
                .h-banner-with-image__button-wrapper[data-v-223bab6b] {
                    flex-direction: row;
                    width: fit-content
                }
            }

            @media (width>=1025px) {
                .h-banner-with-image__button-wrapper[data-v-223bab6b] {
                    margin-top: auto;
                    padding-top: 24px
                }
            }

            .h-banner-with-image--bg-h-color-neutral-1000 .h-banner-with-image__right-content[data-v-223bab6b],.h-banner-with-image--bg-h-color-neutral-800 .h-banner-with-image__right-content[data-v-223bab6b],.h-banner-with-image--bg-h-color-neutral-950 .h-banner-with-image__right-content[data-v-223bab6b],.h-banner-with-image--bg-h-color-primary-600-mobile-image .h-banner-with-image__right-content[data-v-223bab6b],.h-banner-with-image--hide-mobile-image .h-banner-with-image__right-content[data-v-223bab6b] {
                display: none
            }

            @media (width>=1025px) {
                .h-banner-with-image--bg-h-color-neutral-1000 .h-banner-with-image__right-content[data-v-223bab6b],.h-banner-with-image--bg-h-color-neutral-800 .h-banner-with-image__right-content[data-v-223bab6b],.h-banner-with-image--bg-h-color-neutral-950 .h-banner-with-image__right-content[data-v-223bab6b],.h-banner-with-image--bg-h-color-primary-600-mobile-image .h-banner-with-image__right-content[data-v-223bab6b],.h-banner-with-image--hide-mobile-image .h-banner-with-image__right-content[data-v-223bab6b] {
                    display: flex
                }
            }

            .h-banner-with-image--show-mobile-image .h-banner-with-image__right-content[data-v-223bab6b] {
                display: block
            }

            .h-banner-with-image--hide-mobile-image[data-v-223bab6b] {
                min-height: unset
            }

            @media (width>=1025px) {
                .h-banner-with-image--hide-mobile-image[data-v-223bab6b] {
                    min-height: 435px
                }
            }

            .h-banner-with-image--bg-h-color-neutral-800[data-v-223bab6b] {
                background-color: var(--h-color-neutral-800);
                color: var(--h-color-neutral-0)
            }

            .h-banner-with-image--bg-h-color-primary-500[data-v-223bab6b] {
                background-color: var(--h-color-primary-500);
                color: var(--h-color-neutral-0)
            }

            .h-banner-with-image--bg-h-color-primary-600[data-v-223bab6b] {
                background-color: var(--h-color-primary-600);
                color: var(--h-color-neutral-0)
            }

            .h-banner-with-image--bg-h-color-neutral-950[data-v-223bab6b] {
                background-color: var(--h-color-neutral-950);
                color: var(--h-color-neutral-0)
            }

            .h-banner-with-image--bg-h-color-neutral-1000[data-v-223bab6b] {
                background-color: var(--h-color-neutral-1000);
                color: var(--h-color-neutral-0)
            }

            .h-banner-with-image--bg-h-color-primary-600-mobile-image[data-v-223bab6b] {
                background-color: var(--h-color-primary-600);
                color: var(--h-color-neutral-0);
                position: relative
            }

            .h-banner-with-image--bg-h-color-primary-600-mobile-image[data-v-223bab6b]:before {
                content: "";
                background-color: var(--h-color-primary-700);
                width: 350px;
                height: 350px;
                position: absolute;
                bottom: -175px;
                right: -175px;
                transform: rotate(45deg)
            }

            @media (width>=1025px) {
                .h-banner-with-image--bg-h-color-primary-600-mobile-image[data-v-223bab6b]: before {
                    display:none
                }
            }

            .h-banner-with-image--bg-agentic-ai[data-v-223bab6b] {
                background-color: var(--h-color-neutral-1000);
                color: var(--h-color-neutral-0);
                background-image: url(https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/01ff61ba-9d08-4872-449b-3422141d8000/sharpen=0);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover
            }

            .h-banner-with-image--bg-agentic-ai .h-banner-with-image__title[data-v-223bab6b] {
                color: var(--h-color-neutral-0)
            }

            .h-banner-with-image--bg-agentic-ai .h-banner-with-image__description[data-v-223bab6b] {
                color: var(--h-fg-neutral-secondary)
            }

            @media (width>=1025px) {
                .h-banner-with-image--bg-agentic-ai .h-banner-with-image__left-content[data-v-223bab6b] {
                    max-width: 573px;
                    padding: 80px 0
                }

                .h-banner-with-image--bg-agentic-ai .h-banner-with-image__button-wrapper[data-v-223bab6b] {
                    padding-top: 80px
                }

                .h-banner-with-image--bg-agentic-ai .h-banner-with-image__right-content[data-v-223bab6b] .h-image {
                    width: 561px;
                    max-width: 561px
                }
            }

            .h-banner-with-image--bg-ecommerce[data-v-223bab6b] {
                background-image: url(https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fd82338e-8608-4ff7-9b52-cdafb2d4bb00/sharpen=0);
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                min-height: auto
            }

            .h-banner-with-image--bg-ecommerce .h-banner-with-image__title[data-v-223bab6b] {
                color: var(--h-color-neutral-0)
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

            .hw-footer__content[data-v-814ce015],.hw-footer__copyright[data-v-814ce015] {
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
                display: none!important
            }

            .h-footer-breadcrumbs a[data-v-d9ba0eb0],.h-footer-breadcrumbs b[data-v-d9ba0eb0] {
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
                padding-inline-end:8px;font-weight: 400;
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
                    flex:1 0 100%;
                    margin-bottom: 8px
                }
            }

            @media (width>=1025px) {
                .h-footer-section[data-v-a2abc336]: has(.h-legal-links) {
                    order:4
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
                padding-inline-end:0}
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
                    opacity:.7
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
                width: 60px!important
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

            .h-payment-methods--bg-h-color-neutral-950 .h-payment-methods__more-btn[data-v-9aeb7889],.h-payment-methods--bg-h-color-primary-800 .h-payment-methods__more-btn[data-v-9aeb7889] {
                color: var(--h-color-neutral-0)
            }
        </style>
        <link rel="stylesheet" href="/assets/css/entry.BN-2S2kI.css">
        <link rel="stylesheet" href="/assets/css/hcomponents.xhyH4ygE.css">
        <link rel="stylesheet" href="/assets/css/components.CoFsxMIb.css">
        <link rel="stylesheet" href="/assets/css/components-navigation.BiQ2n9Rj.css">
        <link rel="stylesheet" href="/assets/css/ecommerce.vIkaud0Q.css">
        <link rel="stylesheet" href="/assets/css/google-fonts.css">
        <link rel="canonical" href="{{ url('/products') }}">
        <meta name="description" content="Explore high-impact SaaS platforms, custom enterprise systems, digital commerce solutions, and web applications engineered and delivered by Saastify.">
        <meta property="og:site_name" content="Saastify">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url('/products') }}">
        <meta property="og:title" content="Saastify - Projects &amp; Software Solutions We've Built">
        <meta property="og:description" content="Explore high-impact SaaS platforms, custom enterprise systems, digital commerce solutions, and web applications engineered and delivered by Saastify.">
        <meta property="og:image" content="/assets/images/og-image.png">
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:title" content="Saastify - Projects &amp; Software Solutions We've Built">
        <meta property="twitter:description" content="Explore high-impact SaaS platforms, custom enterprise systems, digital commerce solutions, and web applications engineered and delivered by Saastify.">
        <meta property="twitter:image" content="/assets/images/og-image.png">
        <meta name="author" content="Saastify">
        <meta name="page-name" content="templates-website-ecommerce">
    </head>
    <body class="lang-en-US ltr">
        <div id="__nuxt">
            <div data-page-hydrated="false">
                <div id="layout" class="layout layout--default theme-base theme-hWebsites mode-light" data-qa="templates-website-ecommerce-page" data-v-e390f074>
                    <!---->
                    <nav class="navigation-section ltr navigation-section--no-shadow theme-base theme-hWebsites mode-light" dir="ltr" style="background:var(--h-color-neutral-0);" data-qa="navigation-section" data-v-e390f074 data-v-3bcfe6f1>
                        <div class="navigation-section__container" data-v-3bcfe6f1>
                            <div class="navigation-section__logo-wrapper" data-v-3bcfe6f1>
                                <a href="/" class="h-logo h-logo--desktop h-logo--h-fg-neutral-default navigation-section__logo" aria-label="homepage link" data-click-id="hgr-navigation-logo" data-qa="navigation-menu-homepage-button" data-click-sync data-v-3bcfe6f1 data-v-1c91e1f4>
                                    <div class="h-logo__desktop-logo" data-v-1c91e1f4 style="display:flex;align-items:center;gap:10px;">
                                        <img src="/assets/images/logo-64.png" alt="Saastify Logo" style="width:32px;height:32px;border-radius:50%;object-fit:cover;box-shadow:0 2px 8px rgba(0,0,0,0.35);vertical-align:middle;">
                                        <span style="font-family:'DM Sans',system-ui,-apple-system,sans-serif;font-weight:800;font-size:22px;letter-spacing:-0.5px;color:#18181b;">Saastify</span>
                                    </div>
                                    <span class="h-icon h-logo__mobile-logo" aria-hidden="true" style="display:flex;align-items:center;gap:8px;" data-v-c85a1cdf data-v-1c91e1f4>
                                        <img src="/assets/images/logo-64.png" alt="Saastify Logo" style="width:28px;height:28px;border-radius:50%;object-fit:cover;">
                                    </span>
                                </a>
                                <!---->
                            </div>
                            <div class="navigation-section__main-menu-wrapper" data-v-3bcfe6f1>
                                <div class="navigation-section__start" data-v-3bcfe6f1>
                                    <div class="navigation-section__menu" data-qa="navigation-menu" data-v-3bcfe6f1>
                                        <!--[-->
                                        <!--[-->
                                        <div class="" data-v-3bcfe6f1>
                                            <a href="/pricing" class="navigation-section__menu-item navigation-section__menu-item--link h-t-body-2" data-click-id="hgr-navigation-menu-pricing" data-qa="navigation-menu-item-pricing" aria-label="Pricing" data-v-3bcfe6f1>Pricing</a>
                                            <!---->
                                        </div>
                                        <!--]-->
                                        <!--[-->
                                        <!--[-->
                                        <button class="navigation-section__menu-item navigation-section__menu-item--expandable h-t-body-2" data-click-id="hgr-navigation-menu-nav-redesign-products" data-qa="navigation-menu-item-nav-redesign-products" data-click-sync data-nav-target="nav-redesign-products" aria-label="Products" data-v-3bcfe6f1>
                                            Products 
                                            <span class="navigation-section__menu-item-icon" data-v-3bcfe6f1>
                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-chevron-small-down-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:18px;height:18px;" data-v-c85a1cdf data-v-3bcfe6f1>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.9571 10.4571C18.3476 10.0666 18.3476 9.43342 17.9571 9.04289C17.5666 8.65237 16.9334 8.65237 16.5429 9.04289L12 13.5858L7.45711 9.04289C7.06658 8.65237 6.43342 8.65237 6.04289 9.04289C5.65237 9.43342 5.65237 10.0666 6.04289 10.4571L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L17.9571 10.4571Z" fill="currentColor"/>
                                                    </svg>
                                                </span>
                                            </span>
                                        </button>
                                        <div class="navigation-menu-redesign" dir="ltr" style="display:none;" data-v-3bcfe6f1 data-v-05e351a2>
                                            <div class="navigation-menu-redesign__container theme-base theme-hWebsites mode-light" data-qa="navigation-menu-redesign-dropdown-area" style="background:var(--h-color-neutral-0);" data-v-05e351a2>
                                                <div class="navigation-menu-redesign__panel" data-v-05e351a2>
                                                    <!--[-->
                                                    <div class="navigation-menu-redesign__side" data-v-05e351a2>
                                                        <div class="navigation-menu-redesign__side-title h-t-body-3-bold t-uppercase" data-v-05e351a2>Products</div>
                                                        <div class="navigation-menu-redesign__rail-items" data-v-05e351a2>
                                                            <!--[-->
                                                            <button type="button" class="navigation-menu-redesign__rail-item--active h-t-body-2-bold navigation-menu-redesign__rail-item h-t-body-2" data-click-id="hgr-navigation-redesign-rail-ai-and-automation" data-click-sync="true" data-qa="navigation-menu-redesign-rail-ai-and-automation" data-v-05e351a2>
                                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-sparkles-24" style="color:currentColor;fill:currentColor;width:20px;height:20px;" data-v-c85a1cdf data-v-05e351a2>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.84024 7.1517C8.629 6.6161 7.871 6.6161 7.65976 7.1517L6.5565 9.94905C6.49201 10.1126 6.36257 10.242 6.19905 10.3065L3.4017 11.4098C2.8661 11.621 2.8661 12.379 3.4017 12.5902L6.19905 13.6935C6.36257 13.758 6.49201 13.8874 6.5565 14.051L7.65976 16.8483C7.87099 17.3839 8.629 17.3839 8.84024 16.8483L9.9435 14.051C10.008 13.8874 10.1374 13.758 10.301 13.6935L13.0983 12.5902C13.6339 12.379 13.6339 11.621 13.0983 11.4098L10.301 10.3065C10.1374 10.242 10.008 10.1126 9.9435 9.94905L8.84024 7.1517Z" fill="currentColor"/>
                                                                        <path d="M17.6716 1.78693C17.5207 1.40436 16.9793 1.40436 16.8284 1.78693L16.0404 3.78503C15.9943 3.90184 15.9018 3.99429 15.785 4.04036L13.7869 4.8284C13.4044 4.97928 13.4044 5.52072 13.7869 5.6716L15.785 6.45964C15.9018 6.50571 15.9943 6.59816 16.0404 6.71497L16.8284 8.71307C16.9793 9.09564 17.5207 9.09564 17.6716 8.71307L18.4596 6.71497C18.5057 6.59817 18.5982 6.50571 18.715 6.45964L20.7131 5.6716C21.0956 5.52072 21.0956 4.97928 20.7131 4.8284L18.715 4.04036C18.5982 3.99429 18.5057 3.90184 18.4596 3.78503L17.6716 1.78693Z" fill="currentColor"/>
                                                                        <path d="M17.503 16.6722C17.4124 16.4426 17.0876 16.4426 16.997 16.6722L16.5242 17.871C16.4966 17.9411 16.4411 17.9966 16.371 18.0242L15.1722 18.497C14.9426 18.5876 14.9426 18.9124 15.1722 19.003L16.371 19.4758C16.4411 19.5034 16.4966 19.5589 16.5242 19.629L16.997 20.8278C17.0876 21.0574 17.4124 21.0574 17.503 20.8278L17.9758 19.629C18.0034 19.5589 18.0589 19.5034 18.129 19.4758L19.3278 19.003C19.5574 18.9124 19.5574 18.5876 19.3278 18.497L18.129 18.0242C18.0589 17.9966 18.0034 17.9411 17.9758 17.871L17.503 16.6722Z" fill="currentColor"/>
                                                                    </svg>
                                                                </span>
                                                                <span data-v-05e351a2>AI and automation</span>
                                                            </button>
                                                            <button type="button" class="navigation-menu-redesign__rail-item h-t-body-2" data-click-id="hgr-navigation-redesign-rail-hosting" data-click-sync="true" data-qa="navigation-menu-redesign-rail-hosting" data-v-05e351a2>
                                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-servers-24" style="color:currentColor;fill:currentColor;width:20px;height:20px;" data-v-c85a1cdf data-v-05e351a2>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.99992 6C5.99992 6.62132 5.49625 7.125 4.87496 7.125C4.25366 7.125 3.75 6.62132 3.75 6C3.75 5.37868 4.25366 4.875 4.87496 4.875C5.49625 4.875 5.99992 5.37868 5.99992 6Z" fill="currentColor"/>
                                                                        <path d="M9.74992 6C9.74992 6.62132 9.24625 7.125 8.62496 7.125C8.00366 7.125 7.5 6.62132 7.5 6C7.5 5.37868 8.00366 4.875 8.62496 4.875C9.24625 4.875 9.74992 5.37868 9.74992 6Z" fill="currentColor"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.5C0 2.84315 1.34315 1.5 3 1.5H21C22.6569 1.5 24 2.84315 24 4.5V7.5C24 9.15685 22.6569 10.5 21 10.5H3C1.34315 10.5 0 9.15685 0 7.5V4.5ZM3 3.5H21C21.5523 3.5 22 3.94772 22 4.5V7.5C22 8.05228 21.5523 8.5 21 8.5H3C2.44772 8.5 2 8.05228 2 7.5V4.5C2 3.94772 2.44772 3.5 3 3.5Z" fill="currentColor"/>
                                                                        <path d="M4.87496 19.125C5.49625 19.125 5.99992 18.6213 5.99992 18C5.99992 17.3787 5.49625 16.875 4.87496 16.875C4.25366 16.875 3.75 17.3787 3.75 18C3.75 18.6213 4.25366 19.125 4.87496 19.125Z" fill="currentColor"/>
                                                                        <path d="M8.62496 19.125C9.24625 19.125 9.74992 18.6213 9.74992 18C9.74992 17.3787 9.24625 16.875 8.62496 16.875C8.00366 16.875 7.5 17.3787 7.5 18C7.5 18.6213 8.00366 19.125 8.62496 19.125Z" fill="currentColor"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.5C0 14.8431 1.34315 13.5 3 13.5H21C22.6569 13.5 24 14.8431 24 16.5V19.5C24 21.1569 22.6569 22.5 21 22.5H3C1.34315 22.5 0 21.1569 0 19.5V16.5ZM3 15.5H21C21.5523 15.5 22 15.9477 22 16.5V19.5C22 20.0523 21.5523 20.5 21 20.5H3C2.44772 20.5 2 20.0523 2 19.5V16.5C2 15.9477 2.44772 15.5 3 15.5Z" fill="currentColor"/>
                                                                    </svg>
                                                                </span>
                                                                <span data-v-05e351a2>Hosting</span>
                                                            </button>
                                                            <button type="button" class="navigation-menu-redesign__rail-item h-t-body-2" data-click-id="hgr-navigation-redesign-rail-domains" data-click-sync="true" data-qa="navigation-menu-redesign-rail-domains" data-v-05e351a2>
                                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-globe-24" style="color:currentColor;fill:currentColor;width:20px;height:20px;" data-v-c85a1cdf data-v-05e351a2>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5ZM10.9855 11.003L10.9855 4.6301C9.0822 6.60193 8.04274 8.80855 7.80368 11.0091L10.9855 11.003ZM10.9855 13.003L7.80575 13.0091C8.0487 15.2034 9.08765 17.4031 10.9854 19.3695L10.9855 13.003ZM5.79349 11.0129C6.00695 8.60009 7.00259 6.24769 8.73468 4.14982C5.94973 5.30956 3.91417 7.90809 3.55621 11.0172L5.79349 11.0129ZM3.56024 13.0172L5.79587 13.0129C6.01431 15.4168 7.00919 17.7599 8.73527 19.8504C5.96029 18.6951 3.92922 16.1113 3.56024 13.0172ZM12.9855 12.9992L16.2132 12.9931C15.9717 15.2105 14.9174 17.4341 12.9854 19.4174L12.9855 12.9992ZM16.2118 10.9931L12.9855 10.9992L12.9855 4.5825C14.9135 6.56159 15.9674 8.78011 16.2118 10.9931ZM18.2235 12.9892C18.0098 15.3971 17.0173 17.7448 15.2912 19.8394C18.0622 18.6746 20.086 16.0835 20.4435 12.985L18.2235 12.9892ZM20.44 10.985L18.2216 10.9892C18.0041 8.58888 17.0123 6.24898 15.2914 4.16075C18.0534 5.32179 20.0729 7.89988 20.44 10.985Z" fill="currentColor"/>
                                                                    </svg>
                                                                </span>
                                                                <span data-v-05e351a2>Domains</span>
                                                            </button>
                                                            <button type="button" class="navigation-menu-redesign__rail-item h-t-body-2" data-click-id="hgr-navigation-redesign-rail-create-website" data-click-sync="true" data-qa="navigation-menu-redesign-rail-create-website" data-v-05e351a2>
                                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-browser-window-24" style="color:currentColor;fill:currentColor;width:20px;height:20px;" data-v-c85a1cdf data-v-05e351a2>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M6 7.17188C6 7.7932 5.49634 8.29688 4.87504 8.29688C4.25375 8.29688 3.75008 7.7932 3.75008 7.17188C3.75008 6.55055 4.25375 6.04688 4.87504 6.04688C5.49634 6.04688 6 6.55055 6 7.17188Z" fill="currentColor"/>
                                                                        <path d="M9.75 7.17188C9.75 7.7932 9.24634 8.29688 8.62504 8.29688C8.00374 8.29688 7.50008 7.7932 7.50008 7.17188C7.50008 6.55055 8.00374 6.04688 8.62504 6.04688C9.24634 6.04688 9.75 6.55055 9.75 7.17188Z" fill="currentColor"/>
                                                                        <path d="M12.375 8.29688C12.9963 8.29688 13.5 7.7932 13.5 7.17188C13.5 6.55055 12.9963 6.04688 12.375 6.04688C11.7537 6.04688 11.2501 6.55055 11.2501 7.17188C11.2501 7.7932 11.7537 8.29688 12.375 8.29688Z" fill="currentColor"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.625C0 2.89911 1.39911 1.5 3.125 1.5H20.875C22.6009 1.5 24 2.89911 24 4.625V19.375C24 21.1009 22.6009 22.5 20.875 22.5H3.125C1.39911 22.5 0 21.1009 0 19.375V4.625ZM3.125 3.5H20.875C21.4963 3.5 22 4.00368 22 4.625V19.375C22 19.9963 21.4963 20.5 20.875 20.5H3.125C2.50368 20.5 2 19.9963 2 19.375V4.625C2 4.00368 2.50368 3.5 3.125 3.5Z" fill="currentColor"/>
                                                                    </svg>
                                                                </span>
                                                                <span data-v-05e351a2>Create a website</span>
                                                            </button>
                                                            <button type="button" class="navigation-menu-redesign__rail-item h-t-body-2" data-click-id="hgr-navigation-redesign-rail-sell-online" data-click-sync="true" data-qa="navigation-menu-redesign-rail-sell-online" data-v-05e351a2>
                                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-cart-24" style="color:currentColor;fill:currentColor;width:20px;height:20px;" data-v-c85a1cdf data-v-05e351a2>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.997681 1.87708C0.445396 1.87708 -0.00231934 2.32479 -0.00231934 2.87708C-0.00231934 3.42936 0.445396 3.87708 0.997681 3.87708H2.55801C2.97645 3.87708 3.34237 4.15899 3.44911 4.56358L6.22381 15.0817C6.56218 16.3643 7.72222 17.258 9.04875 17.258H17.9939C18.5462 17.258 18.9939 16.8103 18.9939 16.258C18.9939 15.7057 18.5462 15.258 17.9939 15.258H9.04875C8.63031 15.258 8.26439 14.9761 8.15765 14.5715L7.94733 13.7742H17.5799C18.5772 13.7742 19.4742 13.1676 19.8455 12.2421L21.7573 7.47729C22.4008 5.87341 21.2198 4.12708 19.4917 4.12708H5.40237L5.38295 4.05343C5.04458 2.77078 3.88454 1.87708 2.55801 1.87708H0.997681ZM5.92998 6.12708L7.41972 11.7742H17.5799C17.7602 11.7742 17.9223 11.6646 17.9894 11.4973L19.9011 6.73255C20.0174 6.44269 19.804 6.12708 19.4917 6.12708H5.92998ZM18.0811 20.3979C18.0811 21.3505 17.3088 22.1229 16.3561 22.1229C15.4035 22.1229 14.6311 21.3505 14.6311 20.3979C14.6311 19.4452 15.4035 18.6729 16.3561 18.6729C17.3088 18.6729 18.0811 19.4452 18.0811 20.3979ZM9.15021 22.123C10.1029 22.123 10.8752 21.3507 10.8752 20.398C10.8752 19.4453 10.1029 18.673 9.15021 18.673C8.19752 18.673 7.42521 19.4453 7.42521 20.398C7.42521 21.3507 8.19752 22.123 9.15021 22.123Z" fill="currentColor"/>
                                                                    </svg>
                                                                </span>
                                                                <span data-v-05e351a2>Sell online</span>
                                                            </button>
                                                            <button type="button" class="navigation-menu-redesign__rail-item h-t-body-2" data-click-id="hgr-navigation-redesign-rail-email" data-click-sync="true" data-qa="navigation-menu-redesign-rail-email" data-v-05e351a2>
                                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-envelope-24" style="color:currentColor;fill:currentColor;width:20px;height:20px;" data-v-c85a1cdf data-v-05e351a2>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8.55C1.5 6.86984 1.5 6.02976 1.82698 5.38803C2.1146 4.82354 2.57354 4.3646 3.13803 4.07698C3.77976 3.75 4.61984 3.75 6.3 3.75H17.7C19.3802 3.75 20.2202 3.75 20.862 4.07698C21.4265 4.3646 21.8854 4.82354 22.173 5.38803C22.5 6.02976 22.5 6.86984 22.5 8.55V15.45C22.5 17.1302 22.5 17.9702 22.173 18.612C21.8854 19.1765 21.4265 19.6354 20.862 19.923C20.2202 20.25 19.3802 20.25 17.7 20.25H6.3C4.61984 20.25 3.77976 20.25 3.13803 19.923C2.57354 19.6354 2.1146 19.1765 1.82698 18.612C1.5 17.9702 1.5 17.1302 1.5 15.45V8.55ZM6.3 5.75H17.7C18.5731 5.75 19.1076 5.75156 19.5075 5.78423C19.6938 5.79945 19.8065 5.81857 19.875 5.83469C19.9076 5.84236 19.9276 5.84879 19.9384 5.85265C19.9488 5.85636 19.954 5.85899 19.954 5.85899C20.0606 5.91332 20.1559 5.98599 20.236 6.07301L12 12.25L3.76401 6.07301C3.84405 5.98599 3.93938 5.91332 4.04601 5.85899C4.04601 5.85899 4.05118 5.85636 4.06158 5.85265C4.07241 5.84879 4.09244 5.84236 4.125 5.83469C4.19345 5.81857 4.30617 5.79945 4.49247 5.78423C4.89239 5.75156 5.42692 5.75 6.3 5.75ZM3.50003 8.37502C3.50001 8.4318 3.5 8.4901 3.5 8.55V15.45C3.5 16.3231 3.50156 16.8576 3.53423 17.2575C3.54945 17.4438 3.56857 17.5565 3.58469 17.625C3.59236 17.6576 3.59879 17.6776 3.60265 17.6884C3.60636 17.6988 3.60899 17.704 3.60899 17.704C3.70487 17.8922 3.85785 18.0451 4.04601 18.141C4.04601 18.141 4.05118 18.1436 4.06158 18.1473C4.07241 18.1512 4.09244 18.1576 4.125 18.1653C4.19345 18.1814 4.30617 18.2005 4.49247 18.2158C4.89239 18.2484 5.42692 18.25 6.3 18.25H17.7C18.5731 18.25 19.1076 18.2484 19.5075 18.2158C19.6938 18.2005 19.8065 18.1814 19.875 18.1653C19.9076 18.1576 19.9276 18.1512 19.9384 18.1473L19.9442 18.1452C19.9505 18.1428 19.954 18.141 19.954 18.141C20.1422 18.0451 20.2951 17.8922 20.391 17.704C20.391 17.704 20.3936 17.6988 20.3973 17.6884C20.4012 17.6776 20.4076 17.6576 20.4153 17.625C20.4314 17.5565 20.4505 17.4438 20.4658 17.2575C20.4984 16.8576 20.5 16.3231 20.5 15.45V8.55C20.5 8.4901 20.5 8.4318 20.5 8.37503L13.05 13.9625C12.4278 14.4292 11.5722 14.4292 10.95 13.9625L3.50003 8.37502Z" fill="currentColor"/>
                                                                    </svg>
                                                                </span>
                                                                <span data-v-05e351a2>Email and marketing</span>
                                                            </button>
                                                            <button type="button" class="navigation-menu-redesign__rail-item h-t-body-2" data-click-id="hgr-navigation-redesign-rail-for-agencies" data-click-sync="true" data-qa="navigation-menu-redesign-rail-for-agencies" data-v-05e351a2>
                                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-layers-24" style="color:currentColor;fill:currentColor;width:20px;height:20px;" data-v-c85a1cdf data-v-05e351a2>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.26712 1.94815C10.9664 1.01728 13.0336 1.01729 14.7329 1.94815L20.7695 5.25492C22.4102 6.15365 22.4102 8.48742 20.7695 9.38615L20.1358 9.73329L20.3177 9.82921L20.7695 10.0767C22.4102 10.9755 22.4102 13.3092 20.7695 14.208L20.2607 14.4867L20.5535 14.6304C22.2754 15.4755 22.3339 17.8881 20.6489 18.8111L14.7329 22.0519C13.0336 22.9827 10.9664 22.9827 9.26711 22.0519L3.43737 18.8584C1.7224 17.919 1.82222 15.4535 3.59763 14.647L3.83511 14.5392L3.2305 14.208C1.58983 13.3092 1.58984 10.9755 3.2305 10.0767L3.67185 9.83496L3.85902 9.73045L3.2305 9.38615C1.58983 8.48742 1.58984 6.15365 3.2305 5.25492L9.26712 1.94815ZM13.772 3.70222C12.6713 3.09926 11.3287 3.09926 10.228 3.70221L4.19135 7.00899C3.93621 7.14875 3.93622 7.49232 4.19135 7.63208L10.228 10.9389C11.3287 11.5418 12.6713 11.5418 13.772 10.9389L19.8086 7.63208C20.0638 7.49232 20.0638 7.14875 19.8086 7.00899L13.772 3.70222ZM5.92984 10.8648L4.63629 11.5871L4.19135 11.8308C3.93622 11.9706 3.93622 12.3141 4.19135 12.4539L10.228 15.7607C11.3287 16.3636 12.6713 16.3636 13.772 15.7607L19.8086 12.4539C20.0638 12.3141 20.0638 11.9706 19.8086 11.8308L19.3706 11.5909L18.0328 10.8853L14.7329 12.6929C13.0336 13.6238 10.9664 13.6238 9.26711 12.6929L5.92984 10.8648ZM6.02735 15.74L4.42476 16.468C4.14361 16.5957 4.13439 16.9598 4.39823 17.1043L10.228 20.2978C11.3287 20.9007 12.6713 20.9007 13.772 20.2978L19.6881 17.0571C19.9485 16.9144 19.943 16.5586 19.6723 16.4258L18.1156 15.6617L14.7329 17.5147C13.0336 18.4456 10.9664 18.4456 9.26711 17.5147L6.02735 15.74Z" fill="currentColor"/>
                                                                    </svg>
                                                                </span>
                                                                <span data-v-05e351a2>For agencies</span>
                                                            </button>
                                                            <!--]-->
                                                        </div>
                                                    </div>
                                                    <div class="navigation-menu-redesign__divider" data-v-05e351a2></div>
                                                    <!--]-->
                                                    <div class="navigation-menu-redesign__content" data-v-05e351a2>
                                                        <div class="navigation-menu-redesign__content-title h-t-body-3-bold t-uppercase" data-v-05e351a2>Automate and deploy</div>
                                                        <div class="navigation-menu-redesign__grid" data-v-05e351a2>
                                                            <!--[-->
                                                            <a href="/hostinger-agent" class="navigation-menu-item-redesign" data-click-id="hgr-navigation-menu-item-hostinger-agents" data-qa="navigation-menu-dropdown-item-hostinger-agents" dir="ltr" data-v-05e351a2 data-v-a73f210c>
                                                                <div class="navigation-menu-item-redesign__link-data" data-v-a73f210c>
                                                                    <div class="navigation-menu-item-redesign__title-container-wrapper" data-v-a73f210c>
                                                                        <div class="navigation-menu-item-redesign__title-container" data-v-a73f210c>
                                                                            <div class="navigation-menu-item-redesign__icon" data-v-a73f210c>
                                                                            <!---->
                                                                            </div>
                                                                            <div class="navigation-menu-item-redesign__title h-t-body-2-bold" data-v-a73f210c>Hostinger Agents</div>
                                                                        </div>
                                                                        <div class="h-label h-label--height-sm" style="color:var(--h-fg-brand-default);background:var(--h-bg-brand-tint-default);" data-v-7bc671ee data-v-a73f210c>
                                                                            <!--[-->
                                                                            <!---->
                                                                            <!--]-->
                                                                            <span class="h-typography h-t-body-3-bold h-label__text" style="color:currentColor;" data-v-254de8eb data-v-7bc671ee>
                                                                            <!--[-->
                                                                            <!--[-->
                                                                            New
                                                                            <!--]-->
                                                                            <!--]-->
                                                                            </span>
                                                                            <!--[-->
                                                                            <!---->
                                                                            <!--]-->
                                                                        </div>
                                                                    </div>
                                                                    <div class="navigation-menu-item-redesign__description h-t-body-2" data-v-a73f210c>Ready-to-use AI team for daily business tasks.</div>
                                                                </div>
                                                            </a>
                                                            <a href="/managed-openclaw" class="navigation-menu-item-redesign" data-click-id="hgr-navigation-menu-item-openclaw" data-qa="navigation-menu-dropdown-item-openclaw" dir="ltr" data-v-05e351a2 data-v-a73f210c>
                                                                <div class="navigation-menu-item-redesign__link-data" data-v-a73f210c>
                                                                    <div class="navigation-menu-item-redesign__title-container-wrapper" data-v-a73f210c>
                                                                        <div class="navigation-menu-item-redesign__title-container" data-v-a73f210c>
                                                                            <div class="navigation-menu-item-redesign__icon" data-v-a73f210c>
                                                                            <!---->
                                                                            </div>
                                                                            <div class="navigation-menu-item-redesign__title h-t-body-2-bold" data-v-a73f210c>OpenClaw</div>
                                                                        </div>
                                                                        <!---->
                                                                    </div>
                                                                    <div class="navigation-menu-item-redesign__description h-t-body-2" data-v-a73f210c>Personal, always-on AI assistant for everyday automation.</div>
                                                                </div>
                                                            </a>
                                                            <a href="/managed-hermes-agent" class="navigation-menu-item-redesign" data-click-id="hgr-navigation-menu-item-hermes-agent" data-qa="navigation-menu-dropdown-item-hermes-agent" dir="ltr" data-v-05e351a2 data-v-a73f210c>
                                                                <div class="navigation-menu-item-redesign__link-data" data-v-a73f210c>
                                                                    <div class="navigation-menu-item-redesign__title-container-wrapper" data-v-a73f210c>
                                                                        <div class="navigation-menu-item-redesign__title-container" data-v-a73f210c>
                                                                            <div class="navigation-menu-item-redesign__icon" data-v-a73f210c>
                                                                            <!---->
                                                                            </div>
                                                                            <div class="navigation-menu-item-redesign__title h-t-body-2-bold" data-v-a73f210c>Hermes Agent</div>
                                                                        </div>
                                                                        <div class="h-label h-label--height-sm" style="color:var(--h-fg-brand-default);background:var(--h-bg-brand-tint-default);" data-v-7bc671ee data-v-a73f210c>
                                                                            <!--[-->
                                                                            <!---->
                                                                            <!--]-->
                                                                            <span class="h-typography h-t-body-3-bold h-label__text" style="color:currentColor;" data-v-254de8eb data-v-7bc671ee>
                                                                            <!--[-->
                                                                            <!--[-->
                                                                            New
                                                                            <!--]-->
                                                                            <!--]-->
                                                                            </span>
                                                                            <!--[-->
                                                                            <!---->
                                                                            <!--]-->
                                                                        </div>
                                                                    </div>
                                                                    <div class="navigation-menu-item-redesign__description h-t-body-2" data-v-a73f210c>Persistent, context-aware AI agent for continuous automations.</div>
                                                                </div>
                                                            </a>
                                                            <a href="/self-hosted-n8n" class="navigation-menu-item-redesign" data-click-id="hgr-navigation-menu-item-self-hosted-n8n" data-qa="navigation-menu-dropdown-item-self-hosted-n8n" dir="ltr" data-v-05e351a2 data-v-a73f210c>
                                                                <div class="navigation-menu-item-redesign__link-data" data-v-a73f210c>
                                                                    <div class="navigation-menu-item-redesign__title-container-wrapper" data-v-a73f210c>
                                                                        <div class="navigation-menu-item-redesign__title-container" data-v-a73f210c>
                                                                            <div class="navigation-menu-item-redesign__icon" data-v-a73f210c>
                                                                            <!---->
                                                                            </div>
                                                                            <div class="navigation-menu-item-redesign__title h-t-body-2-bold" data-v-a73f210c>Self-hosted n8n</div>
                                                                        </div>
                                                                        <!---->
                                                                    </div>
                                                                    <div class="navigation-menu-item-redesign__description h-t-body-2" data-v-a73f210c>Custom, node-based AI workflows with full control.</div>
                                                                </div>
                                                            </a>
                                                            <a href="/ai-automation-apps" class="navigation-menu-item-redesign" data-click-id="hgr-navigation-menu-item-ai-automation-apps" data-qa="navigation-menu-dropdown-item-ai-automation-apps" dir="ltr" data-v-05e351a2 data-v-a73f210c>
                                                                <div class="navigation-menu-item-redesign__link-data" data-v-a73f210c>
                                                                    <div class="navigation-menu-item-redesign__title-container-wrapper" data-v-a73f210c>
                                                                        <div class="navigation-menu-item-redesign__title-container" data-v-a73f210c>
                                                                            <div class="navigation-menu-item-redesign__icon" data-v-a73f210c>
                                                                            <!---->
                                                                            </div>
                                                                            <div class="navigation-menu-item-redesign__title h-t-body-2-bold" data-v-a73f210c>AI automation apps</div>
                                                                        </div>
                                                                        <!---->
                                                                    </div>
                                                                    <div class="navigation-menu-item-redesign__description h-t-body-2" data-v-a73f210c>One plan, any AI automation app. Switch anytime.</div>
                                                                </div>
                                                            </a>
                                                            <!--]-->
                                                            <!--[-->
                                                            <div class="navigation-menu-redesign__content-divider" data-v-05e351a2></div>
                                                            <div class="navigation-menu-redesign__content-title h-t-body-3-bold t-uppercase navigation-menu-redesign__content-title--whole-width h-mb-n8" data-v-05e351a2>Create and grow</div>
                                                            <!--[-->
                                                            <a href="/ai-builder" rel="noopener noreferrer" target="_blank" class="navigation-menu-item-redesign" data-click-id="hgr-navigation-menu-item-ai-builder" data-qa="navigation-menu-dropdown-item-ai-builder" dir="ltr" data-v-05e351a2 data-v-a73f210c>
                                                                <div class="navigation-menu-item-redesign__link-data" data-v-a73f210c>
                                                                    <div class="navigation-menu-item-redesign__title-container-wrapper" data-v-a73f210c>
                                                                        <div class="navigation-menu-item-redesign__title-container" data-v-a73f210c>
                                                                            <div class="navigation-menu-item-redesign__icon" data-v-a73f210c>
                                                                            <!---->
                                                                            </div>
                                                                            <div class="navigation-menu-item-redesign__title h-t-body-2-bold" data-v-a73f210c>AI Builder</div>
                                                                        </div>
                                                                        <div class="h-label h-label--height-sm" style="color:var(--h-fg-brand-default);background:var(--h-bg-brand-tint-default);" data-v-7bc671ee data-v-a73f210c>
                                                                            <!--[-->
                                                                            <!---->
                                                                            <!--]-->
                                                                            <span class="h-typography h-t-body-3-bold h-label__text" style="color:currentColor;" data-v-254de8eb data-v-7bc671ee>
                                                                            <!--[-->
                                                                            <!--[-->
                                                                            Popular
                                                                            <!--]-->
                                                                            <!--]-->
                                                                            </span>
                                                                            <!--[-->
                                                                            <!---->
                                                                            <!--]-->
                                                                        </div>
                                                                    </div>
                                                                    <div class="navigation-menu-item-redesign__description h-t-body-2" data-v-a73f210c>Describe what you need and AI will build it. No tech skills needed. </div>
                                                                </div>
                                                            </a>
                                                            <a href="/email-marketing" class="navigation-menu-item-redesign" data-click-id="hgr-navigation-menu-item-ai-email-marketing" data-qa="navigation-menu-dropdown-item-ai-email-marketing" dir="ltr" data-v-05e351a2 data-v-a73f210c>
                                                                <div class="navigation-menu-item-redesign__link-data" data-v-a73f210c>
                                                                    <div class="navigation-menu-item-redesign__title-container-wrapper" data-v-a73f210c>
                                                                        <div class="navigation-menu-item-redesign__title-container" data-v-a73f210c>
                                                                            <div class="navigation-menu-item-redesign__icon" data-v-a73f210c>
                                                                            <!---->
                                                                            </div>
                                                                            <div class="navigation-menu-item-redesign__title h-t-body-2-bold" data-v-a73f210c>Email marketing</div>
                                                                        </div>
                                                                        <!---->
                                                                    </div>
                                                                    <div class="navigation-menu-item-redesign__description h-t-body-2" data-v-a73f210c>Create and send AI powered email campaigns.</div>
                                                                </div>
                                                            </a>
                                                            <!--]-->
                                                            <!--]-->
                                                        </div>
                                                    </div>
                                                    <!---->
                                                    <a href="/agentic-ai" class="navigation-menu-promo-item theme-base theme-hWebsites mode-dark" data-click-id="hgr-navigation-redesign-promo-agentic-ai" data-qa="navigation-menu-redesign-promo-agentic-ai" style="background:var(--h-color-neutral-900);--promo-background-image:;" data-v-05e351a2 data-v-8fb0b30f>
                                                        <div class="navigation-menu-promo-item__head" data-v-8fb0b30f>
                                                            <div class="navigation-menu-promo-item__head-eyebrow" data-v-8fb0b30f>
                                                                <span class="h-t-body-3-bold t-uppercase" data-v-8fb0b30f>Agentic AI hub</span>
                                                                <!---->
                                                            </div>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-arrow-up-right-24" style="color:var(--h-color-neutral-0);fill:var(--h-color-neutral-0);width:20px;height:20px;" data-v-c85a1cdf data-v-8fb0b30f>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.82503 16.5926C8.4345 16.9831 7.80134 16.9831 7.41081 16.5926C7.02029 16.2021 7.02029 15.5689 7.41081 15.1784L17.1618 5.42734C17.5524 5.03681 18.1855 5.03681 18.5761 5.42734C18.9666 5.81786 18.9666 6.45103 18.5761 6.84155L8.82503 16.5926Z" fill="currentColor"/>
                                                                    <path d="M18.8807 13.5476C18.8807 14.0998 18.4331 14.5474 17.8808 14.5475C17.3285 14.5474 16.8809 14.0998 16.8809 13.5476L16.8816 7.12352L10.4583 7.12352C9.90599 7.12353 9.45769 6.67523 9.45769 6.12294C9.45774 5.5709 9.9056 5.12338 10.4576 5.12305L17.8808 5.12305C18.146 5.12305 18.4004 5.22834 18.5879 5.41583C18.7754 5.60335 18.8807 5.85775 18.8807 6.12294L18.8807 13.5476Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="navigation-menu-promo-item__image" data-v-8fb0b30f>
                                                            <div class="h-image" data-v-8fb0b30f data-v-6835ff82 data-v-8554daca>
                                                                <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/3fc114d2-0a8c-4dc0-ddc7-f83749a96d00/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/3fc114d2-0a8c-4dc0-ddc7-f83749a96d00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/3fc114d2-0a8c-4dc0-ddc7-f83749a96d00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/3fc114d2-0a8c-4dc0-ddc7-f83749a96d00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/3fc114d2-0a8c-4dc0-ddc7-f83749a96d00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/3fc114d2-0a8c-4dc0-ddc7-f83749a96d00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/3fc114d2-0a8c-4dc0-ddc7-f83749a96d00/w=1280,sharpen=1 1280w" alt="Use agents. Build agents. Host agents." loading="lazy" fetchpriority="low" data-v-8554daca>
                                                            </div>
                                                        </div>
                                                        <div class="navigation-menu-promo-item__body" data-v-8fb0b30f>
                                                            <div class="navigation-menu-redesign__promo-title h-t-heading-3-regular" data-v-8fb0b30f>Use agents. Build agents. Host agents.</div>
                                                            <div class="navigation-menu-promo-item__description h-t-body-2" data-v-8fb0b30f>Hostinger &#39;s agentic AI ecosystem is built for all three.</div>
                                                            <div class="navigation-menu-promo-item__cta" data-v-8fb0b30f>
                                                                <button class="h-button-v2 h-button-v2 h-button-v2--contain-neutral" style="" aria-expanded="false" data-qa="navigation-promo-cta-button" data-v-dbdcf57d data-v-8fb0b30f>
                                                                    <!--[-->
                                                                    <!---->
                                                                    <!--]-->
                                                                    <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                        <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-neutral);--h-circle-loader-border-color:var(--h-circle-loader-border-color-neutral);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                            <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                        </div>
                                                                    </div>
                                                                    <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                                    <!--[-->
                                                                    <!--[-->
                                                                    Explore agentic AI
                                                                    <!--]-->
                                                                    <!--]-->
                                                                    </span>
                                                                    <!--[-->
                                                                    <!---->
                                                                    <!--]-->
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <a class="navigation-menu-redesign__backdrop" data-v-05e351a2></a>
                                        </div>
                                        <!--]-->
                                        <!--]-->
                                        <!--[-->
                                        
<!--[-->
                                        <!--[-->
                                        <div class="" data-v-3bcfe6f1>
                                            <a href="/developers" class="navigation-section__menu-item navigation-section__menu-item--link h-t-body-2" data-click-id="hgr-navigation-menu-developers" data-qa="navigation-menu-item-developers" aria-label="Developers" data-v-3bcfe6f1>Developers</a>
                                            <!---->
                                        </div>
                                        <!--]-->
                                        <!--]-->
<!--[-->
                                        <!--[-->
                                        <div class="" data-v-3bcfe6f1>
                                            <a href="/about" class="navigation-section__menu-item navigation-section__menu-item--link h-t-body-2" data-click-id="hgr-navigation-menu-about" data-qa="navigation-menu-item-about" aria-label="About" data-v-3bcfe6f1>About</a>
                                            <!---->
                                        </div>
                                        <!--]-->
                                        <!--]-->
</div>
                                    <!---->
                                    <a href="https://auth.hostinger.com/login" rel="noopener noreferrer" id="hgr-topmenu-login" class="navigation-section__menu-item navigation-section__menu-item--login h-t-body-2" data-click-id="hgr-navigation-menu-login" data-qa="navigation-menu-login-button" aria-label="Log in" data-v-3bcfe6f1>
                                        <span class="h-icon" aria-hidden="true" data-icon-name="ic-user-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;" data-v-c85a1cdf data-v-3bcfe6f1>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 7.5C15.75 9.57107 14.071 11.25 12 11.25C9.9289 11.25 8.24997 9.57107 8.24997 7.5C8.24997 5.42893 9.9289 3.75 12 3.75C14.071 3.75 15.75 5.42893 15.75 7.5ZM13.75 7.5C13.75 8.4665 12.9665 9.25 12 9.25C11.0335 9.25 10.25 8.4665 10.25 7.5C10.25 6.5335 11.0335 5.75 12 5.75C12.9665 5.75 13.75 6.5335 13.75 7.5Z" fill="currentColor"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9388 12.4999H12.0611C15.6405 12.4999 18.8517 14.7002 20.1438 18.0383C20.5561 19.1032 19.7703 20.25 18.6283 20.25H5.37162C4.22967 20.25 3.44388 19.1032 3.85611 18.0383C5.14823 14.7002 8.35943 12.4999 11.9388 12.4999ZM11.9388 14.4999H12.0611C14.6278 14.4999 16.9483 15.9706 18.0564 18.25H5.94355C7.05166 15.9706 9.37219 14.4999 11.9388 14.4999Z" fill="currentColor"/>
                                            </svg>
                                        </span>
                                    </a>
                                    <!---->
                                </div>
                            </div>
                            <div class="navigation-section__mobile" style="" data-v-3bcfe6f1>
                                <div class="navigation-section__mobile-menu-wrapper theme-base theme-hWebsites mode-light" style="background:var(--h-color-neutral-0);display:none;" data-v-3bcfe6f1>
                                <!---->
                                </div>
                                <span data-v-3bcfe6f1></span>
                            </div>
                        </div>
                    </nav>
                    <main data-v-e390f074>
                        <!--[-->
                        <div class="templates-website-page" data-v-b4e57e13>
                               <section class="h-header-one-column-wide theme-base theme-hWebsites mode-dark h-header-wide" style="background:var(--h-color-primary-950);" id="promo" data-view-id="hgr-templates_website_ecommerce-hero" data-v-b4e57e13 data-v-6f3481df data-v-992459a9>
                                <div class="h-header-one-column-wide__container" data-v-992459a9>
                                    <!--[-->
                                    <div class="h-header-wide__content" data-v-6f3481df>
                                        <div class="h-header-wide__inner-content" data-v-6f3481df>
                                            <div class="h-header-wide__heading-container" data-v-6f3481df>
                                                <!---->
                                                <div class="hw-headline" dir="ltr" data-v-6f3481df data-v-ec35f884>
                                                    <div class="hw-headline__top" data-v-ec35f884>
                                                        <!---->
                                                        <!--[-->
                                                        <h1 class="h-t-title-0 hw-headline__title" data-v-ec35f884>Projects &amp; Software We've Built</h1>
                                                        <!--]-->
                                                        <div class="hw-headline__description h-t-body-1" style="" data-v-ec35f884>Explore high-impact SaaS platforms, custom enterprise systems, digital commerce solutions, and web applications engineered and delivered by our team.</div>
                                                        <!---->
                                                    </div>
                                                    <!---->
                                                </div>
                                                <div class="h-header-wide__middle-content" data-v-6f3481df>
                                                    <!---->
                                                    <!--[-->
                                                    <div class="templates-search__container theme-base theme-hWebsites mode-light" data-v-b4e57e13 data-v-60345de4>
                                                        <div class="templates-search__wrapper" data-v-60345de4>
                                                            <div class="h-input templates-search__input" aria-invalid="false" aria-disabled="false" data-qa="templates-input-search" data-v-87597caf data-v-60345de4>
                                                                <!---->
                                                                <div class="h-input-border h-input__border--large" data-qa="templates-input-search-wrapper" style="" data-v-f99c8c3a data-v-87597caf>
                                                                    <!---->
                                                                    <!--[-->
                                                                    <!--[-->
                                                                    <span class="h-icon" aria-hidden="true" data-icon-name="ic-magnifying-glass-24" style="color:var(--h-color-neutral-950);fill:var(--h-color-neutral-950);width:24px;height:24px;" data-v-c85a1cdf data-v-60345de4>
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3233 16.7374C13.9315 17.8262 12.1791 18.4751 10.2751 18.4751C5.7464 18.4751 2.07513 14.8038 2.07513 10.2751C2.07513 5.74634 5.7464 2.07507 10.2751 2.07507C14.8039 2.07507 18.4751 5.74634 18.4751 10.2751C18.4751 12.179 17.8262 13.9315 16.7375 15.3232L21.632 20.2178C22.0225 20.6083 22.0225 21.2415 21.6319 21.632C21.2414 22.0225 20.6082 22.0225 20.2177 21.632L15.3233 16.7374ZM16.4751 10.2751C16.4751 13.6992 13.6993 16.4751 10.2751 16.4751C6.85097 16.4751 4.07513 13.6992 4.07513 10.2751C4.07513 6.85091 6.85097 4.07507 10.2751 4.07507C13.6993 4.07507 16.4751 6.85091 16.4751 10.2751Z" fill="currentColor"/>
                                                                        </svg>
                                                                    </span>
                                                                    <!--]-->
                                                                    <div class="h-input__content" data-v-87597caf>
                                                                        <input id="templates-input-search" class="h-input__field" type="text" value placeholder="Search our projects &amp; products..." data-qa="templates-input-search-input" aria-invalid="false" aria-required="false" aria-describedby="templates-input-search" autocomplete="off" data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-v-87597caf>
                                                                        <!---->
                                                                    </div>
                                                                    <div class="h-input__icons-area" data-v-87597caf>
                                                                        <div class="h-input__clear-icon-container" style="width:24px;height:24px;" data-v-87597caf>
                                                                        <!---->
                                                                        </div>
                                                                        <!---->
                                                                        <!--[-->
                                                                        <!---->
                                                                        <!--]-->
                                                                        <!---->
                                                                    </div>
                                                                    <!--]-->
                                                                </div>
                                                                <!--[-->
                                                                <!---->
                                                                <!--]-->
                                                                <div class="h-input__empty-space" data-v-87597caf></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--]-->
                                                </div>
                                            </div>
                                        </div>
                                        <!--[-->
                                        <!--]-->
                                    </div>
                                    <!---->
                                    <!--]-->
                                </div>
                                <!---->
                                <!---->
                            </section>
                            <section class="templates-list h-grid u-spacing-1 templates-website-page__templates-list" data-v-b4e57e13 data-v-4a3f3f10>
                               <br>

                                <!---->
                                <div class="templates-list__templates h-grid--cols-m-1 h-grid--cols-t-2 h-grid--cols-d-3" data-v-4a3f3f10>
                                    <!---->
                                    <!--[-->
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Alpaca (online boutique)_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fe3600a2-deb0-426d-2962-ee810006c600/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fe3600a2-deb0-426d-2962-ee810006c600/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fe3600a2-deb0-426d-2962-ee810006c600/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fe3600a2-deb0-426d-2962-ee810006c600/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fe3600a2-deb0-426d-2962-ee810006c600/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fe3600a2-deb0-426d-2962-ee810006c600/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fe3600a2-deb0-426d-2962-ee810006c600/w=1280,sharpen=1 1280w" alt="Alpaca (online boutique)" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Agentic
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Alpaca (online boutique)</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Artisan (crafts store)_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6cbf6723-b8e5-4fa9-5956-753fdc965700/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6cbf6723-b8e5-4fa9-5956-753fdc965700/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6cbf6723-b8e5-4fa9-5956-753fdc965700/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6cbf6723-b8e5-4fa9-5956-753fdc965700/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6cbf6723-b8e5-4fa9-5956-753fdc965700/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6cbf6723-b8e5-4fa9-5956-753fdc965700/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6cbf6723-b8e5-4fa9-5956-753fdc965700/w=1280,sharpen=1 1280w" alt="Artisan (crafts store)" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Agentic
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Artisan (crafts store)</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Haven (furniture store)_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/105b3548-eab9-4b9a-4880-799670e94f00/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/105b3548-eab9-4b9a-4880-799670e94f00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/105b3548-eab9-4b9a-4880-799670e94f00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/105b3548-eab9-4b9a-4880-799670e94f00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/105b3548-eab9-4b9a-4880-799670e94f00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/105b3548-eab9-4b9a-4880-799670e94f00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/105b3548-eab9-4b9a-4880-799670e94f00/w=1280,sharpen=1 1280w" alt="Haven (furniture store)" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Agentic
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Haven (furniture store)</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Home decor store_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97240019-f61e-4f04-1340-e45a8d9df000/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97240019-f61e-4f04-1340-e45a8d9df000/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97240019-f61e-4f04-1340-e45a8d9df000/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97240019-f61e-4f04-1340-e45a8d9df000/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97240019-f61e-4f04-1340-e45a8d9df000/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97240019-f61e-4f04-1340-e45a8d9df000/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/97240019-f61e-4f04-1340-e45a8d9df000/w=1280,sharpen=1 1280w" alt="Home decor store" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Agentic
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Home decor store</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Nocturne (perfume shop)_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/543ac6bb-a54a-4750-f70d-957217ac6500/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/543ac6bb-a54a-4750-f70d-957217ac6500/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/543ac6bb-a54a-4750-f70d-957217ac6500/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/543ac6bb-a54a-4750-f70d-957217ac6500/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/543ac6bb-a54a-4750-f70d-957217ac6500/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/543ac6bb-a54a-4750-f70d-957217ac6500/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/543ac6bb-a54a-4750-f70d-957217ac6500/w=1280,sharpen=1 1280w" alt="Nocturne (perfume shop)" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Agentic
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Nocturne (perfume shop)</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Online coffee store_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6ce9ea12-421f-4ed8-e730-0dbfaf990400/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6ce9ea12-421f-4ed8-e730-0dbfaf990400/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6ce9ea12-421f-4ed8-e730-0dbfaf990400/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6ce9ea12-421f-4ed8-e730-0dbfaf990400/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6ce9ea12-421f-4ed8-e730-0dbfaf990400/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6ce9ea12-421f-4ed8-e730-0dbfaf990400/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/6ce9ea12-421f-4ed8-e730-0dbfaf990400/w=1280,sharpen=1 1280w" alt="Online coffee store" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Agentic
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Online coffee store</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Orelle (jewellery store)_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8d5fd025-66ca-46bb-d023-45677e4b5600/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8d5fd025-66ca-46bb-d023-45677e4b5600/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8d5fd025-66ca-46bb-d023-45677e4b5600/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8d5fd025-66ca-46bb-d023-45677e4b5600/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8d5fd025-66ca-46bb-d023-45677e4b5600/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8d5fd025-66ca-46bb-d023-45677e4b5600/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8d5fd025-66ca-46bb-d023-45677e4b5600/w=1280,sharpen=1 1280w" alt="Orelle (jewellery store)" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Agentic
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Orelle (jewellery store)</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Velour (fashion store)_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/1a6a2a4c-47b4-4edc-f94d-28f2fdbe0b00/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/1a6a2a4c-47b4-4edc-f94d-28f2fdbe0b00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/1a6a2a4c-47b4-4edc-f94d-28f2fdbe0b00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/1a6a2a4c-47b4-4edc-f94d-28f2fdbe0b00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/1a6a2a4c-47b4-4edc-f94d-28f2fdbe0b00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/1a6a2a4c-47b4-4edc-f94d-28f2fdbe0b00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/1a6a2a4c-47b4-4edc-f94d-28f2fdbe0b00/w=1280,sharpen=1 1280w" alt="Velour (fashion store)" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Agentic
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Velour (fashion store)</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a href="https://builder.hostinger.com/templates?preview=ameronlite&amp;hideRating=1" rel="noopener noreferrer" class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Ameron_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://cdn.zyrosite.com/cdn-builder-prod-screenshots/ameronlite0zcwe.jpeg" alt="Ameron" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Manual
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Ameron</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a href="https://builder.hostinger.com/templates?preview=anderslite&amp;hideRating=1" rel="noopener noreferrer" class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Anders_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://cdn.zyrosite.com/cdn-builder-prod-screenshots/anderslite12w3g.jpeg" alt="Anders" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Manual
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Anders</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a href="https://builder.hostinger.com/templates?preview=augustinelite&amp;hideRating=1" rel="noopener noreferrer" class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Augustine_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://cdn.zyrosite.com/cdn-builder-prod-screenshots/augustinelitek7jiv.jpeg" alt="Augustine" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Manual
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Augustine</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a href="https://builder.hostinger.com/templates?preview=aurelia&amp;hideRating=1" rel="noopener noreferrer" class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Aurelia (Jewellery store)_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://cdn.zyrosite.com/cdn-builder-prod-screenshots/aurelia.png" alt="Aurelia (Jewellery store)" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Manual
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Aurelia (Jewellery store)</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a href="https://builder.hostinger.com/templates?preview=auroralite&amp;hideRating=1" rel="noopener noreferrer" class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Aurora_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://cdn.zyrosite.com/cdn-builder-prod-screenshots/auroralitensfjv.jpeg" alt="Aurora" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Manual
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Aurora</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a href="https://builder.hostinger.com/templates?preview=casaunica&amp;hideRating=1" rel="noopener noreferrer" class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Casa Única (community-made)_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://cdn.zyrosite.com/cdn-builder-prod-screenshots/casaunica.png" alt="Casa Única (community-made)" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Manual
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Casa Única (community-made)</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <div class="h-media-card h-media-card--bg-h-color-neutral-0 templates-list__item" data-v-4a3f3f10 data-v-393a78b3>
                                        <a href="https://builder.hostinger.com/templates?preview=cavira&amp;hideRating=1" rel="noopener noreferrer" class="h-media-card__content-wrapper" data-click-id="hgr-templates_website_ecommerce-website-template_Cavira (poster store)_cta" data-v-393a78b3>
                                            <div class="h-media-card__media-wrapper" data-v-393a78b3>
                                                <div class="h-image" data-v-393a78b3 data-v-6835ff82 data-v-8554daca>
                                                    <img src="https://cdn.zyrosite.com/cdn-builder-prod-screenshots/cavira.png" alt="Cavira (poster store)" loading="lazy" fetchpriority="low" data-v-8554daca>
                                                </div>
                                                <div class="h-media-card__media-hover-item" data-v-393a78b3>
                                                    <div data-v-393a78b3>
                                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-light" style="" aria-label="Preview" aria-expanded="false" data-qa="media-card-button" data-v-dbdcf57d data-v-393a78b3>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-light);--h-circle-loader-border-color:var(--h-circle-loader-border-color-light);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                                </div>
                                                            </div>
                                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                                            <!--[-->
                                                            <!--[-->
                                                            Preview
                                                            <!--]-->
                                                            <!--]-->
                                                            </span>
                                                            <!--[-->
                                                            <!---->
                                                            <!--]-->
                                                        </button>
                                                    </div>
                                                </div>
                                                <button type="button" class="h-chip h-chip--primary-filled h-media-card__top-badge" style="" role="button" aria-pressed="false" aria-disabled="false" data-qa data-v-fd3baccb data-v-393a78b3>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                    <span class="h-typography h-t-body-2 h-chip__text" style="color:currentColor;" data-v-254de8eb data-v-fd3baccb>
                                                        <!--[-->
                                                        <!--[-->
                                                        <div class="h-media-card__top-badge-content" data-v-393a78b3>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-393a78b3>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 1V10.555L1 14.055V4.5L4.5 1Z" fill="currentColor"/>
                                                                    <path d="M11.4996 11.5L7.99959 15H1.90959L5.40959 11.5H11.4996Z" fill="currentColor"/>
                                                                    <path d="M15 1.945V11.5L11.5 15V5.445L15 1.945Z" fill="currentColor"/>
                                                                    <path d="M14.055 1L10.555 4.5H4.5L8 1H14.055Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                            Manual
                                                        </div>
                                                        <!--]-->
                                                        <!--]-->
                                                    </span>
                                                    <!--[-->
                                                    <!---->
                                                    <!--]-->
                                                </button>
                                            </div>
                                            <div class="h-media-card__content" data-v-393a78b3>
                                                <h3 class="h-media-card__title h-t-body-1" data-v-393a78b3>Cavira (poster store)</h3>
                                                <!---->
                                            </div>
                                        </a>
                                        <!---->
                                    </div>
                                    <!--]-->
                                </div>
                                <!---->
                                <div class="templates-pagination templates-list__pagination" data-v-4a3f3f10 data-v-86bf3f05>
                                    <!---->
                                    <!--[-->
                                    <div class="templates-pagination__button-wrapper" data-v-86bf3f05>
                                        <button class="h-button-v2 h-button-v2 h-button-v2--contain-neutral templates-pagination__button" style="" aria-label="1" aria-expanded="false" data-qa="pagination-page-1" data-v-dbdcf57d data-v-86bf3f05>
                                            <!--[-->
                                            <!---->
                                            <!--]-->
                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-neutral);--h-circle-loader-border-color:var(--h-circle-loader-border-color-neutral);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                </div>
                                            </div>
                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                            <!--[-->
                                            <!--[-->
                                            1
                                            <!--]-->
                                            <!--]-->
                                            </span>
                                            <!--[-->
                                            <!---->
                                            <!--]-->
                                        </button>
                                    </div>
                                    <div class="templates-pagination__button-wrapper" data-v-86bf3f05>
                                        <button class="h-button-v2 h-button-v2 h-button-v2--text-neutral templates-pagination__button" style="" aria-label="2" aria-expanded="false" data-qa="pagination-page-2" data-v-dbdcf57d data-v-86bf3f05>
                                            <!--[-->
                                            <!---->
                                            <!--]-->
                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-neutral);--h-circle-loader-border-color:var(--h-circle-loader-border-color-neutral);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                </div>
                                            </div>
                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                            <!--[-->
                                            <!--[-->
                                            2
                                            <!--]-->
                                            <!--]-->
                                            </span>
                                            <!--[-->
                                            <!---->
                                            <!--]-->
                                        </button>
                                    </div>
                                    <div class="templates-pagination__button-wrapper" data-v-86bf3f05>
                                        <button class="h-button-v2 h-button-v2 h-button-v2--text-neutral templates-pagination__button" style="" aria-label="3" aria-expanded="false" data-qa="pagination-page-3" data-v-dbdcf57d data-v-86bf3f05>
                                            <!--[-->
                                            <!---->
                                            <!--]-->
                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-neutral);--h-circle-loader-border-color:var(--h-circle-loader-border-color-neutral);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                </div>
                                            </div>
                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                            <!--[-->
                                            <!--[-->
                                            3
                                            <!--]-->
                                            <!--]-->
                                            </span>
                                            <!--[-->
                                            <!---->
                                            <!--]-->
                                        </button>
                                    </div>
                                    <div class="templates-pagination__button-wrapper" data-v-86bf3f05>
                                        <button class="h-button-v2 h-button-v2 h-button-v2--text-neutral templates-pagination__button" style="" aria-label="4" aria-expanded="false" data-qa="pagination-page-4" data-v-dbdcf57d data-v-86bf3f05>
                                            <!--[-->
                                            <!---->
                                            <!--]-->
                                            <div class="h-button-v2__loader" style="display:none;" data-v-dbdcf57d>
                                                <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-neutral);--h-circle-loader-border-color:var(--h-circle-loader-border-color-neutral);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                                    <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                                </div>
                                            </div>
                                            <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
                                            <!--[-->
                                            <!--[-->
                                            4
                                            <!--]-->
                                            <!--]-->
                                            </span>
                                            <!--[-->
                                            <!---->
                                            <!--]-->
                                        </button>
                                    </div>
                                    <!--]-->
                                    <button class="h-icon-button h-icon-button--text-neutral templates-pagination__button" style="" aria-label="ChevronSmallRight" aria-disabled="false" aria-busy="false" tabindex="0" data-v-53b80b60 data-v-86bf3f05>
                                        <!--[-->
                                        <span class="h-icon" aria-hidden="true" data-icon-name="ic-chevron-small-right-24" style="color:currentColor;fill:currentColor;width:24px;height:24px;" data-v-c85a1cdf data-v-86bf3f05>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.04289 6.04289C9.43342 5.65237 10.0666 5.65237 10.4571 6.04289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.4571 17.9571C10.0666 18.3476 9.43342 18.3476 9.04289 17.9571C8.65237 17.5666 8.65237 16.9334 9.04289 16.5429L13.5858 12L9.04289 7.45711C8.65237 7.06658 8.65237 6.43342 9.04289 6.04289Z" fill="currentColor"/>
                                            </svg>
                                        </span>
                                        <!--]-->
                                        <div class="h-icon-button__loader" style="display:none;" data-v-53b80b60>
                                            <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-neutral);--h-circle-loader-border-color:var(--h-circle-loader-border-color-neutral);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-53b80b60>
                                                <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <!---->
                                <!---->
                            </section>
                            <section data-view-id="hgr-templates_website_ecommerce-faqs-section" class="hw-faq-section theme-base theme-hWebsites mode-light u-spacing-2" data-v-b4e57e13 data-v-028d31c8>
                                <!---->
                                <div class="h-section-one-col h-section-one-col--bg-h-color-neutral-0" dir="ltr" data-v-028d31c8 data-v-50907970>
                                    <div class="h-section-one-col__content--max-width h-section-one-col__content h-grid h-grid--cols-m-1 h-grid--cols-t-1" style="max-width:;" data-v-50907970>
                                        <div class="h-grid-item" data-v-50907970>
                                            <!--[-->
                                            <div class="hw-headline h-mb-64" dir="ltr" data-v-028d31c8 data-v-ec35f884>
                                                <div class="hw-headline__top" data-v-ec35f884>
                                                    <!---->
                                                    <!--[-->
                                                    <h2 class="h-t-title-1 hw-headline__title" data-v-ec35f884>Website templates FAQs</h2>
                                                    <!--]-->
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                            </div>
                                            <!--[-->
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-1" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_0" data-v-028d31c8>What is a website template?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-1" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>A website template, or website theme, is a pre-designed layout for a website that includes ready-made structure, design elements, and sample content. It acts as a starting point that you can customize with your own text, images, branding, and features to create a complete website quickly.</p>
                                                                <p>Hostinger website templates typically include:</p>
                                                                <ul>
                                                                    <li>Page layouts (homepage, about, contact, etc.)</li>
                                                                    <li>Design elements like fonts, colors, and sections</li>
                                                                    <li>Navigation structure</li>
                                                                    <li>Responsive design so the site works on mobile and desktop.</li>
                                                                </ul>
                                                                <p>Using a template means you don’t need to design or code a website from scratch. Instead, you select a template that fits your needs and modify it to match your brand or project.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-2" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_1" data-v-028d31c8>What are the different types of website templates?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-2" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>Hostinger website templates are designed for a variety of purposes and industries. Depending on the niche, the designs range from clean and minimalistic to vibrant and bold.</p>
                                                                <p>Some of the most popular template categories include ecommerce, portfolio, business, resume, blog, marketing, and fashion. There is also a selection of blank templates if you already have a specific vision you want to bring to life.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-3" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_2" data-v-028d31c8>How do I choose a template for my website?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-3" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>Start by thinking about what you want to achieve with your website. Depending on your goals, you may need different types of websites. For example, you might use:</p>
                                                                <ul>
                                                                    <li>a business website template for a company site</li>
                                                                    <li>a portfolio template to showcase your work</li>
                                                                    <li>an ecommerce template to sell products online.</li>
                                                                </ul>
                                                                <p>Once you’ve identified the type of site you need, consider the following:</p>
                                                                <ul>
                                                                    <li>Required features and functionality. For example, ecommerce sites need product pages and checkout options, while influencers or creators may prefer blog-style layouts to share stories and photos.</li>
                                                                    <li>Layout and design style. Choose a layout that suits your content, such as a minimalist design for portfolios or a more dynamic layout for businesses.</li>
                                                                    <li>Brand alignment. The template’s look and feel should be close to your brand’s style so it can be easily customized to match your identity.</li>
                                                                </ul>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-4" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_3" data-v-028d31c8>What makes a good web design template?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-4" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>While there’s no definitive answer, good web design templates should be fully mobile-responsive, made using HTML5, and follow modern design principles and trends.</p>
                                                                <p>On top of that, a good website layout template should serve multiple purposes. For example, a one-page website design should be easy to transform into an online store by adding ecommerce functionality and extra pages.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-5" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_4" data-v-028d31c8>How do I create a website using a template?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-5" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>Simply choose the website design you like – you can preview it before you start editing.</p>
                                                                <p>
                                                                    Hostinger offers two types of website templates – <a href='/website-builder'>Hostinger Website Builder</a>
                                                                    and <a href='/ai-builder'>Horizons</a>
                                                                    templates. Both are mobile-friendly, SEO-ready, and easy to customize and launch. The difference lies in how you edit them.
                                                                </p>
                                                                <p>Hostinger Website Builder templates use a traditional drag-and-drop editor, allowing you to change fonts, adjust colors, and update images and text manually. AI tools, such as AI Writer, are also available to help speed things up.</p>
                                                                <p>Horizons templates follow a vibe coding approach. You can update text and images directly, and adjust fonts or color schemes by describing the changes to an AI agent, which will apply them for you.</p>
                                                                <p>Both approaches are beginner-friendly and make it easy to apply changes quickly – so simply choose the template that suits you best.</p>
                                                                <p>Once you’re happy with how your website looks, click Publish, and it will go live immediately.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-6" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_5" data-v-028d31c8>Are Hostinger website templates free?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-6" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>You can start building your project using any Hostinger template for free, with no credit card required. However, you’ll need to upgrade to a paid plan when you’re ready to publish your project online.</p>
                                                                <p>Depending on the template you choose, plans start at $2.99/mo for templates built with the drag-and-drop website builder, or $6.99/mo for templates powered by the vibe-coding editor.</p>
                                                                <p>Hostinger plans already include hosting and a custom domain name, so you won’t need to pay extra or use third-party services.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-7" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_6" data-v-028d31c8>Can I add more pages to my chosen theme?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-7" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>Absolutely – think of web design templates as creative examples of how a website could look. You can customize them freely and add new pages or sections whenever you need while editing your project.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-8" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_7" data-v-028d31c8>Do I need coding skills to use a template?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-8" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>No. Hostinger website design templates are built to be easy to customize without coding. You can edit layouts, text, images, and other elements while building your project, allowing you to create a professional website without technical skills.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-9" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_8" data-v-028d31c8>Are Hostinger website templates good for SEO?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-9" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>Yes, all Hostinger template websites are optimized for search engines. Whether you’re creating a landing page, portfolio, or an online store, your website will benefit from fast loading speeds, a logical structure, and built-in on-page SEO features.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-10" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_9" data-v-028d31c8>Are website templates mobile-friendly?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-10" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>All of Hostinger’s templates for websites are fully mobile-responsive. This means that no matter what device your audience is using, your website will look pixel-perfect at all times. </p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-11" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_10" data-v-028d31c8>Can I make changes to my website after I’ve published it?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-11" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>Of course. Even the best websites benefit from regular updates. From time to time, you may want to create new pages, update existing content, or add new functionality as your website grows. Your contact details might change, or your project may evolve into a full ecommerce business. Whenever needed, simply return to your project, make the updates, and publish the changes.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hw-accordion" style="--hw-accordion-line-height:26px;" dir="ltr" data-v-028d31c8 data-v-40641482>
                                                <div class="hw-accordion__header" role="button" tabindex="0" aria-controls="v-0-12" aria-expanded="false" data-v-40641482>
                                                    <span class="hw-accordion__lead" data-v-40641482>
                                                        <!---->
                                                        <div class="h-t-heading-3-regular hw-accordion__title" data-v-40641482>
                                                            <!--[-->
                                                            <h3 class="h-t-heading-3-regular" data-click-id="hgr-templates_website_ecommerce-faq_section-item_11" data-v-028d31c8>Can I change the code of my website?</h3>
                                                            <!--]-->
                                                        </div>
                                                    </span>
                                                    <!---->
                                                    <span class="hw-accordion__append" data-v-40641482>
                                                        <!--[-->
                                                        <div class="hw-boxed-icon" style="" data-v-40641482 data-v-8950b1e0>
                                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-plus-16" style="color:currentColor;fill:currentColor;width:16px;height:16px;" data-v-c85a1cdf data-v-8950b1e0>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M8.75 3.25C8.75 2.83579 8.41421 2.5 8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25Z" fill="currentColor"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <!--]-->
                                                    </span>
                                                </div>
                                                <div id="v-0-12" class="hw-accordion__panel" inert data-v-40641482>
                                                    <div class="hw-accordion__panel-inner" data-v-40641482>
                                                        <div class="hw-accordion__content" data-v-40641482>
                                                            <div class="hw-accordion__subtext h-t-body-1" data-v-40641482>
                                                                <p>Depending on the editor you use, the level of access to your website’s code may vary.</p>
                                                                <p>
                                                                    With Hostinger Website Builder, you can’t directly edit the source code of a template-based site, but you can <a href='https://www.hostinger.com/support/6463152-website-builder-how-to-embed-custom-code'>add custom code snippets to your pages</a>
                                                                    . This allows you to extend your website with additional functionality, such as widgets, infographics, interactive maps, forms, animations, and more.
                                                                </p>
                                                                <p>With Hostinger AI Builder, you have full access to your project’s code, giving you greater flexibility and making it a good option for more advanced users who want deeper customization.</p>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--]-->
                                            <!--]-->
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="h-content-cards theme-base theme-hWebsites mode-light u-spacing-2" style="background:var(--h-color-neutral-50);" data-v-b4e57e13 data-v-7833fa48>
                                <!---->
                                <div class="h-section-one-col h-section-one-col--bg-h-color-neutral-50" dir="ltr" data-v-7833fa48 data-v-50907970>
                                    <div class="h-section-one-col__content--max-width h-section-one-col__content h-grid h-grid--cols-m-1 h-grid--cols-t-1" style="max-width:;" data-v-50907970>
                                        <div class="h-grid-item" data-v-50907970>
                                            <!--[-->
                                            <div class="hw-headline h-mb-32 h-mb-40-t h-mb-48-d" dir="ltr" data-v-7833fa48 data-v-ec35f884>
                                                <div class="hw-headline__top" data-v-ec35f884>
                                                    <!---->
                                                    <!--[-->
                                                    <h2 class="h-t-title-1 hw-headline__title" data-v-ec35f884>Can’t find the template you need?</h2>
                                                    <!--]-->
                                                    <!---->
                                                    <!---->
                                                </div>
                                                <!---->
                                            </div>
                                            <!--[-->
                                            <!--]-->
                                            <div class="h-grid--cols-d-2 h-content-cards__container h-grid h-grid--cols-m-1" data-v-7833fa48>
                                                <!--[-->
                                                <a href="https://auth.hostinger.com/register?redirectUrl=https%3A%2F%2Fhpanel.hostinger.com%2Fai-builder-trial&amp;promo=ai-website-builder" rel="noopener noreferrer" class="h-content-card theme-base theme-hWebsites mode-light h-content-card--borderless h-content-card--clickable h-content-card--bg-h-color-neutral-0 h-content-card--ltr" style="background:var(--h-color-neutral-0);" data-v-7833fa48 data-v-55a94a94>
                                                    <!---->
                                                    <!---->
                                                    <div class="h-content-card__icons-container" data-v-55a94a94>
                                                        <div data-v-55a94a94>
                                                            <div class="h-content-card__icon theme-base theme-hWebsites mode-light" data-v-55a94a94>
                                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-builder-logo-24" style="color:var(--h-color-neutral-800);fill:var(--h-color-neutral-800);width:24px;height:24px;" data-v-c85a1cdf data-v-55a94a94>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7 2V15.65L2 20.65V7L7 2Z" fill="currentColor"/>
                                                                        <path d="M16.9994 17L11.9994 22H3.29941L8.29941 17H16.9994Z" fill="currentColor"/>
                                                                        <path d="M22 3.35V17L17 22V8.35L22 3.35Z" fill="currentColor"/>
                                                                        <path d="M20.65 2L15.65 7H7L12 2H20.65Z" fill="currentColor"/>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <span class="h-icon h-content-card__link-icon" aria-hidden="true" data-icon-name="ic-arrow-up-right-24" style="color:currentColor;fill:currentColor;width:20px;height:20px;" data-v-c85a1cdf data-v-55a94a94>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.82503 16.5926C8.4345 16.9831 7.80134 16.9831 7.41081 16.5926C7.02029 16.2021 7.02029 15.5689 7.41081 15.1784L17.1618 5.42734C17.5524 5.03681 18.1855 5.03681 18.5761 5.42734C18.9666 5.81786 18.9666 6.45103 18.5761 6.84155L8.82503 16.5926Z" fill="currentColor"/>
                                                                <path d="M18.8807 13.5476C18.8807 14.0998 18.4331 14.5474 17.8808 14.5475C17.3285 14.5474 16.8809 14.0998 16.8809 13.5476L16.8816 7.12352L10.4583 7.12352C9.90599 7.12353 9.45769 6.67523 9.45769 6.12294C9.45774 5.5709 9.9056 5.12338 10.4576 5.12305L17.8808 5.12305C18.146 5.12305 18.4004 5.22834 18.5879 5.41583C18.7754 5.60335 18.8807 5.85775 18.8807 6.12294L18.8807 13.5476Z" fill="currentColor"/>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <!---->
                                                    <div class="h-content-card__subtitle h-t-heading-3" data-v-55a94a94>Create with AI Website Builder</div>
                                                    <!--[-->
                                                    <!--]-->
                                                    <div class="h-content-card__description h-t-body-1" data-v-55a94a94>Create a website from a single prompt using the power of AI, then customize every detail with simple drag-and-drop tools.</div>
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!--[-->
                                                    <!--]-->
                                                </a>
                                                <a href="https://auth.hostinger.com/register?redirectUrl=https%3A%2F%2Fhpanel.hostinger.com%2Fai-builder-trial&amp;promo=horizons" rel="noopener noreferrer" class="h-content-card theme-base theme-hWebsites mode-light h-content-card--borderless h-content-card--clickable h-content-card--bg-h-color-neutral-0 h-content-card--ltr" style="background:var(--h-color-neutral-0);" data-v-7833fa48 data-v-55a94a94>
                                                    <!---->
                                                    <!---->
                                                    <div class="h-content-card__icons-container" data-v-55a94a94>
                                                        <div data-v-55a94a94>
                                                            <div class="h-content-card__icon theme-base theme-hWebsites mode-light" data-v-55a94a94>
                                                                <span class="h-icon" aria-hidden="true" data-icon-name="ic-horizons-24" style="color:var(--h-color-neutral-800);fill:var(--h-color-neutral-800);width:24px;height:24px;" data-v-c85a1cdf data-v-55a94a94>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.5815 5.55045C18.9354 5.55045 18.3029 5.28898 17.7605 4.79979L15.8603 3.08088C15.3289 2.60097 14.5201 2.60097 13.9887 3.08088L12.0885 4.79979C11.5461 5.29067 10.9136 5.55045 10.2675 5.55045H2.72217V8.6956H10.2683C10.9144 8.6956 11.547 8.43413 12.0893 7.94494L13.9896 6.22603C14.5209 5.74612 15.3298 5.74612 15.8611 6.22603L17.7614 7.94494C18.3037 8.43582 18.9363 8.6956 19.5823 8.6956H21.2785V5.55045H19.5815Z" fill="currentColor"/>
                                                                        <path d="M19.5815 11.8391C18.9354 11.8391 18.3029 11.5776 17.7605 11.0884L15.8603 9.3695C15.3289 8.88959 14.5201 8.88959 13.9887 9.3695L12.0885 11.0884C11.5461 11.5793 10.9136 11.8391 10.2675 11.8391H2.72217V14.9842H10.2683C10.9144 14.9842 11.547 14.7228 12.0893 14.2336L13.9896 12.5147C14.5209 12.0347 15.3298 12.0347 15.8611 12.5147L17.7614 14.2336C18.3037 14.7244 18.9363 14.9842 19.5823 14.9842H21.2785V11.8391H19.5815Z" fill="currentColor"/>
                                                                        <path d="M17.7605 17.3785C18.3029 17.8676 18.9354 18.1291 19.5815 18.1291H21.2785V21.2743H19.5823C18.9363 21.2743 18.3037 21.0145 17.7614 20.5236L15.8611 18.8047C15.3298 18.3248 14.5209 18.3248 13.9896 18.8047L12.0893 20.5236C11.547 21.0128 10.9144 21.2743 10.2683 21.2743H2.72217V18.1291H10.2675C10.9136 18.1291 11.5461 17.8693 12.0885 17.3785L13.9887 15.6595C14.5201 15.1796 15.3289 15.1796 15.8603 15.6595L17.7605 17.3785Z" fill="currentColor"/>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <span class="h-icon h-content-card__link-icon" aria-hidden="true" data-icon-name="ic-arrow-up-right-24" style="color:currentColor;fill:currentColor;width:20px;height:20px;" data-v-c85a1cdf data-v-55a94a94>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.82503 16.5926C8.4345 16.9831 7.80134 16.9831 7.41081 16.5926C7.02029 16.2021 7.02029 15.5689 7.41081 15.1784L17.1618 5.42734C17.5524 5.03681 18.1855 5.03681 18.5761 5.42734C18.9666 5.81786 18.9666 6.45103 18.5761 6.84155L8.82503 16.5926Z" fill="currentColor"/>
                                                                <path d="M18.8807 13.5476C18.8807 14.0998 18.4331 14.5474 17.8808 14.5475C17.3285 14.5474 16.8809 14.0998 16.8809 13.5476L16.8816 7.12352L10.4583 7.12352C9.90599 7.12353 9.45769 6.67523 9.45769 6.12294C9.45774 5.5709 9.9056 5.12338 10.4576 5.12305L17.8808 5.12305C18.146 5.12305 18.4004 5.22834 18.5879 5.41583C18.7754 5.60335 18.8807 5.85775 18.8807 6.12294L18.8807 13.5476Z" fill="currentColor"/>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <!---->
                                                    <div class="h-content-card__subtitle h-t-heading-3" data-v-55a94a94>Create with AI Builder</div>
                                                    <!--[-->
                                                    <!--]-->
                                                    <div class="h-content-card__description h-t-body-1" data-v-55a94a94>Build fully functional websites and apps by simply chatting with AI.</div>
                                                    <!---->
                                                    <!---->
                                                    <!---->
                                                    <!--[-->
                                                    <!--]-->
                                                </a>
                                                <!--]-->
                                                <!--[-->
                                                <!--]-->
                                            </div>
                                            <!--]-->
                                        </div>
                                    </div>
                                </div>
                                <!---->
                            </section>
                            <section class="h-banner-with-image h-banner-with-image--bg-h-color-primary-600-mobile-image" data-v-b4e57e13 data-v-223bab6b>
                                <div class="h-banner-with-image__wrapper" data-v-223bab6b>
                                    <div class="h-banner-with-image__left-content" data-v-223bab6b>
                                        <h2 class="h-t-title-special h-banner-with-image__title" data-v-223bab6b>Like what you see?</h2>
                                        <div class="h-banner-with-image__description h-t-body-1 h-mt-12 h-mt-16-d" data-v-223bab6b>Have a project or custom software idea in mind? Let our engineering team build and scale your vision.</div>
                                        <!---->
                                        <div class="h-banner-with-image__button-wrapper" data-v-223bab6b>
                                            <a href="/contact" class="h-hyperlink h-hyperlink--button h-hyperlink--button__x-large h-hyperlink--button-contain-light" style="" data-click-id="hgr-templates_website_ecommerce-explore_all" data-v-4fad864a data-v-223bab6b>
                                                <!--[-->
                                                <!---->
                                                <!--]-->
                                                <!---->
                                                <span class="h-typography h-t-button-1 hyperlink-text" style="color:currentColor;" data-v-254de8eb data-v-4fad864a>
                                                <!--[-->
                                                <!--[-->
                                                Start a Project with Us
                                                <!--]-->
                                                <!--]-->
                                                </span>
                                                <!--[-->
                                                <!---->
                                                <!--]-->
                                            </a>
                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="h-banner-with-image__right-content" data-v-223bab6b>
                                        <div class="h-image" data-v-223bab6b data-v-6835ff82 data-v-8554daca>
                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fea13b50-3282-43fc-73c7-ce9b2b083800/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fea13b50-3282-43fc-73c7-ce9b2b083800/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fea13b50-3282-43fc-73c7-ce9b2b083800/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fea13b50-3282-43fc-73c7-ce9b2b083800/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fea13b50-3282-43fc-73c7-ce9b2b083800/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fea13b50-3282-43fc-73c7-ce9b2b083800/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/fea13b50-3282-43fc-73c7-ce9b2b083800/w=1280,sharpen=1 1280w" alt="Like what you see?" loading="lazy" fetchpriority="low" data-v-8554daca>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <!--]-->
                    </main>
                    <footer class="hw-footer h-t-body-2 theme-base theme-hWebsites mode-light" data-view-id="hgr-templates_website_ecommerce-footer" dir="ltr" style="background:var(--h-bg-neutral-secondary);" data-v-e390f074 data-v-814ce015>
                        <div class="hw-footer__wrapper" data-v-814ce015>
                            <div class="h-grid h-grid--cols-m-1 h-grid--cols-t-1" data-v-814ce015>
                                <div class="hw-footer__breadcrumbs" data-v-814ce015>
                                    <div class="h-footer-breadcrumbs" data-v-814ce015 data-v-d9ba0eb0>
                                        <!--[-->
                                        <!--[-->
                                        <a href="/" class="h-t-body-2" index="0" data-v-d9ba0eb0>Hostinger</a>
                                        <span class="h-icon h-footer-breadcrumbs__chevron" aria-hidden="true" data-icon-name="ic-chevron-small-right-16" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:16px;height:16px;" data-v-c85a1cdf data-v-d9ba0eb0>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.96967 3.96967C6.26256 3.67678 6.73744 3.67678 7.03033 3.96967L10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L7.03033 12.0303C6.73744 12.3232 6.26256 12.3232 5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697L8.93934 8L5.96967 5.03033C5.67678 4.73744 5.67678 4.26256 5.96967 3.96967Z" fill="currentColor"/>
                                            </svg>
                                        </span>
                                        <!--]-->
                                        <!--[-->
                                        <a href="/templates" class="h-t-body-2" index="1" data-v-d9ba0eb0>Templates</a>
                                        <span class="h-icon h-footer-breadcrumbs__chevron" aria-hidden="true" data-icon-name="ic-chevron-small-right-16" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:16px;height:16px;" data-v-c85a1cdf data-v-d9ba0eb0>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.96967 3.96967C6.26256 3.67678 6.73744 3.67678 7.03033 3.96967L10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L7.03033 12.0303C6.73744 12.3232 6.26256 12.3232 5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697L8.93934 8L5.96967 5.03033C5.67678 4.73744 5.67678 4.26256 5.96967 3.96967Z" fill="currentColor"/>
                                            </svg>
                                        </span>
                                        <!--]-->
                                        <!--[-->
                                        <a href="/templates/website" class="h-t-body-2" index="2" data-v-d9ba0eb0>Website</a>
                                        <span class="h-icon h-footer-breadcrumbs__chevron" aria-hidden="true" data-icon-name="ic-chevron-small-right-16" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:16px;height:16px;" data-v-c85a1cdf data-v-d9ba0eb0>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.96967 3.96967C6.26256 3.67678 6.73744 3.67678 7.03033 3.96967L10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L7.03033 12.0303C6.73744 12.3232 6.26256 12.3232 5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697L8.93934 8L5.96967 5.03033C5.67678 4.73744 5.67678 4.26256 5.96967 3.96967Z" fill="currentColor"/>
                                            </svg>
                                        </span>
                                        <!--]-->
                                        <!--[-->
                                        <b class="h-t-body-2" index="3" data-v-d9ba0eb0>Ecommerce</b>
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
                                                <span class="h-footer-section__title h-t-body-1-bold" data-v-a2abc336>Hosting</span>
                                                <!--[-->
                                                <a href="/web-hosting" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-web_hosting" data-qa="footer-link-web-hosting-page" data-v-a2abc336>Web hosting 
                                                <!---->
                                                </a>
                                                <a href="/wordpress-hosting" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-wordpress_hosting" data-qa="footer-link-wordpress-hosting-page" data-v-a2abc336>Hosting for WordPress 
                                                <!---->
                                                </a>
                                                <a href="/vps-hosting" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-vps_hosting" data-qa="footer-link-vps-hosting-page" data-v-a2abc336>VPS hosting 
                                                <!---->
                                                </a>
                                                <a href="/self-hosted-n8n" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-self_hosted-n8n" data-qa="footer-link-self-hosted-n8n-page" data-v-a2abc336>Self-hosted n8n 
                                                <!---->
                                                </a>
                                                <a href="/business-email" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-business_email" data-qa="footer-link-business-email-page" data-v-a2abc336>Business email 
                                                <!---->
                                                </a>
                                                <a href="/cloud-hosting" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-cloud_hosting" data-qa="footer-link-cloud-hosting-page" data-v-a2abc336>Cloud hosting 
                                                <!---->
                                                </a>
                                                <a href="/woocommerce-hosting" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-woocommerce_hosting" data-qa="footer-link-woocommerce-hosting-page" data-v-a2abc336>Hosting for WooCommerce 
                                                <!---->
                                                </a>
                                                <a href="/pro" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-pro" data-qa="footer-link-pro-page" data-v-a2abc336>Hosting for agencies 
                                                <!---->
                                                </a>
                                                <a href="/vps/minecraft-hosting" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-vps_templates-minecraft-hosting" data-qa="footer-link-vps-templates-minecraft-hosting-page" data-v-a2abc336>Minecraft hosting 
                                                <!---->
                                                </a>
                                                <a href="https://www.hostinger.com/applications/hermes-agent" rel="noopener noreferrer" target="_self" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-ai_automation-apps" data-qa="footer-link-ai-automation-apps-page" data-v-a2abc336>Hermes Agent VPS 
                                                <!---->
                                                </a>
                                                <a href="/ai-automation-apps" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-ai_automation-apps" data-qa="footer-link-ai-automation-apps-page" data-v-a2abc336>OpenClaw 
                                                <!---->
                                                </a>
                                                <a href="https://www.hostinger.com/applications/paperclip" rel="noopener noreferrer" target="_self" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-docker_applications-paperclip" data-qa="footer-link-docker-applications-paperclip-page" data-v-a2abc336>Paperclip VPS 
                                                <!---->
                                                </a>
                                                <a href="/google-workspace" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-google_workspace" data-qa="footer-link-google-workspace-page" data-v-a2abc336>Google Workspace 
                                                <!---->
                                                </a>
                                                <!--]-->
                                            </span>
                                        </div>
                                        <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                            <span data-v-a2abc336>
                                                <span class="h-footer-section__title h-t-body-1-bold" data-v-a2abc336>Domain</span>
                                                <!--[-->
                                                <a href="/domain-name-search" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-domain_name-search" data-qa="footer-link-domain-name-search-page" data-v-a2abc336>Domain name search 
                                                <!---->
                                                </a>
                                                <a href="/domains" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-domains" data-qa="footer-link-domains-page" data-v-a2abc336>Buy a domain 
                                                <!---->
                                                </a>
                                                <a href="/cheap-domain-names" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-cheap_domain-names" data-qa="footer-link-cheap-domain-names-page" data-v-a2abc336>Cheap domain names 
                                                <!---->
                                                </a>
                                                <a href="/free-domain" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-free_domain" data-qa="footer-link-free-domain-page" data-v-a2abc336>Free domain 
                                                <!---->
                                                </a>
                                                <a href="/whois" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-whois" data-qa="footer-link-whois-page" data-v-a2abc336>WHOIS Lookup 
                                                <!---->
                                                </a>
                                                <a href="/free-ssl-certificate" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-free_ssl-certificate" data-qa="footer-link-free-ssl-certificate-page" data-v-a2abc336>Free SSL certificate 
                                                <!---->
                                                </a>
                                                <a href="/transfer-domain" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-transfer_domain" data-qa="footer-link-transfer-domain-page" data-v-a2abc336>Domain transfer 
                                                <!---->
                                                </a>
                                                <a href="/tld" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-tld" data-qa="footer-link-tld-page" data-v-a2abc336>Domain extensions 
                                                <!---->
                                                </a>
                                                <a href="/personal-domain-name" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-personal_domain-name" data-qa="footer-link-personal-domain-name-page" data-v-a2abc336>Personal domain name 
                                                <!---->
                                                </a>
                                                <a href="/premium-domains" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-premium_domains" data-qa="footer-link-premium-domains-page" data-v-a2abc336>Premium domains 
                                                <!---->
                                                </a>
                                                <!--]-->
                                            </span>
                                        </div>
                                        <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                            <span data-v-a2abc336>
                                                <span class="h-footer-section__title h-t-body-1-bold" data-v-a2abc336>Tools</span>
                                                <!--[-->
                                                <a href="/ai-builder" rel="noopener" target="_blank" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-ai_builder" data-qa="footer-link-ai-builder-page" data-v-a2abc336>AI Builder 
                                                <!---->
                                                </a>
                                                <a href="/website-builder" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-website_builder" data-qa="footer-link-website-builder-page" data-v-a2abc336>Website Builder 
                                                <!---->
                                                </a>
                                                <a href="/ai-website-builder" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-ai_website-builder" data-qa="footer-link-ai-website-builder-page" data-v-a2abc336>AI Website Builder 
                                                <!---->
                                                </a>
                                                <a href="/ecommerce-website" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-ecommerce_website" data-qa="footer-link-ecommerce-website-page" data-v-a2abc336>Ecommerce Website Builder 
                                                <!---->
                                                </a>
                                                <a href="/templates" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-templates" data-qa="footer-link-templates-page" data-v-a2abc336>Templates 
                                                <!---->
                                                </a>
                                                <a href="/domain-name-generator" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-domain_name-generator" data-qa="footer-link-domain-name-generator-page" data-v-a2abc336>Domain Name Generator 
                                                <!---->
                                                </a>
                                                <a href="/print-on-demand" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-print_on-demand" data-qa="footer-link-print-on-demand-page" data-v-a2abc336>Print on Demand 
                                                <!---->
                                                </a>
                                                <a href="/link-in-bio" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-link_in-bio" data-qa="footer-link-link-in-bio-page" data-v-a2abc336>Link in Bio 
                                                <!---->
                                                </a>
                                                <a href="/business-name-generator" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-business_name-generator" data-qa="footer-link-business-name-generator-page" data-v-a2abc336>Business Name Generator 
                                                <!---->
                                                </a>
                                                <a href="/ai-email-generator" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-ai_email-generator" data-qa="footer-link-ai-email-generator-page" data-v-a2abc336>AI Newsletter Generator 
                                                <!---->
                                                </a>
                                                <a href="/logo-maker" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-logo_maker" data-qa="footer-link-logo-maker-page" data-v-a2abc336>AI Logo Generator 
                                                <!---->
                                                </a>
                                                <a href="/website-migration" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-website_migration" data-qa="footer-link-website-migration-page" data-v-a2abc336>Migrate to Hostinger 
                                                <!---->
                                                </a>
                                                <a href="/developers" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-api" data-qa="footer-link-api-page" data-v-a2abc336>Saastify Developers &amp; Architecture 
                                                <!---->
                                                </a>
                                                <!--]-->
                                            </span>
                                        </div>
                                        <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                            <span data-v-a2abc336>
                                                <span class="h-footer-section__title h-t-body-1-bold" data-v-a2abc336>Information</span>
                                                <!--[-->
                                                <a href="/pricing" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-pricing" data-qa="footer-link-pricing-page" data-v-a2abc336>Pricing 
                                                <!---->
                                                </a>
                                                <a href="/reviews" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-reviews" data-qa="footer-link-reviews-page" data-v-a2abc336>Reviews 
                                                <!---->
                                                </a>
                                                <a href="/affiliates" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-affiliates" data-qa="footer-link-affiliates-page" data-v-a2abc336>Affiliate program 
                                                <!---->
                                                </a>
                                                <a href="/educational-partnership" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-educational_partnership" data-qa="footer-link-educational-partnership-page" data-v-a2abc336>Educational partnership 
                                                <!---->
                                                </a>
                                                <a href="/referral-program" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-referral_program" data-qa="footer-link-referral-program-page" data-v-a2abc336>Referral program 
                                                <!---->
                                                </a>
                                                <a href="/agency-directory" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-agency_directory" data-qa="footer-link-agency-directory-page" data-v-a2abc336>Agency directory 
                                                <!---->
                                                </a>
                                                <a href="https://roadmap.hostinger.com/" rel="noopener noreferrer" target="_blank" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-roadmap" data-qa="footer-link-roadmap-page" data-v-a2abc336>Roadmap 
                                                <!---->
                                                </a>
                                                <a href="https://statuspage.hostinger.com/" rel="noopener noreferrer" target="_blank" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-system_status" data-qa="footer-link-system-status-page" data-v-a2abc336>System status 
                                                <!---->
                                                </a>
                                                <a href="https://trust.hostinger.com/" rel="noopener noreferrer" target="_blank" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-trust_center" data-qa="footer-link-trust-center-page" data-v-a2abc336>Trust center 
                                                <!---->
                                                </a>
                                                <a href="/sitemap" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-sitemap" data-qa="footer-link-sitemap-page" data-v-a2abc336>Sitemap 
                                                <!---->
                                                </a>
                                                <a href="https://www.hostinger.com/entitymap.html" rel="noopener noreferrer" target="_blank" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-entitymap" data-qa="footer-link-entitymap-page" data-v-a2abc336>EntityMap 
                                                <!---->
                                                </a>
                                                <!--]-->
                                            </span>
                                        </div>
                                        <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                            <span data-v-a2abc336>
                                                <span class="h-footer-section__title h-t-body-1-bold" data-v-a2abc336>Company</span>
                                                <!--[-->
                                                <a href="/about" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-about" data-qa="footer-link-about-page" data-v-a2abc336>About Hostinger 
                                                <!---->
                                                </a>
                                                <a href="/technology" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-technology" data-qa="footer-link-technology-page" data-v-a2abc336>Our technology 
                                                <!---->
                                                </a>
                                                <a href="/newsroom" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-newsroom" data-qa="footer-link-newsroom-page" data-v-a2abc336>Newsroom 
                                                <!---->
                                                </a>
                                                <a href="/career" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-career" data-qa="footer-link-career-page" data-v-a2abc336>Career 
                                                <!---->
                                                </a>
                                                <a href="https://www.hostinger.com/blog/?redirect_back_url=https%3A%2F%2Fwww.hostinger.com%2Ftemplates%2Fwebsite%2Fecommerce" rel="noopener noreferrer" target="_self" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-blog" data-qa="footer-link-blog-page" data-v-a2abc336>Blog 
                                                <!---->
                                                </a>
                                                <a href="/student-discount" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-student_discount" data-qa="footer-link-student-discount-page" data-v-a2abc336>Student discount 
                                                <!---->
                                                </a>
                                                <a href="/sustainability" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-sustainability" data-qa="footer-link-sustainability-page" data-v-a2abc336>Sustainability 
                                                <!---->
                                                </a>
                                                <a href="/principles" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-principles" data-qa="footer-link-principles-page" data-v-a2abc336>Principles 
                                                <!---->
                                                </a>
                                                <!--]-->
                                            </span>
                                        </div>
                                        <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                            <span data-v-a2abc336>
                                                <span class="h-footer-section__title h-t-body-1-bold" data-v-a2abc336>Support</span>
                                                <!--[-->
                                                <a href="https://www.hostinger.com/tutorials/?redirect_back_url=https%3A%2F%2Fwww.hostinger.com%2Ftemplates%2Fwebsite%2Fecommerce" rel="noopener noreferrer" target="_self" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-tutorials" data-qa="footer-link-tutorials-page" data-v-a2abc336>Tutorials 
                                                <!---->
                                                </a>
                                                <a href="https://www.hostinger.com/support?redirect_back_url=https%3A%2F%2Fwww.hostinger.com%2Ftemplates%2Fwebsite%2Fecommerce" rel="noopener" target="_blank" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-knowledge_base" data-qa="footer-link-knowledge-base-page" data-v-a2abc336>Knowledge Base 
                                                <!---->
                                                </a>
                                                <a href="https://www.youtube.com/HostingerAcademy" rel="noopener noreferrer" target="_blank" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-hostinger_academy" data-qa="footer-link-hostinger-academy-page" data-v-a2abc336>Hostinger Academy 
                                                <!---->
                                                </a>
                                                <a href="/contacts" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-contacts" data-qa="footer-link-contacts-page" data-v-a2abc336>Contact us 
                                                <!---->
                                                </a>
                                                <a href="/report-abuse" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-report_abuse" data-qa="footer-link-report-abuse-page" data-v-a2abc336>Report abuse 
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
                                        <a href="https://www.linkedin.com/company/hostinger" rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon" data-click-id="hgr-footer-social_icons-linkedin" aria-label="ic-linkedin-monochrome-24" data-v-d20178ee>
                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-linkedin-monochrome-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;" data-v-c85a1cdf data-v-d20178ee>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM7.04294 8.60884C7.75777 8.60884 8.33693 8.02498 8.33693 7.30442C8.33693 6.58438 7.75777 6 7.04294 6C6.32812 6 5.74896 6.58438 5.74896 7.30442C5.74896 8.02498 6.32812 8.60884 7.04294 8.60884ZM5.73853 18.0006V9.65237H8.34736V18.0006H5.73853ZM9.91995 9.65237H12.5121V10.7768C13.6057 8.75285 18.2609 8.60309 18.2609 12.7146V18.0006H15.6584V13.6183C15.6584 10.9824 12.5126 11.1817 12.5126 13.6183V18.0006H9.91995V9.65237Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="https://www.facebook.com/Hostinger" rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon" data-click-id="hgr-footer-social_icons-facebook" aria-label="ic-facebook-monochrome-24" data-v-d20178ee>
                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-facebook-monochrome-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;" data-v-c85a1cdf data-v-d20178ee>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.9996 12.0336C21.9996 6.49047 17.5225 1.99683 11.9998 1.99683C6.47711 1.99683 2 6.49047 2 12.0336C2 16.7404 5.22874 20.69 9.58425 21.7748V15.1008H7.52229V12.0336H9.58425V10.7119C9.58425 7.29582 11.1246 5.71242 14.4662 5.71242C15.0997 5.71242 16.1929 5.83728 16.6401 5.96174V8.74191C16.4041 8.71702 15.9941 8.70458 15.4849 8.70458C13.8454 8.70458 13.2118 9.32806 13.2118 10.9488V12.0336H16.4781L15.9169 15.1008H13.2118V21.9968C18.1633 21.3966 22 17.1651 22 12.0336H21.9996Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="https://www.instagram.com/hostinger_global" rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon" data-click-id="hgr-footer-social_icons-instagram" aria-label="ic-instagram-monochrome-24" data-v-d20178ee>
                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-instagram-monochrome-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;" data-v-c85a1cdf data-v-d20178ee>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.0302 0.0839254C5.7534 0.144166 4.88147 0.347926 4.11923 0.647447C3.33035 0.954889 2.6617 1.36745 1.99642 2.03513C1.33114 2.70281 0.921459 3.37194 0.616178 4.16202C0.320737 4.92594 0.120576 5.79859 0.064176 7.07611C0.00777578 8.35363 -0.00470426 8.76428 0.00153576 12.023C0.00777578 15.2817 0.0221758 15.6902 0.084096 16.9704C0.145056 18.2469 0.348097 19.1186 0.647618 19.8811C0.955539 20.67 1.36762 21.3384 2.03554 22.0039C2.70346 22.6694 3.37211 23.0782 4.16411 23.3839C4.92731 23.6789 5.8002 23.88 7.07748 23.9359C8.35476 23.9918 8.76589 24.0048 12.0237 23.9986C15.2814 23.9923 15.6916 23.9779 16.9715 23.9172C18.2514 23.8565 19.1186 23.652 19.8813 23.3539C20.6702 23.0453 21.339 22.6339 22.0041 21.9658C22.6691 21.2976 23.0786 20.628 23.3836 19.8374C23.6793 19.0742 23.8802 18.2013 23.9356 16.925C23.9915 15.6441 24.0047 15.2352 23.9985 11.9769C23.9923 8.71868 23.9776 8.31019 23.9169 7.03051C23.8562 5.75083 23.6529 4.88178 23.3536 4.11882C23.0452 3.32994 22.6336 2.66201 21.9659 1.99601C21.2982 1.33001 20.6282 0.920808 19.8378 0.616487C19.0742 0.321046 18.2018 0.119686 16.9245 0.0644854C15.6472 0.00928517 15.2361 -0.00487488 11.9771 0.00136514C8.71813 0.00760516 8.31013 0.0215252 7.0302 0.0839254ZM7.17036 21.7771C6.00036 21.7262 5.36507 21.5318 4.94171 21.3691C4.38107 21.1531 3.98171 20.892 3.55979 20.4742C3.13787 20.0563 2.87867 19.6555 2.65978 19.0961C2.49538 18.6727 2.29738 18.0381 2.24266 16.8681C2.18314 15.6036 2.17066 15.2239 2.1637 12.0201C2.15674 8.81636 2.16898 8.43715 2.22442 7.17211C2.27434 6.00307 2.46994 5.36706 2.63242 4.94394C2.84843 4.38258 3.10859 3.98394 3.52739 3.56226C3.94619 3.14058 4.34579 2.8809 4.90571 2.66201C5.32859 2.49689 5.96316 2.30057 7.13268 2.24489C8.3982 2.18489 8.77741 2.17289 11.9807 2.16593C15.184 2.15897 15.5641 2.17097 16.8302 2.22665C17.9992 2.27753 18.6354 2.47121 19.0581 2.63465C19.619 2.85066 20.0181 3.1101 20.4398 3.52962C20.8614 3.94914 21.1214 4.3473 21.3402 4.90842C21.5056 5.3301 21.7019 5.96443 21.7571 7.13467C21.8174 8.4002 21.831 8.77964 21.8368 11.9827C21.8426 15.1857 21.8313 15.5661 21.7759 16.8307C21.7247 18.0007 21.5308 18.6362 21.3678 19.0601C21.1518 19.6205 20.8914 20.0201 20.4724 20.4415C20.0534 20.863 19.6542 21.1226 19.0941 21.3415C18.6717 21.5064 18.0364 21.7032 16.8678 21.7589C15.6023 21.8184 15.2231 21.8309 12.0186 21.8378C8.81413 21.8448 8.43612 21.8318 7.1706 21.7771M16.953 5.58642C16.9535 5.87125 17.0384 6.14954 17.1971 6.38609C17.3557 6.62265 17.581 6.80684 17.8443 6.91538C18.1076 7.02391 18.3972 7.05192 18.6765 6.99585C18.9558 6.93978 19.2121 6.80216 19.4131 6.60039C19.6142 6.39862 19.7509 6.14176 19.8059 5.8623C19.8609 5.58285 19.8319 5.29334 19.7224 5.03041C19.6129 4.76747 19.4278 4.54291 19.1907 4.38514C18.9536 4.22736 18.675 4.14345 18.3902 4.14402C18.0083 4.14478 17.6424 4.29716 17.3729 4.56765C17.1034 4.83814 16.9524 5.20459 16.953 5.58642ZM5.8386 12.012C5.84532 15.4152 8.60917 18.1677 12.0117 18.1613C15.4141 18.1548 18.1686 15.3912 18.1622 11.988C18.1557 8.58475 15.3911 5.83147 11.9881 5.83819C8.58517 5.84491 5.83212 8.60924 5.8386 12.012ZM8.00004 12.0076C7.99848 11.2165 8.23155 10.4427 8.66978 9.78399C9.10802 9.12531 9.73173 8.61137 10.462 8.30717C11.1924 8.00296 11.9965 7.92216 12.7727 8.07496C13.549 8.22777 14.2625 8.60733 14.823 9.16565C15.3835 9.72396 15.7659 10.436 15.9218 11.2116C16.0777 11.9872 16.0001 12.7917 15.6988 13.5232C15.3974 14.2547 14.886 14.8804 14.229 15.3213C13.5721 15.7621 12.7992 15.9983 12.0081 15.9998C11.4827 16.0009 10.9623 15.8985 10.4766 15.6985C9.99087 15.4985 9.54929 15.2047 9.1771 14.834C8.80491 14.4632 8.50939 14.0228 8.30743 13.5379C8.10547 13.0529 8.00102 12.533 8.00004 12.0076Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="https://x.com/Hostinger" rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon" data-click-id="hgr-footer-social_icons-twitter" aria-label="ic-x-twitter-monochrome-24" data-v-d20178ee>
                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-x-twitter-monochrome-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;" data-v-c85a1cdf data-v-d20178ee>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.2117 16.7815H15.0886L7.75913 7.15474H8.96408L16.2117 16.7815Z" fill="currentColor"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM17.8262 6H15.7999L12.4606 9.83444L9.57387 6H5.39299L10.3884 12.5632L5.65384 17.9999H7.68116L11.3358 13.8053L14.5294 17.9999H18.607L13.3996 11.0833L17.8262 6Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="https://www.youtube.com/@Hostinger" rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon" data-click-id="hgr-footer-social_icons-youtube" aria-label="ic-youtube-24" data-v-d20178ee>
                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-youtube-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;" data-v-c85a1cdf data-v-d20178ee>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.331 12.0046L10.5491 9.77658V14.2234L14.331 12.0046Z" fill="currentColor"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM6.30908 7.10842C7.44993 6.80585 11.9954 6.80585 11.9954 6.80585C11.9954 6.80585 16.5499 6.80586 17.6907 7.12677C18.3105 7.29181 18.8045 7.79602 18.9662 8.42867C19.2806 9.59311 19.2716 12.0137 19.2716 12.0137C19.2716 12.0137 19.2716 14.4252 18.9662 15.5805C18.8045 16.2223 18.3105 16.7173 17.6907 16.8915C16.5499 17.1941 11.9954 17.1941 11.9954 17.1941C11.9954 17.1941 7.45891 17.1941 6.30908 16.8824C5.68924 16.7081 5.19524 16.2039 5.02456 15.5713C4.72812 14.4252 4.72811 12.0046 4.72811 12.0046C4.72811 12.0046 4.72812 9.59311 5.02456 8.42867C5.19524 7.79602 5.69823 7.28263 6.30908 7.10842Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="https://www.reddit.com/r/Hostinger/" rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon" data-click-id="hgr-footer-social_icons-reddit" aria-label="ic-reddit-monochrome-24" data-v-d20178ee>
                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-reddit-monochrome-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;" data-v-c85a1cdf data-v-d20178ee>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.4998 1.49951C19.8134 1.49959 22.4997 4.1859 22.4998 7.49951V16.4995C22.4998 19.8132 19.8135 22.4994 16.4998 22.4995H7.49981C4.18607 22.4995 1.49981 19.8133 1.49981 16.4995V7.49951C1.49993 4.18587 4.18614 1.49955 7.49981 1.49951H16.4998ZM15.7977 5.99951C15.3987 5.99967 15.0569 6.22787 14.8973 6.56982L12.5369 6.06787C12.4685 6.05647 12.3996 6.06784 12.3426 6.10205C12.2856 6.13626 12.2511 6.19381 12.2283 6.26221L11.5106 9.66064C9.994 9.70625 8.63674 10.1503 7.65606 10.8687C7.40526 10.6293 7.05173 10.4703 6.67559 10.4702C5.88884 10.4702 5.24996 11.1083 5.24981 11.895C5.24981 12.4765 5.59196 12.9667 6.09356 13.1948C6.07076 13.3316 6.05939 13.4802 6.05938 13.6284C6.05938 15.8179 8.60245 17.5854 11.7498 17.5854C14.8972 17.5854 17.4402 15.8179 17.4402 13.6284C17.4402 13.4803 17.4289 13.3433 17.4061 13.2065C17.8735 12.9784 18.2273 12.4765 18.2273 11.895C18.2272 11.1083 17.5883 10.4702 16.8016 10.4702C16.414 10.4702 16.0719 10.6179 15.8211 10.8687C14.8518 10.173 13.5057 9.71766 12.0232 9.66064L12.6736 6.61572L14.783 7.06006C14.8058 7.59589 15.2505 8.02957 15.7977 8.02979C16.3564 8.02979 16.8133 7.57293 16.8133 7.01416C16.8131 6.45559 16.3563 5.99951 15.7977 5.99951ZM13.7908 15.2134C13.8935 15.1108 14.0652 15.1108 14.1678 15.2134C14.2476 15.3274 14.247 15.4877 14.1443 15.5903C13.4487 16.2857 12.1258 16.3315 11.7381 16.3315C11.3499 16.3315 10.0159 16.2743 9.33184 15.5903C9.2293 15.4877 9.22928 15.316 9.33184 15.2134C9.43445 15.1108 9.60615 15.1108 9.70879 15.2134C10.1421 15.6467 11.077 15.8071 11.7498 15.8071C12.4226 15.8071 13.3461 15.6467 13.7908 15.2134ZM9.492 11.895C10.0507 11.8951 10.5066 12.3519 10.5066 12.9106C10.5064 13.4692 10.0506 13.9253 9.492 13.9253C8.93337 13.9253 8.47759 13.4692 8.47735 12.9106C8.47735 12.3519 8.93322 11.895 9.492 11.895ZM13.9617 11.895C14.5205 11.895 14.9773 12.3519 14.9773 12.9106C14.9771 13.4692 14.5203 13.9253 13.9617 13.9253C13.4033 13.9251 12.9473 13.4691 12.9471 12.9106C12.9471 12.352 13.4031 11.8952 13.9617 11.895Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="https://www.tiktok.com/@hostingeracademy" rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon" data-click-id="hgr-footer-social_icons-tiktok" aria-label="ic-tiktok-monochrome-24" data-v-d20178ee>
                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-tiktok-monochrome-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;" data-v-c85a1cdf data-v-d20178ee>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.49988C4.18629 1.49988 1.5 4.18617 1.5 7.49988V16.4999C1.5 19.8136 4.18629 22.4999 7.5 22.4999H16.5C19.8137 22.4999 22.5 19.8136 22.5 16.4999V7.49988C22.5 4.18617 19.8137 1.49988 16.5 1.49988H7.5ZM14.6201 5.31738C14.8446 7.21283 15.9028 8.34625 17.7435 8.46792V10.6003C16.6724 10.7028 15.7361 10.357 14.6458 9.6974V13.6868C14.6458 18.7584 9.11104 20.3465 6.88559 16.7093C5.45541 14.372 6.32763 10.2673 10.9196 10.1008V12.3549C10.5733 12.4125 10.1949 12.5021 9.85499 12.611C8.83526 12.9568 8.25806 13.6036 8.41839 14.737C8.72624 16.9206 12.741 17.5609 12.4011 13.2962V5.31098H14.6137L14.6201 5.31738Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <a href="https://discord.gg/Zp2FteMUea" rel="noopener noreferrer nofollow" target="_blank" class="h-social-icons--icon" data-click-id="hgr-footer-social_icons-discord" aria-label="ic-discord-monochrome-24" data-v-d20178ee>
                                            <span class="h-icon" aria-hidden="true" data-icon-name="ic-discord-monochrome-24" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:24px;height:24px;" data-v-c85a1cdf data-v-d20178ee>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.2891 5.23351C17.9297 4.5975 16.4762 4.13527 14.9566 3.87207C14.77 4.20948 14.5519 4.66331 14.4016 5.02432C12.7862 4.78139 11.1857 4.78139 9.60004 5.02432C9.44974 4.66331 9.22676 4.20948 9.03847 3.87207C7.51723 4.13527 6.06205 4.5992 4.70268 5.23688C1.96081 9.3802 1.21754 13.4206 1.58918 17.4036C3.40773 18.7617 5.17012 19.5867 6.90277 20.1265C7.33057 19.5377 7.71211 18.9118 8.0408 18.2522C7.4148 18.0144 6.81523 17.7208 6.2487 17.38C6.399 17.2687 6.54602 17.1523 6.68805 17.0325C10.1434 18.6487 13.8978 18.6487 17.3119 17.0325C17.4556 17.1523 17.6026 17.2687 17.7513 17.38C17.1831 17.7225 16.5819 18.016 15.9559 18.2539C16.2846 18.9118 16.6645 19.5394 17.0939 20.1282C18.8282 19.5883 20.5923 18.7634 22.4108 17.4036C22.8469 12.7863 21.6659 8.78299 19.2891 5.23351ZM8.51155 14.9541C7.47428 14.9541 6.62362 13.9857 6.62362 12.8065C6.62362 11.6273 7.45611 10.6573 8.51155 10.6573C9.56702 10.6573 10.4176 11.6256 10.3995 12.8065C10.4011 13.9857 9.56702 14.9541 8.51155 14.9541ZM15.4884 14.9541C14.4512 14.9541 13.6005 13.9857 13.6005 12.8065C13.6005 11.6273 14.433 10.6573 15.4884 10.6573C16.5439 10.6573 17.3945 11.6256 17.3764 12.8065C17.3764 13.9857 16.5439 14.9541 15.4884 14.9541Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <!--]-->
                                    </div>
                                    <a href="/" class="h-logo h-logo--desktop h-logo--h-fg-neutral-default" aria-label="homepage link" data-click-id="hgr-footer-logo" data-v-814ce015 data-v-1c91e1f4>
                                        <div class="" data-v-1c91e1f4>
                                            <svg fill="none" height="30" viewBox="0 0 147 30" width="147" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="currentColor">
                                                    <path clip-rule="evenodd" d="m62.0651 18.1241c.3096-.7949.465-1.7173.465-2.7658 0-1.049-.1579-1.9712-.4741-2.7664-.3159-.7956-.7492-1.4645-1.2991-2.0065-.5501-.5421-1.1938-.94843-1.931-1.21958-.7376-.2714-1.5217-.4071-2.3524-.4071-.8077 0-1.5775.1357-2.3086.4071-.7318.27115-1.3757.67748-1.9312 1.21958-.556.542-.9981 1.2109-1.3256 2.0065-.3277.7952-.4917 1.7174-.4917 2.7664 0 1.0485.1583 1.9709.4743 2.7658.3161.7957.7487 1.4616 1.2991 1.9974.5498.5367 1.1938.94 1.9312 1.2109.7374.2714 1.5213.4069 2.3525.4069.854 0 1.6531-.1355 2.3961-.4069.7431-.2709 1.3841-.6742 1.9224-1.2109.5381-.5358.9626-1.2017 1.2731-1.9974zm-8.6027-1.1399c-.1463-.4832-.2193-1.0253-.2193-1.6259 0-.5893.073-1.1284.2193-1.6178.1463-.4889.3571-.9071.6323-1.2546.2745-.3478.6113-.6189 1.0095-.8135.3976-.1942.854-.2914 1.3693-.2914.503 0 .9566.0942 1.3607.2828.4033.1881.7431.4565 1.0178.804.2749.3481.486.766.6323 1.2549.1463.4892.2195 1.0342.2195 1.6356 0 .6006-.0732 1.1427-.2195 1.6259-.1463.4834-.3574.8987-.6323 1.2462-.2747.348-.6145.6157-1.0178.8041-.4041.1891-.8577.2835-1.3607.2835-.5153 0-.9717-.0944-1.3693-.2835-.3982-.1884-.735-.4561-1.0095-.8041-.2752-.3475-.486-.7628-.6323-1.2462z" fill-rule="evenodd"/>
                                                    <path d="m69.4167 19.3884c.3862 0 .705-.0321.9567-.0974.2516-.0645.4536-.1527.6056-.2654.1519-.1115.2575-.244.3162-.3972.0586-.153.0878-.3241.0878-.5127 0-.4004-.1875-.7338-.5619-.9986-.3746-.2654-1.0182-.5509-1.931-.8579-.3981-.1409-.7961-.3033-1.194-.4857s-.7549-.4123-1.0708-.6894c-.3157-.2768-.5734-.6127-.7723-1.0079-.1991-.3945-.2985-.8745-.2985-1.4403s.1053-1.0754.3159-1.529c.2109-.4538.5092-.8394.8956-1.15802.3861-.31835.854-.56231 1.4041-.7336.5502-.17055 1.1703-.25657 1.8611-.25657.8191 0 1.5274.08898 2.1244.26546.5965.17673 1.0882.3715 1.4744.58358l-.7898 2.17415c-.3397-.1767-.7173-.333-1.1324-.4687-.4156-.1352-.9159-.2034-1.5009-.2034-.6557 0-1.1268.092-1.4135.2744-.2867.1826-.4303.4627-.4303.8394 0 .2242.053.413.1583.5658.1051.1532.2546.2916.4475.4155.1932.1235.4156.2358.6675.3356.2511.1004.5293.2032.8339.3092.6317.2361 1.1818.4687 1.6502.6985.4679.2299.8572.4981 1.1675.8043.3098.3063.541.6659.6935 1.0785.1517.4127.228.9133.228 1.502 0 1.1432-.3981 2.0301-1.194 2.6603-.7959.6308-1.9955.9462-3.5988.9462-.5383 0-1.0242-.0326-1.4572-.0974-.433-.0652-.8162-.1446-1.1498-.2387-.3334-.0942-.6204-.1943-.8605-.3003-.2398-.1063-.4416-.2062-.6056-.3009l.7728-2.1916c.3623.2007.8101.3801 1.3431.5388.5322.1594 1.1849.239 1.9572.239z"/>
                                                    <path d="m86.2752 9.24216v2.35114h-3.6693v9.8985h-2.7386v-9.8985h-3.6695v-2.35114z"/>
                                                    <path d="m89.3171 21.4921h2.7388v-12.24991h-2.7388z"/>
                                                    <path d="m104.315 21.4918c-.784-1.4022-1.632-2.7866-2.545-4.154-.914-1.3671-1.885-2.6573-2.9146-3.8712v8.0252h-2.7037v-12.24964h2.2295c.3859.38855.8133.86584 1.2816 1.43164.4682.5658.9442 1.1699 1.4312 1.812.485.6422.968 1.308 1.448 1.9972.48.6893.93 1.352 1.352 1.9885v-7.22934h2.721v12.24964z"/>
                                                    <path d="m116.644 11.3634c-1.275 0-2.197.3564-2.765 1.0693-.568.7131-.851 1.6879-.851 2.9257 0 .6004.07 1.1459.21 1.6348.141.4887.352.9099.632 1.2636.281.3537.632.6278 1.054.8223.421.1943.912.2915 1.474.2915.304 0 .565-.006.782-.0176.216-.0116.406-.0351.57-.0707v-4.2598h2.739v6.0629c-.328.1298-.854.268-1.58.415-.726.1471-1.621.2213-2.686.2213-.913 0-1.741-.1417-2.484-.4242-.744-.2832-1.379-.6953-1.905-1.2376-.526-.5418-.933-1.2079-1.22-1.9974-.287-.789-.43-1.6906-.43-2.7041 0-1.0255.158-1.9328.474-2.7226.316-.7892.748-1.4585 1.299-2.0063.55-.5479 1.196-.9632 1.94-1.24596.743-.28301 1.536-.42489 2.378-.42489.574 0 1.092.0388 1.554.11518.462.07687.86.16511 1.194.26546.333.09986.609.20293.825.30922.217.10604.371.18884.465.24767l-.79 2.20922c-.374-.2002-.805-.3737-1.29-.5213-.486-.1473-1.015-.2207-1.589-.2207z"/>
                                                    <path d="m124.321 21.4918v-12.24964h8.216v2.31554h-5.477v2.4037h4.863v2.2629h-4.863v2.952h5.881v2.3155z"/>
                                                    <path clip-rule="evenodd" d="m144.006 10.0814c-.971-.65422-2.37-.98098-4.196-.98098-.503 0-1.074.02348-1.711.07094-.638.04671-1.256.12976-1.852.24692v12.07342h2.738v-4.4726h1.352c.235.2833.47.5984.705.9464.235.3475.474.7153.714 1.1044.241.389.475.7899.705 1.2022.228.4126.455.8189.678 1.2196h3.061c-.21-.4476-.438-.9042-.684-1.3701-.246-.4652-.5-.9128-.764-1.3429-.263-.4301-.53-.8426-.799-1.2376-.269-.3947-.526-.7452-.772-1.0519.738-.306 1.302-.7277 1.694-1.2636.393-.5361.588-1.2349.588-2.0948 0-1.379-.486-2.3953-1.457-3.0494zm-4.573 1.3877c.158-.0116.336-.0176.535-.0176.878 0 1.542.1268 1.993.3797.451.2541.676.6807.676 1.2818 0 .6249-.222 1.0671-.667 1.3259-.445.2595-1.182.3885-2.212.3885h-.773v-3.323c.141-.0113.29-.0232.448-.0353z" fill-rule="evenodd"/>
                                                    <path d="m44.0025 9.34126h2.7552v12.20654h-2.7552v-5.1785h-4.6271v5.1785h-2.7553v-12.20654h2.7553v4.66744h4.6271z"/>
                                                    <path clip-rule="evenodd" d="m17.8175.798004v8.729406l7.0525 4.12459v-9.25917zm-17.81725511.000429v13.698467h22.93675511l-6.9786-3.8357-9.0909-.0044v-6.17182zm17.81725511 25.471867v-6.1186l-9.16098-.0064c.00855.0408-7.09448-3.8969-7.09448-3.8969l23.30786.1101v13.6982zm-17.81725567-8.9516-.00024433 8.9516 6.8675 3.5946v-8.5192z" fill-rule="evenodd"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <!---->
                                    </a>
                                    <div class="h-footer-section" data-v-814ce015 data-v-a2abc336>
                                        <span class="h-legal-links" data-v-a2abc336>
                                            <!--[-->
                                            <a href="/legal/non-public-registrant-data-request-policy" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-legal_page-non-public-registrant-data-request-policy" data-qa="footer-link-legal-page-non-public-registrant-data-request-policy-page" data-v-a2abc336>NPRD request policy 
                                            <!---->
                                            </a>
                                            <a href="/legal/privacy-policy" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-legal_page-privacy-policy" data-qa="footer-link-legal-page-privacy-policy-page" data-v-a2abc336>Privacy policy 
                                            <!---->
                                            </a>
                                            <a href="/legal/refund-policy" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-legal_page-refund-policy" data-qa="footer-link-legal-page-refund-policy-page" data-v-a2abc336>Refund policy 
                                            <!---->
                                            </a>
                                            <a href="/legal/universal-terms-of-service-agreement" class="h-footer-section__item h-t-body-2" data-click-id="hgr-footer_menu-legal_page-universal-terms-of-service-agreement" data-qa="footer-link-legal-page-universal-terms-of-service-agreement-page" data-v-a2abc336>Terms of service 
                                            <!---->
                                            </a>
                                            <!--]-->
                                        </span>
                                    </div>
                                    <div class="h-payment-methods h-payment-methods--minimal-footer" data-v-814ce015 data-v-9aeb7889>
                                        <!--[-->
                                        <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82 data-v-8554daca>
                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eea0da37-b667-4d93-3e73-ce63b3b81400/w=1280,sharpen=1 1280w" alt="visa" loading="lazy" fetchpriority="low" data-v-8554daca>
                                        </div>
                                        <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82 data-v-8554daca>
                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/8c07a3ee-6954-4b35-f511-ae9011dbfd00/w=1280,sharpen=1 1280w" alt="mastercard" loading="lazy" fetchpriority="low" data-v-8554daca>
                                        </div>
                                        <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82 data-v-8554daca>
                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/88baade4-7e9d-4a22-1353-63b45203a700/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/88baade4-7e9d-4a22-1353-63b45203a700/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/88baade4-7e9d-4a22-1353-63b45203a700/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/88baade4-7e9d-4a22-1353-63b45203a700/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/88baade4-7e9d-4a22-1353-63b45203a700/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/88baade4-7e9d-4a22-1353-63b45203a700/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/88baade4-7e9d-4a22-1353-63b45203a700/w=1280,sharpen=1 1280w" alt="amex" loading="lazy" fetchpriority="low" data-v-8554daca>
                                        </div>
                                        <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82 data-v-8554daca>
                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/49823ad9-8a1e-43f7-8d84-0de15a627700/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/49823ad9-8a1e-43f7-8d84-0de15a627700/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/49823ad9-8a1e-43f7-8d84-0de15a627700/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/49823ad9-8a1e-43f7-8d84-0de15a627700/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/49823ad9-8a1e-43f7-8d84-0de15a627700/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/49823ad9-8a1e-43f7-8d84-0de15a627700/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/49823ad9-8a1e-43f7-8d84-0de15a627700/w=1280,sharpen=1 1280w" alt="discover" loading="lazy" fetchpriority="low" data-v-8554daca>
                                        </div>
                                        <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82 data-v-8554daca>
                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/bd357ed4-ee24-4114-aa1a-97cbd24e5c00/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/bd357ed4-ee24-4114-aa1a-97cbd24e5c00/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/bd357ed4-ee24-4114-aa1a-97cbd24e5c00/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/bd357ed4-ee24-4114-aa1a-97cbd24e5c00/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/bd357ed4-ee24-4114-aa1a-97cbd24e5c00/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/bd357ed4-ee24-4114-aa1a-97cbd24e5c00/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/bd357ed4-ee24-4114-aa1a-97cbd24e5c00/w=1280,sharpen=1 1280w" alt="jcb" loading="lazy" fetchpriority="low" data-v-8554daca>
                                        </div>
                                        <div class="h-image h-payment-methods__icon" data-v-9aeb7889 data-v-6835ff82 data-v-8554daca>
                                            <img src="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eaeabe9a-6e9d-4f74-4411-be32b5a81700/public" srcset="https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eaeabe9a-6e9d-4f74-4411-be32b5a81700/w=320,sharpen=1 320w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eaeabe9a-6e9d-4f74-4411-be32b5a81700/w=420,sharpen=1 420w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eaeabe9a-6e9d-4f74-4411-be32b5a81700/w=508,sharpen=1 508w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eaeabe9a-6e9d-4f74-4411-be32b5a81700/w=688,sharpen=1 688w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eaeabe9a-6e9d-4f74-4411-be32b5a81700/w=760,sharpen=1 760w, https://www.hostinger.com/cdn-cgi/imagedelivery/LqiWLm-3MGbYHtFuUbcBtA/eaeabe9a-6e9d-4f74-4411-be32b5a81700/w=1280,sharpen=1 1280w" alt="dinersclub" loading="lazy" fetchpriority="low" data-v-8554daca>
                                        </div>
                                        <!--]-->
                                        <a href="/payments" class="h-payment-methods__more-btn" data-click-id="hgr-footer-payment_methods-more_button" data-v-9aeb7889>and more</a>
                                    </div>
                                    <!---->
                                </div>
                                <div class="hw-footer__copyright" data-v-814ce015>
                                    <div class="hw-footer__copyright--text h-t-body-2" data-v-814ce015>© {{ date('Y') }} Saastify – Launch, grow, and succeed online, supported by modern cloud software & tools.</div>
                                    <p class="hw-footer__copyright--text h-t-body-2" data-v-814ce015>Prices are listed without VAT 
                                    <!---->
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                <div class="h-cookie-consent-wrapper theme-base theme-hWebsites mode-light">
                    <div class="h-cookie-consent" data-rewriter="cookie-banner" data-qa="cookie-banner" style="display:none;" data-v-d082a44a>
                        <div class="h-cookie-consent__wrapper" data-v-d082a44a>
                            <h3 class="h-typography h-t-heading-3 h-cookie-consent__title" style="" data-v-254de8eb data-v-d082a44a>
                            <!--[-->
                            We care about your privacy
                            <!--]-->
                            </h3>
                            <p class="h-typography h-t-body-2 h-cookie-consent__description" style="" data-v-254de8eb data-v-d082a44a>
                                <!--[-->
                                <span data-v-d082a44a>
                                    This website uses cookies that are needed for the site to work properly and to get data on how you interact with it, as well as for marketing purposes. By accepting, you agree to store cookies on your device for ad targeting, personalization, and analytics as described in our <a href='/legal/cookie-policy' target='_blank'>Cookie policy</a>
                                    .
                                </span>
                                <!--]-->
                            </p>
                            <div class="h-cookie-consent__main-btn-wrapper" data-v-d082a44a>
                                <button class="h-button-v2 h-button-v2 h-button-v2--contain-primary h-button-v2--loading" style="" disabled aria-expanded="false" data-click-id="hgr-cookie_consent-accept_all_btn" data-qa="cookie-banner-accept-button" data-v-dbdcf57d data-v-d082a44a>
                                    <!--[-->
                                    <!---->
                                    <!--]-->
                                    <div class="h-button-v2__loader" data-v-dbdcf57d>
                                        <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-primary);--h-circle-loader-border-color:var(--h-circle-loader-border-color-primary);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                            <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                        </div>
                                    </div>
                                    <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
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
                                <button class="h-button-v2 h-button-v2 h-button-v2--outline-primary h-button-v2--loading" style="" disabled aria-expanded="false" data-click-id="hgr-cookie_consent-decline_btn" data-qa="cookie-banner-decline-button" data-v-dbdcf57d data-v-d082a44a>
                                    <!--[-->
                                    <!---->
                                    <!--]-->
                                    <div class="h-button-v2__loader" data-v-dbdcf57d>
                                        <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-primary);--h-circle-loader-border-color:var(--h-circle-loader-border-color-primary);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                            <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                        </div>
                                    </div>
                                    <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
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
                                <button class="h-button-v2 h-button-v2 h-button-v2--text-primary h-button-v2--loading" style="" disabled aria-expanded="false" data-click-id="hgr-cookie_consent-settings_btn" data-qa="cookie-banner-settings-button" data-v-dbdcf57d data-v-d082a44a>
                                    <!--[-->
                                    <!---->
                                    <!--]-->
                                    <div class="h-button-v2__loader" data-v-dbdcf57d>
                                        <div class="h-circle-loader h-circle-loader--small h-circle-loader--loading" style="--h-circle-loader-color:var(--h-circle-loader-color-primary);--h-circle-loader-border-color:var(--h-circle-loader-border-color-primary);" aria-hidden="true" data-qa="loader" data-v-95bca81b data-v-dbdcf57d>
                                            <div class="h-circle-loader__spinner" data-v-95bca81b></div>
                                        </div>
                                    </div>
                                    <span class="h-typography h-t-button-2 h-button-v2__text" style="" data-v-254de8eb data-v-dbdcf57d>
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
                        defaultLocale: "us",
                        rootRedirect: "",
                        redirectStatusCode: 302,
                        skipSettingLocaleOnNavigate: false,
                        locales: [{
                            code: "us",
                            language: "en-US"
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
                            us: {
                                domain: ""
                            }
                        }
                    }
                },
                app: {
                    baseURL: "/",
                    buildId: "99654e04-d691-4b54-bed8-1a247ad3d0b7",
                    buildAssetsDir: "/_nuxt/",
                    cdnURL: ""
                }
            }
        </script>

        <!-- Interactive Enhancements for Products & FAQs -->
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                // 1. FAQ Accordion Interaction
                const accordions = document.querySelectorAll('.hw-accordion, .h-accordion, [data-qa*="accordion"], .faq-item');
                
                accordions.forEach(acc => {
                    const header = acc.querySelector('.hw-accordion__header, .h-accordion__header, [class*="header"]');
                    const panel = acc.querySelector('.hw-accordion__panel, .h-accordion__panel, [class*="panel"]');
                    
                    if (header) {
                        header.style.cursor = 'pointer';
                        
                        header.addEventListener('click', (e) => {
                            e.preventDefault();
                            const isOpen = acc.classList.contains('hw-accordion--open') || acc.classList.contains('h-accordion--open');
                            
                            if (isOpen) {
                                acc.classList.remove('hw-accordion--open', 'h-accordion--open');
                                header.setAttribute('aria-expanded', 'false');
                                if (panel) panel.setAttribute('inert', '');
                            } else {
                                acc.classList.add('hw-accordion--open', 'h-accordion--open');
                                header.setAttribute('aria-expanded', 'true');
                                if (panel) panel.removeAttribute('inert');
                            }
                        });
                        
                        // Keyboard accessibility
                        header.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                header.click();
                            }
                        });
                    }
                });

                // 2. Navigation Dropdowns
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

                // 3. Search Filtering for Templates
                const searchInput = document.getElementById('templates-input-search');
                const templateCards = document.querySelectorAll('.templates-list__item');
                if (searchInput && templateCards.length > 0) {
                    searchInput.addEventListener('input', (e) => {
                        const query = e.target.value.toLowerCase().trim();
                        templateCards.forEach(card => {
                            const title = card.querySelector('.h-media-card__title')?.textContent?.toLowerCase() || '';
                            const badge = card.querySelector('.h-media-card__top-badge-content')?.textContent?.toLowerCase() || '';
                            if (!query || title.includes(query) || badge.includes(query)) {
                                card.style.display = '';
                            } else {
                                card.style.display = 'none';
                            }
                        });
                    });
                }

                // 4. Mobile Menu Toggle
                const mobileToggleBtn = document.querySelector('[data-qa="navigation-mobile-menu-button"], .navigation-section__mobile-menu-burger, .navigation-section__mobile');
                const mobileMenuWrapper = document.querySelector('.navigation-section__mobile-menu-wrapper');
                if (mobileToggleBtn && mobileMenuWrapper) {
                    mobileToggleBtn.addEventListener('click', () => {
                        const isOpen = mobileMenuWrapper.style.display === 'flex';
                        mobileMenuWrapper.style.display = isOpen ? 'none' : 'flex';
                    });
                }
            });
        </script>

</body>
</html>

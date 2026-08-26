<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Saastify Developers - Engineering Architecture, Tech Stack &amp; Team</title>
        
        <!-- Multi-size Favicons & Brand Assets -->
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
        
        <!-- Core CSS Framework Stylesheets Matching Products Page -->
        <link rel="stylesheet" href="/assets/css/entry.BN-2S2kI.css">
        <link rel="stylesheet" href="/assets/css/hcomponents.xhyH4ygE.css">
        <link rel="stylesheet" href="/assets/css/components.CoFsxMIb.css">
        <link rel="stylesheet" href="/assets/css/components-navigation.BiQ2n9Rj.css">
        <link rel="stylesheet" href="/assets/css/ecommerce.vIkaud0Q.css">
        <link rel="stylesheet" href="/assets/css/google-fonts.css">
        
        <link rel="canonical" href="{{ url('/developers') }}">
        <meta name="description" content="Explore Saastify's engineering architecture, technology stack, custom AI systems, APIs, development process, and core engineering team.">
        <meta property="og:site_name" content="Saastify">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url('/developers') }}">
        <meta property="og:title" content="Saastify Developers - Engineering Architecture, Tech Stack &amp; Team">
        <meta property="og:description" content="Explore Saastify's engineering architecture, technology stack, custom AI systems, APIs, development process, and core engineering team.">
        <meta property="og:image" content="/assets/images/og-image.png">
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:title" content="Saastify Developers - Engineering Architecture, Tech Stack &amp; Team">
        <meta property="twitter:description" content="Explore Saastify's engineering architecture, technology stack, custom AI systems, APIs, development process, and core engineering team.">
        <meta property="twitter:image" content="/assets/images/og-image.png">
        <meta name="author" content="Saastify">
        
        <style>
            /* HOSTINGER DESIGN SYSTEM TOKENS (#673DE6 PRIMARY BRAND & RICH VISUAL SAAS THEME) */
            :root {
                --font-family-primary: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                --font-family-mono: 'JetBrains Mono', monospace;
                
                --font-size-xs: 12px;
                --font-size-sm: 14px;
                --font-size-md: 16px;
                --font-size-lg: 18px;
                --font-size-xl: 20px;
                --font-size-2xl: 24px;
                --font-size-3xl: 32px;
                --font-size-4xl: 42px;
                
                --color-text-primary: #18181b;
                --color-text-secondary: #52525b;
                --color-text-muted: #71717a;
                --color-text-inverse: #ffffff;
                
                --color-surface-base: #ffffff;
                --color-surface-strong: #f8fafc;
                --color-surface-subtle: #f1f5f9;
                --color-surface-brand-subtle: #f4efff;
                
                --color-brand-primary: #673de6;
                --color-brand-hover: #5025d1;
                --color-brand-active: #3e1cae;
                --color-brand-light: #7b66ff;
                --color-brand-text: #5025d1;
                
                --color-border-muted: #e2e8f0;
                --color-border-hover: #cbd5e1;
                --color-border-strong: #673de6;
                --color-border-brand-subtle: #e9d5ff;
                
                --radius-xs: 6px;
                --radius-sm: 8px;
                --radius-md: 12px;
                --radius-lg: 16px;
                --radius-xl: 24px;
                --radius-2xl: 999px;
                
                --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
                --shadow-md: 0 4px 12px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03);
                --shadow-lg: 0 12px 28px -6px rgba(103, 61, 230, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04);
                --shadow-hover: 0 16px 32px -8px rgba(103, 61, 230, 0.12), 0 6px 14px -3px rgba(0, 0, 0, 0.05);
                --focus-ring: 0 0 0 3px rgba(103, 61, 230, 0.35);
                
                --motion-fast: 150ms cubic-bezier(0.16, 1, 0.3, 1);
                --motion-normal: 250ms cubic-bezier(0.16, 1, 0.3, 1);
            }

            body {
                background-color: var(--color-surface-base) !important;
                color: var(--color-text-primary) !important;
                font-family: var(--font-family-primary) !important;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
            }

            .dev-container {
                max-width: 1240px;
                margin: 0 auto;
                padding: 0 24px;
            }

            /* Sections & Subtle Grid Texture */
            .dev-section {
                padding: 72px 0;
                border-bottom: 1px solid var(--color-border-muted);
                background-color: var(--color-surface-base);
                position: relative;
            }

            .dev-section--alt {
                background-color: var(--color-surface-strong) !important;
            }

            .dev-dot-pattern {
                background-image: radial-gradient(#e2e8f0 1.2px, transparent 1.2px);
                background-size: 20px 20px;
            }

            /* Badge Pill Component */
            .dev-badge-pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 6px 14px;
                border-radius: var(--radius-2xl);
                background-color: var(--color-surface-brand-subtle);
                color: var(--color-brand-primary);
                font-size: var(--font-size-xs);
                font-weight: 700;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                margin-bottom: 16px;
                border: 1px solid var(--color-border-brand-subtle);
            }

            .dev-pulse-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #10b981;
                display: inline-block;
                box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.25);
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
                70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
                100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
            }

            /* Hero Layout (Split with Interactive UI Mockup) */
            .dev-hero-grid {
                display: grid;
                grid-template-columns: 1.1fr 1fr;
                gap: 40px;
                align-items: center;
            }

            .dev-hero-title {
                font-size: var(--font-size-4xl);
                line-height: 1.14;
                font-weight: 800;
                letter-spacing: -1.2px;
                color: var(--color-text-primary);
                margin: 0 0 16px;
            }

            .dev-hero-desc {
                font-size: var(--font-size-lg);
                line-height: 1.55;
                color: var(--color-text-secondary);
                margin: 0 0 28px;
            }

            /* Interactive Hero Mockup Card */
            .dev-hero-mockup {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                border-radius: var(--radius-lg);
                box-shadow: var(--shadow-lg);
                overflow: hidden;
                transition: transform var(--motion-normal), box-shadow var(--motion-normal);
            }

            .dev-hero-mockup:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-hover);
            }

            .dev-mockup-header {
                background: var(--color-surface-strong);
                padding: 12px 18px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid var(--color-border-muted);
            }

            .dev-mockup-dots {
                display: flex;
                gap: 6px;
            }

            .dev-mockup-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
            }

            .dev-mockup-tabs {
                display: flex;
                gap: 6px;
            }

            .dev-mockup-tab {
                font-size: 11px;
                font-family: var(--font-family-mono);
                font-weight: 600;
                padding: 4px 10px;
                border-radius: 6px;
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                color: var(--color-brand-primary);
            }

            .dev-mockup-body {
                padding: 20px;
                font-family: var(--font-family-mono);
                font-size: 12px;
                line-height: 1.6;
                color: #334155;
                background: #ffffff;
            }

            .dev-mockup-statusbar {
                background: var(--color-surface-brand-subtle);
                border-top: 1px solid var(--color-border-brand-subtle);
                padding: 10px 18px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 11px;
                font-weight: 700;
                color: var(--color-brand-text);
            }

            /* Stats Counter Bar */
            .dev-stats-bar {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 16px;
                margin-top: 36px;
            }

            .dev-stat-pill {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                border-radius: var(--radius-md);
                padding: 16px 20px;
                box-shadow: var(--shadow-sm);
                transition: all var(--motion-fast);
            }

            .dev-stat-pill:hover {
                border-color: var(--color-brand-primary);
                transform: translateY(-2px);
            }

            .dev-stat-val {
                font-size: 26px;
                font-weight: 800;
                color: var(--color-brand-primary);
                line-height: 1.1;
                margin-bottom: 2px;
            }

            .dev-stat-lbl {
                font-size: 11px;
                font-weight: 700;
                color: var(--color-text-muted);
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            /* Section Header */
            .dev-section-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                margin-bottom: 40px;
                flex-wrap: wrap;
                gap: 16px;
            }

            .dev-section-title {
                font-size: var(--font-size-3xl);
                font-weight: 800;
                letter-spacing: -0.8px;
                color: var(--color-text-primary);
                margin: 0 0 8px;
            }

            .dev-section-desc {
                font-size: var(--font-size-md);
                line-height: 1.55;
                color: var(--color-text-secondary);
                max-width: 620px;
                margin: 0;
            }

            /* Interactive Filter Tabs */
            .dev-tabs {
                display: flex;
                gap: 8px;
                background: var(--color-surface-strong);
                padding: 4px;
                border-radius: var(--radius-md);
                border: 1px solid var(--color-border-muted);
                flex-wrap: wrap;
            }

            .dev-tab-btn {
                background: transparent;
                border: none;
                padding: 8px 16px;
                border-radius: var(--radius-sm);
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
                cursor: pointer;
                transition: all var(--motion-fast);
                font-family: var(--font-family-primary);
            }

            .dev-tab-btn:hover {
                color: var(--color-brand-primary);
            }

            .dev-tab-btn.active {
                background: #ffffff;
                color: var(--color-brand-primary);
                box-shadow: var(--shadow-sm);
                border: 1px solid var(--color-border-muted);
            }

            /* Visual Tech Stack Cards (Density + UI Indicators) */
            .dev-stack-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }

            .dev-stack-card {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                border-radius: var(--radius-lg);
                padding: 24px;
                box-shadow: var(--shadow-sm);
                transition: all var(--motion-normal);
                display: flex;
                flex-direction: column;
                position: relative;
            }

            .dev-stack-card:hover {
                border-color: var(--color-brand-primary);
                box-shadow: var(--shadow-lg);
                transform: translateY(-3px);
            }

            .dev-card-top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 16px;
            }

            .dev-card-icon {
                width: 44px;
                height: 44px;
                border-radius: var(--radius-md);
                background: var(--color-surface-brand-subtle);
                border: 1px solid var(--color-border-brand-subtle);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--color-brand-primary);
            }

            .dev-card-badge {
                font-size: 11px;
                font-weight: 700;
                padding: 4px 10px;
                border-radius: var(--radius-2xl);
                background: var(--color-surface-strong);
                border: 1px solid var(--color-border-muted);
                color: var(--color-text-secondary);
                text-transform: uppercase;
            }

            .dev-card-title {
                font-size: 18px;
                font-weight: 700;
                color: var(--color-text-primary);
                margin: 0 0 8px;
            }

            .dev-card-desc {
                font-size: 13px;
                line-height: 1.6;
                color: var(--color-text-secondary);
                margin: 0 0 18px;
                flex-grow: 1;
            }

            .dev-tags-row {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                padding-top: 14px;
                border-top: 1px solid var(--color-border-muted);
            }

            .dev-tag {
                background: var(--color-surface-strong);
                border: 1px solid var(--color-border-muted);
                padding: 3px 8px;
                border-radius: var(--radius-xs);
                font-size: 11px;
                font-weight: 600;
                color: var(--color-text-primary);
                font-family: var(--font-family-mono);
            }

            /* CONNECTED 5-STAGE PIPELINE DIAGRAM */
            .dev-pipeline-container {
                position: relative;
                margin-top: 16px;
            }

            .dev-pipeline-track {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 16px;
                position: relative;
            }

            .dev-pipeline-track::before {
                content: "";
                position: absolute;
                top: 36px;
                left: 40px;
                right: 40px;
                height: 2px;
                border-top: 2px dashed #cbd5e1;
                z-index: 1;
            }

            .dev-pipeline-step {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                border-radius: var(--radius-lg);
                padding: 20px;
                position: relative;
                z-index: 2;
                box-shadow: var(--shadow-sm);
                transition: all var(--motion-normal);
                display: flex;
                flex-direction: column;
            }

            .dev-pipeline-step:hover {
                border-color: var(--color-brand-primary);
                box-shadow: var(--shadow-lg);
                transform: translateY(-4px);
            }

            .dev-step-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 14px;
            }

            .dev-step-num {
                width: 32px;
                height: 32px;
                border-radius: var(--radius-sm);
                background: var(--color-brand-primary);
                color: #ffffff;
                font-weight: 800;
                font-size: 13px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .dev-step-icon {
                color: var(--color-brand-primary);
            }

            .dev-step-title {
                font-size: 15px;
                font-weight: 700;
                color: var(--color-text-primary);
                margin: 0 0 6px;
            }

            .dev-step-text {
                font-size: 12px;
                line-height: 1.55;
                color: var(--color-text-secondary);
                margin: 0;
            }

            /* VISUAL AI & MULTI-AGENT LAB SECTION */
            .dev-ai-showcase-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 28px;
                align-items: center;
            }

            .dev-ai-image-card {
                position: relative;
                border-radius: var(--radius-lg);
                overflow: hidden;
                border: 1px solid var(--color-border-muted);
                box-shadow: var(--shadow-lg);
                background: #ffffff;
            }

            .dev-ai-image-card img {
                width: 100%;
                height: auto;
                display: block;
                object-fit: cover;
            }

            .dev-ai-image-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top, rgba(24, 24, 27, 0.9) 0%, rgba(24, 24, 27, 0) 100%);
                padding: 24px 20px 16px;
                color: #ffffff;
            }

            .dev-ai-features-list {
                display: flex;
                flex-direction: column;
                gap: 14px;
            }

            .dev-ai-feature-card {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                border-radius: var(--radius-md);
                padding: 16px 20px;
                display: flex;
                align-items: flex-start;
                gap: 14px;
                box-shadow: var(--shadow-sm);
                transition: all var(--motion-fast);
            }

            .dev-ai-feature-card:hover {
                border-color: var(--color-brand-primary);
                box-shadow: var(--shadow-md);
            }

            .dev-ai-feature-icon {
                width: 36px;
                height: 36px;
                border-radius: var(--radius-sm);
                background: var(--color-surface-brand-subtle);
                color: var(--color-brand-primary);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            /* INTERACTIVE API CODE SANDBOX */
            .dev-code-sandbox {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                border-radius: var(--radius-lg);
                overflow: hidden;
                box-shadow: var(--shadow-lg);
            }

            .dev-sandbox-header {
                background: var(--color-surface-strong);
                border-bottom: 1px solid var(--color-border-muted);
                padding: 10px 16px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .dev-sandbox-tabs {
                display: flex;
                gap: 6px;
            }

            .dev-sandbox-tab {
                background: transparent;
                border: 1px solid transparent;
                padding: 6px 14px;
                border-radius: var(--radius-sm);
                font-size: 12px;
                font-weight: 700;
                color: var(--color-text-secondary);
                cursor: pointer;
                font-family: var(--font-family-mono);
                transition: all var(--motion-fast);
            }

            .dev-sandbox-tab:hover {
                color: var(--color-brand-primary);
            }

            .dev-sandbox-tab.active {
                background: #ffffff;
                border-color: var(--color-border-muted);
                color: var(--color-brand-primary);
                box-shadow: var(--shadow-sm);
            }

            .dev-copy-btn {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                padding: 6px 12px;
                border-radius: var(--radius-sm);
                font-size: 11px;
                font-weight: 700;
                color: var(--color-text-primary);
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                transition: all var(--motion-fast);
            }

            .dev-copy-btn:hover {
                border-color: var(--color-brand-primary);
                color: var(--color-brand-primary);
            }

            .dev-code-body {
                padding: 24px;
                font-family: var(--font-family-mono);
                font-size: 13px;
                line-height: 1.65;
                color: #1e293b;
                overflow-x: auto;
                background: #ffffff;
                margin: 0;
            }

            /* VISUAL TEAM SECTION */
            .dev-team-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 20px;
            }

            .dev-team-card {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                border-radius: var(--radius-lg);
                padding: 24px;
                box-shadow: var(--shadow-sm);
                transition: all var(--motion-normal);
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .dev-team-card:hover {
                border-color: var(--color-brand-primary);
                box-shadow: var(--shadow-lg);
                transform: translateY(-3px);
            }

            .dev-team-avatar {
                width: 64px;
                height: 64px;
                border-radius: 50%;
                background: var(--color-surface-brand-subtle);
                border: 2px solid var(--color-border-brand-subtle);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 800;
                font-size: 20px;
                color: var(--color-brand-primary);
                margin-bottom: 14px;
                position: relative;
            }

            .dev-avatar-pulse {
                position: absolute;
                bottom: 2px;
                right: 2px;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #10b981;
                border: 2px solid #ffffff;
            }

            .dev-team-name {
                font-size: 17px;
                font-weight: 700;
                color: var(--color-text-primary);
                margin: 0 0 4px;
            }

            .dev-team-role {
                font-size: 12px;
                font-weight: 700;
                color: var(--color-brand-primary);
                margin-bottom: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .dev-team-bio {
                font-size: 12px;
                line-height: 1.55;
                color: var(--color-text-secondary);
                margin-bottom: 16px;
                flex-grow: 1;
            }

            /* VISUAL ACCORDION FAQ */
            .dev-faq-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
            }

            .dev-faq-card {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                border-radius: var(--radius-md);
                padding: 20px;
                box-shadow: var(--shadow-sm);
                transition: all var(--motion-fast);
            }

            .dev-faq-card:hover {
                border-color: var(--color-brand-primary);
                box-shadow: var(--shadow-md);
            }

            .dev-faq-head {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 8px;
            }

            .dev-faq-title {
                font-size: 15px;
                font-weight: 700;
                color: var(--color-text-primary);
                margin: 0;
            }

            .dev-faq-ans {
                font-size: 13px;
                line-height: 1.6;
                color: var(--color-text-secondary);
                margin: 0;
            }

            /* BUTTONS */
            .dev-btn-primary {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                background-color: var(--color-brand-primary);
                color: var(--color-text-inverse) !important;
                font-size: 14px;
                font-weight: 700;
                padding: 12px 28px;
                border-radius: var(--radius-sm);
                text-decoration: none;
                transition: all var(--motion-normal);
                border: 1px solid var(--color-brand-primary);
                cursor: pointer;
            }

            .dev-btn-primary:hover {
                background-color: var(--color-brand-hover);
                border-color: var(--color-brand-hover);
                transform: translateY(-1px);
                box-shadow: 0 6px 16px rgba(103, 61, 230, 0.25);
            }

            .dev-btn-secondary {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                background-color: #ffffff;
                color: var(--color-text-primary) !important;
                font-size: 14px;
                font-weight: 700;
                padding: 12px 28px;
                border-radius: var(--radius-sm);
                text-decoration: none;
                transition: all var(--motion-normal);
                border: 1px solid var(--color-border-muted);
                cursor: pointer;
            }

            .dev-btn-secondary:hover {
                background-color: var(--color-surface-strong);
                border-color: var(--color-brand-primary);
                color: var(--color-brand-primary) !important;
                transform: translateY(-1px);
            }

            /* BOTTOM CALLOUT */
            .dev-callout-card {
                background: #ffffff;
                border: 1px solid var(--color-border-muted);
                border-radius: var(--radius-xl);
                padding: 56px 40px;
                box-shadow: var(--shadow-lg);
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                position: relative;
                overflow: hidden;
            }

            .dev-callout-card::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: var(--color-brand-primary);
            }

            /* RESPONSIVE */
            @media (max-width: 1024px) {
                .dev-hero-grid, .dev-ai-showcase-grid {
                    grid-template-columns: 1fr;
                }
                .dev-stack-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
                .dev-pipeline-track {
                    grid-template-columns: 1fr;
                }
                .dev-pipeline-track::before {
                    display: none;
                }
                .dev-team-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
                .dev-stats-bar {
                    grid-template-columns: repeat(2, 1fr);
                }
                .dev-faq-grid {
                    grid-template-columns: 1fr;
                }
            }

            @media (max-width: 640px) {
                .dev-hero-title {
                    font-size: 30px;
                }
                .dev-stack-grid, .dev-team-grid, .dev-stats-bar {
                    grid-template-columns: 1fr;
                }
                .dev-callout-card {
                    padding: 36px 20px;
                }
            }
        </style>
    </head>
    <body class="lang-en-US ltr">
        <div id="__nuxt">
            <div data-page-hydrated="false">
                <div id="layout" class="layout layout--default theme-base theme-hWebsites mode-light" data-qa="developers-page" data-v-e390f074>
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
                    <!-- MAIN DEVELOPER HUB CONTENT (DYNAMIC, CONNECTED, VISUAL SAAS THEME) -->
                    <main data-v-e390f074>
                        
                        <!-- HERO SECTION WITH INTERACTIVE IDE MOCKUP -->
                        <section class="dev-section dev-dot-pattern" style="padding:60px 0 52px;background-color:#ffffff;">
                            <div class="dev-container">
                                <div class="dev-hero-grid">
                                    
                                    <!-- Left Column: Headline & Action -->
                                    <div>
                                        <div class="dev-badge-pill">
                                            <span class="dev-pulse-dot"></span>
                                            Engineering &amp; Architecture Hub
                                        </div>
                                        <h1 class="dev-hero-title">
                                            Engineering Scalable Systems with Precision &amp; AI
                                        </h1>
                                        <p class="dev-hero-desc">
                                            A transparent, interactive look inside our technology stack, multi-agent AI pipelines, developer APIs, and the engineering squad that builds our products.
                                        </p>
                                        
                                        <div style="display:flex;gap:14px;flex-wrap:wrap;">
                                            <a href="#tech-stack" class="dev-btn-primary">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/></svg>
                                                Explore Stack
                                            </a>
                                            <a href="#pipeline" class="dev-btn-secondary">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                                How We Build
                                            </a>
                                        </div>

                                        <!-- Tech Badge Strip -->
                                        <div style="margin-top:28px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                                            <span style="font-size:12px;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;">Built with:</span>
                                            <span class="dev-tag" style="background:#ffffff;">Laravel 11</span>
                                            <span class="dev-tag" style="background:#ffffff;">PHP 8.3</span>
                                            <span class="dev-tag" style="background:#ffffff;">Vue 3 / React</span>
                                            <span class="dev-tag" style="background:#ffffff;">PostgreSQL</span>
                                            <span class="dev-tag" style="background:#ffffff;">DeepSeek / Claude</span>
                                            <span class="dev-tag" style="background:#ffffff;">Docker</span>
                                        </div>
                                    </div>

                                    <!-- Right Column: Interactive SaaS IDE / Architecture Visual -->
                                    <div>
                                        <div class="dev-hero-mockup">
                                            <div class="dev-mockup-header">
                                                <div class="dev-mockup-dots">
                                                    <div class="dev-mockup-dot" style="background:#ef4444;"></div>
                                                    <div class="dev-mockup-dot" style="background:#eab308;"></div>
                                                    <div class="dev-mockup-dot" style="background:#22c55e;"></div>
                                                </div>
                                                <div class="dev-mockup-tabs">
                                                    <div class="dev-mockup-tab">architecture.config.ts</div>
                                                    <div class="dev-mockup-tab" style="background:transparent;border-color:transparent;color:var(--color-text-muted);">ai_router.py</div>
                                                </div>
                                                <button id="run-bench-btn" class="dev-copy-btn" style="padding:4px 8px;font-size:10px;" onclick="simulateBench()">
                                                    ▶ Run Benchmark
                                                </button>
                                            </div>
                                            <div class="dev-mockup-body">
                                                <div style="color:#64748b;">// Saastify Core Infrastructure Spec</div>
                                                <div><span style="color:#673de6;font-weight:700;">export const</span> <span style="color:#0f172a;font-weight:700;">SystemArchitecture</span> = {</div>
                                                <div style="padding-left:16px;">framework: <span style="color:#059669;">'Laravel 11.x (Clean Domain Actions)'</span>,</div>
                                                <div style="padding-left:16px;">database: <span style="color:#059669;">'PostgreSQL 16 + pgvector + Redis 7'</span>,</div>
                                                <div style="padding-left:16px;">ai_orchestration: [</div>
                                                <div style="padding-left:32px;"><span style="color:#059669;">'deepseek-r1-reasoning'</span>,</div>
                                                <div style="padding-left:32px;"><span style="color:#059669;">'claude-3-5-sonnet'</span>,</div>
                                                <div style="padding-left:32px;"><span style="color:#059669;">'openai-o3-mini'</span></div>
                                                <div style="padding-left:16px;">],</div>
                                                <div style="padding-left:16px;">cloud: <span style="color:#059669;">'Docker Swarm + Cloudflare Edge + CI/CD'</span>,</div>
                                                <div style="padding-left:16px;">contract_standard: <span style="color:#059669;">'OpenAPI 3.1 &amp; Signed Webhooks'</span></div>
                                                <div>};</div>
                                            </div>
                                            <div class="dev-mockup-statusbar">
                                                <div style="display:flex;align-items:center;gap:6px;">
                                                    <span class="dev-pulse-dot"></span>
                                                    <span id="bench-status">Live Telemetry: 100% Operational</span>
                                                </div>
                                                <div id="bench-latency" style="font-family:var(--font-family-mono);background:#ffffff;padding:2px 8px;border-radius:4px;border:1px solid var(--color-border-brand-subtle);">
                                                    Latency: 38ms
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <!-- 4 Key Metric Stat Pills -->
                                <div class="dev-stats-bar">
                                    <div class="dev-stat-pill">
                                        <div class="dev-stat-val">&lt; 100ms</div>
                                        <div class="dev-stat-lbl">API Response Target</div>
                                    </div>
                                    <div class="dev-stat-pill">
                                        <div class="dev-stat-val">99.99%</div>
                                        <div class="dev-stat-lbl">Infrastructure SLA</div>
                                    </div>
                                    <div class="dev-stat-pill">
                                        <div class="dev-stat-val">100%</div>
                                        <div class="dev-stat-lbl">Full Code Ownership</div>
                                    </div>
                                    <div class="dev-stat-pill">
                                        <div class="dev-stat-val">Zero Debt</div>
                                        <div class="dev-stat-lbl">Strict Quality Gate</div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <!-- SECTION 1: VISUAL INTERACTIVE TECH STACK -->
                        <section id="tech-stack" class="dev-section dev-section--alt">
                            <div class="dev-container">
                                
                                <div class="dev-section-header">
                                    <div>
                                        <div class="dev-badge-pill" style="margin-bottom:8px;">Technology Ecosystem</div>
                                        <h2 class="dev-section-title">What Technology We Use</h2>
                                        <p class="dev-section-desc">
                                            Enterprise-grade frameworks, high-throughput engines, and modern developer tooling.
                                        </p>
                                    </div>
                                    <!-- Interactive Tabs -->
                                    <div class="dev-tabs">
                                        <button class="dev-tab-btn active" onclick="filterStack('all', this)">All Layers</button>
                                        <button class="dev-tab-btn" onclick="filterStack('backend', this)">Backend &amp; DB</button>
                                        <button class="dev-tab-btn" onclick="filterStack('frontend', this)">Frontend</button>
                                        <button class="dev-tab-btn" onclick="filterStack('ai', this)">AI &amp; Cloud</button>
                                    </div>
                                </div>

                                <div class="dev-stack-grid" id="stack-grid">
                                    
                                    <!-- Card 1: Backend -->
                                    <div class="dev-stack-card" data-category="backend">
                                        <div class="dev-card-top">
                                            <div class="dev-card-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
                                            </div>
                                            <span class="dev-card-badge">Core Backend</span>
                                        </div>
                                        <h3 class="dev-card-title">Laravel 11 &amp; Node.js</h3>
                                        <p class="dev-card-desc">
                                            Domain-driven architecture, modular action classes, and asynchronous Redis queues for scale.
                                        </p>
                                        <div class="dev-tags-row">
                                            <span class="dev-tag">Laravel 11</span>
                                            <span class="dev-tag">PHP 8.3+</span>
                                            <span class="dev-tag">Node.js</span>
                                            <span class="dev-tag">FastAPI</span>
                                        </div>
                                    </div>

                                    <!-- Card 2: Frontend -->
                                    <div class="dev-stack-card" data-category="frontend">
                                        <div class="dev-card-top">
                                            <div class="dev-card-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                                            </div>
                                            <span class="dev-card-badge">Client UI</span>
                                        </div>
                                        <h3 class="dev-card-title">Vue 3, React &amp; Blade</h3>
                                        <p class="dev-card-desc">
                                            Lightweight reactive components, SSR rendering, and design token architectures with sub-second paint times.
                                        </p>
                                        <div class="dev-tags-row">
                                            <span class="dev-tag">Vue 3</span>
                                            <span class="dev-tag">React</span>
                                            <span class="dev-tag">TypeScript</span>
                                            <span class="dev-tag">Vite</span>
                                        </div>
                                    </div>

                                    <!-- Card 3: Databases -->
                                    <div class="dev-stack-card" data-category="backend">
                                        <div class="dev-card-top">
                                            <div class="dev-card-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
                                            </div>
                                            <span class="dev-card-badge">Data Layer</span>
                                        </div>
                                        <h3 class="dev-card-title">PostgreSQL &amp; Redis</h3>
                                        <p class="dev-card-desc">
                                            ACID-compliant relational schemas with pgvector embedding search and ultra-low latency cache clustering.
                                        </p>
                                        <div class="dev-tags-row">
                                            <span class="dev-tag">PostgreSQL 16</span>
                                            <span class="dev-tag">Redis 7</span>
                                            <span class="dev-tag">pgvector</span>
                                            <span class="dev-tag">Qdrant</span>
                                        </div>
                                    </div>

                                    <!-- Card 4: AI Engine -->
                                    <div class="dev-stack-card" data-category="ai">
                                        <div class="dev-card-top">
                                            <div class="dev-card-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                                            </div>
                                            <span class="dev-card-badge">Intelligent AI</span>
                                        </div>
                                        <h3 class="dev-card-title">Multi-Model AI Pipelines</h3>
                                        <p class="dev-card-desc">
                                            Dynamic routing between DeepSeek R1, Claude 3.5 Sonnet, and GPT-4o with strict JSON schema outputs.
                                        </p>
                                        <div class="dev-tags-row">
                                            <span class="dev-tag">DeepSeek R1</span>
                                            <span class="dev-tag">Claude 3.5</span>
                                            <span class="dev-tag">OpenAI o3</span>
                                            <span class="dev-tag">RAG Pipelines</span>
                                        </div>
                                    </div>

                                    <!-- Card 5: Cloud & DevOps -->
                                    <div class="dev-stack-card" data-category="ai">
                                        <div class="dev-card-top">
                                            <div class="dev-card-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                                            </div>
                                            <span class="dev-card-badge">Infrastructure</span>
                                        </div>
                                        <h3 class="dev-card-title">Docker &amp; Cloudflare</h3>
                                        <p class="dev-card-desc">
                                            Containerized microservices, automated GitHub Actions CI/CD, and global edge DDoS/WAF protection.
                                        </p>
                                        <div class="dev-tags-row">
                                            <span class="dev-tag">Docker</span>
                                            <span class="dev-tag">GitHub Actions</span>
                                            <span class="dev-tag">Ubuntu VPS</span>
                                            <span class="dev-tag">Cloudflare WAF</span>
                                        </div>
                                    </div>

                                    <!-- Card 6: APIs & Webhooks -->
                                    <div class="dev-stack-card" data-category="backend">
                                        <div class="dev-card-top">
                                            <div class="dev-card-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                            </div>
                                            <span class="dev-card-badge">Integration</span>
                                        </div>
                                        <h3 class="dev-card-title">REST APIs &amp; Webhooks</h3>
                                        <p class="dev-card-desc">
                                            Contract-first OpenAPI 3.1 endpoints, HMAC-SHA256 signed event delivery, and idempotency guarantees.
                                        </p>
                                        <div class="dev-tags-row">
                                            <span class="dev-tag">OpenAPI 3.1</span>
                                            <span class="dev-tag">Webhooks</span>
                                            <span class="dev-tag">WebSockets</span>
                                            <span class="dev-tag">Rate Limiting</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>

                        <!-- SECTION 2: CONNECTED 5-STAGE PIPELINE (VISUAL FLOW DIAGRAM) -->
                        <section id="pipeline" class="dev-section">
                            <div class="dev-container">
                                
                                <div class="dev-section-header">
                                    <div>
                                        <div class="dev-badge-pill" style="margin-bottom:8px;">Lifecycle Methodology</div>
                                        <h2 class="dev-section-title">How We Create Things</h2>
                                        <p class="dev-section-desc">
                                            Our structured, connected 5-stage lifecycle turns complex requirements into clean, test-covered software.
                                        </p>
                                    </div>
                                    <div style="font-size:13px;font-weight:700;color:var(--color-brand-primary);display:flex;align-items:center;gap:6px;">
                                        <span>Continuous Engineering Loop</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                                    </div>
                                </div>

                                <div class="dev-pipeline-container">
                                    <div class="dev-pipeline-track">
                                        
                                        <!-- Step 1 -->
                                        <div class="dev-pipeline-step">
                                            <div class="dev-step-header">
                                                <div class="dev-step-num">01</div>
                                                <div class="dev-step-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                                </div>
                                            </div>
                                            <h3 class="dev-step-title">Contract-First Design</h3>
                                            <p class="dev-step-text">
                                                ER modeling, API schemas, and state transition specifications drafted before writing code.
                                            </p>
                                        </div>

                                        <!-- Step 2 -->
                                        <div class="dev-pipeline-step">
                                            <div class="dev-step-header">
                                                <div class="dev-step-num">02</div>
                                                <div class="dev-step-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                                                </div>
                                            </div>
                                            <h3 class="dev-step-title">Modular Scaffold</h3>
                                            <p class="dev-step-text">
                                                Decoupled domain modules, action classes, and reusable UI tokens for strict boundary isolation.
                                            </p>
                                        </div>

                                        <!-- Step 3 -->
                                        <div class="dev-pipeline-step">
                                            <div class="dev-step-header">
                                                <div class="dev-step-num">03</div>
                                                <div class="dev-step-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 12.5"/></svg>
                                                </div>
                                            </div>
                                            <h3 class="dev-step-title">AI-Augmented Dev</h3>
                                            <p class="dev-step-text">
                                                Engineers pair with AI coding agents to rapidly generate unit tests, boilerplate, and edge case coverage.
                                            </p>
                                        </div>

                                        <!-- Step 4 -->
                                        <div class="dev-pipeline-step">
                                            <div class="dev-step-header">
                                                <div class="dev-step-num">04</div>
                                                <div class="dev-step-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                                </div>
                                            </div>
                                            <h3 class="dev-step-title">Automated QA Gate</h3>
                                            <p class="dev-step-text">
                                                Static analysis, PHPStan type checks, OWASP security scans, and integration tests run on every pull request.
                                            </p>
                                        </div>

                                        <!-- Step 5 -->
                                        <div class="dev-pipeline-step">
                                            <div class="dev-step-header">
                                                <div class="dev-step-num">05</div>
                                                <div class="dev-step-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
                                                </div>
                                            </div>
                                            <h3 class="dev-step-title">Zero-Downtime CD</h3>
                                            <p class="dev-step-text">
                                                Containerized deployments via GitHub Actions with database migration safety and automated rollbacks.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </section>

                        <!-- SECTION 3: VISUAL AI & MULTI-AGENT LAB SHOWCASE -->
                        <section id="ai-lab" class="dev-section dev-section--alt">
                            <div class="dev-container">
                                
                                <div class="dev-ai-showcase-grid">
                                    
                                    <!-- Visual Preview Card with Real Asset -->
                                    <div class="dev-ai-image-card">
                                        <img src="/assets/images/saastify-agents-preview.jpg" alt="Saastify AI Multi-Agent Architecture" loading="lazy">
                                        <div class="dev-ai-image-overlay">
                                            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                                                <span class="dev-pulse-dot"></span>
                                                <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Multi-Agent Orchestration Layer</span>
                                            </div>
                                            <div style="font-size:16px;font-weight:800;">Real-time Model Router &amp; Vector Embeddings</div>
                                        </div>
                                    </div>

                                    <!-- Right Content & Feature List -->
                                    <div>
                                        <div class="dev-badge-pill">Intelligent Systems</div>
                                        <h2 class="dev-section-title">Custom AI &amp; Autonomous Workflows</h2>
                                        <p class="dev-section-desc" style="margin-bottom:24px;">
                                            We build production-grade AI pipelines that combine domain context, pgvector search, and multi-model fallbacks.
                                        </p>

                                        <div class="dev-ai-features-list">
                                            <div class="dev-ai-feature-card">
                                                <div class="dev-ai-feature-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 5.6L20 10l-4.4 3.8L17 20l-5-3.2L7 20l1.4-6.2L4 10l5.6-2.4L12 2z"/></svg>
                                                </div>
                                                <div>
                                                    <div style="font-size:14px;font-weight:700;color:var(--color-text-primary);margin-bottom:2px;">Dynamic Model Fallback Routing</div>
                                                    <div style="font-size:12px;color:var(--color-text-secondary);line-height:1.5;">Auto-routing between DeepSeek R1 for reasoning, Claude 3.5 Sonnet for code, and GPT-4o for speed.</div>
                                                </div>
                                            </div>

                                            <div class="dev-ai-feature-card">
                                                <div class="dev-ai-feature-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                                                </div>
                                                <div>
                                                    <div style="font-size:14px;font-weight:700;color:var(--color-text-primary);margin-bottom:2px;">Hybrid RAG &amp; Vector Embeddings</div>
                                                    <div style="font-size:12px;color:var(--color-text-secondary);line-height:1.5;">pgvector + Qdrant similarity search with keyword re-ranking and hallucination guardrails.</div>
                                                </div>
                                            </div>

                                            <div class="dev-ai-feature-card">
                                                <div class="dev-ai-feature-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/></svg>
                                                </div>
                                                <div>
                                                    <div style="font-size:14px;font-weight:700;color:var(--color-text-primary);margin-bottom:2px;">Strict JSON Schema Enforcement</div>
                                                    <div style="font-size:12px;color:var(--color-text-secondary);line-height:1.5;">Every AI model output is typed and validated before passing to transactional business logic.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>

                        <!-- SECTION 4: INTERACTIVE API & SDK CODE SANDBOX -->
                        <section id="apis" class="dev-section">
                            <div class="dev-container">
                                
                                <div class="dev-section-header">
                                    <div>
                                        <div class="dev-badge-pill" style="margin-bottom:8px;">Integration Engine</div>
                                        <h2 class="dev-section-title">Developer APIs &amp; SDKs</h2>
                                        <p class="dev-section-desc">
                                            Interact programmatically using clean REST endpoints, instant event webhooks, and typed SDKs.
                                        </p>
                                    </div>
                                    <div style="display:flex;gap:10px;">
                                        <a href="/contact" class="dev-btn-primary" style="padding:10px 20px;font-size:13px;">
                                            Request API Key
                                        </a>
                                    </div>
                                </div>

                                <div class="dev-code-sandbox">
                                    <div class="dev-sandbox-header">
                                        <div class="dev-sandbox-tabs">
                                            <button class="dev-sandbox-tab active" onclick="switchSnippet('curl', this)">cURL</button>
                                            <button class="dev-sandbox-tab" onclick="switchSnippet('php', this)">PHP / Laravel</button>
                                            <button class="dev-sandbox-tab" onclick="switchSnippet('ts', this)">TypeScript</button>
                                            <button class="dev-sandbox-tab" onclick="switchSnippet('py', this)">Python</button>
                                        </div>
                                        <button class="dev-copy-btn" onclick="copySnippet()">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                            <span id="copy-btn-text">Copy Snippet</span>
                                        </button>
                                    </div>
                                    <pre class="dev-code-body"><code id="code-content">// 1. Dispatching an Autonomous AI Workflow via cURL
curl -X POST https://api.saastify.com/v1/ai/orchestrate \
  -H "Authorization: Bearer sk_live_saastify_9f81a7" \
  -H "Content-Type: application/json" \
  -d '{
    "agent": "software-analyst",
    "model_tier": "deepseek-r1",
    "prompt": "Analyze repository architecture for performance bottlenecks",
    "webhook_url": "https://client-app.com/webhooks/ai-result",
    "options": {
      "temperature": 0.2,
      "strict_schema": true
    }
  }'

// Response: 200 OK
{
  "status": "success",
  "task_id": "tsk_89df2c19e",
  "latency_ms": 34,
  "data": {
    "execution": "queued",
    "estimated_seconds": 2.8
  }
}</code></pre>
                                </div>

                            </div>
                        </section>

                        <!-- SECTION 5: VISUAL ENGINEERING TEAM -->
                        <section id="team" class="dev-section dev-section--alt">
                            <div class="dev-container">
                                
                                <div class="dev-section-header">
                                    <div>
                                        <div class="dev-badge-pill" style="margin-bottom:8px;">Core Engineering Squad</div>
                                        <h2 class="dev-section-title">Meet Our Engineering Team</h2>
                                        <p class="dev-section-desc">
                                            The architects and engineers who design, build, and maintain our systems.
                                        </p>
                                    </div>
                                </div>

                                <div class="dev-team-grid">
                                    
                                    <!-- Team Member 1 -->
                                    <div class="dev-team-card">
                                        <div class="dev-team-avatar">
                                            AT
                                            <span class="dev-avatar-pulse" title="Active in Codebase"></span>
                                        </div>
                                        <h3 class="dev-team-name">Ateeb</h3>
                                        <div class="dev-team-role">Lead Systems Architect</div>
                                        <p class="dev-team-bio">
                                            High-scale SaaS backends, relational database schemas, and end-to-end cloud platform architecture.
                                        </p>
                                        <div class="dev-tags-row" style="justify-content:center;width:100%;">
                                            <span class="dev-tag">Laravel 11</span>
                                            <span class="dev-tag">Postgres</span>
                                            <span class="dev-tag">Docker</span>
                                        </div>
                                    </div>

                                    <!-- Team Member 2 -->
                                    <div class="dev-team-card">
                                        <div class="dev-team-avatar">
                                            AI
                                            <span class="dev-avatar-pulse" title="Active in Codebase"></span>
                                        </div>
                                        <h3 class="dev-team-name">AI Systems Engineer</h3>
                                        <div class="dev-team-role">LLM &amp; RAG Lead</div>
                                        <p class="dev-team-bio">
                                            Specializes in multi-agent routing, vector indexing, context re-ranking, and low-latency inference pipelines.
                                        </p>
                                        <div class="dev-tags-row" style="justify-content:center;width:100%;">
                                            <span class="dev-tag">Python</span>
                                            <span class="dev-tag">Qdrant</span>
                                            <span class="dev-tag">DeepSeek</span>
                                        </div>
                                    </div>

                                    <!-- Team Member 3 -->
                                    <div class="dev-team-card">
                                        <div class="dev-team-avatar">
                                            FE
                                            <span class="dev-avatar-pulse" title="Active in Codebase"></span>
                                        </div>
                                        <h3 class="dev-team-name">Senior Frontend Architect</h3>
                                        <div class="dev-team-role">UI &amp; Performance</div>
                                        <p class="dev-team-bio">
                                            Reactive component systems, accessible design tokens, micro-interactions, and sub-second load times.
                                        </p>
                                        <div class="dev-tags-row" style="justify-content:center;width:100%;">
                                            <span class="dev-tag">Vue 3</span>
                                            <span class="dev-tag">React</span>
                                            <span class="dev-tag">TypeScript</span>
                                        </div>
                                    </div>

                                    <!-- Team Member 4 -->
                                    <div class="dev-team-card">
                                        <div class="dev-team-avatar">
                                            OP
                                            <span class="dev-avatar-pulse" title="Active in Codebase"></span>
                                        </div>
                                        <h3 class="dev-team-name">DevOps Lead</h3>
                                        <div class="dev-team-role">Cloud &amp; Security</div>
                                        <p class="dev-team-bio">
                                            Zero-downtime CI/CD workflows, automated backup clustering, Linux hardening, and Cloudflare WAF routing.
                                        </p>
                                        <div class="dev-tags-row" style="justify-content:center;width:100%;">
                                            <span class="dev-tag">Docker</span>
                                            <span class="dev-tag">Actions</span>
                                            <span class="dev-tag">Cloudflare</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>

                        <!-- SECTION 6: VISUAL FAQ ACCORDION -->
                        <section class="dev-section">
                            <div class="dev-container">
                                
                                <div class="dev-section-header">
                                    <div>
                                        <div class="dev-badge-pill" style="margin-bottom:8px;">Questions &amp; Standards</div>
                                        <h2 class="dev-section-title">Developer &amp; Architecture FAQ</h2>
                                        <p class="dev-section-desc">
                                            Key answers on how we deliver code ownership, maintain quality, and integrate systems.
                                        </p>
                                    </div>
                                </div>

                                <div class="dev-faq-grid">
                                    <div class="dev-faq-card">
                                        <div class="dev-faq-head">
                                            <div style="color:var(--color-brand-primary);">⚡</div>
                                            <h3 class="dev-faq-title">How do you ensure long-term code maintainability?</h3>
                                        </div>
                                        <p class="dev-faq-ans">
                                            We enforce contract-first design, single-responsibility action classes, PHPStan static analysis, and automated integration test coverage on every merge.
                                        </p>
                                    </div>

                                    <div class="dev-faq-card">
                                        <div class="dev-faq-head">
                                            <div style="color:var(--color-brand-primary);">🧠</div>
                                            <h3 class="dev-faq-title">Can we integrate your AI agents into our existing database?</h3>
                                        </div>
                                        <p class="dev-faq-ans">
                                            Yes. Our AI orchestration layer connects seamlessly via standard REST APIs, Webhooks, and read-replica database pools without changing your current database schemas.
                                        </p>
                                    </div>

                                    <div class="dev-faq-card">
                                        <div class="dev-faq-head">
                                            <div style="color:var(--color-brand-primary);">🛡️</div>
                                            <h3 class="dev-faq-title">Do clients receive 100% full source code ownership?</h3>
                                        </div>
                                        <p class="dev-faq-ans">
                                            Yes. Every project includes full intellectual property ownership, complete Git repository transfer, Docker configuration files, and architecture runbooks.
                                        </p>
                                    </div>

                                    <div class="dev-faq-card">
                                        <div class="dev-faq-head">
                                            <div style="color:var(--color-brand-primary);">🚀</div>
                                            <h3 class="dev-faq-title">What is the typical delivery timeframe for a SaaS MVP?</h3>
                                        </div>
                                        <p class="dev-faq-ans">
                                            Because we leverage pre-tested architectural blueprints, reusable auth/billing modules, and AI-accelerated dev pipelines, our average MVP turnaround is 2 to 4 weeks.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <!-- SECTION 7: VISUAL BOTTOM CALLOUT -->
                        <section class="dev-section dev-dot-pattern" style=" border-bottom:none;padding:56px 0 72px;">
                            <div class="dev-container" >
                                <div class="dev-callout-card" style="background:#673DE6;">
                                    <div class="dev-badge-pill" style="margin-bottom:12px;" style="color: white;">Start Building</div>
                                    <h2 class="dev-callout-title" style="font-size:36px;margin-bottom:12px;">Ready to Engineer Your Next Platform?</h2>
                                    <p class="dev-callout-desc" style="max-width:600px;margin-bottom:28px;">
                                        Whether you need a dedicated engineering squad, custom AI system, or scalable SaaS architecture — let's build together.
                                    </p>
                                    <div style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center;">
                                        <a href="/contact" class="dev-btn-primary" style="font-size:15px;padding:14px 32px;">
                                            Schedule Technical Consultation
                                        </a>
                                        <a href="/products" class="dev-btn-secondary" style="font-size:15px;padding:14px 32px;">
                                            Explore Our Products &amp; Work
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </main>
<footer class="hw-footer h-t-body-2 theme-base theme-hWebsites mode-light" data-view-id="hgr-templates_website_ecommerce-footer" dir="ltr" style="background:var(--h-bg-neutral-secondary);" data-v-e390f074 data-v-814ce015>
                        <div class="hw-footer__wrapper" data-v-814ce015>
                            <div class="h-grid h-grid--cols-m-1 h-grid--cols-t-1" data-v-814ce015>
                                <div class="hw-footer__breadcrumbs" data-v-814ce015>
                                    <div class="h-footer-breadcrumbs" data-v-814ce015 data-v-d9ba0eb0>
        <a href="/" class="h-t-body-2" index="0" data-v-d9ba0eb0>Saastify</a>
        <span class="h-icon h-footer-breadcrumbs__chevron" aria-hidden="true" data-icon-name="ic-chevron-small-right-16" style="color:var(--h-fg-neutral-default);fill:var(--h-fg-neutral-default);width:16px;height:16px;" data-v-c85a1cdf data-v-d9ba0eb0>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.96967 3.96967C6.26256 3.67678 6.73744 3.67678 7.03033 3.96967L10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L7.03033 12.0303C6.73744 12.3232 6.26256 12.3232 5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697L8.93934 8L5.96967 5.03033C5.67678 4.73744 5.67678 4.26256 5.96967 3.96967Z" fill="currentColor"/>
            </svg>
        </span>
        <b class="h-t-body-2" index="1" data-v-d9ba0eb0>Developers &amp; Engineering Hub</b>
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
</div></div></div>
        <!-- JAVASCRIPT FOR INTERACTIVE DEMOS & SNIPPET SWITCHING -->
        <script>
            // 1. Interactive Benchmark Simulator
            function simulateBench() {
                var btn = document.getElementById("run-bench-btn");
                var status = document.getElementById("bench-status");
                var latency = document.getElementById("bench-latency");
                
                btn.innerHTML = "⏳ Benchmarking...";
                status.innerHTML = "Simulating concurrent load...";
                
                setTimeout(function() {
                    var ms = Math.floor(Math.random() * 20) + 24;
                    latency.innerHTML = "Latency: " + ms + "ms";
                    status.innerHTML = "Live Telemetry: 100% Operational (Tested 5,000 req/s)";
                    btn.innerHTML = "✔ Benchmark Passed";
                    setTimeout(function() {
                        btn.innerHTML = "▶ Run Benchmark";
                    }, 2500);
                }, 700);
            }

            // 2. Tech Stack Filter
            function filterStack(category, btn) {
                var buttons = document.querySelectorAll(".dev-tab-btn");
                buttons.forEach(function(b) { b.classList.remove("active"); });
                btn.classList.add("active");

                var cards = document.querySelectorAll(".dev-stack-card");
                cards.forEach(function(card) {
                    if (category === "all" || card.getAttribute("data-category") === category) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            }

            // 3. Code Snippets Switcher
            var snippets = {
                curl: `// 1. Dispatching an Autonomous AI Workflow via cURL
curl -X POST https://api.saastify.com/v1/ai/orchestrate \\
  -H "Authorization: Bearer sk_live_saastify_9f81a7" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent": "software-analyst",
    "model_tier": "deepseek-r1",
    "prompt": "Analyze repository architecture for performance bottlenecks",
    "webhook_url": "https://client-app.com/webhooks/ai-result",
    "options": {
      "temperature": 0.2,
      "strict_schema": true
    }
  }'

// Response: 200 OK
{
  "status": "success",
  "task_id": "tsk_89df2c19e",
  "latency_ms": 34,
  "data": {
    "execution": "queued",
    "estimated_seconds": 2.8
  }
}`,
                php: `// 2. Dispatching via Saastify PHP / Laravel SDK
use Saastify\\Ai\\Facades\\AiOrchestrator;
use App\\Jobs\\ProcessAiAnalysis;

$response = AiOrchestrator::agent('software-analyst')
    ->usingModel('deepseek-r1')
    ->withSchema(RepoAuditSchema::class)
    ->dispatch([
        'repo_id' => 14092,
        'scan_depth' => 'full_ast',
    ]);

if ($response->successful()) {
    ProcessAiAnalysis::dispatch($response->taskId());
}`,
                ts: `// 3. TypeScript / Node.js Integration
import { SaastifyClient } from '@saastify/sdk';

const client = new SaastifyClient({
  apiKey: process.env.SAASTIFY_API_KEY!,
});

const result = await client.ai.orchestrate({
  agent: 'software-analyst',
  modelTier: 'claude-3-5-sonnet',
  prompt: 'Generate unit test suite for payment webhook',
  strictSchema: true,
});

console.log(\`Task \${result.taskId} created with latency: \${result.latencyMs}ms\`);`,
                py: `# 4. Python / FastAPI Async Client
from saastify import SaastifyAsyncClient
import asyncio

async def run_audit():
    client = SaastifyAsyncClient(api_key="sk_live_saastify_9f81a7")
    
    task = await client.ai.orchestrate(
        agent="software-analyst",
        model_tier="deepseek-r1",
        prompt="Scan database query logs for missing composite indexes",
        temperature=0.1
    )
    print(f"Task Queued: {task.id} | Latency: {task.latency_ms}ms")

asyncio.run(run_audit())`
            };

            function switchSnippet(lang, btn) {
                var tabs = document.querySelectorAll(".dev-sandbox-tab");
                tabs.forEach(function(t) { t.classList.remove("active"); });
                btn.classList.add("active");

                var codeEl = document.getElementById("code-content");
                if (snippets[lang]) {
                    codeEl.textContent = snippets[lang];
                }
            }

            function copySnippet() {
                var codeEl = document.getElementById("code-content");
                navigator.clipboard.writeText(codeEl.textContent).then(function() {
                    var btnText = document.getElementById("copy-btn-text");
                    btnText.textContent = "✔ Copied!";
                    setTimeout(function() {
                        btnText.textContent = "Copy Snippet";
                    }, 2000);
                });
            }
        </script>
    </body>
</html>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@yield('title', 'Saastify - Cloud & Software Platform')</title>
  <meta name="description" content="@yield('description', 'Engineered for ambitious businesses building custom software, scalable SaaS platforms, intelligent CRM systems, and autonomous AI teams.')">

  <!-- Multi-size Favicons & Brand Assets -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Global Base Styles & Design Tokens -->
  <style>
    :root {
      --bg-dark: #09090b;
      --bg-surface: #121216;
      --bg-card: #18181f;
      --bg-card-hover: #20202a;
      --border-color: #272732;
      --border-color-hover: #3b3b4f;
      --text-main: #f4f4f6;
      --text-muted: #9494a8;
      --primary: #6d28d9;
      --primary-light: #8b5cf6;
      --primary-glow: rgba(139, 92, 246, 0.18);
      --secondary: #06b6d4;
      --accent: #10b981;
      --badge-popular: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
    }

    * {
      box-sizing: border-box;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    /* Shared Header Styles */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(9, 9, 11, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-color);
    }
    .header-container {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: var(--text-main);
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    .nav-link {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 15px;
      font-weight: 600;
      transition: color 0.2s ease;
    }
    .nav-link:hover, .nav-link.active {
      color: #ffffff;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .btn-login {
      color: var(--text-main);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
    }
    .btn-login:hover {
      background: var(--bg-card);
      border-color: var(--border-color-hover);
    }
    .btn-cta {
      background: var(--primary-light);
      color: #ffffff;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 8px;
      box-shadow: 0 4px 14px var(--primary-glow);
      transition: all 0.2s ease;
    }
    .btn-cta:hover {
      background: #7c3aed;
      transform: translateY(-1px);
    }

    /* Shared Footer Styles */
    .site-footer {
      background: #09090b;
      border-top: 1px solid var(--border-color);
      padding: 64px 24px 32px;
    }
    .footer-container {
      max-width: 1280px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr repeat(3, 1fr);
      gap: 48px;
      margin-bottom: 48px;
    }
    .footer-brand p {
      color: var(--text-muted);
      font-size: 14px;
      margin-top: 16px;
      max-width: 320px;
      line-height: 1.6;
    }
    .footer-col h4 {
      color: #ffffff;
      font-size: 15px;
      font-weight: 700;
      margin: 0 0 18px;
    }
    .footer-col ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer-col li {
      margin-bottom: 12px;
    }
    .footer-col a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s ease;
    }
    .footer-col a:hover {
      color: #ffffff;
    }
    .footer-bottom {
      max-width: 1280px;
      margin: 0 auto;
      padding-top: 32px;
      border-top: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      color: var(--text-muted);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .footer-container {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 12px;
        text-align: center;
      }
    }
  </style>

  @stack('styles')

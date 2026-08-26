<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Saastify Dashboard - dekholadakh.org</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />
  <style>
    :root {
      --font-sans: 'DM Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      
      --bg-page: #f6f7fb;
      --bg-card: #ffffff;
      --bg-sidebar: #ffffff;
      --bg-rail: #ffffff;
      
      --border-subtle: #eaedf2;
      --border-medium: #d8dde6;
      --border-focus: #6366f1;
      
      --text-primary: #171923;
      --text-secondary: #5a6275;
      --text-muted: #8c96a8;
      --text-light: #adb5bd;
      
      --primary-50: #f5f3ff;
      --primary-100: #ede9fe;
      --primary-500: #6366f1;
      --primary-600: #5850ec;
      --primary-700: #4f46e5;
      
      --success-50: #ecfdf5;
      --success-500: #10b981;
      --success-600: #059669;
      --success-dark: #065f46;
      
      --warning-50: #fffbeb;
      --warning-500: #f59e0b;
      
      --purple-gradient: linear-gradient(135deg, #6366f1, #8b5cf6);
      --badge-purple-bg: #f3f0ff;
      --badge-purple-text: #6d28d9;
      
      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.05);
      --radius-sm: 6px;
      --radius-md: 10px;
      --radius-lg: 14px;
      --radius-full: 9999px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-sans);
      background-color: var(--bg-page);
      color: var(--text-primary);
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
      display: flex;
      height: 100vh;
      overflow: hidden;
    }

    /* ==========================================================================
       1. LEFTMOST ICON RAIL
       ========================================================================== */
    .icon-rail {
      width: 72px;
      min-width: 72px;
      background: var(--bg-rail);
      border-right: 1px solid var(--border-subtle);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 14px 0 20px;
      overflow-y: auto;
      overflow-x: hidden;
      z-index: 30;
      scrollbar-width: none;
    }
    .icon-rail::-webkit-scrollbar {
      display: none;
    }

    .rail-logo {
      width: 42px;
      height: 42px;
      background: var(--purple-gradient);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(99, 102, 241, 0.25);
    }
    .rail-logo svg {
      width: 22px;
      height: 22px;
      color: #ffffff;
    }

    .rail-nav {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 100%;
      padding: 0 8px;
    }

    .rail-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px 4px;
      border-radius: var(--radius-md);
      cursor: pointer;
      color: var(--text-secondary);
      text-decoration: none;
      transition: all 0.15s ease;
      position: relative;
    }
    .rail-item:hover {
      background-color: #f3f4f8;
      color: var(--text-primary);
    }
    .rail-item.active {
      color: var(--primary-600);
      background-color: var(--primary-50);
    }
    .rail-item svg {
      width: 20px;
      height: 20px;
      stroke-width: 2;
    }
    .rail-item span {
      font-size: 10px;
      font-weight: 500;
      margin-top: 4px;
      text-align: center;
      max-width: 58px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* ==========================================================================
       2. SECONDARY SUB-SIDEBAR
       ========================================================================== */
    .sub-sidebar {
      width: 240px;
      min-width: 240px;
      background: var(--bg-sidebar);
      border-right: 1px solid var(--border-subtle);
      display: flex;
      flex-direction: column;
      padding: 16px 14px;
      overflow-y: auto;
      z-index: 20;
    }

    .site-selector-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: capitalize;
      margin-bottom: 6px;
    }

    .site-selector {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: #ffffff;
      border: 1px solid var(--border-medium);
      border-radius: var(--radius-md);
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
      cursor: pointer;
      margin-bottom: 14px;
      transition: border-color 0.15s ease;
    }
    .site-selector:hover {
      border-color: var(--border-focus);
    }
    .site-selector svg {
      width: 16px;
      height: 16px;
      color: var(--text-secondary);
    }

    .sidebar-search {
      position: relative;
      margin-bottom: 14px;
    }
    .sidebar-search svg {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
      color: var(--text-muted);
    }
    .sidebar-search input {
      width: 100%;
      padding: 7px 10px 7px 32px;
      font-size: 12.5px;
      font-family: inherit;
      background: #f8fafc;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      outline: none;
      color: var(--text-primary);
    }
    .sidebar-search input:focus {
      border-color: var(--border-focus);
      background: #ffffff;
    }

    .sub-nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .sub-nav-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10px;
      border-radius: var(--radius-sm);
      font-size: 13px;
      font-weight: 500;
      color: var(--text-secondary);
      text-decoration: none;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .sub-nav-item-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .sub-nav-item svg {
      width: 17px;
      height: 17px;
    }
    .sub-nav-item .chevron {
      width: 14px;
      height: 14px;
      color: var(--text-muted);
    }
    .sub-nav-item:hover {
      background-color: #f1f3f8;
      color: var(--text-primary);
    }
    .sub-nav-item.active {
      background-color: #eef2ff;
      color: var(--primary-700);
      font-weight: 600;
    }
    .sub-nav-item.active svg {
      color: var(--primary-700);
    }

    /* ==========================================================================
       3. MAIN LAYOUT & TOP BAR
       ========================================================================== */
    .app-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
      background: var(--bg-page);
    }

    .top-bar {
      height: 60px;
      min-height: 60px;
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      z-index: 10;
    }

    .referral-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: #f1edff;
      border-radius: var(--radius-full);
      font-size: 12.5px;
      font-weight: 600;
      color: #6d28d9;
      cursor: pointer;
      border: 1px solid #e0d7fe;
    }
    .referral-pill svg {
      width: 15px;
      height: 15px;
      color: #7c3aed;
    }

    .top-bar-right {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .agent-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: #ffffff;
      border: 1px solid var(--border-medium);
      border-radius: var(--radius-full);
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
      cursor: pointer;
      box-shadow: var(--shadow-sm);
    }
    .agent-btn svg {
      width: 15px;
      height: 15px;
      color: var(--primary-600);
    }

    .icon-btn {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-full);
      border: 1px solid var(--border-medium);
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text-secondary);
      box-shadow: var(--shadow-sm);
    }
    .icon-btn svg {
      width: 17px;
      height: 17px;
    }

    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-full);
      background: #ffffff;
      border: 1px solid var(--border-medium);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      cursor: pointer;
      box-shadow: var(--shadow-sm);
    }
    .user-avatar svg {
      width: 20px;
      height: 20px;
    }

    /* ==========================================================================
       4. SCROLLABLE DASHBOARD CONTENT
       ========================================================================== */
    .dashboard-scroll {
      flex: 1;
      overflow-y: auto;
      padding: 8px 36px 40px;
    }

    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 500;
      color: var(--text-secondary);
      margin-bottom: 12px;
    }
    .breadcrumbs a {
      color: var(--text-secondary);
      text-decoration: none;
    }
    .breadcrumbs a:hover {
      color: var(--text-primary);
    }
    .breadcrumbs svg {
      width: 14px;
      height: 14px;
    }

    .page-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .page-title {
      font-size: 24px;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.5px;
    }
    .upgrade-btn {
      padding: 8px 18px;
      background: #ffffff;
      border: 1px solid #d4c8fc;
      border-radius: var(--radius-md);
      font-size: 13px;
      font-weight: 600;
      color: #6d28d9;
      cursor: pointer;
      transition: all 0.15s ease;
      box-shadow: var(--shadow-sm);
    }
    .upgrade-btn:hover {
      background: #f8f6fe;
      border-color: #7c3aed;
    }

    /* Common Card Styling */
    .dash-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 20px 24px;
      margin-bottom: 20px;
      box-shadow: var(--shadow-sm);
    }

    /* ==========================================================================
       5. CARD 1: TOP WEBSITE STATUS CARD
       ========================================================================== */
    .website-header-card {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .wh-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .wh-identity {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .code-icon-box {
      width: 44px;
      height: 44px;
      border-radius: var(--radius-md);
      border: 1px solid var(--border-medium);
      background: #fafbfe;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary);
      font-weight: 700;
      font-size: 17px;
      font-family: var(--font-mono);
    }
    .wh-site-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .wh-site-title svg {
      width: 14px;
      height: 14px;
      color: var(--text-muted);
    }
    .wh-site-date {
      font-size: 12px;
      color: var(--text-secondary);
      margin-top: 2px;
    }

    .wh-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .github-status {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12.5px;
      font-weight: 500;
      color: var(--text-secondary);
    }
    .github-status svg {
      width: 16px;
      height: 16px;
      color: #24292f;
    }

    .redeploy-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      background: #5b4ceb;
      color: #ffffff;
      border: none;
      border-radius: var(--radius-md);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(91, 76, 235, 0.3);
      transition: background 0.15s ease;
    }
    .redeploy-btn:hover {
      background: #4a3ac9;
    }
    .redeploy-btn svg {
      width: 14px;
      height: 14px;
    }

    .menu-dots-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
    }
    .menu-dots-btn svg {
      width: 18px;
      height: 18px;
    }

    .wh-bottom-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 14px;
      border-top: 1px solid var(--border-subtle);
      flex-wrap: wrap;
      gap: 10px;
    }
    .wh-quick-btns {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .pill-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: #ffffff;
      border: 1px solid var(--border-medium);
      border-radius: var(--radius-full);
      font-size: 12px;
      font-weight: 600;
      color: var(--text-primary);
      cursor: pointer;
    }
    .pill-btn svg {
      width: 14px;
      height: 14px;
      color: var(--text-secondary);
    }

    .wh-status-tags {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .status-tag {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-secondary);
    }
    .status-tag .check-circle {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--success-500);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .status-tag .check-circle svg {
      width: 9px;
      height: 9px;
      stroke-width: 3;
    }
    .status-tag.dropdown-tag {
      cursor: pointer;
    }
    .status-tag.dropdown-tag .chevron {
      width: 12px;
      height: 12px;
      color: var(--text-muted);
    }

    /* ==========================================================================
       6. CARD 2: LAST DEPLOYMENT CARD
       ========================================================================== */
    .deployment-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .dh-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .dh-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .current-badge {
      padding: 2px 10px;
      background: #f1edff;
      border-radius: var(--radius-full);
      font-size: 11px;
      font-weight: 700;
      color: #6d28d9;
    }
    .subtle-btn {
      padding: 6px 14px;
      background: #ffffff;
      border: 1px solid var(--border-medium);
      border-radius: var(--radius-md);
      font-size: 12px;
      font-weight: 600;
      color: var(--text-primary);
      cursor: pointer;
    }

    .deployment-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding-top: 6px;
    }
    .dep-col {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .dep-item {
      font-size: 12px;
    }
    .dep-label {
      color: var(--text-muted);
      margin-right: 6px;
    }
    .dep-val {
      font-weight: 600;
      color: var(--text-primary);
    }
    .dep-val.completed {
      color: var(--success-600);
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .dot-green {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--success-500);
    }
    .dep-link {
      color: var(--primary-600);
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .dep-link svg {
      width: 12px;
      height: 12px;
    }
    .dep-time {
      color: var(--text-muted);
      font-size: 11px;
    }
    .dep-code {
      font-family: var(--font-mono);
      font-size: 11px;
      background: #f1f3f7;
      padding: 1px 6px;
      border-radius: 4px;
    }

    /* ==========================================================================
       7. MAIN TWO-COLUMN SPLIT GRID
       ========================================================================== */
    .dashboard-split-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    /* Left: Essentials Card */
    .essentials-card {
      display: flex;
      flex-direction: column;
    }
    .card-heading {
      font-size: 16px;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 16px;
    }

    .essentials-list {
      display: flex;
      flex-direction: column;
    }
    .essential-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0;
      border-bottom: 1px solid var(--border-subtle);
    }
    .essential-row:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .essential-row:first-child {
      padding-top: 0;
    }

    .er-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .er-icon {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-md);
      background: #f4f6fa;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
    }
    .er-icon svg {
      width: 18px;
      height: 18px;
    }
    .er-info-title {
      font-size: 13.5px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .er-info-sub {
      font-size: 12px;
      color: var(--text-secondary);
    }

    .er-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .action-btn {
      padding: 6px 14px;
      background: #ffffff;
      border: 1px solid var(--border-medium);
      border-radius: var(--radius-md);
      font-size: 12px;
      font-weight: 600;
      color: var(--text-primary);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .action-btn:hover {
      background: #f8fafc;
      border-color: var(--text-secondary);
    }
    .action-btn svg {
      width: 12px;
      height: 12px;
    }
    .chevron-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      padding: 4px;
    }
    .chevron-btn svg {
      width: 16px;
      height: 16px;
    }

    /* Right Column: Performance & Resource Usage */
    .right-stack {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .card-header-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    /* Performance Gauge Layout */
    .gauges-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 10px 0;
    }
    .gauge-col {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .gauge-circle {
      position: relative;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gauge-circle svg {
      transform: rotate(-90deg);
      width: 60px;
      height: 60px;
    }
    .gauge-circle circle {
      fill: none;
      stroke-width: 5;
    }
    .gauge-bg {
      stroke: #e5e7eb;
    }
    .gauge-val-desktop {
      stroke: #10b981;
      stroke-linecap: round;
      stroke-dasharray: 163;
      stroke-dashoffset: 6; /* ~98% */
    }
    .gauge-val-mobile {
      stroke: #d1d5db;
      stroke-dasharray: 4 4; /* dashed */
    }
    .gauge-text {
      position: absolute;
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .gauge-text.mobile-icon {
      color: var(--text-muted);
    }
    .gauge-info-title {
      font-size: 13.5px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .gauge-info-sub {
      font-size: 11.5px;
      color: var(--text-secondary);
      margin-top: 1px;
    }

    /* Plan Resource Usage Layout */
    .resources-layout {
      display: grid;
      grid-template-columns: 80px 1fr 1fr;
      gap: 16px;
      align-items: center;
    }

    .donut-chart-box {
      width: 74px;
      height: 74px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .donut-svg {
      width: 74px;
      height: 74px;
      transform: rotate(-90deg);
    }
    .donut-svg circle {
      fill: none;
      stroke-width: 8;
    }
    .d-ring-1 {
      stroke: #6366f1; /* purple */
      stroke-dasharray: 188;
      stroke-dashoffset: 140;
    }
    .d-ring-2 {
      stroke: #10b981; /* green */
      stroke-dasharray: 188;
      stroke-dashoffset: 160;
    }
    .d-ring-3 {
      stroke: #06b6d4; /* cyan */
      stroke-dasharray: 188;
      stroke-dashoffset: 175;
    }

    .res-metric-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .res-item {
      display: flex;
      flex-direction: column;
    }
    .res-label {
      font-size: 11.5px;
      color: var(--text-muted);
      font-weight: 500;
    }
    .res-val {
      font-size: 13px;
      font-weight: 700;
      color: var(--text-primary);
    }

    .res-sparkline-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .spark-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .spark-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
    .spark-label {
      font-size: 11px;
      color: var(--text-muted);
    }
    .spark-val {
      font-size: 13px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .sparkline-svg {
      width: 100%;
      height: 14px;
    }
    .sparkline-svg path {
      fill: none;
      stroke: #7c3aed;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .resource-footer-time {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 11.5px;
      color: var(--text-muted);
      margin-top: 14px;
      padding-top: 10px;
      border-top: 1px solid var(--border-subtle);
    }
    .resource-footer-time svg {
      width: 13px;
      height: 13px;
    }

    /* ==========================================================================
       8. CARD 3: TIPS TO IMPROVE BANNER
       ========================================================================== */
    .tips-section {
      margin-bottom: 20px;
    }
    .tips-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 14px;
    }
    .tip-banner {
      background: #ffffff;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: var(--shadow-sm);
    }
    .tip-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .tip-icon-box {
      width: 38px;
      height: 38px;
      border-radius: var(--radius-md);
      background: #f1edff;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #7c3aed;
    }
    .tip-icon-box svg {
      width: 18px;
      height: 18px;
    }
    .tip-heading {
      font-size: 13.5px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .tip-desc {
      font-size: 12.5px;
      color: var(--text-secondary);
    }
    .tip-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .transfer-btn {
      padding: 7px 18px;
      background: #ffffff;
      border: 1px solid var(--border-medium);
      border-radius: var(--radius-md);
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
      cursor: pointer;
    }
    .close-tip-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
    }
    .close-tip-btn svg {
      width: 16px;
      height: 16px;
    }

    /* ==========================================================================
       9. RESPONSIVE BREAKPOINTS
       ========================================================================== */
    @media (max-width: 1200px) {
      .dashboard-split-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 900px) {
      .sub-sidebar {
        display: none;
      }
      .deployment-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 640px) {
      .top-bar {
        padding: 0 16px;
      }
      .dashboard-scroll {
        padding: 8px 16px 30px;
      }
      .wh-top {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }
      .wh-actions {
        width: 100%;
        justify-content: space-between;
      }
      .resources-layout {
        grid-template-columns: 1fr;
      }
    }
  </style>

<style id="anti-download-grabber-styles">
  /* Disable extension hover grabbers on background UI videos */
  .h-video-wrapper, .h-video, video {
    pointer-events: none !important;
    user-select: none !important;
    -webkit-user-select: none !important;
  }

  /* Prevent third-party download extension buttons from displaying */
  [id*="idm_"], [class*="idm_"],
  [id*="idm-"], [class*="idm-"],
  [id*="download-media"], [class*="download-media"],
  [id*="download_media"], [class*="download_media"],
  [id*="media-download"], [class*="media-download"],
  div[style*="z-index: 2147483647"],
  div[title*="Download this media"],
  div[aria-label*="Download this media"] {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }
</style>


  @stack('styles')
</head>
<body>
  @include('components.dashboard-sidebar')

  <main class="app-main">
    @include('components.dashboard-header')

    <div class="dashboard-scroll">
      @yield('content')
    </div>
  </main>

  @stack('scripts')
</body>
</html>

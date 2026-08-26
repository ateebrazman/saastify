@extends('layouts.dashboard')

@section('title', 'Saastify Dashboard - dekholadakh.org')

@section('content')
<!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
        </a>
        <span>&gt;</span>
        <a href="#">Websites</a>
        <span>&gt;</span>
        <span>dekholadakh.org</span>
      </div>

      <!-- Page Title Row -->
      <div class="page-title-row">
        <h1 class="page-title">Dashboard</h1>
        <button class="upgrade-btn">Upgrade plan</button>
      </div>

      <!-- CARD 1: WEBSITE IDENTITY & STATUS -->
      <section class="dash-card website-header-card">
        <div class="wh-top">
          <div class="wh-identity">
            <div class="code-icon-box">&lt;/&gt;</div>
            <div>
              <div class="wh-site-title">
                dekholadakh.org
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" x2="21" y1="14" y2="3"/>
                </svg>
              </div>
              <div class="wh-site-date">Created: 2026-08-09</div>
            </div>
          </div>

          <div class="wh-actions">
            <div class="github-status">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Connected with GitHub</span>
            </div>

            <button class="redeploy-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
              <span>Redeploy</span>
            </button>

            <button class="menu-dots-btn" title="Options">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="12" cy="19" r="2"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="wh-bottom-bar">
          <div class="wh-quick-btns">
            <button class="pill-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
              <span>Manage domain</span>
            </button>
            <button class="pill-btn">
              <span>+ Set up free email</span>
            </button>
          </div>

          <div class="wh-status-tags">
            <div class="status-tag dropdown-tag">
              <div class="check-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>Auto-deployment</span>
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>

            <div class="status-tag">
              <div class="check-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>Malware protected</span>
            </div>

            <div class="status-tag">
              <div class="check-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>SSL</span>
            </div>

            <div class="status-tag">
              <div class="check-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>CDN</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CARD 2: LAST DEPLOYMENT -->
      <section class="dash-card">
        <div class="deployment-header">
          <div class="dh-left">
            <h2 class="dh-title">Last deployment</h2>
            <span class="current-badge">Current</span>
          </div>
          <button class="subtle-btn">All deployments</button>
        </div>

        <div class="deployment-grid">
          <!-- Col 1 -->
          <div class="dep-col">
            <div class="dep-item">
              <span class="dep-label">Status</span>
              <span class="dep-val completed">
                <span class="dot-green"></span>
                Completed
              </span>
            </div>
            <div class="dep-item">
              <span class="dep-label">Repository:</span>
              <span class="dep-val">hotelmanagementsystem</span>
            </div>
            <div class="dep-item">
              <span class="dep-label">Deployed:</span>
              <span class="dep-time">2026-08-22 18:10 • 16s</span>
            </div>
          </div>

          <!-- Col 2 -->
          <div class="dep-col">
            <div class="dep-item">
              <span class="dep-label">Branch:</span>
              <span class="dep-val">main</span>
            </div>
            <div class="dep-item">
              <span class="dep-label">Commit:</span>
              <span class="dep-code">708b6175</span>
              <span class="dep-val">- feat(pwa): standardize PWA ic...</span>
            </div>
            <div class="dep-item">
              <span class="dep-label">Root directory:</span>
              <span class="dep-val">public_html/stayos</span>
            </div>
          </div>

          <!-- Col 3 -->
          <div class="dep-col">
            <div class="dep-item">
              <span class="dep-label">Website:</span>
              <a href="#" class="dep-link">
                dekholadakh.org
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" x2="21" y1="14" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- TWO-COLUMN SPLIT GRID -->
      <div class="dashboard-split-grid">
        <!-- LEFT COLUMN: ESSENTIALS -->
        <section class="dash-card essentials-card">
          <h2 class="card-heading">Essentials</h2>
          <div class="essentials-list">
            <!-- Database -->
            <div class="essential-row">
              <div class="er-left">
                <div class="er-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
                  </svg>
                </div>
                <div>
                  <div class="er-info-title">Database</div>
                  <div class="er-info-sub">Manage database</div>
                </div>
              </div>
              <div class="er-right">
                <button class="action-btn">Manage</button>
              </div>
            </div>

            <!-- Backups -->
            <div class="essential-row">
              <div class="er-left">
                <div class="er-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                    <path d="M12 7v5l4 2"/>
                  </svg>
                </div>
                <div>
                  <div class="er-info-title">Backups</div>
                  <div class="er-info-sub">Weekly</div>
                </div>
              </div>
              <div class="er-right">
                <button class="chevron-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- File manager -->
            <div class="essential-row">
              <div class="er-left">
                <div class="er-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
                  </svg>
                </div>
                <div>
                  <div class="er-info-title">File manager</div>
                  <div class="er-info-sub">Edit your files</div>
                </div>
              </div>
              <div class="er-right">
                <button class="action-btn">
                  Open
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" x2="21" y1="14" y2="3"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Cache -->
            <div class="essential-row">
              <div class="er-left">
                <div class="er-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m13 2-2 2.5h3L11 8"/>
                    <circle cx="12" cy="13" r="8"/>
                  </svg>
                </div>
                <div>
                  <div class="er-info-title">Cache</div>
                  <div class="er-info-sub">See latest changes</div>
                </div>
              </div>
              <div class="er-right">
                <button class="action-btn">Clear cache</button>
                <button class="action-btn">
                  No cache preview
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" x2="21" y1="14" y2="3"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Hosting plan -->
            <div class="essential-row">
              <div class="er-left">
                <div class="er-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="8" x="2" y="3" rx="2"/>
                    <rect width="20" height="8" x="2" y="13" rx="2"/>
                  </svg>
                </div>
                <div>
                  <div class="er-info-title">Hosting plan</div>
                  <div class="er-info-sub">Premium Web Hosting</div>
                </div>
              </div>
              <div class="er-right">
                <button class="chevron-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- RIGHT COLUMN: STACKED CARDS -->
        <div class="right-stack">
          <!-- PERFORMANCE CARD -->
          <section class="dash-card">
            <div class="card-header-flex">
              <h2 class="card-heading" style="margin-bottom:0;">Performance</h2>
              <button class="subtle-btn">Run speed test</button>
            </div>

            <div class="gauges-wrapper">
              <!-- Desktop Gauge -->
              <div class="gauge-col">
                <div class="gauge-circle">
                  <svg viewBox="0 0 60 60">
                    <circle class="gauge-bg" cx="30" cy="30" r="26" />
                    <circle class="gauge-val-desktop" cx="30" cy="30" r="26" />
                  </svg>
                  <span class="gauge-text">98</span>
                </div>
                <div>
                  <div class="gauge-info-title">Desktop</div>
                  <div class="gauge-info-sub">Last scanned:</div>
                  <div class="gauge-info-sub">2026-08-09 17:14</div>
                </div>
              </div>

              <!-- Mobile Gauge -->
              <div class="gauge-col">
                <div class="gauge-circle">
                  <svg viewBox="0 0 60 60">
                    <circle class="gauge-bg" cx="30" cy="30" r="26" />
                    <circle class="gauge-val-mobile" cx="30" cy="30" r="26" />
                  </svg>
                  <span class="gauge-text mobile-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                      <path d="M12 18h.01"/>
                    </svg>
                  </span>
                </div>
                <div>
                  <div class="gauge-info-title">Mobile</div>
                  <div class="gauge-info-sub">Not scanned yet</div>
                </div>
              </div>
            </div>
          </section>

          <!-- PLAN RESOURCE USAGE CARD -->
          <section class="dash-card">
            <div class="card-header-flex">
              <h2 class="card-heading" style="margin-bottom:0;">Plan resource usage</h2>
              <button class="subtle-btn">See details</button>
            </div>

            <div class="resources-layout">
              <!-- Multi-ring donut chart -->
              <div class="donut-chart-box">
                <svg class="donut-svg" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="30" stroke="#f1f3f8" stroke-width="8" fill="none" />
                  <circle class="d-ring-1" cx="40" cy="40" r="30" />
                  <circle class="d-ring-2" cx="40" cy="40" r="22" stroke-width="6" />
                  <circle class="d-ring-3" cx="40" cy="40" r="15" stroke-width="4" />
                </svg>
              </div>

              <!-- Metrics -->
              <div class="res-metric-group">
                <div class="res-item">
                  <span class="res-label">Disk usage</span>
                  <span class="res-val">3.83 GB / 20 GB</span>
                </div>
                <div class="res-item">
                  <span class="res-label">Inodes</span>
                  <span class="res-val">65.33k / 400k</span>
                </div>
                <div class="res-item">
                  <span class="res-label">Websites</span>
                  <span class="res-val">3 / 3</span>
                </div>
              </div>

              <!-- Sparklines -->
              <div class="res-sparkline-group">
                <div class="spark-item">
                  <div class="spark-header">
                    <span class="spark-label">CPU</span>
                    <span class="spark-val">2 %</span>
                  </div>
                  <svg class="sparkline-svg" viewBox="0 0 100 14" preserveAspectRatio="none">
                    <path d="M0,10 L15,10 L25,8 L35,11 L45,9 L55,10 L65,7 L75,10 L85,9 L100,10" />
                  </svg>
                </div>

                <div class="spark-item">
                  <div class="spark-header">
                    <span class="spark-label">Memory</span>
                    <span class="spark-val">49 MB</span>
                  </div>
                  <svg class="sparkline-svg" viewBox="0 0 100 14" preserveAspectRatio="none">
                    <path d="M0,8 L10,8 L20,7 L30,9 L40,8 L50,6 L60,8 L70,8 L80,5 L90,8 L100,7" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="resource-footer-time">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Last 24 hours</span>
            </div>
          </section>
        </div>
      </div>

      <!-- CARD 3: TIPS TO IMPROVE -->
      <section class="tips-section">
        <h2 class="tips-title">Tips to improve</h2>
        <div class="tip-banner">
          <div class="tip-left">
            <div class="tip-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
              </svg>
            </div>
            <div>
              <div class="tip-heading">Manage all services in one place</div>
              <div class="tip-desc">Transfer your domain dekholadakh.org to Saastify!</div>
            </div>
          </div>
          <div class="tip-right">
            <button class="transfer-btn">Transfer</button>
            <button class="close-tip-btn" title="Dismiss">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" x2="6" y1="6" y2="18"/>
                <line x1="6" x2="18" y1="6" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
@endsection

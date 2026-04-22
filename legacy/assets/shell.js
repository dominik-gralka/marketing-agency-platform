// Shared nav + footer + tweaks — loaded on every page
(function () {
  const currentPath = location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
    <nav class="nav">
      <div class="nav-inner">
        <a class="brand" href="index.html">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>Northbound</span>
        </a>
        <div class="nav-links">
          <a href="method.html" data-page="method.html">Method</a>
          <a href="pricing.html" data-page="pricing.html">Pricing</a>
          <a href="audit.html" data-page="audit.html">Audit</a>
          <a href="about.html" data-page="about.html">About</a>
          <a href="contact.html" data-page="contact.html">Contact</a>
        </div>
        <a class="nav-cta" href="audit.html">
          Start free audit
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="square"/></svg>
        </a>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="footer">
      <div class="shell">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="brand" style="margin-bottom:16px">
              <span class="brand-mark" aria-hidden="true"></span>
              <span>Northbound</span>
            </div>
            <p class="body" style="max-width:36ch; color:var(--mid); font-size:14px">
              A vertical paid-media partner for high-growth DTC and B2B teams. We sell outcomes, not hours.
            </p>
            <div style="margin-top:20px; display:flex; gap:10px; flex-wrap:wrap">
              <span class="tag">Meta</span>
              <span class="tag">Google</span>
              <span class="tag">TikTok</span>
              <span class="tag">LinkedIn</span>
            </div>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="pricing.html">Launch</a></li>
              <li><a href="pricing.html">Growth</a></li>
              <li><a href="pricing.html">Scale</a></li>
              <li><a href="audit.html">Paid audit</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="method.html">Method</a></li>
              <li><a href="#">Case studies</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@northbound.co">hello@northbound.co</a></li>
              <li><a href="contact.html">Book a call</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-base">
          <span>© 2026 Northbound Growth, Inc. All rights reserved.</span>
          <span class="mono">NB · 0426 · v4.2</span>
        </div>
      </div>
    </footer>
  `;

  // Mount
  const navMount = document.getElementById('nav');
  const footerMount = document.getElementById('footer');
  if (navMount) navMount.outerHTML = navHTML;
  if (footerMount) footerMount.outerHTML = footerHTML;

  // Active link
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === currentPath) a.classList.add('active');
  });
})();

// ---------- Tweaks ----------
(function () {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "ink",
    "density": "comfortable",
    "headline": "A",
    "showHot": false
  }/*EDITMODE-END*/;

  const state = { ...TWEAK_DEFAULTS };

  function apply() {
    document.body.classList.toggle('compact', state.density === 'compact');
    const root = document.documentElement;
    if (state.accent === 'ink') root.style.setProperty('--accent', '#171412');
    if (state.accent === 'amber') root.style.setProperty('--accent', 'oklch(0.68 0.14 55)');
    if (state.accent === 'olive') root.style.setProperty('--accent', 'oklch(0.58 0.09 120)');
    if (state.accent === 'navy') root.style.setProperty('--accent', 'oklch(0.42 0.08 260)');
    document.body.dataset.headline = state.headline;
    document.body.dataset.hot = state.showHot ? '1' : '0';
    document.querySelectorAll('[data-headline-variant]').forEach(el => {
      el.style.display = el.dataset.headlineVariant === state.headline ? '' : 'none';
    });
  }

  function buildPanel() {
    const panel = document.createElement('div');
    panel.id = 'tweaks-panel';
    panel.style.cssText = `
      position: fixed; bottom: 24px; right: 24px; z-index: 100;
      width: 280px; background: var(--paper); border: 1px solid var(--rule);
      border-radius: 2px; padding: 20px; display: none; font-family: var(--sans);
      box-shadow: 0 12px 40px rgba(23,20,18,0.08);
    `;
    panel.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:16px">
        <div class="kicker">Tweaks</div>
        <button id="tw-close" style="font-family:var(--mono); font-size:11px; color:var(--mid)">Close</button>
      </div>
      <div style="display:flex; flex-direction:column; gap:18px">
        <div>
          <div class="kicker" style="margin-bottom:8px">Accent</div>
          <div style="display:flex; gap:6px; flex-wrap:wrap">
            ${['ink','amber','olive','navy'].map(c => `<button class="tw-chip" data-k="accent" data-v="${c}">${c}</button>`).join('')}
          </div>
        </div>
        <div>
          <div class="kicker" style="margin-bottom:8px">Headline</div>
          <div style="display:flex; gap:6px">
            ${['A','B','C'].map(c => `<button class="tw-chip" data-k="headline" data-v="${c}">${c}</button>`).join('')}
          </div>
          <div class="small" style="margin-top:6px; font-size:11px">Home hero only</div>
        </div>
        <div>
          <div class="kicker" style="margin-bottom:8px">Density</div>
          <div style="display:flex; gap:6px">
            ${['comfortable','compact'].map(c => `<button class="tw-chip" data-k="density" data-v="${c}">${c}</button>`).join('')}
          </div>
        </div>
        <div>
          <div class="kicker" style="margin-bottom:8px">Amber accent pops</div>
          <div style="display:flex; gap:6px">
            <button class="tw-chip" data-k="showHot" data-v="true">on</button>
            <button class="tw-chip" data-k="showHot" data-v="false">off</button>
          </div>
        </div>
      </div>
    `;
    const style = document.createElement('style');
    style.textContent = `
      .tw-chip { padding: 6px 10px; border: 1px solid var(--rule-2); background: var(--bg); border-radius: 2px; font-size: 12px; font-family: var(--mono); text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; }
      .tw-chip.on { background: var(--ink); color: var(--bg); border-color: var(--ink); }
      body[data-hot="0"] .hot { color: inherit !important; }
      body[data-hot="0"] .hot-bg { background: var(--paper) !important; color: var(--ink-2) !important; }
    `;
    document.head.appendChild(style);
    document.body.appendChild(panel);

    function refreshChips() {
      panel.querySelectorAll('.tw-chip').forEach(btn => {
        const k = btn.dataset.k, v = btn.dataset.v;
        const current = String(state[k]);
        btn.classList.toggle('on', current === v);
      });
    }

    panel.addEventListener('click', (e) => {
      const btn = e.target.closest('.tw-chip');
      if (btn) {
        const k = btn.dataset.k, v = btn.dataset.v;
        state[k] = v === 'true' ? true : v === 'false' ? false : v;
        apply();
        refreshChips();
        try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: state[k] } }, '*'); } catch (e) {}
      }
      if (e.target.id === 'tw-close') {
        panel.style.display = 'none';
      }
    });

    refreshChips();
    return panel;
  }

  const panel = buildPanel();

  window.addEventListener('message', (e) => {
    if (!e.data || !e.data.type) return;
    if (e.data.type === '__activate_edit_mode') panel.style.display = 'block';
    if (e.data.type === '__deactivate_edit_mode') panel.style.display = 'none';
  });

  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}

  apply();
})();

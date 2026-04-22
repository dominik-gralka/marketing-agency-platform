// Inline free-audit benchmark tool — multi-step form w/ fake analysis
(function () {
  const mount = document.getElementById('audit-tool');
  if (!mount) return;

  const state = {
    step: 0, // 0 form, 1 analyzing, 2 results
    domain: '',
    spend: '50-100',
    platforms: ['meta', 'google'],
    niche: 'supplements',
    email: '',
  };

  const platforms = [
    { k: 'meta', l: 'Meta' },
    { k: 'google', l: 'Google' },
    { k: 'tiktok', l: 'TikTok' },
    { k: 'linkedin', l: 'LinkedIn' },
  ];
  const spendRanges = [
    { k: '0-40', l: '<$40K/mo' },
    { k: '40-100', l: '$40–100K/mo' },
    { k: '50-100', l: '$100–350K/mo' },
    { k: '350+', l: '$350K+/mo' },
  ];
  const niches = [
    { k: 'supplements', l: 'Supplements' },
    { k: 'beauty', l: 'Beauty / skincare' },
    { k: 'beverage', l: 'Beverage' },
    { k: 'apparel', l: 'Apparel' },
    { k: 'other', l: 'Other DTC' },
  ];

  function render() {
    if (state.step === 0) return renderForm();
    if (state.step === 1) return renderAnalyzing();
    if (state.step === 2) return renderResults();
  }

  function renderForm() {
    mount.innerHTML = `
      <div style="display:grid; grid-template-columns: 1.5fr 1fr; min-height: 520px">
        <div style="padding: 48px 48px 48px 48px; display:flex; flex-direction:column; gap: 32px">
          <div style="display:flex; justify-content:space-between; align-items:center">
            <span class="kicker">Step 1 of 2 · Benchmark inputs</span>
            <span class="mono" style="color:var(--mid); font-size:11px">EST ~2 MIN</span>
          </div>

          <div class="field">
            <label>Your domain</label>
            <input class="input" id="f-domain" placeholder="brandname.com" value="${state.domain}">
          </div>

          <div class="field">
            <label>Monthly paid spend</label>
            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:4px">
              ${spendRanges.map(r => `<button class="chip-choice ${state.spend === r.k ? 'on' : ''}" data-spend="${r.k}">${r.l}</button>`).join('')}
            </div>
          </div>

          <div class="field">
            <label>Platforms you're running</label>
            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:4px">
              ${platforms.map(p => `<button class="chip-choice ${state.platforms.includes(p.k) ? 'on' : ''}" data-plat="${p.k}">${p.l}</button>`).join('')}
            </div>
          </div>

          <div class="field">
            <label>Vertical</label>
            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:4px">
              ${niches.map(n => `<button class="chip-choice ${state.niche === n.k ? 'on' : ''}" data-niche="${n.k}">${n.l}</button>`).join('')}
            </div>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; border-top: 1px solid var(--rule); padding-top: 24px; margin-top: auto">
            <div class="mono small">We'll ask for email only once the report is ready.</div>
            <button class="btn btn-primary" id="f-run">
              Run the benchmark
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="square"/></svg>
            </button>
          </div>
        </div>

        <aside style="background: var(--bg); border-left: 1px solid var(--rule); padding: 40px; display:flex; flex-direction:column; justify-content:space-between">
          <div>
            <div class="kicker">What you'll get</div>
            <ul style="list-style:none; padding:0; margin: 24px 0 0; display:flex; flex-direction:column; gap: 20px">
              <li style="display:flex; gap:14px; align-items:flex-start"><span class="mono" style="color:var(--mid)">01</span><span class="body" style="font-size:14px; color:var(--ink-2)">Blended MER vs. vertical median</span></li>
              <li style="display:flex; gap:14px; align-items:flex-start"><span class="mono" style="color:var(--mid)">02</span><span class="body" style="font-size:14px; color:var(--ink-2)">CAC headroom estimate (where you could go)</span></li>
              <li style="display:flex; gap:14px; align-items:flex-start"><span class="mono" style="color:var(--mid)">03</span><span class="body" style="font-size:14px; color:var(--ink-2)">Three specific account-level flags</span></li>
              <li style="display:flex; gap:14px; align-items:flex-start"><span class="mono" style="color:var(--mid)">04</span><span class="body" style="font-size:14px; color:var(--ink-2)">Creative concentration score</span></li>
            </ul>
          </div>
          <div>
            <div class="placeholder" style="height: 120px; font-size: 10px"><span>benchmark preview</span></div>
            <div class="mono small" style="margin-top: 12px">No sales follow-up. Check the box at the end if you want one.</div>
          </div>
        </aside>
      </div>
    `;

    mount.querySelector('#f-domain').addEventListener('input', e => state.domain = e.target.value);
    mount.querySelectorAll('[data-spend]').forEach(b => b.addEventListener('click', () => { state.spend = b.dataset.spend; render(); }));
    mount.querySelectorAll('[data-plat]').forEach(b => b.addEventListener('click', () => {
      const k = b.dataset.plat;
      if (state.platforms.includes(k)) state.platforms = state.platforms.filter(p => p !== k);
      else state.platforms = [...state.platforms, k];
      render();
    }));
    mount.querySelectorAll('[data-niche]').forEach(b => b.addEventListener('click', () => { state.niche = b.dataset.niche; render(); }));
    mount.querySelector('#f-run').addEventListener('click', () => {
      if (!state.domain) { mount.querySelector('#f-domain').focus(); return; }
      state.step = 1; render();
    });
  }

  function renderAnalyzing() {
    const steps = [
      { l: 'Fetching domain signals', d: 700 },
      { l: 'Pulling vertical medians (supplements)', d: 900 },
      { l: 'Estimating creative concentration', d: 900 },
      { l: 'Scoring account structure', d: 900 },
      { l: 'Drafting benchmark report', d: 700 },
    ];
    mount.innerHTML = `
      <div style="padding: 64px 48px; display:flex; flex-direction:column; align-items:center; gap: 32px; min-height: 520px; justify-content: center">
        <div class="kicker">Analyzing</div>
        <div class="display" style="font-size: clamp(36px, 5vw, 72px); text-align:center; max-width: 20ch">Benchmarking <em>${state.domain || 'your account'}</em> against the vertical...</div>
        <ol id="analysis-steps" style="list-style:none; padding:0; margin:0; width: 100%; max-width: 540px; display:flex; flex-direction:column; gap: 12px">
          ${steps.map((s, i) => `
            <li data-i="${i}" style="display:flex; justify-content:space-between; align-items:center; padding: 14px 18px; background: var(--bg); border: 1px solid var(--rule); opacity: .35; transition: opacity .3s">
              <span class="mono" style="font-size:12px; text-transform:uppercase; letter-spacing:0.08em">${String(i+1).padStart(2,'0')} · ${s.l}</span>
              <span class="mono state" style="font-size:11px; color:var(--mid)">QUEUED</span>
            </li>
          `).join('')}
        </ol>
      </div>
    `;
    let acc = 0;
    steps.forEach((s, i) => {
      setTimeout(() => {
        const el = mount.querySelector(`[data-i="${i}"]`);
        if (!el) return;
        el.style.opacity = 1;
        el.querySelector('.state').textContent = 'RUNNING...';
      }, acc);
      acc += 220;
      setTimeout(() => {
        const el = mount.querySelector(`[data-i="${i}"]`);
        if (!el) return;
        el.querySelector('.state').textContent = 'DONE';
        el.querySelector('.state').style.color = 'oklch(0.55 0.14 145)';
      }, acc + s.d);
      acc += s.d;
    });
    setTimeout(() => { state.step = 2; render(); }, acc + 500);
  }

  function renderResults() {
    mount.innerHTML = `
      <div style="padding: 40px 48px 48px">
        <div style="display:flex; justify-content:space-between; align-items:baseline; border-bottom: 1px solid var(--rule); padding-bottom: 20px; margin-bottom: 28px">
          <div>
            <div class="kicker">Benchmark report</div>
            <div style="font-family: var(--serif); font-size: 28px; line-height: 1.1; margin-top: 8px">${state.domain || 'your-domain.com'} <span style="color:var(--mid); font-size: 18px; font-family: var(--mono)">· vs. ${niches.find(n => n.k === state.niche).l} median</span></div>
          </div>
          <span class="mono small">APR 22, 2026 · 08:14 PT</span>
        </div>

        <div class="grid cols-4" style="gap: 0; border-left:1px solid var(--rule); border-top:1px solid var(--rule)">
          ${[
            { k: 'MER', v: '3.2×', bench: '4.1×', d: '-0.9', bad: true },
            { k: 'Blended CAC', v: '$62', bench: '$44', d: '+41%', bad: true },
            { k: 'Creative concentration', v: '68%', bench: '<30%', d: 'top 3 ads', bad: true },
            { k: 'Account structure', v: 'C+', bench: 'B+', d: 'fixable', bad: false },
          ].map(s => `
            <div style="padding: 22px; border-right:1px solid var(--rule); border-bottom: 1px solid var(--rule)">
              <div class="mono" style="font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--mid)">${s.k}</div>
              <div style="font-family: var(--serif); font-size: 40px; line-height: 1; margin: 10px 0 8px">${s.v}</div>
              <div style="display:flex; gap:10px; align-items:center; font-size: 12px; color: ${s.bad ? 'oklch(0.55 0.16 25)' : 'oklch(0.55 0.14 145)'}; font-family: var(--mono)">
                <span>${s.bad ? '▼' : '▲'} ${s.d}</span>
                <span style="color:var(--mid)">· median ${s.bench}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="display:grid; grid-template-columns: 1.5fr 1fr; gap: 40px; margin-top: 40px">
          <div>
            <div class="kicker" style="margin-bottom: 16px">Three flags we'd investigate first</div>
            <ol style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap: 14px">
              <li style="border-top: 1px solid var(--rule); padding-top: 14px"><span class="mono" style="color:var(--mid)">F-01 ·</span> <strong>Creative concentration.</strong> Your top three ads do 68% of spend — normal for this vertical is &lt;30%. One fatigue event wipes out a quarter.</li>
              <li style="border-top: 1px solid var(--rule); padding-top: 14px"><span class="mono" style="color:var(--mid)">F-02 ·</span> <strong>Campaign structure.</strong> Seven active sales campaigns, six on broad. Attribution is competing with itself.</li>
              <li style="border-top: 1px solid var(--rule); padding-top: 14px"><span class="mono" style="color:var(--mid)">F-03 ·</span> <strong>Measurement.</strong> No CAPI, no server-side — you're flying on ~62% of the signal you should have.</li>
            </ol>
          </div>
          <aside style="background: var(--bg); border: 1px solid var(--rule); padding: 24px; align-self: start">
            <div class="kicker" style="margin-bottom: 14px">Want the full playbook?</div>
            <p class="body" style="font-size: 14px">The paid audit is a 20-page rewrite of the above — with fixes, a prioritized 90-day plan, and scripts for your team. $1,500, credited back if you sign a retainer.</p>
            <a href="audit.html" class="btn btn-primary" style="margin-top: 16px; width: 100%; justify-content: center">See the paid audit</a>
            <div class="rule" style="margin: 20px 0"></div>
            <div class="kicker" style="margin-bottom: 10px">Email me this report</div>
            <div style="display:flex; gap:0; border: 1px solid var(--rule-2);">
              <input class="input" placeholder="you@brand.com" style="border: none; padding: 10px 12px; font-size: 14px; flex:1" id="r-email">
              <button class="btn btn-primary" style="border-radius: 0; padding: 10px 14px; font-size:13px" id="r-send">Send</button>
            </div>
          </aside>
        </div>
      </div>
    `;
    mount.querySelector('#r-send').addEventListener('click', () => {
      const el = mount.querySelector('#r-email');
      if (!el.value) { el.focus(); return; }
      const btn = mount.querySelector('#r-send');
      btn.textContent = 'Sent ✓';
      btn.disabled = true;
    });
  }

  render();
})();

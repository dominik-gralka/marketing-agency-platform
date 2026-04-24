"use client";

import React, { useState, useEffect } from "react";
import { Kicker } from "./UI";
import Link from "next/link";

type Platform = 'meta' | 'google' | 'tiktok' | 'linkedin';
type SpendRange = '0-40' | '40-100' | '100-350' | '350+';
type Niche = 'supplements' | 'beauty' | 'beverage' | 'apparel' | 'other';

export default function AuditTool() {
  const [step, setStep] = useState(0); // 0 form, 1 analyzing, 2 results
  const [domain, setDomain] = useState('');
  const [spend, setSpend] = useState<SpendRange>('40-100');
  const [platforms, setPlatforms] = useState<Platform[]>(['meta', 'google']);
  const [niche, setNiche] = useState<Niche>('supplements');
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const platformOptions: { k: Platform, l: string }[] = [
    { k: 'meta', l: 'Meta' },
    { k: 'google', l: 'Google' },
    { k: 'tiktok', l: 'TikTok' },
    { k: 'linkedin', l: 'LinkedIn' },
  ];
  const spendOptions: { k: SpendRange, l: string }[] = [
    { k: '0-40', l: '<$40K/mo' },
    { k: '40-100', l: '$40–100K/mo' },
    { k: '100-350', l: '$100–350K/mo' },
    { k: '350+', l: '$350K+/mo' },
  ];
  const nicheOptions: { k: Niche, l: string }[] = [
    { k: 'supplements', l: 'Supplements' },
    { k: 'beauty', l: 'Beauty / skincare' },
    { k: 'beverage', l: 'Beverage' },
    { k: 'apparel', l: 'Apparel' },
    { k: 'other', l: 'Other DTC' },
  ];

  if (step === 1) return <Analyzing domain={domain} onComplete={() => setStep(2)} />;
  if (step === 2) return (
    <Results 
      domain={domain} 
      nicheLabel={nicheOptions.find(n => n.k === niche)?.l || ''} 
      email={email}
      setEmail={setEmail}
      isSent={isSent}
      setIsSent={setIsSent}
    />
  );

  return (
    <div className="grid grid-cols-[1.5fr_1fr] min-h-[520px] max-md:grid-cols-1">
      <div className="p-12 flex flex-col gap-8 max-sm:p-6">
        <div className="flex justify-between items-center">
          <Kicker>Step 1 of 2 · Benchmark inputs</Kicker>
          <span className="font-mono text-mid text-[11px]">EST ~2 MIN</span>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-mid">Your domain</label>
          <input 
            className="bg-transparent border-none border-b border-rule-2 py-3 text-[18px] text-ink outline-none focus:border-ink transition-colors placeholder:text-faint"
            placeholder="brandname.com" 
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-mid">Monthly paid spend</label>
          <div className="flex gap-2 flex-wrap mt-1">
            {spendOptions.map(r => (
              <button 
                key={r.k}
                className={`chip-choice ${spend === r.k ? 'on' : ''}`}
                onClick={() => setSpend(r.k)}
              >
                {r.l}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-mid">Platforms you&apos;re running</label>
          <div className="flex gap-2 flex-wrap mt-1">
            {platformOptions.map(p => (
              <button 
                key={p.k}
                className={`chip-choice ${platforms.includes(p.k) ? 'on' : ''}`}
                onClick={() => {
                   if (platforms.includes(p.k)) setPlatforms(platforms.filter(x => x !== p.k));
                   else setPlatforms([...platforms, p.k]);
                }}
              >
                {p.l}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-mid">Vertical</label>
          <div className="flex gap-2 flex-wrap mt-1">
            {nicheOptions.map(n => (
              <button 
                key={n.k}
                className={`chip-choice ${niche === n.k ? 'on' : ''}`}
                onClick={() => setNiche(n.k)}
              >
                {n.l}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-rule pt-6 mt-auto max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div className="mono small">We&apos;ll ask for email only once the report is ready.</div>
          <button 
            className="btn btn-primary"
            onClick={() => {
              if (domain) setStep(1);
            }}
          >
            Run the benchmark
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/></svg>
          </button>
        </div>
      </div>

      <aside className="bg-bg border-l border-rule p-10 flex flex-col justify-between max-md:border-l-0 max-md:border-t">
        <div>
          <Kicker>What you&apos;ll get</Kicker>
          <ul className="list-none p-0 m-0 mt-6 flex flex-col gap-5">
            {[
              "Blended MER vs. vertical median",
              "CAC headroom estimate (where you could go)",
              "Three specific account-level flags",
              "Creative concentration score"
            ].map((text, i) => (
              <li key={i} className="flex gap-3.5 items-start">
                <span className="mono text-mid">0{i+1}</span>
                <span className="body text-[14px] text-ink-2">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="bg-paper border border-rule h-[120px] flex items-center justify-center grayscale opacity-60">
            <span className="mono text-[10px]">benchmark preview</span>
          </div>
          <div className="mono small mt-3">No sales follow-up. Check the box at the end if you want one.</div>
        </div>
      </aside>
    </div>
  );
}

function Analyzing({ domain, onComplete }: { domain: string, onComplete: () => void }) {
  const steps = [
    { l: 'Fetching domain signals', d: 700 },
    { l: 'Pulling vertical medians', d: 900 },
    { l: 'Estimating creative concentration', d: 900 },
    { l: 'Scoring account structure', d: 900 },
    { l: 'Drafting benchmark report', d: 700 },
  ];

  const [activeStep, setActiveStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    let current = 0;
    const runStep = () => {
      if (current >= steps.length) {
        setTimeout(onComplete, 500);
        return;
      }
      setActiveStep(current);
      setTimeout(() => {
        setCompletedSteps(prev => [...prev, current]);
        current++;
        runStep();
      }, steps[current].d);
    };
    runStep();
  }, []);

  return (
    <div className="p-16 px-12 flex flex-col items-center gap-8 min-h-[520px] justify-center text-center">
      <Kicker>Analyzing</Kicker>
      <div className="display text-[clamp(36px,5vw,72px)] text-center max-w-[20ch]">Benchmarking <em>{domain || 'your account'}</em> against the vertical...</div>
      <ol className="list-none p-0 m-0 w-full max-w-[540px] flex flex-col gap-3">
        {steps.map((s, i) => (
          <li 
            key={i} 
            className={`flex justify-between items-center p-3.5 px-[18px] bg-bg border border-rule transition-opacity duration-300 ${activeStep >= i ? 'opacity-100' : 'opacity-35'}`}
          >
            <span className="mono text-[12px] uppercase tracking-[0.08em]">{String(i+1).padStart(2, '0')} · {s.l}</span>
            <span className={`mono text-[11px] ${completedSteps.includes(i) ? 'text-good' : 'text-mid'}`}>
              {completedSteps.includes(i) ? 'DONE' : activeStep === i ? 'RUNNING...' : 'QUEUED'}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Results({ domain, nicheLabel, email, setEmail, isSent, setIsSent }: any) {
  return (
    <div className="p-10 px-12 max-sm:px-6">
      <div className="flex justify-between items-baseline border-b border-rule pb-5 mb-7 max-sm:flex-col max-sm:gap-4">
        <div>
          <Kicker>Benchmark report</Kicker>
          <div className="font-serif text-[28px] leading-tight mt-2">{domain || 'your-domain.com'} <span className="text-mid text-[18px] font-mono whitespace-nowrap">· vs. {nicheLabel} median</span></div>
        </div>
        <span className="mono small">APR 22, 2026 · 08:14 PT</span>
      </div>

      <div className="grid grid-cols-4 gap-0 border-l border-t border-rule max-md:grid-cols-2 max-sm:grid-cols-1 max-md:border-r">
        {[
          { k: 'MER', v: '3.2×', bench: '4.1×', d: '-0.9', bad: true },
          { k: 'Blended CAC', v: '$62', bench: '$44', d: '+41%', bad: true },
          { k: 'Creative concentration', v: '68%', bench: '<30%', d: 'top 3 ads', bad: true },
          { k: 'Account structure', v: 'C+', bench: 'B+', d: 'fixable', bad: false },
        ].map((s, i) => (
          <div key={i} className="p-5.5 border-r border-b border-rule max-md:border-l">
            <div className="mono text-mid text-[11px] tracking-[0.12em] uppercase">{s.k}</div>
            <div className="font-serif text-[40px] leading-none my-2.5 mb-2">{s.v}</div>
            <div className={`flex gap-2.5 items-center text-[12px] font-mono ${s.bad ? 'text-bad' : 'text-good'}`}>
              <span>{s.bad ? '▼' : '▲'} {s.d}</span>
              <span className="text-mid">· median {s.bench}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1.5fr_1fr] gap-10 mt-10 max-md:grid-cols-1">
        <div>
          <Kicker>Three flags we&apos;d investigate first</Kicker>
          <ol className="list-none p-0 m-0 flex flex-col gap-3.5 mt-4">
            <li className="border-t border-rule pt-3.5"><span className="mono text-mid">F-01 ·</span> <strong>Creative concentration.</strong> Your top three ads do 68% of spend — normal for this vertical is &lt;30%. One fatigue event wipes out a quarter.</li>
            <li className="border-t border-rule pt-3.5"><span className="mono text-mid">F-02 ·</span> <strong>Campaign structure.</strong> Seven active sales campaigns, six on broad. Attribution is competing with itself.</li>
            <li className="border-t border-rule pt-3.5"><span className="mono text-mid">F-03 ·</span> <strong>Measurement.</strong> No CAPI, no server-side — you&apos;re flying on ~62% of the signal you should have.</li>
          </ol>
        </div>
        <aside className="bg-bg border border-rule p-6 self-start">
          <Kicker>Want the full playbook?</Kicker>
          <p className="body text-[14px] mt-3.5">The paid audit is a 20-page rewrite of the above — with fixes, a prioritized 90-day plan, and scripts for your team. $1,500, credited back if you sign a retainer.</p>
          <Link href="/audit" className="btn btn-primary mt-4 w-full justify-center">See the paid audit</Link>
          <div className="h-[1px] bg-rule w-full my-5"></div>
          <Kicker>Email me this report</Kicker>
          <div className="flex gap-0 border border-rule-2 mt-2.5">
            <input 
              className="bg-transparent border-none p-2.5 px-3 text-[14px] flex-1 outline-none"
              placeholder="you@brand.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className="btn btn-primary rounded-none p-2.5 px-3.5 text-[13px] disabled:opacity-50"
              disabled={isSent || !email}
              onClick={() => setIsSent(true)}
            >
              {isSent ? 'Sent ✓' : 'Send'}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

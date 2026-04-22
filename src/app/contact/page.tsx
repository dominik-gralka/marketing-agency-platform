"use client";

import { Shell, Section, Kicker } from "@/components/UI";
import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const [spend, setSpend] = useState('40-100');

  const timeline = [
    ['Day 0', 'You submit the form. We reply within a business day with two scoping-call times.'],
    ['Day 2', '20-minute scoping call. We ask about spend, targets, team, and timeline. No deck.'],
    ['Day 3', 'You receive a one-page scope memo — tier recommendation, retainer range, target CAC.'],
    ['Day 5', 'Either: (a) commission the paid audit, or (b) we send a tier-specific MSA for signature.'],
    ['Day 10', 'Kickoff. Signal architecture starts.'],
  ];

  return (
    <>
      <Section flushTop className="pt-20 pb-10">
        <Shell>
          <div className="grid grid-cols-[1.1fr_1fr] gap-20 max-md:grid-cols-1">
            <div>
              <span className="mono text-mid">§ Contact · the short form</span>
              <h1 className="display mt-6 max-w-[14ch]">A 20-minute scoping call.</h1>
              <p className="lede mt-8 max-w-[52ch]">
                No deck, no sales theater. You tell us your spend, your vertical, and what&apos;s broken.
                We tell you which tier fits, a ballpark retainer, and whether the audit is the right next step.
              </p>
              <div className="h-[1px] bg-rule w-full my-10"></div>
              <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
                <div>
                  <Kicker>Direct</Kicker>
                  <div className="font-serif text-[22px] mt-2.5">hello@northbound.co</div>
                  <div className="mono small mt-1.5">Reply within 1 business day</div>
                </div>
                <div>
                  <Kicker>Press / partnerships</Kicker>
                  <div className="font-serif text-[22px] mt-2.5">press@northbound.co</div>
                  <div className="mono small mt-1.5">Media list on request</div>
                </div>
                <div>
                  <Kicker>Brooklyn</Kicker>
                  <div className="body text-[15px] mt-2.5 leading-relaxed">68 Jay Street, Suite 410<br />Brooklyn, NY 11201</div>
                </div>
                <div>
                  <Kicker>Lisboa</Kicker>
                  <div className="body text-[15px] mt-2.5 leading-relaxed">R. dos Remolares 14<br />1200-370 Lisboa, PT</div>
                </div>
              </div>
            </div>

            <aside className="card p-10 max-sm:p-6">
              {!isSent ? (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setIsSent(true); }}
                  className="flex flex-col gap-7"
                >
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-mid">Your name</label>
                    <input className="input" required placeholder="Full name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-mid">Work email</label>
                    <input className="input" required type="email" placeholder="you@brand.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-mid">Brand / domain</label>
                    <input className="input" placeholder="brandname.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-mid">Monthly paid spend</label>
                    <div className="flex gap-2 flex-wrap mt-1">
                      {['0-40', '40-100', '100-350', '350+'].map(v => (
                        <button 
                          key={v}
                          type="button" 
                          className={`chip-choice ${spend === v ? 'on' : ''}`}
                          onClick={() => setSpend(v)}
                        >
                          {v === '0-40' ? '<$40K' : v === '40-100' ? '$40–100K' : v === '100-350' ? '$100–350K' : '$350K+'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-mid">What&apos;s your biggest paid-media problem right now?</label>
                    <textarea className="textarea" rows={4} placeholder="One paragraph is plenty."></textarea>
                  </div>
                  <div className="flex justify-between items-center pt-5 border-t border-rule max-sm:flex-col max-sm:items-start max-sm:gap-4">
                    <span className="mono small text-mid">20-min call · no deck</span>
                    <button className="btn btn-primary" type="submit">
                      Request a slot
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/></svg>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-10 text-center animate-fade-in">
                  <Kicker><span className="text-good">✓ Received</span></Kicker>
                  <div className="font-serif text-[28px] mt-3 leading-tight">We&apos;ll reply within one business day.</div>
                  <p className="body small mt-3">In the meantime — the <Link href="/audit" className="border-b border-ink text-ink">paid audit</Link> answers most of what we&apos;d cover on the call.</p>
                </div>
              )}
            </aside>
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 02 — What to expect</span>
              <h2 className="h1 max-w-[16ch]">From inquiry to kickoff, in 10 days.</h2>
            </div>
          </div>

          <div className="border-t border-rule">
            {timeline.map((r, i) => (
              <div key={i} className="grid grid-cols-[140px_1fr] gap-8 py-6 border-b border-rule max-sm:grid-cols-1 max-sm:gap-2">
                <div className="mono text-mid text-[12px] tracking-[0.08em] uppercase">{r[0]}</div>
                <div className="body-lg text-[18px]">{r[1]}</div>
              </div>
            ))}
          </div>
        </Shell>
      </Section>
    </>
  );
}

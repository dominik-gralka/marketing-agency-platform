"use client";

import { Shell, Section, Kicker } from "@/components/UI";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

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

  const heroLines = ["A 20-minute", "scoping call."];

  return (
    <>
      <Section flushTop className="pt-24 pb-10">
        <Shell>
          <div className="grid grid-cols-[1.1fr_1fr] gap-20 max-md:grid-cols-1">
            <div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={transition}>
                <span className="mono text-mid">§ Contact · the short form</span>
              </motion.div>

              <h1 className="display mt-6 max-w-[14ch]">
                {heroLines.map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ ...transition, delay: 0.1 + i * 0.1 }}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  </div>
                ))}
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.4 }}
                className="lede mt-8 max-w-[52ch]"
              >
                No deck, no sales theater. You tell us your spend, your vertical, and what&apos;s broken.
                We tell you which tier fits, a ballpark retainer, and whether the audit is the right next step.
              </motion.p>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-[1px] bg-rule w-full my-10 origin-left"
              ></motion.div>

              <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
                {[
                  { k: 'Direct', v: 'hello@dawnfield.co', s: 'Reply within 1 business day' },
                  { k: 'Press / partnerships', v: 'press@dawnfield.co', s: 'Media list on request' },
                  { k: 'Brooklyn', v: <>68 Jay Street, Suite 410<br />Brooklyn, NY 11201</> },
                  { k: 'Lisboa', v: <>R. dos Remolares 14<br />1200-370 Lisboa, PT</> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...transition, delay: 0.7 + i * 0.1 }}
                  >
                    <Kicker>{item.k}</Kicker>
                    <div className="font-serif text-[22px] mt-2.5 leading-tight">{item.v}</div>
                    {item.s && <div className="mono small mt-2 text-mid">{item.s}</div>}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.aside 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: 0.4 }}
              className="card p-10 max-sm:p-6 shadow-sm self-start"
            >
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
                  <div className="flex justify-between items-center pt-6 border-t border-rule max-sm:flex-col max-sm:items-start max-sm:gap-4">
                    <span className="mono small text-mid">20-min call · no deck</span>
                    <button className="btn btn-primary" type="submit">
                      Request a slot
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/></svg>
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={transition}
                  className="py-10 text-center"
                >
                  <Kicker><span className="text-good">✓ Received</span></Kicker>
                  <div className="font-serif text-[28px] mt-4 leading-tight">We&apos;ll reply within one business day.</div>
                  <p className="body small mt-4 text-ink-2 leading-relaxed">In the meantime — the <Link href="/audit" className="border-b border-ink text-ink">paid audit</Link> answers most of what we&apos;d cover on the call.</p>
                </motion.div>
              )}
            </motion.aside>
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <motion.div {...fadeInUp} transition={transition} className="mb-14">
            <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 02 — What to expect</span>
            <h2 className="h1 mt-4 max-w-[16ch]">From inquiry to kickoff, in 10 days.</h2>
          </motion.div>

          <div className="border-t border-rule">
            {timeline.map((r, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="grid grid-cols-[140px_1fr] gap-8 py-7 border-b border-rule max-sm:grid-cols-1 max-sm:gap-2"
              >
                <div className="mono text-mid text-[12px] tracking-[0.08em] uppercase">{r[0]}</div>
                <div className="body-lg text-[18px] text-ink-2">{r[1]}</div>
              </motion.div>
            ))}
          </div>
        </Shell>
      </Section>
    </>
  );
}

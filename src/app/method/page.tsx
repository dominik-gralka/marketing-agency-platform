"use client";

import { Shell, Section, Kicker } from "@/components/UI";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export default function MethodPage() {
  const heroLines = ["Four loops.", "Running", "at once."];

  return (
    <>
      <Section flushTop className="pt-24 pb-10">
        <Shell>
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={transition}>
            <span className="mono text-mid">§ Method · the operating system</span>
          </motion.div>

          <h1 className="display mt-6 max-w-[18ch]">
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
            transition={{ ...transition, delay: 0.5 }}
            className="lede max-w-[52ch] mt-8"
          >
            We don&apos;t run &quot;campaigns.&quot; We run a closed-loop system that moves through four stages every week.
            Below is what each loop actually does, who owns it, and the artifacts it produces.
          </motion.p>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <motion.div {...fadeInUp} transition={transition} className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 01 — System map</span>
              <h2 className="h1 max-w-[18ch]">From signal to scale, in one diagram.</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">Each loop feeds the next. Break any one of them and the rest quietly stop working — which is where most agencies drift.</p></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.2 }}
            className="bg-paper border border-rule p-14 max-md:p-6 overflow-x-auto shadow-sm"
          >
             <div className="min-w-[1000px]">
                <svg viewBox="0 0 1200 480" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                      <path d="M0,0 L10,5 L0,10 z" fill="#171412"/>
                    </marker>
                  </defs>

                  <line x1="300" y1="40" x2="300" y2="440" stroke="#e4ddd0" strokeWidth="1"/>
                  <line x1="600" y1="40" x2="600" y2="440" stroke="#e4ddd0" strokeWidth="1"/>
                  <line x1="900" y1="40" x2="900" y2="440" stroke="#e4ddd0" strokeWidth="1"/>

                  <text x="20" y="40" className="font-mono text-[11px] fill-mid" letterSpacing="1.4">LOOP 01</text>
                  <text x="320" y="40" className="font-mono text-[11px] fill-mid" letterSpacing="1.4">LOOP 02</text>
                  <text x="620" y="40" className="font-mono text-[11px] fill-mid" letterSpacing="1.4">LOOP 03</text>
                  <text x="920" y="40" className="font-mono text-[11px] fill-mid" letterSpacing="1.4">LOOP 04</text>

                  <text x="20" y="72" className="font-serif text-[28px] fill-ink">Signal</text>
                  <text x="20" y="100" className="font-serif text-[28px] fill-ink">architecture</text>
                  <text x="320" y="72" className="font-serif text-[28px] fill-ink">Creative</text>
                  <text x="320" y="100" className="font-serif text-[28px] fill-ink">engine</text>
                  <text x="620" y="72" className="font-serif text-[28px] fill-ink">Optimization</text>
                  <text x="620" y="100" className="font-serif text-[28px] fill-ink">loop</text>
                  <text x="920" y="72" className="font-serif text-[28px] fill-ink">Reporting</text>
                  <text x="920" y="100" className="font-serif text-[28px] fill-ink">&amp; comms</text>

                  <text x="20" y="420" className="font-mono text-[10px] fill-mid" letterSpacing="1.4">ONCE · WEEK 1</text>
                  <text x="320" y="420" className="font-mono text-[10px] fill-mid" letterSpacing="1.4">WEEKLY</text>
                  <text x="620" y="420" className="font-mono text-[10px] fill-mid" letterSpacing="1.4">DAILY</text>
                  <text x="920" y="420" className="font-mono text-[10px] fill-mid" letterSpacing="1.4">CONTINUOUS</text>

                  <g transform="translate(20, 150)">
                    <rect width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="21" className="font-mono text-[11px] fill-ink">CAPI · server-side</text>
                    <rect y="48" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="69" className="font-mono text-[11px] fill-ink">Modeled conversions</text>
                    <rect y="96" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="117" className="font-mono text-[11px] fill-ink">Single CAC source-of-truth</text>
                    <rect y="144" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="165" className="font-mono text-[11px] fill-ink">Platform · GA4 · CRM reconciled</text>
                  </g>

                  <g transform="translate(320, 150)">
                    <rect width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="21" className="font-mono text-[11px] fill-ink">Angle matrix (12 axes)</text>
                    <rect y="48" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="69" className="font-mono text-[11px] fill-ink">8–12 net-new concepts / mo</text>
                    <rect y="96" width="260" height="32" className="fill-ink"/>
                    <text x="16" y="117" className="font-mono text-[11px] fill-bg">Creative approval · portal</text>
                    <rect y="144" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="165" className="font-mono text-[11px] fill-ink">Ship Tues · review Fri</text>
                  </g>

                  <g transform="translate(620, 150)">
                    <rect width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="21" className="font-mono text-[11px] fill-ink">Daily bid/budget review</text>
                    <rect y="48" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="69" className="font-mono text-[11px] fill-ink">Weekly structural changes</text>
                    <rect y="96" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="117" className="font-mono text-[11px] fill-ink">Monthly full account audit</text>
                    <rect y="144" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="165" className="font-mono text-[11px] fill-ink">Quarterly budget re-plan</text>
                  </g>

                  <g transform="translate(920, 150)">
                    <rect width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="21" className="font-mono text-[11px] fill-ink">Live portal · 24/7</text>
                    <rect y="48" width="260" height="32" className="fill-ink"/>
                    <text x="16" y="69" className="font-mono text-[11px] fill-bg">Mon 08:00 AI narrative</text>
                    <rect y="96" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="117" className="font-mono text-[11px] fill-ink">Biweekly exec review</text>
                    <rect y="144" width="260" height="32" fill="none" stroke="#171412" strokeWidth="1"/>
                    <text x="16" y="165" className="font-mono text-[11px] fill-ink">Monthly finance pack</text>
                  </g>

                  <line x1="280" y1="360" x2="316" y2="360" stroke="#171412" strokeWidth="1" markerEnd="url(#arr)"/>
                  <line x1="580" y1="360" x2="616" y2="360" stroke="#171412" strokeWidth="1" markerEnd="url(#arr)"/>
                  <line x1="880" y1="360" x2="916" y2="360" stroke="#171412" strokeWidth="1" markerEnd="url(#arr)"/>

                  <path d="M 1100 380 Q 1180 440 1100 450 Q 600 470 100 450 Q 20 440 100 380" fill="none" stroke="#171412" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arr)"/>
                  <text x="540" y="468" className="font-mono text-[10px] fill-mid" letterSpacing="1.2">FEEDBACK · RESULTS INFORM NEXT CYCLE</text>
                </svg>
             </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mono small mt-4 text-mid">Fig. 01 — Northbound operating system. Every retainer runs this diagram, every week.</motion.div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <motion.div {...fadeInUp} transition={transition} className="mb-14">
            <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 02 — Loops in detail</span>
            <h2 className="h1 mt-4 max-w-[18ch]">Who owns what,<br />and when.</h2>
          </motion.div>

          <div className="flex flex-col border-t border-rule">
            {[
              {
                loop: "01 · Week 1",
                title: "Signal architecture",
                desc: "You cannot optimize what you cannot measure. The first two weeks of every engagement are spent wiring up a measurement stack that reports one CAC, one MER, one contribution-margin number — regardless of which dashboard you're looking at.",
                items: [
                  "Server-side conversion API (Meta / Google / TikTok)",
                  "First-party customer-lookup layer, deduped against the CRM",
                  "Modeled conversions for iOS / opt-out traffic",
                  "Reconciliation with Shopify / NetSuite / your ledger of record"
                ],
                owner: "Signal engineer",
                cadence: "Once, then quarterly audit",
                artifact: "Measurement spec doc"
              },
              {
                loop: "02 · Weekly",
                title: "Creative engine",
                desc: "Creative is 80% of performance. We ship 8–12 net-new concepts a month against a 12-axis angle matrix, then kill losers in week two. No months-long \"hero campaigns.\"",
                items: [
                  "Angle matrix: pain · proof · story · demo · social · founder · comparison · etc.",
                  "In-house studio: UGC brief library, edit templates, motion system",
                  "Approval workspace inside the portal — no Dropbox links",
                  "Test framework: stat-sig thresholds, not vibes"
                ],
                owner: "Creative strategist + studio",
                cadence: "Ship Tues · review Fri",
                artifact: "Monthly concept roadmap"
              },
              {
                loop: "03 · Daily",
                title: "Optimization loop",
                desc: "The boring part. A senior buyer on your account every trading day, with a documented checklist — not \"vibes and intuition.\"",
                items: [
                  "Daily: bids, budgets, pacing, anomaly flags",
                  "Weekly: structural changes, new ad sets, winner consolidation",
                  "Monthly: full account audit against a 43-point rubric",
                  "Quarterly: budget reallocation across platforms"
                ],
                owner: "Senior media buyer",
                cadence: "Daily",
                artifact: "Optimization changelog"
              },
              {
                loop: "04 · Continuous",
                title: "Reporting & comms",
                desc: "The client portal is always on. No status calls required to know what's happening. We over-communicate so you don't have to chase.",
                items: [
                  "Live portal with MER, CAC, contribution margin, pacing",
                  "Monday 08:00 AI-drafted narrative, reviewed by your strategist",
                  "Biweekly 30-minute exec review (video, never a meeting)",
                  "Monthly finance pack for your CFO"
                ],
                owner: "Account strategist",
                cadence: "24/7 portal · weekly narrative",
                artifact: "Every dashboard you need"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="grid grid-cols-[1fr_2fr_1fr] gap-10 py-10 border-b border-rule items-start max-md:grid-cols-1"
              >
                <div>
                  <div className="mono text-mid text-[11px] tracking-[0.12em] uppercase">Loop {item.loop}</div>
                  <h3 className="h2 mt-[14px] leading-tight">{item.title.split(' ').map((w, j) => <React.Fragment key={j}>{w}{j === 0 ? <br/> : ' '}</React.Fragment>)}</h3>
                </div>
                <div>
                  <p className="body-lg mb-5">{item.desc}</p>
                  <ul className="list-none p-0 m-0 flex flex-col gap-[10px] text-[14px]">
                    {item.items.map((li, k) => (
                      <li key={k} className="flex gap-3 text-ink-2"><span className="mono text-mid">→</span>{li}</li>
                    ))}
                  </ul>
                </div>
                <div className="pl-5 border-l border-rule max-md:border-l-0 max-md:pl-0 max-md:pt-5 max-md:border-t">
                  <Kicker>Owner</Kicker>
                  <div className="text-[14px] mb-5">{item.owner}</div>
                  <Kicker>Cadence</Kicker>
                  <div className="text-[14px] mb-5">{item.cadence}</div>
                  <Kicker>Artifact</Kicker>
                  <div className="text-[14px]">{item.artifact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell narrow>
          <motion.div {...fadeInUp} transition={transition}>
            <h2 className="display text-[clamp(40px,5.4vw,80px)] max-w-[18ch]">Seen enough? The audit shows how we&apos;d run this for you.</h2>
            <div className="flex gap-[14px] mt-10 flex-wrap">
              <Link className="btn btn-primary" href="/audit">See the paid audit</Link>
              <Link className="btn btn-ghost" href="/pricing">See pricing</Link>
            </div>
          </motion.div>
        </Shell>
      </Section>
    </>
  );
}

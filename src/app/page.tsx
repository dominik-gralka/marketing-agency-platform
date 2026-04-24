"use client";

import { Shell, Section, Kicker, Tag } from "@/components/UI";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";
import AuditTool from "@/components/AuditTool";

// Elegant shared transition
const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <Section flushTop className="pt-24 pb-[100px]">
        <Shell>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="max-w-[620px]">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={transition}
                className="flex items-center gap-[14px] mb-8"
              >
                <Tag dot>Booking Q3 2026</Tag>
                <span className="mono text-mid">§ 01 — Overview</span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1 
                  className="display"
                  variants={staggerContainer}
                  initial="initial"
                  animate="whileInView"
                >
                  {["Your CAC is", "not a mystery.", "It's a math problem."].map((line, i) => (
                    <div key={i} className="overflow-hidden">
                      <motion.span
                        custom={i}
                        variants={{
                          initial: { y: "100%" },
                          whileInView: { y: 0 }
                        }}
                        transition={{ ...transition, delay: i * 0.1 + 0.2 }}
                        className="block"
                      >
                        {line.includes("problem") ? (
                           <><em>It's a math problem.</em></>
                        ) : line}
                      </motion.span>
                    </div>
                  ))}
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.6 }}
                className="lede mt-8"
              >
                A vertical paid-media partner for high-growth DTC teams doing $2M–$50M.
                Fixed scopes, transparent pricing, and a written guarantee that your first ads
                are live in 14 days — or we refund setup.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.7 }}
                className="flex gap-[14px] mt-10 flex-wrap"
              >
                <Link className="btn btn-primary px-8 group" href="/audit">
                  Start the free audit
                  <motion.svg 
                    whileHover={{ x: 4 }}
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                  >
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                  </motion.svg>
                </Link>
                <Link className="btn btn-ghost" href="/method">See the method</Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.9 }}
                className="mt-12 pt-10 border-t border-rule flex gap-12 flex-wrap"
              >
                <div>
                  <div className="mono text-mid text-[11px] tracking-[0.12em] uppercase">First ads live</div>
                  <div className="font-serif text-[28px] mt-1">14 days<span className="text-mid font-mono text-[12px] ml-2 tracking-normal">or setup refunded</span></div>
                </div>
                <div>
                  <div className="mono text-mid text-[11px] tracking-[0.12em] uppercase">Target CAC</div>
                  <div className="font-serif text-[28px] mt-1">60 days<span className="text-mid font-mono text-[12px] ml-2 tracking-normal">or month three free</span></div>
                </div>
              </motion.div>
            </div>

            {/* Right column: metric card */}
            <motion.aside 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...transition, delay: 0.5 }}
              className="relative py-10"
            >
              <div className="absolute inset-0 bg-paper/50 blur-[100px] rounded-full -z-10 scale-110"></div>
              
              <div className="card p-8 font-mono relative bg-paper/80 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-[10px]">
                    <motion.span 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-2.5 h-2.5 rounded-full bg-good shadow-[0_0_0_4px_color-mix(in_oklab,var(--good)_20%,transparent)]"
                    ></motion.span>
                    <span className="text-[11px] tracking-[0.14em] uppercase text-mid">Client portal · live</span>
                  </div>
                  <span className="text-[11px] text-mid">APR 22, 08:14</span>
                </div>

                <div className="font-serif text-[64px] leading-none tracking-[-0.03em]">-4.82×</div>
                <div className="text-[13px] text-mid mt-2">MER · trailing 28 days · <span className="text-good">▲ 0.91</span> vs. prior period</div>

                <div className="grid grid-cols-8 gap-[4px] my-8 h-[80px] items-end">
                  {[28, 42, 35, 48, 58, 66, 82, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 1.2 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
                      className={`${i < 4 ? 'bg-rule-2' : i < 6 ? 'bg-mid' : 'bg-ink'} rounded-t-[1px]`}
                    ></motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-rule pt-6">
                  {[
                    { l: 'Spend', v: '$148,203' },
                    { l: 'Revenue', v: '$714,338' },
                    { l: 'New-cust CAC', v: '$37.40' },
                    { l: 'Contribution', v: '41.2%' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-[10px] text-mid tracking-[0.12em] uppercase">{stat.l}</div>
                      <div className="text-[20px] mt-1">{stat.v}</div>
                    </div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="mt-8 p-5 bg-bg border border-dashed border-rule-2 font-sans text-[13px] text-ink-2 leading-[1.6]"
                >
                  <Kicker>AI narrative · Mon 08:14</Kicker><br />
                  <span className="font-serif text-[16px] leading-[1.4] text-ink block mt-1">
                    Weekend Meta spend scaled 22% on the &quot;founder-story&quot; angle; CAC held at $37.
                    We&apos;re pausing three fatiguing creatives and shipping four new iterations by Thursday.
                  </span>
                </motion.div>
              </div>
              <div className="absolute top-7 -left-3 font-mono text-[10px] tracking-[0.14em] uppercase text-mid bg-bg px-2 py-0.5 border border-rule-2 shadow-sm">Client view · redacted</div>
            </motion.aside>
          </div>
        </Shell>
      </Section>

      {/* ============ Logo marquee ============ */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="marquee border-y border-rule py-[18px] overflow-hidden bg-paper/30"
      >
        <div className="marquee-inner flex gap-[60px] whitespace-nowrap animate-marquee font-mono text-[12px] tracking-[0.1em] uppercase text-mid">
          <span>— Trusted by 47 growth-stage DTC brands</span>
          <span>· Vertical: supplements · beverage · skincare · premium apparel ·</span>
          <span>— Managing $38M in trailing-twelve-month media spend</span>
          <span>· Avg. client retainer 22 months ·</span>
          <span>— Trusted by 47 growth-stage DTC brands</span>
          <span>· Vertical: supplements · beverage · skincare · premium apparel ·</span>
          <span>— Managing $38M in trailing-twelve-month media spend</span>
          <span>· Avg. client retainer 22 months ·</span>
        </div>
      </motion.div>

      {/* ============ Who this is for ============ */}
      <Section>
        <Shell>
          <motion.div 
            {...fadeInUp}
            transition={transition}
            className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 02 — Who this is for</span>
              <h2 className="h1 max-w-[18ch]">We don&apos;t take every client. We take <em>one kind.</em></h2>
            </div>
            <div className="max-w-[40ch]">
              <p className="body-lg text-[18px] text-ink-2 leading-[1.55]">We&apos;ve spent the last six years inside a single vertical. That&apos;s a limitation. It&apos;s also the entire point.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-0 border-t border-rule max-md:grid-cols-1 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.2 }}
              className="p-10 pl-0 border-r border-rule max-md:border-r-0 max-md:pb-5"
            >
              <Kicker>We fit if you&apos;re...</Kicker>
              <ul className="list-none p-0 m-0 flex flex-col gap-[18px] mt-6">
                {[
                  { n: '01', t: 'Doing $2M–$50M in top-line, growing 40%+ YoY' },
                  { n: '02', t: 'DTC consumer goods or prosumer subscription' },
                  { n: '03', t: 'Spending $40K+/mo on paid and ready to scale the line item' },
                  { n: '04', t: 'Willing to be measured on CAC, MER, and contribution margin' }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex gap-[18px] items-baseline group"
                  >
                    <span className="mono text-mid group-hover:text-ink transition-colors">{item.n}</span>
                    <span className="body-lg">{item.t}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.3 }}
              className="p-10 pr-0"
            >
              <Kicker>We&apos;re wrong for you if...</Kicker>
              <ul className="list-none p-0 m-0 flex flex-col gap-[18px] mt-6 text-mid">
                {[
                  'You need brand strategy, SEO, or lifecycle email',
                  'You measure success by "impressions" or "reach"',
                  'You\'re pre-product-market-fit',
                  'Your CFO won\'t share contribution margin with us'
                ].map((text, i) => (
                  <li key={i} className="flex gap-[18px] items-baseline">
                    <span className="mono">—</span>
                    <span className="body-lg text-mid">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Shell>
      </Section>

      {/* ============ Guarantees ============ */}
      <Section>
        <Shell>
          <motion.div 
            {...fadeInUp}
            transition={transition}
            className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 03 — Risk reversal</span>
              <h2 className="h1 max-w-[16ch]">Two guarantees,<br />written into the MSA.</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">Most agencies sell hours and report on platform metrics. We sell outcomes, and we put money behind that sentence.</p></div>
          </motion.div>

          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
            {[
              { 
                k: 'Guarantee 01', 
                id: 'G-01 / Launch', 
                t: 'First ads live in 14 days — or setup is refunded.',
                d: 'From signed MSA to live spend, we close the gap in ten business days. If we miss, your $8,000 setup fee goes back the same hour — no email chain required.',
                p: 'Zero misses in 2024 · 2 of 41 in 2025'
              },
              { 
                k: 'Guarantee 02', 
                id: 'G-02 / CAC', 
                t: 'Hit your agreed CAC in 60 days — or month three is free.',
                d: 'We write the target CAC into your contract before we spend a dollar. Miss it in the first 60 days and we waive month three\'s retainer, without a renegotiation.',
                p: 'Invoked 4 times in 31 engagements · all renewed'
              }
            ].map((g, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.15 }}
                className="card p-10 hover:border-ink transition-all hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
              >
                <div className="flex justify-between items-baseline mb-7">
                  <Kicker>{g.k}</Kicker>
                  <span className="mono text-mid">{g.id}</span>
                </div>
                <h3 className="h2 max-w-[14ch]">{g.t.split('14 days').map((p, j) => j === 0 ? <React.Fragment key={j}>{p}<em>14 days</em></React.Fragment> : p)}</h3>
                <p className="body mt-5 max-w-[44ch] text-ink-2">{g.d}</p>
                <div className="mt-8 flex gap-2 items-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/></svg>
                  <span className="mono text-[12px]">{g.p}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Shell>
      </Section>

      {/* ============ Proof numbers ============ */}
      <Section>
        <Shell>
          <motion.div 
            {...fadeInUp}
            transition={transition}
            className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 04 — Evidence</span>
              <h2 className="h1 max-w-[20ch]">Specific numbers, from the vertical.</h2>
            </div>
            <div className="max-w-[40ch]">
              <p className="body-lg">The only metrics that matter are the ones your CFO signs off on. Here are four of them, from live engagements this quarter.</p>
              <Link href="#" className="inline-block mt-4 border-b border-ink text-ink hover:text-mid hover:border-mid transition-colors text-[16px]">Read the case studies →</Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-4 gap-10 max-md:grid-cols-1">
            {[
              { v: '-38', s: '%', d: 'Blended CAC reduction, premium skincare brand, 90 days' },
              { v: '4.7', s: '×', d: 'MER sustained over 6 months at $340K/mo spend, ready-to-drink beverage' },
              { v: '+212', s: '%', d: 'New-customer revenue YoY, supplement subscription' },
              { v: '22', s: 'mo', d: 'Median client retainer length — industry average is 7 months' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="flex flex-col gap-[10px] py-7 border-t border-rule"
              >
                <div className="font-serif text-[64px] leading-none tracking-[-0.02em]">{stat.v}<span className="font-mono text-[14px] text-mid tracking-[0.05em] ml-1 align-top pt-[10px] inline-block">{stat.s}</span></div>
                <div className="text-[13px] text-mid max-w-[24ch]">{stat.d}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] bg-rule w-full mt-8 origin-left"
          ></motion.div>
          <p className="mono mt-4 text-mid text-[11px]">
            Source: Dawnfield internal engagement data, Q1–Q3 2025. Methodology available on request.
          </p>
        </Shell>
      </Section>

      {/* ============ Free audit tool ============ */}
      <Section id="audit-inline">
        <Shell>
          <motion.div 
            {...fadeInUp}
            transition={transition}
            className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 05 — Free audit</span>
              <h2 className="h1 max-w-[16ch]">Free <em>benchmark</em> on your ad accounts. Two minutes.</h2>
            </div>
            <div className="max-w-[40ch]">
              <p className="body-lg">
                Drop your domain and ad platforms. We&apos;ll return a one-screen benchmark against vertical medians — no email wall until the report is ready.
              </p>
              <p className="mono mt-4 text-mid text-[12px]">
                Different from the $1,500 paid audit — that&apos;s a 20-page playbook. <Link href="/audit" className="border-b border-ink text-ink">See both →</Link>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="card p-0 overflow-hidden min-h-[400px] shadow-sm"
          >
            <AuditTool />
          </motion.div>
        </Shell>
      </Section>

      {/* ============ Methodology preview ============ */}
      <Section>
        <Shell>
          <motion.div 
            {...fadeInUp}
            transition={transition}
            className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 06 — Methodology</span>
              <h2 className="h1 max-w-[18ch]">Four loops, running at once.</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">This is not a &quot;strategy framework.&quot; It&apos;s the system we run on every account, every week. The full breakdown lives on the <Link href="/method" className="border-b border-ink">Method page</Link>.</p></div>
          </motion.div>

          <div className="grid grid-cols-4 gap-0 border-t border-rule border-l border-rule max-md:grid-cols-1 max-md:border-l-0">
            {[
              { title: "Signal architecture", desc: "Server-side tracking, CAPI, modeled conversions, and a single source of truth for CAC." },
              { title: "Creative engine", desc: "12+ net-new concepts a month, tested against an angle matrix, shipped weekly." },
              { title: "Optimization loop", desc: "Daily bid/budget review, weekly structural changes, monthly account audits." },
              { title: "Reporting", desc: "A live portal, an AI-drafted weekly narrative, and a monthly exec review." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="p-7 border-r border-rule border-b border-rule hover:bg-paper transition-colors"
              >
                <div className="mono text-mid text-[11px] tracking-[0.12em] uppercase">Loop 0{i+1}</div>
                <h3 className="font-serif text-[28px] leading-[1.15] tracking-[-0.01em] my-[14px] mt-3">{item.title}</h3>
                <p className="body text-[14px] leading-[1.6] text-ink-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Shell>
      </Section>

      {/* ============ Three tiers preview ============ */}
      <Section>
        <Shell>
          <motion.div 
            {...fadeInUp}
            transition={transition}
            className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 07 — Pricing</span>
              <h2 className="h1 max-w-[18ch]">Three tiers. Fixed scopes. No surprises.</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">Every scope is written into the MSA. Anything outside it is a formal change order — never a &quot;quick ask&quot; that quietly eats your hours.</p></div>
          </motion.div>

          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
            {[
              { 
                t: 'Launch', 
                id: 'T-01', 
                d: 'For brands spending $40K–$100K/mo. Two platforms, four creative concepts, weekly optimization.',
                items: ['Meta + Google', '4 concepts / mo', 'Weekly narrative']
              },
              { 
                t: 'Growth', 
                id: 'T-02', 
                d: '$100K–$350K/mo. Three platforms, 8+ concepts, sr. strategist, biweekly exec review.',
                items: ['Meta + Google + one of {TikTok, LinkedIn}', '8–12 concepts / mo', 'Dedicated strategist', 'Biweekly exec review'],
                best: true
              },
              { 
                t: 'Scale', 
                id: 'T-03', 
                d: '$350K+/mo. Four platforms, unlimited concept volume, embedded team, daily standups.',
                items: ['All four platforms', 'Unlimited concepts', 'Embedded pod', 'Daily standup']
              }
            ].map((tier, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className={`card p-8 flex flex-col gap-[14px] relative ${tier.best ? 'border-ink shadow-sm' : ''}`}
              >
                {tier.best && <span className="tag dot absolute -top-3 left-6">Most-picked</span>}
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-[22px] leading-[1.15]">{tier.t}</span>
                  <span className="mono text-mid">{tier.id}</span>
                </div>
                <p className="body text-[14px] text-mid">{tier.d}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2 font-mono text-[12px] border-t border-rule pt-4 mt-2">
                  {tier.items.map((li, j) => <li key={j}>{li}</li>)}
                </ul>
                <Link href="/pricing" className="inline-block mt-4 border-b border-ink text-ink self-start hover:text-mid hover:border-mid transition-colors">Book a call →</Link>
              </motion.div>
            ))}
          </div>
          <motion.div 
            {...fadeInUp}
            transition={{ ...transition, delay: 0.4 }}
            className="mt-6 mono text-[11px] text-mid"
          >
            Pricing revealed on the call — we&apos;d rather size the scope to your numbers than sell you a plan.
          </motion.div>
        </Shell>
      </Section>

      {/* ============ Testimonial ============ */}
      <Section>
        <Shell narrow>
          <motion.div
            {...fadeInUp}
            transition={transition}
          >
            <span className="num kicker">§ 08 — From a client</span>
            <blockquote className="m-0 mt-7 p-0 font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.1] tracking-[-0.015em]">
              &ldquo;They know our vertical better than we do. In month two they caught a creative angle
              we&apos;d written off <em>eighteen months</em> ago, shipped it in a week, and it&apos;s been our
              best-performing ad set since.&rdquo;
            </blockquote>
            <div className="flex justify-between items-center mt-10 border-t border-rule pt-5">
              <div>
                <div className="text-[14px]">Maren Holloway</div>
                <div className="mono text-[11px] text-mid">VP Growth · Tidewater Supplements · $18M DTC</div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-14 h-14 rounded-full bg-paper border border-rule overflow-hidden flex items-center justify-center grayscale"
              >
                <div className="w-full h-full bg-gradient-to-br from-paper to-bg"></div>
              </motion.div>
            </div>
          </motion.div>
        </Shell>
      </Section>

      {/* ============ Final CTA ============ */}
      <Section className="pb-10">
        <Shell narrow>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <span className="num kicker">§ 09 — Next step</span>
            <h2 className="display mt-6 text-[clamp(48px,6.4vw,96px)]">
              Two ways<br />
              to start.
            </h2>
            <div className="grid grid-cols-2 gap-0 border-t border-rule mt-14 max-md:grid-cols-1">
              <div className="p-10 pl-0 border-r border-rule max-md:border-r-0 max-md:pb-5">
                <Kicker>Option A · Free</Kicker>
                <h3 className="h2 mt-3 mb-4">The benchmark tool</h3>
                <p className="body mb-7 max-w-[40ch] text-ink-2">2 minutes. One-screen report comparing your accounts to vertical medians. No sales call attached.</p>
                <Link className="btn btn-ghost" href="#audit-inline">Run the benchmark</Link>
              </div>
              <div className="p-10 pr-0">
                <Kicker>Option B · $1,500</Kicker>
                <h3 className="h2 mt-3 mb-4">The paid audit</h3>
                <p className="body mb-7 max-w-[40ch] text-ink-2">20-page playbook of what&apos;s broken and how to fix it. Credited back in full against your first retainer.</p>
                <Link className="btn btn-primary" href="/audit">See the paid audit</Link>
              </div>
            </div>
          </motion.div>
        </Shell>
      </Section>
    </>
  );
}

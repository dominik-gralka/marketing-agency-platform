import { Shell, Section, Kicker, Tag } from "@/components/UI";
import Link from "next/link";

import AuditTool from "@/components/AuditTool";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <Section flushTop className="pt-20 pb-[60px]">
        <Shell>
          <div className="grid grid-cols-[1.25fr_1fr] gap-20 items-end max-md:grid-cols-1">
            <div>
              <div className="flex items-center gap-[14px] mb-8">
                <Tag dot>Booking Q3 2026</Tag>
                <span className="mono text-mid">§ 01 — Overview</span>
              </div>

              <h1 className="display">
                We run paid ads<br />
                for one kind<br />
                of business.<br />
                <em>Yours, if we take it.</em>
              </h1>

              <p className="lede max-w-[52ch] mt-9">
                A vertical paid-media partner for high-growth DTC teams doing $2M–$50M.
                Fixed scopes, transparent pricing, and a written guarantee that your first ads
                are live in 14 days — or we refund setup.
              </p>

              <div className="flex gap-[14px] mt-10 flex-wrap">
                <Link className="btn btn-primary" href="/audit">
                  Start the free audit
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/></svg>
                </Link>
                <Link className="btn btn-ghost" href="/method">See the method</Link>
              </div>

              <div className="mt-14 flex gap-10 flex-wrap">
                <div>
                  <div className="mono text-mid text-[11px] tracking-[0.12em] uppercase">First ads live</div>
                  <div className="font-serif text-[32px] mt-[6px]">14 days<span className="text-mid font-mono text-[13px] ml-[6px]">or setup refunded</span></div>
                </div>
                <div>
                  <div className="mono text-mid text-[11px] tracking-[0.12em] uppercase">Target CAC</div>
                  <div className="font-serif text-[32px] mt-[6px]">60 days<span className="text-mid font-mono text-[13px] ml-[6px]">or month three free</span></div>
                </div>
              </div>
            </div>

            {/* Right column: metric card */}
            <aside className="relative self-stretch">
              <div className="card p-6 font-mono">
                <div className="flex justify-between items-center mb-[18px]">
                  <div className="flex items-center gap-[10px]">
                    <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.14_145)] shadow-[0_0_0_3px_color-mix(in_oklab,oklch(0.65_0.14_145)_25%,transparent)]"></span>
                    <span className="text-[11px] tracking-[0.14em] uppercase text-mid">Client portal · live</span>
                  </div>
                  <span className="text-[11px] text-mid">APR 22, 08:14</span>
                </div>

                <div className="font-serif text-[52px] leading-none tracking-[-0.02em]">4.82×</div>
                <div className="text-[12px] text-mid mt-[6px]">MER · trailing 28 days · <span className="text-[oklch(0.55_0.14_145)]">▲ 0.91</span> vs. prior period</div>

                <div className="grid grid-cols-8 gap-[3px] my-6 h-[72px] items-end">
                  <div className="bg-rule-2 h-[28%]"></div>
                  <div className="bg-rule-2 h-[42%]"></div>
                  <div className="bg-rule-2 h-[35%]"></div>
                  <div className="bg-rule-2 h-[48%]"></div>
                  <div className="bg-mid h-[58%]"></div>
                  <div className="bg-mid h-[66%]"></div>
                  <div className="bg-ink h-[82%]"></div>
                  <div className="bg-ink h-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-rule pt-4">
                  <div>
                    <div className="text-[10px] text-mid tracking-[0.12em] uppercase">Spend</div>
                    <div className="text-[18px] mt-1">$148,203</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-mid tracking-[0.12em] uppercase">Revenue</div>
                    <div className="text-[18px] mt-1">$714,338</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-mid tracking-[0.12em] uppercase">New-cust CAC</div>
                    <div className="text-[18px] mt-1">$37.40</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-mid tracking-[0.12em] uppercase">Contribution</div>
                    <div className="text-[18px] mt-1">41.2%</div>
                  </div>
                </div>

                <div className="mt-[18px] p-[14px] bg-bg border border-dashed border-rule-2 font-sans text-[13px] text-ink-2 leading-[1.5]">
                  <Kicker>AI narrative · Mon 08:14</Kicker><br />
                  <span className="font-serif text-[15px] leading-[1.4] text-ink">
                    Weekend Meta spend scaled 22% on the &quot;founder-story&quot; angle; CAC held at $37.
                    We&apos;re pausing three fatiguing creatives at 10am and shipping four new iterations by Thursday.
                  </span>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 font-mono text-[10px] tracking-[0.14em] uppercase text-mid bg-bg px-2 py-0.5">Client view · redacted</div>
            </aside>
          </div>
        </Shell>
      </Section>

      {/* ============ Logo marquee ============ */}
      <div className="marquee border-y border-rule py-[18px] overflow-hidden">
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
      </div>

      {/* ============ Who this is for ============ */}
      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 02 — Who this is for</span>
              <h2 className="h1 max-w-[18ch]">We don&apos;t take every client. We take <em>one kind.</em></h2>
            </div>
            <div className="max-w-[40ch]">
              <p className="body-lg text-[18px] text-ink-2 leading-[1.55]">We&apos;ve spent the last six years inside a single vertical. That&apos;s a limitation. It&apos;s also the entire point.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0 border-t border-rule max-md:grid-cols-1">
            <div className="p-10 pl-0 border-r border-rule max-md:border-r-0 max-md:pb-5">
              <Kicker>We fit if you&apos;re...</Kicker>
              <ul className="list-none p-0 m-0 flex flex-col gap-[18px] mt-6">
                <li className="flex gap-[18px] items-baseline"><span className="mono text-mid">01</span><span className="body-lg">Doing $2M–$50M in top-line, growing 40%+ YoY</span></li>
                <li className="flex gap-[18px] items-baseline"><span className="mono text-mid">02</span><span className="body-lg">DTC consumer goods or prosumer subscription</span></li>
                <li className="flex gap-[18px] items-baseline"><span className="mono text-mid">03</span><span className="body-lg">Spending $40K+/mo on paid and ready to scale the line item</span></li>
                <li className="flex gap-[18px] items-baseline"><span className="mono text-mid">04</span><span className="body-lg">Willing to be measured on CAC, MER, and contribution margin</span></li>
              </ul>
            </div>
            <div className="p-10 pr-0">
              <Kicker>We&apos;re wrong for you if...</Kicker>
              <ul className="list-none p-0 m-0 flex flex-col gap-[18px] mt-6 text-mid">
                <li className="flex gap-[18px] items-baseline"><span className="mono">—</span><span className="body-lg text-mid">You need brand strategy, SEO, or lifecycle email</span></li>
                <li className="flex gap-[18px] items-baseline"><span className="mono">—</span><span className="body-lg text-mid">You measure success by &quot;impressions&quot; or &quot;reach&quot;</span></li>
                <li className="flex gap-[18px] items-baseline"><span className="mono">—</span><span className="body-lg text-mid">You&apos;re pre-product-market-fit</span></li>
                <li className="flex gap-[18px] items-baseline"><span className="mono">—</span><span className="body-lg text-mid">Your CFO won&apos;t share contribution margin with us</span></li>
              </ul>
            </div>
          </div>
        </Shell>
      </Section>

      {/* ============ Guarantees ============ */}
      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 03 — Risk reversal</span>
              <h2 className="h1 max-w-[16ch]">Two guarantees,<br />written into the MSA.</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">Most agencies sell hours and report on platform metrics. We sell outcomes, and we put money behind that sentence.</p></div>
          </div>

          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
            <div className="card p-10">
              <div className="flex justify-between items-baseline mb-7">
                <Kicker>Guarantee 01</Kicker>
                <span className="mono text-mid">G-01 / Launch</span>
              </div>
              <h3 className="h2 max-w-[14ch]">First ads live in <em>14 days</em> — or setup is refunded.</h3>
              <p className="body mt-5 max-w-[44ch]">From signed MSA to live spend, we close the gap in ten business days. If we miss, your $8,000 setup fee goes back the same hour — no email chain required.</p>
              <div className="mt-8 flex gap-2 items-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/></svg>
                <span className="mono text-[12px]">Zero misses in 2024 · 2 of 41 in 2025</span>
              </div>
            </div>

            <div className="card p-10">
              <div className="flex justify-between items-baseline mb-7">
                <Kicker>Guarantee 02</Kicker>
                <span className="mono text-mid">G-02 / CAC</span>
              </div>
              <h3 className="h2 max-w-[14ch]">Hit your agreed CAC in <em>60 days</em> — or month three is free.</h3>
              <p className="body mt-5 max-w-[44ch]">We write the target CAC into your contract before we spend a dollar. Miss it in the first 60 days and we waive month three&apos;s retainer, without a renegotiation.</p>
              <div className="mt-8 flex gap-2 items-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/></svg>
                <span className="mono text-[12px]">Invoked 4 times in 31 engagements · all renewed</span>
              </div>
            </div>
          </div>
        </Shell>
      </Section>

      {/* ============ Proof numbers ============ */}
      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 04 — Evidence</span>
              <h2 className="h1 max-w-[20ch]">Specific numbers, from the vertical.</h2>
            </div>
            <div className="max-w-[40ch]">
              <p className="body-lg">The only metrics that matter are the ones your CFO signs off on. Here are four of them, from live engagements this quarter.</p>
              <Link href="#" className="inline-block mt-4 border-b border-ink text-ink hover:text-mid hover:border-mid transition-colors text-[16px]">Read the case studies →</Link>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10 max-md:grid-cols-1">
            <div className="flex flex-col gap-[10px] py-7 border-t border-rule">
              <div className="font-serif text-[64px] leading-none tracking-[-0.02em]">-38<span className="font-mono text-[14px] text-mid tracking-[0.05em] ml-1 align-top pt-[10px] inline-block">%</span></div>
              <div className="text-[13px] text-mid max-w-[24ch]">Blended CAC reduction, premium skincare brand, 90 days</div>
            </div>
            <div className="flex flex-col gap-[10px] py-7 border-t border-rule">
              <div className="font-serif text-[64px] leading-none tracking-[-0.02em]">4.7<span className="font-mono text-[14px] text-mid tracking-[0.05em] ml-1 align-top pt-[10px] inline-block">×</span></div>
              <div className="text-[13px] text-mid max-w-[24ch]">MER sustained over 6 months at $340K/mo spend, ready-to-drink beverage</div>
            </div>
            <div className="flex flex-col gap-[10px] py-7 border-t border-rule">
              <div className="font-serif text-[64px] leading-none tracking-[-0.02em]">+212<span className="font-mono text-[14px] text-mid tracking-[0.05em] ml-1 align-top pt-[10px] inline-block">%</span></div>
              <div className="text-[13px] text-mid max-w-[24ch]">New-customer revenue YoY, supplement subscription</div>
            </div>
            <div className="flex flex-col gap-[10px] py-7 border-t border-rule">
              <div className="font-serif text-[64px] leading-none tracking-[-0.02em]">22<span className="font-mono text-[14px] text-mid tracking-[0.05em] ml-1 align-top pt-[10px] inline-block">mo</span></div>
              <div className="text-[13px] text-mid max-w-[24ch]">Median client retainer length — industry average is 7 months</div>
            </div>
          </div>

          <div className="h-[1px] bg-rule w-full mt-8"></div>
          <p className="mono mt-4 text-mid text-[11px]">
            Source: Northbound internal engagement data, Q1–Q3 2025. Methodology available on request.
          </p>
        </Shell>
      </Section>

      {/* ============ Free audit tool placeholder ============ */}
      <Section id="audit-inline">
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
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
          </div>

          <div id="audit-tool" className="card p-0 overflow-hidden min-h-[400px]">
            <AuditTool />
          </div>
        </Shell>
      </Section>

      {/* ============ Methodology preview ============ */}
      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 06 — Methodology</span>
              <h2 className="h1 max-w-[18ch]">Four loops, running at once.</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">This is not a &quot;strategy framework.&quot; It&apos;s the system we run on every account, every week. The full breakdown lives on the <Link href="/method" className="border-b border-ink">Method page</Link>.</p></div>
          </div>

          <div className="grid grid-cols-4 gap-0 border-t border-rule border-l border-rule max-md:grid-cols-1 max-md:border-l-0">
            {[
              { title: "Signal architecture", desc: "Server-side tracking, CAPI, modeled conversions, and a single source of truth for CAC." },
              { title: "Creative engine", desc: "12+ net-new concepts a month, tested against an angle matrix, shipped weekly." },
              { title: "Optimization loop", desc: "Daily bid/budget review, weekly structural changes, monthly account audits." },
              { title: "Reporting", desc: "A live portal, an AI-drafted weekly narrative, and a monthly exec review." }
            ].map((item, i) => (
              <div key={i} className="p-7 border-r border-rule border-b border-rule">
                <div className="mono text-mid text-[11px] tracking-[0.12em] uppercase">Loop 0{i+1}</div>
                <h3 className="font-serif text-[28px] leading-[1.15] tracking-[-0.01em] my-[14px] mt-3">{item.title}</h3>
                <p className="body text-[14px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </Shell>
      </Section>

      {/* ============ Three tiers preview ============ */}
      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 07 — Pricing</span>
              <h2 className="h1 max-w-[18ch]">Three tiers. Fixed scopes. No surprises.</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">Every scope is written into the MSA. Anything outside it is a formal change order — never a &quot;quick ask&quot; that quietly eats your hours.</p></div>
          </div>

          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
            <div className="card p-8 flex flex-col gap-[14px]">
              <div className="flex justify-between items-baseline">
                <span className="font-serif text-[22px] leading-[1.15]">Launch</span>
                <span className="mono text-mid">T-01</span>
              </div>
              <p className="body text-[14px] text-mid">For brands spending $40K–$100K/mo. Two platforms, four creative concepts, weekly optimization.</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2 font-mono text-[12px] border-t border-rule pt-4 mt-2">
                <li>Meta + Google</li>
                <li>4 concepts / mo</li>
                <li>Weekly narrative</li>
              </ul>
              <Link href="/pricing" className="inline-block mt-4 border-b border-ink text-ink self-start">Book a call →</Link>
            </div>
            <div className="card p-8 flex flex-col gap-[14px] border-ink relative">
              <span className="tag dot absolute -top-3 left-6">Most-picked</span>
              <div className="flex justify-between items-baseline">
                <span className="font-serif text-[22px] leading-[1.15]">Growth</span>
                <span className="mono text-mid">T-02</span>
              </div>
              <p className="body text-[14px] text-mid">$100K–$350K/mo. Three platforms, 8+ concepts, sr. strategist, biweekly exec review.</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2 font-mono text-[12px] border-t border-rule pt-4 mt-2">
                <li>Meta + Google + one of {'{TikTok, LinkedIn}'}</li>
                <li>8–12 concepts / mo</li>
                <li>Dedicated strategist</li>
                <li>Biweekly exec review</li>
              </ul>
              <Link href="/pricing" className="inline-block mt-4 border-b border-ink text-ink self-start">Book a call →</Link>
            </div>
            <div className="card p-8 flex flex-col gap-[14px]">
              <div className="flex justify-between items-baseline">
                <span className="font-serif text-[22px] leading-[1.15]">Scale</span>
                <span className="mono text-mid">T-03</span>
              </div>
              <p className="body text-[14px] text-mid">$350K+/mo. Four platforms, unlimited concept volume, embedded team, daily standups.</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2 font-mono text-[12px] border-t border-rule pt-4 mt-2">
                <li>All four platforms</li>
                <li>Unlimited concepts</li>
                <li>Embedded pod</li>
                <li>Daily standup</li>
              </ul>
              <Link href="/pricing" className="inline-block mt-4 border-b border-ink text-ink self-start">Book a call →</Link>
            </div>
          </div>
          <div className="mt-6 mono text-[11px] text-mid">Pricing revealed on the call — we&apos;d rather size the scope to your numbers than sell you a plan.</div>
        </Shell>
      </Section>

      {/* ============ Testimonial ============ */}
      <Section>
        <Shell narrow>
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
            <div className="w-14 h-14 rounded-full bg-paper border border-rule"></div>
          </div>
        </Shell>
      </Section>

      {/* ============ Final CTA ============ */}
      <Section className="pb-10">
        <Shell narrow>
          <span className="num kicker">§ 09 — Next step</span>
          <h2 className="display mt-6 text-[clamp(48px,6.4vw,96px)]">
            Two ways<br />
            to start.
          </h2>
          <div className="grid grid-cols-2 gap-0 border-t border-rule mt-14 max-md:grid-cols-1">
            <div className="p-10 pl-0 border-r border-rule max-md:border-r-0 max-md:pb-5">
              <Kicker>Option A · Free</Kicker>
              <h3 className="h2 mt-3 mb-4">The benchmark tool</h3>
              <p className="body mb-7 max-w-[40ch]">2 minutes. One-screen report comparing your accounts to vertical medians. No sales call attached.</p>
              <Link className="btn btn-ghost" href="#audit-inline">Run the benchmark</Link>
            </div>
            <div className="p-10 pr-0">
              <Kicker>Option B · $1,500</Kicker>
              <h3 className="h2 mt-3 mb-4">The paid audit</h3>
              <p className="body mb-7 max-w-[40ch]">20-page playbook of what&apos;s broken and how to fix it. Credited back in full against your first retainer.</p>
              <Link className="btn btn-primary" href="/audit">See the paid audit</Link>
            </div>
          </div>
        </Shell>
      </Section>
    </>
  );
}

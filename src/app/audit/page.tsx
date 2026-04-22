import { Shell, Section, Kicker } from "@/components/UI";
import Link from "next/link";

export const metadata = {
  title: "Audit — Northbound",
};

export default function AuditPage() {
  const toc = [
    { n: "01 · Executive summary", p: "p.02" },
    { n: "02 · Measurement stack audit", p: "p.04" },
    { n: "03 · Account structure audit", p: "p.07" },
    { n: "04 · Creative audit · angle map", p: "p.10" },
    { n: "05 · CAC headroom model", p: "p.13" },
    { n: "06 · Prioritized fix list (P0–P3)", p: "p.15" },
    { n: "07 · 90-day plan · sequenced", p: "p.17" },
    { n: "08 · Scripts for your team", p: "p.19" },
  ];

  return (
    <>
      <Section flushTop className="pt-20 pb-10">
        <Shell>
          <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-end max-md:grid-cols-1">
            <div>
              <span className="mono text-mid">§ Audit · strategy product</span>
              <h1 className="display mt-6 max-w-[14ch]">A $1,500 audit, not a sales call.</h1>
              <p className="lede max-w-[52ch] mt-8">
                Two weeks. 20 pages. Exactly what&apos;s broken in your ad account, what we&apos;d do about it,
                and the first 90 days of work — priced and sequenced. Credited back in full if you sign a retainer.
              </p>
              <div className="flex gap-[14px] mt-10 flex-wrap">
                <Link className="btn btn-primary" href="#buy">Commission the audit — $1,500</Link>
                <Link className="btn btn-ghost" href="/#audit-inline">Or run the free benchmark</Link>
              </div>
            </div>
            <aside className="card p-7 font-mono text-[12px]">
              <div className="kicker mb-3.5">Table of contents · sample</div>
              <ol className="list-none p-0 m-0 flex flex-col gap-2.5">
                {toc.map((item, i) => (
                  <li key={i} className={`flex justify-between ${i < toc.length - 1 ? 'border-b border-dashed border-rule-2 pb-2' : ''}`}>
                    <span>{item.n}</span>
                    <span className="text-mid">{item.p}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 01 — Free vs paid</span>
              <h2 className="h1 max-w-[22ch]">Why we charge for this (and why it converts better).</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">Free audits are lead magnets. This is a strategy product. Clients who pay $1,500 take the work seriously, and we can afford to put 30 hours of senior time into it.</p></div>
          </div>

          <div className="grid grid-cols-2 gap-0 border-t border-rule max-md:grid-cols-1">
            <div className="p-10 pl-0 border-r border-rule max-md:border-r-0 max-md:pb-5">
              <Kicker>Free benchmark (homepage)</Kicker>
              <ul className="list-none p-0 m-0 flex flex-col gap-3.5 mt-4">
                <li className="body-lg text-[18px]">2-minute form</li>
                <li className="body-lg text-[18px]">One-screen benchmark vs. vertical medians</li>
                <li className="body-lg text-[18px]">Three flags to investigate</li>
                <li className="body-lg text-[18px]">Automated · no human review</li>
              </ul>
            </div>
            <div className="p-10 pr-0 max-md:pt-5">
              <Kicker>$1,500 paid audit</Kicker>
              <ul className="list-none p-0 m-0 flex flex-col gap-3.5 mt-4">
                <li className="body-lg text-[18px]">Two weeks · two senior strategists</li>
                <li className="body-lg text-[18px]">20-page written playbook</li>
                <li className="body-lg text-[18px]">CAC headroom model built against your P&amp;L</li>
                <li className="body-lg text-[18px]">90-day plan you can run yourself, with or without us</li>
                <li className="body-lg text-[18px]">90-minute readout call + recording</li>
                <li className="body-lg text-[18px]">Credited back in full if you sign a retainer</li>
              </ul>
            </div>
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 02 — What happens</span>
              <h2 className="h1 max-w-[18ch]">Two weeks, four checkpoints.</h2>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-0 border-t border-rule border-l border-rule max-md:grid-cols-1 max-md:border-l-0">
            {[
              { time: "Day 0 · kickoff", title: "Access + kickoff", desc: "45-min call. You grant read-only access to Meta, Google, GA4, Shopify. We send a one-page scope doc." },
              { time: "Days 1–5 · dig", title: "Account deep-dive", desc: "Two strategists review 24 months of data, every live ad, your creative library, and your measurement stack." },
              { time: "Days 6–10 · write", title: "Playbook drafted", desc: "20 pages. Every recommendation sourced to a screenshot or number. Reviewed by a second strategist." },
              { time: "Day 14 · readout", title: "90-minute readout", desc: "You + your team, on video. Recorded. We answer every question. The PDF is yours either way." }
            ].map((item, i) => (
              <div key={i} className="p-8 border-r border-rule border-b border-rule">
                <div className="mono text-mid text-[11px] tracking-[0.12em] uppercase">{item.time}</div>
                <h3 className="font-serif text-[28px] leading-tight my-[14px] mt-3">{item.title}</h3>
                <p className="body text-[14px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 03 — Sample pages</span>
              <h2 className="h1 max-w-[18ch]">What a page looks like.</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">Every page of the playbook looks like this: one clear diagnosis, the supporting data, the fix, and a time estimate.</p></div>
          </div>

          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
            <div className="card p-8">
              <div className="flex justify-between items-baseline mb-5">
                <span className="mono text-mid text-[11px] tracking-[0.12em] uppercase">PAGE 11 · Creative</span>
                <span className="mono text-mid text-[11px]">P-0</span>
              </div>
              <h3 className="h2 text-[28px] leading-tight mb-3">Your creative library is 68% concentrated in three ads.</h3>
              <p className="body text-[14px]">In the last 60 days, three ads did $91,400 of your $134,200 spend. The next-best ten ads did $28,600 combined. You have no bench.</p>
              <div className="bg-paper border border-rule h-[120px] my-4.5 flex items-center justify-center grayscale opacity-60">
                <span className="mono text-[10px]">concentration chart · top ads vs. long tail</span>
              </div>
              <div className="border-t border-rule pt-3.5">
                <Kicker>The fix</Kicker>
                <p className="body text-[14px] mt-2">Ship 8 net-new concepts against the angle matrix on page 10. Kill losers at 72 hours. Target: top-ad share under 30% by day 30.</p>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex justify-between items-baseline mb-5">
                <span className="mono text-mid text-[11px] tracking-[0.12em] uppercase">PAGE 13 · Modeling</span>
                <span className="mono text-mid text-[11px]">P-0</span>
              </div>
              <h3 className="h2 text-[28px] leading-tight mb-3">CAC headroom: $18 per new customer.</h3>
              <p className="body text-[14px]">Against a 68% GM and 2.1× year-one LTV, your sustainable CAC is $62 — you&apos;re at $44 today. You could absorb a $34M/yr spend profile.</p>
              <div className="bg-paper border border-rule h-[120px] my-4.5 flex items-center justify-center grayscale opacity-60">
                <span className="mono text-[10px]">CAC headroom waterfall</span>
              </div>
              <div className="border-t border-rule pt-3.5">
                <Kicker>The fix</Kicker>
                <p className="body text-[14px] mt-2">Raise your allowable CAC to $58 for 60 days. Budget headroom modeled on page 16. Expected MER impact: 3.8× → 3.4×, worth it.</p>
              </div>
            </div>
          </div>
        </Shell>
      </Section>

      <Section id="buy">
        <Shell>
          <div className="card p-14 bg-ink text-bg border-ink max-md:p-8">
            <div className="grid grid-cols-[1.5fr_1fr] gap-14 items-center max-md:grid-cols-1">
              <div>
                <span className="kicker text-bg/60">§ 04 — Commission</span>
                <h2 className="h1 mt-4 text-bg">Commission a playbook for your account.</h2>
                <p className="lede mt-5 text-bg/75 max-w-[48ch]">
                  $1,500. Two weeks. Fully credited back if you sign a retainer within 60 days.
                  We take on three audits per month and then we close the list.
                </p>
                <div className="flex gap-[14px] mt-8 flex-wrap">
                  <Link className="btn bg-bg text-ink" href="/contact">Reserve a slot</Link>
                  <Link className="btn border border-bg/50 text-bg" href="#faq">See FAQ</Link>
                </div>
              </div>
              <div>
                <div className="font-serif text-[88px] leading-none tracking-[-0.02em] max-md:text-[64px]">$1,500</div>
                <div className="mono text-bg/60 text-[12px] mt-3">
                  USD · paid in advance · fully credited against retainer
                </div>
                <div className="mt-5 pt-5 border-t border-bg/25">
                  <div className="kicker text-bg/60 mb-2">Slots · May 2026</div>
                  <div className="flex gap-2 font-mono text-[13px]">
                    <span className="px-2.5 py-1 border border-bg/40 line-through opacity-50">TAKEN</span>
                    <span className="px-2.5 py-1 border border-bg/40 line-through opacity-50">TAKEN</span>
                    <span className="px-2.5 py-1 bg-hot text-ink">1 OPEN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </Section>
    </>
  );
}

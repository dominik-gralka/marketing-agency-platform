"use client";

import { Shell, Section, Kicker } from "@/components/UI";
import Link from "next/link";
import React, { useState } from "react";

export default function PricingPage() {
  const tiers = [
    {
      name: "Launch",
      tier: "T-01",
      desc: "Founder-led brands ready to professionalize paid. You're spending something, but it's messy.",
      fit: "$40K – $100K\nmonthly media spend",
      scope: [
        "Meta + Google",
        "4 new creative concepts / mo",
        "Signal architecture (one-time)",
        "Weekly AI narrative",
        "Monthly exec review",
        "Live portal"
      ],
      min: "3-month minimum · Both guarantees apply",
      dark: false
    },
    {
      name: "Growth",
      tier: "T-02",
      desc: "The operational middle. Your spend is real, your team is small, and you need a partner who thinks ahead.",
      fit: "$100K – $350K\nmonthly media spend",
      scope: [
        "Meta + Google + one of {TikTok, LinkedIn}",
        "8–12 new concepts / mo",
        "Full signal architecture + modeled conversions",
        "Dedicated senior strategist",
        "Weekly narrative + biweekly exec review",
        "Monthly CFO finance pack"
      ],
      min: "6-month minimum · Both guarantees apply",
      dark: true,
      tag: "Most-picked"
    },
    {
      name: "Scale",
      tier: "T-03",
      desc: "You've hit the ceiling of one platform and need an embedded pod that runs four at once without dropping margin.",
      fit: "$350K+\nmonthly media spend",
      scope: [
        "All four platforms",
        "Unlimited concept volume",
        "Embedded 4-person pod",
        "Daily 15-min standup w/ your team",
        "Signal engineer on retainer",
        "Quarterly in-person strategy day"
      ],
      min: "12-month minimum · Custom guarantees",
      dark: false
    }
  ];

  const tableRows = [
    ['Platforms', '2', '3', '4'],
    ['New creative concepts / mo', '4', '8–12', 'Unlimited'],
    ['Signal architecture', 'Core', 'Full', 'Full + engineer'],
    ['Senior strategist', 'Shared', 'Dedicated', 'Dedicated + pod'],
    ['Exec review cadence', 'Monthly', 'Biweekly', 'Biweekly + QBR'],
    ['CFO finance pack', '—', '✓', '✓'],
    ['Daily standup with your team', '—', '—', '✓'],
    ['In-person strategy day', '—', '—', 'Quarterly'],
    ['Minimum term', '3 months', '6 months', '12 months'],
    ['14-day launch guarantee', '✓', '✓', '✓'],
    ['60-day CAC guarantee', '✓', '✓', 'Custom'],
  ];

  const faqs = [
    ['Why won\'t you publish exact prices?', 'Because the right retainer depends on your spend, platform mix, and guarantee structure. Every scope we write is transparent to you, in the MSA — we just don\'t want to sell you a plan that doesn\'t fit.'],
    ['What if we\'re between tiers?', 'We\'ll size you at the lower tier and write a written "growth trigger" into the MSA — usually, once monthly spend crosses a specific threshold for 60 days, the retainer rolls up.'],
    ['Do you charge a percentage of ad spend?', 'No. Our retainer is flat, so our incentive is your CAC and MER, not your spend.'],
    ['What happens after the minimum term?', 'Month-to-month, cancel any time with 30 days notice. Median engagement is 22 months — we don\'t need to lock you in.'],
    ['Can we start with just the audit?', 'Yes — that\'s how 60% of our retainers start. See the paid audit page.'],
    ['Who actually works on my account?', 'A named strategist, senior buyer, and creative lead — listed in the MSA. Never an anonymous pod.'],
  ];

  return (
    <>
      <Section flushTop className="pt-20 pb-10">
        <Shell>
          <span className="mono text-mid">§ Pricing · productized stack</span>
          <h1 className="display mt-6 max-w-[18ch]">Three tiers.<br />Fixed scopes.<br /><em>No surprises.</em></h1>
          <p className="lede max-w-[54ch] mt-8">
            We price on scope, not on hours. Every deliverable is in the MSA.
            Anything outside it is a formal change order — never an invoice surprise.
          </p>
          <div className="mono small mt-5 text-mid max-w-[60ch]">Exact numbers are shared on a 20-min scoping call — we&apos;d rather size the retainer to your spend than sell you a plan.</div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="grid grid-cols-3 gap-0 border-t border-rule border-l border-rule max-md:grid-cols-1 max-md:border-l-0">
            {tiers.map((tier, i) => (
              <div 
                key={i} 
                className={`p-10 border-r border-rule border-b border-rule flex flex-col relative ${tier.dark ? 'bg-ink text-bg' : 'bg-paper text-ink'}`}
              >
                {tier.tag && (
                   <span className="absolute -top-[1px] left-10 bg-hot text-ink px-[10px] py-1 font-mono text-[11px] tracking-[0.12em] uppercase">{tier.tag}</span>
                )}
                <div className="flex justify-between items-baseline">
                  <span className="h2">{tier.name}</span>
                  <span className={`mono ${tier.dark ? 'text-bg/60' : 'text-mid'}`}>{tier.tier}</span>
                </div>
                <p className={`body mt-4 ${tier.dark ? 'text-bg/80' : ''}`}>{tier.desc}</p>
                
                <div className={`mt-7 pt-4 border-t ${tier.dark ? 'border-bg/25' : 'border-rule'}`}>
                  <Kicker><span className={tier.dark ? 'text-bg/60' : ''}>Fit</span></Kicker>
                  <div className={`text-[13px] font-mono leading-[1.8] whitespace-pre-line mt-2`}>
                    {tier.fit}
                  </div>
                </div>

                <div className={`mt-7 pt-4 border-t ${tier.dark ? 'border-bg/25' : 'border-rule'} flex-1`}>
                  <Kicker><span className={tier.dark ? 'text-bg/60' : ''}>In-scope</span></Kicker>
                  <ul className="list-none p-0 m-0 flex flex-col gap-[10px] text-[14px] mt-3">
                    {tier.scope.map((item, j) => (
                      <li key={j} className="flex gap-2.5">
                        <span className={`mono ${tier.dark ? 'text-bg/50' : 'text-mid'}`}>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`mt-8 pt-5 border-t ${tier.dark ? 'border-bg/25' : 'border-rule'}`}>
                  <Kicker><span className={tier.dark ? 'text-bg/60' : ''}>Pricing</span></Kicker>
                  <div className="font-serif text-[32px] leading-none mt-2">Shared on call</div>
                  <div className={`mono small mt-2 ${tier.dark ? 'text-bg/60' : ''}`}>{tier.min}</div>
                </div>

                <Link 
                  href="/contact" 
                  className={`btn mt-5 justify-center ${tier.dark ? 'bg-bg text-ink hover:bg-white' : 'btn-ghost'}`}
                >
                  Book a scoping call
                </Link>
              </div>
            ))}
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 02 — At a glance</span>
              <h2 className="h1 max-w-[16ch]">What&apos;s in each tier.</h2>
            </div>
          </div>

          <div className="border-t border-rule overflow-x-auto">
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="font-mono text-[11px] tracking-[0.12em] uppercase text-mid text-left">
                  <th className="p-5 px-3 font-medium border-b border-rule w-[32%]">Scope item</th>
                  <th className="p-5 px-3 font-medium border-b border-rule">Launch</th>
                  <th className="p-5 px-3 font-medium border-b border-rule bg-ink/5">Growth</th>
                  <th className="p-5 px-3 font-medium border-b border-rule">Scale</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i}>
                    <td className="p-[18px] px-3 border-b border-rule w-[32%]">{row[0]}</td>
                    <td className="p-[18px] px-3 border-b border-rule font-mono text-[13px]">{row[1]}</td>
                    <td className="p-[18px] px-3 border-b border-rule font-mono text-[13px] bg-ink/5">{row[2]}</td>
                    <td className="p-[18px] px-3 border-b border-rule font-mono text-[13px]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 03 — Guarantees</span>
              <h2 className="h1 max-w-[18ch]">Written into every MSA.</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
            <div className="card p-10">
              <Kicker>G-01 · Launch</Kicker>
              <h3 className="h2 mt-4">First ads live in 14 days — or setup is refunded.</h3>
              <p className="body mt-4">From signed MSA to first live ad impression, ten business days. Miss, and your setup fee is returned the same hour.</p>
            </div>
            <div className="card p-10">
              <Kicker>G-02 · CAC</Kicker>
              <h3 className="h2 mt-4">Hit your agreed CAC in 60 days — or month three is free.</h3>
              <p className="body mt-4">We write a target CAC into the contract before first spend. Miss in 60 days and month three is waived.</p>
            </div>
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="flex items-baseline justify-between gap-10 mb-14">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 04 — FAQ</span>
              <h2 className="h1">Things you might ask.</h2>
            </div>
          </div>
          <div className="border-t border-rule">
            {faqs.map((faq, i) => (
               <FAQItem key={i} index={i+1} question={faq[0]} answer={faq[1]} />
            ))}
          </div>
        </Shell>
      </Section>
    </>
  );
}

function FAQItem({ index, question, answer }: { index: number, question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-rule">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left font-inherit text-[18px] text-ink bg-transparent border-none cursor-pointer"
      >
        <span className="flex gap-5 items-baseline">
          <span className="mono text-mid text-[12px]">{String(index).padStart(2, '0')}</span>
          <span>{question}</span>
        </span>
        <span className="mono text-mid text-[20px] leading-none">{isOpen ? '−' : '+'}</span>
      </button>
      <div 
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out`}
        style={{ maxHeight: isOpen ? '200px' : '0' }}
      >
        <div className="pb-6 pl-12 max-w-[64ch] body">{answer}</div>
      </div>
    </div>
  );
}

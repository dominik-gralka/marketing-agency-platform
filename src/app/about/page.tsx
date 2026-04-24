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

export default function AboutPage() {
  const team = [
    { n: 'Ines Albuquerque', r: 'Founder · Strategy' },
    { n: 'Theo Hollander', r: 'Head of Buying' },
    { n: 'Mara Yusuf', r: 'Creative Director' },
    { n: 'Jules Baptiste', r: 'Signal Engineering' },
  ];

  const heroLines = ["A small shop,", "built to outlast", "the client."];

  return (
    <>
      <Section flushTop className="pt-24 pb-10">
        <Shell>
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={transition}>
            <span className="mono text-mid">§ About · the house</span>
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
            className="lede max-w-[54ch] mt-8"
          >
            Dawnfield is 14 people in Brooklyn and Lisbon. We run paid media for one
            vertical — founder-led DTC brands — and we&apos;ve been doing it long enough
            to know when an idea is clever and when it&apos;s just new.
          </motion.p>
        </Shell>
      </Section>

      {/* Principles */}
      <Section>
        <Shell>
          <motion.div {...fadeInUp} transition={transition} className="mb-14">
            <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 01 — How we work</span>
            <h2 className="h1 mt-4 max-w-[18ch]">Four principles, written down.</h2>
          </motion.div>

          <div className="flex flex-col border-t border-rule">
            {[
              { 
                num: "01", 
                title: "Narrow is a superpower.", 
                desc: "We only take DTC consumer brands between $2M and $50M. That's a limitation. It's why we already know your vertical's benchmarks, your creative patterns, your attribution quirks — and can tell you the answer in week one, not month four." 
              },
              { 
                num: "02", 
                title: "Outcomes, not activity.", 
                desc: "We report MER, CAC, and contribution margin. Your CFO understands those three numbers. \"Impressions\" is not a unit of success — it's a unit of spend." 
              },
              { 
                num: "03", 
                title: "Radical transparency.", 
                desc: "You see the same dashboard we do. Every ad we run, every dollar we spend, every change we make — logged and visible in real time. If something went sideways yesterday, you already know about it." 
              },
              { 
                num: "04", 
                title: "Over-serve, never chase.", 
                desc: "If you ever feel like you need to check in to know what's happening, we have failed. Mondays at 8am, you wake up to a narrative in your inbox. Nothing to chase." 
              }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="grid grid-cols-[1fr_3fr] gap-10 py-9 border-b border-rule max-md:grid-cols-1"
              >
                <div className="mono text-mid text-[12px] tracking-[0.12em] uppercase">Principle {p.num}</div>
                <div>
                  <h3 className="font-serif text-[36px] leading-[1.05] mb-[14px]">{p.title}</h3>
                  <p className="body-lg max-w-[64ch] text-ink-2">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Shell>
      </Section>

      {/* Team */}
      <Section>
        <Shell>
          <motion.div {...fadeInUp} transition={transition} className="flex items-baseline justify-between gap-10 mb-14 max-md:flex-col">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 02 — The people</span>
              <h2 className="h1 max-w-[16ch]">Named, not anonymous.</h2>
            </div>
            <div className="max-w-[40ch]"><p className="body-lg">Every engagement has a named strategist, senior buyer, and creative lead in the MSA. You call them directly.</p></div>
          </motion.div>

          <div className="grid grid-cols-4 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
            {team.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={transition}
                  className="aspect-[3/4] bg-paper border border-rule relative overflow-hidden flex items-center justify-center grayscale group"
                >
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 10px, var(--rule-2) 10px 11px)' }}></div>
                  <span className="mono small text-mid bg-paper px-2 py-1 border border-rule relative z-10 group-hover:text-ink transition-colors">portrait</span>
                </motion.div>
                <div className="mt-4">
                  <div className="font-serif text-[22px] leading-[1.2]">{p.n}</div>
                  <div className="mono small mt-1 text-mid">{p.r}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Shell>
      </Section>

      {/* Numbers */}
      <Section>
        <Shell>
          <motion.div {...fadeInUp} transition={transition} className="mb-14">
            <span className="font-mono text-[12px] tracking-[0.15em] text-mid">§ 03 — The firm in numbers</span>
          </motion.div>
          <div className="grid grid-cols-4 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
            {[
              { val: "14", label: "People on the team" },
              { val: "47", label: "Active client engagements" },
              { val: "$38M", label: "TTM media under management" },
              { val: "22mo", label: "Median retainer length" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="flex flex-col gap-[10px] py-7 border-t border-rule"
              >
                <div className="font-serif text-[64px] leading-none tracking-[-0.02em]">
                  {stat.val.replace(/[Mmo]/g, '')}
                  {stat.val.match(/[Mmo]/) && <span className="font-mono text-[14px] text-mid tracking-[0.05em] ml-1 align-top pt-[10px] inline-block">{stat.val.match(/[Mmo]+/)?.[0]}</span>}
                </div>
                <div className="text-[13px] text-mid max-w-[24ch]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell narrow>
          <motion.div {...fadeInUp} transition={transition} className="text-center md:text-left">
            <h2 className="display text-[clamp(40px,5.4vw,80px)] max-w-[20ch]">Start with an audit. Decide from there.</h2>
            <div className="flex gap-[14px] mt-10 flex-wrap justify-center md:justify-start">
              <Link className="btn btn-primary" href="/audit">Commission the audit</Link>
              <Link className="btn btn-ghost" href="/contact">Send a note</Link>
            </div>
          </motion.div>
        </Shell>
      </Section>
    </>
  );
}

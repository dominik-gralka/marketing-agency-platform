import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer border-t border-rule py-20 pb-10 mt-20">
      <div className="shell max-w-[1400px] mx-auto px-10">
        <div className="footer-grid grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 max-md:grid-cols-2">
          <div className="footer-col">
            <div className="brand flex items-center gap-[10px] font-serif text-[22px] tracking-[-0.01em] mb-4">
              <span className="brand-mark w-[22px] h-[22px] rounded-full bg-ink relative after:content-[''] after:absolute after:inset-[4px] after:rounded-full after:bg-bg before:content-[''] before:absolute before:left-1/2 before:top-[2px] before:bottom-[2px] before:w-[1px] before:bg-ink before:translate-x-[-0.5px]" aria-hidden="true"></span>
              <span>Northbound</span>
            </div>
            <p className="body max-w-[36ch] text-mid text-[14px]">
              A vertical paid-media partner for high-growth DTC and B2B teams. We sell outcomes, not hours.
            </p>
            <div className="mt-5 flex gap-[10px] flex-wrap">
              <span className="tag inline-flex items-center gap-2 px-[10px] py-[6px] font-mono text-[11px] tracking-[0.1em] uppercase text-ink-2 bg-paper border border-rule rounded-[2px]">Meta</span>
              <span className="tag inline-flex items-center gap-2 px-[10px] py-[6px] font-mono text-[11px] tracking-[0.1em] uppercase text-ink-2 bg-paper border border-rule rounded-[2px]">Google</span>
              <span className="tag inline-flex items-center gap-2 px-[10px] py-[6px] font-mono text-[11px] tracking-[0.1em] uppercase text-ink-2 bg-paper border border-rule rounded-[2px]">TikTok</span>
              <span className="tag inline-flex items-center gap-2 px-[10px] py-[6px] font-mono text-[11px] tracking-[0.1em] uppercase text-ink-2 bg-paper border border-rule rounded-[2px]">LinkedIn</span>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-mid font-medium mb-5">Services</h4>
            <ul className="flex flex-col gap-[10px]">
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="/pricing">Launch</Link></li>
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="/pricing">Growth</Link></li>
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="/pricing">Scale</Link></li>
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="/audit">Paid audit</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-mid font-medium mb-5">Company</h4>
            <ul className="flex flex-col gap-[10px]">
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="/about">About</Link></li>
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="/method">Method</Link></li>
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="#">Case studies</Link></li>
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="#">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-mid font-medium mb-5">Contact</h4>
            <ul className="flex flex-col gap-[10px]">
              <li><a className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="mailto:hello@northbound.co">hello@northbound.co</a></li>
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="/contact">Book a call</Link></li>
              <li><Link className="text-[14px] text-ink-2 hover:text-ink hover:underline hover:underline-offset-[3px]" href="#">Press</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-base mt-[60px] pt-6 border-t border-rule flex justify-between text-[12px] text-mid">
          <span>© 2026 Northbound Growth, Inc. All rights reserved.</span>
          <span className="mono">NB · 0426 · v4.2</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav sticky top-0 z-50 bg-[color-mix(in_oklab,var(--bg)_92%,transparent)] backdrop-blur-[10px] border-b border-rule">
      <div className="nav-inner flex items-center justify-between h-[68px] max-w-[1400px] mx-auto px-10">
        <Link className="brand flex items-center gap-[10px] font-serif text-[22px] tracking-[-0.01em]" href="/">
          <span className="brand-mark w-[22px] h-[22px] rounded-full bg-ink relative after:content-[''] after:absolute after:inset-[4px] after:rounded-full after:bg-bg before:content-[''] before:absolute before:left-1/2 before:top-[2px] before:bottom-[2px] before:w-[1px] before:bg-ink before:translate-x-[-0.5px]" aria-hidden="true"></span>
          <span>Northbound</span>
        </Link>
        <div className="nav-links flex gap-8 items-center max-md:hidden">
          <Link href="/method" className="text-[14px] text-ink-2 py-[6px] relative hover:text-ink">Method</Link>
          <Link href="/pricing" className="text-[14px] text-ink-2 py-[6px] relative hover:text-ink">Pricing</Link>
          <Link href="/audit" className="text-[14px] text-ink-2 py-[6px] relative hover:text-ink">Audit</Link>
          <Link href="/about" className="text-[14px] text-ink-2 py-[6px] relative hover:text-ink">About</Link>
          <Link href="/contact" className="text-[14px] text-ink-2 py-[6px] relative hover:text-ink">Contact</Link>
        </div>
        <Link className="nav-cta inline-flex items-center gap-2 text-[14px] px-4 py-[10px] border border-ink text-ink bg-transparent rounded-[2px] transition-colors hover:bg-ink hover:text-bg" href="/audit">
          Start free audit
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/></svg>
        </Link>
      </div>
    </nav>
  );
}

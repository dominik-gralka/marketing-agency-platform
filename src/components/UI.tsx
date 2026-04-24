import React from "react";

export function Shell({ children, narrow = false }: { children: React.ReactNode, narrow?: boolean }) {
  return (
    <div className={`${narrow ? 'max-w-[1040px]' : 'max-w-[1400px]'} mx-auto px-10 max-sm:px-6`}>
      {children}
    </div>
  );
}

export function Section({ children, flushTop = false, id, className = "" }: { children: React.ReactNode, flushTop?: boolean, id?: string, className?: string }) {
  return (
    <section 
      id={id}
      className={`py-[120px] border-t border-rule ${flushTop ? 'border-t-0' : ''} ${className}`}
    >
      {children}
    </section>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="kicker">{children}</span>;
}

export function Tag({ children, dot = false }: { children: React.ReactNode, dot?: boolean }) {
  return (
    <span className={`tag ${dot ? 'dot' : ''}`}>
      {children}
    </span>
  );
}

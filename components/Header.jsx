'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Doctors', href: '/#doctors' },
  // { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#enquiry' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_4px_16px_-4px_rgba(15,61,62,0.18)]' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-display text-lg font-semibold">
          <img
            src="/kareport-navbar-logo.png"
            alt="KarePort logo"
            className="h-14 w-17 rounded-full"
          />
          KarePort
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-[#2A362D] hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#enquiry"
            className="hidden rounded-sm bg-teal px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-paper hover:bg-teal-2 sm:inline-block"
          >
            Enquiry
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-ink/15 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-2.5 font-mono text-xs uppercase tracking-wide text-[#2A362D] hover:bg-paper-2 hover:text-teal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#enquiry"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm bg-teal px-5 py-2.5 text-center font-display text-sm font-semibold tracking-wide text-paper hover:bg-teal-2 sm:hidden"
          >
            Enquiry
          </a>
        </nav>
      )}
    </header>
  );
}

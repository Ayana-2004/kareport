export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-display text-lg font-semibold">
          <img
            src="/kareport-navbar-logo.png"
            alt="KarePort logo"
            className="h-14 w-17 rounded-full"
          />
          KarePort
        </div>
        <a
          href="#enquiry"
          className="rounded-sm bg-teal px-5 py-2.5 font-mono text-xs tracking-wide text-paper hover:bg-teal-2"
        >
          Start your enquiry
        </a>
      </div>
    </header>
  );
}

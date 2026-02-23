export function Navbar() {
  return (
    <header className="border-b border-slate-900/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-lg font-bold text-white shadow-soft">
            P
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-slate-50">
              PrimeHomes
            </p>
            <p className="text-[11px] text-slate-400">Realty &amp; Rentals</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
          <button className="transition hover:text-white">Buy</button>
          <button className="transition hover:text-white">Rent</button>
          <button className="transition hover:text-white">Sell</button>
          <button className="transition hover:text-white">Agents</button>
        </nav>
        <div className="flex items-center gap-3 text-xs">
          <button className="hidden rounded-full border border-slate-700/80 px-3 py-1.5 font-medium text-slate-200 shadow-sm transition hover:border-brand-400/80 hover:text-white sm:inline-flex">
            Log in
          </button>
          <button className="inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-1.5 text-xs font-semibold text-white shadow-soft transition hover:bg-brand-400">
            List a property
          </button>
        </div>
      </div>
    </header>
  );
}


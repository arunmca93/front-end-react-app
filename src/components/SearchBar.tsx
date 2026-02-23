export function SearchBar() {
  return (
    <div className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-3 shadow-soft backdrop-blur">
      <div className="grid gap-3 sm:grid-cols-[2fr,1.3fr,1.3fr,auto] sm:items-center">
        <div className="space-y-1">
          <label className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Location
          </label>
          <input
            type="text"
            placeholder="City, neighborhood, or ZIP"
            className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-brand-400/80 focus:outline-none focus:ring-1 focus:ring-brand-500/50"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Property type
          </label>
          <select className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 focus:border-brand-400/80 focus:outline-none focus:ring-1 focus:ring-brand-500/50">
            <option>Any</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Townhome</option>
            <option>Condo</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Price range
          </label>
          <select className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 focus:border-brand-400/80 focus:outline-none focus:ring-1 focus:ring-brand-500/50">
            <option>Any</option>
            <option>Under $500k</option>
            <option>$500k - $900k</option>
            <option>$900k - $1.5M</option>
            <option>$1.5M+</option>
          </select>
        </div>
        <button className="mt-3 inline-flex items-center justify-center rounded-2xl bg-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-brand-400 sm:mt-5">
          Search homes
        </button>
      </div>
    </div>
  );
}


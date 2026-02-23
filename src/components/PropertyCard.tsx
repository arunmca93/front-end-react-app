type Property = {
  id: number;
  title: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  location: string;
  badge: string;
};

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-3 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-400/70 hover:bg-slate-950">
      <div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold text-slate-100">
            {property.title}
          </p>
          <span className="inline-flex items-center rounded-full bg-brand-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-200 ring-1 ring-brand-500/40">
            {property.badge}
          </span>
        </div>
        <p className="mt-1 text-[11px] text-slate-400">{property.location}</p>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-slate-50">
            {property.price}
          </p>
          <p className="flex gap-2 text-[11px] text-slate-400">
            <span>{property.beds} bd</span>
            <span>{property.baths} ba</span>
            <span>{property.area} sqft</span>
          </p>
        </div>
        <button className="rounded-full border border-slate-700/70 px-3 py-1 text-[11px] font-medium text-slate-200 transition group-hover:border-brand-400/80 group-hover:text-white">
          View details
        </button>
      </div>
    </article>
  );
}


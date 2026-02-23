import { PropertyCard } from "./components/PropertyCard";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";

const featured = [
  {
    id: 1,
    title: "Modern Family Villa",
    price: "$920,000",
    beds: 4,
    baths: 3,
    area: "2,450",
    location: "San Diego, CA",
    badge: "Featured"
  },
  {
    id: 2,
    title: "Skyline City Apartment",
    price: "$3,200 / mo",
    beds: 2,
    baths: 2,
    area: "1,150",
    location: "Seattle, WA",
    badge: "For Rent"
  },
  {
    id: 3,
    title: "Cozy Suburban House",
    price: "$640,000",
    beds: 3,
    baths: 2,
    area: "1,900",
    location: "Austin, TX",
    badge: "New"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-brand-500/30 via-brand-500/0 to-transparent blur-3xl" />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-200 ring-1 ring-brand-500/40">
              PrimeHomes Realty
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Find your next
              <span className="bg-gradient-to-r from-brand-200 via-white to-brand-300 bg-clip-text text-transparent">
                {" "}
                dream home
              </span>
              in minutes.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              Browse curated homes, apartments, and villas from trusted agents.
              Compare prices, explore neighborhoods, and schedule tours directly
              from your dashboard.
            </p>
            <SearchBar />
            <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-300 sm:text-sm">
              <div>
                <p className="text-lg font-semibold text-slate-50">12k+</p>
                <p>Verified properties</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-50">2k+</p>
                <p>Happy families moved</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-50">180+</p>
                <p>Cities covered</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-500/20 blur-3xl" />
            <div className="overflow-hidden rounded-3xl bg-slate-900/60 shadow-soft ring-1 ring-slate-700/60 backdrop-blur">
              <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-brand-200">
                    Handpicked for you
                  </p>
                  <p className="text-sm text-slate-300">
                    Based on your recent searches
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                  Live market
                </span>
              </div>
              <div className="grid gap-2 bg-slate-900/80 p-4 sm:grid-cols-2">
                {featured.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Explore by lifestyle
              </h2>
              <p className="text-sm text-slate-400">
                Discover properties that match the way you live.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 shadow-sm transition hover:border-brand-400/80 hover:bg-slate-900 hover:text-white">
              View all neighborhoods
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-4 shadow-soft">
              <p className="text-sm font-semibold text-slate-100">
                Waterfront living
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Beachfront homes and lake-view apartments.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-brand-500/10 to-slate-900/90 p-4 shadow-soft">
              <p className="text-sm font-semibold text-slate-100">
                City convenience
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Walkable neighborhoods close to everything.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-emerald-500/10 to-slate-900/90 p-4 shadow-soft">
              <p className="text-sm font-semibold text-slate-100">
                Family friendly
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Quiet streets, parks, and top-rated schools.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} PrimeHomes Realty. All rights reserved.</p>
          <p className="space-x-4">
            <span>Privacy</span>
            <span>Terms</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;


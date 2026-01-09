import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, type ProjectItem } from "../../data/projectsData";

type Sector = ProjectItem["sector"];

const SECTORS: { key: Sector; label: string }[] = [
  { key: "All", label: "All Projects" },
  { key: "Healthcare", label: "Healthcare" },
  { key: "Construction", label: "Construction" },
  { key: "Engineering", label: "Engineering" },
  { key: "Technology", label: "Technology" },
  { key: "Energy", label: "Energy" },
  { key: "Logistics", label: "Logistics" },
  { key: "RealEstate", label: "Real Estate" },
  { key: "Manufacturing", label: "Manufacturing" },
];

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80";

function labelSector(sector: Sector) {
  return sector === "RealEstate" ? "Real Estate" : sector;
}

function StatusPill({ status }: { status: ProjectItem["status"] }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/92 backdrop-blur px-3 py-1 text-xs border border-black/10 shadow-sm">
      {status}
    </span>
  );
}

export default function ProjectsGridSection() {
  const [active, setActive] = useState<Sector>("All");

  const items = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.sector === active);
  }, [active]);

  return (
    <section className="w-full mt-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="mt-2 text-sm md:text-base text-black/60 max-w-3xl">
          Explore key initiatives across the group. Use filters to narrow by sector.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {SECTORS.map((s) => {
          const isActive = active === s.key;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(s.key)}
              className={[
                "rounded-full border px-4 py-2 text-sm transition",
                "focus:outline-none focus:ring-2 focus:ring-black/10",
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black/15 hover:border-black/30 hover:bg-black/5",
              ].join(" ")}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Image wrapper with guaranteed aspect ratio + fallback */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/5">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src !== FALLBACK_IMG) img.src = FALLBACK_IMG;
                }}
              />

              {/* subtle gradient to keep badge readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

              {/* Status pill */}
              <div className="absolute left-3 top-3">
                <StatusPill status={p.status} />
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-base md:text-lg font-semibold leading-snug line-clamp-2">
                {p.name}
              </h3>

              <p className="mt-2 text-sm text-black/65 leading-relaxed line-clamp-3">
                {p.summary}
              </p>

              {/* chips */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-black/70">
                <span className="rounded-full border border-black/10 px-3 py-1">
                  {labelSector(p.sector)}
                </span>
                <span className="rounded-full border border-black/10 px-3 py-1">
                  {p.location}
                </span>
              </div>

              {/* action */}
              <div className="mt-4">
                <Link
                  to={`/projects/${p.id}`}
                  className="text-sm font-medium underline underline-offset-4 text-black/80 hover:text-black"
                >
                  View project
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

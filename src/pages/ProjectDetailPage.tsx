import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiMapPin, FiTag, FiClock } from "react-icons/fi";
import { PROJECTS } from "../data/projectsData";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80";

function labelSector(sector: string) {
  return sector === "RealEstate" ? "Real Estate" : sector;
}

function StatusBadge({ status }: { status: string }) {
  const cls =
    status === "Completed"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : status === "Planned"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-sky-50 text-sky-700 border-sky-200";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${cls}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}

function MetaChip({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 shadow-sm">
      <span className="text-black/50">{icon}</span>
      {children}
    </span>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="pt-24">
        <div className="container-wide py-12">
          <h1 className="text-2xl font-semibold">Project not found</h1>
          <p className="mt-2 text-black/60">Please go back to Projects.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium underline underline-offset-4 text-black/80 hover:text-black"
          >
            <FiArrowLeft /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const sector = labelSector(project.sector);

  return (
    <main className="pt-20">
      {/* Modern page hero */}
      <section className="relative border-b border-black/5 bg-gradient-to-b from-black/[0.03] to-transparent">
        <div className="container-wide py-10 md:py-12">
          {/* breadcrumb row */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black transition"
            >
              <FiArrowLeft />
              Projects
            </Link>

            <StatusBadge status={project.status} />
          </div>

          {/* title + summary */}
          <div className="mt-6 grid gap-6 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {project.name}
              </h1>
              <p className="mt-3 text-sm md:text-base text-black/60 leading-relaxed max-w-2xl">
                {project.summary}
              </p>

              {/* meta chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                <MetaChip icon={<FiTag size={14} />}>{sector}</MetaChip>
                <MetaChip icon={<FiMapPin size={14} />}>
                  {project.location}
                </MetaChip>
                <MetaChip icon={<FiClock size={14} />}>
                  {project.status}
                </MetaChip>
              </div>

              {/* CTA row */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-95 transition"
                >
                  View Overview
                </a>

                <a
                  href="#details"
                  className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-4 py-2.5 text-sm font-medium text-black/80 hover:bg-black/5 transition"
                >
                  Project Details
                </a>
              </div>
            </div>

            {/* side quick info card */}
            <aside className="lg:col-span-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-black/80">
                Quick Information
              </h3>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-black/50">Status</span>
                  <span className="font-medium text-black/80">
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-black/50">Sector</span>
                  <span className="font-medium text-black/80">{sector}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-black/50">Location</span>
                  <span className="font-medium text-black/80">
                    {project.location}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="container-wide">
        <div className="-mt-6 md:-mt-8 rounded-2xl overflow-hidden border border-black/10 bg-black/5 shadow-sm">
          <div className="relative w-full aspect-[21/9]">
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src !== FALLBACK_IMG) img.src = FALLBACK_IMG;
              }}
            />
            {/* subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-wide py-10 md:py-12">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Main */}
          <div className="lg:col-span-8 space-y-6">
            <div
              id="overview"
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold">Overview</h2>
              <p className="mt-2 text-sm text-black/70 leading-relaxed">
                {project.details ??
                  "Details can be added here (later API integration). This layout is ready for real content."}
              </p>
            </div>

            <div
              id="details"
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold">Project Details</h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                  <div className="text-xs text-black/50">Sector</div>
                  <div className="mt-1 text-sm font-medium text-black/80">
                    {sector}
                  </div>
                </div>

                <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                  <div className="text-xs text-black/50">Location</div>
                  <div className="mt-1 text-sm font-medium text-black/80">
                    {project.location}
                  </div>
                </div>

                <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                  <div className="text-xs text-black/50">Status</div>
                  <div className="mt-1 text-sm font-medium text-black/80">
                    {project.status}
                  </div>
                </div>

                <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                  <div className="text-xs text-black/50">Project ID</div>
                  <div className="mt-1 text-sm font-medium text-black/80">
                    {project.id}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Actions</h3>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-4 py-2.5 text-sm font-medium text-black/80 hover:bg-black/5 transition"
                >
                  Back to Projects
                </Link>

                <a
                  href="#overview"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-95 transition"
                >
                  Jump to Overview
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Note</h3>
              <p className="mt-2 text-sm text-black/70 leading-relaxed">
                This page is designed to look modern and premium. When you connect
                API later, we can add galleries, milestones, downloadable PDFs,
                and related projects without changing the layout.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

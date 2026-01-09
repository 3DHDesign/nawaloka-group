const FOUNDER_IMAGE =
  "https://static.wixstatic.com/media/c47153_d3a3c7c7bd9e4394b9f78acd8bf08c3c~mv2.jpg/v1/fill/w_613,h_646,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c47153_d3a3c7c7bd9e4394b9f78acd8bf08c3c~mv2.jpg";

export default function FounderSection() {
  return (
    <section id="founder" className="container-wide py-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
            <img
              src={FOUNDER_IMAGE}
              alt="H.K. Dharmadasa - Founder of Nawaloka"
              className="h-[520px] w-full object-cover"
              loading="lazy"
            />

            <div
              className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-[var(--dark)]"
              style={{ backgroundColor: "rgba(237,180,70,.85)" }}
            >
              Founder
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-base font-semibold text-white">H.K. Dharmadasa</p>
              <p className="text-sm text-white/85">Founder, Nawaloka Group</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="h-2 w-10 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
              <h2 className="text-2xl font-semibold tracking-tight">Our Founder</h2>
            </div>

            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              H.K. Dharmadasa is the visionary founder of the Nawaloka Group, respected for pioneering
              private-sector excellence in Sri Lanka. With a commitment to accessibility, quality, and innovation,
              he laid the foundation for what has become one of the country’s most trusted organizations.
            </p>

            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              Guided by a belief that world-class standards should be available locally, his leadership shaped Nawaloka
              into a symbol of trust, compassion, and continuous progress. That legacy continues to influence the
              Group’s values and strategic direction today.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <FounderPill title="Principle" desc="People-first service backed by strong governance and accountability." />
              <FounderPill title="Focus" desc="Continuous improvement through innovation and operational excellence." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
      <p className="text-sm font-semibold text-[var(--text)]">{title}</p>
      <p className="mt-1 text-sm text-[var(--muted)]">{desc}</p>
    </div>
  );
}

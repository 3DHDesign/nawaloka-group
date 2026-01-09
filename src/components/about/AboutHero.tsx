import { FiArrowRight } from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 20% 20%, rgba(237,180,70,.22), transparent 62%), radial-gradient(900px 520px at 85% 15%, rgba(0,0,0,.06), transparent 60%), linear-gradient(to bottom, #ffffff, var(--bg))",
        }}
      />
      <div className="relative container-wide py-14">
        {/* breadcrumb pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--muted)] backdrop-blur">
          <span className="text-[var(--text)]">Nawaloka Group</span>
          <span className="opacity-60">•</span>
          <span>About Us</span>
        </div>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            A legacy of care, innovation, and trust
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Built on a commitment to deliver dependable, world-class service—grounded in integrity,
            driven by continuous improvement, and centered around people.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#founder"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-[var(--dark)] shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Meet Our Founder <FiArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#leadership"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text)] shadow-sm transition hover:bg-black/5"
            >
              Leadership Team
            </a>

            <a
              href="#values"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text)] shadow-sm transition hover:bg-black/5"
            >
              Our Values
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

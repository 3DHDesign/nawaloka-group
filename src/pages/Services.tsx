import ServicesGrid from "../components/services/ServicesGrid";

export default function Services() {
  return (
    <main className="bg-white pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7E6] via-white to-white" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#EDB446]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

        <div className="container-wide relative pt-14 pb-10">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="font-semibold tracking-widest">NAWALOKA GROUP</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 font-medium">Services</span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-[1.05]">
                Services built for{" "}
                <span className="text-[#EDB446]">scale</span>,{" "}
                <span className="text-[#EDB446]">quality</span> and{" "}
                <span className="text-[#EDB446]">trust</span>.
              </h1>

              <p className="mt-5 max-w-2xl text-base text-gray-600 leading-7">
                Explore our services across construction, manufacturing, trading,
                hospitality, and development. Select a service to view its overview,
                gallery, chairman, and management team.
              </p>

              {/* quick stats */}
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                <Stat label="Companies" value="11" />
                <Stat label="Industries" value="6+" />
                <Stat label="Locations" value="Islandwide" />
                <Stat label="Focus" value="Quality" />
              </div>
            </div>

            {/* side card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <p className="text-sm font-semibold text-gray-900">
                  Need a quick direction?
                </p>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Browse the services below. Click any card to open the full detail page.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="#services-grid"
                    className="inline-flex items-center justify-center rounded-xl bg-[#EDB446] px-4 py-2.5 text-sm font-semibold text-black hover:bg-[#d9a437] transition"
                  >
                    View Services
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-6 h-px bg-gray-100" />

                <div className="mt-5 space-y-3 text-sm">
                  <RowDot text="Construction & Engineering" />
                  <RowDot text="Piling Solutions" />
                  <RowDot text="Polysacks & Packaging" />
                  <RowDot text="Trading & Distribution" />
                  <RowDot text="Hospitality & Bakery" />
                  <RowDot text="Real Estate Development" />
                </div>
              </div>
            </div>
          </div>

          {/* separator */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </section>

      {/* GRID */}
      <section id="services-grid" className="container-wide py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500">
              PORTFOLIO
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
              Explore our services
            </h2>
          </div>

          <div className="text-sm text-gray-600">
            Click a card to open the service detail page.
          </div>
        </div>

        <ServicesGrid />
        {/* CTA */}
<section className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-black to-[#1c1c1c]" />
  <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#EDB446]/20 blur-3xl" />
  <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#EDB446]/10 blur-3xl" />

  <div className="container-wide relative py-20 text-center">
    <h3 className="text-3xl sm:text-4xl font-semibold text-white">
      Ready to Start Your Next Project?
    </h3>

    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
      Contact our team to discuss how we can bring your vision to life with our
      comprehensive service offerings.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <a
        href="/#contact"
        className="inline-flex items-center justify-center rounded-xl bg-[#EDB446] px-6 py-3 text-sm font-semibold text-black hover:bg-[#d9a437] transition"
      >
        Contact Us
      </a>

      <a
        href="/projects"
        className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
      >
        View Projects
      </a>
    </div>
  </div>
</section>

      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-lg font-semibold text-gray-900">{value}</p>
      <p className="mt-1 text-xs font-medium text-gray-600">{label}</p>
      <div className="mt-3 h-1 w-10 rounded-full bg-[#EDB446]" />
    </div>
  );
}

function RowDot({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2.5 w-2.5 rounded-full bg-[#EDB446]" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

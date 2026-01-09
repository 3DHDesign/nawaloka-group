import { Link, useParams } from "react-router-dom";
import { SUBSIDIARIES } from "../data/subsidiaries";
import { FaLinkedinIn } from "react-icons/fa";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SUBSIDIARIES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="pt-32 container-wide">
        <h1 className="text-xl font-semibold text-gray-900">Service not found</h1>
        <Link to="/services" className="mt-3 inline-block text-sm text-blue-600">
          Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative pt-20">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white" />
        </div>

        <div className="container-wide relative pt-16 pb-14">
          {/* breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
            <Link to="/" className="hover:text-white transition">
              HOME
            </Link>
            <span className="text-white/30">/</span>
            <Link to="/services" className="hover:text-white transition">
              SERVICES
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90 font-medium">{service.name}</span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-[1.05]">
                {service.name}
              </h1>

              <div className="mt-5 h-1 w-24 rounded-full bg-[#EDB446]" />

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/85">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#service-overview"
                  className="inline-flex items-center justify-center rounded-xl bg-[#EDB446] px-6 py-3 text-sm font-semibold text-black hover:bg-[#d9a437] transition"
                >
                  Service Overview
                </a>

                <a
                  href="#leadership"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  View Leadership
                </a>

                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Contact Team
                </a>
              </div>
            </div>

            {/* hero side card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 text-white shadow-lg">
                <p className="text-sm font-semibold">Quick Overview</p>

                <div className="mt-4 space-y-3 text-sm text-white/80">
                  <InfoRow label="Leadership" value="Chairman & Management" />
                  <InfoRow label="Gallery" value={`${service.gallery.length} images`} />
                  <InfoRow label="Category" value="Nawaloka Services" />
                </div>

                <div className="mt-6 h-px bg-white/10" />

                <Link
                  to="/services"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black/40 px-4 py-2.5 text-sm font-semibold text-white hover:bg-black/55 transition"
                >
                  Back to Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW / CONTENT */}
      <section id="service-overview" className="py-16">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* About */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-gray-500">
                ABOUT THIS SERVICE
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
                Delivering reliable outcomes through structured execution
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#EDB446]" />

              <p className="mt-6 text-base leading-7 text-gray-600">
                {service.about}
              </p>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Our approach prioritizes safety, compliance, and measurable delivery.
                We work with clients to ensure every engagement is completed on time,
                on budget, and aligned with expected quality standards.
              </p>
            </div>

            {/* Capabilities + why */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">
                  Key Capabilities
                </p>

                <ul className="mt-5 space-y-3">
                  {service.capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#EDB446]" />
                      <span className="text-sm text-gray-600 leading-6">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 h-px bg-gray-100" />

                <p className="mt-6 text-sm text-gray-600 leading-6">
                  {service.whyChooseUs}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="py-16 bg-white">
        <div className="container-wide">
          <p className="text-xs font-semibold tracking-widest text-gray-500">
            LEADERSHIP
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
            Chairman & Management
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-[#EDB446]" />

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Chairman */}
            <div className="lg:col-span-5">
              <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                <div className="relative">
                  <img
                    src={service.chairman.image}
                    alt={service.chairman.name}
                    className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute left-5 bottom-5">
                    <p className="text-xs font-semibold tracking-widest text-white/80">
                      CHAIRMAN
                    </p>
                    <p className="mt-1 text-xl font-semibold text-white">
                      {service.chairman.name}
                    </p>
                    <p className="text-sm text-white/80">{service.chairman.role}</p>
                  </div>

                  {service.chairman.linkedin && (
                    <a
                      href={service.chairman.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-5 right-5 h-11 w-11 flex items-center justify-center rounded-full bg-white/15 border border-white/20 text-white hover:bg-white/25 transition"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn size={18} />
                    </a>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-600 leading-7">
                    Leadership focused on governance, strategic direction, and long-term value
                    creation across the organization.
                  </p>
                </div>
              </div>
            </div>

            {/* Management */}
            <div className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {service.management.map((m) => (
                  <div
                    key={m.name}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                  >
                    <div className="relative">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/15 border border-white/20 text-white hover:bg-white/25 transition"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedinIn size={16} />
                        </a>
                      )}
                    </div>

                    <div className="p-5">
                      <p className="font-semibold text-gray-900">{m.name}</p>
                      <p className="mt-1 text-sm text-gray-600">{m.role}</p>
                      <div className="mt-4 h-1 w-10 rounded-full bg-[#EDB446]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-gray-50 py-16">
        <div className="container-wide">
          <p className="text-xs font-semibold tracking-widest text-gray-500">
            GALLERY
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
            Project & Facility Highlights
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-[#EDB446]" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt=""
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              View More Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-white/70">{label}</span>
      <span className="text-white font-semibold">{value}</span>
    </div>
  );
}

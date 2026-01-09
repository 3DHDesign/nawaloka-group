import { FiShield, FiHeart, FiTrendingUp, FiUsers } from "react-icons/fi";

const VALUES = [
  { title: "Integrity & Trust", desc: "Strong governance and consistent accountability.", icon: FiShield },
  { title: "Patient-Centric Care", desc: "Compassionate service designed around people.", icon: FiHeart },
  { title: "Innovation & Excellence", desc: "Continuous improvement through modern standards.", icon: FiTrendingUp },
  { title: "People & Community", desc: "Empowering teams and uplifting communities.", icon: FiUsers },
];

export default function ValuesSection() {
  return (
    <section id="values" className="container-wide py-14">
      <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-2 w-10 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
              <h2 className="text-2xl font-semibold tracking-tight">Vision, Mission & Values</h2>
            </div>

            <div className="mt-6 space-y-4">
              <Block title="Our Vision">
                To be the most trusted and progressive healthcare and services group in Sri Lanka and the region.
              </Block>
              <Block title="Our Mission">
                To deliver world-class services through innovation, compassion, and operational excellence—placing people at the heart of everything we do.
              </Block>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {VALUES.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "rgba(237,180,70,.18)", color: "var(--dark)" }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-[var(--text)]">{v.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
      <p className="text-sm font-semibold text-[var(--text)]">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{children}</p>
    </div>
  );
}

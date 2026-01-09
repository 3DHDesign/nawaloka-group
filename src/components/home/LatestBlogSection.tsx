// src/components/home/LatestBlogSection.tsx
 
import { FiUser, FiClock, FiArrowUpRight } from "react-icons/fi";

type Post = {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  author?: string;
  href?: string;
};

const POSTS: Post[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1742276996998-9ebe9035af76?auto=format&fit=crop&w=1200&q=80",
    date: "25 September, 2025",
    title: "Nawaloka Construction tops out new mixed-use tower in Colombo",
    excerpt: "Structural works complete; façade and MEP underway.",
    author: "Group Comms",
    href: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=1200&q=80",
    date: "18 September, 2025",
    title: "Nawaloka Engineering commissions 60 MW biomass power plant",
    excerpt: "Project to supply renewable energy to national grid within Q1 2026.",
    author: "Group Comms",
    href: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    date: "10 September, 2025",
    title: "Ready-mix & materials: fleet upgrades improve on-site turnaround",
    excerpt: "Telematics and optimized dispatch cut delivery times by 12%.",
    author: "Group Comms",
    href: "#",
  },
];

export default function LatestBlogSection() {
  return (
    <section
      className="py-20"
      style={{ background: "var(--bg)" }}
    >
      {/* container-wide wrapper */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "var(--container-wide)",
          paddingLeft: "var(--gutter)",
          paddingRight: "var(--gutter)",
        }}
      >
        {/* ================= HEADER ================= */}
        <div className="mb-14 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p style={{ color: "var(--muted)" }} className="text-sm">
              News & Updates
            </p>
            <h2
              className="mt-2 font-semibold leading-[1.05]"
              style={{
                color: "var(--dark)",
                fontSize: "clamp(2.2rem,4vw,3.2rem)",
              }}
            >
              Latest from Nawaloka Group
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center font-semibold transition"
            style={{
              background: "var(--primary)",
              color: "var(--dark)",
              padding: "14px 26px",
              borderRadius: 10,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--primary-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--primary)";
            }}
          >
            Our Blog
          </a>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.id}
              className="group"
              style={{
                border: "1px solid var(--border)",
                borderRadius: 18,
                background: "#fff",
                overflow: "hidden",
                transition: "transform 250ms ease, box-shadow 250ms ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 18px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0px)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <a href={post.href ?? "#"} className="block">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover"
                    style={{ aspectRatio: "16 / 9" }}
                  />

                  {/* subtle top gradient for premium feel */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 45%)",
                    }}
                  />
                </div>
              </a>

              {/* Content */}
              <div className="px-6 pb-6 pt-5">
                {/* Meta */}
                <div
                  className="flex items-center gap-6 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  <span className="flex items-center gap-2">
                    <FiUser />
                    {post.author ?? "Group Comms"}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiClock />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mt-4 text-[1.25rem] font-semibold leading-snug"
                  style={{ color: "var(--dark)" }}
                >
                  <a
                    href={post.href ?? "#"}
                    className="transition"
                    style={{ textDecoration: "none" }}
                  >
                    {post.title}
                  </a>
                </h3>

                {/* Bottom row */}
                <div className="mt-6 flex items-end justify-between gap-6">
                  <p
                    className="text-[15px] leading-6"
                    style={{ color: "var(--muted)" }}
                  >
                    {post.excerpt}
                  </p>

                  <a
                    href={post.href ?? "#"}
                    className="flex h-11 w-11 items-center justify-center rounded-full transition"
                    style={{
                      background: "var(--dark)",
                      color: "#fff",
                      flex: "0 0 auto",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "var(--primary)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--dark)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "var(--dark)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#fff";
                    }}
                    aria-label="Read more"
                    title="Read more"
                  >
                    <FiArrowUpRight className="text-[18px]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

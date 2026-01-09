export default function AboutSection() {
    return (
      <section id="about" className="bg-[var(--bg)] py-16 md:py-20">
        <div className="container-wide">
          {/* Desktop: 2 columns, 2 rows (perfect alignment) */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
            {/* Row 1 - Left: Text */}
            <div className="lg:pr-2">
              <p className="text-sm font-semibold tracking-wide text-[var(--dark)]/80">
                About Nawaloka Group
              </p>
  
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--dark)]">
                Lorem ipsum dolor sit amet
              </h2>
  
              <p className="mt-5 max-w-xl text-[var(--muted)] leading-[1.75]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                doloremque odio recusandae quia earum labore necessitatibus
                doloribus quidem, iure placeat iste, rem sequi nulla nisi
                accusamus itaque qui dicta minima quibusdam facilis ab architecto
                quaerat.
              </p>
  
              <div className="mt-10">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-8 py-3 text-sm font-semibold text-[var(--dark)] transition hover:bg-[var(--primary-hover)]"
                >
                  Discover More
                </a>
              </div>
            </div>
  
            {/* Row 1 - Right: Top image */}
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
                alt="Nawaloka Group building"
                className="h-[260px] w-full object-cover md:h-[300px] lg:h-[320px]"
                loading="lazy"
              />
            </div>
  
            {/* Row 2 - Left: Bottom-left image */}
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80"
                alt="Team on-site"
                className="h-[260px] w-full object-cover md:h-[320px] lg:h-[360px]"
                loading="lazy"
              />
            </div>
  
            {/* Row 2 - Right: Bottom-right image */}
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
                alt="Construction project"
                className="h-[260px] w-full object-cover md:h-[320px] lg:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
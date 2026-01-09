import { useMemo } from "react";
import SlickImport from "react-slick";

type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
};

const SLIDES: Slide[] = [
  {
    id: "s1",
    title: "Building Sri Lanka’s\nfuture",
    subtitle: "A diversified group delivering projects across key sectors.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
  },
  {
    id: "s2",
    title: "Trusted. Proven.\nForward-looking.",
    subtitle: "Developing infrastructure, industry, and modern living spaces.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=2400&q=80",
  },
  {
    id: "s3",
    title: "Building with\nintegrity",
    subtitle: "Quality engineering and long-term value for communities.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
  },
];

const Slick = (SlickImport as unknown as { default?: unknown }).default ?? SlickImport;

export default function HeroSlider() {
  const settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4500,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
    }),
    []
  );

  return (
    <section className="relative h-screen overflow-hidden">
      {/* @ts-expect-error - Slick export interop */}
      <Slick {...settings}>
        {SLIDES.map((s) => (
          <div key={s.id}>
            {/* CHANGED: h-screen makes it full height, 100dvh fixes mobile browser bar issues */}
            <div className="relative h-screen w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              <div className="absolute inset-0 bg-black/45" />

              <div className="relative h-full">
                <div className="container-wide flex h-full items-center">
                  <div className="max-w-2xl">
                    <h1 className="whitespace-pre-line text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
                      {s.title}
                    </h1>

                    {s.subtitle ? (
                      <p className="mt-5 text-base leading-relaxed text-white/85 md:text-xl">
                        {s.subtitle}
                      </p>
                    ) : null}

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href="#about"
                        className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--dark)] transition hover:bg-[var(--primary-hover)]"
                      >
                        Discover More
                      </a>

                      <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        View Projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* If you want the yellow bar to be on TOP of the image, move it inside the relative div */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-[var(--primary)] z-10" />
          </div>
        ))}
      </Slick>
    </section>
  );
}
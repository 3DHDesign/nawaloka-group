import SlickImport from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 🔥 FIX: normalize react-slick export
const Slider =
  (SlickImport as unknown as { default?: React.ComponentType<any> }).default ??
  SlickImport;

const SLIDES = [
  {
    title: "High-Rise Buildings",
    image: "https://images.unsplash.com/photo-1673188218874-8753e33b93fe?auto=format&fit=crop&w=1290&h=590&q=80",
    points: ["🏗️ Towers & Commercial", "📐 Structural Integrity"],
  },
  {
    title: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1742276996998-9ebe9035af76?auto=format&fit=crop&w=1290&h=590&q=80",
    points: ["🚧 Road & Bridge Works", "💧 Water Projects"],
  },
  {
    title: "Quality & Execution",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1290&h=590&q=80",
    points: ["🧱 Material Excellence", "👷 Safety Standards"],
  },
  {
    title: "Sustainable Energy",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1290&h=590&q=80",
    points: ["⚡ Solar Power", "🌱 Green Tech"],
  },
];

export default function CapabilitiesSlider() {
  const settings = {
    className: "center",
    centerMode: true,     // <--- This enables seeing the prev/next slides
    infinite: true,
    centerPadding: "220px", // <--- Controls width of side slides (Desktop)
    slidesToShow: 1,
    speed: 500,
    dots: false,
    arrows: false, // Usually looks cleaner without arrows in center mode, but can be true
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "20px", // Less padding on mobile
        }
      }
    ]
  };

  return (
    <section className="bg-[var(--bg)] py-20 overflow-hidden">
      <div className="px-[clamp(1rem,4vw,3.5rem)] mb-10">
        <p className="text-sm font-semibold text-[var(--dark)]/70">
          Our Capabilities
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-[var(--dark)]">
          Engineering & Construction
        </h2>
      </div>

      {/* Added -mx-4 to allow slider to stretch wider than the text container if needed */}
      <div className="">
        <Slider {...settings}>
          {SLIDES.map((s, i) => (
            <div key={i}>
              {/* ✨ GAP TRICK: 
                  React-slick slides touch each other. 
                  We put padding on this wrapper div to create the white space 
                  between the images.
              */}
              <div className="px-4 transition-all duration-300">
                
                <div className="relative h-[450px] overflow-hidden group">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay - Styled to match Image 2 (Black Bar at bottom) */}
                  <div className="absolute bottom-8 left-0 right-0 px-8">
                    <div className="bg-black/90 px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      
                      <h3 className="text-white text-2xl font-serif font-medium tracking-wide">
                        {s.title}
                      </h3>

                      <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        {s.points.map((p, idx) => (
                          <li key={idx} className="text-white/90 text-sm font-medium flex items-center gap-2">
                            {/* Render text directly or span for icon separation */}
                            {p}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
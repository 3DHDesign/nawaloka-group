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
    points: ["🏗️ Towers", "📐 Structure"], // Shortened text slightly for small cards
  },
  {
    title: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1742276996998-9ebe9035af76?auto=format&fit=crop&w=1290&h=590&q=80",
    points: ["🚧 Roads", "💧 Water"],
  },
  {
    title: "Quality & Execution",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1290&h=590&q=80",
    points: ["🧱 Materials", "👷 Safety"],
  },
  {
    title: "Sustainable Energy",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1290&h=590&q=80",
    points: ["⚡ Solar", "🌱 Green Tech"],
  },
];

export default function CapabilitiesSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px", // Reduced padding so we see more slides
    slidesToShow: 3,       // <--- Shows 3 slides on Desktop (makes them smaller)
    speed: 500,
    dots: true,            // Added dots for better navigation
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 slides on tablet
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // 1 slide on mobile
          centerPadding: "40px",
        }
      }
    ]
  };

  return (
    <section className="bg-[var(--bg)] py-16 overflow-hidden">
      <div className="px-[clamp(1rem,4vw,3.5rem)] mb-8">
        <p className="text-sm font-semibold text-[var(--dark)]/70">
          Our Capabilities
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--dark)]">
          Engineering & Construction
        </h2>
      </div>

      <div className="">
        <Slider {...settings}>
          {SLIDES.map((s, i) => (
            <div key={i}>
              {/* Added px-3 for gap between cards */}
              <div className="px-3 transition-all duration-300">
                
                {/* Reduced height to h-[350px] */}
                <div className="relative h-[350px] rounded-lg overflow-hidden group shadow-lg">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Compact Overlay */}
                  <div className="absolute bottom-4 left-0 right-0 px-4">
                    <div className="bg-black/90 px-5 py-4 rounded-sm flex flex-col gap-2">
                      
                      <h3 className="text-white text-lg font-serif font-medium tracking-wide">
                        {s.title}
                      </h3>

                      <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {s.points.map((p, idx) => (
                          <li key={idx} className="text-white/80 text-xs font-medium">
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
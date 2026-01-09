 
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaInstagram, 
  FaArrowRight 
} from "react-icons/fa6"; // Using Fa6 for sharper icons
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const SECTORS = [
  "Construction & Engineering",
  "Piling Solutions",
  "Polysacks & Packaging",
  "Industries & Manufacturing",
  "Timber Enterprises",
  "Real Estate",
];

const LINKS = [
  { name: "About Us", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Sustainability", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Newsroom", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white pt-24 pb-12 overflow-hidden font-sans relative">
      
      {/* Decorative massive text in background (Subtle) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[15vw] font-bold text-black leading-none whitespace-nowrap select-none">
          NAWALOKA
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT SIDE: Brand & Vision */}
          <div className="lg:w-1/3 space-y-10">
            {/* Logo Area */}
            <div className="flex items-center gap-4">
               {/* Rounded container for logo */}
              <div className="w-14 h-14 bg-[#111] rounded-full flex items-center justify-center">
                 <img 
                   src="/images/logo.avif" 
                   alt="Nawaloka" 
                   className="w-8 h-8 object-contain"
                   onError={(e) => (e.currentTarget.style.display = 'none')}
                 />
              </div>
              <span className="text-2xl font-bold tracking-widest uppercase">
                Nawaloka Group
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-light leading-snug text-white/90">
                Building the future,<br />
                <span className="font-bold text-[#D4AF37]">preserving the legacy.</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Since 1954, we have been a driving force in Sri Lanka's industrial and commercial landscape, committed to excellence and sustainable growth.
              </p>
            </div>

            {/* NEW Input Style: Underline Only (Clean, no boxes to glitch) */}
            <div className="pt-4">
              <label className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-2 block">
                Stay Updated
              </label>
              <div className="flex items-center border-b border-gray-800 focus-within:border-[#D4AF37] transition-colors pb-2 max-w-sm">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="bg-transparent w-full text-white placeholder:text-gray-600 focus:outline-none text-sm"
                />
                <button className="text-[#D4AF37] hover:text-white transition-colors">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Grid Links */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
            
            {/* Column 1: Links */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">
                Company
              </h3>
              <ul className="space-y-4">
                {LINKS.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-[15px]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Sectors */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">
                Sectors
              </h3>
              <ul className="space-y-4">
                {SECTORS.map((sector) => (
                  <li key={sector}>
                    <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-[15px]">
                      {sector}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="space-y-8">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <FiMapPin className="text-[#D4AF37] text-xl shrink-0 mt-1" />
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nawaloka House,<br/>
                    115 Sir James Peiris Mawatha,<br/>
                    Colombo 02.
                  </p>
                </div>
                
                <div className="flex gap-4 items-center">
                  <FiPhone className="text-[#D4AF37] text-xl shrink-0" />
                  <p className="text-gray-400 text-sm">
                    (+94) 11 588 8888
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <FiMail className="text-[#D4AF37] text-xl shrink-0" />
                  <p className="text-gray-400 text-sm">
                    info@nawaloka.com
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR: Separated completely */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Nawaloka Group. All Rights Reserved.
          </p>

          {/* Social Icons - Clean Circle Style */}
          <div className="flex gap-3">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#"
                className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
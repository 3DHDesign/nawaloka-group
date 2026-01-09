import { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

type NavItem = { label: string; route: string; hash?: string };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const NAV = useMemo<NavItem[]>(
    () => [
      { label: "Home", route: "/", hash: "#home" },
      { label: "About", route: "/about" },
      { label: "Services", route: "/services" },
      { label: "Projects", route: "/projects" },

      // ✅ Contact is now a PAGE
      { label: "Contact", route: "/contact" },
    ],
    []
  );

  /* ---------------- Scroll detection ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Close mobile on resize ---------------- */
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ---------------- Smooth scroll for HOME only ---------------- */
  useEffect(() => {
    if (location.pathname !== "/") return;
    if (!location.hash) return;
    const t = window.setTimeout(() => scrollToHash(location.hash), 40);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  /* ================= LIGHT PAGE LOGIC (FIXED) ================= */
  const isLightPage =
    location.pathname === "/about" ||
    location.pathname === "/services" ||
    location.pathname === "/projects" ||
    location.pathname.startsWith("/projects/") ||
    location.pathname === "/contact";

  /* ================= HEADER STYLE ================= */
  const headerBg = isLightPage
    ? "bg-white/92 backdrop-blur-md border-b border-gray-200"
    : scrolled
    ? "bg-black/55 backdrop-blur-md border-b border-white/10"
    : "bg-transparent";

  const baseText = isLightPage ? "text-gray-900" : "text-white";
  const mutedText = isLightPage ? "text-gray-600" : "text-white/80";

  /* ---------------- NAV HANDLER ---------------- */
  const handleNav = (item: NavItem) => {
    setOpen(false);

    // HOME hash only
    if (item.route === "/" && item.hash) {
      if (location.pathname === "/") {
        scrollToHash(item.hash);
      } else {
        navigate(`/${item.hash}`);
      }
      return;
    }

    if (location.pathname !== item.route) navigate(item.route);
  };

  /* ================= ACTIVE STATE (FIXED) ================= */
  const isActive = (item: NavItem) => {
    if (item.route === "/about") return location.pathname === "/about";

    if (item.route === "/services")
      return (
        location.pathname === "/services" ||
        location.pathname.startsWith("/services/")
      );

    if (item.route === "/projects")
      return (
        location.pathname === "/projects" ||
        location.pathname.startsWith("/projects/")
      );

    if (item.route === "/contact")
      return location.pathname === "/contact";

    if (item.route === "/" && item.hash) {
      if (item.hash === "#home" && location.pathname === "/" && !location.hash)
        return true;
      return location.pathname === "/" && location.hash === item.hash;
    }

    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-wide h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav({ label: "Home", route: "/", hash: "#home" })}
          className="flex items-center gap-3 text-left cursor-pointer"
        >
          <img
            src="/images/logo.avif"
            alt="Nawaloka Group"
            className="h-10 w-auto object-contain"
          />
          <span className={`${baseText} font-semibold tracking-wide`}>
            Nawaloka Group
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => {
            const active = isActive(item);

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNav(item)}
                className={[
                  "group cursor-pointer text-sm font-medium transition relative",
                  active ? baseText : mutedText,
                  "hover:opacity-100",
                ].join(" ")}
              >
                {item.label.toUpperCase()}

                <span
                  className={[
                    "absolute left-0 -bottom-2 h-[2px] w-full rounded-full transition-opacity",
                    active
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100",
                  ].join(" ")}
                  style={{ backgroundColor: "#EDB446" }}
                />
              </button>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          className={[
            "md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border transition",
            isLightPage
              ? "border-gray-200 text-gray-900"
              : "border-white/15 text-white",
          ].join(" ")}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-wide pb-5">
          <div
            className={[
              "rounded-2xl border p-3 backdrop-blur-md",
              isLightPage
                ? "border-gray-200 bg-white/95"
                : "border-white/10 bg-black/60",
            ].join(" ")}
          >
            {NAV.map((item) => {
              const active = isActive(item);
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNav(item)}
                  className={[
                    "w-full text-left rounded-xl px-4 py-3 text-sm font-medium transition",
                    isLightPage
                      ? active
                        ? "bg-black/5 text-gray-900"
                        : "text-gray-900 hover:bg-black/5"
                      : active
                      ? "bg-white/10 text-white"
                      : "text-white/90 hover:bg-white/10",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 92;
  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - headerOffset;

  window.scrollTo({ top, behavior: "smooth" });
}

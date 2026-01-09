import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowUpRight } from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="pt-24 bg-[#f6f8fb]">
      <div className="container-wide py-10 md:py-14">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.05),transparent_40%)]" />
          <div className="relative px-6 py-10 md:px-10 md:py-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="text-xs font-medium text-black/50">
                  Home <span className="mx-1">/</span> Contact
                </div>
                <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
                  Contact Nawaloka Group
                </h1>
                <p className="mt-3 text-black/60 text-base leading-relaxed">
                  For inquiries, partnerships, or general assistance, contact our team. We typically respond
                  within 1–2 business days.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href="https://maps.app.goo.gl/o9TYRGF4zE2Cf57j7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-95 transition"
                  >
                    Get Directions <FiArrowUpRight size={16} />
                  </a>

                  <a
                    href="#message"
                    className="inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white px-5 py-2.5 text-sm font-medium text-black/80 hover:bg-black/5 transition"
                  >
                    Send a Message
                  </a>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <div className="rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-black/5 flex items-center justify-center">
                      <FiClock className="text-black/70" size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-black/50">Office Hours</div>
                      <div className="text-sm font-semibold text-black/80">
                        Mon – Fri, 9:00 AM – 5:30 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN GRID ================= */}
        <section className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* LEFT: CONTACT PANEL */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-black/10">
                  <h2 className="text-base font-semibold">Contact Details</h2>
                  <p className="mt-1 text-sm text-black/60">
                    Use the fastest channel for your request.
                  </p>
                </div>

                <div className="p-4 space-y-3">
                  {/* Phone */}
                  <div className="rounded-2xl border border-black/10 bg-[#fbfcfe] p-4 hover:bg-white transition">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-black/5 flex items-center justify-center">
                        <FiPhone className="text-black/70" size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-black/50">Phone</div>
                        <div className="text-sm font-semibold text-black/80">+94 11 555 0000</div>
                        <div className="mt-1 text-xs text-black/50">
                          Best for urgent operational queries.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="rounded-2xl border border-black/10 bg-[#fbfcfe] p-4 hover:bg-white transition">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-black/5 flex items-center justify-center">
                        <FiMail className="text-black/70" size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-black/50">Email</div>
                        <div className="text-sm font-semibold text-black/80 break-all">
                          info@nawalokagroup.com
                        </div>
                        <div className="mt-1 text-xs text-black/50">
                          Best for partnerships & formal requests.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="rounded-2xl border border-black/10 bg-[#fbfcfe] p-4 hover:bg-white transition">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-black/5 flex items-center justify-center">
                        <FiMapPin className="text-black/70" size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-black/50">Head Office</div>
                        <div className="text-sm font-semibold text-black/80">
                          Colombo, Sri Lanka
                        </div>
                        <div className="mt-1 text-xs text-black/50">
                          Open directions below.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="grid gap-3 sm:grid-cols-2 p-1">
                    <a
                      href="tel:+94115550000"
                      className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-4 py-2.5 text-sm font-medium text-black/80 hover:bg-black/5 transition"
                    >
                      Call Now
                    </a>
                    <a
                      href="mailto:info@nawalokagroup.com"
                      className="inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2.5 text-sm font-medium text-white hover:opacity-95 transition"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Small note card */}
              
            </div>
          </aside>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-8">
            <div id="message" className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
              <div className="px-6 py-5 md:px-8 border-b border-black/10">
                <h2 className="text-lg font-semibold">Send a message</h2>
                <p className="mt-1 text-sm text-black/60">
                  Provide your details and we’ll respond promptly.
                </p>
              </div>

              <form className="p-6 md:p-8 grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-black/70">First name</label>
                    <input
                      type="text"
                      placeholder="e.g., Nimal"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbfcfe] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black/70">Last name</label>
                    <input
                      type="text"
                      placeholder="e.g., Perera"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbfcfe] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-black/70">Email</label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbfcfe] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black/70">Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="+94 ..."
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbfcfe] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-black/70">Inquiry type</label>
                    <select className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbfcfe] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10">
                      <option>General inquiry</option>
                      <option>Partnership / Business</option>
                      <option>Media / PR</option>
                      <option>Careers</option>
                      <option>Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black/70">Subsidiary (optional)</label>
                    <input
                      type="text"
                      placeholder="e.g., Nawaloka Construction"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbfcfe] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-black/70">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Write your message here..."
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbfcfe] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                  <div className="mt-2 text-xs text-black/45">
                    Avoid sensitive information. We’ll follow up if we need more details.
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="text-xs text-black/50">
                    By submitting, you agree we may contact you regarding your inquiry.
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-95 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* ================= MAP + OFFICE CARD ================= */}
            <div className="mt-8 rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
              <div className="px-6 py-5 md:px-8 border-b border-black/10 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold">Our location</h3>
                  <p className="mt-1 text-sm text-black/60">
                    Visit the head office or open directions in Google Maps.
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/o9TYRGF4zE2Cf57j7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-black/15 bg-white px-4 py-2.5 text-sm font-medium text-black/80 hover:bg-black/5 transition"
                >
                  Open in Maps <FiArrowUpRight size={16} />
                </a>
              </div>

              <div className="grid lg:grid-cols-12">
                {/* Map */}
                <div className="lg:col-span-7 relative min-h-[320px]">
                  <iframe
                    title="Nawaloka Group Location"
                    src="https://www.google.com/maps?q=6.927079,79.861244&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Office info */}
                <div className="lg:col-span-5 p-6 md:p-8">
                  <div className="text-sm font-semibold text-black/80">Head Office</div>
                  <div className="mt-2 text-sm text-black/60 leading-relaxed">
                    Nawaloka Group (Pvt) Ltd <br />
                    Colombo, Sri Lanka
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-xl bg-black/5 flex items-center justify-center">
                        <FiPhone className="text-black/70" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-black/50">Phone</div>
                        <div className="text-sm font-semibold text-black/80">+94 11 555 0000</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-xl bg-black/5 flex items-center justify-center">
                        <FiMail className="text-black/70" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-black/50">Email</div>
                        <div className="text-sm font-semibold text-black/80 break-all">
                          info@nawalokagroup.com
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-xl bg-black/5 flex items-center justify-center">
                        <FiMapPin className="text-black/70" size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-black/50">Location</div>
                        <div className="text-sm font-semibold text-black/80">
                          Colombo, Western Province
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <a
                      href="https://maps.app.goo.gl/o9TYRGF4zE2Cf57j7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2.5 text-sm font-medium text-white hover:opacity-95 transition"
                    >
                      Directions
                    </a>
                    <a
                      href="#message"
                      className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-4 py-2.5 text-sm font-medium text-black/80 hover:bg-black/5 transition"
                    >
                      Message Us
                    </a>
                  </div>

                  <div className="mt-5 text-xs text-black/45">
                    If you need to contact a specific subsidiary, mention it in your inquiry type or message.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

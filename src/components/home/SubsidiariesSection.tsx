type Subsidiary = {
  name: string;
  image: string;
};

const SUBSIDIARIES: Subsidiary[] = [
  {
    name: "Nawaloka Group (Pvt) Ltd",
    image:
      "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels-listing/hotels-listing-card/itc-ratnadipa.jpg",
  },
  {
    name: "Nawaloka Piling (Pvt) Ltd",
    image:
      "https://static.wixstatic.com/media/c47153_d9f06fc32be7431fb9bec039408061d7~mv2.jpg",
  },
  {
    name: "Nawaloka Polysacks (Pvt) Ltd",
    image:
      "https://static.wixstatic.com/media/c47153_c80aef1094bb44f281bdc97efdc6ae70~mv2.jpg",
  },
  {
    name: "Nawaloka Industries (Pvt) Ltd",
    image:
      "https://static.wixstatic.com/media/c47153_1725eaad6ff04903a23bc5c580fb0081~mv2.jpg",
  },
  {
    name: "Nawaloka Enterprises (Pvt) Ltd",
    image:
      "https://static.wixstatic.com/media/c47153_68d654be32b24e8f8222ed00e43dedce~mv2.jpg",
  },
  {
    name: "Nawaloka Restaurant (Pvt) Ltd",
    image:
      "https://static.wixstatic.com/media/c47153_66c6942f0b3a4b5f985e4e1b9530f3ec~mv2.jpg",
  },
  {
    name: "Nawaloka Hardware (Pvt) Ltd",
    image:
      "https://images.unsplash.com/photo-1631856954913-c751a44490ec?auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Nawaloka Timber Stores (Pvt) Ltd",
    image:
      "https://static.wixstatic.com/media/c47153_48a548e42d5c4f7da5b1d4153185bc6f~mv2.jpg",
  },
  {
    name: "Nawaloka Hotel & Bakery (Pvt) Ltd",
    image:
      "https://static.wixstatic.com/media/c47153_ce6c95ff26754d898b2d8bdb880edd4d~mv2.jpg",
  },
  {
    name: "Nawaloka Development (Pvt) Ltd",
    image:
      "https://static.wixstatic.com/media/c47153_a6afe08f893b4fe88817cede9e710102~mv2.jpg",
  },
  {
    name: "Kamar Lanka (Pvt) Ltd",
    image:
      "https://static.wixstatic.com/media/c47153_b620048f44274d09b84f96bdea72cf8f~mv2.jpg",
  },
];

export default function SubsidiariesSection() {
  return (
    <section className="bg-[#000000] py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="text-sm font-medium text-white/60">
            Nawaloka Holdings
          </span>
          <h2 className="mt-1 text-3xl font-semibold text-white">
            Our Subsidiaries
          </h2>
        </div>

        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-[#EDB446] px-5 py-2 text-sm font-medium text-black hover:bg-[#d9a437] transition"
        >
          View Full Portfolio
        </a>
      </div>

      {/* Grid – Tighter and smaller */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Changed to 4 columns on desktop (lg:grid-cols-4) and reduced gap */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SUBSIDIARIES.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg group"
            >
              {/* Changed aspect-square to h-40 (fixed small height) */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />

              {/* Made overlay smaller and full width at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-3 pt-8">
                <span className="block truncate text-xs font-semibold text-white tracking-wide">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
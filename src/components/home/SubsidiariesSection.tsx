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
      <section className="bg-[#000000] py-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-sm font-medium text-black/60">
              Nawaloka Holdings
            </span>
            <h2 className="mt-2 text-4xl font-semibold text-black">
              Our subsidiaries
            </h2>
          </div>
  
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-[#EDB446] px-6 py-3 text-sm font-medium text-black hover:bg-[#d9a437] transition"
          >
            View Full Portfolio
          </a>
        </div>
  
        {/* Grid – 3 per row */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBSIDIARIES.map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
  
                <span className="absolute left-3 bottom-3 max-w-[calc(100%-1.5rem)] truncate rounded-md bg-black/60 px-3 py-1.5 text-xs font-medium text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
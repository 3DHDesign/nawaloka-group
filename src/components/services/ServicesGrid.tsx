import { Link } from "react-router-dom";
import { SUBSIDIARIES } from "../../data/subsidiaries";

export default function ServicesGrid() {
  return (
    // Grid: Increased to 4 columns (lg) and 5 columns (xl) for smaller individual cards
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {SUBSIDIARIES.map((item) => (
        <Link
          key={item.slug}
          to={`/services/${item.slug}`}
          className="group rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
        >
          <div className="overflow-hidden">
            {/* Image: Changed from aspect-square to fixed small height (h-32) */}
            <img
              src={item.image}
              alt={item.name}
              className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80";
              }}
            />
          </div>

          {/* Content: Reduced padding and font sizes */}
          <div className="p-3 flex flex-col flex-grow">
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-[#EDB446] transition-colors">
              {item.name}
            </h3>
            
            <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">
              {item.description}
            </p>

            {/* Decoration: Made smaller and pushed to bottom */}
            <div className="mt-auto pt-3">
               <div className="h-0.5 w-8 rounded-full bg-[#EDB446]/50 group-hover:bg-[#EDB446] transition-colors" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
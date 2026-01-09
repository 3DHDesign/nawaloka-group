import { Link } from "react-router-dom";
import { SUBSIDIARIES } from "../../data/subsidiaries";

export default function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SUBSIDIARIES.map((item) => (
        <Link
          key={item.slug}
          to={`/services/${item.slug}`}
          className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
        >
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80";
              }}
            />
          </div>

          <div className="p-5">
            <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
              {item.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {item.description}
            </p>

            <div className="mt-4 h-1 w-12 rounded-full bg-[#EDB446]" />
          </div>
        </Link>
      ))}
    </div>
  );
}

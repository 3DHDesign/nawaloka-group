import { FaLinkedinIn } from "react-icons/fa";

type Person = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
};

const PEOPLE: Person[] = [
  {
    name: "Mr. A. Perera",
    role: "Director, Corporate Strategy",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ms. S. Fernando",
    role: "Director, Healthcare Operations",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Mr. R. Wijesinghe",
    role: "Director, Finance & Governance",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Chief Executive Officer",
    role: "Group Operations",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Chief Medical Officer",
    role: "Clinical Excellence",
    image: "https://images.unsplash.com/photo-1551438632-e8c7d0d0f0f1?auto=format&fit=crop&w=1200&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Head of Technology",
    role: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=1200&q=80",
    linkedin: "https://www.linkedin.com/",
  },
];

export default function LeadershipSection() {
  return (
    <section className="container-wide py-20">
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-900">Leadership</h2>
        <p className="mt-4 text-sm text-gray-600">
          Experienced leaders guiding the organisation with strategy,
          governance, and operational excellence.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PEOPLE.map((p) => (
          <LeaderCard key={p.name} person={p} />
        ))}
      </div>
    </section>
  );
}

function LeaderCard({ person }: { person: Person }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={person.image}
          alt={person.name}
          className="h-[360px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* LinkedIn */}
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A66C2] shadow hover:scale-105 transition"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn size={18} />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          {person.name}
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          {person.role}
        </p>
      </div>
    </div>
  );
}

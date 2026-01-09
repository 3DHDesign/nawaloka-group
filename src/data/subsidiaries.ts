export type Person = {
    name: string;
    role: string;
    image: string;
    linkedin?: string;
  };
  
  export type Service = {
    slug: string;
    name: string;
    image: string;
    description: string;
  
    // ✅ NEW (for richer detail pages)
    about: string;
    capabilities: string[];
    whyChooseUs: string;
  
    gallery: string[];
    chairman: Person;
    management: Person[];
  };
  
  const avatar = (id: number) => `https://i.pravatar.cc/900?img=${id}`;
  
  // ✅ reuse these for all companies (you can customize later)
  const DEFAULT_CAPABILITIES = [
    "End-to-end planning and execution",
    "Experienced technical and operations team",
    "Quality control and compliance-driven workflows",
    "Modern tools, equipment, and process discipline",
    "Islandwide delivery and reliable support",
  ];
  
  const makeAbout = (name: string) =>
    `${name} is a key part of the Nawaloka Group portfolio, operating with a structured governance model and a strong focus on quality delivery. Our teams collaborate with clients and stakeholders to ensure every engagement meets operational standards, safety requirements, and long-term sustainability goals. This service is built to scale efficiently while maintaining consistency, accountability, and trust.`;
  
  const makeWhy = () =>
    `Nawaloka services are trusted for consistent delivery, transparent governance, and the ability to execute at scale without compromising quality. Our leadership-driven approach ensures accountability, strong coordination, and long-term value for clients and partners.`;
  
  export const SUBSIDIARIES: Service[] = [
    {
      slug: "nawaloka-group",
      name: "Nawaloka Group (Pvt) Ltd",
      image:
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels-listing/hotels-listing-card/itc-ratnadipa.jpg",
      description:
        "Nawaloka Group (Pvt) Ltd functions as the strategic holding and governance arm of the Group, overseeing long-term growth, compliance, and operational excellence across all subsidiaries.",
  
      about: makeAbout("Nawaloka Group (Pvt) Ltd"),
      capabilities: [
        "Strategic planning and group governance",
        "Operational oversight across subsidiaries",
        "Compliance, reporting, and risk controls",
        "Investment planning and portfolio alignment",
        "Performance monitoring and optimization",
      ],
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_d3a3c7c7bd9e4394b9f78acd8bf08c3c~mv2.jpg",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(12),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Chief Executive Officer", role: "Group Operations", image: avatar(32), linkedin: "https://www.linkedin.com/" },
        { name: "Chief Financial Officer", role: "Finance & Governance", image: avatar(68), linkedin: "https://www.linkedin.com/" },
        { name: "Head of HR", role: "People & Culture", image: avatar(47), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "nawaloka-piling",
      name: "Nawaloka Piling (Pvt) Ltd",
      image:
        "https://static.wixstatic.com/media/c47153_d9f06fc32be7431fb9bec039408061d7~mv2.jpg",
      description:
        "Providing specialized piling and foundation engineering solutions for large-scale construction and infrastructure developments.",
  
      about: makeAbout("Nawaloka Piling (Pvt) Ltd"),
      capabilities: [
        "Foundation and piling solutions",
        "Site mobilization and safe execution",
        "Engineering coordination and reporting",
        "Quality inspections and testing",
        "Project scheduling and delivery control",
      ],
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_d9f06fc32be7431fb9bec039408061d7~mv2.jpg",
        "https://images.unsplash.com/photo-1504306661873-ff2f4f1f5fdb",
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(22),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "General Manager", role: "Operations", image: avatar(56), linkedin: "https://www.linkedin.com/" },
        { name: "Project Director", role: "Major Projects", image: avatar(8), linkedin: "https://www.linkedin.com/" },
        { name: "Quality Lead", role: "QA & Safety", image: avatar(41), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "nawaloka-polysacks",
      name: "Nawaloka Polysacks (Pvt) Ltd",
      image:
        "https://static.wixstatic.com/media/c47153_c80aef1094bb44f281bdc97efdc6ae70~mv2.jpg",
      description:
        "Manufacturing durable and high-quality woven polypropylene packaging solutions for industrial and agricultural sectors.",
  
      about: makeAbout("Nawaloka Polysacks (Pvt) Ltd"),
      capabilities: DEFAULT_CAPABILITIES,
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_c80aef1094bb44f281bdc97efdc6ae70~mv2.jpg",
        "https://images.unsplash.com/photo-1581092919535-7146b8d08f3c",
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df52",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(14),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Plant Manager", role: "Manufacturing", image: avatar(19), linkedin: "https://www.linkedin.com/" },
        { name: "Supply Chain Head", role: "Logistics", image: avatar(21), linkedin: "https://www.linkedin.com/" },
        { name: "Quality Manager", role: "Quality Control", image: avatar(27), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "nawaloka-industries",
      name: "Nawaloka Industries (Pvt) Ltd",
      image:
        "https://static.wixstatic.com/media/c47153_1725eaad6ff04903a23bc5c580fb0081~mv2.jpg",
      description:
        "Engaged in diversified industrial manufacturing with a focus on quality, efficiency, and sustainable production.",
  
      about: makeAbout("Nawaloka Industries (Pvt) Ltd"),
      capabilities: DEFAULT_CAPABILITIES,
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_1725eaad6ff04903a23bc5c580fb0081~mv2.jpg",
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
        "https://images.unsplash.com/photo-1581092919535-7146b8d08f3c",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(25),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Operations Director", role: "Operations", image: avatar(33), linkedin: "https://www.linkedin.com/" },
        { name: "Production Head", role: "Manufacturing", image: avatar(35), linkedin: "https://www.linkedin.com/" },
        { name: "Safety Manager", role: "HSE", image: avatar(36), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "nawaloka-enterprises",
      name: "Nawaloka Enterprises (Pvt) Ltd",
      image:
        "https://static.wixstatic.com/media/c47153_68d654be32b24e8f8222ed00e43dedce~mv2.jpg",
      description:
        "Operating trading and distribution businesses across multiple commercial sectors in Sri Lanka.",
  
      about: makeAbout("Nawaloka Enterprises (Pvt) Ltd"),
      capabilities: [
        "Trading and distribution operations",
        "Procurement and vendor coordination",
        "Sales planning and execution support",
        "Inventory handling and delivery workflows",
        "Customer support and service reliability",
      ],
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_68d654be32b24e8f8222ed00e43dedce~mv2.jpg",
        "https://images.unsplash.com/photo-1542744094-24638eff58bb",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(29),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Commercial Director", role: "Trading", image: avatar(31), linkedin: "https://www.linkedin.com/" },
        { name: "Sales Head", role: "Sales", image: avatar(37), linkedin: "https://www.linkedin.com/" },
        { name: "Finance Manager", role: "Finance", image: avatar(39), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "nawaloka-restaurant",
      name: "Nawaloka Restaurant (Pvt) Ltd",
      image:
        "https://static.wixstatic.com/media/c47153_66c6942f0b3a4b5f985e4e1b9530f3ec~mv2.jpg",
      description:
        "Operating hospitality and restaurant services with a focus on quality dining experiences.",
  
      about: makeAbout("Nawaloka Restaurant (Pvt) Ltd"),
      capabilities: [
        "Restaurant operations and service standards",
        "Menu planning and kitchen operations",
        "Customer experience and quality monitoring",
        "Event catering and service delivery",
        "Staff training and operational discipline",
      ],
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_66c6942f0b3a4b5f985e4e1b9530f3ec~mv2.jpg",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(42),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Restaurant Manager", role: "Operations", image: avatar(44), linkedin: "https://www.linkedin.com/" },
        { name: "Executive Chef", role: "Culinary", image: avatar(45), linkedin: "https://www.linkedin.com/" },
        { name: "Customer Experience Lead", role: "CX", image: avatar(46), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "nawaloka-hardware",
      name: "Nawaloka Hardware (Pvt) Ltd",
      image: "https://images.unsplash.com/photo-1631856954913-c751a44490ec",
      description:
        "Retail and wholesale supplier of construction materials and hardware products.",
  
      about: makeAbout("Nawaloka Hardware (Pvt) Ltd"),
      capabilities: [
        "Retail and wholesale operations",
        "Material sourcing and product range management",
        "Delivery coordination and inventory control",
        "Customer support and project supply handling",
        "Quality product standards and reliability",
      ],
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://images.unsplash.com/photo-1631856954913-c751a44490ec",
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
        "https://images.unsplash.com/photo-1590650046871-92c887180603",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(49),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Store Operations Head", role: "Retail", image: avatar(51), linkedin: "https://www.linkedin.com/" },
        { name: "Procurement Manager", role: "Procurement", image: avatar(52), linkedin: "https://www.linkedin.com/" },
        { name: "Inventory Controller", role: "Inventory", image: avatar(53), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "nawaloka-timber",
      name: "Nawaloka Timber Stores (Pvt) Ltd",
      image:
        "https://static.wixstatic.com/media/c47153_48a548e42d5c4f7da5b1d4153185bc6f~mv2.jpg",
      description:
        "Supplying high-quality timber and wood-based products for construction and manufacturing.",
  
      about: makeAbout("Nawaloka Timber Stores (Pvt) Ltd"),
      capabilities: DEFAULT_CAPABILITIES,
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_48a548e42d5c4f7da5b1d4153185bc6f~mv2.jpg",
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(55),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Timber Yard Manager", role: "Operations", image: avatar(56), linkedin: "https://www.linkedin.com/" },
        { name: "Sales Manager", role: "Sales", image: avatar(57), linkedin: "https://www.linkedin.com/" },
        { name: "Logistics Lead", role: "Logistics", image: avatar(58), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "nawaloka-hotel-bakery",
      name: "Nawaloka Hotel & Bakery (Pvt) Ltd",
      image:
        "https://static.wixstatic.com/media/c47153_ce6c95ff26754d898b2d8bdb880edd4d~mv2.jpg",
      description:
        "Operating hotels and bakery services with a commitment to hospitality excellence.",
  
      about: makeAbout("Nawaloka Hotel & Bakery (Pvt) Ltd"),
      capabilities: [
        "Hospitality operations and service standards",
        "Bakery production and quality assurance",
        "Customer service and event coordination",
        "Operational scheduling and team management",
        "Quality and hygiene compliance practices",
      ],
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_ce6c95ff26754d898b2d8bdb880edd4d~mv2.jpg",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(59),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Hotel Manager", role: "Hospitality", image: avatar(60), linkedin: "https://www.linkedin.com/" },
        { name: "Bakery Operations Head", role: "Production", image: avatar(61), linkedin: "https://www.linkedin.com/" },
        { name: "Quality Supervisor", role: "Quality", image: avatar(62), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "nawaloka-development",
      name: "Nawaloka Development (Pvt) Ltd",
      image:
        "https://static.wixstatic.com/media/c47153_a6afe08f893b4fe88817cede9e710102~mv2.jpg",
      description:
        "Real estate development and property investment projects across Sri Lanka.",
  
      about: makeAbout("Nawaloka Development (Pvt) Ltd"),
      capabilities: [
        "Property development planning",
        "Project coordination and delivery control",
        "Stakeholder coordination and reporting",
        "Quality oversight and compliance handling",
        "Long-term asset and portfolio development",
      ],
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_a6afe08f893b4fe88817cede9e710102~mv2.jpg",
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(63),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Development Director", role: "Real Estate", image: avatar(64), linkedin: "https://www.linkedin.com/" },
        { name: "Project Manager", role: "Projects", image: avatar(65), linkedin: "https://www.linkedin.com/" },
        { name: "Planning Lead", role: "Planning", image: avatar(66), linkedin: "https://www.linkedin.com/" },
      ],
    },
  
    {
      slug: "kamar-lanka",
      name: "Kamar Lanka (Pvt) Ltd",
      image:
        "https://static.wixstatic.com/media/c47153_b620048f44274d09b84f96bdea72cf8f~mv2.jpg",
      description:
        "Engaged in specialized manufacturing and export-oriented operations.",
  
      about: makeAbout("Kamar Lanka (Pvt) Ltd"),
      capabilities: DEFAULT_CAPABILITIES,
      whyChooseUs: makeWhy(),
  
      gallery: [
        "https://static.wixstatic.com/media/c47153_b620048f44274d09b84f96bdea72cf8f~mv2.jpg",
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df52",
        "https://images.unsplash.com/photo-1581092919535-7146b8d08f3c",
      ],
      chairman: {
        name: "Chairman (Placeholder)",
        role: "Chairman",
        image: avatar(67),
        linkedin: "https://www.linkedin.com/",
      },
      management: [
        { name: "Operations Manager", role: "Manufacturing", image: avatar(68), linkedin: "https://www.linkedin.com/" },
        { name: "Export Manager", role: "Exports", image: avatar(69), linkedin: "https://www.linkedin.com/" },
        { name: "Compliance Officer", role: "Compliance", image: avatar(70), linkedin: "https://www.linkedin.com/" },
      ],
    },
  ];
  
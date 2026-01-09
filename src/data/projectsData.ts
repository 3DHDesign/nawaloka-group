export type ProjectItem = {
    id: string;
    name: string;
    sector:
      | "All"
      | "Healthcare"
      | "Construction"
      | "Engineering"
      | "Technology"
      | "Energy"
      | "Logistics"
      | "RealEstate"
      | "Manufacturing";
    summary: string;
    image: string;
    location: string;
    details?: string;
    status: "Ongoing" | "Completed" | "Planned";
  };
  
  export const PROJECTS: ProjectItem[] = [
    {
      id: "city-medical-complex",
      name: "City Medical Complex Upgrade",
      sector: "Healthcare",
      summary: "Facility modernization and capacity expansion for critical services.",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80",
      location: "Colombo",
      status: "Ongoing",
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
    {
      id: "mixed-use-tower",
      name: "Mixed-Use Tower Development",
      sector: "Construction",
      summary: "High-rise structure with integrated retail and office floors.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      location: "Colombo",
      status: "Ongoing",
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
    {
      id: "industrial-plant-mep",
      name: "Industrial Plant MEP Integration",
      sector: "Engineering",
      summary: "MEP systems delivery with QA-driven commissioning workflow.",
      image:
        "https://images.unsplash.com/photo-1581092919535-7146c2f6432c?auto=format&fit=crop&w=1400&q=80",
      location: "Gampaha",
      status: "Completed",
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
    {
      id: "smart-facility-platform",
      name: "Smart Facility Management Platform",
      sector: "Technology",
      summary: "Digital platform for assets, maintenance tickets, and reporting.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      location: "Colombo",
      status: "Ongoing",
    },
    {
      id: "solar-rooftop-program",
      name: "Solar Rooftop Program",
      sector: "Energy",
      summary: "Distributed solar deployments for operational cost reduction.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
      location: "Western Province",
      status: "Ongoing",
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
    {
      id: "central-warehouse-rollout",
      name: "Central Warehouse Rollout",
      sector: "Logistics",
      summary: "Warehouse layout optimization and inventory handling upgrades.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
      location: "Wattala",
      status: "Completed",
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
    {
      id: "premium-residences",
      name: "Premium Residences Portfolio",
      sector: "RealEstate",
      summary: "Residential development program focusing on long-term asset value.",
      image:
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80",
      location: "Colombo",
      status: "Planned",
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
    {
      id: "quality-lab-upgrade",
      name: "Quality Lab Upgrade",
      sector: "Manufacturing",
      summary: "Testing capacity improvements and compliance-driven instrumentation.",
      image:
        "https://images.unsplash.com/photo-1582719478185-2bbf6f6f22b5?auto=format&fit=crop&w=1400&q=80",
      location: "Kalutara",
      status: "Ongoing",
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
    {
      id: "bridge-rehab",
      name: "Bridge Rehabilitation Program",
      sector: "Construction",
      summary: "Structural reinforcement and surface restoration package.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      location: "Southern Province",
      status: "Completed",  
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
    {
      id: "data-center-fitout",
      name: "Tier Data Center Fit-Out",
      sector: "Engineering",
      summary: "Power, cooling, and redundancy implementation for uptime targets.",
      image:
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1400&q=80",
      location: "Colombo",
      status: "Ongoing",
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
    {
      id: "fleet-optimization",
      name: "Fleet & Route Optimization",
      sector: "Logistics",
      summary: "Operational efficiency program using routing and scheduling logic.",
      image:
        "https://images.unsplash.com/photo-1586528116493-7a7b0c3e2c76?auto=format&fit=crop&w=1400&q=80",
      location: "Islandwide",
      status: "Planned",
      details:
  "Scope includes design coordination, phased execution, and commissioning to operational standards.",

    },
  ];
  
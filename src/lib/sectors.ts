import {
  Stethoscope,
  HeartHandshake,
  Warehouse,
  UtensilsCrossed,
  SprayCan,
  Briefcase,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface Sector {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  roles: string[];
}

export const SECTORS: Sector[] = [
  {
    slug: "healthcare",
    title: "Healthcare & Care",
    short: "Healthcare Assistants, Security Guards and Care Assistants for care homes, supported living and community services.",
    description:
      "We supply trained healthcare and care professionals to care homes, supported living services and community providers across the UK on temporary, permanent and ad-hoc contracts.",
    icon: Stethoscope,
    roles: ["Healthcare Assistant", "Security Guard", "Care Assistant", "Senior Carer"],
  },
  {
    slug: "industrial",
    title: "Industrial & Warehouse",
    short: "Reliable warehouse operatives, pickers, packers and forklift drivers for logistics and distribution.",
    description:
      "From single-shift cover to large seasonal staffing projects, we mobilise warehouse and industrial teams quickly and dependably.",
    icon: Warehouse,
    roles: ["Warehouse Operative", "Picker / Packer", "FLT Driver", "Production Operative"],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    short: "Front and back of house staff for hotels, venues, restaurants and events.",
    description:
      "Our hospitality candidates are screened, referenced and ready to step into hotels, venues, restaurants and events across the UK.",
    icon: UtensilsCrossed,
    roles: ["Waiting Staff", "Kitchen Porter", "Housekeeper", "Front of House"],
  },
  {
    slug: "cleaning",
    title: "Cleaning & Facilities",
    short: "Commercial cleaners and facilities staff for offices, schools and healthcare environments.",
    description:
      "We provide cleaners and facilities staff trained for commercial, healthcare and educational environments, with cover available at short notice.",
    icon: SprayCan,
    roles: ["Commercial Cleaner", "Housekeeping Staff", "Facilities Assistant"],
  },
  {
    slug: "administration",
    title: "Administration",
    short: "Office administrators, receptionists and customer service candidates.",
    description:
      "Professional administrative and office support candidates for small businesses, agencies and corporate teams.",
    icon: Briefcase,
    roles: ["Administrator", "Receptionist", "Data Entry", "Customer Service"],
  },
  {
    slug: "temporary",
    title: "Temporary Staffing",
    short: "Short-notice cover, holiday and seasonal staffing across every sector we serve.",
    description:
      "Our temp desk handles short-notice cover, holiday and weekend rotas and seasonal staffing surges, with a single point of contact for employers.",
    icon: Clock,
    roles: ["Same-Day Cover", "Holiday Rota", "Seasonal Staffing"],
  },
];

export { HeartHandshake };
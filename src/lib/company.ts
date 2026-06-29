export const COMPANY = {
  brand: "Job Ladder Recruiting",
  legalName: "Job Ladder Recruitment Agency Limited",
  companyNumber: "15431889",
  email: "info@jobladderrecruiting.com",
  phone: "+447346457702",
  phoneDisplay: "+44 7346 457702",
  domain: "https://jobladderrecruiting.com",
  address: {
    city: "London",
    country: "UK",
    display: "London, UK",
  },
  hours: [
    { label: "Monday – Friday", value: "8:00 – 18:00" },
    { label: "Saturday", value: "9:00 – 13:00" },
    { label: "Sunday", value: "Closed" },
  ],
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/find-jobs", label: "Find Jobs" },
  { to: "/hire-staff", label: "Hire Staff" },
  { to: "/sectors", label: "Sectors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
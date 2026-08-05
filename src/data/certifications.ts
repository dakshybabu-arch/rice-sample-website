export interface Certification {
  id: string;
  name: string;
  shortName: string;
  description: string;
  issueDate: string;
  icon: string; // emoji or icon identifier
  color: string; // accent color
}

export const certifications: Certification[] = [
  {
    id: "iso",
    name: "ISO 22000:2018 Certification",
    shortName: "ISO 22000",
    description:
      "International standard for food safety management systems. This certification demonstrates our commitment to controlling food safety hazards throughout the entire supply chain, from farm to consumer.",
    issueDate: "January 2023",
    icon: "🛡️",
    color: "#1565C0",
  },
  {
    id: "fssai",
    name: "FSSAI License",
    shortName: "FSSAI",
    description:
      "Food Safety and Standards Authority of India license ensuring all our products meet the highest domestic food safety and quality standards mandated by the Government of India.",
    issueDate: "March 2022",
    icon: "✅",
    color: "#2E7D32",
  },
  {
    id: "haccp",
    name: "HACCP Certification",
    shortName: "HACCP",
    description:
      "Hazard Analysis and Critical Control Points certification validating our systematic approach to food safety. We identify, evaluate, and control hazards at every stage of production.",
    issueDate: "June 2023",
    icon: "🔬",
    color: "#E65100",
  },
  {
    id: "apeda",
    name: "APEDA Registration",
    shortName: "APEDA",
    description:
      "Agricultural and Processed Food Products Export Development Authority registration authorizing us to export agricultural products from India to international markets worldwide.",
    issueDate: "September 2021",
    icon: "🌍",
    color: "#4527A0",
  },
  {
    id: "organic",
    name: "Organic Certification (NPOP/NOP)",
    shortName: "Organic",
    description:
      "Certified under India's National Programme for Organic Production (NPOP) and US National Organic Program (NOP), ensuring our organic products meet the strictest global standards for organic agriculture.",
    issueDate: "February 2024",
    icon: "🌿",
    color: "#33691E",
  },
  {
    id: "export-license",
    name: "Export License (DGFT)",
    shortName: "Export License",
    description:
      "Directorate General of Foreign Trade export license enabling us to ship our premium rice products to over 40 countries across Asia, the Middle East, Europe, and North America.",
    issueDate: "November 2020",
    icon: "📋",
    color: "#AD1457",
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact Us", href: "/contact" },
  ],
  products: [
    { label: "Basmati Rice", href: "/products#basmati" },
    { label: "Sona Masoori", href: "/products#sona-masoori" },
    { label: "Ponni Rice", href: "/products#ponni" },
    { label: "Jeerakasala Rice", href: "/products#jeerakasala" },
    { label: "Brown Rice", href: "/products#brown-rice" },
    { label: "Organic Rice", href: "/products#organic-rice" },
  ],
};

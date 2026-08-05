import Link from "next/link";
import { company } from "@/data/company";
import { footerLinks } from "@/data/navigation";
import { contactInfo } from "@/data/contact";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialIcons = [
  { icon: FaFacebookF, href: company.socialLinks.facebook, label: "Facebook" },
  { icon: FaInstagram, href: company.socialLinks.instagram, label: "Instagram" },
  { icon: FaLinkedinIn, href: company.socialLinks.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: company.socialLinks.twitter, label: "Twitter" },
  { icon: FaYoutube, href: company.socialLinks.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-[#0d3311] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">R</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                {company.name}
              </span>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              {company.subtitle}
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary-200 hover:bg-gold-500 hover:text-white transition-all duration-300"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 text-sm hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-gold-400">
              Our Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 text-sm hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-gold-400">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone.primary}`}
                  className="flex items-start gap-3 text-primary-200 hover:text-gold-400 transition-colors duration-300 group"
                >
                  <FaPhoneAlt className="mt-1 text-gold-500/70 group-hover:text-gold-400" size={14} />
                  <div className="text-sm">
                    <div>{contactInfo.phone.primary}</div>
                    <div>{contactInfo.phone.secondary}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email.general}`}
                  className="flex items-start gap-3 text-primary-200 hover:text-gold-400 transition-colors duration-300 group"
                >
                  <FaEnvelope className="mt-1 text-gold-500/70 group-hover:text-gold-400" size={14} />
                  <span className="text-sm">{contactInfo.email.general}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-200">
                <FaMapMarkerAlt className="mt-1 text-gold-500/70 shrink-0" size={14} />
                <span className="text-sm leading-relaxed">
                  {contactInfo.address.line1},<br />
                  {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.pincode},<br />
                  {contactInfo.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-primary-300 text-xs">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-primary-300 text-xs hover:text-gold-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-primary-300/50">|</span>
            <Link
              href="/terms"
              className="text-primary-300 text-xs hover:text-gold-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

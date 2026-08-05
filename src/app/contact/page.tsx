import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/data/contact";
import { company } from "@/data/company";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with RiceVista Exports for premium Indian rice inquiries, export quotes, bulk orders, and partnership opportunities.",
};

const socialIcons = [
  { icon: FaFacebookF, href: company.socialLinks.facebook, label: "Facebook" },
  { icon: FaInstagram, href: company.socialLinks.instagram, label: "Instagram" },
  { icon: FaLinkedinIn, href: company.socialLinks.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: company.socialLinks.twitter, label: "Twitter" },
  { icon: FaYoutube, href: company.socialLinks.youtube, label: "YouTube" },
];

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.number.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    contactInfo.whatsapp.message
  )}`;

  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner relative h-[45vh] min-h-[360px] flex items-center justify-center">
        <Image
          src="/images/hero-rice-field.png"
          alt="Contact RiceVista Exports"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/70 to-primary-800/75 z-[1]" />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto">
              We&apos;re here to assist with your domestic and international rice sourcing requirements
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT MAIN ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Contact Details Side */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="right">
                <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 space-y-6">
                  <h3 className="font-heading text-2xl font-bold text-primary-900 mb-4">
                    Get in Touch
                  </h3>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700 shrink-0">
                      <FaPhoneAlt size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Phone</h4>
                      <a
                        href={`tel:${contactInfo.phone.primary}`}
                        className="block text-gray-600 text-sm hover:text-primary-700 transition-colors"
                      >
                        {contactInfo.phone.primary}
                      </a>
                      <a
                        href={`tel:${contactInfo.phone.secondary}`}
                        className="block text-gray-600 text-sm hover:text-primary-700 transition-colors"
                      >
                        {contactInfo.phone.secondary}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700 shrink-0">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Email</h4>
                      <a
                        href={`mailto:${contactInfo.email.general}`}
                        className="block text-gray-600 text-sm hover:text-primary-700 transition-colors"
                      >
                        {contactInfo.email.general}
                      </a>
                      <a
                        href={`mailto:${contactInfo.email.exports}`}
                        className="block text-gray-600 text-sm hover:text-primary-700 transition-colors"
                      >
                        {contactInfo.email.exports} (Exports)
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700 shrink-0">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Head Office</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {contactInfo.address.line1}, {contactInfo.address.line2},<br />
                        {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.pincode},<br />
                        {contactInfo.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700 shrink-0">
                      <FaClock size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600 text-sm">{contactInfo.businessHours.weekdays}</p>
                      <p className="text-gray-600 text-sm">{contactInfo.businessHours.saturday}</p>
                      <p className="text-gray-600 text-sm">{contactInfo.businessHours.sunday}</p>
                    </div>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                    >
                      <FaWhatsapp size={20} />
                      Chat on WhatsApp Now
                    </a>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Connect with Us</h4>
                    <div className="flex gap-3">
                      {socialIcons.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-sm"
                        >
                          <social.icon size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAPS EMBED ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100 h-[400px]">
              <iframe
                title="RiceVista Exports Location"
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

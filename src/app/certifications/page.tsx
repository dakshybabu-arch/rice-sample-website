import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/data/certifications";
import { FaDownload, FaCalendarAlt, FaArrowRight, FaShieldAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "RiceVista Exports holds ISO 22000, FSSAI, HACCP, APEDA, Organic, and Export License certifications — ensuring the highest quality and safety standards for all our rice products.",
};

export default function CertificationsPage() {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner relative h-[45vh] min-h-[360px] flex items-center justify-center">
        <Image
          src="/images/hero-rice-field.png"
          alt="Quality certifications"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/70 to-primary-800/75 z-[1]" />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Certifications
            </h1>
            <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto">
              Internationally recognized standards that validate our commitment to excellence
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-primary-700 text-2xl" />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Quality is not just a promise at RiceVista — it&apos;s validated by the world&apos;s most
              rigorous certification bodies. Our comprehensive portfolio of certifications ensures that
              every grain of rice we produce meets the highest standards for food safety, quality
              management, and environmental responsibility.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CERTIFICATIONS GRID ===== */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  {/* Color accent top bar */}
                  <div
                    className="h-1.5"
                    style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}88)` }}
                  />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon & Name */}
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                        style={{ backgroundColor: `${cert.color}15` }}
                      >
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary-900 mb-1">
                          {cert.shortName}
                        </h3>
                        <p className="text-gray-500 text-xs">{cert.name}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      {cert.description}
                    </p>

                    {/* Issue Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                      <FaCalendarAlt size={12} />
                      <span>Issued: {cert.issueDate}</span>
                    </div>

                    {/* Download Button */}
                    <button
                      className="w-full px-5 py-3 border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <FaDownload size={12} />
                      Download Certificate
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUALITY ASSURANCE CTA ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-rice-field.png"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary-900/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Need verification of our certifications? Our compliance team is ready to provide
              documentation and answer any quality-related inquiries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Contact Quality Team
              <FaArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

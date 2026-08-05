import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import { FaDownload, FaEnvelope, FaBoxOpen, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore RiceVista's premium collection of Indian rice — Basmati, Sona Masoori, Ponni, Jeerakasala, Brown Rice, and Organic Rice. Available in multiple packaging options for export.",
};

export default function ProductsPage() {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner relative h-[45vh] min-h-[360px] flex items-center justify-center">
        <Image
          src="/images/hero-rice-field.png"
          alt="Premium rice products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/70 to-primary-800/75 z-[1]" />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto">
              Premium Indian rice varieties for discerning markets worldwide
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Premium Rice Collection"
            subtitle="Each variety is carefully selected, processed, and packaged to deliver exceptional quality and flavor."
          />

          <div className="space-y-16">
            {products.map((product, index) => (
              <ScrollReveal key={product.id}>
                <div
                  id={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    index % 2 !== 0 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Product Image */}
                  <div className={index % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <div className="relative group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={700}
                        height={500}
                        className="object-cover w-full h-[350px] md:h-[420px] group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-5 left-5">
                        <span className="px-4 py-1.5 bg-primary-700/90 text-white text-sm font-medium rounded-full backdrop-blur-sm shadow-md">
                          {product.grainType}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className={index % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary-800 uppercase tracking-wider mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-gray-600 text-sm"
                          >
                            <FaCheckCircle className="text-primary-500 shrink-0" size={14} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Packaging */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-primary-800 uppercase tracking-wider mb-3">
                        <FaBoxOpen className="inline mr-2" size={14} />
                        Available Packaging
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.packaging.map((pack) => (
                          <span
                            key={pack}
                            className="px-3 py-1.5 bg-cream text-earth-600 text-xs font-medium rounded-lg border border-earth-100"
                          >
                            {pack}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button className="px-6 py-3 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold rounded-xl hover:from-primary-800 hover:to-primary-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-sm">
                        <FaDownload size={14} />
                        Download Brochure
                      </button>
                      <Link
                        href="/contact"
                        className="px-6 py-3 border-2 border-gold-500 text-gold-700 font-semibold rounded-xl hover:bg-gold-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-sm"
                      >
                        <FaEnvelope size={14} />
                        Send Enquiry
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < products.length - 1 && (
                  <div className="border-b border-gray-100 mt-16" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
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
              Need Custom Packaging or Bulk Orders?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              We offer flexible packaging solutions and competitive pricing for bulk orders. Contact our exports team for a customized quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Request a Quote
              <FaEnvelope size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

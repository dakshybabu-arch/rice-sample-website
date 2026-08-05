import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { company } from "@/data/company";
import { FaBullseye, FaEye, FaGlobeAmericas, FaSeedling, FaLeaf } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RiceVista Exports — our story, mission, farming process, manufacturing facility, export capabilities, and commitment to sustainability.",
};

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className="page-banner relative h-[45vh] min-h-[360px] flex items-center justify-center">
        <Image
          src="/images/hero-rice-field.png"
          alt="Rice fields"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/70 to-primary-800/75 z-[1]" />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto">
              A legacy of quality, a vision for the future
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="gold-line" />
                  <span className="text-gold-600 text-sm font-medium tracking-widest uppercase">
                    Our Story
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-8 leading-tight">
                  Rooted in Heritage, Growing with Excellence
                </h2>
                <div className="space-y-5">
                  {company.story.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-hero">
                  <Image
                    src="/images/hero-rice-field.png"
                    alt="RiceVista farming heritage"
                    width={700}
                    height={500}
                    className="object-cover w-full h-[400px] lg:h-[500px]"
                    loading="lazy"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-100 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-gray-100 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 mb-6">
                  <FaBullseye className="text-2xl" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {company.mission}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-gray-100 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center text-gold-700 mb-6">
                  <FaEye className="text-2xl" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {company.vision}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FARMING PROCESS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="From Farm to Fork"
            subtitle="Our meticulous process ensures every grain of rice meets the highest quality standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {company.farmingProcess.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <div className="relative bg-white rounded-2xl p-8 shadow-card border border-gray-100 h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                  <div className="absolute -top-4 -left-2 w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary-900 mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MANUFACTURING FACILITY ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-hero">
                <Image
                  src="/images/ponni.png"
                  alt="RiceVista manufacturing facility"
                  width={700}
                  height={500}
                  className="object-cover w-full h-[400px]"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="gold-line" />
                  <span className="text-gold-600 text-sm font-medium tracking-widest uppercase">
                    Our Facility
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                  State-of-the-Art Manufacturing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our 50,000 sq. ft. manufacturing facility in Karnal, Haryana is equipped with the latest
                  rice processing technology from Japan and Switzerland. From color sorters to precision graders,
                  every machine is calibrated to deliver consistent, premium-quality rice.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated sorting & grading lines",
                    "Climate-controlled storage warehouses",
                    "In-house quality testing laboratory",
                    "Food-grade packaging facility",
                    "Capacity: 200 metric tons per day",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="w-2 h-2 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== EXPORT CAPABILITIES ===== */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Global Export Capabilities"
            subtitle={company.exportCapabilities.description}
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {company.exportCapabilities.regions.map((region, index) => (
              <ScrollReveal key={region} delay={index * 0.08}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <FaGlobeAmericas className="text-gold-400 text-2xl mx-auto mb-3" />
                  <p className="text-white text-sm font-medium">{region}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaSeedling className="text-primary-500" />
                  <span className="text-primary-600 text-sm font-medium tracking-widest uppercase">
                    Sustainability
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                  {company.sustainability.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {company.sustainability.description}
                </p>
                <ul className="space-y-4">
                  {company.sustainability.initiatives.map((initiative, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                        <FaLeaf className="text-primary-600 text-xs" />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{initiative}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-hero">
                  <Image
                    src="/images/brown-rice.png"
                    alt="Sustainable rice farming"
                    width={700}
                    height={500}
                    className="object-cover w-full h-[400px] lg:h-[500px]"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

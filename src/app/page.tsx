"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { certifications } from "@/data/certifications";
import { testimonials } from "@/data/testimonials";
import {
  FaShieldAlt,
  FaGlobeAmericas,
  FaLeaf,
  FaStar,
  FaArrowRight,
  FaQuoteLeft,
  FaAward,
} from "react-icons/fa";
import { GiWheat } from "react-icons/gi";

// ===== Animated Counter Component =====
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ===== Why Choose Us Icons =====
const whyIcons: Record<string, React.ReactNode> = {
  quality: <FaShieldAlt className="text-2xl" />,
  heritage: <GiWheat className="text-2xl" />,
  global: <FaGlobeAmericas className="text-2xl" />,
  sustainability: <FaLeaf className="text-2xl" />,
};

export default function HomePage() {
  const heroRef = useRef(null);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const heroScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ scale: heroScale }}>
          <Image
            src="/images/hero-rice-field.png"
            alt="Lush green rice paddy fields at golden hour"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary-900/80 via-primary-900/60 to-primary-900/40" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="gold-line !w-10" />
              <span className="text-gold-300 text-sm font-medium tracking-widest uppercase">
                Premium Indian Rice
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              {company.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-primary-100 max-w-xl leading-relaxed mb-10"
            >
              {company.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-sm sm:text-base"
              >
                Explore Products
                <FaArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Premium Rice Collection"
            subtitle="Discover our handpicked selection of the finest Indian rice varieties, sourced from the best farms across the country."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.15}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="relative h-64 overflow-hidden bg-cream">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-700/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {product.grainType}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold hover:text-gold-700 transition-colors group/link"
                    >
                      Learn More
                      <FaArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-700 text-primary-700 font-semibold rounded-xl hover:bg-primary-700 hover:text-white transition-all duration-300"
            >
              View All Products
              <FaArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose RiceVista"
            subtitle="We combine heritage craftsmanship with modern technology to deliver rice of unparalleled quality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700">
                    {whyIcons[item.icon]}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY STATS ===== */}
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {company.stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400 mb-3">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-primary-200 text-sm md:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS PREVIEW ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Certifications"
            subtitle="Internationally recognized certifications that validate our commitment to quality, safety, and sustainability."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.id} delay={index * 0.08}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2 border border-gray-100 group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <p className="font-semibold text-sm text-primary-900">
                    {cert.shortName}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
            >
              <FaAward />
              View All Certifications
              <FaArrowRight size={12} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by leading importers, retailers, and food companies across the globe."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 h-full flex flex-col">
                  <FaQuoteLeft className="text-primary-200 text-2xl mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-gold-400" size={14} />
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-heading font-bold text-primary-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{testimonial.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-rice-field.png"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Source Premium Indian Rice?
            </h2>
            <p className="text-primary-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Whether you need bulk quantities for export or custom packaging for retail, our team is ready to craft the perfect solution for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                Get a Quote
                <FaArrowRight size={14} />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                Learn About Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

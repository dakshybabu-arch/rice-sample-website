import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ricevista.com"),
  title: {
    default: "RiceVista Exports — Premium Indian Rice Manufacturer & Exporter",
    template: "%s | RiceVista Exports",
  },
  description:
    "RiceVista Exports is India's leading premium rice manufacturer and exporter. We offer Basmati, Sona Masoori, Ponni, Jeerakasala, Brown, and Organic rice to 40+ countries worldwide.",
  keywords: [
    "rice exporter India",
    "premium Basmati rice",
    "Indian rice manufacturer",
    "Sona Masoori rice",
    "organic rice exporter",
    "bulk rice supplier",
    "rice export company",
  ],
  authors: [{ name: "RiceVista Exports" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ricevista.com",
    siteName: "RiceVista Exports",
    title: "RiceVista Exports — Premium Indian Rice Manufacturer & Exporter",
    description:
      "Premium Indian rice, cultivated with heritage, processed with precision, exported with pride. Serving 40+ countries worldwide.",
    images: [
      {
        url: "/images/hero-rice-field.png",
        width: 1200,
        height: 630,
        alt: "RiceVista Exports — Premium Rice Fields",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RiceVista Exports — Premium Indian Rice Manufacturer & Exporter",
    description:
      "Premium Indian rice, cultivated with heritage, processed with precision, exported with pride.",
    images: ["/images/hero-rice-field.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Schema.org Organization structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RiceVista Exports",
  description:
    "India's leading premium rice manufacturer and exporter, serving Basmati, Sona Masoori, Ponni, and organic rice to 40+ countries.",
  url: "https://www.ricevista.com",
  logo: "https://www.ricevista.com/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-184-225-6789",
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 42, Industrial Area Phase II",
    addressLocality: "Karnal",
    addressRegion: "Haryana",
    postalCode: "132001",
    addressCountry: "IN",
  },
  sameAs: [
    "https://facebook.com/ricevista",
    "https://instagram.com/ricevista",
    "https://linkedin.com/company/ricevista",
    "https://twitter.com/ricevista",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics placeholder — replace GA_MEASUREMENT_ID with your actual ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
        {/* Google Search Console verification placeholder */}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GSC_VERIFICATION}
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

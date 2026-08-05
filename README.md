# RiceVista Exports — Premium Rice Manufacturing & Export Website

A production-ready, high-performance, SEO-optimized, luxury corporate web application for **RiceVista Exports**, a leading Indian rice manufacturing and export company.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Key Features

- **Luxury Design & Branding**: Earthy, emerald green, and gold color scheme tailored for luxury agricultural branding.
- **5 Core Pages**:
  1. **Home**: Hero banner with parallax effect, featured products, why choose us, animated counter stats, certifications preview, testimonials, and contact CTA.
  2. **About Us**: Company story, mission & vision cards, farm-to-fork process timeline, manufacturing facility highlight, global export capabilities, and sustainability commitment.
  3. **Products**: Interactive cards for Basmati, Sona Masoori, Ponni, Jeerakasala, Brown Rice, and Organic Rice with detailed grain specifications, packaging options, and brochure/enquiry actions.
  4. **Certifications**: Showcase of ISO 22000, FSSAI, HACCP, APEDA, Organic, and DGFT Export License with issue dates and download actions.
  5. **Contact Us**: Responsive grid with client-validated contact form (with honeypot spam protection), business details, direct WhatsApp link, and embedded Google Maps location.
- **CMS-Ready Architecture**: All editable content (products, company details, certs, contact info) is centralized in `src/data/` for easy content management without editing layout code.
- **SEO Ready**: Schema.org JSON-LD structured data, dynamic XML Sitemap (`sitemap.ts`), `robots.txt`, Google Analytics & Search Console hooks, OpenGraph & Twitter Cards metadata.
- **Accessible & Responsive**: Optimized for screen sizes from 375px mobile to 4K displays.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + `react-intersection-observer`
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, HeroIcons, GameIcons)

---

## 📂 Project Structure

```
c:\Users\diyad\OneDrive\Desktop\rice\
├── public/
│   ├── images/               # WebP & PNG product & banner images
│   └── robots.txt            # Search engine directives
├── src/
│   ├── app/
│   │   ├── about/            # About Us page
│   │   ├── api/contact/      # Serverless API endpoint for contact form
│   │   ├── certifications/   # Certifications page
│   │   ├── contact/          # Contact page
│   │   ├── products/         # Products showcase page
│   │   ├── globals.css       # Design system tokens & global styling
│   │   ├── layout.tsx        # Root layout (Fonts, SEO, Metadata, JSON-LD)
│   │   ├── page.tsx          # Home page
│   │   └── sitemap.ts        # XML Sitemap generator
│   ├── components/           # Reusable UI components
│   │   ├── AnimatedCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── SectionHeading.tsx
│   │   └── WhatsAppButton.tsx
│   └── data/                 # ✏️ CMS Content Data Files
│       ├── certifications.ts # Certifications details
│       ├── company.ts        # Company story, mission, stats, sustainability
│       ├── contact.ts        # Address, numbers, hours, map URL
│       ├── navigation.ts     # Header & Footer links
│       ├── products.ts       # Products specs & features
│       └── testimonials.ts   # Client reviews & ratings
```

---

## ✏️ How to Edit Content (CMS Management)

You can easily update company details, add products, or modify certifications without touching HTML/CSS code:

1. **Edit Products**: Open `src/data/products.ts` to add or modify product names, descriptions, grain types, packaging options, or images.
2. **Edit Company Story & Stats**: Open `src/data/company.ts` to update the mission, vision, stats numbers, or farm process steps.
3. **Edit Contact Details**: Open `src/data/contact.ts` to change phone numbers, email addresses, office location, or WhatsApp text.
4. **Edit Certifications**: Open `src/data/certifications.ts` to update certificate names or issue dates.

---

## 🚀 Getting Started Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## ☁️ Deployment Instructions (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and build the site.
4. Add any environment variables (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`) in Project Settings -> Environment Variables.

---

## 📄 License

© 2026 RiceVista Exports. All rights reserved.

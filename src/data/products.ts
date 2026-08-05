export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  grainType: string;
  packaging: string[];
  features: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "basmati",
    name: "Basmati Rice",
    slug: "basmati-rice",
    description:
      "Premium long-grain aromatic rice known for its exquisite fragrance, fluffy texture, and elegant elongation upon cooking.",
    longDescription:
      "Our Basmati Rice is sourced from the foothills of the Himalayas, where the unique climate and soil conditions produce the world's finest aromatic rice. Each grain is aged to perfection, ensuring maximum elongation and the signature nutty aroma that has made Basmati the choice of royal kitchens for centuries.",
    grainType: "Extra Long Grain",
    packaging: ["1 kg", "5 kg", "10 kg", "25 kg", "50 kg Bulk"],
    features: [
      "Aged for 12+ months",
      "2x elongation on cooking",
      "Rich aroma",
      "Non-sticky texture",
      "Pesticide-free",
    ],
    image: "/images/basmati.png",
  },
  {
    id: "sona-masoori",
    name: "Sona Masoori Rice",
    slug: "sona-masoori-rice",
    description:
      "Lightweight, aromatic medium-grain rice ideal for everyday cooking. Low in starch and calories, perfect for health-conscious consumers.",
    longDescription:
      "Sona Masoori is a premium variety of medium-grain rice grown in the fertile deltas of Andhra Pradesh and Karnataka. Its lightweight texture and subtle aroma make it the preferred choice for daily meals across South India. Our Sona Masoori is carefully processed to retain its natural nutritional value.",
    grainType: "Medium Grain",
    packaging: ["1 kg", "5 kg", "10 kg", "25 kg", "50 kg Bulk"],
    features: [
      "Low glycemic index",
      "Lightweight & fluffy",
      "Easy to digest",
      "Versatile for all dishes",
      "Low starch content",
    ],
    image: "/images/sona-masoori.png",
  },
  {
    id: "ponni",
    name: "Ponni Rice",
    slug: "ponni-rice",
    description:
      "Traditional South Indian parboiled rice with superior taste and nutritional profile. A staple of Tamil Nadu cuisine for generations.",
    longDescription:
      "Ponni Rice is a heritage variety from Tamil Nadu, cultivated in the nutrient-rich Cauvery delta. Our Ponni Rice undergoes a traditional parboiling process that locks in essential vitamins and minerals, giving it a distinctive golden hue and a firm, satisfying texture that pairs perfectly with sambar, rasam, and curries.",
    grainType: "Medium Grain (Parboiled)",
    packaging: ["1 kg", "5 kg", "10 kg", "25 kg", "50 kg Bulk"],
    features: [
      "Rich in thiamine & fiber",
      "Traditional parboiling",
      "Firm, non-sticky texture",
      "Golden hue",
      "High nutritional value",
    ],
    image: "/images/ponni.png",
  },
  {
    id: "jeerakasala",
    name: "Jeerakasala Rice",
    slug: "jeerakasala-rice",
    description:
      "Short-grain aromatic rice with a cumin-like flavor, prized for making biryanis and special occasion dishes.",
    longDescription:
      "Jeerakasala, also known as Kaima or Jeeraga Samba, is a rare and precious short-grain variety native to the Palakkad region of Kerala. Named for its cumin-like aroma, this rice is the secret behind the legendary Malabar Biryani. Its small, fragrant grains absorb spices beautifully, making every dish a culinary masterpiece.",
    grainType: "Short Grain",
    packaging: ["1 kg", "5 kg", "10 kg", "25 kg"],
    features: [
      "Cumin-like aroma",
      "Perfect for biryani",
      "Absorbs spices well",
      "Rare heritage variety",
      "Small, flavorful grains",
    ],
    image: "/images/jeerakasala.png",
  },
  {
    id: "brown-rice",
    name: "Brown Rice",
    slug: "brown-rice",
    description:
      "Whole grain unpolished rice retaining its nutrient-rich bran layer. A superfood packed with fiber, vitamins, and minerals.",
    longDescription:
      "Our Brown Rice is minimally processed to retain the bran and germ layers, preserving its natural fiber, magnesium, and B-vitamins. Grown using sustainable farming practices, this wholesome grain supports a healthy lifestyle while delivering a satisfying, nutty flavor and chewy texture.",
    grainType: "Whole Grain",
    packaging: ["500 g", "1 kg", "5 kg", "10 kg", "25 kg"],
    features: [
      "High fiber content",
      "Rich in antioxidants",
      "Low glycemic index",
      "Heart-healthy",
      "Sustainably farmed",
    ],
    image: "/images/brown-rice.png",
  },
  {
    id: "organic-rice",
    name: "Organic Rice",
    slug: "organic-rice",
    description:
      "Certified organic rice grown without synthetic pesticides or fertilizers. Pure, clean, and responsibly cultivated.",
    longDescription:
      "Our Organic Rice is cultivated on certified organic farms using traditional methods, free from synthetic pesticides, herbicides, and chemical fertilizers. Every grain is traceable from farm to fork, ensuring the highest standards of purity and sustainability. Perfect for health-conscious consumers who value both quality and environmental responsibility.",
    grainType: "Long Grain (Organic)",
    packaging: ["500 g", "1 kg", "5 kg", "10 kg"],
    features: [
      "100% certified organic",
      "Chemical-free cultivation",
      "Fully traceable",
      "Eco-friendly packaging",
      "Superior purity",
    ],
    image: "/images/organic-rice.png",
  },
];

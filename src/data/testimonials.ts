export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Al-Rashid",
    company: "Gulf Foods Trading LLC",
    role: "Procurement Director",
    quote:
      "RiceVista's Basmati rice is unmatched in quality. The aroma, grain length, and consistency have made them our exclusive supplier for the UAE market. Their export documentation is always impeccable.",
    rating: 5,
    location: "Dubai, UAE",
  },
  {
    id: "t2",
    name: "Sarah Thompson",
    company: "Organic Harvest Co.",
    role: "CEO",
    quote:
      "We've been importing organic rice from RiceVista for three years now. Their commitment to sustainable farming and transparent supply chain has earned our complete trust. Exceptional product quality.",
    rating: 5,
    location: "London, UK",
  },
  {
    id: "t3",
    name: "Rajesh Kumar",
    company: "Krishna Supermarkets",
    role: "General Manager",
    quote:
      "The Sona Masoori and Ponni rice varieties from RiceVista are our bestsellers. Customers love the taste, and we appreciate the reliable supply chain and competitive pricing. A truly professional partner.",
    rating: 5,
    location: "Hyderabad, India",
  },
  {
    id: "t4",
    name: "Kenji Watanabe",
    company: "Asia Pacific Foods Inc.",
    role: "Import Manager",
    quote:
      "RiceVista's attention to quality control and their certifications gave us the confidence to enter a long-term partnership. Their rice consistently exceeds Japanese market standards.",
    rating: 5,
    location: "Tokyo, Japan",
  },
];

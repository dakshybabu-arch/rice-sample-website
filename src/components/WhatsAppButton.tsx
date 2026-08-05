"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/data/contact";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.number.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    contactInfo.whatsapp.message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}

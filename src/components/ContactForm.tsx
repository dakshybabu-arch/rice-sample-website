"use client";

import { useState, FormEvent } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  honeypot: string; // spam protection
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[+]?[\d\s()-]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.message.trim().length > 0 && formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-card p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <FaCheckCircle className="text-primary-600 text-3xl" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary-900 mb-3">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-6">
          Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-card p-8 md:p-10"
      noValidate
    >
      <h3 className="font-heading text-2xl font-bold text-primary-900 mb-2">
        Send Us a Message
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        Fill out the form below and our team will respond within 24 hours.
      </p>

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-6">
          <FaExclamationCircle className="text-red-500 shrink-0" />
          <p className="text-red-700 text-sm">
            Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => handleChange("honeypot", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
            } focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300 text-sm`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="john@company.com"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
            } focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300 text-sm`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
            } focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300 text-sm`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-1.5">
            Company Name
          </label>
          <input
            id="contact-company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Your Company"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300 text-sm"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Your Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us about your requirements, quantities, and delivery preferences..."
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
          } focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300 text-sm resize-none`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold rounded-xl hover:from-primary-800 hover:to-primary-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane size={14} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

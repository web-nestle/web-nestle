"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Loader2,
  Mail
} from "lucide-react";

// Clean SVG Instagram Icon component
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const projectTypes = [
  "Business Website",
  "Landing Page",
  "E-commerce Website",
  "Portfolio Website",
  "Website Redesign",
  "UI/UX Design",
  "Web Animations",
  "Website Optimization",
  "Maintenance & Updates",
  "Custom Web Solution",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    instagram: "",
    projectType: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    instagram: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (name === "email" && errors.email) setErrors((prev) => ({ ...prev, email: "" }));
    if (name === "phone" && errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
    if (name === "instagram" && errors.instagram) setErrors((prev) => ({ ...prev, instagram: "" }));
  };

  const validateInputs = () => {
    let isValid = true;
    let newErrors = { email: "", phone: "", instagram: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please type your correct email id (e.g. name@domain.com)";
      isValid = false;
    }

    const phoneClean = formData.phone.trim();
    if (phoneClean !== "" && phoneClean.length < 7) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    const igClean = formData.instagram.trim();
    if (igClean !== "" && (igClean.length < 2 || igClean.includes(" "))) {
      newErrors.instagram = "Please type a valid username or IG id (e.g. @web_nestle)";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      return;
    }
    if (!formData.business.trim()) {
      setErrorMessage("Please enter your business or brand name.");
      setStatus("error");
      return;
    }

    if (!validateInputs()) {
      setStatus("error");
      setErrorMessage("Please fix the highlighted errors below before submitting.");
      return;
    }

    if (!formData.projectType) {
      setErrorMessage("Please select a project type.");
      setStatus("error");
      return;
    }

    if (!formData.budget) {
      setErrorMessage("Please select a budget range.");
      setStatus("error");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Please provide a brief description of your project.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      if (accessKey && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Inquiry from ${formData.name} (${formData.business})`,
            from_name: formData.name,
            name: formData.name,
            business: formData.business,
            email: formData.email,
            phone: formData.phone.trim() || "Not provided",
            instagram: formData.instagram.trim() || "Not provided",
            project_type: formData.projectType,
            budget: formData.budget,
            message: formData.message,
          }),
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message || "Submission failed");
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setStatus("success");
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or reach out on Instagram.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#07090e] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-pink-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-6 shadow-xl shadow-black/30">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs sm:text-sm font-medium tracking-widest text-slate-200 uppercase">
                  LET&apos;S BUILD SOMETHING
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
                Your next website starts here.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
                Tell us what you&apos;re building, what you need and where you want to go. Drop your details and we&apos;ll get back to you fast.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 space-y-4">
              <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Prefer to talk directly?
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://instagram.com/web_nestle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all shadow-md group cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>@web_nestle</span>
                </a>

                <a
                  href="mailto:web.nestle.og@gmail.com"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all shadow-md group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>web.nestle.og@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-slate-400 font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>WEBNESTLE DIGITAL STUDIO</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0b0f19]/90 border border-slate-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/50 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "error" && errorMessage && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="business" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Business / Brand Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your business or brand"
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Email <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full bg-slate-900/90 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.email ? "border-red-500 ring-1 ring-red-500" : "border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Phone / WhatsApp <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full bg-slate-900/90 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="instagram" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Instagram Handle <span className="text-slate-500 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@yourusername"
                  className={`w-full bg-slate-900/90 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                    errors.instagram ? "border-red-500 ring-1 ring-red-500" : "border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  }`}
                />
                {errors.instagram && (
                  <p className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.instagram}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Project Type <span className="text-pink-400">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select project type...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-slate-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Budget Range <span className="text-pink-400">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select budget range...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-slate-900 text-white">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Tell Us About Your Project <span className="text-pink-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business, what you need and what you're hoping to build..."
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white overflow-hidden shadow-xl shadow-pink-500/30 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 active:scale-[0.99] transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative flex items-center justify-center gap-2 text-base font-semibold">
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Start My Project</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* FULLSCREEN THANK YOU TAKEOVER SCREEN */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-[#07090e]/98 backdrop-blur-3xl flex items-center justify-center px-4 sm:px-6"
          >
            <div className="max-w-lg w-full bg-slate-900/90 border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-purple-500/10 text-center relative">
              
              <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Thanks for Submitting!
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Our team will contact you within <span className="font-semibold text-pink-400">48 hrs</span>. We will send you all the details through email or IG. Stay tuned!
              </p>

              <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 font-medium">Follow us on IG</div>
                    <div className="text-sm font-bold text-white">@web_nestle</div>
                  </div>
                </div>
                <a
                  href="https://instagram.com/web_nestle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity shadow-md shadow-pink-500/20"
                >
                  Follow
                </a>
              </div>

              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({
                    name: "",
                    business: "",
                    email: "",
                    phone: "",
                    instagram: "",
                    projectType: "",
                    message: "",
                    budget: "",
                  });
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-all cursor-pointer shadow-md"
              >
                Back to Website
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

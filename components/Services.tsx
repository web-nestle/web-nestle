"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Zap,
  ShoppingBag,
  UserCheck,
  RefreshCw,
  Layout,
  Activity,
  Gauge,
  Wrench,
  Cpu,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  bestFor: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    description: "Professional websites designed to establish your brand and turn visitors into customers.",
    icon: Globe,
    features: [
      "Custom responsive design",
      "Home and service pages",
      "About and contact sections",
      "Lead-generation elements",
      "Mobile optimization",
      "SEO-ready structure",
    ],
    bestFor: "Businesses, startups and local brands",
  },
  {
    id: "landing-pages",
    number: "02",
    title: "Landing Pages",
    description: "Focused pages designed around one goal — getting visitors to take action.",
    icon: Zap,
    features: [
      "Conversion-focused layouts",
      "Strong CTA sections",
      "Product/service presentation",
      "Mobile-first design",
      "Form integration",
      "Analytics-ready structure",
    ],
    bestFor: "Campaigns, launches and lead generation",
  },
  {
    id: "ecommerce-websites",
    number: "03",
    title: "E-commerce Websites",
    description: "Online stores built to make browsing and buying simple.",
    icon: ShoppingBag,
    features: [
      "Product layouts",
      "Categories and collections",
      "Cart and checkout integration",
      "Responsive shopping experience",
      "Payment integration where applicable",
      "Basic store structure",
    ],
    bestFor: "Brands and businesses selling online",
  },
  {
    id: "portfolio-websites",
    number: "04",
    title: "Portfolio Websites",
    description: "Personal websites that turn your work into a professional digital presence.",
    icon: UserCheck,
    features: [
      "Project showcases",
      "About section",
      "Skills/services",
      "Contact section",
      "Responsive layouts",
      "Smooth interactions",
    ],
    bestFor: "Creators, freelancers and professionals",
  },
  {
    id: "website-redesign",
    number: "05",
    title: "Website Redesign",
    description: "Transform an outdated website into a modern, responsive experience.",
    icon: RefreshCw,
    features: [
      "Visual redesign",
      "UX improvements",
      "Mobile optimization",
      "Better content hierarchy",
      "Modern interactions",
      "Performance improvements",
    ],
    bestFor: "Businesses with an outdated website",
  },
  {
    id: "ui-ux-design",
    number: "06",
    title: "UI/UX Design",
    description: "Thoughtful interfaces designed around clarity, usability and your brand.",
    icon: Layout,
    features: [
      "Page structure",
      "Wireframes",
      "Responsive layouts",
      "Component systems",
      "Visual hierarchy",
      "User-flow improvements",
    ],
    bestFor: "New products and digital experiences",
  },
  {
    id: "web-animations",
    number: "07",
    title: "Web Animations",
    description: "Subtle motion that makes your website feel alive without slowing it down.",
    icon: Activity,
    features: [
      "Micro-interactions",
      "Scroll animations",
      "Hover effects",
      "Page transitions",
      "Interactive elements",
      "Motion design",
    ],
    bestFor: "Brands wanting a more memorable experience",
  },
  {
    id: "website-optimization",
    number: "08",
    title: "Website Optimization",
    description: "Improve the experience users get after they click.",
    icon: Gauge,
    features: [
      "Performance improvements",
      "Responsive optimization",
      "SEO foundations",
      "Accessibility improvements",
      "Image optimization",
      "UX improvements",
    ],
    bestFor: "Existing websites that need improvement",
  },
  {
    id: "maintenance-updates",
    number: "09",
    title: "Maintenance & Updates",
    description: "Keep your website updated, working and ready for your next move.",
    icon: Wrench,
    features: [
      "Content updates",
      "Layout changes",
      "Bug fixes",
      "Small feature updates",
      "Performance checks",
      "Ongoing improvements",
    ],
    bestFor: "Businesses that already have a website",
  },
  {
    id: "custom-web-solutions",
    number: "10",
    title: "Custom Web Solutions",
    description: "Custom functionality built around a specific business requirement.",
    icon: Cpu,
    features: [
      "Custom features",
      "Interactive tools",
      "Custom dashboards",
      "API integrations",
      "Business-specific workflows",
      "Scalable architecture",
    ],
    bestFor: "Businesses with unique requirements",
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="relative bg-[#07090e] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none text-slate-100 border-t border-slate-900/50"
    >
      {/* Background ambient gradient glow matching website language */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 uppercase mb-4 shadow-sm">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-sans">
            What we build.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            From first click to final conversion, we build digital experiences designed around your business.
          </p>
        </motion.div>

        {/* Services Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-slate-900/90 border-purple-500/50 shadow-2xl shadow-indigo-500/10"
                    : "bg-[#0b0e14]/80 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                {/* Subtle active card glow background */}
                {isExpanded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
                )}

                {/* Clickable Header Row */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none relative z-10"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                    {/* Number */}
                    <span className="text-xs sm:text-sm font-mono font-semibold text-slate-500 group-hover:text-purple-400 transition-colors">
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div
                      className={`p-2 rounded-xl border transition-all duration-300 ${
                        isExpanded
                          ? "bg-gradient-to-br from-indigo-500/20 to-pink-500/20 border-purple-500/40 text-pink-300 shadow-md"
                          : "bg-slate-900 border-slate-800 text-slate-400 group-hover:text-indigo-300 group-hover:border-slate-700"
                      }`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Title & Short Description */}
                    <div className="min-w-0 pr-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate group-hover:text-indigo-200 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 truncate mt-0.5 font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Arrow */}
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                      isExpanded
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-transparent text-white rotate-90 shadow-lg shadow-indigo-500/30"
                        : "bg-slate-900 border-slate-800 text-slate-400 group-hover:border-slate-700 group-hover:text-white"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Content Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden relative z-10 border-t border-slate-800/80 bg-slate-950/40"
                    >
                      <div className="p-5 sm:p-8 space-y-6">
                        {/* Short Explanation Paragraph */}
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                          {service.description} We engineer solutions tailored precisely to your operational workflows, ensuring optimal scalability and visual prestige.
                        </p>

                        {/* What's Included Grid (4-6 bullet points) */}
                        <div>
                          <h4 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                            What&apos;s Included
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: idx * 0.04 }}
                                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"
                              >
                                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Best For Label & CTA */}
                        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800/60">
                          <div className="text-xs sm:text-sm text-slate-400">
                            <span className="font-semibold text-slate-200">Best for:</span>{" "}
                            <span className="text-indigo-300">{service.bestFor}</span>
                          </div>

                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>Start Your Project</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ExternalLink, Code2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  featured: boolean;
}

// Structured array for future projects. Currently empty to display the intentional coming-soon state.
const projects: Project[] = [];

export default function OurWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Optional category filter list (will only show if projects exist and user wants categories)
  const categories = ["All", "Business Websites", "Landing Pages", "E-commerce", "Portfolio", "Redesign"];

  // Filter logic for future projects
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="work"
      className="relative bg-[#07090e] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none text-slate-100 border-t border-slate-900/50"
    >
      {/* Background ambient gradient glow matching website language */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-pink-600/10 via-purple-600/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 uppercase mb-4 shadow-sm">
            OUR WORK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-sans">
            Built to make brands stand out.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Explore digital experiences designed to look sharp, feel effortless and turn attention into action.
          </p>
        </motion.div>

        {/* Optional Category Filter Bar (Only renders if projects exist) */}
        {projects.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Conditional Rendering: Projects Grid OR Premium Empty State */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative bg-slate-900/60 rounded-2xl border border-slate-800/80 overflow-hidden hover:border-purple-500/50 transition-all duration-300 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Project Card Content (Ready for future data population) */}
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-3 group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 max-w-xl font-normal">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 group-hover:underline"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 text-pink-400" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Premium Intentional Coming-Soon Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-3xl mx-auto text-center p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900/80 via-[#0b0e14]/90 to-slate-950/90 border border-slate-800/80 shadow-2xl shadow-indigo-500/5 overflow-hidden"
          >
            {/* Subtle animated background grid/glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Floating Minimalist Icon Box */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-pink-400 mb-6 shadow-lg shadow-purple-500/10"
              >
                <Code2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </motion.div>

              <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                Great work takes time.
              </h3>
              <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto mb-8 leading-relaxed font-normal">
                WebNestle&apos;s project showcase is growing. Check back soon to explore our latest builds, or let us craft your brand next.
              </p>

              {/* Call to Action Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}

        {/* Bottom Section CTA reminder if projects exist */}
        {projects.length > 0 && (
          <div className="mt-20 text-center">
            <p className="text-sm text-slate-400 mb-4 font-normal">Have a project in mind?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
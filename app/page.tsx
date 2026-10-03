"use client";

import { useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // <-- Import Footer

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Cinematic Intro Loader */}
      <IntroLoader onComplete={() => setIsLoaded(true)} />

      {/* Main Content */}
      <main 
        className={`min-h-screen bg-[#07090e] text-slate-100 selection:bg-purple-500 selection:text-white transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <Hero />
        <Services />
        <OurWork />
        <WhyUs />
        <Process />
        <Contact />
        <Footer /> {/* <-- Render Footer directly after Contact */}
      </main>
    </>
  );
}
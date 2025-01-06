"use client";
import { ParticleBackground } from "./ParticleBackground";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";

import { TechStackTable } from "./TechStackTable";
import { ContactSection } from "./ContactSection";
import { motion, useScroll, useSpring } from "framer-motion";
import { AboutMe } from "./AboutMe";
import { ProjectsSection } from "./ProjectSection";

export const AppLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ParticleBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <TechStackTable />
      <ContactSection />
    </div>
  );
};

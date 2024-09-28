import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/content.json";

const getContent = () => content;

export const HeroSection = () => {
  const hero = getContent().heroSection;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50"></div>
      </div>

      {/* Hero Content with Fade-in */}
      <motion.div
        initial={{ opacity: 0.01 }} // Start with very low opacity
        animate={{ opacity: 1 }} // Animate to full opacity
        transition={{ duration: 1 }} // Smooth fade-in over 1 second
        className="text-center z-10"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ opacity: 0.01 }} // Very low opacity to begin with
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }} // Slightly delayed fade-in
        >
          {hero.title}
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl text-gray-300 mb-6"
          initial={{ opacity: 0.01 }} // Initial opacity set to 0.01
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }} // Delay for a staggered effect
        >
          {hero.subtitle}
        </motion.h2>
        <motion.p
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.4 }} // Further delay for a staggered effect
        >
          {hero.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }} // Button fades in last
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            {hero.cta}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll-down Icon */}
      <motion.div
        initial={{ opacity: 0.01 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }} // Scroll icon fades in after content
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <ChevronDown
            aria-label="Read more about me"
            className="h-8 w-8 text-white"
          />
        </button>
      </motion.div>
    </section>
  );
};

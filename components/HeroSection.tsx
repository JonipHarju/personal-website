import React from "react";
import { motion } from "framer-motion";
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
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0.01 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        {/* Hero Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight"
          style={{ paddingBottom: "0.1em" }}
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl md:text-4xl text-gray-300 mb-6"
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          {hero.subtitle}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.4 }}
        >
          {hero.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
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
    </section>
  );
};

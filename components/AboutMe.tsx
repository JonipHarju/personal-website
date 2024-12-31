import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Cpu } from "lucide-react";
import { Button } from "./ui/button";
import content from "@/content.json";

const getContent = () => content;

export const AboutMe = () => {
  const about = getContent().about;

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="container mx-auto max-w-full lg:max-w-5xl">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          {about.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start justify-center lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col items-center lg:items-start lg:justify-center"
          >
            <div className="relative w-48 h-48 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse"></div>
              <img
                src="/juuh.jpeg"
                alt={about.name}
                className="rounded-full w-full h-full object-cover border-4 border-white relative z-10"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed text-left lg:text-left">
              {about.description}
            </p>
            <div className="space-y-4 text-left lg:text-left w-full lg:w-auto">
              <h3 className="text-2xl font-semibold text-purple-400">
                Contact Information
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${about.contact.email}`}
                    className="text-pink-500 hover:underline"
                  >
                    {about.contact.email}
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href={about.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:underline"
                  >
                    {about.contact.linkedin}
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href={about.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:underline"
                  >
                    {about.contact.github}
                  </a>
                </li>
              </ul>
              <Button
                variant="outline"
                className="bg-orange-600 hover:bg-orange-700 text-white mt-4"
              >
                <a
                  href={about.contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center lg:justify-start"
                >
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-purple-400 flex flex-col items-start lg:flex-row lg:items-center">
                <Code className="mr-2 h-6 w-6 mb-2 lg:mb-0" />
                Background & Expertise
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {about.background}
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-pink-400 flex flex-col items-start lg:flex-row lg:items-center">
                <Rocket className="mr-2 h-6 w-6 mb-2 lg:mb-0" />
                Goals
              </h3>
              <p className="text-gray-300 leading-relaxed">{about.goals}</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-red-400 flex flex-col items-start lg:flex-row lg:items-center">
                <Cpu className="mr-2 h-6 w-6 mb-2 lg:mb-0" />
                Current Focus
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {about.currentFocus}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

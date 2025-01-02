import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu } from "lucide-react";
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

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex  mb-12"
        >
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse"></div>
            <img
              src="/juuh.jpeg"
              alt={about.name}
              className="rounded-full w-full h-full object-cover border-4 border-white relative z-10"
            />
          </div>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Description and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {about.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
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
              </ul>
              <Button
                variant="outline"
                className="bg-orange-600 hover:bg-orange-700 text-white mt-4"
              >
                <a
                  href={about.contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Background and Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Background */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-purple-400 flex items-center">
                <Code className="mr-2 h-6 w-6" />
                Background & Expertise
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {about.background}
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-red-400 flex items-center">
                <Cpu className="mr-2 h-6 w-6" />
                Interests
              </h3>
              <p className="text-gray-300 leading-relaxed">{about.interests}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

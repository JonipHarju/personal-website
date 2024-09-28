"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle, Send } from "lucide-react";

export const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            id="name"
            placeholder="Your Name"
            className="mt-1 bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>
        <div>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="mt-1 bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>
        <div>
          <Textarea
            id="message"
            placeholder="Your message here..."
            className="mt-1 bg-gray-800 border-gray-700 text-white"
            rows={4}
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
        >
          Send Message <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>

      {/* Modal for Success */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="absolute -top-10 -right-10 bg-gradient-to-br from-purple-500 to-pink-500 w-40 h-40 rounded-full opacity-20"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <CheckCircle className="text-green-400 w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-300 text-center">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="mt-6"
              >
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  Close
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

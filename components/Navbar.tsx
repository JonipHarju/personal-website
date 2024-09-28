"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-800">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <span className="text-sm">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { headerButtons, navLinks } from "@/lib/constants";
import { motion } from "framer-motion";

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState<number | null>(
    null,
  );

  const [activeTab, setActiveTab] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set initial active tab
    setActiveTab(window.location.hash);

    // Optional: Listen for hash changes
    const handleHashChange = () => {
      setActiveTab(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full flex items-center justify-between px-10 py-5 transition-all duration-300 ${
        isScrolled ? "bg-black/5 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className='flex items-center gap-5 relative'
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            className='relative px-3 py-2 text-sm font-medium rounded-lg text-white transition-colors duration-200'
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={() => setActiveTab(link.href)}
          >
            {/* Sliding Pill Background */}
            {(hoveredIndex === index ||
              (hoveredIndex === null && link.href === activeTab)) && (
              <motion.span
                layoutId='nav-hover-bg'
                className='absolute inset-0 bg-white/10 rounded-lg -z-10'
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            {/* Text Content */}
            <span className='relative z-10'>{link.name}</span>
          </a>
        ))}
      </div>

      <div>
        <Image
          src='/img/logo-astra-H.png'
          alt='Astra'
          className='-ml-10'
          width={150}
          height={150}
        />
      </div>

      <div
        className='flex items-center gap-5'
        onMouseLeave={() => setHoveredButtonIndex(null)}
      >
        {/* Preserving user's buttons */}
        {headerButtons.map((button, index) => (
          <a
            key={button.name}
            href={button.href}
            className='relative px-3 py-2 text-sm font-medium rounded-lg text-white transition-colors duration-200'
            onMouseEnter={() => setHoveredButtonIndex(index)}
          >
            {/* Sliding Pill Background */}
            {(hoveredButtonIndex === index ||
              (hoveredButtonIndex === null && button.active)) && (
              <motion.span
                layoutId='button-hover-bg'
                className={
                  button.active
                    ? "absolute inset-0 bg-white/10 rounded-lg -z-10"
                    : "absolute inset-0 bg-white/10 rounded-lg -z-10"
                }
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            {/* Text Content */}
            <span className='relative z-10'>{button.name}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Header;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { headerButtons, navLinks } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react if not present

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState<number | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Active Tab
  useEffect(() => {
    setActiveTab(window.location.hash);
    const handleHashChange = () => setActiveTab(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full px-6 md:px-10 py-4 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className='flex items-center justify-between w-full relative'>
          {/* 1. Left Side: Hamburger (Mobile) OR Nav Links (Desktop) */}
          <div className='flex items-center'>
            {/* Mobile Hamburger */}
            <button
              className='md:hidden text-white p-1'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Nav Links */}
            <div
              className='hidden md:flex items-center gap-1 relative'
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='relative px-4 py-2 text-sm font-medium rounded-lg text-white transition-colors duration-200'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => setActiveTab(link.href)}
                >
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
                  <span className='relative z-10'>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Logo: Absolute Center (Desktop) / Right Side (Mobile) */}
          <div className='relative md:absolute md:left-1/2 md:-translate-x-1/2 flex justify-end flex-1 md:flex-auto'>
            <a href='#' className='block relative h-10 w-28 md:h-12 md:w-32'>
              <Image
                src='/img/logo-astra-H.png'
                alt='Astra'
                fill
                className='object-contain object-right md:object-center'
                priority
              />
            </a>
          </div>

          {/* 3. Right Side: Buttons (Desktop Only) */}
          <div
            className='hidden md:flex items-center gap-3'
            onMouseLeave={() => setHoveredButtonIndex(null)}
          >
            {headerButtons.map((button, index) => (
              <a
                key={button.name}
                href={button.href}
                className='relative px-4 py-2 text-sm font-medium rounded-lg text-white transition-colors duration-200'
                onMouseEnter={() => setHoveredButtonIndex(index)}
              >
                {(hoveredButtonIndex === index ||
                  (hoveredButtonIndex === null && button.active)) && (
                  <motion.span
                    layoutId='button-hover-bg'
                    className='absolute inset-0 bg-white/10 rounded-lg -z-10'
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className='relative z-10'>{button.name}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.header>

      {/* 4. Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden flex flex-col gap-6'
          >
            {/* Mobile Nav Links */}
            <nav className='flex flex-col gap-4'>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='text-2xl font-semibold text-white/90 hover:text-white border-b border-white/10 pb-4'
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Buttons */}
            <div className='flex flex-col gap-3 mt-4'>
              {headerButtons.map((button, idx) => (
                <motion.a
                  key={button.name}
                  href={button.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className={`py-3 px-6 rounded-full text-center font-medium ${
                    button.active
                      ? "bg-white text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {button.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

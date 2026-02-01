"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input"; // Assuming you have shadcn or standard input
import { Button } from "@/components/ui/button"; // Assuming shadcn button
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Security", href: "#" },
      { name: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
];

export default function Footer() {
  return (
    <footer className='relative bg-black pt-20 overflow-hidden font-outfit'>
      {/* 1. Background Gradients for that "Premium" Glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
        {/* 2. Top Section: Newsletter CTA */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-20 border-b border-white/10 pb-16'>
          <div className='max-w-lg'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Join the future of finance.
            </h2>
            <p className='text-gray-400'>
              Subscribe to our newsletter for the latest updates, financial
              tips, and exclusive offers.
            </p>
          </div>

          <div className='flex w-full md:w-auto flex-col sm:flex-row gap-3'>
            <input
              type='email'
              placeholder='Enter your email'
              className='bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all w-full md:w-80'
            />
            <button className='bg-white text-black rounded-full px-6 py-3 font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group'>
              Subscribe
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>
        </div>

        {/* 3. Middle Section: Links Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-20'>
          {/* Logo Column */}
          <div className='col-span-2 md:col-span-1'>
            <Link href='/' className='text-2xl font-bold text-white mb-6 block'>
              Astra.
            </Link>
            <p className='text-gray-500 text-sm leading-relaxed max-w-xs'>
              Empowering you to take control of your financial destiny with
              AI-driven insights and automation.
            </p>

            {/* Social Icons */}
            <div className='flex gap-4 mt-6'>
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -3, color: "#fff" }}
                  className='text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10'
                >
                  <social.icon className='w-5 h-5' />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className='font-semibold text-white mb-6'>{column.title}</h3>
              <ul className='space-y-4'>
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-white transition-colors text-sm'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom Section: Massive Text & Copyright */}
      <div className='relative border-t border-white/10 bg-black'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600'>
          <p>
            &copy; {new Date().getFullYear()} Astra Finance Inc. All rights
            reserved.
          </p>
          <div className='flex gap-8'>
            <Link href='#' className='hover:text-gray-400 transition-colors'>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:text-gray-400 transition-colors'>
              Terms of Service
            </Link>
            <Link href='#' className='hover:text-gray-400 transition-colors'>
              Cookies Settings
            </Link>
          </div>
        </div>

        {/* This sits behind everything at the bottom */}
        <div className='w-full flex justify-center opacity-30'>
          <TextHoverEffect text='ASTRA' />
        </div>
      </div>
    </footer>
  );
}

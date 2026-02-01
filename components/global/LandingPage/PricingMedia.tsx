"use client";

import { pricing } from "@/lib/constants";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils"; // Assuming you have this utility

const PricingMedia = () => {
  return (
    <div className='text-black grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
      {pricing.map((item, index) => (
        <motion.div
          key={item.id || index}
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={cn(
            "flex flex-col gap-8 p-6 rounded-2xl relative border overflow-hidden",
            item.isPopular
              ? "text-white border-white/10 bg-zinc-900 bg-[url('/img/astra-hero-bg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay"
              : "bg-white text-black border-zinc-200",
          )}
        >
          {/* Most Popular Chip */}
          {item.isPopular && (
            <div className='absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl z-10'>
              MOST POPULAR
            </div>
          )}

          {/* Icon Box */}
          <div
            className={cn(
              "flex items-center gap-2 p-3 rounded-xl w-fit backdrop-blur-md",
              item.isPopular
                ? "bg-white/25 text-white"
                : "bg-[#EFEEF1]/50 text-black/70",
            )}
          >
            <item.icon className='w-5 h-5' />
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-medium font-outfit'>{item.title}</h3>
            <p
              className={cn(
                "text-xs font-medium font-manrope",
                item.isPopular ? "text-gray-300" : "text-gray-500",
              )}
            >
              {item.subtitle}
            </p>

            {/* Button: Inverted colors for popular card */}
            <button
              className={cn(
                "p-3 rounded-xl w-full mt-5 font-semibold transition-all cursor-pointer",
                item.isPopular
                  ? "bg-white text-black hover:bg-gray-200"
                  : "hover:bg-black hover:text-white border border-black text-black",
              )}
            >
              Get Started
            </button>

            <p
              className={cn(
                "text-xs font-medium font-manrope mt-5",
                item.isPopular ? "text-white/70" : "text-black/70",
              )}
            >
              {item.subtext}
            </p>

            <div className='flex flex-col gap-3 mt-4'>
              {item.features.map((feature, idx) => (
                <div key={idx} className='flex items-center gap-3'>
                  <Check
                    className={cn(
                      "w-4 h-4",
                      // Make checkmark lighter on dark background
                      item.isPopular ? "text-emerald-400" : "text-emerald-700",
                    )}
                  />
                  <span className='text-sm font-medium font-manrope'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingMedia;

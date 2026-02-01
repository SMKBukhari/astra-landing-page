"use client";

import { useCases } from "@/lib/constants";
import { motion } from "framer-motion";
import React from "react";

const UseCaseMedia = () => {
  return (
    // Responsive Layout:
    // - grid-cols-1 (Mobile)
    // - md:grid-cols-2 (Tablet)
    // - lg:grid-cols-3 (Desktop)
    <div className='text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:gap-10'>
      {useCases.map((useCase, index) => (
        <motion.div
          key={useCase.id}
          className='flex flex-col gap-8 md:gap-12 bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm'
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ scale: 1.02 }}
          // Stagger effect based on index
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className='flex items-center gap-2 bg-[#EFEEF1]/50 p-2 rounded-lg w-fit'>
            <useCase.icon className='w-4 h-4 text-black/70' />
            <span className='text-xs font-medium font-manrope'>
              {useCase.iconTitle}
            </span>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-xl font-medium font-outfit'>{useCase.title}</h3>
            <p className='text-sm font-medium font-manrope text-text-secondary leading-relaxed'>
              {useCase.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UseCaseMedia;

"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HowItWork } from "@/lib/constants";

interface HowItWorkMediaProps {
  howItWork: HowItWork;
}

const HowItWorkMedia: React.FC<HowItWorkMediaProps> = ({ howItWork }) => {
  return (
    // Responsive Height: h-[300px] on mobile, h-[600px] on desktop
    <div className='relative h-[300px] md:h-[600px] w-full rounded-xl overflow-hidden bg-black/5'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={howItWork.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='absolute inset-0 h-full w-full'
        >
          {howItWork.mediaType === "image" ? (
            <Image
              src={howItWork.mediaSrc}
              alt={howItWork.title}
              fill
              className='object-cover'
              priority
            />
          ) : (
            <video
              src={howItWork.mediaSrc}
              autoPlay
              loop
              muted
              playsInline
              className='h-full w-full object-cover'
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className='absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none' />
    </div>
  );
};

export default HowItWorkMedia;

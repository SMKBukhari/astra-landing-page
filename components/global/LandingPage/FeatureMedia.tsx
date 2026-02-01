"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Feature } from "@/lib/constants";

interface FeatureMediaProps {
  feature: Feature;
}

const FeatureMedia: React.FC<FeatureMediaProps> = ({ feature }) => {
  return (
    // Responsive Height: h-[300px] for mobile, h-[500px] for tablet/desktop
    <div className='relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='absolute inset-0 h-full w-full'
        >
          {feature.mediaType === "image" ? (
            <Image
              src={feature.mediaSrc}
              alt={feature.title}
              fill
              className='object-cover'
              priority
            />
          ) : (
            <video
              src={feature.mediaSrc}
              autoPlay
              loop
              muted
              playsInline
              className='h-full w-full object-cover'
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay for depth */}
      <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none' />
    </div>
  );
};

export default FeatureMedia;

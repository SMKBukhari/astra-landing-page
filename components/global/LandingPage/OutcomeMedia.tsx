"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { outcomes } from "@/lib/constants";

const OutcomeCard = ({ outcome }: { outcome: any }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log("Play interrupted", error));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className='flex flex-col gap-5 w-full'>
      <div
        className='relative h-[300px] md:h-[300px] w-full rounded-xl overflow-hidden bg-white/5'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence mode='wait'>
          <motion.div
            key={outcome.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className='absolute inset-0 h-full w-full'
          >
            {outcome.mediaType === "image" ? (
              <Image
                src={outcome.mediaSrc}
                alt={outcome.title}
                fill
                className='object-cover'
                priority
              />
            ) : (
              <video
                ref={videoRef}
                src={outcome.mediaSrc}
                loop
                muted
                playsInline
                className='h-full w-full object-cover'
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className='absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none' />
      </div>
      <div className='flex flex-col gap-3 md:gap-5'>
        <h2 className='text-lg md:text-xl font-medium font-manrope max-w-md'>
          {outcome.title}
        </h2>
        <p className='text-xs md:text-sm font-medium text-text-secondary max-w-sm leading-relaxed'>
          {outcome.description}
        </p>
      </div>
    </div>
  );
};

// Responsive Layout Change Here
const OutcomeMedia = () => {
  return (
    // Mobile: flex-col (stacked) | Desktop: flex-row (side-by-side)
    <div className='flex flex-col md:flex-row w-full gap-10 md:gap-5'>
      {outcomes.map((outcome) => (
        <OutcomeCard key={outcome.id} outcome={outcome} />
      ))}
    </div>
  );
};

export default OutcomeMedia;

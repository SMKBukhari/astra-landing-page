"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { outcomes } from "@/lib/constants";

// 1. Create a sub-component for individual cards
// This isolates the video logic so one hover doesn't affect other cards
const OutcomeCard = ({ outcome }: { outcome: any }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Directly play the video via the DOM API
    if (videoRef.current) {
      // We catch the promise to prevent errors if the user hovers in/out too fast
      videoRef.current
        .play()
        .catch((error) => console.log("Play interrupted", error));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Directly pause the video
    if (videoRef.current) {
      videoRef.current.pause();
      // Optional: Reset video to start when mouse leaves
      // videoRef.current.currentTime = 0;
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
                ref={videoRef} // Attach the ref here
                src={outcome.mediaSrc}
                loop
                muted // Muted is required for autoplay to work in most browsers
                playsInline
                className='h-full w-full object-cover'
                // Remove autoPlay attribute; we control it manually now
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className='absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none' />
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-xl font-medium font-manrope max-w-md'>
          {outcome.title}
        </h2>
        <p className='text-xs font-medium text-text-secondary max-w-sm'>
          {outcome.description}
        </p>
      </div>
    </div>
  );
};

// 2. Main Component just maps the data
const OutcomeMedia = () => {
  return (
    <div className='flex w-full gap-5'>
      {outcomes.map((outcome) => (
        <OutcomeCard key={outcome.id} outcome={outcome} />
      ))}
    </div>
  );
};

export default OutcomeMedia;

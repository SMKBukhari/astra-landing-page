"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HowItWork } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface HowItWorkContentProps {
  howItWorks: HowItWork[];
  currentIndex: number;
  onNext: () => void;
  onSelect: (index: number) => void;
}

const HowItWorkContent: React.FC<HowItWorkContentProps> = ({
  howItWorks,
  currentIndex,
  onNext,
  onSelect,
}) => {
  return (
    <div className='flex w-full gap-10'>
      {howItWorks.map((howItWork, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={howItWork.id}
            onClick={() => onSelect(index)}
            className={cn(
              "cursor-pointer relative flex-1 pb-6 transition-all duration-300",
              // dimmed opacity for inactive items
              isActive ? "opacity-100" : "opacity-50 hover:opacity-75",
            )}
          >
            {/* Title */}
            <h3
              className={cn(
                "text-xl md:text-2xl font-semibold font-manrope mb-2 transition-colors duration-300",
                isActive ? "text-black" : "text-text-secondary",
              )}
            >
              {howItWork.title}
            </h3>

            {/* Expandable Description */}
            <AnimatePresence mode='wait'>
              <motion.div
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className='overflow-hidden'
              >
                <p
                  className={`text-sm ${
                    isActive ? "text-black" : "text-text-secondary"
                  } leading-relaxed max-w-sm pr-4`}
                >
                  {howItWork.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Line Section */}
            {/* The Track: Always visible (bg-zinc-400) */}
            <div className='absolute -bottom-0.5 left-0 w-full h-[2px] bg-zinc-400 overflow-hidden'>
              {/* The Fill: Only animates when active (bg-black) */}
              {isActive && (
                <motion.div
                  className='h-full bg-black'
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: howItWork.duration,
                    ease: "linear",
                  }}
                  onAnimationComplete={onNext}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HowItWorkContent;

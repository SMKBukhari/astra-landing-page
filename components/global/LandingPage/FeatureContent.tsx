"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Feature } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FeatureContentProps {
  features: Feature[];
  currentIndex: number;
  onNext: () => void;
  onSelect: (index: number) => void;
}

const FeatureContent: React.FC<FeatureContentProps> = ({
  features,
  currentIndex,
  onNext,
  onSelect,
}) => {
  return (
    <div className='space-y-6'>
      {features.map((feature, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={feature.id}
            onClick={() => onSelect(index)}
            // Responsive Padding: pl-4 on mobile, pl-6 on desktop
            className={cn(
              "cursor-pointer relative pl-4 md:pl-6 py-2 transition-all duration-300 border-l-2",
              isActive
                ? "border-white"
                : "border-zinc-800 hover:border-zinc-700",
            )}
          >
            <h3
              className={cn(
                "text-xl md:text-2xl font-semibold font-manrope transition-colors duration-300",
                isActive ? "text-white" : "text-text-secondary",
              )}
            >
              {feature.title}
            </h3>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: "16px" }} // Adjusted margin
                  exit={{ height: 0, opacity: 0, marginTop: "0px" }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className='overflow-hidden'
                >
                  <div className='pb-2'>
                    <p className='text-sm md:text-base text-text-secondary leading-relaxed max-w-lg mb-4'>
                      {feature.description}
                    </p>

                    <div className='h-px max-w-lg bg-zinc-800 rounded-full overflow-hidden relative'>
                      <motion.div
                        className='absolute top-0 left-0 h-full bg-white rounded-full'
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: feature.duration,
                          ease: "linear",
                        }}
                        onAnimationComplete={onNext}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureContent;

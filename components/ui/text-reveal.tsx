"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
  Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface DynamicTextRevealProps {
  text: string;
  className?: string;
  mode?: "scroll" | "viewport";
  trigger?: boolean; // NEW: Controls when animation starts
}

export const DynamicTextReveal = ({
  text,
  className,
  mode = "viewport",
  trigger = true, // Default to true if not provided
}: DynamicTextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");
  const controls = useAnimation(); // Manual control for viewport mode

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.5"],
  });

  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  // Watch for both "In View" AND "Trigger" (Loader finished)
  useEffect(() => {
    if (mode === "viewport" && isInView && trigger) {
      controls.start("visible");
    }
  }, [isInView, trigger, mode, controls]);

  const renderWords = () => {
    return words.map((word, i) => {
      const start = i / words.length;
      const end = start + 1 / words.length;

      return (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[start, end]}
          mode={mode}
          controls={controls} // Pass controls down
          index={i}
        >
          {word}
        </Word>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      // Added justify-center logic here via className
      className={cn("flex flex-wrap leading-snug", className)}
    >
      {renderWords()}
    </div>
  );
};

const Word = ({ children, progress, range, mode, controls, index }: any) => {
  const opacityScroll = useTransform(progress, range, [0.1, 1]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(500px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: index * 0.08,
        ease: "easeOut",
      },
    },
  };

  if (mode === "scroll") {
    return (
      <span className='relative mx-1 lg:mx-2.5'>
        <span className='absolute opacity-30 blur-[80px]'>{children}</span>
        <motion.span style={{ opacity: opacityScroll }}>{children}</motion.span>
      </span>
    );
  }

  return (
    <motion.span
      variants={variants}
      initial='hidden'
      animate={controls}
      className='mx-1 lg:mx-1.5 inline-block'
    >
      {children}
    </motion.span>
  );
};

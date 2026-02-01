"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import loaderAnimation from "@/public/img/astra-logo-animation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Total duration of the splash screen
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500); // 2.5s + buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode='wait' onExitComplete={onComplete}>
      {show && (
        <motion.div
          key='loader-container'
          className='fixed inset-0 z-9999 flex items-center justify-center'
          // The container itself doesn't fade out immediately, it waits for children
        >
          {/* Background Columns for Pixel Slide Effect */}
          {/* We create 10 columns that cover the screen */}
          <div className='absolute inset-0 z-0 flex h-full w-full'>
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className='h-full flex-1 bg-black'
                initial={{ y: 0 }}
                exit={{
                  y: "-100%",
                  transition: {
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1], // Custom easing for smooth slide
                    delay: i * 0.05, // Staggered delay for "pixel/wave" effect
                  },
                }}
              />
            ))}
          </div>

          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              y: -50,
              transition: { duration: 0.4 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='relative z-10 w-[300px] md:w-[500px]'
          >
            <Lottie
              animationData={loaderAnimation}
              loop={false}
              autoplay={true}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

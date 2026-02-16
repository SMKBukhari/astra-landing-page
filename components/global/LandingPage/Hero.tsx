"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight-new";
import { DynamicTextReveal } from "@/components/ui/text-reveal";
import { useLoader } from "@/context/LoaderContext";

const Hero = () => {
  const { isLoading } = useLoader();

  return (
    <div className='relative min-h-screen h-screen overflow-hidden text-white font-outfit'>
      <Spotlight
        gradientFirst='radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 85%, .08) 0, hsla(0, 0%, 55%, .02) 50%, hsla(0, 0%, 45%, 0) 80%)'
        gradientSecond='radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 85%, .06) 0, hsla(0, 0%, 55%, .02) 80%, transparent 100%)'
        gradientThird='radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 85%, .04) 0, hsla(0, 0%, 45%, .02) 80%, transparent 100%)'
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        duration={7}
        xOffset={100}
      />
      <motion.div
        className='absolute inset-0 z-0'
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src='/img/astra-hero-bg.jpg'
          alt='Astra Background'
          fill
          className='object-cover opacity-80'
          priority
        />
      </motion.div>
      <div className='absolute inset-0 z-0 bg-black/60' />
      <div className='absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent z-10' />

      {/* Content Wrapper */}
      <div className='relative z-10 flex flex-col h-full pt-20'>
        <div className='flex-1 flex flex-col items-center justify-center text-center px-4 md:px-20 max-w-6xl mx-auto'>
          <div className='mb-6 w-full'>
            <DynamicTextReveal
              mode='viewport'
              trigger={!isLoading}
              text='Master Your Money. Achieve Financial Freedom.'
              className='text-4xl md:text-5xl lg:text-7xl font-outfit font-bold justify-center'
            />
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={!isLoading ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className='text-lg md:text-xl text-gray-300 max-w-2xl'
          >
            Astra&apos;s intelligent AI analyzes your spending, builds
            personalized budgets, and automates your savings—24/7.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={!isLoading ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className='mt-10'
          >
            <button className='px-8 py-3 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors'>
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

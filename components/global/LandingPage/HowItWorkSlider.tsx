"use client";

import React, { useState, useCallback } from "react";
import HowItWorkContent from "./HowItWorkContent";
import { howItWorks } from "@/lib/constants";
import HowItWorkMedia from "./HowItWorkMedia";

const HowItWorkSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % howItWorks.length);
  }, []);

  const handleManualSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const currentHowItWork = howItWorks[currentIndex];

  return (
    <div className='flex flex-col gap-8 md:gap-12 w-full'>
      <HowItWorkContent
        howItWorks={howItWorks}
        currentIndex={currentIndex}
        onNext={handleNext}
        onSelect={handleManualSelect}
      />

      <HowItWorkMedia howItWork={currentHowItWork} />
    </div>
  );
};

export default HowItWorkSlider;

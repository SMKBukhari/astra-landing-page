"use client";

import React, { useState, useCallback } from "react";
import FeatureMedia from "./FeatureMedia";
import HowItWorkContent from "./HowItWorkContent";
import { howItWorks } from "@/lib/constants";
import HowItWorkMedia from "./HowItWorkMedia";

const HowItWorkSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to advance to the next slide
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % howItWorks.length);
  }, []);

  // Function to handle manual click on a feature item
  const handleManualSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const currentHowItWork = howItWorks[currentIndex];

  return (
    <div className='flex flex-col gap-12 w-full'>
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

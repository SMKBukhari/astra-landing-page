"use client";

import React, { useState, useCallback } from "react";
import { features } from "@/lib/constants";
import FeatureContent from "./FeatureContent";
import FeatureMedia from "./FeatureMedia";

const FeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to advance to the next slide
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  }, []);

  // Function to handle manual click on a feature item
  const handleManualSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const currentFeature = features[currentIndex];

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 items-center w-full'>
      <div className='col-span-1'>
        <FeatureContent
          features={features}
          currentIndex={currentIndex}
          onNext={handleNext}
          onSelect={handleManualSelect}
        />
      </div>

      {/* Right Side - Smooth Media Transition */}
      <div className='col-span-2'>
        <FeatureMedia feature={currentFeature} />
      </div>
    </div>
  );
};

export default FeatureSlider;

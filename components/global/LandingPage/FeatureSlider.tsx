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
    // Changed Layout: Flex-col-reverse for Mobile (Media Top, Content Bottom), Grid for Desktop
    <div className='flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8 lg:gap-20 items-start w-full'>
      {/* Content Section (Bottom on Mobile, Left on Desktop) */}
      <div className='w-full lg:col-span-1'>
        <FeatureContent
          features={features}
          currentIndex={currentIndex}
          onNext={handleNext}
          onSelect={handleManualSelect}
        />
      </div>

      {/* Media Section (Top on Mobile, Right on Desktop) */}
      <div className='w-full lg:col-span-2'>
        <FeatureMedia feature={currentFeature} />
      </div>
    </div>
  );
};

export default FeatureSlider;

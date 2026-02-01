"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { testimonialItems } from "@/lib/constants";
import Image from "next/image";
import { Quote } from "lucide-react";

const TestimonialMarquee = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden py-10 md:py-20 bg-black'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {testimonialItems.map((item, idx) => (
          <div
            key={idx}
            // Responsive:
            // - Width: Fixed w-[300px] on mobile, w-[500px] on desktop
            // - Padding/Margin: Smaller on mobile
            className='mx-4 md:mx-8 h-full flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 md:p-8 backdrop-blur-sm w-[300px] md:w-[500px]'
          >
            <div className='flex flex-col gap-4 md:gap-6'>
              {/* Responsive Icon */}
              <Quote className='w-6 h-6 md:w-10 md:h-10 rotate-180 text-white/50' />

              {/* Responsive Text Size */}
              <p className='text-lg md:text-2xl leading-relaxed text-white/80 font-light'>
                {item.description}
              </p>

              <div className='flex items-center gap-3 mt-2'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className='rounded-full object-cover w-8 h-8 md:w-10 md:h-10'
                />
                <div>
                  <p className='text-sm font-medium text-white'>{item.name}</p>
                  <p className='text-xs text-white/60'>{item.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Responsive Gradients: Thinner on mobile so content remains visible */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/3 bg-linear-to-r from-black' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/3 bg-linear-to-l from-black' />
    </div>
  );
};

export default TestimonialMarquee;

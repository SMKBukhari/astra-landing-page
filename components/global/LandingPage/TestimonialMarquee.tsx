import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { testimonialItems } from "@/lib/constants";
import Image from "next/image";
import { Quote } from "lucide-react";

const TestimonialMarquee = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden py-20 bg-black'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {testimonialItems.map((item, idx) => (
          <div
            key={idx}
            className='mx-8 h-full flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm max-w-lg'
          >
            <div className='flex flex-col gap-5'>
              <Quote className='w-10 h-10 rotate-180' />
              <p className='text-2xl leading-relaxed text-white/80'>
                {item.description}
              </p>
              <div className='flex items-center gap-3'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className='rounded-full object-cover'
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
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-black' />
    </div>
  );
};

export default TestimonialMarquee;

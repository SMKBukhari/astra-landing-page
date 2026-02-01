import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { brandItems } from "@/lib/constants";
import Image from "next/image";

const BrandMarquee = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden py-20 bg-black'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {brandItems.map((item, idx) => (
          <div key={idx} className='mx-8 flex items-center justify-center '>
            <Image
              src={item.image}
              alt={item.name}
              width={160}
              height={40}
              className='h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer'
            />
          </div>
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-black' />
    </div>
  );
};

export default BrandMarquee;

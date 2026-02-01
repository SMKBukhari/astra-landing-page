import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import PricingMedia from "./PricingMedia";
import { Sparkles } from "lucide-react";

const Pricing = () => {
  return (
    <div className='max-w-7xl mx-auto md:px-0 px-4 py-20'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-5'>
          <HoverBorderGradient
            containerClassName='rounded-lg'
            as='button'
            className='bg-[#EFEEF1] text-black flex items-center space-x-2'
          >
            <motion.span
              className='w-2 h-2 rounded-full bg-accent-color/50 blur-[1px]'
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <span className='text-xs font-medium'>Membership</span>
          </HoverBorderGradient>
          <h2 className='text-2xl md:text-3xl font-medium font-manrope max-w-md text-black'>
            Plans Designed to Compound Your Wealth.
          </h2>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className='flex mt-10 md:mt-16 w-full'>
        <PricingMedia />
      </div>

      {/* Business Banner: Stack on mobile, Row on desktop */}
      <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center bg-white mt-10 p-5 md:p-2 md:px-5 rounded-xl gap-5 md:gap-0 border border-zinc-200'>
        {/* Left Side: Icon & Text */}
        <div className='flex gap-4 md:gap-5 items-center'>
          <div className='w-10 h-10 min-w-[40px] rounded-md bg-zinc-100 flex items-center justify-center'>
            <Sparkles className='w-5 h-5 text-black' />
          </div>
          <div className='flex flex-col gap-0.5'>
            <h2 className='text-lg font-semibold font-manrope max-w-md text-black'>
              Astra for Business
            </h2>
            <p className='text-xs font-medium font-manrope max-w-md text-gray-500'>
              Want to offer Astra as a perk to your employees? Get enterprise
              pricing.
            </p>
          </div>
        </div>

        {/* Right Side: Input Field */}
        <div className='flex items-center relative p-1 w-full md:w-1/3'>
          <input
            type='text'
            placeholder='Enter Work Email'
            className='p-3 rounded-full w-full font-semibold transition-all text-black border border-zinc-300 relative z-10 outline-none text-sm focus:border-black'
          />
          <button className='p-2 md:p-3 rounded-full font-semibold transition-all cursor-pointer bg-black text-white text-xs absolute z-10 right-2 hover:bg-zinc-800'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

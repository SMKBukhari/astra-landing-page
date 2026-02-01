import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import PricingMedia from "./PricingMedia";
import { Sparkles } from "lucide-react";

const Pricing = () => {
  return (
    <div className='max-w-7xl mx-auto'>
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
          <h2 className='text-2xl font-medium font-manrope max-w-md text-black'>
            Plans Designed to Compound Your Wealth.
          </h2>
        </div>
      </div>

      {/* Features */}
      <div className='flex mt-10 w-full'>
        <PricingMedia />
      </div>

      <div className='w-full flex justify-between bg-white mt-5 p-2 px-5 rounded-xl'>
        <div className='flex gap-5 items-center'>
          <div className='w-10 h-10 rounded-md bg-primary-bg flex items-center justify-center'>
            <Sparkles className='w-5 h-5 text-black' />
          </div>
          <div className='flex flex-col gap-0.5'>
            <h2 className='text-lg font-semibold font-manrope max-w-md text-black'>
              Astra for Business
            </h2>
            <p className='text-xs font-medium font-manrope max-w-md text-black'>
              Want to offer Astra as a perk to your employees? Get enterprise
              pricing.
            </p>
          </div>
        </div>
        <div className='flex items-center relative p-1 w-1/4'>
          <input
            type='text'
            placeholder='Enter Work Email'
            className='p-3 rounded-full w-full font-semibold transition-all text-black border border-black relative z-10 outline-none text-sm'
          />
          <button className='p-3 rounded-full font-semibold transition-all cursor-pointer bg-black text-white text-xs absolute z-10 right-2'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

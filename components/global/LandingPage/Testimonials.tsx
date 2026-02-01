import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import TestimonialMarquee from "./TestimonialMarquee";

const Testimonials = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-5'>
          <HoverBorderGradient
            containerClassName='rounded-lg'
            as='button'
            className='bg-black text-white flex items-center space-x-2'
          >
            <motion.span
              className='w-2 h-2 rounded-full bg-blue-500/50 blur-[1px]'
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <span className='text-xs font-medium'>Testimonials</span>
          </HoverBorderGradient>
          <h2 className='text-2xl font-medium font-manrope max-w-md'>
            Trusted by Over 100,000 Users to Grow Wealth
          </h2>
        </div>
      </div>

      {/* Features */}
      <div className='flex mt-10 w-full'>
        <TestimonialMarquee />
      </div>
    </div>
  );
};

export default Testimonials;

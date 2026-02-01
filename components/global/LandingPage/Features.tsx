import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import FeatureSlider from "./FeatureSlider";

const Features = () => {
  return (
    <div className='max-w-7xl mx-auto md:p-0 px-4 py-20'>
      {/* Header Section: Responsive Layout */}
      <div className='flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-0'>
        {/* Badge & Title */}
        <div className='flex flex-col gap-5'>
          <HoverBorderGradient
            containerClassName='rounded-lg'
            as='button'
            className='bg-black text-white flex items-center space-x-2'
          >
            <motion.span
              className='w-2 h-2 rounded-full bg-purple-500/50 blur-[1px]'
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <span className='text-xs font-medium'>The New Wealth Standard</span>
          </HoverBorderGradient>
          <h2 className='text-2xl md:text-3xl font-medium font-manrope max-w-xs md:max-w-md'>
            How Astra Orchestrates Your Finances, 24/7.
          </h2>
        </div>

        {/* Description: Stacks below on mobile, aligns right on desktop */}
        <p className='text-xs md:text-sm font-medium text-text-secondary max-w-sm md:self-end'>
          Astra manages your capital the way a private wealth manager
          would—without the fees or the meetings.
        </p>
      </div>

      {/* Features Slider */}
      <div className='flex mt-10 md:mt-20 w-full'>
        <FeatureSlider />
      </div>
    </div>
  );
};

export default Features;

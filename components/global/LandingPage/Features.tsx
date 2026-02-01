import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import FeatureSlider from "./FeatureSlider";
const Features = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto'>
      <div className='flex justify-between'>
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
          <h2 className='text-2xl font-medium font-manrope max-w-xs'>
            How Astra Orchestrates Your Finances, 24/7.
          </h2>
        </div>
        <p className='text-xs font-medium text-text-secondary max-w-sm self-end'>
          Astra manages your capital the way a private wealth manager
          would—without the fees or the meetings.
        </p>
      </div>

      {/* Features */}
      <div className='flex mt-10 w-full'>
        <FeatureSlider />
      </div>
    </div>
  );
};

export default Features;

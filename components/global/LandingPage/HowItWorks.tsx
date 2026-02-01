import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import HowItWorkSlider from "./HowItWorkSlider";

const HowItWorks = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto md:px-0 px-4 py-20'>
      <div className='flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-0'>
        <div className='flex flex-col gap-5'>
          <HoverBorderGradient
            containerClassName='rounded-lg'
            as='button'
            className='bg-[#EFEEF1] text-black flex items-center space-x-2'
          >
            <motion.span
              className='w-2 h-2 rounded-full bg-green-500/50 blur-[1px]'
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <span className='text-xs font-medium'>The Setup</span>
          </HoverBorderGradient>
          <h2 className='text-2xl md:text-3xl font-medium font-manrope max-w-md text-black'>
            Financial Clarity in Minutes, Not Months.
          </h2>
        </div>
      </div>

      {/* Features Slider Wrapper */}
      <div className='flex mt-10 md:mt-20 w-full gap-5'>
        <HowItWorkSlider />
      </div>
    </div>
  );
};

export default HowItWorks;

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import OutcomeMedia from "./OutcomeMedia";
import UseCaseMedia from "./UseCaseMedia";

const UseCases = () => {
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
            <span className='text-xs font-medium'>Use Cases</span>
          </HoverBorderGradient>
          <h2 className='text-2xl font-medium font-manrope max-w-md text-black'>
            One Brain. Every Financial Season.
          </h2>
        </div>
      </div>

      {/* Features */}
      <div className='flex mt-10 w-full'>
        <UseCaseMedia />
      </div>
    </div>
  );
};

export default UseCases;

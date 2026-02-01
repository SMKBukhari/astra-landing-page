import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import UseCaseMedia from "./UseCaseMedia";

const UseCases = () => {
  return (
    <div className='max-w-7xl mx-auto md:px-0 px-4 py-20'>
      {/* Header: Flex Column on Mobile, Row on Desktop */}
      <div className='flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-0'>
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
          <h2 className='text-2xl md:text-3xl font-medium font-manrope max-w-md text-black'>
            One Brain. Every Financial Season.
          </h2>
        </div>
      </div>

      {/* Features Media Container */}
      <div className='flex mt-10 md:mt-16 w-full'>
        <UseCaseMedia />
      </div>
    </div>
  );
};

export default UseCases;

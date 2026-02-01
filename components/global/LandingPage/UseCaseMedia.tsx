import { useCases } from "@/lib/constants";
import { motion } from "framer-motion";
import React from "react";

const UseCaseMedia = () => {
  return (
    <div className='text-black flex w-full gap-10'>
      {useCases.map((useCase) => (
        <motion.div
          key={useCase.id}
          className='flex flex-col gap-12 bg-white p-5 rounded-xl'
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className='flex items-center gap-2 bg-[#EFEEF1]/50 p-2 rounded-lg w-fit'>
            <useCase.icon className='w-4 h-4 text-black/70' />
            <span className='text-xs font-medium font-manrope'>
              {useCase.iconTitle}
            </span>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-medium font-outfit'>{useCase.title}</h3>
            <p className='text-sm font-medium font-manrope text-text-secondary'>
              {useCase.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UseCaseMedia;

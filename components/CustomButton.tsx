"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({ title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`flex justify-center items-center py-3 px-6 outline-none rounded-lg font-medium transition-all ${containerStyles}`} 
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
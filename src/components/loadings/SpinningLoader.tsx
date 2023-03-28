import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function SpinningLoader() {
  return (
    <div className="flex items-center justify-center px-[100px] py-[50px]">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-300 duration-500 ease-linear"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-notBlue duration-1000 ease-linear"></div>
      </div>
    </div>
  );
}

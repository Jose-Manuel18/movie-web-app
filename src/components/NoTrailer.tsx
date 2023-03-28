import React from "react";
import { motion } from "framer-motion";

interface NoTrailerProps {
  message?: string;
}

export const NoTrailer = ({
  message = "No trailers available",
}: NoTrailerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-body  p-6 shadow-md"
    >
      <span role="img" aria-label="Sad face" className="mb-4 text-6xl">
        😔
      </span>
      <motion.h3
        className="text-lg font-semibold text-white"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {message}
      </motion.h3>
    </motion.div>
  );
};

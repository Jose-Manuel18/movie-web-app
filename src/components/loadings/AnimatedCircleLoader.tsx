import { motion } from "framer-motion";

export function AnimatedCircleLoader() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: "500px", height: "15px" }}
    >
      <motion.div
        className="mr-2 h-3 w-3 rounded-full bg-pink-500"
        animate={{ x: [0, -20, 0], opacity: [1, 0.5, 1] }}
        transition={{ loop: Infinity, duration: 0.6, delay: 0 }}
      />
      <motion.div
        className="mr-2 h-3 w-3 rounded-full bg-purple-500"
        animate={{ x: [0, -20, 0], opacity: [1, 0.5, 1] }}
        transition={{ loop: Infinity, duration: 0.6, delay: 0.2 }}
      />
      <motion.div
        className="h-3 w-3 rounded-full bg-blue-500"
        animate={{ x: [0, -20, 0], opacity: [1, 0.5, 1] }}
        transition={{ loop: Infinity, duration: 0.6, delay: 0.4 }}
      />
    </div>
  );
}

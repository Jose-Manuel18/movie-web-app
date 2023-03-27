import { motion } from "framer-motion";
export default function Custom500() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <motion.h1
        className="text-6xl font-bold text-red-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        500
      </motion.h1>
      <motion.p
        className="mt-4 text-xl font-medium text-gray-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Sorry, there was a server error.
      </motion.p>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="#"
          className="inline-block rounded bg-red-500 px-6 py-2 text-white hover:bg-red-400"
          onClick={() => window.location.reload()}
        >
          Try again
        </a>
      </motion.div>
    </div>
  );
}

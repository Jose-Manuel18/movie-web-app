import { motion } from "framer-motion";
import Link from "next/link";
export default function Custom404() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-backgroundColor">
      <motion.h1
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        404
      </motion.h1>
      <motion.p
        className="mt-4 text-xl font-medium text-gray-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Sorry, we couldnt find the page youre looking for.
      </motion.p>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link legacyBehavior href="/">
          <a className="inline-block rounded bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-500">
            Go back to homepage
          </a>
        </Link>
      </motion.div>
    </div>
  );
}

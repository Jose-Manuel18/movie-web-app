import { motion } from "framer-motion";
import Image from "next/image";

interface BigPosterProps {
  path?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

export const BigPoster: React.FC<BigPosterProps> = ({ path, children }) => {
  return (
    <div className=" min-h-screen overflow-y-hidden bg-backgroundColor lg:relative ">
      {/* Background image */}
      <div className="lg: relative">
        <motion.div
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 2, ease: "easeInOut", damping: 10 }}
          initial={{ opacity: 0.5 }}
        >
          <Image
            className="min-h-[225px] min-w-full max-w-full object-cover lg:min-h-screen"
            alt="Posters"
            src={`https://image.tmdb.org/t/p/original${path}`}
            width={700}
            height={225}
            loading="lazy"
            quality={100}
          />
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[80px] w-full bg-gradient-to-t from-backgroundColor lg:h-[900px]" />
        </motion.div>
      </div>

      <div className="bottom-0 left-0 right-0  lg:absolute  lg:grid lg:max-h-[400px] lg:grid-cols-2">
        {children}
      </div>
    </div>
  );
};

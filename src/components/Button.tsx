import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  const transition = {
    type: "spring",
    stiffness: 400,
    damping: 10,
  };
  return (
    <div className="relative mx-6">
      <motion.div
        layout
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={transition}
      >
        <div
          onClick={onClick}
          className="flex h-16 w-full cursor-pointer items-center justify-center rounded-md  bg-notBlue lg:mt-5 lg:h-14 lg:w-[450px]"
        >
          <div className="text-white">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

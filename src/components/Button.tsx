import { useDescriptionContext } from "@/context/DescriptionContext";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  const { isTruncated } = useDescriptionContext();
  const transition = {
    type: "spring",
    stiffness: 400,
    damping: 10,
  };

  return (
    <div
      className={`relative lg:pl-[16px]  ${
        isTruncated ? "lg:mt-[88px]" : "lg:mt-[32px]"
      }`}
    >
      <motion.div
        layout
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={transition}
      >
        <div
          onClick={onClick}
          className="z-0 flex h-16 w-full cursor-pointer items-center justify-center rounded-md bg-notBlue  lg:h-14 lg:w-[450px] "
        >
          <div className="text-white">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

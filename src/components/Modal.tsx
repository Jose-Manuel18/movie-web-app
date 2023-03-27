import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  Open: boolean;
  children: React.ReactNode;
  toggleClose: () => void;
}

export function Modal({ Open, children, toggleClose }: ModalProps) {
  return (
    <AnimatePresence>
      {Open && (
        <>
          <motion.div
            className=" flex items-center justify-center "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            }}
            onClick={toggleClose}
          >
            <motion.div
              className="fixed inset-0  bg-backgroundColor bg-opacity-60"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center"
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <div className=" flex min-w-[500px] items-center justify-center rounded-lg bg-body p-1">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

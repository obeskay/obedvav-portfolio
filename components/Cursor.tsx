import { useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useAppContext } from "./context/GeneralContext";

const Cursor = () => {
  const { isCursorHover, setCursorHover } = useAppContext();
  const { isCursorContact, setCursorContact } = useAppContext();
  const cursorX = useMotionValue(-10);
  const cursorY = useMotionValue(-10);

  const springConfig = { damping: 150, stiffness: 3000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", moveCursor);
    console.log(cursorXSpring);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      id="cursor"
      className="fixed hidden md:flex w-[1rem] h-[1rem] rounded-full bg-[#C57A69] !z-[99] mix-blend-difference pointer-events-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        left: ["100vw", "50vw", "0vw"],
        top: ["50vh", "50vh", "50vh", "0vh"],
        scale: isCursorHover ? 3 : 1,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <AnimatePresence>
        {isCursorContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute  z-[99] backdrop-blur-sm space-y-[0.25rem] text-[#C57A69] top-[1.5rem] right-0 flex-shirnk-0 text-right"
          >
            <motion.p className="text-[0.25rem] uppercase tracking-[0.075rem]">
              obeskay.mail@gmail.com
            </motion.p>
            <motion.p className="text-[0.25rem] uppercase tracking-[0.075rem]">
              55 6034 8476
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cursor;

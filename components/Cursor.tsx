import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useAppContext } from "./context/GeneralContext";

const Cursor = () => {
  const { isCursorHover, setCursorHover } = useAppContext();
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
      className="fixed hidden md:block w-[1rem] h-[1rem] rounded-full bg-primary !z-[99] mix-blend-difference pointer-events-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        left: ["100vw", "50vw", "0vw"],
        top: ["50vh", "50vh", "50vh", "0vh"],
        scale: isCursorHover ? 5 : 1.5,
      }}
      transition={{
        duration: 0.25,
      }}
    />
  );
};

export default Cursor;

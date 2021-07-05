import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
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
      className="fixed hidden md:block w-[1rem] h-[1rem] rounded-full bg-primary z-50 mix-blend-difference pointer-events-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        scale: [0.5, 5, 1.5],
        left: ["100vw", "50vw", "0vw"],
        top: ["50vh", "50vh", "50vh", "0vh"],
      }}
      transition={{
        duration: 1,
      }}
    />
  );
};

export default Cursor;

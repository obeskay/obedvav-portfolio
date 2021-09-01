import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../components/context/GeneralContext";

const TextReveal = ({ children, textCenter = false, ...rest }) => {
  let letters = children.split(" ");
  const { customEase } = useAppContext();
  return (
    <motion.div
      className={`flex flex-wrap ${textCenter ? "justify-center" : ""}`}
    >
      {letters.map((letter, i) => (
        <motion.div
          key={children + i}
          className="flex-shrink-0 inline-block overflow-hidden mr-[1rem]"
        >
          <motion.div
            className="inline-block"
            initial={{ y: "200%" }}
            animate="visible"
            exit="exit"
            variants={{
              visible: (i) => ({
                y: 0,
                transition: {
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: customEase,
                },
              }),
              exit: (i) => ({
                y: "100%",
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: customEase,
                },
              }),
            }}
            {...rest}
            custom={i}
          >
            {letter + (i !== letter.length - 1 ? "" : "")}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TextReveal;

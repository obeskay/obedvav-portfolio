import React from "react";
import { motion } from "framer-motion";

const TextReveal = ({ children, textCenter = false, ...rest }) => {
  let letters = children.split(" ");

  return (
    <motion.div
      className={`flex flex-wrap ${textCenter ? "justify-center" : ""}`}
    >
      {letters.map((letter, i) => (
        <motion.div
          key={children + i}
          className="flex-shrink-0 inline-block overflow-hidden"
        >
          <motion.div
            className="inline-block"
            initial={{ y: "200%" }}
            animate="visible"
            exit="exit"
            variants={{
              visible: (i) => ({
                y: 0,
                skewY: 0,
                transition: {
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0.13, 0.23, 0.96],
                },
              }),
              exit: (i) => ({
                y: "100%",
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.4, 0.13, 0.23, 0.96],
                },
              }),
            }}
            {...rest}
            custom={i}
          >
            {letter + (i !== letter.length - 1 ? "\u00A0" : "")}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TextReveal;

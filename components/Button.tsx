import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "./context/GeneralContext";

const Button = (props) => {
  const { isCursorHover, setCursorHover } = useAppContext();

  return (
    <motion.div
      whileHover={{ scale: 1.075 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setCursorHover(true)}
      onHoverEnd={() => setCursorHover(false)}
      onClick={() => setCursorHover(false)}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.13, 0.23, 0.96],
      }}
      className={`relative text-sm spaced-text px-[1.5rem] py-[0.75rem] ${
        props.outlined
          ? "border border-primary text-dark"
          : "bg-primary text-light"
      } ${props.className}`}
    >
      {props.children}
    </motion.div>
  );
};

export default Button;

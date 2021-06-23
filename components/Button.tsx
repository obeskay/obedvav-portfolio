import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`relative text-lg px-[1.5rem] py-[0.75rem] ${
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

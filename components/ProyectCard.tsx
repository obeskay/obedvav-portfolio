import React, { useState } from "react";
import { motion } from "framer-motion";

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

const ProyectCard = (props) => {
  const [timingVar, setTimingVar] = useState(3);
  const motionVariants = {
    visible: {
      opacity: 1,
      y: [
        `0%`,
        `${getRandomArbitrary(-timingVar * 10, timingVar * 10)}%`,
        `${getRandomArbitrary(-timingVar * 10, timingVar * 10)}%`,
        `${getRandomArbitrary(-timingVar * 10, timingVar * 10)}%`,
        `0%`,
      ],
      x: [
        `0%`,
        `${getRandomArbitrary(-timingVar * 10, timingVar * 10)}%`,
        `${getRandomArbitrary(-timingVar * 10, timingVar * 10)}%`,
        `${getRandomArbitrary(-timingVar * 10, timingVar * 10)}%`,
        `0%`,
      ],
    },
  };
  return (
    <motion.div
      animate="visible"
      variants={motionVariants}
      transition={{
        duration: 30,
        ease: "linear",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 0,
      }}
      className={`h-[9rem] w-[16rem] p-4 text-dark shadow-lg flex items-center justify-center ${props.className}`}
    >
      Proyecto no. 1
    </motion.div>
  );
};

export default ProyectCard;

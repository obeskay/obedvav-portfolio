import React from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import ParallaxItem from "./ParallaxItem";

const ProjectCard = (props) => {
  return (
    <motion.div
      className={`relative w-full h-[100vh] flex items-center justify-center text-center ${props.className}`}
    >
      <motion.div className="absolute z-[2] md:left-[4rem]">
        <TextReveal textCenter className="text-[7vw] md:text-[4vw]">
          {props.nombre}
        </TextReveal>
      </motion.div>
      <ParallaxItem className="md:right-[4rem] top-[25vh] translate-y-1/2 md:-translate-y-1/2">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 320 }}
          transition={{
            duration: 1.5,
            ease: [0.4, 0.13, 0.23, 0.96],
            delay: 0.25,
          }}
          className="relative w-[512px] max-w-[80vw] overflow-hidden z-[-1] "
        >
          <motion.img
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            exit={{ y: "100%" }}
            transition={{
              duration: 1.25,
              ease: [0.4, 0.13, 0.23, 0.96],
            }}
            src={props.imagen1}
            className="object-cover w-full m-auto"
          />
        </motion.div>
      </ParallaxItem>
    </motion.div>
  );
};

export default ProjectCard;

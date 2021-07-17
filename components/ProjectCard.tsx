import React, { useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import TextReveal from "./TextReveal";
import Image from "next/image";

const ProjectCard = (props) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [-50, -190]);
  return (
    <motion.div
      className={`relative w-full h-[100vh] flex items-center justify-center text-center bg-light/50 ${props.className}`}
    >
      <motion.div style={{ y: y1 }} className="z-[2]">
        <TextReveal textCenter className="text-[7vw] md:text-[4vw]">
          {props.nombre}
        </TextReveal>
      </motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 320 }}
        exit={{ top: "-100vh" }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0.13, 0.23, 0.96],
          delay: 0.25,
        }}
        className="absolute w-[512px] top-[50vh] -translate-y-1/2 overflow-hidden z-[-1] "
        style={{ y: y2 }}
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
          className="object-cover w-full h-full m-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

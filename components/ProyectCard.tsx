import React, { useState } from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

const ProyectCard = (props) => {
  return (
    <div
      className={`w-full text-dark flex items-center justify-center text-center ${props.className}`}
    >
      <TextReveal textCenter className="text-[7vw] md:text-[4vw]">
        {props.nombre}
      </TextReveal>
    </div>
  );
};

export default ProyectCard;

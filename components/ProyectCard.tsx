import React, { useState } from "react";
import { motion } from "framer-motion";

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

const ProyectCard = (props) => {
  return (
    <div
      className={`h-[9rem] w-full md:w-[16rem] p-4 text-dark shadow-lg flex items-center justify-center ${props.className}`}
    >
      Proyecto
    </div>
  );
};

export default ProyectCard;

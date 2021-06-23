import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import Link from "next/link";

const project = () => {
  const wrapperAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.125,
      },
    },
  };

  const itemAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      skewX: 2.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      skewX: 0,
      transition: {
        ease: [0.05, 0.72, 0.19, 0.96],
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: {
        ease: [0.05, 0.72, 0.19, 0.96],
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={wrapperAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={wrapperAnimation} className="container mx-auto">
        <motion.h1 variants={itemAnimation}>Proyecto</motion.h1>
        <motion.div variants={itemAnimation}>
          <Link href="/">
            <a>
              <Button className="w-auto">Regresar</Button>
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default project;

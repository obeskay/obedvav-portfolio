import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProyectsGrid from "../components/ProyectsGrid";
import Link from "next/link";

const me = () => {
  const wrapperAnimation = {
    show: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      skewY: -5,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      skewY: 0,
      transition: {
        ease: [0.4, 0.13, 0.23, 0.96],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        ease: [0.4, 0.13, 0.23, 0.96],
        duration: 0.5,
      },
    },
  };
  const obedvavimg = "/img/obed/obedvav1.jpg";
  return (
    <>
      <AnimatePresence>
        <motion.div
          transition={{
            duration: 1.5,
            ease: [0.4, 0.13, 0.23, 0.96],
            delay: 0.25,
          }}
          className="absolute -left-full flex-shrink-0 w-[100vw] h-[100%] md:w-[25vw] md:max-w-[454px] md:h-[75%] my-auto overflow-hidden "
          layoutId={`profile-img-wrapper`}
        >
          <motion.img
            transition={{
              duration: 1.25,
              ease: [0.4, 0.13, 0.23, 0.96],
            }}
            src={obedvavimg}
            layoutId={`profile-img`}
            className="object-cover w-full h-full m-auto "
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.75,
              ease: [0.4, 0.13, 0.23, 0.96],
            }}
            className="after:block after:absolute after:w-full after:h-[50%] after:inset-0 after:top-auto after:bg-gradient-to-t after:from-dark md:after:hidden"
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        variants={wrapperAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="container mx-auto py-[4rem]"
      >
        <motion.div variants={itemAnimation} className="text-center my-[4rem]">
          <ProyectsGrid></ProyectsGrid>
        </motion.div>
      </motion.div>
    </>
  );
};

export default me;

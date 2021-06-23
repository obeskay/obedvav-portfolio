import React, { Fragment } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import Link from "next/link";

const index = () => {
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
      className="absolute flex items-center justify-center h-[100vh] w-[100vw] inset-0"
    >
      <motion.div
        variants={wrapperAnimation}
        className="container flex flex-wrap lg:flex-nowrap h-full lg:space-x-[4rem] justify-center"
      >
        <motion.div
          variants={itemAnimation}
          className="relative flex-shrink-0 h-[40vh] lg:w-[354px] lg:h-[75%] max-h-[586px] my-auto overflow-hidden"
        >
          <img
            src="/img/obed/94883279_1610573022414431_9923938549235712_n 1.jpg"
            className="object-cover w-full h-full m-auto"
          />
        </motion.div>
        <motion.div className="z-10 my-auto space-y-[1.5rem] max-w-[520px]">
          <motion.h1 variants={itemAnimation}>
            Hago que disfrutes estar en una web
          </motion.h1>
          <motion.p variants={itemAnimation} className="text-lg">
            Construyo sitios increíbles a través de dos pilares: la experiencia
            del usuario y la interfáz
          </motion.p>
          <motion.div className="font-lg flex space-x-[1rem]">
            <motion.div variants={itemAnimation}>
              <Link href="project/[id]" as="project/1">
                <a href="">
                  <Button>Mira mi trabajo</Button>
                </a>
              </Link>
            </motion.div>
            <motion.div variants={itemAnimation}>
              <Button outlined>Conóceme</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default index;

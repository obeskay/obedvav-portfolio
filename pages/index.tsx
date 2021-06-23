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
        delayChildren: 0.5,
        staggerChildren: 0.125,
      },
    },
  };

  const itemAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      // skewY: -5,
    },
    show: {
      opacity: [0, 1],
      scale: 1,
      y: 0,
      // skewY: 0,
      transition: {
        ease: [0.05, 0.72, 0.19, 0.96],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        ease: [0.05, 0.72, 0.19, 0.96],
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        animate={{
          opacity: [0, 0, 1],
          scale: [1.5, 1],
          width: ["0vw", "100vw", "75vw"],
          right: ["100%", "0%", "-5%"],
          skewX: ["-15deg", "5deg", "5deg"],
        }}
        exit={{
          opacity: 0,
          right: "-100%",
        }}
        transition={{
          duration: 1.5,
          delay: 0,
          ease: [0.25, 0.82, 0.19, 0.97],
        }}
        className="absolute h-[100vh] bg-dark"
      />
      <motion.div
        variants={wrapperAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="absolute flex items-center justify-center h-[100vh] w-[100vw] inset-0"
      >
        <motion.div
          variants={wrapperAnimation}
          className="container flex flex-wrap md:flex-nowrap h-full md:space-x-[4rem] justify-center"
        >
          <motion.div
            variants={itemAnimation}
            className="relative flex-shrink-0 h-[40vh] md:w-[354px] md:h-[75%] max-h-[586px] my-auto overflow-hidden"
          >
            <img
              src="https://scontent-qro1-2.xx.fbcdn.net/v/t1.6435-9/138598567_1859328407538890_1043740957920743947_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=HIIhbh0KlEsAX9ZICwS&_nc_ht=scontent-qro1-2.xx&oh=d072aed47b92d9c95e83963124e4c09f&oe=60D6FE92"
              className="object-cover w-full h-full m-auto"
            />
          </motion.div>
          <motion.div className="z-10 my-auto space-y-[1.5rem] max-w-[520px] text-light">
            <motion.h1 variants={itemAnimation}>
              Hago que disfrutes estar en una web
            </motion.h1>
            <motion.p variants={itemAnimation} className="text-lg">
              Construyo sitios increíbles a través de dos pilares: la
              experiencia del usuario y la interfáz
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
                <Button outlined className="text-light">
                  Conóceme
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default index;

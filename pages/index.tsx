import React, { Fragment } from "react";
import Button from "../components/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
const index = () => {
  const obedvavimg = "img/obed/obedvav1.jpg";
  const wrapperAnimation = {
    show: {
      transition: {
        delayChildren: 0.5,
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
  return (
    <>
      <motion.div
        variants={wrapperAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="absolute flex items-center justify-center h-[100vh] w-[100vw] inset-0"
      >
        <motion.div className="container flex flex-wrap md:flex-nowrap h-full md:space-x-[4rem] justify-center">
          <AnimatePresence>
            <motion.div
              transition={{
                duration: 1.5,
                ease: [0.4, 0.13, 0.23, 0.96],
                delay: 0.25,
              }}
              className="absolute md:relative flex-shrink-0 w-[100vw] h-[100vh] md:max-w-[354px] md:h-[75vh] my-auto overflow-hidden "
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
                className="after:block after:absolute after:w-full after:h-[75%] after:inset-0 after:top-auto after:bg-gradient-to-t after:from-dark md:after:hidden"
              />
            </motion.div>
          </AnimatePresence>

          <motion.div className="z-10 mb-[2rem] mt-auto md:my-auto space-y-[1.5rem] max-w-[520px] text-light md:text-dark">
            <motion.h1 variants={itemAnimation}>
              Hago que disfrutes estar en un sitio web
            </motion.h1>
            <motion.p
              variants={itemAnimation}
              className="hidden text-lg md:block"
            >
              Construyo sitios increíbles a través de dos pilares: la
              experiencia del usuario y la interfáz
            </motion.p>
            <motion.div className="font-lg flex flex-wrap md:flex-nowrap space-y-[1rem] md:space-x-[1rem] md:space-y-0">
              <motion.div
                variants={itemAnimation}
                className="flex-shrink-0 w-full md:w-auto"
              >
                <Link href="project/[id]" as="project/1">
                  <a href="">
                    <Button>Mira mi trabajo</Button>
                  </a>
                </Link>
              </motion.div>
              <motion.div
                variants={itemAnimation}
                className="flex-shrink-0 w-full md:w-auto"
              >
                <Link href="me">
                  <a href="">
                    <Button outlined className="w-full text-light md:text-dark">
                      Conóceme
                    </Button>
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default index;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "../components/TextReveal";
import ProyectCard from "../components/ProyectCard";
import Button from "../components/Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

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
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.4, 0.13, 0.23, 0.96],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        ease: [0.4, 0.13, 0.23, 0.96],
        duration: 0.5,
      },
    },
  };
  const obedvavimg = "/img/obed/obedvav1.jpg";
  return (
    <motion.div
      variants={wrapperAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div className="">
        <AnimatePresence>
          <motion.div
            transition={{
              duration: 0.75,
              ease: [0.4, 0.13, 0.23, 0.96],
              delay: 0.125,
            }}
            initial={{
              opacity: 0,
            }}
            className="absolute flex-shrink-0 w-[100vw] h-[100%] md:w-[25vw] md:max-w-[454px] md:h-[75%] top-[50vh] -translate-y-1/2 md:top-[60vh]  overflow-hidden"
            layoutId={`profile-img-wrapper`}
          >
            <motion.img
              transition={{
                duration: 0.75,
                ease: [0.4, 0.13, 0.23, 0.96],
              }}
              animate={{
                borderRadius: "0rem",
              }}
              src={obedvavimg}
              layoutId={`profile-img`}
              className="object-cover w-full h-full m-auto"
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={{
            duration: 1,
            ease: [0.4, 0.13, 0.23, 0.96],
            delay: 0.25,
          }}
          className="w-full h-full flex justify-center p-[1rem] md:p-[4rem] bg-dark text-light"
        >
          <motion.div className="max-w-[520px] space-y-[1.5rem] text-lg">
            <TextReveal className="text-3xl">
              He trabajado en los siguientes proyectos:
            </TextReveal>
            <motion.div variants={itemAnimation}>
              <Link href="/">
                <a>
                  <Button className="inline-block">Regresar</Button>
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default me;

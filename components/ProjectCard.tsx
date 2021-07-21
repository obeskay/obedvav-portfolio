import React from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import ParallaxItem from "./ParallaxItem";
import Button from "./Button";

const ProjectCard = (props) => {
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
  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        variants={wrapperAnimation}
        className={`hidden md:flex w-full items-center justify-center ${props.className}`}
      >
        <motion.div className="container h-[100vh] flex justify-center mx-auto items-center space-x-[2rem]">
          <motion.div className="relative ml-0 mr-auto space-y-[1.5rem]">
            <TextReveal className="text-[7vw] md:text-[4vw]">
              {props.name}
            </TextReveal>
            <motion.div className="space-x-[1rem] ">
              {props.roles.map((role) => (
                <motion.label
                  variants={itemAnimation}
                  className="text-sm spaced-text"
                  key={role}
                >
                  {role}
                </motion.label>
              ))}
            </motion.div>
            <motion.p variants={itemAnimation}>{props.description}</motion.p>
            <motion.div variants={itemAnimation} className="inline-block">
              <Button>Ver detalles</Button>
            </motion.div>
          </motion.div>
          <ParallaxItem className="relative ml-auto mr-0">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 380 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.4, 0.13, 0.23, 0.96],
                delay: 0.25,
              }}
              className="relative w-[400px] xl:w-[560px] overflow-hidden bg-dark/10"
            >
              <motion.img
                initial={{ scale: 1.25 }}
                animate={{ scale: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 1.25,
                  ease: [0.4, 0.13, 0.23, 0.96],
                }}
                src={props.imagen}
                className="object-cover w-full h-full m-auto"
              />
            </motion.div>
          </ParallaxItem>
        </motion.div>
      </motion.div>

      <motion.div className="md:hidden p-[1rem] py-[4rem] space-y-[1.5rem]">
        <TextReveal className="text-[7vw] md:text-[4vw]">
          {props.name}
        </TextReveal>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 228 }}
          transition={{
            duration: 1.5,
            ease: [0.4, 0.13, 0.23, 0.96],
            delay: 0.25,
          }}
          className="relative w-[full] mx-auto overflow-hidden z-[0] "
        >
          <motion.img
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              duration: 1.25,
              ease: [0.4, 0.13, 0.23, 0.96],
            }}
            src={props.imagen}
            className="object-cover w-full h-full m-auto"
          />
        </motion.div>
        <motion.div className="space-x-[1rem] ">
          {props.roles.map((role) => (
            <motion.label
              variants={itemAnimation}
              className="text-sm spaced-text"
              key={role}
            >
              {role}
            </motion.label>
          ))}
        </motion.div>
        <motion.p variants={itemAnimation}>{props.description}</motion.p>
        <motion.div variants={itemAnimation} className="inline-block">
          <Button>Ver detalles</Button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCard;

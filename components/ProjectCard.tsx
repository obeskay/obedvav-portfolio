import React from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import ParallaxItem from "./ParallaxItem";
import Button from "./Button";
import Link from "next/link";
import { useAppContext } from "./context/GeneralContext";

const ProjectCard = (props) => {
  const {
    wrapperAnimation,
    itemAnimation,
    imageWrapperAnimation,
    imageAnimation,
  } = useAppContext();
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
            <Link href={`${props.slug}`}>
              <motion.a href={`${props.slug}`}>
                <TextReveal className="text-[7vw] md:text-[4vw]">
                  {props.name}
                </TextReveal>
              </motion.a>
            </Link>
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
            <motion.p className="text-xl" variants={itemAnimation}>
              {props.description}
            </motion.p>
            <Link href={`${props.slug}`}>
              <motion.a
                href={`${props.slug}`}
                variants={itemAnimation}
                className="inline-block"
              >
                <Button>Ir al sitio</Button>
              </motion.a>
            </Link>
          </motion.div>
          <ParallaxItem className="relative ml-auto mr-0">
            <Link href={`${props.slug}`}>
              <motion.a
                href={`${props.slug}`}
                variants={imageWrapperAnimation}
                className="relative block w-[400px] xl:w-[560px] overflow-hidden"
              >
                <motion.img
                  variants={imageAnimation}
                  src={props.imagen}
                  className="object-cover w-full h-full m-auto bg-dark/5"
                />
              </motion.a>
            </Link>
          </ParallaxItem>
        </motion.div>
      </motion.div>

      <motion.div className="md:hidden p-[1rem] py-[4rem] space-y-[1.5rem]">
        <Link href={`${props.slug}`}>
          <motion.a href={`${props.slug}`}>
            <TextReveal className="text-[7vw] md:text-[4vw]">
              {props.name}
            </TextReveal>
          </motion.a>
        </Link>

        <Link href={`${props.slug}`}>
          <motion.a
            href={`${props.slug}`}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              ease: [0.4, 0.13, 0.23, 0.96],
              delay: 0.25,
            }}
            className="relative h-[320px] block w-[full] mx-auto overflow-hidden z-[0] "
          >
            <motion.img
              initial={{ scale: 1.25 }}
              animate={{ scale: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                duration: 1.25,
                ease: [0.4, 0.13, 0.23, 0.96],
              }}
              src={props.imagen}
              className="block object-cover w-full h-full m-auto"
            />
          </motion.a>
        </Link>
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
        <Link href={`${props.slug}`}>
          <motion.a
            href={`${props.slug}`}
            variants={itemAnimation}
            className="inline-block"
          >
            <Button>Ir al sitio</Button>
          </motion.a>
        </Link>
      </motion.div>
    </>
  );
};

export default ProjectCard;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextReveal from "../components/TextReveal";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = () => {
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
    <>
      <motion.div
        className="fixed z-10 bottom-[2rem] right-[1rem]"
        initial={{ translateX: 100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: 100, opacity: 0 }}
      >
        <Link href="/">
          <a>
            <Button className="inline-block">Regresar</Button>
          </a>
        </Link>
      </motion.div>
      <motion.div
        animate={{ opacity: 0, y: "100vh" }}
        exit={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.4, 0.13, 0.23, 0.96],
          duration: 1.5,
        }}
        layout
        className="absolute flex items-center justify-center h-[-webkit-fill-available] md:h-[100vh] w-[100vw] inset-0"
      >
        <motion.div
          transition={{
            duration: 1.5,
            ease: [0.4, 0.13, 0.23, 0.96],
          }}
          className="relative flex-shrink-0 w-[100vw] h-[100%] md:w-[25vw] md:max-w-[454px] md:h-[75%] my-auto overflow-hidden "
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
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.75,
              ease: [0.4, 0.13, 0.23, 0.96],
            }}
            className="after:block after:absolute after:w-full after:h-[50%] after:inset-0 after:top-auto after:bg-gradient-to-t after:from-black md:after:hidden"
          />
        </motion.div>
      </motion.div>

      <motion.div variants={wrapperAnimation} layout>
        <motion.div
          initial={{ opacity: 1, y: "-100%" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 1, y: "-100%" }}
          transition={{
            duration: 1,
            ease: [0.4, 0.13, 0.23, 0.96],
            delay: 0.25,
          }}
          className="w-full h-full flex justify-center p-[1rem] md:p-[4rem] md:py-[2rem] border-primary bg-light border-b"
        >
          <motion.div className="max-w-[520px] space-y-[1.5rem] text-lg">
            <TextReveal className="text-2xl">
              Proyectos seleccionados
            </TextReveal>
          </motion.div>
        </motion.div>

        <motion.div className="w-full">
          <ProjectCard
            nombre="WOOW ¡Todo bien!"
            imagen1="/img/projects/woow/frame1.jpg"
          />
          <ProjectCard
            nombre="Nook Model Management"
            imagen1="/img/projects/nook/frame1.jpg"
          />
          <ProjectCard
            nombre="Liverpool"
            imagen1="/img/projects/liverpool/frame1.jpg"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default projects;

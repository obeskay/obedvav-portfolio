import React from "react";
import { motion } from "framer-motion";
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
        variants={wrapperAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
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
              He trabajado en estos proyectos:
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
        <motion.div className="w-full">
          <ProjectCard
            className="bg-black/50"
            nombre="WOOW ¡Todo bien!"
            imagen2="https://cdn.dribbble.com/users/97388/screenshots/16051439/media/980366ec4b55bc2369a247cc31d64158.png?compress=1&resize=1600x1200"
            imagen1="/img/projects/woow/frame1.jpg"
          />
          <ProjectCard
            className="bg-black/50"
            nombre="WOOW ¡Todo bien!"
            imagen1="https://cdn.dribbble.com/users/97388/screenshots/16051439/media/980366ec4b55bc2369a247cc31d64158.png?compress=1&resize=1600x1200"
            imagen2="/img/projects/woow/frame1.jpg"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default projects;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import Link from "next/link";
import TextReveal from "../components/TextReveal";

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
      <motion.div className="w-full flex flex-wrap md:flex-nowrap h-[100vh] space-y-[1.5rem] space-x-0 md:space-y-0 md:space-x-[4rem] justify-center align-center">
        <AnimatePresence>
          <motion.div
            transition={{
              duration: 1.5,
              ease: [0.4, 0.13, 0.23, 0.96],
              delay: 0.25,
            }}
            className="relative flex-shrink-0 w-[50vw] h-[50vh] md:w-[35vw] md:h-[-webkit-fill-available] m-auto overflow-hidden"
            layoutId={`profile-img-wrapper`}
          >
            <motion.img
              transition={{
                duration: 1.25,
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

        <motion.div className="w-full h-full flex justify-center p-[1rem] md:p-[4rem] md:pl-0">
          <motion.div className="max-w-[520px] space-y-[1.5rem] text-lg">
            <TextReveal className="text-3xl">Hola, soy Obed</TextReveal>
            <motion.p variants={itemAnimation}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </motion.p>
            <motion.p variants={itemAnimation}>
              Debitis facilis reiciendis minima necessitatibus nostrum
              doloribus, quae cupiditate qui accusantium, provident dolorem
              delectus voluptate.
            </motion.p>
            <motion.p variants={itemAnimation}>
              Deleniti qui excepturi sunt minima quisquam pariatur vel eius
              laboriosam voluptatem et, quis aspernatur, laudantium quidem aut
              corporis? Iste illo nobis dolorem, iure itaque modi voluptatibus
              soluta aliquid dignissimos repellat hic et! Totam vero facilis sed
              atque animi hic dolorum tenetur expedita? Hic unde a tempora amet.
            </motion.p>
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

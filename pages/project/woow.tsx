import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TextReveal from "../../components/TextReveal";
import { useAppContext } from "../../components/context/GeneralContext";

const woow = () => {
  const obeskayimg = "/img/obed/obeskay.webp";
  const {
    wrapperAnimation,
    itemAnimation,
    imageWrapperAnimation,
    imageAnimation,
  } = useAppContext();
  return (
    <>
      <motion.div
        transition={{
          ease: [0.4, 0.13, 0.23, 0.96],
          duration: 1.5,
        }}
        className="absolute flex items-center justify-center h-[-webkit-fill-available] md:h-[100vh] w-[100vw] inset-0"
      >
        <motion.div
          transition={{
            duration: 1.5,
            ease: [0.4, 0.13, 0.23, 0.96],
          }}
          layoutId={`profile-img-wrapper`}
          className="relative  flex-shrink-0 w-[100vw] h-[100%] md:w-[25vw] md:max-w-[454px] md:h-[75%] my-auto overflow-hidden "
        >
          <motion.img
            transition={{
              duration: 1.25,
              ease: [0.4, 0.13, 0.23, 0.96],
            }}
            initial={{ opacity: 0 }}
            src={obeskayimg}
            layoutId={`profile-img`}
            className="object-cover w-full h-full m-auto"
          />
          <motion.div
            initial={{ opacity: 0 }}
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

      <motion.div className="container mx-auto grid md:grid-cols-2 gap-[2rem]">
        <TextReveal className="text-3xl">WOOW ¡Todo bien!</TextReveal>

        <motion.div
          variants={imageWrapperAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          className="relative block w-full overflow-hidden"
        >
          <motion.img
            variants={imageAnimation}
            src="/img/projects/woow/frame1.jpg"
            className="object-cover w-full h-full m-auto bg-dark/5"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default woow;

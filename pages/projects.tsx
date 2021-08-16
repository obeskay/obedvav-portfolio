import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextReveal from "../components/TextReveal";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import Link from "next/link";
import { useAppContext } from "../components/context/GeneralContext";

const projects = () => {
  const { wrapperAnimation, itemAnimation } = useAppContext();
  const obedvavimg = "/img/obed/obedvav1.jpg";
  return (
    <>
      <motion.div
        className="fixed z-10 bottom-[2rem] right-[1rem]"
        initial={{ translateX: "100%", opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: "100%", opacity: 0 }}
        transition={{
          duration: 0.75,
          ease: [0.4, 0.13, 0.23, 0.96],
          delay: 0.25,
        }}
      >
        <Link href="/">
          <motion.a>
            <Button className="flex items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0988 11.3106V13.3106H8.09879L13.5988 18.8106L12.1788 20.2306L4.25879 12.3106L12.1788 4.39056L13.5988 5.81056L8.09879 11.3106H20.0988Z"
                  fill="white"
                />
              </svg>
              <span className="ml-[1rem] hidden md:block">Regresar</span>
            </Button>
          </motion.a>
        </Link>
      </motion.div>
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
            src={obedvavimg}
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

      <motion.div
        variants={wrapperAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div className="w-full">
          <ProjectCard
            name="WOOW ¡Todo bien!"
            slug="https://woowtodobien.com/"
            roles={["ux/ui", "Frontend"]}
            description="Cree la experiencia de usuario para la startup de seguros que busca romper con el aburrido estereotipo de aseguradora."
            imagen="/img/projects/woow/frame1.jpg"
          />
          <ProjectCard
            name="Nook Model Management"
            slug="https://www.nookmodelmanagement.com/"
            roles={["ux/ui", "Frontend", "Backend"]}
            description="Diseñé y programé un sitio limpio y elegante para una importante agencia de modelos en CDMX."
            imagen="/img/projects/nook/frame1.jpg"
          />
          <ProjectCard
            name="Liverpool"
            slug="https://miseguro.liverpool.com.mx/proteccion-celular"
            roles={["ux/ui", "Frontend"]}
            description="Diseñé y programé el nuevo flujo de Protección Celular en el conocido sitio de Liverpool."
            imagen="/img/projects/liverpool/frame1.jpg"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default projects;

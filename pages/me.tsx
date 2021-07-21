import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import Link from "next/link";
import TextReveal from "../components/TextReveal";
import { useAppContext } from "../components/context/GeneralContext";

const me = () => {
  const obedvavimg = "/img/obed/obedvav1.jpg";
  const { wrapperAnimation, itemAnimation } = useAppContext();
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
          <a>
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
          </a>
        </Link>
      </motion.div>

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

          <motion.div className="w-full md:max-h-[100%] md:overflow-y-scroll flex justify-center p-[1rem] md:p-[4rem] md:py-[8rem] md:pl-0">
            <motion.div className="max-w-[520px] space-y-[1.5rem] text-lg">
              <TextReveal className="text-3xl">Hola, soy Obed </TextReveal>

              <motion.div className="space-x-[1rem]">
                <motion.label
                  variants={itemAnimation}
                  className="text-sm spaced-text"
                >
                  Diseñador UX/UI
                </motion.label>
                <motion.label
                  variants={itemAnimation}
                  className="text-sm spaced-text"
                >
                  Desarrollador Frontend
                </motion.label>
              </motion.div>
              <motion.p variants={itemAnimation}>
                Un experimentado diseñador enfocado en entregar experiencias
                únicas que resuelvan las necesidades del usuario final.
              </motion.p>
              <motion.p variants={itemAnimation}>
                A temprana edad me interesó el arte y la tecnología; por lo que
                comencé a desarrollar prototipos de aplicaciones y sitios web
                desde hace más de 5 años. Más tarde aprendí de manera
                autodidacta a programar y desde entonces me he dedicado a
                aportar "mi granito de arena" para transformar Internet en un
                lugar accesible e inclusivo que nos deje una buena experiencia
                de uso y facilite las tareas diarias a todos.
              </motion.p>
              <motion.p variants={itemAnimation}>
                Creo firmemente que navegar por una web o una app no debería ser
                una tarea compleja para nadie y esto se logra a través de la
                intersección entre estética y funcionalidad.
              </motion.p>
              <motion.hr variants={itemAnimation} />
              <motion.div className="space-y-[1rem] pb-[4rem] md:pb-[8rem]">
                <motion.a
                  href="mailto:obedvav@gmail.com"
                  variants={itemAnimation}
                  className="block text-sm spaced-text"
                >
                  Correo: obedvav@gmail.com
                </motion.a>
                <motion.a
                  href="tel:5560348476"
                  variants={itemAnimation}
                  className="block text-sm spaced-text"
                >
                  Teléfono: 55 6034 8476
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default me;

import React from "react";
import { motion } from "framer-motion";
import TextReveal from "../../components/TextReveal";
import Button from "../../components/Button";
import ParallaxItem from "../../components/ParallaxItem";
import Link from "next/link";
import { useAppContext } from "../../components/context/GeneralContext";
import InstagramIcon from "../../components/icons/InstagramIcon";
import FacebookIcon from "../../components/icons/FacebookIcon";
import TwitterIcon from "../../components/icons/TwitterIcon";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

const vapsmx = () => {
  const { wrapperAnimation, itemAnimation, imageAnimation } = useAppContext();
  const obeskayimg = "/img/obed/obeskay.webp";
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
        <Link href="/socialmedia">
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
              <span className="ml-[1rem] hidden md:block">Back</span>
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
      <motion.div
        variants={wrapperAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div className="container flex flex-col justify-center mx-auto items-center space-y-[4rem] px-[2rem] py-[6rem]">
          <TextReveal className="mx-auto text-2xl md:text-3xl md:text-left">
            Propuesta para vaps.mx
          </TextReveal>
          <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[100vh] space-y-[2rem] md:space-y-0 md:space-x-[4rem]">
            <motion.div className="relative mx-auto md:ml-0 h-100">
              <TextReveal className="text-[12vw] md:text-[6vw]">
                El contenido
              </TextReveal>
              <TextReveal className="text-3xl md:text-[3vw]">
                que tu marca se merece
              </TextReveal>
            </motion.div>

            <ParallaxItem className="relative mx-auto md:mr-0">
              <motion.div
                variants={wrapperAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
                className="relative flex-shrink-0 w-[300px] md:w-[40vw] h-[300px] md:h-[40vw] my-auto overflow-hidden"
              >
                <motion.img
                  variants={imageAnimation}
                  src={`/img/projects/socialmedia/vapemx/1.webp`}
                  className="object-cover w-full h-full m-auto"
                />
              </motion.div>
            </ParallaxItem>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[100vh] space-x-[2rem] md:space-x-[4rem]">
            <ParallaxItem offset={500} className="relative mx-auto md:ml-0">
              <motion.div
                variants={wrapperAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
                className="relative flex-shrink-0 w-[300px] md:w-[70vh] h-[300px] md:h-[70vh] my-auto overflow-hidden"
              >
                <motion.img
                  variants={imageAnimation}
                  src={`/img/projects/socialmedia/vapemx/2.webp`}
                  className="object-cover w-full h-full m-auto"
                />
              </motion.div>
            </ParallaxItem>
            <motion.div className="relative mx-auto md:mr-0 space-y-[1.5rem] h-100 bg-light md:bg-transparent">
              <TextReveal className="text-3xl md:text-[4vw]">
                Para sus redes sociales
              </TextReveal>
              <div className="flex mx-auto space-x-8 md:m-l-0">
                <ParallaxItem className="relative">
                  <InstagramIcon
                    className="text-primary"
                    height={80}
                    width={80}
                  />
                </ParallaxItem>
                <ParallaxItem offset={350} className="relative">
                  <FacebookIcon
                    className="text-primary"
                    height={80}
                    width={80}
                  />
                </ParallaxItem>
                <ParallaxItem offset={90} className="relative">
                  <TwitterIcon
                    className="text-primary"
                    height={80}
                    width={80}
                  />
                </ParallaxItem>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[100vh] space-y-[2rem] md:space-y-0 md:space-x-[4rem]">
            <motion.div className="relative mx-auto md:ml-0 h-100 space-y-[4rem] mt-[12rem] md:mt-0">
              <TextReveal className="text-[12vw] md:text-[4vw] ">
                11 posts mensuales:
              </TextReveal>
              <ul className="text-2xl md:text-[2.5vw] space-y-8">
                <li className="flex items-center space-x-4">
                  <CheckIcon className="w-8 h-8 text-primary" />
                  <span>Fotografía de producto</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckIcon className="w-8 h-8 text-primary" />
                  <span>Retoque profesional</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckIcon className="w-8 h-8 text-primary" />
                  <span>Copy para redes</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckIcon className="w-8 h-8 text-primary" />
                  <span>Post e historia</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckIcon className="w-8 h-8 text-primary" />
                  <span>PNG y editables</span>
                </li>
              </ul>
              <div className="space-y-4">
                <p className="text-xl">¿Por qué 11 post?</p>
                <p>
                  Con 11 posts es suficiente para tener una cuenta activa en
                  cualquier plataforma, logrando tener contenido cada tercer
                  día.
                </p>
              </div>
            </motion.div>

            <ParallaxItem offset={90} className="relative mx-auto md:mr-0">
              <motion.div
                variants={wrapperAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
                className="relative flex-shrink-0 w-[300px] md:w-[40vw] h-[300px] md:h-[40vw] my-auto overflow-hidden"
              >
                <motion.img
                  variants={imageAnimation}
                  src={`/img/projects/socialmedia/vapemx/3.webp`}
                  className="object-cover w-full h-full m-auto"
                />
              </motion.div>
            </ParallaxItem>
          </div>
          <div className="flex flex-col items-center justify-center w-full min-h-[100vh] space-y-[2rem] ">
            <ParallaxItem offset={90} className="relative mb-[6rem]">
              <img
                className="w-[300px] lg:w-[30vw] h-[289px] lg:h-[28.9vw]"
                src="/img/ui/calendar.svg"
              />
            </ParallaxItem>
            <div className="py-[12rem] md:py-[18rem] space-y-[4rem]">
              <div className="space-y-4 text-center">
                <p>La neta, la neta...</p>
                <p className="text-3xl ">¿Qué no incluye?</p>
              </div>
              <ul className="text-2xl md:text-[2.5vw] space-y-8">
                <li className="flex items-center space-x-4">
                  <XIcon className="w-8 h-8 text-red-400" />
                  <span>Manejo de cuentas</span>
                </li>
                <li className="flex items-center space-x-4">
                  <XIcon className="w-8 h-8 text-red-400" />
                  <span>Respuesta a DMs</span>
                </li>
                <li className="flex items-center space-x-4">
                  <XIcon className="w-8 h-8 text-red-400" />
                  <span>Campañas publicitarias</span>
                </li>
              </ul>
            </div>
            <p className="text-3xl text-center">Ok, pero ¿cuánto cuesta?</p>
            <div className="text-[12vw] md:text-[7vw] flex items-center">
              <span className="block text-[5vw] md:text-[3vw]">MX$</span>
              <span className="block">4,000</span>
              <span className="block text-[5vw] md:text-[3vw] m-l-4">
                {" "}
                / mes
              </span>
            </div>
            <ParallaxItem
              offset={90}
              className="relative my-[12rem] py-[12rem] space-y-[2rem]"
            >
              <p className="text-3xl text-center">¿Sí te latió?</p>
              <a
                href="https://wa.me/0525560348476"
                className="relative block"
                target="_blank"
              >
                <Button>Mándame un whats</Button>
              </a>
            </ParallaxItem>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default vapsmx;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import Link from "next/link";
import TextReveal from "../components/TextReveal";
import { useAppContext } from "../components/context/GeneralContext";

const me = () => {
  const obeskayimg = "/img/obed/obeskay.jpg";
  const { wrapperAnimation, itemAnimation, customEase } = useAppContext();
  return (
    <>
      <motion.div
        className="fixed z-10 bottom-[2rem] right-[1rem]"
        initial={{ translateX: "100%", opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: "100%", opacity: 0 }}
        transition={{
          duration: 0.75,
          ease: customEase,
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
              <span className="ml-[1rem] hidden md:block">Back</span>
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
                ease: customEase,
                delay: 0.25,
              }}
              className="relative flex-shrink-0 w-[50vw] h-[50vh] md:w-[35vw] md:h-[-webkit-fill-available] m-auto overflow-hidden"
              layoutId={`profile-img-wrapper`}
            >
              <motion.img
                transition={{
                  duration: 1.25,
                  ease: customEase,
                }}
                animate={{
                  borderRadius: "0rem",
                }}
                src={obeskayimg}
                layoutId={`profile-img`}
                className="object-cover w-full h-full m-auto"
              />
            </motion.div>
          </AnimatePresence>

          <motion.div className="w-full md:max-h-[100%] md:overflow-y-scroll flex justify-center p-[1rem] md:p-[4rem] md:py-[8rem] md:pl-0">
            <motion.div className="max-w-[520px] space-y-[1.5rem] text-lg">
              <TextReveal className="text-3xl">Heey! I'm Obed </TextReveal>

              <motion.div className="space-x-[1rem]">
                <motion.label
                  variants={itemAnimation}
                  className="text-sm spaced-text"
                >
                  UX/UI designer
                </motion.label>
                <motion.label
                  variants={itemAnimation}
                  className="text-sm spaced-text"
                >
                  Frontend developer
                </motion.label>
              </motion.div>
              <motion.p variants={itemAnimation}>
                An experienced visual artist focused on creating unique digital
                experiences that solve end-user needs.
              </motion.p>
              <motion.p variants={itemAnimation}>
                Since I was young I was interested on art and technology, so I
                started developing prototypes of apps and websites from more
                than five years ago. Later on I taught myself to program and
                since then I have dedicated myself to contribute "my grain of
                sand" to transform the Internet into an accessible and inclusive
                place that leaves us a good user experience and facilitates
                daily tasks for everyone.
              </motion.p>
              <motion.p variants={itemAnimation}>
                I firmly believe that navigating a website or an app should not
                be a complex task for anyone and this is achieved through the
                intersection between aesthetics and functionality.
              </motion.p>
              <motion.hr variants={itemAnimation} />
              <motion.div className="space-y-[1rem] pb-[4rem] md:pb-[8rem]">
                <motion.a
                  href="mailto:obeskay.mail@gmail.com"
                  variants={itemAnimation}
                  className="block text-sm spaced-text"
                >
                  Email: obeskay.mail@gmail.com
                </motion.a>
                <motion.a
                  href="tel:5560348476"
                  variants={itemAnimation}
                  className="block text-sm spaced-text"
                >
                  Phone: 55 6034 8476
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

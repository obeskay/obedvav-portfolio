import React from "react";
import Link from "next/link";
import { useAppContext } from "./context/GeneralContext";
import { motion } from "framer-motion";
import Obeskay_logo from "./Obeskay_logo";

const Navbar = () => {
  const { isCursorHover, setCursorHover } = useAppContext();
  const { isCursorContact, setCursorContact } = useAppContext();
  return (
    <nav className="z-[10] hidden w-full md:block md:fixed  backdrop-blur-sm  mix-blend-difference">
      <div className="container flex py-[1rem] mx-auto text-sm  items-center spaced-text space-x-[1rem] justify-between  text-secondary">
        <Link href="/">
          <motion.a
            onHoverStart={() => setCursorHover(true)}
            onHoverEnd={() => setCursorHover(false)}
            onClick={() => setCursorHover(false)}
          >
            <Obeskay_logo />
          </motion.a>
        </Link>
        <div className="space-x-[2rem] flex align-center">
          <Link href="/projects">
            <motion.a
              onHoverStart={() => setCursorHover(true)}
              onHoverEnd={() => setCursorHover(false)}
              onClick={() => setCursorHover(false)}
            >
              My work
            </motion.a>
          </Link>
          <Link href="/me">
            <motion.a
              onHoverStart={() => setCursorHover(true)}
              onHoverEnd={() => setCursorHover(false)}
              onClick={() => setCursorHover(false)}
            >
              About Me
            </motion.a>
          </Link>
          <motion.a
            href="https://wa.me/0525560348476?text=¡Hola Obed!%20Visité tu portafolio."
            target="__blank"
            onHoverStart={() => {
              setCursorHover(true);
              setCursorContact(true);
            }}
            onHoverEnd={() => {
              setCursorHover(false);
              setCursorContact(false);
            }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

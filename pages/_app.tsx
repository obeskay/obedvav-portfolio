import Head from "next/head";
import Cursor from "../components/Cursor";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/global.css";

function App({ Component, pageProps, router }) {
  return (
    <div className="">
      <Head>
        <title>obedvav | portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />
      <motion.div
        animate={{
          width: ["0vw", "100vw", "75vw"],
          right: ["100%", "0%", "-5%"],
          skewX: ["-15deg", "5deg", "5deg"],
        }}
        transition={{
          duration: 1,
          delay: 0,
          ease: "easeInOut",
        }}
        className="absolute h-[100vh] bg-secondary"
      />
      <AnimatePresence>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}

export default App;

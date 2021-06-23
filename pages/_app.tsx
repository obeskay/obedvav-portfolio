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

      <AnimatePresence>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}

export default App;

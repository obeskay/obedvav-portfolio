import Head from "next/head";
import Cursor from "../components/Cursor";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import "../styles/global.css";
import "swiper/swiper.scss";

function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>obedvav | portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />

      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

export default App;

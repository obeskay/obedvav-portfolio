import Head from "next/head";
import Cursor from "../components/Cursor";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GeneralContext from "../components/context/GeneralContext";
import Navbar from "../components/Navbar";

import "../styles/global.css";
import "swiper/swiper.scss";

function App({ Component, pageProps, router }) {
  return (
    <GeneralContext>
      <Head>
        <title>obeskay | portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Cursor />

      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </GeneralContext>
  );
}

export default App;

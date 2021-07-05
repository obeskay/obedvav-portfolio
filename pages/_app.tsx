import Head from "next/head";
import Cursor from "../components/Cursor";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import "../styles/global.css";

function App({ Component, pageProps, router }) {
  return (
    <div className="">
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
    </div>
  );
}

export default App;

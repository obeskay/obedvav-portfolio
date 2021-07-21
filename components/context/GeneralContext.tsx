import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AppContext = createContext(null);

const GeneralContext = ({ children }) => {
  const router = useRouter();
  const { query } = router;
  const [isCursorHover, setCursorHover] = useState(false);
  const [isCursorContact, setCursorContact] = useState(false);

  useEffect(() => {
    setCursorHover(false);
    setCursorContact(false);
  }, [router]);

  const wrapperAnimation = {
    show: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.4, 0.13, 0.23, 0.96],
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        ease: [0.4, 0.13, 0.23, 0.96],
        duration: 0.5,
      },
    },
  };

  return (
    <AppContext.Provider
      value={{
        wrapperAnimation,
        itemAnimation,
        isCursorHover,
        setCursorHover,
        isCursorContact,
        setCursorContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default GeneralContext;

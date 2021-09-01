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

  const customEase = [0.21, 0.83, 0.43, 0.99];

  const wrapperAnimation = {
    show: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.125,
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
        ease: customEase,
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        ease: customEase,
        duration: 0.5,
      },
    },
  };

  const imageWrapperAnimation = {
    hidden: {
      // opacity: 0,
    },
    show: {
      // opacity: 1,
      transition: {
        ease: customEase,
        duration: 0.75,
      },
    },
    exit: {
      // opacity: 0,
      transition: {
        ease: customEase,
        duration: 0.5,
      },
    },
  };

  const imageAnimation = {
    hidden: {
      opacity: 0,
      translateY: "50%",
      scale: 1.1,
    },
    show: {
      opacity: 1,
      translateY: 0,
      scale: 1,
      transition: {
        ease: customEase,
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      translateY: "75%",
      scale: 1.1,
      transition: {
        ease: customEase,
        duration: 0.75,
      },
    },
  };

  return (
    <AppContext.Provider
      value={{
        wrapperAnimation,
        itemAnimation,
        imageWrapperAnimation,
        isCursorHover,
        setCursorHover,
        isCursorContact,
        setCursorContact,
        imageAnimation,
        customEase,
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

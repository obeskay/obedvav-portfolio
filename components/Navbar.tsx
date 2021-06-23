import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full ">
      <div className="container flex py-4 mx-auto text-sm border-b spaced-text space-x-9 align-items-center border-opacity-10 border-dark">
        <Link href="#">
          <a>Trabajo</a>
        </Link>
        <Link href="#">
          <a>Sobre mí</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

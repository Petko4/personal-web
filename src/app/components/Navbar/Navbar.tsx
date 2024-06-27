"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import "C:/Dev/MyProjects/personal-web/src/app/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type HamburgerIconButtonProps = {
  isOpened: boolean;
};

const HamburgerIcon = ({ isOpened }: HamburgerIconButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const hadnleOnMouseEnter = () => setIsHovering(true);
  const handleOnMouseLeave = () => setIsHovering(false);

  let src = "/img/icons/";

  if (isOpened) {
    src += isHovering ? "xmark-solid_hover.svg" : "xmark-solid.svg";
  } else {
    src += isHovering ? "hamburger_icon_hover.svg" : "hamburger_icon.svg";
  }

  return (
    <Image
      onMouseEnter={hadnleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      src={src}
      width={24}
      height={24}
      alt={`${isOpened ? "close menu" : "open menu"}`}
    />
  );
};

export const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav
      className="bg-[url('/img/section-background.png')] text-gray-400 md:w-4/5 md:min-h-16 md:rounded-full p-5 drop-shadow-md 
      w-screen mb-10"
    >
      <ul
        className={`${poppins.className} flex flex-col md:flex-row justify-evenly text-2xl `}
      >
        <div className="flex justify-between">
          <Link href="#home" className="hover:text-white">
            Peťko Peťkovič
          </Link>
          <button className="md:hidden" onClick={() => setIsOpened(!isOpened)}>
            <HamburgerIcon isOpened={isOpened} />
          </button>
        </div>
        <Link
          href="#services"
          className={`hover:text-white ${isOpened ? "" : "hidden"} md:block`}
        >
          Nabídka služeb
        </Link>
        <Link
          href="#aboutme"
          className={`hover:text-white ${isOpened ? "" : "hidden"} md:block`}
        >
          O mně
        </Link>
        <Link
          href="#contact"
          className={`hover:text-white ${isOpened ? "" : "hidden"} md:block`}
        >
          Kontakt
        </Link>
      </ul>
    </nav>
  );
};

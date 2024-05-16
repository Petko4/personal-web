import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const Navbar = () => {
  return (
    <nav
      className="bg-[url('/img/section-background.png')] text-gray-400 md:w-4/5 md:min-h-16 md:rounded-full p-5 drop-shadow-md 
      w-screen"
    >
      <ul
        className={`${poppins.className} flex md:flex-row justify-evenly text-2xl`}
      >
        <Link
          href="#home"
          className="hover:text-white before-content[''] before-position-absolute before-ring-[calc(100% - 3px) 0 0 0] before-bg-red"
        >
          Petr Václavík
        </Link>
        <Link href="#services" className="hover:text-white">
          Nabídka služeb
        </Link>
        <Link href="#aboutme" className="hover:text-white">
          O mně
        </Link>
        <Link href="#contact" className="hover:text-white">
          Kontakt
        </Link>
      </ul>
    </nav>
  );
};

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const Navbar = () => {
  return (
    <nav className="bg-[url('/img/section-background.png')] text-white w-4/5 min-h-16 rounded-full drop-shadow-md p-5">
      <ul className={`${poppins.className} flex justify-center text-2xl`}>
        <li>Petr Václavík</li>
        <li>Nabídka služeb</li>
        <li>O mně</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};

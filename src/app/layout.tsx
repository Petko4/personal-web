import type { Metadata } from "next";
import { Navbar } from "./components/Navbar/Navbar";
// import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer/Footer";

// const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Petr Václavík - SW developer, Network engineer",
  description: "Petr Váaclavík - osobní stránka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col md:p-5 items-center">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

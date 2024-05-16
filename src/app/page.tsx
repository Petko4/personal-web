import { SectionContainer } from "./components/SectionContainer/SectionContainer";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-4/5">
      {/* <SectionContainer>
        <div className="flex">
          <div>
            <p className={`text-3xl ${poppins}`}>
              Programátor, síťový a systémový administrátor, řešitel vašich IT
              problémů.
            </p>
          </div>
          <div>
            <p>Software Developer</p>
            <p>Network Engineer</p>
            <p>System Admin</p>
          </div>
        </div>
      </SectionContainer> */}
    </main>
  );
}

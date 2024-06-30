import Image from "next/image";
import { SectionContainer } from "./components/SectionContainer/SectionContainer";
import { Poppins } from "next/font/google";
import { TitleContainer } from "./components/TitleContainer/TitleContainer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-screen md:w-4/5">
      {/* Intro Section */}
      <SectionContainer className="py-20 mb-10">
        <div
          className={`flex flex-col md:flex-row justify-around ${poppins} items-center`}
        >
          <div className="md:w-1/3">
            {/* <h1 className="text-5xl">Peťko Peťkovič</h1> */}
            <p className={`text-4xl leading-relaxed text-center md:text-left`}>
              Programátor, síťový a systémový administrátor, řešitel vašich IT
              problémů.
            </p>
          </div>
          <hr className="bg-white m-10 w-full md:hidden" />
          <div className="text-4xl text-center blur-text">
            <p className="text-[#4CFC48] ">Software Developer</p>
            <p className="text-cyan-300 p-3">Network Engineer</p>
            <p className="text-fuchsia-500">System Admin</p>
          </div>
        </div>
      </SectionContainer>

      {/* Nabídka služeb section */}
      <div className="flex flex-col items-center w-full mb-10">
        {/* <div className="flex items-center mb-10">
          <Image
            src="/img/icons/service_offer_icon.svg"
            width={50}
            height={50}
            alt="Ikona nabídkz služeb"
          />
          <h2> Nabídka služeb</h2>
        </div> */}
        <TitleContainer
          imgUrl="/img/icons/service_offer_icon.svg"
          imgAlt="Ikona nabídky služeb"
        >
          Nabídka služeb
        </TitleContainer>

        <div className="flex flex-col md:flex-row w-full">
          <pre>
            <code>{`# Software development`}</code>
            <code>{`if is_software_developer_needed:`}</code>
            <code>{`  scroll_to_contact_form()`}</code>
          </pre>
          <SectionContainer className="w-full">
            <p>vývoj prezentačních webů</p>
            <p>vývoj webových aplikací</p>
            <p>vývoj automatizačních skriptů</p>
            <p>scrapování webových stránek</p>
          </SectionContainer>
        </div>
      </div>
    </main>
  );
}

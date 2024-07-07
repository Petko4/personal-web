import Image from "next/image";
import { SectionContainer } from "./components/SectionContainer/SectionContainer";
import { Poppins } from "next/font/google";
import { TitleContainer } from "./components/TitleContainer/TitleContainer";
import { ContactForm } from "./components/ContactForm/ContactForm";

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

        <div className="flex flex-col md:flex-row w-full items-center mb-10">
          <div className="flex flex-auto w-full md:w-3/5 mb-3 justify-center">
            <pre className="text-xl">
              <code className="text-lime-600">{`\# Software development\n`}</code>
              <code className="text-red-600">if</code>
              <code className="text-blue-500">{` is_software_developer_needed:\n`}</code>
              <code className="text-gray-400">{`  scroll_to_contact_form()\n`}</code>
            </pre>
          </div>
          <SectionContainer className="flex justify-center flex-auto w-full md:w-3/5 text-xl ">
            <ul>
              <li>- vývoj prezentačních webů</li>
              <li>- vývoj webových aplikací</li>
              <li>- vývoj automatizačních skriptů</li>
              <li>- scrapování webových stránek</li>
            </ul>
          </SectionContainer>
        </div>

        <div className="flex flex-col-reverse md:flex-row w-full items-center">
          <SectionContainer className="flex justify-center flex-auto w-full md:w-3/5 text-xl ">
            <ul>
              <li>- návrh a správa počítačových sítí</li>
              <li>- konfigurace síťových zařízení</li>
              <li>- konfigurace VPN</li>
              <li>- konfigurace a správa DNS</li>
              <li>- správa SSL certifikátů</li>
            </ul>
          </SectionContainer>
          <div className="flex flex-auto flex-col w-full md:w-3/5 mb-3 items-center">
            <p className="text-cyan-700 text-2xl">Network engineering</p>
            <Image
              src="/img/network-img.png"
              alt="network picture"
              width={350}
              height={300}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mb-10">
        <TitleContainer>Jak mne kontaktovat</TitleContainer>
        <SectionContainer className="w-full flex">
          <div>
            <h3>Napište mi nebo zavolejte</h3>
            <p>
              Obvykle odpovím do 24 hodin. V případě něčeho urgentího raději
              volejte.
            </p>
            <p>petrvaclavik@petrvaclavik.cz</p>
            <p>+420 608 720 809</p>
          </div>
          <ContactForm />
        </SectionContainer>
      </div>
    </main>
  );
}

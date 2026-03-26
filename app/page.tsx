import CtaButton from "@/components/Ctabutton";
import ChallengeCards from "@/components/Challengecards";
import Clientswiper from "@/components/Clientswiper";
import AdvantageCards from "@/components/Advantagecards";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";
import ChecklistSection from "@/components/ChecklistSection";
import Link from "next/link";
import PartnerLogosMarquee from "@/components/Partnerlogosmarquee";
const page = () => {
  return (
    <>
      <section className="bg-[url(/images/herobg.jpg)] bg-no-repeat bg-cover pt-55.75 pb-5">
        <div className="max-w-208 mx-auto w-full text-center">
          <div className="pb-8">
            <h1 className="text-[70px] pb-4 leading-18 font-extrabold text-shadow-xl text-white-1100 uppercase max-w-153.5 w-full mx-auto">
              10 Neukunden in 45 Tagen
            </h1>
            <p className="text-[32px] leading-9.75 text-white-1100 font-medium">
              Durch gezieltes <br /> Online Marketing!
            </p>
          </div>
          <div className="py-4 px-6 bg-black-1100/40 backdrop-blur-[2.5px] rounded-2xl max-w-113.25 w-full mx-auto">
            <ol>
              <li className="flex items-center gap-4">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Top 3 bei Google – und deine Kunden finden dich sofort.
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Doppelt so viele Anfragen in 3 Monaten – ohne hohe
                  Werbekosten.
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  100 % Betreuung – während du dich auf dein Geschäft
                  fokussierst.
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Langfristig bessere Sichtbarkeit und mehr Umsatz. 
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Lokale Sichtbarkeit stärken – mehr Aufträge aus deiner Region.
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Offene Stellen 50 % schneller besetzen – ohne teure Anzeigen.
                </p>
              </li>
            </ol>
          </div>
          <div className="pt-8">
            <CtaButton
              className="mb-5"
              href="/"
              label="Jetzt Kennenlerngespräch buchen!"
            />
            <p className="text-sm font-normal text-white-1100 leading-4.25">
              Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
            </p>
          </div>
          <div className="text-center pt-20">
            <img src="images/scroll-icon.svg" alt="" className="mx-auto" />
          </div>
        </div>
      </section>
      <section className="py-45">
        <div className="max-w-338 w-full mx-auto">
          <div className="flex items-center gap-15">
            <div className="w-[40%]">
              <h2 className="text-5xl font-bold leading-16.75 text-white-1100 pb-3">
                Gemeinsam <br /> mehr erreichen.
              </h2>
              <p className="text-base font-normal leading-5.5 text-white-1100">
                Partnerschaft auf Augenhöhe: Zusammen entwickeln wir
                individuelle Strategien und Lösungen für langfristigen Erfolg.
              </p>
            </div>
            <div className="w-[60%]">
              {/* <ol className="flex items-center gap-6 mb-6">
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon1.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon2.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon3.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon4.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon5.svg" alt="" />
                  </div>
                </li>
              </ol>
              <ol className="flex items-center gap-6">
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon6.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon7.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon8.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon9.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon10.svg" alt="" />
                  </div>
                </li>
              </ol> */}
              <PartnerLogosMarquee />
            </div>
          </div>
        </div>
      </section>
      <section className="audience-sec">
        <div className="max-w-308 px-4 mx-auto w-full relative">
          <div className="flex items-start gap-17.75 relative z-1 rounded-2xl bg-black-1100 pt-22.75 pr-12 shadow-4xl">
            <div className="w-2/5 relative z-1">
              <img
                src="images/audience-img.png"
                alt=""
                className="h-128 object-cover"
              />
            </div>
            <div className="w-3/5 pt-12.5 relative z-1">
              <h2 className="pb-8 text-5xl font-bold leading-16.75 text-white-1100 text-right">
                Erreiche deine Zielgruppe genau dort, wo sie sucht
              </h2>
              <ol className="flex flex-col items-right">
                <li className="pb-6">
                  <div className="flex items-center justify-end">
                    <p className="text-2xl font-semibold leading-8.25 text-white-1100">
                      Mit maßgeschneiderter
                      <span className="text-orange-1100 mx-3">SEO</span>
                    </p>
                    <span>
                      <img src="images/check-icon.svg" alt="" />
                    </span>
                  </div>
                </li>
                <li className="pb-6">
                  <div className="flex items-center justify-end">
                    <p className="text-2xl font-semibold leading-8.25 text-white-1100">
                      Effektiven
                      <span className="text-orange-1100 mx-3">Google Ads</span>
                    </p>
                    <span>
                      <img src="images/check-icon.svg" alt="" />
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-end">
                    <p className="text-2xl font-semibold leading-8.25 text-white-1100">
                      Strategischem
                      <span className="text-orange-1100 mx-3">
                        Online Marketing
                      </span>
                    </p>
                    <span>
                      <img src="images/check-icon.svg" alt="" />
                    </span>
                  </div>
                </li>
              </ol>
            </div>
            <img
              src="images/dots-shape.svg"
              alt=""
              className="absolute top-12 left-1/2 -translate-x-1/2"
            />
          </div>
          <img
            src="images/shade.png"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>
      <section className="pt-45 pb-20">
        <div className="max-w-308 px-4 mx-auto w-full">
          <div className="border-b border-solid border-white-1100/40">
            <h2 className="text-5xl font-bold pb-10 max-w-294.5 mx-auto w-full text-white-1100 leading-16.75 text-center">
              Warum ist
              <span className="text-orange-1100"> Online Marketing </span>
              mit SEO und Google Ads heute unverzichtbar?
            </h2>
          </div>
          <div className="pt-16 text-center pb-8">
            <p className="text-base font-normal leading-5.5 text-white pb-6">
              Stell dir vor, potenzielle Kunden oder Mitarbeiter suchen nach
              genau dem, was du anbietest – und finden dich nicht. In einer
              Welt, in der täglich 8,5 Milliarden Suchanfragen bei Google
              gestellt werden, bedeutet Unsichtbarkeit verlorene Chancen. Deine
              Online-Präsenz ist der Schlüssel, um genau dort sichtbar zu sein,
              wo deine Zielgruppe nach Lösungen sucht.
            </p>
            <p className="text-base font-normal leading-5.5 text-white pb-6">
              Mit gezieltem Online Marketing, sei es SEO, Google Ads oder Social
              Media, erreichst du nicht nur mehr Sichtbarkeit, sondern sprichst
              auch gezielt die richtigen Menschen an. Du musst dich nicht um
              jeden Schritt kümmern – wir übernehmen die Arbeit, von der Planung
              bis zur Umsetzung, damit du dich auf dein Geschäft konzentrieren
              kannst. So gewinnst du nicht nur neue Kunden, sondern weckst auch
              das Interesse potenzieller Mitarbeiter.
            </p>
            <p className="text-base font-semibold leading-5.5 text-white">
              Ist deine Website optimal aufgestellt? Erhalte eine kostenlose
              Kurz-Analyse deiner Website.
            </p>
          </div>
          <div className="text-center">
            <CtaButton
              href="/"
              className="mb-3"
              label="Website-Analyse anfordern"
            />
            <p className="text-xs font-normal leading-4 text-white-1100">
              Finde heraus, wie Online Marketing dir mehr Kunden bringt.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-yellow-1200 via-orange-1100 to-yellow-1200 py-22">
        <div className="max-w-308 px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 mb-16">
            <h2 className="text-5xl text-white-1100 font-bold leading-16.75">
              Kennst auch du diese Herausforderungen?
            </h2>
          </div>
          <ChallengeCards className="mt-16" />
        </div>
      </section>
      <section className="pt-72 pb-42.5">
        <div className="max-w-308 mx-auto w-full px-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold leading-10.5 text-white-1100">
                Potenziale erkennen und Schichtbarkeit steigern
              </h3>
              <p className="text-white text-base font-normal leading-5.5 pt-2">
                Unsere SEO-Checkliste für die Sichtbarkeit deiner Webseite zeigt
                dir in wenigen Minuten, wo du stehst – und vor allem, wo
                ungenutztes Potenzial schlummert und wie dringend dein
                Handlungsbedarf ist.
              </p>
              <ol className="py-4">
                <li className="flex items-center gap-3 pb-2">
                  <span>
                    <img src="images/orange-check.svg" alt="" />
                  </span>
                  <p className="text-base font-medium text-white">
                    Überprüfen, ob meine Website bei Google sichtbar ist
                  </p>
                </li>
                <li className="flex items-center gap-3 pb-2">
                  <span>
                    <img src="images/orange-check.svg" alt="" />
                  </span>
                  <p className="text-base font-medium text-white">
                    Versteckte SEO-Potenziale entdecken
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <img src="images/orange-check.svg" alt="" />
                  </span>
                  <p className="text-base font-medium text-white">
                    Konkreten Optimierungsbedarf sofort erkennen
                  </p>
                </li>
              </ol>
              <CtaButton href="/" label="Kostenlos herunterladen" />
            </div>
            <div className="bg-orange-1100 rounded-xl pt-7 pl-8 flex items-start justify-between">
              <div className="w-1/2">
                <h3 className="text-[25px] font-bold text-white leading-8.75 pb-3">
                  SEO-Checkliste für deine Sichtbarkeit
                </h3>
                <CtaButton
                  href="/"
                  variant="white"
                  label="Jetzt Checkliste anfordern"
                  className="hover:bg-white hover:text-black! pl-5 pr-3"
                />
              </div>
              <div className="h-full w-1/2">
                <img
                  src="images/identify-img.png"
                  alt=""
                  className="h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-66.25 pb-83.5 bg-[url(/images/missionbg.jpg)] bg-no-repeat bg-cover overflow-hidden">
        <div className="max-w-330 w-full px-5 mx-auto">
          <Clientswiper />
        </div>
      </section>
      <section className="py-45 relative">
        <div className="max-w-308 mx-auto px-4 w-full relative z-1">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8">
            <h2 className="text-5xl text-white-1100 font-bold leading-16.75 pb-8">
              Gewinne nachhaltig mehr Neukunden mit deiner Online Marketing
              Agentur aus Hamburg
            </h2>
            <CtaButton
              href="/"
              label="Fragen oder mehr erfahren"
              className="mb-4"
            />
            <p className="text-base leading-5.5 font-normal text-white-1100">
              Nummer eintragen - wir rufen zurück
            </p>
          </div>
          <div className="flex items-center gap-8 pt-16">
            <div className="w-1/2">
              <h3 className="text-[32px] font-medium leading-10 text-white-1100 pb-6">
                Wie kann Online Marketing deine Herausforderungen lösen?
              </h3>
              <p className="text-sm font-normal text-grey-1100 leading-4.25">
                Mit einer gezielten Online Marketing Strategie steigerst du
                deine Reichweite, gewinnst qualifizierte Anfragen und behauptest
                dich am Markt.
                <span className="text-orange-1100">
                  Suchmaschinenoptimierung
                </span>
                (SEO) sorgt dafür, dass deine Website bei Google sichtbar ist,
                wenn potenzielle Kunden und Mitarbeiter nach deinen
                Dienstleistungen suchen.
                <span className="text-orange-1100">Mit Google Ads</span> (SEA)
                erreichst du deine Zielgruppe schnell und gezielt, um
                kurzfristig mehr Anfragen zu generieren. Neben SEO und SEA sind
                Social Media Marketing,
                <span className="text-orange-1100">
                  UI/UX Webdesign und Content-Marketing
                </span>
                wichtig, um langfristig erfolgreich zu bleiben und sowohl Kunden
                als auch Mitarbeiter anzusprechen.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="images/online-marketing.jpg"
                alt=""
                className="rounded-xl shadow-4xl"
              />
            </div>
          </div>
        </div>
        <img
          src="images/marketing-shape.png"
          alt=""
          className="-top-27 w-full h-full left-1/2 absolute -translate-x-1/2"
        />
      </section>
      <section className="pb-45">
        <div className="max-w-330 w-full px-5 mx-auto relative z-40">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-white font-bold text-5xl leading-[140%]">
              Full Stack Online Marketing für deinen Erfolg
            </h2>
            <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6 max-w-250 w-full mx-auto">
              Um deine Ziele zu erreichen, bieten wir ein breites Spektrum an
              Online Marketing Dienstleistungen. Diese Dienstleistungen kannst
              du einzeln oder als Teil einer umfassenden Strategie nutzen, um
              deine Geschäftsziele optimal zu erreichen.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8">
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/seo-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Suchmaschinenoptimierung (SEO)
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  SEO
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Erhöhe deine organische Sichtbarkeit in Suchmaschinen und
                  ziehe mehr qualifizierte Besucher auf deine Website.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/sea-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Suchmaschinenwerbung (SEA)
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  SEA
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Setze gezielte Werbekampagnen ein, um sofortige Sichtbarkeit
                  und schnelle Ergebnisse zu erzielen.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/marketing-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Social Media Marketing{" "}
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  Social Media
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Baue eine starke Präsenz auf relevanten
                  Social-Media-Plattformen auf und steigere deine
                  Markenbekanntheit sowie Kundenbindung.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/webdesign-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    UI/UX Webdesign
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  UI/UX Webdesign
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Gestalte benutzerfreundliche und ansprechende Websites, die
                  Besucher in Kunden verwandeln.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/Videoproduktion-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Videoproduktion{" "}
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  Videoproduktion
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Präsentiere deine Produkte oder Dienstleistungen effektiv mit
                  professionellen Videos.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/Werbung-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    TV-Werbung
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  TV-Werbung
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Erweitere deine Reichweite durch strategisch geplante
                  Fernsehwerbung.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/pr-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Public Relations (PR)
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  Public Relations
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Stärke dein Markenimage und baue Vertrauen durch gezielte
                  PR-Maßnahmen auf.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/Conversion-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Conversion Optimierung
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  Conversion
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Verbessere die Nutzererfahrung auf deiner Website und erhöhe
                  die Anzahl der Besucher, die zu Kunden werden.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-45">
        <div className="max-w-308 px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10">
            <h2 className="text-white-1100 text-5xl font-bold leading-16.75">
              Die Vorteile einer starken Online-Sichtbarkeit
            </h2>
          </div>
          <div className="flex items-center justify-between pt-16 pb-12">
            <h3 className="text-2xl font-semibold leading-8.25 text-grey-1100">
              Dein Nutzen im Überblick:
            </h3>
            <CtaButton
              href="/"
              label="Fragen oder mehr erfahren?"
              variant="transparent"
            />
          </div>
          <AdvantageCards />
        </div>
      </section>
      <section className="pb-45">
        <div className="max-w-308 mx-auto w-full px-4">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 mb-16">
            <h4 className="text-2xl font-semibold leading-8.25 text-white-1100 pb-6">
              <span className="text-orange-1100">
                Möchtest du mehr darüber erfahren,
              </span>{" "}
              wie eine Google Ads Agentur dein Unternehmen voranbringen und die
              Vorteile von Suchmaschinenwerbung voll ausschöpfen kann?
            </h4>
            <p className="text-base font-normal text-white-1100 leading-5.5">
              Vereinbare jetzt dein kostenloses Kennenlerngespräch mit unserer
              Ads Agentur und lass uns gemeinsam deine Ziele erreichen!
            </p>
          </div>
          <div className="flex max-w-249.25 w-full mx-auto">
            <div className="bg-white-1100 rounded-tl-2xl rounded-bl-2xl py-9.5 px-6 w-[36%]">
              <Link href="/" className="mb-13.5 inline-flex">
                <img src="images/benchmedia.svg" alt="" />
              </Link>
              <h3 className="text-xl font-extrabold leading-6 text-orange-1100 uppercase">
                KENNENLERNGESPRÄCH
              </h3>
              <p className="text-xs font-light leading-3.5 text-black-1200 -tracking-[0.12px] py-3">
                30 Minuten - Google Meet
              </p>
              <h4 className="text-black-1200 text-base font-bold leading-5.5 pb-1">
                ONLINE MARKETING BERATUNG
              </h4>
              <p className="text-black-1200 text-sm font-semibold leading-4.75">
                DU VERDIENST ES, ONLINE SICHTBAR ZU SEIN!
              </p>
              <div className="pt-8">
                <p className="text-xs font-normal leading-3.5 -tracking-[0.12px] pb-4">
                  Im Kennenlerngespräch analysieren wir gemeinsam deine
                  Online-Präsenz und besprechen, wie du deine Reichweite,
                  Sichtbarkeit und den Erfolg steigern kannst.
                </p>
                <p className="text-xs font-normal leading-3.5 -tracking-[0.12px] pb-4">
                  <span className="text-orange-1100">
                    Wähle einfach deinen Wunschtermin im Kalender aus
                  </span>{" "}
                  und gib deine Kontaktdaten ein. Du erhältst im Anschluss eine
                  E-Mail mit deinem persönlichen Meeting-Link.
                </p>
                <p className="text-xs font-normal leading-3.5 -tracking-[0.12px]">
                  Wir freuen uns auf unser Treffen!
                </p>
              </div>
            </div>
            <div className="w-[64%]">
              <img
                src="images/calendar-img.jpg"
                alt=""
                className="w-full rounded-tr-2xl rounded-br-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-45">
        <div className="max-w-330 w-full px-5 mx-auto relative z-40">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-white font-bold text-5xl leading-[140%]">
              Du fragst dich, ob dein Online Marketing optimal aufgestellt ist?
            </h2>
            <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6 max-w-250 w-full mx-auto">
              Ob du genügend qualifizierte Kunden erreichst und deine Webseite
              wirklich funktioniert, wie sie sollte? Vielleicht stellst du dir
              auch die Frage, ob sich eine Zusammenarbeit mit BMS lohnt? Diese
              Checkliste hilft dir in wenigen Minuten, genau das herauszufinden.
            </p>
          </div>
          <div className="pt-16">
            <ChecklistSection />
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="max-w-308 px-4 mx-auto w-full ">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10">
            <h2 className="text-5xl text-white-1100 font-bold leading-16.75">
              Wie unsere Online Marketing Strategien 10 Neukunden in 45 Tagen
              brachten – Erfolgreiche Case Studies im Überblick
            </h2>
          </div>
        </div>
        <div className="pt-17 -mx-5 ">
          <div className="max-w-308 px-4 mx-auto w-full ">
            <CaseStudiesSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

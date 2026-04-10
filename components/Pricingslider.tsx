"use client";

import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

interface Article {
  id: number;
  category: string;
  heading: string;
  img: string;
  dic: string;
  dic2: string;
  dic3: string;
  dic4: string;
  paragr: string;
  paragr2: string;
  paragr3: string;
  paragr4: string;
  excerpt: string;
  action: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    category: "Benchmark Media Basis SEO Paket für kleine Unternehmen",
    heading: "Basis SEO Paket",
    img: "/images/check-white.svg",
    dic: "Erstanalyse deiner Website",
    dic2: "Grundlegende Suchmaschinenoptimierung ",
    dic3: "Keyword-Recherche ",
    dic4: "Basis-OnPage-Optimierungen ",
    paragr: "Unser Basis-Paket richtet sich an kleine Unternehmen, die ihre Online-Präsenz optimieren möchten. Es umfasst die wesentlichen Dienstleistungen der Suchmaschinenoptimierung, um deine Sichtbarkeit in den Suchmaschinen zu erhöhen. ",
    paragr2: "Mit einem Fokus auf die Keyword-Recherche, grundlegende OnPage-Optimierungen und eine erste Analyse deiner Website legen wir den Grundstein für deinen digitalen Erfolg. Unsere SEO Agentur   arbeitet eng mit dir zusammen, um sicherzustellen, dass du in den relevanten Suchanfragen besser gefunden wirst.",
    paragr3: "",
    paragr4: "",
    excerpt:
      "Ideal für kleine Unternehmen, die ihre Online-Präsenz verbessern möchten.",
    action: "Mehr erfahren",
  },
  {
    id: 2,
    category: "Benchmark Media Premium SEO Paket für maximale Sichtbarkeit",
    heading: "Premium SEO Paket",
    img: "/images/check-white.svg",
    dic: "Erweiterte Content-Optimierung ",
    dic2: "Fortschrittliche OffPage-Strategien (z. B. Linkbuilding) ",
    dic3: "Individuelle Markenstrategie",
    dic4: "Regelmäßige Analyse und datenbasierte Anpassungen",
    paragr: "Das Premium-Paket ist ideal für Unternehmen, die ernsthafte SEO-Maßnahmen ergreifen möchten, um ihre Sichtbarkeit und Interaktion mit der Zielgruppe zu maximieren. ",
    paragr2: "Neben den Dienstleistungen des Basis-Pakets bietet dieses Paket umfassende SEO-Analysen, Content-Optimierung und OffPage-Strategien wie Linkbuilding. ",
    paragr3: "Unsere SEO Agentur entwickelt maßgeschneiderte Strategien, die dir helfen, in den Suchergebnissen hervorzustechen und eine nachhaltige Markenpräsenz aufzubauen.",
    paragr4: "",
    excerpt:
      "Perfekt für Unternehmen, die mit mehr Sichtbarkeit und einem starken Markenauftritt wachsen wollen.",
    action: "Mehr erfahren",
  },
  {
    id: 3,
    category: "Benchmark Media E-Commerce SEO Paket für deinen Online-Shop",
    heading: "E-Commerce SEO Paket",
    img: "/images/check-white.svg",
    dic: "Spezifische Produktseiten-Optimierung",
    dic2: "Verbesserte Kategorien-Struktur",
    dic3: "Gezielte Conversion Optimierung ",
    dic4: "Strategien zur Umsatzsteigerung",
    paragr: "Für Online-Shops bieten wir ein speziell zugeschnittenes E-Commerce-Paket an. ",
    paragr2: "Dieses Paket beinhaltet die Optimierung von Produktseiten, die Verbesserung der Kategoriestrukturen und gezielte Conversion-Optimierungen. ",
    paragr3: "Unsere SEO Agentur versteht die spezifischen Herausforderungen des E-Commerce und setzt Strategien um, die deinen Umsatz maximieren und die Sichtbarkeit deiner Produkte in den Suchmaschinen steigern. So helfen wir dir, im digitalen Handel erfolgreich zu sein.",
    paragr4: "",
    excerpt:
      "Das ideale Paket für Online-Shops, die ihre Umsätze im digitalen Handel maximieren wollen.",
    action: "Mehr erfahren",
  },
  {
    id: 4,
    category:
      "Individuelle SEO Lösungen von Benchmark Media:Maßgeschneidert für deine Branche",
    heading: "Individuelle SEO Lösungen",
    img: "/images/check-white.svg",
    dic: "Maßgeschneiderte Keyword- und Marktanalyse ",
    dic2: "Strategieentwicklung auf Basis deiner individuellen Ziele ",
    dic3: "Flexible OffPage-Strategien  ",
    dic4: "Fortlaufende Optimierung und Beratung ",
    paragr: "Jedes Unternehmen hat einzigartige Anforderungen, und deshalb bieten wir individuelle SEO-Angebote an. ",
    paragr2: "Unsere maßgeschneiderten Pakete berücksichtigen deine spezifischen Ziele, Zielgruppen und Herausforderungen.",
    paragr3: "Unsere SEO Agentur   erstellt zusammen mit dir eine effektive Strategie, die alle erforderlichen SEO-Dienstleistungen umfasst, um deine Online-Präsenz zu optimieren und deine Geschäftsziele zu erreichen. ",
    paragr4: "Gemeinsam arbeiten wir an Lösungen, die auf die Bedürfnisse deiner Branche abgestimmt sind und dir helfen, im Wettbewerb erfolgreich zu bestehen. ",
    excerpt:
      "Ideal für Unternehmen mit speziellen Anforderungen, die eine individuelle SEO-Strategie zur Maximierung ihres Potenzials benötigen.",
    action: "Mehr erfahren",
  },
  {
    id: 5,
    category: "Benchmark Media Basis SEO Paket für kleine Unternehmen",
    heading: "Basis SEO Paket",
    img: "/images/check-white.svg",
    dic: "Erstanalyse deiner Website",
    dic2: "Grundlegende Suchmaschinenoptimierung ",
    dic3: "Keyword-Recherche ",
    dic4: "Basis-OnPage-Optimierungen ",
    paragr: "Unser Basis-Paket richtet sich an kleine Unternehmen, die ihre Online-Präsenz optimieren möchten. Es umfasst die wesentlichen Dienstleistungen der Suchmaschinenoptimierung, um deine Sichtbarkeit in den Suchmaschinen zu erhöhen. ",
    paragr2: "Mit einem Fokus auf die Keyword-Recherche, grundlegende OnPage-Optimierungen und eine erste Analyse deiner Website legen wir den Grundstein für deinen digitalen Erfolg. Unsere SEO Agentur   arbeitet eng mit dir zusammen, um sicherzustellen, dass du in den relevanten Suchanfragen besser gefunden wirst.",
    paragr3: "",
    paragr4: "",
    excerpt:
      "Ideal für kleine Unternehmen, die ihre Online-Präsenz verbessern möchten.",
    action: "Mehr erfahren",
  },
  {
    id: 6,
    category: "Benchmark Media Premium SEO Paket für maximale Sichtbarkeit",
    heading: "Premium SEO Paket",
    img: "/images/check-white.svg",
    dic: "Erweiterte Content-Optimierung ",
    dic2: "Fortschrittliche OffPage-Strategien (z. B. Linkbuilding) ",
    dic3: "Individuelle Markenstrategie",
    dic4: "Regelmäßige Analyse und datenbasierte Anpassungen",
    paragr: "Das Premium-Paket ist ideal für Unternehmen, die ernsthafte SEO-Maßnahmen ergreifen möchten, um ihre Sichtbarkeit und Interaktion mit der Zielgruppe zu maximieren. ",
    paragr2: "Neben den Dienstleistungen des Basis-Pakets bietet dieses Paket umfassende SEO-Analysen, Content-Optimierung und OffPage-Strategien wie Linkbuilding. ",
    paragr3: "Unsere SEO Agentur entwickelt maßgeschneiderte Strategien, die dir helfen, in den Suchergebnissen hervorzustechen und eine nachhaltige Markenpräsenz aufzubauen.",
    paragr4: "",
    excerpt:
      "Perfekt für Unternehmen, die mit mehr Sichtbarkeit und einem starken Markenauftritt wachsen wollen.",
    action: "Mehr erfahren",
  },
  {
    id: 7,
    category: "Benchmark Media E-Commerce SEO Paket für deinen Online-Shop",
    heading: "E-Commerce SEO Paket",
    img: "/images/check-white.svg",
    dic: "Spezifische Produktseiten-Optimierung",
    dic2: "Verbesserte Kategorien-Struktur",
    dic3: "Gezielte Conversion Optimierung ",
    dic4: "Strategien zur Umsatzsteigerung",
    paragr: "Für Online-Shops bieten wir ein speziell zugeschnittenes E-Commerce-Paket an. ",
    paragr2: "Dieses Paket beinhaltet die Optimierung von Produktseiten, die Verbesserung der Kategoriestrukturen und gezielte Conversion-Optimierungen. ",
    paragr3: "Unsere SEO Agentur versteht die spezifischen Herausforderungen des E-Commerce und setzt Strategien um, die deinen Umsatz maximieren und die Sichtbarkeit deiner Produkte in den Suchmaschinen steigern. So helfen wir dir, im digitalen Handel erfolgreich zu sein.",
    paragr4: "",
    excerpt:
      "Das ideale Paket für Online-Shops, die ihre Umsätze im digitalen Handel maximieren wollen.",
    action: "Mehr erfahren",
  },
  {
    id: 8,
    category:
      "Individuelle SEO Lösungen von Benchmark Media:Maßgeschneidert für deine Branche",
    heading: "Individuelle SEO Lösungen",
    img: "/images/check-white.svg",
    dic: "Maßgeschneiderte Keyword- und Marktanalyse ",
    dic2: "Strategieentwicklung auf Basis deiner individuellen Ziele ",
    dic3: "Flexible OffPage-Strategien  ",
    dic4: "Fortlaufende Optimierung und Beratung ",
    paragr: "Jedes Unternehmen hat einzigartige Anforderungen, und deshalb bieten wir individuelle SEO-Angebote an. ",
    paragr2: "Unsere maßgeschneiderten Pakete berücksichtigen deine spezifischen Ziele, Zielgruppen und Herausforderungen.",
    paragr3: "Unsere SEO Agentur   erstellt zusammen mit dir eine effektive Strategie, die alle erforderlichen SEO-Dienstleistungen umfasst, um deine Online-Präsenz zu optimieren und deine Geschäftsziele zu erreichen. ",
    paragr4: "Gemeinsam arbeiten wir an Lösungen, die auf die Bedürfnisse deiner Branche abgestimmt sind und dir helfen, im Wettbewerb erfolgreich zu bestehen. ",
    excerpt:
      "Ideal für Unternehmen mit speziellen Anforderungen, die eine individuelle SEO-Strategie zur Maximierung ihres Potenzials benötigen.",
    action: "Mehr erfahren",
  },
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="testim-box group bg-[url('/images/galaxy-img3.png')] bg-cover bg-bottom overflow-hidden md:py-8 md:px-6 py-6 px-4 xl:p-8 rounded-2xl h-full border border-solid border-white-1100">
      <div className="text-center">
        <p className="text-white-1100 xl:font-normal text-[10px] leading-sm mb-6 xl:text-xs xl:leading-[140%]">
          {article.category}
        </p>
        <h3 className="text-white-1100 font-bold xl:text-[22px] md:text-sm md:leading-4.75 text-xl leading-6 md:tarcking-normal -tracking-[0.4px] xl:leading-[140%]">
          {article.heading}
        </h3>
      </div>

      <div className="flex flex-col xl:gap-4 md:gap-0 gap-4 w-full mt-6 mb-12 xl:min-h-68.75 min-h-55">
        <div className="hid-box group-hover:hidden">
          <ul className="mb-6 md:min-h-33 xl:min-h-41.75">
            <li className="flex items-center gap-4 mb-2">
              <span className="flex items-center justify-center w-6 h-6">
                <img
                  src={article.img}
                  alt={article.heading}
                  className="group-hover:brightness-0"
                />
              </span>
              <span className="group-hover:text-black-1100 text-white-1100 xl:font-normal xl:text-sm text-[10px] leading-sm font-light xl:leading-[140%] block flex-1">
                {article.dic}
              </span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <span className="flex items-center justify-center w-6 h-6">
                <img
                  src={article.img}
                  alt={article.dic2}
                  className="group-hover:brightness-0"
                />
              </span>
              <span className="group-hover:text-black-1100 text-white-1100 xl:font-normal xl:text-sm text-[10px] leading-sm font-light xl:leading-[140%]  block flex-1">
                {article.dic2}
              </span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <span className="flex items-center justify-center w-6 h-6">
                <img
                  src={article.img}
                  alt={article.dic3}
                  className="group-hover:brightness-0"
                />
              </span>
              <span className="group-hover:text-black-1100 text-white-1100 xl:font-normal xl:text-sm text-[10px] leading-sm font-light xl:leading-[140%]  block flex-1">
                {article.dic3}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex items-center justify-center w-6 h-6">
                <img
                  src={article.img}
                  alt={article.dic4}
                  className="group-hover:brightness-0"
                />
              </span>
              <span className="group-hover:text-black-1100 text-white-1100 xl:font-normal xl:text-sm text-[10px] leading-sm font-light xl:leading-[140%]  block flex-1">
                {article.dic4}
              </span>
            </li>
          </ul>
          <p className="xl:font-normal font-light text-[10px] leading-sm xl:text-xs xl:leading-[140%] text-white-1100 min-h-auto xl:min-h-17">
            {article.excerpt}
          </p>
        </div>
        <div className="block-box hidden group-hover:block xl:min-h-68.75 min-h-55">
          <p className="text-white-1100 font-normal text-xs leading-[140%] mb-3">
            {article.paragr}
          </p>
          <p className="text-white-1100 font-normal text-xs leading-[140%] mb-3">
            {article.paragr2}
          </p>
          <p className="text-white-1100 font-normal text-xs leading-[140%] mb-3">
            {article.paragr3}
          </p>
          <p className="text-white-1100 font-normal text-xs leading-[140%]">
            {article.paragr4}
          </p>
        </div>
      </div>
      <Link
        href={"#"}
        className="learn-more flex items-center justify-center hover:bg-orange-1100  text-white-1100 text-base leading-[150%] font-normal border border-solid border-orange-1100 rounded h-12 w-full"
      >
        {article.action}
      </Link>
    </div>
  );
}

export default function Pricingslider({
  className = "",
}: {
  className?: string;
}) {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Grid],

      direction: "horizontal",
      on: {
        slideChange(s) {
          setActiveIndex(s.realIndex);
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1200: {
          slidesPerView: 3.0,
          spaceBetween: 32,
          grid: {
            rows: 1,
          },
        },
      },
    });

    swiperInstanceRef.current = swiper;
    return () => swiper.destroy(true, true);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div ref={swiperRef} className="swiper overflow-visible!">
        <div className="swiper-wrapper items-stretch">
          {ARTICLES.map((article) => (
            <div key={article.id} className="swiper-slide h-auto!">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 md:gap-7.5 mt-8 md:hidden">
        {ARTICLES.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperInstanceRef.current?.slideToLoop(i)}
            className="h-0.5 w-8 cursor-pointer rounded-full transition-all duration-300"
            style={
              activeIndex === i
                ? {
                  backgroundImage:
                    "linear-gradient(-90deg, #89520e 0%, #ef8f19 54%, #89520e 100%)",
                }
                : { backgroundColor: "#dcdcdc" }
            }
          />
        ))}
      </div>
    </div>
  );
}

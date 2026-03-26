"use client";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const SLIDES = [
  "Wir verstehen ...",
  "diese Herausforderungen und wissen, wie belastend sie sein können...",
  "VIELE UNSERER KUNDEN STANDEN VOR DENSELBEN PROBLEMEN...",
  "und wir haben gezielte Lösungen dafür.",
];
const Clientswiper = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Autoplay],
      direction: "vertical",
      autoHeight: true,
      slidesPerView: "auto",
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 700,
      spaceBetween: 200,
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <div
      ref={swiperRef}
      className="swiper clientSwiper overflow-hidden"
      style={{ height: "auto", minHeight: "250px" }}
    >
      <div className="swiper-wrapper">
        {SLIDES.map((text, i) => (
          <div key={i} className="swiper-slide">
            <div className="text-center">
              <h2 className="text-[80px] font-extrabold leading-20.75 uppercase text-white-1100 text-shadow-xl">
                {text}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientswiper;

"use client";
import "@/assets/css/home/swiper_home.css";
import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useServices } from "../../../mock/HomeServices";
// Import Swiper React components
import { useLocale } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";

export default function App() {
  const locale = useLocale();

  const t = useTranslations("HomePageServices");
  const services = useServices();
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        // spaceBetween={50}
      >
        {services.map((el) => (
          <SwiperSlide key={el.id}>
            <div className="services">
              <h1>{el.title}</h1>
              <p>{el.description}</p>
              <Link href={`/${locale}/${el.route}`}>
                <button>{t("learnMore")}</button>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        {/* <div className='rectangular'>  aKM
                </div> */}
      </Swiper>
    </>
  );
}

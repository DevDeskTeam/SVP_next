'use client'
import '@/assets/css/home/swiper_home.css'
import React, { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useServices } from "../../../mock/HomeServices";


// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
    const t = useTranslations('HomePageServices')
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
                    <SwiperSlide>
                        <div className='services'>
                            <h1>{el.title}</h1>
                            <p>{el.description}</p>
                            <button>{t('learnMore')}</button>
                        </div>
                    </SwiperSlide>
                ))}

                {/* <div className='rectangular'>  aKM
                </div> */}
            </Swiper>
        </>
    );
}


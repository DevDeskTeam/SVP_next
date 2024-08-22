'use client'
import '@/assets/css/home/swiper_home.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={1}
            // spaceBetween={50}

            >
                <SwiperSlide>
                    <div className='services'>
                        <h1>Transportation services</h1>
                        <p>Figma ipsum component variant main layer. Slice list scale figjam prototype slice reesizing. </p>
                        <button>Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='services'>
                        <h1>Transportation services</h1>
                        <p>Figma ipsum component variant main layer. Slice list scale figjam prototype slice reesizing. </p>
                        <button>Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='services'>
                        <h1>Transportation services</h1>
                        <p>Figma ipsum component variant main layer. Slice list scale figjam prototype slice reesizing. </p>
                        <button>Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='services'>
                        <h1>Transportation services</h1>
                        <p>Figma ipsum component variant main layer. Slice list scale figjam prototype slice reesizing. </p>
                        <button>Learn More</button>
                    </div>
                </SwiperSlide>
                {/* <div className='rectangular'>  aKM
                </div> */}
            </Swiper>
        </>
    );
}


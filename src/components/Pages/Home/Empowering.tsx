import React from 'react'
import Image from "next/image";
import styles from "@/assets/css/home/empowering.module.css";
import Background from "@/assets/images/Hero.png";
// import SwiperComponent from '@/components/Swiper/home_swiper';

import '@fontsource/open-sans';
const Empowering = () => {
  return (
    <div>
      <div className={`${styles.banner}`}>
        <Image src={Background} alt="background" />
        <div className={`${styles.text}`}>
          <p>Empowering
            your global trade
            journey</p>
        </div>
        <div className={`${styles.services}`}>
          <h1>Transportation services</h1>
          <p>Figma ipsum component variant main layer. Slice list scale figjam prototype slice reesizing. </p>
          <button>Learn More</button>
        </div>
        {/* <SwiperComponent /> */}
      </div>
    </div>
  )
}

export default Empowering
import React from 'react'
import Image from "next/image";
import styles from "@/assets/css/home/empowering.module.css";
import Background from "@/assets/images/Hero.png";
import Swiper_Home from "@/components/Swiper/home_swiper"
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
        <Swiper_Home />
        {/* <div className={`${styles.rectangular}`}></div> */}
      </div>
    </div>
  )
}

export default Empowering
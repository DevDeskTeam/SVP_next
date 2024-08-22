'use client'
import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Empowering from "@/components/Pages/Home/Empowering";
import Features from "@/components/Pages/Home/Features";
import Services from "@/components/Cards/ServicesCard";
import styles from "@/assets/css/style.module.css";
export default function Home() {
  const t = useTranslations("HomePage");


  // useEffect(() => {
  //   // Function to adjust border height
  //   function adjustBorderHeight() {
  //     document.body.style.borderRight = '5px solid black'; // Apply the border style
  //     document.body.style.height = window.innerHeight + 'px'; // Adjust the body's height
  //   }

  //   // Adjust on load
  //   adjustBorderHeight();

  //   // Adjust on window resize
  //   window.addEventListener('resize', adjustBorderHeight);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', adjustBorderHeight);
  //   };
  // }, []);

  return (
    <>
      <h1>{t("title")}</h1>

      <section>
        <div className="container">
          <Empowering />
        </div>
      </section>
      <section>
        <div className="container">
          <Features />
        </div>
      </section>
      <section>
        <div className={`${styles.banner}`}>
          <div className={`${styles.services}`}>
            <h2 className={`${styles.text} container`}>Services</h2>
            <Services />
            <Services />
            <Services />
            <Services />
          </div>
        </div>
      </section>
    </>
  );
}

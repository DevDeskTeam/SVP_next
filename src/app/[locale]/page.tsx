'use client'
import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Empowering from "@/components/Pages/Home/Empowering";
import Features from "@/components/Pages/Home/Features";
import Services from "@/components/Cards/ServicesCard";
import styles from "@/assets/css/style.module.css";
import About from "@/components/Pages/Home/About";
export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <h1>{t("title")}</h1>

      <section >
        <div className="container">
          <Empowering />
        </div>
      </section>
      <section>
        <div className="container">
          <About />
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

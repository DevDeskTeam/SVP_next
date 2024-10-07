"use client";
import React, { useEffect, useState } from "react";
import styles from "@/assets/css/header/page.module.css";
import { useLocale, useTranslations } from "next-intl";
import Mainlogo from "@/assets/images/Logo (1).png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
// import LocaleSwitcher from "@/Ui/LocaleSwitcher";
import ButtonProps from "@/components/Buttons/Button";
import LocaleSwitcher from "@/Ui/LocaleSwitcher";
const Header: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("Header");
  const handleScrollToAbout = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default link behavior
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const { top } = aboutSection.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + top,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };
  return (
    <header className="container">
      <div className={`${styles.banner}`}>
        <div className={`${styles.left}`}>
          <Link href={`/${locale}/`}>
            <Image src={Mainlogo} alt="SVP" />
          </Link>

          <ul className="flex items-center gap-6">
            <li>
              <Link href={`/${locale}/transportation`}>
                {t("transportation")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/customerbroker`}>{t("customs")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/warehouse`}>{t("warehouse")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/cargo`}>{t("cargo")}</Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.right}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M6.004 10H30.004M6 18H29.994M6.004 26H29.994"
              stroke="#4E4E4E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <ul className="flex items-center gap-6">
            <li>
              <Link href={`/${locale}/`}>
                {t("about")}
              </Link>
            </li>
            <li>{t("contact")}</li>
            <div className={`hidden md:block mr-0 md:mr-8`}>
              <LocaleSwitcher />
            </div>

            <ButtonProps className={styles.button} title="Start trading" />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

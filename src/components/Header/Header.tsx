"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/assets/css/header/page.module.css";
import { useLocale, useTranslations } from "next-intl";
import Mainlogo from "@/assets/images/Logo (1).png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import ButtonProps from "@/components/Buttons/Button";
import LocaleSwitcher from "@/Ui/LocaleSwitcher";

const Header: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("Header");

  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showbar = () => {
    setIsNavOpen((prev) => {
      if (navRef.current) {
        navRef.current.classList.toggle(`${styles.toggle_click}`, !prev);
        document.body.style.overflow = !prev ? "hidden " : "auto";
      }
      return !prev;
    });
  };

  const handleNavItemClick = () => {
    setIsNavOpen(false);
    if (navRef.current) {
      navRef.current.classList.remove(`${styles.toggle_click}`);
    }
    document.body.style.overflow = "auto"; 
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
          <button onClick={showbar} aria-label="Toggle navigation">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <ul className="flex items-center gap-6">
            <li>
              <Link href={`/${locale}/`}>{t("about")}</Link>
            </li>
            {/* <li>
              <Link href={`/${locale}/contact`}>{t("contact")}</Link>
            </li> */}
            <div className={`hidden md:block mr-0 md:mr-8`}>
              <LocaleSwitcher />
            </div>
            <ButtonProps className={styles.button} title="Start trading" />
          </ul>
        </div>
      </div>

      <div className={`${styles.responsive_nav}`} ref={navRef}>
        <div className={`${styles.close} w-full flex justify-end `}>
          <button onClick={showbar} aria-label="Toggle navigation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M18.5 6.00007L6.50012 18M18.5 17.9999L6.50012 6"
                stroke="#4E4E4E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-between">
          <ul>
            <li>
              <Link
                href={`/${locale}/transportation`}
                onClick={handleNavItemClick}
              >
                {t("transportation")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/customerbroker`}
                onClick={handleNavItemClick}
              >
                {t("customs")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/warehouse`} onClick={handleNavItemClick}>
                {t("warehouse")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/cargo`} onClick={handleNavItemClick}>
                {t("cargo")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/`} onClick={handleNavItemClick}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} onClick={handleNavItemClick}>
                {t("contact")}
              </Link>
            </li>
            <div className={`${styles.button_nav}`}>
              <button onClick={handleNavItemClick}>{t("start_trading")}</button>
            </div>
          </ul>
          <div className={`md:block mr-0 md:mr-8`}>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

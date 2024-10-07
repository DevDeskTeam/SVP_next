import React from "react";
import styles from "@/assets/css/home/trading.module.css";
import ButtonProps from "@/components/Buttons/Button";
import { useTranslations } from "next-intl";
// import styles2 from "@/assets/css/header/page.module.css";

const Trading = () => {
  const t = useTranslations("Trading");
  return (
    <div className={` ${styles.banner} mb-[80px] mt-[80px]`}>
      <div className={`${styles.text}`}>
        <p>{t("prepared")}</p>
        <p>{t("trading")}</p>
      </div>
      <div className={`${styles.button}`}>
        <button>{t("start_trading")}</button>
      </div>
    </div>
  );
};

export default Trading;

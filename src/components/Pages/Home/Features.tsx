import FeatureCard from "@/components/Cards/FeatureCard";
import React from "react";
import styles from "@/assets/css/home/features.module.css";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <div className={`${styles.banner}`}>
        <div className={`${styles.text}`}>
          <h2>{t("feature")}</h2>
          <h2>{t("optimization")}</h2>
        </div>
      </div>
      <div className={`${styles.items} `}>
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;

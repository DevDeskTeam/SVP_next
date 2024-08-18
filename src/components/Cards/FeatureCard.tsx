import React from "react";
import styles from "@/assets/css/cards/featurescard.module.css";
const FeatureCard = () => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.first}`}>99%</div>
      <div className={`${styles.info}`}>
        Figma ipsum component variant main layer. Link figma arrow
      </div>
    </div>
  );
};

export default FeatureCard;

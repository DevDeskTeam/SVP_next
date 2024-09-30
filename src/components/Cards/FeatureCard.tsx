import React from "react";
import styles from "@/assets/css/cards/featurescard.module.css";
import { useFeatured } from "../../../mock/HomeFeatured";
const FeatureCard = () => {
  const HomeFeatured = useFeatured();
  return (
    <>
      {HomeFeatured &&
        HomeFeatured.map((el, key) => (
          <div key={el.id} className={`${styles.card}`}>
            <div className={`${styles.first}`}>{el.title}</div>
            <div className={`${styles.info}`}>{el.description}</div>
          </div>
        ))}
    </>
  );
};

export default FeatureCard;

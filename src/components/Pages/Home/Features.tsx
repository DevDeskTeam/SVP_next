import FeatureCard from "@/components/Cards/FeatureCard";
import React from "react";
import styles from "@/assets/css/home/features.module.css";
const Features = () => {
  return (
    <div>
      <div className={`${styles.banner}`}>
        <div className={`${styles.text}`}>
          <h2>The features of</h2>
          <h2>optimization</h2>
        </div>
      </div>
      <div className={`${styles.items} flex items-end gap-4 justify-end md:gap-8 mt-8`} >
        <FeatureCard />
        <FeatureCard />
      </div>
      <div className={`${styles.items} flex items-end gap-4 justify-start md:gap-8 mt-4`} >

        <FeatureCard />
        <FeatureCard />
      </div>
      <div className={`${styles.items} flex items-end gap-4 justify-end md:gap-8 mt-4`} >

        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;

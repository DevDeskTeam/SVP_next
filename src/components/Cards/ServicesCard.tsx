import React from "react";
import styles from "@/assets/css/cards/servicescard.module.css";
const ServicesCard = () => {
  return (
    <div className={`${styles.card}`}>
        <div className={`${styles.card_inner}`}>
          <div className={`${styles.first}`}>
            <span>01</span>
            <h2>Transportation services</h2>
          </div>
          <div className={`${styles.info}`}>
            <p>
              Our trade company ensures safe, efficient, and timely delivery
              through air, sea, and land transport. We handle full and partial
              shipments, offer multimodal solutions, and provide cargo
              insurance, letting you focus on your business growth.
            </p>
          </div>
      </div>
    </div>
  );
};

export default ServicesCard;

import React from "react";
import styles from "@/assets/css/cards/servicescard.module.css";
import { brokerservices } from "../../../mock/BrokerServices";
const BakerServicesCard = () => {
  const Transportservices = brokerservices()
  return (
    <>
    {Transportservices.map((el, key) => (
        <div className={`${styles.card}`}>
        <div key={el.id} className={`${styles.card_inner}`}>
          <div className={`${styles.first}`}>
            <span>{el.number}</span>
            <h2>{el.title}</h2>
          </div>
          <div className={`${styles.info}`}>
            <p>{el.description}</p>
          </div>
        </div>
    </div>
      ))}
      </>
  );
};

export default BakerServicesCard;

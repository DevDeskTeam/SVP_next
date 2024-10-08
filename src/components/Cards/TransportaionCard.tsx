import React from "react";
import styles from "@/assets/css/cards/servicescard.module.css";
import { transportservices } from "../../../mock/TransportationService";
const TransportationServicesCard = () => {
  const Servicesmock = transportservices()
  return (
    <>
    {Servicesmock.map((el, key) => (
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

export default TransportationServicesCard;

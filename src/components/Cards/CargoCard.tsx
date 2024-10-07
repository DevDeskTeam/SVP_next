import React from "react";
import styles from "@/assets/css/cards/servicescard.module.css";
import { cargoservices } from "../../../mock/CargoServices";

const ServicesCard = () => {
  const Cargoservices = cargoservices();

  return (
    <>
      {Cargoservices.map((el) => (
        <div key={el.id} className={`${styles.card}`}>
          <div className={`${styles.card_inner}`}>
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

export default ServicesCard;

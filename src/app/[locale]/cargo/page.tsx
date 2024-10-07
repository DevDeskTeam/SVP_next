import Image from "next/image";
import { useTranslations } from "next-intl";
import Services from "@/components/Cards/ServicesCard";
import styles from "@/assets/css/style.module.css";
import Trading from "@/components/Pages/Home/Trading";
import Service from "@/components/Pages/Transportation/Service";
import CargoCardServices from "@/components/Cards/CargoCard";
import CargoServices from "@/components/Pages/Cargo/Services";
export default function page() {

  return (
    <>
      <section>
        <div className="container">
          <CargoServices />
        </div>
      </section>

      <section>
        <div className={`${styles.banner}`}>
          <div className={`${styles.services}`}>
            <CargoCardServices />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Trading />
        </div>
      </section>
    </>
  );
}

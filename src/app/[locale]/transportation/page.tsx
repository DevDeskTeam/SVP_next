import Image from "next/image";
import { useTranslations } from "next-intl";
import Services from "@/components/Cards/ServicesCard";
import styles from "@/assets/css/style.module.css";
import Trading from "@/components/Pages/Home/Trading";
import Service from "@/components/Pages/Transportation/Service";
import TransportationServicesCard from "@/components/Cards/TransportaionCard";

export default function page() {
  const t = useTranslations("Transportation");

  return (
    <>
      {/* <h1>{t("title")}</h1> */}

      <section>
        <div className="container">
          <Service />
        </div>
      </section>

      <section>
        <div className={`${styles.banner}`}>
          <div className={`${styles.services}`}>

            <TransportationServicesCard />
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

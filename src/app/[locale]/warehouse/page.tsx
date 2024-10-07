import Image from "next/image";
import { useTranslations } from "next-intl";
import Services from "@/components/Cards/ServicesCard";
import styles from "@/assets/css/style.module.css";
import Trading from "@/components/Pages/Home/Trading";
import Service from "@/components/Pages/Transportation/Service";
import WarehouseCard from "@/components/Cards/WarehouseCard";
import WarehouseServices from "@/components/Pages/Warehouse/Services";
export default function page() {
  const t = useTranslations("Transportation");

  return (
    <>
      <section>
        <div className="container">
          <WarehouseServices />
        </div>
      </section>

      <section>
        <div className={`${styles.banner}`}>
          <div className={`${styles.services}`}>

            <WarehouseCard />
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

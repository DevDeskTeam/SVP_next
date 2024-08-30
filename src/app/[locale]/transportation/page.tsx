import Image from "next/image";
import { useTranslations } from "next-intl";
import Services from "@/components/Cards/ServicesCard";
import styles from "@/assets/css/style.module.css";
import Trading from "@/components/Pages/Home/Trading";
export default function page() {
  const t = useTranslations("Transportation");

  return (
    <>
      {/* <h1>{t("title")}</h1> */}

      <section>
        <div className={`${styles.banner}`}>
          <div className={`${styles.services}`}>
            <Services />
            <Services />
            <Services />
            <Services />
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

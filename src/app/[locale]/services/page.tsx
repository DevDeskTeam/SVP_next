import Image from "next/image";
import { useTranslations } from "next-intl";
import Empowering from "@/components/Pages/Home/Empowering";
import Features from "@/components/Pages/Home/Features";
import Services from "@/components/Cards/ServicesCard";
import styles from "@/assets/css/style.module.css";
import CustomerCard from "@/components/Cards/CustomerCard";
import SolutionSect from "@/components/Cards/SolutionSect";
export default function page() {
  const t = useTranslations("HomePage");

  return (
    <>
      <h1>{t("title")}</h1>
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

    </>
  );
}

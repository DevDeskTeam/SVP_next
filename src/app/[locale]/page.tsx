import Image from "next/image";
import { useTranslations } from "next-intl";
import Features from "@/components/Pages/Home/Features";
import Services from "@/components/Cards/ServicesCard";
import styles from "@/assets/css/style.module.css";
import CustomerCard from "@/components/Cards/CustomerCard";
import SolutionSect from "@/components/Cards/SolutionSect";
export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <h1>{t("title")}</h1>
      <section>
        <div className="container">
          <Features />
        </div>
      </section>
      <section>
        <div className="container">
          <div className={`${styles.banner}`}>
            <div className={`${styles.services}`}>
              <h2 className={`${styles.text}`}>Services</h2>
              <Services />
              <Services />
              <Services />
              <Services />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <CustomerCard />
          <SolutionSect />
        </div>
      </section>
    </>
  );
}

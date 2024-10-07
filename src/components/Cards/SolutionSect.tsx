import React, { Children } from "react";
import styles from "@/assets/css/cards/solutionsect.module.css";
import { useTranslations } from "next-intl";

const SolutionSect = () => {
  const t = useTranslations("Solution");
  return (
    <section className={styles.solution_sect}>
      <div className={styles.head_text}>
        <h1>
          {t("business")} <span> </span>
          <span> {t("solution")}</span>
        </h1>
      </div>

      <div className={styles.total}>
        <div className={styles.empty}></div>
        <div className={styles.info}>
          <p>{t("description")}</p>
          <button> {t("touch")}</button>
        </div>
      </div>

      <div className={styles.colored_text}>
        <div className={styles.head}>
          <div className={styles.first_head}>
            <p> {t("products")}</p>
          </div>
          <div className={styles.second_head}>
            <p>{t("organize")}</p>
          </div>
        </div>

        <div className={styles.middle}>
          <div className="empty"></div>
          <div className={styles.right_sect}>
            <p>{t("cooperate")}</p>
          </div>
        </div>

        <div className={styles.foot}>
          <div className={styles.first_foot}>
            <p>{t("credit")}</p>
          </div>
          <div className={styles.second_foot}>
            <p>{t("help")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSect;

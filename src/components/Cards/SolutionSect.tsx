import React, { Children } from "react";
import styles from "@/assets/css/cards/solutionsect.module.css";

const SolutionSect = () => {
  return (
    <section className={styles.solution_sect}>
      <div className={styles.head_text}>
        <h1>
          Business<span> </span>
          <span>solutions</span>
        </h1>
      </div>

      <div className={styles.total}>
        <div className={styles.empty}></div>
        <div className={styles.info}>
          <p>
            In business, reliable partners are an irreplaceable driving force.
            Therefore, we offer you our services as a guarantee for the success
            of your business.
          </p>
          <button>Get in Touch</button>
        </div>
      </div>

      <div className={styles.colored_text}>
        <div className={styles.head}>
          <div className={styles.first_head}>
            <p>Buy products under the best conditions</p>
          </div>
          <div className={styles.second_head}>
            <p>
              To organize production transportation and sale under the best
              conditions
            </p>
          </div>
        </div>

              <div className={styles.middle}>
                  <div className="empty">
                      
                  </div>
                  <div className={styles.right_sect}>
                  <p>
            To cooperate in the realization of promising ideas by contributing
            financially and intellectually, with knowledge.
          </p>
         </div>
        </div>

        <div className={styles.foot}>
          <div className={styles.first_foot}>
            <p>Credit promising projects in case of need</p>
          </div>
          <div className={styles.second_foot}>
            <p>Help to find business partners in EU and CIS countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSect;

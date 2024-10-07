import React from "react";
import styles from "@/assets/css/cards/customercard.module.css";
import { useTranslations } from "next-intl";
import { customerSay } from "../../../mock/CustomerSay";
import Image from "next/image";

const CustomerCard = () => {
  const CustomerSay = customerSay();
  const t = useTranslations("HomePage");
  return (
    <section className={styles.card_section}>
      <div className={styles.head_text}>
        <h1>
          {t("become_our")} <span></span>
          <span>
            {t("satisfied")} <br /> {t("customers")}
          </span>
        </h1>
      </div>

      <div className={styles.cards}>
        {CustomerSay &&
          CustomerSay.map((el) => {
            return (
              <div className={styles.one_card}>
                <div className={styles.card_img}>
                  <Image
                    src={el.image ?? "/path/to/fallback-image.jpg"}
                    width={100}
                    height={50}
                    alt="Joe"
                  />
                </div>
                <div className={styles.card_texts}>
                  <div className={styles.card_header}>
                    <h4>{el.title}</h4>
                    <p>{el.role}</p>
                  </div>

                  <div className={styles.card_main_text}>
                    <svg
                      className={styles.left_svg}
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="32"
                      viewBox="0 0 43 32"
                      fill="none"
                    >
                      <path
                        d="M42.2834 0C41.3892 3.27878 40.495 6.83433 39.6008 10.6667C38.7492 14.4564 37.9614 18.2036 37.2375 21.9082C36.5136 25.6128 35.9388 28.9767 35.513 32H24.2076L23.2495 30.5948C24.016 27.4864 24.9953 24.165 26.1876 20.6307C27.4225 17.0965 28.7425 13.5622 30.1477 10.0279C31.5955 6.4511 33.0432 3.10845 34.491 0H42.2834ZM18.7784 0C17.8842 3.27878 16.99 6.83433 16.0958 10.6667C15.2442 14.4564 14.4564 18.2036 13.7325 21.9082C13.0086 25.6128 12.4338 28.9767 12.008 32H0.766467L0 30.5948C0.766467 27.4864 1.72455 24.165 2.87425 20.6307C4.06653 17.0965 5.36527 13.5622 6.77046 10.0279C8.17565 6.4511 9.60213 3.10845 11.0499 0H18.7784Z"
                        fill="#0782D5"
                        fill-opacity="0.3"
                      />
                    </svg>
                    <h5>" {el.description} "</h5>
                    <svg
                      className={styles.right_svg}
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="32"
                      viewBox="0 0 43 32"
                      fill="none"
                    >
                      <path
                        d="M0.716797 32C1.61101 28.7212 2.50522 25.1657 3.39943 21.3333C4.25106 17.5436 5.03882 13.7964 5.76271 10.0918C6.48659 6.38722 7.06144 3.02329 7.48726 0L18.7926 9.88348e-07L19.7507 1.40519C18.9843 4.51364 18.0049 7.835 16.8126 11.3693C15.5777 14.9035 14.2577 18.4378 12.8525 21.9721C11.4048 25.5489 9.95698 28.8915 8.50921 32H0.716797ZM24.2218 32C25.116 28.7212 26.0102 25.1657 26.9044 21.3333C27.7561 17.5436 28.5438 13.7964 29.2677 10.0918C29.9916 6.38723 30.5664 3.02329 30.9922 2.05487e-06L42.2338 3.03764e-06L43.0002 1.40519C42.2338 4.51364 41.2757 7.835 40.126 11.3693C38.9337 14.9035 37.635 18.4378 36.2298 21.9721C34.8246 25.5489 33.3981 28.8915 31.9503 32H24.2218Z"
                        fill="#0782D5"
                        fill-opacity="0.3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default CustomerCard;

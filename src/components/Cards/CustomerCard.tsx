import React from "react";
import styles from "@/assets/css/cards/customercard.module.css";

const CustomerCard = () => {
  return (
    <section className={styles.card_section}>
      <div className={styles.head_text}>
        <h1>
          Become our <span></span>
          <span>
            satisfied <br /> customers!
          </span>
        </h1>
      </div>

      <div className={styles.cards}>
        <div className={styles.one_card}>
          <div className={styles.card_img}>
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/e7bd/cac5/3994077cdffb2da93e0595fa2c15f509?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VRKGVx7Wqu6cufDc~XNpR1X~ZSIz-fWFVKTknV0pr3zSGwoyqed1P0r0vXdyzpp~cC9oE86UfwVSlZ8erNG9CyyNSseidK48PvQzcjIr1AGhvoybrJjNoUM0nN8YMZ5bfUt8q4-sl2i14I7TV83JUp9PIHhgAtQPh~PWlSl3p5N4WFCuGR6P8-91lCUucEjywqN-kn6ZiDI6UcYbXUncRfQXa9DTAHTfGtptvOH~URelhxqWPX4UOEQzTQ01HnTMm5DnxXwlN7KB38fDh-GEqGH7Vq28~j4M3kfVp-EwoGwNzWpgjh41EjqiPKPISAj6fA4hiU0bTNF6lyTXux5qgA__"
              }
              alt=""
            />
          </div>
          <div className={styles.card_texts}>
            <div className={styles.card_header}>
              <h4>John Smith</h4>
              <p>CEO of Acme Manufacturing</p>
            </div>

            <div className={styles.card_main_text}>
              <svg className={styles.left_svg}
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
              <h5>
                "We rely on SVP company for all our international transportation
                needs. They consistently deliver our cargo on time and within
                budget, regardless of the destination. Their communication is
                excellent, keeping us informed throughout the entire shipping
                process. We highly recommend for any company seeking reliable
                and efficient transportation services. "
              </h5>
              <svg
                className={styles.right_svg }
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

        <div className={`${styles.one_card} ${styles.special_card}`}>
          <div className={styles.card_img}>
            <img
              src="https://s3-alpha-sig.figma.com/img/dd9f/cb55/fca20ce4e29a06b105187e40062a7252?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWCLW07QhMwOtU5ml9UIDZV0tLd~RGcUAvjySPCiOhE~z9SKb5hLSJLNGRpODj5VpADsLaZEfpslHYfPn~g-UobDA4wiejQzjJHFPiLSbQ4Gwq88BbGAbMz4KcFGeqk1ilM4tVJbGuiF5baC1AiIIBeEOC-2OnG-s2zF5DrOMsnImSWggLxvlaMkxfiZh~Bs-Xq5jzgL26qQcSV~MVLcztB1~baDqxA8YjbqXhmB8YXZwQCE5PYuS4OoFLh22JHDor-sLHtMEULjs9URnMj0Jw0M4yYLiXx~ExWA3UcWXSRw5G79GzkltVyrvV8WuanpbM0lnEnjk2IwZDY6QIeRAQ__"
              alt=""
            />
          </div>
          <div className={styles.card_texts}>
            <div className={styles.card_header}>
              <h4>Maria Garcia</h4>
              <p>Supply Chain Director at Technovation Inc</p>
            </div>

            <div className={styles.card_main_text}>
            <svg className={styles.left_svg}
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
              <h5>
                "Peace of mind is priceless in our business. SVP's cargo
                insurance plans have saved us on multiple occasions. Their
                comprehensive coverage options provide us with the security we
                need to ship our valuable merchandise worldwide We especially
                appreciate their prompt and hassle-free claims process . "
              </h5>
              <svg
                className={styles.right_svg }
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
        <div className={styles.one_card}>
          <div className={styles.card_img}>
            <img
              src="https://s3-alpha-sig.figma.com/img/4e04/8658/7541a70c67049d75bf119711c2009e5f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkrGovSGKusglZeeL-InhnyYbjZHZcSFbAi5Xqy9r4bSrYEMnKtUky9AqNcmpgHeayA1VwWVG4ij3FFNSaCJ08fsVwi1TXfm9Vr8PMFOlyTepdOH7Y2221CUxLfnC9c8P~09fgFAlnvpY7bCM2Mt2aA7tOWxud-glYnA~-hQQS4JkeWpNDAQ8G~OQuX-lzag9ZgA0FL4rIYrqLqyX4ef1HFp1CfrqgAuJx8r6Wfl-26WEBPQyoNcdRZmQVhodydWXx5lxB16utGNwzhjOQslZw~UJ8TdZbfpSwz0HBRaAbOFeJt1beJWHsDFNxv~2hE2vTxg4mWDai-O3tmajX-~Cg__"
              alt=""
            />
          </div>
          <div className={styles.card_texts}>
            <div className={styles.card_header}>
              <h4>David Patel</h4>
              <p>Owner of Patel International Shipping</p>
            </div>

            <div className={styles.card_main_text}>
            <svg className={styles.left_svg}
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
              <h5>
                "Since partnering with SVP for our warehousing needs, our
                inventory management has become a seamless operation. Their
                facilities are secure and well-maintained, and their staff is
                incredibly professional and responsive. The scalability of their
                services allows us to adjust our storage needs as our business
                grows, which is a huge advantage. "
              </h5>
              <svg
                className={styles.right_svg }
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
      </div>
    </section>
  );
};

export default CustomerCard;

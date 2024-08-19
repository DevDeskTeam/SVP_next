import React from "react";
import styles from "@/assets/css/cards/customercard.module.scss";

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
                src={'https://s3-alpha-sig.figma.com/img/e7bd/cac5/3994077cdffb2da93e0595fa2c15f509?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VRKGVx7Wqu6cufDc~XNpR1X~ZSIz-fWFVKTknV0pr3zSGwoyqed1P0r0vXdyzpp~cC9oE86UfwVSlZ8erNG9CyyNSseidK48PvQzcjIr1AGhvoybrJjNoUM0nN8YMZ5bfUt8q4-sl2i14I7TV83JUp9PIHhgAtQPh~PWlSl3p5N4WFCuGR6P8-91lCUucEjywqN-kn6ZiDI6UcYbXUncRfQXa9DTAHTfGtptvOH~URelhxqWPX4UOEQzTQ01HnTMm5DnxXwlN7KB38fDh-GEqGH7Vq28~j4M3kfVp-EwoGwNzWpgjh41EjqiPKPISAj6fA4hiU0bTNF6lyTXux5qgA__'}
                alt=""
              />
            </div>
                      <div className={styles.card_texts}>
                      <div className={styles.card_header}>
              <h4>John Smith</h4>
              <p>CEO of Acme Manufacturing</p>
            </div>

            <div className={styles.card_main_text}>
              <h5>
                "We rely on SVP company for all our international transportation
                needs. They consistently deliver our cargo on time and within
                budget, regardless of the destination. Their communication is
                excellent, keeping us informed throughout the entire shipping
                process. We highly recommend for any company seeking reliable
                and efficient transportation services. "
              </h5>
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
              <h5>
                "Peace of mind is priceless in our business. SVP's cargo insurance plans have saved us on multiple occasions. Their comprehensive coverage options provide us with the security we need to ship our valuable merchandise worldwide   We especially appreciate their prompt and hassle-free claims process . "
              </h5>
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
              <h5>
              "Since partnering with SVP for our warehousing needs, our inventory management has become a seamless operation. Their facilities are secure and well-maintained, and their staff is incredibly professional and responsive. The scalability of their services allows us to adjust our storage needs as our business grows, which is a huge advantage. "
              </h5>
            </div>
          </div>
          </div>        
        </div>
      </section>
   
  );
};

export default CustomerCard;





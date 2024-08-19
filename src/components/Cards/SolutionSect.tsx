import React, { Children } from 'react'
import styles from "@/assets/css/cards/customercard.module.scss";

const SolutionSect = () => {
  return (
      <section className={styles.solution_sect} >
          <div className={styles.head_text}>
          <h1>
          Business<span></span>
            <span>
            solutions
            </span>
          </h1>
          </div>
          
          <div className={styles.info}>
              <p>In business, reliable partners are an irreplaceable driving force. Therefore, we offer you our services as a guarantee for the success of your business.</p>
              <button>
                  Get in Touch
              </button>
          </div>
          
      </section>
      
  )
}

export default SolutionSect

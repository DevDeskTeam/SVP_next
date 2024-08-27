import React from 'react'
import styles from "@/assets/css/home/trading.module.css";
import ButtonProps from "@/components/Buttons/Button";
// import styles2 from "@/assets/css/header/page.module.css";

const Trading = () => {
    return (
        <div className={`${styles.banner}`}>
            <div className={`${styles.text}`}>
                <p>Are you prepared for a</p>
                <p>Trading Adventure?</p>
            </div>
            <div className={`${styles.button}`}>
                <button>Start trading</button>
            </div>
        </div>
    )
}

export default Trading
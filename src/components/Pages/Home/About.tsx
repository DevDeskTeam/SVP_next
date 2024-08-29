import React from 'react'
import styles from "@/assets/css/home/about.module.css";

const About = () => {
    return (
        <div className={`${styles.banner}`}>
            <div className={`${styles.text_about}`}>
                <p>About us</p>
            </div>
            <div className={`${styles.text_desc}`}>
                <p>
                    UAB "Sinerginiai Verslo Projektai" is a qualified, innovative and professional partner for your business in Europe. We are a team that develops international cooperation in the field of logistics and trade. We work with companies from the European Union and CIS countries, mediate, cooperate, provide intellectual and financial support for promising projects.
                </p>
            </div>
        </div>
    )
}

export default About
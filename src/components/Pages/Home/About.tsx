import React from 'react'
import styles from "@/assets/css/home/about.module.css";
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations('HomeAbout')
    return (
        <div className={`${styles.banner}`}>
            <div className={`${styles.text_about}`}>
                <p>{t('trade')}</p>
            </div>
            <div className={`${styles.text_desc}`}>
                <p>
                  {t('description2')}
                </p>
            </div>
            <div className={`${styles.text_about} mt-[100px]`}>
                <p>{t('about')}</p>
            </div>
            <div className={`${styles.text_desc}`}>
                <p>
                  {t('description')}
                </p>
            </div>
        </div>
    )
}

export default About
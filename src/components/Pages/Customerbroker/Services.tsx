import React from 'react'
import styles from "@/assets/css/transportation/transportation.module.css";
import Image from 'next/image';
import Truck from '@/assets/images/Transportation/truck.png'
import Airplane from '@/assets/images/Transportation/airplane.png'
import Ship from '@/assets/images/Transportation/ship.png'
import Train from '@/assets/images/Transportation/train.png'
import { useTranslations } from 'next-intl';
const BrokerServices = () => {
    const t = useTranslations('CustomerBrokerPage')
    return (
        <div className={`${styles.banner}`}>
            <div className={`${styles.left_side}`}>
                <div className={`${styles.title}`}>
                    <h1>{t('transportation')}</h1>
                    <h1>{t('services')}</h1>
                </div>
                <div className={`${styles.desc}`}>
                    <p>{t('description')}</p>
                </div>
                <div className={`${styles.button}`}>
                    <button>{t('start_trading')}</button>
                </div>
            </div>
            <div className={`${styles.right_side}`}>
                <div className={`${styles.image_up}`}>
                    <Image src={Truck} alt='truck' />
                    <Image src={Airplane} alt='airplane' />
                </div>
                <div className={`${styles.image_down}`}>
                    <Image src={Ship} alt='ship' />
                    <Image src={Train} alt='train' />
                </div>
            </div>
        </div>
    )
}

export default BrokerServices;
import React from 'react'
import styles from "@/assets/css/transportation/transportation.module.css";
import Image from 'next/image';
import Truck from '@/assets/images/Transportation/truck.png'
import Airplane from '@/assets/images/Transportation/airplane.png'
import Ship from '@/assets/images/Transportation/ship.png'
import Train from '@/assets/images/Transportation/train.png'
const Service = () => {
    return (
        <div className={`${styles.banner}`}>
            <div className={`${styles.left_side}`}>
                <div className={`${styles.title}`}>
                    <h1>Transportation</h1>
                    <h1>services</h1>
                </div>
                <div className={`${styles.desc}`}>
                    <p>Our trade company ensures safe, efficient, and timely delivery through air, sea, and land transport. We handle full and partial shipments, offer multimodal solutions, and provide cargo insurance, letting you focus on your business growth.</p>
                </div>
                <div className={`${styles.button}`}>
                    <button>Start trading</button>
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

export default Service
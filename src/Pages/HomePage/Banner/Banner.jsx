import React from 'react';
import { Link } from 'react-router-dom';
import banner from './banner.module.css'

const Banner = () => {
    return (
        <div className={banner.bannerWrapper}>
            <div className={banner.bannerInner}>
                <div className={banner.info}>
                    <p className={banner.days}>40 дней<span className={banner.line}></span></p>
                    <h3 className={banner.detox}>Полный детокс курс</h3>
                    <h1 className={banner.treasure}>TREASURE</h1>
                    <p className={banner.text}>Для комплексного улучшения физического и ментального здоровья, прививающий правильные привычки.</p>
                    <Link className={banner.btn}>Каталог товаров</Link>
                </div>
                <div className={banner.productBox}>
                    <img className={banner.product} src="/images/box.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
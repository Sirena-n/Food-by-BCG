import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pop from './popProduct.module.css'

const PoplarProduct = () => {

    const [productStatus, setProdStatus] = useState('popular')

    return (
        <div className={pop.container}>
            <div className={pop.popTop}>
                <h2 className={pop.title}>Популярные товары</h2>
                <ul className={pop.choice}>
                    <li className={pop.li} onClick={() => setProdStatus('popular')}>Популярные товары <span className={`${productStatus === 'popular' && pop.underline}`}></span></li>
                    <li className={pop.li} onClick={() => setProdStatus('newProduct')}>Новые товары <span className={`${productStatus === 'newProduct' && pop.underline} `}></span></li>
                </ul>
            </div>
            <div className={pop.cardWrapper}>
                <div className={pop.card}>
                    <h3>Detox набор</h3>
                    <p>35 грамм</p>
                    <div className={pop.cardInner}>
                        <Link>
                            <img className={pop.img} src="/images/cardImg.png" alt="" />
                        </Link>

                        <div className={pop.cardInfo}>
                            <p>Sorbent + Antifungal</p>
                            <p>790₽</p>
                        </div>
                    </div>
                </div>
                <div className={pop.seeMore}>
                    <div className={pop.line}></div>
                    <button className={pop.allProduct}>Все товары</button>
                    <div className={pop.line}></div>
                </div>
            </div>

        </div>
    );
};

export default PoplarProduct;
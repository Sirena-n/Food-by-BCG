import React from 'react';
import a from './Three.module.css'
import { Link } from 'react-router-dom';

const BannerThree = () => {
    return (
        <div className={a.wrapper}>
            <img className={a.img} src="/images/photo.png" alt="" />
            <div className={a.postsWrapper}>
                <div className={a.postsInner}>
                    <div className={a.posts}>
                        <h3>Всесторонний подход</h3>
                        <h2>к красоте</h2>
                        <p>Мы заботимся о восприятии нашего продукта и стараемся, чтобы 4ood был не только полезен, но и приятен эстетически.</p>
                        <Link className={a.btn}>В каталог</Link>
                    </div>
                    
                </div>
                <div className={a.border}></div>
                <img className={a.bottle} src="/images/product photo.png" alt="" />
            </div>
        </div>
    );
};

export default BannerThree;
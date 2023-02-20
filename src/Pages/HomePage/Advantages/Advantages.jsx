import React from 'react';
import a from './Advantages.module.css'
const Advantages = () => {
    return (
        <div className={a.container}>
            <h1 className={a.title}>Наши преимущества</h1>
            <div className={a.wrapper}>
                <div className={a.logoInner}>
                    <img className={a.logo} src="/images/image 19.png" alt="" />
                    <img className={a.logoName} src="/images/image 18.png" alt="" />
                </div>

                <div className={a.itemInner}>
                    <div className={a.item}>
                        <img className={a.itemImg} src='/images/1339-sale-outline 1.png' alt="" />
                        <div className={a.posts}>
                            <h3 className={a.itemTitle}>Регулярные акции и распродажи</h3>
                            <p>Заказывайте регулярно и получайте скидки от нашего магазина БАД-ов 4ood</p>
                        </div>
                    </div>
                    <div className={a.item}>
                        <img className={a.itemImg} src='/images/smile.png' alt="" />
                        <div className={a.posts}>
                            <h3 className={a.itemTitle}>Польза для вашего здоровья</h3>
                            <p>Заказывайте регулярно и получайте скидки от нашего магазина БАД-ов 4ood</p>
                        </div>
                    </div>
                    <div className={a.item}>
                        <img className={a.itemImg} src='/images/box2.png' alt="" />
                        <div className={a.posts}>
                            <h3 className={a.itemTitle}>Бесплатная доставка</h3>
                            <p>Заказывайте регулярно и получайте скидки от нашего магазина БАД-ов 4ood</p>
                        </div>
                    </div>
                    <div className={a.item}>
                        <img className={a.itemImg} src='/images/doc.png' alt="" />
                        <div className={a.posts}>
                            <h3 className={a.itemTitle}>Сертификация товаров</h3>
                            <p>Заказывайте регулярно и получайте скидки от нашего магазина БАД-ов 4ood</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
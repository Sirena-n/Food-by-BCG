import React from 'react';
import { Link } from 'react-router-dom';
import a from './Treasure.module.css'

const Treasure = () => {
    return (
        <>
            <img className={a.img} src="./images/image 10.png" alt="" />
                <div className={a.info}>
                    <h3>Полный детокс курс</h3>
                    <h2>
                        TREASURE
                    </h2>
                    <p>Для комплексного улучшения физического и <br /> ментального здоровья, прививающий <br /> правильные привычки.</p>
                    <p className={a.price}>2790₽</p>
                    <div className={a.btns}>
                        <Link className={a.more}>ПОДРОБНЕЕ</Link>
                        <Link className={a.buy}>КУПИТЬ</Link>
                    </div>
                </div>
        </>
    );
};

export default Treasure;
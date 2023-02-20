import React from 'react';
import a from './bannerTwo.module.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className={a.wrapper}>
            <div className={a.container}>
                <div className={a.posts}>
                    <h3 className={a.sTitle}>с нами у тебя есть все, чтобы</h3>
                    <h2 className={a.title}>ЖИТЬ АКТИВНО</h2>
                    <p>Попробуй наши товары для комплексного улучшения физического и ментального здоровья, прививающий правильные привычки.</p>
                    <Link className={a.btn}>В КАТАЛОГ</Link>
                    
                </div>
                <p className={a.bgText}>Active</p>
                <img className={a.banner} src="/images/graphic.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import a from './Reviews.module.css'

const Reviews = () => {
    return (
        <div className={a.container}>
            <h2>Отзывы о нас</h2>

            <div className={a.item}>
                <img className={a.quotes} src="/images/lol.png" alt="" />
                <p className={a.discription}>
                    Я вынуждена использовать в работе вспомогательные компоненты, воздействовать на организм изнутри. 
                    Мне важен результат, а результат зависит от используемых мною средств - поэтому я выбираю 4FOOD company
                </p>
                <div className={a.line}></div>
                <div className={a.profileInner}>
                    <h4>Амира Х.</h4>
                    <p className={a.prof}>Врач-подолог</p>
                    <img className={a.profile} src="/images/image 5.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
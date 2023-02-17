import React, { useState } from 'react';
import set from './sets.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Sets = () => {

    const [sets , setSets] = useState('treasure')

    return (
        <div className={set.wrapper}>
            <div className={set.tabs}>
                <h2>Наши наборы</h2>
                <ul className={set.table}>
                    <li onClick={()=>setSets('treasure')}>TREASURE <span className={`${sets === 'treasure' && set.underline}`}></span></li>
                    <li onClick={()=>setSets('newWorld')}>Новый мир <span className={`${sets === 'newWorld' && set.underline}`}></span></li>
                    <li onClick={()=>setSets('healthy')}>Здоровье тела <span className={`${sets === 'healthy' && set.underline}`}></span></li>
                    <li onClick={()=>setSets('detox')}>Detox <span className={`${sets === 'detox' && set.underline}`}></span></li>
                    <ArrowRightAltIcon className={set.arrow} />
                </ul>
            </div>
            <div className={set.line}></div>
            <div className={set.setsInner}>
                <img className={set.img} src="./images/image 10.png" alt="" />
                <div className={set.info}>
                    <h3>Полный детокс курс</h3>
                    <h2>TREASURE</h2>
                    <p>Для комплексного улучшения физического и ментального здоровья, прививающий правильные привычки.</p>
                    <p>2790₽</p>
                    <div className={set.btns}>
                        <button>Подробнее</button>
                        <button>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sets;
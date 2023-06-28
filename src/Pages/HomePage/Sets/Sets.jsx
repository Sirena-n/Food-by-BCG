import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { setsFilter } from '../../../Utils/Arrays';

import set from './sets.module.css'

const Sets = () => {

    const [sets, setSets] = useState('TREASURE')

    const handleSets = (set) => {
        setSets(sets === set ? null : set)
    }

    return (
        <div className={set.wrapper}>
            <div className={set.tabs}>
                <h2>Наши наборы</h2>
                <ul className={set.table}>
                    {
                        setsFilter.map(el =>(
                            <li key={el} className={sets === el ? 'underlined' : ''} onClick={() => handleSets(el)}>{el}</li>
                        ))
                    }
                    <ArrowRightAltIcon className={set.arrow} />
                </ul>
            </div>
            <div className={set.line}></div>
            <div className={set.setsInner}>
                <img className={set.img} src="./images/image 10.png" alt="" />
                <div className={set.info}>
                    <h3>Полный детокс курс</h3>
                    <h2>
                        TREASURE
                    </h2>
                    <p>Для комплексного улучшения физического и <br /> ментального здоровья, прививающий <br /> правильные привычки.</p>
                    <p className={set.price}>2790₽</p>
                    <div className={set.btns}>
                        <Link className={set.more}>ПОДРОБНЕЕ</Link>
                        <Link className={set.buy}>КУПИТЬ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sets;
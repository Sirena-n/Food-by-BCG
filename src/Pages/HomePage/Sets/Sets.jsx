import React, { useState } from 'react';
import set from './sets.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Treasure from './Treasure/Treasure';
import NewWorld from './NewWorld/NewWorld';
import Healthy from './HealthyBody/Healthy';
import Detox from './Detox/Detox'


const Sets = () => {

    const [sets , setSets] = useState('treasure')

    return (
        <div className={set.wrapper}>
            <div className={set.tabs}>
                <h2>Наши наборы</h2>
                <ul className={set.table}>
                    <li onClick={()=>setSets('treasure')}>TREASURE <span className={`${sets === 'treasure' && set.underline}`}></span></li>
                    <li onClick={()=>setSets('newWorld')}>НОВЫЙ МИР <span className={`${sets === 'newWorld' && set.underline}`}></span></li>
                    <li onClick={()=>setSets('healthy')}>ЗДОРОВЫЕ ТЕЛА<span className={`${sets === 'healthy' && set.underline}`}></span></li>
                    <li onClick={()=>setSets('detox')}>DETOX<span className={`${sets === 'detox' && set.underline}`}></span></li>
                    <ArrowRightAltIcon className={set.arrow} />
                </ul>
            </div>
            <div className={set.line}></div>
            <div className={set.setsInner}>
                {
                    sets === 'treasure' ? <Treasure/> :
                    sets === 'newWorld' ? <NewWorld/> :
                    sets === 'healthy' ? <Healthy/> : 
                    sets === 'detox' ? <Detox/> :
                    ''
                }
            </div>
        </div>
    );
};

export default Sets;
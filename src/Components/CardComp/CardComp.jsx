
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';

import pop from './CardComp.module.css';

const CardComp = ({ quantityProducts, data }) => {

    const currentProducts = data.slice(0, quantityProducts)
   
    return (
        <>
            {
                currentProducts.map((item) => (
                    <div key={item.id} className={pop.card}>
                        <div className={pop.cardTop}> 
                            <h3>{item.set}</h3>
                            <p className={pop.weight}>{item.weight}</p>
                            <p className={item.status ? `${pop.statusNew}` : `${pop.statusTop}`}>{item.status ? 'NEW' : 'TOP'}</p>
                            <p className={item.sale? `${pop.sale}` : ''}>{item.sale && '-50%'}</p>
                        </div>
                        <div key={item.id} className={pop.cardDiscription}>
                            <Link to={`/single/${item.id}`}>
                                <img className={pop.img} src={item.img} alt="" />
                            </Link>
                            <div className={pop.cardInfo}>
                                <p className={pop.cardTitle}>{item.title}</p>
                                <p className={pop.arrow}><EastIcon /></p>
                                <p className={pop.price}>{item.sale ? item.price/2 : item.price}₽</p>
                            </div>
                        </div>
                    </div >
                ))
            }
        </>
    )
};

export default CardComp;
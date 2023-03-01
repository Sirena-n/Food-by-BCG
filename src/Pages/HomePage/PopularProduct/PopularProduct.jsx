import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import pop from './popProduct.module.css'
import EastIcon from '@mui/icons-material/East';

const PopularProduct = () => {

    const [productStatus, setProdStatus] = useState('popular')
    const [product, setProduct] = useState([])

    useEffect(() => {
        const apiUrl = `http://localhost:8089/products`
        axios
            .get(apiUrl)
            .then(res => setProduct(res.data))
    }, [setProduct])



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
                {product.map((item) => (
                    <div key={item.id} className={pop.card}>
                        <div className={pop.cardTop}>
                            <div>   
                                <h3>{item.set}</h3>
                                <p className={pop.weight}>{item.weight}</p>
                            </div>

                            {item.status && <p className={pop.status}>TOP</p>}
                        </div>
                        <div key={item.id} className={pop.cardInner}>
                            <Link to={`/single/${item.id}`}>
                                <img className={pop.img} src={item.img} alt="" />
                            </Link>
                            <div className={pop.cardInfo}>
                                <p className={pop.cardTitle}>{item.title}</p>
                                <p className={pop.arrow}><EastIcon /></p>
                                <p className={pop.price}>{item.price}₽</p>
                            </div>
                        </div>
                    </div >
                ))}
            </div>
            <div className={pop.seeMore}>
                <div className={pop.line}></div>
                <button className={pop.allProduct}>Все товары</button>
                <div className={pop.line}></div>
            </div>
        </div>
    );
};

export default PopularProduct;
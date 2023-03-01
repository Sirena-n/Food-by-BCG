import React, { useEffect, useState } from 'react';
import a from './basket.module.css'
import DiscountIcon from '@mui/icons-material/Discount';
import axios from 'axios';

const Basket = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const apiUrl = 'http://localhost:8089/products'
        axios
            .get(apiUrl)
            .then(res => setProduct(res.data))
    }, [setProduct])

    return (
        <div className={a.itemWrapper}>
            {/* {product.map(el => (
                <div key={el.id} className={a.item}>
                    <img src='' alt="" />
                    <div className={a.itemDiscription}>
                        <h3></h3>
                        <h4></h4>
                        <button>+</button>
                        <p></p>
                        <button>-</button>
                    </div>
                </div>
            ))} */}
            <div className={a.itemTotal}>
                <div className={a.pricesSide}>
                    <h3><span><DiscountIcon /></span> Сумма товара</h3>
                    <div className={a.line}></div>
                    <h3>Сумма товаров <span></span></h3>
                    <h3>Доставка <span></span></h3>
                    <div className={a.line}></div>
                    <h3>ИТОГ <span></span></h3>
                </div>
                <div className={a.deliverySide}>
                    <img src="/images/box3.png" alt="" />
                    <h3>Бесплатная доставка</h3>
                    <p>Доставка в нашем магазине  при заказе на сумму от <span className={a.blackText}>2000₽ абсолютно бесплатна!</span>
                        Добавьте товаров еще на <span className={a.blackText}>420₽</span> и Вам станет доступна бесплатная доставка.</p>
                </div>
            </div>
        </div>
    );
};

export default Basket;
import React from 'react';
import a from './success.module.css'
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';

const Success = () => {
    return (
        <div className={a.successWrapper}>
            <div className={a.road}>
                <h3>Корзина</h3>
                <EastIcon />
                <h3>Оформление заказа</h3>
                <EastIcon />
                <h3>Готово!</h3>
            </div>
            <img src="/images/smile2.png" alt="" />
            <h3>СПАСИБО!</h3>
            <h2>ЗАКАЗ ОФОРМЛЕН</h2>
            <p>Ожидайте, мы свяжемся с вами в ближайшее время!</p>
            <Link to={'/basket'}>Назад к списку покупок</Link>
        </div>
    );
};

export default Success;
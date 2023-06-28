import React from 'react';
import a from './orderingPage.module.css'
import EastIcon from '@mui/icons-material/East';
import Personal from './PersonalData/Personal';
import Order from './MyOrder/Order';
import Address from './Address/Address';
// import Success from '../successOrder/Success';
import { useNavigate } from 'react-router-dom';

const OrderingPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className={a.titleBlock}>
                <div className={a.titleInner}>
                    <p className={a.coordination}>Главная / <span>Корзина</span></p>
                    <h2 className={a.pageTitle}>Оформление заказа</h2>
                    <div className={a.road}>
                        <h3>Корзина</h3>
                        <EastIcon />
                        <h3>Оформление заказа</h3>
                        <EastIcon />
                        <h3>Готово!</h3>
                    </div>
                </div>
            </div>
            <div className={a.formsWrapper}>
                <Personal />
                <Order />
                <Address />
            </div>
            <div className={a.confirmInner}>
                <hr className={a.shortLine} />
                <button onClick={() => navigate('/success')} className={a.confirmBtn}>ПОДТВЕРДИТЬ ЗАКАЗ</button>
                <button onClick={() => navigate('/basket')} className={a.backBtn}>НАЗАД К СПИСКУ ПОКУПОК</button>
                <hr className={a.longLine} />
            </div>
        </>

    );
};

export default OrderingPage;
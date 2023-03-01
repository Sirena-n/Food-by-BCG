import React from 'react';
import a from './orderingPage.module.css'
import EastIcon from '@mui/icons-material/East';
import Personal from './PersonalData/Personal';
import Order from './MyOrder/Order';
import Address from './Address/Address';

const OrderingPage = () => {
    return (
        <>
            <div className={a.titleWrapper}>
                <div className={a.titleInner}>
                    <h4 className={a.greyTitle}>Главная / <span className={a.blackTitle}>Корзина</span></h4>
                    <h2>Оформление заказа</h2>
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
                <Address/>
            </div>
        </>

    );
};

export default OrderingPage;
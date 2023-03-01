import React from 'react';
import a from './order.module.css'
import { Link } from 'react-router-dom';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
const Order = () => {
    return (
        <div className={a.wrapper}>
            <div className={a.orderSide}>
                <h2><img src="/images/box icon.png" alt="" />МОЙ ЗАКАЗ</h2>
                <hr />
                <div className={a.itemInner}>
                    <div className={a.item}>
                        <img src="" alt="" />
                        <h3></h3>
                        <p></p>
                    </div>
                    <div className={a.item}>
                        <img src="" alt="" />
                        <h3></h3>
                        <p></p>
                    </div>
                    <div className={a.delivery}>
                        <Inventory2TwoToneIcon className={a.box} />
                        <div className={a.discription}>
                            <h3>Доставка почтой россии</h3>
                            <p>300₽</p>
                        </div>
                    </div>
                </div>

                <hr className={a.tightLine} />
                <h2 className={a.totalPrice}>ИТОГ</h2>
            </div>
            <div className={a.infoSide}>
                <img src="/images/human.png" alt="" />
                <h3>Обратите внимание!</h3>
                <p>Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей <Link>политике конфиденцианости.</Link></p>
            </div>
        </div>
    );
};

export default Order;
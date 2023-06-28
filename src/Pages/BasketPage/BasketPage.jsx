import Basket from './Basket/Basket'
import { Link } from 'react-router-dom';
import a from './basketPage.module.css'
import EastIcon from '@mui/icons-material/East';


const BasketPage = () => {
    return (
        <div className={a.titleBlock}>
            <p className={a.coordination}>Главная / <span>Корзина</span></p>
            <h2 className={a.pageTitle}>Корзина</h2>
            <div className={a.road}>
                <h3>Корзина</h3>
                <EastIcon />
                <h3>Оформление заказа</h3>
                <EastIcon />
                <h3>Готово!</h3>
            </div>
            <Basket />
            <div className={a.checkout}>
                <hr className={a.lineCheckOut} />
                <Link to={'/ordering'}>
                    <button className={a.btn}>Оформить заказ</button>
                </Link>
                <hr className={a.lineCheckOut} />
            </div>
        </div>
    );
};

export default BasketPage;
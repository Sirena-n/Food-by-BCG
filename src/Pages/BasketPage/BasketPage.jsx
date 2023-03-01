import Basket from './Basket/Basket'
import { Link } from 'react-router-dom';
import a from './basketPage.module.css'
import EastIcon from '@mui/icons-material/East';


const BasketPage = () => {
    return (
        <div className={a.basketWrapper}>
            <h3 className={a.title}><span className={a.greyTitle}>Главное /</span>Корзина</h3>
            <h2 className={a.secondTitle}>Корзина</h2>
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
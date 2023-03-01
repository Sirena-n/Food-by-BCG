import React from 'react';
import { Link } from 'react-router-dom';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import headerCss from './header.module.css'


const Header = () => {
    return (
        <header>
            <div className={headerCss.top}>
                <div className={headerCss.container}>
                    <div className={headerCss.social}>
                        <img src="/images/Vector.png" alt="" />
                        <img src="/images/Vector (1).png" alt="" />
                        <img src="/images/Vector (2).png" alt="" />
                    </div>
                    <div className={headerCss.RuEn}>
                        <button type='button' className={headerCss.Ru}>RU</button>
                        <button type='button' className={headerCss.En}>EN</button>
                    </div>
                </div>
            </div>
            <div className={headerCss.bottom}>
                <div className={headerCss.container}>
                    <div>
                        <img className={headerCss.logo} src="/images/image 16.png" alt="" />
                    </div>
                    <ul className={headerCss.links}>
                        <Link to={'/'}>Главная</Link>
                        <Link>Товары</Link>
                        <Link to={'/Q&A'}>Q&A</Link>
                        <Link>Статьи</Link>
                        <Link to={'/aboutUs'}>О нас</Link>
                        <Link to={'/payment'}>Оплата и доставка</Link>
                        <Link to={'/contact'}>Контакты</Link>
                    </ul>
                    <div className={headerCss.tel}>
                        <p>+7 926 171 67 66</p>
                    </div>
                    <div className={headerCss.icons}>
                        <FavoriteBorderIcon/>
                        <Link to='/basket'>  
                            <LocalGroceryStoreIcon/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
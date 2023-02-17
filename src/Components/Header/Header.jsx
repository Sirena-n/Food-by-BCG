import React from 'react';
import { Link } from 'react-router-dom';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import headerCss from './header.module.css'


const Header = () => {
    return (
        <>
            <div className={headerCss.top}>
                <div className={headerCss.container}>
                    <div className={headerCss.social}>
                        <img src="/images/Vector.png" alt="" />
                        <img src="/images/Vector (1).png" alt="" />
                        <img src="/images/Vector (2).png" alt="" />
                    </div>
                    <div className={headerCss.RuEn}>
                        <button>Ru</button>
                        <button>En</button>
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
                        <Link>Q&A</Link>
                        <Link>Статьи</Link>
                        <Link>О нас</Link>
                        <Link>Оплата и доставка</Link>
                        <Link>Контакты</Link>
                    </ul>
                    <div className={headerCss.tel}>
                        <p>+7 926 171 67 66</p>
                    </div>
                    <div className={headerCss.icons}>
                        <FavoriteBorderIcon/>
                        <LocalGroceryStoreIcon/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
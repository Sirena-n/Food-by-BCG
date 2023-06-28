import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BasketModal from '../BasketModalWindow/BasketModal';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import { RouterLinksArr } from '../../Utils/Arrays';

import headerCss from './header.module.css';

const Header = ({ handleActiveLink, activeLink }) => {

    const [modalBasket, setModalBasket] = useState(false)

    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        let isRunning = false;
        const handleScroll = () => {
            if (!isRunning) {
                isRunning = true;

                requestAnimationFrame(() => {
                    const currentScrollPos = window.scrollY;
                    const isScrollingUp = prevScrollPos > currentScrollPos;

                    setIsHeaderVisible(() => isScrollingUp || currentScrollPos < 120);
                    prevScrollPos = window.scrollY;
                    isRunning = false;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={isHeaderVisible ? `${headerCss.visible}` : `${headerCss.hidden}`}>
            <div className={headerCss.headerWrapper}>
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
                        <Link
                            to={'/'}
                            onClick={() => handleActiveLink('/')}>
                            <img className={headerCss.logo} src="/images/image 16.png" alt="" />
                        </Link>

                        <ul className={headerCss.links}>
                            {RouterLinksArr.map(el => (
                                <li key={el.name}>
                                    <Link
                                        onClick={() => handleActiveLink(el.link)}
                                        to={el.link}
                                        className={activeLink === el.link ? 'underlined' : ''}>
                                        {el.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className={headerCss.tel}>
                            <p>+7 926 171 67 66</p>
                        </div>

                        <div className={headerCss.icons}>
                            <p><FavoriteBorderIcon /></p>
                            <p><LocalGroceryStoreIcon onClick={() => setModalBasket(true)} /></p>
                            {modalBasket && <BasketModal modalState={setModalBasket} />}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
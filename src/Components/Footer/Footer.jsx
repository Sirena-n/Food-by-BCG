import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-top">
                    <div>
                        <img className='logo' src="./images/image 18.png" alt="" />
                    </div>

                    <ul className='links'>
                        <Link to={'/'}>Главная</Link>
                        <Link>Товары</Link>
                        <Link>Q&A</Link>
                        <Link>Статьи</Link>
                        <Link>О нас</Link>
                        <Link>Оплата и доставка</Link>
                        <Link>Контакты</Link>
                    </ul>
                </div>
                <div className="footer-mid">
                    <div>
                        <div>icon <p></p></div>
                        <div>icon <p></p></div>
                        <div>icon <p></p></div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="footer-btm">
                    <p></p>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
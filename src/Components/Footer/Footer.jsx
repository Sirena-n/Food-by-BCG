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
                        <div>icon <p>info@4ood.ru
</p></div>
                        <div>icon <p>+7 926 171 67 66</p></div>
                        <div>icon <p>Алтуфьевское ш., 27а, Москва, Россия, 129090</p></div>
                    </div>
                    <div>
                        <img src="/images/Vector.png" alt="" />
                        <img src="/images/Vector (1).png" alt="" />
                        <img src="/images/Vector (2).png" alt="" />
                    </div>
                </div>
                <div className="footer-btm">
                    <p>©2022, All right reserved.</p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
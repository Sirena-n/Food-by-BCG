import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { RouterLinksArr } from '../../Utils/Arrays';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';

import a from './footer.module.css'
const Footer = ({handleActiveLink, activeLink}) => {
    return (
        <footer className={a.footer}>
            <div className={a.container}>
                <div className={a.top}>
                    <Link to={'/'}>
                        <img className={a.logo} src="/images/image 18.png" alt="" />
                    </Link>
                    <ul className={a.links}>
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
                </div>
                <div className={a.middle}>
                    <div className={a.info}>
                        <p><MailOutlineIcon /> info@4ood.ru</p>
                        <p><WifiCalling3OutlinedIcon /> +7 926 171 67 66</p>
                        <p><MapOutlinedIcon /> Алтуфьевское ш., 27а, Москва, Россия, 129090</p>
                    </div>
                    <div className={a.socialItems}>
                        <img src="/images/Vector.png" alt="" />
                        <img src="/images/Vector (1).png" alt="" />
                        <img src="/images/Vector (2).png" alt="" />
                    </div>
                </div>
                <div className={a.bottom}>
                    <p>©2022, All right reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
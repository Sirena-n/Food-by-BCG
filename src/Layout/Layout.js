import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useEffect } from 'react';

const Layout = () => {
    const initialLink = localStorage.getItem('RouterLink') || '/';
    const [activeLink, setActiveLink] = useState(initialLink);
    const handleActiveLink = (link) => {
        setActiveLink(activeLink === link ? null : link)
    }

    useEffect(() =>{
        localStorage.setItem('RouterLink', activeLink)
    }, [activeLink])

    return (
        <>
            <Header activeLink={activeLink} handleActiveLink={handleActiveLink}/>
            <main>
                <Outlet />
            </main>
            <Footer activeLink={activeLink} handleActiveLink={handleActiveLink}/>
        </>
    );
};

export default Layout;
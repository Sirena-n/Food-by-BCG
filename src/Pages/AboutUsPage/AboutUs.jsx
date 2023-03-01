import React from 'react';
import GetConsultation from '../../Components/GetConsultation/GetConsultation';
import a from './About.module.css'
import Goal from './Goals/Goal';
import Principles from './Principles/Principles';
import Who from './WhoWeAre/Who';

const AboutUs = () => {
    return (
        <>
            <div className={a.titleBox}>
                <div className={a.titleInner}>
                    <p className={a.greyString}>Главная / <span className={a.blackString}>О нас</span></p>
                    <h2 className={a.title}>О нас</h2>
                </div>
            </div>
            <Who/>
            <Goal/>
            <Principles/>
            <GetConsultation/>
        </>
    );
};

export default AboutUs;
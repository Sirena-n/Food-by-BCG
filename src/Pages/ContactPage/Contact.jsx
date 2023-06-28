import React from 'react';
import GetConsultation from '../../Components/GetConsultation/GetConsultation';
import a from './contact.module.css'

const Contact = () => {
    return (
        <>
            <div className={a.titleBlock}>
                <div className={a.titleInner}>
                    <p className={a.greyString}>Главная / <span className={a.blackString}>Контакты</span></p>
                    <h2 className={a.title}>Контакты</h2>
                </div>
            </div>
            <div className={a.contact}>
                <div className={a.mapWrapper}>
                    <img className={a.map} src="/images/MAP.png" alt="" />
                </div>
                <div className={a.contactSide}>
                    <h2>Как с нами связаться?</h2>
                    <h3 className={a.tel}>+7 926 171 67 66</h3>
                    <h3 className={a.email}>info@4ood.ru</h3>
                    <button className={a.btn} type='button'>Я хочу задать вопрос</button>
                    <div className={a.socialWrapper}>
                        <p><img src="/images/instagram.png" alt="" />instagram.com <br />@4ood</p>
                        <p><img src="/images/facebook.png" alt="" />facebook.com <br />@4ood</p>
                        <p><img src="/images/tw icon.png" alt="" />twitter.com <br />@4ood</p>
                    </div>
                </div>
            </div>
            <GetConsultation/>
        </>
    );
};

export default Contact;
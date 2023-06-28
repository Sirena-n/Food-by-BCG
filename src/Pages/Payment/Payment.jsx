import { WifiLock } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GetConsultation from '../../Components/GetConsultation/GetConsultation';
import a from './payment.module.css'

const Payment = () => {
    const [state, setState] = useState(null)
    const [ask, setAsk] = useState([])

    useEffect(() => {
        const askUrl = 'http://localhost:8089/paymentAsks'
        axios
            .get(askUrl)
            .then(res => setAsk(res.data))
    }, [])

    const controlItem = (i) => {
        if (state === i) {
            return setState(null)
        }
        setState(i)
    }

    console.log(8 && 4);
    console.log(8 || 4);

    return (
        <>
            <div className={a.titleBlock}>
                <div className={a.titleInner}>
                    <p className={a.coordination}>Главная / <span>Q&A</span></p>
                    <h2 className={a.pageTitle}>Оплата и доставка</h2>
                </div>
            </div>

            <div className={a.itemInner}>
                {
                    ask.map((el, i) => (
                        <div key={el.id} className={a.item}>
                            <div className={a.itemTop}>
                                <h3>{el.title}</h3>
                                <button onClick={() => controlItem(i)} className={a.btnPlus}>{state === i ? '-' : '+'}</button>
                            </div>
                            <ul style={{ display: state === i ? 'block' : 'none' }} className={a.itemLists}>
                                <div className={a.line}></div>
                                {
                                    el.lists.map(item => (
                                        <li key={item.id}>{item.list}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <GetConsultation />
        </>

    );
};

export default Payment;
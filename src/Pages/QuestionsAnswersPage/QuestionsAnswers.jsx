import React from 'react';
import a from './QuestionAnswers.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionsAnswers = () => {

    const [state, setState] = useState(null)
    const [ask, setAsk] = useState([])

    useEffect(() => {
        const askUrl = 'http://localhost:8089/questionsAnswers'
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

    return (

        <>
            <div className={a.titleBlock}>
                <div className={a.titleInner}>
                    <p className={a.coordination}>Главная / <span>Q&A</span></p>
                    <h2 className={a.pageTitle}>Вопросы и ответы</h2>
                </div>
            </div>
            
            <div className={a.itemInner}>
                {
                    ask.map((el, i) => (
                        <div key={el.id} className={a.item}>
                            <div className={a.itemTop}>
                                <h3 className={a.itemTitle}>{el.question}</h3>
                                <button onClick={() => controlItem(i)} className={a.btnPlus}>{state === i ? '-' : '+'}</button>
                            </div>
                            <div style={{ display: state === i ? 'block' : 'none' }} className={a.itemLists}>
                                <div className={a.line}></div>
                                <p>{el.discription}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>

    );
};

export default QuestionsAnswers;
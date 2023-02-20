import React from 'react';
import a from './follow.module.css'

const Follow = () => {
    return (
        <div className={a.wrapper}>
            <h3>Подпишись на наши</h3>
            <h2>новые поступления</h2>
            <form className={a.form}>
                <input className={a.input} type="text" placeholder='Введите адрес электронной почты'/>
                <button className={a.btnForm} type='submit'>ПОДПИСАТЬСЯ</button>
            </form>
        </div>
    );
};

export default Follow;
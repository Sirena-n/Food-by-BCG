import React from 'react';
import a from './consultation.module.css'
import TextField from '@mui/material/TextField';


const GetCosultation = () => {
    return (
        <div className={a.Wrapper}>
            <h3>оставьте свои контакты</h3>
            <h2>и получите консультацию</h2>
            <form className={a.form}>
                <input type="text" placeholder='Ваше имя'/>
                <input type="number" placeholder='Ваш номер телефона'/>
                <button className={a.btn} type='submit'>ОТПРАВИТЬ</button>
            </form>
        </div>
    );
};

export default GetCosultation;
import { TextField } from '@mui/material';
import React from 'react';
import a from './personal.module.css'

const Personal = () => {
    return (
        <form className={a.dataForm}>
            <h3>ВАШИ ДАННЫЕ</h3>
            <label htmlFor="name">Имя</label>
            <input type="text" id='name' placeholder='Ваше имя' />
            <label htmlFor="last name">Фамилия</label>
            <input type="text" id='last name' placeholder='Ваша фамилия' />
            <label htmlFor="email">Email*</label>
            <input type="email" id='email' placeholder='Sample@mail.ru' />
            <label htmlFor="tel">Телефон*</label>
            <input type="tel" id='tel' placeholder='+7 (000) 000 00 00' />
        </form>
    );
};

export default Personal;
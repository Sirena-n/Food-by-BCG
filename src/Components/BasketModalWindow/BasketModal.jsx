import React from 'react';

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import a from './basketModal.module.css'

const BasketModal = ({modalState}) => {

    return (
        <div className={a.wrapper}>
            <div className={a.title}>
            <p><LocalGroceryStoreIcon/> Корзина</p>
            <hr />
            <p onClick={() =>modalState(false)} className={a.closeModal}>x</p>
            </div>

        </div>
    );
};

export default BasketModal;
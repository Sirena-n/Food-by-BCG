import React from 'react';

import a from './savedPage.module.css'


import ShowMore from '../../Components/ShowMoreComponent/ShowMore';
import CardSection from '../../Components/CardSection/CardSection';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const SavedPage = () => {
    return (
        <>
            <div className={a.titleBlock}>
                <div className={a.panelInner}>
                    <p className={a.coordination}>Главная / <span>Сохраненные товары</span></p>
                    <h2 className={a.pageTitle}>Сохраненные товары</h2>
                    <div className={a.filterPanel}>
                        <p className={a.sortSide}>
                            Сортировка
                            <select>
                                <option value="">Цена</option>
                            </select>
                        </p>
                        <p className={a.deleteAllProduct}>
                            <span><DeleteForeverOutlinedIcon /></span>
                            Удалить всё
                        </p>
                    </div>
                </div>
            </div>
            <div className={a.cardsWrapper}>
                <CardSection />
                <ShowMore />
            </div>
        </>
    );
};

export default SavedPage;
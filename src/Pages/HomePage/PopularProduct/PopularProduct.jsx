import React, { useState } from 'react';

import CardComp from '../../../Components/CardComp/CardComp';
import { useGetNewProductsQuery } from '../../../Redux/ProductsApi/ProductsApi';

import pop from './popProduct.module.css';

const PopularProduct = () => {

    const [slices, setSlice] = useState(false)

    const [productsFilter, setProductsFilter] = useState(false)

    const handleProductsFilter = (status) =>{
        setProductsFilter(status)
    }
    const { data: newProductsData = [] } = useGetNewProductsQuery(productsFilter);

    return (
        <div className={pop.container}>
            <div className={pop.popTop}>
                <h2 className={pop.title}>{!productsFilter ? 'Популярные товары' : 'Новые товары'}</h2>
                <ul className={pop.choice}>
                    <li className={pop.li} onClick={() => handleProductsFilter(false)}>Популярные товары <span className={!productsFilter ? 'underlined' : ''}></span></li>
                    <li className={pop.li} onClick={() => handleProductsFilter(true)}>Новые товары <span className={productsFilter ? 'underlined' : ''}></span></li>
                </ul>
            </div>
            <div className={pop.cardsWrapper}>
                <CardComp quantityProducts={6} data={newProductsData}/>
            </div>
            
            <div className={pop.seeMore}>
                <div className={pop.line}></div>
                <button onClick={() => setSlice(!slices)} className={pop.allProduct}>Все товары</button>
                <div className={pop.line}></div>
            </div>
        </div>
    );
};

export default PopularProduct;
import React from 'react';

import Loading from '../LoadingComponent/Loading';
import CardComp from '../CardComp/CardComp';

import pop from './card.module.css';

const CardSection = ({ data, isLoading }) => {

    return (
        <div className={pop.cardInner}>
            {isLoading ?
                <Loading isLoading={isLoading} /> : 
                <CardComp quantityProducts={data.length} data={data}/>}
        </div>
    );
};

export default CardSection;
import React from 'react';
import Banner from './Banner/Banner';
import PopularProduct from './PopularProduct/PopularProduct';
import Sets from './Sets/Sets';

const HomePage = () => {
    return (
        <>
            <Banner/>
            <PopularProduct/>
            <Sets/>
        </>
    );
};

export default HomePage;
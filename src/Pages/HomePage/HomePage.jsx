import React from 'react';
import Sets from './Sets/Sets';
import Banner from './Banner/Banner';
import Reviews from './Reviews/Reviews';
import BannerTwo from './BannerTwo/BannerTwo'
import Advantages from './Advantages/Advantages';
import BannerThree from './BannerThree/BannerThree';
import PopularProduct from './PopularProduct/PopularProduct';
import Follow from './FollowSection/Follow';

const HomePage = () => {
    return (
        <>
            <Banner/>
            <PopularProduct/>
            <Sets/>
            <Advantages/>
            <BannerTwo/>
            <BannerThree/>
            <Reviews/>
            <Follow/>
        </>
    );
};

export default HomePage;
import axios from 'axios';
import React from 'react';
import a from './singlecardPage.module.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleCard from './SingleCard/SingleCard';

const SingleCardPage = () => {
    const {id} = useParams()
    const [appState, setAppState] = useState([])
    
    useEffect(() => {
        const apiURL = `http://localhost:8089/products/${id}`
        axios
            .get(apiURL)
            .then(res => setAppState(res.data))
    }, [setAppState])


    return (
        <div className={a.wrapper}>
            <h3 className={a.title}><span className={a.grey}>Главная / Все товари /</span> {appState.set}</h3>
            <SingleCard product={appState}/>
        </div>
    );
};

export default SingleCardPage;
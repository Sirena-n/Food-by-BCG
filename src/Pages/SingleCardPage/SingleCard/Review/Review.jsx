import a from './Review.module.css'
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Review = (props) => {
    const {id , title} = useParams()
    const [value, setValue] = useState(2)
    const [rate , setRate] = useState([])
    
    useEffect(()=>{
        const reviewUrl =`http://localhost:8089/products/${id}`
        axios
            .get(reviewUrl)
            .then(res => setRate(res.data))
    },[id])
    

    return (
        <div className={a.writeReviews}>
            <h3>Написать отзыв</h3>
            <p className={a.rate}> Оценка
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </p>

            <form className={a.form}>
                <TextField className={a.nameInput}
                    id="outlined-multiline-static"
                    label="Имя"
                    multiline
                    maxRows={1}
                />
                <TextField className={a.comment}
                    id="outlined-multiline-static"
                    label="Комментарий"
                    multiline
                    rows={4}
                />
                <button className={a.addComment} type='submit'>ДОБАВИТЬ ОТЗЫВ</button>
            </form>
        </div>
    );
};

export default Review;
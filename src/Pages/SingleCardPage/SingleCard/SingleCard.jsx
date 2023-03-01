import React from 'react';
import Review from './Review/Review';
import a from './singlecard.module.css'
import { Link } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const SingleCard = (props) => {
    return (
        <div key={props.product.id} className={a.itemInner}>
            <div className={a.imgSide}>
                <img className={a.itemImg} src={props.product.img} alt="" />
                {props.product.status && <p className={a.status}>TOP</p>}
            </div>
            <div className={a.item}>
                {props.product.stock ? <p className={a.stock}><CheckOutlinedIcon />В наличии</p> : <p>Товара нет в наличии</p>}
                <div className={a.title}>
                    <h2 className={a.setName}>{props.product.set}</h2>
                    <p className={a.greyString}>Код: {props.product.code}</p>
                </div>
                <p className={a.greyString}>{props.product.weight}</p>
                <div className={a.line}></div>
                <h2 className={a.secondTitle}>{props.product.secondTitle}</h2>
                <p className={a.discription}>{props.product.discription}</p>
                <div className={a.Tools}>
                    <p className={a.price}>{props.product.price}₽</p>
                    <Link className={a.buyItem} type='button'>КУПИТЬ</Link>
                    <Link className={a.interestBtn} type='button'><FavoriteBorderOutlinedIcon /></Link>
                </div>
                <div className={a.line}></div>
                <div className={a.reviews}>
                    <h3>Отзывы</h3>
                </div>
                <Review id={props.product.id} reviews={props.product.reviews}/>
            </div>
        </div>
    );
};

export default SingleCard;
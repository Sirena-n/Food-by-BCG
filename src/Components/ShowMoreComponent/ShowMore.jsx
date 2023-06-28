import React from 'react';
import a from './showMore.module.css'

const ShowMore = ({showProductsFunc}) => {
    return (
        <div className={a.checkout}>
            <hr className={a.lineCheckOut} />
                <button onClick={showProductsFunc} className={a.btn}>ЕЩЕ</button>
            <hr className={a.lineCheckOut} />
        </div>
    );
};

export default ShowMore;
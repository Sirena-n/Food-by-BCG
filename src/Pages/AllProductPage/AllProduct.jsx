import { useState } from 'react';

import Loading from '../../Components/LoadingComponent/Loading';
import CardSection from '../../Components/CardSection/CardSection';
import ShowMore from '../../Components/ShowMoreComponent/ShowMore';

import { AllProductsFilterArr } from '../../Utils/Arrays';
import { useGetNewProductsQuery, useGetPointsQuery } from '../../Redux/ProductsApi/ProductsApi';

import a from './allProduct.module.css';

const AllProduct = () => {
    const { data = [], isLoading } = useGetPointsQuery()
    const {data: newFilterData} = useGetNewProductsQuery(false)

    const [productsQuantity, setProductsQuantity] = useState(6)
    const [isLoadingData, setIsLoadingData] = useState(false)

    // const currentProducts = newFilterData.slice(0, productsQuantity)

    const showProductsFunc = () => {
        setIsLoadingData(true)

        setTimeout(() => {
            setProductsQuantity(prevState => prevState + 6)
            setIsLoadingData(false)
        }, 2000)
    } 

    const [active, setActive] = useState('Популярныe товары')
    const handleProducstStatus = (index) => {
        setActive(active === index ? active : index)
    } 


    return (
        <>
            <div className={a.titleBlock}>
                <div className={a.panelInner}>
                    <p className={a.coordination}>Главная / <span>Все товары</span></p>
                    <h2 className={a.pageTitle}>Все товары</h2>
                    <div className={a.filterPanel}>
                        <ul className={a.filterSide}>
                            {
                                AllProductsFilterArr.map(el =>(
                                    <li key={el} className={active === el ? 'underlined' : ''} onClick={() => handleProducstStatus(el)}>{el}</li>
                                ))
                            }
                        </ul>
                        <p className={a.sortSide}>
                            Сортировка
                            <select>
                                <option value="">Цена</option>
                            </select>
                        </p>
                    </div>
                </div>
            </div>
            <div className={a.cardsWrapper}>
                <CardSection data={data} isLoading={isLoading} />
                {
                    isLoadingData ? <Loading isLoading={isLoadingData} /> : ''
                }
                <ShowMore showProductsFunc={showProductsFunc} />
            </div>

        </>
    );
};

export default AllProduct;
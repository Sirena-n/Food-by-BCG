import React from 'react';
import a from './Address.module.css'

const Address = () => {
    return (
        <div className={a.addressWrapper}>
            <h2>АДРЕС ДОСТАВКИ</h2>
            <form className={a.addressForm}>
                <div className={a.leftForm}>
                    <p>
                        Область / регион
                        <select name="" id="">
                            <option value="">Сибирь</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </p>
                    <label htmlFor="">
                        Улица
                        <input type="text" placeholder='Введите адрес или получателя' />
                    </label>
                </div>
                <div className={a.rightForm}>
                    <label className={a.rightIndex} htmlFor="">
                        Почтовый индекс
                        <input type="text" placeholder='XX XXX' />
                    </label>
                    <div className={a.home}>
                        <label className={a.homeAddress} htmlFor="">
                            Дом
                            <input type="text" placeholder='No' />
                        </label>
                        <label className={a.apartamentAddress} htmlFor="">
                            Квартира
                            <input type="text" placeholder='No' />
                        </label>
                    </div>

                </div>
                <div className={a.bottomForm}>
                    <label htmlFor="">
                        Дополнение (не обязательно)
                        <input type="text" placeholder='Подъезд, наличие лифта, этаж, особенности расположения' />
                    </label>
                    <label htmlFor="">
                        Комментарий к заказу (не обязательно)
                        <input type="text" placeholder='Комментарий к заказу, особые пожеления' />
                    </label>
                </div>
                <label htmlFor="">
                    <input type="checkbox" />
                    Сохранить адрес
                </label>
            </form>
        </div>
    );
};

export default Address;
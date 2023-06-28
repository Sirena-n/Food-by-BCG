import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'

import Layout from "../src/Layout/Layout";
import Payment from './Pages/Payment/Payment'
import HomePage from './Pages/HomePage/HomePage';
import Contact from './Pages/ContactPage/Contact';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import Basket from './Pages/BasketPage/BasketPage';
import SavedPage from './Pages/SavedProductPage/SavedPage';
import AllProduct from './Pages/AllProductPage/AllProduct';
import Success from './Pages/BasketPage/successOrder/Success';
import SingleCardPage from './Pages/SingleCardPage/SingleCardPage';
import Ordering from './Pages/BasketPage/OrderingPage/OrderingPage';
import QuestionsAnswers from './Pages/QuestionsAnswersPage/QuestionsAnswers';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<HomePage/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='aboutUs' element={<AboutUs/>}/>
          <Route path ='payment' element={<Payment/>}/>
          <Route path='ordering' element={<Ordering/>}/>
          <Route path='products' element={<AllProduct/>}/>
          <Route path='Q&A' element={<QuestionsAnswers/>}/>
          <Route path ='single/:id' element={<SingleCardPage/>}/>
          <Route path ='saved' element={<SavedPage/>}/> 
        </Route>
          <Route path ='/success' element={<Success/>}/>
      </Routes>
    </>
  );
};

export default App;
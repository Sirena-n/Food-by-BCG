import React from 'react';
import './App.css'
import Layout from "../src/Layout/Layout";
import Payment from './Pages/Payment/Payment'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Contact from './Pages/ContactPage/Contact';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import Basket from './Pages/BasketPage/BasketPage';
import Ordering from './Pages/BasketPage/OrderingPage/OrderingPage';
import SingleCardPage from './Pages/SingleCardPage/SingleCardPage';
import QuestionsAnswers from './Pages/QuestionsAnswersPage/QuestionsAnswers';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<HomePage/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='aboutUs' element={<AboutUs/>}/>
          <Route path ='payment' element={<Payment/>}/>
          <Route path='ordering' element={<Ordering/>}/>
          <Route path='Q&A' element={<QuestionsAnswers/>}/>
          <Route path ='single/:id' element={<SingleCardPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
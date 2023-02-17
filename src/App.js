import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from "../src/Layout/Layout";
import HomePage from './Pages/HomePage/HomePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<HomePage/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
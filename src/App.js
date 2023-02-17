import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from "../src/Layout/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>

        </Route>
      </Routes>
    </div>
  );
};

export default App;
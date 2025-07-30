import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './landingpage/home/HomePage'
import Product from './landingpage/products/ProductPage'
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import NotFound from './landingpage/NotFound';
import Support from './landingpage/support/Support';
import ChatBot from './landingpage/ChatBot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar></Navbar>
<Routes>
<Route  path='/' element={<Homepage/>}/>
<Route  path='/product' element={<Product/>}/>
<Route  path='/Support' element={<Support/>}/>
<Route  path='/ChatBot' element={<ChatBot/>}/>

<Route  path='*' element={<NotFound/>}/>


</Routes>
    <Footer></Footer>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


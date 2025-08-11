import 'regenerator-runtime/runtime';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Products from './Components/Products';
import ViewProducts from './Components/ViewProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/view-products' element={<ViewProducts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

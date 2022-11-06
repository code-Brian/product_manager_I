import {useState} from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Main} from './views/Main'
import {ProductDetails} from './components/ProductDetails'
import {ProductUpdate} from './components/ProductUpdate'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default/>
          <Route element={<ProductDetails/>} path="/products/:id"/>
          <Route element={<ProductUpdate/>} path="/products/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

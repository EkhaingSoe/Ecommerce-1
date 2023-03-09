import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Spinner from './components/Spinner/Spinner';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products'
import Success from './pages/Success';

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      
      <Routes>
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App
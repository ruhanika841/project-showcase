import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; 
import NewUserBanner from './components/NewUserBanner/NewUserBanner';
import ShopByCategory from './components/ShopByCategory/ShopByCategory';
import Profile from './components/Profile/Profile';
import ProductPage from './pages/ProductPage'; // Import ProductPage
import HomePage from './pages/HomePage';  
// import Products from './pages/Products';  // Import Products page
import { CartProvider } from './context/CartContext'; 
import { initializeWebSocket, closeWebSocket } from './services/websocket';
import { useEffect } from 'react';
import './App.css';




const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [bag, setBag] = useState([]);

  useEffect(() => {
    initializeWebSocket();

    return () => closeWebSocket(); // Ensure WebSocket is closed on unmount
}, []);
  
  return (
    <>
     <CartProvider>
        <Router>
        <Navbar wishlist={wishlist} bag={bag} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/product/:id"
              element={<ProductPage wishlist={wishlist} setWishlist={setWishlist} bag={bag} setBag={setBag} />}
          />
            <Route path="/NewUserBanner" element={<NewUserBanner />} />
            <Route path="/shop" element={<ShopByCategory />} />
             <Route path="/profile" element={<Profile />} />
            {/* <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/shop/men" element={<h1>Men's Products</h1>} />
            <Route path="/shop/women" element={<h1>Women's Products</h1>} />
            <Route path="/shop/kids" element={<h1>Kids' Products</h1>} />
            <Route path="/shop/accessories" element={<h1>Accessories Products</h1>} /> */} 
          </Routes>
        </Router>
        </CartProvider>

    </>
  );
}

export default App;

import React, { createContext, useContext, useState } from 'react';

// Create CartContext to share cart state across components
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Array to store products in the cart

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
  };

  const cartCount = cart.length; // Total number of items in the cart

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

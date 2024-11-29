// src/pages/Products.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartProvider';
import productData from '../data/productData';

function Products() {
  const { addToCart, cart } = useCart();
  const [showCart, setShowCart] = useState(false); // To toggle cart visibility

  return (
    <div className="products-page">
      <div className="product-list">
        {productData.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart} 
          />
        ))}
      </div>
      
      <button onClick={() => setShowCart(!showCart)} className="cart-button">
        View Cart ({cart.length})
      </button>

      {showCart && (
        <div className="cart-info">
          <h2>Your Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Products;

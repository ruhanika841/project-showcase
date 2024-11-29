import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'; // Assuming there's a CSS file for styles

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`); // Navigate to the product page
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={(e) => {
        e.stopPropagation(); // Prevent card click from triggering
        alert('Added to Cart');
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

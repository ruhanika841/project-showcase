import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({ name, imageUrl, route, discount }) => {
  return (
    <div className="category-card">
      <Link to={route} style={{ textDecoration: 'none' }}>
        {/* Upper section for the image */}
        <div className="category-image" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="category-dark-overlay"></div>
        </div>
        
        {/* Lower section for name and discount */}
        <div className="category-info" style={{ textDecoration: 'none' }}>
          <span className="category-name" >{name}</span>
          {discount && <span className="discount-label" style={{ textDecoration: 'none' }}>{discount}% Off</span>}
          {/* <span className="category-name" >shop now</span> */}
        </div>
        
      </Link>
    </div>
  );
};

export default CategoryCard;

import React from 'react';
import { categories } from '../../data/categories'; // Importing category data
import CategoryCard from './CategoryCard'; // Importing CategoryCard component from the same folder
import './ShopByCategory.css'; // Importing CSS


function ShopByCategory() {
  const lastThreeCategories = categories.slice(-3); 
  const mainCategories = categories.slice(0, -3); 

  return (
    <div className="shop-by-category ">
      <h1 className='card_section'>Shop By Category</h1>
      <div className="category-grid">
        {mainCategories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
            route={category.route}
            discount={category.discount} // Optional: if `discount` is part of the data
          />
        ))}
      </div>
      <div className="last-row">
        {lastThreeCategories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
            route={category.route}
            discount={category.discount} // Optional: if `discount` is part of the data
          />
        ))}
      </div>
    </div>
  );
}

export default ShopByCategory;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = ({ wishlist, setWishlist, bag, setBag }) => {
 
  const { id } = useParams();

  // Mock product data
  const product = {
    id: 1,
    name: 'Oversized Hoodie',
    description: 'A stylish and comfortable hoodie made with high-quality fabric. Perfect for casual outings or lounging at home.',
    price: 1499,
    images: [
      '/images/pdct4.png',
      '/images/pdct5.png',
      '/images/pdct6.png',
    ],
    features: [
      'Soft, breathable cotton fabric',
      'Oversized fit for ultimate comfort',
      'Available in multiple colors',
      'Machine washable',
    ],
    reviews: [
      { user: 'John Doe', rating: 5, comment: 'Amazing quality and super comfortable!' },
      { user: 'Jane Smith', rating: 4, comment: 'Great hoodie, but wish it had more colors.' },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const addToWishlist = () => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      alert('Added to Wishlist');
    } else {
      alert('Already in Wishlist');
    }
  };

  const addToBag = () => {
    if (!bag.some((item) => item.id === product.id)) {
      setBag([...bag, product]);
      alert('Added to Bag');
    } else {
      alert('Already in Bag');
    }
  };

  return (
    <div className="product-page">
      {/* Left Section: Images */}
      <div className="product-images-section">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="main-product-image"
        />
        <div className="thumbnail-container">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${
                selectedImage === image ? 'active-thumbnail' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Right Section: Details */}
      <div className="product-details-section">
        <h2 >{product.name}</h2>
        {/* <h1 >{product.name}</h1> */}
        <p className="price">MRP: Rs.{product.price}</p>
        <p className="description">{product.description}</p>

        {/* Features */}
        <div className="product-features">
          <h3>Features:</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button className="add-to-cart" onClick={addToBag}>Add to Bag</button>
          <button className="add-to-wishlist" onClick={addToWishlist}>Add to Wishlist</button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>Customer Reviews:</h3>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="review">
              <p ><strong style={{color:'black'}}>{review.user}</strong> </p>
              <p style={{color:'black'}}>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

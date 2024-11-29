import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './GlobalBrandsShowcase.css'; 

const GlobalBrandsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const slides = [
    { id: 201, src: '/images/Global_banner1.png' },
    { id: 202, src: '/images/Global_banner2.png' },
    { id: 203, src: '/images/Global_banner3.png' },
  ];

  const handleSlideClick = (productId) => {
    // Navigate to the product page with the productId
    navigate(`/product/${productId}`);
  };

  return (
    <div className="global-brands-section">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        className="global-brands-carousel"
        indicators={false}
        controls={true} // Enable controls if needed
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            {/* Navigate to the product page on click */}
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              style={{ width: '100%', height: '400px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => handleSlideClick(slide.id)}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Dotted Indicators */}
      <div className="carousel-indicators-wrapper">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GlobalBrandsShowcase;

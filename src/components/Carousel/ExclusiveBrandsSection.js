import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ExclusiveBrandsSection.css';

const ExclusiveBrandsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  // Data for slides with associated product routes
  const slides = [
    { id: 1, src: '/images/Exclusive_banner1.png', productId: 101 },
    { id: 2, src: '/images/Exclusive_banner2.png', productId: 102 },
    { id: 3, src: '/images/Exclusive_banner3.png', productId: 103 },
    { id: 4, src: '/images/Exclusive_banner4.png', productId: 104 },
  ];

  const handleSlideClick = (productId) => {
    // Navigate to the product page with the productId
    navigate(`/product/${productId}`);
  };

  return (
    <div className="exclusive-brands-section">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        className="exclusive-brands-carousel"
        indicators={false}
        controls={true}
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            {/* Add click handler to navigate to product page */}
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              style={{ width: '100%', height: '330px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => handleSlideClick(slide.productId)}
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

export default ExclusiveBrandsSection;

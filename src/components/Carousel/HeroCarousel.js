// HeroCarousel.js
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = (selectedIndex) => setActiveIndex(selectedIndex);

  // Add route properties to each slide for navigation
  const slides = [
    { src: '/images/banner1.png', alt: 'First slide', route: '/shop/women' },
    { src: '/images/banner2.png', alt: 'Second slide', route: '/shop/men' },
    { src: '/images/banner3.png', alt: 'Third slide', route: '/shop/kids' },
    { src: '/images/banner4.png', alt: 'Fourth slide', route: '/shop/accessories' },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        className="hero-carousel"
        indicators={false}
        controls={true}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {/* Wrap each image in a Link component */}
            <Link to={slide.route}>
              <img className="d-block w-100" src={slide.src} alt={slide.alt} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Dotted Indicators */}
      <div className="carousel-indicators-wrapper">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

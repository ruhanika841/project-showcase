import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css';
import NewUserBanner from '../components/NewUserBanner/NewUserBanner';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import ExclusiveBrandsSection from '../components/Carousel/ExclusiveBrandsSection';
import GlobalBrandsShowcase from '../components/Carousel/GlobalBrandsShowcase';
import ShopByCategory from '../components/ShopByCategory/ShopByCategory';
import Footer from '../components/Footer/Footer';

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product page with the ID
  };

  return (
    <>
      <NewUserBanner />
      <HeroCarousel />
      
      {/* ExclusiveBrandsSection */}
      <div className="brand-section">
        <h2>Medal Worthy Brands To Bag</h2>
      </div>
      <ExclusiveBrandsSection />

      {/* GlobalBrandsSection */}
      <div className="brand-section">
        <h2 style={{ marginTop: '2rem' }}>Grand Global Brands</h2>
      </div>
      <GlobalBrandsShowcase />

      {/* ShopByCategorySection */}
      <div className="Category">
        <h2>Shop By Category</h2>  
      </div>
      <ShopByCategory />

      {/* FooterSection */}
      <Footer />
    </>
  );
}

export default HomePage;

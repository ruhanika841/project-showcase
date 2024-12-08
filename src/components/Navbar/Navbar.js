import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Logo/Logo';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useCart } from '../../context/CartContext';

function Navbar({ wishlist, bag }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  

  // Define handleMouseEnter only once
  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };


  const submenuItems = {
    MEN: [
      { title: 'Topwear', links: ['T-Shirts', 'Casual Shirts', 'Formal Shirts','Sweatshirts', 'Sweaters', 'Jackets','Blazers & Coats', 'Suits','Rain Jackets'] },
      { title: 'Bottomwear', links: ['Jeans', 'Casual Trousers', 'Formal Trousers','Shorts', 'Track Pants & Joggers',] },
      { title: 'Footwear', links: ['Casual Shoes', 'Sports Shoes', 'Formal Shoes','Sneakers', 'Sandals & Floaters', 'Flip Flops','Socks'] },
      { title: ' Sports & Active Wear', links: [' Sports Shoes', 'Sports Sandals', 'Active T-Shirts',' Tracksuits', 'Jackets & Sweatshirts', 'Sports Accessories','  Swimwear', ] },
      { title: 'Fashion Accessories', links: [' Wallets', ' Belts', 'Perfumes & Body Mists','Trimmers', 'Deodorants', 'Ties, Cufflinks & Pocket Squares','Accessory Gift Sets','Caps & Hats',] },
      { title: 'Indian & Festive Wear', links: ['Kurtas & Kurta Sets', 'Sherwanis', 'Nehru Jackets','Dhotis'] },
      { title: 'Innerwear & Sleepwear', links: ['Briefs & Trunks', 'Boxers', ' Vests','Sleepwear & Loungewear','Thermals'] },
      { title: 'Gadgets', links: ['Smart Wearables', 'Fitness Gadgets', 'Headphones','Speakers'] },
      { title: 'Sunglasses & Framesr', links: [] },

    ],
    
    WOMEN: [
      { title: 'Indian & Fusion Wear', links: ['Kurtas & Suits', 'Kurtis, Tunics & Tops','Sarees', 'Ethnic Wears','Leggings, Salwars & Churidars',] },
      { title: 'Western Wear', links: ['Tops', 'Dresses', 'Tshirts',' Jeans', 'Trousers & Capris'] },
      { title: 'Footwear', links: ['Flats', 'Casual Shoes', 'Heels',' Boots', 'Sports Shoes & Floaters'] },
      { title: 'Lingerie & Sleepwear', links: ['Bra', 'Briefs', 'Shapewear','Sleepwear & Loungewear', 'Swimwear', 'Camisoles & Thermals'] },
      { title: 'Gadgets', links: ['Smart Wearables', 'Fitness Gadgets', 'Headphones','Speakers'] },
      { title: 'Sports & Active Wear', links: ['Clothing', 'Footwear', 'Sports Accessories','Sports Equipment'] },
      { title: 'Beauty & Personal Care', links: ['Makeup', 'Skincare', 'Premium Beauty','Lipsticks','Fragrances'] },
      { title: ' Jewellery', links: ['Fashion Jewellery', 'Fine Jewellery', 'Earrings'] },
      { title: 'Belts, Scarves & More', links: [] },
    ],

    KIDS: [
      { title: 'Boys Clothing', links: ['T-Shirts', 'Shorts', 'Shirts','Jeans','Trousers','Clothing Sets','Ethnic Wear','Track Pants & Pyjamas','Jacket, Sweater & Sweatshirts','Party Wear','Innerwear & Thermals','Nightwear & Loungewear','Value Packs'] },
      { title: 'Girls Clothing', links: ['Dresses', 'Tops', 'Tshirts','Clothing Sets','Lehenga choli','Kurta Sets','Dungarees & Jumpsuits','Skirts & shorts','Tights & Leggings','Jeans, Trousers & Capris','Jacket, Sweater & Sweatshirts','Nightwear & Loungewear','Innerwear & Thermals','Value Packs'] },
      { title: 'Footwear', links: ['Casual Shoes', 'Flipflops', 'Sports Shoes','Flats','Sandals','Heels','School Shoes','Socks']},
      { title: 'Infants', links: ['Bodysuits', 'Rompers & Sleepsuits', 'Tshirts & Tops','Dresses','Bottom wear','Winter Wear','Innerwear & Sleepwear','Infant Care']},
      { title: ' Kids Accessories', links: ['Bags & Backpacks', 'Watches', 'Jewellery & Hair accessory','Sunglasses','Masks & Protective Gears','Caps & Hats']},
    ],
    'HOME & LIVING': [
      { title: 'Bed Linen & Furnishing', links: ['Bed Runners', 'Mattress Protectors','Bedsheets','Bedding Sets','Blankets, Quilts & Dohars','Pillows & Pillow Covers','Bed Covers','Diwan Sets','Chair Pads & Covers','Sofa Covers'] },
      { title: 'Bath', links: ['Bed Runners', 'Bath Towels','Hand & Face Towels','Beach Towels','Towels Set','Bath Rugs','Bath Robes','Bathroom Accessories','Shower Curtains'] },
      { title: 'Home Décor', links: ['Plants & Planters', 'Aromas & Candles','Clocks','Mirrors','Wall Décor','Festive Decor','Pooja Essentials','Fountains','Showpieces & Vases','Ottoman'] },
      { title: 'Kitchen & Table', links: ['Table Runners', 'Dinnerware & Serveware','Cups and Mugs','Bakeware & Cookware','Kitchen Storage & Tools','Bar & Drinkware','Table Covers & Furnishings'] },
      { title: 'Brands', links: ['H&M', 'Marks & Spencer','Home Centre','D Decor','Story@Home','Pure Home & Living','Swayam','Raymond Home'] },
      { title: 'Flooring', links: ['Floor Runners', 'Carpets','Floor Mats & Dhurries','Door Mats'] },
      { title: 'Lamps & Lighting', links: ['Floor Lamps', 'Ceiling Lamps','Table Lamps','Wall Lamps','Outdoor Lamps','String Lights'] },
      { title: 'Storage', links: ['Bins', 'Hangers','Organisers','Hooks & Holders','Laundry Bags'] },

    ],

        BEAUTY: [
      { title: 'Makeup', links: ['Lipsticks', 'Lip Gloss', 'Lip Liner','Mascara','Eyeliner','Kajal','Eyeshadow','Foundation','Primer','Concealer','Compact','Nail Polish'] },
      { title: 'Skincare, Bath & Body', links: ['Face Moisturiser', 'Face Wash', 'Cleanser','Masks & Peel','Sunscreen','Serum','Eye Cream','Lip Balm','Body Lotion','Body Wash','Body Scrub','Hand Cream'] },
      { title: 'Haircare', links: ['Shampoo', 'Conditioner','Hair Cream','Hair Oil','Hair Gel','Hair Color','Hair Serum','Hair Accessory'] },
      { title: 'Fragrances & Appliances', links: ['Perfume', 'Deodorant','Body Mist','Hair Straightener','Hair Dryer','Epilator'] },
      { title: 'Top Brands', links: ['Lakme', 'Maybelline','LOreal','Philips','Bath & Body Works','THE BODY SHOP','Biotique','Mamaearth','MCaffeine','Nivea','Lotus Herbals','LOreal Professionnel','KAMA AYURVEDA','M.A.C','Forest Essentials'] },
      
    ],
    
  };

  // const handleMouseEnter = (menu) => {
  //   setActiveMenu(menu);
  // };

  // const handleMouseLeave = () => {
  //   setActiveMenu(null);
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <Logo />
  
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
  
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <div className="nav-wrapper" onMouseLeave={handleMouseLeave}>
            <ul className="navbar-nav">
              {['MEN', 'WOMEN', 'KIDS', 'HOME & LIVING', 'BEAUTY'].map((category) => (
                <li
                  className="nav-item position-relative"
                  key={category}
                  onMouseEnter={() => handleMouseEnter(category)}
                >
                  <Link className="nav-link" to={`/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '')}`}>
                    <strong>{category}</strong>
                  </Link>
                </li>
              ))}
              <li className="nav-item position-relative">
                <Link className="nav-link studio-link" to="/studio">
                  <span className="new-badge">NEW</span>
                  <strong>STUDIO</strong>
                </Link>
              </li>
            </ul>

            {activeMenu && submenuItems[activeMenu] && (
              <div className={`submenu-wrapper ${activeMenu.toLowerCase().replace(/ & /g, '-').replace(/ /g, '')}`}>
                <div className="submenu">
                  {submenuItems[activeMenu].map((column, index) => (
                    <div className="submenu-column" key={index}>
                      <h6>{column.title}</h6>
                      {column.links.map((link, idx) => (
                        <Link
                          key={idx}
                          to={`/${activeMenu.toLowerCase()}/${link.toLowerCase().replace(/ /g, '-')}`}
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form className="d-flex search-box ms-auto">
            <i className="fas fa-search search-icon"></i>
            <input type="text" placeholder="Search for products, brands, and more" aria-label="Search" />
          </form>

          <ul className="navbar-nav ms-auto nav-icons">
            <li className="nav-item">
              <Link className="nav-link d-flex flex-column" to="/profile">
                <i className="fas fa-user"></i>
                <span className="icon-label">Profile</span>
              </Link>
            </li>
             <li className="nav-item">
          <Link className="nav-link d-flex flex-column" to="/wishlist">
            <i className="fas fa-heart"></i>
            <span className="icon-label">Wishlist ({wishlist.length})</span>
          </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link d-flex flex-column" to="/bag">
        <i className="fas fa-shopping-bag"></i>
        <span className="icon-label">Bag ({bag.length})</span>
      </Link>
    </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

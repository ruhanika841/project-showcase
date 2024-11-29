import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img src="/images/logo.png" alt="Myntra Logo" className="logo-img" />
    </Link>
  );
}

export default Logo;

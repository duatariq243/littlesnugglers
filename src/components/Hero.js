import React from 'react';// import React: Required to use JSX (which looks like HTML but is JavaScript).
import { useNavigate } from 'react-router-dom';

import './Hero.css'; 
const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Soft, Safe & Stylish Baby Clothes — Delivered with Love</h1>
        <p>
          Discover our carefully curated collection of organic, ultra-soft, and adorable baby apparel designed to keep your little ones comfortable and happy. From cozy onesies to playful outfits, every piece is crafted with gentle fabrics and thoughtful details, perfect for sensitive skin and everyday adventures.
          <br /><br />
          Shop with confidence knowing you’re choosing quality, safety, and style — because your baby deserves the very best. Enjoy easy returns, fast shipping, and expert customer support that’s always here to help.
          <br /><br />
          Start dressing your baby in comfort and cuteness today!
        </p>
        <button className="cta-button" onClick={() => navigate('/products')}>
          Shop the Collection
        </button>
      </div>
      <div className="hero-image">
        <img src="./images/Hero.png" alt="ecommerce mockup" />
      </div>
    </section>
  );
};


export default Hero; //This line exports the component so it can be used in other files, like App.js 

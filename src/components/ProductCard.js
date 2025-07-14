import React, { useState } from 'react'; 
import './ProductCard.css';

const ProductCard = ({ product , onAddToCart}) => { //product is prop
    // 💡 Log to confirm what it received
  console.log("✅ ProductCard got onAddToCart:", typeof onAddToCart);

  if (typeof onAddToCart !== "function") {
    throw new Error("❌ onAddToCart is not a function — was not passed correctly!");
  }
  return ( ////when you click the button, it calls the function that was passed from App.js, and adds the product to the cart
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
    
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
  );
};

export default ProductCard;

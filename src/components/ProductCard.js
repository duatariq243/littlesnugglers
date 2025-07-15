import React, { useState } from 'react'; 
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product , onAddToCart , onProductClick}) => { //product is prop
    // 💡 Log to confirm what it received
  console.log("✅ ProductCard got onAddToCart:", typeof onAddToCart);
    const navigate = useNavigate();

    const handleCheckoutClick = () => {
    // Optionally pass product info via state or params
    navigate('/checkout', { state: { product } });
  };


  if (typeof onAddToCart !== "function") {
    throw new Error("❌ onAddToCart is not a function — was not passed correctly!");
  }
   return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent modal from opening on button click
          onAddToCart(product);
        }}
      >
        Add to Cart
        
      </button>


        <button onClick={handleCheckoutClick}>Checkout</button>


      
    </div>
  );
};

export default ProductCard;

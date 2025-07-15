// CheckoutPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const product = location.state?.product || null;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("✅ PaymentMethod created: " + paymentMethod.id);
      // Send paymentMethod.id and product details to server for payment processing
    }
  };

  return (
    <div className="checkout-container">
    <div className="checkout">
      <h2>Checkout</h2>

      {product && (
        <div className="product-summary">
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input required />

        <label>Email</label>
        <input required type="email" />

        <label>Card Details</label>
        <CardElement />

        <button type="submit" disabled={!stripe}>Place Order</button>
      </form>
    </div>
    </div>
  );
};

export default CheckoutPage;

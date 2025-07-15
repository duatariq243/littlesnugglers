import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };



 return (
    <div className="cart">
      <h3>🛒 Cart Summary</h3>
      <p>Items in cart: {cartItems.length}</p>

      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, i) => (
              <li key={i}>
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>

                <div className="cart-quantity">
                  <button onClick={() => onUpdateQuantity(item.id, -1)} disabled={item.quantity <= 1}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                </div>

                <button className="remove-btn" onClick={() => onRemove(i)}>❌</button>
              </li>
            ))}
          </ul>

          {/* Checkout Button */}
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      ) : (
        <p>No items added yet.</p>
      )}

      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
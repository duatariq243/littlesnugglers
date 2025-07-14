import React from 'react';
import './Cart.css';

const Cart = ({ cartItems , onRemove , onUpdateQuantity  }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h3>🛒 Cart Summary</h3>
      <p>Items in cart: {cartItems.length}</p>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, i) => ( /* Added onClick={() => onRemove(i)}

                                         i is the index used to find which item to remove*/ 
                                         //Math.max()	Prevent negative quantity
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
      ) : (
        <p>No items added yet.</p>
      )}
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
    </div>

    
  );
};

export default Cart;

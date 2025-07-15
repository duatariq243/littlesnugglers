import React, { useState  , useEffect} from 'react';import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPage from './components/CheckoutPage';

const stripePromise = loadStripe('pk_test_51N5uDWHSxUStshEgfzgIF8MEfjLuZwJ2xhzuqVGIjUafr0HN8lAZxfaLKE04UuYelW75Ob0aR6Y4LvD4fEDN51KG00VBtX8IUo');



function App() {   // You created a cartItems state
                  //You passed a function handleAddToCart to Products
    const [cartItems, setCartItems] = useState(() => {  //useState(() => {...})	Lazy initialize from localStorage on first load
        // Load initial cart from localStorage or empty array
      const savedCart = localStorage.getItem('cartItems');

       
         return savedCart ? JSON.parse(savedCart) : [];
          });

    // useEffect(() => {...}, [cartItems])	Save cart every time it changes //JSON.parse & JSON.stringify	Convert between string & array to store in localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


    const handleAddToCart = (product) => {
 
   
      setCartItems((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
    
        if (existingItem) {
          // Update quantity
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // Add new item with quantity 1
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
  };
     
  const handleRemoveFromCart = (id) => {  /* We added handleRemoveFromCart

                                            It removes an item by index from the cart using .filter()
    
                                             Passed onRemove to Cart component*/
    const updatedCart = cartItems.filter((item, index) => index !== id);
    setCartItems(updatedCart);
  };

  const handleUpdateQuantity = (id, delta) => { //map()	Update specific cart item //quantity field	Manage count of product in cart
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };   //Adds or subtracts from quantity , Ensures quantity never goes below 1

 
  
  
  return (

     
  <>
    <div className="App">
      {/* 🌟 Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </div>

        <div className="navbar-center">
          <Link to="/" className="nav-logo">
         
             Little Snuggles
         </Link>
        </div>

        <div className="navbar-right">
          <Link to="/cart" className="nav-link">Cart ({cartItems.length})</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      {/* 🌟 Routing Logic */}
       <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/" element={<><Hero /><Features /></>} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
         <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={
          <Cart
            cartItems={cartItems}
            onRemove={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Elements>
    </div>

   
  </>
);

            }

export default App;

import React from 'react';// import React: Required to use JSX (which looks like HTML but is JavaScript).

import './Hero.css'; 
const Hero = () => { //But we used the arrow function (=>) style — modern and clean.
  return ( ////We return JSX — it looks like HTML, but is rendered by React. section is an HTML element with a className we use className instead of class in React. 
    <section className="hero">
      <div className="hero-content"> 
        <h1>Grow Your Online Business Fast</h1>
        <p>Launch your e-commerce store with powerful tools that help you scale, market, and convert more customers.</p>
        <button className="cta-button">Get a Free Demo</button>
      </div>
      <div className="hero-image">
      <img src="./images/Hero.png" alt="ecommerce mockup" />
      </div>
    </section>
  );
};

export default Hero; //This line exports the component so it can be used in other files, like App.js 

import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description }) => {
  return ( //these are props and props are parameters and proprties and we arev passng parameters
    <div className="feature-card"> 
      <img src={icon} alt="icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;

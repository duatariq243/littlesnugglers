import React from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';

const featureData = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png',
    title: 'Fast Setup',
    description: 'Get your store online in minutes with no coding.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
    title: 'Secure Checkout',
    description: 'Integrated payment systems that build customer trust.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1188/1188540.png',
    title: 'Marketing Tools',
    description: 'Built-in SEO, email campaigns, and analytics.',
  },
];

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="feature-list">
        {featureData.map((item, index) => ( //featureData is an array of objects.

                                          //We use .map() to loop through each item and render a card.

                                          //We pass data using props into each FeatureCard.
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;

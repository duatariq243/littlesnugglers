import React, { useState } from 'react'; //usestate use for when we can chnage data like cart and filters
import ProductCard from './ProductCard';
import './Products.css';

const productData = [
  {
    id: 1,
    name: 'Baby Clothes',
    price:  29.99,
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Baby Shoes',
    price: 49.99,
    image: '/images/product2.jpg',
  },
  {
    id: 3,
    name: 'Baby Jackets',
    price: 19.99,
    image: '/images/product3.jpg',
  },
];

const Products = ({ onAddToCart }) => { //useState Creates a searchTerm variable that stores user input
                        //onChange={(e) => ...}	Updates searchTerm when typing
                        //.filter()	Filters product list based on matching name
                        //toLowerCase()	Makes search case-insensitive (a better UX)
                        //So when a user types “marketing”, the code only shows matching products.
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(productData);
  console.log("✅ Products received:", typeof onAddToCart); // should be 'function'


  // Filtered list based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return ( /*  const [products, setProducts] = useState(productData);
    This is React’s way of creating a state variable:
    
    products: current list
    
    setProducts: function to update it
    
    productData: initial value
    
    💡 If later you want to filter or sort, you'd call setProducts(...) to update the list.*/

    
    <section className="products"> 
      <h2>Our Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
             key={product.id} 
             product={product}
             onAddToCart={onAddToCart} // Pass the function here receive onAddToCart as a prop and pass it to each product card:
              />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      </section>
    );
};


export default Products;

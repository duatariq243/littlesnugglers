import React, { useState } from 'react'; //usestate use for when we can chnage data like cart and filters
import ProductCard from './ProductCard';
import './Products.css';

const productData = [
  {
    id: 1,
    name: 'Baby Clothes',
    category: 'Clothes',
    price:  29.99,
     image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
      description: 'Soft and comfy clothes for newborns.',
  },
  {
    id: 2,
    name: 'Baby Shoes',
     category: 'Shoes',
    price: 49.99,
    image: `${process.env.PUBLIC_URL}/images/product2.jpg`,  
        description: 'Adorable and supportive baby shoes.',
  },
  {
    id: 3,
    name: 'Baby Jackets',
      category: 'Jackets',
    price: 19.99,
    image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
        description: 'Warm jackets to keep your baby cozy.',

  },
   {
    id: 4,
    name: 'Baby Hat',
    category: 'Clothes',
    price: 9.99,
    image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
    description: 'Cute knitted hat for your baby.',
  },
  {
    id: 5,
    name: 'Baby Socks',
    category: 'Clothes',
    price: 5.99,
    image: `${process.env.PUBLIC_URL}/images/product5.jpg`,
    description: 'Soft and colorful baby socks.',
  },
  {
    id: 6,
    name: 'Baby Bibs',
    category: 'Clothes',
    price: 6.49,
    image: `${process.env.PUBLIC_URL}/images/product6.jpg`,
    description: 'Waterproof bibs for feeding time.',
  },
  {
    id: 7,
    name: 'Baby Boots',
    category: 'Shoes',
    price: 24.99,
    image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
    description: 'Cozy boots for winter days.',
  },
  {
    id: 8,
    name: 'Baby Towel',
    category: 'Jackets',
    price: 14.99,
    image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
    description: 'Soft towel with hood.',
  },
  {
    id: 9,
    name: 'Baby Romper',
    category: 'Clothes',
    price: 17.99,
    image: `${process.env.PUBLIC_URL}/images/product9.jpg`,
    description: 'One-piece suit for daytime play.',
  },
  {
    id: 10,
    name: 'Baby Sneakers',
    category: 'Shoes',
    price: 34.99,
    image: `${process.env.PUBLIC_URL}/images/product10.jpg`,
    description: 'Trendy sneakers for your tiny one.',
  }
];

const Products = ({ onAddToCart }) => { //useState Creates a searchTerm variable that stores user input
                        //onChange={(e) => ...}	Updates searchTerm when typing
                        //.filter()	Filters product list based on matching name
                        //toLowerCase()	Makes search case-insensitive (a better UX)
                        //So when a user types “marketing”, the code only shows matching products.
                      const [searchTerm, setSearchTerm] = useState('');
                      const [products, setProducts] = useState(productData);
                      const [sortOrder, setSortOrder] = useState(''); //sortOrder	State to store selected sort method
                      const [selectedCategory, setSelectedCategory] = useState('All'); // for category

 
  console.log("✅ Products received:", typeof onAddToCart); // should be 'function'

      //State for modal and selected product
           const [selectedProduct, setSelectedProduct] = useState(null); // define state for modal

      // Handle click on product to open modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Filtered list based on search and category
  const filteredProducts = products //filteredProducts is calculated by first filtering products by category (or all if 'All'), then by search term
   .filter(product => {
    if (selectedCategory === 'All') return true;  //When user selects a category from dropdown, setSelectedCategory updates that state
    return product.category === selectedCategory;
  })
  .filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

     

     // Sorting
  if (sortOrder === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

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

      

      <div className="filter-bar">
      
        <div className="sort-container">
            <label htmlFor="sort">Sort by: </label>
               <select      	
            id="sort"
            className="sort-dropdown"  
            value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">Default</option>
                 <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
             </select>
          </div>

               
              <select
                     className="category-dropdown"
                     value={selectedCategory}
                       onChange={(e) => setSelectedCategory(e.target.value)}
>
                         <option value="All">All Categories</option>
                          <option value="Clothes">Clothes</option>
                          <option value="Shoes">Shoes</option>
                           <option value="Jackets">Jackets</option>
                        </select>
      </div>
      
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            
            <ProductCard
             key={product.id} 
             product={product}
             onAddToCart={onAddToCart} // Pass the function here receive onAddToCart as a prop and pass it to each product card:
              onProductClick={handleProductClick} //pop up appear
              />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

     {/* Modal Popup */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <button onClick={() => onAddToCart(selectedProduct)}>Add to Cart</button>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
      </section>
    );
};


export default Products;

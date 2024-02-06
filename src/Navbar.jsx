import React, { useState } from 'react';

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (modelDetails) => {
    setCartItems(prevItems => [...prevItems, modelDetails]);
  };

  return (
    <nav>
      <div className="navbar-left">
        <img src=".\images\logo.jpg" alt="Logo" />
        <h1 className="heading1">The Tesla</h1>
      </div>
      <div className="navbar-right">
        
        <div className="cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartItems.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';


const Card1 = ({ data }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
   
    console.log(`Added ${quantity} ${data.name} to cart`);
  };

  return (
    <div className='card'>
      <img src={data.image_url} alt={data.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <div>
        <button onClick={decrementQuantity}>-</button>
        <button>{quantity}</button>
        <button onClick={incrementQuantity}>+</button>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card1;

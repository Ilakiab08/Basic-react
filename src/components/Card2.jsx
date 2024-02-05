// Card2.js
import React from 'react';

const Card2 = ({ data }) => {
  return (
    <div style={{ border: '1px solid #007bff', padding: '10px', borderRadius: '8px' }}>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default Card2;

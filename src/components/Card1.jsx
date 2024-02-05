'// Card1.js'
import React from 'react';

const Card1 = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
      <img src={data.image_url} alt={data.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Card1;

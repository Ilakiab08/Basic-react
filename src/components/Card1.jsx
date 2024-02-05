
import React from 'react';

const Card1 = ({ data }) => {
  return (
    <div className='card'>
      <img src={data.image_url} alt={data.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Card1;

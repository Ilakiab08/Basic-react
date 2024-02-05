
import React from 'react';
import Layout from './layout';
import Card1 from './Card1';
import Card2 from './Card2';

const Cardgenerator = ({ dataArray }) => {
  return (
    <Layout>
      {dataArray.map((data, index) => (
        
        index % 2 === 0 ? <Card1 key={index} data={data} /> : <Card2 key={index} data={data} />
      ))}
    </Layout>
  );
};

export default Cardgenerator;

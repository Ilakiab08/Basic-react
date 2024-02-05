
// CardGenerator.jsx
import React from "react";
import Layout from './components/layout.jsx';
import Card1 from './components/Card1.jsx';
import Card2 from './components/Card2.jsx';

const CardGenerator = ({ dataArray }) => {
  return (
    <Layout>
    {dataArray.map((data, index) => (
      <div key={index}>
        <Card1 data={data} />
        <Card2 data={data} />
      </div>
    ))}
  </Layout>
  
  );
};

export default CardGenerator;

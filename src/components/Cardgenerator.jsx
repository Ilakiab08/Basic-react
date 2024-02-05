
// CardGenerator.jsx
import React from "react";
import Layout from './components/layout.jsx';
import Card1 from './components/Card1.jsx';
import Card2 from './components/Card2.jsx';

const CardGenerator = ({ dataArray }) => {
  return (
    <Layout>
      {dataArray.map((data, index) => (
        index % 2 === 0 ? <Card1 key={index} data={data} /> : <Card2 key={index} data={data} />
      ))}
    </Layout>
  );
};

export default CardGenerator

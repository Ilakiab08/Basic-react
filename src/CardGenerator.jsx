
// CardGenerator.jsx
import React from "react";
import Layout from './components/layout.jsx';
import Card1 from './components/Card1.jsx';


const CardGenerator = ({ dataArray }) => {
 return (
    <Layout>
      {dataArray.map((data) => (
        <div key={data.id || data.name}>
          <Card1 data={data} />
         
        </div>
      ))}
    </Layout>
 );
};

export default CardGenerator;


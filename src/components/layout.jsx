
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {children}
    </div>
  );
};

export default Layout;

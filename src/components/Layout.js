import React from 'react';

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-6 sm:px-12 py-12 md:py-20 z-0 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
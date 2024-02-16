// ProductContext.js
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const setSelectedProduct = (product) => {
    setProduct(product);
  };

  return (
    <ProductContext.Provider value={{ product, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

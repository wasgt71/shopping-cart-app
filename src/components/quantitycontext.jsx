import React, { createContext, useContext, useState } from 'react';


const QuantityContext = createContext();


export const QuantProvider = ({ children }) => {
  const [currentQuantity, saveQuantity] = useState({quantity: 1});

  return (
    <QuantityContext.Provider value={{ currentQuantity, saveQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
};


export const useQuantity = () => {
  return useContext(QuantityContext);
};



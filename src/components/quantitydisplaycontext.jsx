import React, { createContext, useContext, useState } from 'react';


const QuantityDisplayContext = createContext();


export const QuantDisplayProvider = ({ children }) => {
  const [quantDisplay, setQuantDisplay] = useState([]);

  return (
    <QuantityDisplayContext.Provider value={{ quantDisplay, setQuantDisplay }}>
      {children}
    </QuantityDisplayContext.Provider>
  );
};


export const useQuantDisplay = () => {
  return useContext(QuantityDisplayContext);
};
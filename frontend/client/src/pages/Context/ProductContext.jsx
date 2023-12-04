import React, { createContext, useContext, useReducer } from 'react';

// Buat context
const ProductContext = createContext();

// Reducer untuk mengelola state produk
const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    // Tambahkan jenis action lain jika diperlukan
    default:
      return state;
  }
};

// Hook custom untuk menggunakan context
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

// Komponen penyedia (provider) context
export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

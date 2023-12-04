// SavedProductsContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Buat context
const SavedProductsContext = createContext();

// Reducer untuk mengelola state savedProducts
const savedProductsReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_PRODUCT':
      return { ...state, savedProducts: [...state.savedProducts, action.payload] };
    case 'SET_SAVED_PRODUCTS':
      return { ...state, savedProducts: action.payload };
    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload };
    default:
      return state;

  }
};

// Hook custom untuk menggunakan context
export const useSavedProducts = () => {
  const context = useContext(SavedProductsContext);
  if (!context) {
    throw new Error('useSavedProducts must be used within a SavedProductsProvider');
  }
  return context;
};

// Komponen penyedia (provider) context
export const SavedProductsProvider = ({ children }) => {
  const [savedProducts, dispatch] = useReducer(savedProductsReducer, {
    savedProducts: [],
    selectedProduct: null,
  });

  return (
    <SavedProductsContext.Provider value={{ savedProducts, dispatch }}>
      {children}
    </SavedProductsContext.Provider>
  );
};

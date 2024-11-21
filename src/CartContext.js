// CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Create Context
const CartContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook for accessing the Cart Context
export const useCart = () => useContext(CartContext);

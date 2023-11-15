import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({
    product: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

const STORAGE_KEY = "cartData"; // Define a key for localStorage

const CartContextProvider = ({ children }) => {
    const [product, setProduct] = useState(() => {
        // Load cart data from localStorage when the component mounts
        const savedCart = localStorage.getItem(STORAGE_KEY);
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart data to localStorage whenever the cart changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(product));
    }, [product]);

    const addToCart = (cart) => {
        setProduct((prevCart) => [...prevCart, cart]);
    };

    const removeFromCart = (itemToRemove) => {
        setProduct((prevCart) => prevCart.filter((item) => item !== itemToRemove));
    };

    return (
        <CartContext.Provider value={{ product, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartContextProvider, useCartContext };

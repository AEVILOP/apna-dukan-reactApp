import { createContext, useContext, useState, useEffect } from 'react';

// 1. Create context
const CartContext = createContext();

// 2. Create provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on start
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Function to add item
    const addToCart = (product) => {
        setCart(currentCart => {
            // Check if item already in cart
            const existingItem = currentCart.find(item => item.id === product.id);

            if (existingItem) {
                // If exists, increase quantity
                return currentCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If new, add with quantity 1
                return [...currentCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Function to remove item
    const removeFromCart = (productId) => {
        setCart(currentCart => currentCart.filter(item => item.id !== productId));
    };

    // Function to update quantity
    const updateQuantity = (productId, quantity) => {
        if (quantity === 0) {
            removeFromCart(productId);
            return;
        }

        setCart(currentCart =>
            currentCart.map(item =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    // Function to get total
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Function to get count
    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    // Function to check if item is in cart
    const isInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    // Function to clear cart
    const clearCart = () => {
        setCart([]);
    };

    // 3. Provide values to children
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            getCartTotal,
            getCartCount,
            isInCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

// 4. Custom hook to use cart
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};
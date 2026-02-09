import { createContext, useContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            if (state.items.some(item => item.id === action.payload.id)) {
                toast.error('Already in wishlist!');
                return state;
            }
            toast.success('Added to wishlist!');
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case 'REMOVE_FROM_WISHLIST':
            toast.success('Removed from wishlist');
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };

        case 'CLEAR_WISHLIST':
            return {
                ...state,
                items: [],
            };

        case 'LOAD_WISHLIST':
            return {
                ...state,
                items: action.payload,
            };

        default:
            return state;
    }
};

export const WishlistProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            dispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(savedWishlist) });
        }
    }, []);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(state.items));
    }, [state.items]);

    const addToWishlist = (product) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    };

    const removeFromWishlist = (productId) => {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
    };

    const clearWishlist = () => {
        dispatch({ type: 'CLEAR_WISHLIST' });
    };

    const isInWishlist = (productId) => {
        return state.items.some(item => item.id === productId);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist: state.items,
                addToWishlist,
                removeFromWishlist,
                clearWishlist,
                isInWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within WishlistProvider');
    }
    return context;
};
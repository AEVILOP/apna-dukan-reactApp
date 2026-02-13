# Apna Dukan - E-Commerce Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Core Concepts](#core-concepts)
5. [Detailed Component Breakdown](#detailed-component-breakdown)
6. [State Management](#state-management)
7. [Routing](#routing)
8. [Features](#features)
9. [How to Run](#how-to-run)

---

## Project Overview

**Apna Dukan** is a modern, full-featured e-commerce web application built with React. It provides a complete shopping experience with product browsing, filtering, cart management, wishlist functionality, and a checkout process.

### Key Features:
- 🛍️ Product catalog with 20 items
- 🔍 Advanced filtering (search, category, price range)
- 📄 Pagination (10 products per page)
- 🛒 Shopping cart with quantity management
- ❤️ Wishlist functionality
- 💳 Complete checkout flow
- 📱 Fully responsive design
- 🎨 Modern UI with gradient effects and animations

---

## Technology Stack

### Frontend Framework
- **React 18** - JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form validation and handling

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- Custom gradients and animations

### Icons
- **Lucide React** - Beautiful, consistent icon library

### Notifications
- **React Hot Toast** - Toast notifications for user feedback

### Build Tool
- **Vite** - Fast build tool and development server

---

## Project Structure

```
e-commerce-react/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   ├── ProductCard.jsx  # Individual product card
│   │   └── filter.jsx       # Filter sidebar
│   │
│   ├── pages/              # Page components (routes)
│   │   ├── Home.jsx        # Homepage with hero & featured products
│   │   ├── Products.jsx    # Product listing with pagination
│   │   ├── ProductDetail.jsx # Single product details
│   │   ├── Cart.jsx        # Shopping cart
│   │   ├── Wishlist.jsx    # Saved items
│   │   ├── CheckoutPage.jsx # Checkout form
│   │   └── About.jsx       # About page
│   │
│   ├── context/            # React Context for state management
│   │   ├── CartContext.jsx     # Cart state & functions
│   │   └── WishlistContext.jsx # Wishlist state & functions
│   │
│   ├── Data/               # Static data
│   │   └── products.js     # Product catalog (20 products)
│   │
│   ├── App.jsx             # Main app component with routes
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
│
├── public/                 # Static assets
├── package.json            # Dependencies
└── vite.config.js         # Vite configuration
```

---

## Core Concepts

### 1. **React Components**
Components are reusable pieces of UI. Each component is a JavaScript function that returns JSX (HTML-like syntax).

```javascript
// Simple component example
const MyComponent = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};
```

### 2. **React Hooks**
Hooks let you use state and other React features in functional components.

**Common Hooks Used:**
- `useState` - Manage component state
- `useEffect` - Side effects (data fetching, subscriptions)
- `useContext` - Access context values
- `useReducer` - Complex state logic
- `useNavigate` - Programmatic navigation

### 3. **Context API**
Context provides a way to share data across components without passing props manually at every level.

**Why we use it:**
- Cart data needs to be accessible from multiple pages
- Wishlist data needs to be shared across components
- Avoids "prop drilling" (passing props through many levels)

### 4. **React Router**
Handles navigation between different pages without full page reloads.

```javascript
<Route path="/products" element={<Products />} />
// When user visits /products, show Products component
```

---

## Detailed Component Breakdown

### 1. **App.jsx** - Main Application Component

**Purpose:** Root component that sets up routing and layout.

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// ... other imports

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />                    {/* Always visible */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* ... more routes */}
          </Routes>
        </main>
        <Footer />                    {/* Always visible */}
      </div>
    </Router>
  );
}
```

**Key Points:**
- `<Router>` wraps everything to enable routing
- `<Routes>` contains all route definitions
- `<Route>` maps URL paths to components
- Navbar and Footer are outside Routes, so they appear on all pages

---

### 2. **main.jsx** - Application Entry Point

**Purpose:** Renders the app and wraps it with context providers.

```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>              {/* Provides cart state to all components */}
      <WishlistProvider>        {/* Provides wishlist state to all components */}
        <App />
        <Toaster position="top-right" />  {/* Toast notifications */}
      </WishlistProvider>
    </CartProvider>
  </StrictMode>
);
```

**Key Points:**
- Context providers wrap the entire app
- Any component can now access cart and wishlist data
- Toaster component handles all toast notifications

---

### 3. **Navbar.jsx** - Navigation Component

**Purpose:** Top navigation bar with logo, links, and cart/wishlist icons.

**Key Features:**
```javascript

import { Heart, ShoppingCart, Store, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useState } from 'react';

const Navbar = () => {
    const { cart } = useCart();              // Get cart from context
    const { wishlist } = useWishlist();      // Get wishlist from context
    const location = useLocation();          // Current URL path
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Calculate total items in cart
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlist.length;

    // Check if current page is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            {/* Logo - clickable, navigates to home */}
            <Link to="/">
                <Store /> Apna Dukan
            </Link>

            {/* Navigation links with active highlighting */}
            {navLinks.map((link) => (
                <Link 
                    to={link.path}
                    className={isActive(link.path) ? 'active' : ''}
                >
                    {link.label}
                </Link>
            ))}

            {/* Cart & Wishlist with badge counts */}
            <Link to="/wishlist">
                <Heart />
                {wishlistCount > 0 && <span>{wishlistCount}</span>}
            </Link>
        </nav>
    );
};
```

**Key Concepts:**
- **useCart()** and **useWishlist()** - Custom hooks to access context
- **location.pathname** - Current URL (e.g., "/products")
- **Conditional rendering** - Show badge only if count > 0
- **Sticky positioning** - Navbar stays at top when scrolling

---

### 4. **ProductCard.jsx** - Product Display Component

**Purpose:** Displays individual product with image, price, and action buttons.

```javascript
const ProductCard = ({ product }) => {
    const { addToCart, isInCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    
    const inCart = isInCart(product.id);
    const inWishlist = isInWishlist(product.id);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success('Added to cart!');  // Show notification
    };

    const handleWishlistToggle = (e) => {
        e.preventDefault();  // Don't navigate when clicking heart
        if (inWishlist) {
            removeFromWishlist(product.id);
            toast.success('Removed from wishlist');
        } else {
            addToWishlist(product);
            toast.success('Added to wishlist');
        }
    };

    return (
        <Link to={`/product/${product.id}`}>  {/* Navigate to details */}
            <div className="product-card">
                {/* Wishlist heart button */}
                <button onClick={handleWishlistToggle}>
                    <Heart fill={inWishlist ? 'red' : 'none'} />
                </button>

                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price.toLocaleString('en-IN')}</p>

                {/* Add to cart button */}
                <button 
                    onClick={handleAddToCart}
                    disabled={inCart}
                >
                    {inCart ? 'In Cart' : 'Add to Cart'}
                </button>
            </div>
        </Link>
    );
};
```

**Key Concepts:**
- **Props** - `product` object passed from parent
- **Conditional styling** - Heart is filled if in wishlist
- **Event handling** - `onClick` handlers for buttons
- **e.preventDefault()** - Stops link navigation when clicking heart
- **Toast notifications** - User feedback for actions

---

### 5. **Home.jsx** - Homepage Component

**Purpose:** Landing page with hero section and featured products.

**Structure:**
```javascript
const Home = () => {
    const featuredProducts = products.slice(0, 8);  // First 8 products

    return (
        <div>
            {/* Hero Section - Full-width banner */}
            <section className="hero">
                <h1>Discover Amazing Products</h1>
                <p>Shop the latest trends...</p>
                <Link to="/products">Shop Now</Link>
            </section>

            {/* Features Section - 3 cards */}
            <section className="features">
                <div>Trending Products</div>
                <div>Premium Quality</div>
                <div>Fast Delivery</div>
            </section>

            {/* Featured Products Grid */}
            <section>
                <h2>Featured Products</h2>
                <div className="grid">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};
```

**Key Features:**
- Background image with gradient overlay
- Animated decorative elements
- Responsive grid layout
- Call-to-action buttons

---

### 6. **Products.jsx** - Product Listing with Pagination

**Purpose:** Display all products with filtering and pagination.

```javascript
const Products = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const productsPerPage = 10;

    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Filter products based on search, category, price
    useEffect(() => {
        let result = products;

        // Search filter
        if (filters.searchTerm) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
            );
        }

        // Category filter
        if (filters.category !== 'all') {
            result = result.filter(product => product.category === filters.category);
        }

        // Price filter
        result = result.filter(product => product.price <= filters.maxPrice);

        setFilteredProducts(result);
        setCurrentPage(1);  // Reset to page 1 when filters change
    }, [filters]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top
    };

    return (
        <div>
            <Filter onFilterChange={handleFilterChange} />
            
            {/* Product Grid */}
            <div className="grid">
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    Previous
                </button>

                {/* Page numbers */}
                {getPageNumbers().map(page => (
                    <button 
                        onClick={() => handlePageChange(page)}
                        className={currentPage === page ? 'active' : ''}
                    >
                        {page}
                    </button>
                ))}

                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};
```

**Pagination Logic:**
- **Total pages** = Total products ÷ Products per page
- **Current products** = Slice array based on current page
- **Smart pagination** - Shows ellipsis (...) when many pages

---

### 7. **filter.jsx** - Filter Sidebar Component

**Purpose:** Allows users to filter products by search, category, and price.

```javascript
const Filter = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState(20000);

    // When any filter changes, notify parent component
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onFilterChange({ 
            searchTerm: value, 
            category: selectedCategory, 
            maxPrice: priceRange 
        });
    };

    return (
        <div className="filter-sidebar">
            {/* Search Input */}
            <input 
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search products..."
            />

            {/* Category Buttons */}
            {categories.map(category => (
                <button 
                    onClick={() => handleCategoryChange(category.id)}
                    className={selectedCategory === category.id ? 'active' : ''}
                >
                    {category.name}
                </button>
            ))}

            {/* Price Range Slider */}
            <input 
                type="range"
                min="0"
                max="20000"
                value={priceRange}
                onChange={handlePriceChange}
            />
            <span>₹{priceRange.toLocaleString('en-IN')}</span>
        </div>
    );
};
```

**Key Concepts:**
- **Controlled components** - Input values controlled by state
- **Callback props** - `onFilterChange` function passed from parent
- **Real-time filtering** - Filters apply as user types/clicks

---

### 8. **ProductDetail.jsx** - Single Product Page

**Purpose:** Show detailed information about a specific product.

```javascript
const ProductDetail = () => {
    const { id } = useParams();  // Get product ID from URL
    const navigate = useNavigate();
    const { addToCart, isInCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    // Find product by ID
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleBuyNow = () => {
        addToCart({ ...product, quantity });
        navigate('/checkout');  // Go to checkout page
    };

    return (
        <div className="product-detail">
            {/* Product Image */}
            <img src={product.image} alt={product.name} />

            {/* Product Info */}
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                
                {/* Price */}
                <div className="price">
                    <span>₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="original">₹{product.originalPrice}</span>
                    <span className="savings">
                        You save ₹{product.originalPrice - product.price}
                    </span>
                </div>

                {/* Quantity Selector */}
                <div>
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)}>+</button>
                </div>

                {/* Action Buttons */}
                <button onClick={() => addToCart({ ...product, quantity })}>
                    Add to Cart
                </button>
                <button onClick={handleBuyNow}>Buy Now</button>
            </div>

            {/* Related Products */}
            <div className="related-products">
                <h2>Related Products</h2>
                {/* Show products from same category */}
            </div>
        </div>
    );
};
```

**Key Concepts:**
- **useParams()** - Get URL parameters (product ID)
- **useNavigate()** - Programmatic navigation
- **Array.find()** - Find product by ID
- **Spread operator** - `{...product, quantity}` adds quantity to product object

---

### 9. **Cart.jsx** - Shopping Cart Page

**Purpose:** Display cart items and allow quantity changes.

```javascript
const Cart = () => {
    const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <ShoppingCart size={64} />
                <h2>Your cart is empty</h2>
                <Link to="/products">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            {/* Cart Items */}
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>₹{item.price.toLocaleString('en-IN')}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                +
                            </button>
                        </div>

                        {/* Item Total */}
                        <p>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>

                        {/* Remove Button */}
                        <button onClick={() => removeFromCart(item.id)}>
                            <Trash2 />
                        </button>
                    </div>
                ))}
            </div>

            {/* Order Summary */}
            <div className="order-summary">
                <h2>Order Summary</h2>
                <div>
                    <span>Subtotal</span>
                    <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
                </div>
                <div>
                    <span>Shipping</span>
                    <span>₹100</span>
                </div>
                <div className="total">
                    <span>Total</span>
                    <span>₹{(getCartTotal() + 100).toLocaleString('en-IN')}</span>
                </div>
                <button onClick={() => navigate('/checkout')}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};
```

**Key Concepts:**
- **Conditional rendering** - Show empty state if no items
- **Array.map()** - Loop through cart items
- **Calculations** - Item total = price × quantity

---

### 10. **CheckoutPage.jsx** - Checkout Form

**Purpose:** Collect shipping and payment information.

```javascript
const CheckoutPage = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [currentStep, setCurrentStep] = useState(1);
    const [orderPlaced, setOrderPlaced] = useState(false);

    // Calculate totals
    const subtotal = getCartTotal();
    const shipping = subtotal > 5000 ? 0 : 100;  // Free shipping over ₹5000
    const tax = subtotal * 0.18;  // 18% GST
    const total = subtotal + shipping + tax;

    const onSubmit = (data) => {
        console.log('Order data:', data);
        setOrderPlaced(true);
        toast.success('Order placed successfully!');
        clearCart();  // Empty the cart
        
        // Redirect to home after 3 seconds
        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    if (orderPlaced) {
        return (
            <div className="order-success">
                <CheckCircle size={64} color="green" />
                <h1>Order Placed Successfully!</h1>
                <p>Redirecting to homepage...</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
                <div>
                    <input 
                        {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        placeholder="Email"
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
            )}

            {/* Step 2: Shipping Address */}
            {currentStep === 2 && (
                <div>
                    <input {...register('address', { required: true })} />
                    <input {...register('city', { required: true })} />
                    <input {...register('zipCode', { required: true })} />
                </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
                <div>
                    <input {...register('cardNumber', { required: true })} />
                    <input {...register('expiryDate', { required: true })} />
                    <input {...register('cvv', { required: true })} />
                </div>
            )}

            {/* Navigation Buttons */}
            <div>
                {currentStep > 1 && (
                    <button type="button" onClick={() => setCurrentStep(s => s - 1)}>
                        Back
                    </button>
                )}
                {currentStep < 3 ? (
                    <button type="button" onClick={() => setCurrentStep(s => s + 1)}>
                        Continue
                    </button>
                ) : (
                    <button type="submit">Place Order</button>
                )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="order-summary">
                <h3>Order Summary</h3>
                {cart.map(item => (
                    <div key={item.id}>
                        <span>{item.name} × {item.quantity}</span>
                        <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                ))}
                <div className="total">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
            </div>
        </form>
    );
};
```

**Key Concepts:**
- **React Hook Form** - Form validation and handling
- **Multi-step form** - Different steps based on `currentStep` state
- **Form validation** - Required fields, email pattern
- **Conditional rendering** - Show success message after submission

---

## State Management

### CartContext.jsx - Shopping Cart State

**Purpose:** Manage cart state globally using Context API and useReducer.

```javascript
const CartContext = createContext();

// Reducer function - handles all cart actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Item already in cart, increase quantity
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
                        : item
                );
            }
            // New item, add to cart
            return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);

        case 'UPDATE_QUANTITY':
            if (action.payload.quantity === 0) {
                // Remove item if quantity is 0
                return state.filter(item => item.id !== action.payload.id);
            }
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );

        case 'CLEAR_CART':
            return [];

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    // Load cart from localStorage on initial render
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Helper functions
    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        toast.success(`${product.name} added to cart!`);
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
        toast.success('Item removed from cart');
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const isInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    const getCartCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Provide cart state and functions to all children
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            isInCart,
            getCartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};
```

**Key Concepts:**
- **useReducer** - Manages complex state logic
- **localStorage** - Persists cart data across browser sessions
- **Context Provider** - Makes cart available to all components
- **Custom hook** - `useCart()` simplifies accessing cart

**Reducer Pattern:**
```
Component → dispatch(action) → Reducer → New State → Re-render
```

---

### WishlistContext.jsx - Wishlist State

Similar to CartContext but simpler (no quantities).

```javascript
const wishlistReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            // Don't add if already in wishlist
            if (state.some(item => item.id === action.payload.id)) {
                return state;
            }
            return [...state, action.payload];

        case 'REMOVE_FROM_WISHLIST':
            return state.filter(item => item.id !== action.payload);

        case 'CLEAR_WISHLIST':
            return [];

        default:
            return state;
    }
};
```

---

## Routing

### Route Configuration

```javascript
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/about" element={<About />} />
</Routes>
```

**URL Parameters:**
- `/product/:id` - `:id` is a dynamic parameter
- Access with `useParams()`: `const { id } = useParams();`

**Navigation Methods:**
1. **Link component**: `<Link to="/products">Products</Link>`
2. **useNavigate hook**: `navigate('/checkout')`

---

## Features

### 1. **Product Filtering**
- Search by name/description
- Filter by category
- Filter by price range
- Real-time updates

### 2. **Pagination**
- 10 products per page
- Page number buttons
- Previous/Next navigation
- Smart ellipsis for many pages
- Auto-scroll to top on page change

### 3. **Cart Management**
- Add/remove items
- Update quantities
- Calculate totals
- Persistent storage (localStorage)
- Empty cart state

### 4. **Wishlist**
- Save favorite products
- Toggle heart icon
- Persistent storage
- Quick add to cart from wishlist

### 5. **Checkout Process**
- Multi-step form
- Form validation
- Order summary
- Success confirmation
- Auto-redirect after order

### 6. **Responsive Design**
- Mobile-friendly
- Tablet optimized
- Desktop layout
- Touch-friendly buttons

---

## How to Run

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Navigate to project directory
cd e-commerce-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## Key Takeaways

### React Concepts Used:
1. **Components** - Reusable UI pieces
2. **Props** - Pass data to components
3. **State** - Component memory
4. **Hooks** - useState, useEffect, useContext, useReducer
5. **Context API** - Global state management
6. **React Router** - Navigation
7. **Conditional Rendering** - Show/hide based on conditions
8. **Lists & Keys** - Render arrays of data

### JavaScript Concepts:
1. **Array methods** - map, filter, reduce, find, some
2. **Spread operator** - `{...object}`
3. **Template literals** - `` `Hello ${name}` ``
4. **Arrow functions** - `() => {}`
5. **Destructuring** - `const { name, price } = product`
6. **Ternary operator** - `condition ? true : false`

### CSS/Tailwind:
1. **Utility classes** - `flex`, `grid`, `bg-blue-600`
2. **Responsive design** - `md:`, `lg:` prefixes
3. **Hover states** - `hover:bg-blue-700`
4. **Gradients** - `bg-linear-to-r`
5. **Animations** - `animate-pulse`, `transition-all`

---

## Next Steps to Learn

1. **Add Backend API** - Connect to real database
2. **User Authentication** - Login/signup
3. **Payment Integration** - Stripe, Razorpay
4. **Order History** - Track past orders
5. **Product Reviews** - User ratings and comments
6. **Admin Panel** - Manage products
7. **Search Optimization** - Better search algorithm
8. **Image Upload** - Add product images
9. **Email Notifications** - Order confirmations
10. **Analytics** - Track user behavior

---

## Conclusion

This e-commerce project demonstrates a complete React application with:
- ✅ Component-based architecture
- ✅ State management with Context API
- ✅ Client-side routing
- ✅ Form handling and validation
- ✅ Persistent data storage
- ✅ Responsive design
- ✅ User feedback (toasts)
- ✅ Modern UI/UX

You now have a solid foundation to build more complex features and understand how modern web applications work!

---

**Happy Coding! 🚀**

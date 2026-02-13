import { Heart, ShoppingCart, Store, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useState } from 'react';

const Navbar = () => {
    const { cart } = useCart();
    const { wishlist } = useWishlist();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlist.length;

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About' }
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo - Clickable */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                            <Store className="text-white" size={28} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Apna Dukan
                            </span>
                            <span className="text-xs text-gray-500 -mt-1">Shop with confidence</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${isActive(link.path)
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-2">
                        {/* Wishlist */}
                        <Link
                            to="/wishlist"
                            className="relative p-3 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all"
                        >
                            <Heart size={24} />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg font-medium transition-all ${isActive(link.path)
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
import { Store, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Store className="text-white" size={24} />
                            </div>
                            <span className="text-2xl font-bold text-white">Apna Dukan</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Your trusted online marketplace for quality products at unbeatable prices.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-500 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-blue-500 transition-colors">Products</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/cart" className="hover:text-blue-500 transition-colors">Cart</Link>
                            </li>
                            <li>
                                <Link to="/wishlist" className="hover:text-blue-500 transition-colors">Wishlist</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-blue-500 transition-colors">Electronics</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 transition-colors">Clothing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 transition-colors">Footwear</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 transition-colors">Accessories</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 transition-colors">Sports</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-blue-500 mt-1 shrink-0" />
                                <span>123 Shopping Street, Kolkata, West Bengal 700001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-blue-500 shrink-0" />
                                <span>+033 2441139</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-blue-500 shrink-0" />
                                <span>support@apnadukan.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Apna Dukan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

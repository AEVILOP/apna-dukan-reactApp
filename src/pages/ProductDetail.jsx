import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingCart, Heart, Star, Check, ArrowLeft, Truck, Shield, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../Data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const { addToCart, isInCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                    <Link to="/products" className="text-primary-600 hover:underline">
                        Back to products
                    </Link>
                </div>
            </div>
        );
    }

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/cart');
    };

    const handleWishlistToggle = () => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>

                {/* Product Detail */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full rounded-lg"
                            />
                            {discount > 0 && (
                                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md font-bold">
                                    {discount}% OFF
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                                {product.category}
                            </p>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-600 ml-2">
                                    {product.rating} ({product.reviews} reviews)
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline space-x-3">
                                    <span className="text-4xl font-bold text-gray-900">
                                        ₹{product.price.toLocaleString('en-IN')}
                                    </span>
                                    {product.originalPrice > product.price && (
                                        <span className="text-xl text-gray-500 line-through">
                                            ₹{product.originalPrice.toLocaleString('en-IN')}
                                        </span>
                                    )}
                                </div>
                                <p className="text-green-600 font-medium mt-2">
                                    You save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Features */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Check size={18} className="text-green-500" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stock Status */}
                            {/* <div className="mb-6">
                                <p className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                    {product.inStock ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                                </p>
                            </div> */}

                            {/* Quantity Selector */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quantity:
                                </label>
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                                        className="w-20 text-center border border-gray-300 rounded-lg py-2 font-semibold"
                                    />
                                    <button
                                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                        className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock || isInCart(product.id)}
                                    className="flex-1 btn-primary disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                >
                                    <ShoppingCart size={20} />
                                    <span>{isInCart(product.id) ? 'In Cart' : 'Add to Cart'}</span>
                                </button>
                                <button
                                    onClick={handleBuyNow}
                                    disabled={!product.inStock}
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                                >
                                    Buy Now
                                </button>
                                <button
                                    onClick={handleWishlistToggle}
                                    className={`p-3 border-2 rounded-lg transition-all ${isInWishlist(product.id)
                                        ? 'border-red-500 bg-red-50 text-red-500'
                                        : 'border-gray-300 hover:border-red-500 hover:bg-red-50'
                                        }`}
                                >
                                    <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                                </button>
                            </div>

                            {/* Service Features */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                <div className="text-center">
                                    <Truck className="mx-auto text-primary-600 mb-2" size={24} />
                                    <p className="text-xs text-gray-600">Free Shipping</p>
                                </div>
                                <div className="text-center">
                                    <Shield className="mx-auto text-primary-600 mb-2" size={24} />
                                    <p className="text-xs text-gray-600">2 Year Warranty</p>
                                </div>
                                <div className="text-center">
                                    <RefreshCw className="mx-auto text-primary-600 mb-2" size={24} />
                                    <p className="text-xs text-gray-600">30 Day Returns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
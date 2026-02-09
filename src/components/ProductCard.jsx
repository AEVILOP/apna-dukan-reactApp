import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    const { addToCart, isInCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const inCart = isInCart(product.id);
    const inWishlist = isInWishlist(product.id);

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleWishlistToggle = (e) => {
        e.preventDefault(); // Prevent navigation when clicking wishlist button
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    // 1️⃣ Determine if product has a discount
    const hasDiscount = product.originalPrice > product.price;

    // 2️⃣ Calculate discount percentage (derived, not stored)
    const discountPercent = hasDiscount
        ? Math.round(
            ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
        : 0;
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">

            {/* Image Container */}
            <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden rounded-t-xl block">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />

                {/* Dynamic Discount Badge */}
                {hasDiscount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
                        {discountPercent}% OFF
                    </div>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={handleWishlistToggle}
                    className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-colors ${inWishlist ? 'bg-red-50 text-red-500' : 'bg-white hover:bg-red-50'
                        }`}
                >
                    <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
                </button>
            </Link>

            {/* Product Info */}
            <div className="p-4">
                {/* Category */}
                <p className="text-xs text-gray-500 uppercase mb-1">
                    {product.category}
                </p>

                {/* Name */}
                <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center mb-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={14}
                                className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews})
                    </span>
                </div>

                {/* Price */}
                <div className="mb-3">
                    <span className="text-xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {hasDiscount && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    disabled={inCart}
                    className={`w-full py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${inCart
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                >
                    <ShoppingCart size={18} />
                    <span>{inCart ? 'In Cart' : 'Add to Cart'}</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
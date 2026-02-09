import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart, isInCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleClearWishlist = () => {
        if (window.confirm('Are you sure you want to clear your wishlist?')) {
            clearWishlist();
        }
    };

    if (wishlist.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                        <Heart size={64} className="mx-auto text-gray-400 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-600 mb-6">Save items you love for later</p>
                        <Link to="/products" className="btn-primary inline-flex items-center space-x-2">
                            <span>Browse Products</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
                        <p className="text-gray-600">{wishlist.length} items saved</p>
                    </div>
                    <button
                        onClick={handleClearWishlist}
                        className="text-red-600 hover:text-red-700 flex items-center space-x-2 text-sm"
                    >
                        <Trash2 size={16} />
                        <span>Clear All</span>
                    </button>
                </div>

                {/* Wishlist Items */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {wishlist.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
                            {/* Product Image */}
                            <div className="relative aspect-square group">
                                <Link to={`/product/${product.id}`}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>

                                {/* Remove Button */}
                                <button
                                    onClick={() => removeFromWishlist(product.id)}
                                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 size={18} className="text-red-500" />
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="p-4">
                                <Link to={`/product/${product.id}`}>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                                        {product.category}
                                    </p>
                                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
                                        {product.name}
                                    </h3>
                                </Link>

                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <span className="text-xl font-bold text-gray-900">
                                            ${product.price}
                                        </span>
                                        {product.originalPrice > product.price && (
                                            <span className="text-sm text-gray-500 line-through ml-2">
                                                ${product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleAddToCart(product)}
                                    disabled={isInCart(product.id)}
                                    className={`w-full py-2 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${isInCart(product.id)
                                        ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                                        : 'bg-primary-600 text-white hover:bg-primary-700'
                                        }`}
                                >
                                    <ShoppingCart size={18} />
                                    <span>{isInCart(product.id) ? 'In Cart' : 'Add to Cart'}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
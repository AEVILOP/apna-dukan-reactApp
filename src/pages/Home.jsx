import { ArrowRight, ShoppingBag, TrendingUp, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../Data/products';

const Home = () => {
    const featuredProducts = products.slice(0, 8);

    return (
        <div className="min-h-screen">

            {/* Hero Section with Background Image */}
            <section className="relative bg-gray-900 py-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop')",
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-purple-900/85 to-pink-900/80"></div>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-white text-sm font-medium flex items-center gap-2">
                                <Zap size={16} className="text-yellow-400" />
                                New Arrivals Every Week
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Discover Amazing
                            <span className="block bg-linear-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Products
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                            Shop the latest trends with unbeatable prices. Quality products, fast delivery, and amazing deals await you.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/products"
                                className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                            >
                                <ShoppingBag size={20} />
                                <span>Shop Now</span>
                                <ArrowRight size={20} />
                            </Link>

                            <Link
                                to="/about"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:border-white/50 transition-all"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                                <div className="text-gray-300 text-sm">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">5K+</div>
                                <div className="text-gray-300 text-sm">Products</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">99%</div>
                                <div className="text-gray-300 text-sm">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                {/* <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div> */}
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="text-blue-600" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trending Products</h3>
                            <p className="text-gray-600">Discover the hottest items loved by thousands of customers</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <Award className="text-purple-600" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                            <p className="text-gray-600">Only the best products make it to our curated collection</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="text-pink-600" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                            <p className="text-gray-600">Get your orders delivered quickly with free shipping</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Featured Products
                        </h2>
                        <p className="text-xl text-gray-600">
                            Handpicked items just for you
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            View All Products
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

import { Store, Heart, Shield, Truck, Users, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About Apna Dukan
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your trusted online marketplace for quality products at unbeatable prices
                    </p>
                </div>

                {/* Story Section */}
                <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p className="mb-4">
                            Founded with a vision to make quality products accessible to everyone, Apna Dukan has grown
                            from a small startup to a trusted e-commerce platform serving thousands of happy customers.
                        </p>
                        <p className="mb-4">
                            We believe in providing not just products, but experiences. Every item in our catalog is
                            carefully selected to ensure it meets our high standards of quality and value. Our commitment
                            to customer satisfaction drives everything we do.
                        </p>
                        <p>
                            Whether you're looking for the latest electronics, stylish accessories, or everyday essentials,
                            Apna Dukan is your one-stop destination for all your shopping needs.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="text-blue-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guaranteed</h3>
                            <p className="text-gray-600">
                                Every product is thoroughly vetted to ensure it meets our strict quality standards
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="text-green-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Shipping</h3>
                            <p className="text-gray-600">
                                Free shipping on orders over $50 with delivery in 3-5 business days
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="text-purple-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
                            <p className="text-gray-600">
                                24/7 customer support to help you with any questions or concerns
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="text-yellow-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Prices</h3>
                            <p className="text-gray-600">
                                Competitive pricing with regular discounts and special offers
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Store className="text-red-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Wide Selection</h3>
                            <p className="text-gray-600">
                                Thousands of products across multiple categories to choose from
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-indigo-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trusted by Thousands</h3>
                            <p className="text-gray-600">
                                Join our community of satisfied customers who shop with confidence
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 md:p-12 text-white">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
                            <div className="text-blue-100">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
                            <div className="text-blue-100">Products</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                            <div className="text-blue-100">Categories</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
                            <div className="text-blue-100">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

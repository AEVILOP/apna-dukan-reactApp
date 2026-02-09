import { Search } from 'lucide-react';
import { useState } from 'react';

const Filter = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState(20000);

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'electronics', name: 'Electronics' },
        { id: 'clothing', name: 'Clothing' },
        { id: 'footwear', name: 'Footwear' },
        { id: 'accessories', name: 'Accessories' },
        { id: 'sports', name: 'Sports' },
        { id: 'home', name: 'Home' }
    ];

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onFilterChange({ searchTerm: value, category: selectedCategory, maxPrice: priceRange });
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        onFilterChange({ searchTerm, category: categoryId, maxPrice: priceRange });
    };

    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value);
        setPriceRange(value);
        onFilterChange({ searchTerm, category: selectedCategory, maxPrice: value });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 sticky top-24">

            {/* Search Bar */}
            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}
                            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                    Price Range: <span className="text-blue-600">₹{priceRange.toLocaleString('en-IN')}</span>
                </h3>
                <input
                    type="range"
                    min="0"
                    max="20000"
                    value={priceRange}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>₹0</span>
                    <span>₹20,000</span>
                </div>
            </div>
        </div>
    );
};

export default Filter;

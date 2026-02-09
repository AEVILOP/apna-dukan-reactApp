import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Filter from '../components/filter';
import { products } from '../Data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filters, setFilters] = useState({
        searchTerm: '',
        category: 'all',
        maxPrice: 20000
    });

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const productsPerPage = 9;

    useEffect(() => {
        setLoading(true);
        let result = products;

        // Filter by search term
        if (filters.searchTerm) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
            );
        }

        // Filter by category
        if (filters.category !== 'all') {
            result = result.filter(product => product.category === filters.category);
        }

        // Filter by price
        result = result.filter(product => product.price <= filters.maxPrice);

        setFilteredProducts(result);
        setCurrentPage(1); // Reset to first page when filters change
        setLoading(false);
    }, [filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            // Show all pages if total is less than max
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show smart pagination
            if (currentPage <= 3) {
                // Show first 5 pages
                for (let i = 1; i <= 5; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                // Show last 5 pages
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // Show pages around current page
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    const handlePageChange = (pageNumber) => {
        setLoading(true);
        setCurrentPage(pageNumber);
        // Simulate API call delay
        setTimeout(() => {
            setLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">All Products</h1>

            <div className="grid lg:grid-cols-4 gap-6">
                {/* Filters */}
                <div className="lg:col-span-1">
                    <Filter onFilterChange={handleFilterChange} />
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    ) : currentProducts.length > 0 ? (
                        <>
                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                                {currentProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-8">
                                    {/* Previous Button */}
                                    <button
                                        onClick={handlePrevious}
                                        disabled={currentPage === 1}
                                        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 1
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white border border-gray-300'
                                            }`}
                                    >
                                        <ChevronLeft size={20} />
                                        <span className="ml-1">Previous</span>
                                    </button>

                                    {/* Page Numbers */}
                                    <div className="flex gap-2">
                                        {getPageNumbers().map((page, index) => (
                                            page === '...' ? (
                                                <span key={`ellipsis-${index}`} className="px-4 py-2 text-gray-500">
                                                    ...
                                                </span>
                                            ) : (
                                                <button
                                                    key={page}
                                                    onClick={() => handlePageChange(page)}
                                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === page
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-white text-gray-700 hover:bg-blue-100 border border-gray-300'
                                                        }`}
                                                >
                                                    {page}
                                                </button>
                                            )
                                        ))}
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        onClick={handleNext}
                                        disabled={currentPage === totalPages}
                                        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === totalPages
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white border border-gray-300'
                                            }`}
                                    >
                                        <span className="mr-1">Next</span>
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            )}

                            {/* Results Info */}
                            <div className="text-center text-gray-600 mt-4">
                                Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
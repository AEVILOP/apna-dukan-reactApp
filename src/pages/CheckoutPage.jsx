import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CreditCard, Lock, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const CheckoutPage = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderId] = useState(`ORD-${Date.now()}`);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const subtotal = getCartTotal();
    const shipping = subtotal > 5000 ? 0 : 100;
    const tax = subtotal * 0.18;
    const total = subtotal + shipping + tax;

    const onSubmit = (data) => {
        // Simulate order processing
        setTimeout(() => {
            setOrderPlaced(true);
            clearCart();
            toast.success('Order placed successfully!');

            // Redirect to home after 3 seconds
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, 1000);
    };

    if (cart.length === 0 && !orderPlaced) {
        navigate('/cart');
        return null;
    }

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-sm p-8 text-center animate-fade-in">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={48} className="text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
                        <p className="text-gray-600 mb-2">Thank you for your purchase</p>
                        <p className="text-lg font-semibold text-gray-900 mb-6">
                            Order ID: <span className="text-primary-600">{orderId}</span>
                        </p>
                        <p className="text-gray-600 mb-8">
                            We've sent a confirmation email with your order details.
                        </p>
                        <button
                            onClick={() => navigate('/')}
                            className="btn-primary"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact Information */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            {...register('firstName', { required: 'First name is required' })}
                                            className="input-field"
                                            placeholder="John"
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            {...register('lastName', { required: 'Last name is required' })}
                                            className="input-field"
                                            placeholder="Doe"
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                        )}
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            className="input-field"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                        )}
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            {...register('phone', { required: 'Phone number is required' })}
                                            className="input-field"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Street Address *
                                        </label>
                                        <input
                                            type="text"
                                            {...register('address', { required: 'Address is required' })}
                                            className="input-field"
                                            placeholder="123 Main St"
                                        />
                                        {errors.address && (
                                            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                                        )}
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                City *
                                            </label>
                                            <input
                                                type="text"
                                                {...register('city', { required: 'City is required' })}
                                                className="input-field"
                                                placeholder="New York"
                                            />
                                            {errors.city && (
                                                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                State *
                                            </label>
                                            <input
                                                type="text"
                                                {...register('state', { required: 'State is required' })}
                                                className="input-field"
                                                placeholder="NY"
                                            />
                                            {errors.state && (
                                                <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ZIP Code *
                                        </label>
                                        <input
                                            type="text"
                                            {...register('zip', { required: 'ZIP code is required' })}
                                            className="input-field"
                                            placeholder="10001"
                                        />
                                        {errors.zip && (
                                            <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <CreditCard size={24} className="text-gray-700" />
                                    <h2 className="text-xl font-semibold text-gray-900">Payment Information</h2>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Card Number *
                                        </label>
                                        <input
                                            type="text"
                                            {...register('cardNumber', { required: 'Card number is required' })}
                                            className="input-field"
                                            placeholder="1234 5678 9012 3456"
                                            maxLength="19"
                                        />
                                        {errors.cardNumber && (
                                            <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Expiry Date *
                                            </label>
                                            <input
                                                type="text"
                                                {...register('expiry', { required: 'Expiry date is required' })}
                                                className="input-field"
                                                placeholder="MM/YY"
                                            />
                                            {errors.expiry && (
                                                <p className="text-red-500 text-sm mt-1">{errors.expiry.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                CVV *
                                            </label>
                                            <input
                                                type="text"
                                                {...register('cvv', { required: 'CVV is required' })}
                                                className="input-field"
                                                placeholder="123"
                                                maxLength="4"
                                            />
                                            {errors.cvv && (
                                                <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

                                {/* Cart Items */}
                                <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex space-x-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 line-clamp-1">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                                <p className="text-sm font-semibold text-gray-900">
                                                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="font-medium">
                                            {shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax (18% GST)</span>
                                        <span className="font-medium">₹{tax.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-3">
                                        <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                                            <span>Total</span>
                                            <span>₹{total.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary mt-6 flex items-center justify-center space-x-2"
                                >
                                    <Lock size={18} />
                                    <span>Place Order</span>
                                </button>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Your payment information is secure and encrypted
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
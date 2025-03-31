import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <ShoppingCartIcon className="h-8 w-8 text-gray-900 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Your Shopping Cart</h1>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {cartItems.length === 0 ? (
            <div className="p-6 text-center py-12">
              <p className="text-gray-500 text-lg">Your cart is currently empty</p>
              <Link to="/products" className="btn-primary mt-4 inline-block">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-full sm:w-40 h-40 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-lg font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        -
                      </button>
                      <span className="mx-2 text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 text-sm text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="p-6 border-t border-gray-200">
                <div className="flex justify-between text-lg font-medium text-gray-900">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="mt-6">
                  <button className="w-full btn-primary">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

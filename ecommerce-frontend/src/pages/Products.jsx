import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Wireless Keyboard',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
    rating: 4.2
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    rating: 4.7
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
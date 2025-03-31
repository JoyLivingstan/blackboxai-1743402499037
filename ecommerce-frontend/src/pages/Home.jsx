import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Our E-commerce Store
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing products at great prices
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-primary">
              Shop Now
            </button>
            <button className="btn-secondary">
              View Deals
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
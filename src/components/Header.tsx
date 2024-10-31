import React from 'react';
import { Compass } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Compass className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-semibold text-gray-900">TravelGuide</h1>
          </div>
          <nav className="flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-orange-500">
              Places
            </a>
            <a href="/admin" className="text-gray-600 hover:text-orange-500">
              Admin
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
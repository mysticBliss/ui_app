import React from 'react';
import { MapPin, ThermometerSun, Droplets, Mountain, Wind } from 'lucide-react';
import type { Place } from '../types';

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={place.mainImage}
        alt={place.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{place.name}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{place.description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <ThermometerSun className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-gray-600">{place.metrics.temperature}°C</span>
          </div>
          <div className="flex items-center space-x-2">
            <Droplets className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-gray-600">{place.metrics.humidity}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mountain className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-gray-600">{place.metrics.elevation}m</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-gray-600">AQI: {place.metrics.airQuality}</span>
          </div>
        </div>
        
        <a
          href={`/place/${place.slug}`}
          className="mt-4 inline-flex items-center text-orange-500 hover:text-orange-600"
        >
          <span>View Details</span>
          <MapPin className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ThermometerSun, Droplets, Wind, Calendar } from 'lucide-react';
import { mockPlaces } from '../data/mockData';
import type { Season } from '../types';

const seasonEmoji: Record<Season, string> = {
  spring: '🌸',
  summer: '☀️',
  fall: '🍂',
  winter: '❄️'
};

export default function PlacesList() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Discover Kashmir</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {mockPlaces.map((place) => (
          <Link 
            key={place.id} 
            to={`/place/${place.slug}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64">
              <img 
                src={place.mainImage}
                alt={place.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h2 className="text-2xl font-semibold text-white">{place.name}</h2>
                <div className="flex items-center text-white/90 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{place.location}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Conditions</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center text-gray-600">
                    <ThermometerSun className="w-4 h-4 mr-2" />
                    <span>{place.metrics.temperature}°C</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Droplets className="w-4 h-4 mr-2" />
                    <span>{place.metrics.humidity}%</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Wind className="w-4 h-4 mr-2" />
                    <span>AQI {place.metrics.airQuality}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-orange-500" />
                  Seasonal Overview
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {(Object.entries(place.seasons) as [Season, any][]).map(([season, data]) => (
                    <div key={season} className="bg-gray-50 rounded-lg p-3">
                      <div className="font-medium mb-1 text-gray-900">
                        {seasonEmoji[season]} {season.charAt(0).toUpperCase() + season.slice(1)}
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>{data.averageTemp}°C</div>
                        <div className="line-clamp-1">{data.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-sm line-clamp-2">{place.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
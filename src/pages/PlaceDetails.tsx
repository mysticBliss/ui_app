import React from 'react';
import { useParams } from 'react-router-dom';
import { mockPlaces } from '../lib/mockData';
import SeasonalActivities from '../components/SeasonalActivities';
import LandmarkList from '../components/LandmarkList';
import { MapPin, ThermometerSun, Droplets, Mountain, Wind } from 'lucide-react';

export default function PlaceDetails() {
  const { slug } = useParams();
  const place = mockPlaces.find(p => p.slug === slug);

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ad Space */}
        <div className="bg-gray-200 p-4 mb-8 text-center rounded-lg">
          <div id="header-ad" className="min-h-[90px]">
            Advertisement Space
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={place.mainImage}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white mb-2">{place.name}</h1>
            <p className="text-white/90">{place.description}</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <ThermometerSun className="h-6 w-6 text-orange-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Temperature</p>
              <p className="font-medium">{place.metrics.temperature}°C</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <Droplets className="h-6 w-6 text-orange-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Humidity</p>
              <p className="font-medium">{place.metrics.humidity}%</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <Mountain className="h-6 w-6 text-orange-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Elevation</p>
              <p className="font-medium">{place.metrics.elevation}m</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <Wind className="h-6 w-6 text-orange-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Air Quality</p>
              <p className="font-medium">AQI {place.metrics.airQuality}</p>
            </div>
          </div>
        </div>

        {/* Seasonal Activities */}
        <h2 className="text-2xl font-bold mb-6">Seasonal Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {Object.entries(place.seasons).map(([season, data]) => (
            <SeasonalActivities
              key={season}
              activities={data.activities}
              season={season as 'spring' | 'summer' | 'fall' | 'winter'}
              averageTemp={data.averageTemp}
              description={data.description}
            />
          ))}
        </div>

        {/* Side Ad */}
        <div className="float-right w-64 ml-4 mb-4">
          <div id="sidebar-ad" className="bg-gray-200 p-4 rounded-lg text-center min-h-[600px]">
            Advertisement Space
          </div>
        </div>

        {/* Landmarks */}
        <h2 className="text-2xl font-bold mb-6">Notable Landmarks</h2>
        <LandmarkList landmarks={place.landmarks} />

        {/* Bottom Ad */}
        <div className="mt-12">
          <div id="footer-ad" className="bg-gray-200 p-4 rounded-lg text-center min-h-[90px]">
            Advertisement Space
          </div>
        </div>
      </div>
    </div>
  );
}
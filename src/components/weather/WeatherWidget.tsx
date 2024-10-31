'use client';

import { useQuery } from '@tanstack/react-query';
import { Cloud, Sun, ThermometerSun, Wind } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

export function WeatherWidget() {
  const { data: weather, isLoading } = useQuery<WeatherData>({
    queryKey: ['weather'],
    queryFn: async () => {
      const res = await fetch('/api/weather');
      if (!res.ok) throw new Error('Failed to fetch weather');
      return res.json();
    },
    refetchInterval: 1800000, // 30 minutes
  });

  if (isLoading) {
    return (
      <div className="animate-pulse bg-white rounded-lg p-6 shadow-md">
        <div className="h-6 w-32 bg-gray-200 rounded mb-4" />
        <div className="space-y-3">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Sun className="h-5 w-5 text-orange-500" />
        Current Weather
      </h3>
      
      {weather && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ThermometerSun className="h-5 w-5 text-gray-500" />
              <span>Temperature</span>
            </div>
            <span className="font-medium">{weather.temperature}°C</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-gray-500" />
              <span>Condition</span>
            </div>
            <span className="font-medium">{weather.condition}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind className="h-5 w-5 text-gray-500" />
              <span>Wind Speed</span>
            </div>
            <span className="font-medium">{weather.windSpeed} km/h</span>
          </div>
        </div>
      )}
    </div>
  );
}
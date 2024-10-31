import React from 'react';
import { Calendar, Sun, Cloud, Snowflake, Leaf } from 'lucide-react';
import type { Activity } from '../types';

interface SeasonalActivitiesProps {
  activities: Activity[];
  season: 'spring' | 'summer' | 'fall' | 'winter';
  averageTemp: number;
  description: string;
}

const seasonIcons = {
  spring: Cloud,
  summer: Sun,
  fall: Leaf,
  winter: Snowflake,
};

export default function SeasonalActivities({ activities, season, averageTemp, description }: SeasonalActivitiesProps) {
  const SeasonIcon = seasonIcons[season];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <SeasonIcon className="h-6 w-6 text-orange-500 mr-2" />
        <h3 className="text-lg font-semibold capitalize">{season}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-4">Average Temperature: {averageTemp}°C</p>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border rounded-lg p-4">
            <img
              src={activity.image}
              alt={activity.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="font-medium mb-2">{activity.name}</h4>
            <p className="text-sm text-gray-600">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
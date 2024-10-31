import React from 'react';
import { MapPin, Store, UtensilsCrossed, Landmark as LandmarkIcon } from 'lucide-react';
import type { Landmark } from '../types';

const typeIcons = {
  attraction: LandmarkIcon,
  shop: Store,
  restaurant: UtensilsCrossed,
  other: MapPin,
};

interface LandmarkListProps {
  landmarks: Landmark[];
}

export default function LandmarkList({ landmarks }: LandmarkListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {landmarks.map((landmark) => {
        const Icon = typeIcons[landmark.type];
        
        return (
          <div key={landmark.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={landmark.image}
              alt={landmark.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <Icon className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="font-medium">{landmark.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{landmark.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
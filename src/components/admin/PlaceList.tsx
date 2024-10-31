import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import type { Place } from '../../types';

interface PlaceListProps {
  places: Place[];
  onEdit: (place: Place) => void;
  onDelete: (id: string) => void;
}

export default function PlaceList({ places, onEdit, onDelete }: PlaceListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Metrics
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {places.map((place) => (
            <tr key={place.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    src={place.mainImage}
                    alt={place.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{place.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900 line-clamp-2">{place.description}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                  <div>{place.metrics.temperature}°C</div>
                  <div>{place.metrics.elevation}m elevation</div>
                </div>
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium">
                <button
                  onClick={() => onEdit(place)}
                  className="text-orange-500 hover:text-orange-600 mr-4"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onDelete(place.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
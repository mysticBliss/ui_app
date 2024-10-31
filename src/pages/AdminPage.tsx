import React, { useState } from 'react';
import PlaceForm from '../components/admin/PlaceForm';
import PlaceList from '../components/admin/PlaceList';
import { mockPlaces } from '../lib/mockData';
import { Place } from '../types';
import { PlusCircle } from 'lucide-react';

export default function AdminPage() {
  const [places, setPlaces] = useState(mockPlaces);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (data: Partial<Place>) => {
    if (selectedPlace) {
      // Update existing place
      setPlaces(places.map(place => 
        place.id === selectedPlace.id ? { ...place, ...data } : place
      ));
    } else {
      // Add new place
      const newPlace: Place = {
        ...data as Place,
        id: Date.now().toString(),
        slug: data.name?.toLowerCase().replace(/\s+/g, '-') || '',
        seasons: {
          spring: { activities: [], averageTemp: 0, description: '' },
          summer: { activities: [], averageTemp: 0, description: '' },
          fall: { activities: [], averageTemp: 0, description: '' },
          winter: { activities: [], averageTemp: 0, description: '' },
        },
        landmarks: [],
      };
      setPlaces([...places, newPlace]);
    }
    setIsFormOpen(false);
    setSelectedPlace(null);
  };

  const handleEdit = (place: Place) => {
    setSelectedPlace(place);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    setPlaces(places.filter(place => place.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Place Management</h1>
          <button
            onClick={() => {
              setSelectedPlace(null);
              setIsFormOpen(true);
            }}
            className="btn btn-primary inline-flex items-center"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Add New Place
          </button>
        </div>

        {isFormOpen ? (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {selectedPlace ? 'Edit Place' : 'Add New Place'}
            </h2>
            <PlaceForm
              initialData={selectedPlace || undefined}
              onSubmit={handleSubmit}
            />
          </div>
        ) : (
          <PlaceList
            places={places}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
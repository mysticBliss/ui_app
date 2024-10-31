import React, { useState } from 'react';
import { Place } from '../../types';
import { PlusCircle, MinusCircle } from 'lucide-react';

interface PlaceFormProps {
  initialData?: Place;
  onSubmit: (data: Partial<Place>) => void;
}

export default function PlaceForm({ initialData, onSubmit }: PlaceFormProps) {
  const [formData, setFormData] = useState<Partial<Place>>(initialData || {
    name: '',
    description: '',
    mainImage: '',
    gallery: [],
    metrics: {
      temperature: 0,
      humidity: 0,
      elevation: 0,
      airQuality: 0,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof Place],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const addGalleryImage = () => {
    setFormData(prev => ({
      ...prev,
      gallery: [...(prev.gallery || []), '']
    }));
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery?.filter((_, i) => i !== index)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Main Image URL</label>
        <input
          type="url"
          name="mainImage"
          value={formData.mainImage || ''}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">Gallery Images</label>
          <button
            type="button"
            onClick={addGalleryImage}
            className="inline-flex items-center text-sm text-orange-500"
          >
            <PlusCircle className="h-4 w-4 mr-1" />
            Add Image
          </button>
        </div>
        <div className="space-y-2 mt-2">
          {formData.gallery?.map((url, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="url"
                value={url}
                onChange={(e) => {
                  const newGallery = [...(formData.gallery || [])];
                  newGallery[index] = e.target.value;
                  setFormData(prev => ({ ...prev, gallery: newGallery }));
                }}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => removeGalleryImage(index)}
                className="text-red-500"
              >
                <MinusCircle className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Temperature (°C)</label>
          <input
            type="number"
            name="metrics.temperature"
            value={formData.metrics?.temperature || 0}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Humidity (%)</label>
          <input
            type="number"
            name="metrics.humidity"
            value={formData.metrics?.humidity || 0}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Elevation (m)</label>
          <input
            type="number"
            name="metrics.elevation"
            value={formData.metrics?.elevation || 0}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Air Quality Index</label>
          <input
            type="number"
            name="metrics.airQuality"
            value={formData.metrics?.airQuality || 0}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full"
      >
        {initialData ? 'Update Place' : 'Add Place'}
      </button>
    </form>
  );
}
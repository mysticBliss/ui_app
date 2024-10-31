'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Compass, Filter } from 'lucide-react';
import { PlaceGrid } from './PlaceGrid';
import { PlaceCard } from './PlaceCard';
import { Place } from '@/types';

export function FeaturedPlaces() {
  const [filter, setFilter] = useState('all');
  
  const { data: places, isLoading } = useQuery<Place[]>({
    queryKey: ['places'],
    queryFn: async () => {
      const res = await fetch('/api/places');
      if (!res.ok) throw new Error('Failed to fetch places');
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-gray-200 rounded-lg aspect-[4/3]"
          />
        ))}
      </div>
    );
  }

  const filteredPlaces = places?.filter(place => {
    if (filter === 'all') return true;
    return place.type === filter;
  });

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-orange-500" />
          <h2 className="text-2xl font-bold">Featured Destinations</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-md px-3 py-1.5"
          >
            <option value="all">All Places</option>
            <option value="mountain">Mountains</option>
            <option value="lake">Lakes</option>
            <option value="valley">Valleys</option>
          </select>
        </div>
      </div>

      {filteredPlaces && filteredPlaces.length > 0 ? (
        <PlaceGrid places={filteredPlaces} />
      ) : (
        <div className="text-center py-12 text-gray-500">
          No destinations found matching your criteria
        </div>
      )}
    </section>
  );
}
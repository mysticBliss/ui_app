import { MapPin } from 'lucide-react';
import { Place } from '@/types';
import { Link } from 'react-router-dom';

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link
      to={`/places/${place.id}`}
      className="group relative overflow-hidden rounded-lg block"
    >
      <div className="aspect-[4/3] relative">
        <img
          src={place.mainImage}
          alt={place.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-xl font-semibold">{place.name}</h3>
        <div className="mt-2 flex items-center text-sm">
          <MapPin className="mr-1 h-4 w-4" />
          {place.location}
        </div>
      </div>
    </Link>
  );
}
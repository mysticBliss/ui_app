import { Place } from '@/types';
import { PlaceCard } from './PlaceCard';

interface PlaceGridProps {
  places: Place[];
}

export function PlaceGrid({ places }: PlaceGridProps) {
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </section>
  );
}
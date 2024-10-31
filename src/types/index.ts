export interface Place {
  id: string;
  name: string;
  slug: string;
  description: string;
  location: string;
  type: string;
  mainImage: string;
  gallery: string[];
  metrics: {
    temperature: number;
    humidity: number;
    elevation: number;
    airQuality: number;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    image: string;
  };
  createdAt: string;
}

export type Season = 'spring' | 'summer' | 'fall' | 'winter';

export interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
  season: Season;
}

export interface Landmark {
  id: string;
  name: string;
  description: string;
  image: string;
  type: 'attraction' | 'shop' | 'restaurant' | 'other';
}
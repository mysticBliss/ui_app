import { Place } from '../types';

export const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'Gulmarg',
    slug: 'gulmarg-kashmir',
    description: 'Known as the "Meadow of Flowers", Gulmarg is a stunning hill station and popular skiing destination in the western Himalayas.',
    mainImage: 'https://images.unsplash.com/photo-1566837497312-7be4c0275773',
    gallery: [
      'https://images.unsplash.com/photo-1624890240392-b224427df49e',
      'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
    ],
    metrics: {
      temperature: 12,
      humidity: 70,
      elevation: 2650,
      airQuality: 92,
    },
    seasons: {
      winter: {
        activities: [
          {
            id: 'w1',
            name: 'Skiing',
            description: 'World-class skiing slopes with professional instructors',
            season: 'winter',
            image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766',
          },
          {
            id: 'w2',
            name: 'Snowboarding',
            description: 'Perfect powder snow for snowboarding enthusiasts',
            season: 'winter',
            image: 'https://images.unsplash.com/photo-1522056615691-da7b8106c665',
          },
        ],
        averageTemp: -2,
        description: 'Perfect winter wonderland with abundant snowfall',
      },
      summer: {
        activities: [
          {
            id: 's1',
            name: 'Gondola Ride',
            description: 'One of the highest cable cars in the world',
            season: 'summer',
            image: 'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
          },
          {
            id: 's2',
            name: 'Golf',
            description: 'Highest green golf course in the world',
            season: 'summer',
            image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa',
          },
        ],
        averageTemp: 25,
        description: 'Pleasant weather perfect for outdoor activities',
      },
      spring: {
        activities: [
          {
            id: 'sp1',
            name: 'Flower Valley Trek',
            description: 'Trek through meadows of blooming flowers',
            season: 'spring',
            image: 'https://images.unsplash.com/photo-1624890240392-b224427df49e',
          },
        ],
        averageTemp: 15,
        description: 'Blooming flowers carpet the meadows',
      },
      fall: {
        activities: [
          {
            id: 'f1',
            name: 'Photography Tours',
            description: 'Capture the stunning autumn colors',
            season: 'fall',
            image: 'https://images.unsplash.com/photo-1566837497312-7be4c0275773',
          },
        ],
        averageTemp: 10,
        description: 'Golden autumn with spectacular views',
      },
    },
    landmarks: [
      {
        id: 'l1',
        name: 'Gulmarg Gondola',
        description: 'Second highest operating cable car in the world',
        image: 'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
        type: 'attraction',
      },
      {
        id: 'l2',
        name: 'St. Mary\'s Church',
        description: 'Victorian architecture church built in 1902',
        image: 'https://images.unsplash.com/photo-1624890240392-b224427df49e',
        type: 'attraction',
      },
      {
        id: 'l3',
        name: 'Highland Park Restaurant',
        description: 'Traditional Kashmiri cuisine with mountain views',
        image: 'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
        type: 'restaurant',
      },
    ],
  },
  {
    id: '2',
    name: 'Dal Lake',
    slug: 'dal-lake-srinagar',
    description: 'The jewel of Srinagar, famous for its houseboats and floating gardens.',
    mainImage: 'https://images.unsplash.com/photo-1566837497312-7be4c0275773',
    gallery: [
      'https://images.unsplash.com/photo-1624890240392-b224427df49e',
      'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
    ],
    metrics: {
      temperature: 20,
      humidity: 65,
      elevation: 1583,
      airQuality: 85,
    },
    seasons: {
      winter: {
        activities: [
          {
            id: 'w3',
            name: 'Shikara Ride',
            description: 'Traditional boat rides in misty winter mornings',
            season: 'winter',
            image: 'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
          },
        ],
        averageTemp: 5,
        description: 'Misty mornings with peaceful lake views',
      },
      summer: {
        activities: [
          {
            id: 's3',
            name: 'Houseboat Stay',
            description: 'Experience living on traditional houseboats',
            season: 'summer',
            image: 'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
          },
        ],
        averageTemp: 30,
        description: 'Perfect weather for lake activities',
      },
      spring: {
        activities: [
          {
            id: 'sp2',
            name: 'Floating Market Visit',
            description: 'Early morning vegetable market on boats',
            season: 'spring',
            image: 'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
          },
        ],
        averageTemp: 20,
        description: 'Pleasant weather with blooming gardens',
      },
      fall: {
        activities: [
          {
            id: 'f2',
            name: 'Sunset Cruise',
            description: 'Evening cruises with mountain views',
            season: 'fall',
            image: 'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
          },
        ],
        averageTemp: 15,
        description: 'Comfortable temperatures with clear skies',
      },
    },
    landmarks: [
      {
        id: 'l4',
        name: 'Floating Gardens',
        description: 'Traditional hydroponic farming on the lake',
        image: 'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
        type: 'attraction',
      },
      {
        id: 'l5',
        name: 'Char Chinar',
        description: 'Island with four ancient Chinar trees',
        image: 'https://images.unsplash.com/photo-1590676923564-73c20c443a32',
        type: 'attraction',
      },
    ],
  },
];
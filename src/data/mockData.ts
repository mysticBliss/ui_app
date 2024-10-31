import { Place, Season } from '../types';

export const mockPlaces: Place[] = [
  {
    id: 'gulmarg',
    name: 'Gulmarg',
    slug: 'gulmarg-kashmir',
    description: 'Known as the "Meadow of Flowers", Gulmarg is a stunning hill station and popular skiing destination.',
    location: 'Baramulla District, Kashmir',
    coordinates: {
      latitude: 34.0494,
      longitude: 74.3862
    },
    metrics: {
      temperature: -2,
      humidity: 65,
      elevation: 2650,
      airQuality: 95
    },
    seasons: {
      winter: {
        activities: [
          {
            id: 'skiing',
            name: 'Skiing',
            description: 'World-class skiing with professional instructors',
            season: 'winter',
            priceRange: {
              min: 2000,
              max: 5000,
              currency: 'INR'
            },
            difficulty: 'moderate',
            duration: {
              value: 4,
              unit: 'hours'
            }
          }
        ],
        averageTemp: -2,
        description: 'Perfect winter wonderland with abundant snowfall',
        startDate: '12-01',
        endDate: '02-28'
      },
      summer: {
        activities: [
          {
            id: 'golf',
            name: 'Golf',
            description: 'Highest green golf course in the world',
            season: 'summer',
            priceRange: {
              min: 3000,
              max: 8000,
              currency: 'INR'
            },
            difficulty: 'moderate',
            duration: {
              value: 3,
              unit: 'hours'
            }
          }
        ],
        averageTemp: 25,
        description: 'Pleasant weather perfect for outdoor activities',
        startDate: '06-01',
        endDate: '08-31'
      },
      spring: {
        activities: [],
        averageTemp: 15,
        description: 'Blooming flowers carpet the meadows',
        startDate: '03-01',
        endDate: '05-31'
      },
      fall: {
        activities: [],
        averageTemp: 10,
        description: 'Golden autumn with spectacular views',
        startDate: '09-01',
        endDate: '11-30'
      }
    },
    landmarks: [
      {
        id: 'gondola',
        name: 'Gulmarg Gondola',
        description: 'Second highest operating cable car in the world',
        type: 'attraction',
        location: {
          latitude: 34.0494,
          longitude: 74.3862
        },
        visitingHours: {
          open: '09:00',
          close: '17:00'
        },
        entryFee: {
          amount: 750,
          currency: 'INR'
        }
      }
    ]
  },
  {
    id: 'dal-lake',
    name: 'Dal Lake',
    slug: 'dal-lake-srinagar',
    description: 'Famous for its houseboats and floating gardens',
    location: 'Srinagar, Kashmir',
    coordinates: {
      latitude: 34.0836,
      longitude: 74.8567
    },
    metrics: {
      temperature: 22,
      humidity: 70,
      elevation: 1583,
      airQuality: 85
    },
    seasons: {
      winter: {
        activities: [],
        averageTemp: 5,
        description: 'Misty mornings with peaceful lake views',
        startDate: '12-01',
        endDate: '02-28'
      },
      summer: {
        activities: [
          {
            id: 'shikara',
            name: 'Shikara Ride',
            description: 'Traditional boat rides on the serene lake',
            season: 'summer',
            priceRange: {
              min: 500,
              max: 1500,
              currency: 'INR'
            },
            difficulty: 'easy',
            duration: {
              value: 60,
              unit: 'minutes'
            }
          }
        ],
        averageTemp: 30,
        description: 'Perfect weather for lake activities',
        startDate: '06-01',
        endDate: '08-31'
      },
      spring: {
        activities: [],
        averageTemp: 20,
        description: 'Pleasant weather with blooming gardens',
        startDate: '03-01',
        endDate: '05-31'
      },
      fall: {
        activities: [],
        averageTemp: 15,
        description: 'Comfortable temperatures with clear skies',
        startDate: '09-01',
        endDate: '11-30'
      }
    },
    landmarks: [
      {
        id: 'floating-gardens',
        name: 'Floating Gardens',
        description: 'Traditional hydroponic farming on the lake',
        type: 'attraction',
        location: {
          latitude: 34.0836,
          longitude: 74.8567
        },
        visitingHours: {
          open: '08:00',
          close: '18:00'
        }
      }
    ]
  }
];
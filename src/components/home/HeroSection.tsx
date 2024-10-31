import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

export function HeroSection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566837945700-30057527ade0)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the Beauty of Kashmir
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl">
          Experience the paradise on Earth with our curated travel guides and local insights
        </p>
        
        <form 
          onSubmit={handleSearch}
          className="w-full max-w-2xl flex gap-2 bg-white/10 backdrop-blur-md p-2 rounded-lg"
        >
          <div className="flex-1 flex items-center gap-2 bg-white rounded-md px-4">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations, activities, or landmarks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 py-3 outline-none text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Search
          </button>
        </form>
        
        <div className="mt-12 flex items-center gap-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>50+ Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Local Experiences</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Expert Guides</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedPlaces } from '@/components/places/FeaturedPlaces';
import { SearchBar } from '@/components/search/SearchBar';
import { WeatherWidget } from '@/components/weather/WeatherWidget';
import { BlogPreview } from '@/components/blog/BlogPreview';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      
      <section className="container mx-auto px-4">
        <SearchBar />
        
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
          <main>
            <FeaturedPlaces />
          </main>
          
          <aside className="space-y-6">
            <WeatherWidget />
            <BlogPreview />
          </aside>
        </div>
      </section>
    </div>
  );
}
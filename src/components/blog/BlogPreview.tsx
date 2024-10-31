'use client';

import { useQuery } from '@tanstack/react-query';
import { BookOpen } from 'lucide-react';
import { BlogCard } from './BlogCard';

export function BlogPreview() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['featured-posts'],
    queryFn: async () => {
      const res = await fetch('/api/blog?featured=true');
      if (!res.ok) throw new Error('Failed to fetch posts');
      return res.json();
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-orange-500" />
          Latest Stories
        </h3>
        <a
          href="/blog"
          className="text-sm text-orange-500 hover:text-orange-600"
        >
          View all
        </a>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          [...Array(3)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse space-y-3"
            >
              <div className="h-32 bg-gray-200 rounded-lg" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-1/2 bg-gray-200 rounded" />
            </div>
          ))
        ) : (
          posts?.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}
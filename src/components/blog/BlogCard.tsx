import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-gray-500">
              {formatDistance(new Date(post.createdAt), new Date(), { addSuffix: true })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
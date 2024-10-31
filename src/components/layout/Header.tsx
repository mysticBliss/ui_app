import Link from 'next/link';
import { Compass } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Compass className="h-6 w-6 text-orange-600" />
          <span className="text-xl font-bold">Kashmir Travel</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link href="/places" className="text-sm font-medium hover:text-orange-600">
            Places
          </Link>
          <Link href="/landmarks" className="text-sm font-medium hover:text-orange-600">
            Landmarks
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-orange-600">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '@/providers';
import { Header } from '@/components/layout/Header';
import { Container } from '@/components/ui/Container';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kashmir Travel Guide',
  description: 'Discover the beauty of Kashmir through our comprehensive travel guide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <Providers>
          <Header />
          <main className="py-8">
            <Container>{children}</Container>
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
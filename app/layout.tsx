import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mountain Retreat - Luxury Rental Property',
  description: 'Experience tranquility in our stunning lakeside mountain retreat. Perfect for getaways and special occasions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
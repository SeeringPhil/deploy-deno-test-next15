import React from 'react';
import Hero from './components/Hero';
import PropertyDescription from './components/PropertyDescription';
import ImageGallery from './components/ImageGallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropertyDescription />
      <ImageGallery />
    </main>
  );
}
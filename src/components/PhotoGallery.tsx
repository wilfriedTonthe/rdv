import React, { useState } from 'react';
import { X } from 'lucide-react';

import ali1 from '../img/ali1.png';
import ali2 from '../img/ali2.jpg';


// Sample photos - replace these with your actual photos
const photos = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Romantic dinner setting'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Elegant restaurant'
  },
  {
    id: 3,
    url: ali2,
    alt: 'mon amour'
  },
  {
    id: 4,
    url: ali1,
    alt: 'je taime'
  }
 
];



const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openPhoto = (id: number) => {
    setSelectedPhoto(id);
    document.body.style.overflow = 'hidden';
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="photos" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-rose-900 text-center mb-12">
          Nos Moments Spéciaux
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative overflow-hidden rounded-xl shadow-xl aspect-square cursor-pointer transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl bg-rose-50"
              onClick={() => openPhoto(photo.id)}
            >
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-rose-300"
            onClick={closePhoto}
          >
            <X size={32} />
          </button>

          <img 
            src={photos.find(p => p.id === selectedPhoto)?.url} 
            alt={photos.find(p => p.id === selectedPhoto)?.alt || "Photo detail"} 
            className="max-w-full max-h-[90vh] object-contain rounded"
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;

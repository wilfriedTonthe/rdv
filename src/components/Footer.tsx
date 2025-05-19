import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-rose-950 text-rose-200">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <Heart className="h-4 w-4 mr-2 text-rose-500 fill-rose-500" />
          <span className="font-serif italic">Alicia & Moi</span>
          <Heart className="h-4 w-4 ml-2 text-rose-500 fill-rose-500" />
        </div>
        
        <p className="text-sm">
          Cette invitation a été créée avec amour, juste pour toi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
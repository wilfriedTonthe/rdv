import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-gradient-to-b from-rose-900/90 to-transparent">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-5 w-5 text-rose-200 fill-rose-300" />
          <span className="font-serif italic text-rose-100">Pour Alicia</span>
        </div>
        <nav>
          <ul className="flex space-x-6 text-rose-100">
            <li className="hover:text-white transition-colors">
              <a href="#invitation" className="text-sm uppercase tracking-wider">Invitation</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#photos" className="text-sm uppercase tracking-wider">Photos</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#poem" className="text-sm uppercase tracking-wider">Poème</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#rsvp" className="text-sm uppercase tracking-wider">RSVP</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
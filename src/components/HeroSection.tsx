import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="invitation" 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1600")',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6">
            Alicia, <span className="italic">ma chérie</span>
          </h1>
          
          <p className="text-lg md:text-xl text-rose-200 max-w-xl mx-auto mb-8">
            Je t'invite à partager un moment spécial avec moi
          </p>
          
          <div className="inline-block border-2 border-rose-300 p-6 rounded-lg bg-black/30 backdrop-blur-sm">
            <p className="text-white text-sm uppercase tracking-widest mb-2">Je voudrais t'inviter à</p>
            <h2 className="text-3xl font-serif text-rose-200 mb-4">Un Dîner Romantique</h2>
            <p className="text-rose-100 mb-6">Un moment juste pour nous deux</p>
            <a 
              href="#rsvp" 
              className="inline-block bg-rose-700 hover:bg-rose-600 text-white py-3 px-8 rounded-full transition-colors duration-300"
            >
              Dis-moi oui
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#photos" className="text-white/80 hover:text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
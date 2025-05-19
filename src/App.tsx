import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import PoemSection from './components/PoemSection';
import RsvpSection from './components/RsvpSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = "Pour Alicia - Une Invitation Spéciale";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <PhotoGallery />
        <PoemSection />
        <RsvpSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
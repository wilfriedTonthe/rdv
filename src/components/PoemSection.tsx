import React, { useEffect, useRef, useState } from 'react';

const PoemSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="poem" 
      ref={sectionRef}
      className="py-20 bg-rose-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-10">Pour Toi, Alicia</h2>
          
          <div className="mb-10 font-serif italic text-lg md:text-xl leading-relaxed space-y-6 text-rose-100">
            <p>
              Dans tes yeux je vois l'infini,<br />
              Un univers de tendresse,<br />
              Alicia, ma douce mélodie,<br />
              Source de ma plus grande richesse.
            </p>
            
            <p>
              Chaque moment passé à tes côtés<br />
              Est un trésor que je chéris,<br />
              Je veux plus de souvenirs créés,<br />
              Plus de bonheur dans nos vies.
            </p>
            
            <p>
              Laisse-moi t'emmener ce soir,<br />
              Dans un lieu empli de magie,<br />
              Où nos cœurs pourront se voir,<br />
              Dans une douce harmonie.
            </p>
            
            <p>
              Alicia, ma bien-aimée,<br />
              Dis-moi oui et prends ma main,<br />
              Pour cette soirée enchantée,<br />
              Qui marquera notre chemin.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="h-px w-24 bg-rose-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;
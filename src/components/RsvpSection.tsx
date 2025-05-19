import React, { useState } from 'react';
import { Heart, Calendar, Check, X } from 'lucide-react';

const RsvpSection: React.FC = () => {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleResponse = (answer: 'yes' | 'no') => {
    setResponse(answer);
    setShowConfirmation(true);
  };

  const restaurantDetails = {
    name: "Le Petit Château",
    address: "je te dirais où",
    date: "très bientôt",
    time: "je te dirais quand",
  };

  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart className="h-8 w-8 text-rose-500 fill-rose-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-rose-900 mb-4">
            Seras-tu ma compagne pour cette soirée?
          </h2>
          <p className="text-gray-600">
            Je serais honoré de partager ce moment spécial avec toi
          </p>
        </div>

        {!showConfirmation ? (
          <div className="bg-rose-50 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
              <div>
                <h3 className="text-2xl font-serif text-rose-800 mb-2">{restaurantDetails.name}</h3>
                <div className="flex items-center text-gray-600 mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{restaurantDetails.date} à {restaurantDetails.time}</span>
                </div>
                <p className="text-gray-600">{restaurantDetails.address}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleResponse('yes')}
                  className="bg-rose-600 hover:bg-rose-700 text-white py-3 px-8 rounded-full transition-colors flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  <Check className="h-5 w-5 mr-2" />
                  Oui, avec plaisir!
                </button>
                
                <button 
                  onClick={() => handleResponse('no')}
                  className="border border-rose-200 hover:border-rose-300 bg-white text-rose-600 py-3 px-8 rounded-full transition-colors flex items-center justify-center"
                >
                  <X className="h-5 w-5 mr-2" />
                  Je ne peux pas
                </button>
              </div>
            </div>
            
            <div className="border-t border-rose-200 pt-6 mt-6">
              <p className="text-gray-600 italic text-center">
                "La vie est faite de petits moments magiques. Créons-en un ensemble."
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-2 border-rose-200 text-center">
            {response === 'yes' ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-rose-600 fill-rose-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-rose-800">Merveilleux!</h3>
                <p className="text-gray-600">
                  Je suis impatient de partager cette soirée spéciale avec toi. Je te contacterai bientôt avec plus de détails.
                </p>
                <div className="pt-4">
                  <p className="font-medium">À très bientôt, ma chérie.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-rose-800">Je comprends</h3>
                <p className="text-gray-600">
                  Pas de soucis, nous trouverons une autre occasion pour passer un moment ensemble.
                </p>
                <div className="pt-4">
                  <p className="font-medium">Je pense toujours à toi.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;
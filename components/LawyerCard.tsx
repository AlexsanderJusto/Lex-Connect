import React from 'react';
import { Lawyer } from '../types';
import StarRating from './StarRating';
import { MapPin, Briefcase, ChevronRight } from 'lucide-react';

interface LawyerCardProps {
  lawyer: Lawyer;
  onClick: (lawyerId: string) => void;
  compact?: boolean;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ lawyer, onClick, compact = false }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col ${compact ? 'max-w-xs' : ''}`}
      onClick={() => onClick(lawyer.id)}
    >
      <div className={`relative ${compact ? 'h-32' : 'h-48'} overflow-hidden`}>
        <img 
          src={lawyer.imageUrl} 
          alt={lawyer.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-legal-900/80 to-transparent" />
        <div className="absolute bottom-3 left-4 text-white">
          <h3 className={`font-serif font-semibold ${compact ? 'text-lg' : 'text-xl'}`}>{lawyer.name}</h3>
          <p className="text-xs opacity-90 text-gold-400 font-medium tracking-wide">{lawyer.specialty}</p>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <StarRating rating={lawyer.rating} size={compact ? 14 : 16} />
            <span className="text-xs text-gray-500">{lawyer.reviewCount} avaliações</span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-start text-gray-600 text-sm">
              <MapPin size={16} className="mr-2 mt-0.5 shrink-0 text-gold-600" />
              <span>{lawyer.location}</span>
            </div>
            {!compact && (
              <div className="flex items-start text-gray-600 text-sm">
                <Briefcase size={16} className="mr-2 mt-0.5 shrink-0 text-gold-600" />
                <span className="line-clamp-2">{lawyer.bio}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-legal-700 font-semibold text-sm">R$ {lawyer.hourlyRate}/h</span>
          <button className="text-legal-600 hover:text-legal-800 text-sm font-medium flex items-center group">
            Ver Perfil <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
import React, { useState } from 'react';
import { MapPin, Navigation2, Info, X, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SocialShareModal } from './SocialShareModal';

interface LocationInfoBoxProps {
  location: any;
  onGetDirections: () => void;
  onClose: () => void;
  isLoading?: boolean;
}

export function LocationInfoBox({ location, onGetDirections, onClose, isLoading = false }: LocationInfoBoxProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  if (!location) return null;

  const locationName = location.display_name.split(',')[0];
  const fullAddress = location.display_name;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="absolute bottom-24 left-8 z-[1000] w-80 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{locationName}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{fullAddress}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {location.extratags && (
            <div className="mb-4 bg-white/5 rounded-xl p-3">
              {location.extratags.description && (
                <p className="text-white/80 text-sm mb-2">{location.extratags.description}</p>
              )}
              {location.extratags.website && (
                <a
                  href={location.extratags.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors inline-flex items-center space-x-1"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          )}

          <div className="flex space-x-2">
            <button
              onClick={onGetDirections}
              disabled={isLoading}
              className={`flex-1 py-3 px-4 bg-blue-600/80 hover:bg-blue-700/80 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'
              }`}
            >
              <Navigation2 className="w-4 h-4" />
              <span>{isLoading ? 'Loading...' : 'Get Directions'}</span>
            </button>
            <button 
              onClick={() => setIsShareModalOpen(true)}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all duration-300 transform hover:scale-105"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all duration-300 transform hover:scale-105">
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      <SocialShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        location={{
          name: locationName,
          description: fullAddress,
          image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=300"
        }}
      />
    </>
  );
}
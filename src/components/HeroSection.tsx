import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <div className="relative w-full h-80 md:h-[400px] bg-gray-100 rounded-t-xl overflow-hidden">
      
      {/* 1. IMAGE (Base Layer, z-0) */}
      <motion.img 
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
        alt="Mountain Climber" 
        className="absolute inset-0 w-full h-full object-cover origin-center z-0"
      />

      {/* Subtle gradient overlay to improve depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10 pointer-events-none" />

      {/* 2. TEXT (Top Layer, z-20) */}
      <motion.div 
        key={currentDate.toString()}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute top-8 left-8 md:top-10 md:left-10 z-20 text-white"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase drop-shadow-md">
          {format(currentDate, 'MMMM')}
        </h1>
        <p className="text-lg md:text-xl font-medium tracking-widest text-white/90 mt-1 drop-shadow-sm">
          {format(currentDate, 'yyyy')}
        </p>
      </motion.div>

      {/* Navigation Controls (Top Layer, z-20) */}
      <div className="absolute top-8 right-8 md:top-10 md:right-10 flex gap-2 z-20">
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrevMonth}
          className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white transition-colors border border-white/20 shadow-sm"
          aria-label="Previous Month"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onNextMonth}
          className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white transition-colors border border-white/20 shadow-sm"
          aria-label="Next Month"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* 3. WHITE ZIG-ZAG (Middle Layer, z-10) */}
      {/* Wrapper applies the upward drop-shadow to the clipped shape */}
      <div 
        className="absolute bottom-[-2px] left-0 w-full h-[140px] md:h-[180px] z-10"
        style={{ filter: 'drop-shadow(0 -12px 25px rgba(0,0,0,0.12))' }}
      >
        <div 
          className="w-full h-full bg-white"
          style={{
            clipPath: 'polygon(0 78%, 20% 62%, 50% 85%, 80% 62%, 100% 78%, 100% 100%, 0 100%)'
          }}
        />
      </div>

    </div>
  );
};

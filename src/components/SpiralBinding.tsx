import React from 'react';

export const SpiralBinding: React.FC = () => {
  // Generate an array for the spiral loops
  const loops = Array.from({ length: 32 });

  return (
    <div className="absolute -top-4 left-0 right-0 flex justify-center gap-[10px] sm:gap-[14px] px-8 z-20 pointer-events-none">
      {/* Center Hanger */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-10 border-4 border-gray-800 rounded-t-full border-b-0 z-10" />
      
      {loops.map((_, i) => (
        <div key={i} className="relative w-3 h-8">
          {/* Hole */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-100 rounded-full shadow-inner" />
          {/* Wire */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-6 border-2 border-gray-800 rounded-full bg-gradient-to-b from-gray-600 to-gray-900 shadow-sm" />
        </div>
      ))}
    </div>
  );
};

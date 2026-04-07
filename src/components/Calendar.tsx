import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import { SpiralBinding } from './SpiralBinding';
import { HeroSection } from './HeroSection';
import { NotesPanel } from './NotesPanel';
import { CalendarGrid } from './CalendarGrid';

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [direction, setDirection] = useState(0);

  const nextMonth = () => {
    setDirection(1);
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setDirection(-1);
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-white rounded-xl shadow-xl mt-8 mb-12 border border-gray-100">
      <SpiralBinding />
      
      <div className="flex flex-col">
        <HeroSection 
          currentDate={currentDate} 
          onPrevMonth={prevMonth} 
          onNextMonth={nextMonth} 
        />
        
        {/* Clean layout transition */}
        <div className="relative z-0 pt-4 pb-12 px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left Side: Notes */}
          <div className="w-full md:w-1/3 md:border-r border-gray-200 pr-0 md:pr-12 order-2 md:order-1">
            <NotesPanel />
          </div>
          
          {/* Right Side: Calendar Grid */}
          <div className="w-full md:w-2/3 order-1 md:order-2">
            <CalendarGrid 
              currentDate={currentDate} 
              direction={direction} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface DayCellProps {
  day: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isStart: boolean;
  isEnd: boolean;
  isInRange: boolean;
  isWeekendDay: boolean;
  hasHoliday: boolean;
  onHover: (day: Date | null) => void;
  onClick: (day: Date) => void;
}

export const DayCell: React.FC<DayCellProps> = ({
  day,
  isCurrentMonth,
  isToday,
  isSelected,
  isStart,
  isEnd,
  isInRange,
  isWeekendDay,
  hasHoliday,
  onHover,
  onClick,
}) => {
  return (
    <div 
      className="relative flex justify-center items-center h-12 w-full"
      onMouseEnter={() => onHover(day)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Range Background Highlight */}
      {isInRange && (
        <div className={cn(
          "absolute inset-y-1 bg-blue-500/10 transition-all duration-200",
          isStart && "rounded-l-full left-1/2 w-1/2",
          isEnd && "rounded-r-full right-1/2 w-1/2",
          (!isStart && !isEnd) && "w-full left-0"
        )} />
      )}

      {/* Day Button */}
      <motion.button
        whileHover={!isSelected ? { scale: 1.05 } : {}}
        whileTap={{ scale: 0.98 }}
        onClick={() => onClick(day)}
        className={cn(
          "relative w-10 h-10 flex flex-col items-center justify-center rounded-full text-sm transition-colors z-10",
          !isCurrentMonth && "text-gray-400",
          isCurrentMonth && !isSelected && !isToday && !isWeekendDay && "text-gray-700 hover:bg-gray-100",
          isCurrentMonth && !isSelected && !isToday && isWeekendDay && "text-blue-500 hover:bg-blue-50",
          isToday && !isSelected && "bg-gray-100 text-blue-500 font-semibold",
          isSelected && "bg-blue-500 text-white font-medium shadow-sm"
        )}
      >
        <span>{format(day, 'd')}</span>
        
        {/* Holiday / Event Indicator */}
        {hasHoliday && isCurrentMonth && (
          <span className={cn(
            "absolute bottom-1.5 w-1 h-1 rounded-full",
            isSelected ? "bg-white/80" : "bg-rose-400/80"
          )} />
        )}
      </motion.button>
    </div>
  );
};

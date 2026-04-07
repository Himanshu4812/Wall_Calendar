import React, { useState, useEffect } from 'react';
import { 
  startOfMonth, endOfMonth, startOfWeek, endOfWeek, 
  eachDayOfInterval, isSameMonth, isSameDay, 
  isToday, isWithinInterval, isBefore, isWeekend
} from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { DayCell } from './DayCell';
import { cn } from '../utils/cn';

interface CalendarGridProps {
  currentDate: Date;
  direction: number;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, direction }) => {
  const [selectionStart, setSelectionStart] = useState<Date | null>(() => {
    const saved = localStorage.getItem('calendar-range-start');
    return saved ? new Date(Number(saved)) : null;
  });
  const [selectionEnd, setSelectionEnd] = useState<Date | null>(() => {
    const saved = localStorage.getItem('calendar-range-end');
    return saved ? new Date(Number(saved)) : null;
  });
  
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  useEffect(() => {
    if (selectionStart) localStorage.setItem('calendar-range-start', selectionStart.getTime().toString());
    else localStorage.removeItem('calendar-range-start');
    
    if (selectionEnd) localStorage.setItem('calendar-range-end', selectionEnd.getTime().toString());
    else localStorage.removeItem('calendar-range-end');
  }, [selectionStart, selectionEnd]);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const isHoliday = (date: Date) => date.getDate() === 15 || date.getDate() === 25;

  const handleDateClick = (day: Date) => {
    if (!selectionStart || (selectionStart && selectionEnd)) {
      setSelectionStart(day);
      setSelectionEnd(null);
    } else if (selectionStart && !selectionEnd) {
      if (isBefore(day, selectionStart)) {
        setSelectionStart(day);
      } else {
        setSelectionEnd(day);
      }
    }
  };

  const isSelected = (day: Date) => {
    return (selectionStart && isSameDay(day, selectionStart)) || 
           (selectionEnd && isSameDay(day, selectionEnd)) || false;
  };

  const isInRange = (day: Date) => {
    if (selectionStart && selectionEnd) {
      return isWithinInterval(day, { start: selectionStart, end: selectionEnd });
    }
    if (selectionStart && hoverDate && !selectionEnd) {
      const start = isBefore(hoverDate, selectionStart) ? hoverDate : selectionStart;
      const end = isBefore(hoverDate, selectionStart) ? selectionStart : hoverDate;
      return isWithinInterval(day, { start, end });
    }
    return false;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    })
  };

  return (
    <div className="w-full">
      {/* Days Header */}
      <div className="grid grid-cols-7 mb-6">
        {weekDays.map((day, i) => (
          <div 
            key={day} 
            className={cn(
              "text-xs font-bold text-center py-2 tracking-wider",
              i >= 5 ? "text-blue-500" : "text-gray-800"
            )}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid with Animation */}
      <div className="relative min-h-[320px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentDate.toString()}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="grid grid-cols-7 gap-y-2 absolute inset-0"
          >
            {days.map((day) => (
              <DayCell
                key={day.toString()}
                day={day}
                isCurrentMonth={isSameMonth(day, monthStart)}
                isToday={isToday(day)}
                isSelected={isSelected(day)}
                isStart={!!selectionStart && isSameDay(day, selectionStart)}
                isEnd={!!selectionEnd && isSameDay(day, selectionEnd)}
                isInRange={isInRange(day)}
                isWeekendDay={isWeekend(day)}
                hasHoliday={isHoliday(day)}
                onHover={setHoverDate}
                onClick={handleDateClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

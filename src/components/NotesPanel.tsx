import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const NotesPanel: React.FC = () => {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const savedNotes = localStorage.getItem('calendar-notes');
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNotes = e.target.value;
    setNotes(newNotes);
    localStorage.setItem('calendar-notes', newNotes);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full mt-3 space-y-2"
    >
      <h3 className="text-lg text-gray-800 font-medium tracking-wide">
        Notes
      </h3>
      
      <div className="relative flex-grow min-h-[240px] md:min-h-[320px]">
        <textarea
          value={notes}
          onChange={handleNotesChange}
          className="w-full h-full resize-none bg-transparent border-none focus:ring-0 text-gray-700 p-0 m-0 outline-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(0, 0, 0, 0.12) 31px, rgba(0, 0, 0, 0.12) 32px)',
            backgroundAttachment: 'local',
            lineHeight: '32px',
            paddingTop: '4px', // Aligns the text perfectly on the lines
          }}
          placeholder="Write your notes or plans..."
          spellCheck="false"
        />
      </div>
    </motion.div>
  );
};

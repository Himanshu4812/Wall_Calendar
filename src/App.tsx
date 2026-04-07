import React from 'react';
import { Calendar } from './components/Calendar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans text-gray-900"
         style={{
           backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
           backgroundSize: '24px 24px'
         }}>
      <Calendar />
    </div>
  );
}

export default App;

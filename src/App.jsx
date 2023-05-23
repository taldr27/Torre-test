import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Skills from './components/Skills';

function App() {
  return (
    // Fix height problem
    <div className="bg-primary relative z-0 h-[100em] text-white">
      <Navbar />
      <Heading username="torrenegra" />
      <Skills username="torrenegra" />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';

function App() {
  return (
    <div className="bg-primary relative z-0 h-screen">
      <Navbar />
      <Heading username="torrenegra" />
    </div>
  );
}

export default App;

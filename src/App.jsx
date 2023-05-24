import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Skills from './components/Skills';
import { appContext } from './context/appContext';

function App() {
  const dataArray = useContext(appContext);

  return (
    // Fix height problem
    <div className="bg-primary relative z-0 h-[100em] text-white">
      <Navbar />
      <Heading username="torrenegra" dataArray={dataArray} />
      <Skills username="torrenegra" dataArray={dataArray} />
    </div>
  );
}

export default App;

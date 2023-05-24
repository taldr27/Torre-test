import React, { useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Skills from './components/Skills';
import { appContext } from './context/appContext';
import Experiences from './components/Experiences';

function App() {
  const dataArray = useContext(appContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dataArray === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [dataArray]);

  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      <Navbar />
      {loading ? (
        <p className="text-center">Loading App...</p>
      ) : (
        <>
          <Heading username="torrenegra" dataArray={dataArray} />
          <Skills username="torrenegra" dataArray={dataArray} />
          <Experiences username="torrenegra" dataArray={dataArray} />
        </>
      )}
    </div>
  );
}

export default App;

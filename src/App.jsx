import React, { useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Skills from './components/Skills';
import { appContext } from './context/appContext';
import Experiences from './components/Experiences';
import fetchUserData from './data/fetchData';

function App() {
  const dataArray = useContext(appContext);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('torrenegra');

  useEffect(() => {
    if (dataArray === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [dataArray]);

  const handleFetchData = (searchTerm) => {
    setLoading(true);
    fetchUserData(searchTerm);
    setUser(searchTerm);
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      {loading ? (
        <div className="flex text-center self-center h-screen items-center">
          <p className="text-3xl text-secondary">Loading App...</p>
        </div>
      ) : (
        <>
          <Navbar onSearchValue={handleFetchData} />
          <Heading username={user} dataArray={dataArray} />
          <Skills username={user} dataArray={dataArray} />
          <div className="w-[90%] self-center border border-tertiary mb-4" />
          <Experiences username={user} dataArray={dataArray} />
        </>
      )}
    </div>
  );
}

export default App;

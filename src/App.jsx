import React, { useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Skills from './components/Skills';
import { appContext } from './context/appContext';
import Experiences from './components/Experiences';
import fetchUserData from './data/fetchData';
import localSearchSave from './data/localSearchSave';

function App() {
  const { dataArray, setArrayData } = useContext(appContext);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    if (dataArray !== null) {
      setLoading(false);
    }
  }, [dataArray]);

  const handleFetchData = (searchTerm) => {
    setLoading(true);
    setMessage('Loading...');
    fetchUserData(searchTerm)
      .then((data) => {
        setArrayData(data);
        setLoading(false);
        localSearchSave(searchTerm);
      })
      .catch((error) => {
        setMessage('User not found!');
        return error;
      });
  };

  return (
    <div className="flex flex-col min-h-screen h-screen bg-primary text-white">
      <Navbar onSearchValue={handleFetchData} />
      {loading ? (
        <div className="flex text-center self-center h-full items-center">
          <p className="text-3xl text-secondary animate-pulse duration-75">{message}</p>
        </div>
      ) : (
        <>
          <Heading dataArray={dataArray} />
          <Skills dataArray={dataArray} />
          <div className="w-[90%] self-center border border-tertiary mb-4" />
          <Experiences dataArray={dataArray} />
        </>
      )}
    </div>
  );
}

export default App;

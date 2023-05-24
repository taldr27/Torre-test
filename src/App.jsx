import React, { useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Skills from './components/Skills';
import { appContext } from './context/appContext';
import Experiences from './components/Experiences';
import { fetchUserData } from './data/fetchData';
import localSearchSave from './data/localSearchSave';

function App() {
  const { dataArray, setArrayData, jobDataArray } = useContext(appContext);

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
    <div className="flex flex-col min-h-screen h-full bg-primary text-white">
      <Navbar onSearchValue={handleFetchData} />
      {loading ? (
        <div className="flex text-center self-center h-full items-center">
          <p className="text-3xl text-secondary animate-pulse duration-75">{message}</p>
        </div>
      ) : (
        <div className="xl:flex xl:flex-col xl:justify-center xl:px-80">
          <Heading dataArray={dataArray} />
          <div className="xl:flex">
            <div className="xl:w-2/4">
              <Skills dataArray={dataArray} jobs={jobDataArray} />
            </div>
            <div className="w-[100%] lg:w-[1px] border border-tertiary mb-4 lg:mx-5 lg:min-h-screen" />
            <div className="xl:w-2/4">
              <Experiences dataArray={dataArray} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

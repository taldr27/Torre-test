import React, { createContext, useEffect, useState } from 'react';
import { fetchJobData, fetchUserData } from '../data/fetchData';

const appContext = createContext();

const ContextProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState(null);
  const [jobDataArray, setJobDataArray] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData();
      setDataArray(data);
    };

    const fetchJob = async () => {
      const data = await fetchJobData();
      setJobDataArray(data);
    };

    fetchData();
    fetchJob();
  }, []);

  const setArrayData = (data) => {
    setDataArray(data);
  };

  return (
    <appContext.Provider value={{ dataArray, setArrayData, jobDataArray }}>
      {children}
    </appContext.Provider>
  );
};

export { appContext, ContextProvider };

import React, { createContext, useEffect, useState } from 'react';
import fetchUserData from '../data/fetchData';

const appContext = createContext();

const ContextProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData();
      setDataArray(data);
    };

    fetchData();
  }, []);

  return (
    <appContext.Provider value={dataArray}>
      {children}
    </appContext.Provider>
  );
};

export { appContext, ContextProvider };

import React, { createContext, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
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

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

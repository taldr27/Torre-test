import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Heading = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3001/users/${username}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {userData && (
        <div>
          <img src={userData.person.picture} alt="user-pic" />
          <h2>{userData.person.name}</h2>
        </div>
      )}
    </div>
  );
};

export default Heading;

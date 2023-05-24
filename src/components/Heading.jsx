import React, { useEffect, useState } from 'react';

const Heading = ({ dataArray, username }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dataArray === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [dataArray]);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(username);

  return (
    <div>
      <div>
        <img src={dataArray.person.picture} alt="user-pic" />
        <h2>{dataArray.person.name}</h2>
      </div>
    </div>
  );
};

export default Heading;

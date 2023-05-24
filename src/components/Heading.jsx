import React, { useEffect, useState } from 'react';
import { polygon } from '../assets';

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
        <div className="flex justify-center relative">
          <img src={polygon} alt="figure" className="z-10" />
          <div
            className="absolute w-[124px] h-[124px] z-0 top-[10%]"
            style={{ clipPath: 'polygon(60% 0%, 95% 19%, 95% 81%, 40% 100%, 5% 71%, 4% 22%)' }}
          >
            <img src={dataArray.person.picture} alt="user" className="w-full h-full object-cover" />
          </div>
        </div>
        <h2>{dataArray.person.name}</h2>
      </div>
    </div>
  );
};

export default Heading;

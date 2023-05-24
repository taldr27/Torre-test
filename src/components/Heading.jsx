import React from 'react';
import polygon from '../assets/polygon.png';

const Heading = ({ dataArray }) => (
  <div className="flex flex-col items-center my-[31px]">
    <div className="flex justify-center relative">
      <img src={polygon} alt="figure" className="z-10" />
      <div
        className="absolute w-[124px] h-[124px] z-0 top-[10%]"
        style={{ clipPath: 'polygon(50% 0%, 95% 19%, 95% 81%, 40% 100%, 5% 71%, 4% 22%)' }}
      >
        <img src={dataArray.person.picture} alt="user" className="w-full h-full object-cover" />
      </div>
    </div>
    <h2 className="text-secondary text-2xl mt-[-10px]">{dataArray.person.name}</h2>
    <span className="text-custom-gray text-center">{dataArray.person.professionalHeadline}</span>
  </div>
);

export default Heading;

import React from 'react';
import polygon from '../assets/poly.png';

const Heading = ({ dataArray }) => (
  <div className="flex flex-col items-center my-8 xl:mb-10">
    <div className="flex justify-center relative">
      <img src={polygon} alt="figure" className="z-10" />
      <div
        className="absolute w-[124px] h-[124px] z-0 top-[9.6%]"
        style={{ clipPath: 'polygon(50% -5%, 95% 21%, 95% 80%, 52% 105%, 3% 78%, 8% 20%)' }}
      >
        <img src={dataArray.person.picture} alt="user" className="w-full h-full object-cover" />
      </div>
    </div>
    <h2 className="text-secondary text-2xl mt-[-10px]">{dataArray.person.name}</h2>
    <span className="text-custom-gray text-center mx-10">{dataArray.person.professionalHeadline}</span>
  </div>
);

export default Heading;

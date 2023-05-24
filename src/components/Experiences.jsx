import React from 'react';

const Experiences = ({ dataArray }) => {
  console.log(dataArray);
  return (
    <div className="flex flex-col gap-5 ml-4 mr-6">
      <h2 className="mb-6">Previous Experiences:</h2>
      {dataArray.experiences.map((experience) => (
        <div key={experience.id} className="h-20 bg-red-500">
          <h1>{experience.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Experiences;

import React from 'react';
import { FaWeightHanging } from 'react-icons/fa';

const SkillsData = ({ experienceLevel, dataArray }) => {
  const filter = dataArray.strengths.filter((strength) => strength.proficiency === experienceLevel);
  if (filter.length === 0) {
    return <p>No skills founded</p>;
  }
  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {filter.map((filterStrength) => (
        <div key={filterStrength.id}>
          <div className="px-2 py-1 bg-tertiary rounded-xl text-sm flex items-center">
            {filterStrength.name}
            {filterStrength.weight ? (
              <div className="flex items-center ml-2 gap-1">
                <FaWeightHanging />
                <span>{filterStrength.weight.toFixed(1)}</span>
              </div>
            ) : ''}
          </div>
        </div>

      ))}
    </div>
  );
};

export default SkillsData;

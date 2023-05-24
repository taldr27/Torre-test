import React from 'react';

const SkillsData = ({ experienceLevel, dataArray }) => {
  const filter = dataArray.strengths.filter((strength) => strength.proficiency === experienceLevel);
  if (filter.length === 0) {
    return <p>No skills founded</p>;
  }
  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {filter.map((filterStrength) => (
        <div key={filterStrength.id}>
          <span className="px-2 py-1 bg-tertiary rounded-xl text-sm">
            {filterStrength.name}
            {filterStrength.weight ? <span className="px-2 py-1 bg-tertiary rounded-xl text-sm">{filterStrength.weight.toFixed(1)}</span> : ''}
          </span>

        </div>
      ))}
    </div>
  );
};

export default SkillsData;

import React from 'react';

const SkillsData = ({ experienceLevel, dataArray }) => {
  const filter = dataArray.strengths.filter((strength) => strength.proficiency === experienceLevel);
  if (filter.length === 0) {
    return <p>EMPTY</p>;
  }
  return (
    <div>
      {filter.map((filterStrength) => (
        <div key={filterStrength.id}>
          <div>
            <h1>{filterStrength.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsData;

import React, { useEffect, useState } from 'react';
import { skillsArray } from '../assets';
import SkillsData from './SkillsData';

const Skills = ({ dataArray }) => {
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
  return (
    <div className="ml-4 mr-6">
      <h2 className="mb-[31px]">Skills and Interests:</h2>
      {
        skillsArray.map((skill) => (
          <div key={skill.id} className="mb-5">
            <div className="flex">
              <img src={skill.img} alt={skill.img} className="w-6 mr-1" />
              <span>{skill.name}</span>
            </div>
            <SkillsData experienceLevel={skill.id} dataArray={dataArray} />
          </div>
        ))
      }
    </div>
  );
};

export default Skills;

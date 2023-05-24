import React from 'react';
import { skillsArray } from '../assets';
import SkillsData from './SkillsData';

const Skills = ({ dataArray }) => (
  <div className="ml-4 mr-6 lg:mr-0">
    <h2 className="mb-6 text-xl">Skills and Interests:</h2>
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
export default Skills;

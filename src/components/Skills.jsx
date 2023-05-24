import React from 'react';
import skillsArray from '../assets';
import SkillsData from './SkillsData';

const Skills = ({ dataArray }) => (
  <div>
    {
      skillsArray.map((skill) => (
        <div key={skill.name} className="flex">
          <img src={skill.img} alt={skill.img} className="w-8" />
          <span>{skill.name}</span>
          <SkillsData experienceLevel={skill.name} dataArray={dataArray} />
        </div>
      ))
    }
  </div>
);

export default Skills;

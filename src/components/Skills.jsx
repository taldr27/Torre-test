import React from 'react';
import skillsArray from '../assets';

const Skills = () => (
  <div>
    {
      skillsArray.map((skill) => (
        <div key={skill.name} className="flex">
          <img src={skill.img} alt={skill.img} className="w-8" />
          <span>{skill.name}</span>
        </div>
      ))
    }
  </div>
);

export default Skills;

import React from 'react';
import { RiSuitcaseLine } from 'react-icons/ri';

const ExperienceItem = ({ experience }) => (
  <div key={experience.id} className="flex items-center gap-3">
    <RiSuitcaseLine className="text-2xl" />
    <div className="flex flex-col w-72">
      <span className="text-secondary">{experience.name}</span>
      {experience.organizations[0] ? (
        <span>
          {experience.organizations[0].name}
        </span>
      ) : ''}
      <div className="text-gray-300">
        <span>
          {experience.fromMonth}
          {' '}
        </span>
        <span>
          {experience.fromYear}
          {' '}
        </span>
        {' - '}
        <span>
          {experience.toMonth}
          {' '}
        </span>
        <span>
          {experience.toYear}
          {' '}
        </span>
      </div>
    </div>
  </div>
);

const Experiences = ({ dataArray }) => (
  <div className="flex flex-col gap-5 ml-4 mr-6">
    <h2 className="text-xl">Previous Experiences:</h2>
    {dataArray.experiences.map((experience) => (
      <ExperienceItem
        key={experience.id}
        experience={experience}
      />
    ))}

  </div>
);

export default Experiences;

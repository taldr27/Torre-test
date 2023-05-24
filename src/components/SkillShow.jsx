import React from 'react';
import { CgClose } from 'react-icons/cg';

const SkillShow = ({
  handleShow, filterData, element, jobs,
}) => {
  const handleOpen = () => {
    handleShow(false);
  };

  const selected = filterData.find((filtered) => filtered.name === element);

  const filterJobs = jobs.strengths.filter(
    (job) => job.name.toLowerCase() === element.toLowerCase(),
  );

  return (
    <div className="fixed h-full bg-primary inset-0 z-50">
      <nav className="flex items-center gap-3 py-5 px-4 text-xl shadow-xl text-white">
        <CgClose onClick={handleOpen} className="text-2xl" />
        <h2>{selected.name}</h2>
      </nav>
      <div className="flex flex-col">
        <span>
          Proficiency:
          {selected.proficiency}
        </span>
        <span>
          Recommendations:
          {selected.recommendations}
        </span>
      </div>
      <div>
        Jobs with this skills
        {filterJobs.length
          ? (
            <div>
              <h2>{jobs.objective}</h2>
            </div>
          )
          : <p>There are no jobs related with this skill</p>}
      </div>
    </div>
  );
};

export default SkillShow;

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
    <div className="fixed h-full bg-primary inset-0 z-50 xl:w-2/4 xl:h-[50%] xl:inset-auto">
      <nav className="flex items-center gap-3 py-5 px-4 text-xl shadow-xl text-white mb-9">
        <CgClose onClick={handleOpen} className="text-2xl cursor-pointer" />
        <h2>{selected.name}</h2>
      </nav>
      <div className="mx-4">
        <div className="flex flex-col text-sm">
          <span>
            Proficiency:
            {' '}
            <span className="text-custom-gray">
              {selected.proficiency}
            </span>
          </span>
          <span>
            Recommendations:
            {' '}
            <span className="text-custom-gray">
              {selected.recommendations}
            </span>
          </span>
        </div>
        <div className="w-[100%] lg:w-[1px] border border-tertiary my-4 lg:mx-5 lg:min-h-screen" />
        <div>
          <span>
            Jobs with this skill:
          </span>
          {filterJobs.length
            ? (
              <div className="h-16 text-custom-gray flex flex-col mt-5">
                <span className="text-secondary">{jobs.objective}</span>
                <span>
                  <span>
                    <span className="text-white">
                      Status:
                    </span>
                    {' '}
                    {jobs.status}
                  </span>
                </span>

                <span>
                  <span className="text-white">Language: </span>
                  {jobs.languages[0].language.name}
                  {' - '}
                  {jobs.languages[0].fluency}
                </span>
              </div>
            )
            : <p>There are no jobs related with this skill</p>}
        </div>
      </div>
    </div>
  );
};

export default SkillShow;

import React from 'react';
import { CgClose } from 'react-icons/cg';

const SkillShow = ({ handleShow, filterData, element }) => {
  const handleOpen = () => {
    handleShow(false);
  };

  const selected = filterData.find((filtered) => filtered.id === element);

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
    </div>
  );
};

export default SkillShow;

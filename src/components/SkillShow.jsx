import React from 'react';

const SkillShow = ({ handleShow }) => {
  const handleOpen = () => {
    handleShow(false);
  };

  return (
    <div className="fixed h-full bg-primary inset-0 z-50">
      <button type="button" onClick={handleOpen}>X</button>
      <h2>name</h2>
    </div>
  );
};

export default SkillShow;

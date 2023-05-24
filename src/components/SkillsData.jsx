import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const SkillsData = ({ username }) => {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3001/users/${username}`);
        setSkillsData(response.data.strengths);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchSkillsData();
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(skillsData);

  return (
    <>
      {skillsData.map((skill) => (
        <ul key={skill.id}>
          <li>{skill.name}</li>
        </ul>
      ))}
    </>
  );
};

export default SkillsData;

import axios from 'axios';

// Render Back-End Links, it needs time for the first load.
const userUrl = 'https://torre-backend-test.onrender.com/users/';
const jobUrl = 'https://torre-backend-test.onrender.com/jobs/';
const defaultUser = localStorage.getItem('user') || 'torrenegra';

// Using the software engineering job post
const defaultJob = 'VdLDxzZd';

const fetchUserData = async (username) => {
  try {
    const response = username
      ? await axios.get(`${userUrl}${username}`)
      : await axios.get(`${userUrl}${defaultUser}`);

    if (response.status === 500) {
      throw new Error('User not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

const fetchJobData = async () => {
  try {
    const response = await axios.get(`${jobUrl}${defaultJob}`);

    return response.data;
  } catch (error) {
    throw new Error('Job not found');
  }
};

export { fetchUserData, fetchJobData };

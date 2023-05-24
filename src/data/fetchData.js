import axios from 'axios';

const userUrl = 'http://127.0.0.1:3001/users/';
const jobUrl = 'http://127.0.0.1:3001/jobs/';
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
    throw new Error('User not found');
  }
};

export { fetchUserData, fetchJobData };

import axios from 'axios';

const url = 'http://127.0.0.1:3001/users/';
const defaultValue = localStorage.getItem('user') || 'torrenegra';

const fetchUserData = async (username) => {
  try {
    const response = username
      ? await axios.get(`${url}${username}`)
      : await axios.get(`${url}${defaultValue}`);

    if (response.status === 500) {
      throw new Error('User not found');
    }

    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

export default fetchUserData;

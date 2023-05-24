import axios from 'axios';

const url = 'http://127.0.0.1:3001/users/';
const defaultValue = localStorage.getItem('user') || 'torrenegra';

const fetchUserData = async (username) => {
  try {
    const response = username ? await axios.get(`${url}${username}`) : await axios.get(`${url}${defaultValue}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default fetchUserData;

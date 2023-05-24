import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`http://127.0.0.1:3001/users/${username}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default fetchUserData;

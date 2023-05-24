import axios from 'axios';

const fetchUserData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3001/users/torrenegra');
    return response.data;
  } catch (error) {
    return error;
  }
};

export default fetchUserData;

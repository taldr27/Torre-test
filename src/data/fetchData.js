import axios from 'axios';

const fetchUserData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3001/users/torrenegra');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchUserData;

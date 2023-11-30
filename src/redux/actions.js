import axios from 'axios';

export const fetchDogImage = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      const imageUrl = response.data.message;

      dispatch({ type: 'FETCH_DOG_IMAGE_SUCCESS', payload: imageUrl });
    } catch (error) {
      dispatch({ type: 'FETCH_DOG_IMAGE_FAILURE', payload: error.message });
    }
  };
};
import axios from 'axios';
import { FETCH_GREETING, SET_GREETING, SET_ERROR } from './types';

export const fetchGreeting = () => async dispatch => {
  dispatch({ type: FETCH_GREETING });

  try {
    const response = await axios.get('URL_TO_YOUR_API_ENDPOINT');
    dispatch({
      type: SET_GREETING,
      payload: response.data.content, // Assuming the API response contains 'content'
    });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

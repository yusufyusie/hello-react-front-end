import { FETCH_GREETING, SET_GREETING, SET_ERROR } from '../actions/types';

const initialState = {
  greeting: '',
  loading: false,
  error: null,
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return { ...state, loading: true, error: null };
    case SET_GREETING:
      return { ...state, greeting: action.payload, loading: false };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default greetingReducer;

import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import greetingsReducer from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

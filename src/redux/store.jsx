import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice/Mission';

const store = configureStore({
  reducer: {
    missionSlice: missionReducer,
  },
});

export default store;

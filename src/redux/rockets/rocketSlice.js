import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
};

const url = 'https://api.spacexdata.com/v4/rockets';
export const getRockets = createAsyncThunk(
  'getRockets',
  async () => {
    const res = await axios.get(url);
    // console.log(res.data);
    return res.data;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveBooking: (state, action) => {
      const id = action.payload;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    },
    cancelBooking: (state, action) => {
      const id = action.payload;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(getRockets.fulfilled, (state, action) => {
        state.rockets = action.payload;
      });
  },

});

export const { reserveBooking, cancelBooking } = rocketSlice.actions;
export default rocketSlice.reducer;

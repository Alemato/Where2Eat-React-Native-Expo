import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  date: '',
  time: '',
  seat: '',
  day: null,
  month: null,
  year: null,
  hour: null,
  minute: null,
};

export const CreateBookingSlice = createSlice({
  name: 'createBooking',
  initialState: INITIAL_STATE,
  reducers: {
    resetBookingForm: (state) => {
      Object.assign(state, INITIAL_STATE);
    },
    setBookingDate: (state, action) => {
      state.date = action.payload;
    },
    setBookingTime: (state, action) => {
      state.time = action.payload;
    },
    setBookingSeats: (state, action) => {
      state.seat = action.payload;
    },
    setPartOfDate: (state, action) => {
      const {value, part} = action.payload;
      if (!isNaN(value)) {
        if ((part === 'day' && value < 32) ||
            (part === 'month' && value < 13) ||
            (part === 'year')) {
          state[part] = value;
          if (state.day && state.month && state.year) {
            state.date = `${state.day}/${state.month}/${state.year}`;
          } else {
            state.date = '';
          }
        }
      }
    },
    setPartOfTime: (state, action) => {
      const {value, part} = action.payload;
      if (!isNaN(value)) {
        if ((part === 'hour' && value < 25) ||
            (part === 'minute' && value < 60)) {
          state[part] = value;
          if (state.hour && state.minute) {
            state.time = `${state.hour}:${state.minute}`;
          } else {
            state.time = '';
          }
        }
      }
    },
  },
});

export const {
  resetBookingForm,
  setBookingDate,
  setBookingTime,
  setBookingSeats,
  setPartOfDate,
  setPartOfTime,
} = CreateBookingSlice.actions;

export default CreateBookingSlice.reducer;

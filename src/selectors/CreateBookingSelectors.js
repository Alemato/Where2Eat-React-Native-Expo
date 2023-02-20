function sCreateBooking(state) {
  return state.createBooking;
}

export const sCreateBookingDay = (state) => sCreateBooking(state).day;
export const sCreateBookingMonth = (state) => sCreateBooking(state).month;
export const sCreateBookingYear = (state) => sCreateBooking(state).year;
export const sCreateBookingDate = (state) => sCreateBooking(state).date;
export const sCreateBookingHour = (state) => sCreateBooking(state).hour;
export const sCreateBookingMinute = (state) => sCreateBooking(state).minute;
export const sCreateBookingTime = (state) => sCreateBooking(state).time;
export const sCreateBookingSeat = (state) => sCreateBooking(state).seat;


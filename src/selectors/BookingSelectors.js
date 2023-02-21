function sStoreBookings(state) {
  return state.bookings;
}

export const sFutureBookings = state => sStoreBookings(state).futureBookings;
export const sPastBookings = state => sStoreBookings(state).pastBookings;

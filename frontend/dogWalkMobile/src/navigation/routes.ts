export enum AppStackRoutes {
  BOOKING = 'Booking',
  PROFILE = 'Profile',
  CONFIRM_BOOKING = 'ConfirmBooking',
}

export type AppStackParamList = {
  [AppStackRoutes.BOOKING]: undefined;
  [AppStackRoutes.PROFILE]: undefined;
  [AppStackRoutes.CONFIRM_BOOKING]: {
    timeSlot: string;
  };
};

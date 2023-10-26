import {Dog, User} from 'core/profile/types';

export interface Schedule {
  timeSlots: TimeSlotStatus[];
}

export interface TimeSlotStatus {
  startTime: string;
  appointmentId: string | null;
  status: 'available' | 'booked';
  user: User | null;
  dog: Dog | null;
}

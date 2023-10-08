import {useCallback, useEffect, useState} from 'react';
import {Schedule, TimeSlotStatus} from './types';
import {getFakeUser} from 'lib/fakes/fakeData';
import {User} from 'core/profile/types';

const fakeApptData = (date: Date): Schedule => {
  const user1: User = getFakeUser();
  const user2: User = {
    ...user1,
    id: 'user-456',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
  };

  const daySchedule: Schedule = {
    timeSlots: [
      {
        appointmentId: null,
        startTime: '09:00',
        status: 'available',
        user: null,
        dog: null,
      },
      {
        appointmentId: 'abc123',
        startTime: '10:00',
        status: 'booked',
        user: user1,
        dog: user1.dogs[0],
      },
      {
        appointmentId: 'def456',
        startTime: '11:00',
        status: 'booked',
        user: user2,
        dog: user2.dogs[1],
      },
      {
        appointmentId: null,
        startTime: '12:00',
        status: 'available',
        user: null,
        dog: null,
      },
      {
        appointmentId: null,
        startTime: '01:00',
        status: 'available',
        user: null,
        dog: null,
      },
      {
        appointmentId: 'ghi789',
        startTime: '02:00',
        status: 'booked',
        user: user1,
        dog: user1.dogs[1],
      },
      {
        appointmentId: 'jkl012',
        startTime: '03:00',
        status: 'booked',
        user: user2,
        dog: user2.dogs[0],
      },
      {
        appointmentId: null,
        startTime: '04:00',
        status: 'available',
        user: null,
        dog: null,
      },
    ],
  };
  return daySchedule;
};
export function useAppointments(selectedDate: Date): {
  isLoading: boolean;
  bookings: TimeSlotStatus[];
  error: string | null;
} {
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState<TimeSlotStatus[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = useCallback(async (date: Date) => {
    setIsLoading(true);
    try {
      // const res = await fetch('...');
      // const json = await res.json();
      const res = fakeApptData(date);
      setBookings(res.timeSlots);
    } catch (e) {
      // todo - handle error once api hooked up
      setError("Couldn't fetch appointments");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBookings(selectedDate);
  }, [selectedDate]);

  return {
    isLoading,
    bookings,
    error,
  };
}

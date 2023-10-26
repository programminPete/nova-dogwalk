import {ReactElement, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {BookingRow, BookingStatus} from './BookingRow';
import {useAppointments} from '../useAppointments';
import {Dog, User} from 'core/profile/types';
import {getFakeUser} from 'lib/fakes/fakeData';
import {Schedule, TimeSlotStatus} from '../types';

interface Props {
  selectedDate: Date;
}
export default function BookingSelectionList({
  selectedDate,
}: Props): ReactElement {
  const {bookings, isLoading, error} = useAppointments(selectedDate);
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

  const BookingRowItem = ({item}: {item: TimeSlotStatus}) => {
    const isUsrBooked =
      item.status === 'booked' && item.user?.id === 'user-123';

    return (
      <BookingRow
        appointmentId={item.appointmentId}
        dogName={item.dog?.name}
        status={
          isUsrBooked
            ? BookingStatus.USER_BOOKED
            : item.status === 'booked'
            ? BookingStatus.BOOKED
            : BookingStatus.AVAILABLE
        }
        timeSlot={item.startTime}
      />
    );
  };

  return (
    <FlatList
      style={styles.container}
      renderItem={BookingRowItem}
      data={bookings}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

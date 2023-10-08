const usersDogs = [
  {
    ""
  }
]
const bookings = [
  {
    appointmentId: 'uuid1',
    profileImageUrl: 'https://example.com/path/to/image1.jpg',
    dogName: 'Buddy',
    status: BookingStatus.USER_BOOKED,
    timeSlot: '09:00 - 10:00'
  },
  {
    appointmentId: 'uuid2',
    status: BookingStatus.AVAILABLE,
    timeSlot: '10:00 - 11:00'
  },
  {
    appointmentId: 'uuid3',
    status: BookingStatus.BOOKED,
    timeSlot: '11:00 - 12:00'
  },
  {
    appointmentId: 'uuid4',
    profileImageUrl: 'https://example.com/path/to/image2.jpg',
    dogName: 'Bella',
    status: BookingStatus.USER_BOOKED,
    timeSlot: '12:00 - 01:00'
  },
  {
    appointmentId: 'uuid5',
    status: BookingStatus.AVAILABLE,
    timeSlot: '01:00 - 02:00'
  },
  {
    appointmentId: 'uuid6',
    status: BookingStatus.BOOKED,
    timeSlot: '02:00 - 03:00'
  },
  {
    appointmentId: 'uuid7',
    profileImageUrl: 'https://example.com/path/to/image3.jpg',
    dogName: 'Lucy',
    status: BookingStatus.USER_BOOKED,
    timeSlot: '03:00 - 04:00'
  },
  {
    appointmentId: 'uuid8',
    status: BookingStatus.AVAILABLE,
    timeSlot: '04:00 - 05:00'
  },
];

export default bookings;

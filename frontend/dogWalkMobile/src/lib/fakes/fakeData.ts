import {Dog, User} from 'core/profile/types';

const getUsersDogs = (): Dog[] => {
  return [
    {
      id: 'dog-123',
      name: 'Fido',
      breed: 'Golden Retriever',
    },
    {
      id: 'dog-456',
      name: 'Spot',
      breed: 'Dalmation',
    },
  ];
};

export const getFakeUser = (): User => {
  const dogs = getUsersDogs();
  const user: User = {
    id: 'user-123',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '555-555-5555',
    addressLine1: '123 Main St',
    addressLine2: 'Apt 105',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    dogs: dogs,
  };
  return user;
};

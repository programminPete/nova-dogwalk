export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  dogs: Dog[];
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
}

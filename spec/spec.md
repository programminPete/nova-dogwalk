User:
POST /users/register: Register a new user
body

```json

```

Dogs:
POST /dogs: Add a new dog for a user

body

```typescript
interface Dog {
  name: string;
  breed: string;
  age: number;
}
```

GET /dogs/:userId: Get all dogs for a user
Appointments:
GET /appointments: Fetch available time slots
POST /appointments: Book an appointment
PATCH /appointments/{appointmentId}/cancel

- requestBody

```typescript
  {
    reason?: string
  }
```

responseBody

```json
{
  "success": true
}
```

GET /appointments/:userId: Get user's appointments

### Schedule Screen

On the schedule screen. Need to grab a list of appointments by day. Each time user clicks left or right, a new query will be made to fetch that days appointments

### Profile Screen

GET /users/{ref_id}: Get my user details including address
response body:

- can give full User object from schema, minus password hash

PATCH /users/${ref_id}
request body:

```typescript
interface UserPatchParams {
  firstName: string;
  lastName: string;
  email?: string;
  address: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
}
```

    - can give full User object from schema, minus password hash

GET /users/dogs
response body

- can give full Dog object from schema

POST /users/dogs
request body
`typescript
    interface Dog {
      name: string;
      breed: string;
    }
    `
response body: - can give full dog entry

misc:
obv auth routes also , but not going into those

POST /users/login: Authenticate user
GET /users/{ref_id}: Get my user details including address

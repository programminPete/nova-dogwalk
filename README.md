Note - See "rn" branch for actual frontend, here was mostly just sudo - but didnt want to overwrite this branch code so I didn't complicate the actual original ask

<img width="444" alt="app_preview" src="https://github.com/programminPete/nova-dogwalk/assets/17052780/c5950844-e229-4ed9-8abb-ca79a266307a">


# Walk the Dog

Thank you so much for the opportunity! I love companies who give take homes (or just realstic live coding) challenges, as opposed to arbitrary algorithm questions. So, immediate +1 to Novalabs culture! (and I love dogs.. +2 lol).

Please let me know if this whimsical link is not accessible as most of the information is there:
https://whimsical.com/novalabs-dogwalker-app-6dSeaD6SqtjnsXXdFjr7Qx

## Questions

## 1. Describe the stack you’d use to build this app and why you’d choose these technologies over others

### Frontend: React-Native (RN), Typescript

The concept of the app means the employee (me) will be traveling to appointments often, and users will also probably be booking walks on a whim from their phone often, so this leads me to think mobile app over a responsive web/desktop app. I think both user and employees would want to receive notifications to let them know of any walk status changes, etc. Push notifications would be more real-time than email notifications (in a web app), and better user experience over SMS (w/ deep linking)

Using RN allows for deploying both iOS and Android apps simultaneously, with (usually) only minor differences between the two deployments. This allows us to use the same development team for both. The main down side, in not going native, in my opinion, is some advanced code will be harder and have more edge cases (ex: animations). But this app shouldn't have those issues. And RN has gotten prety solid now as far as having a pretty native feel. The community support is huge and there are consistently new builds being released. (A huge (also tiny but I love it) is the addition of the "gap" style that has been present on web for a long time and allows avoiding individual margin/padding on elements. - makes styling with flex much better)

In addition, when we hopefully make an accompanying web app , the vast majority of business logic (hooks, etc.) can be lifted to that with little effort.
Also, Typescript over JS is essential in my opinion. It makes coding in a professional environment much more enjoyable for 1,but reduces errors, and increases dev time, in my opinion - especially for new team members joining - since they can make sense of the data that is going through the app.

### Backend: Node / Express / Typescript

Since we are using React on the frontend it makes sense to use javascript on the backend too to allow our engineers to be full stack when needed, and have a full understanding of the application.
Express abstracts away a lot of the event streaming and greatly simiplifies api calls.

### DB: Postgres / sqitch(?)

I'm familiar with Postgres and has more advanced features over MySQL, and I do like relational databases for their transactional nature / data consistency. Since we're dealing with appointments, we need to make sure there is no double-booking / appointment conflicts, and that can be addressed with SQL. (Although I know some NoSQL do offer transactions as well.)
I've used sqitch to manage migrations in the past. I'm not an expert in this realm, but has worked well and easy to use / write. So I would recommend sqitch or a similar tool for migration management.

## 2. Detail the database schema you would use to represent all of the data displayed in the wireframes (hint: keep it simple!)

- Please see db_schema.sql file

## 3. What does the API layer between the front and back end look like? Which routes are needed to display all the data in the wireframes and handle all potential actions?

- Please see whimsical document -- to the right side

## 4. Write a React or React Native component for a row in the calendar that handles the various states it can be in (available, booked with someone else’s dog, booked with your dog)

- Please see the /frontend folder for BookingRow.tsx , as well as some helper components
- ex: Button / ConfirmModal that can be used throughout the app

- note: The ButtonRow.tsx would be the renderElement of the parent Schedule <FlatList /> .. I made the assumption that I could call the full day schedule in a useAppointments(selectedDate) hook a level above, and then format that data so that the <BookingRow /> could have a "status" prop. This allowed for simplification in the ButtonRow by using a switch statement, which I feel abstracts some jsx code away.
  (I clarify a bit more of the frontend logic / design in the whimsical)

## 5. Write the server side function that runs when a user presses “book” (pseudocode is fine)

- Please server/\* files

- I've liked to use a handler/service/repo pattern in the past, which helps to separate concerns.
  handler - takes in data and verifies input is ok / sends back response
  service: deals with business logic
  repo: Interacts with the DB and data models
  I bypassed the service here to just use handler and repo since sudo code / basic

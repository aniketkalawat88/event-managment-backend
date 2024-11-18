
# Event Management System

This is a web-based Event Management System that allows admins to create and manage events, while users can register, log in, RSVP to events, and manage their profiles.

## Overview

- **Admin Features**:
  - Create and delete events.
  - View the total number of attendees for each event.

- **User Features**:
  - Register and log in.
  - View all events.
  - RSVP to events.
  - Manage their profile.
  - Without logging in, users cannot access any routes.

---

## API Routes

### User Routes

1. **Register**  
   POST - `http://localhost:5000/api/users/register`

2. **Login**  
   POST - `http://localhost:5000/api/users/login`

3. **Attend Event (RSVP)**  
   POST - `http://localhost:5000/api/users/rsvp/6738a9eb9b707dc85a06ba63`

4. **Confirmed Event List**  
   GET - `http://localhost:5000/api/users/rsvp-list`

5. **Check Role (User or Admin)**  
   GET - `http://localhost:5000/api/users/checkrole`

6. **Profile**  
   GET - `http://localhost:5000/api/users/profile`

### Admin Routes

1. **Create Event**  
   POST - `http://localhost:5000/api/admin/create`

2. **Delete Event**  
   DELETE - `http://localhost:5000/api/admin/67386b2386b6dc2475d20754`

3. **All Events**  
   GET - `http://localhost:5000/api/admin/allevent`

---

## Frontend Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/aniketkalawat88/event-managment-frontend.git
   ```

2. Navigate to the project directory and run:  
   ```bash
   npm install
   npm run build
   npm run dev
   ```

3. Create a `.env` file in the root folder with the following content:  
   ```env
   NEXT_PUBLIC_URL=http://localhost:5000
   ```

---

## Backend Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/aniketkalawat88/event-managment-backend.git
   ```

2. Navigate to the project directory and run:  
   ```bash
   npm install
   nodemon server.js
   ```

3. Create a `.env` file in the root folder with the following keys:  
   ```env
   MONGO_URI=mongodb+srv://aniketkalawat88:Q5Z7NjX6cHLCUWNV@cluster0.go7bz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=EVENTMANAGMENTASHSHDIADASOIDUI
   PORT=5000
   ```

---

## Hosted Links

1. **Frontend** (Netlify): [Visit Site](https://event-managment-systems.netlify.app)  
2. **Backend** (Render): [Visit API](https://event-managment-backend-3t24.onrender.com)

---

## Frontend Repository

[Event Management Frontend Repository](https://github.com/aniketkalawat88/event-managment-frontend.git)

## Backend Repository

[Event Management Backend Repository](https://github.com/aniketkalawat88/event-managment-backend.git)

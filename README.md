# 🛠️ Frontend Developer Technical Test – swipejobs

---

## 🚀 Tech Stack

- **React Native** with **Expo** – for fast development and cross-platform compatibility
- **Tailwind CSS (via NativeWind)** – for utility-first styling in React Native
- **React Navigation** – for smooth navigation between screens
- **Fetch** – for communicating with the swipejobs REST API
- **React Context API** – for simple state sharing across components
- **Jest** and **@testing-library/react-native** – for unit and integration tests

---

## 📱 Features

### 1. Job Listings Screen
- Displays a scrollable list of matched jobs
- Each job is shown as a card with:
  - Job title
  - Company name
  - Hourly rate
  - Location
  - Distance from user
- Clean and modular layout for quick scanning

### 2. Job Details Screen
- Navigated to by tapping on a job card
- Shows full job description, requirements, and address
- Buttons to **Accept** or **Reject** a job
- API call feedback (success/failure) displayed via UI messages

### 3. Profile Screen
- Displays worker’s profile information:
  - Name and phone number
  - Email
  - Location 
- Used to understand job matching criteria

### 4. Map Screen
- Interactive map displaying job locations as markers
- Each marker corresponds to a job's coordinates
- Tapping on a marker shows address and company name
- Helps users visualize how far jobs are from them and in what area

---

To run tests:

```bash
npm test
```

---

## 🌱 Possible Improvements

This project could be extended in several ways:

- **Interactive Map Enhancements**
  - **Search Bar Integration**: Add a search bar to allow users to search for jobs by location or job title.
  - **Current User Location**: Integrate the ability to fetch and display the user’s current location, showing the nearest jobs on the map.
  - **Address to Coordinates Conversion**: Implement functionality to convert job addresses into geographical coordinates (latitude and longitude), so they can be plotted accurately on the map.

# IELTS Practice - Firebase Authentication

## Overview
IELTS Practice is a simple web application that includes user authentication using Firebase. Users can sign up, log in, and log out using their email and password.

## Features
- Sign up with an email and password
- Log in with an email and password
- Logout functionality
- Authentication state persistence

## Technologies Used
- HTML
- CSS
- JavaScript
- Firebase Authentication

## Project Structure
```
/ielts-practice
│── index.html        # Homepage
│── login.html        # Login page
│── signup.html       # Signup page
│── style.css         # Styling file
│── app.js            # Functions/logic
│── firebase-config.js # Firebase initialization
│── README.md         # Project documentation
```

## Setup Instructions
### Step 1: Clone the Repository
```
git clone https://github.com/yourusername/ielts-practice.git
cd ielts-practice
```

### Step 2: Set Up Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project and enable **Email/Password Authentication**.
3. Get your Firebase configuration from **Project Settings > General > Web App**.
4. Replace the placeholder values in `firebase-config.js` with your Firebase credentials.

### Step 3: Run the Project
Simply open `index.html` in a web browser, or use Live Server in VS Code for testing.

## Usage
1. **Sign Up:** Enter an email and password on the signup page.
2. **Login:** Enter your registered credentials to log in.
3. **Logout:** Click the logout button to sign out.

## Future Enhancements
- Add password reset functionality
- Deploy the project using Firebase Hosting
- Improve UI design with animations and themes
- Backend integration


---
Happy Coding! Let me know if you need any improvements! 


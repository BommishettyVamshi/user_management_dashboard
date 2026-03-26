# User Management Dashboard

## Overview

This project is a frontend-only for **User Management**, built using **React.js**. It allows users to view, filter, and explore user details in a clean and responsive interface.

The application follows a clean, scalable architecture using **pages**, **components**, **hooks**, **services** and **utils**.

## Tech Stack

* HTML
* CSS
* JS
* React.js(Vite)

## project Structure

```text
user_management_dashboard/
|--- frontend/
|    |---src/
|    |   |--- components/                        # Reusable UI components
|    |   |
|    |   |--- pages/                             # Page-level components
|    |   |    |
|    |   |    |--- HomePage/                     # Displays the All user details for '/' route
|    |   |    |--- UserDetailsPage/              # Displays the specific user details '/users/id' route
|    |   |    |--- NotFoundPage/                 # Displays not found msg for invalid routes
|    |   |    
|    |   |--- services/                          # API calls
|    |   |--- utils/                             # Helper functions or constants
|    |   |--- hooks/                             # Custom hooks     
|    |   |--- App.jsx                            # Main app component          
|    |   |--- main.jsx                           # Entry point
|    |
|    |--- index.html                             # root html
|    |---.gitignore
|    |--- package.json
|    
|--- README.md
```

---

## Setup Instructions

```bash
git clone https://github.com/BommishettyVamshi/user_management_dashboard
cd frontend
npm install
npm run dev

```

---

## Frontend URL

```
http://localhost:5173/

```

## API Used

**BaseUrl:**
``` 
https://jsonplaceholder.typicode.com/users

```

---

## Pages

### HomePage

**Route:**
```
    BaseUrl/
```

**Description:** 

* Displays all users details and allows users to view , filter and explore 

### UserDetailsPage
**Route:**
```
  BaseUrl/:userId
```
**Description:**
* Contains the specific user (userId) details

### NotFoundPage
**Route:**
- Any undefined Route

**Description:**
* Displays a message for invalid or non-existing routes

---

## Notes
* This is a frontend-only project
* Uses a public API for user data
* Page routing is implemented and verified
* Components and full UI implementation will be added in future phases
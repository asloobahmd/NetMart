# NetMart - E-commerce Platform

NetMart is a comprehensive e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Chakra UI. This project aims to provide a robust and scalable solution for online retail businesses.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- User Authentication (Sign up, Login, Logout)
- Product Management (Add, Edit, Delete Products)
- Shopping Cart
- Order Management
- User Profile Management
- Responsive Design

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- MongoDB instance running

### Clone the Repository

```bash
git clone https://github.com/your-username/NetMart.git
```

### Backend Setup

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your MongoDB URI and other environment variables:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup (Client)

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Frontend Setup (Admin)

1. Navigate to the `admin` directory:

   ```bash
   cd admin
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage
### Client & Admin

To run the application, navigate to the `client or admin` directory and run the development server:

```bash
npm run dev
```

Open your browser and visit `http://localhost:3000` to see the application in action.


## Scripts

### Backend Scripts

- `npm start`: Start the backend server
- `npm run dev`: Start the backend server with nodemon for development

### Frontend Scripts

- `npm start`: Start the frontend server
- `npm run dev`: Start the frontend server in development mode

## Technologies Used

- **Frontend**: React, Chakra UI, Tailwind css
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


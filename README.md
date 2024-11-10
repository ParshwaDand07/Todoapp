# To-Do List Application

A simple and intuitive To-Do List web application built with **React** for the front-end and **Node.js** for the back-end. This app allows users to add, view, edit, delete, and mark tasks as completed, while storing the tasks in a MongoDB database. 

This project was developed independently as a personal project to demonstrate my skills in full-stack development, including front-end, back-end, and database integration.

## Features

- **Add Tasks**: Users can add new tasks to the list.
- **View Tasks**: Users can see a list of all their tasks.
- **Edit Tasks**: Users can edit the text of existing tasks.
- **Delete Tasks**: Users can delete tasks from the list.
- **Mark Tasks as Completed**: Users can mark tasks as complete or unmark them.
- **Responsive Design**: The application is mobile-friendly and works well on both desktop and mobile devices.
- **Authentication (Optional)**: Secure login system for personal task management.

## Technologies Used

- **Front-End**: React, CSS (or CSS-in-JS if you choose to implement it).
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas for cloud hosting)
- **Authentication**: JWT (JSON Web Tokens) for secure login (Optional feature)

## Setup

### Prerequisites

Ensure that you have the following software installed:

- **Node.js** (Download from [nodejs.org](https://nodejs.org/))
- **MongoDB** (You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a free cloud database or run MongoDB locally)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app

2. Install Front-End Dependencies
In the front-end directory, run:

- cd client
- npm install

3. Install Back-End Dependencies
In the back-end directory, run:
- cd ../server
- npm install

4. Set Up Environment Variables
Create a .env file in the server directory and add the following variables:
echo "MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000" > .env

##Replace your_mongodb_connection_string with your MongoDB URI and your_jwt_secret_key with a randomly generated secret key.

5. Start the Server
To start the back-end server:
- node server.js
- The server will run on http://localhost:5000.

6. Start the Front-End
In the client directory, run:
- cd ../client
- npm start
#### This will run the React app on http://localhost:3000.

# Usage:
After setting up and running both the front-end and back-end, open the app in your browser at http://localhost:3000. You can interact with the To-Do list by:
- Adding new tasks
- Marking tasks as completed
- Editing or deleting tasks
- If you have implemented authentication, sign up and log in to access your personal task list.

# API Endpoints
The back-end exposes the following RESTful API endpoints:

## Authentication
- POST /api/auth/register: Register a new user.
- POST /api/auth/login: Log in and receive a JWT token.

## Tasks
- GET /api/tasks: Retrieve all tasks.
- POST /api/tasks: Add a new task.
- PUT /api/tasks/: Edit a task.
- DELETE /api/tasks/: Delete a task.

## Security:
- Authentication is handled using JWT tokens, which should be included in
- the Authorization header as a Bearer token in all requests (except for
- public endpoints like login and register).

## Deployment:
To deploy your app, you can use platforms such as:
- Front-End: Deploy the React app on platforms like Vercel.
- Back-End: Host the Node.js app on platforms like Heroku or Render.

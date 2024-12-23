# Nooro-todo-frontend

This project contains the backend implementation of the Nooro hiring task. The application includes the following rest apis:

- **Add task**: POST /tasks
- **Get task**: GET /tasks
- **Edit task**: PUT /tasks/:id
- **Delete task**: DELETE /tasks/:id

### Prerequisites

- Ensure you have [VS Code](https://code.visualstudio.com/) and [Node.js](https://nodejs.org/) installed on your machine.

## Running Project

- Clone this GitHub repository: [nooro-todo-backend](https://github.com/yraeonti/nooro-todo-backend)
- Open your terminal and change the directory to `nooro-todo-backend`:
  ```bash
  cd nooro-todo-backend
- Install dependencies:
  ```bash
  npm install
- Add Mysql Database
  - check the .env.example file for the DATABASE_URL format and connect yours
- Update database with models
  ```bash
  npx prisma generate && npx prisma db push
- Run the development server
  ```bash
  npm run dev
- The application should now be running locally. You can view it in your browser at http://localhost:5000



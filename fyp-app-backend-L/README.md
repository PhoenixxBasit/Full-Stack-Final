# FYP App Backend

Welcome to the FYP App Backend repository! This repository contains the backend template/starter code for the Final Year Project (FYP) application.

## Prerequisites

Before getting started, ensure that you have the following installed on your system:

- Node.js: [Download Node.js](https://nodejs.org)

## Getting Started

To use this template/starter code, follow these steps:

1. **Fork the repository** by clicking the "Fork" button in the top-right corner of this page.
2. **Clone the forked repository** to your local machine:
   ```bash
   git clone https://github.com/your-username/fyp-app-backend.git
    ```
3. Change the current working directory to the cloned repository:
   ```bash
   cd fyp-app-backend
   ```
4. **Install the dependencies** by running the following command in the root directory of the project:
   ```bash
   npm install
   ```
5. **Start the server** by running the following command in the root directory of the project:
   ```bash
   npm run start:dev
   ```
   This command will start the Express server and automatically restart it whenever you make changes to the code.
   <br>Congratulations! You now have the FYP App Backend up and running on your local machine.

## Project Structure
The project structure is organized as follows:

- **index.js**: The entry point of the application.
- **routes/**: Contains the route definitions for different API endpoints, along with their handlers.
- **models/**: Contains the Mongoose models for interacting with the database.
- **middlewares/**: Contains custom middleware functions used in the application.
- **database/**: Contains connection file, for MongoDB connection.
- **utils/**: Contains utility/helper functions used throughout the application.

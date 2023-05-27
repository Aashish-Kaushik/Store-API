# Store API Project

This repository contains the code for the Store API project. The project aims to provide a RESTful API for managing a store's inventory and sales data. It allows users to perform various operations such as retrieving sales reports.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
Before running the project, ensure that you have the following prerequisites installed:
- Node.js (version >= 16.0.0)
- npm (Node Package Manager)
- Add your MongoDB  connection url for connecting project to your Database

## Installation
1. Clone the repository to your local machine using the following command:
   ```
   git clone https://github.com/Aashish-Kaushik/Store-API.git
   ```
2. Navigate to the project directory:
   ```
   cd store-api
   ```
3. Install the required dependencies:
   ```
   npm install
   ```

## Usage
To start the API server, use the following command:
```
npm start
```
The API server will start running on `http://localhost:3000`.

## API Endpoints
The following are the available API endpoints:

| Endpoint            | Method | Description                           |
|---------------------|--------|---------------------------------------|
| `/`                 | GET    | Get a list of all products             |                 |
| `/:id`              | GET    | Get details of a specific product      |
| `/:id`              | Patch  | Update a specific product              |
| `/:id`              | DELETE | Delete a specific product              |
| `/`                 | POST   | Create a product                 |
                 |

Please refer to the API documentation or the source code for detailed information on request and response payloads.

## Contributing
Contributions to the Store API project are welcome. To contribute, follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push the changes to your forked repository.
5. Submit a pull request describing your changes.


# synapse-select-ai-backend

A simple Express backend for Synapse Select AI.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- Docker (optional, for containerization)

### Installation

```sh
npm install
```

## Running the Server

### Development

```sh
npm start
```

### Production (with Docker)

```sh
docker build -t synapse-select-ai-backend .
docker run -p 5000:5000 --env-file .env synapse-select-ai-backend
```

## Environment Variables

Create a `.env` file in the project root.  
To allow both local development and production, include all required domains:

```
PORT=5000
CORS_ORIGIN=http://localhost:5173,http://localhost:3000,https://yourdomain.com
```

You can add more domains as needed, separated by commas.

## API Endpoints

### Save Results

- **POST** `/api/save-results`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "name": "User Name",
    "score": 85,
    "feedback": "Great job!",
    "status": "approved"
  }
  ```
- **Response:**  
  ```json
  { "message": "Evaluation saved successfully." }
  ```

### Retrieve Results

- **GET** `/api/retrieve-results`
- **Response:**  
  ```json
  [
    {
      "email": "user@example.com",
      "status": "approved",
      "feedback": "Great job!",
      "score": 85
    }
  ]
  ```

## Project Structure

```
.
├── index.js
├── routes/
│   ├── save-results.js
│   └── retrieve-results.js
├── src/
│   └── helper.js
├── data.json
├── package.json
├── Dockerfile
└── README.md
```

## License

ISC
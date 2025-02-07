# HNG Stage 0 Backend API

## Project Description

This project is a Stage 0 backend task for HNG Internship 12. It's a simple public API that returns basic information in JSON format, including my registered email, the current datetime, and the GitHub URL of this project, it is developed using TypeScript, Node.js, and Express.js.  Meets task requirements for public API, CORS handling, and documentation.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Drelcj/hng12-stage0-public-api.git
    cd hng12-stage0-public-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the project (compile TypeScript):**
    ```bash
    npm run build
    ```

4.  **Run the API:**
    ```bash
    npm start
    ```
    The API will be running at `http://localhost:3000` (or the port specified in your environment).

## API Documentation

### Endpoint

**GET /**

*   **URL:**  `https://hng12-stage0-public-kpn6zxhu9-emmanuel-chijiokes-projects.vercel.app/`

### Request

*   **Method:** `GET`
*   **Backlink:** `https://hng.tech/hire/nodejs-developers`

### Response (200 OK)

```json
{
  "email": "manuelckay@gmail.com",
  "current_datetime": "2025-02-07T23:44:22.664Z",
  "github_url": "https://github.com/Drelcj/hng12-stage0-public-api"
}
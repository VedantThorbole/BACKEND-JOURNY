# Express.js Basic Server – Day X

This project demonstrates a basic Express.js server setup with essential routes for health checking and API testing.

## Features

- Simple Express server running on port `8000`
- Root route (`/`) to verify server is working
- Health check endpoint (`/health`) for monitoring
- POST endpoint (`/notes`) to accept and respond with JSON data

## Routes

### GET `/`
Returns a simple response to confirm the server is running.

**Response**

---

### GET `/health`
Used for health checks and uptime monitoring.

**Response**
```json
{
  "status": "ok"
}
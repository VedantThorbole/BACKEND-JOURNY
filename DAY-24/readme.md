# Express Notes API

A simple backend project built with **Node.js** and **Express.js** to practice routing, middleware, and API structure.

This project demonstrates how to structure a basic Express server using separate files for routes, middleware, and data.

---

## 🚀 Features

- Express server setup
- Custom middleware (logger)
- Routing using Express Router
- Fetch all notes
- Fetch note by ID
- Basic error handling

---

## 📂 Project Structure

```
project
│
├── server.js          # Starts the server
├── app.js             # Express app configuration
│
├── routes
│   └── notes.js       # Notes routes
│
├── middlewares
│   └── logger.js      # Custom logger middleware
│
└── data
    └── notes.js       # Sample notes data
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Server runs on:

```
http://localhost:8000
```

---

## 📡 API Endpoints

### Get API status

```
GET /
```

Response:

```
Notes Ok
```

---

### Get note by ID

```
GET /:id
```

Example:

```
GET /1
```

Response:

```json
{
  "id": 1,
  "title": "Learn Express",
  "completed": false
}
```

If note not found:

```
404 Invalid note ID
```

---

## 🧠 Learning Purpose

This project was built to practice:

- Express server setup
- Middleware usage
- Route handling
- Basic backend architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JavaScript
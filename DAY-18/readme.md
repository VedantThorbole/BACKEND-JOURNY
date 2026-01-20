# Day 18 – Node.js HTTP Server, Routing & Performance Experiments

This project contains multiple Node.js scripts built using the **native `http` and `fs` modules**.  
The goal of Day-18 is to understand **routing, file-based persistence, request handling, and server performance issues** such as **CPU blocking and memory leaks**.

---

## 📂 Project Structure
DAY-18/
│
├── Notes.js
├── NotesLog.json
│
├── test.js
│
├── test2.js
├── test.json
│
└── README.md


## 🧠 Files Overview

### 1️⃣ Notes.js + NotesLog.json
A basic **Notes API** using Node.js core modules.

#### Features:
- `GET /` → Reads notes from `NotesLog.json`
- `POST /add-note` → Adds a new note to `NotesLog.json`
- Auto-generated:
  - `id` (timestamp)
  - `createdAt` (ISO date)

#### Concepts Covered:
- HTTP methods (GET, POST)
- File reading & writing (`fs`)
- JSON parsing
- Request body handling

---

### 2️⃣ test.js (Performance Testing)
Used to **demonstrate server performance problems**.

#### Scenarios:
- **Memory Leak Simulation**
  - `/leak` → Continuously allocates memory
  - `/memory` → Displays memory usage
- **CPU Blocking**
  - `/block` → Infinite loop (event loop blocking)
  - `/health` → Health check endpoint

#### Concepts Covered:
- Event loop blocking
- Memory leaks
- `process.memoryUsage()`

---

### 3️⃣ test2.js + test.json (Routing + Notes API)
An extended server with **multiple routes** and file persistence.

#### Routes:
- `GET /` → Welcome message
- `GET /notes` → Fetch notes from `test.json`
- `POST /notes` → Add new note
- `GET /health` → Health check
- `GET /block` → Blocks CPU for 5 seconds

#### Concepts Covered:
- Route handling
- Method-based routing
- Blocking vs non-blocking behavior
- Reusable file storage logic

---

## 🚀 How to Run

```bash
node Notes.js
# or
node test.js
# or
node test2.js

Server runs on:
http://localhost:8000
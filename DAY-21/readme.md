# Express Middleware Flow – Day 21

This project demonstrates how middleware works in Express.js and how the request flow passes through multiple middleware functions before reaching the route handler.

## What is Middleware?

Middleware functions in Express execute **in order**, between the request and the response cycle.  
They can:
- Log data
- Modify requests/responses
- Control access
- Pass execution using `next()`

## Middleware Flow in This Project

Request → Middleware A → Middleware B → Route Handler → Response

### Console Output Order

When visiting `/`, the console logs:

A
B
C


This confirms that middleware executes **top to bottom**, and routes run after middleware.

## Code Explanation

- Middleware A logs `"A"` and calls `next()`
- Middleware B logs `"B"` and calls `next()`
- Route handler logs `"C"` and sends the response

## Route

### GET `/`
Returns a simple response after passing through middleware.

**Response**


## Key Learnings

- Middleware execution order matters
- `next()` is required to move to the next middleware
- Routes are executed after middleware stack completes

## Tech Stack

- Node.js
- Express.js

## Notes

- This is part of a 30-day GitHub consistency challenge
- Focused on understanding Express internals

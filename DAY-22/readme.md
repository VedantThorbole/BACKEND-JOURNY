# DAY-22: Express Error Handling & Middleware Flow

This project demonstrates how middleware execution order and error handling work in an Express.js application.

## 📌 What This App Covers

- Custom middleware to track request start time
- Sequential middleware execution using `next()`
- Basic routing with `app.get()`
- Global error-handling middleware in Express
- How thrown errors are caught by error middleware

## 🧠 Key Concepts Demonstrated

### 1. Request Time Middleware
Adds a `startTime` property to the request object so execution time can be calculated later.

```js
app.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});

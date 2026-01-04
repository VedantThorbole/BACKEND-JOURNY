# Day 16 — Node.js Global Objects & Module Scope

## 📌 Objective
Understand how JavaScript runs inside the Node.js runtime and how it differs from the browser environment.

---

## 📂 Files
- `globals.js`
- `module-test.js`

---

## 🧠 Concepts Covered

### 1️⃣ Node.js Global Objects
- `global`
- `process`
- `__dirname`
- `__filename`
- `setTimeout`
- `setImmediate`

### 2️⃣ Process Object
- `process.argv`
- `process.cwd()`
- `process.pid`
- Environment awareness in Node.js

### 3️⃣ Module Scope in Node.js
- Every file in Node.js runs inside its own module
- Code is wrapped inside a function by Node
- Variables are **not global by default**

### 4️⃣ module.exports vs this
- `module.exports` is used to export values
- `this` inside a module does NOT refer to `global`
- Modules are cached and executed only once

---

## 🧪 What I Tested
- Printed global object keys
- Compared `global` vs `this`
- Checked how Node resolves modules
- Verified module caching behavior

---

## 🧠 Key Learnings
- Node.js does NOT run JavaScript in global scope like browsers
- `window` does not exist in Node.js
- Each file has its own execution context
- Node uses CommonJS module system

---

## 🚀 Outcome
I now understand how Node.js executes JavaScript internally and how module isolation works.

---

## 📍 Next Step
Move to CommonJS modules and build a small project using `require()` and `fs`.


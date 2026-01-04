const a = require('./module-test');
console.log(this);
console.log("Value of a from module-test:", a);
console.log(typeof window);
console.log(global === global.global);
console.log("process type:", typeof process);
console.log("process keys:", Object.keys(process).slice(0, 10));

console.log("dirname:", __dirname);
console.log("filename:", __filename);

console.log("global keys example:", Object.keys(global).slice(0, 5));

console.log("argv:", process.argv);
console.log("cwd:", process.cwd());
console.log("pid:", process.pid);

setTimeout(() => {
  console.log("Exiting process...");
  process.exit(0);
}, 2000);

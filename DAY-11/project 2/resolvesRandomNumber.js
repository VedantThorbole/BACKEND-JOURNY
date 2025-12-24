
function promfunc() {
     const num = Math.floor(Math.random() * 10) + 1;
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (num > 5) {
                    resolve(num);
               }
               else {
                    reject(num);
               }
          }, 1000);
     })
}

promfunc()
     .then((number) => {
          console.log("Success:", number)
          return number * 2;
     })
     .then((double) => {
          console.log("double:", number * 2)
     })
     .catch((number) => {
          console.error("failed:", number);
     })
     .finally(() => {
          console.log("done");
     });
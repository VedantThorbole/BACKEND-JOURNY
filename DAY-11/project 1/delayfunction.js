function delay(ms) {
     return new Promise((resolve) => {
          setTimeout(() => {
               resolve();
          }, ms);
     });
}

delay(1000)
     .then(() => {
          console.log("3");
          return delay(1000)
     })
     .then(() => {
          console.log("2");
          return delay(1000)
     })
     .then(() => {
          console.log("1");
          return delay(1000)
     })
     .then(() => {
          console.log("Go");
          return delay(1000)
     });

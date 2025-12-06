function createGreeter(arg) {
     return function () {
          console.log(`Hello ${arg}`);
     }
}

let greetVedant = createGreeter("Vedant");
greetVedant(); 

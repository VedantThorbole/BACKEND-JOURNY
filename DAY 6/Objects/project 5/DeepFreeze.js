const userProfile = {
     name: "Vedant",
     age: 18,
     address: {
          city: "Mumbai",
          pincode: 400001,
          geo: {
               lat: 19.0760,
               lng: 72.8777
          }
     },
     skills: ["JavaScript", "Node.js"],
     preferences: {
          theme: "dark",
          notifications: {
               email: true,
               sms: false
          }
     }
};


function deepFreeze(obj) {
     Object.freeze(obj);

     for (let key in obj) {
          if (
               typeof obj[key] === "object" &&
               obj[key] !== null &&
               !Object.isFrozen(obj[key])
          ) {
               deepFreeze(obj[key]);
          }
     }

     return obj;
}

deepFreeze(userProfile);

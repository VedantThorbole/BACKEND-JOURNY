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
     skills: ["JavaScript", "Node.js", "MongoDB"],
     settings: {
          theme: "dark",
          notifications: {
               email: true,
               sms: false
          }
     }
};
let empty = {};

for (const property in userProfile) {
     empty[property] = userProfile[property]
}

console.log(empty);

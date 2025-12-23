const users = [
     {
          id: 1,
          username: "vedant",
          email: "vedant@gmail.com",
          password: "vedant123",
          isLoggedIn: false
     },
     {
          id: 2,
          username: "sneha",
          email: "sneha@gmail.com",
          password: "sneha123",
          isLoggedIn: true
     },
     {
          id: 3,
          username: "amit",
          email: "amit@gmail.com",
          password: "amit123",
          isLoggedIn: false
     }
];


function fetchUser(value) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (Array.isArray(value) && value[0]?.username) {
                    resolve(value);
               } else {
                    reject("invalid data");
               }
          }, 3000);
     });
}

fetchUser(users)
     .then((users) => {
          users.forEach(user => console.log(user.username));
     })
     .catch(err => console.error(err));
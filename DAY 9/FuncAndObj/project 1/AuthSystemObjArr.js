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

function registretion(username, email, password) {
     for (let i = 0; i < users.length; i++) {
          if (users[i].email === email) {
               console.log("alredy exists");
               return;
          }
     }


     let obj = {};
     obj.id = users.length + 1;
     obj.username = username;
     obj.email = email;
     obj.password = password;
     obj.isLoggedIn = false;
     users.push(obj);
}
registretion("random", "random@gmail.com", "12343");
console.log(users);

function loggin(email, password) {
     for (let i = 0; i < users.length; i++) {
          if (users[i].email === email && users[i].password === password) {
               console.log("loggedIn");
               users[i].isLoggedIn = true;
               return;
          }
     }
     console.log("Email or Password is wrong");
}
loggin("vedant@gmail.com", "vedant123");
console.log(users);


function logout(email) {

     for (let i = 0; i < users.length; i++) {
          if (users[i].email === email) {
               console.log("loggedOut");
               users[i].isLoggedIn = false;
               return;
          }
     }
     console.log("email Does Not exists!");
}

logout("vedant@gmail.com");
console.log(users);


function GetLoggedIn(value) {
     const loggedIn = value.filter((value) => { return value.isLoggedIn })
     return loggedIn;
}


function DeleteUser(id) {
     id = id - 1;
     users.splice(id, id - 1);
}
DeleteUser(3);
console.log(users);
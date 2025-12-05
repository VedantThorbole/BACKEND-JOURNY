const profileA = {
     name: "Vedant",
     age: 18,
     email: "vedant@app.com",
     address: {
          city: "Mumbai",
          pincode: 400001
     },
     interests: ["coding", "anime"]
};


const profileB = {
     name: "Vedant Thorbole",
     email: "vedant@web.com",
     phone: "9999999999",
     address: {
          city: "Mumbai",
          state: "Maharashtra"
     },
     interests: ["business", "gym"]
};


function mergeProfiles(a, b) {
     const result = {};

     for (const key in a) {
          result[key] = a[key];
     }

     for (const key in b) {
          if (!result.hasOwnProperty(key)) {
               result[key] = b[key];
               continue;
          }

          if (typeof result[key] === "object" && !Array.isArray(result[key])) {
               result[key] = mergeProfiles(result[key], b[key]);
               continue;
          }

          if (Array.isArray(result[key]) && Array.isArray(b[key])) {
               result[key] = [...result[key], ...b[key]];
               continue;
          }

          result[key] = [result[key], b[key]];
     }

     return result;
}

const mergedProfile = mergeProfiles(profileA, profileB);
console.log(mergedProfile);

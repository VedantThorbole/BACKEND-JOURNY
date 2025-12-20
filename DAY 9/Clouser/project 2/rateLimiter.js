function createRateLimiter(limit, timeWindowMs) {
     let count = 0;
     let starttime = Date.now();
     return function () {

          if (Date.now() - starttime > timeWindowMs) {
               starttime = Date.now();
               count = 0
          }
          else if (count < limit) {
               console.log("allowed");
               count++;
          }
          else {
               console.log("blocked")
          }
     }
}

const apiCall = createRateLimiter(3, 5000);

apiCall(); // allowed
apiCall(); // allowed
apiCall(); // allowed
apiCall(); // blocked

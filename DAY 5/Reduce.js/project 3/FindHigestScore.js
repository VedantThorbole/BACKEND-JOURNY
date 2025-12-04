const scores = [45, 87, 12, 99, 64, 72, 58, 100, 33];

const highest = scores.reduce((accu, current) => {
     if (accu > current) {
          return accu;
     } else {
          return current;
     }
}, scores[0]);

//alternate
//const highest = scores.reduce((a, b) => a > b ? a : b);
//const highest = scores.reduce(Math.max);


console.log(highest);
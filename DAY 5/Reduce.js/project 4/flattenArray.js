const nestedArray = [
     [1, 2, 3],
     [4, 5],
     [6, 7, 8, 9],
     [10]
];

const flatt = nestedArray.reduce((acc, curr) => {
     return acc.concat(curr);
}, []);

console.log(flatt);
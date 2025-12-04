const words = [
     "apple", "banana", "apple", "orange", "banana",
     "apple", "grapes", "banana", "orange", "apple"
];

const frequency = words.reduce((acc, word) => {
     acc[word] = (acc[word] || 0) + 1;
     return acc;
}, {});

console.log(frequency);

function changeCount(value) {
     let count = value;
     function increment() {
          count++;
          console.log(count);
     } function decrement() {
          count--;
          console.log(count);
     }
     return { increment, decrement }
}

const counter = changeCount(5);

counter.increment();
counter.increment();
counter.decrement();
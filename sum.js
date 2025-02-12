let numbers = [1,2,3,4,5,6,7,8,9];
let total = 0;

numbers.forEach(num => {
    total += num;
});

let average;
average = total;

average = average / numbers.length;

console.log(`The total is: ${total}, and the average is: ${average}`);
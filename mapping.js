// Basic JS file for mapping abilities
let numbers = [3, 56, 2, 48, 5];

// Map - creates array by doing something with each item in an array

function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers);

// Filter - Create a new array by keeping items that return true
const newNumbers2 = numbers.filter((num) => {
  return num > 10;
});
console.log(newNumbers2);

// Reduce - Accumulate a value by doing something to each item in an array
const newNumbers3 = numbers.reduce((acc, num) => {
  return acc + num;
});

console.log(newNumbers3);

// Find - finds the first item that matches from and array
const newNumbers4 = numbers.find((num) => {
  return num > 10;
});

console.log(newNumbers4);

// FindIndex - Find the index of the first item that matches
const newNumbers5 = numbers.findIndex((num) => {
  return num > 10;
});

console.log(newNumbers5);
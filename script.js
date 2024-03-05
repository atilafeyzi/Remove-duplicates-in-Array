// Challege: Remove duplicates in an Array

const arr = [1, 2, 4, 9, 8, 3, 4, 5, 2, 1, 6, 8, 5, 4];

// const newSet = new Set(arr);
// const newArr = [...newSet];
// console.log(newArr);

// OR

const newArr = [...new Set(arr)];
console.log(newArr);

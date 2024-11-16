let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let flattenedArrays = arrays.reduce((a, b) => a.concat(b));
console.log(flattenedArrays);
// Expected output → [1, 2, 3, 4, 5, 6]

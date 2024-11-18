const NUMBERS = [1, 2, 3];
let product = NUMBERS.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log(product);
// Output value: 6

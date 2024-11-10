// Your code here.
// 1st Implementation
const SIZE = 8;
let chessboard = "";

for (let row = 1; row <= SIZE; row++) {
  let chessRow = "";
  for (let col = 1; col <= SIZE; col++) {
    if ((row + col) % 2 === 0) {
      chessRow += " ";
    } else {
      chessRow += "#";
    }
  }
  chessboard += chessRow + "\n";
}

console.log(chessboard);

// 2nd Implementation
// const SIZE = 8;

// for (let row = 1; row <= SIZE; row++) {
//   let chessBox = "";
//   for (let col = 1; col <= SIZE; col++) {
//     if ((row + col) % 2 === 0) {
//       chessBox += " ";
//     } else {
//       chessBox += "#";
//     }
//   }
//   console.log(chessBox);
// }

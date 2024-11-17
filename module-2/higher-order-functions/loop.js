// Your code here.
function loop(n, test, update, body) {
  for (let value = n; test(value); value = update(value)) {
    body(value);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

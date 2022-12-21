const calculator = require("./assignment4");

//test for sum()
test("Adding two numbers", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

//test for diff()
test("Subtracting two numbers", () => {
  expect(calculator.diff(2, 1)).toBe(1);
});

//test for sum()
test("Adding two numbers", () => {
  expect(calculator.product(5, 2)).toBe(10);
});

// Tushar-Gupta:4 tushar.gupta$ npm run test

// > assignment4@1.0.0 test
// > jest

//  PASS  ./assignment4.test.js
//   ✓ Adding two numbers (1 ms)
//   ✓ Subtracting two numbers
//   ✓ Adding two numbers

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.202 s

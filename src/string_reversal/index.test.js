import StringReversal from "./index.js";

// With Array
let stringManipulation1 = new StringReversal("AMRESH");
let stringManipulation2 = new StringReversal("SOWMYA");
let stringManipulation3 = new StringReversal("RAM PRAKASH");

test("Test 1 - AMRESH", () => {
  expect(stringManipulation1.reverse()).toBe("HSERMA");
});

test("Test 2 - SOWMYA", () => {
  expect(stringManipulation2.reverse()).toBe("AYMWOS");
});

test("Test 3 - RAM PRAKASH", () => {
  expect(stringManipulation3.reverse()).toBe("HSAKARP MAR");
});

// Without Array

let stringManipulation4 = new StringReversal("AMRESH");
let stringManipulation5 = new StringReversal("SOWMYA");
let stringManipulation6 = new StringReversal("RAM PRAKASH");

test("Test 4 - AMRESH", () => {
  expect(stringManipulation4.reverseWithoutArray()).toBe("HSERMA");
});

test("Test 5 - SOWMYA", () => {
  expect(stringManipulation5.reverseWithoutArray()).toBe("AYMWOS");
});

test("Test 6 - RAM PRAKASH", () => {
  expect(stringManipulation6.reverseWithoutArray()).toBe("HSAKARP MAR");
});

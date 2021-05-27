import Stack from "./index.js";

test("Stack Test 1 - Push", () => {
  let stack = new Stack(5);
  stack.push(10);
  expect(stack.peek()).toBe(10);

  stack.push(20);
  stack.push(30);
  expect(stack.peek()).toBe(30);

  stack.push(40);
  stack.push(50);

  expect(() => stack.push(60)).toThrow(/Overflow/);
});

test("Stack Test 2 - Pop", () => {
  let stack = new Stack(5);
  stack.push(10);
  stack.push(20);
  stack.push(30);

  expect(stack.pop()).toBe(30);

  stack.pop();
  stack.pop();

  expect(() => stack.pop()).toThrow(/Empty/);
});

test("Stack Test 3 - Peek", () => {
  let stack = new Stack(5);
  stack.push(10);
  stack.push(20);
  stack.push(30);
  expect(stack.peek()).toBe(30);
  stack.push(40);
  stack.push(50);
  expect(stack.peek()).toBe(50);
});

test("Stack Test 3 - isEmpty", () => {
  let stack = new Stack(5);
  expect(stack.isEmpty()).toBeTruthy();

  stack.push(10);
  stack.push(20);
  stack.push(30);
  expect(stack.isEmpty()).toBeFalsy();
});
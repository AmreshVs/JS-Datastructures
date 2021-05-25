import Array from "./index.js";

test("Array Test 1 - Length", () => {
  let newArray = new Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200);
  expect(newArray.length).toBe(20);
});


test("Array Test 2 - Push", () => {
  let newArray = new Array();
  newArray.push(10);
  newArray.push(20);
  newArray.push(30);
  expect(newArray.values[0]).toBe(10);
  expect(newArray.values[2]).toBe(30);
});

test("Array Test 3 - Pop", () => {
  let newArray = new Array(10, 20, 30);
  newArray.pop();
  expect(newArray.length).toBe(2);
});

test("Array Test 4 - Delete", () => {
  let newArray = new Array(10, 20, 30, 40);
  expect(newArray.delete(3)).toBe(40);
});

test("Array Test 5 - indexOf", () => {
  let newArray = new Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200);
  expect(newArray.indexOf(120)).toBe(11);
});
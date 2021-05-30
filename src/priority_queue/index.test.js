import PriorityQueue from "./index.js";

test("Priority Queue Test 1 - enqueue", () => {
  let queue = new PriorityQueue(6);
  queue.enqueue(6);
  queue.enqueue(3);
  queue.enqueue(1);

  expect(queue.items).toEqual({
    0: 1,
    1: 3,
    2: 6
  });

  queue.enqueue(2);
  queue.enqueue(4);
  queue.enqueue(5);

  expect(queue.items).toEqual({
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6
  });
});

test("Priority Queue Test 2 - dequeue", () => {
  let queue = new PriorityQueue(6);
  queue.enqueue(6);
  queue.enqueue(3);
  queue.enqueue(2);
  queue.enqueue(1);
  queue.enqueue(4);
  queue.enqueue(5);

  queue.dequeue();
  queue.dequeue();

  expect(queue.items).toEqual({
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: null,
    5: null
  });
});

test("Priority Queue Test 3 - peek", () => {
  let queue = new PriorityQueue(6);
  queue.enqueue(6);
  queue.enqueue(3);
  queue.enqueue(2);

  expect(queue.peek()).toBe(6);

  queue.enqueue(1);
  queue.enqueue(4);
  queue.enqueue(5);

  queue.dequeue();
  queue.dequeue();

  expect(queue.peek()).toBe(4);
});

test("Priority Queue Test 4 - isFull", () => {
  let queue = new PriorityQueue(5);
  queue.enqueue(6);
  queue.enqueue(3);
  queue.enqueue(2);
  queue.enqueue(1);
  queue.enqueue(4);

  expect(() => queue.enqueue(7)).toThrow(/full/i);
});

test("Priority Queue Test 5 - isEmpty", () => {
  let queue = new PriorityQueue(3);

  expect(queue.isEmpty()).toBeTruthy();

  queue.enqueue(6);
  queue.enqueue(3);
  queue.enqueue(2);

  expect(queue.isEmpty()).toBeFalsy();

  queue.dequeue();
  queue.dequeue();
  queue.dequeue();

  expect(() => queue.dequeue()).toThrow(/empty/i);
});
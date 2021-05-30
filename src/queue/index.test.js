import Queue from "./index.js";

test("Queue Test 1 - enqueue", () => {
  let queue = new Queue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.count).toBe(3);
  expect(queue.capacity).toBe(5);
  expect(queue.head).toBe(0);
  expect(queue.tail).toBe(3);

  expect(queue.items).toEqual({
    0: 1,
    1: 2,
    2: 3
  });
});

test("Queue Test 2 - dequeue", () => {
  let queue = new Queue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  queue.dequeue();
  queue.dequeue();

  expect(queue.count).toBe(1);
  expect(queue.capacity).toBe(5);
  expect(queue.head).toBe(2);
  expect(queue.tail).toBe(3);

  expect(queue.items).toEqual({
    0: null,
    1: null,
    2: 3
  });
});

test("Queue Test 3 - peek", () => {
  let queue = new Queue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);

  expect(queue.peek()).toBe(1);

  queue.dequeue();
  queue.dequeue();

  expect(queue.peek()).toBe(3);

  expect(queue.count).toBe(3);
  expect(queue.capacity).toBe(5);
  expect(queue.head).toBe(2);
  expect(queue.tail).toBe(0);

  expect(queue.items).toEqual({
    0: null,
    1: null,
    2: 3,
    3: 4,
    4: 5
  });
});

test("Queue Test 4 - reverse", () => {
  let queue = new Queue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);

  expect(() => queue.enqueue(6)).toThrow(/full/i);

  queue.dequeue();
  queue.dequeue();

  queue.reverse();

  expect(queue.count).toBe(3);
  expect(queue.head).toBe(0);
  expect(queue.tail).toBe(3);

  expect(queue.items).toEqual({
    0: 5,
    1: 4,
    2: 3,
    3: null,
    4: null
  });
});

test("Queue Test 5 - isEmpty", () => {
  let queue = new Queue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);

  expect(queue.isEmpty()).toBeFalsy();

  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();

  expect(() => queue.dequeue()).toThrow(/Empty/);
});

test("Queue Test 6 - isFull", () => {
  let queue = new Queue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);

  expect(queue.isFull()).toBeFalsy();

  queue.enqueue(5);

  expect(queue.isFull()).toBeTruthy();
});

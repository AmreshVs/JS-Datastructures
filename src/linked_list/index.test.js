import LinkedList from "./index.js";

test("LinkedList Test 1 - size", () => {
  let list = new LinkedList();
  list.addHead(1);
  list.addHead(2);
  expect(list.size).toBe(2);

  list.addHead(3);
  list.deleteTail();
  expect(list.size).toBe(2);

});

test("LinkedList Test 2 - addHead", () => {
  let list = new LinkedList();
  list.addHead(1);
  expect(list.head).toEqual({
    value: 1,
    next: null
  });

  list.addHead(2);
  expect(list.head).toEqual({
    value: 2,
    next: {
      value: 1,
      next: null
    }
  });
});

test("LinkedList Test 3 - addTail", () => {
  let list = new LinkedList();
  list.addTail(1);
  expect(list.head).toEqual({
    value: 1,
    next: null
  });

  list.addTail(2);
  expect(list.head).toEqual({
    value: 1,
    next: {
      value: 2,
      next: null
    }
  });

  expect(list.tail).toEqual({
    value: 2,
    next: null
  });
});

test("LinkedList Test 4 - addHead, addTail", () => {
  let list = new LinkedList();
  list.addHead(3);
  expect(list.head).toEqual({
    value: 3,
    next: null
  });

  list.addTail(4);
  expect(list.head).toEqual({
    value: 3,
    next: {
      value: 4,
      next: null
    }
  });

  expect(list.tail).toEqual({
    value: 4,
    next: null
  });
});

test("LinkedList Test 5 - deleteHead", () => {
  let list = new LinkedList();
  list.addHead(1);
  list.addHead(2);
  list.addHead(3);
  list.deleteHead();

  expect(list.head).toEqual({
    value: 2,
    next: {
      value: 1,
      next: null
    }
  });
});

test("LinkedList Test 6 - deleteTail", () => {
  let list = new LinkedList();
  list.addHead(1);
  list.addHead(2);
  list.addHead(3);
  list.deleteTail();

  expect(list.head).toEqual({
    value: 3,
    next: {
      value: 2,
      next: null
    }
  });
});

test("LinkedList Test 7 - indexOf", () => {
  let list = new LinkedList();
  list.addHead(1);
  list.addHead(2);
  list.addHead(3);

  expect(list.indexOf(3)).toBe(0);
  expect(list.indexOf(4)).toBe(-1);
});

test("LinkedList Test 8 - contains", () => {
  let list = new LinkedList();
  list.addHead(1);
  list.addHead(2);
  list.addHead(3);

  expect(list.contains(3)).toBeTruthy();
  expect(list.contains(1)).toBeTruthy();
  expect(list.contains(4)).toBeFalsy();
});

test("LinkedList Test 9 - toArray", () => {
  let list = new LinkedList();
  list.addHead(1);
  list.addHead(2);
  list.addHead(3);
  list.addTail(4);

  expect(list.toArray()).toEqual([3, 2, 1, 4]);
});

test("LinkedList Test 10 - reverse", () => {
  let list = new LinkedList();
  list.addHead(1);
  list.addHead(2);
  list.addHead(3);
  list.addTail(4);

  expect(list.toArray()).toEqual([3, 2, 1, 4]);
  list.reverse();
  expect(list.toArray()).toEqual([4, 1, 2, 3]);

  list.clear();
  expect(() => list.reverse()).toThrow();
});

test("LinkedList Test 11 - findKthFromTheEnd", () => {
  let list = new LinkedList();

  expect(() => list.findKthFromTheEnd(1)).toThrow(/empty/);

  list.addTail(1);

  expect(() => list.findKthFromTheEnd(-1)).toThrow('k cannot be less than 1');

  list.addTail(2);
  list.addTail(3);
  list.addTail(4);
  list.addTail(5);
  list.addHead(6);
  list.addHead(7);
  list.addTail(8);
  list.addTail(9);
  list.addTail(10);

  // 7,6,1,2,3,4,5,8,9,10

  expect(list.findKthFromTheEnd(1)).toBe(10);
  expect(list.findKthFromTheEnd(3)).toBe(8);
  expect(list.findKthFromTheEnd(5)).toBe(4);
  expect(list.findKthFromTheEnd(8)).toBe(1);
  expect(list.findKthFromTheEnd(10)).toBe(7);

  expect(() => list.findKthFromTheEnd(11)).toThrow(/greater/);
});

test("LinkedList Test 12 - isEmpty", () => {
  let list = new LinkedList();
  list.addHead(1);
  list.addHead(2);
  list.clear();

  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
});
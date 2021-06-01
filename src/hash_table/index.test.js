import HashTable from "./index.js";

test("HashTable Test 1 - add", () => {
  let hashTable = new HashTable(5);
  hashTable.add(1, "A");

  expect(hashTable.items).toEqual({
    1: {
      key: 1,
      value: 'A',
      next: null
    }
  });

  hashTable.add(11, "A V");
  hashTable.add(2, "S");

  expect(hashTable.items).toEqual({
    1: {
      key: 1,
      value: 'A',
      next: {
        key: 11,
        value: 'A V',
        next: null
      }
    },
    2: {
      key: 2,
      value: 'S',
      next: null
    }
  });
});

test("HashTable Test 2 - search", () => {
  let hashTable = new HashTable(5);
  hashTable.add(1, "A");
  hashTable.add(11, "A V");
  hashTable.add(2, "S");

  expect(hashTable.search(1)).toBe('A');
  expect(hashTable.search(11)).toBe('A V');
  expect(hashTable.search(22)).toBe(-1);
});

test("HashTable Test 3 - remove", () => {
  let hashTable = new HashTable(5);
  hashTable.add(1, "A");
  hashTable.add(11, "A V");
  hashTable.add(2, "S");

  expect(hashTable.remove(22)).toBe(-1);
  expect(hashTable.remove(2)).toBe('S');
});

test("HashTable Test 4 - isFull", () => {
  let hashTable = new HashTable(5);
  hashTable.add(1, "A");
  hashTable.add(1, "A V");
  hashTable.add(11, "S");
  hashTable.add(11, "S V");
  hashTable.add(111, "BB");
  hashTable.add(1111, "C");
  hashTable.add(2, "C");
  hashTable.add(2, "C N");
  hashTable.add(12, "D");
  hashTable.add(3, "S");
  hashTable.add(4, "S");
  hashTable.add(5, "S");

  expect(() => hashTable.add(6, 'H')).toThrow(/full/i);
});

test("HashTable Test 5 - isEmpty", () => {
  let hashTable = new HashTable(5);
  hashTable.add(2, "C");
  hashTable.add(3, "S");
  hashTable.add(4, "S");
  hashTable.add(5, "S");

  hashTable.remove(2);
  hashTable.remove(3);
  hashTable.remove(4);
  hashTable.remove(5);

  expect(() => hashTable.remove(6)).toThrow(/empty/i);
});
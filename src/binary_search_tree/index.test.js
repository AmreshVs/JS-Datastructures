import BinarySearchTree from './index.js';

test('BinarySearchTree Test 1 - insert', function () {
  let binaryTree = new BinarySearchTree();
  binaryTree.insert(20);
  binaryTree.insert(10);
  binaryTree.insert(30);

  expect(binaryTree.rootNode).toEqual({
    value: 20,
    leftChild: {
      value: 10,
      leftChild: null,
      rightChild: null
    },
    rightChild: {
      value: 30,
      leftChild: null,
      rightChild: null
    }
  })
});

test('BinarySearchTree Test 2 - find', function () {
  let binaryTree = new BinarySearchTree();
  binaryTree.insert(20);
  binaryTree.insert(10);
  binaryTree.insert(30);

  expect(binaryTree.find(20)).toBeTruthy();
  expect(binaryTree.find(40)).toBeFalsy();
});

let binaryTree = new BinarySearchTree();
binaryTree.insert(20);
binaryTree.insert(10);
binaryTree.insert(6);
binaryTree.insert(14);
binaryTree.insert(3);
binaryTree.insert(8);

binaryTree.insert(30);
binaryTree.insert(24);
binaryTree.insert(26);

test('BinarySearchTree Test 3 - preOrderTraversal', function () {
  expect(binaryTree.preOrderTraversal()).toBe("20, 10, 6, 3, 8, 14, 30, 24, 26");
});

test('BinarySearchTree Test 4 - inOrderTraversal', function () {
  expect(binaryTree.inOrderTraversal()).toBe("3, 6, 8, 10, 14, 20, 24, 26, 30");
});

test('BinarySearchTree Test 5 - postOrderTraversal', function () {
  expect(binaryTree.postOrderTraversal()).toBe("3, 8, 6, 14, 10, 26, 24, 30, 20");
});

test('BinarySearchTree Test 6 - levelOrderTraversal', function () {
  expect(binaryTree.levelOrderTraversal()).toBe("20, 10, 30, 6, 14, 24, 3, 8, 26");
});

test('BinarySearchTree Test 7 - nodesAtKthDistance', function () {
  expect(binaryTree.nodesAtKthDistance(3)).toBe("3, 8, 26");
  expect(binaryTree.nodesAtKthDistance(2)).toBe("6, 14, 24");
  expect(binaryTree.nodesAtKthDistance(4)).toBe("");
});

test('BinarySearchTree Test 8 - maxHeight', function () {
  let binaryTree = new BinarySearchTree();

  expect(() => binaryTree.maxHeight()).toThrow(/empty/i);

  binaryTree.insert(20);
  binaryTree.insert(10);
  binaryTree.insert(6);
  binaryTree.insert(14);
  binaryTree.insert(3);
  binaryTree.insert(8);

  binaryTree.insert(30);
  binaryTree.insert(24);
  binaryTree.insert(26);

  expect(binaryTree.maxHeight()).toBe(3);
});

test('BinarySearchTree Test 9 - minValue', function () {
  let binaryTree = new BinarySearchTree();

  expect(() => binaryTree.maxHeight()).toThrow(/empty/i);

  binaryTree.insert(20);
  binaryTree.insert(10);
  binaryTree.insert(6);
  binaryTree.insert(14);
  binaryTree.insert(3);
  binaryTree.insert(8);

  binaryTree.insert(30);
  binaryTree.insert(24);
  binaryTree.insert(26);

  expect(binaryTree.minValue()).toBe(3);
});

test('BinarySearchTree Test 10 - equals', function () {
  let binaryTree1 = new BinarySearchTree();
  binaryTree1.insert(20);
  binaryTree1.insert(10);
  binaryTree1.insert(6);
  binaryTree1.insert(14);
  binaryTree1.insert(3);
  binaryTree1.insert(8);

  let binaryTree2 = new BinarySearchTree();
  binaryTree2.insert(20);
  binaryTree2.insert(10);
  binaryTree2.insert(6);
  binaryTree2.insert(14);
  binaryTree2.insert(3);
  binaryTree2.insert(8);

  expect(binaryTree.equals(binaryTree1, binaryTree2)).toBeTruthy();

  binaryTree1.insert(30);
  binaryTree1.insert(24);
  binaryTree1.insert(26);

  binaryTree2.insert(30);
  binaryTree2.insert(24);
  binaryTree2.insert(25);

  expect(binaryTree.equals(binaryTree1, binaryTree2)).toBeFalsy();
});


test('BinarySearchTree Test 11 - isBinarySearchTree', function () {
  expect(binaryTree.isBinarySearchTree()).toBeTruthy();

  binaryTree.swapChildNodesLeftRight();

  expect(binaryTree.isBinarySearchTree()).toBeFalsy();
});

test('BinarySearchTree Test 12 - isEmpty', function () {
  let binaryTree = new BinarySearchTree();

  expect(binaryTree.isEmpty()).toBeTruthy();

  binaryTree.insert(20);

  expect(binaryTree.isEmpty()).toBeFalsy();
});
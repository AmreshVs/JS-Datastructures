export class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

export let preOrderArray = [];
export function preOrderTraversal(root) {
  if (!root) return;

  // Recursive function to print nodes in RLR
  preOrderArray.push(root.value);
  preOrderTraversal(root.leftChild);
  preOrderTraversal(root.rightChild);
}

export let inOrderArray = [];
export function inOrderTraversal(root) {
  if (!root) return;

  // Recursive function to print nodes in LRR
  inOrderTraversal(root.leftChild);
  inOrderArray.push(root.value);
  inOrderTraversal(root.rightChild);
}

export let postOrderArray = []
export function postOrderTraversal(root) {
  if (!root) return;

  // Recursive function to print nodes in LRR
  postOrderTraversal(root.leftChild);
  postOrderTraversal(root.rightChild);
  postOrderArray.push(root.value);
}

export function maxHeightOfNode(root) {
  if (root == null || isLeafNode(root)) return 0;

  // Recursive function to traverse to the leaf node and increment with 1 for each level
  return 1 + (Math.max(maxHeightOfNode(root.leftChild), maxHeightOfNode(root.rightChild)));
}

export function isLeafNode(root) {
  return root.rightChild == null && root.leftChild == null;
}

export function isBinarySearchTree(root, min, max) {
  if (root == null) return true;

  // Recursive function to check if the nodes match min and max values
  return (min < root.value && root.value < max)
    && isBinarySearchTree(root.leftChild, min, root.value)
    && isBinarySearchTree(root.rightChild, root.value, max);
}

export function minValue(root) {
  let currentNode = root;
  let previousNode = null;

  // Since this is binary search tree, Left child of root node will be min, So traversing to the last node give the min value
  while (currentNode != null) {
    previousNode = currentNode;

    currentNode = currentNode.leftChild;
  }

  return previousNode.value;
}

export function treeEqualityCheck(firstTreeRoot, secondTreeRoot) {
  if (firstTreeRoot == null && secondTreeRoot == null) {
    return true;
  }

  // Recursive function to check if both the left and right nodes of other tree matches. Returns boolean
  if (firstTreeRoot != null && secondTreeRoot != null) {
    return firstTreeRoot.value == secondTreeRoot.value
      && treeEqualityCheck(firstTreeRoot.leftChild, secondTreeRoot.leftChild)
      && treeEqualityCheck(firstTreeRoot.rightChild, secondTreeRoot.rightChild);
  }

  return false;
}

export let nodes = [];
export function nodesAtKthDistance(root, distance) {
  if (root == null) return;

  // Push the node if distance is 0
  if (distance == 0) {
    nodes.push(root.value);
    return;
  }

  nodesAtKthDistance(root.leftChild, distance - 1);
  nodesAtKthDistance(root.rightChild, distance - 1);
}

export function clearArray() {
  nodes = [];
  preOrderArray = [];
  postOrderArray = [];
  inOrderArray = [];
}
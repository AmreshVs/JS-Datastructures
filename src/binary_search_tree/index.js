import {
  Node, preOrderTraversal, preOrderArray, inOrderArray, inOrderTraversal, postOrderArray, nodes, clearArray,
  postOrderTraversal, maxHeightOfNode, isBinarySearchTree, minValue, treeEqualityCheck, nodesAtKthDistance
} from './utils.js';

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  insert(value) {
    let currentNode = this.rootNode;
    let node = new Node(value);

    // If there is no node in tree, insert it as root node
    if (!currentNode) {
      this.rootNode = node;
      return;
    }

    // If node with same value, ignore
    if (this.rootNode.value == value) {
      return;
    }

    // Traverse to the leaf node by traversing to left if value is leser and vice-versa
    while (currentNode != null) {
      if (value < currentNode.value) {
        if (!currentNode.leftChild) {
          currentNode.leftChild = node;
          break;
        }

        currentNode = currentNode.leftChild;
      }
      else {
        if (!currentNode.rightChild) {
          currentNode.rightChild = node;
          break;
        }

        currentNode = currentNode.rightChild;
      }
    }
  }

  find(value) {
    let currentNode = this.rootNode;

    // Traverse to nodes and return true if available, false if not available
    while (currentNode != null) {
      if (currentNode && (value < currentNode.value)) {
        currentNode = currentNode.leftChild;
      }
      else if (currentNode && (value > currentNode.value)) {
        currentNode = currentNode.rightChild;
      }
      else {
        return true;
      }
    }

    return false;
  }

  isBinarySearchTree() {
    return isBinarySearchTree.call(null, this.rootNode, -Infinity, +Infinity);
  }

  swapChildNodesLeftRight() {
    // This to make the tree as binary tree
    let tempNode = this.rootNode.rightChild.rightChild;
    this.rootNode.rightChild.rightChild = this.rootNode.leftChild.leftChild;
    this.rootNode.leftChild.leftChild = tempNode;
  }

  nodesAtKthDistance(distance) {
    clearArray();
    nodesAtKthDistance.call(null, this.rootNode, distance);

    return nodes.join(", ");
  }

  preOrderTraversal() {
    if (this.isEmpty()) throw new Error("Tree is empty");

    preOrderTraversal.call(null, this.rootNode);
    return preOrderArray.join(", ");
  }

  inOrderTraversal() {
    if (this.isEmpty()) throw new Error("Tree is empty");

    inOrderTraversal.call(null, this.rootNode);
    return inOrderArray.join(", ");
  }

  postOrderTraversal() {
    if (this.isEmpty()) throw new Error("Tree is empty");

    postOrderTraversal.call(null, this.rootNode);
    return postOrderArray.join(", ");
  }

  levelOrderTraversal() {
    let levelString = "";
    let height = this.maxHeight() + 1;

    for (let i = 0; i <= height; i++) {
      levelString += this.nodesAtKthDistance(i);

      if (i < height - 1) {
        levelString += ", ";
      }
    }

    return levelString;
  }

  maxHeight() {
    if (this.isEmpty()) throw new Error("Tree is empty");

    return maxHeightOfNode.call(null, this.rootNode);
  }

  minValue() {
    if (this.isEmpty()) throw new Error("Tree is empty");

    return minValue.call(null, this.rootNode);
  }

  equals(firstTree, secondTree) {
    return treeEqualityCheck.call(null, firstTree.rootNode, secondTree.rootNode);
  }

  isEmpty() {
    return this.rootNode == null;
  }
}

export default BinarySearchTree;
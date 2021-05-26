// Node class with value and next pointer
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Finds the last node of the list
function findLastNode() {
  let currentNode = this.head;
  // Iterate until next pointer becomes null
  while (currentNode != null) {
    if (currentNode.next == this.tail)
      return currentNode;
    currentNode = currentNode.next;
  }

  return null;
}

// Finds the particular node by value
// Reusing to find the index or node with indexLoopup
function findNodeByValue(value, indexLookup = false) {
  let currentNode = this.head;
  let index = 0;
  // Iterate until next pointer becomes null
  while (currentNode != null) {
    if (currentNode.value == value)
      return indexLookup ? index : currentNode;
    currentNode = currentNode.next;
    index++;
  }

  return indexLookup ? -1 : null;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addHead(value) {
    let node = new Node(value);

    // If head is empty set both head and tail to first node
    if (!this.head) {
      this.head = this.tail = node;
    }
    else {
      // Add new node at the head and point to previous head node
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  addTail(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    }
    else {
      // Point the next pointer of tail node to this new node
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  deleteHead() {
    // If empty throw an error
    if (this.isEmpty())
      throw new Error("Linked List is empty");

    // If only one node in the list, clear the head and tail
    if (this.head == this.tail) {
      this.head = this.tail = null;
      this.size = 0;
      return;
    }

    // Set the next node to variable and delete the head, then repoint the head to the variable
    let newHeadNode = this.head.next;
    delete this.head;
    this.head = newHeadNode;
    this.size--;
  }

  deleteTail() {
    if (this.isEmpty())
      throw new Error("Linked List is empty");

    if (this.head == this.tail) {
      this.head = this.tail = null;
      this.size = 0;
      return;
    }

    // Find the last node by traversing from first and set the next pointer to null
    this.tail = findLastNode.call(this);
    this.tail.next = null;
    this.size--;
  }

  contains(value) {
    // Assumes if indexOf function returns truthy, then value exists 
    return this.indexOf(value) != -1;
  }

  indexOf(value) {
    // Find the node with value by iterating over the list
    return findNodeByValue.call(this, value, true);
  }

  toArray() {
    let listToArray = [];
    let currentNode = this.head;
    let index = 0;

    // Push values to the array by iterating through list
    while (currentNode != null) {
      listToArray[index++] = currentNode.value;
      currentNode = currentNode.next;
    }

    return listToArray;
  }

  reverse() {
    if (this.isEmpty())
      throw new Error("Linked List is empty");

    // previousNode - Set the previous pointer to head
    // currentNode - Set current pointer to next node of head
    // nextNode - Set next pointer to next of current node to keep track of next node before current pointer is replaced

    let previousNode = this.head;
    let currentNode = this.head.next;

    // Change pointer to link from P -> C to P <- C until C becomes null
    while (currentNode != null) {
      let nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    // Set the head node to tail and clear the next pointer
    this.tail = this.head;
    this.tail.next = null;

    // Finally set the reversed nodes back to head
    this.head = previousNode;

  }

  findKthFromTheEnd(k) {
    if (this.isEmpty())
      throw new Error("Linked List is empty");

    // Throw an error if kth value is falsy
    if (k <= 0)
      throw new Error("k cannot be less than 1");

    // Initialize both pointers to head 
    let firstPointer = this.head;
    let secondPointer = this.head;

    let secondPointerIndex = 0;
    while (secondPointer != null) {
      // Only move the secondPointer until k-1 node from head to position the pointers properly
      if (secondPointerIndex != k - 1) {
        secondPointer = secondPointer.next;
        secondPointerIndex++;
        if (secondPointer == null) {
          throw new Error("k is greater than the actual list size");
        }
      }
      else {
        // Move both the pointers until the second pointer reaches the end
        // If second pointer has no next node then first pointer is the kth node from end
        if (secondPointer.next != null) {
          firstPointer = firstPointer.next;
        }
        secondPointer = secondPointer.next;
      }
    }

    return firstPointer.value;
  }

  size() {
    // Return the size affected by various operations
    return this.size;
  }

  clear() {
    // Clear head and tail
    this.head = this.tail = null;
  }

  isEmpty() {
    // Check if list is empty
    return this.head == null;
  }
}

export default LinkedList;
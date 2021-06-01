class LinkedList {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

function generateHashKey(key) {
  // Finding the reminder to find a place within the capacity
  return key % this.capacity;
}

class HashTable {
  constructor(capacity) {
    this.capacity = capacity || -1;
    this.count = 0;
    this.items = {}
  }

  add(key, value) {
    if (this.isFull()) throw new Error("Hash Table is full");

    let node = new LinkedList(key, value);
    let hashKey = generateHashKey.call(this, key);
    let currentNode = this.items[hashKey];

    // Insert the node if there is no value inside it
    if (!currentNode) {
      this.items[hashKey] = node;
      this.count++;
    }
    else {
      // Set current node to next pointer until it reaches the last node
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }

      // If same key found, then replace the value with new value
      if (currentNode.key == key) {
        currentNode.value = value;
        return;
      }

      // Set the node to the last node in LinkedList
      currentNode.next = node;
    }
  }

  search(key) {
    let hashKey = generateHashKey.call(this, key);
    let currentNode = this.items[hashKey];

    // Return node value if found, return -1 if not
    while (currentNode != null) {
      if (currentNode.key == key) {
        return currentNode.value;
      }
      else {
        currentNode = currentNode.next;
      }
    }

    return -1;
  }

  remove(key) {
    if (this.isEmpty()) throw new Error("Hash Table is empty");

    let hashKey = generateHashKey.call(this, key);
    let currentNode = this.items[hashKey];
    let previousNode = null;

    // Remove the link to current node if key matches and return the removed value, return -1 if no key found
    while (currentNode != null) {
      previousNode = currentNode;

      if (currentNode.key == key) {
        previousNode.next = null;
        this.count--;
        return currentNode.value;
      }
      else {
        currentNode = currentNode.next;
      }
    }

    return -1;
  }

  isFull() {
    return this.count == this.capacity;
  }

  isEmpty() {
    return !this.count;
  }
}

export default HashTable;
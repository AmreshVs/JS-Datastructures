class Queue {
  constructor(capacity) {
    // Initializing the values
    this.capacity = capacity || -1;
    this.count = 0;
    this.head = 0;
    this.tail = 0;
    this.items = {};
  }

  enqueue(item) {
    if (this.isFull()) throw new Error("Queue Full");

    // Add item at the end and increment the count by 1
    this.items[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
  }

  dequeue() {
    if (!this.count) throw new Error("Queue Empty");

    const selectedValue = this.items[this.head];

    this.items[this.head] = null;
    // Taking modulus of capacity to change the pointers in circular
    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return selectedValue;
  }

  peek() {
    if (!this.count) throw new Error("Queue Empty");

    // Return the top element from stack
    return this.items[this.head];
  }

  reverse() {
    let reversedQueue = {};
    let headSet = false;
    let tailSet = false;

    // Reverse by looping from end
    for (let i = this.capacity - 1; i >= 0; i--) {
      let reversedIndex = (this.capacity - 1) - i;

      reversedQueue[reversedIndex] = this.items[i];

      // Set the tail to first empty node, So when enqueue the item will be added starting from the empty space
      if (this.items[i] == null && !tailSet) {
        this.tail = this.capacity - (this.capacity - this.count);
        tailSet = true;
      }

      // Set the head to first non-empty space
      if (this.items[i] != null && !headSet) {
        this.head = reversedIndex;
        headSet = true;
      }
    }

    this.items = reversedQueue;
  }

  isEmpty() {
    return this.count == 0;
  }

  isFull() {
    return this.count == this.capacity;
  }
}

export default Queue;
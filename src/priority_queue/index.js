function shiftItemsToInsert(item) {
  // Just shift the items if item is lesser
  let i;
  for (i = this.count - 1; i >= 0; i--) {
    if (item < this.items[i]) {
      this.items[i + 1] = this.items[i];
    }
    else {
      break;
    }
  }

  return i + 1;
}

class PriorityQueue {

  constructor(capacity) {
    // Initializing the values
    this.capacity = capacity || -1;
    this.count = 0;
    this.items = {};
  }

  enqueue(item) {

    if (this.isFull()) throw new Error("Queue Full");

    let indexToInsert = shiftItemsToInsert.call(this, item);

    this.items[indexToInsert] = item;
    this.count++;
  }

  dequeue() {
    if (!this.count) throw new Error("Queue Empty");

    const selectedValue = this.items[--this.count];

    // Remove the greatest number
    this.items[this.count] = null;
    return selectedValue;
  }

  peek() {
    if (!this.count) throw new Error("Queue Empty");

    // Return the top element from stack
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count == 0;
  }

  isFull() {
    return this.count == this.capacity;
  }
}

export default PriorityQueue;
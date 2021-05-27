class Stack {

  constructor(stackSize) {
    // Initializing the values
    this.length = 0;
    this.size = stackSize || -1;
    this.values = {};
  }

  push(item) {
    if (this.size == this.length) throw new Error("Stack Overflow");
    // Add item and increment the length by 1
    this.values[this.length++] = item;
  }

  pop() {
    if (!this.length) throw new Error("Stack Empty");

    // Decrementing the length and deleting the last item
    const selectedValue = this.values[--this.length];
    delete this.values[this.length];
    return selectedValue;
  }

  peek() {
    if (!this.length) throw new Error("Stack Empty");

    // Return the top element from stack
    return this.values[this.length - 1];
  }

  isEmpty() {
    return this.length == 0;
  }
}

export default Stack;
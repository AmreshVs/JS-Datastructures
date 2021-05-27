function shiftLeft(index) {
  // If an item to be deleted, the current value is deleted and then the rest of the values are shifted left
  for (let i = index; i < this.length; i++) {
    this.values[i] = this.values[i + 1];
  }
}

class Array {

  constructor(...initValues) {
    // Initializing the values
    this.length = initValues ? initValues.length : 0;
    this.values = initValues ? { ...initValues } : {};
  }

  push(item) {
    // Add item and increment the length by 1
    this.values[this.length++] = item;
  }

  pop() {
    if (!this.length) throw new Error("Array Empty");

    // Decrementing the length and deleting the last item
    const selectedValue = this.values[--this.length];
    delete this.values[this.length];
    return selectedValue;
  }

  delete(index) {
    // Delete and return the selected value if the index preset, -1 if index not present
    const selectedValue = this.values[index];
    if (selectedValue !== undefined) {
      // Private function to hide the functionalities
      shiftLeft.call(this, index);

      // Deleting the last element and decrementing the length
      delete this.values[--this.length];

      return selectedValue;
    }

    return -1;
  }

  indexOf(value) {
    // Return the index if value matches, -1 if not matches
    for (let i = 0; i < this.length; i++) {
      if (this.values[i] == value)
        return i
    }

    return -1;
  }

  length() {
    return this.length;
  }
}

export default Array;
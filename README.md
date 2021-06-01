# Javascript Data Structures with Jest Library test cases - Created from scratch

- **[Array](#array)**

- **[Stack](#stack)**

- **[Queue](#queue)**

- **[Priority Queue](#priority-queue)**

- **[Linked List](#linked-list)**

- **[Hash Table](#hash-table)**

## Implementation Details

### **Array :**

Arrays follows Last In First Out (LIFO) data structure, So last item is deleted first. The following methods are implemented.

| Method         | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| push(item)     | Item to be pushed, it can be of any type                                              |
| pop()          | Remove item from top                                                                  |
| delete(index)  | Index at which value to be deleted and the cells will be shifted left to fill the gap |
| indexOf(value) | Returns the index if value is found, -1 is not found                                  |
| length         | Returns the length of the array                                                       |

### **Stack :**

Stacks follow Last In First Out (LIFO) data structure. The difference between array and stack is array items can be deleted from any index, But in stack items can only be popped from top of the stack, So items are deleted from head. The following methods are implemented.

| Method      | Description                                       |
| ----------- | ------------------------------------------------- |
| push(value) | Item to be pushed                                 |
| pop()       | Items are deleted from first                      |
| peek()      | Returns the first head item                       |
| isEmpty()   | Boolean that returns true if empty and vice-versa |

### **Queue :**

Queue follows First In First Out (FIFO) data structure. It has two pointers Head and Tail. Head to add item and Tail to remove the Item. Items that comes first are deleted first. The following methods are implemented.

| Method         | Description                                       |
| -------------- | ------------------------------------------------- |
| enqueue(value) | Item to be added at the head                      |
| dequeue()      | Item to be added at the tail                      |
| peek()         | Returns the first head item                       |
| reverse()      | Reverses the items in queue                       |
| isEmpty()      | Boolean that returns true if empty and vice-versa |
| isFull()       | Boolean that returns true if full and vice-versa  |

### **Priority Queue :**

The difference between queue and priority queue is that, priority queue sorts the items based on the value and the least valued item will be deleted first. The following methods are implemented.

| Method         | Description                                       |
| -------------- | ------------------------------------------------- |
| enqueue(value) | Item to be added at the head                      |
| dequeue()      | Item with the least priority is deleted first     |
| peek()         | Returns the first head item                       |
| isEmpty()      | Boolean that returns true if empty and vice-versa |
| isFull()       | Boolean that returns true if full and vice-versa  |

### **Linked List :**

Linked Lists are group of nodes that contains the value and address data and each node refers to the next node. There are two pointers Head and Tail. Head points to all the nodes in group, Tail only points to the last node. Items can be added at both head and tail. The following methods are implemented.

| Method               | Description                                                                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| addHead(value)       | Add at the head if no previous value present. If previous value found then value is inserted next to previous node and it will hold the address |
| addTail(value)       | Add value at the tail and previous node will hold the address of this new node                                                                  |
| deleteHead()         | Remove the last node from head                                                                                                                  |
| deleteTail()         | Remove the last node and set the previous node to last                                                                                          |
| contains(value)      | Checks if the value if present, returns boolean                                                                                                 |
| indexOf(value)       | Returns the index of the value if found, -1 if not found                                                                                        |
| toArray()            | Returns the nodes in array                                                                                                                      |
| reverse()            | Reverse the nodes in linked list, The pointer references will be reversed. Head node becomes tail and Vice-Versa                                |
| findKthFromTheEnd(k) | Find and return the value of k from the end                                                                                                     |
| size()               | Returns the size of Linked List                                                                                                                 |
| clear()              | Clear the nodes                                                                                                                                 |
| isEmpty()            | Boolean that returns true if empty and vice-versa                                                                                               |

### **Hash Table :**

Hash tables are most useful and powerfull data structure which holds the key, value pairs. So Searching is so fast. There are different implementations for hash table, Here Hash Table with Chaining is implemented. Each key is hashed to fit into the capacity of the table. If Hash keys are same then the values are chained in a Linked List. The following methods are implemented

| Method          | Description                                       |
| --------------- | ------------------------------------------------- |
| add(key, value) | Add value to the hashed key                       |
| search(key)     | Returns the value based on the key                |
| remove(key)     | Removes and returns the value                     |
| isEmpty()       | Boolean that returns true if empty and vice-versa |
| isFull()        | Boolean that returns true if full and vice-versa  |

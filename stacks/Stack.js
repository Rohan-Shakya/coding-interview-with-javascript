/*
  ====================== Singly Linked List ======================
    * Stacks are a LIFO data structure where the last value in is
        always the first one out
    * They are not a built in data structure in Javascript,
        but are relatively simple to implement
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /*
    =================== Push Pseudo Code ==================
    * The function should accept a value
    * Create a new Node with that value
    * If there are no nodes in the stack, set the first and last
        property to be the newly created node
    * If there is at least one node, create a variable that stores
        the current first property on the stack
    * Reset the first property to be the newly created node
    * Set the next property on the node to be the previously
        created variable
    * Increment the size of the stack by 1
    * Return the size/length
  */
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  /*
    =================== Pop Pseudo Code ==================
    * If there are no nodes in the stack, return null
    * Create a temporary variable to store the first property on the stack
    * If there is only 1 node, set the first and last property to be null
    * If there is more than one node, set the first property to be the 
        next property on the current first
    * Decrement the size by 1
    * Return the value of the node removed
  */
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

/*
  ============= Big O of Stacks ======
  * Insertion ---> O(1)
  * Removal -----> O(1)
  * Searching ---> O(N)
  * Access ------> O(N)
*/

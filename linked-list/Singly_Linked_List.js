class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /*
    =================== Pushing Pseudo Code ==================
    * This function should accept a value
    * Create a new node using the value passed to the function
    * If there is no head property on the list, set the head and 
        tail to be the newly created node
    * Otherwise set the next property on the tail to be the new
        node and set the tail property on the list to be the 
        newly created node
    * Increment the length by one
    * Return the linked list
  */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /*
    =================== Popping Pseudo Code ==================
    * If there are no nodes in the list, return undefined
    * Loop through the list until you reach the tail
    * Set the next property of the 2nd to last node to be null
    * Set the tail to be the 2nd to last node
    * Decrement the length of the list by 1
    * Return the value of the node removed
  */
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /*
    =================== Shift Pseudo Code ==================
    * If there are no nodes, return undefined
    * Store the current head property in a variable
    * Set the head property to be the current head's next property
    * Decrement the length by 1
    * Return the value of the node removed
  */
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  /*
    =================== Shift Pseudo Code ==================
    * This function should accept a value
    * Create a new node using the value passed to the function
    * If there is no head property on the list,
      set the head and tail to be the newly created node
    * Otherwise set the newly created node's next property to be the 
      current head property on the list
    * Set the head property on the list to be that newly created node
    * Increment the length of the list by 1
    * Return the linked list
  */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /*
    =================== Get Pseudo Code ==================
    * This function should accept an index
    * If the index is less than zero or greater than or
      equal to the length of the list, return null
    * Loop through the list until you reach the index and return
      the node at the specific index
  */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  /*
    =================== Set Pseudo Code ==================
    * This function should accept a value and an index
    * Use your get function to find the specific node
    * If the node is found, set the value of that node to be the 
      value passed to the function and return true
  */
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

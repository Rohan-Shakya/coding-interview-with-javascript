/*
  ====================== Singly Linked List ======================
  * Singly Linked Lists are an excellent alternative to arrays
    when insertion and deletion at the beginning are frequently required
  * Arrays contain a built in index whereas Linked Lists do not
  * The idea of a list data structure that consists of nodes is the foundation for
    other data structures like Stacks and Queues
*/

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

  /*
    =================== Insert Pseudo Code ==================
    * If the index is less than zero or greater than the length,
      return false
    * If the index is the same as the length, 
      push a new node to the end of the list
    * If the index is 0, unshift a new node to the start of the list
    * Otherwise, using the get method, access the node at the index - 1
    * Set the next property on that node to be the new node
    * Set the next property on the new node to be the previous next
    * Increment the length
    * Return true
  */
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  /*
    =================== Remove Pseudo Code ==================
    * If the index is less than zero or greater than the length,
      return undefined
    * If the index is the same as the length - 1, pop
    * If the index is 0, shift
    * Otherwise, using the get method, access the node at the index - 1
    * Set the next property on that node to be the next of the next node
    * Decrement the length
    * Return the value of the node removed
  */
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  /*
    =================== Reverse Pseudo Code ==================
    * Swap the head and tail
    * Create a variable called next
    * Create a variable called prev
    * Create a variable called node and initialize it to the head property
    * Loop though the list
    * Set next to be the next property on whatever node is
    * Set the next property on the node to be whatever pre is
    * Set prev to be the value of the node variable
    * Set the node variable to be the value of the next variable
  */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

/*
  ============= Big O of Singly Linked List ======
  * Insertion ---> O(1)
  * Removal -----> It depends... O(1) or o(N)
  * Searching ---> O(N)
  * Access ------> O(N)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.let = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  /*
        =================== BFS Pseudo Code ==================
        * Create a queue (this can be an array) and a variable to 
            stores the values of nodes visited
        * Place the root node in the queue
        * Loop as long as there is anything in the queue
            * Dequeue a node from the queue and push the value of 
                node into the variable that stores the nodes
            * If there is a left property on the node dequeued
                - add it to the queue
            * If there is a right property on the node dequeued
                - add it to the queue
        * Return the variable that stores the values
    */

  BFS() {
    let node = this.root,
      data = [],
      queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

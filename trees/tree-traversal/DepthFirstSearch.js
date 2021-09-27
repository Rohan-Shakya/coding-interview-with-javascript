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

  /*
        =================== DFS - PreOrder Pseudo Code ==================
        * Create a variable to store the values of nodes visited
        * Store the root of the BST in a variable called current
        * Write a helper function which accepts a node
            - Push the value of the node to the variable that stores the values
            - If the node has a left property, call the helper function with 
                the left property on the node
            - If the node has a right property, call the helper function with
                the right property on the node
        * Invoke the helper function with the current variable 
        * Return the array of values
    */
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    const traverse = (node) => {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }

  /*
        =================== DFS - PostOrder Pseudo Code ==================
        * Create a variable to store the values of nodes visited
        * Store the root of the BST in a variable called current
        * Write a helper function which accepts a node
            - If the node has a left property, call the helper function
                with the left property on the node
            - If the node has right property, call the helper function
                with the right property on the node
            - Push the value of the node to the variable that stores the values
            - Invoke the helper function with the current variable
        * Return the array of values
    */
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(current);
    return data;
  }

  /*
        =================== DFS - InOrder Pseudo Code ==================
        * Create a variable to store the values of nodes visited
        * Store the root of the BST in a variable called current
        * Write a helper function which accepts a node
            - If the node has a left property, call the helper function
                with the left property on the node
            - Push the value of the node to the variable that stores the values
            - If the node has right property, call the helper function
                with the right property on the node
        - Invoke the helper function with the current variable
        * Return the array of values
    */
  DFSInOrder() {
    let data = [];
    let current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }
}

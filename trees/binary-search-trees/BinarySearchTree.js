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

  /*
    =================== Inserting Node Pseudo Code ==================
    * Create a new node
    * Starting at the root
        * Check if there is a root, if not - the root now becomes that new node!
        * If there is a root, check if the value of the new node is greater
            than the value of the root
        * If it is greater
            * Check to see if there is a node to the right
                * If there is, move to that node and repeat these steps
                * If there is not, add that node as the right property
        * If it is less
            * Check to see if there is a node to the left
                * If there is, move to that node and repeat these steps
                * If there is not, add that node as the left property
  */
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

  /*
    =================== Finding Node Pseudo Code ==================
    * Starting at the root
        * Check if there is a root, if not - we're done searching!
        * If there is a root, check if the value of the new node is the value
            we are looking for. If we found it, we're done!
        * If not, check to see if the value is greater than or less
            than the value of the root
        * If it is greater
            * Check to see if there is a node to the right
             * If there is, move to that node and repeat these steps
             * If there is not, we're done searching!
        * If it is less
            * Check to see if there is a node to the left
                * If there is, move to that node and repeat these steps
                * If there is not, we're done searching!
  */
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
}

/*
  ============= Big O of BST ======
  * Insertion ---> O(log n)
  * Searching ---> O(log n)
*/

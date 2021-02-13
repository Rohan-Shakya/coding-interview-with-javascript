/**
 * Initialize your data structure here.
 */
class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  enqueue(val) {
    this.in.push(val);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */

  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out.pop();
  }

  /**
   * Get the front element.
   * @return {number}
   */

  peek() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out[this.out.length - 1];
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */

  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}

/*
 Time Complexity:
 Enqueue: O(1)
 Dequeue: O(n)
 Peek: O(n)
 Empty: O(1)
 */

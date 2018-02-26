// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack')

class Queue {
  constructor() {
    this.data = new Stack()
  }

  add(item) {
    const reverted = new Stack()

    while (this.data.peek()) {
      reverted.push(this.data.pop())
    }

    reverted.push(item)

    while (reverted.peek()) {
      this.data.push(reverted.pop())
    }
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data.peek()
  }
}

module.exports = Queue;

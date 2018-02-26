// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data
    this.next = node
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this._length = 0
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
    this._length++
  }

  size() {
    return this._length
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head

    if (!node) return null


    while (node.next) {
      node = node.next
    }

    return node
  }

  clear() {
    this.head = null
    this._length = 0
  }

  removeFirst() {
    if (!this.head) return
    this.head = this.head.next
    this._length--
  }

  removeLast() {
    let prev = this.head

    if (!prev) return

    if (!prev.next) {
      this._length--
      this.head = null
      return
    }

    let node = prev.next
    while (node.next) {
      prev = node
      node = node.next
    }

    prev.next = null
    this._length--
  }

  insertLast(item) {
    const last = this.getLast()
    if (last) {
     last.next = new Node(item)
    } else {
     this.head = new Node(item)
    }
    this._length++
  }

  getAt(index = 0) {
    let item = null
    let node = this.head
    let counter = 0

    while (node) {
      if (counter === index) {
        item = node
        break
      }
      node = node.next
      counter++
    }

    return item
  }

  removeAt(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next
      this._length--
      return
    }

    let current = this.getAt(index)

    if (!current) return

    let prev = this.getAt(index - 1)
    prev.next = current.next
    this._length--
  }

  insertAt(item, index) {
    if (index === 0) {
      this.insertFirst(item)
      return
    }

    let current = this.getAt(index)
    if (!current) {
      this.getLast().next = new Node(item)
      this._length++
      return
    }

    const prev = this.getAt(index - 1)
    prev.next = new Node(item, current)

    this._length++
  }

  forEach(cb) {
    let node = this.head
    let counter = 0

    while (node) {
      cb(node, counter)
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };

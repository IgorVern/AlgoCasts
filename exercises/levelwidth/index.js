// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const STOP = 'stop'
  const counter = [0]
  const nodes = [root, STOP]

  while (nodes.length > 1) {
    const node = nodes.shift()

    if (node === STOP) {
      nodes.push(node)
      counter.push(0)
    } else {
      nodes.push(...node.children)
      counter[counter.length - 1]++
    }
  }

  return counter
}

module.exports = levelWidth;

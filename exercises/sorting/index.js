// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

function selectionSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let indexOfMin = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }

    if (indexOfMin !== i) {
      const temp = arr[i]
      arr[i] = arr[indexOfMin]
      arr[indexOfMin] = temp
    }
  }

  return arr
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const centerIndex = Math.ceil(arr.length / 2)

  return merge(mergeSort(arr.splice(0, centerIndex)), mergeSort(arr))
}

function merge(left, right) {
  const merged = []
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      merged.push(left.shift())
    } else {
      merged.push(right.shift())
    }
  }

  return merged.concat(left, right)
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

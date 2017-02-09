let numbers = [5, 1, 4, 2, 8];

function quickSort(arr) {
  let pivot = arr[0];
  let left = [];
  let right = [];
  if(arr.length === 0) {
    return [];
  }
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
quickSort(numbers);

module.exports = quickSort;